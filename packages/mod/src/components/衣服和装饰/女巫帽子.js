import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "女巫帽子_Luzi",
    Random: false,
    Gender: "F",
    Top: -220,
    Left: 0,
    Layer: [
        {
            Name: "帽尖",
            Priority: 60,
        },
        {
            Name: "帽檐",
            Priority: 62,
        },
        {
            Name: "帽里",
            Priority: 1,
        },
        {
            Name: "帽里装饰",
            Priority: 2,
        },
        {
            Name: "蝴蝶结",
            Priority: 63,
        },
        {
            Name: "绑带",
            Priority: 61,
        },
        {
            Name: "吊坠",
            Priority: 59,
        },
    ],
};

const translations = { CN: "女巫帽子", EN: "Witch hat" };

export default function () {
    AssetManager.addAsset("Hat", asset, undefined, translations);
}
