import AssetManager from "@mod-utils/AssetManager";

/** @type { {groupDef: CustomGroupDefinition, description: Translation.Entry }[]} */
const groups = [
    {
        groupDef: {
            Group: "Liquid2_Luzi",
            ParentGroup: "BodyLower",
            PoseMapping: { ...AssetPoseMapping.BodyLower },
            Priority: 53,
            Left: 0,
            Top: 0,
            BodyCosplay: true,
            Asset: [
                {
                    Name: "少_Luzi",
                    Random: false,
                    Priority: 9,
                    DefaultColor: ["#D9DCFF"],
                },
                {
                    Name: "中_Luzi",
                    Random: false,
                    Priority: 9,
                    DefaultColor: ["#D9DCFF"],
                },
            ],
        },
        description: {
            CN: "🍔液体",
            EN: "🍔Liquid",
            RU: "🍔Жидкость",
        },
    },
    {
        groupDef: {
            Group: "身体痕迹_Luzi",
            Priority: 10,
            BodyCosplay: true,
            Default: false,
            Random: false,
            Asset: [
                {
                    Name: "无_Luzi",
                    Random: false,
                },
            ],
            Color: ["Default"],
        },
        description: {
            CN: "🍔鞭痕",
            EN: "🍔Whip Marks",
            RU: "🍔Побои от плети",
        },
    },
    {
        groupDef: {
            Group: "动物身体_Luzi",
            Priority: 10,
            Default: false,
            Random: false,
            Asset: [],
            Color: ["Default"],
        },
        description: {
            CN: "🍔替用身体",
            EN: "🍔Alter Body",
            RU: "🍔Замена тела",
        },
    },
    {
        groupDef: {
            Group: "额外身高_Luzi",
            Priority: 10,
            Default: false,
            Random: false,
            BodyCosplay: true,
            Asset: [],
            Color: ["Default"],
        },
        description: {
            CN: "🍔身高调整",
            EN: "🍔Height Adjustment",
            RU: "🍔Регулировка высоты",
        },
    },
    {
        groupDef: {
            Group: "长袖子_Luzi",
            Priority: 10,
            Clothing: true,
            Default: false,
            Random: false,
            EditOpacity: true,
            MinOpacity: 0,
            MaxOpacity: 1,
            Asset: [
                {
                    Name: "无_Luzi",
                    Random: false,
                },
            ],
            Color: ["Default"],
        },
        description: {
            CN: "🍔长袖子",
            EN: "🍔Long Sleeves",
            RU: "🍔Длинные рукава",
        },
    },
    {
        groupDef: {
            Group: "新前发_Luzi",
            Priority: 52,
            Default: false,
            Random: false,
            PreviewZone: [140, 40, 220, 220],
            EditOpacity: true,
            MinOpacity: 0,
            MaxOpacity: 1,
            Asset: [
                {
                    Name: "无_Luzi",
                    Random: false,
                },
            ],
            Color: ["Default"],
        },
        description: {
            CN: "🍔新前发",
            EN: "🍔New front hair",
            RU: "🍔новые волосы на спине",
        },
    },
    {
        groupDef: {
            Group: "新后发_Luzi",
            Priority: 5,
            Default: false,
            Random: false,
            PreviewZone: [55, 0, 390, 390],
            EditOpacity: true,
            MinOpacity: 0,
            MaxOpacity: 1,
            Asset: [
                {
                    Name: "无_Luzi",
                    Random: false,
                },
            ],
            Color: ["Default"],
        },
        description: {
            CN: "🍔新后发",
            EN: "🍔New back hair",
            RU: "🍔новые волосы на спине",
        },
    },
    {
        groupDef: {
            Group: "额外头发_Luzi",
            Priority: 53,
            Default: false,
            Random: false,
            EditOpacity: true,
            MinOpacity: 0,
            MaxOpacity: 1,
            Asset: [
                {
                    Name: "无_Luzi",
                    Random: false,
                },
            ],
            Color: ["Default"],
        },
        description: {
            CN: "🍔额外头发",
            EN: "🍔Extra hair",
            RU: "🍔дополнительные волосы",
        },
    },
];

/** @type {CopyGroupInfo[]} */
const copyGroups = [
    {
        name: "BodyMarkings2_Luzi",
        mirror: "BodyMarkings",
        description: {
            CN: "🍔身体涂画 2",
            EN: "🍔Body Markings 2",
            RU: "🍔Нарисованные отметины на теле 2",
        },
    },
    {
        name: "Cloth_笨笨蛋Luzi",
        mirror: "Cloth",
        description: {
            CN: "🍔衣服 2",
            EN: "🍔Cloth 2",
            RU: "🍔Одежда 2",
        },
    },
    {
        name: "Cloth_笨笨笨蛋Luzi2",
        mirror: "Cloth",
        description: {
            CN: "🍔衣服 3",
            EN: "🍔Cloth 3",
            RU: "🍔Одежда 3",
        },
    },
    {
        name: "ClothLower_笨笨蛋Luzi",
        mirror: "ClothLower",
        description: {
            CN: "🍔下装 2",
            EN: "🍔Bottom 2",
            RU: "🍔Нижняя одежда 2",
        },
    },
    {
        name: "ClothLower_笨笨笨蛋Luzi2",
        mirror: "ClothLower",
        description: {
            CN: "🍔下装 3",
            EN: "🍔Bottom 3",
            RU: "🍔Нижняя одежда 3",
        },
    },
    {
        name: "Panties_笨笨蛋Luzi",
        mirror: "Panties",
        description: {
            CN: "🍔内裤 2",
            EN: "🍔Panties 2",
            RU: "🍔Трусики 2",
        },
    },
    {
        name: "ClothAccessory_笨笨蛋Luzi",
        mirror: "ClothAccessory",
        description: {
            CN: "🍔服装配饰 2",
            EN: "🍔Cloth Accessory 2",
            RU: "🍔Аксессуары одежды 2",
        },
    },
    {
        name: "ClothAccessory_笨笨笨蛋Luzi2",
        mirror: "ClothAccessory",
        description: {
            CN: "🍔服装配饰 3",
            EN: "🍔Cloth Accessory 3",
            RU: "🍔Аксессуары одежды 3",
        },
    },
    {
        name: "Necklace_笨笨蛋Luzi",
        mirror: "Necklace",
        description: {
            CN: "🍔项链 2",
            EN: "🍔Necklace 2",
            RU: "🍔Цепочка 2",
        },
    },
    {
        name: "Bra_笨笨蛋Luzi",
        mirror: "Bra",
        description: {
            CN: "🍔胸罩 2",
            EN: "🍔Bra 2",
            RU: "🍔Бюстгальтер 2",
        },
    },
    {
        name: "Shoes_笨笨蛋Luzi",
        mirror: "Shoes",
        description: {
            CN: "🍔鞋子 2",
            EN: "🍔Shoes 2",
            RU: "🍔Обувь 2",
        },
    },
    {
        name: "Hat_笨笨蛋Luzi",
        mirror: "Hat",
        description: {
            CN: "🍔帽子 2",
            EN: "🍔Hat 2",
            RU: "🍔Шляпа 2",
        },
    },
    {
        name: "HairAccessory3_笨笨蛋Luzi",
        mirror: "HairAccessory3",
        description: {
            CN: "🍔发饰 2",
            EN: "🍔Hair Accessory 2",
            RU: "🍔Прическа Аксессуар 2",
        },
    },
    {
        name: "Gloves_笨笨蛋Luzi",
        mirror: "Gloves",
        description: {
            CN: "🍔手套 2",
            EN: "🍔Gloves 2",
            RU: "🍔Перчатки 2",
        },
    },
    {
        name: "Mask_笨笨蛋Luzi",
        mirror: "Mask",
        description: {
            CN: "🍔面具 2",
            EN: "🍔Mask 2",
            RU: "🍔Маска 2",
        },
    },
    {
        name: "Wings_笨笨蛋Luzi",
        mirror: "Wings",
        description: {
            CN: "🍔翅膀 2",
            EN: "🍔Wings 2",
            RU: "🍔Крылья 2",
        },
    },
];

export default function () {
    groups.forEach((definition) => {
        AssetManager.addGroup(definition.groupDef, definition.description);
    });

    copyGroups.forEach((definition) => {
        AssetManager.addCopyGroup(definition.name, definition.mirror, definition.description);
    });
}
