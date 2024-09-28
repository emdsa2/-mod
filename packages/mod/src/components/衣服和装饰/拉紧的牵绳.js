import AssetManager from "@mod-utils/AssetManager";
import ChatRoomOrder from "@mod-utils/ChatRoomOrder";
import ModManager from "@mod-utils/ModManager";

export default function () {
    AssetManager.addAsset(
        "ItemHandheld",
        {
            Name: "拉紧的牵绳_Luzi",
            Random: false,
            Value: -1,
            Visible: false,
            NotVisibleOnScreen: ["LuziScreen"], // 使用这个数据来让物品在列表不显示
        },
        undefined,
        {
            CN: "拉紧的牵绳",
            EN: "Pulled Leash",
            RU: "Потянутый повод",
        }
    );

    AssetManager.addImageMapping({
        "Assets/Female3DCG/ItemHandheld/Preview/拉紧的牵绳_Luzi.png":
            "Assets/Female3DCG/ItemNeckRestraints/Preview/CollarLeash.png",
    });

    ModManager.progressiveHook("DrawCharacter", 1)
        .inside("ChatRoomCharacterViewLoopCharacters")
        .inject((args, next) => {
            const [C, X, Y, Zoom] = args;
            const sharedC = ChatRoomOrder.requireSharedCenter(C);

            if (!sharedC) return;

            if (
                sharedC.prev.XCharacterDrawOrder.associatedAsset?.asset !== "CollarLeash" ||
                sharedC.next.XCharacterDrawOrder.associatedAsset?.asset !== "拉紧的牵绳_Luzi"
            )
                return;

            if (sharedC.next.MemberNumber === C.MemberNumber) {
                args[1] = sharedC.center.X;
                args[2] = sharedC.center.Y;
                return;
            }

            if (sharedC.prev.MemberNumber === C.MemberNumber) {
                args[1] = sharedC.center.X - 150 * Zoom;
                args[2] = sharedC.center.Y;
                return;
            }
        });
}
