import AssetManager from "@mod-utils/AssetManager";
import ModManager from "@mod-utils/ModManager";
import { Tools } from "@mod-utils/Tools";
import { VersionSupport } from "@mod-utils/VersionSupport";

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

/** @type {ExtendedItemCallbacks.AfterDraw<{}>} */
function androidDraw(drawData) {
    const { C, A, X, Y, Pose, drawCanvas, drawCanvasBlink, AlphaMasks, L, G } = drawData;

    if (L === "上身遮罩" || L === "下身遮罩") {
        const { Canvas, CanvasBlink } = partialDraw(C, A, L === "上身遮罩" ? ["BodyUpper"] : ["BodyLower"]);

        const maskURL = Tools.getAssetURL(drawData, "身体遮罩");

        DrawImageEx(maskURL, Canvas.getContext("2d"), X, Y, { BlendingMode: "destination-out" });
        DrawImageEx(maskURL, CanvasBlink.getContext("2d"), X, Y, { BlendingMode: "destination-out" });

        drawCanvas(Canvas, 0, 0, AlphaMasks);
        drawCanvasBlink(CanvasBlink, 0, 0, AlphaMasks);
    }
    if (L === "底部") {
        const { Canvas, CanvasBlink } = partialDraw(C, A, ["BodyUpper", "BodyLower"]);

        const maskURL = Tools.getAssetURL(drawData, "底部遮罩");

        DrawImageEx(maskURL, Canvas.getContext("2d"), X, Y, { BlendingMode: "destination-in" });
        DrawImageEx(maskURL, CanvasBlink.getContext("2d"), X, Y, { BlendingMode: "destination-in" });

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
    Priority: 7,
    Gender: "F",
    Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"],
    DefaultColor: ["Default", "Default", "#696776", "#7E5F69", "#E3BFBF"],
    PoseMapping: {
        Hogtied: PoseType.HIDE,
        AllFours: PoseType.HIDE,
    },
    DynamicAfterDraw: true,
    ParentGroup: VersionSupport.NoParentGroup,
    AllowColorize: true,
    EditOpacity: true,
    Hide: ["BodyUpper", "BodyLower", "Nipples"],
    Layer: [
        {
            Name: "底部",
            ParentGroup: "BodyUpper",
            AllowColorize: false,
            HasImage: false,
        },
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
        },
        {
            Name: "阴道",
            Top: 400,
            Left: 180,
        },
        {
            Name: "腹中脑容器",
            Top: 400,
            Left: 180,
        },
        {
            Name: "腹中脑",
            Top: 400,
            Left: 180,
        },
        {
            Name: "上身遮罩",
            ParentGroup: "BodyUpper",
            PoseMapping: {
                Kneel: "LegsClosed",
                LegsClosed: "LegsClosed",
                Spread: "Spread",
                KneelingSpread: "KneelingSpread",
                Hogtied: PoseType.HIDE,
                AllFours: PoseType.HIDE,
            },
            AllowColorize: false,
            HasImage: false,
        },
        {
            Name: "下身遮罩",
            ParentGroup: "BodyLower",
            PoseMapping: {
                Kneel: "LegsClosed",
                LegsClosed: "LegsClosed",
                Spread: "Spread",
                KneelingSpread: "KneelingSpread",
                Hogtied: PoseType.HIDE,
                AllFours: PoseType.HIDE,
            },
            AllowColorize: false,
            HasImage: false,
        },
        {
            Name: "网格",
            ParentGroup: "BodyUpper",
        },
    ],
};

export default function () {
    const assetGroup = "动物身体_Luzi";

    ModManager.globalFunction(`Assets${assetGroup}${asset.Name}AfterDraw`, androidDraw);

    AssetManager.addAsset(assetGroup, asset, undefined, {
        CN: "生化人体",
        EN: "Android Body",
    });
}
