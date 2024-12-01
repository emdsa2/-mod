import AssetManager from "@mod-utils/AssetManager";
import { RecordEntries } from "@mod-utils/fp";
import ModManager from "@mod-utils/ModManager";

const assetAdjustments = {
    缩小地上_Luzi: { OverrideZoom: 0.3 },
    缩小浮空_Luzi: { OverrideZoom: 0.3 },
    身高加40cm_Luzi: { ZoomModifier: +0.08 },
    身高加30cm_Luzi: { ZoomModifier: +0.06 },
    身高加20cm_Luzi: { ZoomModifier: +0.04 },
    身高加10cm_Luzi: { ZoomModifier: +0.02 },
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
        Name: "身高加40cm_Luzi",
        Visible: false,
        Random: false,
    },
    {
        Name: "身高加30cm_Luzi",
        Visible: false,
        Random: false,
    },
    {
        Name: "身高加20cm_Luzi",
        Visible: false,
        Random: false,
    },
    {
        Name: "身高加10cm_Luzi",
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

/** @type {Translation.CustomRecord<string,string>} */
const translations = {
    CN: {
        缩小地上_Luzi: "缩小地上",
        缩小浮空_Luzi: "缩小浮空",
        身高加10cm_Luzi: "+10cm",
        身高加20cm_Luzi: "+20cm",
        身高加30cm_Luzi: "+30cm",
        身高加40cm_Luzi: "+40cm",
        身高减10cm_Luzi: "-10cm",
        身高减20cm_Luzi: "-20cm",
        身高减30cm_Luzi: "-30cm",
        身高减40cm_Luzi: "-40cm",
    },
    EN: {
        缩小地上_Luzi: "Shrink on Ground",
        缩小浮空_Luzi: "Shrink in Air",
        身高加10cm_Luzi: "+10cm",
        身高加20cm_Luzi: "+20cm",
        身高加30cm_Luzi: "+30cm",
        身高加40cm_Luzi: "+40cm",
        身高减10cm_Luzi: "-10cm",
        身高减20cm_Luzi: "-20cm",
        身高减30cm_Luzi: "-30cm",
        身高减40cm_Luzi: "-40cm",
    },
    RU: {
        缩小地上_Luzi: "Уменьшить на земле",
        缩小浮空_Luzi: "Уменьшить в воздухе",
        身高加10cm_Luzi: "+10cm",
        身高加20cm_Luzi: "+20cm",
        身高加30cm_Luzi: "+30cm",
        身高加40cm_Luzi: "+40cm",
        身高减10cm_Luzi: "-10cm",
        身高减20cm_Luzi: "-20cm",
        身高减30cm_Luzi: "-30cm",
        身高减40cm_Luzi: "-40cm",
    },
};

export default function () {
    /** @type {CustomGroupName} */
    const groupName = "额外身高_Luzi";

    ModManager.progressiveHook("CharacterAppearanceGetCurrentValue").override((args, next) => {
        /** @type {number} */
        const ret = next(args);
        if (args[1] === "Height" && args[2] === "Zoom") {
            const i = InventoryGet(args[0], /** @type {AssetGroupName} */ (groupName));
            if (i) {
                if (assetAdjustments[i.Asset.Name]?.ZoomModifier)
                    return ret + assetAdjustments[i.Asset.Name].ZoomModifier;
                else if (assetAdjustments[i.Asset.Name]?.OverrideZoom)
                    return assetAdjustments[i.Asset.Name].OverrideZoom;
            }
        }
        return ret;
    });

    AssetManager.addGroupedAssets(
        { [groupName]: assets },
        RecordEntries(translations).reduce((acc, [lang, entries]) => {
            acc[lang] = { [groupName]: entries };
            return acc;
        }, /** @type {Translation.GroupedEntries}*/ ({}))
    );
}
