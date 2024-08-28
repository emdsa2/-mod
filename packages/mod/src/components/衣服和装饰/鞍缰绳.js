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

            const positionArgs = (() => {
                const { prev, next } = { prev: pair.prev.drawState, next: pair.next.drawState };
                // 如果两个人物的Y坐标差距大于1，说明两个人物不在同一水平线上，直接使用第二个人物为基准位置
                if (Math.abs(prev.Y - next.Y) > 1) return next;
                // 否则，使用二者的中心点作为基准位置
                else return { X: (prev.X + next.X) / 2, Y: (prev.Y + next.Y) / 2 };
            })();

            if (pair.prev.C.MemberNumber === C.MemberNumber && InventoryIsItemInList(C, "ItemTorso", ["缰绳_Luzi"])) {
                args[1] = positionArgs.X;
                args[2] = positionArgs.Y - 50 * pair.prev.drawState.Zoom; // 缰绳人要向上移动50像素，乘以鞍人的缩放比例
                return;
            }

            if (pair.next.C.MemberNumber === C.MemberNumber && InventoryIsItemInList(C, "ItemTorso", ["鞍_Luzi"])) {
                args[1] = positionArgs.X;
                args[2] = positionArgs.Y;
                return;
            }
        });
}
