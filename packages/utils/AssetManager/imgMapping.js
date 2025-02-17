import { sleepUntil } from "@mod-utils/sleep";
import ModManager from "../ModManager";
import { assetOverrides, resourceBaseURL } from "../rollupHelper";
import { Path } from "@mod-utils/path";
import { Mapping } from "../ImageMapping";

const mapping = Mapping();

/**
 * 添加自定义图片映射
 * @param { Record<string,string> } mappings
 */
export function addImgMapping(mappings) {
    mapping.addImgMapping(mappings);
}

export function setupImgMapping() {
    // 初始化图片映射
    (async () => {
        const basicImgMapping = /** @type {Record<string,string>} */ ({});

        /** @type { {container: AssetOverrideContainer, path: string}[]} */
        let processList = [{ container: assetOverrides, path: "" }];

        while (processList.length > 0) {
            let current = processList.pop();
            Object.entries(current.container).forEach(([key, value]) => {
                const assetPath = `${current.path}${key}`;
                if (typeof value !== "object") {
                    basicImgMapping[assetPath] = `${resourceBaseURL}${assetPath}?v=${value}`;
                } else {
                    processList.push({ container: value, path: `${assetPath}/` });
                }
            });
        }
        return basicImgMapping;
    })().then((mappings) => mapping.setBasicImgMapping(mappings));

    // 跨域图片加载
    ModManager.patchFunction("GLDrawLoadImage", {
        "Img.src = url;": 'Img.crossOrigin = "Anonymous";\n\t\tImg.src = url;',
    });

    ["DrawImageEx", "DrawImageResize", "GLDrawImage", "DrawGetImage"].forEach(
        (/** @type {"DrawImageEx" | "GLDrawImage" | "DrawGetImage"}*/ fn) => {
            ModManager.progressiveHook(fn, 0).inject((args, next) => (args[0] = mapping.mapImgSrc(args[0])));
        }
    );

    (async () => {
        await sleepUntil(() => window["ElementButton"] !== undefined);

        ModManager.hookFunction("ElementButton.CreateForAsset", 0, (args, next) => {
            const _args = /** @type {any[]} */ (args);
            mapping.mapImg(Path.AssetPreviewIconPath(/** @type {Asset|Item} */ (_args[1])), (image) => {
                _args[4] = { ..._args[4], image };
            });
            return next(args);
        });

        const func = ModManager.randomGlobalFunction("ECHOMapping", (src) => mapping.mapImgSrc(src));

        ModManager.patchFunction("ElementButton._ParseIcons", {
            "src = `./Assets/Female3DCG/ItemMisc/Preview/${icon}.png`": `src = ${func}(\`./Assets/Female3DCG/ItemMisc/Preview/\${icon}.png\`)`,
        });
    })();
}
