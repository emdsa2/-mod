import ActivityManager from "@mod-utils/ActivityManager";

/** @type { ActivityManagerInterface.ICustomActivity} */
const activity = {
    activity: {
        Name: "贞操带互动",
        Prerequisite: [
            "UseArms",
            (_1, _2, acted, group) => {
                return (
                    acted.HasEffect("Chaste") &&
                    InventoryGroupIsBlocked(acted, /**@type {AssetGroupItemName}*/ (group.Name))
                );
            },
        ],
        MaxProgress: 95,
        Target: ["ItemVulva", "ItemVulvaPiercings"],
        TargetSelf: true,
    },
    useImage: "MasturbateHand",
    label: {
        CN: "抚弄贞操带",
        EN: "Tease Chastity Belt",
    },
    dialog: {
        CN: "SourceCharacter用手隔着贞操带轻轻抚弄TargetCharacter.",
        EN: "SourceCharacter teases TargetCharacter through the chastity belt.",
    },
};

export default function () {
    ActivityManager.addCustomActivity(activity);
}
