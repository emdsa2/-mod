import AssetManager from "../../assetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "巨型玩偶_Luzi",
    Random: false,
    Priority: 58,
    Value: 40,
    Difficulty: -2,
    Time: 15,
    RemoveTime: 10,
    Top: 0,
    AllowLock: true,
    Extended: true,
    MinOpacity: 0,
    Opacity: 0,
    SetPose: ["Kneel"],
    Effect: [E.BlockWardrobe, E.Freeze],
    Layer: [
        {
            Name: "背景",
            Priority: 1,
            MinOpacity: 1,
        },
        {
            Name: "玩偶",
            Alpha: [
                {
                    Group: [
                        "HairFront",
                        "HairBack",
                        "Bracelet",
                        "Cloth",
                        "ClothAccessory",
                        "ClothLower",
                        "Corset",
                        "Fluids",
                        "Garters",
                        "Gloves",
                        "HairAccessory1",
                        "HairAccessory2",
                        "HairAccessory3",
                        "Hat",
                        "ItemArms",
                        "ItemBreast",
                        "ItemButt",
                        "ItemHandheld",
                        "ItemHead",
                        "ItemHood",
                        "ItemLegs",
                        "ItemMisc",
                        "ItemNeck",
                        "ItemNose",
                        "ItemPelvis",
                        "ItemTorso",
                        "LeftAnklet",
                        "LeftHand",
                        "Mask",
                        "Mouth",
                        "Nipples",
                        "Panties",
                        "RightAnklet",
                        "RightHand",
                        "Shoes",
                        "Socks",
                        "SocksLeft",
                        "SocksRight",
                        "Suit",
                        "SuitLower",
                        "TailStraps",
                        "Wings",
                        "Bra",
                        "HairAccessory1",
                        "HairAccessory2",
                        "HairAccessory3",
                        "Cloth_笨笨笨蛋Luzi2",
                        "Cloth_笨笨蛋Luzi",
                        "ClothLower_笨笨笨蛋Luzi2",
                        "ClothLower_笨笨蛋Luzi",
                    ],
                    Masks: [
                        [0, 0, 155, 750],
                        [350, 0, 150, 750],
                        [155, 0, 255, 65],
                        [155, 700, 255, 30],
                        AssetLowerOverflowAlpha,
                    ],
                },
            ],
        },
        { Name: "围巾" },
    ],
};

const extended = {
    Archetype: ExtendedArchetype.TYPED,
    DrawImages: false,
    Options: [{ Name: "熊熊" }],
    BaselineProperty: { Opacity: 0.7 },
    ScriptHooks: {
        Init: PropertyOpacityInit,
        Load: PropertyOpacityLoad,
        Draw: PropertyOpacityDraw,
        Exit: PropertyOpacityExit,
    },
};

/** @type {CustomDialogSet} */
const dialog = {
    CN: {
        ItemDevices巨型玩偶_LuziSelect: "选择巨型玩偶配置",
    },
    EN: {
        ItemDevices巨型玩偶_LuziSelect: "Select Giant Doll Configuration",
    },
};

export default function () {
    AssetManager.addAsset("ItemDevices", asset, extended);
    AssetManager.addCustomDialog(dialog);
}
