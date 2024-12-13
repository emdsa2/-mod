import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "裙_Luzi",
    Random: false,
    Top: 0,
    Left: 0,
    Priority: 26,
    Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt",],
    SetPose: ["LegsClosed",],
    AllowActivePose: ["Kneel", "LegsClosed",],
    PoseMapping: {
        Hogtied: PoseType.HIDE,
        AllFours: PoseType.HIDE,
    },
    DefaultColor: ["#7F1739", "Default", "Default",],
    Layer: [
        {
            Name: "底面",
            Priority: 1,
            ParentGroup: null,
        },
        {
            Name: "上裙子", PoseMapping: {
                Kneel: "LegsClosed",
                Hogtied: PoseType.HIDE,
                AllFours: PoseType.HIDE,
            },
        },
        { Name: "下裙子", },
        {
            Name: "上拉链", PoseMapping: {
                Kneel: "LegsClosed",
                Hogtied: PoseType.HIDE,
                AllFours: PoseType.HIDE,
            },
        },
        { Name: "下拉链", },
        {
            Name: "上亮面", PoseMapping: {
                Kneel: "LegsClosed",
                Hogtied: PoseType.HIDE,
                AllFours: PoseType.HIDE,
            },
        },
        { Name: "下亮面", },
        {
            Name: "上高光", PoseMapping: {
                Kneel: "LegsClosed",
                Hogtied: PoseType.HIDE,
                AllFours: PoseType.HIDE,
            },
        },
        { Name: "下高光", },
    ],
};

/** @type {Translation.Entry} */
const translation = {
    CN: "裙子",
    EN: "裙子",
};

export default function () {
    AssetManager.addAsset("ClothLower", asset, null, translation,);
}
