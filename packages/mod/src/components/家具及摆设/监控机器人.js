import AssetManager from "@mod-utils/AssetManager";

/** @type { CustomAssetDefinition} */
const asset = {
    Name: "监控机器人_Luzi",
    Random: false,
    Top: 150,
    Left: 366,
    Value: -1,
    Time: 15,
    Fetish: ["Metal"],
    Category: ["SciFi"],
    Audio: "FuturisticApply",
    AllowLock: true,
    Effect: [E.Tethered, E.IsChained, E.MapImmobile],
    Prerequisite: ["Collared", "NotSuspended", "NotMounted"],
    ExpressionTrigger: [
        { Name: "Medium", Group: "Blush", Timer: 15 },
        { Name: "Soft", Group: "Eyebrows", Timer: 5 },
    ],
    DefaultColor: ["#84DBFF","#B2E8FF"],
    FixedPosition: true,
    Layer: [
        {
            Top: 0,
            Left: 0,
            Name: "绳子",
            Priority: 55,
            PoseMapping: {
                AllFours: "AllFours",
                Hogtied: "Hogtied",
                Kneel: "Kneel",
                KneelingSpread: "Kneel",
                Suspension: PoseType.HIDE,
            },
        },
        {
            Top: 0,
            Left: 0,
            Name: "绳子光芒",
            Priority: 55,
            PoseMapping: {
                AllFours: "AllFours",
                Hogtied: "Hogtied",
                Kneel: "Kneel",
                KneelingSpread: "Kneel",
                Suspension: PoseType.HIDE,
            },
        },
        {
            Name: "机器人",
            AllowColorize: false,
            Priority: 55,
        },
    ],
};

export default function () {
    AssetManager.addAsset("ItemNeckRestraints", asset, undefined, {
        CN: "监控机器人",
        EN: "Surveillance Robot",
    });
}