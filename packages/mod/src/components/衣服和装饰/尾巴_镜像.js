import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinitionAppearance[]} */
const assets = [
    {
        Name: "穿戴式狗尾镜像_Luzi",
        Random: false,
        Top: -100,
        Left: 0,
    },
    {
        Name: "白色穿戴式狼尾镜像_Luzi",
        Random: false,
        Top: -100,
        Left: 0,
    },
    {
        Name: "穿戴式浅色猫尾镜像_Luzi",
        Random: false,
        Top: 0,
        Left: 0,
    },
    {
        Name: "穿戴式软小狗尾镜像_Luzi",
        Random: false,
        Top: 0,
        Left: 0,
    },
    {
        Name: "大型穿戴式狼尾镜像_Luzi",
        Random: false,
        Top: -100,
        Left: 0,
    },
    {
        Name: "小型穿戴式狼尾镜像_Luzi",
        Random: false,
        Top: 0,
        Left: 0,
    },
    {
        Name: "小型穿戴式软猫尾镜像_Luzi",
        Random: false,
        Top: 0,
        Left: 0,
    },
    {
        Name: "穿戴式浣熊尾镜像_Luzi",
        Random: false,
    },
    {
        Name: "穿戴式猫尾镜像_Luzi",
        Random: false,
        Top: -100,
        Left: 0,
        Layer: [{ Name: "尾巴" }, { Name: "蝴蝶结" }, { Name: "铃铛" }],
    },
    {
        Name: "尾巴1_Luzi",
        Random: false,
        Top: 0,
        Left: 0,
        DefaultColor: ["#3B0505",],
        PoseMapping: {
            Kneel: "Kneel",
            KneelingSpread: "Kneel",
            Hogtied: "Kneel",
            AllFours: "Kneel",
        },
    },
];

/** @type { Record<string,string> } */
const icons = {
    "Assets/Female3DCG/TailStraps/Preview/穿戴式狗尾:镜像_Luzi.png":
        "Assets/Female3DCG/TailStraps/Preview/PuppyTailStrap.png",
    "Assets/Female3DCG/TailStraps/Preview/白色穿戴式狼尾:镜像_Luzi.png":
        "Assets/Female3DCG/TailStraps/Preview/WolfTailStrap3.png",
    "Assets/Female3DCG/TailStraps/Preview/穿戴式浅色猫尾:镜像_Luzi.png":
        "Assets/Female3DCG/TailStraps/Preview/KittenTailStrap1.png",
    "Assets/Female3DCG/TailStraps/Preview/穿戴式软小狗尾:镜像_Luzi.png":
        "Assets/Female3DCG/TailStraps/Preview/PuppyTailStrap1.png",
    "Assets/Female3DCG/TailStraps/Preview/大型穿戴式狼尾:镜像_Luzi.png":
        "Assets/Female3DCG/TailStraps/Preview/WolfTailStrap1.png",
    "Assets/Female3DCG/TailStraps/Preview/小型穿戴式狼尾:镜像_Luzi.png":
        "Assets/Female3DCG/TailStraps/Preview/WolfTailStrap2.png",
    "Assets/Female3DCG/TailStraps/Preview/小型穿戴式软猫尾:镜像_Luzi.png":
        "Assets/Female3DCG/TailStraps/Preview/KittenTailStrap2.png",
    "Assets/Female3DCG/TailStraps/Preview/穿戴式猫尾:镜像_Luzi.png":
        "Assets/Female3DCG/TailStraps/Preview/TailStrap.png",
};

/** @type { Translation.GroupedEntries } */
const translations = {
    CN: {
        TailStraps: {
            穿戴式狗尾镜像_Luzi: "穿戴式狗尾镜像",
            白色穿戴式狼尾镜像_Luzi: "白色穿戴式狼尾镜像",
            穿戴式浅色猫尾镜像_Luzi: "穿戴式浅色猫尾镜像",
            穿戴式软小狗尾镜像_Luzi: "穿戴式软小狗尾镜像",
            大型穿戴式狼尾镜像_Luzi: "大型穿戴式狼尾镜像",
            小型穿戴式狼尾镜像_Luzi: "小型穿戴式狼尾镜像",
            小型穿戴式软猫尾镜像_Luzi: "小型穿戴式软猫尾镜像",
            穿戴式猫尾镜像_Luzi: "穿戴式猫尾镜像",
            穿戴式浣熊尾镜像_Luzi: "穿戴式猫尾镜像",
            尾巴1_Luzi: "尾巴 1",
        },
    },
    EN: {
        TailStraps: {
            穿戴式狗尾镜像_Luzi: "Wearable Dog Tail",
            白色穿戴式狼尾镜像_Luzi: "White Wearable Wolf Tail",
            穿戴式浅色猫尾镜像_Luzi: "Light-colored Wearable Cat Tail",
            穿戴式软小狗尾镜像_Luzi: "Soft Wearable Puppy Tail",
            大型穿戴式狼尾镜像_Luzi: "Large Wearable Wolf Tail",
            小型穿戴式狼尾镜像_Luzi: "Small Wearable Wolf Tail",
            小型穿戴式软猫尾镜像_Luzi: "Small Soft Wearable Cat Tail",
            穿戴式猫尾镜像_Luzi: "Wearable Cat Tail",
            穿戴式浣熊尾镜像_Luzi: "RaccoonTailStrap Tail",
            尾巴1_Luzi: "Tail 1",
        },
    },
    RU: {
        TailStraps: {
            穿戴式狗尾镜像_Luzi: "Носимый собачий хвост",
            白色穿戴式狼尾镜像_Luzi: "Белый носимый волчий хвост",
            穿戴式浅色猫尾镜像_Luzi: "Светлый носимый кошачий хвост",
            穿戴式软小狗尾镜像_Luzi: "Мягкий носимый щенячий хвост",
            大型穿戴式狼尾镜像_Luzi: "Большой носимый волчий хвост",
            小型穿戴式狼尾镜像_Luzi: "Маленький носимый волчий хвост",
            小型穿戴式软猫尾镜像_Luzi: "Маленький мягкий носимый кошачий хвост",
            穿戴式猫尾镜像_Luzi: "Носимый кошачий хвост",
        },
    },
};

export default function () {
    AssetManager.addGroupedAssets({ TailStraps: assets }, translations);
    AssetManager.addImageMapping(icons);
}
