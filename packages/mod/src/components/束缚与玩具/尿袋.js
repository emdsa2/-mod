import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "尿袋",
    Random: false,
    Top: 0,
    Left: 0,
    Priority: 10,
    ParentGroup: "BodyLower",
    PoseMapping: {
        LegsClosed: "LegsClosed",
        KneelingSpread: "KneelingSpread",
        Kneel: "LegsClosed",
        Spread: "BaseLower",
        Hogtied: "Hide",
        AllFours: "Hide",
    },
    Layer: [
        {
            Name: "尿", 
        },
        {
            Name: "遮罩", 
            HasImage: false,
        },
        {
            Name: "袋", 
        },
        {
            Name: "管", 
        },
    ],
};

const translations = {
    CN: "尿袋", 
    EN: "Urine Bag", 
    RU: "Мочеприемник", 
    UA: "Сечовий мішок" 
};

export default function () {
    AssetManager.addAsset("ItemTorso", asset, null, translations);
}
