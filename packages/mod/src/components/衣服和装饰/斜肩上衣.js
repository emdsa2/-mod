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
    BaselineProperty: { Opacity: 1 },
    ScriptHooks: {
        Init: PropertyOpacityInit,
        Load: PropertyOpacityLoad,
        Draw: PropertyOpacityDraw,
        Exit: PropertyOpacityExit,
    },
};

/** @type {Translation.Dialog} */
const dialog = {
    CN: {
        斜肩上衣_Luzi_LuziSelect: "选择斜肩上衣配置",
        斜肩上衣_Luzi_Luzi左: "左",
        斜肩上衣_Luzi_Luzi右: "右",
    },
    EN: {
        斜肩上衣_Luzi_LuziSelect: "Select Off-the-shoulder top",
        斜肩上衣_Luzi_Luzi左: "Left",
        斜肩上衣_Luzi_Luzi右: "Right",
    },
};

const translations = { CN: "斜肩上衣", EN: "Off-the-shoulder top" };

export default function () {
    AssetManager.addAsset("Cloth", asset, extended, translations);
    AssetManager.addCustomDialog(dialog);
}
