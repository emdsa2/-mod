import AssetManager from "@mod-utils/AssetManager";


/** @type { CustomGroupedAssetDefinitions }} */
const assets = {
    Hat: [
        {
            Name: "冕旒_Luzi",
            Random: false,
            Top: -18,
            Left: 0,
            DefaultColor: ["##660606", "#000000", "#C18A34", "#CFAC68"],
            Layer: [
                {
                    Name: "帽顶",
                    Priority: 55,

                },
                {
                    Name: "帽身",
                    Priority: 55,
                },
                {
                    Name: "纹样",
                    Priority: 55,
                },
                {
                    Name: "帽帘",
                    Priority: 55,
                },
            ],
        },
    ],
};

/** @type { Translation.GroupedEntries } */
const translations = {
    CN: {
        Hat: {
            冕旒_Luzi: "冕旒",
        },
    },
    EN: {
        Hat: {
            冕旒_Luzi: "Mian Liu",
        },
    },
};

export default function () {
    AssetManager.addGroupedAssets(assets, translations);
}

