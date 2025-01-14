import ModManager from "@mod-utils/ModManager";
import { translation as BCAR } from "./BCAR";
import { translation as BCX } from "./BCX";
import { translation as FBC } from "./FBC";
import { activities, translation as LSCG } from "./LSCG";
import { translation as MBS } from "./MBS";
import { translation as WCE } from "./WCE";
import { translation as MPA } from "./MPA";
import { translation as DOGS } from "./DOGS";
import { translation as BCTweaks } from "./BCTweaks";
import { translationsDTF, translationsDTF2, act_dialogs, pronouns } from "./regexRep";

const translations = [BCAR, BCX, FBC, LSCG, MBS, WCE, MPA, DOGS, BCTweaks].reduce((pv, cv) => Object.assign(pv, cv), {});

function tryReplaceWithNames(key) {
    const PName = Player?.Name;
    const SName = InformationSheetSelection?.Name;
    if (!PName || !SName) return key;
    if (key.includes(PName) || key.includes(SName)) {
        translationsDTF.forEach(({ regex, replacement }) => (key = key.replace(regex, replacement)));
    } else {
        // TODO 不知道这样写对不对 0 0    这个是翻译不带玩家名字的文本的
        translationsDTF2.forEach(({ regex, replacement }) => (key = key.replace(regex, replacement)));
    }
    return key;
}

/**
 *
 * @param {string} key
 * @returns {string}
 */
function replaceTranslate(key) {
    if (!key) return key;

    if (TranslationLanguage !== "CN" && TranslationLanguage !== "TW") return key;
    key = tryReplaceWithNames(key);
    return translations[key] || key;
}

export function setup() {
    ModManager.hookFunction("DrawText", 10, (args, next) => {
        args[0] = replaceTranslate(args[0]);
        next(args);
    });

    ModManager.hookFunction("DrawTextFit", 10, (args, next) => {
        args[0] = replaceTranslate(args[0]);
        next(args);
    });

    ModManager.hookFunction("DrawTextWrap", 10, (args, next) => {
        args[0] = replaceTranslate(args[0]);
        next(args);
    });

    ModManager.hookFunction("DynamicDrawText", 10, (args, next) => {
        args[0] = replaceTranslate(args[0]);
        next(args);
    });

    ModManager.hookFunction("ActivityDictionaryText", 1, (args, next) => {
        const ret = next(args);
        if (TranslationLanguage === "CN" || TranslationLanguage === "TW") return activities[ret] || ret;
        return ret;
    });

    ModManager.hookFunction("ChatRoomMessage", 0, (args, next) => {
        if (TranslationLanguage === "CN" || TranslationLanguage === "TW") {
            const { Content, Type, Dictionary } = args[0];
            if (Content === "Beep" && Type === "Action") {
                // 旧式BCX自定义动作
                const target = /** @type {TextDictionaryEntry | undefined}*/ (
                    Dictionary.find((item) => {
                        const dtag = /** @type {TextDictionaryEntry}*/ (item);
                        return dtag.Tag === "msg";
                    })
                );

                if (target) {
                    act_dialogs.forEach(({ regex, replacement }) => {
                        target.Text = target.Text.replace(regex, replacement);
                    });
                    pronouns.forEach(({ regex, replacement }) => {
                        target.Text = target.Text.replace(regex, replacement);
                    });
                }
            }
        }

        next(args);
    });
}
