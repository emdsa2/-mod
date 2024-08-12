import AssetManager from "../assetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "隐形药水_Luzi",
    Random: false,
    Gender: "F",
    Top: 0,
    Left: 0,
    Difficulty: 8,
    AllowLock: true,
    AllowTighten: true,
    DrawLocks: false,
    RemoveTime: 5,
    Time: 10,
    Effect: [E.Slow],
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
    ],
    Extended: true,
    Layer: [
        {
            Name: "下半身",
            Priority: 9,
            Top: 460,
            Left: 0,
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
            Top: 0,
            Left: 0,
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
            AllowTypes: { ll: [1, 2, 3, 4, 5] },
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
            AllowTypes: { l: [1, 2, 3] },
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
            AllowTypes: { ll: [3, 4] },
            Top: 530,
            Left: 0,
        },
        {
            Name: "脚链拘束",
            Priority: 30,
            AllowTypes: { ll: [5] },
            Top: 460,
            Left: 0,
        },
        {
            Name: "吊顶链",
            Priority: 0,
            AllowTypes: { lll: [2] },
            Top: -400,
            Left: -10,
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
                    Property: { Difficulty: 8, Effect: [E.CuffedArms, E.Mounted], SetPose: ["OverTheHead"] },
                    Expression: [{ Group: "Blush", Name: "Medium", Timer: 10 }],
                },
                {
                    Property: { Difficulty: 8, Effect: [E.CuffedArms, E.Mounted], SetPose: ["BackElbowTouch"] },
                    Expression: [{ Group: "Blush", Name: "Medium", Timer: 10 }],
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
                    Property: { Difficulty: 8, Effect: [E.CuffedFeet, E.Mounted], SetPose: ["KneelingSpread"] },
                    Expression: [{ Group: "Blush", Name: "Medium", Timer: 10 }],
                },
                {
                    Property: { Difficulty: 8, Effect: [E.CuffedFeet, E.Mounted], SetPose: ["KneelingSpread"] },
                    Expression: [{ Group: "Blush", Name: "Medium", Timer: 10 }],
                },
                {
                    Property: {
                        Difficulty: 8,
                        Effect: [E.CuffedFeet, E.Mounted],
                        SetPose: ["Suspension", "KneelingSpread"],
                    },
                    Expression: [{ Group: "Blush", Name: "Medium", Timer: 10 }],
                },
                {
                    Property: { Difficulty: 8, Effect: [E.CuffedFeet, E.Mounted], SetPose: ["Kneel"] },
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

/**@type {Translation.Dialog} */
const dialog = {
    CN: {
        ItemAddon隐形药水_LuziSets1: "SourceCharacter脱掉了DestinationCharacter身上的紧身衣",
        ItemAddon隐形药水_LuziSets0: "SourceCharacter给DestinationCharacter穿上了紧身衣",

        ItemAddon隐形药水_LuziSetl0: "SourceCharacter移除了DestinationCharacter身上的铐子",
        ItemAddon隐形药水_LuziSetl1: "SourceCharacter在DestinationCharacter的手臂加上了铐子",
        ItemAddon隐形药水_LuziSetl2: "SourceCharacter将吊顶链连接在了DestinationCharacter手臂上",
        ItemAddon隐形药水_LuziSetl3: "SourceCharacter将的DestinationCharacter的手拷在一起",

        ItemAddon隐形药水_LuziSetll0: "SourceCharacter移除了DestinationCharacter身上的铐子",
        ItemAddon隐形药水_LuziSetll1: "SourceCharacter在DestinationCharacter的腿上加上了铐子",
        ItemAddon隐形药水_LuziSetll2: "SourceCharacter将吊顶连连接在了DestinationCharacter的腿上",
        ItemAddon隐形药水_LuziSetll3: "SourceCharacter将吊顶连连接在了DestinationCharacter的腿上",
        ItemAddon隐形药水_LuziSetll4:
            "SourceCharacter将吊顶连连接在了DestinationCharacter的腿上,将DestinationCharacter头朝下吊了起来",
        ItemAddon隐形药水_LuziSetll5: "SourceCharacter将DestinationCharacter的腿拷在一起",

        ItemAddon隐形药水_LuziSetlll0: "SourceCharacter还原DestinationCharacter的高度",
        ItemAddon隐形药水_LuziSetlll1: "SourceCharacter调整DestinationCharacter的高度",
        ItemAddon隐形药水_LuziSetlll2: "SourceCharacter在DestinationCharacter的身上使用了吊顶连",

        ItemAddon隐形药水_LuziSelectBase: "选择隐形药水配置",
        ItemAddon隐形药水_LuziSelect紧身衣: "选择紧身衣",
        ItemAddon隐形药水_LuziModule紧身衣: "紧身衣",
        ItemAddon隐形药水_LuziOptions0: "无",
        ItemAddon隐形药水_LuziOptions1: "透视紧身衣",
        ItemAddon隐形药水_LuziSelect铐子手: "选择手部铐子",
        ItemAddon隐形药水_LuziModule铐子手: "手部铐子",
        ItemAddon隐形药水_LuziOptionl0: "无",
        ItemAddon隐形药水_LuziOptionl1: "添加铁拷",
        ItemAddon隐形药水_LuziOptionl2: "添加铁链(向上吊起来)",
        ItemAddon隐形药水_LuziOptionl3: "添加铁链(手向后铐起来)",

        ItemAddon隐形药水_LuziSelect铐子腿: "选择腿部铐子",
        ItemAddon隐形药水_LuziModule铐子腿: "腿部铐子",
        ItemAddon隐形药水_LuziOptionll0: "无",
        ItemAddon隐形药水_LuziOptionll1: "添加铁拷",
        ItemAddon隐形药水_LuziOptionll2: "添加铁链(朝上)",
        ItemAddon隐形药水_LuziOptionll3: "添加铁链(朝下)",
        ItemAddon隐形药水_LuziOptionll4: "添加铁链(朝下反向)",
        ItemAddon隐形药水_LuziOptionll5: "添加铁链(合并)",

        ItemAddon隐形药水_LuziSelect自定义高度: "设置高度",
        ItemAddon隐形药水_LuziModule自定义高度: "调整高度",
        ItemAddon隐形药水_LuziOptionlll0: "无",
        ItemAddon隐形药水_LuziOptionlll1: "自定义高度",
        ItemAddon隐形药水_LuziOptionlll2: "自定义高度(吊顶链)",
    },
    EN: {
        ItemAddon隐形药水_LuziSets1: "SourceCharacter removed the tights from DestinationCharacter",
        ItemAddon隐形药水_LuziSets0: "SourceCharacter put the tights on DestinationCharacter",

        ItemAddon隐形药水_LuziSetl0: "SourceCharacter removed the cuffs from DestinationCharacter",
        ItemAddon隐形药水_LuziSetl1: "SourceCharacter applied cuffs to DestinationCharacter's arms",
        ItemAddon隐形药水_LuziSetl2: "SourceCharacter connected the hoist to DestinationCharacter's arms",
        ItemAddon隐形药水_LuziSetl3: "SourceCharacter cuffs DestinationCharacter's hands together",

        ItemAddon隐形药水_LuziSetll0: "SourceCharacter removed the cuffs from DestinationCharacter",
        ItemAddon隐形药水_LuziSetll1: "SourceCharacter applied cuffs to DestinationCharacter's legs",
        ItemAddon隐形药水_LuziSetll2: "SourceCharacter connected the hoist to DestinationCharacter's legs",
        ItemAddon隐形药水_LuziSetll3: "SourceCharacter connected the hoist to DestinationCharacter's legs",
        ItemAddon隐形药水_LuziSetll4:
            "SourceCharacter attached the hanging chain to DestinationCharacter's legs, suspending them head-down",
        ItemAddon隐形药水_LuziSetll5: "SourceCharacter cuffs DestinationCharacter's legs together",

        ItemAddon隐形药水_LuziSetlll0: "SourceCharacter restored DestinationCharacter's height",
        ItemAddon隐形药水_LuziSetlll1: "SourceCharacter adjusted DestinationCharacter's height",
        ItemAddon隐形药水_LuziSetlll2: "SourceCharacter adjusted DestinationCharacter's height",

        ItemAddon隐形药水_LuziSelectBase: "Select Invisibility Potion Configuration",
        ItemAddon隐形药水_LuziSelect紧身衣: "Select Tights",
        ItemAddon隐形药水_LuziModule紧身衣: "Tights",
        ItemAddon隐形药水_LuziOptions0: "None",
        ItemAddon隐形药水_LuziOptions1: "See-Through Tights",
        ItemAddon隐形药水_LuziSelect铐子手: "Select Hand Cuffs",
        ItemAddon隐形药水_LuziModule铐子手: "Hand Cuffs",
        ItemAddon隐形药水_LuziOptionl0: "None",
        ItemAddon隐形药水_LuziOptionl1: "Add Iron Shackles",
        ItemAddon隐形药水_LuziOptionl2: "Adjust Chain Height",
        ItemAddon隐形药水_LuziOptionl3: "Add Iron Chain (Hands Cuffed Behind)",

        ItemAddon隐形药水_LuziSelect铐子腿: "Select Leg Cuffs",
        ItemAddon隐形药水_LuziModule铐子腿: "Leg Cuffs",
        ItemAddon隐形药水_LuziOptionll0: "None",
        ItemAddon隐形药水_LuziOptionll1: "Add Iron Shackles",
        ItemAddon隐形药水_LuziOptionll2: "Adjust Chain Height",
        ItemAddon隐形药水_LuziOptionll3: "Adjust Chain Height",
        ItemAddon隐形药水_LuziOptionll4: "Add Chain (Reversed Downward)",
        ItemAddon隐形药水_LuziOptionll5: "Add Iron Chain (Merge)",

        ItemAddon隐形药水_LuziSelect自定义高度: "Set Height",
        ItemAddon隐形药水_LuziModule自定义高度: "Adjust Height",
        ItemAddon隐形药水_LuziOptionlll0: "None",
        ItemAddon隐形药水_LuziOptionlll1: "Custom Height",
        ItemAddon隐形药水_LuziOptionlll2: "Custom Height",
    },
};

const translations = { CN: "隐形药水", EN: "potion of invisibility" };

export default function () {
    AssetManager.addAsset("ItemAddon", asset, extened, translations);
    AssetManager.addCustomDialog(dialog);
}
