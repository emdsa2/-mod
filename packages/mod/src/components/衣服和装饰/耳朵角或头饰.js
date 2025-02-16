import AssetManager from "@mod-utils/AssetManager";

/** @type { CustomGroupedAssetDefinitions }} */
const assets = {
    HairAccessory1: [
        {
            Name: "耳朵1_Luzi",
            Random: false,
            Top: -40,
            Left: 90,
            DefaultColor: ["#7A4646", "#888888", "#0F0F0F"],
            Layer: [
                {
                    Name: "内圈",
                    Priority: 20,
                },
                {
                    Name: "绒毛",
                    Priority: 20,
                },
                {
                    Name: "外圈",
                    Priority: 20,
                },
            ],
        },
        {
            Name: "耳朵2_Luzi",
            Random: false,
            Top: 0,
            Left: 90,
            DefaultColor: ["#916A6A", "#888888", "#917451"],
            Layer: [
                {
                    Name: "内圈",
                    Priority: 20,
                },
                {
                    Name: "绒毛",
                    Priority: 20,
                },
                {
                    Name: "外圈",
                    Priority: 20,
                },
            ],
        },
        {
            Name: "角7_Luzi",
            Random: false,
            Top: 0,
            Left: 0,
            Priority: 52,
        },
        {
            Name: "精灵耳2_Luzi",
            Random: false,
            Top: 0,
            Left: 90,
            Priority: 51,
            InheritColor: "BodyUpper",
            ColorSuffix: { HEX_COLOR: "White" },
        },
        {
            Name: "小马耳2_Luzi",
            Random: false,
            Top: 0,
            Left: 90,
        },
    ],
    HairAccessory2: [
        {
            Name: "耳朵1_Luzi",
            Random: false,
            Top: -40,
            Left: 90,
            DefaultColor: ["#7A4646", "#888888", "#0F0F0F"],
            DynamicGroupName: "HairAccessory1",
            Layer: [
                {
                    Name: "内圈",
                    Priority: 20,
                },
                {
                    Name: "绒毛",
                    Priority: 20,
                },
                {
                    Name: "外圈",
                    Priority: 20,
                },
            ],
        },
        {
            Name: "耳朵2_Luzi",
            Random: false,
            Top: 0,
            Left: 90,
            DefaultColor: ["#916A6A", "#888888", "#917451"],
            DynamicGroupName: "HairAccessory1",
            Layer: [
                {
                    Name: "内圈",
                    Priority: 20,
                },
                {
                    Name: "绒毛",
                    Priority: 20,
                },
                {
                    Name: "外圈",
                    Priority: 20,
                },
            ],
        },
        {
            Name: "角7_Luzi",
            Random: false,
            DynamicGroupName: "HairAccessory1",
            Top: 0,
            Left: 0,
            Priority: 52,
        },
        {
            Name: "精灵耳2_Luzi",
            Random: false,
            DynamicGroupName: "HairAccessory1",
            Top: 0,
            Left: 90,
            Priority: 51,
            InheritColor: "BodyUpper",
            ColorSuffix: { HEX_COLOR: "White" },
        },
        {
            Name: "小马耳2_Luzi",
            Random: false,
            Top: 0,
            Left: 90,
        },
    ],
};

/** @type { Translation.GroupedEntries } */
const translations = {
    CN: {
        HairAccessory1: {
            耳朵1_Luzi: "耳朵 1",
            耳朵2_Luzi: "耳朵 2",
            角7_Luzi: "角 7",
            小马耳2_Luzi: "小马耳 2",
        },
        HairAccessory2: {
            耳朵1_Luzi: "耳朵 1",
            耳朵2_Luzi: "耳朵 2",
            角7_Luzi: "角 7",
            小马耳2_Luzi: "小马耳 2",
        },
    },
    EN: {
        HairAccessory1: {
            耳朵1_Luzi: "Ears 1",
            耳朵2_Luzi: "Ears 2",
            角7_Luzi: "Horn 7",
            小马耳2_Luzi: "Pony Ears 2",
        },
        HairAccessory2: {
            耳朵1_Luzi: "Ears 1",
            耳朵2_Luzi: "Ears 2",
            角7_Luzi: "Horn 7",
            小马耳2_Luzi: "Pony Ears 2",
        },
    },
    RU: {
        HairAccessory1: {
            耳朵1_Luzi: "Уши 1",
            耳朵2_Luzi: "Уши 2",
            角7_Luzi: "Рог 7",
        },
        HairAccessory2: {
            耳朵1_Luzi: "Уши 1",
            耳朵2_Luzi: "Уши 2",
            角7_Luzi: "Рог 7",
        },
    },
};

export default function () {
    AssetManager.addGroupedAssets(assets, translations);
}
