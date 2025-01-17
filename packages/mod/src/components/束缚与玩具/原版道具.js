import AssetManager from "@mod-utils/AssetManager";
import { Tools } from "@mod-utils/Tools";

export default function () {
    AssetManager.modifyAsset("ItemMouth", "TonguePiercingGag", (group, asset) => {
        asset.Block = [];
        asset.Prerequisite = [];
    });

    // 上衣的PoseMapping默认会有各种姿势的映射，但没有手臂部分的都不需要
    // 因此可以简化为如下的形式
    // "BaseUpper": "BaseUpper" 无论是key还是value都不需要写
    /** @type {AssetPoseMapping} */
    const ArmlessDressPoseMapping = {
        AllFours: "AllFours",
        Hogtied: "Hogtied",
    };

    // AssetParsePoseMapping 是 BC 用来构建 PoseMapping 的工具函数
    AssetManager.modifyAsset("ClothAccessory", "ZipperBelt", (group, asset) => {
        /** @type {Mutable<AssetLayer>[]}*/ (asset.Layer).forEach((layer) => {
            layer.PoseMapping = AssetParsePoseMapping({ AllFours: PoseType.HIDE, Hogtied: PoseType.HIDE }, ArmlessDressPoseMapping);
        });
    });

    // 后面的修改需要修改图片资源，否则会找不到BaseUpper图层

    // AssetManager.modifyAsset("Cloth", "BabydollDress1", (group, asset) => {
    //     /** @type {Mutable<AssetLayer>[]}*/ (asset.Layer).forEach((layer) => {
    //         layer.PoseMapping = AssetParsePoseMapping(undefined, ArmlessDressPoseMapping);
    //     });
    // });

    // AssetManager.modifyAsset("Cloth", "ChineseDress1", (group, asset) => {
    //     /** @type {Mutable<AssetLayer>[]}*/ (asset.Layer).forEach((layer) => {
    //         layer.PoseMapping = AssetParsePoseMapping(
    //             {
    //                 OverTheHead: "Yoked",
    //                 Yoked: "Yoked",
    //                 Hogtied: "Hogtied",
    //             },
    //             ArmlessDressPoseMapping
    //         );
    //     });
    // });

    // AssetManager.modifyAsset("Cloth", "ChineseDress2", (group, asset) => {
    //     /** @type {Mutable<AssetLayer>[]}*/ (asset.Layer).forEach((layer) => {
    //         layer.PoseMapping = AssetParsePoseMapping(undefined, ArmlessDressPoseMapping);
    //     });
    // });

    // AssetManager.modifyAsset("Cloth", "Gown1", (group, asset) => {
    //     /** @type {Mutable<AssetLayer>[]}*/ (asset.Layer).forEach((layer) => {
    //         layer.PoseMapping = AssetParsePoseMapping(undefined, ArmlessDressPoseMapping);
    //     });
    // });

    // AssetManager.modifyAsset("Cloth", "LatexLacedSuit", (group, asset) => {
    //     /** @type {Mutable<AssetLayer>[]}*/ (asset.Layer).forEach((layer) => {
    //         layer.PoseMapping = AssetParsePoseMapping(undefined, ArmlessDressPoseMapping);
    //     });
    // });

    // AssetManager.modifyAsset("Cloth", "MistressTop", (group, asset) => {
    //     /** @type {Mutable<AssetLayer>[]}*/ (asset.Layer).forEach((layer) => {
    //         layer.PoseMapping = AssetParsePoseMapping(undefined, ArmlessDressPoseMapping);
    //     });
    // });

    // AssetManager.modifyAsset("Cloth", "SleevelessTop", (group, asset) => {
    //     /** @type {Mutable<AssetLayer>[]}*/ (asset.Layer).forEach((layer) => {
    //         layer.PoseMapping = AssetParsePoseMapping(undefined, ArmlessDressPoseMapping);
    //     });
    // });

    // AssetManager.modifyAsset("Cloth", "GrandMage", (group, asset) => {
    //     /** @type {Mutable<AssetLayer>[]}*/ (asset.Layer).forEach((layer) => {
    //         layer.PoseMapping = AssetParsePoseMapping(undefined, ArmlessDressPoseMapping);
    //     });
    // });

    // AssetManager.modifyAsset("Cloth", "SummerDress", (group, asset) => {
    //     /** @type {Mutable<AssetLayer>[]}*/ (asset.Layer).forEach((layer) => {
    //         layer.PoseMapping = AssetParsePoseMapping(
    //             {
    //                 BackCuffs: "BackCuffs",
    //                 BackElbowTouch: "BackElbowTouch",
    //                 OverTheHead: "OverTheHead",
    //                 Yoked: "Yoked",
    //             },
    //             ArmlessDressPoseMapping
    //         );
    //     });
    // });

    // AssetManager.modifyAsset("Cloth", "VirginKiller1", (group, asset) => {
    //     /** @type {Mutable<AssetLayer>[]}*/ (asset.Layer).forEach((layer) => {
    //         layer.PoseMapping = AssetParsePoseMapping(
    //             {
    //                 OverTheHead: "OverTheHead",
    //                 Yoked: "Yoked",
    //             },
    //             ArmlessDressPoseMapping
    //         );
    //     });
    // });

    // AssetManager.modifyAsset("Cloth", "WeddingDress1", (group, asset) => {
    //     /** @type {Mutable<AssetLayer>[]}*/ (asset.Layer).forEach((layer) => {
    //         layer.PoseMapping = AssetParsePoseMapping(
    //             {
    //                 OverTheHead: "OverTheHead",
    //                 Yoked: "Yoked",
    //             },
    //             ArmlessDressPoseMapping
    //         );
    //     });
    // });

    // AssetManager.modifyAsset("Cloth", "WeddingDress2", (group, asset) => {
    //     /** @type {Mutable<AssetLayer>[]}*/ (asset.Layer).forEach((layer) => {
    //         layer.PoseMapping = AssetParsePoseMapping(undefined, ArmlessDressPoseMapping);
    //     });
    // });
}
