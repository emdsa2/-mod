import AssetManager from "@mod-utils/AssetManager";
import { VersionSupport } from "@mod-utils/VersionSupport";

/** @type {CustomAssetDefinition} */
const assetdef = {
    Name: "迷你裤_Luzi",
    Top: 400,
    Random: false,
    DefaultColor: ["#727B91", "#FFD1A3", "#88665A"],
    PoseMapping: {
        KneelingSpread: "KneelingSpread",
        Hogtied: PoseType.HIDE,
        AllFours: PoseType.HIDE,
    },
    Layer: [
        {
            Name: "裤子",
            Priority: 36,
            ParentGroup: "BodyLower",
            PoseMapping: {
                KneelingSpread: "KneelingSpread",
                Hogtied: PoseType.HIDE,
                AllFours: PoseType.HIDE,
            },
        },
        {
            Name: "磨损",
            Priority: 36,
            ParentGroup: "BodyLower",
            PoseMapping: {
                KneelingSpread: "KneelingSpread",
                Hogtied: PoseType.HIDE,
                AllFours: PoseType.HIDE,
            },
        },
        {
            Name: "扣子",
            Priority: 36,
            ParentGroup: VersionSupport.NoParentGroup,
            PoseMapping: {
                Hogtied: PoseType.HIDE,
                AllFours: PoseType.HIDE,
            },
        },
    ],
};

/** @type {Translation.Entry} */
const translation = {
    CN: "迷你热裤",
    EN: "Mini Hotpants",
};

export default function () {
    AssetManager.addAsset(
        "ClothLower",
        {
            ...assetdef,
            Left: {
                [PoseType.DEFAULT]: 100,
                KneelingSpread: 190,
            },
        },
        undefined,
        translation
    );
    AssetManager.addAsset("Panties", { ...assetdef, Left: 100, Priority: 19 }, undefined, translation);

    /** @type {Record<string,string>} */
    const mapping = {};
    mapping[
        `Assets/Female3DCG/Panties/Preview/${assetdef.Name}.png`
    ] = `Assets/Female3DCG/ClothLower/Preview/${assetdef.Name}.png`;
    assetdef.Layer.forEach((layer) => {
        (layer.ParentGroup ? ["Small", "Normal", "Large", "XLarge"].map((s) => `_${s}`) : [""]).forEach((size) => {
            [
                ...Object.values(layer.PoseMapping)
                    .filter((pose) => pose !== PoseType.HIDE)
                    .map((p) => `/${p}`),
                "",
            ].forEach((pose) => {
                mapping[
                    `Assets/Female3DCG/Panties${pose}/${assetdef.Name}${size}_${layer.Name}.png`
                ] = `Assets/Female3DCG/ClothLower${pose}/${assetdef.Name}${size}_${layer.Name}.png`;
            });
        });
    });
    AssetManager.addImageMapping(mapping);
}
