import AssetManager from "@mod-utils/AssetManager";

/** @type { CustomGroupedAssetDefinitions } */
const assets = {
    Gloves: [
        {
            Name: "绷带_Luzi",
            Random: false,
            Top: 0,
            Left: 0,
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
    ],
    Socks: [
        {
            Name: "绷带_Luzi",
            Random: false,
            Top: 0,
            Left: {
                BaseLower: 0,
                Kneel: 0,
                KneelingSpread: 30,
                LegsClosed: 0,
                LegsOpen: 0,
                Spread: 0,
            },
        }
    ],
    // SocksLeft: [
    //     {
    //         Name: "绷带_Luzi",
    //         Random: false,
    //         Top: 0,
    //         Left: {
    //             BaseLower: 0,
    //             Kneel: 0,
    //             KneelingSpread: 30,
    //             LegsClosed: 0,
    //             LegsOpen: 0,
    //             Spread: 0,
    //         },
    //     }
    // ],
    // SocksRight: [
    //     {
    //         Name: "绷带_Luzi",
    //         Random: false,
    //         Top: 0,
    //         Left: {
    //             BaseLower: 0,
    //             Kneel: 0,
    //             KneelingSpread: 30,
    //             LegsClosed: 0,
    //             LegsOpen: 0,
    //             Spread: 0,
    //         },
    //     }
    // ],
    Bra: [
        {
            Name: "绷带全身_Luzi",
            Random: false,
            Gender: "F",
            Top: 0,
            Left: 0,
            Layer: [
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
        Gloves: {
            绷带_Luzi: "绷带"
        },
        Socks: {
            绷带_Luzi: "绷带"
        },
        SocksRight: {
            绷带_Luzi: "绷带"
        },
        Bra: {
            绷带全身_Luzi: "绷带"
        },
    },
    EN: {
        Gloves: {
            绷带_Luzi: "Bandage"
        },
        Socks: {
            绷带_Luzi: "Bandage"
        },
        SocksRight: {
            绷带_Luzi: "Bandage"
        },
        Bra: {
            绷带全身_Luzi: "Bandage",
        },
    },
    RU: {
        Gloves: {
            绷带_Luzi: "повязк"
        },
        Socks: {
            绷带_Luzi: "повязк"
        },
        SocksRight: {
            绷带_Luzi: "повязк"
        },
        Bra: {
            绷带全身_Luzi: "повязк",
        },
    },
};

export default function () {
    AssetManager.addGroupedAssets(assets, translations);
}
