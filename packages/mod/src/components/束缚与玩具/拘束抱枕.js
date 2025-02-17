import AssetManager from "@mod-utils/AssetManager";
import { VersionSupport } from "@mod-utils/VersionSupport";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "拘束抱枕",
    Random: false,
    Gender: "F",
    Top: 0,
    Left: 0,
    Difficulty: 1,
    Time: 3,
    RemoveTime: 1,
    AllowLock: true,
    AllowTighten: true,
    DrawLocks: false,
    Extended: true,
    Prerequisite: [],
    ParentGroup: VersionSupport.NoParentGroup,
    PoseMapping: { BaseUpper: "BaseUpper" },
    Block: [],
    Layer: [
        {
            Name: "抱枕",
            Priority: 46,
        },
        {
            Name: "绑带",
            Priority: 46,
            AllowTypes: { s: 1 },
        },
    ],
};
/** @type {ModularItemConfig} */
const extended = {
    Archetype: ExtendedArchetype.MODULAR,
    ChangeWhenLocked: false,
    Modules: [
        {
            Name: "绑带",          
            Key: "s",
            DrawImages: false,
            Options: [      
                {},         
                {                  
                    Property: {
                         Block: ["ItemHands", "ItemHandheld"],
                         Effect: [E.Block, E.BlockWardrobe],
                         SetPose: ["BaseUpper"],
                         Difficulty: 20, 
                    },
                    Effect: [E.Block, E.BlockWardrobe],
                },       
                {
                    Property: {
                         Block: ["ItemHands", "ItemHandheld"],
                         Effect: [E.Block, E.BlockWardrobe],
                         SetPose: ["BaseUpper"],
                         Difficulty: 20
                    }
                },
            ],
        },
        {
            Name: "乳头",
            Key: "n",
            DrawImages: false,
            Options: [
                {
                    Property: { Intensity: -1, Effect: ["Egged"] },
                },
                { 
                    Prerequisite: ["AccessBreast"],
                    Property: { Intensity: 0, Effect: ["Egged", "Vibrating"] },
                },
                { 
                    Prerequisite: ["AccessBreast"],
                    Property: { Intensity: 1, Effect: ["Egged", "Vibrating"] },
                },
                {
                    Prerequisite: ["AccessBreast"],
                    Property: { Intensity: 2, Effect: ["Egged", "Vibrating"] },
                },
                {
                    Prerequisite: ["AccessBreast"],
                    Property: { Intensity: 3, Effect: ["Egged", "Vibrating"] },
                },
            ],
        },
        {
            Name: "阴蒂",
            Key: "c",
            DrawImages: false,
            Options: [
                {
                    Property: { Intensity: -1, Effect: ["Egged"] },
                },
                { 
                    Prerequisite: ["AccessCrotch"],
                    Property: { Intensity: 0, Effect: ["Egged", "Vibrating"] },
                },
                { 
                    Prerequisite: ["AccessCrotch"],
                    Property: { Intensity: 1, Effect: ["Egged", "Vibrating"] },
                },
                {
                    Prerequisite: ["AccessCrotch"],
                    Property: { Intensity: 2, Effect: ["Egged", "Vibrating"] },
                },
                {
                    Prerequisite: ["AccessCrotch"],
                    Property: { Intensity: 3, Effect: ["Egged", "Vibrating"] },
                },
            ],
        },
    ] };

/** @type {Translation.Dialog} */
const dialogs = {
    CN: {
        ItemArms拘束抱枕SelectBase: "选择附加",
        ItemArms拘束抱枕Select绑带: "选择绑带状态",
        ItemArms拘束抱枕Module绑带: "绑带状态",
        ItemArms拘束抱枕Select乳头: "选择乳头玩具",
        ItemArms拘束抱枕Module乳头: "乳头跳蛋",
        ItemArms拘束抱枕Select阴蒂: "选择阴蒂玩具",
        ItemArms拘束抱枕Module阴蒂: "阴蒂跳蛋",
        ItemArms拘束抱枕Options0: "无",
        ItemArms拘束抱枕Options1: "手腕绑带",
        ItemArms拘束抱枕Options2: "隐形绑带",
        ItemArms拘束抱枕Optionn0: "无",
        ItemArms拘束抱枕Optionn1: "低",
        ItemArms拘束抱枕Optionn2: "中",
        ItemArms拘束抱枕Optionn3: "高",
        ItemArms拘束抱枕Optionn4: "最高",
        ItemArms拘束抱枕Optionc0: "无",
        ItemArms拘束抱枕Optionc1: "低",
        ItemArms拘束抱枕Optionc2: "中",
        ItemArms拘束抱枕Optionc3: "高",
        ItemArms拘束抱枕Optionc4: "最高",
        ItemArms拘束抱枕Sets0: "SourceCharacter取下了DestinationCharacter抱枕上的手腕绑带，让她的手能够自由活动",
        ItemArms拘束抱枕Sets1: "SourceCharacter绑上了DestinationCharacter抱枕上的手腕绑带，让她的手紧紧地绑在了抱枕上",
        ItemArms拘束抱枕Sets2:
            "SourceCharacter绑上了DestinationCharacter抱枕上的几乎无法察觉的透明绑带，让她的手不被人注意的情况下紧紧地绑在了抱枕上",

        ItemArms拘束抱枕Setn0: "SourceCharacter取下了DestinationCharacter抱枕上的乳头跳蛋",
        ItemArms拘束抱枕Setn1: "SourceCharacter将DestinationCharacter抱枕接上吮吸跳蛋吸住了她的乳头，并微微逗弄起她来",
        ItemArms拘束抱枕Setn2:
            "SourceCharacter将DestinationCharacter抱枕接上吮吸跳蛋吸住了她的乳头，并逐渐提升到中等的频率",
        ItemArms拘束抱枕Setn3:
            "SourceCharacter将DestinationCharacter抱枕接上吮吸跳蛋吸住了她的乳头，并猛烈地颤动起来！",
        ItemArms拘束抱枕Setn4:
            "SourceCharacter将DestinationCharacter抱枕接上吮吸跳蛋吸住了她的乳头，并突然以最大强度振动起来！",

        ItemArms拘束抱枕Setc0: "SourceCharacter取下了DestinationCharacter抱枕上的阴蒂跳蛋",
        ItemArms拘束抱枕Setc1: "SourceCharacter将DestinationCharacter抱枕接上吮吸跳蛋吸住了她的阴蒂，并微微逗弄起她来",
        ItemArms拘束抱枕Setc2:
            "SourceCharacter将DestinationCharacter抱枕接上吮吸跳蛋吸住了她的阴蒂，并逐渐提升到中等的频率",
        ItemArms拘束抱枕Setc3:
            "SourceCharacter将DestinationCharacter抱枕接上吮吸跳蛋吸住了她的阴蒂，并猛烈地颤动起来！",
        ItemArms拘束抱枕Setc4:
            "SourceCharacter将DestinationCharacter抱枕接上吮吸跳蛋吸住了她的阴蒂，并突然以最大强度振动起来！",
    },
    EN: {
        ItemArms拘束抱枕SelectBase: "Select Attachment",
        ItemArms拘束抱枕Select绑带: "Select Strap Status",
        ItemArms拘束抱枕Module绑带: "Strap Status",
        ItemArms拘束抱枕Select乳头: "Select Nipple Toy",
        ItemArms拘束抱枕Module乳头: "Nipple Vibrator",
        ItemArms拘束抱枕Select阴蒂: "Select Clitoris Toy",
        ItemArms拘束抱枕Module阴蒂: "Clitoris Vibrator",
        ItemArms拘束抱枕Options0: "None",
        ItemArms拘束抱枕Options1: "Wrist Strap",
        ItemArms拘束抱枕Options2: "Invisible straps",
        ItemArms拘束抱枕Optionn0: "None",
        ItemArms拘束抱枕Optionn1: "Low",
        ItemArms拘束抱枕Optionn2: "Medium",
        ItemArms拘束抱枕Optionn3: "High",
        ItemArms拘束抱枕Optionn4: "Highest",
        ItemArms拘束抱枕Optionc0: "None",
        ItemArms拘束抱枕Optionc1: "Low",
        ItemArms拘束抱枕Optionc2: "Medium",
        ItemArms拘束抱枕Optionc3: "High",
        ItemArms拘束抱枕Optionc4: "Highest",
        ItemArms拘束抱枕Sets0:
            "SourceCharacter removes the wrist straps from DestinationCharacter pillow, allowing her hands to move freely",
        ItemArms拘束抱枕Sets1:
            "SourceCharacter ties the wrist straps from DestinationCharacter pillow, tying her hands tightly to the pillow",
        ItemArms拘束抱枕Sets2:
            "SourceCharacter puts on the barely perceptible transparent straps of DestinationCharacter pillow, keeping her hands tightly bound to the pillow without being noticed",

        ItemArms拘束抱枕Setn0: "SourceCharacter removes the nipple vibrator from DestinationCharacter pillow",
        ItemArms拘束抱枕Setn1:
            "SourceCharacter connected DestinationCharacter pillow to the sucking vibrator and sucked her nipples, and teased her slightly",
        ItemArms拘束抱枕Setn2:
            "SourceCharacter connected DestinationCharacter pillow to the sucking vibrator and sucked her nipples, and gradually increased to a medium frequency",
        ItemArms拘束抱枕Setn3:
            "SourceCharacter connected DestinationCharacter pillow to the sucking vibrator and sucked her nipples, and vibrated violently!",
        ItemArms拘束抱枕Setn4:
            "SourceCharacter connected DestinationCharacter pillow to the sucking vibrator and sucked her nipples, and suddenly vibrated at the maximum intensity! ",

        ItemArms拘束抱枕Setc0: "SourceCharacter removed the clitoral vibrator from DestinationCharacter pillow",
        ItemArms拘束抱枕Setc1:
            "SourceCharacter connected DestinationCharacter pillow to the sucking vibrator and sucked her clitoris, and teased her slightly",
        ItemArms拘束抱枕Setc2:
            "SourceCharacter connected DestinationCharacter pillow to the sucking vibrator and sucked her clitoris, and gradually increased to a medium frequency",
        ItemArms拘束抱枕Setc3:
            "SourceCharacter connected DestinationCharacter pillow to the sucking vibrator and sucked her clitoris, and vibrated violently! ",
        ItemArms拘束抱枕Setc4:
            "SourceCharacter connected DestinationCharacter pillow to the sucking vibrator and sucked her clitoris, and suddenly vibrated at the maximum intensity! ",
    },
    RU: {
        ItemArms拘束抱枕SelectBase: "Select Attachment",
        ItemArms拘束抱枕Select绑带: "Select Strap Status",
        ItemArms拘束抱枕Module绑带: "Strap Status",
        ItemArms拘束抱枕Select乳头: "Select Nipple Toy",
        ItemArms拘束抱枕Module乳头: "Nipple Vibrator",
        ItemArms拘束抱枕Select阴蒂: "Select Clitoris Toy",
        ItemArms拘束抱枕Module阴蒂: "Clitoris Vibrator",
        ItemArms拘束抱枕Options0: "None",
        ItemArms拘束抱枕Options1: "Wrist Strap",
        ItemArms拘束抱枕Options2: "Invisible straps",
        ItemArms拘束抱枕Optionn0: "None",
        ItemArms拘束抱枕Optionn1: "Low",
        ItemArms拘束抱枕Optionn2: "Medium",
        ItemArms拘束抱枕Optionn3: "High",
        ItemArms拘束抱枕Optionn4: "Highest",
        ItemArms拘束抱枕Optionc0: "None",
        ItemArms拘束抱枕Optionc1: "Low",
        ItemArms拘束抱枕Optionc2: "Medium",
        ItemArms拘束抱枕Optionc3: "High",
        ItemArms拘束抱枕Optionc4: "Highest",
        ItemArms拘束抱枕Sets0:
            "SourceCharacter removes the wrist straps from DestinationCharacter pillow, allowing her hands to move freely",
        ItemArms拘束抱枕Sets1:
            "SourceCharacter ties the wrist straps from DestinationCharacter pillow, tying her hands tightly to the pillow",
        ItemArms拘束抱枕Sets2:
            "SourceCharacter puts on the barely perceptible transparent straps of DestinationCharacter pillow, keeping her hands tightly bound to the pillow without being noticed",

        ItemArms拘束抱枕Setn0: "SourceCharacter removes the nipple vibrator from DestinationCharacter pillow",
        ItemArms拘束抱枕Setn1:
            "SourceCharacter connected DestinationCharacter pillow to the sucking vibrator and sucked her nipples, and teased her slightly",
        ItemArms拘束抱枕Setn2:
            "SourceCharacter connected DestinationCharacter pillow to the sucking vibrator and sucked her nipples, and gradually increased to a medium frequency",
        ItemArms拘束抱枕Setn3:
            "SourceCharacter connected DestinationCharacter pillow to the sucking vibrator and sucked her nipples, and vibrated violently!",
        ItemArms拘束抱枕Setn4:
            "SourceCharacter connected DestinationCharacter pillow to the sucking vibrator and sucked her nipples, and suddenly vibrated at the maximum intensity! ",

        ItemArms拘束抱枕Setc0: "SourceCharacter removed the clitoral vibrator from DestinationCharacter pillow",
        ItemArms拘束抱枕Setc1:
            "SourceCharacter connected DestinationCharacter pillow to the sucking vibrator and sucked her clitoris, and teased her slightly",
        ItemArms拘束抱枕Setc2:
            "SourceCharacter connected DestinationCharacter pillow to the sucking vibrator and sucked her clitoris, and gradually increased to a medium frequency",
        ItemArms拘束抱枕Setc3:
            "SourceCharacter connected DestinationCharacter pillow to the sucking vibrator and sucked her clitoris, and vibrated violently! ",
        ItemArms拘束抱枕Setc4:
            "SourceCharacter connected DestinationCharacter pillow to the sucking vibrator and sucked her clitoris, and suddenly vibrated at the maximum intensity! ",
    },
    UA: {
        ItemArms拘束抱枕SelectBase: "Select Attachment",
        ItemArms拘束抱枕Select绑带: "Select Strap Status",
        ItemArms拘束抱枕Module绑带: "Strap Status",
        ItemArms拘束抱枕Select乳头: "Select Nipple Toy",
        ItemArms拘束抱枕Module乳头: "Nipple Vibrator",
        ItemArms拘束抱枕Select阴蒂: "Select Clitoris Toy",
        ItemArms拘束抱枕Module阴蒂: "Clitoris Vibrator",
        ItemArms拘束抱枕Options0: "None",
        ItemArms拘束抱枕Options1: "Wrist Strap",
        ItemArms拘束抱枕Options2: "Invisible straps",
        ItemArms拘束抱枕Optionn0: "None",
        ItemArms拘束抱枕Optionn1: "Low",
        ItemArms拘束抱枕Optionn2: "Medium",
        ItemArms拘束抱枕Optionn3: "High",
        ItemArms拘束抱枕Optionn4: "Highest",
        ItemArms拘束抱枕Optionc0: "None",
        ItemArms拘束抱枕Optionc1: "Low",
        ItemArms拘束抱枕Optionc2: "Medium",
        ItemArms拘束抱枕Optionc3: "High",
        ItemArms拘束抱枕Optionc4: "Highest",
        ItemArms拘束抱枕Sets0:
            "SourceCharacter removes the wrist straps from DestinationCharacter pillow, allowing her hands to move freely",
        ItemArms拘束抱枕Sets1:
            "SourceCharacter ties the wrist straps from DestinationCharacter pillow, tying her hands tightly to the pillow",
        ItemArms拘束抱枕Sets2:
            "SourceCharacter puts on the barely perceptible transparent straps of DestinationCharacter pillow, keeping her hands tightly bound to the pillow without being noticed",

        ItemArms拘束抱枕Setn0: "SourceCharacter removes the nipple vibrator from DestinationCharacter pillow",
        ItemArms拘束抱枕Setn1:
            "SourceCharacter connected DestinationCharacter pillow to the sucking vibrator and sucked her nipples, and teased her slightly",
        ItemArms拘束抱枕Setn2:
            "SourceCharacter connected DestinationCharacter pillow to the sucking vibrator and sucked her nipples, and gradually increased to a medium frequency",
        ItemArms拘束抱枕Setn3:
            "SourceCharacter connected DestinationCharacter pillow to the sucking vibrator and sucked her nipples, and vibrated violently!",
        ItemArms拘束抱枕Setn4:
            "SourceCharacter connected DestinationCharacter pillow to the sucking vibrator and sucked her nipples, and suddenly vibrated at the maximum intensity! ",

        ItemArms拘束抱枕Setc0: "SourceCharacter removed the clitoral vibrator from DestinationCharacter pillow",
        ItemArms拘束抱枕Setc1:
            "SourceCharacter connected DestinationCharacter pillow to the sucking vibrator and sucked her clitoris, and teased her slightly",
        ItemArms拘束抱枕Setc2:
            "SourceCharacter connected DestinationCharacter pillow to the sucking vibrator and sucked her clitoris, and gradually increased to a medium frequency",
        ItemArms拘束抱枕Setc3:
            "SourceCharacter connected DestinationCharacter pillow to the sucking vibrator and sucked her clitoris, and vibrated violently! ",
        ItemArms拘束抱枕Setc4:
            "SourceCharacter connected DestinationCharacter pillow to the sucking vibrator and sucked her clitoris, and suddenly vibrated at the maximum intensity! ",
    },
};

const translations = {
    CN: "拘束抱枕",
    EN: "Restraint Pillow",
    RU: "удерживающая подушка",
    UA: "утримувальна подушка",
};

export default function () {
    AssetManager.addAsset("ItemArms", asset, extended, translations);
    AssetManager.addCustomDialog(dialogs);
}
