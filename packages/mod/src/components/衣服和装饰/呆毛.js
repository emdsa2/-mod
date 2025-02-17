import AssetManager from "@mod-utils/AssetManager";
import { VersionSupport } from "@mod-utils/VersionSupport";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "呆毛",
    Random: false,
    Top: 0,
    Left: 150,
    Priority: 54,
    Extended: true,
    ParentGroup: VersionSupport.NoParentGroup,
    InheritColor: "HairFront",
    Layer: [
        { Name: "1", AllowTypes: { typed: 0 } },
        { Name: "1a", AllowTypes: { typed: 1 } },
        { Name: "2", AllowTypes: { typed: 2 } },
        { Name: "3", AllowTypes: { typed: 3 } },
        { Name: "4", AllowTypes: { typed: 4 } },
        { Name: "5", AllowTypes: { typed: 5 } },
    ],
};

const extended = {
    Archetype: ExtendedArchetype.TYPED,
    DrawImages: false,
    Options: [
        { Name: "1" },
        { Name: "1a" },
        { Name: "2" },
        { Name: "3" },
        { Name: "4" },
        { Name: "5" },
    ],
};

/** @type {Translation.Dialog} */
const dialog = {
    CN: {
        额外头发_Luzi呆毛Select: "设置",
        额外头发_Luzi呆毛1: "1",
        额外头发_Luzi呆毛1a: "1a",
        额外头发_Luzi呆毛2: "2",
        额外头发_Luzi呆毛3: "3",
        额外头发_Luzi呆毛4: "4",
        额外头发_Luzi呆毛5: "5",
    },
    EN: {
        额外头发_Luzi呆毛Select: "Select",
        额外头发_Luzi呆毛1: "1",
        额外头发_Luzi呆毛1a: "1a",
        额外头发_Luzi呆毛2: "2",
        额外头发_Luzi呆毛3: "3",
        额外头发_Luzi呆毛4: "4",
        额外头发_Luzi呆毛5: "5",
    },
    UA: {
        额外头发_Luzi呆毛Select: "Виберіть кількість знаків",
        额外头发_Luzi呆毛1: "1",
        额外头发_Luzi呆毛1a: "1a",
        额外头发_Luzi呆毛2: "2",
        额外头发_Luzi呆毛3: "3",
        额外头发_Luzi呆毛4: "4",
        额外头发_Luzi呆毛5: "5",
    },
};

const translations = {
    CN: "呆毛",
    EN: "Ahoge",
    RU: "Ахоге",
    UA: "Ахоге",
};

export default function () {
    // @ts-ignore
    AssetManager.addAsset("额外头发_Luzi", asset, extended, translations);
    AssetManager.addCustomDialog(dialog);
}
