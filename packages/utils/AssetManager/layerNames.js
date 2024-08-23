/**
 * @typedef { `${CustomGroupName}${string}${string}` } CustomLayerNameKey
 * @typedef { {desc:Translation.Entry, fallback:string , noOverride:boolean} } LayerNameDetails
 */

import { Option } from "../fp";
import ModManager from "../ModManager";

/** @type {  Map<CustomLayerNameKey, LayerNameDetails>} */
const layerNames = new Map();

/** @type { (()=>TextCache) | undefined } */
let cache = undefined;

/**
 *
 * @param { CustomLayerNameKey } key
 * @param { Translation.Entry } desc
 * @param { string } fallback
 * @param { boolean } [noOverride]
 */
export function pushLayerName(key, desc, fallback, noOverride = false) {
    const lang = /** @type {ServerChatRoomLanguage} */ (TranslationLanguage);

    if (cache?.()?.cache) {
        if (cache().cache[key] && noOverride) return;
        cache().cache[key] = desc[lang] || desc["CN"] || fallback;
    } else {
        if (noOverride && layerNames.has(key)) return;
        layerNames.set(key, { desc, fallback, noOverride });
    }
}

/**
 * 添加图层名称
 * @param { CustomGroupName } group 身体组名字
 * @param { CustomAssetDefinition } assetDef 物品定义
 * @param { Object } config
 * @param { Translation.CustomRecord<string,string> } [ config.entries ] 图层-名字，按照语言分组
 * @param { boolean } [ config.noOverride ] 是否覆盖已有的图层名字
 */
export function addLayerNames(group, assetDef, { entries, noOverride } = {}) {
    const resolve = (layer) =>
        Object.entries(entries || { CN: { [layer]: layer.replace(/_.*?Luzi$/, "") } })
            .map(([key, value]) => /**@type { [ ServerChatRoomLanguage, string ] } */ ([key, value[layer] || key]))
            .reduce((acc, [key, value]) => {
                acc[key] = value;
                return acc;
            }, /**@type { Partial<Record<ServerChatRoomLanguage, string>> } */ ({}));

    assetDef.Layer?.forEach(({ Name }) => {
        pushLayerName(`${group}${assetDef.Name}${Name}`, resolve(Name), Name, !!noOverride);
    });
}

// 创建一个异步任务，等待ItemColorLayerNames加载完成后，将缓存的图层名称写入ItemColorLayerNames
export function setupLayerNameLoad() {
    const FuncK = ModManager.randomGlobalFunction("LayerNameInject", (cacheGetter) => {
        cache = cacheGetter;
    });
    ModManager.patchFunction("ItemColorLoad", {
        "ItemColorLayerNames = new TextCache": `${FuncK}(()=>ItemColorLayerNames);\nItemColorLayerNames = new TextCache`,
    });
    ModManager.progressiveHook("ItemColorLoad", 1)
        .next()
        .inject(() =>
            Option(() => cache?.()?.cache).value_then((_) => {
                layerNames.forEach((value, ckeys) => {
                    pushLayerName(
                        /** @type {CustomLayerNameKey} */ (ckeys),
                        value.desc,
                        value.fallback,
                        value.noOverride
                    );
                });
            })
        );
}
