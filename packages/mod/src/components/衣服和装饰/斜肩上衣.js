import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "斜肩上衣_Luzi",
    Random: false,
    Gender: "F",
    Top: 0,
    Left: 0,
    Extended: true,
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
        Cloth斜肩上衣_LuziSelect: "设置",
        Cloth斜肩上衣_Luzi左: "左",
        Cloth斜肩上衣_Luzi右: "右",
    },
    EN: {
        Cloth斜肩上衣_LuziSelect: "Select",
        Cloth斜肩上衣_Luzi左: "Left",
        Cloth斜肩上衣_Luzi右: "Right",
    },
    RU: {
        Cloth斜肩上衣_LuziSelect: "Выбрать",
        Cloth斜肩上衣_Luzi左: "Лево",
        Cloth斜肩上衣_Luzi右: "Право",
    },
};

const translations = {
    CN: "斜肩上衣",
    EN: "Off-the-shoulder top",
    RU: "Топ с открытым плечом",
};

export default function () {
    AssetManager.addAsset("Cloth", asset, extended, translations);
    AssetManager.addCustomDialog(dialog);
}
