import bcModSdk from "bondage-club-mod-sdk";
import log from "../log";
import { ProgressiveHook } from "./progressiveHook";

class WorkList {
    constructor(done = false) {
        this.done = done;
        this.list = [];
    }

    run() {
        this.done = true;
        while (this.list.length > 0) this.list.shift()();
    }

    /**
     * @param {FuncWork} work
     */
    push(work) {
        if (this.done) work();
        else this.list.push(work);
    }
}
const afterInitList = new WorkList();
const hookList = new WorkList();
const waitPlayerHookList = new WorkList();
const patchList = new WorkList();

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

/** @type { ModManagerInterface.ModSDKModAPI | undefined} */
let mMod = undefined;

export default class ModManager {
    static get mod() {
        return mMod;
    }

    /**
     * @param {WorkList} list
     * @param {FuncWork} work
     */
    static push(list, work) {
        list.push(work);
    }

    /**
     * 注册mod
     * @param { ModManagerInterface.ModSDKModInfo } modinfo
     */
    static init(modinfo) {
        mMod = bcModSdk.registerMod(modinfo);
        patchList.run();
        hookList.run();

        const wk = () => waitPlayerHookList.run();

        if (PlayerLoaded()) {
            wk();
        } else {
            ModManager.mod.hookFunction("LoginResponse", 0, (args, next) => {
                next(args);
                wk();
            });
        }

        afterInitList.run();
    }

    /**
     * 添加一个初始化后回调，在mod初始化时执行。如果mod已经初始化，则立即执行。
     * @param {FuncWork} work
     */
    static afterInit(work) {
        ModManager.push(afterInitList, work);
    }

    /**
     * 添加一个玩家登录后回调，在玩家登录后执行。如果玩家已经登录，则立即执行。
     * @param {FuncWork} work
     */
    static afterPlayerLogin(work) {
        ModManager.push(waitPlayerHookList, work);
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
     * @param {ModManagerInterface.FunctionArguments<TFunctionName>} args
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
     * @param {ModManagerInterface.HookFunction<TFunctionName>} hook
     */
    static hookFunction(funcName, priority, hook) {
        ModManager.push(hookList, () => ModManager.mod.hookFunction(funcName, priority, hook));
    }

    /**
     * 酷炫地按步骤来组装钩子函数！
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
     * @param {ModManagerInterface.HookFunction<TFunctionName>} hook
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
