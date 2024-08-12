/**
 *
 * @template T
 * @param {()=>T} func
 */
export function unit(func) {
    const value = func();
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

export function sleepFor(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 *
 * @param {()=>boolean} test
 * @param {number} interval
 * @returns
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
