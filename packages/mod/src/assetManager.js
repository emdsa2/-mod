import ModManager from "./modManager";
import { assetOverrides } from "./rollupHelper";

/**
 * @typedef { {icons?: Record<string,string>, descriptions?: CustomLanguageTexts, translations?: CustomLanguageTexts} } ConfigData;
 * @typedef { {asset:CustomAssetDefinition, extended?:AssetArchetypeConfig, config: ConfigData} } AssetInitItem
 */

export default class AssetManager {
    /** @type { Record<string,string> } */
    static iconMap = {};

    /** @type {Record<string, AssetInitItem[]>} */
    static groupInitList = {};

    /**
     * @brief 添加物品
     * @param { AssetGroupName } group
     * @param { CustomAssetDefinition } asset
     * @param { AssetArchetypeConfig | undefined } extended
     * @param { ConfigData } config
     */
    static addAsset(group, asset, extended = undefined, config = {}) {
        const group_obj = AssetGroupGet("Female3DCG", group);

        /**@type {ExtendedItemMainConfig} */
        const extendedConfig = extended
            ? {
                  [group]: {
                      [asset.Name]: extended,
                  },
              }
            : {};

        if (group_obj) {
            AssetAdd(group_obj, asset, extendedConfig);
        } else {
            if (!this.groupInitList[group]) {
                this.groupInitList[group] = [];
            }
            this.groupInitList[group].push({ asset, extended, config });
        }

        config.icons &&
            Object.entries(config.icons).forEach(([key, value]) => {
                this.iconMap[key] = value;
            });
    }

    /**
     * @brief 添加很多物品
     * @param { AssetGroupName } group
     * @param { CustomAssetDefinition[] } assets
     * @param { ConfigData } config
     */
    static addAssets(group, assets, config = {}) {
        const group_obj = AssetGroupGet("Female3DCG", group);
        if (group_obj) {
            assets.forEach((asset) => {
                AssetAdd(group_obj, asset, {});
            });
        } else {
            if (!this.groupInitList[group]) {
                this.groupInitList[group] = [];
            }
            this.groupInitList[group].push(...assets.map((asset) => ({ asset, extended: undefined, config })));
        }

        config.icons &&
            Object.entries(config.icons).forEach(([key, value]) => {
                this.iconMap[key] = value;
            });
    }

    /**
     * @brief 添加一个物品的扩展设置
     *
     * @param {AssetGroupName} groupName
     * @param {string} assetName
     * @param {AssetArchetypeConfig} extendedConfig
     */
    static addExtendedSetting(groupName, assetName, extendedConfig) {
        const A = AssetGet("Female3DCG", groupName, assetName);
        if (A == null) {
            console.warn(`Asset ${groupName}/${assetName} not found`);
            return;
        }
        const assetBaseConfig = AssetFindExtendedConfig({ [assetName]: extendedConfig }, groupName, assetName);
        if (assetBaseConfig != null) {
            AssetBuildExtended(A, assetBaseConfig, { [groupName]: extendedConfig });
        }
    }

    /**
     * @brief 添加很多区域的很多物品
     * @param { CustomGroupedAssetDefinitions } groupedAssets
     */
    static addGroupedAssets(groupedAssets, extended = undefined) {
        Object.entries(groupedAssets).forEach(([group, assets]) => {
            this.addAssets(/** @type {AssetGroupName} */ (group), assets);
        });
    }

    /**
     * @brief 添加新的身体组
     * @param {CustomGroupDefinition} groupDefinition
     */
    static addGroup(groupDefinition) {
        AssetGroupAdd("Female3DCG", /** @type {AssetGroupDefinition} */ (groupDefinition));

        const groupName = groupDefinition.Group;
        if (this.groupInitList[groupName]) {
            this.groupInitList[groupName].forEach((item) => {
                AssetManager.addAsset(
                    /** @type {AssetGroupName} */ (groupName),
                    item.asset,
                    item.extended,
                    item.config
                );
            });
            delete this.groupInitList[groupName];
        }
    }

    /** @type {Record<string,string>} */
    static assetMapping = {};

    static init() {
        Object.entries(assetOverrides).forEach(([key, value]) => {
            this.assetMapping[key] = `https://emdsa2.github.io/-mod/${value}`;
        });

        ModManager.hookFunction("DrawImageResize", 1, (args, next) => {
            const data = args[0];
            if (typeof data === "string") {
                if (data.includes("_笨笨蛋Luzi")) {
                    args[0] = data.replace("_笨笨蛋Luzi", "");
                }

                if (data.includes("_笨笨笨蛋Luzi2")) {
                    args[0] = data.replace("_笨笨笨蛋Luzi2", "");
                }

                if (AssetManager.iconMap[data]) {
                    args[0] = AssetManager.iconMap[data];
                }

                if (this.assetMapping[data]) {
                    args[0] = this.assetMapping[data];
                }

                // if (data.includes("_Luzi")) {
                //     args[0] = data.replace("Assets", "https://emdsa2.github.io/-mod");
                // }

                // if (data.includes("阿巴阿巴")) {
                //     args[0] = "https://emdsa2.github.io/-mod/Female3DCG/ItemHandheld/Preview/阿巴阿巴_Luzi.png";
                // }
            }

            return next(args);
        });
    }
}
