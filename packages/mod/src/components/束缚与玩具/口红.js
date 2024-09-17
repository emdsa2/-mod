import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "口红_Luzi",
    Random: false,
    Top: 0,
    Left: 0,
    Priority: 10,
    // Extended: true,
    Layer: [
        {
            Name: "上半身", 
            ParentGroup: "BodyUpper",
            PoseMapping: {
                TapedHands: "TapedHands",
                Yoked: "Yoked",
                OverTheHead: "OverTheHead",
                BackBoxTie: "BackBoxTie",
                BackElbowTouch: "BackElbowTouch",
                BackCuffs: "BackCuffs",
                Hogtied: "Hogtied",
                AllFours: "Hide",
            },
        },
        {
            Name: "下半身", 
            ParentGroup: "BodyLower",
            PoseMapping: {
                Kneel: "Kneel",
                KneelingSpread: "KneelingSpread",
                LegsClosed: "LegsClosed",
                Spread: "Spread",
                Hogtied: "Hide",
                AllFours: "Hide",
            },
        },
        // { Name: "1", AllowTypes: { typed: [0, 1, 2, 3, 4, 5, 6, 7] } },
        // { Name: "2", AllowTypes: { typed: [1, 2, 3, 4, 5, 6, 7] } },
        // { Name: "3", AllowTypes: { typed: [2, 3, 4, 5, 6, 7] } },
        // { Name: "4", AllowTypes: { typed: [3, 4, 5, 6, 7] } },
        // { Name: "5", AllowTypes: { typed: [4, 5, 6, 7] } },
        // { Name: "6", AllowTypes: { typed: [5, 6, 7] } },
        // { Name: "7", AllowTypes: { typed: [6, 7] } },
        // { Name: "8", AllowTypes: { typed: [7] } },
    ],
};

// const extended = {
//     Archetype: ExtendedArchetype.TYPED,
//     DrawImages: false,
//     Options: [
//         { Name: "1" },
//         { Name: "2" },
//         { Name: "3" },
//         { Name: "4" },
//         { Name: "5" },
//         { Name: "6" },
//         { Name: "7" },
//         { Name: "8" },
//     ],
// };

// /** @type {Translation.Dialog} */
// const dialog = {
//     CN: {
//         身体痕迹_Luzi鞭痕_LuziSelect: "设置",
//         身体痕迹_Luzi鞭痕_Luzi1: "1",
//         身体痕迹_Luzi鞭痕_Luzi2: "2",
//         身体痕迹_Luzi鞭痕_Luzi3: "3",
//         身体痕迹_Luzi鞭痕_Luzi4: "4",
//         身体痕迹_Luzi鞭痕_Luzi5: "5",
//         身体痕迹_Luzi鞭痕_Luzi6: "6",
//         身体痕迹_Luzi鞭痕_Luzi7: "7",
//         身体痕迹_Luzi鞭痕_Luzi8: "8",
//     },
//     EN: {
//         身体痕迹_Luzi鞭痕_LuziSelect: "Select",
//         身体痕迹_Luzi鞭痕_Luzi1: "1",
//         身体痕迹_Luzi鞭痕_Luzi2: "2",
//         身体痕迹_Luzi鞭痕_Luzi3: "3",
//         身体痕迹_Luzi鞭痕_Luzi4: "4",
//         身体痕迹_Luzi鞭痕_Luzi5: "5",
//         身体痕迹_Luzi鞭痕_Luzi6: "6",
//         身体痕迹_Luzi鞭痕_Luzi7: "7",
//         身体痕迹_Luzi鞭痕_Luzi8: "8",
//     },
// };

const translations = {
    CN: "口红",
    EN: "Lipstick",
    RU: "Помада",
    UA: "Помада"
};
export default function () {
    // @ts-ignore
    AssetManager.addAsset("身体痕迹_Luzi", asset, null, translations);
    // AssetManager.addCustomDialog(dialog);
}
