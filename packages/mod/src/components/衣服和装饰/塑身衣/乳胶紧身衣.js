import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "乳胶紧身衣_Luzi",
    Random: false,
    Top: 0,
    Left: 0,
    Priority: 16,
    ParentGroup: "BodyUpper",
    PoseMapping: {
        TapedHands: PoseType.DEFAULT,
        BackBoxTie: PoseType.DEFAULT,
        BackCuffs: PoseType.DEFAULT,
        BackElbowTouch: PoseType.DEFAULT,
        OverTheHead: PoseType.DEFAULT,
        Yoked: PoseType.DEFAULT,
        Hogtied: "Hogtied",
        AllFours: PoseType.HIDE,
    },
    Layer: [
        { Name: "衣", },
        { Name: "阴影", },
        { Name: "高光", },
    ],
};


/** @type {Translation.Entry} */
const translation = {
    CN: "乳胶紧身衣",
    EN: "乳胶紧身衣",
};

export default function () {
    AssetManager.addAsset("Suit", asset, null, translation);
}
