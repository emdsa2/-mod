import log from "../log";
import ModManager from "../modManager";

let isGroupLoaded = false;

/** @type {FuncWork[]} */
const groupLoadWorks = [];
/** @type { Set<CustomGroupName> } */
const TorsoMirror = new Set(/** @type {CustomGroupName[]} */ (["ItemTorso", "ItemTorso2"]));
/** @type {Partial<Record<CustomGroupName, Set<CustomGroupName>>>} */
const mMirrorGroups = { ItemTorso: TorsoMirror, ItemTorso2: TorsoMirror };
/** @type {Partial<Record<CustomGroupName, CustomGroupName>>} */
const rMirrorPreimage = {};

/** @param {FuncWork} work */
export function pushGroupLoad(work) {
    if (isGroupLoaded) work();
    else groupLoadWorks.push(work);
}

function runGroupLoad() {
    while (groupLoadWorks.length > 0) groupLoadWorks.shift()();
}

/**
 * 注册镜像组，用于自动添加镜像物品。默认具有ItemTorso和ItemTorso2的镜像组。
 * 注意，将 `Cloth_Luzi` 组镜像到 `Cloth` 组时，不会自动将 `Cloth` 组镜像到 `Cloth_Luzi` 组。
 * 这样允许镜像组单独注册独立的物品。
 * @param {CustomGroupName} from
 * @param {CustomGroupName} to
 */
export function registerMirror(from, to) {
    if (!mMirrorGroups[from]) mMirrorGroups[from] = new Set();
    mMirrorGroups[from].add(to);
    rMirrorPreimage[to] = from;
}

/**
 * 分析镜像组
 * @param {CustomGroupName} group
 * @returns { { name: CustomGroupName, group: AssetGroup }[] }
 */
export function resolveMirror(group) {
    return ((mMirrorGroups[group] && Array.from(mMirrorGroups[group])) || [group]).map((gname) => ({
        name: gname,
        group: AssetGroupGet("Female3DCG", /** @type {AssetGroupName}*/ (gname)),
    }));
}

/**
 * @param {CustomGroupName} group
 * @returns {CustomGroupName | undefined}
 */
export function resolvePreimage(group) {
    return rMirrorPreimage[group];
}

/** @type { Partial<Record<CustomGroupName, FuncWork<AssetGroup>[]>> } */
const assetDefsLoadWorks = {};

/** @param {FuncWork<AssetGroup>} work */
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

/** @type { Partial<Record<CustomGroupName, FuncWork<AssetGroup>[]>> } */
const assetLoadWorks = {};

/**
 * 添加一个物品加载事件
 * @param { CustomGroupName } group
 * @param { FuncWork<AssetGroup> } work
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
function runAssetLoadEvent(group) {
    if (assetLoadWorks[group.Name]) {
        while (assetLoadWorks[group.Name].length > 0) assetLoadWorks[group.Name].shift()(group);
    }
}

const missingGroups = new Set();
/**
 * 获得身体组，通过Promise机制保证加载完成。此方法会通过多次调用来实现镜像组的加载。
 * @param { CustomGroupName } group
 * @returns { Promise<AssetGroup> }
 */
export function requireGroup(group) {
    const wk = (resolve) => {
        // FIXME 镜像组不一定完成加载，扔回事件队列
        const mirrors = resolveMirror(group);
        const unresolved = mirrors.find(({ group }) => !group);
        if (unresolved) {
            if (missingGroups.has(unresolved.name)) {
                log.error(`Required group "${unresolved.name}" not found`);
                return;
            }
            missingGroups.add(unresolved.name);
            pushAssetLoadEvent(unresolved.name, (groupObj) => wk(resolve));
            return;
        }

        mirrors.forEach(({ name, group }) => resolve(group));
    };

    if (isGroupLoaded) {
        return new Promise((resolve) => wk(resolve));
    } else {
        return new Promise((resolve) => pushAssetLoadEvent(group, (groupObj) => wk(resolve)));
    }
}

/**
 * 初始化身体组加载过程的事件，确保在加载完成后执行
 */
export function setupLoadSchedule() {
    const mLoadGroup = () => {
        // 先执行所有的直接加载事件（一般是自定义的组加载）
        runGroupLoad();
        isGroupLoaded = true;

        // 加载所有的 AssetDefine 和 ExtenedConfig
        AssetGroup.forEach((group) => runAssetDefsLoad(group));

        // 再执行所有组的加载完整事件（一般是通过 requireGroup 添加的自定义的物品加载）
        AssetGroup.forEach((group) => runAssetLoadEvent(group));
    };

    if (AssetGroup.length > 50) {
        mLoadGroup();
    } else {
        ModManager.hookFunction("AssetLoadAll", 1, (args, next) => {
            next(args);
            mLoadGroup();
        });
    }
}
