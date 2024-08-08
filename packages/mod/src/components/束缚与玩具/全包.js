import AssetManager from "../../assetManager";

/** @type {CustomAssetDefinition[]} */
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

/** @type {CustomAssetDefinition[]} */
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

/** @type {Translation.GroupedEntries} */
const translations = {
    CN: {
        ItemHood: {
            绷带头部_Luzi: "绷带头部",
            毛毯头部_Luzi: "毛毯头部",
        },
        ItemTorso: {
            胶带全身_Luzi: "胶带全身",
            睡袋改_Luzi: "睡袋改",
            全包毛毯改_Luzi: "全包毛毯改",
            绷带全身_Luzi: "绷带全身",
        },
    },
    EN: {
        ItemHood: {
            绷带头部_Luzi: "Bandage Head",
            毛毯头部_Luzi: "Blanket Head",
        },
        ItemTorso: {
            胶带全身_Luzi: "Tape Full Body",
            睡袋改_Luzi: "Modified Sleeping Bag",
            全包毛毯改_Luzi: "Fully Wrapped Blanket",
            绷带全身_Luzi: "Bandage Full Body",
        },
    },
};

export default function () {
    AssetManager.addGroupedAssets(
        {
            ItemTorso: assets,
            ItemHood: head_assets,
        },
        translations
    );
}
