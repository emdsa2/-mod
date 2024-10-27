import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "白布_Luzi",
    Random: false,
    Gender: "F",
    Top: 0,
    Left: 0,
    ParentGroup : null,
    Hide: ["HairFront"],
    AllowActivePose: ["BaseUpper", "BackBoxTie", "BackCuffs", "BackElbowTouch","Yoked", "Hogtied", "AllFours"],
    SetPose: ["Yoked"],
    PoseMapping: {
        Yoked: "Yoked",
    },
    Layer: [
        { Name: "前", Priority: 61 },
        { Name: "后", Priority: 5 },
        { Name: "图案", Priority: 61 },
    ],
};


const translations = {
    CN: "白布",
    EN: "Transparent raincoat",
};


export default function () {
    AssetManager.addAsset("Cloth", asset, null, translations);
}
