import AssetManager from "@mod-utils/AssetManager";
import { Tools } from "@mod-utils/Tools";
import { Path } from "@mod-utils/path";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "窝瓜_Luzi",
    Random: false,
    Top: 140,
    Left: 0,
    Fetish: ["Pet"],
    Difficulty: -25,
    AllowLock: true,
    SelfBondage: 0,
    Time: 5,
    RemoveTime: 5,
    Effect: [E.Tethered],
    RemoveAtLogin: true,
    SetPose: ["Kneel"],
    AllowActivePose: [...PoseAllKneeling, "AllFours", "Hogtied"],
    FixedPosition: true,
    Extended: true,
    PoseMapping: {
        AllFours: "AllFours",
        Hogtied: "AllFours",
    },
    Layer: [
        { Name: "后", Priority: 1 },
        { Name: "前", Priority: 58 },
        { Name: "灯", Priority: 57 },
        { Name: "盖", Priority: 2 },
        {
            Name: "盖1",
            Priority: 58,
            AllowTypes: { typed: 1 },
        },
    ],
};

/** @type {AssetArchetypeConfig} */
const extended = {
    Archetype: ExtendedArchetype.TYPED,
    ChatTags: Tools.CommonChatTags(),
    DrawImages: false,
    Options: [
        {
            Name: "没盖子",
        },
        {
            Name: "有盖子",
            Property: {
                SetPose: ["AllFours"],
                AllowActivePose: ["Hogtied"],
                Hide: ["ItemArms", "ItemButt", "TailStraps", "Wings"],
                HideItem: ["ItemMiscTeddyBear"],
                HideItemExclude: ["ItemArmsBitchSuit", "ItemArmsBitchSuitExposed", "ItemArmsShinyPetSuit"],
                Block: [
                    "ItemArms",
                    "ItemBreast",
                    "ItemButt",
                    "ItemFeet",
                    "ItemBoots",
                    "ItemLegs",
                    "ItemMisc",
                    "ItemNipples",
                    "ItemNipplesPiercings",
                    "ItemPelvis",
                    "ItemTorso",
                    "ItemVulva",
                    "ItemVulvaPiercings",
                ],
            },
            Random: false,
        },
    ],
};

/** @type {Record<string, string>} */
const icons = {
    "Screens/Inventory/ItemDevices/窝瓜_Luzi/没盖子.png": Path.空png,
    "Screens/Inventory/ItemDevices/窝瓜_Luzi/有盖子.png": Path.空png,
};

/** @type {Translation.Dialog} */
const dialog = {
    CN: {
        ItemDevices窝瓜_LuziSelect: "选择窝配置",
        ItemDevices窝瓜_Luzi没盖子: "推开盖子",
        ItemDevices窝瓜_Luzi有盖子: "盖上盖子",
        ItemDevices窝瓜_LuziSet没盖子: "SourceCharacter推开了DestinationCharacterAssetName的盖子",
        ItemDevices窝瓜_LuziSet有盖子: "SourceCharacter为DestinationCharacterAssetName盖上了盖子",
    },
    EN: {
        ItemDevices窝瓜_LuziSelect: "Select Configuration",
        ItemDevices窝瓜_Luzi没盖子: "Push open the lid",
        ItemDevices窝瓜_Luzi有盖子: "Close the lid",
        ItemDevices窝瓜_LuziSet没盖子: "SourceCharacter pushed open the lid of DestinationCharacter AssetName.",
        ItemDevices窝瓜_LuziSet有盖子: "SourceCharacter closed the lid of DestinationCharacter AssetName.",
    },
    RU: {
        ItemDevices窝瓜_LuziSelect: "Выбрать конфигурацию",
        ItemDevices窝瓜_Luzi没盖子: "Открыть крышку",
        ItemDevices窝瓜_Luzi有盖子: "Закрыть крышку",
        ItemDevices窝瓜_LuziSet没盖子: "SourceCharacter открыл крышку DestinationCharacter AssetName.",
        ItemDevices窝瓜_LuziSet有盖子: "SourceCharacter закрыл крышку DestinationCharacter AssetName.",
    },
};

const translations = {
    CN: "窝瓜",
    EN: "Pumpkin",
    RU: "Тыква",
};

export default function () {
    AssetManager.addAsset("ItemDevices", asset, extended, translations);
    AssetManager.addCustomDialog(dialog);
    AssetManager.addImageMapping(icons);
}
