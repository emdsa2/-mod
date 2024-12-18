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
        ConfigKey: "Ta",
    },
    {
        Name: "胸上1",
        Priority: 12,
        Left: 130,
        Top: 200,
        BlendingMode: "source-atop",
        DefaultColor: "#000000",
        ConfigKey: "UBa",
    },
    {
        Name: "胸上2",
        Priority: 12,
        Left: 130,
        Top: 200,
        BlendingMode: "source-atop",
        DefaultColor: "Default",
        ConfigKey: "UBb",
    },
    {
        Name: "梵花胸骨1",
        Priority: 12,
        Left: 130,
        Top: 200,
        ParentGroup: "BodyUpper",
        BlendingMode: "source-atop",
        DefaultColor: "#000000",
        ConfigKey: "SFSa",
    },
    {
        Name: "梵花胸骨2",
        Priority: 12,
        Left: 130,
        Top: 200,
        ParentGroup: "BodyUpper",
        BlendingMode: "source-atop",
        DefaultColor: "#000000",
        ConfigKey: "SFSb",
    },
    {
        Name: "梵花胸骨3",
        Priority: 12,
        Left: 130,
        Top: 200,
        ParentGroup: "BodyUpper",
        BlendingMode: "source-atop",
        DefaultColor: "Default",
        ConfigKey: "SFSc",
    },
    {
        Name: "石蒜1左",
        Priority: 12,
        Left: 130,
        Top: 200,
        BlendingMode: "source-atop",
        DefaultColor: "Default",
        ConfigKey: "LaL",
    },
    {
        Name: "石蒜1右",
        Priority: 12,
        Left: 130,
        Top: 200,
        BlendingMode: "source-atop",
        DefaultColor: "Default",
        ConfigKey: "LaR",
    },
    {
        Name: "部落右胸",
        Priority: 12,
        Left: 130,
        Top: 200,
        BlendingMode: "source-atop",
        DefaultColor: "#000000",
        ConfigKey: "Td",
        ParentGroup: "BodyUpper",
    },
    {
        Name: "部落左胸",
        Priority: 12,
        Left: 130,
        Top: 200,
        BlendingMode: "source-atop",
        DefaultColor: "#000000",
        ConfigKey: "Tf",
        ParentGroup: "BodyUpper",
    },
    {
        Name: "部落右臂",
        Priority: 12,
        Left: 130,
        Top: 200,
        BlendingMode: "source-atop",
        DefaultColor: "Default",
        ConfigKey: "Tc",
        ParentGroup: "BodyUpper",
        PoseMapping: {
            OverTheHead: PoseType.HIDE,
            Yoked: PoseType.HIDE,
            BackElbowTouch: PoseType.HIDE,
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
        ConfigKey: "Te",
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
        ConfigKey: "Ca",
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
        ConfigKey: "Cb",
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
        ConfigKey: "SSa",
        ParentGroup: "BodyUpper",
        PoseMapping: {
            AllFours: PoseType.HIDE,
            Hogtied: PoseType.HIDE,
        },
    },
    {
        Name: "右腿花",
        Left: 100,
        Top: 470,
        Priority: 12,
        BlendingMode: "source-atop",
        DefaultColor: "#000000",
        ConfigKey: "Fa",
        ParentGroup: "BodyLower",
        PoseMapping: {
            AllFours: PoseType.HIDE,
            Hogtied: PoseType.HIDE,
            Kneel: "LegsClosed",
            LegsClosed: "LegsClosed",
            KneelingSpread: "KneelingSpread",
        },
    },
];

/** @type { (AssetLayerDefinition & {DefaultColor: string, ConfigKey: string}) [] } */
const attrLayer = [
    {
        Name: "右腿花_花",
        Left: 100,
        Top: 470,
        Priority: 13,
        BlendingMode: "source-atop",
        DefaultColor: "#FE3636",
        ConfigKey: "Fa",
        ParentGroup: "BodyLower",
        PoseMapping: {
            AllFours: PoseType.HIDE,
            Hogtied: PoseType.HIDE,
            Kneel: "LegsClosed",
            LegsClosed: "LegsClosed",
            KneelingSpread: "KneelingSpread",
        },
    },
];

/** @param {AssetLayerDefinition & {DefaultColor: string, ConfigKey: string}} layer */
function layerMapping(layer) {
    return {
        Name: layer.Name,
        Priority: layer.Priority,
        BlendingMode: /** @type {GlobalCompositeOperation}*/ (layer.BlendingMode),
        Left: layer.Left || 0,
        Top: layer.Top || 0,
        AllowTypes: { [layer.ConfigKey]: 1 },
        ParentGroup: layer.ParentGroup,
        PoseMapping: layer.PoseMapping,
    };
}

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
    Layer: LayerSettings.map(layerMapping).concat(attrLayer.map(layerMapping)),
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
        ...["BodyMarkings", "BodyMarkings2_Luzi"].reduce((pv, key) => {
            pv[`${key}大纹身_LuziSelectBase`] = "选择要显示的纹身";
            LayerSettings.forEach((layer) => {
                pv[`${key}大纹身_LuziModule${layer.Name}`] = layer.Name;
                pv[`${key}大纹身_LuziSelect${layer.Name}`] = `设置 "${layer.Name}" 是否显示`;
                pv[`${key}大纹身_LuziOption${layer.ConfigKey}0`] = "隐藏";
                pv[`${key}大纹身_LuziOption${layer.ConfigKey}1`] = "显示";
            });
            return pv;
        }, {}),
    },
    EN: {
        ...["BodyMarkings", "BodyMarkings2_Luzi"].reduce((pv, key) => {
            (pv[`${key}大纹身_LuziSelectBase`] = "Select the tattoo to show"),
                LayerSettings.forEach((layer) => {
                    pv[`${key}大纹身_LuziModule${layer.Name}`] = layer.Name;
                    pv[`${key}大纹身_LuziSelect${layer.Name}`] = `Set "${layer.Name}" is shown`;
                    pv[`${key}大纹身_LuziOption${layer.ConfigKey}0`] = "Hide";
                    pv[`${key}大纹身_LuziOption${layer.ConfigKey}1`] = "Show";
                });
            return pv;
        }, {}),
    },
};

export default function () {
    AssetManager.addAsset("BodyMarkings", asset, extended);
    AssetManager.addCustomDialog(dialogs);
}
