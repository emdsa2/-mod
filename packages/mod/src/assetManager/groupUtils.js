import log from "../log";
import { Entries, resolveEntry } from "./entries";
import { pushGroupLoad, registerMirror } from "./loadSchedule";
import { CustomGroupAdd } from "./customStash";
import { loadAsset } from "./assetUtils";
import { resolveStringAsset } from "./assetConfigs";

/**
 * 注册自定义组
 * @param { CustomGroupDefinition } groupDef
 * @param { Object } param
 * @param { Translation.Entry } [param.description]
 * @param { CustomGroupName } [param.dynamicName]
 */
export function loadGroup(groupDef, { description, dynamicName } = {}) {
    pushGroupLoad(() => {
        const solidDesc = description || { CN: groupDef.Group.replace(/_.*?Luzi$/, "") };
        CustomGroupAdd("Female3DCG", /** @type { AssetGroupDefinition }*/ (groupDef)).then((grp) => {
            grp.Description = resolveEntry(solidDesc);
            if (dynamicName) grp.DynamicGroupName = /** @type {AssetGroupName} */ (dynamicName);

            /** @type {AssetGroupDefinition} */
            (groupDef).Asset.forEach((asset) => {
                loadAsset(groupDef.Group, /** @type {CustomAssetDefinition} */ (resolveStringAsset(asset)), {
                    dynamicName,
                });
            });
        });
        // 将名称注册到entry管理中，如果游戏通过异步加载获取名称，在entry管理中修正
        Entries.setGroup(groupDef.Group, solidDesc);
    });
}

/** @type {Set<CustomGroupName>} */
const missingGroup = new Set();

/**
 * @param { CustomGroupName } newGroup
 * @param { CustomGroupName } copyFrom
 * @param { Translation.Entry } [description]
 */
export function mirrorGroup(newGroup, copyFrom, description = undefined) {
    const wk = () => {
        const fromDef = AssetFemale3DCG.find((def) => def.Group === copyFrom);
        if (!fromDef) {
            // 两次找不到组，说明组不存在，或者循环依赖，直接抛弃
            if (missingGroup.has(fromDef.Group)) {
                log.error(`Group ${fromDef.Group} not found`);
                return;
            }

            // 如果组不存在，把 wk 重新放回队列
            missingGroup.add(fromDef.Group);
            pushGroupLoad(wk);
            return;
        }

        // TODO 镜像组时，镜像可能还没翻译
        registerMirror(copyFrom, newGroup);

        const soldDesc = description || { CN: newGroup.replace(/_.*?Luzi$/, "") };

        loadGroup(
            /** @type {CustomGroupDefinition} */ ({
                ...fromDef,
                Group: newGroup,
            }),
            {
                description: soldDesc,
                dynamicName: fromDef.Group,
            }
        );
    };
    pushGroupLoad(wk);
}
