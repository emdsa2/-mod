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
    Socks: [
        {
            Name: "圣诞_Luzi",
            Random: false,
            Top: 0,
            Left: 0,
            Layer: [{ Name: "袜子" }, { Name: "绒毛" }],
        },
        {
            Name: "踩脚袜_Luzi",
            Random: false,
            Top: 0,
            Left: 0,
        },
        {
            Name: "条纹袜_Luzi",
            Random: false,
            Top: 0,
            Left: 0,
        },
        {
            Name: "条纹袜2_Luzi",
            Random: false,
            Top: 0,
            Left: 0,
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
        {
            Name: "阿巴阿巴_Luzi",
            Random: false,
            Top: -110,
            Left: 0,
            Fetish: ["Sadism"],
            // AllowActivity: ["ShockItem"],
            // ActivityAudio: ["Shocks"],
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

export default function () {
    AssetManager.addGroupedAssets(assets);
}
