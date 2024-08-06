import AssetManager from "../../assetManager";

/** @type {AssetDefinition.Item} */
const asset = {
    Name: "玻璃罐子_Luzi",
    Random: false,
    /** @type {AssetGender} */
    Gender: "F",
    Top: -110,
    Left: 0,
    AllowLock: true,
    Difficulty: 50,
    Hide: ["Mouth", "Glasses", "TailStraps"],
    AllowActivePose: ["BackBoxTie", "BackCuffs", "BackElbowTouch", "LegsClosed"],
    Extended: true,
    DefaultColor: [
        "#151515",
        "#151515",
        "#FFFFFF",
        "#FFFFFF",
        "#2A2A2A",
        "#404040",
        "#2A2A2A",
        "#404040",
        "#EE168E",
        "#EE168E",
        "#9E2184",
        "#6D0B4A",
        "#4A4242",
        "#FF3CC3",
        "#E17070",
    ],
    Layer: [
        { Name: "舌头", AllowColorize: false, Priority: 7 },
        { Name: "身体衔接", Priority: 30 },
        { Name: "管道衔接", Priority: 40, AllowTypes: { gz: 1 } },
        { Name: "管道", Priority: 38, AllowTypes: { gz: 1 } },
        { Name: "管道2", Priority: 5, AllowTypes: { gz: 1 } },
        { Name: "上1", Priority: 56 },
        { Name: "上2", Priority: 4 },
        { Name: "下1", Priority: 56 },
        { Name: "下2", Priority: 4 },
        { Name: "面板", Priority: 56 },
        { Name: "液体", Priority: 39, AllowTypes: { yt: 1 } },
        { Name: "液体2", Priority: 6, AllowTypes: { yt: 1 } },
        { Name: "玻璃罐液体前", Priority: 56, AllowTypes: { yt: 1 } },
        { Name: "玻璃罐液体后", Priority: 4, AllowTypes: { yt: 1 } },
        { Name: "玻璃外层", Priority: 57, AllowTypes: { c: 0 } },
        { Name: "发光", Priority: 31 },
        { Name: "玻璃关闭", Priority: 57, AllowTypes: { c: 1 } },
        { Name: "手臂拘束", Priority: 35, AllowTypes: { s: 1 } },
        { Name: "腿部拘束", Priority: 35, AllowTypes: { t: 1 } },
        { Name: "吊顶链", Priority: 5, AllowTypes: { s: 1 } },
    ],
};

/** @type {AssetArchetypeConfig} */
const extended = {
    Archetype: ExtendedArchetype.MODULAR,
    Modules: [
        {
            Name: "窗户",
            Key: "c",
            DrawImages: false,
            Options: [{}, { Property: { Difficulty: 52, Effect: ["BlindHeavy", "GagLight", "Freeze", "Enclose"] } }],
        },
        {
            Name: "腿部拘束",
            Key: "t",
            DrawImages: false,
            Options: [{}, { Property: { Difficulty: 22, SetPose: ["LegsClosed"], Effect: ["Freeze", "Mounted"] } }],
        },
        {
            Name: "手臂拘束",
            Key: "s",
            DrawImages: false,
            Options: [
                {},
                {
                    Property: {
                        Difficulty: 18,
                        SetPose: ["BackElbowTouch"],
                        Effect: ["Freeze", "Block", "Mounted"],
                        OverrideHeight: { Height: 0, Priority: 60 },
                    },
                },
            ],
        },
        {
            Name: "管道",
            Key: "gz",
            DrawImages: false,
            Options: [{}, {}],
        },
        {
            Name: "液体",
            Key: "yt",
            DrawImages: false,
            Options: [{}, {}],
        },
        {
            Name: "快感模块",
            Key: "k",
            DrawImages: false,
            Options: [
                { Property: { Intensity: -1, Effect: ["Egged"] } },
                { Property: { Intensity: 0, Effect: ["Egged", "Vibrating"] } },
                { Property: { Intensity: 1, Effect: ["Egged", "Vibrating"] } },
                { Property: { Intensity: 2, Effect: ["Egged", "Vibrating"] } },
                { Property: { Intensity: 3, Effect: ["Egged", "Vibrating"] } },
            ],
        },
        {
            Name: "电击模块",
            Key: "d",
            DrawImages: false,
            Options: [
                { Property: { ShockLevel: 0 } },
                { Property: { ShockLevel: 0 } },
                { Property: { ShockLevel: 1 } },
                { Property: { ShockLevel: 2 } },
            ],
        },
        {
            Name: "高潮锁",
            Key: "g",
            DrawImages: false,
            Options: [
                {},
                { Property: { Effect: ["DenialMode"] } },
                { Property: { Effect: ["DenialMode", "RuinOrgasms"] } },
            ],
        },
    ],
    ChangeWhenLocked: false,
};

export default function () {
    AssetManager.addAsset("ItemDevices", asset, extended);
}
