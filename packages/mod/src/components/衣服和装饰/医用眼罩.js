import AssetManager from "@mod-utils/AssetManager";
import { VersionSupport } from "@mod-utils/VersionSupport";

/** @type {CustomAssetDefinition} */
const asset1 = {
    Name: "医用眼罩左",
    Random: false,
    Top: 0,
    Left: 0,
    ParentGroup: VersionSupport.NoParentGroup,
    Priority: 29,
    Extended: true,
    DefaultColor: ["Default", "Default", "#F65E5E", "#242424"],
    Layer: [
        { Name: "线" },
        { Name: "底" },
        { Name: "心", AllowTypes: { typed: 1 } },
        { Name: "X", AllowTypes: { typed: 2 } },
    ],
};

const translations1 = {
    CN: "医用眼罩左",
    EN: "Medical Eye Mask Left",
};

const asset2 = {
    Name: "医用眼罩右",
    Random: false,
    Top: 0,
    Left: 0,
    ParentGroup: VersionSupport.NoParentGroup,
    Priority: 29,
    Extended: true,
    DefaultColor: ["Default", "Default", "#F65E5E", "#242424"],
    Layer: [
        { Name: "线" },
        { Name: "底" },
        { Name: "心", AllowTypes: { typed: 1 } },
        { Name: "X", AllowTypes: { typed: 2 } },
    ],
};

const translations2 = {
    CN: "医用眼罩右",
    EN: "Medical Eye Mask Right",
};

const extended = {
    Archetype: ExtendedArchetype.TYPED,
    DrawImages: false,
    Options: [
        { Name: "无图案" },
        { Name: "心" },
        { Name: "叉" },
    ],
};

/** @type {Translation.Dialog} */
const dialog = {
    CN: {
        Glasses医用眼罩左Select: "图案",
        Glasses医用眼罩左无图案: "无图案",
        Glasses医用眼罩左心: "心",
        Glasses医用眼罩左叉: "叉",
        Glasses医用眼罩右Select: "图案",
        Glasses医用眼罩右无图案: "无图案",
        Glasses医用眼罩右心: "心",
        Glasses医用眼罩右叉: "叉",
    },
    EN: {
        Glasses医用眼罩左Select: "Pattern",
        Glasses医用眼罩左无图案: "No Pattern",
        Glasses医用眼罩左心: "Heart",
        Glasses医用眼罩左叉: "Cross",
        Glasses医用眼罩右Select: "Pattern",
        Glasses医用眼罩右无图案: "No Pattern",
        Glasses医用眼罩右心: "Heart",
        Glasses医用眼罩右叉: "Cross",
    }
};



export default function () {
    AssetManager.addAsset("Glasses", asset1, extended, translations1);
    AssetManager.addAsset("Glasses", asset2, extended, translations2);
    AssetManager.addCustomDialog(dialog);
}
