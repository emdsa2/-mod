import AssetManager from "@mod-utils/AssetManager";
import ModManager from "@mod-utils/ModManager";

// 定义一个对象来存储不同道具的调整参数
const assetAdjustments = {
    // "缩小(地)_Luzi": { widthMultiplier: 2, heightMultiplier: 2, offsetXMultiplier: 4, offsetYMultiplier: 2 },
    缩小地上_Luzi: { widthMultiplier: 0.3, heightMultiplier: 0.3, center: { X: 0.5, Y: 1 } },
    缩小浮空_Luzi: { widthMultiplier: 0.3, heightMultiplier: 0.3, center: { X: 0.5, Y: 0 } },
    身高减10cm_Luzi: { widthMultiplier: 1 / 1.05, heightMultiplier: 1 / 1.05, center: { X: 0.5, Y: 1 } },
    身高减20cm_Luzi: { widthMultiplier: 1 / 1.08, heightMultiplier: 1 / 1.08, center: { X: 0.5, Y: 1 } },
    身高减30cm_Luzi: { widthMultiplier: 1 / 1.11, heightMultiplier: 1 / 1.11, center: { X: 0.5, Y: 1 } },
    身高减40cm_Luzi: { widthMultiplier: 1 / 1.14, heightMultiplier: 1 / 1.14, center: { X: 0.5, Y: 1 } },
};

/** @type { CustomAssetDefinitionAppearance[]} */
const assets = [
    {
        Name: "缩小地上_Luzi",
        Visible: false,
        Random: false,
        Effect: [E.Slow],
    },
    {
        Name: "缩小浮空_Luzi",
        Visible: false,
        Random: false,
    },
    {
        Name: "身高减10cm_Luzi",
        Visible: false,
        Random: false,
    },
    {
        Name: "身高减20cm_Luzi",
        Visible: false,
        Random: false,
    },
    {
        Name: "身高减30cm_Luzi",
        Visible: false,
        Random: false,
    },
    {
        Name: "身高减40cm_Luzi",
        Visible: false,
        Random: false,
    },
];

const translations = {
    CN: {
        BodyMarkings2_Luzi: {
            缩小地上_Luzi: "缩小地上",
            缩小浮空_Luzi: "缩小浮空",
            身高减10cm_Luzi: "-10cm",
            身高减20cm_Luzi: "-20cm",
            身高减30cm_Luzi: "-30cm",
            身高减40cm_Luzi: "-40cm",
        },
    },
    EN: {
        BodyMarkings2_Luzi: {
            缩小地上_Luzi: "Shrink on Ground",
            缩小浮空_Luzi: "Shrink in Air",
            身高减10cm_Luzi: "-10cm",
            身高减20cm_Luzi: "-20cm",
            身高减30cm_Luzi: "-30cm",
            身高减40cm_Luzi: "-40cm",
        },
    },
    RU: {
        BodyMarkings2_Luzi: {
            缩小地上_Luzi: "Уменьшение на земле",
            缩小浮空_Luzi: "Уменьшение в воздухе",
            身高减10cm_Luzi: "-10см",
            身高减20cm_Luzi: "-20см",
            身高减30cm_Luzi: "-30см",
            身高减40cm_Luzi: "-40см",
        },
    },
};

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

        if (!options || !options?.Width || !options?.Height) return next(args);
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

                    const center = {
                        X: X + Width * adjustment.center.X,
                        Y: Y + Height * adjustment.center.Y,
                    };

                    Width = Width * adjustment.widthMultiplier;
                    Height = Height * adjustment.heightMultiplier;

                    // 调整绘图位置和尺寸
                    X = center.X - Width * adjustment.center.X;
                    Y = center.Y - Height * adjustment.center.Y;
                }
            });
        }

        InDrawCharacter = false;
        // 调用原始的DrawImageEx函数，传入调整后的参数
        return next([source, canvas, X, Y, Object.assign(options || {}, { Width, Height })]);
    });

    AssetManager.addGroupedAssets({ BodyMarkings2_Luzi: assets }, translations);
}
