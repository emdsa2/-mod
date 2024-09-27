import { values as CN } from "./CN";
import { values as EN } from "./EN";
import { values as RU } from "./RU";
import { values as UA } from "./UA";

const map = {
    TW: CN,
    CN,
    EN,
    RU,
    UA,
};

/**
 * @param {TextTag} tag
 */
export function i18n(tag) {
    return (map[TranslationLanguage] || CN)[tag] || tag;
}
