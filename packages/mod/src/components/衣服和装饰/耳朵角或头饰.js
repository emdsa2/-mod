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
    ],
    HairAccessory2: [
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
    ],
};

/** @type { Translation.GroupedEntries } */
const translations = {
    CN: {
        HairAccessory1: {
            耳朵1_Luzi: "耳朵1",
            耳朵2_Luzi: "耳朵2",
        },
        HairAccessory2: {
            耳朵1_Luzi: "耳朵1",
            耳朵2_Luzi: "耳朵2",
        },
    },
    EN: {
        HairAccessory1: {
            耳朵1_Luzi: "Ears1",
            耳朵2_Luzi: "Ears2",
        },
        HairAccessory2: {
            耳朵1_Luzi: "Ears1",
            耳朵2_Luzi: "Ears2",
        },
    },
};

export default function () {
    AssetManager.addGroupedAssets(assets, translations);
}
