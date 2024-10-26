import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "绑带鞋_Luzi",
    Random: false,
    Top: 0,
    Left: 0,
    PoseMapping: {
        Kneel: PoseType.HIDE,
        KneelingSpread: PoseType.HIDE,
        LegsClosed: "LegsClosed",
        Spread: "Spread",
        Hogtied: PoseType.HIDE,
        AllFours: PoseType.HIDE,
    },
    Priority: 23 
};

/** @type {Translation.Entry} */
const translation = {
    CN: "绑带鞋",
    EN: "Lace-up shoes",
};

export default function () {
    AssetManager.addAsset(
        "Shoes",
        asset,
        undefined,
        translation
    );
}
