import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomGroupedAssetDefinitions} */
const assets = {
    ItemMouth: [
        {
            Name: "棒棒糖_Luzi",
            Random: false,
            Top: 0,
            Left: 0,
            ParentGroup: null,
            Effect: [E.BlockMouth],
            PoseMapping: {
                TapedHands: PoseType.DEFAULT,
                Yoked: PoseType.DEFAULT,
                OverTheHead: PoseType.DEFAULT,
                BackBoxTie: PoseType.DEFAULT,
                BackElbowTouch: PoseType.DEFAULT,
                BackCuffs: PoseType.DEFAULT,
                Hogtied: PoseType.DEFAULT,
                AllFours: PoseType.DEFAULT,
            },
            Priority: 55,
            Layer: [
                { Name: "棒子", },
                { Name: "糖", },
                { Name: "条纹", },
            ],
        },
        {
            Name: "烤鱼_Luzi",
            Random: false,
            Top: 0,
            Left: 0,
            Priority: 55,
            ParentGroup: null,
            Effect: [E.BlockMouth],
            PoseMapping: {
                TapedHands: PoseType.DEFAULT,
                Yoked: PoseType.DEFAULT,
                OverTheHead: PoseType.DEFAULT,
                BackBoxTie: PoseType.DEFAULT,
                BackElbowTouch: PoseType.DEFAULT,
                BackCuffs: PoseType.DEFAULT,
                Hogtied: PoseType.DEFAULT,
                AllFours: PoseType.DEFAULT,
            },
        },
        {
            Name: "鸡腿_Luzi",
            Random: false,
            Top: 0,
            Left: 0,
            Priority: 55,
            ParentGroup: null,
            Effect: [E.BlockMouth],
            PoseMapping: {
                TapedHands: PoseType.DEFAULT,
                Yoked: PoseType.DEFAULT,
                OverTheHead: PoseType.DEFAULT,
                BackBoxTie: PoseType.DEFAULT,
                BackElbowTouch: PoseType.DEFAULT,
                BackCuffs: PoseType.DEFAULT,
                Hogtied: PoseType.DEFAULT,
                AllFours: PoseType.DEFAULT,
            },
        },
    ],
    ItemHandheld: [
        {
            Name: "汉堡_Luzi",
            Random: false,
            Top: 0,
            Left: 2,
            ParentGroup: null,
            PoseMapping: {
                TapedHands: PoseType.DEFAULT,
                Yoked: PoseType.DEFAULT,
                OverTheHead: PoseType.DEFAULT,
                BackBoxTie: PoseType.DEFAULT,
                BackElbowTouch: PoseType.DEFAULT,
                BackCuffs: PoseType.DEFAULT,
                Hogtied: PoseType.DEFAULT,
                AllFours: PoseType.DEFAULT,
            },
        },
        {
            Name: "棒棒糖_Luzi",
            Random: false,
            Top: 0,
            Left: 0,
            ParentGroup: null,
            PoseMapping: {
                TapedHands: PoseType.DEFAULT,
                Yoked: PoseType.DEFAULT,
                OverTheHead: PoseType.DEFAULT,
                BackBoxTie: PoseType.DEFAULT,
                BackElbowTouch: PoseType.DEFAULT,
                BackCuffs: PoseType.DEFAULT,
                Hogtied: PoseType.DEFAULT,
                AllFours: PoseType.DEFAULT,
            },
            Layer: [
                {
                    Name: "棒子",
                    Priority: 55,
                },
                {
                    Name: "糖",
                    Priority: 55,
                },
                {
                    Name: "条纹",
                    Priority: 55,
                },
            ],
        },
        {
            Name: "烤鱼_Luzi",
            Random: false,
            Top: 0,
            Left: 0,
            ParentGroup: null,
            PoseMapping: {
                Yoked: PoseType.DEFAULT,
                OverTheHead: PoseType.DEFAULT,
                BackBoxTie: PoseType.DEFAULT,
                BackElbowTouch: PoseType.DEFAULT,
                BackCuffs: PoseType.DEFAULT,
                Hogtied: PoseType.DEFAULT,
                AllFours: PoseType.DEFAULT,
            },
            Layer: [
                {
                    Name: "竹签",
                    Priority: 55,
                },
                {
                    Name: "鱼",
                    Priority: 55,
                },
            ],
        },
        {
            Name: "鸡腿_Luzi",
            Random: false,
            Top: 0,
            Left: 0,
            ParentGroup: null,
            PoseMapping: {
                TapedHands: PoseType.DEFAULT,
                Yoked: "Hide",
                OverTheHead: "Hide",
                BackBoxTie: "Hide",
                BackElbowTouch: "Hide",
                BackCuffs: "Hide",
                Hogtied: "Hide",
                AllFours: "Hide",
            },
        },
    ],
    ItemHood: [
        {
            Name: "汉堡_Luzi",
            Random: false,
            Top: 0,
            Left: 2,
            Block: [],
            ParentGroup: null,
            PoseMapping: {
                TapedHands: PoseType.DEFAULT,
                Yoked: PoseType.DEFAULT,
                OverTheHead: PoseType.DEFAULT,
                BackBoxTie: PoseType.DEFAULT,
                BackElbowTouch: PoseType.DEFAULT,
                BackCuffs: PoseType.DEFAULT,
                Hogtied: PoseType.DEFAULT,
                AllFours: PoseType.DEFAULT,
            },
        },
    ],
};

/** @type { Translation.GroupedEntries } */
const translations = {
    CN: {
        ItemHandheld: {
            汉堡_Luzi: "汉堡",
            棒棒糖_Luzi: "棒棒糖",
            烤鱼_Luzi: "烤鱼",
            鸡腿_Luzi: "烤鸡腿",
        },
        ItemMouth: {
            棒棒糖_Luzi: "棒棒糖",
            烤鱼_Luzi: "烤鱼",
            鸡腿_Luzi: "烤鸡腿",
        },
        ItemHood: {
            汉堡_Luzi: "汉堡",
        },
    },
    EN: {
        ItemHands: {
            汉堡_Luzi: "Hamburg",
            棒棒糖_Luzi: "Lollipop",
            烤鱼_Luzi: "Cooked Fish",
            鸡腿_Luzi: "Roasted Thigh",
        },
        ItemMouth: {
            棒棒糖_Luzi: "Lollipop",
            烤鱼_Luzi: "Cooked Fish",
            鸡腿_Luzi: "Roasted Thigh",
        },
        ItemHood: {
            汉堡_Luzi: "Hamburg",
        },
    },
};

export default function () {
    AssetManager.addGroupedAssets(assets, translations);
}
