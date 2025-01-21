import AssetManager from "@mod-utils/AssetManager";
import ModManager from "@mod-utils/ModManager";

const NamePrefix = ((prefix) => prefix + Math.random().toString(16).substring(2))("生化人体");

/**
 *
 * @param {Character} C
 * @param {Asset} asset
 * @param {Number} width
 * @param {Number} height
 * @param {string} suffix
 * @returns
 */
function customTempCanvas(C, asset, width, height, suffix) {
    const canvas = document.createElement("canvas");
    canvas.setAttribute("name", `${NamePrefix}__${C.CharacterID}__${asset.Group.Name}__${asset.Name}__${suffix}`);
    canvas.width = width;
    canvas.height = height;
    return canvas;
}

/**
 * 绘制其他身体部位
 * @param {Character} C
 * @param {Asset} TempCanvasAsset
 * @param {CustomGroupName[]} DrawGroupNames
 */
function partialDraw(C, TempCanvasAsset, DrawGroupNames) {
    const oldDrawCanvas = GLDrawCanvas;

    GLDrawCanvas = customTempCanvas(C, TempCanvasAsset, CanvasDrawWidth, CanvasDrawHeight, "GLDrawCanvas");
    /** @type {Character} */
    const copyC = {
        ...C,
        CharacterID: "npc-partial-draw",
        Appearance: C.Appearance.filter((a) => DrawGroupNames.includes(a.Asset.Group.Name)),
    };
    copyC.Canvas = customTempCanvas(C, TempCanvasAsset, CanvasDrawWidth, CanvasDrawHeight, "Canvas");
    copyC.CanvasBlink = customTempCanvas(C, TempCanvasAsset, CanvasDrawWidth, CanvasDrawHeight, "CanvasBlink");
    copyC.DrawAppearance = AppearanceItemParse(CharacterAppearanceStringify(copyC));
    copyC.AppearanceLayers = CharacterAppearanceSortLayers(copyC);
    copyC.Appearance = C.Appearance;

    CharacterAppearanceBuildCanvas(copyC);

    GLDrawCanvas = oldDrawCanvas;
    return { Canvas: copyC.Canvas, CanvasBlink: copyC.CanvasBlink };
}

/**
 * @param {Character} C
 * @param {Asset} Asset
 * @param {string} LayerName
 * @param {AssetPoseName} Pose
 * @param {string} ParentAssetName
 * @param {string} [OverrideName]
 */
function getMaskURL(C, Asset, LayerName, Pose, ParentAssetName, OverrideName) {
    const layer = Asset.Layer.find((l) => l.Name === LayerName);

    let poseSegment = layer.PoseMapping[Pose];
    switch (poseSegment) {
        case PoseType.HIDE:
        case PoseType.DEFAULT:
        case undefined:
            poseSegment = "";
            break;
        default:
            poseSegment += "/";
            break;
    }

    const urlParts = [asset.Name, ParentAssetName, OverrideName ?? LayerName].filter((c) => c);

    return `Assets/${Asset.Group.Family}/${Asset.Group.Name}/${poseSegment}${urlParts.join("_")}.png`;
}

/** @type {ExtendedItemCallbacks.AfterDraw<{}>} */
function androidDraw({ C, A, X, Y, Pose, drawCanvas, drawCanvasBlink, AlphaMasks, L, G }) {
    if (L === "上身遮罩" || L === "下身遮罩") {
        const { Canvas, CanvasBlink } = partialDraw(
            C,
            A,
            L === "上身遮罩" ? ["BodyUpper", "ArmsLeft", "ArmsRight"] : ["BodyLower"]
        );

        const maskURL = getMaskURL(C, A, L, Pose, G, "身体遮罩");

        DrawImageEx(maskURL, Canvas.getContext("2d"), X, Y, { BlendingMode: "destination-out" });
        DrawImageEx(maskURL, CanvasBlink.getContext("2d"), X, Y, { BlendingMode: "destination-out" });

        drawCanvas(Canvas, 0, 0, AlphaMasks);
        drawCanvasBlink(CanvasBlink, 0, 0, AlphaMasks);
    }
}

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "生化人体",
    Random: false,
    Top: 0,
    Left: 0,
    Priority: 9,
    Gender: "F",
    Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"],
    DefaultColor: ["Default", "Default", "Default"],
    PoseMapping: {
        Hogtied: PoseType.HIDE,
        AllFours: PoseType.HIDE,
    },
    DynamicAfterDraw: true,
    ParentGroup: null,
    AllowColorize: true,
    Hide: ["BodyUpper", "BodyLower", "ArmsLeft", "ArmsRight", "Nipples"],
    Layer: [
        {
            Name: "骨架",
            PoseMapping: {
                Kneel: "LegsClosed",
                LegsClosed: "LegsClosed",
                Spread: "Spread",
                KneelingSpread: "KneelingSpread",
                Hogtied: PoseType.HIDE,
                AllFours: PoseType.HIDE,
            },
            Priority: 5,
        },
        {
            Name: "阴道",
            Priority: 6,
        },
        {
            Name: "上身遮罩",
            ParentGroup: "BodyUpper",
            Priority: 7,
            AllowColorize: false,
            HasImage: false,
        },
        {
            Name: "下身遮罩",
            ParentGroup: "BodyLower",
            Priority: 7,
            AllowColorize: false,
            HasImage: false,
        },
        {
            Name: "网格",
            Priority: 9,
        },
    ],
};

export default function () {
    const assetGroup = "动物身体_Luzi";

    ModManager.globalFunction(`Assets${assetGroup}${asset.Name}AfterDraw`, androidDraw);

    AssetManager.addAsset(assetGroup, asset);
}
