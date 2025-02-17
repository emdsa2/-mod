import AssetManager from "@mod-utils/AssetManager";
import { VersionSupport } from "@mod-utils/VersionSupport";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "皮革中空短裙",
    Random: false,
    Top: 0,
    Left: 0,
    Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"],
    PoseMapping: {
        Hogtied: PoseType.HIDE,
        AllFours: PoseType.HIDE,
    },
    ParentGroup: VersionSupport.NoParentGroup,
    Layer: [
        {
            Name: "底",
            Priority: 26,
        },
        {
            Name: "反光",
            Priority: 26,
        },
    ],
};

/** @type {Translation.Entry} */
const translation = {
    CN: "皮革中空短裙",
    EN: "Leather midriff skirt",
};

export default function () {
    AssetManager.addAsset(
        "ClothLower",
        {
            ...asset,
            Left: {
                [PoseType.DEFAULT]: 0,
                KneelingSpread: 90,
            },
        },
        undefined,
        translation
    );
}
