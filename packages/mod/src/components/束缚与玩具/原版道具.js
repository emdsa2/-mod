import AssetManager from "@mod-utils/AssetManager";

export default function () {
    AssetManager.modifyAsset("ItemMouth", "TonguePiercingGag", (group, asset) => {
        asset.Block = [];
        asset.Prerequisite = [];
    });

    // AssetManager.modifyAsset("ItemBoots", "LeatherToeCuffs", (group, asset) => {
    //     asset.ParentGroup: null;
    // });

    AssetManager.modifyAsset("ClothAccessory", "ZipperBelt", (group, asset) => {
        asset.PoseMapping = {
            BackBoxTie: "BaseUpper",
            BackCuffs: "BaseUpper",
            BackElbowTouch: "BaseUpper",
            OverTheHead: "BaseUpper",
            TapedHands: "BaseUpper",
            Yoked: "BaseUpper",
            AllFours: PoseType.HIDE,
            Hogtied: PoseType.HIDE,
        };
    });

    AssetManager.modifyAsset("Cloth", "BabydollDress1", (group, asset) => {
        asset.PoseMapping = {
            BackBoxTie: "BaseUpper",
            BackCuffs: "BaseUpper",
            BackElbowTouch: "BaseUpper",
            OverTheHead: "BaseUpper",
            TapedHands: "BaseUpper",
            Yoked: "BaseUpper",
            AllFours: PoseType.HIDE,
            Hogtied: "Hogtied",
        };
    });
    
    AssetManager.modifyAsset("Cloth", "ChineseDress1", (group, asset) => {
        asset.PoseMapping = {
            BackBoxTie: "BaseUpper",
            BackCuffs: "BaseUpper",
            BackElbowTouch: "BaseUpper",
            OverTheHead: "Yoked",
            TapedHands: "BaseUpper",
            Yoked: "Yoked",
            AllFours: PoseType.HIDE,
            Hogtied: "Hogtied",
        };
    });

    AssetManager.modifyAsset("Cloth", "ChineseDress2", (group, asset) => {
        asset.PoseMapping = {
            BackBoxTie: "BaseUpper",
            BackCuffs: "BaseUpper",
            BackElbowTouch: "BaseUpper",
            OverTheHead: "BaseUpper",
            TapedHands: "BaseUpper",
            Yoked: "BaseUpper",
            AllFours: PoseType.HIDE,
            Hogtied: "Hogtied",
        };
    });

    AssetManager.modifyAsset("Cloth", "Gown1", (group, asset) => {
        asset.PoseMapping = {
            BackBoxTie: "BaseUpper",
            BackCuffs: "BaseUpper",
            BackElbowTouch: "BaseUpper",
            OverTheHead: "BaseUpper",
            TapedHands: "BaseUpper",
            Yoked: "BaseUpper",
            AllFours: PoseType.HIDE,
            Hogtied: "Hogtied",
        };
    });

    AssetManager.modifyAsset("Cloth", "LatexLacedSuit", (group, asset) => {
        asset.PoseMapping = {
            BackBoxTie: "BaseUpper",
            BackCuffs: "BaseUpper",
            BackElbowTouch: "BaseUpper",
            OverTheHead: "BaseUpper",
            TapedHands: "BaseUpper",
            Yoked: "BaseUpper",
            AllFours: PoseType.HIDE,
            Hogtied: "Hogtied",
        };
    });
    
    AssetManager.modifyAsset("Cloth", "MistressTop", (group, asset) => {
        asset.PoseMapping = {
            BackBoxTie: "BaseUpper",
            BackCuffs: "BaseUpper",
            BackElbowTouch: "BaseUpper",
            OverTheHead: "BaseUpper",
            TapedHands: "BaseUpper",
            Yoked: "BaseUpper",
            AllFours: PoseType.HIDE,
            Hogtied: "Hogtied",
        };
    });

    AssetManager.modifyAsset("Cloth", "SleevelessTop", (group, asset) => {
        asset.PoseMapping = {
            BackBoxTie: "BaseUpper",
            BackCuffs: "BaseUpper",
            BackElbowTouch: "BaseUpper",
            OverTheHead: "BaseUpper",
            TapedHands: "BaseUpper",
            Yoked: "BaseUpper",
            AllFours: PoseType.HIDE,
            Hogtied: "Hogtied",
        };
    });
    
    AssetManager.modifyAsset("Cloth", "GrandMage", (group, asset) => {
        asset.PoseMapping = {
            BackBoxTie: "BaseUpper",
            BackCuffs: "BaseUpper",
            BackElbowTouch: "BaseUpper",
            OverTheHead: "BaseUpper",
            TapedHands: "BaseUpper",
            Yoked: "BaseUpper",
            AllFours: PoseType.HIDE,
            Hogtied: "Hogtied",
        };
    });

    AssetManager.modifyAsset("Cloth", "SummerDress", (group, asset) => {
        // asset.Priority = 27,
        asset.PoseMapping = {
            BackBoxTie: "BaseUpper",
            BackCuffs: "BackCuffs",
            BackElbowTouch: "BackElbowTouch",
            OverTheHead: "OverTheHead",
            TapedHands: "BaseUpper",
            Yoked: "Yoked",
            AllFours: PoseType.HIDE,
            Hogtied: "Hogtied",
        };
    });

    AssetManager.modifyAsset("Cloth", "VirginKiller1", (group, asset) => {
        asset.PoseMapping = {
            BackBoxTie: "BaseUpper",
            BackCuffs: "BaseUpper",
            BackElbowTouch: "BaseUpper",
            OverTheHead: "OverTheHead",
            TapedHands: "BaseUpper",
            Yoked: "Yoked",
            AllFours: PoseType.HIDE,
            Hogtied: "Hogtied",
        };
    });
    
    AssetManager.modifyAsset("Cloth", "WeddingDress1", (group, asset) => {
        asset.PoseMapping = {
            BackBoxTie: "BaseUpper",
            BackCuffs: "BaseUpper",
            BackElbowTouch: "BaseUpper",
            OverTheHead: "OverTheHead",
            TapedHands: "BaseUpper",
            Yoked: "Yoked",
            AllFours: PoseType.HIDE,
            Hogtied: "Hogtied",
        };
    });

    AssetManager.modifyAsset("Cloth", "WeddingDress2", (group, asset) => {
        asset.PoseMapping = {
            BackBoxTie: "BaseUpper",
            BackCuffs: "BaseUpper",
            BackElbowTouch: "BaseUpper",
            OverTheHead: "BaseUpper",
            TapedHands: "BaseUpper",
            Yoked: "BaseUpper",
            AllFours: PoseType.HIDE,
            Hogtied: "Hogtied",
        };
    });
}
