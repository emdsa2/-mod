/**
 * 你必须睡一会儿
 * @param {number} ms 毫秒
 * @returns {Promise<void>}
 */

export function sleepFor(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * 你必须睡到满足条件为止
 * @param {()=>boolean} test 测试条件
 * @param {number} interval 间隔时间
 * @returns {Promise<void>}
 */
export function sleepUntil(test, interval = 100) {
    return (async () => {
        while (!test()) await sleepFor(interval);
    })();
}
