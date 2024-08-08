import AssetManager from "../../assetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "独角兽玩偶_Luzi",
    Random: false,
    Priority: 58,
    Value: 40,
    Difficulty: -2,
    Time: 15,
    RemoveTime: 10,
    Top: -45,
    AllowLock: true,
    Extended: true,
    MinOpacity: 0,
    Opacity: 0,
    SetPose: ["AllFours"],
    Effect: [E.BlockWardrobe, E.Freeze],
    Layer: [
        {
            Name: "身体",
            AllowTypes: { typed: [0, 1] },
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
                        [0, 388, 500, 200], //下
                    ],
                },
            ],
        },

        { Name: "背景", Priority: 6, MinOpacity: 1, AllowTypes: { typed: [0, 1] } },
        { Name: "脚", AllowTypes: { typed: [0, 1] } },
        { Name: "头背景", Priority: 6, MinOpacity: 1, AllowTypes: { typed: 0 } },
        { Name: "头发后", AllowTypes: { typed: 0 } },
        { Name: "耳朵外", AllowTypes: { typed: 0 } },
        { Name: "耳朵内", AllowTypes: { typed: 0 } },
        {
            Name: "头",
            AllowTypes: { typed: 0 },
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
                        [0, -200, 500, 270], //上
                        [0, 0, 154, 400], //左
                        [350, 0, 200, 400], //右
                        [0, 160, 172, 75], //左中
                        [336, 170, 100, 65], //右中
                    ],
                },
            ],
        },
        { Name: "头发前", AllowTypes: { typed: 0 } },
        { Name: "眼白", AllowTypes: { typed: 0 } },
        { Name: "瞳孔", AllowTypes: { typed: 0 } },
        { Name: "眉毛", AllowTypes: { typed: 0 } },
        { Name: "睫毛", AllowTypes: { typed: 0 } },
        { Name: "角", AllowTypes: { typed: 0 } },
        { Name: "高光", AllowTypes: { typed: 0 } },
    ],
};

const extended = {
    Archetype: ExtendedArchetype.TYPED,
    DrawImages: false,
    Options: [{ Name: "戴上头套" }, { Name: "摘掉头套" }],
    BaselineProperty: { Opacity: 0.7 },
    ScriptHooks: {
        Init: PropertyOpacityInit,
        Load: PropertyOpacityLoad,
        Draw: PropertyOpacityDraw,
        Exit: PropertyOpacityExit,
    },
};

/** @type {TranslationCustomDialog} */
const dialog = {
    CN: {
        ItemDevices独角兽玩偶_LuziSelect: "选择独角兽玩偶配置",
        ItemDevices独角兽玩偶_LuziSet戴上头套: "SourceCharacter戴上了DestinationCharacter的头套",
        ItemDevices独角兽玩偶_LuziSet摘掉头套: "SourceCharacter摘掉了DestinationCharacter的头套",
    },
    EN: {
        
        ItemDevices独角兽玩偶_LuziSelect: 'Select Unicorn Doll Configuration',
        ItemDevices独角兽玩偶_Luzi戴上头套: "Put on Headgear",
        ItemDevices独角兽玩偶_Luzi摘掉头套: "Remove Headgear",
        ItemDevices独角兽玩偶_LuziSet戴上头套: "SourceCharacter puts on the headgear for DestinationCharacter.",
        ItemDevices独角兽玩偶_LuziSet摘掉头套: "SourceCharacter removes the headgear from DestinationCharacter.",
    },
};

const translations = {
    EN: {
        独角兽玩偶: "Unicorn Stuffed Toy",
    },
};

export default function () {
    AssetManager.addAsset("ItemDevices", asset, extended);
    AssetManager.addCustomDialog(dialog);
}
