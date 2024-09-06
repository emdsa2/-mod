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
            },
        },
        {
            Name: "踩脚袜_Luzi",
            Random: false,
            Top: 0,
            Left: 0,
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
            },
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
            条纹袜2_Luzi: "条纹袜2",
            丝袜_Luzi: "丝袜",
            露趾袜_Luzi: "露趾袜",
            丝袜2_Luzi: "丝袜2",
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
        },
        SuitLower: {
            丝袜_Luzi: "Silk Stockings",
        },
    },
};

export default function () {
    AssetManager.addGroupedAssets(assets, translations);
}
