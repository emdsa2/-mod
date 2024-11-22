import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "塑身衣1_Luzi",
    Random: false,
    Top: 0,
    Left: 0,
    Priority: 14, 
    Layer: [
        {
            Name: "上",
            ParentGroup: "BodyUpper",
            PoseMapping: {
                TapedHands: PoseType.DEFAULT,
                BackBoxTie: PoseType.DEFAULT,
                BackCuffs: PoseType.DEFAULT,
                BackElbowTouch: PoseType.DEFAULT,
                OverTheHead: PoseType.DEFAULT,
                Yoked: PoseType.DEFAULT,
                Hogtied: "Hogtied",
                AllFours: PoseType.HIDE,
            },
        },
        {
            Name: "下",
            ParentGroup: "BodyLower",
            PoseMapping: {
                LegsClosed: "LegsClosed",
                KneelingSpread: "KneelingSpread",
                Kneel: "Kneel",
                Spread: "Spread",
                Hogtied: PoseType.HIDE,
                AllFours: PoseType.HIDE,
            },
        },
        {
            Name: "蕾丝边上",
            ParentGroup: "BodyUpper",
            PoseMapping: {
                TapedHands: PoseType.DEFAULT,
                BackBoxTie: PoseType.DEFAULT,
                BackCuffs: PoseType.DEFAULT,
                BackElbowTouch: PoseType.DEFAULT,
                OverTheHead: PoseType.DEFAULT,
                Yoked: PoseType.DEFAULT,
                Hogtied: "Hogtied",
                AllFours: PoseType.HIDE,
            },
        },
        {
            Name: "蕾丝边下",
            Priority: 14,
            ParentGroup: "BodyLower",
            PoseMapping: {
                LegsClosed: "LegsClosed",
                KneelingSpread: "KneelingSpread",
                Kneel: "Kneel",
                Spread: "Spread",
                Hogtied: PoseType.HIDE,
                AllFours: PoseType.HIDE,
            },
        },
        {
            Name: "蕾丝中上",
            ParentGroup: "BodyUpper",
            PoseMapping: {
                TapedHands: PoseType.DEFAULT,
                BackBoxTie: PoseType.DEFAULT,
                BackCuffs: PoseType.DEFAULT,
                BackElbowTouch: PoseType.DEFAULT,
                OverTheHead: PoseType.DEFAULT,
                Yoked: PoseType.DEFAULT,
                Hogtied: "Hogtied",
                AllFours: PoseType.HIDE,
            },
        },
        {
            Name: "蕾丝中下",
            Priority: 14,
            ParentGroup: "BodyLower",
            PoseMapping: {
                LegsClosed: "LegsClosed",
                KneelingSpread: "KneelingSpread",
                Kneel: "Kneel",
                Spread: "Spread",
                Hogtied: PoseType.HIDE,
                AllFours: PoseType.HIDE,
            },
        },
        {
            Name: "边线上",
            ParentGroup: "BodyUpper",
            PoseMapping: {
                TapedHands: PoseType.DEFAULT,
                BackBoxTie: PoseType.DEFAULT,
                BackCuffs: PoseType.DEFAULT,
                BackElbowTouch: PoseType.DEFAULT,
                OverTheHead: PoseType.DEFAULT,
                Yoked: PoseType.DEFAULT,
                Hogtied: "Hogtied",
                AllFours: PoseType.HIDE,
            },
        },
        {
            Name: "边线下",
            Priority: 14,
            ParentGroup: "BodyLower",
            PoseMapping: {
                LegsClosed: "LegsClosed",
                KneelingSpread: "KneelingSpread",
                Kneel: "Kneel",
                Spread: "Spread",
                Hogtied: PoseType.HIDE,
                AllFours: PoseType.HIDE,
            },
        },
        {
            Name: "中线上",
            ParentGroup: "BodyUpper",
            PoseMapping: {
                TapedHands: PoseType.DEFAULT,
                BackBoxTie: PoseType.DEFAULT,
                BackCuffs: PoseType.DEFAULT,
                BackElbowTouch: PoseType.DEFAULT,
                OverTheHead: PoseType.DEFAULT,
                Yoked: PoseType.DEFAULT,
                Hogtied: "Hogtied",
                AllFours: PoseType.HIDE,
            },
        },
        {
            Name: "中线下",
            Priority: 14,
            ParentGroup: "BodyLower",
            PoseMapping: {
                LegsClosed: "LegsClosed",
                KneelingSpread: "KneelingSpread",
                Kneel: "Kneel",
                Spread: "Spread",
                Hogtied: PoseType.HIDE,
                AllFours: PoseType.HIDE,
            },
        },
        {
            Name: "底边下",
            Priority: 14,
            ParentGroup: "BodyLower",
            PoseMapping: {
                LegsClosed: "LegsClosed",
                KneelingSpread: "KneelingSpread",
                Kneel: "Kneel",
                Spread: "Spread",
                Hogtied: PoseType.HIDE,
                AllFours: PoseType.HIDE,
            },
        },
        {
            Name: "蕾丝上上",
            ParentGroup: "BodyUpper",
            PoseMapping: {
                TapedHands: PoseType.DEFAULT,
                BackBoxTie: PoseType.DEFAULT,
                BackCuffs: PoseType.DEFAULT,
                BackElbowTouch: PoseType.DEFAULT,
                OverTheHead: PoseType.DEFAULT,
                Yoked: PoseType.DEFAULT,
                Hogtied: "Hogtied",
                AllFours: PoseType.HIDE,
            },
        },
        {
            Name: "钢圈",
            ParentGroup: "BodyUpper",
            PoseMapping: {
                TapedHands: PoseType.DEFAULT,
                BackBoxTie: PoseType.DEFAULT,
                BackCuffs: PoseType.DEFAULT,
                BackElbowTouch: PoseType.DEFAULT,
                OverTheHead: PoseType.DEFAULT,
                Yoked: PoseType.DEFAULT,
                Hogtied: "Hogtied",
                AllFours: PoseType.HIDE,
            },
        },
        {
            Name: "肩带",
            ParentGroup: "BodyUpper",
            PoseMapping: {
                TapedHands: PoseType.DEFAULT,
                BackBoxTie: PoseType.DEFAULT,
                BackCuffs: PoseType.DEFAULT,
                BackElbowTouch: PoseType.DEFAULT,
                OverTheHead: PoseType.DEFAULT,
                Yoked: PoseType.DEFAULT,
                Hogtied: "Hogtied",
                AllFours: PoseType.HIDE,
            },
        },








    ],
};

/** @type {Translation.Entry} */
const translation = {
    CN: "塑身衣 1",
    EN: "塑身衣 1",
};

export default function () {
    AssetManager.addAsset("Bra", asset, null, translation);
}
