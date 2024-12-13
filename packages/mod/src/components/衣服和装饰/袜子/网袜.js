import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "网袜_Luzi",
    Random: false,
    Top: 0,
    Left: 0,
    Priority: 12,
    DefaultColor: ["#351C1C", "#351C1C", "#1C1111", "#1C1111", "#170E0E", "#170E0E", "#000000",],
    Layer: [
        {
            Name: "上袜",
            PoseMapping: {
                LegsClosed: PoseType.DEFAULT,
                KneelingSpread: PoseType.DEFAULT,
                Kneel: PoseType.DEFAULT,
                Spread: PoseType.DEFAULT,
                Hogtied: PoseType.HIDE,
                AllFours: PoseType.HIDE,
            },
        },
        {
            Name: "下袜",
            PoseMapping: {
                LegsClosed: "LegsClosed",
                KneelingSpread: "KneelingSpread",
                Kneel: "Kneel",
                Spread: "Spread",
                Hogtied: PoseType.HIDE,
                AllFours: PoseType.HIDE,
            },
        },
        {
            Name: "上网",
            PoseMapping: {
                LegsClosed: PoseType.DEFAULT,
                KneelingSpread: PoseType.DEFAULT,
                Kneel: PoseType.DEFAULT,
                Spread: PoseType.DEFAULT,
                Hogtied: PoseType.HIDE,
                AllFours: PoseType.HIDE,
            },
        },
        {
            Name: "下网",
            PoseMapping: {
                LegsClosed: "LegsClosed",
                KneelingSpread: "KneelingSpread",
                Kneel: "Kneel",
                Spread: "Spread",
                Hogtied: PoseType.HIDE,
                AllFours: PoseType.HIDE,
            },
        },
        {
            Name: "上图案",
            PoseMapping: {
                LegsClosed: PoseType.DEFAULT,
                KneelingSpread: PoseType.DEFAULT,
                Kneel: PoseType.DEFAULT,
                Spread: PoseType.DEFAULT,
                Hogtied: PoseType.HIDE,
                AllFours: PoseType.HIDE,
            },
        },
        {
            Name: "下图案",
            PoseMapping: {
                LegsClosed: "LegsClosed",
                KneelingSpread: "KneelingSpread",
                Kneel: "Kneel",
                Spread: "Spread",
                Hogtied: PoseType.HIDE,
                AllFours: PoseType.HIDE,
            },
        },
        {
            Name: "腰线",
            PoseMapping: {
                LegsClosed: PoseType.DEFAULT,
                KneelingSpread: PoseType.DEFAULT,
                Kneel: PoseType.DEFAULT,
                Spread: PoseType.DEFAULT,
                Hogtied: PoseType.HIDE,
                AllFours: PoseType.HIDE,
            },
        },
    ],
};

/** @type {Translation.Entry} */
const translation = {
    CN: "网袜",
    EN: "Net Socks",
    RU: "Носки-сетка",
};

export default function () {
    AssetManager.addAsset("Socks",
        {
            ...asset,
            Left: {
                BaseLower: 0,
                Kneel: 0,
                KneelingSpread: 30,
                LegsClosed: 0,
                LegsOpen: 0,
                Spread: 0,
            },
        }, undefined, translation
    );
};
