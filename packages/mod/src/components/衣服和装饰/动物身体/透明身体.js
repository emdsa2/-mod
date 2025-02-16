import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "透明身体",
    Random: false,
    Gender: "F",
    ParentGroup: null,
    Hide: [
        "HandsLeft", 
        "HandsRight", 
        "BodyUpper", 
        "BodyLower", 
        "ArmsLeft", 
        "ArmsRight", 
        "Pussy", 
        "Head", 
        "Eyes", 
        "Eyes2", 
        "眼睛右_Luzi", 
        "眼睛左_Luzi", 
    ],
};

const translations = {
    CN: "透明身体",
    EN: "Transparent body",
};

export default function () {
    AssetManager.addAsset("动物身体_Luzi", asset, undefined, translations);
}
