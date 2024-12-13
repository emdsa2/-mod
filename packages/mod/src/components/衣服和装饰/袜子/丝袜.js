import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "丝袜_Luzi",
    Random: false,
    Top: 0,
    Left: 0,
};

/** @type {Translation.Entry} */
const translation = {
    CN: "丝袜",
    EN: "Silk Stockings",
    RU: "Шелковые чулки",
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
    AssetManager.addAsset("SuitLower", asset, null, translation);
};
