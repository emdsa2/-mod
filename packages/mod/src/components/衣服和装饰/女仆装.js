import AssetManager from "../../assetManager";

/** @type {AssetDefinition.Item} */
const asset = {
    Name: "女仆装_Luzi",
    Random: false,
    Gender: "F",
    Top: 0,
    Left: 0,
    Prerequisite: ["HasBreasts"],
    Layer: [
        {
            Name: "裙子",
            PoseMapping: {
                TapedHands: "BackElbowTouch",
                Yoked: "BackElbowTouch",
                OverTheHead: "BackElbowTouch",
                BackBoxTie: "BackElbowTouch",
                BackElbowTouch: "BackElbowTouch",
                BackCuffs: "BackElbowTouch",
            },
        },
        {
            Name: "围裙",
            PoseMapping: {
                TapedHands: "BackElbowTouch",
                Yoked: "BackElbowTouch",
                OverTheHead: "BackElbowTouch",
                BackBoxTie: "BackElbowTouch",
                BackElbowTouch: "BackElbowTouch",
                BackCuffs: "BackElbowTouch",
            },
        },
        {
            Name: "蝴蝶结",
            PoseMapping: {
                TapedHands: PoseType.DEFAULT,
                Yoked: PoseType.DEFAULT,
                OverTheHead: PoseType.DEFAULT,
                BackBoxTie: PoseType.DEFAULT,
                BackElbowTouch: PoseType.DEFAULT,
                BackCuffs: PoseType.DEFAULT,
            },
        },
    ],
};

export default function () {
    AssetManager.addAsset("Cloth", asset);
}
