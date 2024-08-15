import AssetManager from "@mod-utils/AssetManager";

/** @type { CustomGroupedAssetDefinitions }} */
const assets = {
    Gloves: [
        {
            Name: "袖手套_Luzi",
            Random: false,
            Top: 0,
            Left: 0,
            PoseMapping: {
                TapedHands: "TapedHands",
                Yoked: "Yoked",
                OverTheHead: "OverTheHead",
                BackBoxTie: "BackBoxTie",
                BackElbowTouch: "Hide",
                BackCuffs: "BackCuffs",
                Hogtied: "Hide",
                AllFours: "Hide",
            },
        },
    ],
};

/** @type { Translation.GroupedEntries } */
const translations = {
    CN: {
        Gloves: {
            踩脚袜_Luzi: "袖手套",
        },
    },
    EN: {
        Gloves: {
            踩脚袜_Luzi: "Sleeve Gloves",
        },
    },
};

export default function () {
    AssetManager.addGroupedAssets(assets, translations);
}
