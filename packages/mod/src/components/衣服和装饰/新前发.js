import AssetManager from "@mod-utils/AssetManager";

/** @type { CustomGroupedAssetDefinitions }} */
const assets = {
    新前发_Luzi: [
        {
            Name: "前发1",
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
            Name: "前发2",
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
            Name: "前发3",
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
            Name: "前发4",
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
            Name: "前发5",
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
            Name: "前发6",
            Random: false,
            Left: 0,
            Top: 0,
            Priority : 52,
            ParentGroup: null,
            Extended: false,
            InheritColor: "HairFront",
            Hide: ["HairFront"]
        },
        {
            Name: "卷发1",
            Random: false,
            Left: 0,
            Top: 0,
            Priority : 52,
            ParentGroup: null,
            Extended: false,
            InheritColor: "HairFront",
            Hide: ["HairFront"]
        },
        {
            Name: "卷发2",
            Random: false,
            Left: 0,
            Top: 0,
            Priority : 52,
            ParentGroup: null,
            Extended: false,
            InheritColor: "HairFront",
            Hide: ["HairFront"]
        },
        {
            Name: "卷发3",
            Random: false,
            Left: 0,
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
            前发1: "前发 1",
            前发2: "前发 2",
            前发3: "前发 3",
            前发4: "前发 4",
            前发5: "前发 5",
            前发6: "前发 6",
            卷发1: "卷发 1",
            卷发2: "卷发 2",
            卷发3: "卷发 3",
        },
    },
    EN: {
        新前发_Luzi: {
            前发1: "HairFront 1",
            前发2: "HairFront 2",
            前发3: "HairFront 3",
            前发4: "HairFront 4",            
            前发5: "HairFront 5",            
            前发6: "HairFront 6",            
            卷发1: "Curly Hair 1",            
            卷发2: "Curly Hair 2",            
            卷发3: "Curly Hair 3"
        },
    },
};

export default function () {
    AssetManager.addGroupedAssets(assets, translations);
}
