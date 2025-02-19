import AssetManager from "@mod-utils/AssetManager";
import { Tools } from "@mod-utils/Tools";
import ModManager from "@mod-utils/ModManager";
import { VersionSupport } from "@mod-utils/VersionSupport";

/**
 * @typedef { { Masturbate:boolean, Glow: boolean } } LewdCrestData
 */

/**
 * @typedef { globalThis.ItemProperties & LewdCrestData } ExtendItemProperties
 */

/**
 * @typedef { { ArousalCheckTimer:number, NextMasturbateTime:number, Frame: number, FrameTimer:number }} 淫纹DataType
 */

/** @type { AssetGroupItemName } */
const itemTGroup = "ItemPelvis";

function AssetsItemPelvis随机自慰() {
    DrawFlashScreen("#F347B4", 1500, 500);
    if (Player.HasEffect("Block")) {
        ServerSend("ChatRoomChat", {
            Content: `ItemPelvis淫纹_Luzi自慰Block${Player.HasPenis() ? 1 : 0}${Math.floor(Math.random() * 5)}`,
            Type: "Action",
            Dictionary: [{ SourceCharacter: Player.MemberNumber }],
        });
        return;
    }
    const group = AssetGroupGet(
        "Female3DCG",
        /** @type {AssetGroupItemName[]} */ (["ItemVulvaPiercings", "ItemVulva"])[Math.floor(Math.random() * 2)]
    );
    ActivityRun(
        Player,
        Player,
        group,
        {
            Activity: AssetGetActivity("Female3DCG", "MasturbateHand"),
            Group: itemTGroup,
        },
        true
    );
}

/**
 * @param {Character} player
 * @param {淫纹DataType} data
 * @param {ExtendItemProperties} property
 */
function updateRuns(player, data, property) {
    const now = CommonTime();
    if (!data.ArousalCheckTimer) data.ArousalCheckTimer = now;

    const delta = now - data.ArousalCheckTimer;
    data.ArousalCheckTimer += delta;

    if (property.TypeRecord.a === 1) {
        const LSCG = /** @type {any} */ (player).LSCG;
        if (LSCG && LSCG.InjectorModule && LSCG.InjectorModule.enabled && LSCG.InjectorModule.enableHorny) {
            const { drugLevelMultiplier, hornyLevelMax, hornyLevel } = LSCG.InjectorModule;
            LSCG.InjectorModule.hornyLevel = Math.min(
                hornyLevel + 0.05 * drugLevelMultiplier * (delta / 1000),
                hornyLevelMax * drugLevelMultiplier
            );
        }
    }

    const nextTime = () =>
        now + (Math.random() * 10 + (15 * (100 - (Player.ArousalSettings?.Progress ?? 0))) / 100 + 10) * 1000;

    if (!data.NextMasturbateTime) data.NextMasturbateTime = nextTime();

    if (property.Masturbate && CurrentScreen == "ChatRoom") {
        if (now > data.NextMasturbateTime) {
            data.NextMasturbateTime = nextTime();
            AssetsItemPelvis随机自慰();
        }
    } else {
        data.NextMasturbateTime = nextTime();
    }
}

ModManager.hookFunction("ChatRoomMessage", 10, (args, next) => {
    const { Type, Content, Dictionary } = args[0];
    if (
        Type == "Action" &&
        Array.isArray(Dictionary) &&
        Dictionary.find((x) => "TargetCharacter" in x)?.TargetCharacter === Player.MemberNumber
    ) {
        if (Content.includes("ActionUse")) {
            if (Dictionary.find((x) => "AssetName" in x)?.AssetName === asset.Name) {
                const sourceChara = Dictionary.find((x) => "SourceCharacter" in x)?.SourceCharacter;
                const item = InventoryGet(Player, itemTGroup);
                const lock = { Asset: AssetGet(Player.AssetFamily, "ItemMisc", "淫纹锁_Luzi_Padlock") };
                InventoryLock(Player, item, lock, sourceChara);
                item.Property.MemberNumberListKeys = CommonConvertArrayToString([sourceChara]);

                ChatRoomCharacterItemUpdate(Player, itemTGroup);
            }
        } else if (Content === "淫纹_Luzi淫纹强制高潮") {
            if (!!Player.ArousalSettings) Player.ArousalSettings.Progress = 100;
            ActivityOrgasmPrepare(Player);
        } else if (Content === "ItemPelvis淫纹_LuziSeta1") {
            DrawFlashScreen("#F347B4", 1500, 500);
        }
    }
    next(args);
});

/** @type {Record<string, Rect>} */
const buttons = {
    电流按钮: { X: 1265, Y: 600, W: 225, H: 55 },
    高潮按钮: { X: 1510, Y: 600, W: 225, H: 55 },

    发光开关: { X: 1185, Y: 675, W: 64, H: 64 },
    自慰开关: { X: 1185, Y: 750, W: 64, H: 64 },
};

/** @type { ExtendedItemScriptHookCallbacks.Draw<ModularItemData> } */
function dialogDrawHook(Data, originalFunction) {
    originalFunction();
    if (!DialogFocusItem) return;
    if (Data.currentModule === "样式" || Data.currentModule === "性刺激") {
    } else {
        const prevAlign = MainCanvas.textAlign;
        MainCanvas.textAlign = "center";
        ExtendedItemCustomDraw("ItemPelvis淫纹_Luzi淫纹魔法电流按钮", buttons.电流按钮.X, buttons.电流按钮.Y);
        ExtendedItemCustomDraw("ItemPelvis淫纹_Luzi淫纹强制高潮按钮", buttons.高潮按钮.X, buttons.高潮按钮.Y);

        MainCanvas.textAlign = "left";
        const property = /** @type {ExtendItemProperties} */ (DialogFocusItem.Property);
        const 强制自慰ON = property.Masturbate;
        const 发光ON = property.Glow;
        ExtendedItemDrawCheckbox("GlowSwitch", buttons.发光开关.X, buttons.发光开关.Y, 发光ON, {
            text: AssetTextGet("ItemPelvis淫纹_Luzi淫纹发光按钮"),
            textColor: "White",
        });
        ExtendedItemDrawCheckbox("MastSwitch", buttons.自慰开关.X, buttons.自慰开关.Y, 强制自慰ON, {
            text: AssetTextGet("ItemPelvis淫纹_Luzi淫纹强制自慰按钮"),
            textColor: "White",
        });
        MainCanvas.textAlign = prevAlign;
    }
}

/**
 * @param {Rect} rect
 * @returns {boolean}
 */
export function RMouseIn(rect) {
    return MouseIn(rect.X, rect.Y, rect.W, rect.H);
}

/** @type {ExtendedItemScriptHookCallbacks.Click<ModularItemData>} */
function dialogClickHook(Data, originalFunction) {
    originalFunction();
    if (!DialogFocusItem) return;
    if (Data.currentModule === "样式" || Data.currentModule === "性刺激") {
    } else {
        const property = /** @type {ExtendItemProperties} */ (DialogFocusItem.Property);

        const clickPush = (key, func) =>
            ExtendedItemCustomClickAndPush(CharacterGetCurrent(), DialogFocusItem, key, () => func(), false, false);

        if (RMouseIn(buttons.高潮按钮)) {
            const Dictionary = new DictionaryBuilder()
                .sourceCharacter(Player)
                .targetCharacter(CharacterGetCurrent())
                .destinationCharacterName(CharacterGetCurrent())
                .asset(DialogFocusItem.Asset, "AssetName", DialogFocusItem.Craft && DialogFocusItem.Craft.Name)
                .build();
            ChatRoomPublishCustomAction(`${asset.Name}淫纹强制高潮`, true, Dictionary);
        } else if (RMouseIn(buttons.电流按钮)) {
            ExtendedItemCustomClick("淫纹魔法电流", PropertyShockPublishAction, false, false);
        } else if (RMouseIn(buttons.发光开关)) {
            clickPush("Glow", () => {
                property.Glow = !property.Glow;
                property.OverridePriority = property.Glow ? 44 : undefined;
            });
        } else if (RMouseIn(buttons.自慰开关)) {
            clickPush("Masturbate", () => (property.Masturbate = !property.Masturbate));
            const Dictionary = new DictionaryBuilder()
                .sourceCharacter(Player)
                .destinationCharacterName(CharacterGetCurrent())
                .asset(DialogFocusItem.Asset, "AssetName", DialogFocusItem.Craft && DialogFocusItem.Craft.Name)
                .build();
            ChatRoomPublishCustomAction(
                `${asset.Name}${property.Masturbate ? "开始" : "停止"}淫纹强制自慰`,
                false,
                Dictionary
            );
        }
    }
}

/** @type {ExtendedItemScriptHookCallbacks.ScriptDraw<ModularItemData, 淫纹DataType>} */
function scriptDraw(data, originalFunction, { C, Item, PersistentData }) {
    const Data = PersistentData();

    if (C.IsPlayer()) updateRuns(C, Data, /**@type {ExtendItemProperties}*/ (Item.Property));

    Tools.drawUpdate(C, Data);
}

/** @type {ExtendedItemScriptHookCallbacks.BeforeDraw<ModularItemData, 淫纹DataType>} */
function beforeDraw(data, originalFunction, { PersistentData, L, Property, C }) {
    if (L === "发光") {
        const property = /** @type {ExtendItemProperties} */ (Property);

        if (!property.Glow) return { Opacity: 0 };

        const Data = PersistentData();
        const TwinkleSpeed = C.ArousalSettings ? 110 - C.ArousalSettings.Progress : 50;
        Data.Frame = Data.Frame || 0;
        Data.Frame = (Data.Frame + 1) % TwinkleSpeed;
        return { Opacity: 0.7 + 0.3 * Math.cos(((Data.Frame * 1) / TwinkleSpeed) * 2 * Math.PI) };
    }
}

/** @type { CustomAssetDefinition} */
const asset = {
    Name: "淫纹_Luzi",
    Random: false,
    Top: 308,
    Left: 54,
    Priority: 10,
    AllowLock: true,
    AllowTighten: false,
    DrawLocks: false,
    Extended: true,
    AlwaysExtend: true,
    Difficulty: 20,
    RemoveTime: 15,
    Time: 10,
    DynamicScriptDraw: true,
    DynamicBeforeDraw: true,
    ParentGroup: VersionSupport.NoParentGroup,
    DefaultColor: ["#EA3E74"],
    PoseMapping: {
        Hogtied: "Hide",
        AllFours: "Hide",
    },
    Layer: [
        {
            Name: "淫纹",
            AllowTypes: { t: 0 },
        },
        {
            Name: "预设淫纹1",
            AllowColorize: false,
            AllowTypes: { t: 1 },
        },
        {
            Name: "预设淫纹2",
            AllowColorize: false,
            AllowTypes: { t: 2 },
        },
        {
            Name: "预设淫纹3",
            AllowColorize: false,
            AllowTypes: { t: 3 },
        },
        {
            Name: "发光",
        },
    ],
};
/** @type { CustomAssetDefinition} */
const asset2 = {
    Name: "淫纹锁_Luzi_Padlock",
    Random: false,
    Wear: false,
    Enable: false,
    Effect: [],
    IsLock: true,
    ExclusiveUnlock: true,
    Time: 10,
    Extended: true,
};

/** @type {AssetArchetypeConfig} */
const extended = {
    Archetype: ExtendedArchetype.MODULAR,
    ChangeWhenLocked: false,
    DrawImages: false,
    ChatTags: Tools.CommonChatTags(),
    Modules: [
        { Name: "样式", Key: "t", Options: [{}, {}, {}, {}], DrawImages: true },
        {
            Name: "性刺激",
            Key: "a",
            Options: [
                {},
                {},
                { Property: { Effect: [E.DenialMode] } },
                { Property: { Effect: [E.DenialMode, E.RuinOrgasms] } },
            ],
        },
    ],
    ScriptHooks: {
        Draw: dialogDrawHook,
        Click: dialogClickHook,
        BeforeDraw: beforeDraw,
        ScriptDraw: scriptDraw,
    },
    BaselineProperty: /** @type {ExtendItemProperties}*/ ({
        Masturbate: false,
        Glow: false,
    }),
};
/** @type {AssetArchetypeConfig} */
const extended2 = {
    Archetype: ExtendedArchetype.NOARCH,
    ScriptHooks: {
        Init: InventoryItemMiscHighSecurityPadlockInitHook,
        Load: InventoryItemMiscHighSecurityPadlockLoadHook,
        Draw: InventoryItemMiscHighSecurityPadlockDrawHook,
        Click: InventoryItemMiscHighSecurityPadlockClickHook,
        Exit: InventoryItemMiscHighSecurityPadlockExitHook,
    },
    BaselineProperty: {
        MemberNumberListKeys: "",
    },
};

const dialog = {
    CN: {
        ItemPelvis淫纹_LuziSelectBase: "淫纹设置",
        ItemPelvis淫纹_LuziModule样式: "淫纹样式",
        ItemPelvis淫纹_LuziModule性刺激: "淫纹性刺激",

        ItemPelvis淫纹_Luzi淫纹发光按钮: "淫纹发光",
        ItemPelvis淫纹_Luzi淫纹强制自慰按钮: "淫纹强制自慰",

        ItemPelvis淫纹_Luzi淫纹魔法电流按钮: "淫纹魔法电流",
        ItemPelvis淫纹_Luzi淫纹强制高潮按钮: "淫纹强制高潮",

        ItemPelvis淫纹_LuziSelect样式: "设置淫纹样式",
        ItemPelvis淫纹_LuziOptiont0: "默认样式",
        ItemPelvis淫纹_LuziOptiont1: "样式1",
        ItemPelvis淫纹_LuziOptiont2: "样式2",
        ItemPelvis淫纹_LuziOptiont3: "样式3",
        ItemPelvis淫纹_LuziSett0: "SourceCharacter将DestinationCharacter淫纹设置为默认样式.",
        ItemPelvis淫纹_LuziSett1: "SourceCharacter将DestinationCharacter淫纹设置为样式1.",
        ItemPelvis淫纹_LuziSett2: "SourceCharacter将DestinationCharacter淫纹设置为样式2.",
        ItemPelvis淫纹_LuziSett3: "SourceCharacter将DestinationCharacter淫纹设置为样式3.",

        ItemPelvis淫纹_LuziSelect性刺激: "淫纹性刺激设置",
        ItemPelvis淫纹_LuziOptiona0: "正常",
        ItemPelvis淫纹_LuziOptiona1: "持续发情",
        ItemPelvis淫纹_LuziOptiona2: "寸止",
        ItemPelvis淫纹_LuziOptiona3: "拒绝",
        ItemPelvis淫纹_LuziSeta0: "SourceCharacter通过AssetName上的魔法令TargetCharacter的淫纹恢复自然状态.",
        ItemPelvis淫纹_LuziSeta1:
            "SourceCharacter通过AssetName上的魔法令TargetCharacter的小穴保持湿润,持续处于发情状态.",
        ItemPelvis淫纹_LuziSeta2: "SourceCharacter通过AssetName上的魔法令TargetCharacter仅能够处于高潮边缘.",
        ItemPelvis淫纹_LuziSeta3: "SourceCharacter通过AssetName上的魔法令TargetCharacter仅能够拒绝高潮.",

        淫纹_Luzi开始淫纹强制自慰: "SourceCharacter通过AssetName上的魔法令TargetCharacter开始不停地自慰.",
        淫纹_Luzi停止淫纹强制自慰: "SourceCharacter通过AssetName上的魔法解除了TargetCharacter的强制自慰.",

        淫纹_Luzi淫纹强制高潮: "SourceCharacter通过AssetName上的魔法令TargetCharacter强制高潮.",

        ItemPelvis淫纹_Luzi自慰Block00: "SourceCharacter急切的想要抚慰自己,颤抖着夹紧双腿,尽可能刺激自己的私处.",
        ItemPelvis淫纹_Luzi自慰Block01: "SourceCharacter急切的想要抚慰自己,扭动肩膀,尽可能让乳尖受到进一步刺激.",
        ItemPelvis淫纹_Luzi自慰Block02: "SourceCharacter急切的想要抚慰自己,夹紧双腿摩擦私处,但仍难以得到刺激.",
        ItemPelvis淫纹_Luzi自慰Block03: "SourceCharacter急切的想要抚慰自己,手臂挣扎着想要自慰,但她的手臂完全无法动弹.",
        ItemPelvis淫纹_Luzi自慰Block04:
            "SourceCharacter急切的想要抚慰自己,手臂徒劳地向着私处摸索尝试,近在咫尺的快乐此时却是如此遥不可及.",
        ItemPelvis淫纹_Luzi自慰Block10: "SourceCharacter急切的想要抚慰自己,颤抖着夹紧双腿,尽可能刺激自己的阴茎.",
        ItemPelvis淫纹_Luzi自慰Block11: "SourceCharacter急切的想要抚慰自己,扭动身体,尽可能磨蹭阴茎龟头.",
        ItemPelvis淫纹_Luzi自慰Block12: "SourceCharacter急切的想要抚慰自己,夹紧双腿摩擦龟头,但仍难以得到刺激.",
        ItemPelvis淫纹_Luzi自慰Block13: "SourceCharacter急切的想要抚慰自己,手臂挣扎着想要自慰,但他的手臂完全无法动弹.",
        ItemPelvis淫纹_Luzi自慰Block14:
            "SourceCharacter急切的想要抚慰自己,手臂徒劳地向着阴茎摸索尝试,近在咫尺的快乐此时却是如此遥不可及.",

        ItemMisc淫纹锁_LuziIntro: "画着复杂的文字",
    },
    EN: {
        ItemPelvis淫纹_LuziSelectBase: "Lewd Crest Settings",
        ItemPelvis淫纹_LuziModule样式: "Lewd Crest Style",
        ItemPelvis淫纹_LuziModule性刺激: "Lewd Crest Sexual Stimulation",

        ItemPelvis淫纹_Luzi淫纹发光按钮: "Lewd Crest Glowing",
        ItemPelvis淫纹_Luzi淫纹强制自慰按钮: "Lewd Crest Forced Masturbation",

        ItemPelvis淫纹_Luzi淫纹魔法电流按钮: "Lewd Crest Magical Shock",
        ItemPelvis淫纹_Luzi淫纹强制高潮按钮: "Lust Pattern Magical Orgasm",

        ItemPelvis淫纹_LuziSelect样式: "Select Lewd Crest Style",
        ItemPelvis淫纹_LuziOptiont0: "Default Style",
        ItemPelvis淫纹_LuziOptiont1: "Style 1",
        ItemPelvis淫纹_LuziOptiont2: "Style 2",
        ItemPelvis淫纹_LuziOptiont3: "Style 3",
        ItemPelvis淫纹_LuziSett0: "SourceCharacter sets DestinationCharacter Lust Pattern to the default style.",
        ItemPelvis淫纹_LuziSett1: "SourceCharacter sets DestinationCharacter Lust Pattern to Style 1.",
        ItemPelvis淫纹_LuziSett2: "SourceCharacter sets DestinationCharacter Lust Pattern to Style 2.",
        ItemPelvis淫纹_LuziSett3: "SourceCharacter sets DestinationCharacter Lust Pattern to Style 3.",

        ItemPelvis淫纹_LuziSelect性刺激: "Lewd Crest Sexual Stimulation Settings",
        ItemPelvis淫纹_LuziOptiona0: "Normal",
        ItemPelvis淫纹_LuziOptiona1: "Continuous Heat",
        ItemPelvis淫纹_LuziOptiona2: "Edge",
        ItemPelvis淫纹_LuziOptiona3: "Deny",
        ItemPelvis淫纹_LuziSeta0:
            "SourceCharacter uses magic on AssetName to restore TargetCharacter's Lust Pattern to its natural state.",
        ItemPelvis淫纹_LuziSeta1:
            "SourceCharacter uses magic on AssetName to keep TargetCharacter's intimate area moist and in a continuous state of heat.",
        ItemPelvis淫纹_LuziSeta2:
            "SourceCharacter uses magic on AssetName to keep TargetCharacter at the edge of orgasm.",
        ItemPelvis淫纹_LuziSeta3:
            "SourceCharacter uses magic on AssetName to make TargetCharacter able to only reject orgasm.",

        淫纹_Luzi开始淫纹强制自慰:
            "SourceCharacter uses magic on AssetName to make TargetCharacter start continuous masturbation.",
        淫纹_Luzi停止淫纹强制自慰:
            "SourceCharacter uses magic on AssetName to stop the forced masturbation of TargetCharacter.",

        淫纹_Luzi淫纹强制高潮: "SourceCharacter uses magic on AssetName to force TargetCharacter to orgasm.",

        ItemPelvis淫纹_Luzi自慰Block00:
            "SourceCharacter eagerly wants to pleasure themselves, trembling and squeezing their thighs together to stimulate their private areas as much as possible.",
        ItemPelvis淫纹_Luzi自慰Block01:
            "SourceCharacter eagerly wants to pleasure themselves, wriggling their shoulders to further stimulate their nipples.",
        ItemPelvis淫纹_Luzi自慰Block02:
            "SourceCharacter eagerly wants to pleasure themselves, squeezing their thighs together to rub their private areas but still finding it difficult to stimulate themselves.",
        ItemPelvis淫纹_Luzi自慰Block03:
            "SourceCharacter eagerly wants to pleasure themselves, struggling with their arms to masturbate, but their arms are completely immobilized.",
        ItemPelvis淫纹_Luzi自慰Block04:
            "SourceCharacter eagerly wants to pleasure themselves, their arms futilely reaching towards their private areas, the close proximity of pleasure now seeming so unreachable.",
        ItemPelvis淫纹_Luzi自慰Block10:
            "SourceCharacter was eager to soothe himself, trembling and gripping his legs, trying to stimulate his penis as much as possible.",
        ItemPelvis淫纹_Luzi自慰Block11:
            "SourceCharacter is eager to soothe himself, twisting his body and rubbing against the glans penis as much as possible.",
        ItemPelvis淫纹_Luzi自慰Block12:
            "SourceCharacter urgently wanted to comfort himself, clamping his legs and rubbing his glans, but still struggled to get stimulation.",
        ItemPelvis淫纹_Luzi自慰Block13:
            "SourceCharacter desperately wanted to comfort himself, struggling with his arms to masturbate, but his arms were completely immobile.",
        ItemPelvis淫纹_Luzi自慰Block14:
            "SourceCharacter urgently wanted to comfort himself, and in vain, his arm groped towards his penis, but the joy that was so close at hand was so unattainable at this moment.",
        ItemMisc淫纹锁_LuziIntro: "Inscripted with complex symbols",
    },
    UA: {
        ItemPelvis淫纹_LuziSelectBase: "Налаштування Lewd Crest",
        ItemPelvis淫纹_LuziModule样式: "Розпусний стиль Crest",
        ItemPelvis淫纹_LuziModule性刺激: "Сексуальна стимуляція Lewd Crest",
        ItemPelvis淫纹_Luzi淫纹发光按钮: "Розпусний гребінь, що світиться",
        ItemPelvis淫纹_Luzi淫纹强制自慰按钮: "Розпусний гребінь примусової мастурбації",
        ItemPelvis淫纹_Luzi淫纹魔法电流按钮: "Магічний шок Lewd Crest",
        ItemPelvis淫纹_Luzi淫纹强制高潮按钮: "Візерунок хтивості. Чарівний оргазм",
        ItemPelvis淫纹_LuziSelect样式: "Виберіть стиль Lewd Crest",
        ItemPelvis淫纹_LuziOptiont0: "Типовий стиль",
        ItemPelvis淫纹_LuziOptiont1: "Стиль 1",
        ItemPelvis淫纹_LuziOptiont2: "Стиль 2",
        ItemPelvis淫纹_LuziOptiont3: "Стиль 3",
        ItemPelvis淫纹_LuziSett0:
            "SourceCharacter встановлює для шаблону Lust DestinationCharacter стиль за замовчуванням.",
        ItemPelvis淫纹_LuziSett1: "SourceCharacter встановлює стиль 1 для моделі Lust для персонажа призначення.",
        ItemPelvis淫纹_LuziSett2: "SourceCharacter встановлює шаблон хтивості DestinationCharacter на стиль 2.",
        ItemPelvis淫纹_LuziSett3: "SourceCharacter встановлює стиль 3 для шаблону хтивості DestinationCharacter.",
        ItemPelvis淫纹_LuziSelect性刺激: "Налаштування сексуальної стимуляції Lewd Crest",
        ItemPelvis淫纹_LuziOptiona0: "нормальний",
        ItemPelvis淫纹_LuziOptiona1: "Безперервне тепло",
        ItemPelvis淫纹_LuziOptiona2: "Край",
        ItemPelvis淫纹_LuziOptiona3: "Заперечувати",
        ItemPelvis淫纹_LuziSeta0:
            "SourceCharacter використовує магію на AssetName, щоб відновити шаблон хіть TargetCharacter до його природного стану.",
        ItemPelvis淫纹_LuziSeta1:
            "SourceCharacter використовує магію на AssetName, щоб підтримувати інтимну зону TargetCharacter вологою та постійно нагріватись.",
        ItemPelvis淫纹_LuziSeta2:
            "SourceCharacter використовує магію на AssetName, щоб утримувати TargetCharacter на межі оргазму.",
        ItemPelvis淫纹_LuziSeta3:
            "SourceCharacter використовує магію на AssetName, щоб зробити TargetCharacter здатним лише відкидати оргазм.",
        淫纹_Luzi开始淫纹强制自慰:
            "SourceCharacter використовує магію на AssetName, щоб змусити TargetCharacter почати безперервну мастурбацію.",
        淫纹_Luzi停止淫纹强制自慰:
            "SourceCharacter використовує магію на AssetName, щоб зупинити примусову мастурбацію TargetCharacter.",
        淫纹_Luzi淫纹强制高潮:
            "SourceCharacter використовує магію на AssetName, щоб змусити TargetCharacter досягти оргазму.",
        ItemPelvis淫纹_Luzi自慰Block00:
            "SourceCharacter з нетерпінням хоче чіпати себе, стискає свої лахи як їхні ноги трусяться від жаги стимулювати себе якомога більше.",
        ItemPelvis淫纹_Luzi自慰Block01:
            "SourceCharacter з нетерпінням хоче чіпати себе, трусячи своїми плечима з жагою стимулювати свої груди й соски.",
        ItemPelvis淫纹_Luzi自慰Block02:
            "SourceCharacter з нетерпінням хоче чіпати себе, стискає свої лахи як їхні ноги трусяться від жаги стимулювати себе якомога більше але натомість не получається стимулювати себе так просто.",
        ItemPelvis淫纹_Luzi自慰Block03:
            "SourceCharacter з нетерпінням хоче чіпати себе, пробуючи чинити опір проти щупальевого косьюму як їхні руки зв'язані позаду їх.",
        ItemPelvis淫纹_Luzi自慰Block04:
            "SourceCharacter з нетерпінням хоче чіпати себе, their arms futilely reaching towards their private areas, the close proximity of pleasure now seeming so unreachable.",
        ItemPelvis淫纹_Luzi自慰Block10:
            "SourceCharacter з нетерпінням хоче охолодити свою жагу, як його тіло труситься і він стискає свої ляхи, пробуючи стимулювати себе якомога більше.",
        ItemPelvis淫纹_Luzi自慰Block11:
            "SourceCharacter з нетерпінням хоче охолодити свою жагу, як він повертає своє тіло всік і всяк якомога більше.",
        ItemPelvis淫纹_Luzi自慰Block12:
            "SourceCharacter терміново хоче знизити жагу, як він стискає свої ляхи і тре свою голівку пісюна, але з невдалою спробою пробує стимулювати себе.",
        ItemPelvis淫纹_Luzi自慰Block13:
            "SourceCharacter терміново хоче знизити жагу, намагаючись використати свої руки з користю і мастурбувати, але натомість його руки жалюгідно нерухомі.",
        ItemPelvis淫纹_Luzi自慰Block14:
            "SourceCharacter з гіганською жагою чіпати себе, цого рука слідує до його пісюна стискаючи з впевненістю, натомість не отримує доступне задоволення в руці.",
        ItemMisc淫纹锁_LuziIntro: "Намальовано складними літерами",
    },
    RU: {
        ItemPelvis淫纹_LuziSelectBase: "Настройки Lewd Crest",
        ItemPelvis淫纹_LuziModule样式: "Стиль Lewd Crest",
        ItemPelvis淫纹_LuziModule性刺激: "Сексуальная стимуляция Lewd Crest",
        ItemPelvis淫纹_Luzi淫纹发光按钮: "Светящийся Lewd Crest",
        ItemPelvis淫纹_Luzi淫纹强制自慰按钮: "Принудительная мастурбация Lewd Crest",
        ItemPelvis淫纹_Luzi淫纹魔法电流按钮: "Магический шок Lewd Crest",
        ItemPelvis淫纹_Luzi淫纹强制高潮按钮: "Узор похоти Магический оргазм",
        ItemPelvis淫纹_LuziSelect样式: "Выбрать стиль Lewd Crest",
        ItemPelvis淫纹_LuziOptiont0: "Стиль по умолчанию",
        ItemPelvis淫纹_LuziOptiont1: "Стиль 1",
        ItemPelvis淫纹_LuziOptiont2: "Стиль 2",
        ItemPelvis淫纹_LuziOptiont3: "Стиль 3",
        ItemPelvis淫纹_LuziSett0:
            "SourceCharacter устанавливает узор похоти DestinationCharacter на стиль по умолчанию.",
        ItemPelvis淫纹_LuziSett1: "SourceCharacter устанавливает Lust Pattern DestinationCharacter на Style 1.",
        ItemPelvis淫纹_LuziSett2: "SourceCharacter устанавливает Lust Pattern DestinationCharacter на Style 2.",
        ItemPelvis淫纹_LuziSett3: "SourceCharacter устанавливает Lust Pattern DestinationCharacter на Style 3.",
        ItemPelvis淫纹_LuziSelect性刺激: "Настройки сексуальной стимуляции Lewd Crest",
        ItemPelvis淫纹_LuziOptiona0: "Обычный",
        ItemPelvis淫纹_LuziOptiona1: "Постоянный нагрев",
        ItemPelvis淫纹_LuziOptiona2: "Грань",
        ItemPelvis淫纹_LuziOptiona3: "Запретить",
        ItemPelvis淫纹_LuziSeta0:
            "SourceCharacter использует магию на AssetName, чтобы восстановить Lust Pattern TargetCharacter до его естественного состояния.",
        ItemPelvis淫纹_LuziSeta1:
            "SourceCharacter использует магию на AssetName, чтобы поддерживать интимную зону TargetCharacter влажной и в постоянном состоянии тепла.",
        ItemPelvis淫纹_LuziSeta2:
            "SourceCharacter использует магию на AssetName, чтобы удерживать TargetCharacter на грани оргазма.",
        ItemPelvis淫纹_LuziSeta3:
            "SourceCharacter использует магию на AssetName, чтобы TargetCharacter мог только отвергать оргазм.",
        淫纹_Luzi开始淫纹强制自慰:
            "SourceCharacter использует магию на AssetName, чтобы TargetCharacter начал непрерывную мастурбацию.",
        淫纹_Luzi停止淫纹强制自慰:
            "SourceCharacter использует магию на AssetName, чтобы остановить принудительную мастурбацию TargetCharacter.",
        淫纹_Luzi淫纹强制高潮:
            "SourceCharacter использует магию на AssetName, чтобы заставить TargetCharacter кончить.",
        ItemPelvis淫纹_Luzi自慰Block00:
            "SourceCharacter eagerly wants to pleasure themselves, trembling and squeezing their thighs together to stimulate their private areas as much as possible.",
        ItemPelvis淫纹_Luzi自慰Block01:
            "SourceCharacter eagerly wants to pleasure themselves, wriggling their shoulders to further stimulate their nipples.",
        ItemPelvis淫纹_Luzi自慰Block02:
            "SourceCharacter eagerly wants to pleasure themselves, squeezing their thighs together to rub their private areas but still finding it difficult to stimulate themselves.",
        ItemPelvis淫纹_Luzi自慰Block03:
            "SourceCharacter eagerly wants to pleasure themselves, struggling with their arms to masturbate, but their arms are completely immobilized.",
        ItemPelvis淫纹_Luzi自慰Block04:
            "SourceCharacter eagerly wants to pleasure themselves, their arms futilely reaching towards their private areas, the close proximity of pleasure now seeming so unreachable.",
        ItemPelvis淫纹_Luzi自慰Block10:
            "SourceCharacter was eager to soothe himself, trembling and gripping his legs, trying to stimulate his penis as much as possible.",
        ItemPelvis淫纹_Luzi自慰Block11:
            "SourceCharacter is eager to soothe himself, twisting his body and rubbing against the glans penis as much as possible.",
        ItemPelvis淫纹_Luzi自慰Block12:
            "SourceCharacter urgently wanted to comfort himself, clamping his legs and rubbing his glans, but still struggled to get stimulation.",
        ItemPelvis淫纹_Luzi自慰Block13:
            "SourceCharacter desperately wanted to comfort himself, struggling with his arms to masturbate, but his arms were completely immobile.",
        ItemPelvis淫纹_Luzi自慰Block14:
            "SourceCharacter urgently wanted to comfort himself, and in vain, his arm groped towards his penis, but the joy that was so close at hand was so unattainable at this moment.",
        ItemMisc淫纹锁_LuziIntro: "Painted with complex words",
    },
};

const translations = {
    CN: "淫纹",
    EN: "Lewd Crest",
    RU: "Порнографический знак",
    UA: "Хтивий візерунок",
};
const translations2 = {
    CN: "魔法刻印",
    EN: "Lewd Crest lock",
    RU: "Порнографический знак",
    UA: "Замок хтивого візерунку",
};

export default function () {
    AssetManager.addAsset(itemTGroup, asset, extended, translations);
    AssetManager.addAsset("ItemMisc", asset2, extended2, translations2);
    AssetManager.addCustomDialog(dialog);
}
