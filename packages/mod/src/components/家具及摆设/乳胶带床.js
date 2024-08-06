import AssetManager from "../../assetManager";

/** @type {AssetDefinition.Item} */
const asset = {
    Name: "乳胶带床_Luzi",
    Random: false,
    Top: 0,
    Left: 0,
    Effect: [E.Freeze, E.BlockWardrobe, E.Block, E.Mounted, E.MapImmobile, E.OnBed],
    SetPose: ["BackElbowTouch", "LegsClosed"],
    DefaultColor: [
        "Default",
        "Default",
        "Default",
        "Default",
        "Default",
        "Default",
        "Default",
        "Default",
        "Default",
        "Default",
        "#000000",
        "Default",
        "Default",
        "Default",
        "Default",
        "Default",
    ],
    Layer: [
        {
            Name: "外壳盖子关闭",
            Priority: 60,
            AllowTypes: { g: 2 },
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
                        [0, -100, 500, 150], //上
                        [0, 695, 500, 120], //下
                        [0, 0, 160, 1000], //左
                        [340, 0, 135, 1000], //右
                    ],
                },
            ],
        },
        {
            Name: "外壳",
            Priority: 1,
        },
        {
            Name: "外壳盖子打开",
            Priority: 1,
            AllowTypes: { g: 1 },
        },
        {
            Name: "床垫",
            Priority: 1,
        },
        {
            Name: "床带上",
            Priority: 1,
            ParentGroup: "BodyUpper",
        },
        {
            Name: "床带下",
            Priority: 1,
            ParentGroup: "BodyLower",
        },
        {
            Name: "床环上",
            Priority: 1,
            ParentGroup: "BodyUpper",
        },
        {
            Name: "床环下",
            Priority: 1,
            ParentGroup: "BodyLower",
        },
        {
            Name: "内衬",
            Priority: 25,
        },
        {
            Name: "圆环",
            Priority: 25,
        },
        {
            Name: "绳子",
            Priority: 25,
        },
        {
            Name: "拉链",
            Priority: 25,
        },
        {
            Name: "拘束带上",
            Priority: 53,
            ParentGroup: "BodyUpper",
        },
        {
            Name: "拘束带下",
            Priority: 53,
            ParentGroup: "BodyLower",
        },
        {
            Name: "乳胶上",
            Priority: 24,
            ParentGroup: "BodyUpper",
        },
        {
            Name: "乳胶下",
            Priority: 24,
            ParentGroup: "BodyLower",
        },
    ],
};

/** @type {AssetArchetypeConfig} */
const extended = {
    Archetype: ExtendedArchetype.MODULAR,
    ChangeWhenLocked: false,
    Modules: [
        {
            Name: "盖子",
            DrawImages: false,
            Key: "g",
            Options: [{ Name: "无盖子" }, { Name: "有盖子" }, { Name: "关上盖子" }],
        },
    ],
};

export default function () {
    AssetManager.addAsset("ItemDevices", asset, extended);
}
