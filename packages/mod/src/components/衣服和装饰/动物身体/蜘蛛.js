import AssetManager from "@mod-utils/AssetManager";
import { VersionSupport } from "@mod-utils/VersionSupport";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "蜘蛛_Luzi",
    Random: false,
    Gender: "F",
    Top: 0,
    Left: -155,
    Difficulty: 25,
    ParentGroup: VersionSupport.NoParentGroup,
    Extended: true,
    Layer: [
        {
            Name: "A1_肚衔接",
            Priority: 16,
            AllowTypes: { typed: 1 },
        },
        {
            Name: "A2_肚",
            Priority: 6,
            AllowTypes: { typed: 1 },
        },
        {
            Name: "A5_爪",
            Priority: 4,
            AllowTypes: { typed: 1 },
        },
        {
            Name: "A4_爪",
            Priority: 5,
            AllowTypes: { typed: 1 },
        },
        {
            Name: "A3_爪",
            Priority: 26,
            AllowTypes: { typed: 1 },
        },
        {
            Name: "遮罩",
            Priority: 26,
            AllowTypes: { typed: 1 },
            Alpha: [
                {
                    Group: [
                        "SuitLower",
                        "Garters",
                        "Bra",
                        "Socks",
                        "SocksRight",
                        "SocksLeft",
                        "AnkletRight",
                        "AnkletLeft",
                        "ItemFeet",
                        "ItemLegs",
                        "ItemTorso",
                        "ItemTorso2",
                        "ItemBoots",
                        "Liquid2_Luzi",
                        "身体痕迹_Luzi",
                        "BodyMarkings2_Luzi",
                        "Bra_笨笨蛋Luzi",
                        "Shoes",
                        "Shoes_笨笨蛋Luzi",
                        "ClothAccessory",
                        "ClothAccessory_笨笨蛋Luzi",
                    ],
                    Masks: [[100, 470, 300, 630]],
                    Pose: ["BaseLower", "LegsClosed", "Kneel", "KneelingSpread", "Spread", "LegsOpen"],
                },
            ],
        },

        {
            Name: "B3_爪",
            Priority: 2,
            AllowTypes: { typed: 0 },
        },
        {
            Name: "B2_爪",
            Priority: 2,
            AllowTypes: { typed: 0 },
        },
        {
            Name: "B1_爪",
            Priority: 2,
            AllowTypes: { typed: 0 },
        },
    ],
};

const extended = {
    Archetype: ExtendedArchetype.TYPED,
    DrawImages: false,
    Options: [
        {
            Name: "1",
        },
        {
            Name: "2",
            Property: {
                Hide: ["Pussy", "BodyLower"],
                OverrideHeight: {
                    Height: -200,
                    Priority: 21,
                    HeightRatioProportion: 0,
                },
            },
        },
    ],
};

/** @type {Translation.Dialog} */
const dialog = {
    CN: {
        动物身体_Luzi蜘蛛_LuziSelect: "设置",
        动物身体_Luzi蜘蛛_Luzi1: "左",
        动物身体_Luzi蜘蛛_Luzi2: "右",

        Wings蜘蛛_LuziSelect: "设置",
        Wings蜘蛛_Luzi1: "左",
        Wings蜘蛛_Luzi2: "右",
    },
    EN: {
        动物身体_Luzi蜘蛛_LuziSelect: "Select",
        动物身体_Luzi蜘蛛_Luzi1: "Left",
        动物身体_Luzi蜘蛛_Luzi2: "Right",

        Wings蜘蛛_LuziSelect: "Select",
        Wings蜘蛛_Luzi1: "Left",
        Wings蜘蛛_Luzi2: "Right",
    },
    RU: {
        动物身体_Luzi蜘蛛_LuziSelect: "Выбрать",
        动物身体_Luzi蜘蛛_Luzi1: "Лево",
        动物身体_Luzi蜘蛛_Luzi2: "Право",

        Wings蜘蛛_LuziSelect: "Выбрать",
        Wings蜘蛛_Luzi1: "Лево",
        Wings蜘蛛_Luzi2: "Право",
    },
};

const translations = {
    CN: "蜘蛛",
    EN: "Spider",
    RU: "Паук",
};

export default function () {
    // @ts-ignore
    AssetManager.addAsset("动物身体_Luzi", asset, extended, translations);
    // @ts-ignore
    AssetManager.addAsset("Wings", asset, extended, translations);
    AssetManager.addCustomDialog(dialog);
}
