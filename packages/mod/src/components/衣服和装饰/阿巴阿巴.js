import AssetManager from "@mod-utils/AssetManager";
import { VersionSupport } from "@mod-utils/VersionSupport";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "阿巴阿巴_Luzi",
    Random: false,
    Top: 0,
    Left: 0,
    ParentGroup: VersionSupport.NoParentGroup,
    Extended: true,
    Fetish: ["Sadism"],
    // AllowActivity: ["ShockItem"],
    // ActivityAudio: ["Shocks"],
    PoseMapping: {
        TapedHands: PoseType.DEFAULT,
        Yoked: "Hide",
        OverTheHead: "Hide",
        BackBoxTie: "Hide",
        BackElbowTouch: "Hide",
        BackCuffs: "Hide",
        AllFours: "Hide",
    },
    Layer: [
        {
            Name: "阿巴",
            Top: -110,
            Left: 0,
            AllowTypes: { typed: [1] },
        },
        {
            Name: "AK",
            Top: 0,
            Left: 0,
            AllowTypes: { typed: [2] },
        },
    ],
};

const extended = {
    Archetype: ExtendedArchetype.TYPED,
    DrawImages: false,
    Options: [{ Name: "无" }, { Name: "阿巴阿巴" }, { Name: "阿巴AK" },],
};

/** @type {Translation.Dialog} */
const dialog = {
    CN: {
        ItemHandheld阿巴阿巴_LuziSelect: "选择阿巴阿巴配置",
        ItemHandheld阿巴阿巴_Luzi无: "无",
        ItemHandheld阿巴阿巴_Luzi阿巴阿巴: "阿巴阿巴",
        ItemHandheld阿巴阿巴_Luzi阿巴AK: "阿巴AK",

        ItemHandheld阿巴阿巴_LuziSet无: "SourceCharacter移除了TargetCharacter的阿巴阿巴.",
        ItemHandheld阿巴阿巴_LuziSet阿巴阿巴: "SourceCharacter给了TargetCharacter一个阿巴阿巴.",
        ItemHandheld阿巴阿巴_LuziSet阿巴AK: "SourceCharacter给了TargetCharacter一个阿巴AK.",
    },
    EN: {
        ItemHandheld阿巴阿巴_LuziSelect: "Select Aba Aba",
        ItemHandheld阿巴阿巴_Luzi无: "None",
        ItemHandheld阿巴阿巴_Luzi阿巴阿巴: "Aba Aba",
        ItemHandheld阿巴阿巴_Luzi阿巴AK: "Aba AK",

        ItemHandheld阿巴阿巴_LuziSet无: "SourceCharacter removed AbaAba from TargetCharacter.",
        ItemHandheld阿巴阿巴_LuziSet阿巴阿巴: "SourceCharacter toggled AbaAba for TargetCharacter.",
        ItemHandheld阿巴阿巴_LuziSet阿巴AK: "SourceCharacter toggled AbaAK for TargetCharacter.",
    },
};

const translations = { CN: "阿巴阿巴", EN: "Aba Aba" };

export default function () {
    AssetManager.addAsset("ItemHandheld", asset, extended, translations);
    AssetManager.addCustomDialog(dialog);
}
