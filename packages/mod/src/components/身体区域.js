import AssetManager from "../assetManager";

/** @type { CustomGroupDefinition[]} */
const groups = [
    {
        Group: "Liquid2_Luzi",
        ParentGroup: "BodyLower",
        PoseMapping: { ...AssetPoseMapping.BodyLower },
        Priority: 53,
        Left: 0,
        Top: 0,
        Asset: [
            {
                Name: "无_Luzi",
                Random: false,
            },
        ],
    },
    {
        Group: "BodyMarkings2_Luzi",
        Priority: 9,
        Clothing: true,
        Default: false,
        Random: false,
        Asset: [
            {
                Name: "无_Luzi",
                Random: false,
            },
        ],
    },
];

/** @type {CopyGroupInfo[]} */
const copyGroups = [
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

export default function () {
    groups.forEach((definition) => {
        AssetManager.addGroup(definition);
    });

    copyGroups.forEach((definition) => {
        AssetManager.addCopyGroup(definition.name, definition.mirror, definition.description);
    });
}
