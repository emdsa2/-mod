import AssetManager from "../../assetManager";
import ModManager from "../../modManager";

/** @type {CustomGroupedAssetDefinitions} */
const assets = {
    ItemAddon: [
        {
            Name: "被子左边_Luzi",
            Random: false,
            Top: -260,
            Left: 0,
            Difficulty: 1,
            SelfBondage: 0,
            DefaultColor: ["#99A2AB", "Default"],
            Layer: [{ Name: "外" }, { Name: "内" }],
        },
        {
            Name: "被子右边_Luzi",
            Random: false,
            Top: -260,
            Left: -210,
            Difficulty: 1,
            SelfBondage: 0,
            DefaultColor: ["#99A2AB", "Default"],
            Layer: [{ Name: "外" }, { Name: "内" }],
        },
    ],
    ItemDevices: [
        {
            Name: "床左边_Luzi",
            Random: false,
            Top: -260,
            Left: 0,
            Priority: 1,
            Difficulty: -20,
            SelfBondage: 0,
            Time: 5,
            RemoveTime: 5,
            RemoveAtLogin: true,
            OverrideHeight: { Height: 20, HeightRatioProportion: 1, Priority: 21 },
            DefaultColor: ["#523629", "#888990", "#808284"],
            RemoveItemOnRemove: [
                { Group: "ItemAddon", Name: "Covers" },
                { Group: "ItemAddon", Name: "被子左边_Luzi" },
                { Group: "ItemAddon", Name: "被子右边_Luzi" },
                { Group: "ItemAddon", Name: "BedRopes" },
                { Group: "ItemAddon", Name: "BedStraps" },
                { Group: "ItemAddon", Name: "BedTape" },
                { Group: "ItemAddon", Name: "BedChains" },
                { Group: "ItemArms", Name: "UnderBedBondageCuffs" },
                { Group: "ItemArms", Name: "MedicalBedRestraints" },
                { Group: "ItemArms", Name: "HempRope", TypeRecord: { typed: 11 } },
                { Group: "ItemLegs", Name: "MedicalBedRestraints" },
                { Group: "ItemFeet", Name: "HempRope", TypeRecord: { typed: 6 } },
                { Group: "ItemFeet", Name: "MedicalBedRestraints" },
            ],
            Effect: [E.Mounted, E.OnBed],
            Layer: [{ Name: "骨架" }, { Name: "床垫" }, { Name: "枕头" }],
        },
        {
            Name: "床右边_Luzi",
            Random: false,
            Top: -260,
            Left: -110,
            Priority: 1,
            Difficulty: -20,
            SelfBondage: 0,
            Time: 5,
            RemoveTime: 5,
            RemoveAtLogin: true,
            DefaultColor: ["#523629", "#888990", "#808284"],
            OverrideHeight: { Height: 20, HeightRatioProportion: 1, Priority: 21 },
            RemoveItemOnRemove: [
                { Group: "ItemAddon", Name: "Covers" },
                { Group: "ItemAddon", Name: "被子左边_Luzi" },
                { Group: "ItemAddon", Name: "被子右边_Luzi" },
                { Group: "ItemAddon", Name: "BedRopes" },
                { Group: "ItemAddon", Name: "BedStraps" },
                { Group: "ItemAddon", Name: "BedTape" },
                { Group: "ItemAddon", Name: "BedChains" },
                { Group: "ItemArms", Name: "UnderBedBondageCuffs" },
                { Group: "ItemArms", Name: "MedicalBedRestraints" },
                { Group: "ItemArms", Name: "HempRope", TypeRecord: { typed: 11 } },
                { Group: "ItemLegs", Name: "MedicalBedRestraints" },
                { Group: "ItemFeet", Name: "HempRope", TypeRecord: { typed: 6 } },
                { Group: "ItemFeet", Name: "MedicalBedRestraints" },
            ],
            Effect: [E.Mounted, E.OnBed],
            Layer: [{ Name: "骨架" }, { Name: "床垫" }, { Name: "枕头" }],
        },
    ],
};

export default function () {
    AssetManager.addGroupedAssets(assets);

    // 拓展绘图空间
    ModManager.patchFunction("GLDrawLoad", {
        "GLDrawCanvas.width = 1000;": "GLDrawCanvas.width = 2000;",
        "GLDrawClearRect(GLDrawCanvas.GL, 0, 0, 1000, CanvasDrawHeight, 0);":
            "GLDrawClearRect(GLDrawCanvas.GL, 0, 0, 2000, CanvasDrawHeight, 0);",
    });
    ModManager.patchFunction("GLDrawAppearanceBuild", {
        "const blinkOffset = 500;": "const blinkOffset = 1000;",
        "GLDrawClearRect(GLDrawCanvas.GL, 0, 0, 1000, CanvasDrawHeight, 0);":
            "GLDrawClearRect(GLDrawCanvas.GL, 0, 0, 2000, CanvasDrawHeight, 0);",
    });
    ModManager.patchFunction("CommonDrawCanvasPrepare", {
        ".width = 500;": ".width = 1000;",
        "clearRect(0, 0, 500, CanvasDrawHeight)": "clearRect(0, 0, 1000, CanvasDrawHeight)",
    });
    ModManager.patchFunction("DrawCharacter", {
        "500 * HeightRatio * Zoom": "1000 * HeightRatio * Zoom",
        "TempCanvas.canvas.width = CanvasDrawWidth;": "TempCanvas.canvas.width = CanvasDrawWidth * 2;",
    });

    ModManager.patchFunction("DrawCharacterSegment", {
        "DrawCanvasSegment(C.Canvas, Left": "DrawCanvasSegment(C.Canvas, Left + 250",
    });

    ModManager.afterInit(async () => {
        function sleep(ms) {
            return new Promise((resolve) => setTimeout(resolve, ms));
        }
        while (window.GLDrawCanvas === undefined) {
            await sleep(100);
        }
        GLDrawResetCanvas();
    });

    // 调整绘制位置
    let inChatRoomCharacterViewDraw = false;
    ModManager.hookFunction("ChatRoomCharacterViewLoopCharacters", 1, (args, next) => {
        inChatRoomCharacterViewDraw = true;
        next(args);
        inChatRoomCharacterViewDraw = false;
    });

    ModManager.hookFunction("DrawCharacter", 1, (args, next) => {
        do {
            if (!inChatRoomCharacterViewDraw) break;
            const [C, X, Y, Zoom] = args;

            const device = InventoryGet(C, "ItemDevices");
            if (!device) break;
            if (device.Asset.Name === assets.ItemDevices[0].Name) {
                const idx = ChatRoomCharacterDrawlist.indexOf(C);
                if (
                    idx < 0 ||
                    idx === ChatRoomCharacterDrawlist.length - 1 ||
                    idx === ChatRoomCharacterViewCharactersPerRow - 1
                )
                    break;
                const other_device = InventoryGet(ChatRoomCharacterDrawlist[idx + 1], "ItemDevices");
                if (!other_device) break;
                if (other_device.Asset.Name === assets.ItemDevices[1].Name) {
                    return next([C, X + 145, Y, Zoom]);
                }
            } else if (device.Asset.Name === assets.ItemDevices[1].Name) {
                const idx = ChatRoomCharacterDrawlist.indexOf(C);
                if (idx < 0 || idx === 0 || idx === ChatRoomCharacterViewCharactersPerRow) break;
                const other_device = InventoryGet(ChatRoomCharacterDrawlist[idx - 1], "ItemDevices");
                if (!other_device) break;
                if (other_device.Asset.Name === assets.ItemDevices[0].Name) {
                    return next([C, X - 145, Y, Zoom]);
                }
            }
        } while (false);
        next(args);
    });
}
