import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "斜肩上衣_Luzi",
    Random: false,
    Gender: "F",
    Top: 0,
    Left: 0,
    Prerequisite: ["HasBreasts"],
    PoseMapping: {
        TapedHands: "TapedHands",
        BackBoxTie: "TapedHands",
        BackCuffs: "BackCuffs",
        BackElbowTouch: "BackElbowTouch",
        OverTheHead: "OverTheHead",
        Yoked: "Yoked",
        Hogtied: "Hide",
        AllFours: "Hide",
    },
    Layer: [
        { Name: "左", AllowTypes: { typed: 0 } },
        { Name: "右", AllowTypes: { typed: 1 } },
    ],
};

const extended = {
    Archetype: ExtendedArchetype.TYPED,
    DrawImages: false,
    Options: [{ Name: "左" }, { Name: "右" }],
};

/** @type {Translation.Dialog} */
const dialog = {
    CN: {
        Cloth斜肩上衣_Luzi_LuziSelect: "选择斜肩上衣配置",
        Cloth斜肩上衣_Luzi_左: "左",
        Cloth斜肩上衣_Luzi_右: "右",
    },
    EN: {
        Cloth斜肩上衣_Luzi_LuziSelect: "Select Off-the-shoulder top",
        Cloth斜肩上衣_Luzi_左: "Left",
        Cloth斜肩上衣_Luzi_右: "Right",
    },
};

const translations = { CN: "斜肩上衣", EN: "Off-the-shoulder top" };

export default function () {
    AssetManager.addAsset("Cloth", asset, extended, translations);
    AssetManager.addCustomDialog(dialog);
}
