import { flagCustomAsset } from "./customAssets";
import { queueAfterAssetLoad } from "./setupQueue";
import { setAssetDescriptionEntries } from "./translation";

/**
 * 添加物品
 * @param {AssetGroup} group
 * @param {CustomAssetDefinition} asset
 * @param {ExtendedItemMainConfig} extendedConfig
 * @param {TranslationEntry} [description]
 */
function addAssetRaw(group, asset, extendedConfig, description = undefined) {
    AssetAdd(group, /** @type {AssetDefinition} */ (asset), extendedConfig);
    if (description) setAssetDescriptionEntries(group.Name, asset.Name, description);
    flagCustomAsset(group.Name, asset.Name);
}

/**
 * 在两个组添加物品，第二个组作为第一个组的镜像
 * 第二组为undefined则如同只在第一组添加
 * @param {AssetGroup} group1
 * @param {AssetGroup | undefined} group2
 * @param {CustomAssetDefinition} asset
 * @param {AssetArchetypeConfig} extended
 * @param {TranslationEntry} [description]
 */
function addAssetWithMirror(group1, group2, asset, extended = undefined, description = undefined) {
    const extendedConfig = extended ? { [group1.Name]: { [asset.Name]: extended } } : {};
    addAssetRaw(group1, asset, extendedConfig, description);

    if (group2) {
        const config = extended
            ? {
                  [group1.Name]: {
                      [asset.Name]: extended,
                  },
                  [group2.Name]: {
                      [asset.Name]: /** @type {AssetArchetypeConfig} */ ({
                          Archetype: extended.Archetype,
                          CopyConfig: {
                              GroupName: group1.Name,
                              AssetName: asset.Name,
                          },
                      }),
                  },
              }
            : {};

        addAssetRaw(group2, asset, config, description);
    }
}

/**
 * 添加物品
 * @param {CustomGroupName} group
 * @param {CustomAssetDefinition} asset
 * @param {AssetArchetypeConfig} [extended]
 * @param {TranslationEntry} [description]
 */
function addAssetBase(group, asset, extended = undefined, description = undefined) {
    const group_obj = AssetGroupGet("Female3DCG", /** @type {AssetGroupName}*/ (group));

    const second_grp = (() => {
        if (group === "ItemTorso2") return AssetGroupGet("Female3DCG", "ItemTorso");
        if (group === "ItemTorso") return AssetGroupGet("Female3DCG", "ItemTorso2");
        return undefined;
    })();

    addAssetWithMirror(group_obj, second_grp, asset, extended, description);
}

/**
 * 添加物品
 * @param {CustomGroupName} group
 * @param {CustomAssetDefinition} asset
 * @param {AssetArchetypeConfig} [extended]
 * @param {TranslationEntry} [description]
 */
export function addAsset(group, asset, extended = undefined, description = undefined) {
    queueAfterAssetLoad(() => addAssetBase(group, asset, extended, description));
}

/**
 * 添加一个物品的扩展设置
 * @param {CustomGroupName} groupName
 * @param {string} assetName
 * @param {AssetArchetypeConfig} extendedConfig
 */
function addExtendedConfigBase(groupName, assetName, extendedConfig) {
    const name = /**@type {AssetGroupName} */ (groupName);
    const A = AssetGet("Female3DCG", name, assetName);
    if (A == null) {
        console.warn(`Asset ${groupName}:${assetName} not found`);
        return;
    }
    const assetBaseConfig = AssetFindExtendedConfig({ [assetName]: extendedConfig }, name, assetName);
    if (assetBaseConfig != null) {
        AssetBuildExtended(A, assetBaseConfig, { [groupName]: extendedConfig });
    }
}

/**
 * 添加一个物品的扩展设置
 * @param {CustomGroupName} groupName
 * @param {string} assetName
 * @param {AssetArchetypeConfig} extendedConfig
 */
export function addExtendedConfig(groupName, assetName, extendedConfig) {
    queueAfterAssetLoad(() => addExtendedConfigBase(groupName, assetName, extendedConfig));
}
