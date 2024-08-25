import { htmlTags as fusamTags, translation as FUSAM } from "./FUSAM";
import { htmlTags as bccTags, translation as BCC } from "./BCC";
import { sleepFor, sleepUntil } from "@mod-utils/sleep";

/** @type { Record<string,string>} */
const translations = [FUSAM, BCC].reduce((pv, cv) => Object.assign(pv, cv), {});
const tags = [fusamTags, bccTags].flat();

const doneAttr = "data-translation-done";

function runReplaceInIds() {
    /** @type {Node[]} */
    const eleToCheck = tags.map((tag) => document.querySelector(tag)).filter((ele) => ele !== null);
    while (eleToCheck.length > 0) {
        let ele = eleToCheck.pop();
        if (ele.nodeType === Node.TEXT_NODE) {
            if (translations[ele.nodeValue]) {
                ele.nodeValue = translations[ele.nodeValue];
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
