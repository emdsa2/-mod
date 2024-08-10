import AssetManager from "../assetManager";
import ModManager from "../modManager";

const reduceTag1 = "缩小(地)_Luzi";
const reduceTag2 = "缩小(空)_Luzi";

// 定义一个对象来存储不同道具的调整参数
const assetAdjustments = {
    // "缩小(地)_Luzi": { widthMultiplier: 2, heightMultiplier: 2, offsetXMultiplier: 4, offsetYMultiplier: 2 },
    [reduceTag1]: { widthMultiplier: 3, heightMultiplier: 3, offsetXMultiplier: 6, offsetYMultiplier: 1.5 },
    [reduceTag2]: { widthMultiplier: 3, heightMultiplier: 3, offsetXMultiplier: 6, offsetYMultiplier: 10 },
};

/** @type {CustomAssetDefinition[]} */
const assets = [
    {
        Name: reduceTag1,
        Visible: false,
        Random: false,
        Effect: [E.Slow],
    },
    {
        Name: reduceTag2,
        Visible: false,
        Random: false,
    },
];

export default function () {
    // ================================================================================
    // ================================================================================
    // 好厉害的Saki！
    // 定义一个布尔变量，用于标记是否处于绘制角色的过程中
    let InDrawCharacter = false;

    // 定义一个变量，用于存储当前正在绘制的角色引用
    let CurrentDrawCharacter = null;

    ModManager.hookFunction("DrawCharacter", 10, (args, next) => {
        // 标记开始绘制角色
        InDrawCharacter = true;
        // 存储当前绘制的角色
        CurrentDrawCharacter = args[0];
        // 继续执行原始的DrawCharacter函数
        next(args);
        // 绘制完成后，清除当前角色引用
        CurrentDrawCharacter = null;
        // 标记结束绘制角色
        InDrawCharacter = false;
    });

    ModManager.hookFunction("DrawImageEx", 10, (args, next) => {
        let [source, canvas, X, Y, options] = args;

        if (!options?.Width || !options?.Height) return next(args);
        let Width = options.Width;
        let Height = options.Height;

        // 如果当前处于绘制角色的过程中
        if (InDrawCharacter) {
            // 检查当前角色的所有道具
            CurrentDrawCharacter.Appearance.forEach((asset) => {
                const adjustment = assetAdjustments[asset.Asset.Name];
                if (adjustment) {
                    // 如果绘图对象未定义，则初始化为空对象
                    if (options == undefined) options = {};

                    // 调整绘图位置和尺寸
                    X = X + Width / adjustment.offsetXMultiplier;
                    Y = Y + Height / adjustment.offsetYMultiplier;

                    Width = Width / adjustment.widthMultiplier;
                    Height = Height / adjustment.heightMultiplier;

                    // 更新绘图对象的宽度和高度
                    Object.assign(options, { Width, Height });
                }
            });
        }

        InDrawCharacter = false;
        // 调用原始的DrawImageEx函数，传入调整后的参数
        return next([source, canvas, X, Y, options]);
    });

    AssetManager.addGroupedAssets({ BodyMarkings2_Luzi: assets });
}
