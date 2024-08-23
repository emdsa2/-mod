import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "女巫帽子_Luzi",
    Random: false,
    Gender: "F",
    Top: -220,
    Left: 0,
    Layer: [
        {
            Name: "帽尖",
            Priority: 60,
            AllowTypes: { z: 1 },
            Alpha: [
                {
                    Group: [
                        "HairBack",
                    ],
                    Masks: [
                        [300, 0, 200, 100],
                        [300, 100, 200, 40],
                        [360, 140, 100, 14],
                        [391, 153, 100, 5],

                        [158, 0, 100, 54],
                        [158 + 6, 54, 100, 5],
                        [158 + 6 + 7, 54 + 5, 100, 5],
                        [158 + 6 + 7 + 8, 54 + 5 + 5, 100, 6],
                    ],
                },
            ],
        },
        {
            Name: "帽尖2",
            Priority: 60,
            AllowTypes: { z: 0 },
        },
        {
            Name: "帽檐",
            Priority: 62,
        },
        {
            Name: "帽里",
            Priority: 1,
        },
        {
            Name: "帽里装饰",
            Priority: 2,
        },
        {
            Name: "蝴蝶结",
            Priority: 63,
        },
        {
            Name: "绑带",
            Priority: 61,
        },
        {
            Name: "吊坠",
            Priority: 59,
        },
    ],
};

/** @type {AssetArchetypeConfig} */
const extended = {
    Archetype: ExtendedArchetype.MODULAR,
    Modules: [
        {
            Name: "遮罩头发",
            Key: "z",
            DrawImages: false,
            Options: [{}, {}],
        },
    ],
};

const descriptions = {
    CN: {
        Hat女巫帽子_LuziSelectBase: "选择配置",
        Hat女巫帽子_LuziSelect遮罩头发: "设置遮罩头发",
        Hat女巫帽子_LuziModule遮罩头发: "遮罩头发",
        Hat女巫帽子_LuziOptionz0: "无",
        Hat女巫帽子_LuziOptionz1: "有",
    },
    EN: {
        Hat女巫帽子_LuziSelectBase: "Select Configuration",
        Hat女巫帽子_LuziSelect遮罩头发: "Set 遮罩头发",
        Hat女巫帽子_LuziModule遮罩头发: "遮罩头发",
        Hat女巫帽子_LuziOptionz0: "None",
        Hat女巫帽子_LuziOptionz1: "Present",
    },
};


const translations = { CN: "女巫帽子", EN: "Witch hat" };

export default function () {
    AssetManager.addAsset("Hat", asset, extended, translations);
    AssetManager.addCustomDialog(descriptions);
}
