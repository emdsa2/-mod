import AssetManager from "@mod-utils/AssetManager";
import { VersionSupport } from "@mod-utils/VersionSupport";

/** @type { CustomAssetDefinition } */
const asset = {
    Name: "折扇_Luzi",
    Random: false,
    Top: 0,
    Left: 0,
    ParentGroup: VersionSupport.NoParentGroup,
    PoseMapping: {
        TapedHands: PoseType.DEFAULT,
        Yoked: PoseType.DEFAULT,
        OverTheHead: PoseType.DEFAULT,
        BackBoxTie: PoseType.DEFAULT,
        BackElbowTouch: PoseType.DEFAULT,
        BackCuffs: PoseType.DEFAULT,
        Hogtied: PoseType.HIDE,
        AllFours: PoseType.HIDE,
    },
    DefaultColor: ["#000000", "#000000", "Default"],
    Layer: [
        {
            Name: "扇柄展开",
            Priority: 55,
            AllowTypes: { n: [1] },
        },
        {
            Name: "扇柄",
            Priority: 55,
            AllowTypes: { n: [0] },
        },
        {
            Name: "扇页展开",
            Priority: 55,
            AllowTypes: { n: [1] },
        },
    ],
};

/** @type {AssetArchetypeConfig} */
const extended = {
    Archetype: ExtendedArchetype.MODULAR,
    Modules: [
        {
            Name: "展开",
            DrawImages: false,
            Key: "n",
            Options: [{}, {}],
        },
    ],
};

/** @type {Translation.Dialog} */
const dialog = {
    CN: {
        ItemHandheld折扇_LuziSelectBase: "选择配置",
        ItemHandheld折扇_LuziSelect展开: "展开扇子",
        ItemHandheld折扇_LuziModule展开: "展开扇子",
        ItemHandheld折扇_LuziOptionn0: "关闭",
        ItemHandheld折扇_LuziOptionn1: "展开",

        ItemHandheld折扇_LuziSetn0: "SourceCharacter关闭了TargetCharacter的折扇。",
        ItemHandheld折扇_LuziSetn1: "SourceCharacter展开了TargetCharacter的折扇。",
    },
    EN: {
        ItemHandheld折扇_LuziSelectBase: "Select Configuration",
        ItemHandheld折扇_LuziSelect展开: "Open Fan",
        ItemHandheld折扇_LuziModule展开: "Open Fan",
        ItemHandheld折扇_LuziOptionn0: "Closed",
        ItemHandheld折扇_LuziOptionn1: "Opened",

        ItemHandheld折扇_LuziSetn0: "SourceCharacter closed TargetCharacter's fan.",
        ItemHandheld折扇_LuziSetn1: "SourceCharacter opened TargetCharacter's fan.",
    },
    UA: {
        ItemHandheld折扇_LuziSelectBase: "Вибрати конфігурацію",
        ItemHandheld折扇_LuziSelect展开: "Розгорнути вітрощі",
        ItemHandheld折扇_LuziModule展开: "Розгорнути вітрощі",
        ItemHandheld折扇_LuziOptionn0: "Закрито",
        ItemHandheld折扇_LuziOptionn1: "Відкрито",

        ItemHandheld折扇_LuziSetn0: "SourceCharacter закрив вітрощі TargetCharacter.",
        ItemHandheld折扇_LuziSetn1: "SourceCharacter розгорнув вітрощі TargetCharacter.",
    },
    RU: {
        ItemHandheld折扇_LuziSelectBase: "Выбрать конфигурацию",
        ItemHandheld折扇_LuziSelect展开: "Развернуть веер",
        ItemHandheld折扇_LuziModule展开: "Развернуть веер",
        ItemHandheld折扇_LuziOptionn0: "Закрыто",
        ItemHandheld折扇_LuziOptionn1: "Открыто",

        ItemHandheld折扇_LuziSetn0: "SourceCharacter закрыл веер TargetCharacter.",
        ItemHandheld折扇_LuziSetn1: "SourceCharacter открыл веер TargetCharacter.",
    },
};

const translations = {
    CN: "折扇",
    EN: "Fan",
    RU: "Веер",
    UA: "Вітрощі",
};

export default function () {
    AssetManager.addAsset("ItemHandheld", asset, extended, translations);
    AssetManager.addCustomDialog(dialog);
}











