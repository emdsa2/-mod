import AssetManager from "@mod-utils/AssetManager";

/** @type { (AssetLayerDefinition & {DefaultColor: string, ConfigKey: string}) [] } */
const LayerSettings = [
    {
        Name: "部落胸上",
        Priority: 12,
        Left: 130,
        Top: 200,
        BlendingMode: "source-atop",
        DefaultColor: "Default",
        ConfigKey: "TA",
    },
    {
        Name: "胸上1",
        Priority: 12,
        Left: 130,
        Top: 200,
        BlendingMode: "source-atop",
        DefaultColor: "Default",
        ConfigKey: "UBA",
    },
    {
        Name: "胸上2",
        Priority: 12,
        Left: 130,
        Top: 200,
        BlendingMode: "source-atop",
        DefaultColor: "Default",
        ConfigKey: "UBB",
    },
    {
        Name: "部落右胸",
        Priority: 12,
        Left: 130,
        Top: 200,
        BlendingMode: "source-atop",
        DefaultColor: "#000000",
        ConfigKey: "TD",
        ParentGroup: "BodyUpper",
    },
    {
        Name: "部落左胸",
        Priority: 12,
        Left: 130,
        Top: 200,
        BlendingMode: "source-atop",
        DefaultColor: "#000000",
        ConfigKey: "TF",
        ParentGroup: "BodyUpper",
    },
    {
        Name: "部落右臂",
        Priority: 12,
        Left: 130,
        Top: 200,
        BlendingMode: "source-atop",
        DefaultColor: "Default",
        ConfigKey: "TC",
        ParentGroup: "BodyUpper",
        PoseMapping: {
            OverTheHead: PoseType.HIDE,
            Yoked: PoseType.HIDE,
        },
    },
    {
        Name: "左肩翅膀",
        Priority: 12,
        Left: 130,
        Top: 200,
        BlendingMode: "source-atop",
        DefaultColor: "Default",
        ConfigKey: "W",
        ParentGroup: "BodyUpper",
        PoseMapping: {
            OverTheHead: PoseType.HIDE,
            Yoked: PoseType.HIDE,
            AllFours: PoseType.HIDE,
            Hogtied: PoseType.HIDE,
        },
    },
    {
        Name: "部落左锁骨",
        Priority: 12,
        Left: 130,
        Top: 200,
        BlendingMode: "source-atop",
        DefaultColor: "Default",
        ConfigKey: "TE",
        PoseMapping: {
            AllFours: PoseType.HIDE,
            Hogtied: PoseType.HIDE,
        },
    },
    {
        Name: "梅花1",
        Priority: 12,
        Left: 130,
        Top: 200,
        BlendingMode: "source-atop",
        DefaultColor: "Default",
        ConfigKey: "CA",
        ParentGroup: "BodyUpper",
        PoseMapping: {
            AllFours: PoseType.HIDE,
            Hogtied: PoseType.HIDE,
        },
    },
    {
        Name: "梅花2",
        Priority: 12,
        Left: 130,
        Top: 200,
        BlendingMode: "source-atop",
        DefaultColor: "Default",
        ConfigKey: "CB",
        ParentGroup: "BodyUpper",
        PoseMapping: {
            AllFours: PoseType.HIDE,
            Hogtied: PoseType.HIDE,
        },
    },
    {
        Name: "心经",
        Priority: 12,
        Left: 130,
        Top: 200,
        BlendingMode: "source-atop",
        DefaultColor: "Default",
        ConfigKey: "CC",
        ParentGroup: "BodyUpper",
        PoseMapping: {
            AllFours: PoseType.HIDE,
            Hogtied: PoseType.HIDE,
        },
    },
    {
        Name: "右腿花",
        Left: 130,
        Top: 470,
        Priority: 12,
        BlendingMode: "source-atop",
        DefaultColor: "#000000",
        ConfigKey: "FA",
        PoseMapping: {
            AllFours: PoseType.HIDE,
            Hogtied: PoseType.HIDE,
        },
    },
];

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "大纹身_Luzi",
    Value: -1,
    Time: 5,
    RemoveTime: 5,
    IsRestraint: false,
    DefaultColor: LayerSettings.map((layer) => layer.DefaultColor),
    Extended: true,
    BodyCosplay: true,
    Layer: LayerSettings.map((layer) => ({
        Name: layer.Name,
        Priority: layer.Priority,
        BlendingMode: /** @type {GlobalCompositeOperation}*/ (layer.BlendingMode),
        Left: layer.Left || 0,
        Top: layer.Top || 0,
        AllowTypes: { [layer.ConfigKey]: 1 },
        ParentGroup: layer.ParentGroup,
        PoseMapping: layer.PoseMapping,
    })),
};

/** @type {ModularItemConfig} */
const extended = {
    Archetype: ExtendedArchetype.MODULAR,
    ChatSetting: ModularItemChatSetting.PER_MODULE,
    DrawImages: false,
    Modules: LayerSettings.map((layer) => ({
        Name: layer.Name,
        Key: layer.ConfigKey,
        Options: [{}, {}],
    })),
    DrawData: {
        elementData: LayerSettings.map((_, idx) => ({
            position: [1135 + 250 * (idx % 3), 450 + 75 * Math.floor(idx / 3)],
        })),
        itemsPerPage: LayerSettings.length,
    },
};

/** @type {Translation.Dialog} */
const dialogs = {
    CN: {
        BodyMarkings2_Luzi大纹身_LuziSelectBase: "选择要显示的纹身",
        ...LayerSettings.reduce((acc, layer, index) => {
            acc[`BodyMarkings2_Luzi大纹身_LuziModule${layer.Name}`] = layer.Name;
            acc[`BodyMarkings2_Luzi大纹身_LuziSelect${layer.Name}`] = `设置 "${layer.Name}" 是否显示`;
            acc[`BodyMarkings2_Luzi大纹身_LuziOption${layer.ConfigKey}0`] = "隐藏";
            acc[`BodyMarkings2_Luzi大纹身_LuziOption${layer.ConfigKey}1`] = "显示";
            return acc;
        }, {}),
    },
    EN: {
        BodyMarkings2_Luzi大纹身_LuziSelectBase: "Select the tattoo to show",
        ...LayerSettings.reduce((acc, layer, index) => {
            acc[`BodyMarkings2_Luzi大纹身_LuziModule${layer.Name}`] = layer.Name;
            acc[`BodyMarkings2_Luzi大纹身_LuziSelect${layer.Name}`] = `Set "${layer.Name}" is shown`;
            acc[`BodyMarkings2_Luzi大纹身_LuziOption${layer.ConfigKey}0`] = "Hide";
            acc[`BodyMarkings2_Luzi大纹身_LuziOption${layer.ConfigKey}1`] = "Show";
            return acc;
        }, {}),
    },
};

export default function () {
    AssetManager.addAsset("BodyMarkings", asset, extended);
    AssetManager.addCustomDialog(dialogs);
}
