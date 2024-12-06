import { sleepUntil } from "@mod-utils/sleep";
import ModManager from "../ModManager";
import { assetOverrides, baseURL } from "../rollupHelper";

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
     * 图片映射
     *
     * 典型过程如下：
     *
     * Assets/Female3DCG/Cloth_笨笨蛋Luzi/Kneel/礼服_Luzi_Large_Bottom.png
     *
     * -> Assets/Female3DCG/Cloth/Kneel/礼服_Luzi_Large_Bottom.png
     *
     * -> ${baseURL}/Assets/Female3DCG/Cloth/Kneel/礼服_Luzi_Large_Bottom.png
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

    if (GameVersion === "R110") {
        ["DrawImageEx", "DrawImageResize", "GLDrawImage", "DrawGetImage"].forEach(
            (/** @type {"DrawImageEx" | "GLDrawImage" | "DrawGetImage"}*/ fn) => {
                ModManager.progressiveHook(fn, 0).inject((args, next) => (args[0] = mapImgSrc(args[0])));
            }
        );

        (async () => {
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
        })();
    } else { // R111
        ModManager.hookFunction("ElementButton.CreateForAsset", 0, (args, next) => {
            const button = next(args);
            const img = button.querySelector("img.button-image");
            if (img?.src) {
                const idx = img.src.indexOf("Assets/");
                if (idx !== -1) {
                    img.src = mapImgSrc(decodeURI(img.src.slice(idx)));
                }
            }
            return button;
        });
    }
}
