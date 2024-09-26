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
            RU: "Наклонить Голову",
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
            RU: "Посмотреть Вокруг",
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
            EN: "Take a look",
            RU: "Смерить Взглядом",
        },
        dialog: {
            CN: "SourceCharacter仔细打量着TargetCharacter.",
            EN: "SourceCharacter glance at TargetCharacter.",
            RU: "SourceCharacter оглядывает TargetCharacter с головы до пяток.",
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
            RU: "Закрыть Глаза",
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
            RU: "Уставиться в Пустоту",
        },
        dialogSelf: {
            CN: "SourceCharacter呆滞地看着前方.",
            EN: "SourceCharacter stares blankly ahead.",
            RU: "SourceCharacter смотрит вперед с остекленевшим взлядом.",
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
            RU: "Прослезиться",
        },
        dialogSelf: {
            CN: "SourceCharacter眼角泛着泪光.",
            EN: "SourceCharacter's eyes are watery.",
            RU: "Глаза SourceCharacter намокли.",
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
            RU: "Плакать",
        },
        dialogSelf: {
            CN: "SourceCharacter的眼泪从眼角流下.",
            EN: "SourceCharacter's tears fall from the corners of her eyes.",
            RU: "Слезы текут из уголков глаз SourceCharacter.",
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
            RU: "Открыть Рот",
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
            RU: "Сглотнуть Слюну",
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
            RU: "Пусктить Слюни",
        },
        dialogSelf: {
            CN: "SourceCharacter的口水顺着嘴角流下.",
            EN: "SourceCharacter drools down the corner of the mouth.",
            RU: "SourceCharacter пускает слюни из уголков рта.",
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
            RU: "Тихо Вздохнуть",
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
            RU: "Бормотать",
        },
        dialogSelf: {
            CN: "SourceCharacter 嘟囔着.",
            EN: "SourceCharacter muttered.",
            RU: "SourceCharacter недовольно бормочет себе под нос.",
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
            RU: "Облизать Руку",
        },
        dialog: {
            CN: "SourceCharacter舔TargetCharacter的手.",
            EN: "SourceCharacter licks TargetCharacter's hand.",
            RU: "SourceCharacter облизывает руку TargetCharacter.",
        },
        labelSelf: {
            CN: "舔手",
            EN: "Lick Hand",
            RU: "Облизать Руку",
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
            RU: "Облизать Пальцы",
        },
        dialog: {
            CN: "SourceCharacter舔TargetCharacter的手指.",
            EN: "SourceCharacter licks TargetCharacter's fingers.",
            RU: "SourceCharacter облизывает пальцы TargetCharacter."
        },
        labelSelf: {
            CN: "舔手指",
            EN: "Lick Fingers",
            RU: "Облизать Пальцы",
        },
        dialogSelf: {
            CN: "SourceCharacter舔PronounPossessive自己的手指.",
            EN: "SourceCharacter licks PronounPossessive own fingers.",
            RU: "SourceCharacter облизывает свои пальцы.",
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
            RU: "Пососать Пальцы",
        },
        dialog: {
            CN: "SourceCharacter吮吸TargetCharacter的手指.",
            EN: "SourceCharacter sucks on TargetCharacter's fingers.",
            RU: "SourceCharacter посасывает пальцы TargetCharacter.",
        },
        labelSelf: {
            CN: "吮吸手指",
            EN: "Suck on Fingers",
            RU: "Пососать Пальцы",
        },
        dialogSelf: {
            CN: "SourceCharacter吮吸PronounPossessive的手指.",
            EN: "SourceCharacter sucks on PronounPossessive own fingers.",
            RU: "SourceCharacter сосет свои пальцы.",
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
            RU: "Облизать Лицо",
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
            RU: "Лизать Ноги",
        },
        dialog: {
            CN: "SourceCharacter 舔 TargetCharacter 的脚.",
            EN: "SourceCharacter licks TargetCharacter's feet.",
            RU: "SourceCharacter облизывает ноги TargetCharacter."
        },
        labelSelf: {
            CN: "舔脚",
            EN: "Lick Feet",
            RU: "Лизать Ноги",
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
            RU: "Понюхать Руку",
        },
        dialog: {
            CN: "SourceCharacter 用鼻子嗅了嗅 TargetCharacter 的手.",
            EN: "SourceCharacter sniffs TargetCharacter's hand.",
            RU: "SourceCharacter нюхает руку TargetCharacter.",
        },
        labelSelf: {
            CN: "嗅手",
            EN: "Sniff",
            RU: "Понюхать Руку",
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
            RU: "Ползти к Ногам",
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
            RU: "Тереться об Ляжку",
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
            RU: "Тереться об Голень",
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
			RU: "Встать на Цыпочки",
        },
        dialogSelf: {
            CN: "SourceCharacter踮起PronounPossessive的双脚.",
            EN: "SourceCharacter stands on tiptoes.",
			RU: "SourceCharacter встает на цыпочки.",
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
			RU: "Покачиваться",
        },
        dialogSelf: {
            CN: "SourceCharacter摇晃PronounPossessive的脚踝.",
            EN: "SourceCharacter wiggles PronounPossessive ankles.",
			RU: "SourceCharacter покачивается стоя на ногах.",
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
			RU: "Приподнять Ногу",
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
			RU: "Раздвинуть Ноги",
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
			RU: "Сжать Ляжки",
        },
        dialogSelf: {
            CN: "SourceCharacter夹紧了自己的腿.",
			EN: "SourceCharacter clamps PronounPossessive own thighs.",
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
			RU: "Ногу на Подбородок",
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
			RU: "Тыкнуть в Лицо",
        },
        dialog: {
            CN: "SourceCharacter戳了戳TargetCharacter的脸.",
            EN: "SourceCharacter pokes TargetCharacter's face.",
			RU: "SourceCharacter тыкает в лицо TargetCharacter.",
        },
        labelSelf: {
            CN: "戳脸",
            EN: "Poke Face",
			RU: "Тыкнуть в Лицо",
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
			RU: "Ущипнуть за Лицо",
        },
        dialog: {
            CN: "SourceCharacter捏了捏TargetCharacter的脸.",
            EN: "SourceCharacter pinches TargetCharacter's face.",
			RU: "SourceCharacter щипает TargetCharacter за лицо.",
        },
        labelSelf: {
            CN: "捏脸",
            EN: "Pinch Face",
			RU: "Ущипнуть за Лицо",
        },
        dialogSelf: {
            CN: "SourceCharacter捏了捏自己的脸.",
            EN: "SourceCharacter pinches own face.",
			RU: "SourceCharacter щипает свое лицо.",
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
			RU: "Тыкнуть в Руку",
        },
        dialog: {
            CN: "SourceCharacter戳了戳TargetCharacter的手臂.",
            EN: "SourceCharacter pokes TargetCharacter's arm.",
			RU: "SourceCharacter тыкает TargetCharacter в руку.",
        },
        labelSelf: {
            CN: "戳手臂",
            EN: "Poke Arm",
			RU: "Тыкнуть в Руку",
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
			RU: "Потереть Лицо",
        },
        dialog: {
            CN: "SourceCharacter揉了揉TargetCharacter的脸.",
            EN: "SourceCharacter rubs TargetCharacter's face.",
			RU: "SourceCharacter трет лицо TargetCharacter.",
        },
        labelSelf: {
            CN: "揉脸",
            EN: "Rub Face",
			RU: "Потереть Лицо",
			
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
			RU: "Трясти за Плечи",
        },
        dialog: {
            CN: "SourceCharacter摇晃TargetCharacter的手臂.",
            EN: "SourceCharacter shakes TargetCharacter's arms.",
			RU: "SourceCharacter трясет TargetCharacter за плечи .",
        },
        labelSelf: {
            CN: "摇晃手臂",
            EN: "Shake Arms",
			RU: "Пожать Плечами",
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
			RU: "Легонько Толкнуть",
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
			RU: "Приподнять Ступню",
        },
        dialog: {
            CN: "SourceCharacter托起TargetCharacter的脚.",
            EN: "SourceCharacter lifts TargetCharacter's foot.",
			RU: "SourceCharacter приподнимает ступню TargetCharacter",
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
			RU: "Вращать Кистями",
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
			RU: "Почесать Голову"
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
			RU: "Закрыть Уши",
        },
        dialog: {
            CN: "SourceCharacter用手盖住了TargetCharacter的耳朵.",
			EN: "SourceCharacter covers TargetCharacter's ears with hands.",
			RU: "SourceCharacter прикрывает уши TargetCharacter руками.",
        },
        labelSelf: {
            CN: "盖住耳朵",
            EN: "Cover Ears",
			RU: "Закрыть Уши",
        },
        dialogSelf: {
            CN: "SourceCharacter用手盖住了自己的耳朵.",
			EN: "SourceCharacter covers own ears with hands.",
			RU: "SourceCharacter прикрывает свои уши руками.",
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
			RU: "Прикрыть Глазки",
        },
        dialog: {
            CN: "SourceCharacter用手遮住了TargetCharacter的眼睛.",
            EN: "SourceCharacter covers TargetCharacter's eyes with hands.",
			RU: "SourceCharacter прикрывает глазки TargetCharacter своими руками.",
        },
        labelSelf: {
            CN: "遮住眼睛",
            EN: "Cover Eyes",
			RU: "Прикрыть Глазки",
        },
        dialogSelf: {
            CN: "SourceCharacter用手遮住了自己的眼睛.",
            EN: "SourceCharacter covers PronounPossessive own eyes with hands.",
			RU: "SourceCharacter прикрывает свои глазки руками.",
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
			RU: "Прикрыть Голову",
        },
        dialog: {
            CN: "SourceCharacter捂住TargetCharacter的头.",
            EN: "SourceCharacter covers TargetCharacter's head with hands.",
			RU: "SourceCharacter закрывает голову TargetCharacter руками.",
        },
        labelSelf: {
            CN: "捂住头",
            EN: "Cover Head",
			RU: "Прикрыть Голову",
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
			RU: "Прикрыть Промежность",
        },
        dialog: {
            CN: "SourceCharacter捂住TargetCharacter的下体.",
            EN: "SourceCharacter covers TargetCharacter's groin with hands.",
			RU: "SourceCharacter прикрывает промежность TargetCharacter своими руками.",
        },
        labelSelf: {
            CN: "捂住下体",
            EN: "Cover Groin",
			RU: "Прикрыть Промежность",
        },
        dialogSelf: {
            CN: "SourceCharacter捂住自己的下体.",
            EN: "SourceCharacter covers own groin with hands.",
			RU: "SourceCharacter прикрывает свою промежность руками.",
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
			RU: "Приподнять Юбку",
        },
        dialog: {
            CN: "SourceCharacter掀开TargetCharacter的裙子.",
            EN: "SourceCharacter lifts TargetCharacter's skirt.",
			RU: "SourceCharacter приподнимает юбку TargetCharacter.",
        },
        labelSelf: {
            CN: "掀开裙子",
            EN: "Lift Skirt",
			RU: "Приподнять Юбку",
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
			RU: "Помахать Рукой",
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
			RU: "Протянуть Руку",
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
			RU: "Прикрыть Грудь",
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
			RU: "Взять за Подбородок",
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
			RU: "Потянуть за Поводок",
        },
        dialog: {
            CN: "SourceCharacter拽TargetCharacter的链子.",
            EN: "SourceCharacter pulls TargetCharacter's chain.",
			RU: "SourceCharacter тянет TargetCharacter за поводок.",
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
			RU: "Поставить Щелбан",
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
			RU: "Щелчек по Клитору",
        },
        dialog: {
            CN: "SourceCharacter弹了一下TargetCharacter的阴蒂.",
            EN: "SourceCharacter flicks TargetCharacter's clitoris.",
			RU: "SourceCharacter щелкает TargetCharacter по клитору.",
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
			RU: "Обнять Ноги",
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
			RU: "Потянуть за Одежду",
        },
        dialog: {
            CN: "SourceCharacter用手拉扯TargetCharacter的衣角.",
            EN: "SourceCharacter tugs at TargetCharacter's clothes.",
			RU: "SourceCharacter тянет TargetCharacter за одежду.",
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
			RU: "Ударить по Голове",
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
			RU: "Поднять Хвост",
        },
        dialogSelf: {
            CN: "SourceCharacter的尾巴竖了起来.",
            EN: "SourceCharacter raises PronounPossessive tail.",
			RU: "SourceCharacter поднимает свой хвост.",
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
			RU: "Облизать Хвост",
        },
        dialog: {
            CN: "SourceCharacter舔TargetCharacter的尾巴.",
            EN: "SourceCharacter licks TargetCharacter's tail.",
			RU: "SourceCharacter облизывает хвост TargetCharacter.",
        },
        labelSelf: {
            CN: "舔尾巴",
            EN: "Lick Tail",
			RU: "Вылизать Хвост",
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
			RU: "Нежно Погладить Хвостик",
        },
        dialog: {
            CN: "SourceCharacter轻抚TargetCharacter的尾巴.",
            EN: "SourceCharacter gently strokes TargetCharacter's tail.",
			RU: "SourceCharacter нежно гладит TargetCharacter за хвостик.",
        },
        labelSelf: {
            CN: "轻抚尾巴",
            EN: "Gently Stroke Tail",
			RU: "Нежно Подрочить Хвостик",
        },
        dialogSelf: {
            CN: "SourceCharacter轻抚PronounPossessive的尾巴.",
            EN: "SourceCharacter gently strokes PronounPossessive's tail.",
			RU: "SourceCharacter нежно дрочит свой хвостик.",
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
			RU: "Взять Хвост в Рот",
        },
        dialog: {
            CN: "SourceCharacter叼起TargetCharacter的尾巴.",
            EN: "SourceCharacter holds TargetCharacter's tail in mouth.",
			RU: "SourceCharacter сует хвост TargetCharacter себе в рот.",
        },
        labelSelf: {
            CN: "尾巴叼在嘴里",
            EN: "Hold Tail in Mouth",
			RU: "Взять Хвост в Рот",
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
			RU: "Поднять Булочки",
        },
        dialogSelf: {
            CN: "SourceCharacter弯腰抬起PronounPossessive的屁股.",
            EN: "SourceCharacter bends over, lifting PronounPossessive buttocks.",
			RU: "SourceCharacter наклоняется, приподнимая свои ягодицы.",
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
			RU: "Взмахнуть Крыльями",
        },
        dialogSelf: {
            CN: "SourceCharacter扇动PronounPossessive的翅膀.",
            EN: "SourceCharacter flaps PronounPossessive wings.",
			RU: "SourceCharacter взмахивает своими крыльями.",
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
			RU: "Подбородок на Плечо.",
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
			RU: "Руку на Плечо",
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
			RU: "Приобнять за Талию",
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
			RU: "Руки на Бедра",
        },
        dialogSelf: {
            CN: "SourceCharacter双手叉在腰上.",
            EN: "SourceCharacter puts PronounPossessive hands on PronounPossessive hips.",
			RU: "SourceCharacter кладет руки на бедра.",
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
			RU: "Дрожать",
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
			RU: "Подрагивать Телом",
        },
        dialogSelf: {
            CN: "SourceCharacter身体抽搐着.",
            EN: "SourceCharacter's body twitches.",
			RU: "SourceCharacter подрагивает всем телом.",
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
			RU: "Приподнять Грудь",
        },
        dialog: {
            CN: "SourceCharacter托起TargetCharacter的双乳.",
            EN: "SourceCharacter lifts TargetCharacter's breasts.",
			RU: "SourceCharacter приподнимает грудь TargetCharacter.",
        },
        labelSelf: {
            CN: "托起乳房",
            EN: "Lift Breasts",
			RU: "Приподнять Грудь",
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
			RU: "Поиграть с Сосками"
        },
        dialog: {
            CN: "SourceCharacter揉搓TargetCharacter的乳头.",
            EN: "SourceCharacter uses hands to pinch TargetCharacter's nipples, rubbing them.",
			RU: "SourceCharacter вытягивает соски TargetCharacter и массирует их.",
        },
        labelSelf: {
            CN: "揉搓乳头",
            EN: "Rub Nipples",
			RU: "Поиграть с Сосками"
        },
        dialogSelf: {
            CN: "SourceCharacter揉搓PronounPossessive的乳头.",
            EN: "SourceCharacter uses hands to pinch PronounPossessive's nipples, rubbing them.",
			RU: "SourceCharacter оттягивает свои соски и массирует их.",
        },
    },
    {
        activity: {
            Name: "双腿颤抖",
            Prerequisite: ["TargetHasItemVulva"],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemLegs"],
        },
        useImage: "Wiggle",
        labelSelf: {
            CN: "双腿颤抖",
            EN: "Shaking legs",
			RU: "Ноги Дрожат",
        },
        dialogSelf: {
            CN: "SourceCharacter颤抖着双腿.",
            EN: "SourceCharacter's legs tremble.",
			RU: "Ноги SourceCharacter трясутся от страха.",
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
			RU: "Трясти Ногами",
        },
        dialogSelf: {
            CN: "SourceCharacter摇晃PronounPossessive的双腿.",
            EN: "SourceCharacter shakes own legs.",
			RU: "SourceCharacter трясет своими ногами.",
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
			RU: "Потечь",
        },
        dialogSelf: {
            CN: "SourceCharacter股间有液体顺着的大腿流下.",
            EN: "Liquid flows down SourceCharacter's thighs.",
			RU: "Жидкость стекает по ляжкам SourceCharacter.",
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
			RU: "Недержание",
        },
        dialogSelf: {
            CN: "SourceCharacter的尿液顺着PronounPossessive大腿流下.",
            EN: "SourceCharacter's urine flows down PronounPossessive thighs.",
			RU: "SourceCharacter не выдерживает и писается, обтекая мочой на ногах.",
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
			RU: "Закатить Глаза.",
        },
        dialogSelf: {
            CN: "SourceCharacter撇了TargetCharacter一眼.",
            EN: "SourceCharacter rolls its eyes at TargetCharacter.",
			RU: "SourceCharacter закатывает глаза смотря на TargetCharacter.",
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
			RU: "Топать",
        },
        dialogSelf: {
            CN: "SourceCharacter不停地跺脚.",
            EN: "SourceCharacter keeps stamping PronounPossessive feet.",
			RU: "SourceCharacter недовольно топает ногами.",
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
			RU: "Поправить Волосы",
        },
        dialogSelf: {
            CN: "SourceCharacter撩起头发挂在耳边.",
            EN: "SourceCharacter tosses PronounPossessive hair, letting it hang behind PronounPossessive ears.",
            RU: "SourceCharacter поправляет волосы, заводя их за ухо.",
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
			RU: "Вставить Палец в Вагину",
        },
        dialog: {
            CN: "SourceCharacter手指插进TargetCharacter的阴道内.",
            EN: "SourceCharacter inserts finger into TargetCharacter's vagina.",
			RU: "SourceCharacter вставляет палец в вагину TargetCharacter.",
        },
        labelSelf: {
            CN: "手指插进阴道",
            EN: "Insert Finger into Vagina",
			RU: "Вставить Палец в Вагину",
        },
        dialogSelf: {
            CN: "SourceCharacter手指插进自己的的阴道内.",
            EN: "SourceCharacter inserts finger into own vagina.",
			RU: "SourceCharacter вставляет палец в свою вагину.",
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
			RU: "Вытащить Палец",
        },
        dialog: {
            CN: "SourceCharacter从TargetCharacter的阴道内拔出自己的手指,手指连着PronounPossessive的爱液.",
            EN: "SourceCharacter removes own finger from TargetCharacter's vagina, the finger coated with PronounPossessive love fluids.",
			RU: "SourceCharacter вынимает покрытый любовным соком палец из вагины TargetCharacter.",
        },
        labelSelf: {
            CN: "拔出自己的手指",
            EN: "Remove Finger",
			RU: "Вытащить Палец",
        },
        dialogSelf: {
            CN: "SourceCharacter从PronounPossessive的阴道内拔出自己的手指,手指连着自己的爱液.",
            EN: "SourceCharacter removes own finger from PronounPossessive's vagina, the finger coated with SourceCharacter's love fluids.",
			RU: "SourceCharacter вынимает покрытый любовным соком палец из своей вагины.",
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
			RU: "Двигать Пальцем",
        },
        dialog: {
            CN: "SourceCharacter在TargetCharacter的阴道内蠕动手指.",
            EN: "SourceCharacter wriggles a finger inside TargetCharacter's vagina.",
			RU: "SourceCharacter двигает пальцем внутри вагины TargetCharacter.",
        },
        labelSelf: {
            CN: "蠕动手指",
            EN: "Wriggle Finger",
			RU: "Двигать Пальцем",
        },
        dialogSelf: {
            CN: "SourceCharacter在PronounPossessive的阴道内蠕动手指.",
            EN: "SourceCharacter wriggles a finger inside PronounPossessive's vagina.",
			RU: "SourceCharacter двигает пальцем внутри своей вагины.",
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
			RU: "Интим",
        },
        dialog: {
            CN: "SourceCharacter的手在TargetCharacter的阴道内快速抽插.",
            EN: "SourceCharacter's hand quickly thrusts in and out of TargetCharacter's vagina, rubbing and kneading.",
			RU: "Рука SourceCharacter быстро входит и выходит из вагины TargetCharacter, растягивая и разминая её.",
        },
        labelSelf: {
            CN: "快速抽插",
            EN: "Quickly Thrust",
			RU: "Интим",
        },
        dialogSelf: {
            CN: "SourceCharacter的手在PronounPossessive的阴道内快速抽插.",
            EN: "SourceCharacter's hand quickly thrusts in and out of PronounPossessive's vagina, rubbing and kneading.",
			RU: "SourceCharacter быстро орудует рукой, входя и выхоля из своей вагины он растягивает и разминает её.",
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
			RU: "Подцепить за Пирсинг",
        },
        dialog: {
            CN: "SourceCharacter钩住TargetCharacter的阴蒂环.",
            EN: "SourceCharacter hooks onto TargetCharacter's clitoral piercing.",
			RU: "SourceCharacter цепляется за пирсинг на клиторе TargetCharacter.",
        },
        labelSelf: {
            CN: "钩住阴蒂环",
            EN: "Hook Clitoral Piercing",
			RU: "Подцепить за Пирсинг",
        },
        dialogSelf: {
            CN: "SourceCharacter钩住自己的阴蒂环.",
            EN: "SourceCharacter hooks onto own clitoral piercing.",
			RU: "SourceCharacter цепляется за пирсинг на своем клиторе.",
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
			RU: "Потянуть за Пирсинг",
        },
        dialog: {
            CN: "SourceCharacter拉了一下TargetCharacter的阴蒂环.",
            EN: "SourceCharacter tugs on TargetCharacter's clitoral piercing and then releases it.",
			RU: "SourceCharacter тянет за пирсинг на клиторе TargetCharacter.",
        },
        labelSelf: {
            CN: "拉扯阴蒂环",
            EN: "Tug Clitoral Piercing",
			RU: "Потянуть за Пирсинг",
        },
        dialogSelf: {
            CN: "SourceCharacter拉了一下自己的阴蒂环.",
            EN: "SourceCharacter tugs on own clitoral piercing and then releases it.",
			RU: "SourceCharacter тянет за пирсинг на своем клиторе.",
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
            EN: "Crawl to Feet Like a Pet",
			RU: "Игриво Ползти к Ногам",
        },
        dialog: {
            CN: "SourceCharacter爬到TargetCharacter脚边.",
            EN: "SourceCharacter crawls to TargetCharacter's feet like a pet.",
			RU: "SourceCharacter игриво ползет к ногам TargetCharacter.",
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
            EN: "Rub Legs Like a Pet",
			RU: "Игриво Тереться об Ляшки",
        },
        dialog: {
            CN: "SourceCharacter蹭TargetCharacter的腿.",
            EN: "SourceCharacter rubs against TargetCharacter's legs like a pet.",
			RU: "SourceCharacter игриво трется головой об ляжки TargetCharacter.",
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
            EN: "Rub Legs Like a pet",
			RU: "Игриво Тереться об Ноги",
        },
        dialog: {
            CN: "SourceCharacter蹭TargetCharacter的腿.",
            EN: "SourceCharacter rubs against TargetCharacter's legs like a pet.",
			RU: "SourceCharacter игриво трется об ноги TargetCharacter.",
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
            EN: "Lie Down Like a Pet",
			RU: "На Четвереньки",
        },
        dialogSelf: {
            CN: "SourceCharacter四肢着地趴在地上.",
            EN: "SourceCharacter lies down on all fours like a pet.",
			RU: "SourceCharacter игриво ложится на четвереньки.",
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
            EN: "Kneel Like a Pet",
			RU: "Встать на Колени",
        },
        dialogSelf: {
            CN: "SourceCharacter手臂离地跪立.",
            EN: "SourceCharacter kneels with PronounPossessive arms off the ground like a pet.",
			RU: "SourceCharacter поднимается с четверенек на коленки.",
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
            EN: "Pounces Like a Pet",
			RU: "Игриво Наброситься",
        },
        dialog: {
            CN: "SourceCharacter扑到TargetCharacter身上.",
            EN: "SourceCharacter pounces on TargetCharacter pet a like.",
			RU: "SourceCharacter игриво набрасывается на TargetCharacter.",
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
            EN: "Scratch Hand Like a Pet",
			RU: "Поскрести Ладонь",
        },
        dialog: {
            CN: "SourceCharacter用爪子挠了一下TargetCharacter的手.",
            EN: "SourceCharacter scratches TargetCharacter's hand with mitten claws like a pet.",
			RU: "SourceCharacter игриво шкребет ладонь TargetCharacter своими коготками.",
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
            EN: "Scratch Arm Like a Pet",
			RU: "Поскрести Руку"
        },
        dialog: {
            CN: "SourceCharacter用爪子挠了一下TargetCharacter的手臂.",
            EN: "SourceCharacter scratches TargetCharacter's arm with mitten claws like a pet.",
			RU: "SourceCharacter игриво шкребет руку TargetCharacter своими коготками.",
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
            EN: "Lick Paw Like a Pet",
			RU: "Вылизать Лапку",
        },
        dialogSelf: {
            CN: "SourceCharacter舔自己的爪子.",
            EN: "SourceCharacter licks PronounPossessive own paw like a pet.",
			RU: "SourceCharacter вылизывает свою лапку как кошечка.",
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
            EN: "Poke Claws in Face ",
			RU: "Тыкнуть Коготками в Лицо",
        },
        dialog: {
            CN: "SourceCharacter用爪子戳了戳TargetCharacter的脸.",
            EN: "SourceCharacter's pokes TargetCharacter's face with PronounPossessive mitten claws like a pet.",
			RU: "SourceCharacter тыкает в лицо TargetCharacter своим коготками.",
        },
        labelSelf: {
            CN: "猫爪戳脸",
            EN: "Pokes Claws in Face",
			RU: "Тыкнуть Коготками в Лицо",
        },
        dialogSelf: {
            CN: "SourceCharacter用爪子戳了戳自己的脸.",
            EN: "SourceCharacter pokes PronounPossessive own face with mitten claws.",
			RU: "SourceCharacter тыкает коготками в свое лицо.",
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
            EN: "Poke Claws in Nose",
			RU: "Тыкнуть Коготками в Нос",
        },
        dialog: {
            CN: "SourceCharacter用爪子戳了戳TargetCharacter的鼻子.",
            EN: "SourceCharacter's pokes TargetCharacter's nose with mitten claws.",
			RU: "SourceCharacter тыкает своими коготками в нос TargetCharacter.",
        },
        labelSelf: {
            CN: "猫爪戳鼻子",
            EN: "Poke Claws in Nose ",
			RU: "Тыкнуть Коготками в Нос",
        },
        dialogSelf: {
            CN: "SourceCharacter用爪子戳了戳自己的鼻子.",
            EN: "SourceCharacter's pet pokes PronounPossessive own nose with mitten claws.",
			RU: "SourceCharacter тыкает коготками в свой нос.",
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
            EN: "Rub Claws in Face",
			RU: "Поцарапать Лицо",
        },
        dialog: {
            CN: "SourceCharacter用爪子揉了揉TargetCharacter的脸.",
            EN: "SourceCharacter uses PronounPossessive claws to rub TargetCharacter's face.",
			RU: "SourceCharacter царапает лицо TargetCharacter своими коготками.",
        },
        labelSelf: {
            CN: "猫爪揉脸",
            EN: "Rub Claws in Face",
			RU: "Поцарапать Лицо",
        },
        dialogSelf: {
            CN: "SourceCharacter用爪子揉了揉自己的脸.",
            EN: "SourceCharacter uses PronounPossessive claws to rub PronounPossessive own face.",
			RU: "SourceCharacter царапает своё лицо коготочками.",
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
            EN: "Rub Claws in Nose",
			RU: "Поцарапать Нос",
        },
        dialog: {
            CN: "SourceCharacter用爪子揉了揉TargetCharacter的鼻子.",
            EN: "SourceCharacter uses PronounPossessive claws to rub TargetCharacter's nose.",
			RU: "SourceCharacter царапает нос TargetCharacter своими коготками",
        },
        labelSelf: {
            CN: "猫爪揉鼻子",
            EN: "Rub Claws in Nose",
			RU: "Поцарапать Нос",
        },
        dialogSelf: {
            CN: "SourceCharacter用爪子揉了揉自己的鼻子.",
            EN: "SourceCharacter uses PronounPossessive claws to rub PronounPossessive own nose.",
			RU: "SourceCharacter царапает свой нос коготками.",
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
            EN: "Bump Against Cage",
			RU: "Ударить Клетку"
        },
        dialogSelf: {
            CN: "SourceCharacter用身体撞击笼子.",
            EN: "SourceCharacter bumps PronounPossessive body against the cage.",
			RU: "SourceCharacter ударяется телом о клетку.",
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
			RU: "Кусать Прутья"
        },
        dialogSelf: {
            CN: "SourceCharacter用牙齿咬笼子.",
            EN: "SourceCharacter bites the cage.",
			RU: "SourceCharacter кусает прутья клетки.",
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
			RU: "Трясет Дверь",
        },
        dialogSelf: {
            CN: "SourceCharacter摇晃笼子的门.",
            EN: "SourceCharacter shakes the door of the cage.",
			RU: "SourceCharacter трясет дверь клетки.",
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
			RU: "Приставить Поролоновый Меч",
        },
        dialog: {
            CN: "SourceCharacter把泡沫剑架在TargetCharacter的脖子上",
            EN: "SourceCharacter places the Foam Sword on TargetCharacter's Neck",
			RU: "SourceCharacter приставляет к шее TargetCharacter поролоновый меч.",
        },
        labelSelf: {
            CN: "泡沫剑架在脖子上",
            EN: "Foam Sword Rests on the Neck",
			RU: "Приставить Поролоновый Меч",
        },
        dialogSelf: {
            CN: "SourceCharacter把泡沫剑架在自己的脖子上.",
            EN: "SourceCharacter places the Foam Sword on own neck.",
			RU: "SourceCharacter приставляет поролоновый меч к собственной шее.",
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
			RU: "Ударить Мечем по Лицу ",
        },
        dialog: {
            CN: "SourceCharacter用泡沫剑轻轻拍了拍一下TargetCharacter的脸",
            EN: "SourceCharacter gently hits TargetCharacter's face with a Foam Sword",
			RU: "SourceCharacter аккуратно бьет TargetCharacter по лицу поролоновым мечем.",
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
			RU: "Облизать Тентакли",
        },
        dialogSelf: {
            CN: "SourceCharacter舔PronounPossessive的触手.",
            EN: "SourceCharacter licks PronounPossessive tentacles.",
			RU: "SourceCharacter облизывает свои тентакли.",
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
            EN: "Pet Head with Tentacles",
			RU: "Погладить Тентаклями по Голове",
        },
        dialog: {
            CN: "SourceCharacter用触手摸了摸TargetCharacter的头.",
            EN: "SourceCharacter pets TargetCharacter's head with tentacles.",
			RU: "SourceCharacter гладит TargetCharacter по голове тентаклями.",
        },
        labelSelf: {
            CN: "触手摸头",
            EN: "Pet Head with Tentacles ",
			RU: "Погладить Тентаклями по Голове",
        },
        dialogSelf: {
            CN: "SourceCharacter用触手摸了摸自己的头.",
            EN: "SourceCharacter pets own head with tentacles.",
			RU: "SourceCharacter гладит себя тентаклями по голове.",
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
            EN: "Poke Nose with Tentacles",
			RU: "Коснуться Носа Тентаклями",
        },
        dialog: {
            CN: "SourceCharacter用触手戳了戳TargetCharacter的鼻子.",
            EN: "SourceCharacter pokes TargetCharacter's nose with tentacles.",
			RU: "SourceCharacter косается носа TargetCharacter своими тентаклями.",
        },
        labelSelf: {
            CN: "触手戳鼻子",
            EN: "Poke Nose with Tentacles",
			RU: "Коснуться Носа Тентаклями",
        },
        dialogSelf: {
            CN: "SourceCharacter用触手戳了戳自己的鼻子.",
            EN: "SourceCharacter Pokes own Nose with Tentacles.",
			RU: "SourceCharacter косается своего носа тентаклями.",
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
            EN: "Poke Face with Tentacles",
			RU: "Коснуться Лица Тентаклями",
        },
        dialog: {
            CN: "SourceCharacter用触手戳了戳TargetCharacter的脸.",
            EN: "SourceCharacter pokes TargetCharacter's face with tentacles.",
			RU: "SourceCharacter касается лица TargetCharacter своими тентаклями.",
        },
        labelSelf: {
            CN: "触手戳脸",
            EN: "Poke Face with Tentacles",
			RU: "Коснуться Лица Тентаклями",
        },
        dialogSelf: {
            CN: "SourceCharacter用触手戳了戳自己的脸.",
            EN: "SourceCharacter pokes own face with tentacles.",
			RU: "SourceCharacter касается своего лицо тентаклями.",
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
            EN: "Rub Nose with Tentacles",
			RU: "Потрогать Нос Тентаклями",
        },
        dialog: {
            CN: "SourceCharacter用触手揉了揉TargetCharacter的鼻子.",
            EN: "SourceCharacter rubs TargetCharacter's nose with tentacles.",
			RU: "SourceCharacter трогает нос TargetCharacter своими тентаклями.",
        },
        labelSelf: {
            CN: "触手揉鼻子",
            EN: "Rub Nose with Tentacles",
			RU: "Потрогать нос Тентаклями",
        },
        dialogSelf: {
            CN: "SourceCharacter用触手揉了揉自己的鼻子.",
            EN: "SourceCharacter rubs own nose with tentacles.",
			RU: "SourceCharacter трогает свой нос тентаклями.",
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
			EN: "Lift skirt with tentacles",
			RU: "Поднять Юбку Тентаклями",
        },
        dialog: {
            CN: "SourceCharacter用触手掀开TargetCharacter的裙子.",
			EN: "SourceCharacter lifts TargetCharacter's skirt with PronounPossessive tentacles.",
			RU: "SourceCharacter приподнимает юбку TargetCharacter с помощью своих тентаклей.",
        },
        labelSelf: {
            CN: "触手掀裙子",
			EN: "Lift skirt with tentacles",
			RU: "Поднять Юбку Тентаклями",
        },
        dialogSelf: {
            CN: "SourceCharacter用触手掀开PronounPossessive的裙子.",
			EN: "SourceCharacter lifts PronounPossessive skirt with PronounPossessive tentacles.",
			RU: "SourceCharacter приподнимает свою юбку с помощью тентаклей.",
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
            EN: "Rub Face with Tentacles",
			RU: "Потрогать Тентаклями Лицо",
        },
        dialog: {
            CN: "SourceCharacter用触手揉了揉TargetCharacter的脸.",
            EN: "SourceCharacter rubs TargetCharacter's face with PronounPossessive tentacles.",
			RU: "SourceCharacter трогает лицо TargetCharacter своими тентаклями.",
        },
        labelSelf: {
            CN: "触手揉脸",
            EN: "Rub Face with Tentacles",
			RU: "Потрогать Тентаклями Лицо",
        },
        dialogSelf: {
            CN: "SourceCharacter用触手揉了揉自己的脸.",
            EN: "SourceCharacter rubs own face with tentacles.",
			RU: "SourceCharacter трогает свое лицо тентаклями.",
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
            EN: "Rub Face with Tail",
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
