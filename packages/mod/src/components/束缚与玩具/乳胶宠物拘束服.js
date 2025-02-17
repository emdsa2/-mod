import AssetManager from "@mod-utils/AssetManager";
import { VersionSupport } from "@mod-utils/VersionSupport";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "乳胶宠物拘束服_Luzi",
    Random: false,
    Gender: "F",
    Top: 0,
    Left: 0,
    Difficulty: 12,
    SelfBondage: 8,
    Time: 40,
    RemoveTime: 30,
    AllowLock: true,
    AllowTighten: true,
    Fetish: ["Leather", "Pet"],
    Prerequisite: ["HasBreasts"],
    PoseMapping: { Kneel: "Kneel", KneelingSpread: "KneelingSpread", AllFours: "AllFours" },
    AllowActivePose: ["KneelingSpread", "BackElbowTouch", "AllFours"],
    SetPose: ["BackElbowTouch", "Kneel"],
    Effect: [E.Block, E.BlockWardrobe],
    Block: ["ItemHands", "ItemHandheld"],
    Layer: [
        { Name: "本体" },
        { Name: "束带" },
        { Name: "挂钩" },
        {
            Name: "Lock",
            ParentGroup: VersionSupport.NoParentGroup,
            LockLayer: true,
        },
    ],
};

const translations = {
    CN: "乳胶宠物拘束服",
    EN: "Latex Pet Restraint Suit",
    RU: "Латексный комбинезон для ограничения питомца",
    UA: "Латексний комбінезон-обмежувач",
};

export default function () {
    AssetManager.addAsset("ItemArms", asset, undefined, translations);
}
