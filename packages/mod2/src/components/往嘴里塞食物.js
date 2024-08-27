import ChatRoomOrder from "@mod-utils/ChatRoomOrder";
import ActivityManager from "@mod-utils/ActivityManager";

/** @type { ActivityManagerInterface.ICustomActivity []} */
const activities = [
    {
        activity: {
            Name: "塞棒棒糖",
            Prerequisite: [
                (prereq, acting, acted, group) => {
                    return InventoryIsItemInList(acting, "ItemHandheld", ["棒棒糖_Luzi"]);
                },
            ],
            MaxProgress: 50,
            Target: ["ItemMouth"],
            TargetSelf: ["ItemMouth"],
        },
        useImage: ["ItemMouth", "棒棒糖_Luzi"],
        run: (player, sender, info) => {
            if (info.SourceCharacter === player.MemberNumber) {
                const asset = AssetGet("Female3DCG", "ItemHandheld", "棒棒糖_Luzi");
                if (!asset) return;
                // 获取 TargetCharacter 玩家信息
                let infoTargetCharacter = ChatRoomCharacterDrawlist.filter(obj => obj.MemberNumber === info.TargetCharacter)[0]
                // 给棒棒糖
                InventoryWear(infoTargetCharacter, "棒棒糖_Luzi", "ItemMouth",);
                InventoryRemove(player, "ItemHandheld", true);
                ChatRoomCharacterUpdate(infoTargetCharacter); // 更新外观
            }
        },
        label: {
            CN: "塞棒棒糖",
            EN: "塞棒棒糖",
        },
        dialog: {
            CN: "SourceCharacter将手里的棒棒糖塞进TargetCharacter的嘴里.",
            EN: "SourceCharacter将手里的棒棒糖塞进TargetCharacter的嘴里.",
        },
        labelSelf: {
            CN: "塞棒棒糖",
            EN: "塞棒棒糖",
        },
        dialogSelf: {
            CN: "SourceCharacter将手里的棒棒糖塞进PronounPossessive自己的嘴里.",
            EN: "SourceCharacter将手里的棒棒糖塞进PronounPossessive自己的嘴里.",
        },
    },
];

export default function () {
    ActivityManager.addCustomActivities(activities);
}
