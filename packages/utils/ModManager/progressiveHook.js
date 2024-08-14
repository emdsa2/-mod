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
 * @template {string} TFunctionName
 * @typedef {PatchHook<GetDotedPathType<TFunctionName>>} hookFunction
 */

/**
 * @template {string} TFunctionName
 * @typedef {{hookFunction:(funcName:TFunctionName, priority: number, hook:hookFunction<TFunctionName>) => void } } Hookable
 */

/**
 * 注册一个钩子
 * @template {string} TFunctionName
 */
export class ProgressiveHook {
    /**
     * @typedef {Parameters<GetDotedPathType<TFunctionName>>} mArgumentsType
     * @typedef {(args: [...Parameters<GetDotedPathType<TFunctionName>>]) => ReturnType<GetDotedPathType<TFunctionName>>} mNextFunctionType
     * @typedef {ReturnType<GetDotedPathType<TFunctionName>>} mReturnType
     */

    /**
     * @template T
     * @typedef {(args: mArgumentsType, next: mNextFunctionType) => T} FuncType
     */

    /**
     * @typedef { FuncType<void> } InjectFuncType
     * @typedef { FuncType<mReturnType> } HookFuncType
     */

    /**
     * @typedef { {value: "inject", work: InjectFuncType} } injectWork
     * @typedef { {value: "next"} } nextWork
     * @typedef { {value: "override", work: HookFuncType } } overrideWork
     * @typedef { {value: "flag", flag: boolean, once: boolean} } flagWork
     * @typedef { {value: "check", work: FuncType<boolean>} } checkWork
     *
     * @typedef { injectWork | nextWork | overrideWork | flagWork | checkWork } workType
     */

    /** @type {workType[]} */
    workList = [];

    /**  @param {Hookable<any>} hookMng */
    constructor(hookMng) {
        this.hookMng = hookMng;
    }

    /**
     * @param { mArgumentsType } args
     * @param { mNextFunctionType } next
     * @returns { mReturnType}
     */
    run(args, next) {
        let hasResult = false;
        /** @type {mReturnType} */
        let result = undefined;
        for (const work of this.workList) {
            if (work.value === "inject") {
                work.work(args, next);
            } else if (work.value === "next") {
                result = next(args);
                hasResult = true;
            } else if (work.value === "override") {
                result = work.work(args, next);
                hasResult = true;
            } else if (work.value === "flag") {
                if (!work.flag) break;
                if (work.once) work.flag = false;
            } else if (work.value === "check") {
                if (!work.work(args, next)) break;
            }
        }

        if (hasResult) return result;
        else return next(args);
    }

    /**
     * 添加下一步的步骤，如同执行原函数，并设置Result。如果Result被设置，则不会在末尾自动调用next()。
     */
    next() {
        this.workList.push({ value: "next" });
        return this;
    }

    /**
     * 添加一个注入步骤，可以在其中修改参数或产生其他副作用。注意，这个步骤不会设置Result，在步骤末尾会自动调用next()。
     * @param { InjectFuncType } func
     */
    inject(func) {
        this.workList.push({ value: "inject", work: func });
        return this;
    }

    /**
     * 要求接下来的步骤处于指定函数内部
     * @template {string} funcName
     * @param {funcName} func
     * @param {Object} config
     * @param {boolean} [config.once]
     * @param {number} [config.priority]
     */
    inside(func, { once = false, priority = 1 } = {}) {
        /** @type {flagWork} */
        const flag = { value: "flag", flag: false, once };

        this.hookMng.hookFunction(func, priority, (args, next) => {
            flag.flag = true;
            const ret = next(args);
            flag.flag = false;
            return ret;
        });

        this.workList.push(flag);
        return this;
    }

    /**
     * 添加一个检查步骤，如果返回false，则停止执行后续步骤。
     * @param { FuncType<boolean> } func
     * @returns {this}
     */
    when(func) {
        this.workList.push({ value: "check", work: func });
        return this;
    }

    /**
     * 覆盖原函数，并将返回值作为Result。如果Result被设置，则不会在末尾自动调用next()。
     * @param { HookFuncType } func
     */
    override(func) {
        this.workList.push({ value: "override", work: func });
        return this;
    }
}
