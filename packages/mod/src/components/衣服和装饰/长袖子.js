import AssetManager from "@mod-utils/AssetManager";
import { VersionSupport } from "@mod-utils/VersionSupport";

/** @type { CustomGroupedAssetDefinitions }} */
const assets = {
    长袖子_Luzi: [
        {
            Name: "广袖_Luzi",
            Random: false,
            Top: 0,
            Left: 0,
            ParentGroup: VersionSupport.NoParentGroup,
            PoseMapping: {
                BackBoxTie: "Hide",
                BackCuffs: "Hide",
                BackElbowTouch: "Hide",
                OverTheHead: "OverTheHead",
                Yoked: "Yoked",
                Hogtied: "Hide",
                AllFours: "Hide",
            },
            Layer: [
                {
                    Name: "袖子",
                    Priority: 36,
                },
                {
                    Name: "渐变",
                    Priority: 35,
                },
                {
                    Name: "花纹",
                    Priority: 37,
                },
            ],
        },
    ],
};

/** @type { Translation.GroupedEntries } */
const translations = {
    CN: {
        长袖子_Luzi: {
            广袖_Luzi: "广袖",
        },
    },
    EN: {
        长袖子_Luzi: {
            广袖_Luzi: "Wide sleeve",
        },
    },
};

export default function () {
    AssetManager.addGroupedAssets(assets, translations);
}
