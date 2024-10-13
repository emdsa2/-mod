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
                let infoTargetCharacter = ChatRoomCharacterDrawlist.filter(
                    (obj) => obj.MemberNumber === info.TargetCharacter
                )[0];
                // 给棒棒糖
                InventoryWear(infoTargetCharacter, "棒棒糖_Luzi", "ItemMouth");
                InventoryRemove(player, "ItemHandheld", true);
                ChatRoomCharacterUpdate(infoTargetCharacter); // 更新外观
            }
        },
        label: {
            CN: "塞棒棒糖",
            EN: "Stuff with Lollipop",
            UA: "Наповнити рот льодяником",
        },
        dialog: {
            CN: "SourceCharacter将手里的棒棒糖塞进TargetCharacter的嘴里.",
            EN: "SourceCharacter stuffs TargetCharacter's mouth with lollipop.",
            UA: "SourceCharacter наповнює рот TargetCharacter льодяником.",
        },
        labelSelf: {
            CN: "塞棒棒糖",
            EN: "Stuff with Lollipop",
            UA: "Наповнити рот льодяником",
        },
        dialogSelf: {
            CN: "SourceCharacter将手里的棒棒糖塞进PronounPossessive自己的嘴里.",
            EN: "SourceCharacter stuffs PronounPossessive own mouth with lollipop.",
            UA: "SourceCharacter наповнює свій рот льодяником.",
        },
    },
];

export default function () {
    ActivityManager.addCustomActivities(activities);
}
