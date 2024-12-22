import AssetManager from "@mod-utils/AssetManager";

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
        "AnkletLeft",
        "AnkletRight",
        "SocksLeft",
        "SocksRight",
        "Socks",
        "SuitLower",
    ],
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
                { Property: { SetPose: ["BackElbowTouch", "KneelingSpread"] } },
                { Property: { SetPose: ["OverTheHead", "KneelingSpread"] } },
            ],
        },
        {
            Name: "嘴巴固定",
            DrawImages: false,
            Key: "g",
            Options: [{}, {}],
        },
        {
            Name: "下体棒子",
            DrawImages: false,
            Key: "v",
            Options: [{}, {}],
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

/** @type {Translation.Dialog} */
const dialog = {
    CN: {
        ItemDevices开腿展示架_LuziSelectBase: "选择开腿展示架配置",

        ItemDevices开腿展示架_LuziSelect姿势: "选择姿势",
        ItemDevices开腿展示架_LuziModule姿势: "姿势",
        ItemDevices开腿展示架_LuziOptiono0: "背后",
        ItemDevices开腿展示架_LuziOptiono1: "抬手",

        ItemDevices开腿展示架_LuziSelect嘴巴固定: "选择嘴部拘束",
        ItemDevices开腿展示架_LuziModule嘴巴固定: "嘴部拘束",
        ItemDevices开腿展示架_LuziOptiong0: "无",
        ItemDevices开腿展示架_LuziOptiong1: "添加嘴部拘束",

        ItemDevices开腿展示架_LuziSelect下体棒子: "选择阴部道具",
        ItemDevices开腿展示架_LuziModule下体棒子: "阴部道具",
        ItemDevices开腿展示架_LuziOptionv0: "无",
        ItemDevices开腿展示架_LuziOptionv1: "添加阴部道具",

        ItemDevices开腿展示架_LuziSelect自定义高度: "设置高度",
        ItemDevices开腿展示架_LuziModule自定义高度: "调整高度",
        ItemDevices开腿展示架_LuziOptiond0: "无",
        ItemDevices开腿展示架_LuziOptiond1: "自定义高度",

        ItemDevices开腿展示架_LuziSeto1: "SourceCharacter修改了DestinationCharacter手部拘束",
        ItemDevices开腿展示架_LuziSeto0: "SourceCharacter修改了DestinationCharacter手部拘束",

        ItemDevices开腿展示架_LuziSetg0: "SourceCharacter移除了DestinationCharacter嘴部的拘束",
        ItemDevices开腿展示架_LuziSetg1: "SourceCharacter添加了DestinationCharacter嘴部的拘束",

        ItemDevices开腿展示架_LuziSetv0: "SourceCharacter移除了DestinationCharacter阴部的道具",
        ItemDevices开腿展示架_LuziSetv1: "SourceCharacter添加了DestinationCharacter阴部的道具",

        ItemDevices开腿展示架_LuziSetd0: "SourceCharacter还原DestinationCharacter高度",
        ItemDevices开腿展示架_LuziSetd1: "SourceCharacter调整DestinationCharacter高度",
    },
    EN: {
        ItemDevices开腿展示架_LuziSelectBase: "Select Leg Spread Display Configuration",

        ItemDevices开腿展示架_LuziSelect姿势: "Select Pose",
        ItemDevices开腿展示架_LuziModule姿势: "Pose",
        ItemDevices开腿展示架_LuziOptiono0: "Behind Back",
        ItemDevices开腿展示架_LuziOptiono1: "Lift Hands",

        ItemDevices开腿展示架_LuziSelect嘴巴固定: "Select Mouth Restraint",
        ItemDevices开腿展示架_LuziModule嘴巴固定: "Mouth Restraint",
        ItemDevices开腿展示架_LuziOptiong0: "None",
        ItemDevices开腿展示架_LuziOptiong1: "Add Mouth Restraint",

        ItemDevices开腿展示架_LuziSelect下体棒子: "Select Genital Prop",
        ItemDevices开腿展示架_LuziModule下体棒子: "Genital Prop",
        ItemDevices开腿展示架_LuziOptionv0: "None",
        ItemDevices开腿展示架_LuziOptionv1: "Add Genital Prop",

        ItemDevices开腿展示架_LuziSelect自定义高度: "Set Height",
        ItemDevices开腿展示架_LuziModule自定义高度: "Adjust Height",
        ItemDevices开腿展示架_LuziOptiond0: "None",
        ItemDevices开腿展示架_LuziOptiond1: "Custom Height",

        ItemDevices开腿展示架_LuziSeto1: "SourceCharacter modifies DestinationCharacter hand restraints",
        ItemDevices开腿展示架_LuziSeto0: "SourceCharacter modifies DestinationCharacter hand restraints",

        ItemDevices开腿展示架_LuziSetg0: "SourceCharacter removes DestinationCharacter mouth restraint",
        ItemDevices开腿展示架_LuziSetg1: "SourceCharacter adds DestinationCharacter mouth restraint",

        ItemDevices开腿展示架_LuziSetv0: "SourceCharacter removes DestinationCharacter genital prop",
        ItemDevices开腿展示架_LuziSetv1: "SourceCharacter adds DestinationCharacter genital prop",

        ItemDevices开腿展示架_LuziSetd0: "SourceCharacter resets DestinationCharacter height",
        ItemDevices开腿展示架_LuziSetd1: "SourceCharacter adjusts DestinationCharacter height",
    },
    RU: {
        ItemDevices开腿展示架_LuziSelectBase: "Выбор конфигурации дисплея для раздвигания ног",

        ItemDevices开腿展示架_LuziSelect姿势: "Выбор позы",
        ItemDevices开腿展示架_LuziModule姿势: "Поза",
        ItemDevices开腿展示架_LuziOptiono0: "Задняя",
        ItemDevices开腿展示架_LuziOptiono1: "Поднять руки",

        ItemDevices开腿展示架_LuziSelect嘴巴固定: "Выбор фиксации рта",
        ItemDevices开腿展示架_LuziModule嘴巴固定: "Фиксация рта",
        ItemDevices开腿展示架_LuziOptiong0: "Нет",
        ItemDevices开腿展示架_LuziOptiong1: "Добавить фиксацию рта",

        ItemDevices开腿展示架_LuziSelect下体棒子: "Выбор приспособления для гениталий",
        ItemDevices开腿展示架_LuziModule下体棒子: "Приспособление для гениталий",
        ItemDevices开腿展示架_LuziOptionv0: "Нет",
        ItemDevices开腿展示架_LuziOptionv1: "Добавить приспособление для гениталий",

        ItemDevices开腿展示架_LuziSelect自定义高度: "Установка высоты",
        ItemDevices开腿展示架_LuziModule自定义高度: "Настройка высоты",
        ItemDevices开腿展示架_LuziOptiond0: "Нет",
        ItemDevices开腿展示架_LuziOptiond1: "Настроить высоту",

        ItemDevices开腿展示架_LuziSeto1: "SourceCharacter изменяет фиксацию рук DestinationCharacter",
        ItemDevices开腿展示架_LuziSeto0: "SourceCharacter изменяет фиксацию рук DestinationCharacter",

        ItemDevices开腿展示架_LuziSetg0: "SourceCharacter убирает фиксацию рта DestinationCharacter",
        ItemDevices开腿展示架_LuziSetg1: "SourceCharacter добавляет фиксацию рта DestinationCharacter",

        ItemDevices开腿展示架_LuziSetv0: "SourceCharacter убирает приспособление для гениталий DestinationCharacter",
        ItemDevices开腿展示架_LuziSetv1: "SourceCharacter добавляет приспособление для гениталий DestinationCharacter",

        ItemDevices开腿展示架_LuziSetd0: "SourceCharacter восстанавливает высоту DestinationCharacter",
        ItemDevices开腿展示架_LuziSetd1: "SourceCharacter настраивает высоту DestinationCharacter",
    },
    UA: {
        ItemDevices开腿展示架_LuziSelectBase: "Виберіть конфігурацію для розширювача ніг",

        ItemDevices开腿展示架_LuziSelect姿势: "Виберіть позу",
        ItemDevices开腿展示架_LuziModule姿势: "Поза",
        ItemDevices开腿展示架_LuziOptiono0: "За спиною",
        ItemDevices开腿展示架_LuziOptiono1: "Підняти руки",

        ItemDevices开腿展示架_LuziSelect嘴巴固定: "Виберіть обмежувач на рот",
        ItemDevices开腿展示架_LuziModule嘴巴固定: "Обмежувач на рот",
        ItemDevices开腿展示架_LuziOptiong0: "Нічого",
        ItemDevices开腿展示架_LuziOptiong1: "Додати обмежувач на рот",

        ItemDevices开腿展示架_LuziSelect下体棒子: "Виберіть ",
        ItemDevices开腿展示架_LuziModule下体棒子: "Генітальна опора",
        ItemDevices开腿展示架_LuziOptionv0: "Нічого",
        ItemDevices开腿展示架_LuziOptionv1: "Додати генітальну опору",

        ItemDevices开腿展示架_LuziSelect自定义高度: "Виберіть висоту",
        ItemDevices开腿展示架_LuziModule自定义高度: "Калібрація висоти",
        ItemDevices开腿展示架_LuziOptiond0: "Нічого",
        ItemDevices开腿展示架_LuziOptiond1: "Налаштувати висоту",

        ItemDevices开腿展示架_LuziSeto1: "SourceCharacter модифікує обмежувачі для рук на тілі DestinationCharacter",
        ItemDevices开腿展示架_LuziSeto0: "SourceCharacter модифікує обмежувачі для рук на тілі DestinationCharacter",

        ItemDevices开腿展示架_LuziSetg0: "SourceCharacter знімає металевий обмежувач з рота DestinationCharacter",
        ItemDevices开腿展示架_LuziSetg1: "SourceCharacter прикріплює металевий обмежувач до DestinationCharacter рота",

        ItemDevices开腿展示架_LuziSetv0: "SourceCharacter знімає генітальну опору з тіла DestinationCharacter",
        ItemDevices开腿展示架_LuziSetv1: "SourceCharacter додає DestinationCharacter генітальну опору",

        ItemDevices开腿展示架_LuziSetd0: "SourceCharacter скинув конфігураю висоти на тілі DestinationCharacter",
        ItemDevices开腿展示架_LuziSetd1: "SourceCharacter налаштовує висоту DestinationCharacter",
    },
};

const translations = {
    CN: "开腿展示架",
    EN: "Leg-Spread Display Stand",
    UA: "Розширювач ніг",
    RU: "Leg-Spread Display Stand",
};

export default function () {
    AssetManager.addAsset("ItemDevices", asset, extended, translations);
    AssetManager.addCustomDialog(dialog);
}
