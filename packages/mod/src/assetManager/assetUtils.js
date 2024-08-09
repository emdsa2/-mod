import { AssetConfig, ParsedAsset, resolveStringAsset } from "./assetConfigs";
import { CustomAssetAdd } from "./customStash";
import { Entries, resolveEntry } from "./entries";
import { pushDefsLoad, requireGroup } from "./loadSchedule";

/**
 * 添加物品
 * @param {CustomGroupName} groupName
 * @param {CustomAssetDefinition} asset
 * @param {Object} config
 * @param {ExtendedItemMainConfig} [config.extendedConfig]
 * @param {Translation.Entry} [config.description]
 * @param {CustomGroupName} [config.dynamicName]
 */
export function loadAsset(groupName, asset, { extendedConfig, description, dynamicName } = {}) {
    pushDefsLoad(groupName, (groupObj) => {
        // 不会因为镜像组而重复调用
        ParsedAsset.add(groupObj.Name, asset);
        if (extendedConfig) AssetConfig.add(extendedConfig);
    });

    requireGroup(groupName).then((groupObj) => {
        // 注意，每个镜像身体组都会调用一次这个函数，因此不能使用外面的 groupName
        // 使用 const shadowing 避免这个问题
        const groupName2 = groupObj.Name;
        const assetDef = resolveStringAsset(/** @type {AssetDefinition} */ (asset));

        const assetDefRes = AssetResolveCopyConfig.AssetDefinition(assetDef, groupName2, ParsedAsset.value);
        const solidDesc = description || { CN: assetDefRes.Name.replace(/_.*?Luzi$/, "") };

        // 先在这里设置一遍显示名称
        CustomAssetAdd(groupObj, assetDefRes, AssetConfig.value).then((asset) => {
            asset.Description = resolveEntry(solidDesc);
            if (dynamicName) asset.DynamicGroupName = /** @type {AssetGroupName} */ (dynamicName);
        });
        // 将名称注册到entry管理中，如果游戏通过异步加载获取名称，在entry管理中修正
        Entries.setAsset(groupName2, assetDefRes.Name, solidDesc);
    });
}
