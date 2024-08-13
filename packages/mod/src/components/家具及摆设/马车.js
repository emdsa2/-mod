import ModManager from "@mod-utils/ModManager";
import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomGroupedAssetDefinitions} */
const assets = {
    ItemDevices: [
        {
            Name: "马车_Luzi",
            Random: false,
            Top: 0,
            Left: 0,
            Layer: [
                {
                    Name: "前",
                    Priority: 19,
                },
                {
                    Name: "中",
                    Priority: 18,
                },
                {
                    Name: "后",
                    Priority: 0,
                },
            ],
        },
        {
            Name: "马_Luzi",
            Random: false,
            Top: 0,
            Left: 0,
        },
    ],
};

/** @type {Translation.GroupedEntries} */
const translations = {
    CN: {
        ItemDevices: {
            马车: "马车",
            马: "马",
        },
    },
    EN: {
        ItemDevices: {
            马车: "马车",
            马: "马",
        },
    },
};

export default function () {
    AssetManager.addGroupedAssets(assets, translations);

    // // 调整绘制位置
    // let inChatRoomCharacterViewDraw = false;
    // ModManager.hookFunction("ChatRoomCharacterViewLoopCharacters", 1, (args, next) => {
    //     inChatRoomCharacterViewDraw = true;
    //     next(args);
    //     inChatRoomCharacterViewDraw = false;
    // });

    // ModManager.hookFunction("DrawCharacter", 1, (args, next) => {
    //     do {
    //         const [C, X, Y, Zoom] = args;
    //         if (C.Canvas.width === 500) C.Canvas.width = 1000;
    //         if (C.CanvasBlink.width === 500) C.CanvasBlink.width = 1000;

    //         if (!inChatRoomCharacterViewDraw) break;

    //         const device = InventoryGet(C, "ItemDevices");
    //         if (!device) break;
    //         if (device.Asset.Name === assets.ItemDevices[0].Name) {
    //             const idx = ChatRoomCharacterDrawlist.indexOf(C);
    //             if (
    //                 idx < 0 ||
    //                 idx === ChatRoomCharacterDrawlist.length - 1 ||
    //                 idx === ChatRoomCharacterViewCharactersPerRow - 1
    //             )
    //                 break;
    //             const other_device = InventoryGet(ChatRoomCharacterDrawlist[idx + 1], "ItemDevices");
    //             if (!other_device) break;
    //             if (other_device.Asset.Name === assets.ItemDevices[1].Name) {
    //                 return next([C, X + 145, Y, Zoom]);
    //             }
    //         } else if (device.Asset.Name === assets.ItemDevices[1].Name) {
    //             const idx = ChatRoomCharacterDrawlist.indexOf(C);
    //             if (idx < 0 || idx === 0 || idx === ChatRoomCharacterViewCharactersPerRow) break;
    //             const other_device = InventoryGet(ChatRoomCharacterDrawlist[idx - 1], "ItemDevices");
    //             if (!other_device) break;
    //             if (other_device.Asset.Name === assets.ItemDevices[0].Name) {
    //                 return next([C, X - 145, Y, Zoom]);
    //             }
    //         }
    //     } while (false);
    //     next(args);
    // });
}
