import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "花边腿环",
    Random: false,
    Gender: "F",
    Top: 462,
    Left: 0,
    Priority: 22,
    Extended: true,
    PoseMapping: {
        Kneel: "Kneel",
        LegsClosed: "LegsClosed",
        Spread: "Spread",
        KneelingSpread: "KneelingSpread",
        Hogtied: PoseType.HIDE,
        AllFours: PoseType.HIDE,
    },
    DefaultColor: [
        "#FFFFFF",
        "#FFFFFF",
        "#181818",
        "#3F3F3F",
    ],
    Layer: [
        { Name: "阴影", },
        { Name: "花边" },
        { Name: "环", },
        { Name: "蝴蝶结", },
        {
            Name: "左腿",
            HasImage: false,
            HideColoring: true,
            AllowTypes: { typed: [1] },
            Alpha: [
                {
                    Group: ["Garters",],
                    Masks: [
                        [251, 0, 250, 1000],
                    ],
                },
            ],
        },
        {
            Name: "右腿",
            HasImage: false,
            HideColoring: true,
            AllowTypes: { typed: [2] },
            Alpha: [
                {
                    Group: ["Garters",],
                    Masks: [
                        [0, 0, 250, 1000],
                    ],
                },
            ],
        },
    ],
};

const extended = {
    Archetype: ExtendedArchetype.TYPED,
    DrawImages: false,
    Options: [
        { Name: "双腿" },
        { Name: "左腿", },
        { Name: "右腿", },
    ],
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

/** @type {Translation.Entry} */
const translation = {
    CN: "花边腿环",
    EN: "Lace leg ring",
};

export default function () {
    AssetManager.addAsset("Garters", asset, extended, translation);
    AssetManager.addCustomDialog(dialog);
};
