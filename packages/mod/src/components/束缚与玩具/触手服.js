import AssetManager from "@mod-utils/AssetManager";
import ModManager from "@mod-utils/ModManager";

function scriptDrawHook(data, originalFunction, drawData) {
    originalFunction(drawData);

    const Data = drawData.PersistentData();
    const Properties = drawData.Item.Property || {};
    const FrameTime = Player.GraphicsSettings ? Math.max(30, Player.GraphicsSettings.AnimationQuality * 0.6) : 30;
    const Intensity = typeof Properties.Intensity === "number" ? Properties.Intensity : -1;
    const FuckLength = 32;

    if (typeof Data.FuckChangeTime !== "number") Data.FuckChangeTime = CommonTime() + FrameTime;
    if (typeof Data.DildoState !== "number") Data.DildoState = 0;

    if (Data.FuckChangeTime < CommonTime() && !(Intensity === -1 && FuckLength <= Data.DildoState)) {
        Data.FuckChangeTime = CommonTime() + FrameTime;
        AnimationRequestRefreshRate(drawData.C, FrameTime);
        AnimationRequestDraw(drawData.C);
    }
}

function beforeDraw({ PersistentData, L, X, Y, Property }) {
    const Data = PersistentData();
    if (typeof Data.DildoState !== "number") Data.DildoState = 0;
    if (typeof Data.Modifier !== "number") Data.Modifier = 1;

    //if (L === "DevicePleasureHolder") return { Y: Y + Data.DildoState };
    if (L !== "触手" && L !== "触手背后") return;

    const Properties = Property || {};
    const Intensity = typeof Properties.Intensity === "number" ? Properties.Intensity : -1;

    const FuckLength = 15;
    const TimeModifier = 0.007;
    const AnimationQualityRatio =
        (Player.GraphicsSettings ? Math.max(Player.GraphicsSettings.AnimationQuality * 0.6, 30) : 30) / 30;
    Data.Speed = (Intensity + 1) * 2;
    if (Data.DildoState >= 1 && Intensity > -1) {
        Data.Modifier = -1;
    } else if (Data.DildoState <= 0) {
        Data.Modifier = 1;
    } else if (Data.DildoState <= 1 && Intensity === -1) {
        Data.Modifier = 1;
        Data.Speed = 1;
    }

    Data.DildoState += Data.Modifier * Data.Speed * AnimationQualityRatio * TimeModifier;
    if (AnimationQualityRatio > FuckLength) Data.DildoState = Math.random();

    return { Y: Y + FuckLength * -Math.cos(Data.DildoState * 2 * Math.PI) };
}

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "触手服_Luzi",
    Random: false,
    Gender: "F",
    Top: 0,
    Left: 0,
    Difficulty: 8,
    AllowLock: true,
    AllowTighten: true,
    DrawLocks: false,
    Prerequisite: ["HasBreasts"],
    DynamicBeforeDraw: true,
    DynamicScriptDraw: true,
    RemoveTime: 5,
    Extended: true,
    Time: 10,
    Layer: [
        {
            AllowTypes: { d: 0 },
            Name: "触手服",
            Priority: 15,
            PoseMapping: { AllFours: "Hide", Hogtied: "Hogtied" },
        },
        {
            AllowTypes: { s: 1 },
            Name: "上衣",
            Priority: 16,
            PoseMapping: { AllFours: "Hide", Hogtied: "Hogtied" },
        },
        {
            AllowTypes: { d: [1, 2] },
            Name: "触手服开",
            Priority: 15,
            PoseMapping: { AllFours: "Hide", Hogtied: "Hogtied" },
        },
        {
            AllowTypes: { m: 1 },
            Name: "触手服嘴套",
            Priority: 15,
            ParentGroup: "ItemHood",
            PoseMapping: { AllFours: PoseType.DEFAULT, Hogtied: PoseType.DEFAULT },
        },
        {
            AllowTypes: { h: [1, 2] },
            ParentGroup: "BodyUpper",
            Name: "触手服手套",
            Priority: 27,
            PoseMapping: {
                AllFours: "Hide",
                Hogtied: "Hide",
                Yoked: "Yoked",
                OverTheHead: "OverTheHead",
                BackCuffs: "BackCuffs",
                BackBoxTie: "BackBoxTie",
                TapedHands: "TapedHands",
                BackElbowTouch: "BackElbowTouch",
            },
        },
        {
            AllowTypes: { f: 1 },
            Name: "触手服脚套",
            Priority: 15,
            ParentGroup: "BodyLower",
            PoseMapping: {
                AllFours: "Hide",
                Hogtied: "Hide",
                Kneel: "Kneel",
                KneelingSpread: "KneelingSpread",
                LegsClosed: "LegsClosed",
                Spread: "Spread",
            },
        },
        {
            ParentGroup: "ItemVulva",
            AllowTypes: { d: 2 },
            Name: "Pussy",
            Priority: 13,
            PoseMapping: { AllFours: "Hide" },
        },
        {
            ParentGroup: "ItemVulva",
            AllowTypes: { d: 2 },
            Name: "PussyMask",
            Priority: 14,
            PoseMapping: { AllFours: "Hide" },
            InheritColor: "BodyLower",
            HideColoring: true,
            ColorSuffix: { HEX_COLOR: "White" },
        },
        {
            Name: "触手",
            Priority: 13,
            AllowTypes: { d: 2 },
            ParentGroup: "ItemVulva",
            PoseMapping: { AllFours: "Hide" },
        },
        {
            Name: "触手背后",
            Priority: 2,
            AllowTypes: { d: 2 },
            ParentGroup: "ItemVulva",
            PoseMapping: { AllFours: "Hide" },
        },
    ],
};

/** @type {ModularItemConfig} */
const extended = {
    Archetype: ExtendedArchetype.MODULAR,
    ChangeWhenLocked: false,
    Modules: [
        {
            Name: "触手状态",
            DrawImages: false,
            Key: "d",
            Options: [
                {
                    Property: { Block: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"] },
                },
                {},
                {
                    HasSubscreen: true,
                    Prerequisite: ["AccessVulva", "VulvaEmpty", "AccessButt", "ButtEmpty"],
                    Block: ["ItemVulva", "ItemButt"],
                    Property: {
                        Effect: [E.VulvaShaft, E.Vibrating, E.IsPlugged],
                        Intensity: 2,
                    },
                    ArchetypeConfig: {
                        Archetype: ExtendedArchetype.VIBRATING,
                        ScriptHooks: {
                            ScriptDraw: scriptDrawHook,
                        },
                    },
                },
            ],
        },
        {
            Name: "上衣开关",
            // DrawImages: false,
            Key: "s",
            Options: [{}, {}],
        },
        {
            Name: "手套开关",
            // DrawImages: false,
            Key: "h",
            Options: [
                {},
                {},
                {
                    Property: { Difficulty: 13, SetPose: ["BackElbowTouch"], Effect: ["Block"] },
                    Block: ["ItemArms", "ItemHands"],
                },
            ],
        },
        {
            Name: "嘴套开关",
            DrawImages: false,
            Key: "m",
            Options: [
                {},
                {
                    // 只阻挡最里层的嘴部
                    Block: ["ItemMouth"],
                },
            ],
        },
        {
            Name: "脚套开关",
            DrawImages: false,
            Key: "f",
            Options: [{}, {}],
        },
    ],
};

/** @type {Translation.Dialog} */
const dialogs = {
    CN: {
        ItemTorso触手服_LuziSelectBase: "选择配置",
        ItemTorso触手服_LuziSelect触手状态: "选择触手状态",
        ItemTorso触手服_LuziSelect上衣开关: "选择上衣状态",
        ItemTorso触手服_LuziSelect手套开关: "选择手套状态",
        ItemTorso触手服_LuziSelect嘴套开关: "选择嘴套状态",
        ItemTorso触手服_LuziSelect脚套开关: "选择脚套状态",
        ItemTorso触手服_LuziModule手套开关: "选择手套状态",
        ItemTorso触手服_LuziModule嘴套开关: "选择嘴套状态",
        ItemTorso触手服_LuziModule脚套开关: "选择脚套状态",
        ItemTorso触手服_LuziModule触手状态: "选择触手状态",
        ItemTorso触手服_LuziModule上衣开关: "选择上衣状态",
        ItemTorso触手服_LuziOptiond0: "封闭阴部",
        ItemTorso触手服_LuziOptiond1: "暴露阴部",
        ItemTorso触手服_LuziOptiond2: "触手插入",
        ItemTorso触手服_LuziOptions0: "上衣隐藏",
        ItemTorso触手服_LuziOptions1: "上衣显示",
        ItemTorso触手服_LuziOptionm0: "嘴套隐藏",
        ItemTorso触手服_LuziOptionm1: "嘴套显示",
        ItemTorso触手服_LuziOptionh0: "手套隐藏",
        ItemTorso触手服_LuziOptionh1: "手套显示",
        ItemTorso触手服_LuziOptionh2: "束缚手臂",
        ItemTorso触手服_LuziOptionf0: "脚套隐藏",
        ItemTorso触手服_LuziOptionf1: "脚套显示",

        ItemTorso触手服_LuziSetd0: "TargetCharacterName的触手服下部的小口逐渐合上,粘连在一起.",
        ItemTorso触手服_LuziSetd1: "TargetCharacterName的触手服下部裂开一个小口,露出阴部.",
        ItemTorso触手服_LuziSetd2:
            "TargetCharacterName的触手服下部裂开一个小口,露出阴部,触手服下长出一只湿滑的触手插入了阴道.",
        ItemTorso触手服_LuziSets0: "TargetCharacterName的触手服缓慢变化,露出胸部.",
        ItemTorso触手服_LuziSets1: "TargetCharacterName的触手服缓慢变化,生长覆盖了胸部.",
        ItemTorso触手服_LuziSeth0: "TargetCharacterName的触手服缓慢变化,露出手臂.",
        ItemTorso触手服_LuziSeth1: "TargetCharacterName的触手服缓慢变化,生长覆盖了手部.",
        ItemTorso触手服_LuziSeth2: "TargetCharacterName的触手服缓慢变化,强制将手臂束缚在身后.",
        ItemTorso触手服_LuziSetf0: "TargetCharacterName的触手服缓慢变化,露出腿部.",
        ItemTorso触手服_LuziSetf1: "TargetCharacterName的触手服缓慢变化,生长覆盖了脚部.",
        ItemTorso触手服_LuziSetm0: "TargetCharacterName的触手服缓慢变化,露出嘴部.",
        ItemTorso触手服_LuziSetm1: "TargetCharacterName的触手服缓慢变化,生长覆盖嘴部.",
    },
    EN: {
        ItemTorso触手服_LuziSelectBase: "Select Configuration",
        ItemTorso触手服_LuziSelect触手状态: "Select Tentacle Status",
        ItemTorso触手服_LuziSelect上衣开关: "Select Top Status",
        ItemTorso触手服_LuziSelect手套开关: "Select Glove Status",
        ItemTorso触手服_LuziSelect嘴套开关: "Select Mouth Cover Status",
        ItemTorso触手服_LuziSelect脚套开关: "Select Foot Cover Status",
        ItemTorso触手服_LuziModule手套开关: "Select Glove Status",
        ItemTorso触手服_LuziModule嘴套开关: "Select Mouth Cover Status",
        ItemTorso触手服_LuziModule脚套开关: "Select Foot Cover Status",
        ItemTorso触手服_LuziModule触手状态: "Select Tentacle Status",
        ItemTorso触手服_LuziModule上衣开关: "Select Top Status",
        ItemTorso触手服_LuziOptiond0: "Seal Genital Area",
        ItemTorso触手服_LuziOptiond1: "Expose Genital Area",
        ItemTorso触手服_LuziOptiond2: "Insert Tentacle",
        ItemTorso触手服_LuziOptions0: "Hide Top",
        ItemTorso触手服_LuziOptions1: "Display Top",
        ItemTorso触手服_LuziOptionm0: "Hide Mouth Cover",
        ItemTorso触手服_LuziOptionm1: "Display Mouth Cover",
        ItemTorso触手服_LuziOptionh0: "Hide Gloves",
        ItemTorso触手服_LuziOptionh1: "Display Gloves",
        ItemTorso触手服_LuziOptionh2: "Bind Arms",
        ItemTorso触手服_LuziOptionf0: "Hide Foot Covers",
        ItemTorso触手服_LuziOptionf1: "Display Foot Covers",

        ItemTorso触手服_LuziSetd0:
            "The lower opening of TargetCharacterName's tentacle suit gradually closes and adheres together.",
        ItemTorso触手服_LuziSetd1:
            "A small opening in the lower part of TargetCharacterName's tentacle suit splits to reveal the genital area.",
        ItemTorso触手服_LuziSetd2:
            "A small opening in the lower part of TargetCharacterName's tentacle suit splits to reveal the genital area, and a slimy tentacle grows out from the suit and inserts into the vagina.",
        ItemTorso触手服_LuziSets0: "The tentacle suit on TargetCharacterName slowly changes, revealing the chest.",
        ItemTorso触手服_LuziSets1: "The tentacle suit on TargetCharacterName slowly changes, growing over the chest.",
        ItemTorso触手服_LuziSeth0: "The tentacle suit on TargetCharacterName slowly changes, revealing the arms.",
        ItemTorso触手服_LuziSeth1: "The tentacle suit on TargetCharacterName slowly changes, growing over the hands.",
        ItemTorso触手服_LuziSeth2:
            "The tentacle suit on TargetCharacterName slowly changes, forcibly binding the arms behind the back.",
        ItemTorso触手服_LuziSetf0: "The tentacle suit on TargetCharacterName slowly changes, revealing the legs.",
        ItemTorso触手服_LuziSetf1: "The tentacle suit on TargetCharacterName slowly changes, growing over the feet.",
        ItemTorso触手服_LuziSetm0: "The tentacle suit on TargetCharacterName slowly changes, revealing the mouth.",
        ItemTorso触手服_LuziSetm1: "The tentacle suit on TargetCharacterName slowly changes, growing over the mouth.",
    },
    UA: {
        ItemTorso触手服_LuziSelectBase: "Виберіть конфігурацію костюму",
        ItemTorso触手服_LuziSelect触手状态: "Статус костюму",
        ItemTorso触手服_LuziSelect上衣开关: "Статус поверхні костюму",
        ItemTorso触手服_LuziSelect手套开关: "Статус щупальцевих рукавиць",
        ItemTorso触手服_LuziSelect嘴套开关: "Статус каверу на рот",
        ItemTorso触手服_LuziSelect脚套开关: "Статус щупальцевих шкарпеток",
        ItemTorso触手服_LuziModule手套开关: "Статус щупальцевих рукавиць",
        ItemTorso触手服_LuziModule嘴套开关: "Статус каверу на рот",
        ItemTorso触手服_LuziModule脚套开关: "Статус щупальцевих шкарпеток",
        ItemTorso触手服_LuziModule触手状态: "Статус щупальцевого костюму",
        ItemTorso触手服_LuziModule上衣开关: "Статус поверхні костюму",
        ItemTorso触手服_LuziOptiond0: "Защільнити геніталії",
        ItemTorso触手服_LuziOptiond1: "Оголити геніталії",
        ItemTorso触手服_LuziOptiond2: "Вставити щупальце",
        ItemTorso触手服_LuziOptions0: "Зняти",
        ItemTorso触手服_LuziOptions1: "Надіти",
        ItemTorso触手服_LuziOptionm0: "Зняти",
        ItemTorso触手服_LuziOptionm1: "Надіти",
        ItemTorso触手服_LuziOptionh0: "Зняти",
        ItemTorso触手服_LuziOptionh1: "Надіти",
        ItemTorso触手服_LuziOptionh2: "Зв'язати руки",
        ItemTorso触手服_LuziOptionf0: "Зняти",
        ItemTorso触手服_LuziOptionf1: "Надіти",

        ItemTorso触手服_LuziSetd0:
            "Нижнє відкриття щупальцевого костюму на тілі TargetCharacterName щільно закривається.",
        ItemTorso触手服_LuziSetd1:
            "Нижня частина щупальцевого костюму на тілі TargetCharacterName потроху відкривається оголюючи PronounPossessive гетіналю.",
        ItemTorso触手服_LuziSetd2:
            "Нижня частина щупальцевого костюму на тілі TargetCharacterName потроху відкривається оголюючи PronounPossessive гетіналю, як потім щупальце зростає позаду носія направляючи свій шлях у вагіну.",
        ItemTorso触手服_LuziSets0:
            "щупальцевий костюм на тілі TargetCharacterName потроху змінюється, оголюючи груди носія.",
        ItemTorso触手服_LuziSets1:
            "щупальцевий костюм на тілі TargetCharacterName потроху змінюється, як воно зростає на грудях носія.",
        ItemTorso触手服_LuziSeth0:
            "щупальцевий костюм на тілі TargetCharacterName потроху змінюється, оголюючи руки носія.",
        ItemTorso触手服_LuziSeth1:
            "щупальцевий костюм на тілі TargetCharacterName потроху змінюється, як воно зростає на руках носія покриваючи їх в щупальцевому костюмі.",
        ItemTorso触手服_LuziSeth2:
            "щупальцевий костюм на тілі TargetCharacterName потроху змінюється, як воно зв'язує руки носія за PronounPossessive спиною.",
        ItemTorso触手服_LuziSetf0:
            "щупальцевий костюм на тілі TargetCharacterName потроху змінюється, оголюючи ноги носія.",
        ItemTorso触手服_LuziSetf1:
            "щупальцевий костюм на тілі TargetCharacterName потроху змінюється, як воно зростає на ногах носія покриваючи їх в щупальцевому костюмі.",
        ItemTorso触手服_LuziSetm0:
            "щупальцевий костюм на тілі TargetCharacterName потроху змінюється, оголюючи рот носія.",
        ItemTorso触手服_LuziSetm1:
            "щупальцевий костюм на тілі TargetCharacterName потроху змінюється, як воно зростає на роті носія.",
    },
    RU: {
        ItemTorso触手服_LuziSelectBase: "Select Configuration",
        ItemTorso触手服_LuziSelect触手状态: "Select Tentacle Status",
        ItemTorso触手服_LuziSelect上衣开关: "Select Top Status",
        ItemTorso触手服_LuziSelect手套开关: "Select Glove Status",
        ItemTorso触手服_LuziSelect嘴套开关: "Select Mouth Cover Status",
        ItemTorso触手服_LuziSelect脚套开关: "Select Foot Cover Status",
        ItemTorso触手服_LuziModule手套开关: "Select Glove Status",
        ItemTorso触手服_LuziModule嘴套开关: "Select Mouth Cover Status",
        ItemTorso触手服_LuziModule脚套开关: "Select Foot Cover Status",
        ItemTorso触手服_LuziModule触手状态: "Select Tentacle Status",
        ItemTorso触手服_LuziModule上衣开关: "Select Top Status",
        ItemTorso触手服_LuziOptiond0: "Seal Genital Area",
        ItemTorso触手服_LuziOptiond1: "Expose Genital Area",
        ItemTorso触手服_LuziOptiond2: "Insert Tentacle",
        ItemTorso触手服_LuziOptions0: "Hide Top",
        ItemTorso触手服_LuziOptions1: "Display Top",
        ItemTorso触手服_LuziOptionm0: "Hide Mouth Cover",
        ItemTorso触手服_LuziOptionm1: "Display Mouth Cover",
        ItemTorso触手服_LuziOptionh0: "Hide Gloves",
        ItemTorso触手服_LuziOptionh1: "Display Gloves",
        ItemTorso触手服_LuziOptionh2: "Bind Arms",
        ItemTorso触手服_LuziOptionf0: "Hide Foot Covers",
        ItemTorso触手服_LuziOptionf1: "Display Foot Covers",

        ItemTorso触手服_LuziSetd0:
            "The lower opening of TargetCharacterName's tentacle suit gradually closes and adheres together.",
        ItemTorso触手服_LuziSetd1:
            "A small opening in the lower part of TargetCharacterName's tentacle suit splits to reveal the genital area.",
        ItemTorso触手服_LuziSetd2:
            "A small opening in the lower part of TargetCharacterName's tentacle suit splits to reveal the genital area, and a slimy tentacle grows out from the suit and inserts into the vagina.",
        ItemTorso触手服_LuziSets0: "The tentacle suit on TargetCharacterName slowly changes, revealing the chest.",
        ItemTorso触手服_LuziSets1: "The tentacle suit on TargetCharacterName slowly changes, growing over the chest.",
        ItemTorso触手服_LuziSeth0: "The tentacle suit on TargetCharacterName slowly changes, revealing the arms.",
        ItemTorso触手服_LuziSeth1: "The tentacle suit on TargetCharacterName slowly changes, growing over the hands.",
        ItemTorso触手服_LuziSeth2:
            "The tentacle suit on TargetCharacterName slowly changes, forcibly binding the arms behind the back.",
        ItemTorso触手服_LuziSetf0: "The tentacle suit on TargetCharacterName slowly changes, revealing the legs.",
        ItemTorso触手服_LuziSetf1: "The tentacle suit on TargetCharacterName slowly changes, growing over the feet.",
        ItemTorso触手服_LuziSetm0: "The tentacle suit on TargetCharacterName slowly changes, revealing the mouth.",
        ItemTorso触手服_LuziSetm1: "The tentacle suit on TargetCharacterName slowly changes, growing over the mouth.",
    },
};

const translations = { CN: "触手服", EN: "Tentacle Suit", UA: "Щупальцевий костюм", RU: "Костюм для щупальца" };

export default function () {
    AssetManager.addAsset("ItemTorso", asset, extended, translations);
    AssetManager.addCustomDialog(dialogs);
    // 使用CopyConfig设置后，只需要设置一次
    ModManager.globalFunction("AssetsItemTorso触手服_LuziBeforeDraw", beforeDraw);
    ModManager.globalFunction("AssetsItemTorso2触手服_LuziBeforeDraw", beforeDraw);
}
