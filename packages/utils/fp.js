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

/**
 * @template {string} T
 * @template U
 * @param {Partial<Record<T, U>>} src
 */
export function RecordEntries(src) {
    return /** @type { ([T, U])[]} */ (Object.entries(src));
}

/**
 * @template {string} T
 * @template {string} U
 * @param {Partial<Record<T, string>>} src
 * @param {(arg:T)=>U} keyFunc
 * @param {Partial<Record<U,string>>} [init]
 * @returns {Partial<Record<U,string>>}
 */
export function RecordMap(src, keyFunc, init = {}) {
    return RecordEntries(src).reduce((pv, [key, value]) => {
        pv[keyFunc(key)] = value;
        return pv;
    }, init);
}
