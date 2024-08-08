import AssetManager from "../../assetManager";

/** @type {CustomAssetDefinition[]} */
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
        Name: "穿戴式猫尾镜像_Luzi",
        Random: false,
        Top: -100,
        Left: 0,
        Layer: [{ Name: "尾巴" }, { Name: "蝴蝶结" }, { Name: "铃铛" }],
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

export default function () {
    AssetManager.addAssets("TailStraps", assets);
    AssetManager.addImgMapping(icons);
}
