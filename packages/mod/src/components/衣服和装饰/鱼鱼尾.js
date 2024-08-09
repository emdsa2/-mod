import AssetManager from "../../assetManager";
import { Path } from "../../path";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "鱼鱼尾_Luzi",
    Random: false,
    Gender: "F",
    Top: -110,
    Left: 0,
    Extended: true,
    OverrideHeight: { Height: 30, Priority: 19 },
    PoseMapping: { Spread: PoseType.DEFAULT, LegsClosed: PoseType.DEFAULT, KneelingSpread: "Kneel", Kneel: "Kneel" },
    Hide: ["BodyLower", "Socks", "SocksLeft", "SocksRight", "RightAnklet", "LeftAnklet", "Pussy"],
    Layer: [
        { Name: "鱼尾上", Priority: 22 },
        {
            Name: "鱼尾下不透明2",
            Priority: 22,
            AllowTypes: { w: 1 },
            CopyLayerColor: "鱼尾下不透明",
            PoseMapping: { Spread: "Hide", LegsClosed: "Hide", KneelingSpread: "Kneel", Kneel: "Kneel" },
        },
        {
            Name: "鱼尾下透明2",
            Priority: 22,
            AllowTypes: { w: 0 },
            CopyLayerColor: "鱼尾下透明",
            PoseMapping: { Spread: "Hide", LegsClosed: "Hide", KneelingSpread: "Kneel", Kneel: "Kneel" },
        },
        {
            Name: "鱼尾下骨架2",
            Priority: 22,
            CopyLayerColor: "鱼尾下骨架",
            PoseMapping: { Spread: "Hide", LegsClosed: "Hide", KneelingSpread: "Kneel", Kneel: "Kneel" },
        },
        {
            Name: "鱼尾下不透明",
            Priority: 22,
            AllowTypes: { w: 1 },
            PoseMapping: {
                Spread: PoseType.DEFAULT,
                LegsClosed: PoseType.DEFAULT,
                KneelingSpread: "Hide",
                Kneel: "Hide",
            },
        },
        {
            Name: "鱼尾下透明",
            Priority: 22,
            AllowTypes: { w: 0 },
            PoseMapping: {
                Spread: PoseType.DEFAULT,
                LegsClosed: PoseType.DEFAULT,
                KneelingSpread: "Hide",
                Kneel: "Hide",
            },
        },
        { Name: "鱼尾下骨架", Priority: 22 },
        { Name: "鱼尾鱼鳍上透明", Priority: 22, AllowTypes: { q: 1 } },
        { Name: "鱼尾鱼鳍上骨架", Priority: 22, AllowTypes: { q: 1 } },
        { Name: "高光上半", Priority: 22 },
        { Name: "高光下半", Priority: 22 },
    ],
};

/** @type {AssetArchetypeConfig} */
const extended = {
    Archetype: ExtendedArchetype.MODULAR,
    Modules: [
        {
            Name: "鱼鳍",
            Key: "q",
            DrawImages: false,
            Options: [{}, {}],
        },
        {
            Name: "鱼尾",
            Key: "w",
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
        SuitLower鱼鱼尾_LuziSelect鱼鳍: "设置鱼鳍",
        SuitLower鱼鱼尾_LuziSelect鱼尾: "设置鱼尾",
        SuitLower鱼鱼尾_LuziModule鱼鳍: "鱼鳍",
        SuitLower鱼鱼尾_LuziOptionq0: "无",
        SuitLower鱼鱼尾_LuziOptionq1: "有",
        SuitLower鱼鱼尾_LuziModule鱼尾: "鱼尾",
        SuitLower鱼鱼尾_LuziOptionw0: "透明",
        SuitLower鱼鱼尾_LuziOptionw1: "不透明",
    },
    EN: {
        SuitLower鱼鱼尾_LuziSelectBase: "Select Configuration",
        SuitLower鱼鱼尾_LuziSelect鱼鳍: "Set Fins",
        SuitLower鱼鱼尾_LuziSelect鱼尾: "Set Tail",
        SuitLower鱼鱼尾_LuziModule鱼鳍: "Fins",
        SuitLower鱼鱼尾_LuziOptionq0: "None",
        SuitLower鱼鱼尾_LuziOptionq1: "Present",
        SuitLower鱼鱼尾_LuziModule鱼尾: "Tail",
        SuitLower鱼鱼尾_LuziOptionw0: "Transparent",
        SuitLower鱼鱼尾_LuziOptionw1: "Opaque",
    },
};

const translations = { CN: "鱼鱼尾", EN: "Fish Tail" };

export default function () {
    AssetManager.addAsset("SuitLower", asset, extended, translations);
    AssetManager.addCustomDialog(descriptions);
    AssetManager.addImgMapping(icons);
}
