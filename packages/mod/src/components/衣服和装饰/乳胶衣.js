import AssetManager from "../../assetManager";

/** @type { CustomGroupedAssetDefinitions } */
const assets = {
    Suit: [
        {
            Name: "乳胶衣上_Luzi",
            Random: false,
            Gender: "F",
            Top: -110,
            Left: 0,
            Prerequisite: ["HasBreasts"],
            Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"],
            Layer: [
                {
                    Name: "手套",
                    Priority: 27,
                    PoseMapping: {
                        TapedHands: "Hide",
                        Yoked: "Hide",
                        OverTheHead: "Hide",
                        BackBoxTie: "Hide",
                        BackElbowTouch: "Hide",
                        BackCuffs: "Hide",
                    },
                },
                { Name: "上衣", Priority: 14 },
            ],
        },
    ],
    SuitLower: [
        {
            Name: "乳胶衣下_Luzi",
            Random: false,
            Gender: "F",
            Top: -110,
            Left: 0,
            Prerequisite: ["HasVagina"],
            Attribute: ["SuitLower"],
        },
    ],
};

export default function () {
    AssetManager.addGroupedAssets(assets);
}
