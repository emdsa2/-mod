import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset = 			{
    Name: "TonguePiercingGag",
    Fetish: ["Leather", "Metal", "Gagged"],
    Value: 35,
    Difficulty: 4,
    Time: 15,
    AllowLock: true,
    AllowTighten: true,
    DrawLocks: false,
    Hide: ["Mouth"],
    Prerequisite: [],
    Effect: [E.GagNormal, E.OpenMouth],
    Block: [],
    DefaultColor: [
        "#1B1B1B",
        "#747474",
        "#1B1B1B",
        "#4DD6D9",
        "#CC981B",
        "#D0B145",
        "#CC981B",
        "#A2A2A2",
        "#BBA34E",
        "#DBCE5C",
        "#8F8F8F",
    ],
    Extended: true,
    Layer: [
        {
            Name: "Tongue",
            AllowColorize: false,
        },
        {
            Name: "Strap",
            AllowColorize: true,
        },
        {
            Name: "Metal",
            AllowColorize: true,
        },
        {
            Name: "MouthRing",
            AllowColorize: true,
        },
        {
            Name: "Teeth",
            AllowColorize: false,
        },
        {
            Name: "Hook",
            AllowColorize: true,
            AllowTypes: { typed: [0, 7, 8] },
        },
        {
            Name: "GagRing",
            AllowColorize: true,
            AllowTypes: { typed: [1, 2, 3] },
        },
        {
            Name: "GagRingBells",
            AllowColorize: true,
            AllowTypes: { typed: 2 },
        },
        {
            Name: "GagRingChain",
            AllowColorize: true,
            AllowTypes: { typed: 3 },
        },
        {
            Name: "Nail",
            AllowColorize: true,
            AllowTypes: { typed: 4 },
        },
        {
            Name: "PadlockGag",
            AllowColorize: true,
            AllowTypes: { typed: 5 },
        },
        {
            Name: "ClothesPeg",
            AllowColorize: true,
            AllowTypes: { typed: 6 },
        },
        {
            Name: "BitGag",
            AllowColorize: true,
            AllowTypes: { typed: 7 },
        },
        {
            Name: "BitGag2",
            AllowColorize: true,
            CopyLayerColor: "BitGag",
            AllowTypes: { typed: 8 },
        },
    ],
};

export default function () {
    AssetManager.addAsset("ItemMouth", asset, null, null);
}
