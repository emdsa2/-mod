import log from "../log";
import { resolveMirror } from "./mirrorGroup";

export class AssetConfig {
    /**
     * @param {ExtendedItemMainConfig} extendedConfig
     * @returns
     */
    static add(extendedConfig) {
        Object.entries(extendedConfig).forEach(([groupName, assets]) =>
            Object.entries(assets).forEach(([assetName, config]) =>
                resolveMirror(/** @type {CustomGroupName}*/ (groupName)).forEach(({ name }) => {
                    if (!AssetFemale3DCGExtended[name]) AssetFemale3DCGExtended[name] = {};
                    if (!AssetFemale3DCGExtended[name][assetName]) AssetFemale3DCGExtended[name][assetName] = config;
                })
            )
        );
    }
    static get value() {
        return AssetFemale3DCGExtended;
    }
}

/**
 * 保持所有物品定义（不是物品）的数组
 * @type {Partial<Record<AssetGroupName, Record<string, AssetDefinition>>>}
 */
const parsedAsset = {};
export class ParsedAsset {
    /**
     * @param { CustomGroupName } groupName
     * @param { CustomAssetDefinition } assetDef
     * @returns { Partial<Record<AssetGroupName, Record<string, AssetDefinition>>> }
     */
    static add(groupName, assetDef) {
        if (Object.keys(parsedAsset).length === 0) {
            // 从 AssetFemale3DCG 中获取所有物品定义
            AssetFemale3DCG.forEach((group) => {
                if (!parsedAsset[group.Group]) parsedAsset[group.Group] = {};
                group.Asset.forEach((asset) => {
                    const rAsset = resolveStringAsset(asset);
                    parsedAsset[group.Group][rAsset.Name] = rAsset;
                });
            });
        }
        if (!parsedAsset[groupName]) parsedAsset[groupName] = {};
        parsedAsset[groupName][assetDef.Name] = /**@type {AssetDefinition} */ (assetDef);
        return parsedAsset;
    }

    static get value() {
        return parsedAsset;
    }
}

/**
 * 将字符串式的物品定义转换为普通物品定义
 * @param {string | AssetDefinition} asset
 * @returns {AssetDefinition}
 */
export function resolveStringAsset(asset) {
    return typeof asset === "string" ? { Name: asset } : asset;
}
