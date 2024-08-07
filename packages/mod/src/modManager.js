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

/** @type {ModSDKModAPI | undefined} */
let mMod = undefined;

export default class ModManager {
    static get mod() {
        return mMod;
    }

    /** @type { (()=>void) [] }*/
    static hookList = [];
    /** @type { (()=>void) [] }*/
    static waitPlayerHookList = [];
    /** @type { (()=>void) []  }*/
    static patchList = [];

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
        this.patchList.forEach((patch) => patch());
        this.hookList.forEach((hook) => hook());

        SwichIfPlayer(
            () => this.waitPlayerHookList.forEach((hook) => hook()),
            () => {
                ModManager.mod.hookFunction("LoginResponse", 0, (args, next) => {
                    next(args);
                    this.waitPlayerHookList.forEach((hook) => hook());
                });
            }
        );
    }

    /**
     * 补丁函数
     * @param {any} functionName
     * @param {Record<string, string|null>} patch
     */
    static patchFunction(functionName, patch) {
        ModManager.push(ModManager.patchList, () => ModManager.mod.patchFunction(functionName, patch));
    }

    /**
     * 注册一个钩子函数
     * @template {string} TFunctionName
     * @param {TFunctionName} funcName
     * @param {number} priority
     * @param {PatchHook<GetDotedPathType<TFunctionName>>} hook
     */
    static hookFunction(funcName, priority, hook) {
        ModManager.push(this.hookList, () => ModManager.mod.hookFunction(funcName, priority, hook));
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
        SwichIfPlayer(work, () => ModManager.push(ModManager.waitPlayerHookList, work));
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
