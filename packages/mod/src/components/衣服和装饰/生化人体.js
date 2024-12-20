import AssetManager from "@mod-utils/AssetManager";
import ModManager from "@mod-utils/ModManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "生化人体",
    Random: false,
    Top: 0,
    Left: 0,
    Priority: 21,
    Expose: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"],
    DefaultColor: ["Default"],
    PoseMapping: {
        Hogtied: PoseType.HIDE,
        AllFours: PoseType.HIDE,
    },
    Layer: [
        {
            Name: "擦除身体",
            AllowColorize: false,
            ParentGroup: null,
            BlendingMode: "destination-out",
        },
    ],
};

/**
 * 增强 BlendingMode 支持
 * @param {WebGL2RenderingContext} gl
 * @param {GlobalCompositeOperation} blendingMode
 */
function blendingModeExt(gl, blendingMode) {
    switch (blendingMode) {
        case "source-over":
            gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
            break;
        case "source-in":
            gl.blendFuncSeparate(gl.DST_ALPHA, gl.ZERO, gl.ZERO, gl.ONE);
            break;
        case "source-out":
            gl.blendFuncSeparate(gl.ZERO, gl.ONE_MINUS_SRC_ALPHA, gl.ZERO, gl.ONE_MINUS_SRC_ALPHA);
            break;
        case "source-atop":
            gl.blendFuncSeparate(gl.DST_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ZERO, gl.ONE);
            break;
        case "destination-over":
            gl.blendFuncSeparate(gl.ONE_MINUS_DST_ALPHA, gl.ONE, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
            break;
        case "destination-in":
            gl.blendFuncSeparate(gl.ZERO, gl.SRC_ALPHA, gl.DST_ALPHA, gl.SRC_ALPHA);
            break;
        case "destination-out":
            gl.blendFuncSeparate(gl.ZERO, gl.ONE_MINUS_SRC_ALPHA, gl.ZERO, gl.ONE_MINUS_SRC_ALPHA);
            break;
        case "destination-atop":
            gl.blendFuncSeparate(gl.ONE_MINUS_DST_ALPHA, gl.SRC_ALPHA, gl.ZERO, gl.ONE);
            break;
    }
}

export default function () {
    const func = ModManager.randomGlobalFunction("blendingModeExt", blendingModeExt);

    ModManager.patchFunction("GLDrawImage", {
        [`gl.bindBuffer(gl.ARRAY_BUFFER, program.position_buffer);`]: `${func}(gl,blendingMode); gl.bindBuffer(gl.ARRAY_BUFFER, program.position_buffer);`,
    });

    // AssetManager.addAsset("Bra", asset);
}
