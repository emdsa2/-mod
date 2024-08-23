/**
 * @template T
 */
class OptionImpl {
    /**
     * @param { T | undefined | null } value
     */
    constructor(value) {
        this.val = value;
    }

    /**
     * @template U
     * @param {(v:T)=>U} cb
     * @returns {OptionImpl<U>}
     */
    value_then(cb) {
        if (!this.val) return Option(undefined);
        return Option(() => cb(this.val));
    }
}

/**
 * @template T
 * @param {(()=>T)|T} fValue
 * @returns {fValue is (()=>T)}
 */
function isFunction(fValue) {
    return typeof fValue === "function";
}

/**
 * 发出monad的声音！
 * @template {Object} T
 * @param { (()=>T)|T } fValue
 * @returns
 */
export function Option(fValue) {
    return /** @type {OptionImpl<T>} */ (new OptionImpl(isFunction(fValue) ? fValue() : fValue));
}
