import ModManager from "../ModManager";

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

/**
 * @param {CustomGroupName} group
 * @param {string} name
 * @returns {boolean}
 */
export function isInListCustomAsset(group, name) {
    /** @type {Asset | undefined} */
    const asset = customAssets[group]?.[name];
    return asset && !asset.NotVisibleOnScreen?.includes("LuziScreen");
}

export function enableCustomAssets() {
    let doInventoryAdd = false;
    ModManager.progressiveHook("DialogInventoryBuild").inject((args, next) => {
        if (args[2]) return;
        doInventoryAdd = true;
    });

    ModManager.progressiveHook("DialogInventoryAdd")
        .next()
        .inject((args, next) => {
            if (!doInventoryAdd) return;
            doInventoryAdd = false;
            const groupName = args[1].Asset.Group.Name;
            const added = new Set(DialogInventory.map((item) => item.Asset.Name));

            if (customAssets[groupName]) {
                Object.entries(customAssets[groupName])
                    .filter(
                        ([assetName, asset]) =>
                            !asset.NotVisibleOnScreen?.includes("LuziScreen") && !added.has(assetName)
                    )
                    .forEach(([_, asset]) => DialogInventoryAdd(args[0], { Asset: asset }, false));
            }
        });

    /** @type {ModManagerInterface.HookFunction<"InventoryAvailable">} */
    const overrideAvailable = (args, next) => {
        const [C, Name, Group] = args;
        if (customAssets[Group]?.[Name]) return true;
        return next(args);
    };

    ModManager.progressiveHook("InventoryAvailable").inside("CharacterAppearanceValidate").override(overrideAvailable);
    ModManager.progressiveHook("InventoryAvailable").inside("CraftingItemListBuild").override(overrideAvailable);
    ModManager.progressiveHook("InventoryAvailable").inside("WardrobeFastLoad").override(overrideAvailable);

    ModManager.progressiveHook("CraftingValidate").inject((args, next) => {
        const item = args[0]?.Item;
        if (!item) return;
        const asset = CraftingAssets[item]?.[0];
        if (asset && isInListCustomAsset(asset.Group.Name, asset.Name)) args[3] = false;
    });

    const pInventory = ModManager.randomGlobalFunction("CraftingInventory", () => {
        return [
            ...Player.Inventory,
            ...Object.values(customAssets)
                .map((x) => Object.values(x))
                .flat()
                .map((Asset) => ({ Asset })),
        ];
    });

    ModManager.patchFunction("CraftingRun", {
        "for (let Item of Player.Inventory) {": `for (let Item of ${pInventory}()) {`,
    });
}

/**
 * 判断是否为自定义物品
 * @param {Item | null} item
 */
export function checkItemCustomed(item) {
    if (
        item &&
        item.Asset &&
        item.Asset.Group.Name in customAssets &&
        item.Asset.Name in customAssets[item.Asset.Group.Name]
    )
        return {
            then: (cb) => cb(item),
        };
    else
        return {
            then: (cb) => {},
        };
}
