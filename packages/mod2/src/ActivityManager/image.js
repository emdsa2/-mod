import { RecordMap } from "@mod-utils/fp";
import ModManager from "@mod-utils/ModManager";

/** @type { Record<string,string> } */
const imageMapping = {};

/**
 * 添加自定义图片映射
 * @param { Record<string,string> } mappings
 */
export function addImgMapping(mappings) {
    Object.entries(mappings).forEach(([key, value]) => {
        imageMapping[key] = value;
    });
}

/**
 * 添加自定义动作图片映射
 * @param {_.PRecord<string , string>} mappings
 * @param { "activity" | AssetGroupName } category
 */
export function addActivityImageMapping(mappings, category = "activity") {
    if (category === "activity") {
        Object.entries(mappings).forEach(([key, value]) => {
            // Assets/Female3DCG/Activity/%E5%8F%89%E8%85%B0.png
            imageMapping[`Assets/Female3DCG/Activity/${key}.png`] = `Assets/Female3DCG/Activity/${value}.png`;
        });
    } else {
        Object.entries(mappings).forEach(([key, value]) => {
            imageMapping[
                `Assets/Female3DCG/${category}/${key}.png`
            ] = `Assets/Female3DCG/${category}/Preview/${value}.png`;
        });
    }
}

export function setupImgMapping() {
    const mapImgSrc = (src) => {
        if (typeof src !== "string") return src;
        if (imageMapping[src]) src = imageMapping[src];
        return src;
    };

    ["DrawImageEx", "GLDrawImage", "DrawGetImage"].forEach(
        (/** @type {"DrawImageEx" |"GLDrawImage"| "DrawGetImage"}*/ fn) =>
            ModManager.progressiveHook(fn, 1).inject((args, next) => (args[0] = mapImgSrc(args[0])))
    );
}
