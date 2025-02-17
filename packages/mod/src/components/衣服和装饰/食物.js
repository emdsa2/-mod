import AssetManager from "@mod-utils/AssetManager";
import ModManager from "@mod-utils/ModManager";
import { VersionSupport } from "@mod-utils/VersionSupport";

/** @type {CustomGroupedAssetDefinitions} */
const assets = {
    ItemMouth: [
        {
            Name: "棒棒糖_Luzi",
            Random: false,
            Top: 0,
            Left: 0,
            ParentGroup: VersionSupport.NoParentGroup,
            Effect: [],
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
            Layer: [{ Name: "棒子" }, { Name: "糖" }, { Name: "条纹" }],
        },
        {
            Name: "烤鱼_Luzi",
            Random: false,
            Top: 0,
            Left: 0,
            Priority: 55,
            ParentGroup: VersionSupport.NoParentGroup,
            Effect: [],
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
            ParentGroup: VersionSupport.NoParentGroup,
            Effect: [],
        },
        {
            Name: "煎包_Luzi",
            Random: false,
            Top: 160,
            Left: 160,
            Priority: 55,
            ParentGroup: VersionSupport.NoParentGroup,
            Effect: [],
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
            Name: "蛋糕卷_Luzi",
            Random: false,
            Top: 0,
            Left: 0,
            Priority: 55,
            ParentGroup: VersionSupport.NoParentGroup,
            Effect: [],
        },
    ],
    ItemHandheld: [
        {
            Name: "汉堡_Luzi",
            Random: false,
            Top: 0,
            Left: 2,
            ParentGroup: VersionSupport.NoParentGroup,
            PoseMapping: {
                TapedHands: PoseType.DEFAULT,
                Yoked: PoseType.HIDE,
                OverTheHead: PoseType.HIDE,
                BackBoxTie: PoseType.HIDE,
                BackElbowTouch: PoseType.HIDE,
                BackCuffs: PoseType.HIDE,
                Hogtied: PoseType.HIDE,
                AllFours: PoseType.HIDE,
            },
        },
        {
            Name: "棒棒糖_Luzi",
            Random: false,
            Top: 0,
            Left: 0,
            ParentGroup: VersionSupport.NoParentGroup,
            PoseMapping: {
                TapedHands: PoseType.DEFAULT,
                Yoked: PoseType.HIDE,
                OverTheHead: PoseType.HIDE,
                BackBoxTie: PoseType.HIDE,
                BackElbowTouch: PoseType.HIDE,
                BackCuffs: PoseType.HIDE,
                Hogtied: PoseType.HIDE,
                AllFours: PoseType.HIDE,
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
            ParentGroup: VersionSupport.NoParentGroup,
            PoseMapping: {
                TapedHands: PoseType.DEFAULT,
                Yoked: PoseType.HIDE,
                OverTheHead: PoseType.HIDE,
                BackBoxTie: PoseType.HIDE,
                BackElbowTouch: PoseType.HIDE,
                BackCuffs: PoseType.HIDE,
                Hogtied: PoseType.HIDE,
                AllFours: PoseType.HIDE,
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
            ParentGroup: VersionSupport.NoParentGroup,
            PoseMapping: {
                TapedHands: PoseType.DEFAULT,
                Yoked: PoseType.HIDE,
                OverTheHead: PoseType.HIDE,
                BackBoxTie: PoseType.HIDE,
                BackElbowTouch: PoseType.HIDE,
                BackCuffs: PoseType.HIDE,
                Hogtied: PoseType.HIDE,
                AllFours: PoseType.HIDE,
            },
        },
        {
            Name: "奶茶",
            Random: false,
            Top: 0,
            Left: 0,
            ParentGroup: VersionSupport.NoParentGroup,
            Priority: 55,
            DefaultColor: ["#BA9273", "#F9F4E0", "#B4B4B4", "Default", "#878787"],
            AllowActivity: ["RubItem", "SipItem"],
            PoseMapping: {
                TapedHands: PoseType.DEFAULT,
                Yoked: PoseType.HIDE,
                OverTheHead: PoseType.HIDE,
                BackBoxTie: PoseType.HIDE,
                BackElbowTouch: PoseType.HIDE,
                BackCuffs: PoseType.HIDE,
                Hogtied: PoseType.HIDE,
                AllFours: PoseType.HIDE,
            },
            Layer: [
                {
                    Name: "底色",
                },
                {
                    Name: "顶色",
                },
                {
                    Name: "盖子",
                },
                {
                    Name: "外观",
                },
                {
                    Name: "吸管",
                },
            ],
        },
    ],
    ItemHood: [
        {
            Name: "汉堡_Luzi",
            Random: false,
            Top: 0,
            Left: 2,
            Block: [],
            ParentGroup: VersionSupport.NoParentGroup,
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
            奶茶: "奶茶",
        },
        ItemMouth: {
            棒棒糖_Luzi: "棒棒糖",
            烤鱼_Luzi: "烤鱼",
            鸡腿_Luzi: "烤鸡腿",
            煎包_Luzi: "煎包",
            蛋糕卷_Luzi: "蛋糕卷",
        },
        ItemHood: {
            汉堡_Luzi: "汉堡",
        },
    },
    EN: {
        ItemHandheld: {
            汉堡_Luzi: "Hamburger",
            棒棒糖_Luzi: "Lollipop",
            烤鱼_Luzi: "Grilled Fish",
            鸡腿_Luzi: "Roasted Chicken Leg",
            蛋糕卷_Luzi: "蛋糕卷",
            奶茶: "Milk Tea",
        },
        ItemMouth: {
            棒棒糖_Luzi: "Lollipop",
            烤鱼_Luzi: "Grilled Fish",
            鸡腿_Luzi: "Roasted Chicken Leg",
            煎包_Luzi: "Fried Bun",
            蛋糕卷_Luzi: "蛋糕卷",
        },
        ItemHood: {
            汉堡_Luzi: "Hamburger",
        },
    },
    RU: {
        ItemHandheld: {
            汉堡_Luzi: "Гамбургер",
            棒棒糖_Luzi: "Леденец",
            烤鱼_Luzi: "Запечённая рыба",
            鸡腿_Luzi: "Запечённая куриная нога",
            奶茶: "чай с молоком",
        },
        ItemMouth: {
            棒棒糖_Luzi: "Леденец",
            烤鱼_Luzi: "Запечённая рыба",
            鸡腿_Luzi: "Запечённая куриная нога",
            蛋糕卷_Luzi: "蛋糕卷",
        },
        ItemHood: {
            汉堡_Luzi: "Гамбургер",
        },
    },
};

export default function () {
    AssetManager.addGroupedAssets(assets, translations);

    AssetManager.afterLoad(() => {
        ModManager.progressiveHook("DrawCharacter")
            .inside("LoginRun")
            .inject((args, next) => {
                if (CurrentScreen !== "Login") return next(args);
                const [C] = args;
                const hood = C.Appearance.find((a) => a.Asset.Group.Name === "ItemHood");
                if (!hood || hood.Asset.Name !== "汉堡_Luzi") {
                    InventoryWear(C, "汉堡_Luzi", "ItemHood");
                    CharacterRefresh(C);
                }
            });
    });
}
