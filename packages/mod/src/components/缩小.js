import AssetManager from "@mod-utils/AssetManager";
import ModManager from "@mod-utils/ModManager";

const assetAdjustments = {
    缩小地上_Luzi: { OverrideZoom: 0.3 },
    缩小浮空_Luzi: { OverrideZoom: 0.3 },
    身高减10cm_Luzi: { ZoomModifier: -0.02 },
    身高减20cm_Luzi: { ZoomModifier: -0.04 },
    身高减30cm_Luzi: { ZoomModifier: -0.06 },
    身高减40cm_Luzi: { ZoomModifier: -0.08 },
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
        OverrideHeight: {
            Height: 400,
            Priority: 20,
            HeightRatioProportion: 0.2,
        },
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
            身高减10cm_Luzi: "-10cm",
            身高减20cm_Luzi: "-20cm",
            身高减30cm_Luzi: "-30cm",
            身高减40cm_Luzi: "-40cm",
        },
    },
    EN: {
        BodyMarkings2_Luzi: {
            身高减10cm_Luzi: "-10cm",
            身高减20cm_Luzi: "-20cm",
            身高减30cm_Luzi: "-30cm",
            身高减40cm_Luzi: "-40cm",
        },
    },
    RU: {
        BodyMarkings2_Luzi: {
            身高减10cm_Luzi: "-10см",
            身高减20cm_Luzi: "-20см",
            身高减30cm_Luzi: "-30см",
            身高减40cm_Luzi: "-40см",
        },
    },
};

export default function () {
    ModManager.progressiveHook("CharacterAppearanceGetCurrentValue").override((args, next) => {
        /** @type {number} */
        const ret = next(args);
        if (args[1] === "Height" && args[2] === "Zoom") {
            const i = InventoryGet(args[0], /** @type {AssetGroupName} */ ("BodyMarkings2_Luzi"));
            if (i) {
                if (assetAdjustments[i.Asset.Name]?.ZoomModifier)
                    return ret + assetAdjustments[i.Asset.Name].ZoomModifier;
                else if (assetAdjustments[i.Asset.Name]?.OverrideZoom)
                    return assetAdjustments[i.Asset.Name].OverrideZoom;
            }
        }
        return ret;
    });

    AssetManager.addGroupedAssets({ BodyMarkings2_Luzi: assets }, translations);
}
