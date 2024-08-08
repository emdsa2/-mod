import AssetManager from "../../assetManager";

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
    ChatTags: [CommonChatTags.SOURCE_CHAR, CommonChatTags.TARGET_CHAR],
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
    "Screens/Inventory/ItemDevices/窝瓜_Luzi/没盖子.png": "https://emdsa2.github.io/-mod/image/空.png",
    "Screens/Inventory/ItemDevices/窝瓜_Luzi/有盖子.png": "https://emdsa2.github.io/-mod/image/空.png",
};

/** @type {TranslationCustomDialog} */
const dialog = {
    CN: {
        ItemDevices窝瓜_LuziSelect: "选择窝配置",

        ItemDevices窝瓜_LuziSet没盖子: "SourceCharacter推开了DestinationCharacter的盖子",
        ItemDevices窝瓜_LuziSet有盖子: "SourceCharacter盖上了DestinationCharacter的盖子",
    },
    EN: {
        ItemDevices窝瓜_LuziSelect: "Select Configuration",
        ItemDevices窝瓜_LuziSet没盖子: "SourceCharacter pushes open the lid of DestinationCharacter.",
        ItemDevices窝瓜_LuziSet有盖子: "SourceCharacter covers DestinationCharacter with a lid.",
    },
};

const translations = { CN: "窝瓜", EN: "Pumpkin" };

export default function () {
    AssetManager.addAsset("ItemDevices", asset, extended, translations);
    AssetManager.addCustomDialog(dialog);
    AssetManager.addImgMapping(icons);
}
