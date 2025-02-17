import ModManager from "@mod-utils/ModManager";
import { Path } from "@mod-utils/path";
import { sleepUntil } from "@mod-utils/sleep";
import { Mapping } from "../ImageMapping";

const mapping = Mapping();

/**
 * 添加自定义图片映射
 * @param { Record<string,string> } mappings
 */
export function addImgMapping(mappings) {
    mapping.addImgMapping(mappings);
}

/**
 * 添加自定义动作图片映射
 * @param {_.PRecord<string , string>} mappings
 * @param { "Activity" | AssetGroupName } category
 */
export function addActivityImageMapping(mappings, category = "Activity") {
    if (category === "Activity") {
        mapping.addImgMapping(
            Object.entries(mappings).reduce((pv, [key, value]) => {
                pv[`Assets/Female3DCG/Activity/${key}.png`] = `Assets/Female3DCG/Activity/${value}.png`;
                return pv;
            }, /** @type {Record<string , string>}*/ ({}))
        );
    } else {
        mapping.addImgMapping(
            Object.entries(mappings).reduce((pv, [key, value]) => {
                pv[`Assets/Female3DCG/Activity/${key}.png`] = `Assets/Female3DCG/${category}/Preview/${value}.png`;
                return pv;
            }, /** @type {Record<string , string>}*/ ({}))
        );
    }
}

export function setupImgMapping() {
    (async () => {
        await sleepUntil(() => window["ElementButton"] !== undefined);

        ModManager.hookFunction("ElementButton.CreateForActivity", 0, (args, next) => {
            const _args = /** @type {any[]} */ (args);
            mapping.mapImg(Path.ActivityPreviewIconPath(/** @type {ItemActivity} */ (args[1])), (image) => {
                _args[4] = { ..._args[4], image };
            });
            return next(args);
        });
    })();
}
