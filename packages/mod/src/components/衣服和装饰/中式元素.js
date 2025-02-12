import AssetManager from "@mod-utils/AssetManager";
import { Tools } from "@mod-utils/Tools";

/** @type {(Name:string, Priority:number) => CustomAssetDefinitionAppearance} */
const 茉莉花钿SharedAssetDefinition = (Name, Priority) => ({
    Name,
    Random: false,
    Top: 0,
    Left: 0,
    Priority,
    Layer: [
        { Name: "左", AllowTypes: [{ typed: 0 }, { typed: 2 }] },
        { Name: "右", AllowTypes: [{ typed: 1 }, { typed: 2 }] },
    ],
});

/** @type {CustomGroupedAssetDefinitions} */
const assets = {
    Cloth: [
        {
            Name: "假领子_Luzi",
            Random: false,
            Top: 0,
            Left: 0,
            ParentGroup: "BodyUpper",
            Layer: [
                {
                    Name: "扣子",
                    Priority: 18,
                    PoseMapping: {
                        TapedHands: PoseType.DEFAULT,
                        Yoked: PoseType.DEFAULT,
                        OverTheHead: PoseType.DEFAULT,
                        BackBoxTie: PoseType.DEFAULT,
                        BackElbowTouch: PoseType.DEFAULT,
                        BackCuffs: PoseType.DEFAULT,
                        Hogtied: PoseType.DEFAULT,
                        AllFours: "Hide",
                    },
                },
                {
                    Name: "衣服",
                    Priority: 18,
                    PoseMapping: {
                        TapedHands: PoseType.DEFAULT,
                        Yoked: "Yoked",
                        OverTheHead: "OverTheHead",
                        BackBoxTie: PoseType.DEFAULT,
                        BackElbowTouch: PoseType.DEFAULT,
                        BackCuffs: PoseType.DEFAULT,
                        Hogtied: PoseType.DEFAULT,
                        AllFours: "Hide",
                    },
                },
            ],
        },
    ],
    HairAccessory1: [茉莉花钿SharedAssetDefinition("茉莉花钿1", 55), 茉莉花钿SharedAssetDefinition("茉莉花钿2", 40)],
    HairAccessory3: [茉莉花钿SharedAssetDefinition("茉莉花钿1", 55), 茉莉花钿SharedAssetDefinition("茉莉花钿2", 40)],
};

/** @type {TypedItemConfig} */
const 茉莉花钿SharedConfig = {
    Archetype: ExtendedArchetype.TYPED,
    DrawImages: false,
    Options: [{ Name: "左" }, { Name: "右" }, { Name: "两侧" }],
};

/** @type {ExtendedItemMainConfig} */
const extended = {
    HairAccessory1: {
        茉莉花钿1: 茉莉花钿SharedConfig,
        茉莉花钿2: 茉莉花钿SharedConfig,
    },
    HairAccessory3: {
        茉莉花钿1: 茉莉花钿SharedConfig,
        茉莉花钿2: 茉莉花钿SharedConfig,
    },
};

/** @type { Translation.GroupedEntries } */
const translations = {
    CN: {
        Cloth: {
            假领子_Luzi: "假领子",
        },
        HairAccessory1: {
            茉莉花钿1: "茉莉花钿 1",
            茉莉花钿2: "茉莉花钿 2",
        },
        HairAccessory3: {
            茉莉花钿1: "茉莉花钿 1",
            茉莉花钿2: "茉莉花钿 2",
        },
    },
    EN: {
        Cloth: {
            假领子_Luzi: "Fake Collar",
        },
        HairAccessory1: {
            茉莉花钿1: "Jasmine Hairpin 1",
            茉莉花钿2: "Jasmine Hairpin 2",
        },
        HairAccessory3: {
            茉莉花钿1: "Jasmine Hairpin 1",
            茉莉花钿2: "Jasmine Hairpin 2",
        },
    },
    RU: {
        Cloth: {
            假领子_Luzi: "Поддельный воротник",
        },
        HairAccessory1: {
            茉莉花钿1: "Жасминовая шпилька 1",
            茉莉花钿2: "Жасминовая шпилька 2",
        },
        HairAccessory3: {
            茉莉花钿1: "Жасминовая шпилька 1",
            茉莉花钿2: "Жасминовая шпилька 2",
        },
    },
};

const customDialog = Tools.replicateTypedItemDialog(["HairAccessory1", "HairAccessory3"], ["茉莉花钿1", "茉莉花钿2"], {
    CN: { Select: "选择花的位置", 左: "左", 右: "右", 两侧: "两侧" },
    EN: { Select: "Select flower position", 左: "Left", 右: "Right", 两侧: "Both" },
    RU: { Select: "Выберите положение цветка", 左: "Лево", 右: "Право", 两侧: "Оба" },
});

export default function () {
    AssetManager.addGroupedAssets(assets, translations, extended);
    AssetManager.addCustomDialog(customDialog);
}
