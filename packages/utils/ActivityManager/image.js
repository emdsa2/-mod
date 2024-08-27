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
 * @param { "Activity" | AssetGroupName } category
 */
export function addActivityImageMapping(mappings, category = "Activity") {
    if (category === "Activity") {
        Object.entries(mappings).forEach(([key, value]) => {
            imageMapping[`Assets/Female3DCG/Activity/${key}.png`] = `Assets/Female3DCG/Activity/${value}.png`;
        });
    } else {
        Object.entries(mappings).forEach(([key, value]) => {
            imageMapping[
                `Assets/Female3DCG/Activity/${key}.png`
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
            ModManager.progressiveHook(fn, 9).inject((args, next) => (args[0] = mapImgSrc(args[0])))
    );
}
