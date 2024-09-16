import AssetManager from "@mod-utils/AssetManager";
import ModManager from "@mod-utils/ModManager";

/** @type {CustomGroupName} */
const group = "ItemPelvis";

function AssetsItemPelvis随机自慰(){
    const Gender = Player.HasPenis()
    const Target = [ Gender ? "ItemPenis" : "ItemVulva" ,  Gender ? "ItemGlans" : "ItemVulvaPiercings" ]

    DrawFlashScreen("#F347B4", 1500, 500);
    if( Player.HasEffect("Block") ){
        ServerSend("ChatRoomChat", {
            "Content": "ItemPelvis淫纹_Luzi自慰Block" + (Gender?1:0) + Math.floor(Math.random() * 5),
            "Type": "Action",
            "Dictionary": [ { "SourceCharacter": Player.MemberNumber }, ],
        });
        return
    }
    if (Math.floor(Math.random() * 2)){
        ActivityEffect(Player, Player, "MasturbateHand", "ItemVulvaPiercings", 0, null)
        ServerSend("ChatRoomChat", {
            "Content": "ChatSelf-"+Target[0]+"-MasturbateHand",
            "Type": "Activity",
            "Dictionary": [
                { "SourceCharacter": Player.MemberNumber },
                { "TargetCharacter": Player.MemberNumber },
                { "Tag": "FocusAssetGroup", "FocusGroupName": "ItemVulvaPiercings" },
                { "ActivityName": "MasturbateHand" }
            ],
        });
    } else {
        ActivityEffect(Player, Player, "MasturbateHand", "ItemVulva", 0, null)
        ServerSend("ChatRoomChat", {
            "Content": "ChatSelf-"+Target[1]+"-MasturbateHand",
            "Type": "Activity",
            "Dictionary": [
                { "SourceCharacter": Player.MemberNumber },
                { "TargetCharacter": Player.MemberNumber },
                { "Tag": "FocusAssetGroup", "FocusGroupName": "ItemVulva" },
                { "ActivityName": "MasturbateHand" }
            ],
        });
    }
    
}

function AssetsItemPelvis淫纹开始自慰(){
    AssetsItemPelvis随机自慰()
    const a = setInterval(() => {
        // @ts-ignore
        if ( !Player.Appearance.find(asset => asset.Asset.Name === "淫纹_Luzi") || !Player.Appearance.find(asset => asset.Asset.Name === "淫纹_Luzi").Property.Masturbation) 
            return clearInterval(a)
        AssetsItemPelvis随机自慰()
    }, 20000);
}

ModManager.hookFunction("ChatRoomMessage", 10, (args, next) => {
    const data = args[0];
    if (data.Content.includes("淫纹_Luzi")) {
        const activityNameDictEntry = data.Dictionary.find((x => "TargetCharacter" in x));
        if (activityNameDictEntry?.TargetCharacter === Player.MemberNumber) {
            if (data.Content === "ItemPelvis淫纹_Luzi淫纹强制高潮互动") {
                if (!!Player.ArousalSettings) Player.ArousalSettings.Progress = 100;
                ActivityOrgasmPrepare(Player);
            } else if (data.Content === "ItemPelvis淫纹_Luzi淫纹性刺激互动") {
                DrawFlashScreen("#F347B4", 1500, 500);
            } else if (data.Content === "ItemPelvis淫纹_Luzi淫纹开始强制自慰互动") {
                AssetsItemPelvis淫纹开始自慰();
            }
        }
    }
    next(args);
});


// @ts-ignore
function InventoryItemPelvis淫纹DrawHook(Data, OriginalFunction) {
    OriginalFunction();
    MainCanvas.textAlign = "center";
    ExtendedItemCustomDraw("ItemPelvis淫纹_Luzi淫纹性刺激按钮", 1510, 600);
    ExtendedItemCustomDraw("ItemPelvis淫纹_Luzi淫纹魔法电流按钮", 1510, 675);
    // @ts-ignore
    if(DialogFocusItem.Property.Masturbation)
	    DrawText(AssetTextGet("ItemPelvis淫纹_LuziON"), 1810, 776, "White", "Gray");
    else
        DrawText(AssetTextGet("ItemPelvis淫纹_LuziOFF"), 1810, 776, "White", "Gray");
   // @ts-ignore
    if(DialogFocusItem.Property.Light)
	    DrawText(AssetTextGet("ItemPelvis淫纹_LuziON"), 1190, 626, "White", "Gray");
    else
        DrawText(AssetTextGet("ItemPelvis淫纹_LuziOFF"), 1190, 626, "White", "Gray");
    ExtendedItemCustomDraw("ItemPelvis淫纹_Luzi淫纹强制自慰按钮", 1510, 750);
    ExtendedItemCustomDraw("ItemPelvis淫纹_Luzi淫纹强制高潮按钮", 1510, 825);
    ExtendedItemCustomDraw("ItemPelvis淫纹_Luzi淫纹发光按钮", 1260, 600);
}

// @ts-ignore
function InventoryItemPelvis淫纹ClickHook(Data, OriginalFunction) {
    OriginalFunction();
    if (!DialogFocusItem) {
        return;
    } else if (MouseIn(1510, 600, 225, 55)) {
        ExtendedItemCustomClick("淫纹性刺激", AssetsItemPelvis淫纹性刺激, false, false);
    } else if (MouseIn(1510, 675, 225, 55)) {
        ExtendedItemCustomClick("淫纹魔法电流", PropertyShockPublishAction, false, false);
    } else if (MouseIn(1510, 750, 225, 55) ) {
        // @ts-ignore
        ExtendedItemCustomClickAndPush(CharacterGetCurrent(), DialogFocusItem, "Masturbation", () => DialogFocusItem.Property.Masturbation = !DialogFocusItem.Property.Masturbation, false, false);
		ExtendedItemCustomClick("淫纹强制自慰", AssetsItemPelvis淫纹强制自慰, false, false);
    } else if (MouseIn(1510, 825, 225, 55)) {
        ExtendedItemCustomClick("淫纹强制高潮", AssetsItemPelvis淫纹强制高潮, false, false);
    } else if (MouseIn(1260, 600, 225, 55)) {
        // @ts-ignore
        ExtendedItemCustomClick("淫纹发光",  () => DialogFocusItem.Property.Light = !DialogFocusItem.Property.Light, false, false);
    }
}

function AssetsItemPelvis淫纹性刺激() {
    const C = CharacterGetCurrent();
    if (C.IsPlayer()) {
        ActivityEffect(Player, Player, "MasturbateFist", "ItemVulva", 0, null)
    }
    ServerSend("ChatRoomChat", {
        "Content": "ItemPelvis淫纹_Luzi淫纹性刺激互动",
        "Type": "Action",
        "Dictionary": [
            { "SourceCharacter": Player.MemberNumber },
            { "TargetCharacter": C.MemberNumber },
            { "Tag": "FocusAssetGroup", "FocusGroupName": "ItemVulva" },
            { "ActivityName": "MasturbateFist"}
        ],
    });
    if (C != null) DialogLeave();
}

function AssetsItemPelvis淫纹强制自慰() {
    const C = CharacterGetCurrent();
    // @ts-ignore
    if ( DialogFocusItem.Property.Masturbation ) {
        ServerSend("ChatRoomChat", {
            "Content": "ItemPelvis淫纹_Luzi淫纹开始强制自慰互动",
            "Type": "Action",
            "Dictionary": [
                { "SourceCharacter": Player.MemberNumber },
                { "TargetCharacter": C.MemberNumber },
            ],
        });
    } else {
        ServerSend("ChatRoomChat", {
            "Content": "ItemPelvis淫纹_Luzi淫纹停止强制自慰互动",
            "Type": "Action",
            "Dictionary": [
                { "SourceCharacter": Player.MemberNumber },
                { "TargetCharacter": C.MemberNumber },
            ],
        });
    }
    if (C != null) DialogLeave();
}

function AssetsItemPelvis淫纹强制高潮() {
    const C = CharacterGetCurrent();
    ServerSend("ChatRoomChat", {
        "Content": "ItemPelvis淫纹_Luzi淫纹强制高潮互动",
        "Type": "Action",
        "Dictionary": [
            { "SourceCharacter": Player.MemberNumber },
            { "TargetCharacter": C.MemberNumber },
        ],
    });
    if (C != null) DialogLeave();
}


function scriptDraw( data, originalFunction, drawData ) {

    if (drawData.C.IsPlayer() && drawData.Item.Property.TypeRecord.typed === 1) {
        // 确保 Player 存在
        if (!Player) {
            return;
        }

        // 确保 LSCG 和 InjectorModule 存在
        // @ts-ignore
        if (!Player.LSCG || !Player.LSCG.InjectorModule) {
            return;
        }

        // @ts-ignore
        let drugLevelMultiplier = Player.LSCG.InjectorModule.drugLevelMultiplier;
        // @ts-ignore
        let hornyLevelMax = Player.LSCG.InjectorModule.hornyLevelMax;
        // @ts-ignore
        let newLevelActual = Player.LSCG.InjectorModule.hornyLevel + 0.05;
        // @ts-ignore
        Player.LSCG.InjectorModule.hornyLevel = Math.min(newLevelActual, hornyLevelMax * drugLevelMultiplier);
    }

    const Data = drawData.PersistentData();

    const qsetting = () =>
        Player.GraphicsSettings ? Math.max(30, Player.GraphicsSettings.AnimationQuality * 0.6) : 30;

    Data.FrameDelay = Data.FrameDelay ?? qsetting();
    Data.FrameTimer = Data.FrameTimer ?? CommonTime() + Data.FrameDelay;

    if (Data.FrameTimer < CommonTime()) {
        Data.FrameTimer = CommonTime() + qsetting();
        AnimationRequestRefreshRate(drawData.C, Data.FrameDelay);
        AnimationRequestDraw(drawData.C);
    }


}


function beforeDraw({ PersistentData, L, X, Y, Property }) {
    if (L === "发光") {
		const property = Property || {};
        // @ts-ignore
        if( property.Light ) {
            const Data = PersistentData();
            const TwinkleSpeed = 110 - Player.ArousalSettings.Progress || 50 ;
            Data.Frame = Data.Frame || 0;
            Data.Frame = (Data.Frame + 1) % TwinkleSpeed ;
		    return { Opacity:0.7 + 0.3 * Math.cos(Data.Frame * 1 / TwinkleSpeed * 2 * Math.PI) };
        } else
            return { Opacity: 0 };
	}
}


/** @type { CustomAssetDefinition} */
const asset = {
    Name: "淫纹_Luzi",
    Random: false,
    Top: -110,
    Left: 0,
    Priority: 10,
    AllowLock: true,
    DrawLocks: false,
    Extended: true,
    AlwaysExtend: true,
    Difficulty: 20,
    RemoveTime: 5,
    Time: 10,
    DynamicScriptDraw: true,
    DynamicBeforeDraw: true,
    DefaultColor: ["#EA3E74"],
    Layer: [
        {
            Name: "淫纹",
            ParentGroup: null,
        },
        {
            Name: "发光",
            Priority: 44,
            ParentGroup: null,
        },
    ],
};
/** @type { CustomAssetDefinition} */
const asset2 = {
    Name: "淫纹锁_Luzi",
    Value: -1,
    Random: false,
    Wear: false,
    Enable: false,
    Effect: [],
    IsLock: true,
    ExclusiveUnlock: true,
};

/** @type {AssetArchetypeConfig} */
const extended = {
    Archetype: ExtendedArchetype.TYPED,
    ChangeWhenLocked: false,
    DrawImages: false,
    Options: [
        { Name: "正常" }, // - Normal
        { Name: "持续发情" },
        { Name: "寸止", Property: { Effect: [E.DenialMode] } }, //  - Edge
        { Name: "拒绝", Property: { Effect: [E.DenialMode, E.RuinOrgasms] } }, // - Deny
    ],
    ScriptHooks:
    {
        Draw: InventoryItemPelvis淫纹DrawHook,
        Click: InventoryItemPelvis淫纹ClickHook,
        ScriptDraw: scriptDraw,
    },
    BaselineProperty: {
        // @ts-ignore
        Masturbation: false,
        Light: false,
        Opacity: 1,
    },
};
/** @type {AssetArchetypeConfig} */
const extended2 = {
    Archetype: ExtendedArchetype.NOARCH,
    CopyConfig: { GroupName: "ItemMisc", AssetName: "ExclusivePadlock" },
};

const dialog = {
    CN: {
        ItemPelvis淫纹_LuziSelect: "选择效果",
        ItemPelvis淫纹_Luzi正常: "正常",
        ItemPelvis淫纹_Luzi持续发情: "持续发情",
        ItemPelvis淫纹_Luzi寸止: "寸止",
        ItemPelvis淫纹_Luzi拒绝: "拒绝",
        ItemPelvis淫纹_Luzi淫纹性刺激按钮: "淫纹性刺激",
        ItemPelvis淫纹_Luzi淫纹性刺激互动: "SourceCharacter令DestinationCharacter淫纹产生性刺激.",
        ItemPelvis淫纹_Luzi淫纹强制自慰按钮: "淫纹强制自慰",
        ItemPelvis淫纹_Luzi淫纹开始强制自慰互动: "SourceCharacter通过淫纹魔法令TargetCharacter开始不停地自慰.",
        ItemPelvis淫纹_Luzi淫纹停止强制自慰互动: "SourceCharacter通过淫纹魔法解除了TargetCharacter的强制自慰.",
        ItemPelvis淫纹_Luzi淫纹魔法电流按钮: "淫纹魔法电流",
        ItemPelvis淫纹_Luzi淫纹魔法电流互动: "SourceCharacter令DestinationCharacter淫纹产生淫纹魔法电流.",
        ItemPelvis淫纹_Luzi淫纹强制高潮按钮: "淫纹强制高潮",
        ItemPelvis淫纹_Luzi淫纹强制高潮互动: "SourceCharacter通过淫纹魔法令TargetCharacter强制高潮.",
        ItemPelvis淫纹_LuziSet持续发情: "SourceCharacter通过淫纹魔法令TargetCharacter的小穴保持湿润,持续处于发情状态.",
        ItemPelvis淫纹_LuziSet正常: "SourceCharacter通过魔法令TargetCharacter的淫纹恢复自然状态.",
        ItemPelvis淫纹_LuziSet寸止: "SourceCharacter通过淫纹魔法令TargetCharacter仅能够处于高潮边缘.",
        ItemPelvis淫纹_LuziSet拒绝: "SourceCharacter通过淫纹魔法令TargetCharacter仅能够拒绝高潮.",
        ItemPelvis淫纹_Luzi淫纹发光按钮: "淫纹发光",
        ItemPelvis淫纹_LuziON: "已开启",
        ItemPelvis淫纹_LuziOFF: "已关闭",
        ItemPelvis淫纹_Luzi自慰Block00: "SourceCharacter急切的想要抚慰自己,颤抖着夹紧双腿,尽可能刺激自己的私处.",
        ItemPelvis淫纹_Luzi自慰Block01: "SourceCharacter急切的想要抚慰自己,扭动肩膀,尽可能让乳尖受到进一步刺激.",
        ItemPelvis淫纹_Luzi自慰Block02: "SourceCharacter急切的想要抚慰自己,夹紧双腿摩擦私处,但仍难以得到刺激.",
        ItemPelvis淫纹_Luzi自慰Block03: "SourceCharacter急切的想要抚慰自己,手臂挣扎着想要自慰,但她的手臂完全无法动弹.",
        ItemPelvis淫纹_Luzi自慰Block04: "SourceCharacter急切的想要抚慰自己,手臂徒劳地向着私处摸索尝试,近在咫尺的快乐此时却是如此遥不可及.",
        ItemPelvis淫纹_Luzi自慰Block10: "SourceCharacter急切的想要抚慰自己,颤抖着夹紧双腿,尽可能刺激自己的阴茎.",
        ItemPelvis淫纹_Luzi自慰Block11: "SourceCharacter急切的想要抚慰自己,扭动身体,尽可能磨蹭阴茎龟头.",
        ItemPelvis淫纹_Luzi自慰Block12: "SourceCharacter急切的想要抚慰自己,夹紧双腿摩擦龟头,但仍难以得到刺激.",
        ItemPelvis淫纹_Luzi自慰Block13: "SourceCharacter急切的想要抚慰自己,手臂挣扎着想要自慰,但他的手臂完全无法动弹.",
        ItemPelvis淫纹_Luzi自慰Block14: "SourceCharacter急切的想要抚慰自己,手臂徒劳地向着阴茎摸索尝试,近在咫尺的快乐此时却是如此遥不可及.",
    },
    EN: {
        ItemPelvis淫纹_LuziSelect: "Select Effect",
        ItemPelvis淫纹_Luzi正常: "Normal",
        ItemPelvis淫纹_Luzi持续发情: "Continuous Heat",
        ItemPelvis淫纹_Luzi寸止: "Edge",
        ItemPelvis淫纹_Luzi拒绝: "Deny",
        ItemPelvis淫纹_Luzi淫纹性刺激按钮: "Lust Pattern Sexual Stimulation",
        ItemPelvis淫纹_Luzi淫纹性刺激互动: "SourceCharacter causes DestinationCharacter's Lust Pattern to generate sexual stimulation.",
        ItemPelvis淫纹_Luzi淫纹强制自慰按钮: "Lust Pattern Forced Masturbation",
        ItemPelvis淫纹_Luzi淫纹开始强制自慰互动: "SourceCharacter uses lust pattern magic to make TargetCharacter start continuous masturbation.",
        ItemPelvis淫纹_Luzi淫纹停止强制自慰互动: "SourceCharacter uses lust pattern magic to stop the forced masturbation of TargetCharacter.",
        ItemPelvis淫纹_Luzi淫纹魔法电流按钮: "Lust Pattern Electric Current",
        ItemPelvis淫纹_Luzi淫纹魔法电流互动: "SourceCharacter causes DestinationCharacter's Lust Pattern to generate an electric current.",
        ItemPelvis淫纹_Luzi淫纹强制高潮按钮: "Lust Pattern Forced Orgasm",
        ItemPelvis淫纹_Luzi淫纹强制高潮互动: "SourceCharacter uses the Lust Pattern magic to force TargetCharacter to orgasm.",
        ItemPelvis淫纹_LuziSet持续发情: "SourceCharacter uses the Lust Pattern magic to keep TargetCharacter's intimate area moist and in a continuous state of heat.",
        ItemPelvis淫纹_LuziSet正常: "SourceCharacter uses magic to restore TargetCharacter's Lust Pattern to its natural state.",
        ItemPelvis淫纹_LuziSet寸止: "SourceCharacter uses the Lust Pattern magic to keep TargetCharacter at the edge of orgasm.",
        ItemPelvis淫纹_LuziSet拒绝: "SourceCharacter uses the Lust Pattern magic to make TargetCharacter able to only reject orgasm.",
        ItemPelvis淫纹_Luzi淫纹发光按钮: "LewdPattern Glowing",
        ItemPelvis淫纹_LuziON: "ON",
        ItemPelvis淫纹_LuziOFF: "OFF",
        ItemPelvis淫纹_Luzi自慰Block00: "SourceCharacter eagerly wants to pleasure themselves, trembling and squeezing their thighs together to stimulate their private areas as much as possible.",
        ItemPelvis淫纹_Luzi自慰Block01: "SourceCharacter eagerly wants to pleasure themselves, wriggling their shoulders to further stimulate their nipples.",
        ItemPelvis淫纹_Luzi自慰Block02: "SourceCharacter eagerly wants to pleasure themselves, squeezing their thighs together to rub their private areas but still finding it difficult to stimulate themselves.",
        ItemPelvis淫纹_Luzi自慰Block03: "SourceCharacter eagerly wants to pleasure themselves, struggling with their arms to masturbate, but their arms are completely immobilized.",
        ItemPelvis淫纹_Luzi自慰Block04: "SourceCharacter eagerly wants to pleasure themselves, their arms futilely reaching towards their private areas, the close proximity of pleasure now seeming so unreachable.",
        ItemPelvis淫纹_Luzi自慰Block10: "SourceCharacter was eager to soothe himself, trembling and gripping his legs, trying to stimulate his penis as much as possible.",
        ItemPelvis淫纹_Luzi自慰Block11: "SourceCharacter is eager to soothe himself, twisting his body and rubbing against the glans penis as much as possible.",
        ItemPelvis淫纹_Luzi自慰Block12: "SourceCharacter urgently wanted to comfort himself, clamping his legs and rubbing his glans, but still struggled to get stimulation.",
        ItemPelvis淫纹_Luzi自慰Block13: "SourceCharacter desperately wanted to comfort himself, struggling with his arms to masturbate, but his arms were completely immobile.",
        ItemPelvis淫纹_Luzi自慰Block14: "SourceCharacter urgently wanted to comfort himself, and in vain, his arm groped towards his penis, but the joy that was so close at hand was so unattainable at this moment.",
    },
};

const translations = {
    CN: "淫纹",
    EN: "Lewd Crest",
    RU: "Порнографический знак",
};
const translations2 = {
    CN: "淫纹锁",
    EN: "Lewd Crest lock",
    RU: "Порнографический знак",
};

export default function () {
    AssetManager.addAsset("ItemPelvis", asset, extended, translations);
    AssetManager.addAsset("ItemMisc", asset2, extended2, translations2);
    AssetManager.addCustomDialog(dialog);
    ModManager.globalFunction(`Assets${group}${asset.Name}BeforeDraw`, beforeDraw);
}
