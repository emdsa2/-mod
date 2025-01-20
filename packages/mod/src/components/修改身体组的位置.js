import AssetManager from "@mod-utils/AssetManager";
import { Tools } from "@mod-utils/Tools";

export default function () {
    // 在加载完成之后，图层位置都直接写在图层属性里面了，所以这里直接调整图层位置

    AssetManager.modifyAssetLayers(
        (asset) => ["Pussy", "ItemVulva", "ItemVulvaPiercings", "ItemButt"].includes(asset.Group.Name),
        (asset, layer) => {
            // topLeftAdjust 是相对于原位置调整，如果一个图层被调整了很多次，那么调整会叠加
            // 所以这里集中所有的调整，避免重复调整

            if (["FlatChastityCage", "PlasticChastityCage", "FuturisticTrainingBelt"].includes(asset.Name)) {
                layer.DrawingTop = Tools.topLeftAdjust(layer.DrawingTop, -20);
            } else {
                layer.DrawingTop = Tools.topLeftAdjust(layer.DrawingTop, -16);
            }
        }
    );

    AssetManager.modifyAssetLayers(
        (asset) => asset.Group.Name == "Panties",
        (asset, layer) => {
            if (asset.Name == "CockSock") {
                layer.DrawingTop = Tools.topLeftOverride(layer.DrawingTop, 430);
            } else if (asset.Name == "Jockstrap") {
                layer.DrawingTop = Tools.topLeftOverride(layer.DrawingTop, 393);
            }
        }
    );

    AssetManager.modifyAssetLayers(
        (asset) => asset.Name == "StrictPonyBoots",
        (asset, layer) => {
            // 第二个参数可以指定姿势
            // layer.DrawingTop = Tools.topLeftAdjust(layer.DrawingTop, { BaseLower: -10 });

            // 也可以直接覆写
            layer.DrawingTop = Tools.topLeftOverride(layer.DrawingTop, { BaseLower: 460 });
        }
    );

    AssetManager.modifyAssetLayers(
        (asset) => asset.Name == "HarnessPanties1",
        (asset, layer) => {
            layer.DrawingTop = Tools.topLeftOverride(layer.DrawingTop, 375);
        }
    );
}
