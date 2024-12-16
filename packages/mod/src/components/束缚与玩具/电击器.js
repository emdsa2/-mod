import AssetManager from "@mod-utils/AssetManager";
import { Tools } from "@mod-utils/Tools";

/**
 * @typedef { { LastBlink:number, ShockTime:number, ShockOnOff: boolean, ShockIsRunning:boolean } } ShockDeviceData
 */

const shockInterval = 2000;
const shockRunNextTime = () => CommonTime() + (Math.random() * 5 + 5) * 60 * 1000;

/** @type {ExtendedItemScriptHookCallbacks.BeforeDraw<ExtendedItemData, ShockDeviceData>} */
function beforeDraw(data, originalFunction, { L, PersistentData }) {
    if (L === "闪光") {
        const Data = PersistentData();
        if (Data.ShockOnOff && Data.ShockIsRunning && CommonTime() < Data.LastBlink + 100) {
            return { Opacity: 1 };
        }
        return { Opacity: 0 };
    }
}

function setNextShockRunTime(C, Item) {
    if (!C.IsPlayer()) return;
    Item.Property.NextShockTime = shockRunNextTime();
    if (CurrentScreen == "ChatRoom") {
        ChatRoomCharacterItemUpdate(Player, Item.Asset.Group.Name);
    }
}

/** @type {ExtendedItemScriptHookCallbacks.ScriptDraw<ExtendedItemData, ShockDeviceData>} */
function scriptDraw(data, originalFunction, { C, PersistentData, Item }) {
    const shockL = Item.Property?.ShockLevel || 0;

    const Data = PersistentData();
    Data.LastBlink = Data.LastBlink ?? CommonTime();
    Data.ShockTime = Data.ShockTime ?? 0;
    Data.ShockIsRunning = Data.ShockIsRunning ?? false;

    if (shockL == 1 && !Data.ShockOnOff) {
        Data.ShockOnOff = true;
        setNextShockRunTime(C, Item);
    }

    if (Data.ShockOnOff) {
        const runBeginTime = Item.Property.NextShockTime;
        const runEndTime = Item.Property.NextShockTime + 60 * 1000;
        const now = CommonTime();
        Data.LastBlink = Math.floor((now - Data.LastBlink) / shockInterval) * shockInterval + Data.LastBlink;

        if (runBeginTime < now && now < runEndTime) {
            AnimationRequestRefreshRate(C, 100);
            AnimationRequestDraw(C);
        }

        if (C.IsPlayer()) {
            const chatRoomMsg = (Content) => {
                const Dictionary = new DictionaryBuilder()
                    .sourceCharacter(C)
                    .asset(Item.Asset, "AssetName", Item.Craft && Item.Craft.Name)
                    .build();
                ChatRoomMessage({
                    Content,
                    Type: "Action",
                    Sender: C.MemberNumber,
                    Dictionary,
                });
            };

            if (runBeginTime < now && now < runEndTime) {
                if (!Data.ShockIsRunning) {
                    Data.ShockIsRunning = true;
                    chatRoomMsg("电击器_Luzi开始间歇持续电击");
                }

                if (Data.ShockTime < Data.LastBlink) {
                    Data.ShockTime = Data.LastBlink + shockInterval;
                    PropertyShockPublishAction(C, Item, true);
                }
            } else if (now > runEndTime) {
                Data.ShockIsRunning = false;
                if (Item.Property.NextShockTime + 20 * 60 * 1000 > CommonTime()) {
                    chatRoomMsg("电击器_Luzi停止间歇持续电击");
                }
                setNextShockRunTime(C, Item);
            }
        }
    }
}

const 持续电击开关 = {
    X: 1185,
    Y: 675,
    W: 64,
    H: 64,
};

const 触发电击按钮 = {
    X: 1510,
    Y: 675,
    W: 225,
    H: 55,
};

/** @type {ExtendedItemScriptHookCallbacks.Draw<ExtendedItemData>} */
function dialogDraw(Data, originalFunction) {
    originalFunction();
    if (!DialogFocusItem) return;

    const shockL = DialogFocusItem.Property?.ShockLevel || 0;

    const prevAlign = MainCanvas.textAlign;
    MainCanvas.textAlign = "center";
    ExtendedItemCustomDraw("ItemLegs电击器_Luzi触发电击", 触发电击按钮.X, 触发电击按钮.Y);
    MainCanvas.textAlign = "left";
    ExtendedItemDrawCheckbox("GlowSwitch", 持续电击开关.X, 持续电击开关.Y, shockL > 0, {
        text: AssetTextGet("ItemLegs电击器_Luzi持续电击开关"),
        textColor: "White",
    });
    MainCanvas.textAlign = prevAlign;
}

/** @type {ExtendedItemScriptHookCallbacks.Click<ExtendedItemData>} */
function dialogClick(Data, originalFunction) {
    originalFunction();

    if (MouseIn(触发电击按钮.X, 触发电击按钮.Y, 触发电击按钮.W, 触发电击按钮.H)) {
        const targetItem = DialogFocusItem;
        targetItem.Property.ShowText = false;
        PropertyShockPublishAction(CharacterGetCurrent(), targetItem, false);
        targetItem.Property.ShowText = true;
    } else if (MouseIn(持续电击开关.X, 持续电击开关.Y, 持续电击开关.W, 持续电击开关.H)) {
        const property = DialogFocusItem.Property || {};

        ExtendedItemCustomClickAndPush(
            CharacterGetCurrent(),
            DialogFocusItem,
            "持续电击",
            () => {
                const shockL = property.ShockLevel || 0;
                property.ShockLevel = shockL > 0 ? 0 : 1;
            },
            false,
            false
        );

        const Dictionary = new DictionaryBuilder()
            .sourceCharacter(Player)
            .destinationCharacterName(CharacterGetCurrent())
            .asset(DialogFocusItem.Asset, "AssetName", DialogFocusItem.Craft && DialogFocusItem.Craft.Name)
            .build();

        ChatRoomPublishCustomAction(
            `${asset.Name}设置${property.ShockLevel ? "开始" : "停止"}间歇持续电击`,
            false,
            Dictionary
        );
    }
}

/** @type { CustomAssetDefinition } */
const asset = {
    Name: "电击器_Luzi",
    Random: false,
    Gender: "F",
    Left: {
        [PoseType.DEFAULT]: 0,
        KneelingSpread: 60,
    },
    Top: 0,
    Difficulty: 3,
    Priority: 14,
    Fetish: ["Masochism"],
    Extended: true,
    Effect: [],
    PoseMapping: {
        AllFours: "Hide",
        Hogtied: "Hide",
        Kneel: "Kneel",
        KneelingSpread: "KneelingSpread",
        Spread: "Spread",
        LegsClosed: "LegsClosed",
    },
    Layer: [
        {
            Name: "绑带",
        },
        {
            Name: "本体",
        },
        {
            Name: "电击肛塞",
            AllowTypes: [{ a: 1 }],
        },
        {
            Name: "阴部",
            AllowTypes: [{ p: 1 }],
        },
        {
            Name: "大腿内侧",
            AllowTypes: [{ u: 1 }],
        },
        {
            Name: "小腹",
            AllowTypes: [{ d: 1 }],
        },
        {
            Name: "闪光",
        },
    ],
};

/** @type {AssetArchetypeConfig} */
const extended = {
    Archetype: ExtendedArchetype.MODULAR,
    ScriptHooks: {
        BeforeDraw: beforeDraw,
        ScriptDraw: scriptDraw,
        Draw: dialogDraw,
        Click: dialogClick,
    },
    ChatTags: Tools.CommonChatTags(),
    Modules: [
        {
            Name: "电击肛塞",
            Key: "a",
            DrawImages: false,
            Options: [
                {},
                {
                    Prerequisite: ["ButtEmpty"],
                    Property: {
                        Block: ["ItemButt"],
                        Effect: [E.IsPlugged],
                    },
                },
            ],
        },
        {
            Name: "阴部",
            Key: "p",
            DrawImages: false,
            Options: [
                {},
                {
                    Prerequisite: ["VulvaEmpty"],
                    Property: {
                        Block: ["ItemVulva"],
                    },
                },
            ],
        },
        {
            Name: "大腿内侧",
            Key: "u",
            DrawImages: false,
            Options: [{}, {}],
        },
        {
            Name: "小腹",
            Key: "d",
            DrawImages: false,
            Options: [{}, {}],
        },
    ],
    BaselineProperty: {
        ShockLevel: 0,
        ShowText: false,
        NextShockTime: 0,
    },
};

/** @type {Translation.Dialog} */
const dialog = {
    CN: {
        ItemLegs电击器_LuziSelectBase: "选择配置",
        ItemLegs电击器_LuziSelect电击肛塞: "配置电击肛塞",
        ItemLegs电击器_LuziModule电击肛塞: "电击肛塞",
        ItemLegs电击器_LuziOptiona0: "无",
        ItemLegs电击器_LuziOptiona1: "有",
        ItemLegs电击器_LuziSeta0: "SourceCharacter在TargetCharacter身上使用了电击肛塞",
        ItemLegs电击器_LuziSeta1: "SourceCharacter从TargetCharacter身上移除了电击肛塞",

        ItemLegs电击器_LuziSelect阴部: "配置阴部",
        ItemLegs电击器_LuziModule阴部: "阴部",
        ItemLegs电击器_LuziOptionp0: "无",
        ItemLegs电击器_LuziOptionp1: "有",
        ItemLegs电击器_LuziSetp0: "SourceCharacter在TargetCharacter身上使用了阴部电击器",
        ItemLegs电击器_LuziSetp1: "SourceCharacter从TargetCharacter身上移除了阴部电击器",

        ItemLegs电击器_LuziSelect大腿内侧: "配置大腿内侧",
        ItemLegs电击器_LuziModule大腿内侧: "大腿内侧",
        ItemLegs电击器_LuziOptionu0: "无",
        ItemLegs电击器_LuziOptionu1: "有",
        ItemLegs电击器_LuziSetu0: "SourceCharacter在TargetCharacter身上使用了大腿内侧电击器",
        ItemLegs电击器_LuziSetu1: "SourceCharacter从TargetCharacter身上移除了大腿内侧电击器",

        ItemLegs电击器_LuziSelect小腹: "配置小腹",
        ItemLegs电击器_LuziModule小腹: "小腹",
        ItemLegs电击器_LuziOptiond0: "无",
        ItemLegs电击器_LuziOptiond1: "有",
        ItemLegs电击器_LuziSetd0: "SourceCharacter在TargetCharacter身上使用了小腹电击器",
        ItemLegs电击器_LuziSetd1: "SourceCharacter从TargetCharacter身上移除了小腹电击器",

        ItemLegs电击器_Luzi持续电击开关: "持续电击",

        电击器_Luzi设置开始间歇持续电击: "SourceCharacter让TargetCharacter身上的AssetName会间歇持续电击",
        电击器_Luzi设置停止间歇持续电击: "SourceCharacter让TargetCharacter身上的AssetName不再间歇持续电击",

        电击器_Luzi开始间歇持续电击: "SourceCharacter身上的AssetName突然开始电击！",
        电击器_Luzi停止间歇持续电击: "SourceCharacter身上的AssetName停止电击。",

        ItemLegs电击器_Luzi触发电击: "触发电击",
    },
};

const translations = {
    CN: "电击器",
};

export default function () {
    AssetManager.addAsset("ItemLegs", asset, extended, translations);
    AssetManager.addCustomDialog(dialog);
}
