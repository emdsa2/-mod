import AssetManager from "../../assetManager";

/** @type {AssetDefinition.Item} */
const asset = {
    Name: "奶牛_Luzi",
    Random: false,
    Gender: "F",
    Top: 0,
    Left: 0,
    Prerequisite: ["HasBreasts"],
    Layer: [
        {
            Name: "衣服",
            Priority: 26,
            PoseMapping: {
                TapedHands: PoseType.DEFAULT,
                Yoked: PoseType.DEFAULT,
                OverTheHead: PoseType.DEFAULT,
                BackBoxTie: PoseType.DEFAULT,
                BackElbowTouch: PoseType.DEFAULT,
                BackCuffs: PoseType.DEFAULT,
            },
        },
        {
            Name: "边缘",
            Priority: 26,
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
