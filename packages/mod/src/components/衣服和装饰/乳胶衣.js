import AssetManager from "@mod-utils/AssetManager";

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
                        Hogtied: "Hide",
                        AllFours: "Hide",
                    },
                },
                {
                    Name: "上衣", Priority: 14,
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
            Name: "乳胶衣下_Luzi",
            Random: false,
            Gender: "F",
            Top: -110,
            Left: 0,
            Prerequisite: ["HasVagina"],
            Attribute: ["SuitLower"],
        },
    ],
    Bra: [
        {
            Name: "绷带全身_Luzi",
            Random: false,
            Gender: "F",
            Top: 0,
            Left: 0,
            // DefaultColor: ["#9E9E9E", "#9E9E9E"],
            Layer: [
                {
                    Name: "手部",
                    ParentGroup: "BodyUpper",
                    Priority: 27,
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
                {
                    Name: "腿部",
                    ParentGroup: "BodyLower",
                    PoseMapping: {
                        Kneel: "Kneel",
                        KneelingSpread: "KneelingSpread",
                        LegsClosed: "LegsClosed",
                        Spread: "Spread",
                        Hogtied: "Hide",
                        AllFours: "Hide",
                    },
                },
                {
                    Name: "上身",
                    ParentGroup: "BodyUpper",
                    PoseMapping: {
                        TapedHands: "TapedHands",
                        Yoked: "Yoked",
                        OverTheHead: "OverTheHead",
                        BackBoxTie: "BackElbowTouch",
                        BackElbowTouch: "BackElbowTouch",
                        BackCuffs: "BackElbowTouch",
                        Hogtied: "Hide",
                        AllFours: "Hide",
                    },
                },
                {
                    Name: "下身",
                    ParentGroup: "BodyLower",
                    PoseMapping: {
                        Kneel: "Kneel",
                        KneelingSpread: "KneelingSpread",
                        LegsClosed: "LegsClosed",
                        Spread: "Spread",
                        Hogtied: "Hide",
                        AllFours: "Hide",
                    },
                },
            ],
        },
    ],
};

const translations = {
    CN: {
        Suit: {
            乳胶衣上_Luzi: "乳胶衣上",
        },
        SuitLower: {
            乳胶衣下_Luzi: "乳胶衣下",
        },
        Bra: {
            绷带全身_Luzi: "绷带全身",
        },
    },
    EN: {
        Suit: {
            乳胶衣上_Luzi: "Latex Top",
        },
        SuitLower: {
            乳胶衣下_Luzi: "Latex Bottom",
        },
        Bra: {
            绷带全身_Luzi: "Full Body Bandage",
        },
    },
    RU: {
        Suit: {
            乳胶衣上_Luzi: "Латексный верх",
        },
        SuitLower: {
            乳胶衣下_Luzi: "Латексный низ",
        },
        Bra: {
            绷带全身_Luzi: "Полный бинт",
        },
    },
};

export default function () {
    AssetManager.addGroupedAssets(assets, translations);
}
