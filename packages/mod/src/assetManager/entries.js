import ModManager from "../modManager";
import { getCustomAssets, getCustomGroups } from "./customStash";

/**
 * 按语言解析翻译条目
 * @param {Translation.Entry} entryItem
 */
export function resolveEntry(entryItem) {
    return entryItem[TranslationLanguage] || entryItem["CN"];
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

export function setupEntries() {
    ModManager.hookFunction("TranslationAsset", 1, (args, next) => {
        next(args);

        Object.entries(getCustomGroups()).forEach(([groupName, group]) => {
            /** @type {Mutable<AssetGroup>} */ (group).Description = groupEntryString(group.Name);
        });

        Object.entries(getCustomAssets()).forEach(([group, assets]) => {
            Object.entries(assets).forEach(([name, asset]) => {
                /** @type {Mutable<Asset>} */ (asset).Description = assetEntryString(asset.Group.Name, asset.Name);
            });
        });
    });
}
