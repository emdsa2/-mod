import AssetManager from "@mod-utils/AssetManager";
import ModManager from "@mod-utils/ModManager";

ModManager.hookFunction("ChatRoomMessage", 10, (args, next) => {
    const data = args[0];
    if (data.Content.includes("淫纹_Luzi")) {
        const activityNameDictEntry = data.Dictionary.find((x => "TargetCharacter" in x));
        if (activityNameDictEntry?.TargetCharacter === Player.MemberNumber) {
            if (data.Content === "ItemPelvis淫纹_Luzi淫纹强制高潮互动") {
                if (!!Player.ArousalSettings) Player.ArousalSettings.Progress = 100;
                ActivityOrgasmPrepare(Player);
            } else if (data.Content === "ItemPelvis淫纹_Luzi淫纹性刺激互动") {
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
        ExtendedItemCustomClick("淫纹性刺激", AssetsItemPelvis淫纹性刺激, false, false);
    } else if (MouseIn(1510, 675, 225, 55)) {
        ExtendedItemCustomClick("淫纹魔法电流", PropertyShockPublishAction, false, false);
    } else if (MouseIn(1510, 750, 225, 55)) {
        ExtendedItemCustomClick("淫纹强制高潮", AssetsItemPelvis淫纹强制高潮, false, false);
    }
}

function AssetsItemPelvis淫纹性刺激() {
    const C = CharacterGetCurrent();
    if (C.IsPlayer()) {
        ActivityEffect(Player, Player, "MasturbateFist", "ItemVulva", 0, null)
        DrawFlashScreen("#F347B4", 2000, 500);
    }
    ServerSend("ChatRoomChat", {
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
    ServerSend("ChatRoomChat", {
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

// @ts-ignore
function AssetsItemPelvis淫纹ScriptDrawHook(data, originalFunction, drawData) {
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
            AllowTypes: { typed: [1, 2, 3] },
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
        ItemPelvis淫纹_Luzi淫纹性刺激按钮: "淫纹性刺激",
        ItemPelvis淫纹_Luzi淫纹性刺激互动: "SourceCharacter令DestinationCharacter淫纹产生性刺激.",
        ItemPelvis淫纹_Luzi淫纹魔法电流按钮: "淫纹魔法电流",
        ItemPelvis淫纹_Luzi淫纹魔法电流互动: "SourceCharacter令DestinationCharacter淫纹产生淫纹魔法电流.",
        ItemPelvis淫纹_Luzi淫纹强制高潮按钮: "淫纹强制高潮",
        ItemPelvis淫纹_Luzi淫纹强制高潮互动: "SourceCharacter通过淫纹魔法令TargetCharacter强制高潮.",
        ItemPelvis淫纹_LuziSet持续发情: "SourceCharacter通过淫纹魔法令TargetCharacter的小穴保持湿润,持续处于发情状态.",
        ItemPelvis淫纹_LuziSet正常: "SourceCharacter通过魔法令TargetCharacter的淫纹恢复自然状态.",
        ItemPelvis淫纹_LuziSet寸止: "SourceCharacter通过淫纹魔法令TargetCharacter仅能够处于高潮边缘.",
        ItemPelvis淫纹_LuziSet拒绝: "SourceCharacter通过淫纹魔法令TargetCharacter仅能够拒绝高潮.",
    },
    EN: {
        ItemPelvis淫纹_LuziSelect: "Select Effect",
        ItemPelvis淫纹_Luzi正常: "Normal",
        ItemPelvis淫纹_Luzi持续发情: "Continuous Heat",
        ItemPelvis淫纹_Luzi寸止: "Edge",
        ItemPelvis淫纹_Luzi拒绝: "Reject",
        ItemPelvis淫纹_Luzi淫纹性刺激按钮: "Lust Pattern Sexual Stimulation",
        ItemPelvis淫纹_Luzi淫纹性刺激互动: "SourceCharacter causes DestinationCharacter's Lust Pattern to generate sexual stimulation.",
        ItemPelvis淫纹_Luzi淫纹魔法电流按钮: "Lust Pattern Electric Current",
        ItemPelvis淫纹_Luzi淫纹魔法电流互动: "SourceCharacter causes DestinationCharacter's Lust Pattern to generate an electric current.",
        ItemPelvis淫纹_Luzi淫纹强制高潮按钮: "Lust Pattern Forced Orgasm",
        ItemPelvis淫纹_Luzi淫纹强制高潮互动: "SourceCharacter uses the Lust Pattern magic to force TargetCharacter to orgasm.",
        ItemPelvis淫纹_LuziSet持续发情: "SourceCharacter uses the Lust Pattern magic to keep TargetCharacter's intimate area moist and in a continuous state of heat.",
        ItemPelvis淫纹_LuziSet正常: "SourceCharacter uses magic to restore TargetCharacter's Lust Pattern to its natural state.",
        ItemPelvis淫纹_LuziSet寸止: "SourceCharacter uses the Lust Pattern magic to keep TargetCharacter at the edge of orgasm.",
        ItemPelvis淫纹_LuziSet拒绝: "SourceCharacter uses the Lust Pattern magic to make TargetCharacter able to only reject orgasm."
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
