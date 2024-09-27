import { values as CN } from "./CN";
import { values as EN } from "./EN";

const map = {
    TW: CN,
    CN,
    EN,
};

/**
 * @param {TextTag} tag
 */
export function i18n(tag) {
    return (map[TranslationLanguage] || CN)[tag] || tag;
}
