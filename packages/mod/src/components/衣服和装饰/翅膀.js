import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "翅膀1",
    Random: false,
    Top: 0,
    Left: 0,
    DefaultColor: ["#141414", "#000000",],
    Layer: [
        {
            Name: "翼膜",
        },
        {
            Name: "翼骨",
        },
    ],
};

const translations = {
    CN: "翅膀 1",
    EN: "Wing 1",
    RU: "Крыло 1",
    UA: "Крило 1",
};

export default function () {
    AssetManager.addAsset("Wings", asset, undefined, translations);
}
