import ModManager from "@mod-utils/ModManager";
import { translation as BCAR } from "./BCAR";
import { translation as BCX } from "./BCX";
import { translation as FBC } from "./FBC";
import { activities, translation as LSCG } from "./LSCG";
import { translation as MBS } from "./MBS";
import { translation as WCE } from "./WCE";
import { translationsDTF } from "./regexRep";

const translations = [BCAR, BCX, FBC, LSCG, MBS, WCE].reduce((pv, cv) => Object.assign(pv, cv), {});

function tryReplaceWithNames(key) {
    const PName = Player?.Name;
    const SName = InformationSheetSelection?.Name;
    if (!PName || !SName) return key;
    if (key.includes(PName) || key.includes(SName)) {
        translationsDTF.forEach(({ regex, replacement }) => (key = key.replace(regex, replacement)));
    }
    return key;
}

/**
 *
 * @param {string} key
 * @returns {string}
 */
function replaceTranslate(key) {
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

    ModManager.hookFunction("CommonStringSubstitute", 10, (args, next) => {
        return next([activities[args[0]] || args[0], args[1]]);
    });
}
