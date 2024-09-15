import AssetManager from "@mod-utils/AssetManager";
import ChatRoomOrder from "@mod-utils/ChatRoomOrder";
import ModManager from "@mod-utils/ModManager";

/** @type { CustomGroupedAssetDefinitions }} */
const assets = {
    ItemTorso: [
        {
            Name: "鞍_Luzi",
            Random: false,
            Effect: ["Leash"],
        },
        {
            Name: "缰绳_Luzi",
            Random: false,
        },
    ],
};
/** @type { Translation.GroupedEntries } */
const translations = {
    CN: {
        ItemTorso: {
            鞍_Luzi: "鞍",
            缰绳_Luzi: "缰绳",
        },
    },
    EN: {
        ItemTorso: {
            鞍_Luzi: "Saddle",
            缰绳_Luzi: "Reins",
        },
    },
    RU: {
        ItemTorso: {
            鞍_Luzi: "Седло",
            缰绳_Luzi: "Уздечка",
        },
    },
};

export default function () {
    AssetManager.addGroupedAssets(assets, translations);

    ModManager.progressiveHook("DrawCharacter", 1)
        .inside("ChatRoomCharacterViewLoopCharacters")
        .inject((args, next) => {
            const [C, X, Y, Zoom] = args;
            const sharedC = ChatRoomOrder.requireSharedCenter(C);

            if (!sharedC) return;

            if (
                sharedC.prev.MemberNumber === C.MemberNumber &&
                InventoryIsItemInList(C, "ItemTorso", ["缰绳_Luzi"])
            ) {
                args[1] = sharedC.center.X;
                args[2] = sharedC.center.Y - 50 * sharedC.prev.XCharacterDrawOrder.drawState.Zoom; // 缰绳人要向上移动50像素，乘以鞍人的缩放比例
                return;
            }

            if (
                sharedC.next.MemberNumber === C.MemberNumber &&
                InventoryIsItemInList(C, "ItemTorso", ["鞍_Luzi"])
            ) {
                args[1] = sharedC.center.X;
                args[2] = sharedC.center.Y;
                return;
            }
        });

        ModManager.progressiveHook("DrawCharacter", 1)
        .inside("ChatRoomCharacterViewLoopCharacters")
        .inject((args, next) => {
            const [C, X, Y, Zoom] = args;
            const sharedC = ChatRoomOrder.requireSharedCenter(C);

            if (!sharedC) return;

            if (sharedC.next.ActivePose[0] === "Kneel" || sharedC.next.ActivePose[0] === "KneelingSpread") {
                if (
                    sharedC.prev.MemberNumber === C.MemberNumber &&
                    InventoryIsItemInList(C, "ItemDevices", ["BurlapSack"])
                ) {
                    args[1] = sharedC.center.X;
                    args[2] = sharedC.center.Y - 120 * sharedC.next.XCharacterDrawOrder.drawState.Zoom;
                    return;
                }
            } else {
                if (
                    sharedC.prev.MemberNumber === C.MemberNumber &&
                    InventoryIsItemInList(C, "ItemDevices", ["BurlapSack"])
                ) {
                    args[1] = sharedC.center.X;
                    args[2] = sharedC.center.Y - 340 * sharedC.next.XCharacterDrawOrder.drawState.Zoom;
                    return;
                }
            }
    
            if (
                sharedC.next.MemberNumber === C.MemberNumber &&
                InventoryIsItemInList(C, "ItemTorso", ["缰绳_Luzi"])
            ) {
                args[1] = sharedC.center.X;
                args[2] = sharedC.center.Y;
                return;
            }
        });
}
