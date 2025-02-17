import AssetManager from "@mod-utils/AssetManager";
import { VersionSupport } from "@mod-utils/VersionSupport";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "膝上过夜束缚器",
    Fetish: ["Leather"],
    Left: 0,
    Top: 0,
    Difficulty: 5,
    Priority: 27,
    Time: 12,
    RemoveTime: 10,
    DefaultColor: ["#505050", "#BBBBBB"],
    Extended: false,
    AllowLock: true,
    DrawLocks: true,
    AllowTighten: true,
    Block: ["ItemBoots"],
    SetPose: ["LegsClosed"],
    Effect: [E.Slow, E.BlockWardrobe],
    AllowActivePose: ["Kneel", "Hogtied"],
    PoseMapping: {
        ...AssetPoseMapping.ItemFeet,
        LegsClosed: PoseType.DEFAULT,
        Kneel: PoseType.HIDE,
        Hogtied: PoseType.HIDE,
    },
    // Alpha: [
    //     {
    //         Group: [
    //             "Socks",
    //             "SocksRight",
    //             "SocksLeft",
    //             "SuitLower",
    //             "ItemBoots",
    //         ],
    //         Masks: [[195, 746, 110, 28]],
    //     },
    //     {
    //         Group: [
    //             "Socks",
    //             "SocksRight",
    //             "SocksLeft",
    //             "SuitLower",
    //             "ItemBoots",
    //         ],
    //         Masks: [[195, 818, 110, 28]],
    //     },
    // ],
    Layer: [
        { Name: "Straps", AllowColorize: true },
        { Name: "Details", ParentGroup: VersionSupport.NoParentGroup, AllowColorize: true },
    ],
};

const translations = {
    CN: "膝上过夜束缚器",
    EN: "Knee Overnighter"
};

export default function () {
    AssetManager.addAsset("ItemLegs", asset, null, translations);
}
