import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "拖鞋_Luzi",
    Random: false,
    Top: 0,
    Left: 0,
    PoseMapping: {
        Kneel: "Hide",
        KneelingSpread: "Hide",
        LegsClosed: "LegsClosed",
        Spread: "Spread",
        Hogtied: "Hide",
        AllFours: "Hide",
    },
    Priority: 23,
};

const translations = {
    CN: "拖鞋",
    EN: "拖鞋",
};


export default function () {
    AssetManager.addAsset("Shoes", asset, undefined, translations);
}
