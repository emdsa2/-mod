import AssetManager from "@mod-utils/AssetManager";

/** @type { CustomGroupedAssetDefinitions }} */
const assets = {
    Cloth: [
        {
            Name: "披肩_Luzi",
            Random: false,
            Gender: "F",
            Top: -110,
            Left: 0,
            Prerequisite: ["HasBreasts"],
            Layer: [
                {
                    Name: "Band",
                    Priority: 34,
                    PoseMapping: {
                        TapedHands: PoseType.DEFAULT,
                        Yoked: PoseType.DEFAULT,
                        OverTheHead: PoseType.DEFAULT,
                        BackBoxTie: PoseType.DEFAULT,
                        BackElbowTouch: PoseType.DEFAULT,
                        BackCuffs: PoseType.DEFAULT,
                        AllFours: PoseType.DEFAULT,
                        Hogtied: PoseType.DEFAULT,
                    },
                },
                {
                    Name: "Shawl",
                    Priority: 34,
                    PoseMapping: {
                        TapedHands: PoseType.DEFAULT,
                        Yoked: "Yoked",
                        OverTheHead: "OverTheHead",
                        BackBoxTie: PoseType.DEFAULT,
                        BackElbowTouch: PoseType.DEFAULT,
                        BackCuffs: PoseType.DEFAULT,
                        AllFours: PoseType.DEFAULT,
                        Hogtied: PoseType.DEFAULT,
                    },
                },
            ],
        },
    ],
    ClothAccessory: [
        {
            Name: "披肩短_Luzi",
            Random: false,
            Gender: "F",
            Top: 0,
            Left: 0,
            Prerequisite: ["HasBreasts"],
            ParentGroup: "BodyUpper",
            DefaultColor: ["#490707", "#490707", "#FFFFFF", "#FFFFFF"],
            Layer: [
                {
                    Name: "衣左",
                    Priority: 34,
                    PoseMapping: {
                        Yoked: "Yoked",
                        OverTheHead: "OverTheHead",
                    },
                },
                {
                    Name: "衣右",
                    Priority: 34,
                    PoseMapping: {
                        Yoked: "Yoked",
                        OverTheHead: "OverTheHead",
                    },
                },
                {
                    Name: "绒左",
                    Priority: 34,
                    PoseMapping: {
                        Yoked: "Yoked",
                        OverTheHead: "OverTheHead",
                    },
                },
                {
                    Name: "绒右",
                    Priority: 34,
                    PoseMapping: {
                        Yoked: "Yoked",
                        OverTheHead: "OverTheHead",
                    },
                },
            ],
        },
        {
            Name: "披肩长_Luzi",
            Random: false,
            Gender: "F",
            Top: 0,
            Left: 0,
            Prerequisite: ["HasBreasts"],
            ParentGroup: "BodyUpper",
            DefaultColor: ["#490707", "#490707", "#FFFFFF", "#FFFFFF"],
            Layer: [
                {
                    Name: "衣左",
                    Priority: 32,
                    PoseMapping: {
                        TapedHands: PoseType.DEFAULT,
                        Yoked: "Yoked",
                        OverTheHead: "OverTheHead",
                        BackBoxTie: PoseType.DEFAULT,
                        BackElbowTouch: PoseType.DEFAULT,
                        BackCuffs: PoseType.DEFAULT,
                        AllFours: PoseType.DEFAULT,
                        Hogtied: PoseType.DEFAULT,
                    },
                },
                {
                    Name: "衣右",
                    Priority: 32,
                    PoseMapping: {
                        TapedHands: PoseType.DEFAULT,
                        Yoked: "Yoked",
                        OverTheHead: "OverTheHead",
                        BackBoxTie: PoseType.DEFAULT,
                        BackElbowTouch: PoseType.DEFAULT,
                        BackCuffs: PoseType.DEFAULT,
                        AllFours: PoseType.DEFAULT,
                        Hogtied: PoseType.DEFAULT,
                    },
                },
                {
                    Name: "绒左",
                    Priority: 32,
                    PoseMapping: {
                        TapedHands: PoseType.DEFAULT,
                        Yoked: "Yoked",
                        OverTheHead: "OverTheHead",
                        BackBoxTie: PoseType.DEFAULT,
                        BackElbowTouch: PoseType.DEFAULT,
                        BackCuffs: PoseType.DEFAULT,
                        AllFours: PoseType.DEFAULT,
                        Hogtied: PoseType.DEFAULT,
                    },
                },
                {
                    Name: "绒右",
                    Priority: 32,
                    PoseMapping: {
                        TapedHands: PoseType.DEFAULT,
                        Yoked: "Yoked",
                        OverTheHead: "OverTheHead",
                        BackBoxTie: PoseType.DEFAULT,
                        BackElbowTouch: PoseType.DEFAULT,
                        BackCuffs: PoseType.DEFAULT,
                        AllFours: PoseType.DEFAULT,
                        Hogtied: PoseType.DEFAULT,
                    },
                },
            ],
        },
    ],
};

/** @type { Translation.GroupedEntries } */
const translations = {
    CN: {
        Cloth: {
            披肩_Luzi: "披肩",
            披肩短_Luzi: "披肩短",
            披肩长_Luzi: "披肩长",
        },
    },
    EN: {
        Cloth: {
            披肩_Luzi: "Shawl",
            披肩短_Luzi: "Short Shawl",
            披肩长_Luzi: "Long Shawl",
        },
    },
    RU: {
        Cloth: {
            披肩_Luzi: "Палантин",
            披肩短_Luzi: "Короткий палантин",
            披肩长_Luzi: "Длинный палантин",
        },
    },
    UA: {
        Cloth: {
            披肩_Luzi: "Палантин",
            披肩短_Luzi: "Короткий палантин",
            披肩长_Luzi: "Довгий палантин",
        },
    },
};

export default function () {
    AssetManager.addGroupedAssets(assets, translations);
}
