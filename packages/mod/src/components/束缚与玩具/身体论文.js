import AssetManager from "@mod-utils/AssetManager";
import ModManager from "@mod-utils/ModManager";

/** @type { {X:number,Y:number, textAlign: CanvasTextAlign}[]} */
const Positions = [
    { X: -60, Y: -105, textAlign: "left" },
    { X: 0, Y: -105, textAlign: "center" },
    { X: 60, Y: -105, textAlign: "right" },
    { X: -55, Y: -50, textAlign: "left" },
    { X: 0, Y: -50, textAlign: "center" },
    { X: 55, Y: -50, textAlign: "right" },
    { X: -48, Y: 0, textAlign: "left" },
    { X: 0, Y: 0, textAlign: "center" },
    { X: 48, Y: 0, textAlign: "right" },
    { X: -60, Y: 50, textAlign: "left" },
    { X: 0, Y: 50, textAlign: "center" },
    { X: 60, Y: 50, textAlign: "right" },
    { X: -70, Y: 105, textAlign: "left" },
    { X: 0, Y: 105, textAlign: "center" },
    { X: 70, Y: 105, textAlign: "right" },
];

const Options = Array.from(Positions, (_, i) => i).map((i) => String.fromCharCode(97 + i));

/**
 * 用于在绘制角色后执行自定义绘制逻辑的钩子函数
 * @param {Object} data - 绘制所需的数据对象
 * @param {Function} originalFunction - 原始的绘制函数
 * @param {Object} modData - MOD特定的数据对象，包含各种绘制相关的属性和函数
 */
function afterDrawHook(data, originalFunction, { C, A, CA, X, Y, drawCanvas, drawCanvasBlink, AlphaMasks, L, Color }) {
    if (L !== "Text") return;

    // 设置临时画布
    const Height = 500;
    const Width = 500;
    const TempCanvas = AnimationGenerateTempCanvas(C, A, Width, Height);

    /** @type {DynamicDrawOptions} */
    const drawOptions = {
        fontSize: 10,
        fontFamily: data.font,
        color: Color,
        width: Width,
    };

    TextItem.Init(data, C, CA, false, false);

    const ctx = TempCanvas.getContext("2d");

    Positions.forEach((p, index) => {
        const center = { X: p.X + Width / 2, Y: p.Y + Height / 2 };
        const option = {
            ...drawOptions,
            textAlign: p.textAlign,
        };
        DynamicDrawText(CA.Property[`Text${index * 3 + 1}`] || "", ctx, center.X, center.Y - 10, option);
        DynamicDrawText(CA.Property[`Text${index * 3 + 2}`] || "", ctx, center.X, center.Y, option);
        DynamicDrawText(CA.Property[`Text${index * 3 + 3}`] || "", ctx, center.X, center.Y + 10, option);
    });

    drawCanvas(TempCanvas, X, Y, AlphaMasks);
    drawCanvasBlink(TempCanvas, X, Y, AlphaMasks);
}

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "身体论文_Luzi",
    Priority: 13,
    Value: -1,
    DynamicGroupName: "BodyMarkings",
    PoseMapping: {
        BackBoxTie: PoseType.DEFAULT,
        BackCuffs: PoseType.DEFAULT,
        BackElbowTouch: PoseType.DEFAULT,
        OverTheHead: PoseType.DEFAULT,
        TapedHands: PoseType.DEFAULT,
        Yoked: PoseType.DEFAULT,
        AllFours: PoseType.HIDE,
        Hogtied: PoseType.HIDE,
    },
    Extended: true,
    DynamicAfterDraw: true,
    DefaultColor: ["#000000"],
    Layer: [
        {
            Name: "Text",
            Left: 0,
            Top: 120,
            HasImage: false,
        },
    ],
};

/** @type {ModularItemConfig} */
const extended = {
    Archetype: ExtendedArchetype.MODULAR,
    ChatSetting: ModularItemChatSetting.PER_MODULE,
    DrawImages: false,
    Modules: Options.map((name, index) => ({
        Name: `Text${index}`,
        Key: name,
        Options: [
            {},
            {
                HasSubscreen: true,
                ArchetypeConfig: {
                    Archetype: ExtendedArchetype.TEXT,
                    MaxLength: {
                        [`Text${index * 3 + 1}`]: 20,
                        [`Text${index * 3 + 2}`]: 20,
                        [`Text${index * 3 + 3}`]: 20,
                    },
                    Font: "Ananda Black",
                    ScriptHooks: {
                        AfterDraw: afterDrawHook,
                    },
                },
            },
        ],
    })),

    DrawData: {
        elementData: Options.map((_, idx) => ({
            position: [1135 + 250 * (idx % 3), 450 + 75 * Math.floor(idx / 3)],
        })),
        itemsPerPage: 15,
    },
    BaselineProperty: /** @type {PropertiesNoArray.Item}*/ (
        Object.fromEntries(Options.map((_, index) => [`Text${index * 3 + 1}`, ""]))
    ),
};

/** @type {Translation.Dialog} */
const dialogs = {
    CN: {
        BodyMarkings2_Luzi身体论文_LuziSelectBase: "选择文本位置",
        BodyMarkings2_Luzi身体论文_LuziModuleText0: "右侧锁骨",
        BodyMarkings2_Luzi身体论文_LuziModuleText1: "中间锁骨",
        BodyMarkings2_Luzi身体论文_LuziModuleText2: "左侧锁骨",
        BodyMarkings2_Luzi身体论文_LuziModuleText3: "右胸口",
        BodyMarkings2_Luzi身体论文_LuziModuleText4: "中间胸口",
        BodyMarkings2_Luzi身体论文_LuziModuleText5: "左侧胸口",
        BodyMarkings2_Luzi身体论文_LuziModuleText6: "右侧肋",
        BodyMarkings2_Luzi身体论文_LuziModuleText7: "中间肋",
        BodyMarkings2_Luzi身体论文_LuziModuleText8: "左侧肋",
        BodyMarkings2_Luzi身体论文_LuziModuleText9: "右侧腰",
        BodyMarkings2_Luzi身体论文_LuziModuleText10: "中间腰",
        BodyMarkings2_Luzi身体论文_LuziModuleText11: "左侧腰",
        BodyMarkings2_Luzi身体论文_LuziModuleText12: "右侧髋",
        BodyMarkings2_Luzi身体论文_LuziModuleText13: "中间髋",
        BodyMarkings2_Luzi身体论文_LuziModuleText14: "左侧髋",
        ...Options.reduce((pv, name, index) => {
            pv[`BodyMarkings2_Luzi身体论文_LuziSelectText${index}`] = "设置文本";
            pv[`BodyMarkings2_Luzi身体论文_LuziOption${name}0`] = "无";
            pv[`BodyMarkings2_Luzi身体论文_LuziOption${name}1`] = "有";
            return pv;
        }, {}),
    },
    EN: {
        BodyMarkings2_Luzi身体论文_LuziSelectBase: "Select Text Position",
        BodyMarkings2_Luzi身体论文_LuziModuleText0: "Collarbone Right",
        BodyMarkings2_Luzi身体论文_LuziModuleText1: "Collarbone Center",
        BodyMarkings2_Luzi身体论文_LuziModuleText2: "Collarbone Left",
        BodyMarkings2_Luzi身体论文_LuziModuleText3: "Chest Right",
        BodyMarkings2_Luzi身体论文_LuziModuleText4: "Chest Center",
        BodyMarkings2_Luzi身体论文_LuziModuleText5: "Chest Left",
        BodyMarkings2_Luzi身体论文_LuziModuleText6: "Ribs Right",
        BodyMarkings2_Luzi身体论文_LuziModuleText7: "Ribs Center",
        BodyMarkings2_Luzi身体论文_LuziModuleText8: "Ribs Left",
        BodyMarkings2_Luzi身体论文_LuziModuleText9: "Waist Right",
        BodyMarkings2_Luzi身体论文_LuziModuleText10: "Waist Center",
        BodyMarkings2_Luzi身体论文_LuziModuleText11: "Waist Left",
        BodyMarkings2_Luzi身体论文_LuziModuleText12: "Hips Right",
        BodyMarkings2_Luzi身体论文_LuziModuleText13: "Hips Center",
        BodyMarkings2_Luzi身体论文_LuziModuleText14: "Hips Left",
        ...Options.reduce((pv, name, index) => {
            pv[`BodyMarkings2_Luzi身体论文_LuziSelectText${index}`] = "Set Text";
            pv[`BodyMarkings2_Luzi身体论文_LuziOption${name}0`] = "No";
            pv[`BodyMarkings2_Luzi身体论文_LuziOption${name}1`] = "Yes";
            return pv;
        }, {}),
    },
};

const translations = { CN: "身体论文", EN: "Body Treatise", UA: "Трактат про тіло" };

export default function () {
    // ModManager.globalFunction(`AssetsBodyMarkings2_Luzi身体论文_LuziAfterDraw`, afterDrawHook);
    AssetManager.addAsset("BodyMarkings2_Luzi", asset, extended, translations);
    AssetManager.addImageMapping({
        "Assets/Female3DCG/BodyMarkings/Preview/身体论文_Luzi.png":
            "Assets/Female3DCG/BodyMarkings/Preview/BodyWritings.png",
    });
    AssetManager.addCustomDialog(dialogs);
}
