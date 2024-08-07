import ModManager from "../modManager";
import { getCustomAssets } from "./customAssets";

/** @type { TranslationRecord<CustomGroupName, Record<string, string>> } */
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
 * 添加物品描述(显示名称)
 * @param { CustomGroupName } group 身体组
 * @param { string } asset 物品名
 * @param { TranslationEntry | undefined } [entries] 翻译条目，如果不提供则使用默认值
 */
export function setAssetDescriptionEntries(group, asset, entries = undefined) {
    if (!entries) entries = { CN: asset.replace("_Luzi", "") };
    Object.entries(entries).forEach(([key, value]) => {
        setAssetDescription(/** @type {ServerChatRoomLanguage} */ (key), group, asset, value);
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
    const lang_repo = assetNames[language] || assetNames["CN"] || {};
    const group_repo = lang_repo[group] || {};
    return group_repo[asset];
}

/** @type { TranslationCustomDialog } */
const groupNames = {};

/**
 * 添加身体组描述(显示名称)
 * @param { CustomGroupName } group 身体组
 * @param { TranslationEntry | undefined } [entries] 翻译条目，如果不提供则使用默认值
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

/** @type {TranslationCustomDialog} */
const customDialog = {};

/**
 * 添加自定义对话，如果包含ItemTorso或ItemTorso2，会自动添加镜像
 * @param {TranslationCustomDialog} dialog
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

/** @type { Record<string, string> } */
const mirrorGroups = {};

export function mirrorGroupAssetDescription(newGroup, copyFrom) {
    mirrorGroups[newGroup] = copyFrom;
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
        return (
            ((key) => {
                const lang = TranslationLanguage == "TW" ? "CN" : TranslationLanguage;
                const dialogs = customDialog[lang] || customDialog["CN"];
                return dialogs && dialogs[key];
            })(args[0]) || next(args)
        );
    });
}
