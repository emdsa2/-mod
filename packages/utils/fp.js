// /**
//  * @template T
//  */
// class OptionImpl {
//     /**
//      * @param { T | undefined | null } value
//      */
//     constructor(value) {
//         this.val = value;
//     }

//     /**
//      * @template U
//      * @param {(v:T)=>U} cb
//      * @returns {OptionImpl<U>}
//      */
//     value_then(cb) {
//         if (!this.val) return Option(undefined);
//         return Option(() => cb(this.val));
//     }
// }

// /**
//  * @template T
//  * @param {(()=>T)|T} fValue
//  * @returns {fValue is (()=>T)}
//  */
// function isFunction(fValue) {
//     return typeof fValue === "function";
// }

// /**
//  * 发出monad的声音！
//  * @template {Object} T
//  * @param { (()=>T)|T } fValue
//  * @returns
//  */
// export function Option(fValue) {
//     return /** @type {OptionImpl<T>} */ (new OptionImpl(isFunction(fValue) ? fValue() : fValue));
// }

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
