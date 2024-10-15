import ActivityManager from "@mod-utils/ActivityManager";

/** @type { ActivityManagerInterface.ICustomActivity []} */
const activities = [
    {
        activity: {
            Name: "跪下",
            Prerequisite: ["UseArms"],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemLegs"],
        },
        useImage: "Wiggle",
        labelSelf: {
            CN: "跪下",
            EN: "Kneel Down",
            UA: "Сісти на коліна",
    
        },
        dialogSelf: {
            CN: "SourceCharacter轻轻地跪了下来.",
            EN: "SourceCharacter kneels down gently.",
            UA: "SourceCharacter ніжно сідає на коліна.",
        },
    },
    {
        activity: {
            Name: "站起来",
            Prerequisite: ["UseArms"],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemLegs"],
        },
        useImage: "Wiggle",
        labelSelf: {
            CN: "站起来",
            EN: "Stand Up",
            UA: "Встати",
        },
        dialogSelf: {
            CN: "SourceCharacter手扶着地站了起来.",
            EN: "SourceCharacter stands up with hands on the ground.",
            UA: "SourceCharacter встає, тримаючи руки на землі.",
        },
    },
    {
        activity: {
            Name: "跪着张开腿",
            Prerequisite: ["UseArms"],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemLegs"],
        },
        useImage: "Wiggle",
        labelSelf: {
            CN: "跪着张开腿",
            EN: "Kneel with Legs Spread",
            UA: "Сісти розширені коліна",
        },
        dialogSelf: {
            CN: "SourceCharacter张开了PronounPossessive的腿.",
            EN: "SourceCharacter kneels with legs spread.",
            UA: "SourceCharacter сідає на розширені коліна.",
        },
    },
    {
        activity: {
            Name: "跪着并拢腿",
            Prerequisite: ["UseArms"],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemLegs"],
        },
        useImage: "Wiggle",
        labelSelf: {
            CN: "跪着并拢腿",
            EN: "Kneel with Legs Closed",
            UA: "Сісти на закриті коліна",
        },
        dialogSelf: {
            CN: "SourceCharacter并拢了PronounPossessive的腿.",
            EN: "SourceCharacter kneels with legs closed.",
            UA: "SourceCharacter сідає на закриті коліна.",
        },
    },
    {
        activity: {
            Name: "趴下",
            Prerequisite: ["UseArms"],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemBoots"],
        },
        useImage: "Wiggle",
        labelSelf: {
            CN: "趴下",
            EN: "Lie Down",
            UA: "Лягти",
        },
        dialogSelf: {
            CN: "SourceCharacter手放身后趴在地上.",
            EN: "SourceCharacter lies down with hands behind back.",
            UA: "SourceCharacter лягає на землю ставивши руки за спиною.",
        },
    },
    {
        activity: {
            Name: "四肢着地",
            Prerequisite: ["UseArms"],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemBoots"],
        },
        useImage: "Wiggle",
        labelSelf: {
            CN: "四肢着地",
            EN: "All Fours",
            UA: "Стати на всі чотири",
        },
        dialogSelf: {
            CN: "SourceCharacter四肢着地趴在地上.",
            EN: "SourceCharacter's pet lies down on all fours.",
            UA: "SourceCharacter падає на землю стаючи на всі чотири.",
        },
    },
    {
        activity: {
            Name: "起身跪下",
            Prerequisite: ["UseArms"],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemBoots"],
        },
        useImage: "Wiggle",
        labelSelf: {
            CN: "起身跪下",
            EN: "Get Up and Kneel",
            UA: "Встати і сісти на коліна.",
        },
        dialogSelf: {
            CN: "SourceCharacter起身跪下.",
            EN: "SourceCharacter get up and kneels down.",
            UA: "SourceCharacter встає і сідає на коліна.",
        },
    },
];

export default function () {
    ActivityManager.addCustomActivities(activities);
}
