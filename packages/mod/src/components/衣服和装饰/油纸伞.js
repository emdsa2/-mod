import AssetManager from "@mod-utils/AssetManager";
import { VersionSupport } from "@mod-utils/VersionSupport";

/** @type { CustomAssetDefinition } */
const asset = {
    Name: "油纸伞",
    Random: false,
    Top: -100,
    Left: -150,
    ParentGroup: VersionSupport.NoParentGroup,
    PoseMapping: {
        TapedHands: PoseType.HIDE,
        Yoked: PoseType.HIDE,
        OverTheHead: PoseType.HIDE,
        BackBoxTie: PoseType.HIDE,
        BackElbowTouch: PoseType.HIDE,
        BackCuffs: PoseType.HIDE,
        Hogtied: PoseType.HIDE,
        AllFours: PoseType.HIDE,
    },
    DefaultColor: ["#776451", "Default", "#776451", "#C3C0BA"],
    Layer: [
        {
            Name: "伞柄",
            Priority: 55,
        },
        {
            Name: "伞暗面",
            Priority: 2,
        },
        {
            Name: "伞骨",
            Priority: 2,
        },
        {
            Name: "伞面无图案",
            Priority: 1,
            AllowTypes: { typed: 0 },
        },
        {
            Name: "伞面花1",
            Priority: 1,
            AllowTypes: { typed: 1 },
        },
        {
            Name: "伞面花2",
            Priority: 1,
            AllowTypes: { typed: 2 },
        },
        {
            Name: "伞面山水",
            Priority: 1,
            AllowTypes: { typed: 3 },
        },
        {
            Name: "伞面竹子",
            Priority: 1,
            AllowTypes: { typed: 4 },
        },
        {
            Name: "伞面卡通",
            Priority: 1,
            AllowTypes: { typed: 5 },
        },
    ],
};

/** @type {AssetArchetypeConfig} */
const extended = {
    Archetype: ExtendedArchetype.TYPED,
    DrawImages: false,
    Options: [
        { Name: "无图案" },
        { Name: "花1" },
        { Name: "花2" },
        { Name: "山水" },
        { Name: "竹子" },
        { Name: "卡通" },
    ],
};

/** @type {Translation.Dialog} */
const dialog = {
    CN: {
        ItemHandheld油纸伞Select: "选择图案",
        ItemHandheld油纸伞无图案: "无图案",
        ItemHandheld油纸伞花1: "花1",
        ItemHandheld油纸伞花2: "花2",
        ItemHandheld油纸伞山水: "山水",
        ItemHandheld油纸伞竹子: "竹子",
        ItemHandheld油纸伞卡通: "卡通",
        ItemHandheld油纸伞Set无图案: "SourceCharacter为TargetCharacter换了一把没有图案的油纸伞。",
        ItemHandheld油纸伞Set花1: "SourceCharacter为TargetCharacter换了一把花图案的油纸伞。",
        ItemHandheld油纸伞Set花2: "SourceCharacter为TargetCharacter换了一把花图案的油纸伞。",
        ItemHandheld油纸伞Set山水: "SourceCharacter为TargetCharacter换了一把山水图案的油纸伞。",
        ItemHandheld油纸伞Set竹子: "SourceCharacter为TargetCharacter换了一把竹子图案的油纸伞。",
        ItemHandheld油纸伞Set卡通: "SourceCharacter为TargetCharacter换了一把卡通图案的油纸伞。",
    },
    EN: {
        ItemHandheld油纸伞Select: "Select Pattern",
        ItemHandheld油纸伞无图案: "No Pattern",
        ItemHandheld油纸伞花1: "Flower 1",
        ItemHandheld油纸伞花2: "Flower 2",
        ItemHandheld油纸伞山水: "Landscape",
        ItemHandheld油纸伞竹子: "Bamboo",
        ItemHandheld油纸伞卡通: "Cartoon",
        ItemHandheld油纸伞Set无图案: "SourceCharacter changes TargetCharacter to an oil-paper umbrella with no pattern.",
        ItemHandheld油纸伞Set花1: "SourceCharacter changes TargetCharacter to an oil-paper umbrella with a flower pattern.",
        ItemHandheld油纸伞Set花2: "SourceCharacter changes TargetCharacter to an oil-paper umbrella with a flower pattern.",
        ItemHandheld油纸伞Set山水: "SourceCharacter changes TargetCharacter to an oil-paper umbrella with a landscape pattern.",
        ItemHandheld油纸伞Set竹子: "SourceCharacter changes TargetCharacter to an oil-paper umbrella with a bamboo pattern.",
        ItemHandheld油纸伞Set卡通: "SourceCharacter changes TargetCharacter to an oil-paper umbrella with a cartoon pattern.",
    }
}

const translations = {
    CN: "油纸伞",
    EN: "Oil-paper umbrella",
};

export default function () {
    AssetManager.addAsset("ItemHandheld", asset, extended, translations);
    AssetManager.addCustomDialog(dialog);
}











