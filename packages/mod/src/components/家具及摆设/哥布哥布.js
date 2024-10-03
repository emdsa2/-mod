import AssetManager from "@mod-utils/AssetManager";

/** @type { CustomAssetDefinition} */
const asset = {
    Name: "哥布哥布_Luzi",
    Random: false,
    Top: 580,
    Left: 250,
    Value: -1,
    Time: 15,
    Fetish: ["Metal"],
    Audio: "ChainLong",
    AllowLock: true,
    Effect: [E.Tethered, E.IsChained, E.MapImmobile],
    Prerequisite: ["Collared", "NotSuspended", "NotMounted"],
    ExpressionTrigger: [
        { Name: "Medium", Group: "Blush", Timer: 15 },
        { Name: "Soft", Group: "Eyebrows", Timer: 5 },
    ],
    FixedPosition: true,
    Layer: [
        {
            Name: "哥布林",
            AllowColorize: false,
            Priority: 55,
        },
        {
            Top: 0,
            Left: 0,
            Name: "链条",
            Priority: 55,
            PoseMapping: {
                AllFours: "AllFours",
                Hogtied: "Hogtied",
                Kneel: "Kneel",
                KneelingSpread: "Kneel",
                Suspension: PoseType.HIDE,
            },
        },
    ],
};

export default function () {
    AssetManager.addAsset("ItemNeckRestraints", asset, undefined, {
        CN: "哥布林雕像",
        EN: "Goblin Statue",
    });
}
