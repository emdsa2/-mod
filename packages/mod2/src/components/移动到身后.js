import ActivityManager from "@mod-utils/ActivityManager";

/** @type { ActivityManagerInterface.ICustomActivity []} */
const activities = [
    {
        activity: {
            Name: "躲到身后",
            Prerequisite: [],
            MaxProgress: 50,
            Target: ["ItemTorso"],
        },
        useImage: "SistersHug",
        label: {
            CN: "躲到身后",
            EN: "Hide Behind",
        },
        dialog: {
            CN: "SourceCharacter躲到TargetCharacter的身后.",
            EN: "SourceCharacter hides behind TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "移动到身后",
            Prerequisite: [],
            MaxProgress: 50,
            Target: ["ItemTorso"],
        },
        useImage: "SistersHug",
        label: {
            CN: "移动到身后",
            EN: "Move Behind",
        },
        dialog: {
            CN: "SourceCharacter移动到TargetCharacter的身后.",
            EN: "SourceCharacter moves behind TargetCharacter.",
        },
    },
];

export default function () {
    ActivityManager.addCustomActivities(activities);
}
