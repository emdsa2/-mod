import { Option } from "@mod-utils/fp";
// import { unit } from "@mod-utils/fp";
import ModManager from "@mod-utils/ModManager";
import AssetManager from "@mod-utils/AssetManager";
import ChatRoomOrder from "@mod-utils/ChatRoomOrder";

/** @type {CustomGroupedAssetDefinitions} */
const assets = {
    ItemAddon: [
        {
            Name: "被子左边_Luzi",
            Random: false,
            Top: -260,
            Left: 0,
            Difficulty: 1,
            SelfBondage: 0,
            DefaultColor: ["#99A2AB", "Default"],
            Layer: [{ Name: "外" }, { Name: "内" }],
        },
        {
            Name: "被子右边_Luzi",
            Random: false,
            Top: -260,
            Left: -210,
            Difficulty: 1,
            SelfBondage: 0,
            DefaultColor: ["#99A2AB", "Default"],
            Layer: [{ Name: "外" }, { Name: "内" }],
        },
    ],
    ItemDevices: [
        {
            Name: "床左边_Luzi",
            Random: false,
            Top: -260,
            Left: 0,
            Priority: 1,
            Difficulty: -20,
            SelfBondage: 0,
            Time: 5,
            RemoveTime: 5,
            RemoveAtLogin: true,
            OverrideHeight: { Height: 20, HeightRatioProportion: 1, Priority: 21 },
            DefaultColor: ["#523629", "#888990", "#808284"],
            RemoveItemOnRemove: [
                { Group: "ItemAddon", Name: "Covers" },
                { Group: "ItemAddon", Name: "被子左边_Luzi" },
                { Group: "ItemAddon", Name: "被子右边_Luzi" },
                { Group: "ItemAddon", Name: "BedRopes" },
                { Group: "ItemAddon", Name: "BedStraps" },
                { Group: "ItemAddon", Name: "BedTape" },
                { Group: "ItemAddon", Name: "BedChains" },
                { Group: "ItemArms", Name: "UnderBedBondageCuffs" },
                { Group: "ItemArms", Name: "MedicalBedRestraints" },
                { Group: "ItemArms", Name: "HempRope", TypeRecord: { typed: 11 } },
                { Group: "ItemLegs", Name: "MedicalBedRestraints" },
                { Group: "ItemFeet", Name: "HempRope", TypeRecord: { typed: 6 } },
                { Group: "ItemFeet", Name: "MedicalBedRestraints" },
            ],
            Effect: [E.Mounted, E.OnBed],
            Layer: [{ Name: "骨架" }, { Name: "床垫" }, { Name: "枕头" }],
        },
        {
            Name: "床右边_Luzi",
            Random: false,
            Top: -260,
            Left: -110,
            Priority: 1,
            Difficulty: -20,
            SelfBondage: 0,
            Time: 5,
            RemoveTime: 5,
            RemoveAtLogin: true,
            DefaultColor: ["#523629", "#888990", "#808284"],
            OverrideHeight: { Height: 20, HeightRatioProportion: 1, Priority: 21 },
            RemoveItemOnRemove: [
                { Group: "ItemAddon", Name: "Covers" },
                { Group: "ItemAddon", Name: "被子左边_Luzi" },
                { Group: "ItemAddon", Name: "被子右边_Luzi" },
                { Group: "ItemAddon", Name: "BedRopes" },
                { Group: "ItemAddon", Name: "BedStraps" },
                { Group: "ItemAddon", Name: "BedTape" },
                { Group: "ItemAddon", Name: "BedChains" },
                { Group: "ItemArms", Name: "UnderBedBondageCuffs" },
                { Group: "ItemArms", Name: "MedicalBedRestraints" },
                { Group: "ItemArms", Name: "HempRope", TypeRecord: { typed: 11 } },
                { Group: "ItemLegs", Name: "MedicalBedRestraints" },
                { Group: "ItemFeet", Name: "HempRope", TypeRecord: { typed: 6 } },
                { Group: "ItemFeet", Name: "MedicalBedRestraints" },
            ],
            Effect: [E.Mounted, E.OnBed],
            Layer: [{ Name: "骨架" }, { Name: "床垫" }, { Name: "枕头" }],
        },
    ],
};

/** @type {Translation.GroupedEntries} */
const translations = {
    CN: {
        ItemAddon: {
            被子左边_Luzi: "被子左边",
            被子右边_Luzi: "被子右边",
        },
        ItemDevices: {
            床左边_Luzi: "床左边",
            床右边_Luzi: "床右边",
        },
    },
    EN: {
        ItemAddon: {
            被子左边_Luzi: "Left Side of Quilt",
            被子右边_Luzi: "Right Side of Quilt",
        },
        ItemDevices: {
            床左边_Luzi: "Left Side of Bed",
            床右边_Luzi: "Right Side of Bed",
        },
    },
    RU: {
        ItemAddon: {
            被子左边_Luzi: "Левая сторона одеяла",
            被子右边_Luzi: "Правая сторона одеяла",
        },
        ItemDevices: {
            床左边_Luzi: "Левая сторона кровати",
            床右边_Luzi: "Правая сторона кровати",
        },
    },
    UA: {
        ItemAddon: {
            被子左边_Luzi: "Ліва сторона ковдри",
            被子右边_Luzi: "Права сторона ковдри",
        },
        ItemDevices: {
            床左边_Luzi: "Ліва сторона ліжка",
            床右边_Luzi: "Права сторона ліжка",
        },
    }
};

export default function () {
    AssetManager.addGroupedAssets(assets, translations);
    ModManager.progressiveHook("DrawCharacter", 1)
        .inside("ChatRoomCharacterViewLoopCharacters")
        .inject((args, next) => {
            const [C, X, Y, Zoom] = args;
            const sharedC = ChatRoomOrder.requireSharedCenter(C);

            if (!sharedC) return;
            if (
                sharedC.prev.MemberNumber === C.MemberNumber &&
                InventoryIsItemInList(C, "ItemDevices", ["床左边_Luzi"])
            ) {
                args[1] = sharedC.center.X - 100 * Zoom;
                args[2] = sharedC.center.Y;
                return;
            }
            if (
                sharedC.next.MemberNumber === C.MemberNumber &&
                InventoryIsItemInList(C, "ItemDevices", ["床右边_Luzi"])
            ) {
                args[1] = sharedC.center.X + 100 * Zoom;
                args[2] = sharedC.center.Y;
                return;
            }
        });
}
