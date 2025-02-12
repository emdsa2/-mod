import { loadAsset, loadExtendedConfig, modifyAsset, modifyAssetLayers, modifyGroup } from "./assetUtils";
import { loadGroup, mirrorGroup } from "./groupUtils";
import { addImgMapping, setupImgMapping } from "./imgMapping";
import { pushAfterLoad, runSetupLoad } from "./loadSchedule";
import { addCustomDialog, setupCustomDialog } from "./dialog";
import { pickEntry, setupEntries } from "./entries";
import { enableCustomAssets, getCustomAssets } from "./customStash";
import { addLayerNames, setupLayerNameLoad } from "./layerNames";

export default class AssetManager {
    /**
     * 添加物品，如果添加的是ItemTorso或ItemTorso2，会自动添加镜像
     * @param { CustomGroupName } group 物品组
     * @param { CustomAssetDefinition } asset 物品定义
     * @param { AssetArchetypeConfig } [extended] 可选设置物品扩展属性
     * @param { Translation.Entry } [description] 可选设置物品名字翻译
     */
    static addAsset(group, asset, extended = undefined, description = undefined) {
        const extendedConfig = extended && { [group]: { [asset.Name]: extended } };
        loadAsset(group, asset, { extendedConfig, description });
    }

    /**
     * 添加很多区域的很多物品
     * @param { CustomGroupedAssetDefinitions } groupedAssets 很多很多物品！
     * @param { Translation.GroupedEntries } [descriptions] 很多很多物品的名字翻译！
     * @param { ExtendedItemMainConfig } [extended] 可选设置物品扩展属性
     */
    static addGroupedAssets(groupedAssets, descriptions = undefined, extended = undefined) {
        Object.entries(groupedAssets).forEach(([group, assets]) => {
            assets.forEach((asset) => {
                const groupName = /** @type {CustomGroupName} */ (group);
                const description = descriptions && pickEntry(groupName, asset.Name, descriptions);
                const extendedConfig = extended &&
                    extended[groupName]?.[asset.Name] && {
                        [groupName]: { [asset.Name]: extended[groupName][asset.Name] },
                    };
                loadAsset(groupName, asset, { extendedConfig, description });
            });
        });
    }

    /** @param {ExtendedItemMainConfig} extendedConfig */
    static addGroupedConfig(extendedConfig) {
        loadExtendedConfig(extendedConfig);
    }

    /**
     * 调整物品属性（谨慎使用）
     * @param { CustomGroupName } group 身体组名字
     * @param {string} asset 物品名字
     * @param { FuncWork<[Mutable<AssetGroup>, Mutable<Asset>]> } work
     */
    static modifyAsset(group, asset, work) {
        modifyAsset(group, asset, work);
    }

    /**
     * 调整物品图层（谨慎使用）
     * @param {(Asset)=>boolean} filter 物品筛选器
     * @param { FuncWork<[Mutable<Asset>, Mutable<AssetLayer>]> } work
     */
    static modifyAssetLayers(filter, work) {
        modifyAssetLayers(filter, work);
    }

    /**
     * 调整身体组属性（谨慎使用）
     * @param {CustomGroupName} group
     * @param {FuncWork<[Mutable<AssetGroup>]>} work
     */
    static modifyGroup(group, work) {
        modifyGroup(group, work);
    }

    /**
     * 添加自定义对话，如果包含ItemTorso或ItemTorso2，会自动添加镜像
     * @param {Translation.Dialog} dialog
     */
    static addCustomDialog(dialog) {
        addCustomDialog(dialog);
    }

    /**
     * 添加自定义图片映射
     * @param { CustomImageMapping } mappings
     */
    static addImageMapping(mappings) {
        addImgMapping(mappings);
    }

    /**
     * 添加新的身体组
     * @param {CustomGroupDefinition} groupDef
     * @param {Translation.Entry} [description]
     */
    static addGroup(groupDef, description = undefined) {
        loadGroup(groupDef, { description });
    }

    /**
     * 添加新的身体组，从已有组复制配置
     * @param { CustomGroupName } newGroup
     * @param { AssetGroupName } copyFrom
     * @param { Translation.Entry } [description]
     */
    static addCopyGroup(newGroup, copyFrom, description = undefined) {
        mirrorGroup(newGroup, copyFrom, description);
    }

    /**
     * 添加自定义的图层名字
     * @param {CustomGroupName} group 身体组名字
     * @param {CustomAssetDefinition} assetDef 物品定义
     * @param {Translation.CustomRecord<string,string>} entries 图层-名字，按照语言分组
     */
    static addLayerNames(group, assetDef, entries) {
        addLayerNames(group, assetDef, { entries });
    }

    /**
     * 检查物品是否是自定义物品
     * @param {Asset} asset 物品
     * @returns {boolean} 如果是自定义物品返回true
     */
    static assetIsCustomed(asset) {
        return getCustomAssets()[asset.Group.Name]?.[asset.Name] !== undefined;
    }

    /**
     * 添加一个加载完成后的事件 , .
     * @param {()=>void} wk
     */
    static afterLoad(wk) {
        pushAfterLoad(wk);
    }

    /**
     * 初始化，并且添加自定义的组件功能
     * @param {FuncWork} componentSetup
     */
    static init(componentSetup) {
        // 初始化所有功能，顺序基本无所谓
        setupImgMapping();
        setupCustomDialog();
        setupEntries();
        setupLayerNameLoad();

        enableCustomAssets();

        componentSetup();
        runSetupLoad();
    }
}
