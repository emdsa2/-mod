import log from "@mod-utils/log";
import ModManager from "../ModManager";
import { checkItemCustomed, getCustomAssets, getCustomGroups } from "./customStash";
import { getCustomMirrorGroups, resolvePreimage } from "./mirrorGroup";

/**
 * 按语言解析翻译条目
 * @param {Translation.Entry} entryItem
 */
export function resolveEntry(entryItem) {
    return entryItem[TranslationLanguage] || entryItem["CN"];
}

/**
 * 按语言解析翻译条目
 * @param {Translation.Entry} entryItem
 * @param {string} fallback
 */
export function solidfyEntry(entryItem, fallback) {
    if (!entryItem) return { CN: fallback };
    if (entryItem["CN"]) return entryItem;
    return { ...entryItem, CN: fallback };
}

/**
 * 从一大堆条目里面挑出来需要的！
 * @param {CustomGroupName} group
 * @param {string} asset
 * @param {Translation.GroupedEntries} groupedEntry
 * @returns {Translation.Entry}
 */
export function pickEntry(group, asset, groupedEntry) {
    return Object.entries(groupedEntry)
        .map(([lang, entries]) => [lang, entries[group]?.[asset]])
        .reduce((prev, /** @type {[ ServerChatRoomLanguage, string | undefined ]} */ cv) => {
            if (cv[1]) prev[cv[0]] = cv[1];
            return prev;
        }, /** @type {Translation.Entry} */ ({}));
}

/** @type {Translation.GroupedEntries} */
const customAssetEntries = {};

/** @type { Translation.CustomRecord<CustomGroupName, string> } */
const customGroupEntries = {};

export class Entries {
    /**
     * 设置物品描述(显示名称)
     * @param { CustomGroupName } group
     * @param { string } asset
     * @param { Translation.Entry} entries
     */
    static setAsset(group, asset, entries) {
        Object.entries(entries).forEach(([lang, desc]) => {
            const language = /** @type {ServerChatRoomLanguage} */ (lang);
            if (!customAssetEntries[language]) customAssetEntries[language] = {};
            if (!customAssetEntries[language][group]) customAssetEntries[language][group] = {};
            customAssetEntries[language][group][asset] = desc;
        });
    }

    /**
     * 设置身体组描述(显示名称)
     * @param { CustomGroupName } group
     * @param { Translation.Entry } entries
     */
    static setGroup(group, entries) {
        Object.entries(entries).forEach(([lang, desc]) => {
            const language = /** @type {ServerChatRoomLanguage} */ (lang);
            if (!customGroupEntries[language]) customGroupEntries[language] = {};
            customGroupEntries[language][group] = desc;
        });
    }
}

/**
 *
 * @param {CustomGroupName} group
 * @param {string} asset
 * @returns {string}
 */
function assetEntryString(group, asset) {
    return (
        customAssetEntries[TranslationLanguage]?.[group]?.[asset] ||
        customAssetEntries["CN"]?.[group]?.[asset] ||
        asset.replace(/_.*?Luzi$/, "")
    );
}

/**
 * @param {CustomGroupName} group
 * @returns {string}
 */
function groupEntryString(group) {
    return (
        customGroupEntries[TranslationLanguage]?.[group] ||
        customGroupEntries["CN"]?.[group] ||
        group.replace(/_.*?Luzi$/, "")
    );
}

/**
 * @param { { Description: string} } obj
 * @param {string} desc
 */
function assignDesc(obj, desc) {
    /** @type { { Description : string } } */ (obj).Description = desc;
}

function loadAssetEntries() {
    // 自定义组描述
    Object.values(getCustomGroups()).forEach((group) => assignDesc(group, groupEntryString(group.Name)));

    // 自定义物品描述
    Object.values(getCustomAssets())
        .map((asset) => Object.values(asset))
        .flat()
        .forEach((asset) => assignDesc(asset, assetEntryString(asset.Group.Name, asset.Name)));

    // 镜像组描述
    Object.entries(getCustomAssets())
        .map(([group, asset]) => ({
            group: resolvePreimage(/**@type {CustomGroupName} */ (group)),
            asset,
        }))
        .filter(({ group }) => !!group)
        .map(({ group, asset }) =>
            Object.entries(asset).map(([assetName, asset]) => ({
                asset,
                fromAsset: AssetGet("Female3DCG", /** @type {AssetGroupName} */ (group), assetName),
            }))
        )
        .flat()
        .filter(({ fromAsset }) => !!fromAsset)
        .forEach(({ asset, fromAsset }) => assignDesc(asset, fromAsset.Description));

    /** @type {TextCache | undefined} */
    const assetStrings = TextAllScreenCache.get(AssetStringsPath);
    const loadFunc = (tcache) => {
        const cmg = getCustomMirrorGroups();
        const doneSet = new Set();
        const names = AssetGroup.map((group) => group.Name).sort((a, b) => b.length - a.length);
        Object.entries(tcache.cache).forEach(([key, value]) => {
            if (doneSet.has(key)) return;
            const n = names.find((name) => key.startsWith(name));
            if (!n) return;
            doneSet.add(key);
            const mirrors = cmg[n];
            if (!mirrors) return;
            const tail = key.slice(n.length);

            mirrors.forEach((mirror) => {
                const mirrorKey = mirror + tail;
                if (!tcache.cache[mirrorKey]) tcache.cache[mirrorKey] = value;
            });
        });
    };
    if (assetStrings) {
        if (!assetStrings.loaded) {
            assetStrings.rebuildListeners.push((tcache) => loadFunc(tcache));
        } else {
            loadFunc(assetStrings);
        }
    }
}

export function setupEntries() {
    // bc有三个加载阶段
    // 阶段1: 加载asset
    // 阶段2: 加载csv描述
    // 阶段3: 加载翻译（不一定进行）
    // 为了保证翻译的正确性，我们需要在阶段2后和阶段3后的时候重新加载描述

    const bloatedText = {
        RU: "Раздутый",
        CN: "多",
        TW: "多",
        DE: "Aufgebläht",
    };
    const assetCache = TextAllScreenCache.get(AssetStringsPath);

    if (assetCache && assetCache.loaded && assetCache.cache["Bloated"] === bloatedText[TranslationLanguage]) {
        // 已经加载，直接加载描述
        loadAssetEntries();
    } else {
        // 加载csv描述
        ModManager.progressiveHook("AssetBuildDescription").next().inject(loadAssetEntries);
        // 加载翻译阶段
        ModManager.progressiveHook("TranslationAssetProcess").next().inject(loadAssetEntries);
    }

    const ActionFunc = ModManager.randomGlobalFunction(
        "CustomDialogInject",
        (dictionary, _, __, PrevItem, NextItem) => {
            [
                ["PrevAsset", PrevItem],
                ["NextAsset", NextItem],
            ]
                .map(([key, value]) => [key, value, checkItemCustomed(value)])
                .forEach(([key, _, promise]) => promise.then((item) => dictionary.text(key, item.Asset.Description)));
        }
    );

    ModManager.patchFunction("ChatRoomPublishAction", {
        "ChatRoomCharacterItemUpdate(C);": `${ActionFunc}(dictionary, C, Action, PrevItem, NextItem);\nChatRoomCharacterItemUpdate(C);`,
    });
}
