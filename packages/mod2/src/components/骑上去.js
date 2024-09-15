import ActivityManager from "@mod-utils/ActivityManager";
import ChatRoomOrder from "@mod-utils/ChatRoomOrder";

/** @type { ActivityManagerInterface.ICustomActivity} */
const activity = {
    activity: {
        Name: "骑上去",
        Prerequisite: [
            (prereq, acting, acted, group) => {
                return (
                    InventoryIsItemInList(acting, "ItemTorso", ["缰绳_Luzi"]) &&
                    InventoryIsItemInList(acted, "ItemTorso", ["鞍_Luzi"])
                );
            },
        ],
        MaxProgress: 50,
        Target: ["ItemTorso"],
    },
    run: (player, sender, info) => {
        if (info.TargetCharacter === player.MemberNumber) {
            const SrcChara = ChatRoomCharacter.find((C) => C.MemberNumber === info.SourceCharacter);
            if (!SrcChara) return;
            ChatRoomOrder.setDrawOrder({
                prevCharacter: SrcChara.MemberNumber,
                associatedAsset: {
                    group: "ItemTorso",
                    asset: "鞍_Luzi",
                },
            });
            ChatRoomLeashPlayer = SrcChara.MemberNumber;
        } else if (info.SourceCharacter === player.MemberNumber) {
            const TgtChara = ChatRoomCharacter.find((C) => C.MemberNumber === info.TargetCharacter);
            if (!TgtChara) return;
            ChatRoomOrder.setDrawOrder({
                nextCharacter: TgtChara.MemberNumber,
                associatedAsset: {
                    group: "ItemTorso",
                    asset: "缰绳_Luzi",
                },
            });
            if (ChatRoomLeashList.indexOf(TgtChara.MemberNumber) < 0) ChatRoomLeashList.push(TgtChara.MemberNumber);
        }
    },
    useImage: "Wiggle",
    label: {
        CN: "骑上去",
        EN: "Ride On",
        RU: "Поездка",
    },
    dialog: {
        CN: "SourceCharacter骑在TargetCharacter的背上.",
        EN: "SourceCharacter Rides on TargetCharacter's Back.",
        RU: "SourceCharacter ocедлала спину TargetCharacter.",
    },
};

export default function () {
    ActivityManager.addCustomActivity(activity);
}
