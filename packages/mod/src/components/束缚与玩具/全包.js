import AssetManager from "../../assetManager";

/** @type {AssetDefinition.Item[]} */
const head_assets = [
    {
        Name: "绷带头部_Luzi",
        Random: false,
        Priority: 51,
        Top: 0,
        Left: 0,
    },
    {
        Name: "毛毯头部_Luzi",
        Random: false,
        Top: 0,
        Left: 0,
        Hide: ["HairBack"],
        Layer: [
            { Name: "上", Priority: 52 },
            { Name: "下", Priority: 1 },
        ],
    },
];

/** @type {AssetDefinition.Item[]} */
const assets = [
    {
        Name: "胶带全身_Luzi",
        Gender: "F",
        Random: false,
        Top: 0,
        Left: 0,
        Difficulty: 10,
        SelfBondage: 6,
        Time: 30,
        RemoveTime: 40,
        AllowTighten: true,
        Audio: "DuctTapeRollShort",
        SetPose: ["BackElbowTouch", "LegsClosed"],
        Effect: [E.Block, E.BlockWardrobe, E.Slow],
        Prerequisite: ["HasBreasts"],
        Layer: [
            { Name: "上", Priority: 24, ParentGroup: "BodyUpper", PoseMapping: { BackElbowTouch: PoseType.DEFAULT } },
            { Name: "下", Priority: 24, ParentGroup: "BodyLower", PoseMapping: { LegsClosed: PoseType.DEFAULT } },
        ],
    },
    {
        Name: "睡袋改_Luzi",
        Gender: "F",
        Random: false,
        Top: 0,
        Left: 0,
        Difficulty: 10,
        SelfBondage: 6,
        Time: 30,
        RemoveTime: 40,
        AllowLock: true,
        AllowTighten: true,
        DrawLocks: false,
        SetPose: ["BackElbowTouch", "LegsClosed"],
        Effect: [E.Block, E.BlockWardrobe, E.Slow],
        Prerequisite: ["HasBreasts"],
        SelfUnlock: false,
        Layer: [
            { Name: "上", Priority: 35, ParentGroup: "BodyUpper", PoseMapping: { BackElbowTouch: PoseType.DEFAULT } },
            { Name: "下", Priority: 0, ParentGroup: "BodyLower", PoseMapping: { LegsClosed: PoseType.DEFAULT } },
        ],
    },
    {
        Name: "全包毛毯改_Luzi",
        Gender: "F",
        Random: false,
        Top: 0,
        Left: 0,
        Difficulty: 10,
        SelfBondage: 6,
        Time: 30,
        RemoveTime: 40,
        AllowTighten: true,
        SetPose: ["BackElbowTouch", "LegsClosed"],
        Effect: [E.Block, E.BlockWardrobe, E.Slow],
        Prerequisite: ["HasBreasts"],
        Layer: [
            { Name: "上", Priority: 24, ParentGroup: "BodyUpper", PoseMapping: { BackElbowTouch: PoseType.DEFAULT } },
            { Name: "下", Priority: 24, ParentGroup: "BodyLower", PoseMapping: { LegsClosed: PoseType.DEFAULT } },
        ],
    },
    {
        Name: "绷带全身_Luzi",
        Gender: "F",
        Random: false,
        Top: 0,
        Left: 0,
        Difficulty: 10,
        SelfBondage: 6,
        Time: 30,
        RemoveTime: 40,
        AllowTighten: true,
        SetPose: ["BackElbowTouch", "LegsClosed"],
        Effect: [E.Block, E.BlockWardrobe, E.Slow],
        Prerequisite: ["HasBreasts"],
        Layer: [
            { Name: "上", Priority: 24, ParentGroup: "BodyUpper", PoseMapping: { BackElbowTouch: PoseType.DEFAULT } },
            { Name: "下", Priority: 24, ParentGroup: "BodyLower", PoseMapping: { LegsClosed: PoseType.DEFAULT } },
        ],
    },
];

export default function () {
    AssetManager.addGroupedAssets({
        ItemTorso: assets,
        ItemTorso2: assets,
        ItemHood: head_assets,
    });
}
