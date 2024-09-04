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
    ],
};

/** @type { Translation.GroupedEntries } */
const translations = {
    CN: {
        EyeShadow: {
            面部妆容_Luzi: "面部妆容",
        },

    },
    EN: {
        EyeShadow: {
            面部妆容_Luzi: "Face makeup",
        },

    },
};

export default function () {
    AssetManager.addGroupedAssets(assets, translations);
}
