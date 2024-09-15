import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "女仆装_Luzi",
    Random: false,
    Gender: "F",
    Top: 0,
    Left: 0,
    Prerequisite: ["HasBreasts"],
    PoseMapping: {
        TapedHands: "TapedHands",
        Yoked: "BackElbowTouch",
        OverTheHead: "BackElbowTouch",
        BackBoxTie: "BackElbowTouch",
        BackElbowTouch: "BackElbowTouch",
        BackCuffs: "BackElbowTouch",
        AllFours: "Hide",
        Hogtied: "Hide",
    },
    Layer: [
        {
            Name: "裙子",
            Priority: 26,
        },
        {
            Name: "围裙",
            Priority: 26,
        },
        {
            Name: "蝴蝶结",
            Priority: 26,
        },
    ],
};

const translations = {
    CN: "女仆装",
    EN: "Maid Costume",
    RU: "Костюм горничной",
};

export default function () {
    AssetManager.addAsset("Cloth", asset, undefined, translations);
}
