import AssetManager from "../../assetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "拘束套装_Luzi",
    Random: false,
    Gender: "F",
    Top: 0,
    Left: 0,
    Difficulty: 25,
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
    "Screens/Inventory/ItemTorso/拘束套装_Luzi/无.png": "https://emdsa2.github.io/-mod/image/空.png",
    "Screens/Inventory/ItemTorso/拘束套装_Luzi/乳胶衣.png": "https://emdsa2.github.io/-mod/image/空.png",
    "Screens/Inventory/ItemTorso/拘束套装_Luzi/透视紧身衣.png": "https://emdsa2.github.io/-mod/image/空.png",
    "Screens/Inventory/ItemTorso/拘束套装_Luzi/紧身衣.png": "https://emdsa2.github.io/-mod/image/空.png",
};

const dialogs = {
    CN: {
        ItemTorso2拘束套装_LuziSelect: "选择配置",
        ItemTorso2拘束套装_LuziSet无: "",
        ItemTorso2拘束套装_LuziSet乳胶衣: "",
        ItemTorso2拘束套装_LuziSet透视紧身衣: "",
        ItemTorso2拘束套装_LuziSet紧身衣: "",
    },
    EN: {
        ItemTorso2拘束套装_LuziSelect: "Select Configuration",
        ItemTorso2拘束套装_LuziSet无: "",
        ItemTorso2拘束套装_LuziSet乳胶衣: "",
        ItemTorso2拘束套装_LuziSet透视紧身衣: "",
        ItemTorso2拘束套装_LuziSet紧身衣: "",
    },
};

export default function () {
    AssetManager.addAsset("ItemTorso", asset, extended);
    AssetManager.addImgMapping(icons);
    AssetManager.addCustomDialog(dialogs);
}
