import AssetManager from "@mod-utils/AssetManager";
import { Tools } from "@mod-utils/Tools";

export default function () {
    // 在加载完成之后，图层位置都直接写在图层属性里面了，所以这里直接调整图层位置
    AssetManager.modifyAssetLayers(
        (asset) => asset.Group.Name == "Pussy",
        (asset, layer) => {
            // 可以根据 asset.Name layer.Name 来判断是哪个图层
            layer.DrawingTop = Tools.topLeftAdjust(layer.DrawingTop, -16);
        }
    );

    AssetManager.modifyAssetLayers(
        (asset) => asset.Group.Name == "ItemVulva",
        (asset, layer) => {
            layer.DrawingTop = Tools.topLeftAdjust(layer.DrawingTop, -16);
        }
    );
    AssetManager.modifyAssetLayers(
        (asset) => asset.Group.Name == "ItemVulva",
        (asset,layer)=>{
            if(layer.Name == "FlatChastityCage")
                layer.DrawingTop = Tools.topLeftAdjust(layer.DrawingTop, -20);
            if(layer.Name == "PlasticChastityCage")
                layer.DrawingTop = Tools.topLeftAdjust(layer.DrawingTop, -20);
        }
    );

    AssetManager.modifyAssetLayers(
        (asset) => asset.Group.Name == "ItemVulvaPiercings",
        (asset, layer) => {
            layer.DrawingTop = Tools.topLeftAdjust(layer.DrawingTop, -16);
        }
    );

    AssetManager.modifyAssetLayers(
        (asset) => asset.Group.Name == "ItemButt",
        (asset, layer) => {
            layer.DrawingTop = Tools.topLeftAdjust(layer.DrawingTop, -16);
        }
    );
    
    AssetManager.modifyAssetLayers(
        (asset) => asset.Group.Name == "ItemPelvis",
        (asset,layer)=>{
            if(layer.Name == "FuturisticTrainingBelt")
                layer.DrawingTop = Tools.topLeftAdjust(layer.DrawingTop, -20);
            if(layer.Name == "HarnessPanties1")
                layer.DrawingTop = Tools.topLeftAdjust(layer.DrawingTop, -20);
        }
    );

    
};
