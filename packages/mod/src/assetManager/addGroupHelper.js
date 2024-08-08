import { flagCustomAsset } from "./customAssets";
import { registerCustomGroup } from "./customGroups";
import { queueAfterAssetLoad, queueBeforeAssetLoad } from "./setupQueue";
import { mirrorGroupAssetDescription, setGroupDescription, setManyAssetDescriptionEntries } from "./translation";

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
 * 添加新的身体组，如果组中包含新物品，可以通过itemDescription添加翻译
 * @param {CustomGroupDefinition} groupDef 身体组的定义
 * @param {Translation.Entry} [description] 身体组的翻译
 * @param {Translation.GroupedEntries} [itemDescription] 如果身体组中包含新物品，可以通过这个参数添加翻译
 */
export function addGroup(groupDef, description = undefined, itemDescription = undefined) {
    queueBeforeAssetLoad(() => registerCustomGroup(groupDef.Group, groupDef, {}));
    setGroupDescription(groupDef.Group, description);
    queueAfterAssetLoad(() => {
        groupDef.Asset.forEach((asset) => {
            const name = /** @type {AssetDefinition} */ (asset).Name;
            flagCustomAsset(groupDef.Group, name);
        });
    });
    setManyAssetDescriptionEntries(itemDescription);
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
 * @param { Translation.Entry } [description]
 */
export function addCopyGroup(newGroup, copyFrom, description = undefined) {
    // TODO 目前的实现中，复制组不能复制后续添加的物品
    queueBeforeAssetLoad(() => {
        const { groupDef, extendedConfig } = copyGroup(copyFrom, newGroup);
        registerCustomGroup(newGroup, groupDef, extendedConfig);
    });
    setGroupDescription(newGroup, description);
    mirrorGroupAssetDescription(newGroup, copyFrom);
}
