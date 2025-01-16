import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "人偶_Luzi",
    Random: false,
    Gender: "F",
    Top: 0,
    Left: 0,
    AllowLock: true,
    DrawLocks: false,
    Difficulty: 25,
    Hide: ["HandsLeft", "HandsRight", "BodyLower", "BodyUpper", "ArmsLeft", "ArmsRight",],
    Layer: [
        {
            Name: "下半身",
            Priority: 9,
            Top: 460,
            Left: 0,
            ParentGroup: "BodyLower",
            InheritColor: "BodyLower",
            HideColoring: true,
            ColorSuffix: { HEX_COLOR: "White" },
            PoseMapping: {
                Kneel: "Kneel",
                KneelingSpread: "KneelingSpread",
                LegsClosed: "LegsClosed",
                Spread: "Spread",
            },
        },
        {
            Name: "上半身",
            Priority: 9,
            Top: 0,
            Left: 0,
            ParentGroup: "BodyUpper",
            InheritColor: "BodyUpper",
            HideColoring: true,
            ColorSuffix: { HEX_COLOR: "White" },
            PoseMapping: {
                BackBoxTie: "BackBoxTie",
                BackCuffs: "BackCuffs",
                BackElbowTouch: "BackElbowTouch",
                OverTheHead: "OverTheHead",
                Yoked: "Yoked",
                Hogtied: "Hogtied",
                AllFours: "AllFours",
            },
        },
        {
            Name: "手",
            Priority: 28,
            Top: 0,
            Left: 0,
            ParentGroup: "BodyUpper",
            InheritColor: "BodyUpper",
            HideColoring: true,
            ColorSuffix: { HEX_COLOR: "White" },
            PoseMapping: {
                BackBoxTie: "Hide",
                BackCuffs: "Hide",
                BackElbowTouch: "Hide",
                OverTheHead: "Hide",
                Yoked: "Hide",
                Hogtied: "Hide",
                AllFours: "AllFours",
            },
        },
        {
            Name: "钥匙孔",
            Priority: 10,
            Top: 0,
            Left: 0,
        },
    ],
};

const translations = {
    CN: "人偶",
    EN: "Ball Joint Doll",
    RU: "Кукла на шарнирах",
};

export default function () {
    AssetManager.addAsset("动物身体_Luzi", asset, undefined, translations);
}
