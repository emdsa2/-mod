import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "坐标尺_Luzi",
    Random: false,
    Top: 0,
    Left: 0,
    Priority: 99,
    Alpha: [
        {
            Group: [
                "ItemDevices",
            ],
            Masks: [
                [0, 100, 100, 100], //下
            ],
        },
    ],
};

const translations = { CN: "坐牢尺", EN: "坐牢尺" };

export default function () {
    AssetManager.addAsset("BodyMarkings2_Luzi", asset, undefined, translations);
}
