import AssetManager from "@mod-utils/AssetManager";

const clothLCSetting = [
    { Name: "样式0", EN: "Style 0", Src: "淫纹" },
    { Name: "样式1", EN: "Style 1", Src: "预设淫纹1", AllowColorize: false },
    { Name: "样式2", EN: "Style 2", Src: "预设淫纹2", AllowColorize: false },
    { Name: "样式3", EN: "Style 3", Src: "预设淫纹3", AllowColorize: false },
];

/** @type { CustomGroupedAssetDefinitions }} */
const assets = {
    Wings: [
        {
            Name: "蝴蝶结背饰_Luzi",
            Random: false,
            Top: -110,
            Left: 0,
        },
    ],
    Glasses: [
        {
            Name: "单边眼镜左_Luzi",
            Random: false,
            Top: 0,
            Left: 0,
        },
        {
            Name: "单边眼镜右_Luzi",
            Random: false,
            Top: 0,
            Left: 0,
        },
        {
            Name: "眼镜卡_Luzi",
            Random: false,
            Top: 0,
            Left: 0,
            Layer: [{ Name: "眼镜", Priority: 56 }],
        },
    ],
    Panties: [
        {
            Name: "淫纹_Luzi",
            Random: false,
            Gender: "F",
            Top: 308,
            Left: 54,
            Priority: 9,
            Prerequisite: ["HasVagina"],
            Fetish: ["Lingerie"],
            DefaultColor: ["#E975A0"],
            Extended: true,
            ParentGroup: null,
            Layer: clothLCSetting.map((layer, index) => ({
                Name: layer.Name,
                AllowColorize: layer.AllowColorize ?? true,
                AllowTypes: { typed: index },
            })),
        },
    ],
    BodyMarkings: [
        {
            Name: "淫纹_Luzi",
            Random: false,
            Gender: "F",
            Top: 308,
            Left: 54,
            Priority: 9,
            ParentGroup: null,
            DefaultColor: ["#E975A0"],
            Extended: true,
            PoseMapping: {
                Hogtied: "Hide",
                AllFours: "Hide",
            },
            Layer: clothLCSetting.map((layer, index) => ({
                Name: layer.Name,
                AllowColorize: layer.AllowColorize ?? true,
                AllowTypes: { typed: index },
            })),
        },
        {
            Name: "刻度尺_Luzi",
            Random: false,
            Gender: "F",
            Top: 0,
            Left: 0,
            Priority: 9,
            ParentGroup: null,
            DefaultColor: ["#000000"],
        },
        {
            Name: "番茄酱_Luzi",
            Random: false,
            Top: 0,
            Left: 0,
            Priority: 9,
            ParentGroup: null,
        },
    ],
    ItemHands: [
        {
            Name: "拳击手套_Luzi",
            Random: false,
            Gender: "F",
            ParentGroup: null,
            PoseMapping: {
                Yoked: "Yoked",
                OverTheHead: "OverTheHead",
                BackBoxTie: "Hide",
                BackElbowTouch: "Hide",
                BackCuffs: "Hide",
                Hogtied: "Hide",
                AllFours: "Hide",
            },
            Effect: [E.MergedFingers],
            Hide: ["ItemHandheld"],
        },
    ],
    ItemHandheld: [
        {
            Name: "电蚊拍_Luzi",
            Random: false,
            Top: -110,
            Left: 0,
            ParentGroup: null,
            Fetish: ["Sadism"],
            AllowActivity: ["ShockItem"],
            ActivityAudio: ["Shocks"],
            PoseMapping: {
                TapedHands: "BaseUpper",
                Yoked: "Hide",
                OverTheHead: "Hide",
                BackBoxTie: "Hide",
                BackElbowTouch: "Hide",
                BackCuffs: "Hide",
                Hogtied: "Hide",
                AllFours: "Hide",
            },
        },
        {
            Name: "书",
            Random: false,
            Top: 0,
            Left: 0,
            ParentGroup: null,
            Priority: 26,
            PoseMapping: {
                TapedHands: "BaseUpper",
                Yoked: "Hide",
                OverTheHead: "Hide",
                BackBoxTie: "Hide",
                BackElbowTouch: "Hide",
                BackCuffs: "Hide",
                Hogtied: "Hide",
                AllFours: "Hide",
            },
            Layer: [
                {
                    Name: "页",
                },
                {
                    Name: "壳",
                },
            ],
        },
        {
            Name: "红包",
            Random: false,
            Top: 0,
            Left: 0,
            ParentGroup: null,
            Priority: 46,
            PoseMapping: {
                TapedHands: "BaseUpper",
                Yoked: "Hide",
                OverTheHead: "Hide",
                BackBoxTie: "Hide",
                BackElbowTouch: "Hide",
                BackCuffs: "Hide",
                Hogtied: "Hide",
                AllFours: "Hide",
            }
        },
        {
            Name: "伊偶_Luzi",
            Random: false,
            Gender: "F",
            Top: {
                OverTheHead: -100,
            },
            ParentGroup: null,
            PoseMapping: {
                Yoked: "Yoked",
                OverTheHead: "OverTheHead",
                BackBoxTie: "Hide",
                BackElbowTouch: "Hide",
                BackCuffs: "Hide",
                Hogtied: "Hide",
                AllFours: "Hide",
            },
            Effect: [E.MergedFingers],
            Hide: ["ItemHandheld"],
        },
    ],
    ItemDevices: [
        {
            Name: "树_Luzi",
            Random: false,
            Top: -110,
            Left: -150,
        },
    ],
};

/** @type {_.PRecord<CustomGroupName, ExtendedItemGroupConfig>} */
const extendedConfig = {
    ...["Panties", "BodyMarkings"].reduce((pv, group) => {
        if (!pv[group]) pv[group] = {};
        pv[group]["淫纹_Luzi"] = {
            Archetype: ExtendedArchetype.TYPED,
            Options: clothLCSetting.map((layer) => ({ Name: layer.Name })),
        };
        return pv;
    }, {}),
};

/** @type { Translation.GroupedEntries } */
const translations = {
    CN: {
        Wings: {
            蝴蝶结背饰_Luzi: "蝴蝶结背饰",
        },
        Glasses: {
            单边眼镜左_Luzi: "单边眼镜左",
            单边眼镜右_Luzi: "单边眼镜右",
            眼镜卡_Luzi: "眼镜卡",
        },
        Panties: {
            淫纹_Luzi: "淫纹",
        },
        BodyMarkings: {
            淫纹_Luzi: "淫纹",
            刻度尺_Luzi: "刻度尺",
            番茄酱_Luzi: "番茄酱",
        },
        ItemHands: {
            拳击手套_Luzi: "拳击手套",
        },
        ItemHandheld: {
            电蚊拍_Luzi: "电蚊拍",
            伊偶_Luzi: "伊偶",
        },
        ItemDevices: {
            树_Luzi: "树",
        },
    },
    EN: {
        Wings: {
            蝴蝶结背饰_Luzi: "Bow Back Accessory",
        },
        Glasses: {
            单边眼镜左_Luzi: "Monocle Left",
            单边眼镜右_Luzi: "Monocle Right",
            眼镜卡_Luzi: "Glasses Card",
        },
        Panties: {
            淫纹_Luzi: "Lewd Crest",
        },
        BodyMarkings: {
            淫纹_Luzi: "Lewd Crest",
            刻度尺_Luzi: "Ruler",
            番茄酱_Luzi: "Ketchup",
        },
        ItemHands: {
            拳击手套_Luzi: "Boxing Gloves",
            伊偶_Luzi: "Yi Doll",
        },
        ItemHandheld: {
            电蚊拍_Luzi: "Electric Fly Swatter",
        },
        ItemDevices: {
            树_Luzi: "Tree",
        },
    },
};

export default function () {
    AssetManager.addGroupedAssets(assets, translations);
    AssetManager.addGroupedConfig(extendedConfig);

    AssetManager.addImageMapping(
        clothLCSetting.reduce((pv, cv, idx) => {
            ["Panties", "BodyMarkings", "BodyMarkings2_Luzi"].forEach((group) => {
                pv[
                    `Screens/Inventory/${group}/淫纹_Luzi/${cv.Name}.png`
                ] = `Screens/Inventory/ItemPelvis/淫纹_Luzi/t${idx}.png`;
                pv[
                    `Assets/Female3DCG/${group}/淫纹_Luzi_${cv.Name}.png`
                ] = `Assets/Female3DCG/ItemPelvis/淫纹_Luzi_${cv.Src}.png`;
            });
            return pv;
        }, {})
    );

    AssetManager.addCustomDialog({
        CN: {
            ...["Panties", "BodyMarkings", "BodyMarkings2_Luzi"].reduce((acc, group) => {
                acc[`${group}淫纹_LuziSelect`] = "选择样式";
                clothLCSetting.forEach((layer) => (acc[`${group}淫纹_Luzi${layer.Name}`] = layer.Name));
                return acc;
            }, {}),
        },
        EN: {
            ...["Panties", "BodyMarkings", "BodyMarkings2_Luzi"].reduce((acc, group) => {
                acc[`${group}淫纹_LuziSelect`] = "Select Style";
                clothLCSetting.forEach((layer) => (acc[`${group}淫纹_Luzi${layer.Name}`] = layer.EN));
                return acc;
            }, {}),
        },
    });
}
