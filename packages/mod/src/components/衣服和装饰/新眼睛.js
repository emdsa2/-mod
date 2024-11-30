import AssetManager from "@mod-utils/AssetManager";

/** @type { CustomGroupedAssetDefinitions }} */
const assets = {
    新眼睛_Luzi: [        
        {
            Name: "眼睛1",
            BuyGroup: "AnimeLenses",
            ParentItem: "ItemHeadAnimeLenses",
            Random: false,
            OverrideBlinking: true,
            Hide: ["Eyes", "Eyes2"],
            AllowExpression: ["Closed"],
            Layer: [
                { Name: "左眼", MirrorExpression: "Eyes", AllowColorize: false },              
                { Name: "右眼", MirrorExpression: "Eyes2", AllowColorize: false },             
            ],
        },
    ],
};

/** @type { Translation.GroupedEntries } */
const translations = {
    CN: {
        新眼睛_Luzi: {
            眼睛1: "眼睛 1",
        },
    },
    EN: {
        新眼睛_Luzi: {
            眼睛1: "Eyes 1",
        },
    },
};

export default function () {
    AssetManager.addGroupedAssets(assets, translations);
}
