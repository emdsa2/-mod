import log from "../log";
import { Entries, resolveEntry, solidfyEntry } from "./entries";
import { pushGroupLoad } from "./loadSchedule";
import { registerMirror } from "./mirrorGroup";
import { CustomGroupAdd } from "./customStash";
import { loadAsset } from "./assetUtils";
import { resolveStringAsset } from "./assetConfigs";

/**
 * 注册自定义组
 * @param { CustomGroupDefinition } groupDef
 * @param { Object } param
 * @param { Translation.Entry } [param.description]
 * @param { CustomGroupName } [param.dynamicName]
 * @param { AssetGroup } [param.preimage]
 */
export function loadGroup(groupDef, { description, dynamicName, preimage } = {}) {
    pushGroupLoad(() => {
        const solidDesc = solidfyEntry(description, groupDef.Group.replace(/_.*?Luzi$/, ""));
        CustomGroupAdd("Female3DCG", /** @type { AssetGroupDefinition }*/ (groupDef)).then((grp) => {
            grp.Description = resolveEntry(solidDesc);
            if (dynamicName) grp.DynamicGroupName = /** @type {AssetGroupName} */ (dynamicName);

            /** @type {AssetGroupDefinition} */
            (groupDef).Asset.forEach((asset) => {
                loadAsset(groupDef.Group, /** @type {CustomAssetDefinition} */ (resolveStringAsset(asset)), {
                    dynamicName,
                    preimage,
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
        const fromGrp = AssetGroupGet("Female3DCG", /** @type { AssetGroupName }*/ (copyFrom));
        const fromExt = AssetFemale3DCGExtended[copyFrom];
        if (!fromDef || !fromGrp) {
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

        registerMirror(copyFrom, newGroup);

        const soldDesc = solidfyEntry(description, newGroup.replace(/_.*?Luzi$/, ""));

        loadGroup(
            /** @type {CustomGroupDefinition} */ ({
                ...fromDef,
                Group: newGroup,
                Default: false,
                Random: false,
            }),
            {
                description: soldDesc,
                dynamicName: fromDef.DynamicGroupName || fromDef.Group,
                preimage: fromGrp,
            }
        );
        AssetFemale3DCGExtended[newGroup] = fromExt;
    };
    pushGroupLoad(wk);
}
