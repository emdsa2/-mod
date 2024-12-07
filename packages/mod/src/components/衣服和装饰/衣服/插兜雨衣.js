import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "插兜雨衣",
    Random: false,
    Gender: "F",
    Top: 0,
    Left: 0,
    Extended: true,
    AllowActivePose: ["BaseUpper", "TapedHands", "BackBoxTie", "BackElbowTouch", "Hogtied", "AllFours"],
    SetPose: ["BackElbowTouch"],
    PoseMapping: {
        BackCuffs: "Hide",
        OverTheHead: "Hide",
        Yoked: "Hide",
        Hogtied: "Hide",
        AllFours: "Hide",
        Kneel: "Kneel",
        KneelingSpread: "Kneel",
    },
    Layer: [
        { Name: "透明", Priority: 42, AllowTypes: { typed: 0 } },
        { Name: "雨衣", Priority: 42, AllowTypes: { typed: 1 } },
    ],
};


const translations = {
    CN: "插兜雨衣",
    EN: "Transparent raincoat",
};

const extended = {
    Archetype: ExtendedArchetype.TYPED,
    DrawImages: false,
    Options: [{ Name: "透明" }, { Name: "不透" }],
};


/** @type {Translation.Dialog} */
const dialog = {
    CN: {
        Cloth插兜雨衣Select: "选择外观",
        Cloth插兜雨衣不透: "不透",
        Cloth插兜雨衣透明: "透明",

        Cloth_笨笨笨蛋Luzi2插兜雨衣Select: "选择外观",
        Cloth_笨笨笨蛋Luzi2插兜雨衣不透: "不透",
        Cloth_笨笨笨蛋Luzi2插兜雨衣透明: "透明",
        Cloth_笨笨蛋Luzi插兜雨衣Select: "选择外观",
        Cloth_笨笨蛋Luzi插兜雨衣不透: "不透",
        Cloth_笨笨蛋Luzi插兜雨衣透明: "透明",

        Cloth插兜雨衣Set不透: "SourceCharacter将DestinationCharacter雨衣换成了不透明的款式.",
        Cloth插兜雨衣Set透明: "SourceCharacter将DestinationCharacter雨衣换成了透明的款式.",
    },
    EN: {
        Cloth插兜雨衣Select: "Choose look",
        Cloth插兜雨衣不透: "Opaque",
        Cloth插兜雨衣透明: "Transparent",

        Cloth_笨笨笨蛋Luzi2插兜雨衣Select: "Choose look",
        Cloth_笨笨笨蛋Luzi2插兜雨衣不透: "Opaque",
        Cloth_笨笨笨蛋Luzi2插兜雨衣透明: "Transparent",
        Cloth_笨笨蛋Luzi插兜雨衣Select: "Choose look",
        Cloth_笨笨蛋Luzi插兜雨衣不透: "Opaque",
        Cloth_笨笨蛋Luzi插兜雨衣透明: "Transparent",

        Cloth插兜雨衣Set不透透明: "SourceCharacter changes DestinationCharacter raincoat to an opaque style.",
        Cloth插兜雨衣Set透明: "SourceCharacter changes DestinationCharacter raincoat to a transparent style.",
    },
};

export default function () {
    AssetManager.addAsset("Cloth", asset, extended, translations);
    AssetManager.addCustomDialog(dialog);
}
