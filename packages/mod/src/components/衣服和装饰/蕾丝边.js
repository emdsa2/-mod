import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "蕾丝边_Luzi",
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
    CN: "蕾丝边",
    EN: "Lace leg strap",
};

export default function () {
    AssetManager.addAsset(
        "Garters",
        asset,
        undefined,
        translation
    );
}
