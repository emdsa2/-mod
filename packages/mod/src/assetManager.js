import ModManager from "./modManager";
import { assetOverrides, baseURL } from "./rollupHelper";

/**
 * @typedef { {icons?: Record<string,string>, descriptions?: TranslationCustomDialog, translations?: TranslationCustomDialog} } ConfigData;
 */

/**
 * 添加物品
 * @param {AssetGroup} group
 * @param {CustomAssetDefinition} asset
 * @param {ExtendedItemMainConfig} extendedConfig
 * @param {TranslationEntry} [description]
 */
function addAssetRaw(group, asset, extendedConfig, description = undefined) {
    AssetAdd(group, /** @type {AssetDefinition} */ (asset), extendedConfig);

    if (description)
        Object.entries(description).forEach(([key, value]) => {
            if (!AssetManager.assetNames[key]) AssetManager.assetNames[key] = {};
            AssetManager.assetNames[key][group.Name] = value;
        });

    AssetManager.flagCustomAsset(group.Name, asset.Name);
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

    const second_grp = group === "ItemTorso" && (AssetGroupGet("Female3DCG", "ItemTorso2") || undefined);

    addAssetWithMirror(group_obj, second_grp, asset, extended, description);
}

export default class AssetManager {
    /** @type { TranslationRecord<CustomGroupName, Record<string, string>> } */
    static assetNames = {};

    /**
     * 添加物品，如果添加的是ItemTorso或ItemTorso2，会自动添加镜像
     * @param { CustomGroupName } group 物品组
     * @param { CustomAssetDefinition } asset 物品定义
     * @param { AssetArchetypeConfig } [extended] 可选设置物品扩展属性
     * @param { TranslationEntry } [description] 可选设置物品名字
     */
    static addAsset(group, asset, extended = undefined, description = undefined) {
        addAssetBase(group, asset, extended, description);
    }

    /**
     * 添加很多物品
     * @param { CustomGroupName } group
     * @param { CustomAssetDefinition[] } assets
     */
    static addAssets(group, assets) {
        assets.forEach((asset) => addAssetBase(group, asset));
    }

    /**
     * 添加很多区域的很多物品
     * @param { CustomGroupedAssetDefinitions } groupedAssets
     */
    static addGroupedAssets(groupedAssets) {
        Object.entries(groupedAssets).forEach(([group, assets]) => {
            AssetManager.addAssets(/**@type {CustomGroupName}*/ (group), assets);
        });
    }

    /**
     * 添加一个物品的扩展设置
     * @param {CustomGroupName} groupName
     * @param {string} assetName
     * @param {AssetArchetypeConfig} extendedConfig
     */
    static addExtendedSetting(groupName, assetName, extendedConfig) {
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

    /** @type { TranslationCustomDialog } */
    static groupNames = {};
    static setGroupName(translation, group, name) {
        if (!this.groupNames[translation]) this.groupNames[translation] = {};
        this.groupNames[translation][group] = name;
    }

    /**
     * 添加新的身体组
     * @param {CustomGroupDefinition} groupDef
     * @param {TranslationEntry} [description]
     */
    static addGroup(groupDef, description = undefined) {
        AssetManager.queueSetup(() => {
            AssetGroupAdd("Female3DCG", /** @type {AssetGroupDefinition} */ (groupDef));

            groupDef.Asset.forEach((asset) => {
                addAssetBase(groupDef.Group, /** @type {CustomAssetDefinition} */ (asset));
            });

            if (description)
                Object.entries(description).forEach(([key, value]) =>
                    AssetManager.setGroupName(key, groupDef.Group, value)
                );
            else AssetManager.setGroupName("CN", groupDef.Group, groupDef.Group.replace("_Luzi", ""));
        });
    }

    /** @type { CopyGroupInfo [] } */
    static copyGroups = [];

    /**
     * 添加新的身体组，从已有组复制配置
     * @param { CustomGroupName } newGroup
     * @param { AssetGroupName } copyFrom
     * @param { TranslationEntry } [description]
     */
    static addCopyGroup(newGroup, copyFrom, description = undefined) {
        AssetManager.queueSetup(() => {
            const group = AssetGroupGet("Female3DCG", copyFrom);
            if (!group) {
                console.warn(`Group ${copyFrom} not found`);
                return;
            }
            const mGroup = /**@type {any}*/ (Object.assign({}, group, { Group: newGroup }));
            AssetGroupAdd("Female3DCG", mGroup);
        });
        if (description)
            Object.entries(description).forEach(([key, value]) => AssetManager.setGroupName(key, newGroup, value));
        else AssetManager.setGroupName("CN", newGroup, newGroup.replace("_Luzi", ""));
    }

    /** @type {TranslationCustomDialog} */
    static customDialog = {};

    /**
     * 添加自定义对话，如果包含ItemTorso或ItemTorso2，会自动添加镜像
     * @param {TranslationCustomDialog} dialog
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
        let inLoadingAsset = false;
        ModManager.hookFunction("AssetLoad", 1, (args, next) => {
            inLoadingAsset = true;
            next(args);
        });

        ModManager.hookFunction("AssetLoadDescription", 1, (args, next) => {
            if (inLoadingAsset) {
                inLoadingAsset = false;
                while (AssetManager.queueSetupList.length > 0) {
                    const setup = AssetManager.queueSetupList.shift();
                    setup();
                }
            }
            next(args);
        });

        ModManager.hookFunction("TranslationAsset", 1, (args, next) => {
            next(args);

            const lang_repo = AssetManager.groupNames[TranslationLanguage] || AssetManager.groupNames["CN"] || {};
            Object.entries(lang_repo).forEach(([group, name]) => {
                const group_obj = AssetGroupGet("Female3DCG", /** @type {AssetGroupName} */ (group));
                if (group_obj) /** @type {Mutable<AssetGroup>} */ (group_obj).Description = name;
            });

            Object.entries(AssetManager.customAssetFlag).forEach(([group, assets]) => {
                assets.forEach((asset) => {
                    const group_repo =
                        (AssetManager.assetNames[TranslationLanguage] || AssetManager.assetNames["CN"] || {})[
                            asset.Group.Name
                        ] || {};
                    /** @type {Mutable<Asset>}*/ (asset).Description =
                        group_repo[asset.Name] || asset.Name.replace("_Luzi", "");
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
