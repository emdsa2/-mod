import ModManager from "./modManager";
import { assetOverrides, baseURL } from "./rollupHelper";

/**
 * @typedef { {icons?: Record<string,string>, descriptions?: CustomDialogSet, translations?: CustomDialogSet} } ConfigData;
 * @typedef { {asset:CustomAssetDefinition, extended?:AssetArchetypeConfig} } AssetInitItem
 */

function addAssetRaw(group, asset, extended) {}

export default class AssetManager {
    /** @type {Record<string, AssetInitItem[]>} */
    static groupInitList = {};

    /** @type {Record<string, string>} */
    static names = {};

    /**
     * 添加物品，如果添加的是ItemTorso或ItemTorso2，会自动添加镜像
     * @param { AssetGroupName } group 物品组
     * @param { CustomAssetDefinition } asset 物品定义
     * @param { AssetArchetypeConfig } [extended] 可选设置物品扩展属性
     * @param { string } [name] 可选设置物品名字
     */
    static addAsset(group, asset, extended = undefined, name = undefined) {
        const group_obj = AssetGroupGet("Female3DCG", group);

        if (group_obj) {
            /**@type {ExtendedItemMainConfig} */
            const extendedConfig = extended
                ? {
                      [group]: {
                          [asset.Name]: extended,
                      },
                  }
                : {};
            AssetAdd(group_obj, asset, extendedConfig);
        } else {
            if (!this.groupInitList[group]) {
                this.groupInitList[group] = [];
            }
            this.groupInitList[group].push({ asset, extended });
        }

        if (name) {
            this.names[asset.Name] = name;
        } else {
            this.names[asset.Name] = asset.Name.replace("_Luzi", "");
        }

        AssetManager.flagCustomAsset(group, asset.Name);

        /** @type { (group_obj: AssetGroup, asset: CustomAssetDefinition, extended?:AssetArchetypeConfig ) => void } */
        const addTorsoMirror = (group_obj, asset, extended) => {
            if (!extended) AssetAdd(group_obj, asset, {});
            else {
                AssetAdd(group_obj, asset, {
                    ItemTorso: {
                        [asset.Name]: extended,
                    },
                    ItemTorso2: {
                        [asset.Name]: /** @type {AssetArchetypeConfig} */ ({
                            Archetype: extended.Archetype,
                            CopyConfig: {
                                GroupName: "ItemTorso",
                                AssetName: asset.Name,
                            },
                        }),
                    },
                });
            }
            AssetManager.flagCustomAsset(group_obj.Name, asset.Name);
        };

        if (group === "ItemTorso") {
            const group_obj = AssetGroupGet("Female3DCG", "ItemTorso2");
            addTorsoMirror(group_obj, asset, extended);
        } else if (group === "ItemTorso2") {
            const group_obj = AssetGroupGet("Female3DCG", "ItemTorso");
            addTorsoMirror(group_obj, asset, extended);
        }
    }

    /**
     * 添加很多物品
     * @param { AssetGroupName } group
     * @param { CustomAssetDefinition[] } assets
     */
    static addAssets(group, assets) {
        assets.forEach((asset) => {
            this.addAsset(group, asset);
        });
    }

    /**
     * 添加很多区域的很多物品
     * @param { CustomGroupedAssetDefinitions } groupedAssets
     */
    static addGroupedAssets(groupedAssets) {
        Object.entries(groupedAssets).forEach(([group, assets]) => {
            AssetManager.addAssets(/** @type {AssetGroupName} */ (group), assets);
        });
    }

    /**
     * 添加一个物品的扩展设置
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
     * 添加新的身体组
     * @param {CustomGroupDefinition} groupDefinition
     */
    static addGroup(groupDefinition) {
        AssetGroupAdd("Female3DCG", /** @type {AssetGroupDefinition} */ (groupDefinition));

        const groupName = groupDefinition.Group;
        if (this.groupInitList[groupName]) {
            this.groupInitList[groupName].forEach((item) => {
                AssetManager.addAsset(/** @type {AssetGroupName} */ (groupName), item.asset, item.extended);
            });
            delete this.groupInitList[groupName];
        }
    }

    /** @type {CustomDialogSet} */
    static customDialog = {};

    /**
     * 添加自定义对话，如果包含ItemTorso或ItemTorso2，会自动添加镜像
     * @param {CustomDialogSet} dialog
     */
    static addCustomDialog(dialog) {
        Object.entries(dialog).forEach(([key, value]) => {
            if (!this.customDialog[key]) {
                this.customDialog[key] = {};
            }
            Object.entries(value).forEach(([k, v]) => {
                this.customDialog[key][k] = v;
                if (k.includes("ItemTorso2")) {
                    this.customDialog[key][k.replace("ItemTorso2", "ItemTorso")] = v;
                } else if (k.includes("ItemTorso")) {
                    this.customDialog[key][k.replace("ItemTorso", "ItemTorso2")] = v;
                }
            });
        });
    }

    /** @type {Record<string,string>} */
    static basicImgMapping = {};

    /** @type { Record<string,string> } */
    static customImgMapping = {};

    /**
     * 添加自定义图片映射
     * @param { Record<string,string> } mappings
     */
    static addImgMapping(mappings) {
        Object.entries(mappings).forEach(([key, value]) => {
            this.customImgMapping[key] = value;
        });
    }

    /** @type {Record<string, Asset[]> } */
    static customAssetFlag = {};

    /**
     * 标记一个自定义物品，免费添加到物品栏
     * @param {string} group
     * @param {string} asset
     */
    static flagCustomAsset(group, asset) {
        if (!this.customAssetFlag[group]) {
            this.customAssetFlag[group] = [];
        }
        const as = AssetGet("Female3DCG", /** @type {AssetGroupName}*/ (group), asset);
        if (as) this.customAssetFlag[group].push(as);
    }

    /** @type {(()=>void)[]} */
    static queueSetupList = [];
    /**
     * 添加物品初始化函数
     * @param {()=>void} setup
     */
    static queueSetup(setup) {
        this.queueSetupList.push(setup);
    }

    static init() {
        // 初始化图片映射
        (() => {
            /** @type { {container: AssetOverrideContainer, path: string}[]} */
            let processList = [{ container: assetOverrides, path: "" }];

            while (processList.length > 0) {
                let current = processList.pop();
                Object.entries(current.container).forEach(([key, value]) => {
                    const assetPath = `${current.path}${key}`;
                    if (typeof value === "number") {
                        AssetManager.basicImgMapping[assetPath] = `${baseURL}${assetPath}`;
                    } else {
                        processList.push({ container: value, path: `${assetPath}/` });
                    }
                });
            }
        })();

        // 添加钩子函数用于初始化
        ModManager.hookFunction("AssetLoadDescription", 1, (args, next) => {
            AssetManager.queueSetupList.forEach((setup) => setup());
            next(args);
        });

        ModManager.hookFunction("TranslationAsset", 1, (args, next) => {
            next(args);

            Object.entries(AssetManager.customAssetFlag).forEach(([group, assets]) => {
                assets.forEach((asset) => {
                    /** @type {Mutable<Asset>}*/ (asset).Description =
                        AssetManager.names[asset.Name] || asset.Name.replace("_Luzi", "");
                });
            });
        });

        // 跨域图片加载
        ModManager.patchFunction("GLDrawLoadImage", {
            "Img.src = url;": 'Img.crossOrigin = "Anonymous";\n\t\tImg.src = url;',
        });

        // 图片映射
        const mapImgSrc = (src) => {
            if (typeof src !== "string") return src;

            if (src.includes("_笨笨蛋Luzi")) {
                src = src.replace("_笨笨蛋Luzi", "");
            } else if (src.includes("_笨笨笨蛋Luzi2")) {
                src = src.replace("_笨笨笨蛋Luzi2", "");
            }

            if (AssetManager.customImgMapping[src]) {
                return AssetManager.customImgMapping[src];
            }

            return AssetManager.basicImgMapping[src] || src;
        };

        ModManager.hookFunction("DrawImageResize", 1, (args, next) => {
            args[0] = mapImgSrc(args[0]);
            return next(args);
        });

        ModManager.hookFunction("GLDrawImage", 1, (args, next) => {
            args[0] = mapImgSrc(args[0]);
            return next(args);
        });

        ModManager.hookFunction("DrawImageCanvas", 1, (args, next) => {
            args[0] = mapImgSrc(args[0]);
            return next(args);
        });

        // 将Mod物品添加到物品栏
        let dialogBuildFlag = false;
        ModManager.hookFunction("DialogInventoryBuild", 1, (args, next) => {
            if (args[2]) return next(args);

            dialogBuildFlag = true;
            next(args);
            dialogBuildFlag = false;
        });

        ModManager.hookFunction("DialogInventoryAdd", 1, (args, next) => {
            next(args);
            if (dialogBuildFlag) {
                dialogBuildFlag = false;
                const groupName = args[1].Asset.Group.Name;
                if (AssetManager.customAssetFlag[groupName]) {
                    AssetManager.customAssetFlag[groupName].forEach((asset) =>
                        next([args[0], { Asset: asset }, false])
                    );
                }
            }
        });

        // 添加自定义对话
        ModManager.hookFunction("AssetTextGet", 1, (args, next) => {
            return (
                ((key) => {
                    const lang = TranslationLanguage == "TW" ? "CN" : TranslationLanguage;
                    const dialogs = AssetManager.customDialog[lang] || AssetManager.customDialog["CN"];
                    return dialogs && dialogs[key];
                })(args[0]) || next(args)
            );
        });
    }
}
