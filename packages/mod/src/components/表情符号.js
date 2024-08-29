import AssetManager from "@mod-utils/AssetManager";

const Emoticon内容 = [
    "画稿子_Luzi",
];

export default function () {
    AssetManager.modifyAsset("Emoticon", "Emoticon", (group, asset) => {
        group.AllowExpression = /** @type { ExpressionName[] }*/ ([...group.AllowExpression, ...Emoticon内容]);
    });
}
