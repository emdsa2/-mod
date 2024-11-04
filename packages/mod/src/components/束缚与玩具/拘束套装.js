import AssetManager from "@mod-utils/AssetManager";
import { Path } from "@mod-utils/path";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "拘束套装_Luzi",
    Random: false,
    Gender: "F",
    Top: 0,
    Left: 0,
    Difficulty: 25,
    AllowLock: true,
    DrawLocks: false,
    Effect: [E.Block, E.BlockWardrobe, E.Slow],
    Prerequisite: ["HasBreasts"],
    SetPose: ["BackElbowTouch"],
    AllowActivePose: ["BackElbowTouch"],
    Layer: [
        {
            Name: "下半身",
            Priority: 31,
            ParentGroup: "BodyLower",
            PoseMapping: {
                Kneel: "Kneel",
                KneelingSpread: "KneelingSpread",
                LegsClosed: "LegsClosed",
                Spread: "Spread",
                Hogtied: "Hide",
            },
        },
        {
            Name: "上半身",
            Priority: 31,
            ParentGroup: "BodyUpper",
            PoseMapping: {
                BackElbowTouch: "BackElbowTouch",
                Hogtied: "Hogtied",
            },
        },
        {
            Name: "下半身圆环",
            Priority: 31,
            ParentGroup: "BodyLower",
            PoseMapping: {
                Kneel: "Kneel",
                KneelingSpread: "KneelingSpread",
                LegsClosed: "LegsClosed",
                Spread: "Spread",
                Hogtied: "Hide",
            },
        },
        {
            Name: "上半身圆环",
            Priority: 32,
            ParentGroup: "BodyUpper",
            PoseMapping: {
                BackElbowTouch: "BackElbowTouch",
                Hogtied: "Hogtied",
            },
        },
        {
            Name: "下半身松紧扣",
            Priority: 32,
            ParentGroup: "BodyLower",
            PoseMapping: {
                Kneel: "Kneel",
                KneelingSpread: "KneelingSpread",
                LegsClosed: "LegsClosed",
                Spread: "Spread",
                Hogtied: "Hide",
            },
        },
        {
            Name: "上半身松紧扣",
            Priority: 32,
            ParentGroup: "BodyUpper",
            PoseMapping: {
                BackElbowTouch: "BackElbowTouch",
                Hogtied: "Hogtied",
            },
        },
        {
            Name: "链子",
            Priority: 30,
            ParentGroup: "BodyLower",
            PoseMapping: {
                Kneel: "Kneel",
                KneelingSpread: "KneelingSpread",
                LegsClosed: "LegsClosed",
                Spread: "Spread",
                Hogtied: "Hide",
            },
        },
        {
            Name: "手臂",
            Priority: 5,
            ParentGroup: "BodyUpper",
            PoseMapping: {
                BackElbowTouch: "BackElbowTouch",
                Hogtied: PoseType.DEFAULT,
            },
        },
        {
            Name: "乳胶衣",
            Priority: 6,
            AllowTypes: { typed: 1 },
            PoseMapping: {
                BackElbowTouch: "BackElbowTouch",
                Hogtied: PoseType.DEFAULT,
            },
        },
        {
            Name: "透视紧身衣",
            Priority: 6,
            AllowTypes: { typed: 2 },
            PoseMapping: {
                BackElbowTouch: "BackElbowTouch",
                Hogtied: PoseType.DEFAULT,
            },
        },
        {
            Name: "紧身衣",
            Priority: 6,
            AllowTypes: { typed: 3 },
            PoseMapping: {
                BackElbowTouch: "BackElbowTouch",
                Hogtied: PoseType.DEFAULT,
            },
        },
    ],
};

/** @type { TypedItemConfig } */
const extended = {
    Archetype: ExtendedArchetype.TYPED,
    ChangeWhenLocked: false,
    ChatTags: [CommonChatTags.SOURCE_CHAR, CommonChatTags.TARGET_CHAR],
    DrawImages: false,
    Options: [
        {
            Name: "无",
        },
        {
            Name: "乳胶衣",
        },
        {
            Name: "透视紧身衣",
        },
        {
            Name: "紧身衣",
        },
    ],
};

/** @type {Record<string, string>} */
const icons = {
    "Screens/Inventory/ItemTorso/拘束套装_Luzi/无.png": Path.空png,
    "Screens/Inventory/ItemTorso/拘束套装_Luzi/乳胶衣.png": Path.空png,
    "Screens/Inventory/ItemTorso/拘束套装_Luzi/透视紧身衣.png": Path.空png,
    "Screens/Inventory/ItemTorso/拘束套装_Luzi/紧身衣.png": Path.空png,
};

const dialogs = {
    CN: {
        ItemTorso拘束套装_Luzi无: "无",
        ItemTorso拘束套装_Luzi乳胶衣: "乳胶衣",
        ItemTorso拘束套装_Luzi透视紧身衣: "透视紧身衣",
        ItemTorso拘束套装_Luzi紧身衣: "紧身衣",

        ItemTorso拘束套装_LuziSelect: "选择配置",
        ItemTorso拘束套装_LuziSet无: "",
        ItemTorso拘束套装_LuziSet乳胶衣: "",
        ItemTorso拘束套装_LuziSet透视紧身衣: "",
        ItemTorso拘束套装_LuziSet紧身衣: "",
    },
    EN: {
        ItemTorso拘束套装_Luzi无: "No",
        ItemTorso拘束套装_Luzi乳胶衣: "Latex Suit",
        ItemTorso拘束套装_Luzi透视紧身衣: "Sheer Bodysuit",
        ItemTorso拘束套装_Luzi紧身衣: "Bodysuit",

        ItemTorso拘束套装_LuziSelect: "Select Configuration",
        ItemTorso拘束套装_LuziSet无: "",
        ItemTorso拘束套装_LuziSet乳胶衣: "",
        ItemTorso拘束套装_LuziSet透视紧身衣: "",
        ItemTorso拘束套装_LuziSet紧身衣: "",
    },
    RU: {
        ItemTorso拘束套装_Luzi无: "Нет",
        ItemTorso拘束套装_Luzi乳胶衣: "Латексный костюм",
        ItemTorso拘束套装_Luzi透视紧身衣: "Прозрачный комбинезон",
        ItemTorso拘束套装_Luzi紧身衣: "Комбинезон",

        ItemTorso拘束套装_LuziSelect: "Выбор конфигурации",
        ItemTorso拘束套装_LuziSet无: "",
        ItemTorso拘束套装_LuziSet乳胶衣: "",
        ItemTorso拘束套装_LuziSet透视紧身衣: "",
        ItemTorso拘束套装_LuziSet紧身衣: "",
    },
    UA: {
        ItemTorso拘束套装_Luzi无: "Ні",
        ItemTorso拘束套装_Luzi乳胶衣: "Латексний костюм",
        ItemTorso拘束套装_Luzi透视紧身衣: "Напівпрозорий комбінезон",
        ItemTorso拘束套装_Luzi紧身衣: "Комбінезон",

        ItemTorso拘束套装_LuziSelect: "Виберіть конфігурацію предмету",
        ItemTorso拘束套装_LuziSet无: "",
        ItemTorso拘束套装_LuziSet乳胶衣: "",
        ItemTorso拘束套装_LuziSet透视紧身衣: "",
        ItemTorso拘束套装_LuziSet紧身衣: "",
    },
};

const translations = {
    CN: "拘束套装",
    EN: "Restraint Set",
    UA: "Набір обмежувачів",
};

export default function () {
    AssetManager.addAsset("ItemTorso", asset, extended, translations);
    AssetManager.addImageMapping(icons);
    AssetManager.addCustomDialog(dialogs);
}
