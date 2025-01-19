import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "人偶2_Luzi",
    Random: false,
    Gender: "F",
    Top: 0,
    Left: 0,
    AllowLock: true,
    DrawLocks: false,
    Difficulty: 25,
    Hide: ["HandsLeft", "HandsRight", "BodyUpper"],
    Prerequisite: ["HasBreasts"],
    SetPose: ["BackElbowTouch"],
    AllowActivePose: ["BackElbowTouch"],
    Layer: [
        {
            Name: "上半身",
            Priority: 9,
            Top: 0,
            Left: 0,
            ParentGroup: "BodyUpper",
            InheritColor: "BodyUpper",
            HideColoring: true,
            ColorSuffix: { HEX_COLOR: "White" },
        },
    ],
};

const translations = {
    CN: "人偶",
    EN: "Ball Joint Doll",
    RU: "Кукла на шарнирах",
};

export default function () {
    // AssetManager.addAsset("Cloth", asset, undefined, translations);
}
