import ModManager from "../ModManager";

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
    return customDialog[language]?.[dialog] || customDialog["CN"]?.[dialog];
}

export function setupCustomDialog() {
    ModManager.progressiveHook("AssetTextGet").override(
        (args, next) => getCustomDialog(TranslationLanguage, args[0]) || next(args)
    );

    ModManager.progressiveHook("ChatRoomPublishCustomAction")
        .inject((args, next) => {
            const [msg, _, Dictionary] = args;
            const tDialog = getCustomDialog(TranslationLanguage, msg);
            if (tDialog) Dictionary.push({ Tag: `MISSING TEXT IN "Interface.csv": ${msg}`, Text: tDialog });
        })
        .next();
}
