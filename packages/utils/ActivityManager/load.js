import log from "@mod-utils/log";
import { sleepUntil } from "@mod-utils/sleep";

const registerQueue = [];
let queueLoaded = false;

/**
 * @param {FuncWork} fn
 */
export function pushLoad(fn) {
    if (!queueLoaded) registerQueue.push(fn);
    else fn();
}

/**
 * @param {()=>boolean} criteria
 */
export function setupLoad(criteria) {
    if (queueLoaded) return;
    (async () => {
        await sleepUntil(() => criteria());

        const start = Date.now();
        log.info(`开始加载`);
        queueLoaded = true;
        while (registerQueue.length > 0) registerQueue.shift()();
        log.info(`加载完成，耗时 ${Date.now() - start}ms`);
    })();
}
