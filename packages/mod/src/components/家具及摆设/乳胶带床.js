import AssetManager from "@mod-utils/AssetManager";
import { Tools } from "@mod-utils/Tools";

/** @type { CustomAssetDefinition} */
const asset = {
    Name: "乳胶带床_Luzi",
    Random: false,
    Top: 0,
    Left: 0,
    Effect: [E.Tethered, E.Freeze, E.BlockWardrobe, E.Block, E.Mounted, E.MapImmobile, E.OnBed],
    SetPose: ["BackElbowTouch", "LegsClosed"],
    LayerVisibility: true,
    Difficulty: 25,
    DefaultColor: [
        "Default",
        "Default",
        "Default",
        "Default",
        "Default",
        "Default",
        "Default",
        "Default",
        "Default",
        "Default",
        "Default",
        "Default",
        "Default",
        "#000000",
        "Default",
        "Default",
        "Default",
        "#232323",
        "#000000",
        "#FFFFFF",
        "#232323",
        "#000000",
        "#FFFFFF",
    ],
    Layer: [
        {
            Name: "外壳盖子关闭",
            Priority: 63,
            AllowTypes: { g: 2 },
            Visibility: "Others",
        },
        {
            Name: "外壳盖子打开下",
            Priority: 63,
            AllowTypes: { g: 3 },
            Visibility: "AllExceptPlayerDialog",
        },
        {
            Name: "外壳盖子打开上",
            Priority: 63,
            AllowTypes: { g: 4 },
            Visibility: "AllExceptPlayerDialog",
        },
        {
            Name: "盖子关闭边缘",
            Priority: 62,
            AllowTypes: { g: [2, 3, 4] },
            Alpha: [
                {
                    Masks: [
                        [0, 0, 500, 43], //上
                        [0, 957, 500, 43], //下
                        [0, 0, 155, 1000], //左
                        [345, 0, 155, 1000], //右
                        AssetUpperOverflowAlpha,
                        AssetLowerOverflowAlpha,
                    ],
                },
            ],
        },
        {
            Name: "外壳",
            Priority: 1,
        },
        {
            Name: "外壳盖子打开",
            Priority: 1,
            AllowTypes: { g: 1 },
        },
        {
            Name: "床垫",
            Priority: 1,
        },
        {
            Name: "床带上",
            Priority: 1,
            ParentGroup: "BodyUpper",
        },
        {
            Name: "床带下",
            Priority: 1,
            ParentGroup: "BodyLower",
        },
        {
            Name: "床环上",
            Priority: 1,
            ParentGroup: "BodyUpper",
        },
        {
            Name: "床环下",
            Priority: 1,
            ParentGroup: "BodyLower",
        },
        {
            Name: "内衬",
            Priority: 24,
            AllowTypes: { l: 0 },
        },
        {
            Name: "圆环",
            Priority: 25,
            AllowTypes: { l: 0 },
        },
        {
            Name: "绳子",
            Priority: 25,
            AllowTypes: { l: 0 },
        },
        {
            Name: "拉链",
            Priority: 24,
            AllowTypes: { l: 0 },
        },
        {
            Name: "拘束带上",
            Priority: 53,
            ParentGroup: "BodyUpper",
        },
        {
            Name: "拘束带下",
            Priority: 53,
            ParentGroup: "BodyLower",
        },
        {
            Name: "乳胶上底色",
            Priority: 23,
            AllowTypes: { l: 0 },
            ParentGroup: "BodyUpper",
        },
        {
            Name: "乳胶上阴影",
            Priority: 23,
            AllowTypes: { l: 0 },
            ParentGroup: "BodyUpper",
        },
        {
            Name: "乳胶上高光",
            Priority: 23,
            AllowTypes: { l: 0 },
            ParentGroup: "BodyUpper",
        },
        {
            Name: "乳胶下底色",
            Priority: 23,
            AllowTypes: { l: 0 },
            ParentGroup: "BodyLower",
        },
        {
            Name: "乳胶下阴影",
            Priority: 23,
            AllowTypes: { l: 0 },
            ParentGroup: "BodyLower",
        },
        {
            Name: "乳胶下高光",
            Priority: 23,
            AllowTypes: { l: 0 },
            ParentGroup: "BodyLower",
        },
    ],
};

/** @type {AssetArchetypeConfig} */
const extended = {
    Archetype: ExtendedArchetype.MODULAR,
    ChangeWhenLocked: false,
    DrawImages: true,
    ChatTags: Tools.CommonChatTags(),
    Modules: [
        {
            Name: "盖子",
            Key: "g",
            Options: [
                {},
                {},
                { Property: { Effect: [E.BlindHeavy, E.GagLight, E.BlockWardrobe, E.Freeze, E.Enclose] } },
                {
                    Property: {
                        Block: Tools.AllItemGroups([
                            "ItemDevices",
                            "ItemPelvis",
                            "ItemVulva",
                            "ItemVulvaPiercings",
                            "ItemButt",
                            "ItemLegs",
                        ]),
                        Effect: [E.BlindHeavy, E.GagLight, E.BlockWardrobe, E.Freeze],
                    },
                },
                {
                    Property: {
                        Block: Tools.AllItemGroups([
                            "ItemDevices",
                            "ItemHead",
                            "ItemHood",
                            "ItemEars",
                            "ItemMouth",
                            "ItemMouth2",
                            "ItemMouth3",
                            "ItemNeck",
                            "ItemNose",
                            "ItemNeckAccessories",
                            "ItemNeckRestraints",
                        ]),
                        Effect: [E.BlockWardrobe, E.Freeze],
                    },
                },
            ],
        },
        {
            Name: "乳胶睡袋",
            Key: "l",
            Options: [{}, {}],
        },
    ],
};

const dialog = {
    CN: {
        ItemDevices乳胶带床_LuziSelect: "选择乳胶带床配置",
        ItemDevices乳胶带床_LuziSelectBase: "选择配置",

        ItemDevices乳胶带床_LuziSelect盖子: "选择盖子",
        ItemDevices乳胶带床_LuziModule盖子: "盖子",
        ItemDevices乳胶带床_LuziOptiong0: "无",
        ItemDevices乳胶带床_LuziOptiong1: "添加盖子",
        ItemDevices乳胶带床_LuziOptiong2: "盖上盖子",
        ItemDevices乳胶带床_LuziOptiong3: "露出腹部",
        ItemDevices乳胶带床_LuziOptiong4: "露出头部",

        ItemDevices乳胶带床_LuziSetg0: "SourceCharacter去掉了DestinationCharacterAssetName盖子",
        ItemDevices乳胶带床_LuziSetg1: "SourceCharacter为DestinationCharacterAssetName添加了盖子",
        ItemDevices乳胶带床_LuziSetg2: "SourceCharacter关上了DestinationCharacterAssetName的盖子",
        ItemDevices乳胶带床_LuziSetg3: "SourceCharacter关上了DestinationCharacterAssetName的盖子，但是打开了腹部的盖子",
        ItemDevices乳胶带床_LuziSetg4: "SourceCharacter关上了DestinationCharacterAssetName的盖子，但是打开了头部的盖子",

        ItemDevices乳胶带床_LuziSelect乳胶睡袋: "选择使用默认乳胶衣",
        ItemDevices乳胶带床_LuziModule乳胶睡袋: "默认乳胶衣",
        ItemDevices乳胶带床_LuziOptionl0: "使用",
        ItemDevices乳胶带床_LuziOptionl1: "不使用",

        ItemDevices乳胶带床_LuziSetl0: "SourceCharacter给TargetCharacter穿上了乳胶衣",
        ItemDevices乳胶带床_LuziSetl1: "SourceCharacter脱掉了TargetCharacter的乳胶衣",
    },
    EN: {
        ItemDevices乳胶带床_LuziSelect: "Select Latex Bed Configuration",
        ItemDevices乳胶带床_LuziSelectBase: "Select Configuration",

        ItemDevices乳胶带床_LuziSelect盖子: "Select Cover",
        ItemDevices乳胶带床_LuziModule盖子: "Cover",
        ItemDevices乳胶带床_LuziOptiong0: "None",
        ItemDevices乳胶带床_LuziOptiong1: "Add Cover",
        ItemDevices乳胶带床_LuziOptiong2: "Close Cover",
        ItemDevices乳胶带床_LuziOptiong3: "Expose Belly",
        ItemDevices乳胶带床_LuziOptiong4: "Expose Head",

        ItemDevices乳胶带床_LuziSetg0: "SourceCharacter removed DestinationCharacter AssetName Cover",
        ItemDevices乳胶带床_LuziSetg1: "SourceCharacter added Cover to DestinationCharacter AssetName",
        ItemDevices乳胶带床_LuziSetg2: "SourceCharacter closed DestinationCharacter AssetName Cover",
        ItemDevices乳胶带床_LuziSetg3:
            "SourceCharacter closed DestinationCharacter AssetName Cover, but opened Belly Cover",
        ItemDevices乳胶带床_LuziSetg4:
            "SourceCharacter closed DestinationCharacter AssetName Cover, but opened Head Cover",

        ItemDevices乳胶带床_LuziSelect乳胶睡袋: "Select Default Latex Sleep Bag",
        ItemDevices乳胶带床_LuziModule乳胶睡袋: "Latex Sleep Bag",
        ItemDevices乳胶带床_LuziOptionl0: "Use",
        ItemDevices乳胶带床_LuziOptionl1: "Don't Use",

        ItemDevices乳胶带床_LuziSetl0: "SourceCharacter put TargetCharacter in Latex Sleep Bag",
        ItemDevices乳胶带床_LuziSetl1: "SourceCharacter removed Latex Sleep Bag from TargetCharacter ",
    },
    UA: {
        ItemDevices乳胶带床_LuziSelect: "Виберіть Конфігурацію Латексного Ліжка",
        ItemDevices乳胶带床_LuziSelectBase: "Виберіть концігурацю",

        ItemDevices乳胶带床_LuziSelect盖子: "Виберіть Покриття",
        ItemDevices乳胶带床_LuziModule盖子: "Накрити",
        ItemDevices乳胶带床_LuziOptiong0: "Жодного",
        ItemDevices乳胶带床_LuziOptiong1: "Додати покриття",
        ItemDevices乳胶带床_LuziOptiong2: "Закрити покриття",

        ItemDevices乳胶带床_LuziSetg0: "SourceCharacter забрали DestinationCharacter покриття",
        ItemDevices乳胶带床_LuziSetg1: "SourceCharacter додали покриття DestinationCharacter",
        ItemDevices乳胶带床_LuziSetg2: "SourceCharacter закрили покриття DestinationCharacter",
    },
};

const translations = {
    CN: "乳胶带床",
    EN: "Latex-belt Bed",
    RU: "Кровать с латексным ремнем",
    UA: "Латексне ліжко із ремнями",
};

export default function () {
    AssetManager.addAsset("ItemDevices", asset, extended, translations);
    AssetManager.addCustomDialog(dialog);
}
