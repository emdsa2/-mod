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
        },
    },
    {
        groupDef: {
            Group: "身体痕迹_Luzi",
            Priority: 10,
            Clothing: true,
            Default: false,
            Random: false,
            Asset: [
                {
                    Name: "无_Luzi",
                    Random: false,
                },
            ],
            Color: [
                "Default",
            ],
        },
        description: {
            CN: "🍔鞭痕",
            EN: "🍔鞭痕",
        },
    },
    {
        groupDef: {
            Group: "动物身体_Luzi",
            Priority: 10,
            Clothing: true,
            Default: false,
            Random: false,
            Asset: [
                {
                    Name: "无_Luzi",
                    Random: false,
                },
            ],
            Color: [
                "Default",
            ],
        },
        description: {
            CN: "🍔动物身体",
            EN: "🍔动物身体",
        },
    },
];

/** @type {CopyGroupInfo[]} */
const copyGroups = [
    {
        name: "BodyMarkings2_Luzi",
        mirror: "BodyMarkings",
        description: {
            CN: "🍔身体涂画2",
            EN: "🍔BodyMarkings2",
        },
    },
    {
        name: "Cloth_笨笨蛋Luzi",
        mirror: "Cloth",
        description: {
            CN: "🍔衣服2",
            EN: "🍔Cloth2",
        },
    },
    {
        name: "ClothLower_笨笨蛋Luzi",
        mirror: "ClothLower",
        description: {
            CN: "🍔下装2",
            EN: "🍔Bottom2",
        },
    },
    {
        name: "Cloth_笨笨笨蛋Luzi2",
        mirror: "Cloth",
        description: {
            CN: "🍔衣服3",
            EN: "🍔Cloth3",
        },
    },
    {
        name: "ClothLower_笨笨笨蛋Luzi2",
        mirror: "ClothLower",
        description: {
            CN: "🍔下装3",
            EN: "🍔Bottom3",
        },
    },
    {
        name: "Panties_笨笨蛋Luzi",
        mirror: "Panties",
        description: {
            CN: "🍔内裤2",
            EN: "🍔Panties2",
        },
    },
    {
        name: "ClothAccessory_笨笨蛋Luzi",
        mirror: "ClothAccessory",
        description: {
            CN: "🍔服装配饰2",
            EN: "🍔Cloth Accessory2",
        },
    },
    {
        name: "Necklace_笨笨蛋Luzi",
        mirror: "Necklace",
        description: {
            CN: "🍔项链2",
            EN: "🍔Necklace2",
        },
    },
    {
        name: "Bra_笨笨蛋Luzi",
        mirror: "Bra",
        description: {
            CN: "🍔胸罩2",
            EN: "🍔Bra2",
        },
    },
    {
        name: "Shoes_笨笨蛋Luzi",
        mirror: "Shoes",
        description: {
            CN: "🍔鞋子2",
            EN: "🍔Shoes2",
        },
    },
    {
        name: "Hat_笨笨蛋Luzi",
        mirror: "Hat",
        description: {
            CN: "🍔帽子2",
            EN: "🍔Hat2",
        },
    },
    {
        name: "HairAccessory3_笨笨蛋Luzi",
        mirror: "HairAccessory3",
        description: {
            CN: "🍔发饰2",
            EN: "🍔Hair Accessory2",
        },
    },
    {
        name: "Gloves_笨笨蛋Luzi",
        mirror: "Gloves",
        description: {
            CN: "🍔手套2",
            EN: "🍔Gloves2",
        },
    },
    {
        name: "Mask_笨笨蛋Luzi",
        mirror: "Mask",
        description: {
            CN: "🍔面具2",
            EN: "🍔Mask2",
        },
    },
    {
        name: "Wings_笨笨蛋Luzi",
        mirror: "Wings",
        description: {
            CN: "🍔翅膀2",
            EN: "🍔Wings2",
        },
    },
];

/** @type {CustomGroupedAssetDefinitions} */
const groupedAssets = {
    BodyMarkings2_Luzi: [
        {
            Name: "淫纹_Luzi",
            Random: false,
            Gender: "F",
            Top: -110,
            Left: 0,
            Priority: 9,
            PoseMapping: {
                BackBoxTie: PoseType.DEFAULT,
                BackCuffs: PoseType.DEFAULT,
                BackElbowTouch: PoseType.DEFAULT,
                OverTheHead: PoseType.DEFAULT,
                TapedHands: PoseType.DEFAULT,
                Yoked: PoseType.DEFAULT,
                AllFours: PoseType.HIDE,
                Hogtied: PoseType.HIDE,
            },
            DefaultColor: ["#E975A0"],
        },
        {
            Name: "刻度尺_Luzi",
            Random: false,
            Gender: "F",
            Top: 0,
            Left: 0,
            Priority: 9,
            PoseMapping: {
                BackBoxTie: PoseType.DEFAULT,
                BackCuffs: PoseType.DEFAULT,
                BackElbowTouch: PoseType.DEFAULT,
                OverTheHead: PoseType.DEFAULT,
                TapedHands: PoseType.DEFAULT,
                Yoked: PoseType.DEFAULT,
                AllFours: PoseType.HIDE,
                Hogtied: PoseType.HIDE,
            },
            DefaultColor: ["#000000"],
        },
        {
            Name: "番茄酱_Luzi",
            Random: false,
            Top: 0,
            Left: 0,
            Priority: 9,
            PoseMapping: {
                BackBoxTie: PoseType.DEFAULT,
                BackCuffs: PoseType.DEFAULT,
                BackElbowTouch: PoseType.DEFAULT,
                OverTheHead: PoseType.DEFAULT,
                TapedHands: PoseType.DEFAULT,
                Yoked: PoseType.DEFAULT,
                AllFours: PoseType.HIDE,
                Hogtied: PoseType.HIDE,
            },
        },
    ],
};

export default function () {
    groups.forEach((definition) => {
        AssetManager.addGroup(definition.groupDef, definition.description);
    });

    copyGroups.forEach((definition) => {
        AssetManager.addCopyGroup(definition.name, definition.mirror, definition.description);
    });

    AssetManager.addGroupedAssets(groupedAssets);
}
