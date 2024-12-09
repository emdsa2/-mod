import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "女仆围裙2_Luzi",
    Random: false,
    Top: 0,
    Left: 0,
    Priority: 31,
    DefaultColor :[
        "Default",
        "#000000",
    ],
    PoseMapping: {
        Hogtied: PoseType.HIDE,
        AllFours: PoseType.HIDE,
    },
    Layer: [
        {
            Name: "裙",
            PoseMapping: {
                TapedHands: "TapedHands",
                BackBoxTie: "BackElbowTouch",
                BackCuffs: "BackElbowTouch",
                BackElbowTouch: "BackElbowTouch",
                OverTheHead: "BackElbowTouch",
                Yoked: "BackElbowTouch",
                AllFours: PoseType.HIDE,
                Hogtied: PoseType.HIDE,
            },
        },
        {
            Name: "扣子",
        },
    ],
};

/** @type {Translation.Entry} */
const translation = {
    CN: "女仆围裙 2",
    EN: "Maid's apron 2",
};

export default function () {
    AssetManager.addAsset("Cloth", asset, undefined, translation);
}
