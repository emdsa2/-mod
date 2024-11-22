import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "鱼鱼尾_Luzi",
    Random: false,
    Gender: "F",
    Extended: true,
    OverrideHeight: { Height: 30, Priority: 19 },
    SetPose: ["LegsClosed", "Kneel"],
    Hide: ["BodyLower"],
    Layer: [
        {
            Name: "鱼尾下半身",
            Top: {
                Kneel: -110,
                LegsClosed: -110,
                Hogtied: -100,
                AllFours: 0,
            },
            Left: 0,
            Priority: 22,
            ParentGroup: "BodyLower",
            PoseMapping: {
                Kneel: "Kneel",
                LegsClosed: PoseType.DEFAULT,
                Hogtied: "Hogtied",
                AllFours: "AllFours",
            },
        },
        {
            Name: "皮带大腿下",
            Top: -110,
            Left: 0,
            Priority: 22,
            AllowTypes: { q: 1 },
            ParentGroup: "BodyLower",
            PoseMapping: {
                Kneel: "Kneel",
                LegsClosed: PoseType.DEFAULT,
                Hogtied: "Hide",
                AllFours: "AllFours",
            },
        },
        {
            Name: "皮带大腿上",
            Top: -110,
            Left: 0,
            Priority: 22,
            AllowTypes: { q: 1 },
            ParentGroup: "BodyLower",
            PoseMapping: {
                Kneel: "Kneel",
                LegsClosed: PoseType.DEFAULT,
                Hogtied: "Hide",
                AllFours: "Hide",
            },
        },
        {
            Name: "皮带小腿上",
            Top: -110,
            Left: 0,
            Priority: 22,
            AllowTypes: { q: 1 },
            ParentGroup: "BodyLower",
            PoseMapping: {
                Kneel: "Hide",
                LegsClosed: PoseType.DEFAULT,
                Hogtied: "Hide",
                AllFours: "Hide",
            },
        },
        {
            Name: "皮带小腿下",
            Top: -110,
            Left: 0,
            Priority: 22,
            AllowTypes: { q: 1 },
            ParentGroup: "BodyLower",
            PoseMapping: {
                Kneel: "Hide",
                LegsClosed: PoseType.DEFAULT,
                Hogtied: "Hide",
                AllFours: "Hide",
            },
        },
        {
            Name: "鱼尾皮带",
            Top: {
                Kneel: -110,
                LegsClosed: -110,
                Hogtied: -100,
                AllFours: 0,
            },
            Left: 0,
            Priority: 22,
            AllowTypes: { q: 1 },
            ParentGroup: "BodyLower",
            PoseMapping: {
                Kneel: "Kneel",
                LegsClosed: PoseType.DEFAULT,
                Hogtied: "Hogtied",
                AllFours: "AllFours",
            },
        },
        {
            Name: "珍珠项链",
            Top: -110,
            Left: 0,
            Priority: 22,
            AllowTypes: { q: 2 },
            ParentGroup: "BodyLower",
            PoseMapping: {
                Kneel: "Hide",
                LegsClosed: PoseType.DEFAULT,
                Hogtied: "Hide",
                AllFours: "Hide",
            },
        },
    ],
};

/** @type {AssetArchetypeConfig} */
const extended = {
    Archetype: ExtendedArchetype.MODULAR,
    Modules: [
        {
            Name: "鱼尾装饰",
            Key: "q",
            DrawImages: false,
            Options: [{}, {}, {}],
        },
    ],
};

const descriptions = {
    CN: {
        动物身体_Luzi鱼鱼尾_LuziSelectBase: "选择配置",
        动物身体_Luzi鱼鱼尾_LuziSelect鱼尾装饰: "设置",
        动物身体_Luzi鱼鱼尾_LuziModule鱼尾装饰: "鱼尾装饰",
        动物身体_Luzi鱼鱼尾_LuziOptionq0: "无",
        动物身体_Luzi鱼鱼尾_LuziOptionq1: "皮带",
        动物身体_Luzi鱼鱼尾_LuziOptionq2: "珍珠项链",
    },
    EN: {
        动物身体_Luzi鱼鱼尾_LuziSelectBase: "Select Configuration",
        动物身体_Luzi鱼鱼尾_LuziSelect鱼尾装饰: "Settings",
        动物身体_Luzi鱼鱼尾_LuziModule鱼尾装饰: "Decorations",
        动物身体_Luzi鱼鱼尾_LuziOptionq0: "None",
        动物身体_Luzi鱼鱼尾_LuziOptionq1: "Belt",
        动物身体_Luzi鱼鱼尾_LuziOptionq2: "Pearl Necklace",
    },
    RU: {
        动物身体_Luzi鱼鱼尾_LuziSelectBase: "Выбрать конфигурацию",
        动物身体_Luzi鱼鱼尾_LuziSelect鱼尾装饰: "Настройки",
        动物身体_Luzi鱼鱼尾_LuziModule鱼尾装饰: "Декорации хвоста",
        动物身体_Luzi鱼鱼尾_LuziOptionq0: "Нет",
        动物身体_Luzi鱼鱼尾_LuziOptionq1: "Ремень",
        动物身体_Luzi鱼鱼尾_LuziOptionq2: "Жемчужное ожерелье",
    },
};

const translations = {
    CN: "鱼鱼尾",
    EN: "Fishy Tail",
    RU: "Рыбий хвост",
};

export default function () {
    AssetManager.addAsset("动物身体_Luzi", asset, extended, translations);
    AssetManager.addCustomDialog(descriptions);
}
