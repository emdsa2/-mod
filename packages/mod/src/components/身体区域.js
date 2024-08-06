import AssetManager from "../assetManager";

/** @type { CustomGroupDefinition[]} */
const groups = [
    {
        Group: "Liquid2_Luzi",
        ParentGroup: "BodyLower",
        PoseMapping: { ...AssetPoseMapping.BodyLower },
        Priority: 53,
        Left: 0,
        Top: 0,
        Asset: [
            {
                Name: "无_Luzi",
                Random: false,
            },
        ],
    },
    {
        Group: "BodyMarkings2_Luzi",
        Priority: 9,
        Clothing: true,
        Default: false,
        Random: false,
        Asset: [
            {
                Name: "无_Luzi",
                Random: false,
            },
        ],
    },
];

export default function () {
    groups.forEach((definition) => {
        AssetManager.addGroup(definition);
    });
}
