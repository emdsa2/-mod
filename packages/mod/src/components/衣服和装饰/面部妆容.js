import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomGroupedAssetDefinitions} */
const assets = {
    EyeShadow: [
        {
            Name: "面部妆容_Luzi",
            Random: false,
            Top: 0,
            Left: 0,
            DefaultColor: ["#000000"],
        },
        {
            Name: "面部妆容1_Luzi",
            Random: false,
            Top: 0,
            Left: 0,
            DefaultColor: ["#000000"],
        },
    ],
};

/** @type { Translation.GroupedEntries } */
const translations = {
    CN: {
        EyeShadow: {
            面部妆容_Luzi: "面部妆容",
            面部妆容1_Luzi: "面部妆容 1",
        },
    },
    EN: {
        EyeShadow: {
            面部妆容_Luzi: "Face Makeup",
            面部妆容1_Luzi: "Face Makeup 1",
        },
    },
    RU: {
        EyeShadow: {
            面部妆容_Luzi: "Макияж лица",
        },
    },
};

export default function () {
    AssetManager.addGroupedAssets(assets, translations);
}
