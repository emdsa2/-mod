import AssetManager from "@mod-utils/AssetManager";
import ChatRoomOrder from "@mod-utils/ChatRoomOrder";
import ModManager from "@mod-utils/ModManager";

/** @type {CustomGroupedAssetDefinitions} */
const asset = {
    ItemDevices: [
        {
            Name: "马车前_Luzi",
            Random: false,
            Top: 0,
            Left: -50,
            AllowLock: false,
            Extended: false,
            FixedPosition: true,
            Layer: [
                { Name: "右辕", Priority: 1 },
                { Name: "軓", Priority: 1 },
                { Name: "左辕", Priority: 60 },
            ],
        },
        {
            Name: "马车_Luzi",
            Random: false,
            Top: 0,
            Left: -280,
            AllowLock: false,
            Extended: false,
            FixedPosition: true,
            Layer: [
                { Name: "右轮挡泥板后", Priority: 1 },
                { Name: "右轮", Priority: 1 },
                { Name: "右轮挡泥板前", Priority: 1 },
                { Name: "右輢", Priority: 2 },
                { Name: "舆", Priority: 5 },
                { Name: "左輢", Priority: 60 },
                { Name: "左轮挡泥板后", Priority: 61 },
                { Name: "左轮", Priority: 61 },
                { Name: "左轮挡泥板前", Priority: 61 },
            ],
            SetPose: ["Kneel"],
            AllowActivePose: ["Kneel", "KneelingSpread"],
            OverrideHeight: {
                Height: 20,
                Priority: 21,
                HeightRatioProportion: 1,
            },
        },
    ],
};
const translations = {
    CN: {
        ItemDevices: {
            马车前_Luzi: "马车前",
            马车_Luzi: "马车",
        },
    },
    EN: {
        ItemDevices: {
            马车前_Luzi: "马车前",
            马车_Luzi: "马车",
        },
    },
};

export default function () {
    AssetManager.addGroupedAssets(asset, translations);

    ModManager.progressiveHook("DrawCharacter", 1)
        .inside("ChatRoomCharacterViewLoopCharacters")
        .inject((args, next) => {
            const [C, X, Y, Zoom] = args;
            const sharedC = ChatRoomOrder.requireSharedCenter(C);

            if (!sharedC) return;

            if (
                sharedC.prev.XCharacterDrawOrder.associatedAsset?.asset !== "马车_Luzi" ||
                sharedC.next.XCharacterDrawOrder.associatedAsset?.asset !== "马车前_Luzi"
            )
                return;

            if (sharedC.next.MemberNumber === C.MemberNumber) {
                args[1] = sharedC.center.X - 130 / args[3];
                args[2] = sharedC.center.Y;
                args[4] = false;
                return;
            }

            if (sharedC.prev.MemberNumber === C.MemberNumber) {
                args[1] = sharedC.center.X + 80 / args[3];
                args[2] = sharedC.center.Y;
                args[4] = false;
                return;
            }
        });
}
