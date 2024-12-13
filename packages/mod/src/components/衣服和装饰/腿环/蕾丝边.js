import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "蕾丝边_Luzi",
    Random: false,
    Gender: "F",
    Top: 0,
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
    Layer: [
        {
            Name: "带子",
        },
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
        Garters蕾丝边_LuziSelect: "选择",
        Garters蕾丝边_Luzi左腿: "左腿",
        Garters蕾丝边_Luzi右腿: "右腿",
        Garters蕾丝边_Luzi双腿: "都有",
    },
    EN: {
        Garters蕾丝边_LuziSelect: "Select",
        Garters蕾丝边_Luzi左腿: "Left leg",
        Garters蕾丝边_Luzi右腿: "Right leg",
        Garters蕾丝边_Luzi双腿: "Both",
    }
};

/** @type {Translation.Entry} */
const translation = {
    CN: "蕾丝边",
    EN: "Lace leg strap",
};

export default function () {
    AssetManager.addAsset("Garters", asset, extended, translation);
    AssetManager.addCustomDialog(dialog);
};
