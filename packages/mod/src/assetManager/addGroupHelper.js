import { registerCustomGroup } from "./customGroups";
import { queueBeforeAssetLoad } from "./setupQueue";
import { mirrorGroupAssetDescription, setGroupDescription } from "./translation";

/**
 * @param {()=>void} loaded
 * @param {()=>void} unloaded
 */
function SwitchAssetLoad(loaded, unloaded) {
    if (Asset.length > 1000) {
        loaded();
    } else {
        unloaded();
    }
}

/**
 * 添加新的身体组
 * @param {CustomGroupDefinition} groupDef
 * @param {TranslationEntry} [description]
 */
export function addGroup(groupDef, description = undefined) {
    queueBeforeAssetLoad(() => registerCustomGroup(groupDef.Group, groupDef, {}));
    setGroupDescription(groupDef.Group, description);
}

/**
 * 复制一个组，得到新的组和扩展配置
 * @param { AssetGroupName } from
 * @param { CustomGroupName } to
 */
function copyGroup(from, to) {
    const fromGroupDef = AssetFemale3DCG.find((g) => g.Group === from);
    if (!fromGroupDef) {
        console.warn(`Group ${from} not found`);
        return undefined;
    }

    const extendedConfig = AssetFemale3DCGExtended[from];

    const groupDef = Object.assign({}, fromGroupDef, { Group: to });
    return { groupDef, extendedConfig };
}

/**
 * 添加新的身体组，从已有组复制配置
 * @param { CustomGroupName } newGroup
 * @param { AssetGroupName } copyFrom
 * @param { TranslationEntry } [description]
 */
export function addCopyGroup(newGroup, copyFrom, description = undefined) {
    queueBeforeAssetLoad(() => {
        const { groupDef, extendedConfig } = copyGroup(copyFrom, newGroup);
        registerCustomGroup(newGroup, groupDef, extendedConfig);
    });
    setGroupDescription(newGroup, description);
    mirrorGroupAssetDescription(newGroup, copyFrom);
}
