import AssetManager from "../../assetManager";

/** @type { AssetDefinition.Item } */
const asset = {
    Name: "更多有线跳蛋_Luzi",
    Random: false,
    Gender: "F",
    Top: 0,
    Left: 0,
    Difficulty: 25,
    Prerequisite: ["HasBreasts", "AccessVulva"],
    Priority: 14,
    PoseMapping: {
        AllFours: "Hide",
        Hogtied: "Hide",
        Kneel: "Kneel",
        KneelingSpread: "KneelingSpread",
        LegsClosed: "LegsClosed",
    },
    DefaultColor: ["Default", "Default", "Default", "#3B3B3B", "Default", "Default", "#3B3B3B"],
    Layer: [
        {
            Name: "跳蛋1",
            AllowTypes: { n: [0, 1, 2, 3, 4] },
        },
        {
            Name: "跳蛋2",
            AllowTypes: { n: [1, 2, 3, 4] },
        },
        {
            Name: "跳蛋5",
            AllowTypes: { n: [4] },
        },
        {
            Name: "绑带5",
            ParentGroup: "BodyLower",
            AllowTypes: { n: [4] },
        },
        {
            Name: "跳蛋3",
            AllowTypes: { n: [2, 3, 4] },
        },
        {
            Name: "跳蛋4",
            AllowTypes: { n: [3, 4] },
        },
        {
            Name: "绑带",
            ParentGroup: "BodyLower",
        },
    ],
};

/** @type {AssetArchetypeConfig} */
const extended = {
    Archetype: ExtendedArchetype.MODULAR,
    Modules: [
        {
            Name: "跳蛋开关",
            DrawImages: false,
            Key: "o",
            Options: [
                {
                    Property: { Intensity: -1, Effect: ["Egged"] },
                },
                {
                    Property: { Intensity: 0, Effect: ["Egged", "Vibrating"] },
                },
                {
                    Property: { Intensity: 1, Effect: ["Egged", "Vibrating"] },
                },
                {
                    Property: { Intensity: 3, Effect: ["Egged", "Vibrating"] },
                },
                {
                    Property: { Intensity: 3, Effect: ["Egged", "Vibrating"] },
                },
            ],
        },
        {
            Name: "跳蛋数量",
            DrawImages: false,
            Key: "n",
            Options: [{}, {}, {}, {}, {}],
        },
    ],
};

export default function () {
    AssetManager.addAsset("ItemVulva", asset, extended);
}
