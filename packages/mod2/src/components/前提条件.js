import { RecordEntries } from "@mod-utils/fp";
import ActivityManager from "@mod-utils/ActivityManager";

/** @type { Record<Exclude<CustomActivityPrerequisite,ActivityPrerequisite>, ActivityManagerInterface.PrerequisiteCheckFunction> }  */
const prereqStorage = {
    TargetHasTail: (prereq, acting, acted, group) => !!InventoryGet(acted, "TailStraps"),
    TargetHasWings: (prereq, acting, acted, group) => !!InventoryGet(acted, "Wings"),
    TargetHasLeash: (prereq, acting, acted, group) => ChatRoomCanBeLeashed(acted),
    TargetHasCatTail: (prereq, acting, acted, group) =>
        InventoryIsItemInList(acted, "TailStraps", ["TailStrap", "KittenTailStrap2", "KittenTailStrap1"]),
    TargetHasTentacles: (prereq, acting, acted, group) =>
        InventoryIsItemInList(acted, "TailStraps", ["Tentacles"]) ||
        InventoryIsItemInList(acted, "ItemButt", ["Tentacles"]),
    NeedTentacles: (prereq, acting, acted, group) =>
        InventoryIsItemInList(acting, "TailStraps", ["Tentacles"]) ||
        InventoryIsItemInList(acting, "ItemButt", ["Tentacles"]),
    NeedPawMittens: (prereq, acting, acted, group) =>
        InventoryIsItemInList(acting, "ItemHands", ["PawMittens", "ElbowLengthMittens"]),
    NeedPetSuit: (prereq, acting, acted, group) =>
        InventoryIsItemInList(acting, "ItemArms", ["ShinyPetSuit", "BitchSuit", "StrictLeatherPetCrawler"]),
    NeedKennel: (prereq, acting, acted, group) => InventoryIsItemInList(acted, "ItemDevices", ["Kennel"]),
    TargetHasItemVulvaPiercings: (prereq, acting, acted, group) => !!InventoryGet(acted, "ItemVulvaPiercings"),
    TargetHasItemVulva: (prereq, acting, acted, group) => !!InventoryGet(acted, "ItemVulva"),
    NeedSword: (prereq, acting, acted, group) => InventoryIsItemInList(acting, "ItemHandheld", ["Sword"]),
    NeedScissors: (prereq, acting, acted, group) => InventoryIsItemInList(acting, "ItemHandheld", ["Scissors"]),
    NeedCloth: (prereq, acting, acted, group) => !!InventoryGet(acting, "Cloth"),
    NeedNoCloth: (prereq, acting, acted, group) => !InventoryGet(acting, "Cloth"),
    NeedNoClothLower: (prereq, acting, acted, group) => !InventoryGet(acting, "ClothLower"),
    NeedBra: (prereq, acting, acted, group) => !!InventoryGet(acting, "Bra"),
    NeedPanties: (prereq, acting, acted, group) => !!InventoryGet(acting, "Panties"),
    NeedSocks: (prereq, acting, acted, group) => !!InventoryGet(acting, "Socks"),
    NeedSuitLower鱼鱼尾_Luzi: (prereq, acting, acted, group) =>
        InventoryIsItemInList(acting, "ItemLegs", ["鱼鱼尾_Luzi"]),
    Need阿巴阿巴_Luzi: (prereq, acting, acted, group) =>
        InventoryIsItemInList(acting, "ItemHandheld", ["阿巴阿巴_Luzi"]),
};

export default function () {
    ActivityManager.addPrerequisites(RecordEntries(prereqStorage).map(([k, v]) => ({ name: k, test: v })));
}
