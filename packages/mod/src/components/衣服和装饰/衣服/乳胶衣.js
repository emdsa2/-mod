import AssetManager from "@mod-utils/AssetManager";

/** @type { CustomGroupedAssetDefinitions } */
const assets = {
    Suit: [
        {
            Name: "乳胶衣_Luzi",
            Random: false,
            Gender: "F",
            Top: 0,
            Left: 0,
            Prerequisite: ["HasBreasts"],
            Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"],
            DefaultColor: ["#232323", "#000000", "#FFFFFF", "#232323", "#000000", "#FFFFFF",],
            Layer: [
                {
                    Name: "手套底色",
                    Priority: 27,
                    PoseMapping: {
                        TapedHands: "TapedHands",
                        Yoked: "Yoked",
                        OverTheHead: "OverTheHead",
                        BackBoxTie: "Hide",
                        BackElbowTouch: "Hide",
                        BackCuffs: "BackCuffs",
                        Hogtied: "Hide",
                        AllFours: "Hide",
                    },
                },
                {
                    Name: "手套阴影",
                    Priority: 27,
                    PoseMapping: {
                        TapedHands: "TapedHands",
                        Yoked: "Yoked",
                        OverTheHead: "OverTheHead",
                        BackBoxTie: "Hide",
                        BackElbowTouch: "Hide",
                        BackCuffs: "BackCuffs",
                        Hogtied: "Hide",
                        AllFours: "Hide",
                    },
                },
                {
                    Name: "手套高光",
                    Priority: 27,
                    PoseMapping: {
                        TapedHands: "TapedHands",
                        Yoked: "Yoked",
                        OverTheHead: "OverTheHead",
                        BackBoxTie: "Hide",
                        BackElbowTouch: "Hide",
                        BackCuffs: "BackCuffs",
                        Hogtied: "Hide",
                        AllFours: "Hide",
                    },
                },
                {
                    Name: "上底色", 
                    Priority: 14,
                    PoseMapping: {
                        TapedHands: "TapedHands",
                        Yoked: "Yoked",
                        OverTheHead: "OverTheHead",
                        BackBoxTie: "BackBoxTie",
                        BackElbowTouch: "BackElbowTouch",
                        BackCuffs: "BackCuffs",
                        Hogtied: "Hogtied",
                        AllFours: "Hide",
                    },
                },
                {
                    Name: "上阴影", 
                    Priority: 14,
                    PoseMapping: {
                        TapedHands: "TapedHands",
                        Yoked: "Yoked",
                        OverTheHead: "OverTheHead",
                        BackBoxTie: "BackBoxTie",
                        BackElbowTouch: "BackElbowTouch",
                        BackCuffs: "BackCuffs",
                        Hogtied: "Hogtied",
                        AllFours: "Hide",
                    },
                },
                {
                    Name: "上高光", 
                    Priority: 14,
                    PoseMapping: {
                        TapedHands: "TapedHands",
                        Yoked: "Yoked",
                        OverTheHead: "OverTheHead",
                        BackBoxTie: "BackBoxTie",
                        BackElbowTouch: "BackElbowTouch",
                        BackCuffs: "BackCuffs",
                        Hogtied: "Hogtied",
                        AllFours: "Hide",
                    },
                },
            ],
        },
    ],
    SuitLower: [
        {
            Name: "乳胶衣_Luzi",
            Random: false,
            Gender: "F",
            Top: 0,
            Left: 0,
            Prerequisite: ["HasVagina"],
            Attribute: ["SuitLower"],
            DefaultColor: ["#232323", "#000000", "#FFFFFF",],
            Layer: [
                {
                    Name: "下底色", Priority: 14,
                },
                {
                    Name: "下阴影", Priority: 14,
                },
                {
                    Name: "下高光", Priority: 14,
                },
            ],
        },
    ],
};

const translations = {
    CN: {
        Suit: {
            乳胶衣_Luzi: "乳胶衣",
        },
        SuitLower: {
            乳胶衣_Luzi: "乳胶衣",
        },
    },
    EN: {
        Suit: {
            乳胶衣_Luzi: "Latex Top",
        },
        SuitLower: {
            乳胶衣_Luzi: "Latex Bottom",
        },
    },
    RU: {
        Suit: {
            乳胶衣_Luzi: "Латексный верх",
        },
        SuitLower: {
            乳胶衣_Luzi: "Латексный низ",
        },
    },
};

export default function () {
    AssetManager.addGroupedAssets(assets, translations);
}
