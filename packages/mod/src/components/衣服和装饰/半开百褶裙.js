import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "半开百褶裙_Luzi",
    Random: false,
    Top: 0,
    Left: 0,
    DefaultColor: ["#7F1739", "Default", "Default"],
    Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"],
    PoseMapping: {
        Kneel: "KneelingSpread",
        Hogtied: PoseType.HIDE,
        AllFours: PoseType.HIDE,
    },
    Layer: [
        {
            Name: "裙子",
            Priority: 26,
        },
        {
            Name: "白线",
            Priority: 26,
        },
        {
            Name: "链子",
            Priority: 26,
        },
    ],
};

/** @type {Translation.Entry} */
const translation = {
    CN: "半开百褶裙",
    EN: "Half pleated skirt",
};

export default function () {
    AssetManager.addAsset(
        "ClothLower",
        {
            ...asset,
            Left: {
                [PoseType.DEFAULT]: 0,
                KneelingSpread: 90,
            },
        },
        undefined,
        translation
    );
}
