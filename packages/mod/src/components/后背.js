import AssetManager from "../assetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "后背_Luzi", Random: false, Gender: "F",
    Top: 0, Left: 0,
    SetPose: ["OverTheHead", "Yoked", "BaseLower", "LegsClosed"],
    Hide: ["Hands", "BodyLower", "BodyUpper", "Pussy", "Nipples", "ItemNipples", "ItemNipplesPiercings", 'Cloth', 'ClothAccessory', 'Necklace', 'Suit', 'ClothLower', 'SuitLower', 'Bra', 'Corset', 'Panties', 'Socks', 'SocksRight', 'SocksLeft', 'RightAnklet', 'LeftAnklet', 'Garters', 'Shoes', 'TailStraps', 'Wings', 'BodyMarkings', 'Cloth_笨笨蛋Luzi', 'ClothAccessory_笨笨蛋Luzi', 'Necklace_笨笨蛋Luzi', 'ClothLower_笨笨蛋Luzi', 'Bra_笨笨蛋Luzi', 'Panties_笨笨蛋Luzi', 'Shoes_笨笨蛋Luzi', 'Hat_笨笨蛋Luzi', 'HairAccessory3_笨笨蛋Luzi', 'Gloves_笨笨蛋Luzi', 'Mask_笨笨蛋Luzi', 'Wings_笨笨蛋Luzi', 'Cloth_笨笨笨蛋Luzi2', 'ClothLower_笨笨笨蛋Luzi2',],
    Layer: [
        {
            Name: "下半身", Priority: 9,
            Top: 460, Left: 0,
            ParentGroup: "BodyLower",
            InheritColor: "BodyLower",
            HideColoring: true,
            ColorSuffix: { HEX_COLOR: "White" },
            PoseMapping:
            {
                Kneel: "Hide",
                KneelingSpread: "Hide",
                LegsClosed: "LegsClosed",
                Spread: "Hide",
                Hogtied: "Hide",
                AllFours: "Hide",
            },
        },
        {
            Name: "上半身", Priority: 9,
            Top: 0, Left: 0,
            ParentGroup: "BodyUpper",
            InheritColor: "BodyUpper",
            HideColoring: true,
            ColorSuffix: { HEX_COLOR: "White" },
            PoseMapping:
            {
                BackBoxTie: "OverTheHead",
                BackCuffs: "OverTheHead",
                BackElbowTouch: "OverTheHead",
                OverTheHead: "OverTheHead",
                Yoked: "Yoked",
                Hogtied: "Hide",
                AllFours: "Hide",
            },
        },
        {
            Name: "纸袋", Priority: 70, AllowTypes: { typed: 0 },
            Top: 0, Left: 0,
        },
        {
            Name: "纸", Priority: 70, AllowTypes: { typed: 0 },
            Top: 0, Left: 0,
        },
        {
            Name: "胶带", Priority: 70, AllowTypes: { typed: 0 },
            Top: 0, Left: 0,
        },
        {
            Name: "麻袋头罩", Priority: 70, AllowTypes: { typed: 1 },
            Top: 0, Left: 0,
        },

    ],


};

/** @type {AssetArchetypeConfig} */
const extended = {
    Archetype: ExtendedArchetype.TYPED,
    DrawImages: false,
    Options: [
        { Name: "纸袋", },
        { Name: "麻袋头罩", Property: { Block: ["ItemEars", "ItemMouth", "ItemMouth2", "ItemMouth3", "ItemHead", "ItemNose",], Hide: ["HairFront", "HairBack", "Glasses", "ItemMouth", "ItemMouth2", "ItemMouth3", "HairAccessory1", "HairAccessory2", "HairAccessory3", "Hat", "Mask", "ItemEars", "ItemHead",], }, },
    ],
};


/** @type {TranslationCustomDialog} */
const dialog = {
    CN: {
        ItemAddon后背_LuziSelect: '选择后背配置',
        ItemAddon后背_LuziSet纸袋: 'SourceCharacter在DestinationCharacter的头上套上了纸袋',
        ItemAddon后背_LuziSet麻袋头罩: 'SourceCharacter在DestinationCharacter的头上套上了麻袋',
    },
    EN: {
        ItemAddon后背_LuziSelect: 'Select back configuration',
        ItemAddon后背_LuziSet纸袋: 'SourceCharacter placed a paper bag over DestinationCharacter’s head',
        ItemAddon后背_LuziSet麻袋头罩: 'SourceCharacter placed a sack hood over DestinationCharacter’s head',
    },
};

export default function () {
    AssetManager.addAsset("ItemAddon", asset, extended);
    AssetManager.addCustomDialog(dialog);
}
