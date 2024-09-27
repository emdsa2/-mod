import AssetManager from "@mod-utils/AssetManager";

/** @type { CustomAssetDefinitionItem[] } */
const head_assets = [
    {
        Name: "绷带头部_Luzi",
        Random: false,
        Block: [],
        Priority: 51,
        Top: 0,
        Left: 0,
    },
    {
        Name: "毛毯头部_Luzi",
        Random: false,
        Block: [],
        Top: 0,
        Left: 0,
        Hide: ["HairBack"],
        Layer: [
            { Name: "上", Priority: 52 },
            { Name: "下", Priority: 1 },
        ],
    },
];

/** @type { CustomAssetDefinitionItem[] } */
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
    {
        Name: "全包毛毯_Luzi",
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
        DefaultColor: [
            "Default",
            "#841E1E",
        ],
        Layer: [
            {
                Name: "上",
                Priority: 24,
                ParentGroup: "BodyUpper",
                PoseMapping: { BackElbowTouch: PoseType.DEFAULT }
            },
            {
                Name: "下",
                Priority: 24,
                ParentGroup: "BodyLower",
                CopyLayerColor: "上",
                PoseMapping: { LegsClosed: PoseType.DEFAULT }
            },
            {
                Name: "后",
                Priority: 1,
                ParentGroup: "BodyLower",
                CopyLayerColor: "上",
                PoseMapping: { LegsClosed: PoseType.DEFAULT }
            },
            {
                Name: "丝带上",
                Priority: 24,
                ParentGroup: "BodyUpper",
                PoseMapping: { BackElbowTouch: PoseType.DEFAULT }
            },
            {
                Name: "丝带下",
                Priority: 24,
                ParentGroup: "BodyLower",
                CopyLayerColor: "丝带上",
                PoseMapping: { LegsClosed: PoseType.DEFAULT }
            },
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
            全包毛毯_Luzi: "全包毛毯",
        },
    },
    EN: {
        ItemHood: {
            绷带头部_Luzi: "Head Bandage",
            毛毯头部_Luzi: "Head Blanket",
        },
        ItemTorso: {
            胶带全身_Luzi: "Tape Full Body",
            睡袋改_Luzi: "Modified Sleeping Bag",
            全包毛毯改_Luzi: "Fully Wrapped Blanket",
            绷带全身_Luzi: "Full Body Bandage",
            全包毛毯_Luzi: "Fully Wrapped Blanket",
        },
    },
    UA: {
        ItemHood: {
            绷带头部_Luzi: "Обв'язка голови бинтами",
            毛毯头部_Luzi: "Обв'язка з ковдри",
        },
        ItemTorso: {
            胶带全身_Luzi: "Скотч на все тіло",
            睡袋改_Luzi: "Модифікований спальний мішок",
            全包毛毯改_Luzi: "Повністю обгорнення ковдрою",
            绷带全身_Luzi: "Обв'язка бинтами на все тіло",
            全包毛毯_Luzi: "Повністю обгорнення ковдрою",
        },
    },
    RU: {
        ItemHood: {
            绷带头部_Luzi: "Бинтование головы",
            毛毯头部_Luzi: "Покрывало на голову",
        },
        ItemTorso: {
            胶带全身_Luzi: "Лента на всё тело",
            睡袋改_Luzi: "Изменённый спальный мешок",
            全包毛毯改_Luzi: "Полностью завёрнутое покрывало",
            绷带全身_Luzi: "Бинты на всё тело",
            全包毛毯_Luzi: "Полностью завёрнутое покрывало",
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
