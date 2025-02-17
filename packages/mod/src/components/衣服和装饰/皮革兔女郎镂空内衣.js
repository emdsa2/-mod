import AssetManager from "@mod-utils/AssetManager";
import { VersionSupport } from "@mod-utils/VersionSupport";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "皮革兔女郎镂空内衣",
    Random: false,
    Top: 0,
    Left: 0,
    Priority: 21,
    Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"],
    DefaultColor: [
        "Default",
        "#111111",
        "Default",
        "#111111",
        "Default",
        "#111111",
        "Default",
        "#111111",
        "Default",
        "Default",
    ],
    PoseMapping: {
        Hogtied: PoseType.HIDE,
        AllFours: PoseType.HIDE,
    },
    Layer: [
        {
            Name: "圆环",
            ParentGroup: VersionSupport.NoParentGroup,
        },
        {
            Name: "连接",
        },
        {
            Name: "连接反光",
        },
        {
            Name: "胸罩带",
        },
        {
            Name: "胸罩带反光",
        },
        {
            Name: "胸罩",
        },
        {
            Name: "胸罩反光",
        },
        {
            Name: "皮革带",
        },
        {
            Name: "皮革带反光",
        },
        {
            Name: "拉链",
            ParentGroup: VersionSupport.NoParentGroup,
        },
    ],
};

/** @type {Translation.Entry} */
const translation = {
    CN: "皮革兔女郎镂空内衣",
    EN: "Leather Bunny Hollow Bra",
};


export default function () {
    AssetManager.addAsset("Bra", asset, null, translation);
}
