import AssetManager from "@mod-utils/AssetManager";
import { Path } from "@mod-utils/path";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "鱼鱼尾_Luzi",
    Random: false,
    Gender: "F",
    Top: -110,
    Left: 0,
    Extended: true,
    OverrideHeight: { Height: 30, Priority: 19 },
    PoseMapping: {
        Spread: PoseType.DEFAULT,
        LegsClosed: PoseType.DEFAULT,
        KneelingSpread: "Kneel",
        Kneel: "Kneel"
    },
    Hide: ["BodyLower", "Socks", "SocksLeft", "SocksRight", "RightAnklet", "LeftAnklet", "Pussy"],
    Layer: [
        {
            Name: "鱼尾下半身",
            Priority: 22,
            ParentGroup: "BodyLower",
            PoseMapping: {
                Kneel: "Kneel",
                KneelingSpread: "Kneel",
                LegsClosed: PoseType.DEFAULT,
                Spread: PoseType.DEFAULT,
            },
        },
        {
            Name: "鱼尾趴下",
            Priority: 22,
            ParentGroup: "BodyUpper",
            CopyLayerColor: "鱼尾下半身",
            PoseMapping: {
                BaseUpper: "Hide",
                TapedHands: "Hide",
                Yoked: "Hide",
                OverTheHead: "Hide",
                BackBoxTie: "Hide",
                BackElbowTouch: "Hide",
                BackCuffs: "Hide",
                Hogtied: "Hide",
                AllFours: "Hide",
            },
        },
    ],
};

/** @type {AssetArchetypeConfig} */
const extended = {
    Archetype: ExtendedArchetype.MODULAR,
    Modules: [
        {
            Name: "项圈",
            Key: "q",
            DrawImages: false,
            Options: [{}, {}],
        },
    ],
};

/** @type {Record<string, string>} */
const icons = {
    "Screens/Inventory/SuitLower/鱼鱼尾_Luzi/q0.png": Path.空png,
    "Screens/Inventory/SuitLower/鱼鱼尾_Luzi/q1.png": Path.空png,
    "Screens/Inventory/SuitLower/鱼鱼尾_Luzi/w0.png": Path.空png,
    "Screens/Inventory/SuitLower/鱼鱼尾_Luzi/w1.png": Path.空png,
};

const descriptions = {
    CN: {
        SuitLower鱼鱼尾_LuziSelectBase: "选择配置",
        SuitLower鱼鱼尾_LuziSelect项圈: "设置项圈",
        SuitLower鱼鱼尾_LuziModule项圈: "项圈",
        SuitLower鱼鱼尾_LuziOptionq0: "无",
        SuitLower鱼鱼尾_LuziOptionq1: "有",
    },
    EN: {
        SuitLower鱼鱼尾_LuziSelectBase: "Select Configuration",
        SuitLower鱼鱼尾_LuziSelect项圈: "Set Fins",
        SuitLower鱼鱼尾_LuziModule项圈: "Fins",
        SuitLower鱼鱼尾_LuziOptionq0: "None",
        SuitLower鱼鱼尾_LuziOptionq1: "Present",
    },
};

const translations = { CN: "鱼鱼尾", EN: "Fishy Tail" };

export default function () {
    // AssetManager.addAsset("SuitLower", asset, extended, translations);
    // AssetManager.addCustomDialog(descriptions);
    // AssetManager.addImageMapping(icons);
}
