import { baseURL } from "./rollupHelper";

const emptyPNGPath = `data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACXBIWXMAAC4jAAAuIwF4pT92AAAA
G3RFWHRTb2Z0d2FyZQBDZWxzeXMgU3R1ZGlvIFRvb2zBp+F8AAAADUlEQVQI12P4//8/AwAI/AL+
XJ/P2gAAAABJRU5ErkJggg==`;

export class Path {
    /**
     * 资源路径解析，如果以"/"开头或者"http"开头则直接返回，否则拼接基础资源URL
     * @param {string} path
     * @returns {string}
     *
     * @example
     * resolveResource("https://example.com/image.png");
     * // 返回"https://example.com/image.png"
     *
     * @example
     * resolveResource("image.png");
     * // 返回 `${baseURL}image.png`
     *
     */

    static resolve(path) {
        if (path.startsWith("/") || path.startsWith("http")) {
            return path;
        }
        return baseURL + path;
    }

    /**
     * 构建资源映射路径（自动生成四个尺寸）
     * @param {CustomGroupName} group 身体组名称
     * @param {string} asset 物品名称
     * @param {string} layer 图层名称
     * @param {Object} param3
     * @param {CustomGroupName} [param3.overrideGroup] 如果提供，则映射到的地址会使用该组名替换原有组名，注意，不同区域的贴图默认位置可能不同
     * @returns {CustomImageMapping}
     *
     * @example
     * Path.buildAssetImgMapping("Cloth_笨笨蛋Luzi", "礼服", "Bottom");
     * // 返回
     * // {
     * //    "Assets/Female3DCG/Cloth_笨笨蛋Luzi/礼服_Small_Bottom.png":
     * //        "https://example.com/Assets/Female3DCG/Cloth/礼服_Small_Bottom.png",
     * //    "Assets/Female3DCG/Cloth_笨笨蛋Luzi/礼服_Normal_Bottom.png":
     * //        "https://example.com/Assets/Female3DCG/Cloth/礼服_Normal_Bottom.png",
     * //    "Assets/Female3DCG/Cloth_笨笨蛋Luzi/礼服_Large_Bottom.png":
     * //        "https://example.com/Assets/Female3DCG/Cloth/礼服_Large_Bottom.png",
     * //    "Assets/Female3DCG/Cloth_笨笨蛋Luzi/礼服_XLarge_Bottom.png":
     * //        "https://example.com/Assets/Female3DCG/Cloth/礼服_XLarge_Bottom.png",
     * // }
     *
     * @example
     * Path.buildAssetImgMapping("ItemTorso", "很瘦束腰", "B", { overrideGroup: "ItemTorso2" });
     * // 返回
     * // {
     * //    "Assets/Female3DCG/ItemTorso/很瘦束腰_Small_B.png":
     * //        "https://example.com/Assets/Female3DCG/ItemTorso2/很瘦束腰_Small_B.png",
     * //    "Assets/Female3DCG/ItemTorso/很瘦束腰_Normal_B.png":
     * //        "https://example.com/Assets/Female3DCG/ItemTorso2/很瘦束腰_Normal_B.png",
     * //    "Assets/Female3DCG/ItemTorso/很瘦束腰_Large_B.png":
     * //        "https://example.com/Assets/Female3DCG/ItemTorso2/很瘦束腰_Large_B.png",
     * //    "Assets/Female3DCG/ItemTorso/很瘦束腰_XLarge_B.png":
     * //        "https://example.com/Assets/Female3DCG/ItemTorso2/很瘦束腰_XLarge_B.png",
     * // }
     */
    static buildAssetImageMapping(group, asset, layer, { overrideGroup }) {
        return ["Small", "Normal", "Large", "XLarge"]
            .map((size) => [
                `Assets/Female3DCG/${group}/${asset}_${size}_${layer}.png`,
                Path.resolve(`Assets/Female3DCG/${overrideGroup || group}/${asset}_${size}_${layer}.png`),
            ])
            .reduce((acc, [key, value]) => {
                acc[key] = value;
                return acc;
            }, /** @type {CustomImageMapping} */ ({}));
    }

    // image/空.png
    static get 空png() {
        return emptyPNGPath;
    }

    /**
     * 获得资源的图标路径
     * @param {Asset | Item} asset
     * @returns {string}
     */
    static AssetPreviewIconPath(asset) {
        const _asset = "Asset" in asset ? asset.Asset : asset;
        return `Assets/Female3DCG/${_asset.DynamicGroupName}/Preview/${_asset.Name}.png`;
    }

    /**
     * 获得活动的图标路径
     * @param {Activity | ItemActivity} activity
     * @returns {string}
     */
    static ActivityPreviewIconPath(activity) {
        const _activity = "Activity" in activity ? activity.Activity : activity;
        return `Assets/Female3DCG/Activity/${_activity.Name}.png`;
    }
}
