import AssetManager from "@mod-utils/AssetManager";
import { Tools } from "@mod-utils/Tools";
import ModManager from "@mod-utils/ModManager";
import { VersionSupport } from "@mod-utils/VersionSupport";

/** @type {CustomGroupName} */
const group = "ItemHandheld";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "钻头_Luzi",
    Random: false,
    Top: 110,
    Left: 10,
    Priority: 34,
    Difficulty: -10,
    ParentGroup: VersionSupport.NoParentGroup,
    IsRestraint: false,
    PoseMapping: {
        ...AssetPoseMapping.ItemHandheld,
    },
    DefaultColor: ["#888888"],
    DynamicBeforeDraw: true,
    DynamicScriptDraw: true,
    Layer: [
        {
            Priority: 26,
            Name: "Base",
        },
    ],
};

/** @type {TypedItemConfig} */
const extended = {
    Archetype: ExtendedArchetype.TYPED,
    DrawImages: false,
    Options: [
        {
            Name: "不转",
        },
        {
            Name: "转转转",
        },
    ],
};

/**
 * @typedef { { Frame?:number, FrameTimer?:number, FrameDelay?:number, Draws: boolean } } MyDataType
 */

// 只有10张图片
const MaxFrame = 10;

const FrameDef = Array.from({ length: MaxFrame }, (_, i) => i);

/** @type {ExtendedItemCallbacks.BeforeDraw<MyDataType>} */
function beforeDraw({ PersistentData, L, LayerType }) {
    const Data = PersistentData();
    Data.Frame = Data.Frame || 0;
    Data.FrameTimer = Data.FrameTimer || 0;

    Data.Frame = Data.Draws ? (Data.Frame + 1) % MaxFrame : 0;
    return { LayerType: FrameDef[Data.Frame].toString() };
}

/** @type {ExtendedItemCallbacks.ScriptDraw<MyDataType>} */
function scriptDraw({ C, Item, PersistentData }) {
    const typeRecord = (Item.Property && Item.Property.TypeRecord) || {};
    const subType = typeRecord.typed || 0;
    const Data = PersistentData();
    Data.Draws = subType === 1;

    Tools.drawUpdate(C, Data);
}

const dialogs = {
    CN: {
        ItemHandheld钻头_LuziSelect: "转不转",
        ItemHandheld钻头_Luzi不转: "不转",
        ItemHandheld钻头_LuziSet不转: "不转",
        ItemHandheld钻头_Luzi转转转: "转转转",
        ItemHandheld钻头_LuziSet转转转: "转转转",
    },
    EN: {
        ItemHandheld钻头_LuziSelect: "Spin or Not",
        ItemHandheld钻头_Luzi不转: "Don't Spin",
        ItemHandheld钻头_LuziSet不转: "Don't Spin",
        ItemHandheld钻头_Luzi转转转: "Spinnnnnn",
        ItemHandheld钻头_LuziSet转转转: "Spinnnnnn",
    },
    UA: {
        ItemHandheld钻头_LuziSelect: "Ввімкнути або ні",
        ItemHandheld钻头_Luzi不转: "Не вмикати",
        ItemHandheld钻头_LuziSet不转: "Не вмикати",
        ItemHandheld钻头_Luzi转转转: "ВЖЖЖЖЖЖЖЖ",
        ItemHandheld钻头_LuziSet转转转: "ВЖЖЖЖЖЖЖЖ",
    },
};

export default function () {
    ModManager.globalFunction(`Assets${group}${asset.Name}BeforeDraw`, beforeDraw);
    ModManager.globalFunction(`Assets${group}${asset.Name}ScriptDraw`, scriptDraw);

    AssetManager.addAsset(group, asset, extended, { CN: "钻头", UA: "Дриль", EN: "Drill" });
    AssetManager.addCustomDialog(dialogs);
}
