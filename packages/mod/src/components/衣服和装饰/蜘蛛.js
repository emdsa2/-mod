import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "蜘蛛_Luzi",
    Random: false,
    Gender: "F",
    Top: 0,
    Left: -156,
    Difficulty: 25,
    Hide: ["Pussy", "BodyLower"],
    // Extended: true,
    Layer: [
        {
            Name: "肚子衔接",
            Priority: 16,
            ParentGroup: "BodyLower",
        },
        {
            Name: "肚子",
            Priority: 6,
            ParentGroup: "BodyLower",
        },
        {
            Name: "爪子前",
            Priority: 26,
            ParentGroup: "BodyLower",
        },
        {
            Name: "爪子中",
            Priority: 5,
            ParentGroup: "BodyLower",
        },
        {
            Name: "爪子后",
            Priority: 4,
            ParentGroup: "BodyLower",
        },
    ],
    OverrideHeight: {
        Height: -250,
        Priority: 21,
        HeightRatioProportion: 0,
    },
};

const translations = { CN: "蜘蛛", EN: "Spider" };

export default function () {
    AssetManager.addAsset("ItemAddon", asset, undefined, translations);
}
