import AssetManager from "../../assetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "开腿展示架_Luzi",
    Random: false,
    Top: 0,
    Left: 0,
    Difficulty: 8,
    AllowLock: true,
    AllowTighten: true,
    DrawLocks: false,
    RemoveTime: 5,
    Time: 10,
    Extended: true,
    Effect: [E.Freeze, E.BlockWardrobe, E.Block, E.Mounted, E.MapImmobile, E.OnBed, E.OneWayEnclose],
    Hide: [
        "ItemHandheld",
        "BodyLower",
        "ItemLegs",
        "ItemFeet",
        "ItemBoots",
        "Shoes",
        "Garters",
        "LeftAnklet",
        "RightAnklet",
        "SocksLeft",
        "SocksRight",
        "Socks",
        "SuitLower"],
    Layer: [
        {
            Name: "框架抬手", 
            Priority: 1, 
            AllowTypes: { o: 1 },
        },
        {
            Name: "框架", 
            Priority: 1, 
            AllowTypes: { o: 0 },
        },
        {
            Name: "下半身开腿", 
            Priority: 7,
            ParentGroup: "BodyLower",
            InheritColor: "BodyLower",
            HideColoring: true,
            ColorSuffix: { HEX_COLOR: "White" },
        },
        {
            Name: "手固定", 
            Priority: 50, 
            AllowTypes: { o: 1 },
            ParentGroup: "BodyUpper",
        },
        {
            Name: "腿固定", 
            Priority: 50,
            ParentGroup: "BodyLower",
        },
        {
            Name: "身体固定", 
            Priority: 50,
            ParentGroup: "BodyUpper",
        },
        {
            Name: "嘴巴固定", 
            Priority: 50, 
            AllowTypes: { g: 1 },
        },
        {
            Name: "脖子固定", 
            Priority: 50,
        },
        {
            Name: "下体棒子", 
            Priority: 13, 
            AllowTypes: { v: 1 },
        },
        {
            Name: "链条", 
            Priority: 1, 
            Top: -760, 
            Left: 0,
        },
    ],
};

/** @type {AssetArchetypeConfig} */
const extended = {
    Archetype: ExtendedArchetype.MODULAR,
    ChangeWhenLocked: false,
    Modules: [
        {
            Name: "姿势",
            DrawImages: false,
            Key: "o",
            Options: [
                { Property: { SetPose: ["BackElbowTouch", "KneelingSpread"], }, },
                { Property: { SetPose: ["OverTheHead", "KneelingSpread"], }, },
            ],
        },
        {
            Name: "嘴巴固定",
            DrawImages: false,
            Key: "g",
            Options: [
                {},
                {},
            ],
        },
        {
            Name: "下体棒子",
            DrawImages: false,
            Key: "v",
            Options: [
                {},
                {},
            ],
        },
        {
            Name: "自定义高度",
            DrawImages: false,
            Key: "d",
            Options: [
                {},
                {
                    HasSubscreen: true,
                    ArchetypeConfig: {
                        Archetype: ExtendedArchetype.VARIABLEHEIGHT,
                        MaxHeight: 0,
                        MinHeight: -250,
                        DrawData: {
                            elementData: [{ position: [1140, 650, 100, 500], icon: "rope" }],
                        },
                        DialogPrefix: {
                            Chat: "SuspensionChange",
                        },
                    },
                },
            ],
        },
    ],
};

/** @type {TranslationCustomDialog} */
const dialog = {
    CN: {
        ItemDevices开腿展示架_LuziSelectBase: '选择开腿展示架配置',

        ItemDevices开腿展示架_LuziSelect姿势: '选择姿势',
        ItemDevices开腿展示架_LuziModule姿势: '姿势',
        ItemDevices开腿展示架_LuziOptiono0: '背后',
        ItemDevices开腿展示架_LuziOptiono1: '抬手',

        ItemDevices开腿展示架_LuziSelect嘴巴固定: '选择嘴部拘束',
        ItemDevices开腿展示架_LuziModule嘴巴固定: '嘴部拘束',
        ItemDevices开腿展示架_LuziOptiong0: '无',
        ItemDevices开腿展示架_LuziOptiong1: '添加嘴部拘束',

        ItemDevices开腿展示架_LuziSelect下体棒子: '选择阴部道具',
        ItemDevices开腿展示架_LuziModule下体棒子: '阴部道具',
        ItemDevices开腿展示架_LuziOptionv0: '无',
        ItemDevices开腿展示架_LuziOptionv1: '添加阴部道具',

        ItemDevices开腿展示架_LuziSelect自定义高度: '设置高度',
        ItemDevices开腿展示架_LuziModule自定义高度: '调整高度',
        ItemDevices开腿展示架_LuziOptiond0: '无',
        ItemDevices开腿展示架_LuziOptiond1: '自定义高度',

        ItemDevices开腿展示架_LuziSeto1: 'SourceCharacter修改了DestinationCharacter的手部拘束',
        ItemDevices开腿展示架_LuziSeto0: 'SourceCharacter修改了DestinationCharacter的手部拘束',

        ItemDevices开腿展示架_LuziSetg0: 'SourceCharacter移除了DestinationCharacter嘴部的拘束',
        ItemDevices开腿展示架_LuziSetg1: 'SourceCharacter添加了DestinationCharacter嘴部的拘束',

        ItemDevices开腿展示架_LuziSetv0: 'SourceCharacter移除了DestinationCharacter阴部的道具',
        ItemDevices开腿展示架_LuziSetv1: 'SourceCharacter添加了DestinationCharacter阴部的道具',

        ItemDevices开腿展示架_LuziSetd0: 'SourceCharacter还原DestinationCharacter的高度',
        ItemDevices开腿展示架_LuziSetd1: 'SourceCharacter调整DestinationCharacter的高度',

    },
    EN: {
        ItemDevices开腿展示架_LuziSelectBase: 'Select Leg Spread Display Configuration',

        ItemDevices开腿展示架_LuziSelect_Pose: 'Select Pose',
        ItemDevices开腿展示架_LuziModule_Pose: 'Pose',
        ItemDevices开腿展示架_LuziOptiono0: 'Behind Back',
        ItemDevices开腿展示架_LuziOptiono1: 'Lift Hands',

        ItemDevices开腿展示架_LuziSelect_MouthRestraint: 'Select Mouth Restraint',
        ItemDevices开腿展示架_LuziModule_MouthRestraint: 'Mouth Restraint',
        ItemDevices开腿展示架_LuziOptiong0: 'None',
        ItemDevices开腿展示架_LuziOptiong1: 'Add Mouth Restraint',

        ItemDevices开腿展示架_LuziSelect_GenitalProp: 'Select Genital Prop',
        ItemDevices开腿展示架_LuziModule_GenitalProp: 'Genital Prop',
        ItemDevices开腿展示架_LuziOptionv0: 'None',
        ItemDevices开腿展示架_LuziOptionv1: 'Add Genital Prop',

        ItemDevices开腿展示架_LuziSelect_CustomHeight: 'Set Height',
        ItemDevices开腿展示架_LuziModule_CustomHeight: 'Adjust Height',
        ItemDevices开腿展示架_LuziOptiond0: 'None',
        ItemDevices开腿展示架_LuziOptiond1: 'Custom Height',

        ItemDevices开腿展示架_LuziSeto1: 'SourceCharacter modifies DestinationCharacter\'s hand restraints',
        ItemDevices开腿展示架_LuziSeto0: 'SourceCharacter modifies DestinationCharacter\'s hand restraints',

        ItemDevices开腿展示架_LuziSetg0: 'SourceCharacter removes DestinationCharacter\'s mouth restraint',
        ItemDevices开腿展示架_LuziSetg1: 'SourceCharacter adds DestinationCharacter\'s mouth restraint',

        ItemDevices开腿展示架_LuziSetv0: 'SourceCharacter removes DestinationCharacter\'s genital prop',
        ItemDevices开腿展示架_LuziSetv1: 'SourceCharacter adds DestinationCharacter\'s genital prop',

        ItemDevices开腿展示架_LuziSetd0: 'SourceCharacter resets DestinationCharacter\'s height',
        ItemDevices开腿展示架_LuziSetd1: 'SourceCharacter adjusts DestinationCharacter\'s height',
    },
};

const translations = {
    EN: {
        开腿展示架: "Leg Spread Display Stand",
    },
};

export default function () {
    AssetManager.addAsset("ItemDevices", asset, extended);
    AssetManager.addCustomDialog(dialog);
}
