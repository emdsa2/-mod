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
        AllFours: "AllFours",
        Hogtied: "Hogtied",
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

/** @type {CustomAssetDefinition} */
const asset2 = {
    Name: "女仆装2_Luzi",
    Random: false,
    Gender: "F",
    Top: 0,
    Left: 0,
    Prerequisite: ["HasBreasts"],
    DefaultColor: ["#3F3F3F","#808080"],
    Layer: [
        {
            Name: "裙子",
            Priority: 35,
            PoseMapping: {
                TapedHands: "TapedHands",
                Yoked: "Yoked",
                OverTheHead: "OverTheHead",
                BackBoxTie: "BackBoxTie",
                BackElbowTouch: "BackElbowTouch",
                BackCuffs: "BackCuffs",
                AllFours: "Hide",
                Hogtied: "Hogtied",
            },
        },
        {
            Name: "围裙",
            Priority: 35,
            PoseMapping: {
                TapedHands: "TapedHands",
                Yoked: "BackElbowTouch",
                OverTheHead: "BackElbowTouch",
                BackBoxTie: "BackElbowTouch",
                BackElbowTouch: "BackElbowTouch",
                BackCuffs: "BackElbowTouch",
                AllFours: "Hide",
                Hogtied: "Hogtied",
            },
        },
    ],
};

const translations2 = {
    CN: "女仆装 2",
    EN: "Maid Costume 2",
    RU: "Костюм горничной 2",
};

export default function () {
    AssetManager.addAsset("Cloth", asset, undefined, translations);
    AssetManager.addAsset("Cloth", asset2, undefined, translations2);
}
