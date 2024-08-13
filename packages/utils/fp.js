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
