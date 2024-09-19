import AssetManager from "@mod-utils/AssetManager";
import ModManager from "@mod-utils/ModManager";
//TODO 身体论文草稿 （整个身体从上到下书写文字
/**
 * 用于在绘制角色后执行自定义绘制逻辑的钩子函数
 * @param {Object} data - 绘制所需的数据对象
 * @param {Function} originalFunction - 原始的绘制函数
 * @param {Object} modData - MOD特定的数据对象，包含各种绘制相关的属性和函数
 */
function afterDrawHook(data, originalFunction, { C, A, CA, X, Y, drawCanvas, drawCanvasBlink, AlphaMasks, L, Color }) {
    if (L !== "Text") return;

    // 设置临时画布
    const Height = 65;
    const Width = 200;
    const TempCanvas = AnimationGenerateTempCanvas(C, A, Width, Height);

    /** @type {DynamicDrawOptions} */
    const drawOptions = {
        fontSize: 10,
        fontFamily: data.font,
        color: Color,
        width: Width,
    };

    // 根据文本位置调整绘制参数
    switch (CA.Property.TypeRecord.p) {
        case 0: // Collar L
            X -= 50;
            Y -= 105;
            drawOptions.textAlign = "left";
            break;
        case 1: // Collar C
            Y -= 105;
            drawOptions.textAlign = "center";
            break;
        case 2: // Collar R
            X += 50;
            Y -= 105;
            drawOptions.textAlign = "right";
            break;
        case 3: // Ribs L
            X -= 48;
            drawOptions.textAlign = "left";
            break;
        case 4: // Ribs C
            drawOptions.textAlign = "center";
            break;
        case 5: // Ribs R
            X += 48;
            drawOptions.textAlign = "right";
            break;
        case 6: // Hips L
            X -= 70;
            Y += 105;
            drawOptions.textAlign = "left";
            break;
        case 7: // Hips C
            Y += 105;
            drawOptions.textAlign = "center";
            break;
        case 8: // Hips R
            X += 70;
            Y += 105;
            drawOptions.textAlign = "right";
            break;
        default:
            return;
    }

    // 根据角色属性调整Y坐标
    if (CA.Property.TypeRecord.p >= 3 && CA.Property.TypeRecord.p <= 5 && C.HasAttribute("UpperLarge")) {
        Y += 17;
    }

    // 初始化文本项
    TextItem.Init(data, C, CA, false, false);
    const [text1, text2, text3] = [CA.Property.Text, CA.Property.Text2, CA.Property.Text3];

    // 在临时画布上绘制文本
    const ctx = TempCanvas.getContext("2d");
    DynamicDrawText(text1, ctx, Width / 2, Height / 2 - 10, drawOptions);
    DynamicDrawText(text2, ctx, Width / 2, Height / 2, drawOptions);
    DynamicDrawText(text3, ctx, Width / 2, Height / 2 + 10, drawOptions);

    // 将临时画布的内容根据角色位置绘制到最终画布上
    drawCanvas(TempCanvas, X + Width / 2, Y + Height / 2, AlphaMasks);
    drawCanvasBlink(TempCanvas, X + Width / 2, Y + Height / 2, AlphaMasks);
}

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "身体论文_Luzi",
    Priority: 9,
    Value: -1,
    BuyGroup: "BodyWritings",
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
            Left: 50,
            Top: 305,
            HasImage: false,
            AllowTypes: { t: 1 },
        },
    ],
};

/** @type {ModularItemConfig} */
const extended = {
    Archetype: ExtendedArchetype.MODULAR,
    ChatSetting: ModularItemChatSetting.PER_MODULE,
    DrawImages: false,
    Modules: [
        {
            Name: "Position",
            Key: "p",
            Options: [
                {},
                {},
                {}, // Collar 0-L 1-C 2-R
                {},
                {},
                {}, // Ribs   3-L 4-C 5-R
                {},
                {},
                {}, // Hips   6-L 7-C 8-R
            ],
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
        },
        {
            Name: "Text",
            Key: "t",
            Options: [
                {}, // 0-N
                {
                    HasSubscreen: true,
                    ArchetypeConfig: {
                        Archetype: ExtendedArchetype.TEXT,
                        MaxLength: { Text: 20, Text2: 20, Text3: 20 },
                        Font: "Ananda Black",
                        ScriptHooks: {
                            AfterDraw: afterDrawHook,
                        },
                    },
                }, // 1-Y
            ],
        },
    ],
    BaselineProperty: { Text: "", Text2: "", Text3: "" },
};

/** @type {Translation.Dialog} */
const dialogs = {
    CN: {
        Markings2_Luzi身体论文_LuziModuleText: "文本",
        Markings2_Luzi身体论文_LuziOption: "姿势",
    },
    EN: {
        Markings2_Luzi身体论文_LuziModuleText: "Select text",
        Markings2_Luzi身体论文_LuziOption: "Select pose",
    },
    UA: {
        Markings2_Luzi身体论文_LuziModuleText: "Виберіть текст",
        Markings2_Luzi身体论文_LuziOption: "Виберіть позу",
    },
};

const translations = { CN: "身体论文", EN: "Body document", UA: "Документ на тіло" };

// export default function () {
//     ModManager.globalFunction(`AssetsBodyMarkings2_Luzi身体论文_LuziAfterDraw`, afterDrawHook);
//     AssetManager.addAsset("BodyMarkings2_Luzi", asset, extended, translations);
//     AssetManager.addCustomDialog(dialogs);
// }
