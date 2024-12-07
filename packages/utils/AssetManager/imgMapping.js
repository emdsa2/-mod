import { sleepUntil } from "@mod-utils/sleep";
import ModManager from "../ModManager";
import { assetOverrides, baseURL } from "../rollupHelper";
import { Path } from "@mod-utils/path";

/** @type {Record<string,string>} */
const basicImgMapping = {};

/** @type { Record<string,string> } */
const customImgMapping = {};

/**
 * 添加自定义图片映射
 * @param { Record<string,string> } mappings
 */
export function addImgMapping(mappings) {
    Object.entries(mappings).forEach(([key, value]) => {
        customImgMapping[key] = value;
    });
}

export function setupImgMapping() {
    // 初始化图片映射
    (() => {
        /** @type { {container: AssetOverrideContainer, path: string}[]} */
        let processList = [{ container: assetOverrides, path: "" }];

        while (processList.length > 0) {
            let current = processList.pop();
            Object.entries(current.container).forEach(([key, value]) => {
                const assetPath = `${current.path}${key}`;
                if (typeof value === "number") {
                    basicImgMapping[assetPath] = `${baseURL}${assetPath}`;
                } else {
                    processList.push({ container: value, path: `${assetPath}/` });
                }
            });
        }
    })();

    // 跨域图片加载
    ModManager.patchFunction("GLDrawLoadImage", {
        "Img.src = url;": 'Img.crossOrigin = "Anonymous";\n\t\tImg.src = url;',
    });

    /**
     * 图片映射。分为两个阶段，基础映射和自定义映射。基础映射是在打包时生成的，自定义映射是在运行时添加的。
     *
     * 自定义映射必须得到基础映射或者非映射的图片。
     *
     * 典型过程如下：
     *
     * Assets/Female3DCG/Cloth_笨笨蛋Luzi/Kneel/礼服_Luzi_Large_Bottom.png
     *
     * -> Assets/Female3DCG/Cloth/Kneel/礼服_Luzi_Large_Bottom.png (自定义映射，镜像身体组)
     *
     * -> ${baseURL}/Assets/Female3DCG/Cloth/Kneel/礼服_Luzi_Large_Bottom.png (基础映射)
     */
    const mapImgSrc = (src) => {
        if (typeof src !== "string") return src;
        if (!src.endsWith(".png")) return src;

        if (customImgMapping[src]) {
            src = customImgMapping[src];
        }

        if (basicImgMapping[src]) {
            src = basicImgMapping[src];
        }

        return src;
    };

    ["DrawImageEx", "DrawImageResize", "GLDrawImage", "DrawGetImage"].forEach(
        (/** @type {"DrawImageEx" | "GLDrawImage" | "DrawGetImage"}*/ fn) => {
            ModManager.progressiveHook(fn, 0).inject((args, next) => (args[0] = mapImgSrc(args[0])));
        }
    );

    (async () => {
        if (GameVersion === "R110") {
            await sleepUntil(() => window["CraftingElements"] !== undefined);

            ModManager.hookFunction("CraftingElements._RadioButton", 5, (args, next) => {
                const ret = next(args);
                const img = ret.querySelector("img");
                if (img?.src) {
                    const idx = img.src.indexOf("Assets/");
                    if (idx !== -1) {
                        img.src = mapImgSrc(decodeURI(img.src.slice(idx)));
                    }
                }
                return ret;
            });
        } else {
            // R111
            await sleepUntil(() => window["ElementButton"] !== undefined);

            ModManager.hookFunction("ElementButton.CreateForAsset", 0, (args, next) => {
                const _args = /** @type {any[]} */ (args);
                const image = mapImgSrc(Path.AssetPreviewIconPath(/** @type {Asset|Item} */ (_args[1])));
                _args[4] = { ..._args[4], image };
                return next(args);
            });
        }
    })();
}
