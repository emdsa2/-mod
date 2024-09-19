import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomGroupedAssetDefinitions} */
const assets = {
    ItemDevices: [
        {
            Name: "猪猪_Luzi",
            Random: false,
            Top: -110,
            Left: 0,
            SetPose: ["KneelingSpread"],
            AllowActivePose: ["KneelingSpread"],
            OverrideHeight: { Height: -150, Priority: 21 },
            Layer: [
                { Name: "鼻子", Priority: 56 },
                { Name: "猪猪", Priority: 55 },
                { Name: "缰绳", Priority: 26 },
            ],
        },
    ],
};

/** @type { Translation.GroupedEntries } */
const translations = {
    CN: {
        ItemDevices: {
            猪猪_Luzi: "猪猪",
        },
    },
    EN: {
        ItemDevices: {
            猪猪_Luzi: "Piggy",
        },
    },
    RU: {
        ItemDevices: {
            猪猪_Luzi: "Поросёнок",
        },
    },
    UA: {
        ItemDevices: {
            猪猪_Luzi: "Свинка",
        },
    },
};
export default function () {
    AssetManager.addGroupedAssets(assets, translations);
}
