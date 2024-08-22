import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "阿巴阿巴_Luzi",
    Random: false,
    Top: 0,
    Left: 0,
    ParentGroup: null,
    Extended: true,
    Fetish: ["Sadism"],
    // AllowActivity: ["ShockItem"],
    // ActivityAudio: ["Shocks"],
    PoseMapping: {
        TapedHands: "Hide",
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
        {
            Name: "鸡腿",
            Top: 0,
            Left: 0,
            AllowTypes: { typed: [3] },
        },
    ],
};

const extended = {
    Archetype: ExtendedArchetype.TYPED,
    DrawImages: false,
    Options: [{ Name: "无" }, { Name: "阿巴阿巴" }, { Name: "阿巴AK" }, { Name: "鸡腿" }],
};

/** @type {Translation.Dialog} */
const dialog = {
    CN: {
        ItemHandheld阿巴阿巴_LuziSelect: "选择阿巴阿巴配置",
        ItemHandheld阿巴阿巴_Luzi无: "无",
        ItemHandheld阿巴阿巴_Luzi阿巴阿巴: "阿巴阿巴",
        ItemHandheld阿巴阿巴_Luzi阿巴AK: "阿巴AK",
        ItemHandheld阿巴阿巴_Luzi阿巴鸡腿: "鸡腿",

        ItemHandheld阿巴阿巴_LuziSet无: "SourceCharacter移除了DestinationCharacter的阿巴阿巴.",
        ItemHandheld阿巴阿巴_LuziSet阿巴阿巴: "SourceCharacter给了DestinationCharacter一个阿巴阿巴.",
        ItemHandheld阿巴阿巴_LuziSet阿巴AK: "SourceCharacter给了DestinationCharacter一个阿巴AK.",
        ItemHandheld阿巴阿巴_LuziSet鸡腿: "SourceCharacter给了DestinationCharacter一个鸡腿.",
    },
    EN: {
        ItemHandheld阿巴阿巴_LuziSelect: "Select Aba Aba",
        ItemHandheld阿巴阿巴_Luzi无: "None",
        ItemHandheld阿巴阿巴_Luzi阿巴阿巴: "Aba Aba",
        ItemHandheld阿巴阿巴_Luzi阿巴AK: "Aba AK",
        ItemHandheld阿巴阿巴_Luzi阿巴鸡腿: "Drumstick",

        ItemHandheld阿巴阿巴_LuziSet无: "SourceCharacter removed AbaAba from DestinationCharacter.",
        ItemHandheld阿巴阿巴_LuziSet阿巴阿巴: "SourceCharacter toggled AbaAba for DestinationCharacter.",
        ItemHandheld阿巴阿巴_LuziSet阿巴AK: "SourceCharacter toggled AbaAK for DestinationCharacter.",
        ItemHandheld阿巴阿巴_LuziSet鸡腿: "SourceCharacter toggled the drumstick for DestinationCharacter.",
    },
};

const translations = { CN: "阿巴阿巴", EN: "Aba Aba" };

export default function () {
    AssetManager.addAsset("ItemHandheld", asset, extended, translations);
    AssetManager.addCustomDialog(dialog);
}
