import AssetManager from "@mod-utils/AssetManager";

export default function () {
    AssetManager.modifyAsset("ItemMouth", "TonguePiercingGag", (group, asset) => {
        asset.Block = [];
        asset.Prerequisite = [];
    });

    // AssetManager.modifyAsset("ItemBoots", "LeatherToeCuffs", (group, asset) => {
    //     asset.ParentGroup: null;
    // });

}
