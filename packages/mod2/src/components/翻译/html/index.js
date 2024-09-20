import { htmlTags as fusamTags, translation as FUSAM } from "./FUSAM";
import { htmlTags as bccTags, translation as BCC } from "./BCC";
import { sleepFor, sleepUntil } from "@mod-utils/sleep";
/** @type { Record<string,string>} */
const translations = [FUSAM, BCC].reduce((pv, cv) => Object.assign(pv, cv), {});
const tags = [fusamTags, bccTags].flat();

const doneAttr = "data-translation-done";

const translationsDTF2 = [
    {
        regex: /MISSING ACTIVITY DESCRIPTION FOR KEYWORD Activity(.+)/,
        replacement: "$1"
    },
];

function applyReplacements(text) {
    // 应用 translationsDTF2 中的替换规则
    for (const rule of translationsDTF2) {
        text = text.replace(rule.regex, rule.replacement);
    }
    return text;
}

function runReplaceInIds() {
    /** @type {Node[]} */
    const eleToCheck = tags.map((tag) => document.querySelector(tag)).filter((ele) => ele !== null);
    while (eleToCheck.length > 0) {
        let ele = eleToCheck.pop();
        if (ele.nodeType === Node.TEXT_NODE) {
            let newValue = ele.nodeValue;
            if (translations[newValue]) {
                newValue = translations[newValue];
            }
            newValue = applyReplacements(newValue); // 应用 translationsDTF2 规则
            if (newValue !== ele.nodeValue) {
                ele.nodeValue = newValue;
                ele.parentElement.setAttribute(doneAttr, "");
            }
        } else {
            eleToCheck.push(
                ...Array.from(ele.childNodes).filter(
                    (ele) => !(ele instanceof HTMLElement) || !ele.hasAttribute(doneAttr)
                )
            );
        }
    }
}

export function setup() {
    (async () => {
        while (true) {
            await sleepFor(250);
            await sleepUntil(() => TranslationLanguage === "CN" || TranslationLanguage === "TW");
            runReplaceInIds();
        }
    })().catch(console.error);
}
