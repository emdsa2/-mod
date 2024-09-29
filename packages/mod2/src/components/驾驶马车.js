import ActivityManager from "@mod-utils/ActivityManager";
import ChatRoomOrder from "@mod-utils/ChatRoomOrder";
import ModManager from "@mod-utils/ModManager";

/** @type { ActivityManagerInterface.ICustomActivity} */
const activity = {
    activity: {
        Name: "驾驶马车",
        Prerequisite: [
            "UseFeet",
            (prereq, acting, acted, group) => {
                return (
                    (!InventoryGet(acting, "ItemDevices") ||
                        InventoryIsItemInList(acting, "ItemDevices", ["马车_Luzi"])) &&
                    InventoryIsItemInList(acted, "ItemDevices", ["马车前_Luzi"])
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
                    group: "ItemDevices",
                    asset: "马车前_Luzi",
                },
            });
            ChatRoomLeashPlayer = SrcChara.MemberNumber;
        } else if (info.SourceCharacter === player.MemberNumber) {
            const TgtChara = ChatRoomCharacter.find((C) => C.MemberNumber === info.TargetCharacter);
            if (!TgtChara) return;
            InventoryWear(player, "马车_Luzi", "ItemDevices");
            ChatRoomOrder.setDrawOrder({
                nextCharacter: TgtChara.MemberNumber,
                associatedAsset: {
                    group: "ItemDevices",
                    asset: "马车_Luzi",
                },
            });
            ChatRoomCharacterUpdate(player);
            if (ChatRoomLeashList.indexOf(TgtChara.MemberNumber) < 0) ChatRoomLeashList.push(TgtChara.MemberNumber);
        }
    },
    useImage: "Wiggle",
    label: {
        CN: "驾驶马车",
    },
    dialog: {
        CN: "SourceCharacter乘上了TargetCharacter身后的马车.",
    },
};

export default function () {
    ActivityManager.addCustomActivity(activity);
}
