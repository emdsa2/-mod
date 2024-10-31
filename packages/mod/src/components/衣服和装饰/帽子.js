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
        {
            Name: "狐狸面具",
            Random: false,
            Top: 0,
            Left: 0,
            Priority: 55,
            DefaultColor: ["Default", "#FFF260", "#3E5FBB", "#F83A3A"],
            Layer: [
                {
                    Name: "底",
                    Priority: 55,
                },
                {
                    Name: "眼白",
                    Priority: 55,
                },
                {
                    Name: "瞳孔",
                    Priority: 55,
                },
                {
                    Name: "涂色",
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
            狐狸面具: "狐狸面具",
        },
    },
    EN: {
        Hat: {
            冕旒_Luzi: "Mian Liu",
            狐狸面具: "Fox Mask",
        },
    },
    RU: {
        Hat: {
            冕旒_Luzi: "Миан Лю",
            狐狸面具: "маска лисы",
        },
    },
};

export default function () {
    AssetManager.addGroupedAssets(assets, translations);
}

