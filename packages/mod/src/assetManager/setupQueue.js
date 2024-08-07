import ModManager from "../modManager";

/** @type {(()=>void)[]} */
const afterLoadList = [];
/**
 * 添加物品初始化函数
 * @param {()=>void} setup
 */
export function queueAfterAssetLoad(setup) {
    afterLoadList.push(setup);
}

const beforeLoadList = [];
export function queueBeforeAssetLoad(setup) {
    beforeLoadList.push(setup);
}

export function setupQueue() {
    let inLoadingAsset = false;
    ModManager.hookFunction("AssetLoadAll", 1, (args, next) => {
        while (beforeLoadList.length > 0) {
            const setup = beforeLoadList.shift();
            setup();
        }
        inLoadingAsset = true;
        next(args);
    });

    ModManager.hookFunction("AssetLoadDescription", 1, (args, next) => {
        if (inLoadingAsset) {
            inLoadingAsset = false;
            while (afterLoadList.length > 0) {
                const setup = afterLoadList.shift();
                setup();
            }
        }
        next(args);
    });
}
