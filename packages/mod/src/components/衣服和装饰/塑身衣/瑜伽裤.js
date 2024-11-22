import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "瑜伽裤_Luzi",
    Random: false,
    Top: 0,
    Left: 0,
    Layer: [
        {
            Name: "上",
            Priority: 24, 
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
            Priority: 24,
            PoseMapping: {
                LegsClosed: "LegsClosed",
                KneelingSpread: "KneelingSpread",
                Kneel: "Kneel",
                Spread: "Spread",
                Hogtied: PoseType.HIDE,
                AllFours: PoseType.HIDE,
            },
        }
    ],
};

/** @type {Translation.Entry} */
const translation = {
    CN: "瑜伽裤",
    EN: "Yoga Pants",
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
