import ModManager from "../modManager";

/** @type {Partial<Record<CustomGroupName, Asset[]>> } */
const customAssets = {};

/**
 * 标记一个自定义物品，免费添加到物品栏
 * @param { CustomGroupName } group
 * @param { string } asset
 */
export function flagCustomAsset(group, asset) {
    if (!customAssets[group]) customAssets[group] = [];
    const as = AssetGet("Female3DCG", /** @type {AssetGroupName}*/ (group), asset);
    if (as) customAssets[group].push(as);
}

/**
 * 获取自定义物品
 * @returns { Partial<Record<CustomGroupName, Asset[]>>}
 */
export function getCustomAssets() {
    return customAssets;
}

export function setupCustomAssets() {
    let dialogBuildFlag = false;
    ModManager.hookFunction("DialogInventoryBuild", 1, (args, next) => {
        if (args[2]) return next(args);

        dialogBuildFlag = true;
        next(args);
        dialogBuildFlag = false;
    });

    ModManager.hookFunction("DialogInventoryAdd", 1, (args, next) => {
        next(args);
        if (dialogBuildFlag) {
            dialogBuildFlag = false;
            const groupName = args[1].Asset.Group.Name;
            if (customAssets[groupName]) {
                customAssets[groupName].forEach((asset) => next([args[0], { Asset: asset }, false]));
            }
        }
    });
}
