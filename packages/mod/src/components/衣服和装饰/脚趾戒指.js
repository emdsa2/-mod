import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "脚趾戒指_Luzi",
    Random: false,
    Gender: "F",
    Top: 0,
    Left: 0,
    Extended: true,
    DefaultColor: ["#9B9897", "#9B9897", "#9B9897", "#9B9897", "#9B9897", "#9B9897", "#9B9897", "#9B9897", "#9B9897", "#9B9897"],
    PoseMapping: {
        BaseLower: PoseType.DEFAULT,
        Kneel: "Hide",
        KneelingSpread: "Hide",
        LegsClosed: "LegsClosed",
        Spread: "Spread",
        Hogtied: "Hide",
        AllFours: "Hide",
    },
    ParentGroup: "BodyLower",
    Priority: 21,
    Layer: [
        { Name: "左1", AllowTypes: { L1: 1 },},
        { Name: "右1", AllowTypes: { R1: 1 },},
        { Name: "左2", AllowTypes: { L2: 1 },},
        { Name: "右2", AllowTypes: { R2: 1 },},
        { Name: "左3", AllowTypes: { L3: 1 },},
        { Name: "右3", AllowTypes: { R3: 1 },},
        { Name: "左4", AllowTypes: { L4: 1 },},
        { Name: "右4", AllowTypes: { R4: 1 },},
        { Name: "左5", AllowTypes: { L5: 1 },},
        { Name: "右5", AllowTypes: { R5: 1 },},
    ],
};

/** @type {ModularItemConfig} */
const extended = {
    Archetype: ExtendedArchetype.MODULAR,
    ChangeWhenLocked: false,
    Modules: [
        {
            Name: "左1", DrawImages: false,
            Key: "L1", Options: [{}, {}],
        },
        {
            Name: "右1", DrawImages: false,
            Key: "R1", Options: [{}, {}],
        },
        {
            Name: "左2", DrawImages: false,
            Key: "L2", Options: [{}, {}],
        },
        {
            Name: "右2", DrawImages: false,
            Key: "R2", Options: [{}, {}],
        },
        {
            Name: "左3", DrawImages: false,
            Key: "L3", Options: [{}, {}],
        },
        {
            Name: "右3", DrawImages: false,
            Key: "R3", Options: [{}, {}],
        },
        {
            Name: "左4", DrawImages: false,
            Key: "L4", Options: [{}, {}],
        },
        {
            Name: "右4", DrawImages: false,
            Key: "R4", Options: [{}, {}],
        },
        {
            Name: "左5", DrawImages: false,
            Key: "L5", Options: [{}, {}],
        },
        {
            Name: "右5", DrawImages: false,
            Key: "R5", Options: [{}, {}],
        },
    ],
};


/** @type {Translation.Dialog} */
const dialog = {
    CN: {
        Shoes脚趾戒指_LuziSelectBase: "选择脚趾戒指配置",
        Shoes脚趾戒指_LuziSelect左1: "设置左大拇指戒指",
        Shoes脚趾戒指_LuziModule左1: "左大拇指戒指",
        Shoes脚趾戒指_LuziOptionL10: "无",
        Shoes脚趾戒指_LuziOptionL11: "有",
        Shoes脚趾戒指_LuziSelect右1: "设置右大拇指戒指",
        Shoes脚趾戒指_LuziModule右1: "右大拇指戒指",
        Shoes脚趾戒指_LuziOptionR10: "无",
        Shoes脚趾戒指_LuziOptionR11: "有",

        Shoes脚趾戒指_LuziSelect左2: "设置左食指戒指",
        Shoes脚趾戒指_LuziModule左2: "左食指戒指",
        Shoes脚趾戒指_LuziOptionL20: "无",
        Shoes脚趾戒指_LuziOptionL21: "有",
        Shoes脚趾戒指_LuziSelect右2: "设置右食指戒指",
        Shoes脚趾戒指_LuziModule右2: "右食指戒指",
        Shoes脚趾戒指_LuziOptionR20: "无",
        Shoes脚趾戒指_LuziOptionR21: "有",

        Shoes脚趾戒指_LuziSelect左3: "设置左中指戒指",
        Shoes脚趾戒指_LuziModule左3: "左中指戒指",
        Shoes脚趾戒指_LuziOptionL30: "无",
        Shoes脚趾戒指_LuziOptionL31: "有",
        Shoes脚趾戒指_LuziSelect右3: "设置右中指戒指",
        Shoes脚趾戒指_LuziModule右3: "右中指戒指",
        Shoes脚趾戒指_LuziOptionR30: "无",
        Shoes脚趾戒指_LuziOptionR31: "有",

        Shoes脚趾戒指_LuziSelect左4: "设置左无名指戒指",
        Shoes脚趾戒指_LuziModule左4: "左无名指戒指",
        Shoes脚趾戒指_LuziOptionL40: "无",
        Shoes脚趾戒指_LuziOptionL41: "有",
        Shoes脚趾戒指_LuziSelect右4: "设置右无名指戒指",
        Shoes脚趾戒指_LuziModule右4: "右无名指戒指",
        Shoes脚趾戒指_LuziOptionR40: "无",
        Shoes脚趾戒指_LuziOptionR41: "有",

        Shoes脚趾戒指_LuziSelect左5: "设置左小指戒指",
        Shoes脚趾戒指_LuziModule左5: "左小指戒指",
        Shoes脚趾戒指_LuziOptionL50: "无",
        Shoes脚趾戒指_LuziOptionL51: "有",
        Shoes脚趾戒指_LuziSelect右5: "设置右小指戒指",
        Shoes脚趾戒指_LuziModule右5: "右小指戒指",
        Shoes脚趾戒指_LuziOptionR50: "无",
        Shoes脚趾戒指_LuziOptionR51: "有",
    },
    EN: {
        脚趾戒指_Luzi_LuziSelect: "Select toe ring",
        Shoes脚趾戒指_LuziSelect左1: "Set Left Big Toe Ring",
        Shoes脚趾戒指_LuziModule左1: "Left Big Toe Ring",
        Shoes脚趾戒指_LuziOptionL10: "None",
        Shoes脚趾戒指_LuziOptionL11: "Present",
        Shoes脚趾戒指_LuziSelect右1: "Set Right Big Toe Ring",
        Shoes脚趾戒指_LuziModule右1: "Right Big Toe Ring",
        Shoes脚趾戒指_LuziOptionR10: "None",
        Shoes脚趾戒指_LuziOptionR11: "Present",

        Shoes脚趾戒指_LuziSelect左2: "Set Left Second Toe Ring",
        Shoes脚趾戒指_LuziModule左2: "Left Second Toe Ring",
        Shoes脚趾戒指_LuziOptionL20: "None",
        Shoes脚趾戒指_LuziOptionL21: "Present",
        Shoes脚趾戒指_LuziSelect右2: "Set Right Second Toe Ring",
        Shoes脚趾戒指_LuziModule右2: "Right Second Toe Ring",
        Shoes脚趾戒指_LuziOptionR20: "None",
        Shoes脚趾戒指_LuziOptionR21: "Present",

        Shoes脚趾戒指_LuziSelect左3: "Set Left Middle Toe Ring",
        Shoes脚趾戒指_LuziModule左3: "Left Middle Toe Ring",
        Shoes脚趾戒指_LuziOptionL30: "None",
        Shoes脚趾戒指_LuziOptionL31: "Present",
        Shoes脚趾戒指_LuziSelect右3: "Set Right Middle Toe Ring",
        Shoes脚趾戒指_LuziModule右3: "Right Middle Toe Ring",
        Shoes脚趾戒指_LuziOptionR30: "None",
        Shoes脚趾戒指_LuziOptionR31: "Present",

        Shoes脚趾戒指_LuziSelect左4: "Set Left Fourth Toe Ring",
        Shoes脚趾戒指_LuziModule左4: "Left Fourth Toe Ring",
        Shoes脚趾戒指_LuziOptionL40: "None",
        Shoes脚趾戒指_LuziOptionL41: "Present",
        Shoes脚趾戒指_LuziSelect右4: "Set Right Fourth Toe Ring",
        Shoes脚趾戒指_LuziModule右4: "Right Fourth Toe Ring",
        Shoes脚趾戒指_LuziOptionR40: "None",
        Shoes脚趾戒指_LuziOptionR41: "Present",

        Shoes脚趾戒指_LuziSelect左5: "Set Left Little Toe Ring",
        Shoes脚趾戒指_LuziModule左5: "Left Little Toe Ring",
        Shoes脚趾戒指_LuziOptionL50: "None",
        Shoes脚趾戒指_LuziOptionL51: "Present",
        Shoes脚趾戒指_LuziSelect右5: "Set Right Little Toe Ring",
        Shoes脚趾戒指_LuziModule右5: "Right Little Toe Ring",
        Shoes脚趾戒指_LuziOptionR50: "None",
        Shoes脚趾戒指_LuziOptionR51: "Present",
    },
};

const translations = {
    CN: "脚趾戒指",
    EN: "Toe Ring",
    RU: "Кольцо на пальце ноги",
};

export default function () {
    AssetManager.addAsset("Shoes", asset, extended, translations);
    AssetManager.addCustomDialog(dialog);
}
