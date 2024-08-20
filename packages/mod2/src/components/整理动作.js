import { ActivityManager } from "../ActivityManager";

/** @type { ActivityManagerInterface.ICustomActivity []} */
const activities = [
    {
        activity: {
            Name: "歪头",
            Prerequisite: [],
            TargetSelf: ["ItemNeck"],
            Target: [],
            MaxProgress: 50,
            MaxProgressSelf: 50,
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {
            // Label-ChatSelf-ItemBoots-PourItem
            CN: {
                ItemNeck: "歪头",
            },
            EN: {
                ItemNeck: "Tilt Head",
            },
        },
        description: {
            // ChatSelf-ItemBoots-PourItem
            CN: {
                ItemNeck: "SourceCharacter歪头",
            },
            EN: {
                ItemNeck: "SourceCharacter tilts head.",
            },
        },
    },

    {
        activity: {
            Name: "歪头",
            Prerequisite: [],
            Target: [],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemNeck"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemNeck: "SourceCharacter歪头.",
            },
        },
    },
    {
        activity: {
            Name: "环视周围",
            Prerequisite: [],
            Target: [],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemNeck"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemNeck: "SourceCharacter环视周围.",
            },
        },
    },
    {
        activity: {
            Name: "上下打量",
            Prerequisite: [],
            Target: ["ItemHead"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemHead: "SourceCharacter仔细打量TargetCharacter.",
            },
        },
    },
    {
        activity: {
            Name: "闭上眼睛",
            Prerequisite: [],
            Target: [],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemHead"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemHead: "SourceCharacter闭上了眼睛.",
            },
        },
    },
    {
        activity: {
            Name: "眼睛呆滞",
            Prerequisite: [],
            Target: [],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemHead"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemHead: "SourceCharacter眼睛呆滞地看着前方.",
            },
        },
    },
    {
        activity: {
            Name: "眼睛湿润",
            Prerequisite: [],
            Target: [],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemHead"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemHead: "SourceCharacter眼角泛着泪光.",
            },
        },
    },
    {
        activity: {
            Name: "流眼泪",
            Prerequisite: [],
            Target: [],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemHead"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemHead: "SourceCharacter眼泪从眼角流下.",
            },
        },
    },
    {
        activity: {
            Name: "张开嘴",
            Prerequisite: [],
            Target: [],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemMouth"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemMouth: "SourceCharacter张开了嘴.",
            },
        },
    },
    {
        activity: {
            Name: "吞咽口水",
            Prerequisite: [],
            Target: [],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemNeck"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemNeck: "SourceCharacter吞咽嘴里的口水.",
            },
        },
    },
    {
        activity: {
            Name: "流口水",
            Prerequisite: [],
            Target: [],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemMouth"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemMouth: "SourceCharacter的口水顺着嘴角流下.",
            },
        },
    },
    {
        activity: {
            Name: "轻声喘息",
            Prerequisite: ["Talk"],
            Target: [],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemMouth"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemMouth: "SourceCharacter发出轻声地喘息.",
            },
        },
    },
    {
        activity: {
            Name: "打哈欠",
            Prerequisite: ["UseMouth"],
            Target: [],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemMouth"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemMouth: "SourceCharacter张嘴打哈欠.",
            },
        },
    },
    {
        activity: {
            Name: "舔手",
            Prerequisite: ["UseMouth"],
            Target: ["ItemHands"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemHands"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemHands: "SourceCharacter舔PronounPossessive自己的手.",
            },
        },
    },
    {
        activity: {
            Name: "舔手指",
            Prerequisite: ["UseMouth"],
            Target: ["ItemHands"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemHands"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemHands: "SourceCharacter舔PronounPossessive自己的手指.",
            },
        },
    },
    {
        activity: {
            Name: "吮吸手指",
            Prerequisite: ["UseMouth"],
            Target: ["ItemHands"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemHands"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemHands: "SourceCharacter吮吸PronounPossessive的手指.",
            },
        },
    },
    {
        activity: {
            Name: "舔脸",
            Prerequisite: ["UseMouth"],
            Target: ["ItemMouth"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemMouth: "SourceCharacter舔TargetCharacter的脸.",
            },
        },
    },
    {
        activity: {
            Name: "舔脚",
            Prerequisite: ["CanUseTongue"],
            Target: ["ItemBoots"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemBoots"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemBoots: "SourceCharacter舔PronounPossessive自己的脚.",
            },
        },
    },
    {
        activity: {
            Name: "嗅手",
            Prerequisite: [],
            Target: ["ItemHands"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemHands"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemHands: "SourceCharacter用鼻子嗅了嗅自己的手.",
            },
        },
    },
    {
        activity: {
            Name: "跪下",
            Prerequisite: ["UseArms"],
            Target: [],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemLegs"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemLegs: "SourceCharacter轻轻地跪了下来.",
            },
        },
    },
    {
        activity: {
            Name: "站起来",
            Prerequisite: ["UseArms"],
            Target: [],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemLegs"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemLegs: "SourceCharacter手扶着地站了起来.",
            },
        },
    },
    {
        activity: {
            Name: "跪着张开腿",
            Prerequisite: ["UseArms"],
            Target: [],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemLegs"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemLegs: "SourceCharacter张开了PronounPossessive的腿.",
            },
        },
    },
    {
        activity: {
            Name: "跪着并拢腿",
            Prerequisite: ["UseArms"],
            Target: [],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemLegs"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemLegs: "SourceCharacter并拢了PronounPossessive的腿.",
            },
        },
    },
    {
        activity: {
            Name: "趴下",
            Prerequisite: ["UseArms"],
            Target: [],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemBoots"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemBoots: "SourceCharacter手放身后趴在地上.",
            },
        },
    },
    {
        activity: {
            Name: "四肢着地",
            Prerequisite: ["UseArms"],
            Target: [],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemBoots"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemBoots: "SourceCharacter四肢着地趴在地上.",
            },
        },
    },
    {
        activity: {
            Name: "起身跪下",
            Prerequisite: ["UseArms"],
            Target: [],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemBoots"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemBoots: "SourceCharacter起身跪下.",
            },
        },
    },
    {
        activity: {
            Name: "爬到脚边",
            Prerequisite: [],
            Target: ["ItemBoots"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemBoots: "SourceCharacter爬到TargetCharacter的脚边.",
            },
        },
    },
    {
        activity: {
            Name: "蹭大腿",
            Prerequisite: [],
            Target: ["ItemLegs"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemLegs: "SourceCharacter用头轻轻蹭TargetCharacter的大腿.",
            },
        },
    },
    {
        activity: {
            Name: "蹭小腿",
            Prerequisite: [],
            Target: ["ItemFeet"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemFeet: "SourceCharacter用头轻轻蹭TargetCharacter的小腿.",
            },
        },
    },
    {
        activity: {
            Name: "踮起双脚",
            Prerequisite: ["UseFeet"],
            Target: [],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemBoots"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemBoots: "SourceCharacter踮起PronounPossessive的双脚.",
            },
        },
    },
    {
        activity: {
            Name: "摇晃脚踝",
            Prerequisite: [],
            Target: [],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemBoots"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemBoots: "SourceCharacter摇晃PronounPossessive的脚踝.",
            },
        },
    },
    {
        activity: {
            Name: "伸出脚",
            Prerequisite: [],
            Target: [],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemBoots"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemBoots: "SourceCharacter伸出PronounPossessive的脚.",
            },
        },
    },
    {
        activity: {
            Name: "掰开双腿",
            Prerequisite: ["UseHands", "UseArms"],
            Target: ["ItemLegs"],
            MaxProgress: 500,
            MaxProgressSelf: 50,
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemLegs: "SourceCharacter掰开TargetCharacter的双腿.",
            },
        },
    },
    {
        activity: {
            Name: "夹紧双腿",
            Prerequisite: ["HasItemVulva"],
            Target: [],
            MaxProgress: 50,
            MaxProgressSelf: 500,
            TargetSelf: ["ItemLegs"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemLegs: "SourceCharacter夹紧了自己的腿.",
            },
        },
    },
    {
        activity: {
            Name: "脚托起下巴",
            Prerequisite: ["TargetKneeling"],
            Target: ["ItemMouth"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemMouth: "SourceCharacter用脚托起TargetCharacter的下巴.",
            },
        },
    },
    {
        activity: {
            Name: "戳脸",
            Prerequisite: ["UseHands", "UseArms"],
            Target: ["ItemMouth"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemMouth"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemMouth: "SourceCharacter戳了戳自己的脸.",
            },
        },
    },
    {
        activity: {
            Name: "捏脸",
            Prerequisite: ["UseHands", "UseArms"],
            Target: ["ItemMouth"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemMouth"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemMouth: "SourceCharacter捏了捏自己的脸.",
            },
        },
    },
    {
        activity: {
            Name: "戳手臂",
            Prerequisite: ["UseHands", "UseArms"],
            Target: ["ItemArms"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemArms"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemArms: "SourceCharacter戳了戳自己的手臂.",
            },
        },
    },
    {
        activity: {
            Name: "揉脸",
            Prerequisite: ["UseHands", "UseArms"],
            Target: ["ItemMouth"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemMouth"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemMouth: "SourceCharacter揉了揉自己的脸.",
            },
        },
    },
    {
        activity: {
            Name: "摇晃手臂",
            Prerequisite: ["UseHands"],
            Target: ["ItemArms"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemArms"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemArms: "SourceCharacter摇晃自己的手臂.",
            },
        },
    },
    {
        activity: {
            Name: "轻推",
            Prerequisite: ["UseHands", "UseArms"],
            Target: ["ItemTorso"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemTorso: "SourceCharacter用手轻推TargetCharacter的身体.",
            },
        },
    },
    {
        activity: {
            Name: "托起脚",
            Prerequisite: ["UseHands", "UseArms"],
            Target: ["ItemBoots"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemBoots: "SourceCharacter托起TargetCharacter的脚.",
            },
        },
    },
    {
        activity: {
            Name: "扭动手腕",
            Prerequisite: ["UseHands", "UseArms"],
            Target: [],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemHands"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemHands: "SourceCharacter扭动PronounPossessive的手腕.",
            },
        },
    },
    {
        activity: {
            Name: "挠头",
            Prerequisite: ["UseHands", "UseArms"],
            Target: [],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemHead"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemHead: "SourceCharacter挠了挠PronounPossessive的头.",
            },
        },
    },
    {
        activity: {
            Name: "盖住耳朵",
            Prerequisite: ["UseHands", "UseArms"],
            Target: ["ItemEars"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemEars"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemEars: "SourceCharacter用手盖住了自己的耳朵.",
            },
        },
    },
    {
        activity: {
            Name: "遮住眼睛",
            Prerequisite: ["UseHands", "UseArms"],
            Target: ["ItemHead"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemHead"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemHead: "SourceCharacter用手遮住了自己的眼睛.",
            },
        },
    },
    {
        activity: {
            Name: "捂住头",
            Prerequisite: ["UseHands", "UseArms"],
            Target: ["ItemHead"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemHead"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemHead: "SourceCharacter捂住自己的头.",
            },
        },
    },
    {
        activity: {
            Name: "捂住下体",
            Prerequisite: ["UseHands", "UseArms"],
            Target: ["ItemVulva"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemVulva"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemVulva: "SourceCharacter捂住自己的下体.",
            },
        },
    },
    {
        activity: {
            Name: "掀开裙子",
            Prerequisite: ["UseHands", "UseArms"],
            Target: ["ItemButt"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemButt"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemButt: "SourceCharacter掀开PronounPossessive的裙子.",
            },
        },
    },
    {
        activity: {
            Name: "挥手",
            Prerequisite: ["UseHands", "UseArms"],
            Target: ["ItemHands"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemHands: "SourceCharacter向TargetCharacter挥手.",
            },
        },
    },
    {
        activity: {
            Name: "伸出手",
            Prerequisite: ["UseHands", "UseArms"],
            Target: [],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemHands"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemHands: "SourceCharacter伸出自己的手.",
            },
        },
    },
    {
        activity: {
            Name: "捂住胸",
            Prerequisite: ["UseHands", "UseArms"],
            Target: [],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemBreast"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemBreast: "SourceCharacter捂住自己的胸.",
            },
        },
    },
    {
        activity: {
            Name: "手托起下巴",
            Prerequisite: ["UseHands", "UseArms"],
            Target: ["ItemMouth"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemMouth: "SourceCharacter用手托起TargetCharacter的下巴.",
            },
        },
    },
    {
        activity: {
            Name: "拽链子",
            Prerequisite: ["UseHands", "UseArms", "HasLeash"],
            Target: ["ItemNeck"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemNeck: "SourceCharacter拽TargetCharacter的链子.",
            },
        },
    },
    {
        activity: {
            Name: "弹额头",
            Prerequisite: ["UseHands", "UseArms"],
            Target: ["ItemHead"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemHead: "SourceCharacter弹了一下TargetCharacter的额头.",
            },
        },
    },
    {
        activity: {
            Name: "弹阴蒂",
            Prerequisite: ["UseHands", "UseArms"],
            Target: ["ItemVulvaPiercings"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemVulvaPiercings: "SourceCharacter弹了一下TargetCharacter的阴蒂.",
            },
        },
    },
    {
        activity: {
            Name: "抱腿",
            Prerequisite: ["UseArms"],
            Target: ["ItemLegs"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemLegs: "SourceCharacter抱住TargetCharacter的腿.",
            },
        },
    },
    {
        activity: {
            Name: "拉扯衣角",
            Prerequisite: ["UseHands", "UseArms"],
            Target: ["ItemPelvis"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemPelvis: "SourceCharacter用手拉扯TargetCharacter的衣角.",
            },
        },
    },
    {
        activity: {
            Name: "拍头",
            Prerequisite: ["UseHands", "UseArms"],
            Target: ["ItemHead"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemHead: "SourceCharacter拍打TargetCharacter的头.",
            },
        },
    },
    {
        activity: {
            Name: "摇晃尾巴",
            Prerequisite: ["HasTail"],
            Target: [],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemButt"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemButt: "SourceCharacter摇晃PronounPossessive的尾巴.",
            },
        },
    },
    {
        activity: {
            Name: "竖起尾巴",
            Prerequisite: ["HasCatTail"],
            Target: [],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemButt"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemButt: "SourceCharacter的尾巴竖了起来.",
            },
        },
    },
    {
        activity: {
            Name: "炸毛",
            Prerequisite: ["HasCatTail"],
            Target: [],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemButt"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemButt: "SourceCharacter弓起后背, 身体的毛发立了起来, 发出嘶的声音.",
            },
        },
    },
    {
        activity: {
            Name: "舔尾巴",
            Prerequisite: ["HasCatTail"],
            Target: ["ItemButt"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemButt"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemButt: "SourceCharacter舔自己的尾巴.",
            },
        },
    },
    {
        activity: {
            Name: "轻抚尾巴",
            Prerequisite: ["HasTail"],
            Target: ["ItemButt"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemButt"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemButt: "SourceCharacter轻抚PronounPossessive的尾巴.",
            },
        },
    },
    {
        activity: {
            Name: "尾巴叼在嘴里",
            Prerequisite: ["HasCatTail"],
            Target: ["ItemButt"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemButt"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemButt: "SourceCharacter叼起自己的尾巴.",
            },
        },
    },
    {
        activity: {
            Name: "抬起屁股",
            Prerequisite: [],
            Target: [],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemButt"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemButt: "SourceCharacter弯腰抬起PronounPossessive的屁股.",
            },
        },
    },
    {
        activity: {
            Name: "扇动翅膀",
            Prerequisite: ["HasWings"],
            Target: [],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemArms"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemArms: "SourceCharacter扇动PronounPossessive的翅膀.",
            },
        },
    },
    {
        activity: {
            Name: "躲到身后",
            Prerequisite: [],
            Target: ["ItemTorso"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemTorso: "SourceCharacter躲到TargetCharacter的身后.",
            },
        },
    },
    {
        activity: {
            Name: "移动到身后",
            Prerequisite: [],
            Target: ["ItemTorso"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemTorso: "SourceCharacter移动到TargetCharacter的身后.",
            },
        },
    },
    {
        activity: {
            Name: "下巴搭在肩膀上",
            Prerequisite: [],
            Target: ["ItemNeck"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemNeck: "SourceCharacter把下巴搭在TargetCharacter的肩膀上.",
            },
        },
    },
    {
        activity: {
            Name: "手臂搭在肩膀上",
            Prerequisite: ["UseArms"],
            Target: ["ItemNeck"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemNeck: "SourceCharacter把手臂搭在TargetCharacter的肩膀上.",
            },
        },
    },
    {
        activity: {
            Name: "搂腰",
            Prerequisite: ["UseArms", "UseHands"],
            Target: ["ItemTorso"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemTorso: "SourceCharacter搂住TargetCharacter的腰.",
            },
        },
    },
    {
        activity: {
            Name: "叉腰",
            Prerequisite: ["UseArms", "UseHands"],
            Target: [],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemTorso"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemTorso: "SourceCharacter双手叉在腰上.",
            },
        },
    },
    {
        activity: {
            Name: "身体颤抖",
            Prerequisite: [],
            Target: [],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemTorso"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemTorso: "SourceCharacter颤抖着身体.",
            },
        },
    },
    {
        activity: {
            Name: "身体抽搐",
            Prerequisite: [],
            Target: [],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemTorso"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemTorso: "SourceCharacter身体抽搐着.",
            },
        },
    },
    {
        activity: {
            Name: "托起乳房",
            Prerequisite: [],
            Target: ["ItemBreast"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemBreast"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemBreast: "SourceCharacter托起PronounPossessive的双乳.",
            },
        },
    },
    {
        activity: {
            Name: "揉搓乳头",
            Prerequisite: ["UseHands", "UseArms", "ZoneNaked"],
            Target: ["ItemNipples"],
            MaxProgress: 90,
            MaxProgressSelf: 90,
            TargetSelf: ["ItemNipples"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemNipples: "SourceCharacter揉搓PronounPossessive的乳头.",
            },
        },
    },
    {
        activity: {
            Name: "揉搓乳头",
            Prerequisite: ["HasItemVulva"],
            Target: [],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemLegs"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemLegs: "SourceCharacter颤抖着双腿.",
            },
        },
    },
    {
        activity: {
            Name: "摇晃双腿",
            Prerequisite: [],
            Target: [],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemLegs"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemLegs: "SourceCharacter摇晃PronounPossessive的双腿.",
            },
        },
    },
    {
        activity: {
            Name: "流出液体",
            Prerequisite: ["HasItemVulva"],
            Target: [],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemVulva"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemVulva: "SourceCharacter股间有液体顺着的大腿流下.",
            },
        },
    },
    {
        activity: {
            Name: "失禁",
            Prerequisite: ["HasItemVulva"],
            Target: [],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemVulva"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemVulva: "SourceCharacter的尿液顺着PronounPossessive大腿流下.",
            },
        },
    },
    {
        activity: {
            Name: "撇眼",
            Prerequisite: [],
            Target: [],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemHead"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemHead: "SourceCharacter撇了TargetCharacter一眼.",
            },
        },
    },
    {
        activity: {
            Name: "跺脚",
            Prerequisite: [],
            Target: [],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemBoots"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemBoots: "SourceCharacter不停地跺脚.",
            },
        },
    },
    {
        activity: {
            Name: "撩头发",
            Prerequisite: ["UseArms", "UseHands"],
            Target: [],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemHood"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemHood: "SourceCharacter撩起头发挂在耳边.",
            },
        },
    },
    {
        activity: {
            Name: "手指插进阴道",
            Prerequisite: ["UseHands", "ZoneNaked", "TargetZoneNaked"],
            Target: ["ItemVulva"],
            MaxProgress: 90,
            MaxProgressSelf: 90,
            TargetSelf: ["ItemVulva"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemVulva: "SourceCharacter手指插进自己的的阴道内.",
            },
        },
    },
    {
        activity: {
            Name: "拔出自己的手指",
            Prerequisite: ["UseHands", "ZoneNaked", "TargetZoneNaked"],
            Target: ["ItemVulva"],
            MaxProgress: 90,
            MaxProgressSelf: 90,
            TargetSelf: ["ItemVulva"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemVulva: "SourceCharacter从PronounPossessive的阴道内拔出自己的手指,手指连着自己的爱液.",
            },
        },
    },
    {
        activity: {
            Name: "蠕动手指",
            Prerequisite: ["UseHands", "ZoneNaked", "TargetZoneNaked"],
            Target: ["ItemVulva"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemVulva"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemVulva: "SourceCharacter在PronounPossessive的阴道内蠕动手指.",
            },
        },
    },
    {
        activity: {
            Name: "快速抽插",
            Prerequisite: ["UseHands", "ZoneNaked", "TargetZoneNaked"],
            Target: ["ItemVulva"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemVulva"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemVulva: "SourceCharacter的手在PronounPossessive的阴道内快速抽插.",
            },
        },
    },
    {
        activity: {
            Name: "钩住阴蒂环",
            Prerequisite: ["UseHands", "HasItemVulvaPiercings"],
            Target: ["ItemVulvaPiercings"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemVulvaPiercings"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemVulvaPiercings: "SourceCharacter钩住自己的阴蒂环.",
            },
        },
    },
    {
        activity: {
            Name: "拉扯阴蒂环",
            Prerequisite: ["UseHands", "HasItemVulvaPiercings"],
            Target: ["ItemVulvaPiercings"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemVulvaPiercings"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemVulvaPiercings: "SourceCharacter拉了一下自己的阴蒂环.",
            },
        },
    },
    {
        activity: {
            Name: "宠物服爬到脚边",
            Prerequisite: ["HasPetSuit"],
            Target: ["ItemBoots"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemBoots: "SourceCharacter爬到TargetCharacter脚边.",
            },
        },
    },
    {
        activity: {
            Name: "宠物服蹭小腿",
            Prerequisite: ["HasPetSuit"],
            Target: ["ItemFeet"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemFeet: "SourceCharacter蹭TargetCharacter的腿.",
            },
        },
    },
    {
        activity: {
            Name: "宠物服蹭大腿",
            Prerequisite: ["HasPetSuit"],
            Target: ["ItemLegs"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemLegs: "SourceCharacter蹭TargetCharacter的腿.",
            },
        },
    },
    {
        activity: {
            Name: "宠物服趴下",
            Prerequisite: ["HasPetSuit"],
            Target: [],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemLegs"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemLegs: "SourceCharacter四肢着地趴在地上.",
            },
        },
    },
    {
        activity: {
            Name: "宠物服跪立",
            Prerequisite: ["HasPetSuit"],
            Target: [],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemLegs"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemLegs: "SourceCharacter手臂离地跪立.",
            },
        },
    },
    {
        activity: {
            Name: "宠物服扑",
            Prerequisite: ["HasPetSuit"],
            Target: ["ItemArms"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemArms: "SourceCharacter扑到TargetCharacter身上.",
            },
        },
    },
    {
        activity: {
            Name: "猫爪挠手",
            Prerequisite: ["HasPawMittens"],
            Target: ["ItemHands"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemHands: "SourceCharacter用爪子挠了一下TargetCharacter的手.",
            },
        },
    },
    {
        activity: {
            Name: "猫爪挠手臂",
            Prerequisite: ["HasPawMittens"],
            Target: ["ItemArms"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemArms: "SourceCharacter用爪子挠了一下TargetCharacter的手臂.",
            },
        },
    },
    {
        activity: {
            Name: "猫爪舔手",
            Prerequisite: ["HasPawMittens"],
            Target: [],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemHands"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemHands: "SourceCharacter舔自己的爪子.",
            },
        },
    },
    {
        activity: {
            Name: "猫爪戳脸",
            Prerequisite: ["HasPawMittens"],
            Target: ["ItemMouth"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemMouth"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemMouth: "SourceCharacter用爪子戳了戳自己的脸.",
            },
        },
    },
    {
        activity: {
            Name: "猫爪戳鼻子",
            Prerequisite: ["HasPawMittens"],
            Target: ["ItemNose"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemNose"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemNose: "SourceCharacter用爪子戳了戳自己的鼻子.",
            },
        },
    },
    {
        activity: {
            Name: "猫爪揉脸",
            Prerequisite: ["HasPawMittens"],
            Target: ["ItemMouth"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemMouth"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemMouth: "SourceCharacter用爪子揉了揉自己的脸.",
            },
        },
    },
    {
        activity: {
            Name: "猫爪揉鼻子",
            Prerequisite: ["HasPawMittens"],
            Target: ["ItemNose"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemNose"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemNose: "SourceCharacter用爪子揉了揉自己的鼻子.",
            },
        },
    },
    {
        activity: {
            Name: "撞笼子",
            Prerequisite: ["HasKennel"],
            Target: [],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemArms"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemArms: "SourceCharacter用身体撞击笼子.",
            },
        },
    },
    {
        activity: {
            Name: "咬笼子",
            Prerequisite: ["HasKennel"],
            Target: [],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemMouth"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemMouth: "SourceCharacter用牙齿咬笼子.",
            },
        },
    },
    {
        activity: {
            Name: "摇晃笼子",
            Prerequisite: ["HasKennel"],
            Target: [],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemArms"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemArms: "SourceCharacter摇晃笼子的门.",
            },
        },
    },
    {
        activity: {
            Name: "泡沫剑架在脖子上",
            Prerequisite: ["UseHands", "UseArms", "HasSword"],
            Target: ["ItemNeck"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemNeck"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemNeck: "SourceCharacter把泡沫剑架在自己的脖子上.",
            },
        },
    },
    {
        activity: {
            Name: "泡沫剑拍脸",
            Prerequisite: ["UseHands", "UseArms", "HasSword"],
            Target: ["ItemMouth"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemMouth: "SourceCharacter用泡沫剑轻轻拍了拍一下TargetCharacter的脸",
            },
        },
    },
    {
        activity: {
            Name: "剪刀剪掉上衣",
            Prerequisite: ["UseHands", "UseArms", "HasSword"],
            Target: ["ItemTorso"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemTorso"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemTorso: "SourceCharacter用剪刀剪掉了自己的上衣.",
            },
        },
    },
    {
        activity: {
            Name: "剪刀剪掉下衣",
            Prerequisite: ["UseHands", "UseArms", "HasSword"],
            Target: ["ItemPelvis"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemPelvis"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemPelvis: "SourceCharacter用剪刀剪掉了自己的下衣.",
            },
        },
    },
    {
        activity: {
            Name: "剪刀剪掉胸罩",
            Prerequisite: ["UseHands", "UseArms", "HasSword"],
            Target: ["ItemBreast"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemBreast"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemBreast: "SourceCharacter用剪刀剪掉了自己的胸罩.",
            },
        },
    },
    {
        activity: {
            Name: "剪刀剪掉内裤",
            Prerequisite: ["UseHands", "UseArms", "HasSword"],
            Target: ["ItemVulvaPiercings"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemVulvaPiercings"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemVulvaPiercings: "SourceCharacter用剪刀剪掉了自己的内裤.",
            },
        },
    },
    {
        activity: {
            Name: "剪刀剪掉袜子",
            Prerequisite: ["UseHands", "UseArms", "HasSword"],
            Target: ["ItemBoots"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemBoots"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemBoots: "SourceCharacter用剪刀剪掉了自己的袜子.",
            },
        },
    },
    {
        activity: {
            Name: "舔触手",
            Prerequisite: ["HasTentacles"],
            Target: [],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemMouth"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemMouth: "SourceCharacter舔PronounPossessive的触手.",
            },
        },
    },
    {
        activity: {
            Name: "触手摸头",
            Prerequisite: ["HasTentacles"],
            Target: ["ItemHead"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemHead"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemHead: "SourceCharacter用触手摸了摸自己的头.",
            },
        },
    },
    {
        activity: {
            Name: "触手戳鼻子",
            Prerequisite: ["HasTentacles"],
            Target: ["ItemNose"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemNose"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemNose: "SourceCharacter用触手戳了戳自己的鼻子.",
            },
        },
    },
    {
        activity: {
            Name: "触手戳脸",
            Prerequisite: ["HasTentacles"],
            Target: ["ItemMouth"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemMouth"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemMouth: "SourceCharacter用触手戳了戳自己的脸.",
            },
        },
    },
    {
        activity: {
            Name: "触手揉鼻子",
            Prerequisite: ["HasTentacles"],
            Target: ["ItemNose"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemNose"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemNose: "SourceCharacter用触手揉了揉自己的鼻子.",
            },
        },
    },
    {
        activity: {
            Name: "触手掀裙子",
            Prerequisite: ["HasTentacles"],
            Target: ["ItemButt"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemButt"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemButt: "SourceCharacter用触手掀开PronounPossessive的裙子.",
            },
        },
    },
    {
        activity: {
            Name: "触手揉脸",
            Prerequisite: ["HasTentacles"],
            Target: ["ItemMouth"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemMouth"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemMouth: "SourceCharacter用触手揉了揉自己的脸.",
            },
        },
    },
    {
        activity: {
            Name: "鱼尾揉脸",
            Prerequisite: ["SuitLower鱼鱼尾_Luzi"],
            Target: ["ItemMouth"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemMouth"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemMouth: "SourceCharacter用鱼尾揉了揉PronounPossessive自己的脸.",
            },
        },
    },
    {
        activity: {
            Name: "鱼尾戳脸",
            Prerequisite: ["SuitLower鱼鱼尾_Luzi"],
            Target: ["ItemMouth"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemMouth"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemMouth: "SourceCharacter用鱼尾戳了戳PronounPossessive自己的脸.",
            },
        },
    },
    {
        activity: {
            Name: "鱼尾抚脸",
            Prerequisite: ["SuitLower鱼鱼尾_Luzi"],
            Target: ["ItemMouth"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemMouth"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemMouth: "SourceCharacter用鱼尾轻抚PronounPossessive自己的脸颊.",
            },
        },
    },
    {
        activity: {
            Name: "鱼尾担膝盖",
            Prerequisite: ["SuitLower鱼鱼尾_Luzi", "TargetKneeling"],
            Target: ["ItemLegs"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemLegs: "SourceCharacter将鱼尾担在了TargetCharacter的膝盖上.",
            },
        },
    },
    {
        activity: {
            Name: "鱼尾揉乳房",
            Prerequisite: ["SuitLower鱼鱼尾_Luzi"],
            Target: ["ItemBreast"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemBreast"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemBreast: "SourceCharacter用鱼尾揉了揉PronounPossessive自己的乳房.",
            },
        },
    },
    {
        activity: {
            Name: "鱼尾扇风",
            Prerequisite: ["SuitLower鱼鱼尾_Luzi"],
            Target: ["ItemMouth"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemMouth"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemMouth: "SourceCharacter用鱼尾给自己扇了扇风.",
            },
        },
    },
    {
        activity: {
            Name: "鱼尾戳乳头",
            Prerequisite: ["SuitLower鱼鱼尾_Luzi"],
            Target: ["ItemNipples"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: ["ItemNipples"],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemNipples: "SourceCharacter用鱼尾戳了戳自己的乳头.",
            },
        },
    },
    {
        activity: {
            Name: "鱼尾碰手",
            Prerequisite: ["SuitLower鱼鱼尾_Luzi"],
            Target: ["ItemHands"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemHands: "SourceCharacter将鱼尾踝搭在了TargetCharacter的手心上.",
            },
        },
    },
    {
        activity: {
            Name: "鱼尾抚弄大腿",
            Prerequisite: ["SuitLower鱼鱼尾_Luzi"],
            Target: ["ItemLegs"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemLegs: "SourceCharacter用鱼尾抚弄TargetCharacter的大腿.",
            },
        },
    },
    {
        activity: {
            Name: "躺上去",
            Prerequisite: ["HasBed"],
            Target: ["ItemArms"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemArms: "SourceCharacter躺到TargetCharacter的身边.",
            },
        },
    },
    {
        activity: {
            Name: "骑上去",
            Prerequisite: ["HasSaddle"],
            Target: ["ItemTorso"],
            MaxProgress: 50,
            MaxProgressSelf: 50,
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemTorso: "SourceCharacter骑在TargetCharacter的背上.",
            },
        },
    },
    {
        activity: {
            Name: "射击乳房",
            Prerequisite: ["阿巴阿巴_Luzi"],
            Target: [
                "ItemBreast",
                "ItemButt",
                "ItemMouth",
                "ItemTorso",
                "ItemEars",
                "ItemArms",
                "ItemNeck",
                "ItemHood",
                "ItemNose",
                "ItemPelvis",
                "ItemHead",
            ],
            MaxProgress: 50,
            MaxProgressSelf: 50,
            TargetSelf: [
                "ItemBreast",
                "ItemButt",
                "ItemMouth",
                "ItemTorso",
                "ItemEars",
                "ItemArms",
                "ItemNeck",
                "ItemHood",
                "ItemNose",
                "ItemPelvis",
                "ItemHead",
            ],
        },
        mode: "OnSelf",
        reuseImage: "Wiggle",
        label: {},
        description: {
            CN: {
                ItemBreast: "SourceCharacter举起枪瞄准PronounPossessive自己的乳房.",
                ItemButt: "SourceCharacter举起枪瞄准PronounPossessive自己的屁股.",
                ItemMouth: "SourceCharacter举起枪瞄准PronounPossessive自己的脸.",
                ItemTorso: "SourceCharacter举起枪瞄准PronounPossessive自己的腰.",
                ItemEars: "SourceCharacter举起枪瞄准PronounPossessive自己的耳朵.",
                ItemArms: "SourceCharacter举起枪瞄准PronounPossessive自己的手臂.",
                ItemNeck: "SourceCharacter举起枪瞄准PronounPossessive自己的脖子.",
                ItemHood: "SourceCharacter举起枪瞄准PronounPossessive自己的头.",
                ItemNose: "SourceCharacter举起枪瞄准PronounPossessive自己的鼻子.",
                ItemPelvis: "SourceCharacter举起枪瞄准PronounPossessive自己的肚子.",
                ItemHead: "SourceCharacter举起枪瞄准PronounPossessive自己的眉心.",
            },
        },
    },
];

export default function () {
    ActivityManager.addCustomActivities(activities);
}
