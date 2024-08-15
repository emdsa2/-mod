import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "极限束腰",
    Gender: "F",
    Fetish: ["Lingerie", "Latex"],
    Priority: 22,
    Value: -1,
    Difficulty: 13,
    Time: 40,
    RemoveTime: 20,
    AllowLock: true,
    AllowTighten: true,
    DrawLocks: false,
    Prerequisite: ["AccessTorso", "HasBreasts"],
    PoseMapping: {
        Hogtied: PoseType.HIDE,
        AllFours: PoseType.HIDE,
    },
    DefaultColor: ["#545454", "#BC8B84"],
    Alpha: [
        {
            Group: ["BodyUpper", "BodyLower", "SuitLower", "Suit", "ItemAddon"],
            Masks: [
                [190, 370, 10, 10],
                [300, 370, 10, 10],
                [192, 380, 10, 5],
                [298, 380, 10, 5],
                [195, 385, 10, 5],
                [295, 385, 10, 5],
                [200, 380, 100, 20],
                [193, 390, 114, 26],
                [184, 416, 132, 23],
                [175, 439, 150, 25],
            ],
        },
    ],
    Layer: [{ Name: "Main" }, { Name: "B" }],
};

export default function () {
    AssetManager.addAsset("ItemTorso", asset, undefined, {
        CN: "极限束腰",
        EN: "Extreme Corset",
    });
    AssetManager.addLayerNames("ItemTorso", asset, {
        CN: {
            B: "扣子",
            Main: "束腰",
        },
        EN: {
            B: "Buckle",
            Main: "Corset",
        },
    });
}
