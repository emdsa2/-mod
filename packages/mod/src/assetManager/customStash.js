import ModManager from "../modManager";

/** @type {Partial<Record<CustomGroupName, AssetGroup>>} */
const customGroups = {};

/** @type {Partial<Record<CustomGroupName, Record<string, Asset>>>} */
const customAssets = {};

/**
 *
 * @param {Parameters<typeof AssetGroupAdd>} args
 */
export function CustomGroupAdd(...[IFamily, GroupDef]) {
    // 避免添加过程被搞乱
    const Group = ModManager.invokeOriginal("AssetGroupAdd", IFamily, GroupDef);
    customGroups[Group.Name] = Group;
    return Promise.resolve(/** @type {Mutable<AssetGroup>}*/ (Group));
}

/**
 *
 * @param {Parameters<typeof AssetAdd>} args
 * @returns
 */
export function CustomAssetAdd(...[Group, AssetDef, Config]) {
    // 避免添加过程被搞乱
    ModManager.invokeOriginal("AssetAdd", Group, AssetDef, Config);
    const groupName = Group.Name;
    const assetName = AssetDef.Name;
    if (!customAssets[groupName]) customAssets[groupName] = {};
    const as = AssetGet("Female3DCG", groupName, assetName);
    if (as) {
        customAssets[groupName][assetName] = as;
        return Promise.resolve(/** @type {Mutable<Asset>}*/ (as));
    }

    // NOTE 我觉得不可能出现这种情况
    return Promise.reject(`Asset ${groupName}:${assetName} not found`);
}

export function getCustomGroups() {
    return customGroups;
}

export function getCustomAssets() {
    return customAssets;
}
