import { sleepUntil } from "@mod-utils/sleep";

const registerQueue = [];
let queueLoaded = false;

/**
 * @param {FuncWork} fn
 */
export function pushWork(fn) {
    if (!queueLoaded) registerQueue.push(fn);
    else fn();
}

/**
 * @param {()=>boolean} criteria
 */
export function waitLoad(criteria) {
    if (queueLoaded) return;
    (async () => {
        sleepUntil(() => criteria());
        queueLoaded = true;
        while (registerQueue.length > 0) registerQueue.shift()();
    })();
}
