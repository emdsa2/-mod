import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset =         {
    Name: "凉鞋_Luzi",
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
    DefaultColor: ["#623B3B", "#181818",],
    Layer: [
        {
            Name: "鞋带",
            Priority: 17,
        },
        {
            Name: "鞋底",
            Priority: 1,
        },
    ],
};

const translations = {
    CN: "凉鞋",
    EN: "凉鞋",
};


export default function () {
    AssetManager.addAsset("Shoes", asset, undefined, translations);
}
