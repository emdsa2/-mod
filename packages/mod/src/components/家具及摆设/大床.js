import AssetManager from "../../assetManager";

/** @type {CustomGroupedAssetDefinitions} */
const assets = {
    ItemDevices: [
        {
            Name: "床左边_Luzi",
            Random: false,
            Top: -260,
            Left: 0,
            Priority: 1,
            Difficulty: -20,
            SelfBondage: 0,
            Time: 5,
            RemoveTime: 5,
            RemoveAtLogin: true,
            OverrideHeight: { Height: 20, HeightRatioProportion: 1, Priority: 21 },
            DefaultColor: ["#523629", "#888990", "#808284"],
            RemoveItemOnRemove: [
                { Group: "ItemAddon", Name: "Covers" },
                { Group: "ItemAddon", Name: "被子左边_Luzi" },
                { Group: "ItemAddon", Name: "被子右边_Luzi" },
                { Group: "ItemAddon", Name: "BedRopes" },
                { Group: "ItemAddon", Name: "BedStraps" },
                { Group: "ItemAddon", Name: "BedTape" },
                { Group: "ItemAddon", Name: "BedChains" },
                { Group: "ItemArms", Name: "UnderBedBondageCuffs" },
                { Group: "ItemArms", Name: "MedicalBedRestraints" },
                { Group: "ItemArms", Name: "HempRope", Type: "BedSpreadEagle" },
                { Group: "ItemLegs", Name: "MedicalBedRestraints" },
                { Group: "ItemFeet", Name: "HempRope", Type: "BedSpreadEagle" },
                { Group: "ItemFeet", Name: "MedicalBedRestraints" },
            ],
            Effect: ["Mounted", "OnBed"],
            Layer: [{ Name: "骨架" }, { Name: "床垫" }, { Name: "枕头" }],
        },
        {
            Name: "床右边_Luzi",
            Random: false,
            Top: -260,
            Left: -110,
            Priority: 1,
            Difficulty: -20,
            SelfBondage: 0,
            Time: 5,
            RemoveTime: 5,
            RemoveAtLogin: true,
            DefaultColor: ["#523629", "#888990", "#808284"],
            OverrideHeight: { Height: 20, HeightRatioProportion: 1, Priority: 21 },
            RemoveItemOnRemove: [
                { Group: "ItemAddon", Name: "Covers" },
                { Group: "ItemAddon", Name: "被子左边_Luzi" },
                { Group: "ItemAddon", Name: "被子右边_Luzi" },
                { Group: "ItemAddon", Name: "BedRopes" },
                { Group: "ItemAddon", Name: "BedStraps" },
                { Group: "ItemAddon", Name: "BedTape" },
                { Group: "ItemAddon", Name: "BedChains" },
                { Group: "ItemArms", Name: "UnderBedBondageCuffs" },
                { Group: "ItemArms", Name: "MedicalBedRestraints" },
                { Group: "ItemArms", Name: "HempRope", Type: "BedSpreadEagle" },
                { Group: "ItemLegs", Name: "MedicalBedRestraints" },
                { Group: "ItemFeet", Name: "HempRope", Type: "BedSpreadEagle" },
                { Group: "ItemFeet", Name: "MedicalBedRestraints" },
            ],
            Effect: ["Mounted", "OnBed"],
            Layer: [{ Name: "骨架" }, { Name: "床垫" }, { Name: "枕头" }],
        },
    ],
};

export default function () {
    AssetManager.addGroupedAssets(assets);
}
