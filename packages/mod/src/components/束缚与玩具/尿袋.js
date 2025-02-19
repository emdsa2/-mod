import AssetManager from "@mod-utils/AssetManager";
import { VersionSupport } from "@mod-utils/VersionSupport";
import { Tools } from "@mod-utils/Tools";

/**
 * @typedef { globalThis.ItemProperties & { Liquid: number; Auto: boolean } } ExtendItemProperties
 */

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "尿袋",
    Random: false,
    Top: 0,
    Left: 0,
    Priority: 30,
    ParentGroup: VersionSupport.NoParentGroup,
    PoseMapping: {
        LegsClosed: "LegsClosed",
        KneelingSpread: "KneelingSpread",
        Kneel: "LegsClosed",
        Spread: "BaseLower",
        Hogtied: "Hide",
        AllFours: "Hide",
    },
    Layer: [
        {
            Name: "尿",
            HasImage: false,
        },
        {
            Name: "袋",
        },
        {
            Name: "管",
        },
    ],
};

/** @type {Record<string, Rect>} */
const buttons = {
    ...Object.fromEntries(
        ["清空", "加一半", "加满"].map((key, idx) => {
            return /** @type {[string,Rect]}*/ ([
                key,
                { X: ExtendedXY[3][idx][0], Y: ExtendedXY[3][idx][1], W: 225, H: 55 },
            ]);
        })
    ),
    自动积累开关: { X: 1260, Y: 570, W: 64, H: 64 },
};

/**
 * @param {Rect} rect
 * @returns {boolean}
 */
export function RMouseIn(rect) {
    return MouseIn(rect.X, rect.Y, rect.W, rect.H);
}

/** @type { ExtendedItemScriptHookCallbacks.Draw<NoArchItemData> } */
function dialogDrawHook(Data, originalFunction) {
    originalFunction();
    const prevAlign = MainCanvas.textAlign;
    MainCanvas.textAlign = "center";

    DrawText(AssetTextGet("LuziCustomDialog_尿袋_设置"), 1500, 375, "#fff", "808080");

    const property = /** @type {ExtendItemProperties} */ (DialogFocusItem.Property);

    const Auto = property.Auto;

    ExtendedItemCustomDraw("LuziCustomDialog_尿袋_清空", buttons.清空.X, buttons.清空.Y, null, Auto);
    ExtendedItemCustomDraw("LuziCustomDialog_尿袋_加一半", buttons.加一半.X, buttons.加一半.Y, null, Auto);
    ExtendedItemCustomDraw("LuziCustomDialog_尿袋_加满", buttons.加满.X, buttons.加满.Y, null, Auto);

    MainCanvas.textAlign = "left";
    ExtendedItemDrawCheckbox("AutoSwitch", buttons.自动积累开关.X, buttons.自动积累开关.Y, Auto, {
        text: AssetTextGet("LuziCustomDialog_尿袋_自动积累按钮"),
        textColor: "White",
    });
    MainCanvas.textAlign = prevAlign;
}

/** @type {ExtendedItemScriptHookCallbacks.Click<NoArchItemData>} */
function dialogClickHook(Data, originalFunction) {
    originalFunction();
    if (!DialogFocusItem) return;

    const property = /** @type {ExtendItemProperties} */ (DialogFocusItem.Property);

    const clickPush = (key, func, leaveDialog) => {
        const C = CharacterGetCurrent();
        if (!C) return;
        ExtendedItemCustomClickAndPush(C, DialogFocusItem, key, () => func(), false, false);
        CharacterRefresh(C, false, false);
        if (CurrentScreen == "ChatRoom") {
            ChatRoomCharacterItemUpdate(C, DialogFocusItem.Asset.Group.Name);

            const Dictionary = new DictionaryBuilder()
                .sourceCharacter(Player)
                .targetCharacter(CharacterGetCurrent())
                .destinationCharacterName(CharacterGetCurrent())
                .asset(DialogFocusItem.Asset, "AssetName", DialogFocusItem.Craft && DialogFocusItem.Craft.Name)
                .build();
            ChatRoomPublishCustomAction(`CustomItemAction_${asset.Name}_${key}`, false, Dictionary);
        }
        if (leaveDialog) DialogLeave();
    };

    if (!property.Auto) {
        if (RMouseIn(buttons.清空)) {
            clickPush(
                "清空",
                () => {
                    property.Liquid = 0;
                },
                true
            );
        }

        if (RMouseIn(buttons.加一半)) {
            clickPush(
                "加一半",
                () => {
                    property.Liquid = 0.5;
                },
                true
            );
        }

        if (RMouseIn(buttons.加满)) {
            clickPush(
                "加满",
                () => {
                    property.Liquid = 1;
                },
                true
            );
        }
    }

    if (RMouseIn(buttons.自动积累开关)) {
        clickPush(
            `自动积累${property.Auto ? "Off" : "On"}`,
            () => {
                property.Auto = !property.Auto;
            },
            true
        );
    }
}

/** @type {ExtendedItemScriptHookCallbacks.AfterDraw<NoArchItemData>} */
function afterDraw(data, originalFunction, drawData) {
    const { C, A, X, Y, Pose, Property, drawCanvas, drawCanvasBlink, AlphaMasks, L, G } = drawData;
    if (L === "尿") {
        const canvas = AnimationGenerateTempCanvas(C, A, 500, 1000);

        const imgURL = Tools.getAssetURL(drawData);
        const maskURL = Tools.getAssetURL(drawData, "遮罩");

        const clampedLiquid = Math.max(0, Math.min(1, /** @type { ExtendItemProperties } */ (Property).Liquid ?? 0));

        const ctx = canvas.getContext("2d");
        DrawImageEx(imgURL, ctx, 0, (1 - clampedLiquid) * 72);
        DrawImageEx(maskURL, ctx, 0, 0, { BlendingMode: "destination-in" });
        drawCanvas(canvas, X, Y, AlphaMasks);
        drawCanvasBlink(canvas, X, Y, AlphaMasks);
    }
}

/** @type {ExtendedItemScriptHookCallbacks.ScriptDraw<NoArchItemData, {lastUpdate:number, FrameTimer:number}>} */
function scriptDraw(data, originalFunction, { C, Item, PersistentData }) {
    const mData = PersistentData();
    const now = CommonTime();
    if (mData.lastUpdate === undefined) {
        mData.lastUpdate = now;
    }
    if (mData.FrameTimer === undefined) {
        mData.FrameTimer = now;
    }

    const delta = now - mData.lastUpdate;

    if (C.IsPlayer()) {
        // update every 5 seconds
        if (delta > 5000) {
            const property = /** @type {ExtendItemProperties} */ (Item.Property);
            if (property.Auto) {
                // 10800 = 3 hours
                property.Liquid = Math.min(1, delta / 1000 / 10800.0 + property.Liquid);
                ChatRoomCharacterItemUpdate(C, Item.Asset.Group.Name);
            }
            mData.lastUpdate = now;
        }
    }

    Tools.drawUpdate(C, mData);
}

/** @type {NoArchItemConfig} */
const extended = {
    Archetype: ExtendedArchetype.NOARCH,
    DrawImages: false,
    BaselineProperty: /** @type {ExtendItemProperties} */ ({ Liquid: 0.1, Auto: false }),
    ScriptHooks: {
        Draw: dialogDrawHook,
        Click: dialogClickHook,
        AfterDraw: afterDraw,
        ScriptDraw: scriptDraw,
    },
};

const translations = {
    CN: "尿袋",
    EN: "Urine Bag",
    RU: "Мочеприемник",
    UA: "Сечовий мішок",
};

const dialog = {
    CN: {
        LuziCustomDialog_尿袋_设置: "尿袋设置",

        LuziCustomDialog_尿袋_清空: "清空",
        LuziCustomDialog_尿袋_加一半: "加一半",
        LuziCustomDialog_尿袋_加满: "加满",

        LuziCustomDialog_尿袋_自动积累按钮: "自动积累",

        CustomItemAction_尿袋_清空: "SourceCharacter清空了TargetCharacter的尿袋",
        CustomItemAction_尿袋_加一半: "SourceCharacter在TargetCharacter的尿袋加了一半液体",
        CustomItemAction_尿袋_加满: "SourceCharacter加满了TargetCharacter的尿袋",

        CustomItemAction_尿袋_自动积累On: "SourceCharacter打开了TargetCharacter的尿袋自动积累",
        CustomItemAction_尿袋_自动积累Off: "SourceCharacter关闭了TargetCharacter的尿袋自动积累",
    },

    EN: {
        LuziCustomDialog_尿袋_设置: "Urine Bag Settings",

        LuziCustomDialog_尿袋_清空: "Empty",
        LuziCustomDialog_尿袋_加一半: "Half",
        LuziCustomDialog_尿袋_加满: "Full",

        LuziCustomDialog_尿袋_自动积累按钮: "Auto Accumulation",

        CustomItemAction_尿袋_清空: "SourceCharacter emptied TargetCharacter's urine bag",
        CustomItemAction_尿袋_加一半: "SourceCharacter added half liquid to TargetCharacter's urine bag",
        CustomItemAction_尿袋_加满: "SourceCharacter filled TargetCharacter's urine bag",

        CustomItemAction_尿袋_自动积累On: "SourceCharacter turned on TargetCharacter's urine bag auto accumulation",
        CustomItemAction_尿袋_自动积累Off: "SourceCharacter turned off TargetCharacter's urine bag auto accumulation",
    },
};
export default function () {
    AssetManager.addAsset("ItemTorso", asset, extended, translations);
    AssetManager.addCustomDialog(dialog);
}
