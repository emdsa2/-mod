import AssetManager from "@mod-utils/AssetManager";
import { VersionSupport } from "@mod-utils/VersionSupport";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "南瓜马具口塞",
    Random: false,
    Top: 0,
    Left: 0,
    Priority: 36,
    ParentGroup: VersionSupport.NoParentGroup,
    Fetish: ["Leather"],
    Difficulty: 6,
    Time: 20,
    AllowLock: true,
    AllowTighten: true,
    Prerequisite: "GagUnique",
    Hide: ["Mouth"],
    Effect: [E.BlockMouth, E.GagMedium],
    ExpressionTrigger: [{ Name: "DroolSides", Group: "Fluids", Timer: 30 }],
    DefaultColor: ["#181818", "Default", "Default", "Default"],
    Layer: [
        {
            Name: "带子",
        },
        {
            Name: "金属",
        },
        {
            Name: "南瓜",
        },
        {
            Name: "眼睛",
        },
    ],
    PoseMapping: {
        TapedHands: PoseType.DEFAULT,
        Yoked: PoseType.DEFAULT,
        OverTheHead: PoseType.DEFAULT,
        BackBoxTie: PoseType.DEFAULT,
        BackElbowTouch: PoseType.DEFAULT,
        BackCuffs: PoseType.DEFAULT,
        Hogtied: PoseType.DEFAULT,
        AllFours: PoseType.DEFAULT,
    },
};

const translations = {
    CN: "南瓜马具口塞",
    EN: "Pumpkin Harness Gag",
    RU: "кляп из тыквы",
    UA: "гарбуз джгут кляп",
};

export default function () {
    AssetManager.addAsset("ItemMouth", asset, undefined, translations);
}
