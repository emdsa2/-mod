import ModManager from "../modManager";
import { getCustomAssets } from "./customAssets";
import { getCustomGroups } from "./customGroups";

/** @type { Translation.CustomRecord<CustomGroupName, Record<string, string>> } */
const assetNames = {};

/**
 * 添加物品描述(显示名称)
 * @param { ServerChatRoomLanguage } language
 * @param { CustomGroupName } group
 * @param { string } asset
 * @param { string } description
 */
export function setAssetDescription(language, group, asset, description) {
    if (!assetNames[language]) assetNames[language] = {};
    if (!assetNames[language][group]) assetNames[language][group] = {};
    assetNames[language][group][asset] = description;
}

/**
 * 添加很多物品描述(显示名称)
 * @param { Translation.GroupedEntries | undefined } entries 翻译条目，必须提供
 */
export function setManyAssetDescriptionEntries(entries) {
    if (!entries) return;
    Object.entries(entries).forEach(([lang, value]) => {
        Object.entries(value).forEach(([group, content]) => {
            Object.entries(content).forEach(([assetName, desc]) => {
                setAssetDescription(
                    /** @type {ServerChatRoomLanguage} */ (lang),
                    /** @type {CustomGroupName} */ (group),
                    assetName,
                    desc
                );
            });
        });
    });
}

/**
 * 添加物品描述(显示名称)
 * @param { CustomGroupName } group 身体组
 * @param { string } asset 物品名
 * @param { Translation.Entry} entries 翻译条目，如果不提供则使用默认值
 */
export function setAssetDescriptionEntries(group, asset, entries) {
    Object.entries(entries).forEach(([lang, desc]) => {
        setAssetDescription(/** @type {ServerChatRoomLanguage} */ (lang), group, asset, desc);
    });
}

/**
 * 获得物品描述(显示名称)
 * @param { string } language 语言
 * @param { CustomGroupName } group 身体组
 * @param { string } asset 物品名
 * @returns { string | undefined } 物品描述(显示名称)
 */
export function getAssetDescription(language, group, asset) {
    /** @type { (lang: string, group: CustomGroupName, asset: string) => string | undefined } */
    const getDescRaw = (lang, group, asset) => assetNames[lang]?.[group]?.[asset];
    return getDescRaw(language, group, asset) || getDescRaw("CN", group, asset);
}

/** @type { Translation.Dialog } */
const groupNames = {};

/**
 * 添加身体组描述(显示名称)
 * @param { CustomGroupName } group 身体组
 * @param { Translation.Entry | undefined } [entries] 翻译条目，如果不提供则使用默认值
 */
export function setGroupDescription(group, entries = undefined) {
    if (!entries) entries = { CN: group.replace("_Luzi", "") };
    Object.entries(entries).forEach(([lang, value]) => {
        if (!groupNames[lang]) groupNames[lang] = {};
        groupNames[lang][group] = value;
    });
}

/**
 * 获取身体组描述(显示名称)
 * @param {string} language 语言
 * @param {CustomGroupName} group 身体组
 * @returns { string | undefined } 身体组描述(显示名称)
 */
export function getGroupDescription(language, group) {
    const lang_repo = groupNames[language] || groupNames["CN"] || {};
    return lang_repo[group];
}

/** @type {Translation.Dialog} */
const customDialog = {};

/**
 * 添加自定义对话，如果包含ItemTorso或ItemTorso2，会自动添加镜像
 * @param {Translation.Dialog} dialog
 */
export function addCustomDialog(dialog) {
    Object.entries(dialog).forEach(([key, value]) => {
        if (!customDialog[key]) {
            customDialog[key] = {};
        }
        Object.entries(value).forEach(([k, v]) => {
            customDialog[key][k] = v;
            if (k.includes("ItemTorso2")) {
                customDialog[key][k.replace("ItemTorso2", "ItemTorso")] = v;
            } else if (k.includes("ItemTorso")) {
                customDialog[key][k.replace("ItemTorso", "ItemTorso2")] = v;
            }
        });
    });
}

/**
 * 获取自定义对话
 * @param {string} language 语言
 * @param {string} dialog 对话标签
 * @returns { string | undefined } 对话翻译
 */
function getCustomDialog(language, dialog) {
    const lang_repo = customDialog[language] || customDialog["CN"] || {};
    return lang_repo[dialog];
}

/** @type { Record<string, string> } */
const mirrorGroups = {};

/**
 * 设置一个组的镜像组
 * @param { CustomGroupName } newGroup
 * @param { AssetGroupName } copyFrom
 */
export function mirrorGroupAssetDescription(newGroup, copyFrom) {
    mirrorGroups[newGroup] = copyFrom;
}

/**
 * 还原镜像身体组的对话
 * @param {string} dialog
 */
function reflectDialog(dialog) {
    for (const [key, value] of Object.entries(mirrorGroups)) {
        if (dialog.startsWith(key)) {
            return dialog.replace(key, value);
        }
    }
    return dialog;
}

export function setupTranslation() {
    ModManager.hookFunction("TranslationAsset", 1, (args, next) => {
        next(args);

        const lang_repo = groupNames[TranslationLanguage] || groupNames["CN"] || {};
        Object.entries(lang_repo).forEach(([group, name]) => {
            const group_obj = AssetGroupGet("Female3DCG", /** @type {AssetGroupName} */ (group));
            if (group_obj) /** @type {Mutable<AssetGroup>} */ (group_obj).Description = name;
        });

        Object.entries(getCustomAssets()).forEach(([group, assets]) => {
            assets.forEach((asset) => {
                /** @type {Mutable<Asset>}*/ (asset).Description =
                    getAssetDescription(
                        /** @type {ServerChatRoomLanguage} */ (TranslationLanguage),
                        asset.Group.Name,
                        asset.Name
                    ) || asset.Name.replace("_Luzi", "");
            });
        });

        AssetGroup.filter((g) => g.Name in getCustomGroups()).forEach((g) => {
            /** @type {Mutable<AssetGroup>} */ (g).DynamicGroupName = /** @type {AssetGroupName} */ (
                mirrorGroups[g.Name] || g.Name
            );
        });

        Asset.filter((a) => a.Group.Name in getCustomGroups()).forEach((a) => {
            /** @type {Mutable<Asset>} */ (a).DynamicGroupName = /** @type {AssetGroupName} */ (
                mirrorGroups[a.Group.Name] || a.Group.Name
            );
        });

        Object.entries(mirrorGroups).forEach(([newGroup, copyFrom]) => {
            Asset.forEach((asset) => {
                if (asset.Group.Name === newGroup) {
                    const ccf = /** @type { `${AssetGroupName}/${string}` } */ (`${copyFrom}/${asset.Name}`);
                    const copyAsset = AssetMap.get(ccf);
                    if (copyAsset) {
                        /** @type {Mutable<Asset> } */ (asset).Description = copyAsset.Description;
                    }
                }
            });
        });
    });

    ModManager.hookFunction("AssetTextGet", 1, (args, next) => {
        args[0] = reflectDialog(args[0]);
        return getCustomDialog(TranslationLanguage, args[0]) || next(args);
    });
}
