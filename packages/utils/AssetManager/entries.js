import ModManager from "../ModManager";
import { checkItemCustomed, getCustomAssets, getCustomGroups } from "./customStash";
import { resolvePreimage } from "./loadSchedule";

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
    // 在基础发生异步加载之后，
    // 重新翻译一遍镜像组基础物品的描述，只考虑镜像组目标是基础组的自定义组
    ModManager.progressiveHook("TranslationAssetProcess")
        .next()
        .inject(() =>
            Object.entries(getCustomGroups()).forEach(([groupName, group]) => {
                /** @type {Mutable<AssetGroup>} */ (group).Description = groupEntryString(group.Name);
            })
        )
        .inject(() =>
            Object.entries(getCustomAssets()).forEach(([group, assets]) => {
                Object.entries(assets).forEach(([name, asset]) => {
                    /** @type {Mutable<Asset>} */ (asset).Description = assetEntryString(asset.Group.Name, asset.Name);
                });
            })
        )
        .inject(() =>
            Object.entries(getCustomAssets())
                .map(([group, asset]) => ({
                    group,
                    asset,
                    from: /** @type {AssetGroupName} */ (resolvePreimage(/**@type {CustomGroupName} */ (group))),
                }))
                .filter(({ from }) => from !== undefined)
                .forEach(({ group, asset, from }) => {
                    Object.entries(asset).forEach(([name, asset]) => {
                        const fromAsset = AssetGet("Female3DCG", from, name);
                        if (!fromAsset) return;
                        /** @type {Mutable<Asset>} */ (asset).Description = fromAsset.Description;
                    });
                })
        );

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
