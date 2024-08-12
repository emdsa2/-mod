import AssetManager from "../../assetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "玩偶_Luzi",
    Random: false,
    Top: 0,
    Left: 0,
    ParentGroup: null,
    Value: -1,
    Priority: 24,
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
            Name: "Ada",
            Top: 0,
            Left: 0,
            AllowTypes: { typed: [1] }
        },
        {
            Name: "Luzi",
            Top: 0,
            Left: 0,
            AllowTypes: { typed: [2] }
        },
        {
            Name: "Saki",
            Top: 0,
            Left: 0,
            AllowTypes: { typed: [3] }
        },
    ],
};

const extended = {
    Archetype: ExtendedArchetype.TYPED,
    DrawImages: false,
    Options: [{ Name: "无" }, { Name: "Ada" }, { Name: "Luzi" }, { Name: "Saki" }],
};

/** @type {Translation.Dialog} */
const dialog = {
    CN: {
        ItemMisc玩偶_LuziSelect: "选择玩偶",
        ItemMisc玩偶_Luzi无: "无",
        ItemMisc玩偶_LuziAda: "Ada",
        ItemMisc玩偶_LuziLuzi: "Luzi",
        ItemMisc玩偶_LuziSaki: "Saki",
        
        ItemMisc玩偶_LuziSet无: "SourceCharacter移除了DestinationCharacter手里的玩偶.",
        ItemMisc玩偶_LuziSetAda: "SourceCharacter给了DestinationCharacter一只Ada玩偶.",
        ItemMisc玩偶_LuziSetLuzi: "SourceCharacter给了DestinationCharacter一只Luzi玩偶.",
        ItemMisc玩偶_LuziSetSaki: "SourceCharacter给了DestinationCharacter一只Saki玩偶.",
    },
    EN: {
        ItemMisc玩偶_LuziSelect: "Select doll",
        ItemMisc玩偶_Luzi无: "None",
        ItemMisc玩偶_LuziAda: "Ada",
        ItemMisc玩偶_LuziLuzi: "Luzi",
        ItemMisc玩偶_LuziSaki: "Saki",

        ItemMisc玩偶_LuziSet无: "SourceCharacter移除了DestinationCharacter手里的玩偶.",
        ItemMisc玩偶_LuziSetAda: "SourceCharacter给了DestinationCharacter一只Ada玩偶.",
        ItemMisc玩偶_LuziSetLuzi: "SourceCharacter给了DestinationCharacter一只Luzi玩偶.",
        ItemMisc玩偶_LuziSetSaki: "SourceCharacter给了DestinationCharacter一只Saki玩偶.",
    },
};

const translations = { CN: "玩偶", EN: "doll" };

export default function () {
    AssetManager.addAsset("ItemMisc", asset, extended, translations);
    AssetManager.addCustomDialog(dialog);
}