import AssetManager from "../../assetManager";
import ModManager from "../../modManager";

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

/** @type {AssetDefinition.Item} */
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
    Time: 10,
    Value: 30,
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

/** @type {AssetArchetypeConfig} */
const extended = {
    Archetype: ExtendedArchetype.MODULAR,
    ChangeWhenLocked: false,
    Modules: [
        {
            Name: "触手状态",
            DrawImages: false,
            Key: "d",
            Options: [
                { Property: { Block: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"] } },
                {},
                {
                    HasSubscreen: true,
                    Prerequisite: ["AccessVulva", "VulvaEmpty"],
                    Property: {
                        Effect: [E.VulvaShaft],
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
            DrawImages: false,
            Key: "s",
            Options: [{}, {}],
        },
        {
            Name: "手套开关",
            DrawImages: false,
            Key: "h",
            Options: [
                {},
                {},
                {
                    Property: { Difficulty: 13, SetPose: ["BackElbowTouch"], Effect: ["Block"] },
                },
            ],
        },
        {
            Name: "嘴套开关",
            DrawImages: false,
            Key: "m",
            Options: [{}, {}],
        },
        {
            Name: "脚套开关",
            DrawImages: false,
            Key: "f",
            Options: [{}, {}],
        },
    ],
};

const descriptions = {
    CN: {
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
        ItemTorso2触手服_LuziSetd0: "TargetCharacterName的触手服下部的小口逐渐合上,粘连在一起.",
        ItemTorso2触手服_LuziSetd1: "TargetCharacterName的触手服下部裂开一个小口,露出阴部.",
        ItemTorso2触手服_LuziSetd2:
            "TargetCharacterName的触手服下部裂开一个小口,露出阴部,触手服下长出一只湿滑的触手插入了阴道.",
        ItemTorso2触手服_LuziSets0: "TargetCharacterName的触手服缓慢变化,露出胸部.",
        ItemTorso2触手服_LuziSets1: "TargetCharacterName的触手服缓慢变化,生长覆盖了胸部.",
        ItemTorso2触手服_LuziSeth0: "TargetCharacterName的触手服缓慢变化,露出手臂.",
        ItemTorso2触手服_LuziSeth1: "TargetCharacterName的触手服缓慢变化,生长覆盖了手部.",
        ItemTorso2触手服_LuziSeth2: "TargetCharacterName的触手服缓慢变化,强制将手臂束缚在身后.",
        ItemTorso2触手服_LuziSetf0: "TargetCharacterName的触手服缓慢变化,露出腿部.",
        ItemTorso2触手服_LuziSetf1: "TargetCharacterName的触手服缓慢变化,生长覆盖了脚部.",
        ItemTorso2触手服_LuziSetm0: "TargetCharacterName的触手服缓慢变化,露出嘴部.",
        ItemTorso2触手服_LuziSetm1: "TargetCharacterName的触手服缓慢变化,生长覆盖嘴部.",
    },
    EN: {
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
        ItemTorso2触手服_LuziSetd0:
            "The lower opening of TargetCharacterName's tentacle suit gradually closes and adheres together.",
        ItemTorso2触手服_LuziSetd1:
            "A small opening in the lower part of TargetCharacterName's tentacle suit splits to reveal the genital area.",
        ItemTorso2触手服_LuziSetd2:
            "A small opening in the lower part of TargetCharacterName's tentacle suit splits to reveal the genital area, and a slimy tentacle grows out from the suit and inserts into the vagina.",
        ItemTorso2触手服_LuziSets0: "The tentacle suit on TargetCharacterName slowly changes, revealing the chest.",
        ItemTorso2触手服_LuziSets1: "The tentacle suit on TargetCharacterName slowly changes, growing over the chest.",
        ItemTorso2触手服_LuziSeth0: "The tentacle suit on TargetCharacterName slowly changes, revealing the arms.",
        ItemTorso2触手服_LuziSeth1: "The tentacle suit on TargetCharacterName slowly changes, growing over the hands.",
        ItemTorso2触手服_LuziSeth2:
            "The tentacle suit on TargetCharacterName slowly changes, forcibly binding the arms behind the back.",
        ItemTorso2触手服_LuziSetf0: "The tentacle suit on TargetCharacterName slowly changes, revealing the legs.",
        ItemTorso2触手服_LuziSetf1: "The tentacle suit on TargetCharacterName slowly changes, growing over the feet.",
        ItemTorso2触手服_LuziSetm0: "The tentacle suit on TargetCharacterName slowly changes, revealing the mouth.",
        ItemTorso2触手服_LuziSetm1: "The tentacle suit on TargetCharacterName slowly changes, growing over the mouth.",
    },
};

export default function () {
    AssetManager.addAsset("ItemAddon", asset, extended, { descriptions });
    ModManager.globalFunction("AssetsItemTorso触手服_LuziBeforeDraw", beforeDraw);
    ModManager.globalFunction("AssetsItemTorso2触手服_LuziBeforeDraw", beforeDraw);
}
