import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "斩标_Luzi",
    Random: false,
    Top: -430,
    Left: 0,
    Extended: true,
    Fetish: ["Sadism"],
    Layer: [
        {
            Name: "牌子",
            Priority: 1,
        },
        {
            Name: "笨蛋",
            Priority: 2,
            AllowTypes: { typed: [1] },
        },
    ],
};

const extended = {
    Archetype: ExtendedArchetype.TYPED,
    DrawImages: false,
    Options: [{ Name: "无" }, { Name: "笨蛋" }],
};

/** @type {Translation.Dialog} */
const dialog = {
    CN: {
        ItemMisc斩标_LuziSelect: "选择斩标文字",
        ItemMisc斩标_Luzi无: "无",
        ItemMisc斩标_Luzi笨蛋: "笨蛋",

        ItemMisc斩标_LuziSet无: "SourceCharacter擦掉了DestinationCharacter斩标上的字.",
        ItemMisc斩标_LuziSet笨蛋: "SourceCharacter在DestinationCharacter斩标上写上了笨蛋.",
    },
    EN: {
        ItemMisc斩标_LuziSelect: "Select Aba Aba",
        ItemMisc斩标_Luzi无: "None",
        ItemMisc斩标_Luzi笨蛋: "笨蛋",

        ItemMisc斩标_LuziSet无: "SourceCharacter erased the words on DestinationCharacter ChanBiao.",
        ItemMisc斩标_LuziSet笨蛋: "SourceCharacter wrote 'BenDiao' on DestinationCharacter ChanBiao.",
    },
};

const translations = { CN: "斩标", EN: "Behead Marking" };

export default function () {
    AssetManager.addAsset("ItemMisc", asset, extended, translations);
    AssetManager.addCustomDialog(dialog);
}
