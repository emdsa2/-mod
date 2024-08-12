import AssetManager from "../../assetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "玩偶_Luzi",
    Random: false,
    Top: 0,
    Left: 0,
    ParentGroup: null,
    Priority: 24,
    PoseMapping: {
        TapedHands: "TapedHands",
        Yoked: "Hide",
        OverTheHead: "Hide",
        BackBoxTie: "Hide",
        BackElbowTouch: "Hide",
        BackCuffs: "Hide",
        AllFours: "Hide",
    },
    Layer: [
        // 玩具店
        {
            Name: "Saki",
            Top: 0,
            Left: 0,
            Priority: 27,
            AllowTypes: { d: 1 },
        },
        {
            Name: "Luzi",
            Top: 0,
            Left: 0,
            Priority: 27,
            AllowTypes: { d: 2 },
        },

        // 狼窝
        {
            Name: "吉娜",
            Top: 0,
            Left: 0,
            Priority: 27,
            AllowTypes: { s: 1 },
        },
        {
            Name: "Ada",
            Top: 0,
            Left: 0,
            Priority: 27,
            AllowTypes: { s: 2 },
        },
        {
            Name: "Luzi2",
            Top: 0,
            Left: 0,
            Priority: 27,
            AllowTypes: { s: 3 },
        },
        {
            Name: "Reisigure",
            Top: 0,
            Left: 0,
            Priority: 27,
            AllowTypes: { s: 4 },
        },

        
        // 芷窝
        {
            Name: "Ttong",
            Top: 0,
            Left: 0,
            Priority: 27,
            AllowTypes: { z: 1 },
        },
        {
            Name: "ZforShort",
            Top: 0,
            Left: 0,
            Priority: 27,
            AllowTypes: { z: 2 },
        },
        {
            Name: "Gin",
            Top: 0,
            Left: 0,
            Priority: 27,
            AllowTypes: { z: 3 },
        },
        {
            Name: "Echo",
            Top: 0,
            Left: 0,
            Priority: 27,
            AllowTypes: { z: 4 },
        },
        
        // Catnest
        {
            Name: "XinLian",
            Top: 0,
            Left: 0,
            Priority: 27,
            AllowTypes: { c: 1 },
        },
        {
            Name: "Zheiyun",
            Top: 0,
            Left: 0,
            Priority: 27,
            AllowTypes: { c: 2 },
        },
        {
            Name: "Cyäegha",
            Top: 0,
            Left: 0,
            Priority: 27,
            AllowTypes: { c: 3 },
        },
        {
            Name: "PumpkinPie",
            Top: 0,
            Left: 0,
            Priority: 27,
            AllowTypes: { c: 4 },
        },
        {
            Name: "Lux",
            Top: 0,
            Left: 0,
            Priority: 27,
            AllowTypes: { c: 5 },
        },
        {
            Name: "居x",
            Top: 0,
            Left: 0,
            Priority: 27,
            AllowTypes: { c: 6 },
        },

        // 猫州猫庭府玩偶
        {
            Name: "Axa",
            Top: 0,
            Left: 0,
            Priority: 27,
            AllowTypes: { f: 1 },
        },
    ],
};


/** @type {ModularItemConfig} */
const extended = {
    Archetype: ExtendedArchetype.MODULAR,
    ChangeWhenLocked: false,
    Modules: [
        {
            Name: "玩具店玩偶",
            DrawImages: false,
            Key: "d",
            Options: [{}, {}, {}],
        },
        {
            Name: "狼窝玩偶",
            DrawImages: false,
            Key: "s",
            Options: [{}, {}, {}, {}, {}],
        },
        {
            Name: "芷窝玩偶",
            DrawImages: false,
            Key: "z",
            Options: [{}, {}, {}, {}, {}],
        },
        {
            Name: "Catnest玩偶",
            DrawImages: false,
            Key: "c",
            Options: [{}, {}, {}, {}, {}, {}, {}],
        },
        {
            Name: "猫州猫庭府玩偶",
            DrawImages: false,
            Key: "f",
            Options: [{}, {}],
        },
    ],
};

/** @type {Translation.Dialog} */
const dialogs = {
    CN: {
        ItemMisc玩偶_LuziSelectBase: "选择房间",
        ItemMisc玩偶_LuziSelect玩具店玩偶: "选择玩具店玩偶",
        ItemMisc玩偶_LuziModule玩具店玩偶: "玩具店玩偶",
        ItemMisc玩偶_LuziOptiond0: "空",
        ItemMisc玩偶_LuziOptiond1: "Saki",
        ItemMisc玩偶_LuziOptiond2: "Luzi",
        ItemMisc玩偶_LuziSetd0: "SourceCharacter移除了DestinationCharacter手上的玩偶.",
        ItemMisc玩偶_LuziSetd1: "SourceCharacter给了DestinationCharacter一只可爱的Saki玩偶.",
        ItemMisc玩偶_LuziSetd2: "SourceCharacter给了DestinationCharacter一只笨蛋的Luzi玩偶.",


        ItemMisc玩偶_LuziSelect狼窝玩偶: "选择狼窝玩偶",
        ItemMisc玩偶_LuziModule狼窝玩偶: "狼窝玩偶",
        ItemMisc玩偶_LuziOptions0: "空",
        ItemMisc玩偶_LuziOptions1: "吉娜",
        ItemMisc玩偶_LuziOptions2: "Ada",
        ItemMisc玩偶_LuziOptions3: "Luzi",
        ItemMisc玩偶_LuziOptions4: "Reisigure",
        ItemMisc玩偶_LuziSets0: "SourceCharacter移除了DestinationCharacter手上的玩偶.",
        ItemMisc玩偶_LuziSets1: "SourceCharacter给了DestinationCharacter一只可爱的吉娜玩偶.",
        ItemMisc玩偶_LuziSets2: "SourceCharacter给了DestinationCharacter一只可爱的Ada玩偶.",
        ItemMisc玩偶_LuziSets3: "SourceCharacter给了DestinationCharacter一只笨蛋的Luzi玩偶.",
        ItemMisc玩偶_LuziSets4: "SourceCharacter给了DestinationCharacter一只可爱的Reisigure玩偶.",


        ItemMisc玩偶_LuziSelect芷窝玩偶: "选择芷窝玩偶",
        ItemMisc玩偶_LuziModule芷窝玩偶: "芷窝玩偶",
        ItemMisc玩偶_LuziOptionz0: "空",
        ItemMisc玩偶_LuziOptionz1: "Ttong",
        ItemMisc玩偶_LuziOptionz2: "ZforShort",
        ItemMisc玩偶_LuziOptionz3: "Gin",
        ItemMisc玩偶_LuziOptionz4: "Echo",
        ItemMisc玩偶_LuziSetz0: "SourceCharacter移除了DestinationCharacter手上的玩偶.",
        ItemMisc玩偶_LuziSetz1: "SourceCharacter给了DestinationCharacter一只可爱的Ttong玩偶.",
        ItemMisc玩偶_LuziSetz2: "SourceCharacter给了DestinationCharacter一只可爱的ZforShort玩偶.",
        ItemMisc玩偶_LuziSetz3: "SourceCharacter给了DestinationCharacter一只可爱的Gin玩偶.",
        ItemMisc玩偶_LuziSetz4: "SourceCharacter给了DestinationCharacter一只可爱的Echo玩偶.",

        ItemMisc玩偶_LuziSelectCatnest玩偶: "选择Catnest玩偶",
        ItemMisc玩偶_LuziModuleCatnest玩偶: "Catnest玩偶",
        ItemMisc玩偶_LuziOptionc0: "空",
        ItemMisc玩偶_LuziOptionc1: "XinLian",
        ItemMisc玩偶_LuziOptionc2: "Zheiyun",
        ItemMisc玩偶_LuziOptionc3: "Cyäegha",
        ItemMisc玩偶_LuziOptionc4: "PumpkinPie",
        ItemMisc玩偶_LuziOptionc5: "Lux",
        ItemMisc玩偶_LuziOptionc6: "居x",
        ItemMisc玩偶_LuziSetc0: "SourceCharacter移除了DestinationCharacter手上的玩偶.",
        ItemMisc玩偶_LuziSetc1: "SourceCharacter给了DestinationCharacter一只可爱的XinLian玩偶.",
        ItemMisc玩偶_LuziSetc2: "SourceCharacter给了DestinationCharacter一只可爱的Zheiyun玩偶.",
        ItemMisc玩偶_LuziSetc3: "SourceCharacter给了DestinationCharacter一只可爱的Cyäegha玩偶.",
        ItemMisc玩偶_LuziSetc4: "SourceCharacter给了DestinationCharacter一只可爱的PumpkinPie玩偶.",
        ItemMisc玩偶_LuziSetc5: "SourceCharacter给了DestinationCharacter一只可爱的Lux玩偶.",
        ItemMisc玩偶_LuziSetc6: "SourceCharacter给了DestinationCharacter一只可爱的居x玩偶.",


        ItemMisc玩偶_LuziSelect猫州猫庭府玩偶: "选择猫州猫庭府玩偶",
        ItemMisc玩偶_LuziModule猫州猫庭府玩偶: "猫州猫庭府玩偶",
        ItemMisc玩偶_LuziOptionf0: "空",
        ItemMisc玩偶_LuziOptionf1: "Axa",

        ItemMisc玩偶_LuziSetf0: "SourceCharacter移除了DestinationCharacter手上的玩偶.",
        ItemMisc玩偶_LuziSetf1: "SourceCharacter给了DestinationCharacter一只可爱的Axa玩偶.",


    },
    EN: {
        ItemMisc玩偶_LuziSelectBase: "选择房间",
        ItemMisc玩偶_LuziSelect玩具店玩偶: "选择玩具店玩偶",
        ItemMisc玩偶_LuziModule玩具店玩偶: "玩具店玩偶",
        ItemMisc玩偶_LuziOptiond0: "空",
        ItemMisc玩偶_LuziOptiond1: "Saki",
        ItemMisc玩偶_LuziOptiond2: "Luzi",
        ItemMisc玩偶_LuziSetd0: "SourceCharacter移除了DestinationCharacter手上的玩偶.",
        ItemMisc玩偶_LuziSetd1: "SourceCharacter给了DestinationCharacter一只可爱的Saki玩偶.",
        ItemMisc玩偶_LuziSetd2: "SourceCharacter给了DestinationCharacter一只笨蛋的Luzi玩偶.",


        ItemMisc玩偶_LuziSelect狼窝玩偶: "选择狼窝玩偶",
        ItemMisc玩偶_LuziModule狼窝玩偶: "狼窝玩偶",
        ItemMisc玩偶_LuziOptions0: "空",
        ItemMisc玩偶_LuziOptions1: "吉娜",
        ItemMisc玩偶_LuziOptions2: "Ada",
        ItemMisc玩偶_LuziOptions3: "Luzi",
        ItemMisc玩偶_LuziOptions4: "Reisigure",
        ItemMisc玩偶_LuziSets0: "SourceCharacter移除了DestinationCharacter手上的玩偶.",
        ItemMisc玩偶_LuziSets1: "SourceCharacter给了DestinationCharacter一只可爱的吉娜玩偶.",
        ItemMisc玩偶_LuziSets2: "SourceCharacter给了DestinationCharacter一只可爱的Ada玩偶.",
        ItemMisc玩偶_LuziSets3: "SourceCharacter给了DestinationCharacter一只笨蛋的Luzi玩偶.",
        ItemMisc玩偶_LuziSets4: "SourceCharacter给了DestinationCharacter一只可爱的Reisigure玩偶.",


        ItemMisc玩偶_LuziSelect芷窝玩偶: "选择芷窝玩偶",
        ItemMisc玩偶_LuziModule芷窝玩偶: "芷窝玩偶",
        ItemMisc玩偶_LuziOptionz0: "空",
        ItemMisc玩偶_LuziOptionz1: "Ttong",
        ItemMisc玩偶_LuziOptionz2: "ZforShort",
        ItemMisc玩偶_LuziOptionz3: "Gin",
        ItemMisc玩偶_LuziOptionz4: "Echo",
        ItemMisc玩偶_LuziSetz0: "SourceCharacter移除了DestinationCharacter手上的玩偶.",
        ItemMisc玩偶_LuziSetz1: "SourceCharacter给了DestinationCharacter一只可爱的Ttong玩偶.",
        ItemMisc玩偶_LuziSetz2: "SourceCharacter给了DestinationCharacter一只可爱的ZforShort玩偶.",
        ItemMisc玩偶_LuziSetz3: "SourceCharacter给了DestinationCharacter一只可爱的Gin玩偶.",
        ItemMisc玩偶_LuziSetz4: "SourceCharacter给了DestinationCharacter一只可爱的Echo玩偶.",

        ItemMisc玩偶_LuziSelectCatnest玩偶: "选择Catnest玩偶",
        ItemMisc玩偶_LuziModuleCatnest玩偶: "Catnest玩偶",
        ItemMisc玩偶_LuziOptionc0: "空",
        ItemMisc玩偶_LuziOptionc1: "XinLian",
        ItemMisc玩偶_LuziOptionc2: "Zheiyun",
        ItemMisc玩偶_LuziOptionc3: "Cyäegha",
        ItemMisc玩偶_LuziOptionc4: "PumpkinPie",
        ItemMisc玩偶_LuziOptionc5: "Lux",
        ItemMisc玩偶_LuziOptionc6: "居x",
        ItemMisc玩偶_LuziSetc0: "SourceCharacter移除了DestinationCharacter手上的玩偶.",
        ItemMisc玩偶_LuziSetc1: "SourceCharacter给了DestinationCharacter一只可爱的XinLian玩偶.",
        ItemMisc玩偶_LuziSetc2: "SourceCharacter给了DestinationCharacter一只可爱的Zheiyun玩偶.",
        ItemMisc玩偶_LuziSetc3: "SourceCharacter给了DestinationCharacter一只可爱的Cyäegha玩偶.",
        ItemMisc玩偶_LuziSetc4: "SourceCharacter给了DestinationCharacter一只可爱的PumpkinPie玩偶.",
        ItemMisc玩偶_LuziSetc5: "SourceCharacter给了DestinationCharacter一只可爱的Lux玩偶.",
        ItemMisc玩偶_LuziSetc6: "SourceCharacter给了DestinationCharacter一只可爱的居x玩偶.",


        ItemMisc玩偶_LuziSelect猫州猫庭府玩偶: "选择猫州猫庭府玩偶",
        ItemMisc玩偶_LuziModule猫州猫庭府玩偶: "猫州猫庭府玩偶",
        ItemMisc玩偶_LuziOptionf0: "空",
        ItemMisc玩偶_LuziOptionf1: "Axa",

        ItemMisc玩偶_LuziSetf0: "SourceCharacter移除了DestinationCharacter手上的玩偶.",
        ItemMisc玩偶_LuziSetf1: "SourceCharacter给了DestinationCharacter一只可爱的Axa玩偶.",

    },

};

const translations = { CN: "玩偶", EN: "Doll" };

export default function () {
    AssetManager.addAsset("ItemMisc", asset, extended, translations);
    AssetManager.addCustomDialog(dialogs);
}