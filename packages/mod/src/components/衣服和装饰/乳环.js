import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "短穿环_Luzi",
    Fetish: ["Metal"],
    Value: -1,
    Difficulty: 10,
    Time: 15,
    AllowLock: true,
    Prerequisite: ["AccessBreast", "AccessBreastSuitZip"],
    ExpressionTrigger: [
        { Name: "Closed", Group: "Eyes", Timer: 5 },
        { Name: "Angry", Group: "Eyebrows", Timer: 5 },
    ],
};

const translations = {
    CN: "短穿环",
    EN: "Crossed Straight Piercings",
    RU: "Crossed Straight Piercings",
    UA: "Crossed Straight Piercings",
};

export default function () {
    AssetManager.addAsset("ItemNipplesPiercings", asset, undefined, translations);
}
