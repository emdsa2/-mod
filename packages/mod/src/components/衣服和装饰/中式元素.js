import AssetManager from "@mod-utils/AssetManager";

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
    HairAccessory1: [
        {
            Name: "茉莉花钿1",
            Random: false,
            Top: 0,
            Left: 0,
            Priority: 55,
            Layer: [
                { Name: "左", },
                { Name: "右", },
            ],
        },
        {
            Name: "茉莉花钿2",
            Random: false,
            Top: 0,
            Left: 0,
            Priority: 40,
            Layer: [
                { Name: "左", },
                { Name: "右", },
            ],
        },
    ],
    HairAccessory3: [
        {
            Name: "茉莉花钿1",
            Random: false,
            Top: 0,
            Left: 0,
            Priority: 55,
            Layer: [
                { Name: "左", },
                { Name: "右", },
            ],
        },
        {
            Name: "茉莉花钿2",
            Random: false,
            Top: 0,
            Left: 0,
            Priority: 40,
            Layer: [
                { Name: "左", },
                { Name: "右", },
            ],
        },
    ],
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
        HairAccessory2: {
            茉莉花钿1: "Жасминовая шпилька 1",
            茉莉花钿2: "Жасминовая шпилька 2",
        },
    },
};

export default function () {
    AssetManager.addGroupedAssets(assets, translations);
}
