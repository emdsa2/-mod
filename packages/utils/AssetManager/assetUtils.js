import log from "../log";
import { AssetConfig, ParsedAsset, resolveStringAsset } from "./assetConfigs";
import { CustomAssetAdd, getCustomAssets } from "./customStash";
import { Entries, resolveEntry, solidfyEntry } from "./entries";
import { addLayerNames } from "./layerNames";
import { pushAfterLoad, pushAssetLoadEvent, pushDefsLoad, requireGroup } from "./loadSchedule";

/**
 *
 * @param {CustomGroupName} Group
 * @param {CustomGroupName} preimageGroup
 * @param {{Name:string}} asset
 * @param { string } category
 */
function globalFunctionMirror(Group, preimageGroup, asset, category) {
    const preimageFunction = `Assets${preimageGroup}${asset.Name}${category}`;
    const newFunction = `Assets${Group}${asset.Name}${category}`;
    if (window[preimageFunction]) {
        window[newFunction] = window[preimageFunction];
    }
}

/**
 * 添加物品
 * @param {CustomGroupName} groupName
 * @param {CustomAssetDefinition} asset
 * @param {Object} config
 * @param {ExtendedItemMainConfig} [config.extendedConfig]
 * @param {Translation.Entry} [config.description]
 * @param {CustomGroupName} [config.dynamicName]
 * @param {AssetGroup} [config.preimage]
 */
export function loadAsset(groupName, asset, { extendedConfig, description, dynamicName, preimage } = {}) {
    pushDefsLoad(groupName, (groupObj) => {
        // 不会因为镜像组而重复调用
        ParsedAsset.add(groupObj.Name, asset);
        if (extendedConfig) AssetConfig.add(extendedConfig);
    });

    const srcGroupName = groupName;

    requireGroup(groupName, (groupObj) => {
        // 注意，每个镜像身体组都会调用一次这个函数，因此不能使用外面的 groupName
        // 使用 const shadowing 避免这个问题
        const groupName = groupObj.Name;
        const assetDef = resolveStringAsset(/** @type {AssetDefinition} */ (asset));

        const assetDefRes = AssetResolveCopyConfig.AssetDefinition(assetDef, groupName, ParsedAsset.value);
        const solidDesc = solidfyEntry(description, assetDefRes.Name.replace(/_.*?Luzi$/, ""));

        if (getCustomAssets()[groupName]?.[assetDef.Name] !== undefined) {
            log.warn(`Asset {${groupName}:${assetDef.Name}} already existed!`);
        }

        // 先在这里设置一遍显示名称
        CustomAssetAdd(groupObj, assetDefRes, AssetConfig.value).then((asset) => {
            if (asset.DynamicGroupName === asset.Group.Name) {
                if (dynamicName) asset.DynamicGroupName = /** @type {AssetGroupName} */ (dynamicName);
                else asset.DynamicGroupName = /** @type {AssetGroupName} */ (srcGroupName);
            }

            if (preimage) {
                const preimageAsset = AssetGet("Female3DCG", preimage.Name, assetDefRes.Name);
                asset.Description = preimageAsset.Description;
                asset.DynamicGroupName = preimageAsset.DynamicGroupName;

                ["ScriptDraw", "BeforeDraw", "AfterDraw"]
                    .filter((prop) => preimageAsset[`Dynamic${prop}`])
                    .forEach((prop) => globalFunctionMirror(groupName, preimage.Name, assetDefRes, prop));
            } else {
                asset.Description = resolveEntry(solidDesc);
                addLayerNames(asset.DynamicGroupName, /** @type {CustomAssetDefinition}*/ (assetDefRes), {
                    noOverride: true,
                });
            }
        });
        // 将名称注册到entry管理中，如果游戏通过异步加载获取名称，在entry管理中修正
        Entries.setAsset(groupName, assetDefRes.Name, solidDesc);
    });
}

/**
 * @param {ExtendedItemMainConfig} [extendedConfig]
 */
export function loadExtendedConfig(extendedConfig) {
    AssetConfig.add(extendedConfig);
}

/** @type { Partial<Record<CustomGroupName, Set<string>>> } */
const missingAsset = {};
/**
 * 修改物品
 * @param { CustomGroupName } groupName 身体组名字
 * @param {string} assetName 物品名字
 * @param { FuncWork<[Mutable<AssetGroup>,Mutable<Asset>]> } work
 */
export function modifyAsset(groupName, assetName, work) {
    const wk = (groupObj) => {
        const asset = AssetGet("Female3DCG", groupObj.Name, assetName);
        if (!asset) {
            if (!missingAsset[groupName]) missingAsset[groupName] = new Set();
            if (missingAsset[groupName].has(assetName)) {
                log.error(`Asset ${groupName}:${assetName} not found`);
                return;
            } else {
                missingAsset[groupName].add(assetName);
                pushAssetLoadEvent(groupName, wk);
            }
        } else work(groupObj, asset);
    };

    pushAssetLoadEvent(groupName, wk);
}
/**
 * 调整物品属性
 * @param {(Asset)=>boolean} filter 物品筛选器
 * @param { FuncWork<[Mutable<Asset>, Mutable<AssetLayer>]> } work
 */
export function modifyAssetLayers(filter, work) {
    pushAfterLoad(() => {
        Asset.filter(filter).forEach((asset) => {
            asset.Layer.forEach((layer) => work(asset, layer));
        });
    });
}

/**
 * 修改物品组
 * @param { CustomGroupName } groupName 身体组名字
 * @param { FuncWork<[Mutable<AssetGroup>]> } work
 */
export function modifyGroup(groupName, work) {
    pushAssetLoadEvent(groupName, (groupObj) => work(groupObj));
}
