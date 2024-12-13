import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "露趾袜_Luzi",
    Random: false,
    Top: 0,
    Left: 0,
};

/** @type {Translation.Entry} */
const translation = {
    CN: "露趾袜",
    EN: "Stirrup Thigh High Socks",
    RU: "Чулки с открытыми пальцами",
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
    AssetManager.addAsset("SocksLeft",
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
    AssetManager.addAsset("SocksRight",
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
};
