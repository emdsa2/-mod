import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomGroupedAssetDefinitions} */
const assets = {
    Cloth: [
        {
            Name: "假领子_Luzi",
            Random: false,
            Top: 0,
            Left: 0,
            ParentGroup: "BodyUpper",
            Layer: [
                {
                    Name: "扣子",
                    Priority: 18,
                    PoseMapping: {
                        TapedHands: PoseType.DEFAULT,
                        Yoked: PoseType.DEFAULT,
                        OverTheHead: PoseType.DEFAULT,
                        BackBoxTie: PoseType.DEFAULT,
                        BackElbowTouch: PoseType.DEFAULT,
                        BackCuffs: PoseType.DEFAULT,
                        Hogtied: PoseType.DEFAULT,
                        AllFours: "Hide",
                    },
                },
                {
                    Name: "衣服",
                    Priority: 18,
                    PoseMapping: {
                        TapedHands: PoseType.DEFAULT,
                        Yoked: "Yoked",
                        OverTheHead: "OverTheHead",
                        BackBoxTie: PoseType.DEFAULT,
                        BackElbowTouch: PoseType.DEFAULT,
                        BackCuffs: PoseType.DEFAULT,
                        Hogtied: PoseType.DEFAULT,
                        AllFours: "Hide",
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
            假领子_Luzi: "假领子",
        },
    },
    EN: {
        Cloth: {
            假领子_Luzi: "Fake Collar",
        },
    },
    RU: {
        Cloth: {
            假领子_Luzi: "Поддельный воротник",
        },
    },
};

export default function () {
    AssetManager.addGroupedAssets(assets, translations);
}
