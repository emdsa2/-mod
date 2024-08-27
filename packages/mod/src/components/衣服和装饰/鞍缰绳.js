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
};

export default function () {
    AssetManager.addGroupedAssets(assets, translations);

    ModManager.progressiveHook("DrawCharacter", 1)
        .inside("ChatRoomCharacterViewLoopCharacters")
        .inject((args, next) => {
            const [C, X, Y, Zoom] = args;
            const pair = ChatRoomOrder.requirePairDrawState(C);

            if (!pair) return;

            const centerX = (pair.prev.drawState.X + pair.next.drawState.X) / 2;

            if (pair.prev.C.MemberNumber === C.MemberNumber && InventoryIsItemInList(C, "ItemTorso", ["缰绳_Luzi"])) {
                args[1] = centerX;
                args[2] -= 50 * Zoom;
                return;
            }
            if (pair.next.C.MemberNumber === C.MemberNumber && InventoryIsItemInList(C, "ItemTorso", ["鞍_Luzi"])) {
                args[1] = centerX;
                return;
            }
        });
}
