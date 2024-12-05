import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "花边连衣裙",
    Random: false,
    Top: 0,
    Left: 0,
    Priority: 26,
    DefaultColor :[
        "#3F3F3F",
        "#9B3131",
        "#3F3F3F",
        "#9B3131",
        "#9B3131",
        "#9B3131",
        "#3F3F3F",
        "#3F3F3F",
        "#323232",
        "#3F3F3F"
    ],
    PoseMapping: {
        Hogtied: PoseType.HIDE,
        AllFours: PoseType.HIDE,
    },
    Layer: [
        {
            Name: "袖",
            PoseMapping: {
                Yoked: "Yoked",
                OverTheHead: "OverTheHead",
                AllFours: PoseType.HIDE,
                Hogtied: PoseType.HIDE,
            },
        },
        {
            Name: "裙边2",
            ParentGroup : null,
        },
        {
            Name: "裙边",
            ParentGroup : null,
        },
        {
            Name: "裙",
        },
        {
            Name: "胸罩",
        },
        {
            Name: "束腰",
        },
        {
            Name: "束腰绑带",
        },
        {
            Name: "腰带",
        },
        {
            Name: "花边",
        },
        {
            Name: "蝴蝶结",
            ParentGroup : null,
        }
    ],
};

/** @type {Translation.Entry} */
const translation = {
    CN: "花边连衣裙",
    EN: "Lace dress",
};

export default function () {
    AssetManager.addAsset("Cloth", asset, undefined, translation);
}
