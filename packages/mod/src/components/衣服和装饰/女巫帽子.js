import AssetManager from "@mod-utils/AssetManager";


/** @type {CustomAssetDefinition} */
const asset = {
    Name: "女巫帽子_Luzi",
    Random: false,
    Gender: "F",
    Top: -220,
    Left: 0,
    Extended: true,
    DefaultColor: ["#111111", "#111111", "#111111", "#111111", "#5e5c5c", "#828282", "#f1c4c4", "#A9AFAF"],
    Layer: [
        {
            Name: "帽尖",
            Priority: 55,
            AllowTypes: { z: 1 },
            Alpha: [
                {
                    Group: ["HairBack"],
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
            Priority: 55,
            AllowTypes: { z: 0 },
            CopyLayerColor: "帽尖",
        },
        {
            Name: "帽檐",
            Priority: 56,
            Alpha: [
                {
                    Group: ["HairAccessory1", "HairAccessory2", "HairAccessory3"],
                    Masks: [
                        [161, 0, 254, 59],
                        [173, 59, 242, 7],
                        [186, 65, 229, 10],
                        [265, 74, 150, 69],
                    ],
                },
            ],
        },
        {
            Name: "帽里",
            Priority: 3,
        },
        {
            Name: "帽里装饰",
            Priority: 3,
        },
        {
            Name: "蝴蝶结",
            Priority: 57,
        },
        {
            Name: "绑带",
            Priority: 55,
        },
        {
            Name: "吊坠",
            Priority: 55,
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

const translations = {
    CN: "女巫帽子",
    EN: "Witch Hat",
    RU: "Шляпа ведьмы",
};

export default function () {
    AssetManager.addAsset("Hat", asset, extended, translations);
    AssetManager.addCustomDialog(descriptions);
}
