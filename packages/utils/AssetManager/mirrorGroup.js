/** @type { Set<CustomGroupName> } */
const TorsoMirror = new Set(/** @type {CustomGroupName[]} */ (["ItemTorso", "ItemTorso2"]));
/** @type {Partial<Record<CustomGroupName, Set<CustomGroupName>>>} */
const mMirrorGroups = { ItemTorso: TorsoMirror, ItemTorso2: TorsoMirror };
/** @type {Partial<Record<CustomGroupName, CustomGroupName>>} */
const rMirrorPreimage = {};

/** @type {Partial<Record<CustomGroupName, Set<CustomGroupName>>>} */
const customMirrorGroups = {};

// 图片映射，认为ItemTorso2的原版内容已经处理好了不需要添加
/** @type {Partial<Record<`Assets/Female3DCG/${CustomGroupName}`,`Assets/Female3DCG/${CustomGroupName}`>>} */
const mirrorImgMapping = {};

/**
 * 注册镜像组，用于自动添加镜像物品。默认具有ItemTorso和ItemTorso2的镜像组。
 * 注意，将 `Cloth_Luzi` 组镜像到 `Cloth` 组时，不会自动将 `Cloth` 组镜像到 `Cloth_Luzi` 组。
 * 这样允许镜像组单独注册独立的物品。
 * @param {CustomGroupName} from
 * @param {CustomGroupName} to
 */
export function registerMirror(from, to) {
    if (!mMirrorGroups[from]) mMirrorGroups[from] = new Set([from]);
    mMirrorGroups[from].add(to);

    if (!customMirrorGroups[from]) customMirrorGroups[from] = new Set();
    customMirrorGroups[from].add(to);

    rMirrorPreimage[to] = from;
    mirrorImgMapping[`Assets/Female3DCG/${to}`] = `Assets/Female3DCG/${from}`;
}

export function getCustomMirrorGroups() {
    return customMirrorGroups;
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

/** @type {Record<string,string>} */
const cache = {};
/**
 *
 * @param {string} path
 * @returns {string}
 */
export function resolveMirrorImageMapping(path) {
    if (cache[path]) return cache[path];

    for (const [key, value] of Object.entries(mirrorImgMapping)) {
        if (path.startsWith(key)) {
            cache[path] = path.replace(key, value);
            return cache[path];
        }
    }

    return path;
}

/**
 * @param {CustomGroupName} group
 * @returns {CustomGroupName | undefined}
 */
export function resolvePreimage(group) {
    return rMirrorPreimage[group];
}
