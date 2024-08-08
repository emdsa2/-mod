import bcModSdk from "bondage-club-mod-sdk";

/**
 * @template {string} TFunctionName
 * @typedef {import('bondage-club-mod-sdk').GetDotedPathType<typeof globalThis,TFunctionName>} GetDotedPathType
 *
 */

/**
 * @typedef {import('bondage-club-mod-sdk').ModSDKModInfo} ModSDKModInfo
 * @typedef {import('bondage-club-mod-sdk').ModSDKModAPI} ModSDKModAPI
 */

/**
 * @template {import("bondage-club-mod-sdk").AnyFunction} RetType
 * @typedef {import('bondage-club-mod-sdk').PatchHook<RetType>} PatchHook
 */

/**
 * @param {()=>void | undefined} loaded
 * @param {()=>void | undefined} unloaded
 */
function SwichIfPlayer(loaded = undefined, unloaded = undefined) {
    if (window["Player"] != undefined && window["Player"]["MemberNumber"] != undefined) {
        loaded?.();
    } else {
        unloaded?.();
    }
}

/** @type { (()=>void) [] }*/
const afterInitList = [];
/** @type { (()=>void) [] }*/
const hookList = [];
/** @type { (()=>void) [] }*/
const waitPlayerHookList = [];
/** @type { (()=>void) []  }*/
const patchList = [];

/** @type {ModSDKModAPI | undefined} */
let mMod = undefined;

export default class ModManager {
    static get mod() {
        return mMod;
    }

    /**
     * @param {(()=>void)[]} list
     * @param {()=>void} work
     */
    static push(list, work) {
        if (ModManager.mod) work();
        list.push(work);
    }

    /**
     * 注册mod
     * @param {ModSDKModInfo} modinfo
     */
    static init(modinfo) {
        mMod = bcModSdk.registerMod(modinfo);
        while (patchList.length > 0) patchList.shift()();
        while (hookList.length > 0) hookList.shift()();

        SwichIfPlayer(
            () => {
                while (waitPlayerHookList.length > 0) waitPlayerHookList.shift()();
            },
            () => {
                ModManager.mod.hookFunction("LoginResponse", 0, (args, next) => {
                    next(args);
                    while (waitPlayerHookList.length > 0) waitPlayerHookList.shift()();
                });
            }
        );
        while (afterInitList.length > 0) afterInitList.shift()();
    }

    /**
     * 添加一个初始化后回调
     * @param {()=>void} work
     */
    static afterInit(work) {
        ModManager.push(afterInitList, work);
    }

    /**
     * 补丁函数
     * @param {any} functionName
     * @param {Record<string, string|null>} patch
     */
    static patchFunction(functionName, patch) {
        ModManager.push(patchList, () => ModManager.mod.patchFunction(functionName, patch));
    }

    /**
     * 调用原始函数
     * @template {string} TFunctionName
     * @param {TFunctionName} functionName
     * @param {[...Parameters<GetDotedPathType<TFunctionName>>]} args
     */
    static invokeOriginal(functionName, ...args) {
        return ModManager.mod.callOriginal(functionName, args);
    }

    /**
     * 注册一个钩子函数
     * @template {string} TFunctionName
     * @param {TFunctionName} funcName
     * @param {number} priority
     * @param {PatchHook<GetDotedPathType<TFunctionName>>} hook
     */
    static hookFunction(funcName, priority, hook) {
        ModManager.push(hookList, () => ModManager.mod.hookFunction(funcName, priority, hook));
    }

    /**
     * 注册一个依赖玩家的钩子函数
     * @template {string} TFunctionName
     * @param {TFunctionName} funcName
     * @param {number} priority
     * @param {PatchHook<GetDotedPathType<TFunctionName>>} hook
     */
    static hookPlayerFunction(funcName, priority, hook) {
        const work = () => ModManager.mod.hookFunction(funcName, priority, hook);
        SwichIfPlayer(work, () => ModManager.push(waitPlayerHookList, work));
    }

    /**
     * 注册全局函数
     * @param {string} funcName
     * @param {Function} func
     */
    static globalFunction(funcName, func) {
        if (typeof func != "function") {
            console.warn("globalFunction: param is not a function");
        }
        if (window[funcName] == undefined) {
            window[funcName] = func;
        } else if (window[funcName] != func) {
            console.warn(`globalFunction: ${funcName} is already defined`);
        }
    }
}
