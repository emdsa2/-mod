import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomGroupedAssetDefinitions} */
const assets = {
    ItemMouth: [
        {
            Name: "大号拉珠",
            Random: false,
            Top: 0,
            Left: 0,
            Priority: 55,
            ParentGroup: null,
            Effect: [],
        },
    ],
    ItemHandheld: [
        {
            Name: "大号拉珠",
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
};

/** @type { Translation.GroupedEntries } */
const translations = {
    CN: {
        ItemHandheld: {
            大号拉珠: "大号拉珠",
        },
        ItemMouth: {
            大号拉珠: "大号拉珠",
        },
    },
    EN: {
        ItemHandheld: {
            大号拉珠: "大号拉珠",
        },
        ItemMouth: {
            大号拉珠: "大号拉珠",
        },
    },
    RU: {
        ItemHandheld: {
            大号拉珠: "大号拉珠",
        },
        ItemMouth: {
            大号拉珠: "大号拉珠",
        },
    },
};

export default function () {
    AssetManager.addGroupedAssets(assets, translations);
}
