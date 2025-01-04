import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "花边腿环",
    Random: false,
    Gender: "F",
    Top: 462,
    DefaultColor : [
        "Default",
        "#E3E3E3",
        "#181818",
        "#3F3F3F",
        "Default",
        "#E3E3E3",
        "#181818",
        "#3F3F3F"
    ],
    Left: {
        BaseLower: 0,
        Kneel: 0,
        KneelingSpread: 0,
        LegsClosed: 0,
        LegsOpen: 0,
        Spread: 0,
    },
    Priority: 22,
    PoseMapping: {
        Kneel: "Kneel",
        LegsClosed: "LegsClosed",
        Spread: "Spread",
        KneelingSpread: "KneelingSpread",
        Hogtied: PoseType.HIDE,
        AllFours: PoseType.HIDE,
    },
    Layer: [
        
        { Name: "左腿阴影",  AllowTypes: { typed: [0, 2] }},
        { Name: "左腿花边",  AllowTypes: { typed: [0, 2] }},
        { Name: "左腿环",  AllowTypes: { typed: [0, 2] }},
        { Name: "左腿蝴蝶结",  AllowTypes: { typed: [0, 2] }},
        
        { Name: "右腿阴影",  AllowTypes: { typed: [1, 2] }},
        { Name: "右腿花边",  AllowTypes: { typed: [1, 2] }},
        { Name: "右腿环",  AllowTypes: { typed: [1, 2] }},
        { Name: "右腿蝴蝶结",  AllowTypes: { typed: [1, 2] }},
    ],
};

const extended = {
    Archetype: ExtendedArchetype.TYPED,
    DrawImages: false,
    Options: [
        { Name: "左腿" },
        { Name: "右腿" },
        { Name: "双腿" },
    ],
};


const translations = {
    CN: "花边腿环",
    EN: "Lace leg ring",
};

/** @type {Translation.Dialog} */
const dialog = {
    CN: {
        Garters花边腿环Select: "选择",
        Garters花边腿环左腿: "左腿",
        Garters花边腿环右腿: "右腿",
        Garters花边腿环双腿: "都有",
    },
    EN: {
        Garters花边腿环Select: "Select",
        Garters花边腿环左腿: "Left leg",
        Garters花边腿环右腿: "Right leg",
        Garters花边腿环双腿: "Both",
    }
};


export default function () {
    AssetManager.addAsset("Garters", asset, extended, translations);
    AssetManager.addCustomDialog(dialog);
}
