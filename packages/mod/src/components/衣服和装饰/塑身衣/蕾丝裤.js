import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "蕾丝裤_Luzi",
    Random: false,
    Top: 0,
    Left: 0,
    Priority: 20, 
    Layer: [
        {
            Name: "裤子",
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
            Name: "图案",
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
    CN: "蕾丝裤",
    EN: "Lace Pants",
    RU: "Рюнорные штанишки",
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
