import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "踩脚袜_Luzi",
    Random: false,
    Top: 0,
    Left: 0,
};

/** @type {Translation.Entry} */
const translation = {
    CN: "踩脚袜",
    EN: "Footstep Socks",
    RU: "Носки для шагов",
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
