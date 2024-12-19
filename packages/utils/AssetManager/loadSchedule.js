import log from "../log";
import ModManager from "../ModManager";
import { resolveMirror } from "./mirrorGroup";

let isGroupLoaded = false;

/** @type {FuncWork[]} */
const groupLoadWorks = [];

/** @param {FuncWork} work */
export function pushGroupLoad(work) {
    if (isGroupLoaded) work();
    else groupLoadWorks.push(work);
}

function runGroupLoad() {
    while (groupLoadWorks.length > 0) groupLoadWorks.shift()();
}

/** @type { Partial<Record<CustomGroupName, FuncWork<[AssetGroup]>[]>> } */
const assetDefsLoadWorks = {};

/** @param {FuncWork<[AssetGroup]>} work */
export function pushDefsLoad(group, work) {
    const grp = AssetGroupGet("Female3DCG", /** @type { AssetGroupName } */ (group));
    if (isGroupLoaded && grp) work(grp);
    else {
        if (!assetDefsLoadWorks[group]) assetDefsLoadWorks[group] = [];
        assetDefsLoadWorks[group].push(work);
    }
}

/** @param {AssetGroup} group */
function runAssetDefsLoad(group) {
    if (assetDefsLoadWorks[group.Name]) {
        while (assetDefsLoadWorks[group.Name].length > 0) assetDefsLoadWorks[group.Name].shift()(group);
    }
}

/** @type { Partial<Record<CustomGroupName, FuncWork<[AssetGroup]>[]>> } */
const assetLoadWorks = {};

/**
 * 添加一个物品加载事件
 * @param { CustomGroupName } group
 * @param { FuncWork<[AssetGroup]> } work
 */
export function pushAssetLoadEvent(group, work) {
    const grp = AssetGroupGet("Female3DCG", /** @type { AssetGroupName } */ (group));
    if (isGroupLoaded && grp) work(grp);
    else {
        if (!assetLoadWorks[group]) assetLoadWorks[group] = [];
        assetLoadWorks[group].push(work);
    }
}

/**
 * @param {AssetGroup} group
 */
function runAssetLoad(group) {
    if (assetLoadWorks[group.Name]) {
        while (assetLoadWorks[group.Name].length > 0) assetLoadWorks[group.Name].shift()(group);
    }
}

let isAfterLoaded = false;
/** @type { (()=>void)[] } */
const afterLoadWorks = [];

/** @param {()=>void} work */
export function pushAfterLoad(work) {
    if (isAfterLoaded) work();
    else afterLoadWorks.push(work);
}

const missingGroups = new Set();

/**
 * 要求一个组加载完成，并在加载完成后执行回调（可能会多次执行，对每个镜像执行一次）
 * @param { CustomGroupName } group
 * @param { (group: AssetGroup) => void } resolve
 */
export function requireGroup(group, resolve) {
    const wk = (resolve_) => {
        const mirrors = resolveMirror(group);
        const unresolved = mirrors.find(({ group }) => !group);
        if (unresolved) {
            if (missingGroups.has(unresolved.name)) {
                log.error(`Required group "${unresolved.name}" not found`);
                return;
            }
            missingGroups.add(unresolved.name);
            pushAssetLoadEvent(unresolved.name, (groupObj) => wk(resolve_));
            return;
        }
        mirrors.forEach(({ name, group }) => resolve_(group));
    };

    if (isGroupLoaded) {
        wk(resolve);
    } else {
        pushAssetLoadEvent(group, (groupObj) => wk(resolve));
    }
}

/**
 * 初始化身体组加载过程的事件，确保在加载完成后执行
 */
export function runSetupLoad() {
    const mLoadGroup = () => {
        log.info(`加载开始`);
        const time = Date.now();
        // 先执行所有的直接加载事件（一般是自定义的组加载）
        runGroupLoad();
        isGroupLoaded = true;
        // 加载所有的 AssetDefine 和 ExtenedConfig
        AssetGroup.forEach((group) => runAssetDefsLoad(group));
        // 再执行所有组的加载完整事件（一般是通过 requireGroup 添加的自定义的物品加载）
        AssetGroup.forEach((group) => runAssetLoad(group));
        // 重新加载制作物品
        CraftingAssets = CraftingAssetsPopulate();

        isAfterLoaded = true;
        while (afterLoadWorks.length > 0) afterLoadWorks.shift()();

        log.info(`加载完成，耗时 ${Date.now() - time}ms`);
    };

    if (AssetGroup.length > 50) {
        mLoadGroup();
    } else {
        ModManager.progressiveHook("AssetLoadAll", 1)
            .next()
            .inject(() => mLoadGroup());
    }
}
