/**
 * 发出monad的声音！
 * @template  T
 * @param {(()=>T) | T} fValue
 */
export function unit(fValue) {
    const value = typeof fValue === "function" ? /** @type {()=>T}*/ (fValue)() : fValue;
    const empty_unit = {
        then: (cb) => empty_unit,
    };
    if (value) {
        return {
            then: (cb) => {
                return unit(() => cb(value));
            },
        };
    } else return empty_unit;
}

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
    return new Promise((resolve) => {
        const check = () => {
            if (test()) resolve();
            else setTimeout(check, interval);
        };
        check();
    });
}
