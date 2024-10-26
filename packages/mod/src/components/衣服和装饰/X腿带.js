import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "X腿带_Luzi",
    Random: false,
    Top: 0,
    Left: 0,
    PoseMapping: {
        Kneel: "Kneel",
        LegsClosed: "LegsClosed",
        Spread: "Spread",
        KneelingSpread: "KneelingSpread",
        Hogtied: PoseType.HIDE,
        AllFours: PoseType.HIDE,
    },
    Priority: 22 
};

/** @type {Translation.Entry} */
const translation = {
    CN: "X腿带",
    EN: "X-Leg Straps",
};

export default function () {
    AssetManager.addAsset(
        "Garters",
        asset,
        undefined,
        translation
    );
}
