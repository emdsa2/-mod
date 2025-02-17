import AssetManager from "@mod-utils/AssetManager";
import ModManager from "@mod-utils/ModManager";
import { ModInfo } from "@mod-utils/rollupHelper";
import { makeTooltipIcon } from "@mod-utils/Tooltip";

const hanburgerIcon = `data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsSAAALEgHS3X78AAAA
G3RFWHRTb2Z0d2FyZQBDZWxzeXMgU3R1ZGlvIFRvb2zBp+F8AAAEEUlEQVRoge2Zz28bRRTHP7Pr
eO3Gie38gDQ/jCg/QkBquSEhgcqZK1xBSAiQKv6DglTErUekSvwQHLgAF6Qc4EYlUDnAoVITqWpC
aNqGlKRJYyeOvbG9MxzGnllYN3VKSW3j72XHb96beZ/x7M7zWiil6AaJHkibqQcCkEqlAgAppdOw
lcvllmKTySQAjmNCKRaL4l5z+f+BCCGCetPMvPSJC0DMCYzfEa+1iUt7+lqTrrE99pYZRzYaSimX
FtQDgQ4ASSWFAKhUqTVsl8+5DkAiZubAi+tYIew+T41NA7Bz83JkXNfrN+1gbzfSL1UMgIpdF469
WZMA8T5iDVuxHE26u0FirqgCLH/mmuBkfcsoKUOe0Vgnph1lbS/Sd1cJvYvCCxPUpxt/vWoWtRao
vkhoD0R/isS2FcjxR4UC+OFDO2Aj50zuhDHlr1+8c05OLPRBn3MqqDZxtGfg4PgzAGyv2vur0fvS
aXvjXLqqIgdn94EIIQzRjS90Esm49VeyWk/QDdlCj5cDyu1LACBrFWNzYnEAgqpvE3T0LvIrdsEn
39C7TCkL1ANpW5B0Om08r5zTFWzcsSAysBP+U+nJ46ZdWLnUEkj/6DGdYH7V2MIADTmuhvOrFmTm
XV05FwqFLgYJb63lT+uTJVrKCWGPG1RQ28fz3lXas4v65Kk6nO/3QJqqrUDcUceA5D7QVerT63Zf
+vWi4EbWHpIjRd2fLVm/xYd0/xPrtpRZyYi/+QMM1WMWR+14w6Xo4dwY5Tdp+1beKwF3eGp1DYgQ
QgkBSsGLOV34nZlOmeCjxVC5Ute1ozp2PPTOYEd/64w38b8yZM+d6dv6PJofsFvx8Y1ozC9ZjfLa
d5vGlslkANja2mryjThCCSEIpOpskPDN3pEgmfTgLsKRk/3SZH3q1TEAnn/WgpT3dNLPnbC28xd2
dF/5/rytrNZ/fOz40SffzxeLpv31T38C4CWSKKW4ubktRDblBTjxysSAMA/bTgFxXRepFBvbvhBD
/X0KBKdffioS7Hki1NbXkyeTxjY7W7ovAAfV/B8FAD6/cA3QT68eCLQZSLa/T1Wkwzsv5IzjRCbZ
dIB20Y8LGwCcv6rfjeXzef2NVKTD250OMpyKq1jcY+32jnG89eUDyW9fnf3Wtj/6Xi/08EASv7zL
rW1fiOEBT7lujPW8fYXZCSCOUCQciVKKzWJFiEcmxlTcS7D4+7Jx7AQQgLGRDH5pl9WNgmhaoix9
rK+DRw4v0bvpzFe2fPnm1xEA1tbW9q+1Ohokl8sZEE/pAu39V+w5kX5AUPPX9fXsrP1LYvThcQAW
FhZ6IIeuA4OENTMzowCWlpaMrVpt8gL6EJROpwGYmpoyJfHc3Fxrfyv0QP4D/SuQTlQPpN30FwcY
PMrnpTehAAAAAElFTkSuQmCC`;

export default function () {
    const iconSize = 50;
    const margin = 5;
    const hoverText = ModInfo.name;

    const func = (args, next) => {
        const [x, y, asset, { Width, Height }] = args;
        if (AssetManager.assetIsCustomed(asset)) {
            const iconX = x + (Width || DrawAssetPreviewDefaultWidth) - iconSize - margin;
            const iconY = y + (Height || DrawAssetPreviewDefaultHeight) - iconSize - margin - 40;

            DrawImageResize(hanburgerIcon, iconX, iconY, iconSize, iconSize);
            if (MouseIn(iconX, iconY, iconSize * 0.9, iconSize * 0.9)) {
                DrawHoverElements.push(() => DrawButtonHover(iconX, iconY, 100, 65, hoverText));
            }
        }
    };

    ModManager.progressiveHook("DrawAssetPreview", 1)
        .inside("AppearanceRun")
        .next()
        .when(() => CharacterAppearanceMode == "Cloth")
        .inject(func);

    ModManager.hookFunction("ElementButton.CreateForAsset", 0, (args, next) => {
        const _args = /** @type {any[]} */ (args);
        const asset = "Asset" in _args[1] ? _args[1].Asset : _args[1];

        const ret = /** @type {HTMLButtonElement} */ (next(args));

        if (AssetManager.assetIsCustomed(asset)) {
            ret.appendChild(makeTooltipIcon(ModInfo.name, hanburgerIcon));
        }
        return ret;
    });
}
