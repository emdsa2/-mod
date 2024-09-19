import ActivityManager from "@mod-utils/ActivityManager";

/** @type { ActivityManagerInterface.ICustomActivity []} */
const activities = [
    {
        activity: {
            Name: "歪头",
            Prerequisite: [],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemNeck"],
        },
        useImage: "Wiggle",
        labelSelf: {
            CN: "歪头",
            EN: "Tilt Head",
            RU: "Наклон головы",
        },
        dialogSelf: {
            CN: "SourceCharacter歪头.",
            EN: "SourceCharacter tilts head.",
            RU: "SourceCharacter наклоняет голову.",
        },
    },
    {
        activity: {
            Name: "环视周围",
            Prerequisite: [],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemNeck"],
        },
        useImage: "Wiggle",
        labelSelf: {
            CN: "环视周围",
            EN: "Look Around",
            RU: "Посмотрите вокруг",
        },
        dialogSelf: {
            CN: "SourceCharacter环视周围.",
            EN: "SourceCharacter looks around.",
            RU: "SourceCharacter оглядывается вокруг.",
        },
    },
    {
        activity: {
            Name: "上下打量",
            Prerequisite: [],
            MaxProgress: 50,
            Target: ["ItemHead"],
        },
        useImage: "Wiggle",
        label: {
            CN: "上下打量",
            EN: "look up and down",
            RU: "Смотреть вверх и вниз",
        },
        dialog: {
            CN: "SourceCharacter仔细打量着TargetCharacter.",
            EN: "SourceCharacter sizes up TargetCharacter.",
            RU: "SourceCharacter размер до TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "闭上眼睛",
            Prerequisite: [],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemHead"],
        },
        useImage: "Wiggle",
        labelSelf: {
            CN: "闭上眼睛",
            EN: "Close Eyes",
            RU: "Закрыть глаза",
        },
        dialogSelf: {
            CN: "SourceCharacter闭上了眼睛.",
            EN: "SourceCharacter closes eyes.",
            RU: "SourceCharacter закрывает глаза.",
        },
    },
    {
        activity: {
            Name: "眼睛呆滞",
            Prerequisite: [],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemHead"],
        },
        useImage: "Wiggle",
        labelSelf: {
            CN: "眼睛呆滞",
            EN: "Blank Stare",
            RU: "Уставилась в пустоту",
        },
        dialogSelf: {
            CN: "SourceCharacter呆滞地看着前方.",
            EN: "SourceCharacter stares blankly ahead.",
            RU: "SourceCharacter Безучастно смотрит вперед",
        },
    },
    {
        activity: {
            Name: "眼睛湿润",
            Prerequisite: [],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemHead"],
        },
        useImage: "MoanGagWhimper",
        labelSelf: {
            CN: "眼睛湿润",
            EN: "Watery Eyes",
            RU: "Прослезилась",
        },
        dialogSelf: {
            CN: "SourceCharacter眼角泛着泪光.",
            EN: "SourceCharacter's eyes are watery.",
            RU: "SourceCharacter's глаза намокли",
        },
    },
    {
        activity: {
            Name: "流眼泪",
            Prerequisite: [],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemHead"],
        },
        useImage: "MoanGagWhimper",
        labelSelf: {
            CN: "流眼泪",
            EN: "Shed Tears",
            RU: "плачет",
        },
        dialogSelf: {
            CN: "SourceCharacter的眼泪从眼角流下.",
            EN: "SourceCharacter's tears fall from the corners of her eyes.",
            RU: "Слезы SourceCharacter текут из уголков её глаз.",
        },
    },
    {
        activity: {
            Name: "张开嘴",
            Prerequisite: [],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemMouth"],
        },
        useImage: "Kiss",
        labelSelf: {
            CN: "张开嘴",
            EN: "Open Mouth",
            RU: "открыла рот",
        },
        dialogSelf: {
            CN: "SourceCharacter张开了嘴.",
            EN: "SourceCharacter open mouth.",
            RU: "SourceCharacter открыла рот.",
        },
    },
    {
        activity: {
            Name: "吞咽口水",
            Prerequisite: [],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemNeck"],
        },
        useImage: "MoanGagWhimper",
        labelSelf: {
            CN: "吞咽口水",
            EN: "Swallow Saliva",
            RU: "сглатывает слюну",
        },
        dialogSelf: {
            CN: "SourceCharacter吞咽嘴里的口水.",
            EN: "SourceCharacter swallows saliva.",
            RU: "SourceCharacter сглатывает слюну.",
        },
    },
    {
        activity: {
            Name: "流口水",
            Prerequisite: [],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemMouth"],
        },
        useImage: "MoanGagWhimper",
        labelSelf: {
            CN: "流口水",
            EN: "Drool",
            RU: "слюни",
        },
        dialogSelf: {
            CN: "SourceCharacter的口水顺着嘴角流下.",
            EN: "SourceCharacter drools down the corner of the mouth.",
            RU: "SourceCharacter пускает слюни.",
        },
    },
    {
        activity: {
            Name: "轻声喘息",
            Prerequisite: ["UseTongue"],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemMouth"],
        },
        useImage: "MoanGagGroan",
        labelSelf: {
            CN: "轻声喘息",
            EN: "Softly Pant",
            RU: "Тихо вздыхает",
        },
        dialogSelf: {
            CN: "SourceCharacter 发出轻声地喘息.",
            EN: "SourceCharacter softly pants.",
            RU: "SourceCharacter тихо вздыхает.",
        }
    },
    {
        activity: {
            Name: "打哈欠",
            Prerequisite: ["UseMouth"],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemMouth"],
        },
        useImage: "Kiss",
        labelSelf: {
            CN: "打哈欠",
            EN: "Yawn",
            RU: "Зевать",
        },
        dialogSelf: {
            CN: "SourceCharacter 张嘴打哈欠.",
            EN: "SourceCharacter yawns.",
            RU: "SourceCharacter зевает.",
        },
    },
    {
        activity: {
            Name: "嘟囔",
            Prerequisite: ["UseMouth"],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemMouth"],
        },
        useImage: "Kiss",
        labelSelf: {
            CN: "嘟囔",
            EN: "Muttered",
            RU: "бормочет",
        },
        dialogSelf: {
            CN: "SourceCharacter 嘟囔着.",
            EN: "SourceCharacter muttered.",
            RU: "SourceCharacter бормочет.",
        },
    },
    {
        activity: {
            Name: "舔手",
            Prerequisite: ["UseMouth"],
            MaxProgress: 50,
            Target: ["ItemHands"],
            TargetSelf: true,
        },
        useImage: "MasturbateTongue",
        label: {
            CN: "舔手",
            EN: "Lick Hand",
            RU: "облизывает руку",
        },
        dialog: {
            CN: "SourceCharacter舔TargetCharacter的手.",
            EN: "SourceCharacter licks TargetCharacter's hand.",
            RU: "SourceCharacter облизывает TargetCharacter's руку.",
        },
        labelSelf: {
            CN: "舔手",
            EN: "Lick Hand",
            RU: "облизывает руку",
        },
        dialogSelf: {
            CN: "SourceCharacter舔PronounPossessive自己的手.",
            EN: "SourceCharacter licks PronounPossessive own hand.",
            RU: "SourceCharacter вылизывает свою руку.",
        },
    },
    {
        activity: {
            Name: "舔手指",
            Prerequisite: ["UseMouth"],
            MaxProgress: 50,
            Target: ["ItemHands"],
            TargetSelf: true,
        },
        useImage: "MasturbateTongue",
        label: {
            CN: "舔手指",
            EN: "Lick Fingers",
            RU: "Облизывать пальцы",
        },
        dialog: {
            CN: "SourceCharacter舔TargetCharacter的手指.",
            EN: "SourceCharacter licks TargetCharacter's fingers.",
            RU: "SourceCharacter облизывает пальцы TargetCharacter."
        },
        labelSelf: {
            CN: "舔手指",
            EN: "Lick Fingers",
            RU: "Облизывать пальцы",
        },
        dialogSelf: {
            CN: "SourceCharacter舔PronounPossessive自己的手指.",
            EN: "SourceCharacter licks PronounPossessive own fingers.",
            RU: "Eleanor облизывает свои пальцы",
        },
    },
    {
        activity: {
            Name: "吮吸手指",
            Prerequisite: ["UseMouth"],
            MaxProgress: 50,
            Target: ["ItemHands"],
            TargetSelf: true,
        },
        useImage: "MasturbateTongue",
        label: {
            CN: "吮吸手指",
            EN: "Suck on Fingers",
            RU: "Сосать пальцы",
        },
        dialog: {
            CN: "SourceCharacter吮吸TargetCharacter的手指.",
            EN: "SourceCharacter sucks on TargetCharacter's fingers.",
            RU: "SourceCharacter посасывает пальцы TargetCharacter",
        },
        labelSelf: {
            CN: "吮吸手指",
            EN: "Suck on Fingers",
            RU: "Сосать пальцы",
        },
        dialogSelf: {
            CN: "SourceCharacter吮吸PronounPossessive的手指.",
            EN: "SourceCharacter sucks on PronounPossessive own fingers.",
            RU: "SourceCharacter сосет свои пальцы",
        },
    },
    {
        activity: {
            Name: "舔脸",
            Prerequisite: ["UseMouth"],
            MaxProgress: 50,
            Target: ["ItemMouth"],
        },
        useImage: "MasturbateTongue",
        label: {
            CN: "舔脸",
            EN: "Lick Face",
            RU: "Облизать лицо",
        },
        dialog: {
            CN: "SourceCharacter舔TargetCharacter的脸.",
            EN: "SourceCharacter licks TargetCharacter's face.",
            RU: "SourceCharacter облизывает лицо TargetCharacter."
        },
    },
    {
        activity: {
            Name: "舔脚",
            Prerequisite: ["UseTongue"],
            MaxProgress: 50,
            Target: ["ItemBoots"],
            TargetSelf: true,
        },
        useImage: "MasturbateTongue",
        label: {
            CN: "舔脚",
            EN: "Lick Feet",
            RU: "Лизать ноги",
        },
        dialog: {
            CN: "SourceCharacter 舔 TargetCharacter 的脚.",
            EN: "SourceCharacter licks TargetCharacter's feet.",
            RU: "SourceCharacter облизывает ноги TargetCharacter."
        },
        labelSelf: {
            CN: "舔脚",
            EN: "Lick Feet",
            RU: "Лизать ноги",
        },
        dialogSelf: {
            CN: "SourceCharacter 舔 PronounPossessive 自己的脚.",
            EN: "SourceCharacter licks PronounPossessive own feet.",
            RU: "SourceCharacter вылизывает свои ноги.",
        },
    },
    {
        activity: {
            Name: "嗅手",
            Prerequisite: [],
            MaxProgress: 50,
            Target: ["ItemHands"],
            TargetSelf: true,
        },
        useImage: "Kiss",
        label: {
            CN: "嗅手",
            EN: "Sniff",
            RU: "Понюхать руку",
        },
        dialog: {
            CN: "SourceCharacter 用鼻子嗅了嗅 TargetCharacter 的手.",
            EN: "SourceCharacter sniffs TargetCharacter's hand.",
            RU: "SourceCharacter нюхает руку TargetCharacter.",
        },
        labelSelf: {
            CN: "嗅手",
            EN: "Sniff",
            RU: "Понюхать руку",
        },
        dialogSelf: {
            CN: "SourceCharacter 用鼻子嗅了嗅自己的手.",
            EN: "SourceCharacter sniffs own hand.",
            RU: "SourceCharacter нюхает свою руку.",
        },
    },
    {
        activity: {
            Name: "爬到脚边",
            Prerequisite: [],
            MaxProgress: 50,
            Target: ["ItemBoots"],
        },
        useImage: "Wiggle",
        label: {
            CN: "爬到脚边",
            EN: "Crawl to Feet",
            RU: "Ползти к ногам",
        },
        dialog: {
            CN: "SourceCharacter爬到TargetCharacter的脚边.",
            EN: "SourceCharacter crawls to TargetCharacter's feet.",
            RU: "SourceCharacter ползет к ногам TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "蹭大腿",
            Prerequisite: [],
            MaxProgress: 50,
            Target: ["ItemLegs"],
        },
        useImage: "PoliteKiss",
        label: {
            CN: "蹭大腿",
            EN: "Nuzzle Thigh",
            RU: "Тереться об ляжку",
        },
        dialog: {
            CN: "SourceCharacter用头轻轻蹭TargetCharacter的大腿.",
            EN: "SourceCharacter gently nuzzles TargetCharacter's thigh.",
            RU: "SourceCharacter нежно трется головой об ляжку TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "蹭小腿",
            Prerequisite: [],
            MaxProgress: 50,
            Target: ["ItemFeet"],
        },
        useImage: "PoliteKiss",
        label: {
            CN: "蹭小腿",
            EN: "Nuzzle Shin",
            RU: "Тереться об голень",
        },
        dialog: {
            CN: "SourceCharacter用头轻轻蹭TargetCharacter的小腿.",
            EN: "SourceCharacter gently nuzzles TargetCharacter's shin.",
            RU: "SourceCharacter нежно трется головой об голень TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "踮起双脚",
            Prerequisite: ["UseFeet"],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemBoots"],
        },
        useImage: "Kick",
        labelSelf: {
            CN: "踮起双脚",
            EN: "Stand on Tiptoes",
			RU: "Стоять на ципочках",
        },
        dialogSelf: {
            CN: "SourceCharacter踮起PronounPossessive的双脚.",
            EN: "SourceCharacter stands on tiptoes.",
			RU: "SourceCharacter встает на ципочки.",
        },
    },
    {
        activity: {
            Name: "摇晃脚踝",
            Prerequisite: [],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemBoots"],
        },
        useImage: "Wiggle",
        labelSelf: {
            CN: "摇晃脚踝",
            EN: "Wiggle Ankles",
			RU: "Покачивать лодыжками",
        },
        dialogSelf: {
            CN: "SourceCharacter摇晃PronounPossessive的脚踝.",
            EN: "SourceCharacter wiggles PronounPossessive ankles.",
			RU: "SourceCharacter покачивается на своих лодыжках.",
        },
    },
    {
        activity: {
            Name: "伸出脚",
            Prerequisite: [],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemBoots"],
        },
        useImage: "Kick",
        labelSelf: {
            CN: "伸出脚",
            EN: "Extend Leg",
			RU: "Приподнять ногу",
        },
        dialogSelf: {
            CN: "SourceCharacter伸出PronounPossessive的脚.",
            EN: "SourceCharacter extends PronounPossessive leg.",
			RU: "SourceCharacter приподнимает свою ногу.",
        },
    },
    {
        activity: {
            Name: "掰开双腿",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 500,
            MaxProgressSelf: 50,
            Target: ["ItemLegs"],
        },
        useImage: "Wiggle",
        label: {
            CN: "掰开双腿",
            EN: "Spread Legs",
			RU: "Раздвинуть ноги",
        },
        dialog: {
            CN: "SourceCharacter掰开TargetCharacter的双腿.",
            EN: "SourceCharacter spreads TargetCharacter's legs.",
			RU: "SourceCharacter раздвигает ноги TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "夹紧双腿",
            Prerequisite: ["TargetHasItemVulva"],
            MaxProgress: 50,
            MaxProgressSelf: 500,
            Target: [],
            TargetSelf: ["ItemLegs"],
        },
        useImage: "Wiggle",
        labelSelf: {
            CN: "夹紧双腿",
            EN: "Squeeze thighs",
			RU: "Сжать ляжки",
        },
        dialogSelf: {
            CN: "SourceCharacter夹紧了自己的腿.",
			EN: "SourceCharacter clamps PronounPossessive own thighs",
			RU: "SourceCharacter сжимает свои ляжки.",
        },
    },
    {
        activity: {
            Name: "脚托起下巴",
            Prerequisite: ["TargetKneeling"],
            MaxProgress: 50,
            Target: ["ItemMouth"],
        },
        useImage: "Wiggle",
        label: {
            CN: "脚托起下巴",
            EN: "Foot on Chin",
			RU: "Ногу на подбородок",
        },
        dialog: {
            CN: "SourceCharacter用脚托起TargetCharacter的下巴.",
            EN: "SourceCharacter places foot on TargetCharacter's chin.",
			RU: "SourceCharacter ставит ногу на подбородок TargetCharacter",
        },
    },
    {
        activity: {
            Name: "戳脸",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 50,
            Target: ["ItemMouth"],
            TargetSelf: true,
        },
        useImage: "Caress",
        label: {
            CN: "戳脸",
            EN: "Poke Face",
			RU: "Тыкнуть в лицо",
        },
        dialog: {
            CN: "SourceCharacter戳了戳TargetCharacter的脸.",
            EN: "SourceCharacter pokes TargetCharacter's face.",
			RU: "SourceCharacter тыкает в лицо TargetCharacter.",
        },
        labelSelf: {
            CN: "戳脸",
            EN: "Poke Face",
			RU: "Тыкнуть в лицо",
        },
        dialogSelf: {
            CN: "SourceCharacter戳了戳自己的脸.",
            EN: "SourceCharacter pokes own face.",
			RU: "SourceCharacter тычет в собственное лицо.",
        },
    },
    {
        activity: {
            Name: "捏脸",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 50,
            Target: ["ItemMouth"],
            TargetSelf: true,
        },
        useImage: "Pinch",
        label: {
            CN: "捏脸",
            EN: "Pinch Face",
			RU: "Ущипнуть за лицо",
        },
        dialog: {
            CN: "SourceCharacter捏了捏TargetCharacter的脸.",
            EN: "SourceCharacter pinches TargetCharacter's face.",
			RU: "SourceCharacter щипает TargetCharacter за лицо.",
        },
        labelSelf: {
            CN: "捏脸",
            EN: "Pinch Face",
			RU: "Ущипнуть за лицо",
        },
        dialogSelf: {
            CN: "SourceCharacter捏了捏自己的脸.",
            EN: "SourceCharacter pinches own face.",
			RU: "SourceCharacter щипает себя за лицо.",
        },
    },
    {
        activity: {
            Name: "戳手臂",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 50,
            Target: ["ItemArms"],
            TargetSelf: true,
        },
        useImage: "Caress",
        label: {
            CN: "戳手臂",
            EN: "Poke Arm",
			RU: "Тыкнуть в руку",
        },
        dialog: {
            CN: "SourceCharacter戳了戳TargetCharacter的手臂.",
            EN: "SourceCharacter pokes TargetCharacter's arm.",
			RU: "SourceCharacter тыкает TargetCharacter в руку.",
        },
        labelSelf: {
            CN: "戳手臂",
            EN: "Poke Arm",
			RU: "Тыкнуть в руку",
        },
        dialogSelf: {
            CN: "SourceCharacter戳了戳自己的手臂.",
            EN: "SourceCharacter pokes own arm.",
			RU: "SourceCharacter тычет в собственную руку.",
        },
    },
    {
        activity: {
            Name: "揉脸",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 50,
            Target: ["ItemMouth"],
            TargetSelf: true,
        },
        useImage: "Wiggle",
        label: {
            CN: "揉脸",
            EN: "Rub Face",
			RU: "Потереть лицо",
        },
        dialog: {
            CN: "SourceCharacter揉了揉TargetCharacter的脸.",
            EN: "SourceCharacter rubs TargetCharacter's face.",
			RU: "SourceCharacter трет лицо TargetCharacter.",
        },
        labelSelf: {
            CN: "揉脸",
            EN: "Rub Face",
			RU: "Потереть лицо",
			
        },
        dialogSelf: {
            CN: "SourceCharacter揉了揉自己的脸.",
            EN: "SourceCharacter rubs own face.",
			RU: "SourceCharacter трет свое лицо.",
        },
    },
    {
        activity: {
            Name: "摇晃手臂",
            Prerequisite: ["UseHands"],
            MaxProgress: 50,
            Target: ["ItemArms"],
            TargetSelf: true,
        },
        useImage: "Wiggle",
        label: {
            CN: "摇晃手臂",
            EN: "Shake Arms",
			RU: "Трясти за плечи",
        },
        dialog: {
            CN: "SourceCharacter摇晃TargetCharacter的手臂.",
            EN: "SourceCharacter shakes TargetCharacter's arms.",
			RU: "SourceCharacter трясет TargetCharacter за плечи .",
        },
        labelSelf: {
            CN: "摇晃手臂",
            EN: "Shake Arms",
			RU: "Пожать плечами",
        },
        dialogSelf: {
            CN: "SourceCharacter摇晃自己的手臂.",
            EN: "SourceCharacter shakes own arms.",
			RU: "SourceCharacter пожимает плечами.",
        },
    },
    {
        activity: {
            Name: "轻推",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 50,
            Target: ["ItemTorso"],
        },
        useImage: "Slap",
        label: {
            CN: "轻推",
            EN: "Light Push",
			RU: "Легонько толкнуть",
        },
        dialog: {
            CN: "SourceCharacter用手轻推TargetCharacter的身体.",
            EN: "SourceCharacter lightly pushes TargetCharacter's body.",
			RU: "SourceCharacter легонько толкает TargetCharacter",
        },
    },
    {
        activity: {
            Name: "托起脚",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 50,
            Target: ["ItemBoots"],
        },
        useImage: "Caress",
        label: {
            CN: "托起脚",
            EN: "Lift Foot",
			RU: "Поднять ступню",
        },
        dialog: {
            CN: "SourceCharacter托起TargetCharacter的脚.",
            EN: "SourceCharacter lifts TargetCharacter's foot.",
			RU: "SourceCharacter поднимает ступню TargetCharacter",
        },
    },
    {
        activity: {
            Name: "扭动手腕",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemHands"],
        },
        useImage: "Wiggle",
        labelSelf: {
            CN: "扭动手腕",
            EN: "Twist Wrists",
			RU: "Вращать кистями",
        },
        dialogSelf: {
            CN: "SourceCharacter扭动PronounPossessive的手腕.",
            EN: "SourceCharacter twists PronounPossessive wrists.",
			RU: "SourceCharacter вращает кистями.",
        },
    },
    {
        activity: {
            Name: "挠头",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemHead"],
        },
        useImage: "Pull",
        labelSelf: {
            CN: "挠头",
            EN: "Scratch Head",
			RU: "Почесать голову"
        },
        dialogSelf: {
            CN: "SourceCharacter挠了挠PronounPossessive的头.",
			EN: "SourceCharacter scratches PronounPossessive own head",
			RU: "SourceCharacter чешет голову.",
        },
    },
    {
        activity: {
            Name: "盖住耳朵",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 50,
            Target: ["ItemEars"],
            TargetSelf: true,
        },
        useImage: "HandGag",
        label: {
            CN: "盖住耳朵",
            EN: "Cover Ears",
			RU: "Закрыть уши",
        },
        dialog: {
            CN: "SourceCharacter用手盖住了TargetCharacter的耳朵.",
			EN: "SourceCharacter covers TargetCharacter's ears with hands.",
			RU: "SourceCharacter прикрывает уши TargetCharacter руками",
        },
        labelSelf: {
            CN: "盖住耳朵",
            EN: "Cover Ears",
			RU: "Закрыть уши",
        },
        dialogSelf: {
            CN: "SourceCharacter用手盖住了自己的耳朵.",
			EN: "SourceCharacter covers own ears with hands.",
			RU: "SourceCharacter прикрывает свои уши руками",
        },
    },
    {
        activity: {
            Name: "遮住眼睛",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 50,
            Target: ["ItemHead"],
            TargetSelf: true,
        },
        useImage: "HandGag",
        label: {
            CN: "遮住眼睛",
            EN: "Cover Eyes",
			RU: "Прикрыть глазки",
        },
        dialog: {
            CN: "SourceCharacter用手遮住了TargetCharacter的眼睛.",
            EN: "SourceCharacter covers TargetCharacter's eyes with hands.",
			RU: "SourceCharacter прикрывает глазки TargetCharacter своими руками.",
        },
        labelSelf: {
            CN: "遮住眼睛",
            EN: "Cover Eyes",
			RU: "Прикрыть глазки",
        },
        dialogSelf: {
            CN: "SourceCharacter用手遮住了自己的眼睛.",
            EN: "SourceCharacter covers PronounPossessive own eyes with hands.",
			RU: "SourceCharacter прикрывает свои глазки руками",
        },
    },
    {
        activity: {
            Name: "捂住头",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 50,
            Target: ["ItemHead"],
            TargetSelf: true,
        },
        useImage: "HandGag",
        label: {
            CN: "捂住头",
            EN: "Cover Head",
			RU: "Прикрыть голову",
        },
        dialog: {
            CN: "SourceCharacter捂住TargetCharacter的头.",
            EN: "SourceCharacter covers TargetCharacter's head with hands.",
			RU: "SourceCharacter закрывает голову TargetCharacter руками.",
        },
        labelSelf: {
            CN: "捂住头",
            EN: "Cover Head",
			RU: "Прикрыть голову",
        },
        dialogSelf: {
            CN: "SourceCharacter捂住自己的头.",
            EN: "SourceCharacter covers own head with hands.",
			RU: "SourceCharacter закрывает свою голову руками.",
        },
    },
    {
        activity: {
            Name: "捂住下体",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 50,
            Target: ["ItemVulva"],
            TargetSelf: true,
        },
        useImage: "HandGag",
        label: {
            CN: "捂住下体",
            EN: "Cover Groin",
			RU: "Прикрыть пах",
        },
        dialog: {
            CN: "SourceCharacter捂住TargetCharacter的下体.",
            EN: "SourceCharacter covers TargetCharacter's groin with hands.",
			RU: "SourceCharacter прикрывает пах TargetCharacter своими руками.",
        },
        labelSelf: {
            CN: "捂住下体",
            EN: "Cover Groin",
			RU: "Прикрыть пах",
        },
        dialogSelf: {
            CN: "SourceCharacter捂住自己的下体.",
            EN: "SourceCharacter covers own groin with hands.",
			RU: "SourceCharacter прикрывает свой пах руками.",
        },
    },
    {
        activity: {
            Name: "掀开裙子",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 50,
            Target: ["ItemButt"],
            TargetSelf: true,
        },
        useImage: "MasturbateHand",
        label: {
            CN: "掀开裙子",
            EN: "Lift Skirt",
			RU: "Приподнять юбку",
        },
        dialog: {
            CN: "SourceCharacter掀开TargetCharacter的裙子.",
            EN: "SourceCharacter lifts TargetCharacter's skirt.",
			RU: "SourceCharacter приподнимает юбку TargetCharacter.",
        },
        labelSelf: {
            CN: "掀开裙子",
            EN: "Lift Skirt",
			RU: "Приподнять юбку",
        },
        dialogSelf: {
            CN: "SourceCharacter掀开PronounPossessive的裙子.",
            EN: "SourceCharacter lifts PronounPossessive's skirt.",
			RU: "SourceCharacter приподнимает свою юбку.",
        },
    },
    {
        activity: {
            Name: "挥手",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 50,
            Target: ["ItemHands"],
        },
        useImage: "Slap",
        label: {
            CN: "挥手",
            EN: "Wave Hand",
			RU: "Помахать рукой",
        },
        dialog: {
            CN: "SourceCharacter向TargetCharacter挥手.",
            EN: "SourceCharacter waves hand at TargetCharacter.",
			RU: "SourceCharacter машет рукой в сторону TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "伸出手",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemHands"],
        },
        useImage: "Caress",
        labelSelf: {
            CN: "伸出手",
            EN: "Reach Out Hand",
			RU: "Протянуть руку",
        },
        dialogSelf: {
            CN: "SourceCharacter伸出自己的手.",
            EN: "SourceCharacter reaches out own hand.",
			RU: "SourceCharacter протягивает руку.",
        },
    },
    {
        activity: {
            Name: "捂住胸",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemBreast"],
        },
        useImage: "Pull",
        labelSelf: {
            CN: "捂住胸",
            EN: "Cover Chest",
			RU: "Прикрыть грудь",
        },
        dialogSelf: {
            CN: "SourceCharacter捂住自己的胸.",
            EN: "SourceCharacter covers own chest.",
			RU: "SourceCharacter прикрывает свою грудь.",
        },
    },
    {
        activity: {
            Name: "手托起下巴",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 50,
            Target: ["ItemMouth"],
        },
        useImage: "Caress",
        label: {
            CN: "手托起下巴",
            EN: "Hand under Chin",
			RU: "Взять за подбородок",
        },
        dialog: {
            CN: "SourceCharacter用手托起TargetCharacter的下巴.",
            EN: "SourceCharacter places hand under TargetCharacter's chin.",
			RU: "SourceCharacter берет TargetCharacter рукой за подбородок.",
        },
    },
    {
        activity: {
            Name: "拽链子",
            Prerequisite: ["UseHands", "UseArms", "TargetHasLeash"],
            MaxProgress: 50,
            Target: ["ItemNeck"],
        },
        useImage: "MasturbateHand",
        label: {
            CN: "拽链子",
            EN: "Pull Chain",
			RU: "Тянуть за поводок",
        },
        dialog: {
            CN: "SourceCharacter拽TargetCharacter的链子.",
            EN: "SourceCharacter pulls TargetCharacter's chain.",
			RU: "SourceCharacter тянет за поводок на ошейнике TargetCharacter",
        },
    },
    {
        activity: {
            Name: "弹额头",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 50,
            Target: ["ItemHead"],
        },
        useImage: "Pinch",
        label: {
            CN: "弹额头",
            EN: "Flick Forehead",
			RU: "Щелбан",
        },
        dialog: {
            CN: "SourceCharacter弹了一下TargetCharacter的额头.",
            EN: "SourceCharacter flicks TargetCharacter's forehead.",
			RU: "SourceCharacter ставит щелбан в лоб TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "弹阴蒂",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 50,
            Target: ["ItemVulvaPiercings"],
        },
        useImage: "Pinch",
        label: {
            CN: "弹阴蒂",
            EN: "Flick Clitoris",
			RU: "Щелчек по клитору",
        },
        dialog: {
            CN: "SourceCharacter弹了一下TargetCharacter的阴蒂.",
            EN: "SourceCharacter flicks TargetCharacter's clitoris.",
			RU: "SourceCharacter щелкает TargetCharacter по клитору",
        },
    },
    {
        activity: {
            Name: "抱腿",
            Prerequisite: ["UseArms"],
            MaxProgress: 50,
            Target: ["ItemLegs"],
        },
        useImage: "Caress",
        label: {
            CN: "抱腿",
            EN: "Hug Legs",
			RU: "Обнять ноги",
        },
        dialog: {
            CN: "SourceCharacter抱住TargetCharacter的腿.",
            EN: "SourceCharacter hugs TargetCharacter's legs.",
			RU: "SourceCharacter обнимает TargetCharacter за ноги.",
        },
    },
    {
        activity: {
            Name: "拉扯衣角",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 50,
            Target: ["ItemPelvis"],
        },
        useImage: "Pull",
        label: {
            CN: "拉扯衣角",
            EN: "Tug Clothes",
			RU: "Потянуть за одежду",
        },
        dialog: {
            CN: "SourceCharacter用手拉扯TargetCharacter的衣角.",
            EN: "SourceCharacter tugs at TargetCharacter's clothes.",
			RU: "SourceCharacter тянет TargetCharacter за одежду",
        },
    },
    {
        activity: {
            Name: "拍头",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 50,
            Target: ["ItemHead"],
        },
        useImage: "Slap",
        label: {
            CN: "拍头",
			EN: "Hit The Head",
			RU: "Ударить по голове",
        },
        dialog: {
            CN: "SourceCharacter拍打TargetCharacter的头.",
            EN: "SourceCharacter hits TargetCharacter's head.",
			RU: "SourceCharacter бьет TargetCharacter по голове.",
        },
    },
    {
        activity: {
            Name: "竖起尾巴",
            Prerequisite: ["TargetHasCatTail"],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemButt"],
        },
        useImage: "Wiggle",
        labelSelf: {
            CN: "竖起尾巴",
            EN: "Raise Tail",
			RU: "Поднять хвост",
        },
        dialogSelf: {
            CN: "SourceCharacter的尾巴竖了起来.",
            EN: "SourceCharacter raises own tail.",
			RU: "SourceCharacter держит хвост трубой.",
        },
    },
    {
        activity: {
            Name: "炸毛",
            Prerequisite: ["TargetHasCatTail"],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemButt"],
        },
        useImage: "Bite",
        labelSelf: {
            CN: "炸毛",
            EN: "Puff Up",
			RU: "Распушиться",
        },
        dialogSelf: {
            CN: "SourceCharacter弓起后背, 身体的毛发立了起来, 发出嘶的声音.",
            EN: "SourceCharacter arches back, body hair stands up, emitting a hissing sound.",
			RU: "Волосы SourceCharacter встают дыбом пока SourceCharacter шипит, выгибая спину.",
        },
    },
    {
        activity: {
            Name: "舔尾巴",
            Prerequisite: ["TargetHasCatTail"],
            MaxProgress: 50,
            Target: ["ItemButt"],
            TargetSelf: true,
        },
        useImage: "MasturbateTongue",
        label: {
            CN: "舔尾巴",
            EN: "Lick Tail",
			RU: "Облизать хвост",
        },
        dialog: {
            CN: "SourceCharacter舔TargetCharacter的尾巴.",
            EN: "SourceCharacter licks TargetCharacter's tail.",
			RU: "SourceCharacter облизывает хвост TargetCharacter.",
        },
        labelSelf: {
            CN: "舔尾巴",
            EN: "Lick Tail",
			RU: "Вылизать хвост",
        },
        dialogSelf: {
            CN: "SourceCharacter舔自己的尾巴.",
            EN: "SourceCharacter licks own tail.",
			RU: "SourceCharacter вылизывает собственный хвост.",
        },
    },
    {
        activity: {
            Name: "轻抚尾巴",
            Prerequisite: ["TargetHasTail"],
            MaxProgress: 50,
            Target: ["ItemButt"],
            TargetSelf: true,
        },
        useImage: "Caress",
        label: {
            CN: "轻抚尾巴",
            EN: "Gently Stroke Tail",
			RU: "Нежно погладить хвостик",
        },
        dialog: {
            CN: "SourceCharacter轻抚TargetCharacter的尾巴.",
            EN: "SourceCharacter gently strokes TargetCharacter's tail.",
			RU: "SourceCharacter нежно гладит TargetCharacter за хвостик.",
        },
        labelSelf: {
            CN: "轻抚尾巴",
            EN: "Gently Stroke Tail",
			RU: "Нежно подрочить хвостик",
        },
        dialogSelf: {
            CN: "SourceCharacter轻抚PronounPossessive的尾巴.",
            EN: "SourceCharacter gently strokes PronounPossessive's tail.",
			RU: "SourceCharacter нежно дрочит свой собственный хвостик.",
        },
    },
    {
        activity: {
            Name: "尾巴叼在嘴里",
            Prerequisite: ["TargetHasCatTail"],
            MaxProgress: 50,
            Target: ["ItemButt"],
            TargetSelf: true,
        },
        useImage: "Kiss",
        label: {
            CN: "尾巴叼在嘴里",
            EN: "Hold Tail in Mouth",
			RU: "Взять хвост в рот",
        },
        dialog: {
            CN: "SourceCharacter叼起TargetCharacter的尾巴.",
            EN: "SourceCharacter holds TargetCharacter's tail in mouth.",
			RU: "SourceCharacter сует хвост TargetCharacter себе в рот.",
        },
        labelSelf: {
            CN: "尾巴叼在嘴里",
            EN: "Hold Tail in Mouth",
			RU: "Взять хвост в рот",
        },
        dialogSelf: {
            CN: "SourceCharacter叼起自己的尾巴.",
            EN: "SourceCharacter holds own tail in mouth.",
			RU: "SourceCharacter сует собственный хвост себе в рот.",
        },
    },
    {
        activity: {
            Name: "抬起屁股",
            Prerequisite: [],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemButt"],
        },
        useImage: "Wiggle",
        labelSelf: {
            CN: "抬起屁股",
            EN: "Lift Buttocks",
			RU: "Поднять булочки",
        },
        dialogSelf: {
            CN: "SourceCharacter弯腰抬起PronounPossessive的屁股.",
            EN: "SourceCharacter bends over, lifting PronounPossessive buttocks.",
			RU: "SourceCharacter наклоняется, приподнимая ягодицы.",
        },
    },
    {
        activity: {
            Name: "扇动翅膀",
            Prerequisite: ["TargetHasWings"],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemArms"],
        },
        useImage: "Wiggle",
        labelSelf: {
            CN: "扇动翅膀",
            EN: "Flap Wings",
			RU: "Взмахнуть крыльями",
        },
        dialogSelf: {
            CN: "SourceCharacter扇动PronounPossessive的翅膀.",
            EN: "SourceCharacter flaps PronounPossessive wings.",
			RU: "SourceCharacter вмахивает своими крыльями.",
        },
    },
    {
        activity: {
            Name: "下巴搭在肩膀上",
            Prerequisite: [],
            MaxProgress: 50,
            Target: ["ItemNeck"],
        },
        useImage: "RestHead",
        label: {
            CN: "下巴搭在肩膀上",
            EN: "Chin on Shoulder",
			RU: "Подбородок на плечо.",
        },
        dialog: {
            CN: "SourceCharacter把下巴搭在TargetCharacter的肩膀上.",
            EN: "SourceCharacter places chin on TargetCharacter's shoulder.",
			RU: "SourceCharacter ложит подбородок на плечо TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "手臂搭在肩膀上",
            Prerequisite: ["UseArms"],
            MaxProgress: 50,
            Target: ["ItemNeck"],
        },
        useImage: "Slap",
        label: {
            CN: "手臂搭在肩膀上",
            EN: "Arm on Shoulder",
			RU: "Руку на плечо",
        },
        dialog: {
            CN: "SourceCharacter把手臂搭在TargetCharacter的肩膀上.",
            EN: "SourceCharacter places arm on TargetCharacter's shoulder.",
			RU: "SourceCharacter кладет свою руку на плечо TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "搂腰",
            Prerequisite: ["UseArms", "UseHands"],
            MaxProgress: 50,
            Target: ["ItemTorso"],
        },
        useImage: "SistersHug",
        label: {
            CN: "搂腰",
            EN: "Embrace Waist",
			RU: "Приобнять за талию",
        },
        dialog: {
            CN: "SourceCharacter搂住TargetCharacter的腰.",
            EN: "SourceCharacter embraces TargetCharacter's waist.",
			RU: "SourceCharacter приобнимает TargetCharacter за талию.",
        },
    },
    {
        activity: {
            Name: "叉腰",
            Prerequisite: ["UseArms", "UseHands"],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemTorso"],
        },
        useImage: "Choke",
        labelSelf: {
            CN: "叉腰",
            EN: "Put Hands on Hips",
			RU: "Руки на бедра",
        },
        dialogSelf: {
            CN: "SourceCharacter双手叉在腰上.",
            EN: "SourceCharacter puts its hands on its hips.",
			RU: "SourceCharacter упирается руками в бедра.",
        },
    },
    {
        activity: {
            Name: "身体颤抖",
            Prerequisite: [],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemTorso"],
        },
        useImage: "Wiggle",
        labelSelf: {
            CN: "身体颤抖",
            EN: "Body Trembles",
			RU: "Дрожь по телу",
        },
        dialogSelf: {
            CN: "SourceCharacter颤抖着身体.",
            EN: "SourceCharacter's body trembles.",
			RU: "SourceCharacter дрожит всем телом.",
        },
    },
    {
        activity: {
            Name: "身体抽搐",
            Prerequisite: [],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemTorso"],
        },
        useImage: "Wiggle",
        labelSelf: {
            CN: "身体抽搐",
            EN: "Body Twitches",
			RU: "Подергивания в теле",
        },
        dialogSelf: {
            CN: "SourceCharacter身体抽搐着.",
            EN: "SourceCharacter's body twitches.",
			RU: "SourceCharacter подергивает телом.",
        },
    },
    {
        activity: {
            Name: "托起乳房",
            Prerequisite: [],
            MaxProgress: 50,
            Target: ["ItemBreast"],
            TargetSelf: true,
        },
        useImage: "Wiggle",
        label: {
            CN: "托起乳房",
            EN: "Lift Breasts",
			RU: "Приподнять грудь",
        },
        dialog: {
            CN: "SourceCharacter托起TargetCharacter的双乳.",
            EN: "SourceCharacter lifts TargetCharacter's breasts.",
			RU: "SourceCharacter приподнимает грудь TargetCharacter.",
        },
        labelSelf: {
            CN: "托起乳房",
            EN: "Lift Breasts",
			RU: "Приподнять грудь",
        },
        dialogSelf: {
            CN: "SourceCharacter托起PronounPossessive的双乳.",
            EN: "SourceCharacter lifts PronounPossessive's breasts.",
			RU: "SourceCharacter приподнимает свою грудь.",
        },
    },
    {
        activity: {
            Name: "揉搓乳头",
            Prerequisite: ["UseHands", "UseArms", "ZoneNaked"],
            MaxProgress: 90,
            Target: ["ItemNipples"],
            TargetSelf: true,
        },
        useImage: "Pinch",
        label: {
            CN: "揉搓乳头",
            EN: "Rub Nipples",
        },
        dialog: {
            CN: "SourceCharacter揉搓TargetCharacter的乳头.",
            EN: "SourceCharacter uses hands to pinch TargetCharacter's nipples, rubbing them.",
        },
        labelSelf: {
            CN: "揉搓乳头",
            EN: "Rub Nipples",
        },
        dialogSelf: {
            CN: "SourceCharacter揉搓PronounPossessive的乳头.",
            EN: "SourceCharacter uses hands to pinch PronounPossessive's nipples, rubbing them.",
        },
    },
    {
        activity: {
            Name: "揉搓阴环",
            Prerequisite: ["TargetHasItemVulva"],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemLegs"],
        },
        useImage: "Wiggle",
        labelSelf: {
            CN: "揉搓阴环",
            EN: "Rub Nipples",
        },
        dialogSelf: {
            CN: "SourceCharacter颤抖着双腿.",
            EN: "SourceCharacter's legs tremble.",
        },
    },
    {
        activity: {
            Name: "摇晃双腿",
            Prerequisite: [],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemLegs"],
        },
        useImage: "Wiggle",
        labelSelf: {
            CN: "摇晃双腿",
            EN: "Shake Legs",
        },
        dialogSelf: {
            CN: "SourceCharacter摇晃PronounPossessive的双腿.",
            EN: "SourceCharacter shakes own legs.",
        },
    },
    {
        activity: {
            Name: "流出液体",
            Prerequisite: ["TargetHasItemVulva"],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemVulva"],
        },
        useImage: "MoanGagWhimper",
        labelSelf: {
            CN: "流出液体",
            EN: "Liquid Flows",
        },
        dialogSelf: {
            CN: "SourceCharacter股间有液体顺着的大腿流下.",
            EN: "Liquid flows down SourceCharacter's thighs.",
        },
    },
    {
        activity: {
            Name: "失禁",
            Prerequisite: ["TargetHasItemVulva"],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemVulva"],
        },
        useImage: "MoanGagWhimper",
        labelSelf: {
            CN: "失禁",
            EN: "Incontinence",
        },
        dialogSelf: {
            CN: "SourceCharacter的尿液顺着PronounPossessive大腿流下.",
            EN: "SourceCharacter's urine flows down PronounPossessive thighs.",
        },
    },
    {
        activity: {
            Name: "撇眼",
            Prerequisite: [],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemHead"],
        },
        useImage: "Wiggle",
        labelSelf: {
            CN: "撇眼",
            EN: "Roll Eyes",
        },
        dialogSelf: {
            CN: "SourceCharacter撇了TargetCharacter一眼.",
            EN: "SourceCharacter rolls its eyes at TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "跺脚",
            Prerequisite: [],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemBoots"],
        },
        useImage: "Step",
        labelSelf: {
            CN: "跺脚",
            EN: "Stamp Feet",
        },
        dialogSelf: {
            CN: "SourceCharacter不停地跺脚.",
            EN: "SourceCharacter keeps stamping its feet.",
        },
    },
    {
        activity: {
            Name: "撩头发",
            Prerequisite: ["UseArms", "UseHands"],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemHood"],
        },
        useImage: "Caress",
        labelSelf: {
            CN: "撩头发",
            EN: "Toss Hair",
        },
        dialogSelf: {
            CN: "SourceCharacter撩起头发挂在耳边.",
            EN: "SourceCharacter tosses its hair, letting it hang by its ears.",
        },
    },
    {
        activity: {
            Name: "手指插进阴道",
            Prerequisite: ["UseHands", "ZoneNaked", "TargetZoneNaked"],
            MaxProgress: 90,
            Target: ["ItemVulva"],
            TargetSelf: true,
        },
        useImage: "MasturbateHand",
        label: {
            CN: "手指插进阴道",
            EN: "Insert Finger into Vagina",
        },
        dialog: {
            CN: "SourceCharacter手指插进TargetCharacter的阴道内.",
            EN: "SourceCharacter inserts finger into TargetCharacter's vagina.",
        },
        labelSelf: {
            CN: "手指插进阴道",
            EN: "Insert Finger into Vagina",
        },
        dialogSelf: {
            CN: "SourceCharacter手指插进自己的的阴道内.",
            EN: "SourceCharacter inserts finger into own vagina.",
        },
    },
    {
        activity: {
            Name: "拔出自己的手指",
            Prerequisite: ["UseHands", "ZoneNaked", "TargetZoneNaked"],
            MaxProgress: 90,
            Target: ["ItemVulva"],
            TargetSelf: true,
        },
        useImage: "MasturbateHand",
        label: {
            CN: "拔出自己的手指",
            EN: "Remove Finger",
        },
        dialog: {
            CN: "SourceCharacter从TargetCharacter的阴道内拔出自己的手指,手指连着PronounPossessive的爱液.",
            EN: "SourceCharacter removes own finger from TargetCharacter's vagina, the finger coated with PronounPossessive love fluids.",
        },
        labelSelf: {
            CN: "拔出自己的手指",
            EN: "Remove Finger",
        },
        dialogSelf: {
            CN: "SourceCharacter从PronounPossessive的阴道内拔出自己的手指,手指连着自己的爱液.",
            EN: "SourceCharacter removes own finger from PronounPossessive's vagina, the finger coated with SourceCharacter's love fluids.",
        },
    },
    {
        activity: {
            Name: "蠕动手指",
            Prerequisite: ["UseHands", "ZoneNaked", "TargetZoneNaked"],
            MaxProgress: 50,
            Target: ["ItemVulva"],
            TargetSelf: true,
        },
        useImage: "Grope",
        label: {
            CN: "蠕动手指",
            EN: "Wriggle Finger",
        },
        dialog: {
            CN: "SourceCharacter在TargetCharacter的阴道内蠕动手指.",
            EN: "SourceCharacter wriggles a finger inside TargetCharacter's vagina.",
        },
        labelSelf: {
            CN: "蠕动手指",
            EN: "Wriggle Finger",
        },
        dialogSelf: {
            CN: "SourceCharacter在PronounPossessive的阴道内蠕动手指.",
            EN: "SourceCharacter wriggles a finger inside PronounPossessive's vagina.",
        },
    },
    {
        activity: {
            Name: "快速抽插",
            Prerequisite: ["UseHands", "ZoneNaked", "TargetZoneNaked"],
            MaxProgress: 50,
            Target: ["ItemVulva"],
            TargetSelf: true,
        },
        useImage: "Pinch",
        label: {
            CN: "快速抽插",
            EN: "Quickly Thrust",
        },
        dialog: {
            CN: "SourceCharacter的手在TargetCharacter的阴道内快速抽插.",
            EN: "SourceCharacter's hand quickly thrusts in and out of TargetCharacter's vagina, rubbing and kneading.",
        },
        labelSelf: {
            CN: "快速抽插",
            EN: "Quickly Thrust",
        },
        dialogSelf: {
            CN: "SourceCharacter的手在PronounPossessive的阴道内快速抽插.",
            EN: "SourceCharacter's hand quickly thrusts in and out of PronounPossessive's vagina, rubbing and kneading.",
        },
    },
    {
        activity: {
            Name: "钩住阴蒂环",
            Prerequisite: ["UseHands", "TargetHasItemVulvaPiercings"],
            MaxProgress: 50,
            Target: ["ItemVulvaPiercings"],
            TargetSelf: true,
        },
        useImage: "Pinch",
        label: {
            CN: "钩住阴蒂环",
            EN: "Hook Clitoral Piercing",
        },
        dialog: {
            CN: "SourceCharacter钩住TargetCharacter的阴蒂环.",
            EN: "SourceCharacter hooks onto TargetCharacter's clitoral piercing.",
        },
        labelSelf: {
            CN: "钩住阴蒂环",
            EN: "Hook Clitoral Piercing",
        },
        dialogSelf: {
            CN: "SourceCharacter钩住自己的阴蒂环.",
            EN: "SourceCharacter hooks onto own clitoral piercing.",
        },
    },
    {
        activity: {
            Name: "拉扯阴蒂环",
            Prerequisite: ["UseHands", "TargetHasItemVulvaPiercings"],
            MaxProgress: 50,
            Target: ["ItemVulvaPiercings"],
            TargetSelf: true,
        },
        useImage: "Pinch",
        label: {
            CN: "拉扯阴蒂环",
            EN: "Tug Clitoral Piercing",
        },
        dialog: {
            CN: "SourceCharacter拉了一下TargetCharacter的阴蒂环.",
            EN: "SourceCharacter tugs on TargetCharacter's clitoral piercing and then releases it.",
        },
        labelSelf: {
            CN: "拉扯阴蒂环",
            EN: "Tug Clitoral Piercing",
        },
        dialogSelf: {
            CN: "SourceCharacter拉了一下自己的阴蒂环.",
            EN: "SourceCharacter tugs on own clitoral piercing and then releases it.",
        },
    },
    {
        activity: {
            Name: "宠物服爬到脚边",
            Prerequisite: ["NeedPetSuit"],
            MaxProgress: 50,
            Target: ["ItemBoots"],
        },
        useImage: "Wiggle",
        label: {
            CN: "宠物服爬到脚边",
            EN: "Pet Crawls to Feet",
        },
        dialog: {
            CN: "SourceCharacter爬到TargetCharacter脚边.",
            EN: "SourceCharacter's pet crawls to TargetCharacter's feet.",
        },
    },
    {
        activity: {
            Name: "宠物服蹭小腿",
            Prerequisite: ["NeedPetSuit"],
            MaxProgress: 50,
            Target: ["ItemFeet"],
        },
        useImage: "Wiggle",
        label: {
            CN: "宠物服蹭小腿",
            EN: "Pet Rubs Legs",
        },
        dialog: {
            CN: "SourceCharacter蹭TargetCharacter的腿.",
            EN: "SourceCharacter's pet rubs against TargetCharacter's legs.",
        },
    },
    {
        activity: {
            Name: "宠物服蹭大腿",
            Prerequisite: ["NeedPetSuit"],
            MaxProgress: 50,
            Target: ["ItemLegs"],
        },
        useImage: "Wiggle",
        label: {
            CN: "宠物服蹭大腿",
            EN: "Pet Rubs Legs",
        },
        dialog: {
            CN: "SourceCharacter蹭TargetCharacter的腿.",
            EN: "SourceCharacter's pet rubs against TargetCharacter's legs.",
        },
    },
    {
        activity: {
            Name: "宠物服趴下",
            Prerequisite: ["NeedPetSuit"],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemLegs"],
        },
        useImage: "Wiggle",
        labelSelf: {
            CN: "宠物服趴下",
            EN: "Pet Lies Down",
        },
        dialogSelf: {
            CN: "SourceCharacter四肢着地趴在地上.",
            EN: "SourceCharacter's pet lies down on all fours.",
        },
    },
    {
        activity: {
            Name: "宠物服跪立",
            Prerequisite: ["NeedPetSuit"],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemLegs"],
        },
        useImage: "Wiggle",
        labelSelf: {
            CN: "宠物服跪立",
            EN: "Pet Kneels",
        },
        dialogSelf: {
            CN: "SourceCharacter手臂离地跪立.",
            EN: "SourceCharacter's pet kneels with its limbs off the ground.",
        },
    },
    {
        activity: {
            Name: "宠物服扑",
            Prerequisite: ["NeedPetSuit"],
            MaxProgress: 50,
            Target: ["ItemArms"],
        },
        useImage: "Wiggle",
        label: {
            CN: "宠物服扑",
            EN: "Pet Pounces",
        },
        dialog: {
            CN: "SourceCharacter扑到TargetCharacter身上.",
            EN: "SourceCharacter's pet pounces onto TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "猫爪挠手",
            Prerequisite: ["NeedPawMittens"],
            MaxProgress: 50,
            Target: ["ItemHands"],
        },
        useImage: ["ItemHands", "PawMittens"],
        label: {
            CN: "猫爪挠手",
            EN: "Cat Scratches Hand",
        },
        dialog: {
            CN: "SourceCharacter用爪子挠了一下TargetCharacter的手.",
            EN: "SourceCharacter's pet scratches TargetCharacter's hand with its claws.",
        },
    },
    {
        activity: {
            Name: "猫爪挠手臂",
            Prerequisite: ["NeedPawMittens"],
            MaxProgress: 50,
            Target: ["ItemArms"],
        },
        useImage: ["ItemHands", "PawMittens"],
        label: {
            CN: "猫爪挠手臂",
            EN: "Cat Scratches Arm",
        },
        dialog: {
            CN: "SourceCharacter用爪子挠了一下TargetCharacter的手臂.",
            EN: "SourceCharacter's pet scratches TargetCharacter's arm with its claws.",
        },
    },
    {
        activity: {
            Name: "猫爪舔手",
            Prerequisite: ["NeedPawMittens"],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemHands"],
        },
        useImage: ["ItemHands", "PawMittens"],
        labelSelf: {
            CN: "猫爪舔手",
            EN: "Cat Licks Paw",
        },
        dialogSelf: {
            CN: "SourceCharacter舔自己的爪子.",
            EN: "SourceCharacter's pet licks its own paw.",
        },
    },
    {
        activity: {
            Name: "猫爪戳脸",
            Prerequisite: ["NeedPawMittens"],
            MaxProgress: 50,
            Target: ["ItemMouth"],
            TargetSelf: true,
        },
        useImage: ["ItemHands", "PawMittens"],
        label: {
            CN: "猫爪戳脸",
            EN: "Cat Pokes Face",
        },
        dialog: {
            CN: "SourceCharacter用爪子戳了戳TargetCharacter的脸.",
            EN: "SourceCharacter's pet pokes TargetCharacter's face with its claws.",
        },
        labelSelf: {
            CN: "猫爪戳脸",
            EN: "Cat Pokes Face",
        },
        dialogSelf: {
            CN: "SourceCharacter用爪子戳了戳自己的脸.",
            EN: "SourceCharacter's pet pokes its own face with its claws.",
        },
    },
    {
        activity: {
            Name: "猫爪戳鼻子",
            Prerequisite: ["NeedPawMittens"],
            MaxProgress: 50,
            Target: ["ItemNose"],
            TargetSelf: true,
        },
        useImage: ["ItemHands", "PawMittens"],
        label: {
            CN: "猫爪戳鼻子",
            EN: "Cat Pokes Nose",
        },
        dialog: {
            CN: "SourceCharacter用爪子戳了戳TargetCharacter的鼻子.",
            EN: "SourceCharacter's pet pokes TargetCharacter's nose with its claws.",
        },
        labelSelf: {
            CN: "猫爪戳鼻子",
            EN: "Cat Pokes Nose",
        },
        dialogSelf: {
            CN: "SourceCharacter用爪子戳了戳自己的鼻子.",
            EN: "SourceCharacter's pet pokes its own nose with its claws.",
        },
    },
    {
        activity: {
            Name: "猫爪揉脸",
            Prerequisite: ["NeedPawMittens"],
            MaxProgress: 50,
            Target: ["ItemMouth"],
            TargetSelf: true,
        },
        useImage: ["ItemHands", "PawMittens"],
        label: {
            CN: "猫爪揉脸",
            EN: "Cat Rubs Face",
        },
        dialog: {
            CN: "SourceCharacter用爪子揉了揉TargetCharacter的脸.",
            EN: "SourceCharacter uses its claws to rub TargetCharacter's face.",
        },
        labelSelf: {
            CN: "猫爪揉脸",
            EN: "Cat Rubs Face",
        },
        dialogSelf: {
            CN: "SourceCharacter用爪子揉了揉自己的脸.",
            EN: "SourceCharacter uses its claws to rub its own face.",
        },
    },
    {
        activity: {
            Name: "猫爪揉鼻子",
            Prerequisite: ["NeedPawMittens"],
            MaxProgress: 50,
            Target: ["ItemNose"],
            TargetSelf: true,
        },
        useImage: ["ItemHands", "PawMittens"],
        label: {
            CN: "猫爪揉鼻子",
            EN: "Cat Rubs Nose",
        },
        dialog: {
            CN: "SourceCharacter用爪子揉了揉TargetCharacter的鼻子.",
            EN: "SourceCharacter uses its claws to rub TargetCharacter's nose.",
        },
        labelSelf: {
            CN: "猫爪揉鼻子",
            EN: "Cat Rubs Nose",
        },
        dialogSelf: {
            CN: "SourceCharacter用爪子揉了揉自己的鼻子.",
            EN: "SourceCharacter uses its claws to rub its own nose.",
        },
    },
    {
        activity: {
            Name: "撞笼子",
            Prerequisite: ["NeedKennel"],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemArms"],
        },
        useImage: ["ItemDevices", "PawMittens"],
        labelSelf: {
            CN: "撞笼子",
            EN: "Bump into Cage",
        },
        dialogSelf: {
            CN: "SourceCharacter用身体撞击笼子.",
            EN: "SourceCharacter bumps its body into the cage.",
        },
    },
    {
        activity: {
            Name: "咬笼子",
            Prerequisite: ["NeedKennel"],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemMouth"],
        },
        useImage: ["ItemDevices", "PawMittens"],
        labelSelf: {
            CN: "咬笼子",
            EN: "Bite Cage",
        },
        dialogSelf: {
            CN: "SourceCharacter用牙齿咬笼子.",
            EN: "SourceCharacter bites the cage.",
        },
    },
    {
        activity: {
            Name: "摇晃笼子",
            Prerequisite: ["NeedKennel"],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemArms"],
        },
        useImage: ["ItemDevices", "PawMittens"],
        labelSelf: {
            CN: "摇晃笼子",
            EN: "Shake Cage",
        },
        dialogSelf: {
            CN: "SourceCharacter摇晃笼子的门.",
            EN: "SourceCharacter shakes the door of the cage.",
        },
    },
    {
        activity: {
            Name: "泡沫剑架在脖子上",
            Prerequisite: ["UseHands", "UseArms", "NeedSword"],
            MaxProgress: 50,
            Target: ["ItemNeck"],
            TargetSelf: true,
        },
        useImage: ["ItemHandheld", "Sword"],
        label: {
            CN: "泡沫剑架在脖子上",
            EN: "Foam Sword Rests on the Neck",
        },
        dialog: {
            CN: "SourceCharacter把泡沫剑架在TargetCharacter的脖子上",
            EN: "SourceCharacter Places the Foam Sword on TargetCharacter's Neck",
        },
        labelSelf: {
            CN: "泡沫剑架在脖子上",
            EN: "Foam Sword Rests on the Neck",
        },
        dialogSelf: {
            CN: "SourceCharacter把泡沫剑架在自己的脖子上.",
            EN: "SourceCharacter Places the Foam Sword on own Neck.",
        },
    },
    {
        activity: {
            Name: "泡沫剑拍脸",
            Prerequisite: ["UseHands", "UseArms", "NeedSword"],
            MaxProgress: 50,
            Target: ["ItemMouth"],
        },
        useImage: ["ItemHandheld", "Sword"],
        label: {
            CN: "泡沫剑拍脸",
            EN: "Foam Sword Hits the Face",
        },
        dialog: {
            CN: "SourceCharacter用泡沫剑轻轻拍了拍一下TargetCharacter的脸",
            EN: "SourceCharacter Gently Hits TargetCharacter's Face with a Foam Sword",
        },
    },
    {
        activity: {
            Name: "舔触手",
            Prerequisite: ["TargetHasTentacles"],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemMouth"],
        },
        useImage: ["TailStraps", "Tentacles"],
        labelSelf: {
            CN: "舔触手",
            EN: "Lick Tentacles",
        },
        dialogSelf: {
            CN: "SourceCharacter舔PronounPossessive的触手.",
            EN: "SourceCharacter Licks PronounPossessive Tentacles.",
        },
    },
    {
        activity: {
            Name: "触手摸头",
            Prerequisite: ["NeedTentacles"],
            MaxProgress: 50,
            Target: ["ItemHead"],
            TargetSelf: true,
        },
        useImage: ["TailStraps", "Tentacles"],
        label: {
            CN: "触手摸头",
            EN: "Tentacles Pet Head",
        },
        dialog: {
            CN: "SourceCharacter用触手摸了摸TargetCharacter的头.",
            EN: "SourceCharacter Pet TargetCharacter's Head with Tentacles.",
        },
        labelSelf: {
            CN: "触手摸头",
            EN: "Tentacles Pet Head",
        },
        dialogSelf: {
            CN: "SourceCharacter用触手摸了摸自己的头.",
            EN: "SourceCharacter Pet own Head with Tentacles.",
        },
    },
    {
        activity: {
            Name: "触手戳鼻子",
            Prerequisite: ["NeedTentacles"],
            MaxProgress: 50,
            Target: ["ItemNose"],
            TargetSelf: true,
        },
        useImage: ["TailStraps", "Tentacles"],
        label: {
            CN: "触手戳鼻子",
            EN: "Tentacles Poke Nose",
        },
        dialog: {
            CN: "SourceCharacter用触手戳了戳TargetCharacter的鼻子.",
            EN: "SourceCharacter Pokes TargetCharacter's Nose with Tentacles.",
        },
        labelSelf: {
            CN: "触手戳鼻子",
            EN: "Tentacles Poke Nose",
        },
        dialogSelf: {
            CN: "SourceCharacter用触手戳了戳自己的鼻子.",
            EN: "SourceCharacter Pokes own Nose with Tentacles.",
        },
    },
    {
        activity: {
            Name: "触手戳脸",
            Prerequisite: ["NeedTentacles"],
            MaxProgress: 50,
            Target: ["ItemMouth"],
            TargetSelf: true,
        },
        useImage: ["TailStraps", "Tentacles"],
        label: {
            CN: "触手戳脸",
            EN: "Tentacles Poke Face",
        },
        dialog: {
            CN: "SourceCharacter用触手戳了戳TargetCharacter的脸.",
            EN: "SourceCharacter Pokes TargetCharacter's Face with Tentacles.",
        },
        labelSelf: {
            CN: "触手戳脸",
            EN: "Tentacles Poke Face",
        },
        dialogSelf: {
            CN: "SourceCharacter用触手戳了戳自己的脸.",
            EN: "SourceCharacter Pokes own Face with Tentacles.",
        },
    },
    {
        activity: {
            Name: "触手揉鼻子",
            Prerequisite: ["NeedTentacles"],
            MaxProgress: 50,
            Target: ["ItemNose"],
            TargetSelf: true,
        },
        useImage: ["TailStraps", "Tentacles"],
        label: {
            CN: "触手揉鼻子",
            EN: "Tentacles Rub Nose",
        },
        dialog: {
            CN: "SourceCharacter用触手揉了揉TargetCharacter的鼻子.",
            EN: "SourceCharacter Rubs TargetCharacter's Nose with Tentacles.",
        },
        labelSelf: {
            CN: "触手揉鼻子",
            EN: "Tentacles Rub Nose",
        },
        dialogSelf: {
            CN: "SourceCharacter用触手揉了揉自己的鼻子.",
            EN: "SourceCharacter Rubs own Nose with Tentacles.",
        },
    },
    {
        activity: {
            Name: "触手掀裙子",
            Prerequisite: ["NeedTentacles"],
            MaxProgress: 50,
            Target: ["ItemButt"],
            TargetSelf: true,
        },
        useImage: ["TailStraps", "Tentacles"],
        label: {
            CN: "触手掀裙子",
        },
        dialog: {
            CN: "SourceCharacter用触手掀开TargetCharacter的裙子.",
        },
        labelSelf: {
            CN: "触手掀裙子",
        },
        dialogSelf: {
            CN: "SourceCharacter用触手掀开PronounPossessive的裙子.",
        },
    },
    {
        activity: {
            Name: "触手揉脸",
            Prerequisite: ["NeedTentacles"],
            MaxProgress: 50,
            Target: ["ItemMouth"],
            TargetSelf: true,
        },
        useImage: ["TailStraps", "Tentacles"],
        label: {
            CN: "触手揉脸",
            EN: "Tentacles Rub Face",
        },
        dialog: {
            CN: "SourceCharacter用触手揉了揉TargetCharacter的脸.",
            EN: "SourceCharacter用触手揉了揉TargetCharacter的脸.",
        },
        labelSelf: {
            CN: "触手揉脸",
            EN: "Tentacles Rub Face",
        },
        dialogSelf: {
            CN: "SourceCharacter用触手揉了揉自己的脸.",
            EN: "SourceCharacter Rubs own Face with Tentacles.",
        },
    },
    {
        activity: {
            Name: "鱼尾揉脸",
            Prerequisite: ["NeedSuitLower鱼鱼尾_Luzi"],
            MaxProgress: 50,
            Target: ["ItemMouth"],
            TargetSelf: true,
        },
        useImage: ["ItemLegs", "MermaidTail"],
        label: {
            CN: "鱼尾揉脸",
            EN: "Fish Tail Rubs Face",
        },
        dialog: {
            CN: "SourceCharacter用鱼尾揉了揉TargetCharacter的脸.",
            EN: "SourceCharacter用鱼尾揉了揉TargetCharacter的脸.",
        },
        labelSelf: {
            CN: "鱼尾揉脸",
            EN: "Fish Tail Rubs Face",
        },
        dialogSelf: {
            CN: "SourceCharacter用鱼尾揉了揉PronounPossessive自己的脸.",
            EN: "SourceCharacter用鱼尾揉了揉自己的脸.",
        },
    },
    {
        activity: {
            Name: "鱼尾戳脸",
            Prerequisite: ["NeedSuitLower鱼鱼尾_Luzi"],
            MaxProgress: 50,
            Target: ["ItemMouth"],
            TargetSelf: true,
        },
        useImage: ["ItemLegs", "MermaidTail"],
        label: {
            CN: "鱼尾戳脸",
            EN: "Fish Tail Pokes Face",
        },
        dialog: {
            CN: "SourceCharacter用鱼尾戳了戳TargetCharacter的脸.",
            EN: "SourceCharacter用鱼尾戳了戳TargetCharacter的脸.",
        },
        labelSelf: {
            CN: "鱼尾戳脸",
            EN: "Fish Tail Pokes Face",
        },
        dialogSelf: {
            CN: "SourceCharacter用鱼尾戳了戳PronounPossessive自己的脸.",
            EN: "SourceCharacter用鱼尾戳了戳自己的脸.",
        },
    },
    {
        activity: {
            Name: "鱼尾抚脸",
            Prerequisite: ["NeedSuitLower鱼鱼尾_Luzi"],
            MaxProgress: 50,
            Target: ["ItemMouth"],
            TargetSelf: true,
        },
        useImage: ["ItemLegs", "MermaidTail"],
        label: {
            CN: "鱼尾抚脸",
            EN: "Fish Tail Caresses Face",
        },
        dialog: {
            CN: "SourceCharacter用鱼尾轻抚TargetCharacter的脸颊.",
            EN: "SourceCharacter用鱼尾轻抚TargetCharacter的脸颊.",
        },
        labelSelf: {
            CN: "鱼尾抚脸",
            EN: "Fish Tail Caresses Face",
        },
        dialogSelf: {
            CN: "SourceCharacter用鱼尾轻抚PronounPossessive自己的脸颊.",
            EN: "SourceCharacter用鱼尾轻抚自己的脸颊.",
        },
    },
    {
        activity: {
            Name: "鱼尾担膝盖",
            Prerequisite: ["NeedSuitLower鱼鱼尾_Luzi", "TargetKneeling"],
            MaxProgress: 50,
            Target: ["ItemLegs"],
        },
        useImage: ["ItemLegs", "MermaidTail"],
        label: {
            CN: "鱼尾担膝盖",
            EN: "Fish Tail Rests on Knee",
        },
        dialog: {
            CN: "SourceCharacter将鱼尾担在了TargetCharacter的膝盖上.",
            EN: "SourceCharacter将鱼尾担在了TargetCharacter的膝盖上.",
        },
    },
    {
        activity: {
            Name: "鱼尾揉乳房",
            Prerequisite: ["NeedSuitLower鱼鱼尾_Luzi"],
            MaxProgress: 50,
            Target: ["ItemBreast"],
            TargetSelf: true,
        },
        useImage: ["ItemLegs", "MermaidTail"],
        label: {
            CN: "鱼尾揉乳房",
            EN: "Fish Tail Rubs Chest",
        },
        dialog: {
            CN: "SourceCharacter用鱼尾揉了揉TargetCharacter的乳房.",
            EN: "SourceCharacter用鱼尾揉了揉TargetCharacter的乳房.",
        },
        labelSelf: {
            CN: "鱼尾揉乳房",
            EN: "Fish Tail Rubs Chest",
        },
        dialogSelf: {
            CN: "SourceCharacter用鱼尾揉了揉PronounPossessive自己的乳房.",
            EN: "SourceCharacter用鱼尾揉了揉自己的乳房.",
        },
    },
    {
        activity: {
            Name: "鱼尾扇风",
            Prerequisite: ["NeedSuitLower鱼鱼尾_Luzi"],
            MaxProgress: 50,
            Target: ["ItemMouth"],
            TargetSelf: true,
        },
        useImage: ["ItemLegs", "MermaidTail"],
        label: {
            CN: "鱼尾扇风",
            EN: "Fish Tail Fans",
        },
        dialog: {
            CN: "SourceCharacter用鱼尾给TargetCharacter的脸扇了扇风.",
            EN: "SourceCharacter用鱼尾给TargetCharacter的脸扇了扇风.",
        },
        labelSelf: {
            CN: "鱼尾扇风",
            EN: "Fish Tail Fans",
        },
        dialogSelf: {
            CN: "SourceCharacter用鱼尾给自己扇了扇风.",
            EN: "SourceCharacter用鱼尾给自己扇了扇风.",
        },
    },
    {
        activity: {
            Name: "鱼尾戳乳头",
            Prerequisite: ["NeedSuitLower鱼鱼尾_Luzi"],
            MaxProgress: 50,
            Target: ["ItemNipples"],
            TargetSelf: true,
        },
        useImage: ["ItemLegs", "MermaidTail"],
        label: {
            CN: "鱼尾戳乳头",
            EN: "Fish Tail Pokes Nipple",
        },
        dialog: {
            CN: "SourceCharacter用鱼尾戳了戳TargetCharacter的乳头.",
            EN: "SourceCharacter用鱼尾戳了戳TargetCharacter的乳头.",
        },
        labelSelf: {
            CN: "鱼尾戳乳头",
            EN: "Fish Tail Pokes Nipple",
        },
        dialogSelf: {
            CN: "SourceCharacter用鱼尾戳了戳自己的乳头.",
            EN: "SourceCharacter用鱼尾戳了戳自己的乳头.",
        },
    },
    {
        activity: {
            Name: "鱼尾碰手",
            Prerequisite: ["NeedSuitLower鱼鱼尾_Luzi"],
            MaxProgress: 50,
            Target: ["ItemHands"],
        },
        useImage: ["ItemLegs", "MermaidTail"],
        label: {
            CN: "鱼尾碰手",
            EN: "Fish Tail Touches Hand",
        },
        dialog: {
            CN: "SourceCharacter将鱼尾踝搭在了TargetCharacter的手心上.",
            EN: "SourceCharacter将鱼尾踝搭在了TargetCharacter的手心上.",
        },
    },
    {
        activity: {
            Name: "鱼尾抚弄大腿",
            Prerequisite: ["NeedSuitLower鱼鱼尾_Luzi"],
            MaxProgress: 50,
            Target: ["ItemLegs"],
        },
        useImage: ["ItemLegs", "MermaidTail"],
        label: {
            CN: "鱼尾抚弄大腿",
            EN: "Fish Tail Strokes Thigh",
        },
        dialog: {
            CN: "SourceCharacter用鱼尾抚弄TargetCharacter的大腿.",
            EN: "SourceCharacter用鱼尾抚弄TargetCharacter的大腿.",
        },
    },
];

export default function () {
    ActivityManager.addCustomActivities(activities);
}
