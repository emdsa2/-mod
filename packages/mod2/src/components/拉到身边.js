import ActivityManager from "@mod-utils/ActivityManager";
import ChatRoomOrder from "@mod-utils/ChatRoomOrder";

/** @type { ActivityManagerInterface.ICustomActivity} */
const activity = {
    activity: {
        Name: "拉到身边",
        Prerequisite: [
            (prereq, acting, acted, group) => {
                return (
                    (!InventoryGet(acting, "ItemHandheld") ||
                        InventoryIsItemInList(acting, "ItemHandheld", ["拉紧的牵绳_Luzi"])) &&
                    InventoryIsItemInList(acted, "ItemNeckRestraints", ["CollarLeash"])
                );
            },
        ],
        MaxProgress: 50,
        Target: ["ItemTorso", "ItemNeckRestraints", "ItemNeck"],
    },
    run: (player, sender, info) => {
        if (info.TargetCharacter === player.MemberNumber) {
            const SrcChara = ChatRoomCharacter.find((C) => C.MemberNumber === info.SourceCharacter);
            if (!SrcChara) return;
            ChatRoomOrder.setDrawOrder({
                nextCharacter: SrcChara.MemberNumber,
                associatedAsset: {
                    group: "ItemNeckRestraints",
                    asset: "CollarLeash",
                },
            });
            const item = InventoryGet(player, "ItemNeckRestraints");
            if (item) {
                if (!item.Property) item.Property = {};
                if (!Array.isArray(item.Property.Effect)) item.Property.Effect = [];
                if (item.Property.Effect.indexOf("IsLeashed") < 0) {
                    item.Property.Effect.push("IsLeashed");
                    ChatRoomCharacterUpdate(Player);
                }
            }
            ChatRoomLeashPlayer = SrcChara.MemberNumber;
        } else if (info.SourceCharacter === player.MemberNumber) {
            const TgtChara = ChatRoomCharacter.find((C) => C.MemberNumber === info.TargetCharacter);
            if (!TgtChara) return;
            InventoryWear(player, "拉紧的牵绳_Luzi", "ItemHandheld");
            ChatRoomOrder.setDrawOrder({
                prevCharacter: TgtChara.MemberNumber,
                associatedAsset: {
                    group: "ItemHandheld",
                    asset: "拉紧的牵绳_Luzi",
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
        UA: "Притягнути до себе",
    },
    dialog: {
        CN: "SourceCharacter将TargetCharacter拉到身边.",
        EN: "SourceCharacter pulls TargetCharacter to PronounPossessive side.",
        RU: "SourceCharacter притаскивает TargetCharacter к себе.",
        UA: "SourceCharacter притягує TargetCharacter ближче до себе.",
    },
};

export default function () {
    ActivityManager.addCustomActivity(activity);
}
