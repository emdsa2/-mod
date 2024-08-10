import AssetManager from "../../assetManager";

/** @type { CustomGroupedAssetDefinitions }} */
const assets = {
    Socks: [
        {
            Name: "丝袜_Luzi",
            Random: false,
            Top: 0,
            Left: {
                [PoseType.DEFAULT]: 0,
                Kneel: 0,
                KneelingSpread: 30,
                LegsClosed: 0,
                Spread: 0,
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
            丝袜_Luzi: "丝袜",
        },
        SuitLower: {
            丝袜_Luzi: "丝袜",
        },
    },
    EN: {
        Socks: {
            丝袜_Luzi: "Silk Stockings",
        },
        SuitLower: {
            丝袜_Luzi: "Silk Stockings",
        },
    },
};

export default function () {
    AssetManager.addGroupedAssets(assets, translations);
}
