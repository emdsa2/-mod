import AssetManager from "@mod-utils/AssetManager";
import { VersionSupport } from "@mod-utils/VersionSupport";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "南瓜盆",
    Random: false,
    Top: 0,
    Left: 0,
    Gender: "F",
    Fetish: ["Sadism"],
    Priority: 48,
    ParentGroup: VersionSupport.NoParentGroup,
    Layer: [
        {
            Name: "南瓜",
        },
        {
            Name: "糖果",
        },
        {
            Name: "眼睛",
        },
        {
            Name: "链子",
            AllowTypes: { typed: 1 },
        },
    ],
};


/** @type {AssetArchetypeConfig} */
const extended = {
    Archetype: ExtendedArchetype.TYPED,
    DrawImages: false,
    Options: [
        { Name: "无" },
        { Name: "链子" },
    ],
};

/** @type {Translation.Dialog} */
const dialog = {
    CN: {
        ItemMisc南瓜盆Select: "设置",
        ItemMisc南瓜盆无: "无",
        ItemMisc南瓜盆链子: "链子",

        ItemMisc南瓜盆Set无: "SourceCharacter取下了DestinationCharacter南瓜盆上的链子.",
        ItemMisc南瓜盆Set链子: "SourceCharacter给DestinationCharacter南瓜盆连上了一条链子.",
    },
    EN: {
        ItemMisc南瓜盆Select: "Setting",
        ItemMisc南瓜盆无: "None",
        ItemMisc南瓜盆链子: "Chain",

        ItemMisc南瓜盆Set无: "SourceCharacter removes the chain from DestinationCharacter pumpkin pot.",
        ItemMisc南瓜盆Set链子: "SourceCharacter connects a link to DestinationCharacter pumpkin pot.",
    },
};

const translations = { 
     CN: "南瓜盆",
     EN: "Pumpkin Pot" };

export default function () {
    AssetManager.addAsset("ItemMisc", asset, extended, translations);
    AssetManager.addCustomDialog(dialog);
}
