/** @type {AssetGroupItemName[]} */
const ItemGroups = [
    "ItemFeet",
    "ItemLegs",
    "ItemVulva",
    "ItemVulvaPiercings",
    "ItemButt",
    "ItemPelvis",
    "ItemTorso",
    "ItemTorso2",
    "ItemNipples",
    "ItemNipplesPiercings",
    "ItemBreast",
    "ItemArms",
    "ItemHands",
    "ItemHandheld",
    "ItemNeck",
    "ItemNeckAccessories",
    "ItemNeckRestraints",
    "ItemMouth",
    "ItemMouth2",
    "ItemMouth3",
    "ItemHead",
    "ItemNose",
    "ItemHood",
    "ItemEars",
    "ItemMisc",
    "ItemDevices",
    "ItemAddon",
    "ItemBoots",
];

export class AssetTools {
    /**
     * 所有物品身体组
     * @param {AssetGroupItemName[]} excepts
     * @returns {AssetGroupItemName[]}
     */
    static AllItemGroups(excepts = []) {
        return ItemGroups.filter((name) => !excepts.includes(name));
    }

    /**
     * 支持文本标签，包括源角色、目标角色、目标角色（所有格）、物品名称
     * @returns {CommonChatTags[]}
     */
    static CommonChatTags() {
        return [
            CommonChatTags.SOURCE_CHAR,
            CommonChatTags.TARGET_CHAR,
            CommonChatTags.DEST_CHAR,
            CommonChatTags.ASSET_NAME,
        ];
    }
}
