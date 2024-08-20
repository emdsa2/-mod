import AssetManager from "@mod-utils/AssetManager";
import ModManager from "@mod-utils/ModManager";

ModManager.hookFunction("ChatRoomMessage", 10, (args, next) => {
    const data = args[0];
    if(data.Content.includes("淫纹_Luzi")) {
        const activityNameDictEntry = data.Dictionary.find((x=>"TargetCharacter"in x));
        if( activityNameDictEntry?.TargetCharacter === Player.MemberNumber ){
            if (data.Content === "ItemPelvis淫纹_Luzi淫纹强制高潮互动") {
                if (!!Player.ArousalSettings) Player.ArousalSettings.Progress = 100;
                    ActivityOrgasmPrepare(Player);
            }else if (data.Content === "ItemPelvis淫纹_Luzi淫纹性刺激互动") {
                DrawFlashScreen("#FF7777", 2000, 500);
            }
        }
    }
    next(args);
});

function InventoryItemPelvis淫纹DrawHook(Data, OriginalFunction) {
	OriginalFunction();

	MainCanvas.textAlign = "center";
	ExtendedItemCustomDraw("ItemPelvis淫纹_Luzi淫纹性刺激按钮", 1510, 600);
	ExtendedItemCustomDraw("ItemPelvis淫纹_Luzi淫纹魔法电流按钮", 1510, 675);
    ExtendedItemCustomDraw("ItemPelvis淫纹_Luzi淫纹强制高潮按钮", 1510, 750);
}

function InventoryItemPelvis淫纹ClickHook(Data, OriginalFunction) {
	OriginalFunction();

	if (!DialogFocusItem) {
		return;
	} else if (MouseIn(1510, 600, 225, 55)) {
		ExtendedItemCustomClick("淫纹性刺激", AssetsItemPelvis淫纹性刺激, false, false );
	} else if (MouseIn(1510, 675, 225, 55)) {
		ExtendedItemCustomClick("淫纹魔法电流", PropertyShockPublishAction, false, false );
	} else if (MouseIn(1510, 750, 225, 55)) {
		ExtendedItemCustomClick("淫纹强制高潮", AssetsItemPelvis淫纹强制高潮, false, false );
	}
}

function AssetsItemPelvis淫纹性刺激() {
    const C = CharacterGetCurrent();
    if (C.IsPlayer()) {
        ActivityEffect(Player, Player,"MasturbateFist", "ItemVulva" , 0, null)
        DrawFlashScreen("#F347B4", 2000, 500);
    }
    ServerSend("ChatRoomChat",{
        "Content": "ItemPelvis淫纹_Luzi淫纹性刺激互动",
        "Type": "Action",
        "Dictionary": [
            {
                "SourceCharacter": Player.MemberNumber
            },
            {
                "TargetCharacter": C.MemberNumber
            },
            {
                "Tag": "FocusAssetGroup",
                "FocusGroupName": "ItemVulva"
            },
            {
                "ActivityName": "MasturbateFist"
            }
        ],
    });
	if (C != null) DialogLeave();
}

function AssetsItemPelvis淫纹强制高潮() {
    const C = CharacterGetCurrent();
    if (C.IsPlayer()) {
    }
    ServerSend("ChatRoomChat",{
        "Content": "ItemPelvis淫纹_Luzi淫纹强制高潮互动",
        "Type": "Action",
        "Dictionary": [
            {
                "SourceCharacter": Player.MemberNumber
            },
            {
                "TargetCharacter": C.MemberNumber
            },
        ],
    });
	if (C != null) DialogLeave();
}

function AssetsItemPelvis淫纹ScriptDrawHook(data, originalFunction, drawData) {
        if( drawData.C.IsPlayer() && drawData.Item.Property.TypeRecord.typed === 1 ){
            let drugLevelMultiplier = Player.LSCG.InjectorModule.drugLevelMultiplier;
            let hornyLevelMax = Player.LSCG.InjectorModule.hornyLevelMax;
            let newLevelActual = Player.LSCG.InjectorModule.hornyLevel + 0.05;
            Player.LSCG.InjectorModule.hornyLevel = Math.min(newLevelActual, hornyLevelMax * drugLevelMultiplier);
        }
}


/** @type { CustomAssetDefinition} */
const asset = {
    Name: "淫纹_Luzi",
    Random: false,
    Top: -110,
    Left: 0,
    Priority: 30,
    AllowLock: true,
    DrawLocks: false,
    Extended: true,
    Difficulty: 20,
    RemoveTime: 5,
    Time: 10,
	DynamicScriptDraw: true,
    DefaultColor: ["#EA3E74"],
    Layer: [
        {
            Name: "淫纹",
            ParentGroup: "ItemMisc",

        },
    ],
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
        ScriptDraw: AssetsItemPelvis淫纹ScriptDrawHook,
    },
};

const dialog = {
    CN: {
        ItemPelvis淫纹_LuziSelect: "选择效果",
        ItemPelvis淫纹_Luzi正常: "正常",
        ItemPelvis淫纹_Luzi持续发情: "持续发情",
        ItemPelvis淫纹_Luzi寸止: "寸止",
        ItemPelvis淫纹_Luzi拒绝: "拒绝",
        ItemPelvis淫纹_Luzi淫纹性刺激按钮:"淫纹性刺激",
        ItemPelvis淫纹_Luzi淫纹性刺激互动:"SourceCharacter令DestinationCharacter淫纹产生性刺激.",
        ItemPelvis淫纹_Luzi淫纹魔法电流按钮:"淫纹魔法电流",
        ItemPelvis淫纹_Luzi淫纹魔法电流互动:"SourceCharacter令DestinationCharacter淫纹产生淫纹魔法电流.",
        ItemPelvis淫纹_Luzi淫纹强制高潮按钮:"淫纹强制高潮",
        ItemPelvis淫纹_Luzi淫纹强制高潮互动:"SourceCharacter通过淫纹魔法令TargetCharacter强制高潮.",
        ItemPelvis淫纹_LuziSet持续发情:"SourceCharacter通过淫纹魔法令TargetCharacter的小穴保持湿润,持续处于发情状态.",
        ItemPelvis淫纹_LuziSet正常:"SourceCharacter通过魔法令TargetCharacter的淫纹恢复自然状态.",
        ItemPelvis淫纹_LuziSet寸止:"SourceCharacter通过淫纹魔法令TargetCharacter仅能够处于高潮边缘.",
        ItemPelvis淫纹_LuziSet拒绝:"SourceCharacter通过淫纹魔法令TargetCharacter仅能够拒绝高潮.",
    },
    EN: {
        ItemPelvis淫纹_LuziSelect: "选择效果",
        ItemPelvis淫纹_Luzi正常: "正常",
        ItemPelvis淫纹_Luzi持续发情: "持续发情",
        ItemPelvis淫纹_Luzi寸止: "寸止",
        ItemPelvis淫纹_Luzi拒绝: "拒绝",
        ItemPelvis淫纹_Luzi淫纹性刺激按钮:"淫纹性刺激",
        ItemPelvis淫纹_Luzi淫纹性刺激互动:"SourceCharacter令DestinationCharacter淫纹产生性刺激.",
        ItemPelvis淫纹_Luzi淫纹魔法电流按钮:"淫纹魔法电流",
        ItemPelvis淫纹_Luzi淫纹魔法电流互动:"SourceCharacter令DestinationCharacter淫纹产生淫纹魔法电流.",
        ItemPelvis淫纹_Luzi淫纹强制高潮按钮:"淫纹强制高潮",
        ItemPelvis淫纹_Luzi淫纹强制高潮互动:"SourceCharacter通过淫纹魔法令TargetCharacter强制高潮.",
        ItemPelvis淫纹_LuziSet持续发情:"SourceCharacter通过淫纹魔法令TargetCharacter的小穴保持湿润,持续处于发情状态.",
        ItemPelvis淫纹_LuziSet正常:"SourceCharacter通过魔法令TargetCharacter的淫纹恢复自然状态.",
        ItemPelvis淫纹_LuziSet寸止:"SourceCharacter通过淫纹魔法令TargetCharacter仅能够处于高潮边缘.",
        ItemPelvis淫纹_LuziSet拒绝:"SourceCharacter通过淫纹魔法令TargetCharacter仅能够拒绝高潮.",
    },
};

const translations = {
    CN: "淫纹",
    EN: "Lewd Crest",
};

export default function () {
    AssetManager.addAsset("ItemPelvis", asset, extended, translations);
    AssetManager.addCustomDialog(dialog);
}
