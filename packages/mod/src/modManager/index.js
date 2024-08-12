import bcModSdk from "bondage-club-mod-sdk";
import log from "../log";
import { ProgressiveHook } from "./progressiveHook";

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

/** @type { (FuncWork) [] }*/
const afterInitList = [];
/** @type { (FuncWork) [] }*/
const hookList = [];
/** @type { (FuncWork) [] }*/
const waitPlayerHookList = [];

function PlayerLoaded() {
    return window["Player"] != undefined && typeof window["Player"]["MemberNumber"] === "number";
}

/**
 * @param {FuncWork} work
 */
function PlayerHook(work) {
    if (PlayerLoaded()) {
        waitPlayerHookList.push(work);
    } else {
        work();
    }
}

/** @type { (FuncWork) []  }*/
const patchList = [];

/** @type {ModSDKModAPI | undefined} */
let mMod = undefined;

export default class ModManager {
    static get mod() {
        return mMod;
    }

    /**
     * @param {(FuncWork)[]} list
     * @param {FuncWork} work
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

        const wk = () => {
            while (waitPlayerHookList.length > 0) waitPlayerHookList.shift()();
        };

        if (PlayerLoaded()) {
            wk();
        } else {
            ModManager.mod.hookFunction("LoginResponse", 0, (args, next) => {
                next(args);
                wk();
            });
        }

        while (afterInitList.length > 0) afterInitList.shift()();
    }

    /**
     * 添加一个初始化后回调，在mod初始化时执行。如果mod已经初始化，则立即执行。
     * @param {FuncWork} work
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
        if (!ModManager.mod) return window[/** @type {string} */ (functionName)]?.(...args);
        else return ModManager.mod.callOriginal(functionName, args);
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
     * 注册一个连续钩子函数
     * @template {string} TFunctionName
     * @param {TFunctionName} funcName
     * @param {number} [priority]
     * @returns {ProgressiveHook<TFunctionName>}
     */
    static progressiveHook(funcName, priority = 1) {
        /** @type {ProgressiveHook<TFunctionName>} */
        const hook = new ProgressiveHook(ModManager);
        ModManager.hookFunction(funcName, priority, (args, next) => hook.run(args, next));
        return hook;
    }

    /**
     * 注册一个依赖玩家的钩子函数，会等待玩家数据加载完成才执行。如果玩家数据已加载，则立即执行。
     * @template {string} TFunctionName
     * @param {TFunctionName} funcName
     * @param {number} priority
     * @param {PatchHook<GetDotedPathType<TFunctionName>>} hook
     */
    static hookPlayerFunction(funcName, priority, hook) {
        PlayerHook(() => ModManager.mod.hookFunction(funcName, priority, hook));
    }

    /**
     * 注册全局函数（可以通过window访问）
     * @param {string} funcName
     * @param {Function} func
     */
    static globalFunction(funcName, func) {
        if (typeof func != "function") {
            log.warn("globalFunction: param is not a function");
        }
        if (window[funcName] == undefined) {
            window[funcName] = func;
        } else if (window[funcName] != func) {
            log.warn(`globalFunction: ${funcName} is already defined`);
        }
    }

    /**
     * 注册一个全局函数，函数名字随机生成
     * @template { any[] } T
     * @template R
     * @param {*} funcPrefix
     * @param {(...T)=>R} func
     * @returns
     */
    static randomGlobalFunction(funcPrefix, func) {
        const genName = (prefix) => prefix + Math.random().toString(16).substring(2);
        let funcName = genName(funcPrefix);
        while (window[funcName] != undefined) {
            funcName = genName(funcPrefix);
        }
        window[funcName] = /** @type {any} */ (func);
        return funcName;
    }
}
