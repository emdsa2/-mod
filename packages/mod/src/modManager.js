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

export default class ModManager {
    /** @type {ModSDKModAPI | undefined} */
    static modManager = undefined;

    /** @type { {funcName:any, priority:number, hook:PatchHook<any>} [] }*/
    static hookList = [];
    /** @type { {funcName:any, priority:number, hook:PatchHook<any>} [] }*/
    static waitPlayerHookList = [];
    /** @type { {functionName:any, patch:Record<string, string|null>} [] }*/
    static patchList = [];

    /**
     * 注册mod
     * @param {ModSDKModInfo} modinfo
     */
    static init(modinfo) {
        ModManager.modManager = bcModSdk.registerMod(modinfo);

        if (this.patchList.length > 0) {
            this.patchList.forEach((patch) => {
                ModManager.modManager.patchFunction(patch.functionName, patch.patch);
            });
        }

        if (this.hookList.length > 0) {
            this.hookList.forEach((hook) => {
                ModManager.modManager.hookFunction(hook.funcName, hook.priority, hook.hook);
            });
        }

        if (window["Player"] != undefined && window["Player"]["MemberNumber"] != undefined) {
            this.waitPlayerHookList.forEach((hook) => {
                ModManager.modManager.hookFunction(hook.funcName, hook.priority, hook.hook);
            });
        } else {
            ModManager.modManager.hookFunction("LoginResponse", 0, (args, next) => {
                next(args);
                this.waitPlayerHookList.forEach((hook) => {
                    ModManager.modManager.hookFunction(hook.funcName, hook.priority, hook.hook);
                });
            });
        }
    }

    /**
     * @brief 补丁函数
     * @param {any} functionName
     * @param {Record<string, string|null>} patch
     */
    static patchFunction(functionName, patch) {
        if (ModManager.modManager) {
            ModManager.modManager.patchFunction(functionName, patch);
        } else {
            ModManager.patchList.push({ functionName, patch });
        }
    }

    /**
     * @brief 注册一个钩子函数
     * @template {string} TFunctionName
     * @param {TFunctionName} funcName
     * @param {number} priority
     * @param {PatchHook<GetDotedPathType<TFunctionName>>} hook
     */
    static hookFunction(funcName, priority, hook) {
        if (ModManager.modManager) {
            ModManager.modManager.hookFunction(funcName, priority, hook);
        } else {
            ModManager.hookList.push({ funcName, priority, hook });
        }
    }

    /**
     * @brief 注册一个依赖玩家的钩子函数
     * @template {string} TFunctionName
     * @param {TFunctionName} funcName
     * @param {number} priority
     * @param {PatchHook<GetDotedPathType<TFunctionName>>} hook
     */
    static hookPlayerFunction(funcName, priority, hook) {
        if (ModManager.modManager) {
            ModManager.modManager.hookFunction(funcName, priority, hook);
        } else {
            ModManager.waitPlayerHookList.push({ funcName, priority, hook });
        }
    }

    /**
     * @brief 注册全局函数
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
