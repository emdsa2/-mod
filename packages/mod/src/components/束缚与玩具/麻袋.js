import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "麻袋_Luzi",
    Random: false,
    Gender: "F",
    Top: 0,
    Left: 0,
    Difficulty: 12,
    SelfBondage: 8,
    Time: 40,
    RemoveTime: 30,
    Extended: true,
    AllowActivePose: ["BackBoxTie", "BackElbowTouch", "LegsClosed", "Kneel"],
    SetPose: ["BackBoxTie", "LegsClosed"],
    Layer: [
        { Name: "透明", Priority: 62, AllowTypes: { typed: 0 } },
        { Name: "麻袋", Priority: 62, AllowTypes: { typed: 1 } },
        { Name: "绳子", Priority: 62 },
        {
            Name: "背面",
            Priority: 1,
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
                        // "ItemHeads",
                        // "ItemHood",
                        "ItemLegs",
                        "ItemMisc",
                        "ItemNeck",
                        "ItemNose",
                        "ItemPelvis",
                        "ItemTorso",
                        "AnkletLeft",
                        "HandsLeft",
                        "Mask",
                        "Mouth",
                        "Nipples",
                        "Panties",
                        "AnkletRight",
                        "HandsRight",
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
                        "额外头发_Luzi",
                        "新后发_Luzi",
                        "新前发_Luzi",

                        "BodyLower",
                        "Socks",
                        "SocksLeft",
                        "SocksRight",
                        "SuitLower",
                    ],
                    Masks: [
                        [100, 0, 300, 64],

                        [0, 0, 164, 800],
                        [100, 54, 102, 19],
                        [100, 73, 87, 15],

                        [336, 0, 164, 800],
                        [297, 54, 102, 19],
                        [312, 73, 87, 15],

                        [100, 575, 90, 200],
                        [310, 575, 90, 200],
                    ],
                },
            ],
        },
    ],
};


const translations = {
    CN: "麻袋",
    EN: "麻袋",
};

const extended = {
    Archetype: ExtendedArchetype.TYPED,
    DrawImages: false,
    Options: [{ Name: "透明" }, { Name: "不透" }],
};


/** @type {Translation.Dialog} */
const dialog = {
    CN: {
        ItemDevices麻袋_LuziSelect: "选择外观",
        ItemDevices麻袋_Luzi不透: "不透",
        ItemDevices麻袋_Luzi透明: "微透明",

        ItemDevices麻袋_LuziSet不透: "SourceCharacter将DestinationCharacter麻袋换成了不透明的款式.",
        ItemDevices麻袋_LuziSet透明: "SourceCharacter将DestinationCharacter麻袋换成了微透明的款式.",

        ItemHood麻袋_LuziSelect: "选择外观",
        ItemHood麻袋_Luzi不透: "不透",
        ItemHood麻袋_Luzi透明: "微透明",

        ItemHood麻袋_LuziSet不透: "SourceCharacter将DestinationCharacter麻袋换成了不透明的款式.",
        ItemHood麻袋_LuziSet透明: "SourceCharacter将DestinationCharacter麻袋换成了微透明的款式.",
    },
    EN: {
        ItemDevices麻袋_LuziSelect: "选择外观",
        ItemDevices麻袋_Luzi不透: "不透",
        ItemDevices麻袋_Luzi透明: "透明",

        ItemDevices麻袋_LuziSet不透: "SourceCharacter将DestinationCharacter麻袋换成了不透明的款式.",
        ItemDevices麻袋_LuziSet透明: "SourceCharacter将DestinationCharacter麻袋换成了微透明的款式.",

        ItemHood麻袋_LuziSelect: "选择外观",
        ItemHood麻袋_Luzi不透: "不透",
        ItemHood麻袋_Luzi透明: "微透明",

        ItemHood麻袋_LuziSet不透: "SourceCharacter将DestinationCharacter麻袋换成了不透明的款式.",
        ItemHood麻袋_LuziSet透明: "SourceCharacter将DestinationCharacter麻袋换成了微透明的款式.",
    },
};

export default function () {
    AssetManager.addAsset("ItemDevices", asset, extended, translations);
    AssetManager.addAsset("ItemHood", asset, extended, translations);
    AssetManager.addCustomDialog(dialog);
}
