import AssetManager from "@mod-utils/AssetManager";

/** @type { CustomGroupedAssetDefinitions }} */
const assets = {
    Socks: [
        {
            Name: "丝袜_Luzi",
            Random: false,
            Top: 0,
            Left: {
                BaseLower: 0,
                Kneel: 0,
                KneelingSpread: 30,
                LegsClosed: 0,
                LegsOpen: 0,
                Spread: 0,
            },
        },
        {
            Name: "踩脚袜_Luzi",
            Random: false,
            Top: 0,
            Left: {
                BaseLower: 0,
                Kneel: 0,
                KneelingSpread: 30,
                LegsClosed: 0,
                LegsOpen: 0,
                Spread: 0,
            },
        },
        {
            Name: "条纹袜_Luzi",
            Random: false,
            Top: 0,
            Left: {
                BaseLower: 0,
                Kneel: 0,
                KneelingSpread: 30,
                LegsClosed: 0,
                LegsOpen: 0,
                Spread: 0,
            },
            Layer: [
                {
                    Name: "袜子",
                    Priority: 20,
                },
                {
                    Name: "条纹",
                    Priority: 20,
                },
            ],
        },
        {
            Name: "条纹袜2_Luzi",
            Random: false,
            Top: 0,
            Left: {
                BaseLower: 0,
                Kneel: 0,
                KneelingSpread: 30,
                LegsClosed: 0,
                LegsOpen: 0,
                Spread: 0,
            },
            Layer: [
                {
                    Name: "袜子",
                    Priority: 20,
                },
                {
                    Name: "条纹",
                    Priority: 20,
                },
            ],
        },
        {
            Name: "露趾袜_Luzi",
            Random: false,
            Top: 0,
            Left: {
                BaseLower: 0,
                Kneel: 0,
                KneelingSpread: 30,
                LegsClosed: 0,
                LegsOpen: 0,
                Spread: 0,
            },
        },
        {
            Name: "丝袜2_Luzi",
            Random: false,
            Top: 0,
            Left: {
                BaseLower: 0,
                Kneel: 0,
                KneelingSpread: 30,
                LegsClosed: 0,
                LegsOpen: 0,
                Spread: 0,
            },
        },
        {
            Name: "丝袜3_Luzi",
            Random: false,
            Top: 0,
            Left: {
                BaseLower: 0,
                Kneel: 0,
                KneelingSpread: 30,
                LegsClosed: 0,
                LegsOpen: 0,
                Spread: 0,
            },
        },
        {
            Name: "网袜_Luzi",
            Random: false,
            Top: 0,
            Left: {
                BaseLower: 0,
                Kneel: 0,
                KneelingSpread: 30,
                LegsClosed: 0,
                LegsOpen: 0,
                Spread: 0,
            },
            Priority: 12,
            DefaultColor: ["#351C1C", "#351C1C", "#1C1111", "#1C1111", "#170E0E", "#170E0E", "#000000",],
            Layer: [
                {
                    Name: "上袜",
                    PoseMapping: {
                        LegsClosed: PoseType.DEFAULT,
                        KneelingSpread: PoseType.DEFAULT,
                        Kneel: PoseType.DEFAULT,
                        Spread: PoseType.DEFAULT,
                        Hogtied: PoseType.HIDE,
                        AllFours: PoseType.HIDE,
                    },
                },
                {
                    Name: "下袜",
                    PoseMapping: {
                        LegsClosed: "LegsClosed",
                        KneelingSpread: "KneelingSpread",
                        Kneel: "Kneel",
                        Spread: "Spread",
                        Hogtied: PoseType.HIDE,
                        AllFours: PoseType.HIDE,
                    },
                },
                {
                    Name: "上网",
                    PoseMapping: {
                        LegsClosed: PoseType.DEFAULT,
                        KneelingSpread: PoseType.DEFAULT,
                        Kneel: PoseType.DEFAULT,
                        Spread: PoseType.DEFAULT,
                        Hogtied: PoseType.HIDE,
                        AllFours: PoseType.HIDE,
                    },
                },
                {
                    Name: "下网",
                    PoseMapping: {
                        LegsClosed: "LegsClosed",
                        KneelingSpread: "KneelingSpread",
                        Kneel: "Kneel",
                        Spread: "Spread",
                        Hogtied: PoseType.HIDE,
                        AllFours: PoseType.HIDE,
                    },
                },
                {
                    Name: "上图案",
                    PoseMapping: {
                        LegsClosed: PoseType.DEFAULT,
                        KneelingSpread: PoseType.DEFAULT,
                        Kneel: PoseType.DEFAULT,
                        Spread: PoseType.DEFAULT,
                        Hogtied: PoseType.HIDE,
                        AllFours: PoseType.HIDE,
                    },
                },
                {
                    Name: "下图案",
                    PoseMapping: {
                        LegsClosed: "LegsClosed",
                        KneelingSpread: "KneelingSpread",
                        Kneel: "Kneel",
                        Spread: "Spread",
                        Hogtied: PoseType.HIDE,
                        AllFours: PoseType.HIDE,
                    },
                },
                {
                    Name: "腰线",
                    PoseMapping: {
                        LegsClosed: PoseType.DEFAULT,
                        KneelingSpread: PoseType.DEFAULT,
                        Kneel: PoseType.DEFAULT,
                        Spread: PoseType.DEFAULT,
                        Hogtied: PoseType.HIDE,
                        AllFours: PoseType.HIDE,
                    },
                },
            ],
        },
    ],
    SuitLower: [
        {
            Name: "丝袜_Luzi",
            Random: false,
            Top: 0,
            Left: 0,
        },
    ],
};

/** @type { Translation.GroupedEntries } */
const translations = {
    CN: {
        Socks: {
            踩脚袜_Luzi: "踩脚袜",
            条纹袜_Luzi: "条纹袜",
            条纹袜2_Luzi: "条纹袜 2",
            丝袜_Luzi: "丝袜",
            露趾袜_Luzi: "露趾袜",
            丝袜2_Luzi: "丝袜 2",
            丝袜3_Luzi: "丝袜 3",
            网袜_Luzi: "网袜",
        },
        SuitLower: {
            丝袜_Luzi: "丝袜",
        },
    },
    EN: {
        Socks: {
            踩脚袜_Luzi: "Footstep Socks",
            条纹袜_Luzi: "Striped Socks",
            条纹袜2_Luzi: "Striped Socks 2",
            丝袜_Luzi: "Silk Stockings",
            露趾袜_Luzi: "Stirrup Thigh High Socks",
            丝袜2_Luzi: "Silk Stockings 2",
            丝袜3_Luzi: "Silk Stockings 3",
            网袜_Luzi: "Net Socks",
        },
        SuitLower: {
            丝袜_Luzi: "Silk Stockings",
        },
    },
    RU: {
        Socks: {
            踩脚袜_Luzi: "Носки для шагов",
            条纹袜_Luzi: "Полосатые носки",
            条纹袜2_Luzi: "Полосатые носки 2",
            丝袜_Luzi: "Шелковые чулки",
            露趾袜_Luzi: "Чулки с открытыми пальцами",
            丝袜2_Luzi: "Шелковые чулки 2",
            丝袜3_Luzi: "Шелковые чулки 3",
            网袜_Luzi: "Носки-сетка",
        },
        SuitLower: {
            丝袜_Luzi: "Шелковые чулки",
        },
    },
};

export default function () {
    AssetManager.addGroupedAssets(assets, translations);
}
