import AssetManager from "../../assetManager";

/** @type { CustomGroupedAssetDefinitions }} */
const assets = {
    Wings: [
        {
            Name: "蝴蝶结背饰_Luzi",
            Random: false,
            Top: -110,
            Left: 0,
        },
    ],
    Glasses: [
        {
            Name: "单边眼镜左_Luzi",
            Random: false,
            Top: 0,
            Left: 0,
        },
        {
            Name: "单边眼镜右_Luzi",
            Random: false,
            Top: 0,
            Left: 0,
        },
        {
            Name: "眼镜卡_Luzi",
            Random: false,
            Top: 0,
            Left: 0,
            Layer: [{ Name: "眼镜", Priority: 56 }],
        },
    ],
    Panties: [
        {
            Name: "淫纹_Luzi",
            Random: false,
            Gender: "F",
            Top: -110,
            Left: 0,
            Priority: 9,
            Prerequisite: ["HasVagina"],
            Fetish: ["Lingerie"],
            DefaultColor: ["#E975A0"],
        },
    ],
    BodyMarkings: [
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
    Shoes: [
        {
            Name: "鱼嘴高跟鞋_Luzi",
            Random: false,
            Top: 0,
            Left: 0,
            PoseMapping: {
                Kneel: "Hide",
                KneelingSpread: "Hide",
                LegsClosed: "LegsClosed",
                Spread: "Hide",
            },
            DefaultColor: [
                "#FFFFFF",
                "#FFFFFF",
                "#000000",
                "#000000",
                "#000000",
                "#000000",
            ],
            Layer: [
                {
                    Name: "高光",
                    Priority: 18,
                },
                {
                    Name: "卡扣",
                    Priority: 19,
                },
                {
                    Name: "绑带",
                    Priority: 18,
                },
                {
                    Name: "鞋面",
                    Priority: 17,
                },
                {
                    Name: "鞋垫",
                    Priority: 1,
                },
                {
                    Name: "鞋底",
                    Priority: 1,
                },
            ],
        },
    ],
    Bracelet: [
        {
            Name: "广袖_Luzi",
            Random: false,
            Top: 0,
            Left: 0,
            ParentGroup: "BodyUpper",
            PoseMapping: {
                BackBoxTie: "Hide",
                BackCuffs: "Hide",
                BackElbowTouch: "Hide",
                OverTheHead: "Hide",
                Yoked: "Hide",
                Hogtied: "Hide",
                AllFours: "Hide",
            },
            // Layer: [
            //     {
            //         Name: "高光",
            //         Priority: 18,
            //     },
            // ],
        },
    ],


    ItemHands: [
        {
            Name: "拳击手套_Luzi",
            Random: false,
            Gender: "F",
            PoseMapping: {
                Yoked: "Yoked",
                OverTheHead: "OverTheHead",
                BackBoxTie: "Hide",
                BackElbowTouch: "Hide",
                BackCuffs: "Hide",
                Hogtied: "Hide",
                AllFours: "Hide",
            },
            Effect: [E.MergedFingers],
            Hide: ["ItemHandheld"],
        },
    ],
    ItemHandheld: [
        {
            Name: "电蚊拍_Luzi",
            Random: false,
            Top: -110,
            Left: 0,
            ParentGroup: null,
            Fetish: ["Sadism"],
            AllowActivity: ["ShockItem"],
            ActivityAudio: ["Shocks"],
            PoseMapping: {
                TapedHands: "Hide",
                Yoked: "Hide",
                OverTheHead: "Hide",
                BackBoxTie: "Hide",
                BackElbowTouch: "Hide",
                BackCuffs: "Hide",
                AllFours: "Hide",
            },
        },
    ],
    
    //TODO Saki (鞍缰绳)
    ItemTorso: [
        {
            Name: "鞍_Luzi",
            Random: false,
            // SetPose: ["AllFours"],
            AllowActivePose: ["AllFours"],
        },
        {
            Name: "缰绳_Luzi",
            Random: false,
        },
    ],
    ItemDevices: [
        {
            Name: "树_Luzi",
            Random: false,
            Top: -110,
            Left: -150,
        },
    ],
};

/** @type { Translation.GroupedEntries } */
const translations = {
    CN: {
        Wings: {
            蝴蝶结背饰_Luzi: "蝴蝶结背饰",
        },
        Glasses: {
            单边眼镜左_Luzi: "单边眼镜左",
            单边眼镜右_Luzi: "单边眼镜右",
            眼镜卡_Luzi: "眼镜卡",
        },
        Socks: {
            圣诞_Luzi: "圣诞",
            踩脚袜_Luzi: "踩脚袜",
            条纹袜_Luzi: "条纹袜",
            条纹袜2_Luzi: "条纹袜2",
        },
        Panties: {
            淫纹_Luzi: "淫纹",
        },
        BodyMarkings: {
            淫纹_Luzi: "淫纹",
            刻度尺_Luzi: "刻度尺",
            番茄酱_Luzi: "番茄酱",
        },
        Shoes: {
            鱼嘴高跟鞋_Luzi: "鱼嘴高跟鞋",
        },
        Bracelet: {
            广袖_Luzi: "广袖",
        },
        ItemHands: {
            拳击手套_Luzi: "拳击手套",
        },
        ItemHandheld: {
            电蚊拍_Luzi: "电蚊拍",
        },
        ItemTorso: {
            鞍_Luzi: "鞍",
            缰绳_Luzi: "缰绳",
        },
        ItemDevices: {
            树_Luzi: "树",
        },
    },
    EN: {
        Wings: {
            蝴蝶结背饰_Luzi: "Bow Back Accessory",
        },
        Glasses: {
            单边眼镜左_Luzi: "Monocle Left",
            单边眼镜右_Luzi: "Monocle Right",
            眼镜卡_Luzi: "Glasses Card",
        },
        Socks: {
            圣诞_Luzi: "Christmas",
            踩脚袜_Luzi: "Footstep Socks",
            条纹袜_Luzi: "Striped Socks",
            条纹袜2_Luzi: "Striped Socks 2",
        },
        Panties: {
            淫纹_Luzi: "Lewd Crest",
        },
        BodyMarkings: {
            淫纹_Luzi: "Lewd Crest",
            刻度尺_Luzi: "Ruler",
            番茄酱_Luzi: "Ketchup",
        },
        Shoes: {
            鱼嘴高跟鞋_Luzi: "Fish toe high heels",
        },
        Bracelet: {
            广袖_Luzi: "Wide sleeve",
        },
        ItemHands: {
            拳击手套_Luzi: "Boxing Gloves",
        },
        ItemHandheld: {
            电蚊拍_Luzi: "Electric Fly Swatter",
        },
        ItemTorso: {
            鞍_Luzi: "Saddle",
            缰绳_Luzi: "Reins",
        },
        ItemDevices: {
            树_Luzi: "Tree",
        },
    },
};

export default function () {
    AssetManager.addGroupedAssets(assets, translations);
}
