import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "披肩",
    Random: false,
    Gender: "F",
    Top: -110,
    Left: 0,
    Prerequisite: ["HasBreasts"],
    Layer: [
        {
            Name: "Band",
            Priority: 26,
            PoseMapping: {
                TapedHands: PoseType.DEFAULT,
                Yoked: PoseType.DEFAULT,
                OverTheHead: PoseType.DEFAULT,
                BackBoxTie: PoseType.DEFAULT,
                BackElbowTouch: PoseType.DEFAULT,
                BackCuffs: PoseType.DEFAULT,
                AllFours: PoseType.DEFAULT,
                Hogtied: PoseType.DEFAULT,
            },
        },
        {
            Name: "Shawl",
            Priority: 26,
            PoseMapping: {
                TapedHands: PoseType.DEFAULT,
                Yoked: "Yoked",
                OverTheHead: "OverTheHead",
                BackBoxTie: PoseType.DEFAULT,
                BackElbowTouch: PoseType.DEFAULT,
                BackCuffs: PoseType.DEFAULT,
                AllFours: PoseType.DEFAULT,
                Hogtied: PoseType.DEFAULT,
            },
        },
    ],
};

const translations = {
    CN: "披肩",
    EN: "Shawl",
    RU: "Палантин",
    UA: "Палантин",
};

export default function () {
    AssetManager.addAsset("Cloth", asset, undefined, translations);
}
