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
        },
        dialogSelf: {
            CN: "SourceCharacter轻轻地跪了下来.",
            EN: "SourceCharacter kneels down gently.",
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
        },
        dialogSelf: {
            CN: "SourceCharacter手扶着地站了起来.",
            EN: "SourceCharacter stands up with hands on the ground.",
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
        },
        dialogSelf: {
            CN: "SourceCharacter张开了PronounPossessive的腿.",
            EN: "SourceCharacter kneels with legs spread.",
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
        },
        dialogSelf: {
            CN: "SourceCharacter并拢了PronounPossessive的腿.",
            EN: "SourceCharacter kneels with legs closed.",
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
        },
        dialogSelf: {
            CN: "SourceCharacter手放身后趴在地上.",
            EN: "SourceCharacter lies down with hands behind back.",
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
        },
        dialogSelf: {
            CN: "SourceCharacter四肢着地趴在地上.",
            EN: "SourceCharacter's pet lies down on all fours.",
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
        },
        dialogSelf: {
            CN: "SourceCharacter起身跪下.",
            EN: "SourceCharacter get up and kneels down.",
        },
    },
];

export default function () {
    ActivityManager.addCustomActivities(activities);
}
