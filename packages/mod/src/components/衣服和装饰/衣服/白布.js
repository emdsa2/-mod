import AssetManager from "@mod-utils/AssetManager";
import { VersionSupport } from "@mod-utils/VersionSupport";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "白布_Luzi",
    Random: false,
    Gender: "F",
    Top: 0,
    Left: 0,
    ParentGroup: VersionSupport.NoParentGroup,
    Hide: ["HairFront"],
    AllowActivePose: ["BaseUpper", "BackBoxTie", "BackCuffs", "BackElbowTouch", "Yoked", "Hogtied", "AllFours"],
    PoseMapping: {
        Yoked: "Yoked",
    },
    Layer: [
        { Name: "前", Priority: 50 },
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
