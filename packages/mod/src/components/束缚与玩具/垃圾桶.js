import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "垃圾桶_Luzi",
    Random: false,
    Top: 0,
    Left: 0,
    AllowLock: true,
    Extended: true,
    MinOpacity: 0,
    Opacity: 0,
    Priority: 58,
    SetPose: ["Kneel"],
    Layer: [
        { Name: "轮子", Priority: 1, MinOpacity: 1 },
        { Name: "背景", Priority: 2, MinOpacity: 1 },
        { Name: "外框", MinOpacity: 1 },
        {
            Name: "垃圾桶",
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
                        "HandsRight",
                        "HandsLeft",
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
                        "AnkletLeft",
                        "Mask",
                        "Mouth",
                        "Nipples",
                        "Panties",
                        "AnkletRight",
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
                    ],
                    Masks: [
                        [0, 695, 500, 120], //下
                        [0, 175, 160, 1000], //左
                        [340, 175, 135, 1000], //右
                    ],
                },
            ],
        },
        {
            Name: "盖子",
            AllowTypes: { typed: [1, 2] },
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
                    ],
                    Masks: [
                        [0, -100, 500, 150], //上
                        [0, 0, 160, 1000], //左
                        [340, 0, 135, 1000], //右
                    ],
                },
            ],
        },
        { Name: "挡板", AllowTypes: { typed: 1 } },
        { Name: "图案", AllowTypes: { typed: 1 } },
    ],
};

const extended = {
    Archetype: ExtendedArchetype.TYPED,
    DrawImages: false,
    Options: [{ Name: "打开盖子" }, { Name: "合上盖子" }, { Name: "打开挡板" }],
    BaselineProperty: { Opacity: 1 },
    ScriptHooks: {
        Init: PropertyOpacityInit,
        Load: PropertyOpacityLoad,
        Draw: PropertyOpacityDraw,
        Exit: PropertyOpacityExit,
    },
};

/** @type {Translation.Dialog} */
const dialog = {
    CN: {
        ItemDevices垃圾桶_LuziSelect: "选择垃圾桶配置",
        ItemDevices垃圾桶_Luzi打开盖子: "打开盖子",
        ItemDevices垃圾桶_Luzi合上盖子: "合上盖子",
        ItemDevices垃圾桶_Luzi打开挡板: "打开挡板",

        ItemDevices垃圾桶_LuziSet合上盖子: "SourceCharacter合上了DestinationCharacter盖子",
        ItemDevices垃圾桶_LuziSet打开盖子: "SourceCharacter打开了DestinationCharacter盖子",
        ItemDevices垃圾桶_LuziSet打开挡板: "SourceCharacter打开了DestinationCharacter挡板",
    },
    EN: {
        ItemDevices垃圾桶_LuziSelect: "Select Trash Bin Configuration",
        ItemDevices垃圾桶_Luzi打开盖子: "Open Lid",
        ItemDevices垃圾桶_Luzi合上盖子: "Close Lid",
        ItemDevices垃圾桶_Luzi打开挡板: "Open Flap",

        ItemDevices垃圾桶_LuziSet合上盖子: "SourceCharacter closed DestinationCharacter lid",
        ItemDevices垃圾桶_LuziSet打开盖子: "SourceCharacter opened DestinationCharacter lid",
        ItemDevices垃圾桶_LuziSet打开挡板: "SourceCharacter opened DestinationCharacter baffle",
    },
    UA: {
        ItemDevices垃圾桶_LuziSelect: "Виберіть конфігурацію для смітника",
        ItemDevices垃圾桶_Luzi打开盖子: "Відкрити накривку",
        ItemDevices垃圾桶_Luzi合上盖子: "Закрити накривку",
        ItemDevices垃圾桶_Luzi打开挡板: "Відкрити клапоть",

        ItemDevices垃圾桶_LuziSet合上盖子: "SourceCharacter закрили DestinationCharacter накривкою",
        ItemDevices垃圾桶_LuziSet打开盖子: "SourceCharacter відкрили накривку DestinationCharacter",
        ItemDevices垃圾桶_LuziSet打开挡板: "SourceCharacter відкрили перегородку DestinationCharacter",
    },
    RU: {
        ItemDevices垃圾桶_LuziSelect: "Выбор конфигурации мусорного бака",
        ItemDevices垃圾桶_Luzi打开盖子: "Открыть крышку",
        ItemDevices垃圾桶_Luzi合上盖子: "Закрыть крышку",
        ItemDevices垃圾桶_Luzi打开挡板: "Открыть заслонку",

        ItemDevices垃圾桶_LuziSet合上盖子: "SourceCharacter закрыл крышку DestinationCharacter",
        ItemDevices垃圾桶_LuziSet打开盖子: "SourceCharacter открыл крышку DestinationCharacter",
        ItemDevices垃圾桶_LuziSet打开挡板: "SourceCharacter открыл заслонку DestinationCharacter",
    },
};

const translations = {
    CN: "垃圾桶",
    EN: "Trash Can",
    UA: "Смітник",
};

export default function () {
    AssetManager.addAsset("ItemDevices", asset, extended, translations);
    AssetManager.addCustomDialog(dialog);
}
