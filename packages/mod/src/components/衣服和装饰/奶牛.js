import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "奶牛_Luzi",
    Random: false,
    Gender: "F",
    Top: 0,
    Left: 0,
    Prerequisite: ["HasBreasts"],
    PoseMapping: {
        TapedHands: "BaseUpper",
        Yoked: "BaseUpper",
        OverTheHead: "BaseUpper",
        BackBoxTie: "BaseUpper",
        BackElbowTouch: "BaseUpper",
        BackCuffs: "BaseUpper",
        AllFours: "Hide",
        Hogtied: "Hide",
    },
    Layer: [
        {
            Name: "衣服",
            Priority: 26,
        },
        {
            Name: "边缘",
            Priority: 26,
        },
    ],
};

const translations = { CN: "奶牛", EN: "Cow" };

export default function () {
    AssetManager.addAsset("Cloth", asset, undefined, translations);
}
