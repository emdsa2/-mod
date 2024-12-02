import AssetManager from "@mod-utils/AssetManager";

/** @type { CustomGroupedAssetDefinitions }} */
const assets = {
    Eyes: [
        {
            Name: "眼睛1",
            Top: 0,
            Left: 0,
            FullAlpha: false
        },
    ],
    Eyes2: [
        {
            Name: "眼睛1",
            ParentItem: "眼睛1",
            Top: 0,
            Left: 0,
            FullAlpha: false,
        },
    ],
};

/** @type { Translation.GroupedEntries } */
const translations = {
    CN: {
        Eyes: {
            眼睛1: "🍔眼睛 1",
        },
    },
    EN: {
        Eyes2: {
            眼睛1: "🍔Eyes 1",
        },
    },
};

export default function () {
    AssetManager.addGroupedAssets(assets, translations);
}
