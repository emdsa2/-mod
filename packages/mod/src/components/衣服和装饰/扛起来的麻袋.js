import AssetManager from "@mod-utils/AssetManager";
import ChatRoomOrder from "@mod-utils/ChatRoomOrder";
import ModManager from "@mod-utils/ModManager";

export default function () {
    AssetManager.addAsset(
        "ItemMisc",
        {
            Name: "扛起来的麻袋_Luzi",
            Random: false,
            Value: -1,
            Visible: false,
            NotVisibleOnScreen: ["LuziScreen"], // 使用这个数据来让物品在列表不显示
        },
        undefined,
        {
            CN: "扛起来的麻袋",
            EN: "Carried sack",
            RU: "Несущий мешок",
        }
    );

    AssetManager.addImageMapping({
        "Assets/Female3DCG/ItemMisc/Preview/扛起来的麻袋_Luzi.png":
            "Assets/Female3DCG/ItemDevices/Preview/BurlapSack.png",
    });

    ModManager.progressiveHook("InventoryItemHasEffect")
        .inside("ChatRoomCanBeLeashedBy")
        .override((args, next) => {
            const [Item, Effect] = args;
            if (Item.Asset.Name === "BurlapSack" && Effect === "Leash") return true;
            return next(args);
        });

    ModManager.progressiveHook("DrawCharacter", 1)
        .inside("ChatRoomCharacterViewLoopCharacters")
        .inject((args, next) => {
            const [C, X, Y, Zoom] = args;
            const sharedC = ChatRoomOrder.requireSharedCenter(C);

            if (!sharedC) return;

            if (
                sharedC.prev.XCharacterDrawOrder.associatedAsset?.asset !== "BurlapSack" ||
                sharedC.next.XCharacterDrawOrder.associatedAsset?.asset !== "扛起来的麻袋_Luzi"
            )
                return;

            if (sharedC.prev.MemberNumber === C.MemberNumber) {
                if (sharedC.next.ActivePose[0] === "Kneel" || sharedC.next.ActivePose[0] === "KneelingSpread") {
                    args[1] = sharedC.center.X;
                    args[2] = sharedC.center.Y - 120 * Zoom;
                    return;
                } else {
                    args[1] = sharedC.center.X;
                    args[2] = sharedC.center.Y - 340 * Zoom;
                    return;
                }
            }

            if (sharedC.next.MemberNumber === C.MemberNumber) {
                args[1] = sharedC.center.X;
                args[2] = sharedC.center.Y;
                return;
            }
        });
}
