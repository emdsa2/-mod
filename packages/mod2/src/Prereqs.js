class Acting {
    /**
     * 动作目标身体部位为空
     * @returns {ActivityManagerInterface.PrerequisiteCheckFunction}
     */
    static TargetGroupEmpty() {
        return (_, acting, _1, group) => {
            return acting.Appearance.every((item) => item.Asset.Group.Name !== group.Name);
        };
    }

    /**
     * 动作目标身体部位物品范围
     * @param {string[]} assetNames
     * @returns {ActivityManagerInterface.PrerequisiteCheckFunction}
     */
    static TargetGroupIs(assetNames) {
        const assetNameSet = new Set(assetNames);

        return (_, acting, _1, group) => {
            const item = acting.Appearance.find((item) => item.Asset.Group.Name === group.Name);
            return item && assetNameSet.has(item.Asset.Name);
        };
    }

    /**
     * 身体部位物品范围
     * @param {CustomGroupName} group
     * @param {string[]} assetNames
     * @returns {ActivityManagerInterface.PrerequisiteCheckFunction}
     */
    static GroupIs(group, assetNames) {
        const assetNameSet = new Set(assetNames);

        return (_, acting, _1, _2) => {
            const item = acting.Appearance.find((item) => item.Asset.Group.Name === group);
            return item && assetNameSet.has(item.Asset.Name);
        };
    }

    /**
     * 身体部位为空
     * @param {CustomGroupName[]} groups
     * @returns {ActivityManagerInterface.PrerequisiteCheckFunction}
     */
    static GroupEmpty(groups) {
        const groupNameSet = new Set(groups);

        return (_, acting, _1, _2) => {
            return acting.Appearance.every((item) => !groupNameSet.has(item.Asset.Group.Name));
        };
    }

    /**
     * 身体部位是否可用
     * @param { AssetGroupItemName } group
     */
    static GroupAccessible(group) {
        return (_, acting, _1, _2) => {
            return !InventoryGroupIsBlocked(acting, group);
        };
    }
}

class Acted {
    /**
     * 动作目标身体部位为空
     * @returns {ActivityManagerInterface.PrerequisiteCheckFunction}
     */
    static TargetGroupEmpty() {
        return (_, _1, acted, group) => {
            return acted.Appearance.every((item) => item.Asset.Group.Name !== group.Name);
        };
    }

    /**
     * 动作目标身体部位物品范围
     * @param {string[]} assetNames
     * @returns {ActivityManagerInterface.PrerequisiteCheckFunction}
     */
    static TargetGroupIs(assetNames) {
        const assetNameSet = new Set(assetNames);

        return (_, _1, acted, group) => {
            const item = acted.Appearance.find((item) => item.Asset.Group.Name === group.Name);
            return item && assetNameSet.has(item.Asset.Name);
        };
    }

    /**
     * 身体部位物品范围
     * @param {CustomGroupName} group
     * @param {string[]} assetNames
     * @returns {ActivityManagerInterface.PrerequisiteCheckFunction}
     */
    static GroupIs(group, assetNames) {
        const assetNameSet = new Set(assetNames);
        return (_, _1, acted, _2) => {
            const item = acted.Appearance.find((item) => item.Asset.Group.Name === group);
            return item && assetNameSet.has(item.Asset.Name);
        };
    }

    /**
     * 身体部位为空
     * @param {CustomGroupName[]} groups
     * @returns {ActivityManagerInterface.PrerequisiteCheckFunction}
     */
    static GroupEmpty(groups) {
        const groupNameSet = new Set(groups);

        return (_, _1, acted, _2) => {
            return acted.Appearance.every((item) => !groupNameSet.has(item.Asset.Group.Name));
        };
    }

    /**
     * 身体部位是否可用
     * @param { AssetGroupItemName } group
     */
    static GroupAccessible(group) {
        return (_, _1, acted, _2) => {
            return !InventoryGroupIsBlocked(acted, group);
        };
    }
}

export class Prereqs {
    /** 动作发起者 */
    static Acting = Acting;

    /** 动作目标 */
    static Acted = Acted;

    /**
     * @param {ActivityManagerInterface.PrerequisiteCheckFunction} prereqFunc
     * @returns {ActivityManagerInterface.PrerequisiteCheckFunction}
     */
    static not(prereqFunc) {
        return (...args) => !prereqFunc(...args);
    }

    /**
     * @param {ActivityManagerInterface.PrerequisiteCheckFunction} lhs
     * @param {ActivityManagerInterface.PrerequisiteCheckFunction} rhs
     * @returns {ActivityManagerInterface.PrerequisiteCheckFunction}
     */
    static and(lhs, rhs) {
        return (...args) => lhs(...args) && rhs(...args);
    }

    /**
     * @param {ActivityManagerInterface.PrerequisiteCheckFunction} lhs
     * @param {ActivityManagerInterface.PrerequisiteCheckFunction} rhs
     * @returns {ActivityManagerInterface.PrerequisiteCheckFunction}
     */
    static or(lhs, rhs) {
        return (...args) => lhs(...args) || rhs(...args);
    }

    /**
     * @param {ActivityManagerInterface.PrerequisiteCheckFunction} lhs
     * @param {ActivityManagerInterface.PrerequisiteCheckFunction} rhs
     * @returns {ActivityManagerInterface.PrerequisiteCheckFunction}
     */
    static xor(lhs, rhs) {
        return (...args) => lhs(...args) !== rhs(...args);
    }
}
