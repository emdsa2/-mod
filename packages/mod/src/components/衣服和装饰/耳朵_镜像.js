import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinitionAppearance[]} */
const assets = [
    {
        Name: "黑猫耳镜像_Luzi",
        Random: false,
        Fetish: ["Pet"],
        BodyCosplay: true,
        Layer: [
            { Name: "Outer", HideForAttribute: ["ShortHair"] },
            { Name: "Inner", HideForAttribute: ["ShortHair"] },
            {
                Name: "OuterShort",
                ShowForAttribute: ["ShortHair"],
                CopyLayerColor: "Outer",
                Top: 30,
                Left: 115,
            },
            {
                Name: "InnerShort",
                ShowForAttribute: ["ShortHair"],
                CopyLayerColor: "Inner",
                Top: 30,
                Left: 115,
            },
        ],
    },
];

/** @type { Translation.GroupedEntries } */
const translations = {
    CN: {
        HairAccessory2: {
            黑猫耳镜像_Luzi: "黑猫耳镜像",
        },
    },
    EN: {
        HairAccessory2: {
            黑猫耳镜像_Luzi: "Black Cat Ears Mirror",
        },
    },
    RU: {
        HairAccessory2: {
            黑猫耳镜像_Luzi: "Зеркальные чёрные кошачьи уши",
        },
    },
};

export default function () {
    AssetManager.addGroupedAssets({ HairAccessory2: assets }, translations);
}
