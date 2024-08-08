import { addAsset, addExtendedConfig } from "./addAssetHelper";
import { addCopyGroup, addGroup } from "./addGroupHelper";
import { setupCustomAssets } from "./customAssets";
import { setupCustomGroups } from "./customGroups";
import { addImgMapping, setupImgMapping } from "./imgMapping";
import { queueAfterAssetLoad, setupQueue } from "./setupQueue";
import { addCustomDialog, setManyAssetDescriptionEntries, setupTranslation } from "./translation";

export default class AssetManager {
    /**
     * 添加物品，如果添加的是ItemTorso或ItemTorso2，会自动添加镜像
     * @param { CustomGroupName } group 物品组
     * @param { CustomAssetDefinition } asset 物品定义
     * @param { AssetArchetypeConfig } [extended] 可选设置物品扩展属性
     * @param { Translation.Entry } [description] 可选设置物品名字翻译
     */
    static addAsset(group, asset, extended = undefined, description = undefined) {
        addAsset(group, asset, extended, description);
    }

    /**
     * 添加很多区域的很多物品
     * @param { CustomGroupedAssetDefinitions } groupedAssets 很多很多物品！
     * @param { Translation.GroupedEntries } [description] 很多很多物品的名字翻译！
     */
    static addGroupedAssets(groupedAssets, description = undefined) {
        Object.entries(groupedAssets).forEach(([group, assets]) => {
            assets.forEach((asset) => {
                addAsset(/**@type {CustomGroupName}*/ (group), asset);
            });
        });
        setManyAssetDescriptionEntries(description);
    }

    /**
     * 添加一个物品的扩展设置
     * @param {CustomGroupName} groupName
     * @param {string} assetName
     * @param {AssetArchetypeConfig} extendedConfig
     */
    static addExtendedConfig(groupName, assetName, extendedConfig) {
        addExtendedConfig(groupName, assetName, extendedConfig);
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
     * @param { Record<string,string> } mappings
     */
    static addImgMapping(mappings) {
        addImgMapping(mappings);
    }

    /**
     * 添加新的身体组
     * @param {CustomGroupDefinition} groupDef
     * @param {Translation.Entry} [description]
     */
    static addGroup(groupDef, description = undefined) {
        addGroup(groupDef, description);
    }

    /**
     * 添加新的身体组，从已有组复制配置
     * @param { CustomGroupName } newGroup
     * @param { AssetGroupName } copyFrom
     * @param { Translation.Entry } [description]
     */
    static addCopyGroup(newGroup, copyFrom, description = undefined) {
        addCopyGroup(newGroup, copyFrom, description);
    }

    /**
     * 添加物品初始化函数。具体而言，在物品加载后、物品描述加载前。
     * @param {()=>void} setup
     */
    static queueSetup(setup) {
        queueAfterAssetLoad(setup);
    }

    static init() {
        setupImgMapping();
        setupQueue();
        setupTranslation();
        setupCustomGroups();
        setupCustomAssets();
    }
}
