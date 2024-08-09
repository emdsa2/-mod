import { loadAsset, modifyAsset } from "./assetUtils";
import { loadGroup, mirrorGroup } from "./groupUtils";
import { addImgMapping, setupImgMapping } from "./imgMapping";
import { runSetupLoad } from "./loadSchedule";
import { addCustomDialog, setupCustomDialog } from "./dialog";
import { setupEntries } from "./entries";

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
     */
    static addGroupedAssets(groupedAssets, descriptions = undefined) {
        Object.entries(groupedAssets).forEach(([group, assets]) => {
            assets.forEach((asset) => {
                const description = descriptions?.[group]?.[asset.Name];
                loadAsset(/**@type {CustomGroupName}*/ (group), asset, { description });
            });
        });
    }

    /**
     *
     * @param { CustomGroupName } group 身体组名字
     * @param {string} asset 物品名字
     * @param { FuncWork<[Mutable<AssetGroup>, Mutable<Asset>]> } work
     */
    static modifyAsset(group, asset, work) {
        modifyAsset(group, asset, work);
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
     * 初始化，并且添加自定义的组件功能
     * @param {FuncWork} componentSetup
     */
    static init(componentSetup) {
        // 初始化所有功能，顺序基本无所谓
        setupImgMapping();
        setupCustomDialog();
        setupEntries();

        componentSetup();
        runSetupLoad();
    }
}
