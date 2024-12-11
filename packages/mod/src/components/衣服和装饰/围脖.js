import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "围脖_Luzi",
    Random: false,
    Top: 0,
    Left: 0,
    Priority: 40,
};

/** @type {Translation.Entry} */
const translation = {
    CN: "围脖",
    EN: "围脖",
};

export default function () {
    AssetManager.addAsset("ClothAccessory", asset, undefined, translation);
}
