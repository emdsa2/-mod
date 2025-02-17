import AssetManager from "@mod-utils/AssetManager";
import { pickEntry, setupEntries } from "@mod-utils/AssetManager/entries";
import { VersionSupport } from "@mod-utils/VersionSupport";

/** @type {Array<CustomAssetDefinition>}} */
const assets = [
    {
        Name: "侧马尾1",
        Random: false,
        Left: 50,
        Top: 0,
        ParentGroup: VersionSupport.NoParentGroup,
        Extended: true,
        InheritColor: "HairFront",
        Hide: ["HairBack"],
        Layer: [
            {
                Name: "左侧",
                Priority: 32,
                AllowTypes: { typed: [0, 2] },
            },
            {
                Name: "右侧",
                Priority: 32,
                AllowTypes: { typed: [1, 2] },
            },
        ],
    },
    {
        Name: "侧马尾2",
        Random: false,
        Left: 50,
        Top: 0,
        ParentGroup: VersionSupport.NoParentGroup,
        Extended: true,
        InheritColor: "HairFront",
        Hide: ["HairBack"],
        Layer: [
            {
                Name: "左侧",
                Priority: 32,
                AllowTypes: { typed: [0, 2] },
            },
            {
                Name: "右侧",
                Priority: 32,
                AllowTypes: { typed: [1, 2] },
            },
        ],
    },
    {
        Name: "侧马尾3",
        Random: false,
        Left: 0,
        Top: 0,
        ParentGroup: VersionSupport.NoParentGroup,
        Extended: true,
        InheritColor: "HairFront",
        Hide: ["HairBack"],
        Layer: [
            {
                Name: "左侧",
                Priority: 32,
                AllowTypes: { typed: [0, 2] },
            },
            {
                Name: "右侧",
                Priority: 32,
                AllowTypes: { typed: [1, 2] },
            },
        ],
    },
    {
        Name: "低双马尾1",
        Random: false,
        Left: 50,
        Top: 0,
        ParentGroup: VersionSupport.NoParentGroup,
        Extended: false,
        InheritColor: "HairFront",
        Hide: ["HairBack"],
        Priority: 32,
    },
    {
        Name: "低双马尾2",
        Random: false,
        Left: 0,
        Top: 0,
        ParentGroup: VersionSupport.NoParentGroup,
        Extended: false,
        InheritColor: "HairFront",
        Hide: ["HairBack"],
        Priority: 32,
    },
    {
        Name: "低双马尾3",
        Random: false,
        Left: 0,
        Top: 0,
        ParentGroup: VersionSupport.NoParentGroup,
        Extended: false,
        InheritColor: "HairFront",
        Hide: ["HairBack"],
        Priority: 5,
    },
    {
        Name: "低双马尾4",
        Random: false,
        Left: 50,
        Top: 0,
        ParentGroup: VersionSupport.NoParentGroup,
        Extended: false,
        InheritColor: "HairFront",
        Hide: ["HairBack"],
        Priority: 5,
    },
    {
        Name: "低双马尾5",
        Random: false,
        Left: 0,
        Top: 0,
        ParentGroup: VersionSupport.NoParentGroup,
        Extended: false,
        InheritColor: "HairFront",
        Hide: ["HairBack"],
        Priority: 5,
    },
    {
        Name: "低双马尾6",
        Random: false,
        Left: 0,
        Top: 0,
        ParentGroup: VersionSupport.NoParentGroup,
        Extended: false,
        InheritColor: "HairFront",
        Hide: ["HairBack"],
        Priority: 5,
    },
    {
        Name: "双马尾1",
        Random: false,
        Left: 0,
        Top: 0,
        ParentGroup: VersionSupport.NoParentGroup,
        Extended: false,
        InheritColor: "HairFront",
        Hide: ["HairBack"],
        Priority: 5,
    },
    {
        Name: "双马尾2",
        Random: false,
        Left: 0,
        Top: 0,
        ParentGroup: VersionSupport.NoParentGroup,
        Extended: false,
        InheritColor: "HairFront",
        Hide: ["HairBack"],
        Priority: 5,
    },
    {
        Name: "双马尾3",
        Random: false,
        Left: 0,
        Top: 0,
        ParentGroup: VersionSupport.NoParentGroup,
        Extended: false,
        InheritColor: "HairFront",
        Hide: ["HairBack"],
        Priority: 5,
    },
    {
        Name: "双马尾4",
        Random: false,
        Left: 0,
        Top: 0,
        ParentGroup: VersionSupport.NoParentGroup,
        Extended: false,
        InheritColor: "HairFront",
        Hide: ["HairBack"],
        Priority: 5,
    },
    {
        Name: "双马尾5",
        Random: false,
        Left: 0,
        Top: 0,
        ParentGroup: VersionSupport.NoParentGroup,
        Extended: false,
        InheritColor: "HairFront",
        Hide: ["HairBack"],
        Priority: 5,
    },
    {
        Name: "卷发后1",
        Random: false,
        Left: 0,
        Top: 0,
        ParentGroup: VersionSupport.NoParentGroup,
        Extended: false,
        InheritColor: "HairFront",
        Hide: ["HairBack"],
        Priority: 32,
    },
    {
        Name: "卷发后2",
        Random: false,
        Left: 0,
        Top: 0,
        ParentGroup: VersionSupport.NoParentGroup,
        Extended: false,
        InheritColor: "HairFront",
        Hide: ["HairBack"],
        Priority: 5,
    },
    {
        Name: "卷发后3",
        Random: false,
        Left: 0,
        Top: 0,
        ParentGroup: VersionSupport.NoParentGroup,
        Extended: false,
        InheritColor: "HairFront",
        Hide: ["HairBack"],
        Priority: 5,
    },
    {
        Name: "后发髻1",
        Random: false,
        Left: 0,
        Top: 0,
        ParentGroup: VersionSupport.NoParentGroup,
        Extended: false,
        InheritColor: "HairFront",
        Hide: ["HairBack"],
        Priority: 5,
    },
    {
        Name: "后发髻2",
        Random: false,
        Left: 0,
        Top: 0,
        ParentGroup: VersionSupport.NoParentGroup,
        Extended: false,
        InheritColor: "HairFront",
        Hide: ["HairBack"],
        Priority: 5,
    },
];

/** @type { Translation.GroupedEntries } */
const translations = {
    CN: {
        新后发_Luzi: {
            侧马尾1: "侧马尾 1",
            侧马尾2: "侧马尾 2",
            侧马尾3: "侧马尾 3",
            低双马尾1: "低双马尾 1",
            低双马尾2: "低双马尾 2",
            低双马尾3: "低双马尾 3",
            低双马尾4: "低双马尾 4",
            低双马尾5: "低双马尾 5",    
            低双马尾6: "低双马尾 6",            
            双马尾1: "双马尾 1",           
            双马尾2: "双马尾 2",           
            双马尾3: "双马尾 3",     
            双马尾4: "双马尾 4",     
            双马尾5: "双马尾 5",
            卷发后1: "卷发后1",
            卷发后2: "卷发后2",
            卷发后3: "卷发后3",
            后发髻1: "后发髻1",
            后发髻2: "后发髻2",
        },
    },
    EN: {
        新后发_Luzi: {
            侧马尾1: "Side Ponytail 1",
            侧马尾2: "Side Ponytail 2",
            侧马尾3: "Side Ponytail 3",
            低双马尾1: "Low double ponytail 1",
            低双马尾2: "Low double ponytail 2",
            低双马尾3: "Low double ponytail 3",
            低双马尾4: "Low double ponytail 4",
            低双马尾5: "Low double ponytail 5",
            低双马尾6: "Low double ponytail 6",
            双马尾1: "Low double ponytail 1",
            双马尾2: "Low double ponytail 2",
            双马尾3: "Low double ponytail 3",
            双马尾4: "Low double ponytail 4",
            双马尾5: "Low double ponytail 5",
            卷发后1: "Curly Hair Back 1",
            卷发后2: "Curly Hair Back 2",
            卷发后3: "Curly Hair Back 3",
            后发髻1: "Back Bun 1",
            后发髻2: "Back Bun 2",
        },
    },
};

/** @type {AssetArchetypeConfig} */
const extended = {
    Archetype: ExtendedArchetype.TYPED,
    DrawImages: false,
    Options: [
        { Name: "左侧" },
        { Name: "右侧" },
        { Name: "都有" },
    ],
};

export default function () {
    assets.forEach(asset => {
        if (asset.Extended === true) {
            AssetManager.addAsset("新后发_Luzi", asset, extended, getTranslations("新后发_Luzi", asset.Name));

            AssetManager.addCustomDialog(getDialog("新后发_Luzi", asset.Name));
        }
        else {
            AssetManager.addAsset("新后发_Luzi", asset, null, getTranslations("新后发_Luzi", asset.Name));
        }
    });
}

/**
 * @param {string} groupKey - 分组键
 * @param {string} entryKey - 条目键
 * @returns {Translation.Entry} - 返回翻译
 */
function getTranslations(groupKey, entryKey) {
    const result = {};

    for (const lang in translations) {
        if (translations[lang][groupKey] && translations[lang][groupKey][entryKey]) {
            result[lang] = translations[lang][groupKey][entryKey];
        }
    }

    return result;
}

/**
 * @param {string} groupKey - 分组键
 * @param {string} entryKey - 条目键
 * @returns {Translation.Dialog} - 返回翻译
 */
function getDialog(groupKey, entryKey) {
    const dialog = {
        CN: {},
        EN: {}
    };

    dialog["CN"][groupKey + entryKey + "Select"] = "选择外观";
    dialog["CN"][groupKey + entryKey + "左侧"] = "左侧";
    dialog["CN"][groupKey + entryKey + "右侧"] = "右侧";
    dialog["CN"][groupKey + entryKey + "都有"] = "都有";

    dialog["EN"][groupKey + entryKey + "Select"] = "Choose look";
    dialog["EN"][groupKey + entryKey + "左侧"] = "Left";
    dialog["EN"][groupKey + entryKey + "右侧"] = "Right";
    dialog["EN"][groupKey + entryKey + "都有"] = "Both";

    return dialog;
}