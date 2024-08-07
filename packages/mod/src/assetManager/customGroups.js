import ModManager from "../modManager";

/**
 * @typedef { {groupDef:CustomGroupDefinition, extendedConfig: ExtendedItemGroupConfig} } GroupInfo
 */

/** @type {Partial<Record<CustomGroupName, GroupInfo>>} */
const customGroups = {};

/**
 *
 * @param {CustomGroupName} group
 * @param {CustomGroupDefinition} groupDef
 * @param {ExtendedItemGroupConfig} extendedConfig
 */
export function registerCustomGroup(group, groupDef, extendedConfig) {
    customGroups[group] = { groupDef, extendedConfig };
}

export function setupCustomGroups() {
    ModManager.hookFunction("AssetLoad", 1, (args, next) => {
        let [definitions, familiy, extConfig] = args;

        const customDefs = Object.values(customGroups).map((g) => g.groupDef);
        const customExt = Object.fromEntries(
            Object.entries(customGroups).map(([group, g]) => {
                return [group, g.extendedConfig];
            })
        );

        const nDef = [...definitions, ...customDefs];

        const nExt = {
            ...extConfig,
            ...customExt,
        };

        next([/** @type {AssetGroupDefinition[]}*/ (nDef), familiy, nExt]);
    });
}
