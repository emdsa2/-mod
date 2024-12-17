import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomGroupDefinition} */
const left_eye = {
    Group: "眼睛左_Luzi",
    Priority: 9,
    Left: 200,
    Top: 140,
    Blink: true,
    AllowExpression: [
        "Closed",
        "Dazed",
        "Shy",
        "Sad",
        "Horny",
        "Lewd",
        "VeryLewd",
        "Heart",
        "HeartPink",
        "LewdHeart",
        "LewdHeartPink",
        "Dizzy",
        "Daydream",
        "ShylyHappy",
        "Angry",
        "Surprised",
        "Scared",
    ],
    PreviewZone: [190, 100, 120, 120],
    Asset: [{ Name: "眼睛1", FullAlpha: false, Hide: ["Eyes"] }],
};

/** @type {CustomGroupDefinition} */
const right_eye = {
    Group: "眼睛右_Luzi",
    Priority: 9,
    Left: 250,
    Top: 140,
    Blink: true,
    AllowExpression: [
        "Closed",
        "Dazed",
        "Shy",
        "Sad",
        "Horny",
        "Lewd",
        "VeryLewd",
        "Heart",
        "HeartPink",
        "LewdHeart",
        "LewdHeartPink",
        "Dizzy",
        "Daydream",
        "ShylyHappy",
        "Angry",
        "Surprised",
        "Scared",
    ],
    PreviewZone: [190, 100, 120, 120],
    Asset: [{ Name: "眼睛1", FullAlpha: false, Hide: ["Eyes2"] }],
};

export default function () {
    // AssetManager.addGroup(left_eye, {
    //     CN: "🍔左眼",
    //     EN: "🍔Left Eye",
    // });
    // AssetManager.addGroup(right_eye, {
    //     CN: "🍔右眼",
    //     EN: "🍔Right Eye",
    // });
}
