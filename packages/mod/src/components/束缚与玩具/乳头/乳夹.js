import AssetManager from "@mod-utils/AssetManager";
import { VersionSupport } from "@mod-utils/VersionSupport";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "乳夹_Luzi",
    Fetish: ["Metal"],
    Value: -1,
    Difficulty: 10,
    Time: 15,
    Top: 0,
    Left: 0,
    AllowLock: true,
    Prerequisite: ["AccessBreast", "AccessBreastSuitZip"],
    Effect: [E.Wiggling, E.UseRemote],
    ExpressionTrigger: [
        { Name: "Closed", Group: "Eyes", Timer: 5 },
        { Name: "Angry", Group: "Eyebrows", Timer: 5 },
    ],
    PoseMapping: {
        AllFours: "Hide",
    },
    Layer: [
        {
            Name: "乳夹",
        },
        {
            Name: "链子",
            ParentGroup: VersionSupport.NoParentGroup,
        },
    ],
};

const extended = {
    Archetype: ExtendedArchetype.VIBRATING
};

const translations = {
    CN: "乳夹",
    EN: "乳夹",
    RU: "乳夹",
    UA: "乳夹",
};

export default function () {
    AssetManager.addAsset("ItemNipples", asset, extended, translations);
}
