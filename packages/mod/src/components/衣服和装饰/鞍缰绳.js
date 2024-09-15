import AssetManager from "@mod-utils/AssetManager";
import ChatRoomOrder from "@mod-utils/ChatRoomOrder";
import ModManager from "@mod-utils/ModManager";

/** @type { CustomGroupedAssetDefinitions }} */
const assets = {
    ItemTorso: [
        {
            Name: "鞍_Luzi",
            Random: false,
            ParentGroup: null,
            Effect: ["Leash"],
        },
    ],
};
/** @type { Translation.GroupedEntries } */
const translations = {
    CN: {
        ItemTorso: {
            鞍_Luzi: "鞍",
        },
    },
    EN: {
        ItemTorso: {
            鞍_Luzi: "Saddle",
        },
    },
    RU: {
        ItemTorso: {
            鞍_Luzi: "Седло",
        },
    },
};


/** @type {CustomAssetDefinition} */
const asset = {
    Name: "缰绳_Luzi",
    Random: false,
    Top: 0,
    Left: 0,
    Priority: 50,
    Extended: true,
    ParentGroup: null,
    Layer: [
        { Name: "绳子", AllowTypes: { typed: [1] } },
    ],
};

const extended = {
    Archetype: ExtendedArchetype.TYPED,
    DrawImages: false,
    Options: [
        { Name: "1" },
        { Name: "2" },
    ],
};

const translation = {
    CN: "缰绳",
    EN: "Reins",
    RU: "Уздечка",
};

/** @type {Translation.Dialog} */
const dialog = {
    CN: {
        ItemTorso缰绳_LuziSelect: "设置",
        ItemTorso缰绳_Luzi1: "无",
        ItemTorso缰绳_Luzi2: "有绳子",
        ItemTorso缰绳_LuziSet1: "SourceCharacter把绳子收起来了",
        ItemTorso缰绳_LuziSet2: "SourceCharacter拿出了绳子",
    },
    EN: {
        ItemTorso缰绳_LuziSelect: "Select",
        ItemTorso缰绳_Luzi1: "None",
        ItemTorso缰绳_Luzi2: "With Rope",
        ItemTorso缰绳_LuziSet1: "SourceCharacter put away the rope",
        ItemTorso缰绳_LuziSet2: "SourceCharacter took out the rope",
    },
};

export default function () {
    AssetManager.addAsset("ItemTorso", asset, extended, translation);
    AssetManager.addCustomDialog(dialog);

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

            if (
                sharedC.prev.MemberNumber === C.MemberNumber &&
                InventoryIsItemInList(C, "ItemTorso", ["缰绳_Luzi"])
            ) {
                args[1] = sharedC.center.X;
                args[2] = sharedC.center.Y;
                return;
            }

            if (
                sharedC.next.MemberNumber === C.MemberNumber &&
                InventoryIsItemInList(C, "ItemNeckRestraints", ["CollarLeash"])
            ) {
                args[1] = sharedC.center.X - 150 * Zoom;
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








