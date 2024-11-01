import AssetManager from "@mod-utils/AssetManager";

/** @type { CustomGroupedAssetDefinitions }} */
const assets = {
    新前发_Luzi: [
        {
            Name: "样式1",
            Random: false,
            Left: 50,
            Top: 0,
            Priority : 52,
            ParentGroup: null,
            Extended: false,
            InheritColor: "HairFront",
            Hide: ["HairFront"]
        },
        {
            Name: "样式2",
            Random: false,
            Left: 50,
            Top: 0,
            Priority : 52,
            ParentGroup: null,
            Extended: false,
            InheritColor: "HairFront",
            Hide: ["HairFront"]
        },
        {
            Name: "样式3",
            Random: false,
            Left: 50,
            Top: 0,
            Priority : 52,
            ParentGroup: null,
            Extended: false,
            InheritColor: "HairFront",
            Hide: ["HairFront"]
        },
        {
            Name: "样式4",
            Random: false,
            Left: 50,
            Top: 0,
            Priority : 52,
            ParentGroup: null,
            Extended: false,
            InheritColor: "HairFront",
            Hide: ["HairFront"]
        },
        {
            Name: "样式5",
            Random: false,
            Left: 50,
            Top: 0,
            Priority : 52,
            ParentGroup: null,
            Extended: false,
            InheritColor: "HairFront",
            Hide: ["HairFront"]
        }
    ],
};

/** @type { Translation.GroupedEntries } */
const translations = {
    CN: {
        新前发_Luzi: {
            样式1: "样式 1",
            样式2: "样式 2",
            样式3: "样式 3",
            样式4: "样式 4",
            样式5: "样式 5",
        },
    },
    EN: {
        新前发_Luzi: {
            样式1: "Hair 1",
            样式2: "Hair 2",
            样式3: "Hair 3",
            样式4: "Hair 4",            
            样式5: "Hair 5"
        },
    },
};

export default function () {
    AssetManager.addGroupedAssets(assets, translations);
}
