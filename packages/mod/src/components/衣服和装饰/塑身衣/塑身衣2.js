import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "塑身衣2_Luzi",
    Random: false,
    Top: 0,
    Left: 0,
    Priority: 14, 
    Layer: [
        {
            Name: "上",
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
            Name: "下",
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
            Name: "上中线",
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
            Name: "下中线",
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
            Name: "上线",
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
            Name: "下线",
            PoseMapping: {
                LegsClosed: "LegsClosed",
                KneelingSpread: "KneelingSpread",
                Kneel: "Kneel",
                Spread: "Spread",
                Hogtied: PoseType.HIDE,
                AllFours: PoseType.HIDE,
            },
        },
    ],
};

/** @type {Translation.Entry} */
const translation = {
    CN: "塑身衣 2",
    EN: "塑身衣 2",
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

    AssetManager.addAsset("SuitLower", asset, null, translation);
}
