import AssetManager from "@mod-utils/AssetManager";
import ModManager from "@mod-utils/ModManager";

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

    const pos = [
        { X: -40, Y: -105, textAlign: "left" },
        { X: 0, Y: -105, textAlign: "center" },
        { X: 40, Y: -105, textAlign: "right" },
        { X: -38, Y: 0, textAlign: "left" },
        { X: 0, Y: 0, textAlign: "center" },
        { X: 38, Y: 0, textAlign: "right" },
        { X: -60, Y: 105, textAlign: "left" },
        { X: 0, Y: 105, textAlign: "center" },
        { X: 60, Y: 105, textAlign: "right" },
    ];

    TextItem.Init(data, C, CA, false, false);

    const ctx = TempCanvas.getContext("2d");

    pos.forEach((p, index) => {
        const center = { X: p.X + Width / 2, Y: p.Y + Height / 2 };
        DynamicDrawText(CA.Property[`Text${index * 3 + 1}`] || "", ctx, center.X, center.Y - 10, drawOptions);
        DynamicDrawText(CA.Property[`Text${index * 3 + 2}`] || "", ctx, center.X, center.Y, drawOptions);
        DynamicDrawText(CA.Property[`Text${index * 3 + 3}`] || "", ctx, center.X, center.Y + 10, drawOptions);
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
    Modules: ["a", "b", "c", "d", "e", "f", "g", "h", "i"].map((name, index) => ({
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
        elementData: [
            { position: ExtendedXYWithoutImages[9][0] },
            { position: ExtendedXYWithoutImages[9][1] },
            { position: ExtendedXYWithoutImages[9][2] },
            { position: ExtendedXYWithoutImages[9][3] },
            { position: ExtendedXYWithoutImages[9][4] },
            { position: ExtendedXYWithoutImages[9][5] },
            { position: ExtendedXYWithoutImages[9][6] },
            { position: ExtendedXYWithoutImages[9][7] },
            { position: ExtendedXYWithoutImages[9][8] },
        ],
        itemsPerPage: 9,
    },
    BaselineProperty: /** @type {PropertiesNoArray.Item}*/ ({
        Text1: "",
        Text2: "",
        Text3: "",
        Text4: "",
        Text5: "",
        Text6: "",
        Text7: "",
        Text8: "",
        Text9: "",
        Text10: "",
        Text11: "",
        Text12: "",
        Text13: "",
        Text14: "",
        Text15: "",
        Text16: "",
        Text17: "",
        Text18: "",
        Text19: "",
        Text20: "",
        Text21: "",
        Text22: "",
        Text23: "",
        Text24: "",
        Text25: "",
        Text26: "",
        Text27: "",
    }),
};

/** @type {Translation.Dialog} */
const dialogs = {
    CN: {
        BodyMarkings2_Luzi身体论文_LuziSelectBase: "选择文本位置",
        BodyMarkings2_Luzi身体论文_LuziModuleText0: "右侧锁骨",
        BodyMarkings2_Luzi身体论文_LuziModuleText1: "中间锁骨",
        BodyMarkings2_Luzi身体论文_LuziModuleText2: "左侧锁骨",
        BodyMarkings2_Luzi身体论文_LuziModuleText3: "右侧肋",
        BodyMarkings2_Luzi身体论文_LuziModuleText4: "中间肋",
        BodyMarkings2_Luzi身体论文_LuziModuleText5: "左侧肋",
        BodyMarkings2_Luzi身体论文_LuziModuleText6: "右侧髋",
        BodyMarkings2_Luzi身体论文_LuziModuleText7: "中间髋",
        BodyMarkings2_Luzi身体论文_LuziModuleText8: "左侧髋",
        ...["a", "b", "c", "d", "e", "f", "g", "h", "i"].reduce((pv, name, index) => {
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
        BodyMarkings2_Luzi身体论文_LuziModuleText3: "Ribs Right",
        BodyMarkings2_Luzi身体论文_LuziModuleText4: "Ribs Center",
        BodyMarkings2_Luzi身体论文_LuziModuleText5: "Ribs Left",
        BodyMarkings2_Luzi身体论文_LuziModuleText6: "Hips Right",
        BodyMarkings2_Luzi身体论文_LuziModuleText7: "Hips Center",
        BodyMarkings2_Luzi身体论文_LuziModuleText8: "Hips Left",
        ...["a", "b", "c", "d", "e", "f", "g", "h", "i"].reduce((pv, name, index) => {
            pv[`BodyMarkings2_Luzi身体论文_LuziSelectText${index}`] = "Set Text";
            pv[`BodyMarkings2_Luzi身体论文_LuziOption${name}0`] = "No";
            pv[`BodyMarkings2_Luzi身体论文_LuziOption${name}1`] = "Yes";
            return pv;
        }, {}),
    },
};

const translations = { CN: "身体论文", EN: "Body document", UA: "Документ на тіло" };

export default function () {
    ModManager.globalFunction(`AssetsBodyMarkings2_Luzi身体论文_LuziAfterDraw`, afterDrawHook);
    AssetManager.addAsset("BodyMarkings2_Luzi", asset, extended, translations);
    AssetManager.addImageMapping({
        "Assets/Female3DCG/BodyMarkings/Preview/身体论文_Luzi.png":
            "Assets/Female3DCG/BodyMarkings/Preview/BodyWritings.png",
    });
    AssetManager.addCustomDialog(dialogs);
}
