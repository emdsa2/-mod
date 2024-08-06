import AssetManager from "../assetManager";

/** @type {AssetDefinition.Item} */
const asset = {
    Name: "隐形药水_Luzi",
    Random: false,
    Gender: "F",
    Top: 0,
    Left: 0,
    Difficulty: 25,
    Hide: [
        "ItemHandheld",
        "Hands",
        "Bracelet",
        "LeftHand",
        "RightHand",
        "SocksRight",
        "SocksLeft",
        "BodyLower",
        "BodyUpper",
        "BodyFull",
    ],
    Extended: true,
    Layer: [
        {
            Name: "下半身",
            Priority: 9,
            Top: {
                [PoseType.DEFAULT]: 460,
                KneelingSpread: 460,
                Kneel: 460,
                LegsClosed: 460,
                Spread: 460,
            },
            Left: {
                [PoseType.DEFAULT]: 0,
                KneelingSpread: 0,
            },
            ParentGroup: "BodyLower",
            InheritColor: "BodyLower",
            HideColoring: true,
            ColorSuffix: { HEX_COLOR: "White" },
            PoseMapping: {
                Kneel: "Kneel",
                KneelingSpread: "KneelingSpread",
                LegsClosed: "LegsClosed",
                Spread: "Spread",
                Hogtied: "Hide",
                AllFours: "Hide",
            },
        },
        {
            Name: "上半身",
            Priority: 9,
            Top: {
                [PoseType.DEFAULT]: 0,
                KneelingSpread: 0,
            },
            Left: {
                [PoseType.DEFAULT]: 0,
                KneelingSpread: 0,
            },
            ParentGroup: "BodyUpper",
            InheritColor: "BodyUpper",
            HideColoring: true,
            ColorSuffix: { HEX_COLOR: "White" },
            PoseMapping: {
                BackBoxTie: "BackBoxTie",
                BackCuffs: "BackCuffs",
                BackElbowTouch: "BackElbowTouch",
                OverTheHead: "OverTheHead",
                Yoked: "Yoked",
                Hogtied: "Hide",
                AllFours: "Hide",
            },
        },
        {
            Name: "全身",
            Priority: 9,
            Top: 0,
            Left: 0,
            ParentGroup: "BodyUpper",
            InheritColor: "BodyUpper",
            HideColoring: true,
            ColorSuffix: { HEX_COLOR: "White" },
            PoseMapping: {
                [PoseType.DEFAULT]: "Hide",
                BackBoxTie: "Hide",
                BackCuffs: "Hide",
                BackElbowTouch: "Hide",
                OverTheHead: "Hide",
                Yoked: "Hide",
                AllFours: "AllFours",
                Hogtied: "Hogtied",
            },
        },

        {
            Name: "透视紧身衣下半身",
            Priority: 13,
            AllowTypes: { s: 1 },
            Top: 462,
            Left: 0,
            ParentGroup: "BodyLower",
            PoseMapping: {
                Kneel: "Kneel",
                KneelingSpread: "KneelingSpread",
                LegsClosed: "LegsClosed",
                Spread: "Spread",
                Hogtied: "Hide",
                AllFours: "Hide",
            },
        },
        {
            Name: "透视紧身衣上半身",
            Priority: 13,
            AllowTypes: { s: 1 },
            Top: 0,
            Left: 0,
            ParentGroup: "BodyUpper",
            PoseMapping: {
                BackBoxTie: "BackBoxTie",
                BackCuffs: "BackCuffs",
                BackElbowTouch: "BackElbowTouch",
                OverTheHead: "OverTheHead",
                Yoked: "Yoked",
                Hogtied: "Hide",
                AllFours: "Hide",
            },
        },
        {
            Name: "透视紧身衣全身",
            Priority: 13,
            AllowTypes: { s: 1 },
            Top: {
                Hogtied: 500,
            },
            Left: 0,
            ParentGroup: "BodyUpper",
            PoseMapping: {
                AllFours: "Hide",
                Hogtied: "Hogtied",
            },
        },
        {
            Name: "脚链",
            Priority: 31,
            AllowTypes: { ll: [1, 2, 3] },
            Top: 460,
            Left: 0,
            ParentGroup: "BodyLower",
            PoseMapping: {
                Kneel: "Kneel",
                KneelingSpread: "KneelingSpread",
                LegsClosed: "LegsClosed",
                Spread: "Spread",
                Hogtied: "Hide",
                AllFours: "Hide",
            },
        },
        {
            Name: "手链",
            Priority: 31,
            AllowTypes: { l: [1, 2] },
            Top: 0,
            Left: 0,
            ParentGroup: "BodyUpper",
            PoseMapping: {
                BackBoxTie: "BackBoxTie",
                BackCuffs: "BackCuffs",
                BackElbowTouch: "Hide",
                OverTheHead: "OverTheHead",
                Yoked: "Yoked",
                Hogtied: "Hide",
                AllFours: "Hide",
            },
        },
        {
            Name: "手链链子",
            Priority: 8,
            AllowTypes: { l: 2 },
            Top: -430,
            Left: 0,
        },
        {
            Name: "脚链链子",
            Priority: 8,
            AllowTypes: { ll: 2 },
            Top: -430,
            Left: 0,
        },
        {
            Name: "脚链链子反",
            Priority: 8,
            AllowTypes: { ll: 3 },
            Top: 530,
            Left: 0,
        },
    ],
    OverrideHeight: {
        Height: -450,
        Priority: 21,
        HeightRatioProportion: 0,
    },
};

/**@type {AssetArchetypeConfig} */
const extened = {
    Archetype: ExtendedArchetype.MODULAR,
    ChangeWhenLocked: false,
    Modules: [
        {
            Name: "紧身衣",
            DrawImages: false,
            Key: "s",
            Options: [
                {
                    Property: { Difficulty: 8, Effect: [E.Block] },
                },
                {
                    Property: { Difficulty: 8, Effect: [E.Block] },
                },
            ],
        },
        {
            Name: "铐子手",
            DrawImages: false,
            Key: "l",
            Options: [
                {},
                {
                    Property: { Difficulty: 8, Effect: [E.CuffedArms] },
                },
                {
                    Property: { Difficulty: 8, Effect: [E.CuffedArms], SetPose: ["OverTheHead"] },
                    Expression: [{ Group: "Blush", Name: "Medium", Timer: 10 }],
                    HasSubscreen: true,
                    ArchetypeConfig: {
                        Archetype: ExtendedArchetype.VARIABLEHEIGHT,
                        MaxHeight: 0,
                        MinHeight: -250,
                        DrawData: {
                            elementData: [{ position: [1140, 650, 100, 500], icon: "rope" }],
                        },
                        DialogPrefix: {
                            Chat: "SuspensionChange",
                        },
                    },
                },
            ],
        },
        {
            Name: "铐子腿",
            DrawImages: false,
            Key: "ll",
            Options: [
                {},
                {
                    Property: { Difficulty: 8, Effect: [E.CuffedFeet] },
                },
                {
                    Property: { Difficulty: 8, Effect: [E.CuffedFeet], SetPose: ["KneelingSpread"] },
                    Expression: [{ Group: "Blush", Name: "Medium", Timer: 10 }],
                },
                {
                    Property: { Difficulty: 8, Effect: [E.CuffedFeet], SetPose: ["KneelingSpread"] },
                    Expression: [{ Group: "Blush", Name: "Medium", Timer: 10 }],
                },
            ],
        },
        {
            Name: "自定义高度",
            DrawImages: false,
            Key: "lll",
            Options: [
                {},
                {
                    HasSubscreen: true,
                    ArchetypeConfig: {
                        Archetype: ExtendedArchetype.VARIABLEHEIGHT,
                        MaxHeight: 0,
                        MinHeight: -250,
                        DrawData: {
                            elementData: [{ position: [1140, 650, 100, 500], icon: "rope" }],
                        },
                        DialogPrefix: {
                            Chat: "SuspensionChange",
                        },
                    },
                },
            ],
        },
    ],
};

export default function () {
    AssetManager.addAsset("ItemAddon", asset, extened);
}
