import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "女仆胸罩_Luzi",
    Random: false,
    Top: 0,
    Left: 0,
    Priority: 16, 
    Layer: [
        {
            Name: "花边",
            ParentGroup: "BodyLower",
            PoseMapping: {
                Hogtied: PoseType.DEFAULT,
                AllFours: PoseType.HIDE,
            },
        },
        {
            Name: "胸罩",
            ParentGroup: "BodyUpper",
            PoseMapping: {
                Hogtied: "Hogtied",
                AllFours: PoseType.HIDE,
            },
        },
    ],
};


/** @type {Translation.Entry} */
const translation = {
    CN: "女仆胸罩",
    EN: "Maid Bra",
};

export default function () {
    AssetManager.addAsset("Bra", asset, null, translation);
}
