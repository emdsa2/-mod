import { sleepUntil } from "@mod-utils/sleep";
import ModManager from "@mod-utils/ModManager";

export default function () {
    // 拓展绘图空间
    // 1. 画布宽度从 1000px 扩展到 2000px (250px 左拓展 500px 角色 250px 右拓展，角色本体和眨眼各一份)
    // 2. 画布中心向右偏移 250px

    // 使画布宽度从 1000px 扩展到 2000px
    ModManager.patchFunction("GLDrawLoad", {
        "GLDrawCanvas.width = 1000;": "GLDrawCanvas.width = 2000;",
        "GLDrawClearRect(GLDrawCanvas.GL, 0, 0, 1000, CanvasDrawHeight, 0);":
            "GLDrawClearRect(GLDrawCanvas.GL, 0, 0, 2000, CanvasDrawHeight, 0);",
    });

    ModManager.patchFunction("GLDrawAppearanceBuild", {
        // 在 0px-1000px 的区域绘制角色，1000px-2000px 的区域绘制眨眼
        "const blinkOffset = 500;": "const blinkOffset = 1000;",

        "GLDrawClearRect(GLDrawCanvas.GL, 0, 0, 1000, CanvasDrawHeight, 0);":
            "GLDrawClearRect(GLDrawCanvas.GL, 0, 0, 2000, CanvasDrawHeight, 0);",

        // 将角色移动到宽度 1000px 的区域的中间，即 250px-750px 的区域
        "GLDrawClearRect(GLDrawCanvas.GL, x, CanvasDrawHeight - y - h, w, h, 0)":
            "GLDrawClearRect(GLDrawCanvas.GL, x, CanvasDrawHeight - y - h, w, h, 250)",
        "GLDrawClearRect(GLDrawCanvas.GL, x, CanvasDrawHeight - y - h, w, h, blinkOffset)":
            "GLDrawClearRect(GLDrawCanvas.GL, x, CanvasDrawHeight - y - h, w, h, blinkOffset + 250)",

        "GLDrawImage(src, GLDrawCanvas.GL, x, y, opts, 0),": "GLDrawImage(src, GLDrawCanvas.GL, x, y, opts, 250),",
        "GLDrawImage(src, GLDrawCanvas.GL, x, y, opts, blinkOffset),":
            "GLDrawImage(src, GLDrawCanvas.GL, x, y, opts, blinkOffset + 250),",

        "GLDraw2DCanvas(GLDrawCanvas.GL, Img, x, y, 0, alphaMasks),":
            "GLDraw2DCanvas(GLDrawCanvas.GL, Img, x, y, 250, alphaMasks),",
        "GLDraw2DCanvas(GLDrawCanvas.GL, Img, x, y, blinkOffset, alphaMasks),":
            "GLDraw2DCanvas(GLDrawCanvas.GL, Img, x, y, blinkOffset + 250, alphaMasks),",
    });

    // CommonDrawCanvasPrepare 函数调用时机非常早，修改效果并不能保证生效，通过在 DrawCharacter 中修改Canvas的宽度来保证效果生效
    ModManager.patchFunction("CommonDrawCanvasPrepare", {
        ".width = 500;": ".width = 1000;",
        "clearRect(0, 0, 500, CanvasDrawHeight)": "clearRect(0, 0, 1000, CanvasDrawHeight)",
    });
    ModManager.patchFunction("DrawCharacter", {
        "500 * HeightRatio * Zoom": "1000 * HeightRatio * Zoom",
        "TempCanvas.canvas.width = CanvasDrawWidth;": "TempCanvas.canvas.width = CanvasDrawWidth * 2;",

        "const XOffset = CharacterAppearanceXOffset(C, HeightRatio);":
            "const XOffset = CharacterAppearanceXOffset(C, HeightRatio) + 250 * HeightRatio",

        "DrawImageEx(Canvas, DrawCanvas, X + XOffset * Zoom":
            "DrawImageEx(Canvas, DrawCanvas, X + (XOffset - 500 * HeightRatio) * Zoom",

        "if (!DrawCanvas) DrawCanvas = MainCanvas;":
            "if (!DrawCanvas) DrawCanvas = MainCanvas; \n if (C.Canvas.width === 500) C.Canvas.width = 1000; \n if (C.CanvasBlink.width === 500) C.CanvasBlink.width = 1000;",
    });

    ModManager.patchFunction("DrawCharacterSegment", {
        "DrawCanvasSegment(C.Canvas, Left": "DrawCanvasSegment(C.Canvas, Left + 250",
    });

    ModManager.afterInit(async () => {
        await sleepUntil(() => window.GLDrawCanvas !== undefined);
        GLDrawResetCanvas();
        // CommonDrawCanvasPrepare(Player);
    });
}
