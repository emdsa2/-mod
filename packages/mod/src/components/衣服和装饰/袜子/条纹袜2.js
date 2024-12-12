import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "条纹袜2_Luzi",
    Random: false,
    Top: 0,
    Left: 0,
    Layer: [
        {
            Name: "袜子",
            Priority: 20,
        },
        {
            Name: "条纹",
            Priority: 20,
        },
        {
            Name: "袜边",
            Priority: 20,
        },
    ],
};

/** @type {Translation.Entry} */
const translation = {
    CN: "条纹袜 2",
    EN: "Striped Socks 2",
    RU: "Полосатые носки 2",
};

export default function () {

    AssetManager.addAsset(
        "Socks",
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
        },
        undefined,
        translation
    );

    AssetManager.addAsset("Socks", asset, null, translation);
    AssetManager.addAsset("SocksLeft", asset, null, translation);
    AssetManager.addAsset("SocksRight", asset, null, translation);
}
