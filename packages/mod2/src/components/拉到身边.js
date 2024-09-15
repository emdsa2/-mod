import ActivityManager from "@mod-utils/ActivityManager";
import ChatRoomOrder from "@mod-utils/ChatRoomOrder";

/** @type { ActivityManagerInterface.ICustomActivity} */
const activity = {
    activity: {
        Name: "拉到身边",
        Prerequisite: [
            (prereq, acting, acted, group) => {
                return (
                    InventoryIsItemInList(acting, "ItemTorso", ["缰绳_Luzi"]) &&
                    InventoryIsItemInList(acted, "ItemNeckRestraints", ["CollarLeash"])
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
                    group: "ItemNeckRestraints",
                    asset: "CollarLeash",
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
        CN: "拉到身边",
        EN: "Pull to one's side",
        RU: "Притащить к себе",
    },
    dialog: {
        CN: "SourceCharacter将TargetCharacter拉到身边.",
        EN: "SourceCharacter pulls TargetCharacter to PronounPossessive side.",
        RU: "SourceCharacter притаскивает TargetCharacter к себе.",
    },
};

export default function () {
    ActivityManager.addCustomActivity(activity);
}
