import AssetManager from "../../assetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "阿巴阿巴_Luzi",
    Random: false,
    Top: 0,
    Left: 0,
    Extended: true,
    Fetish: ["Sadism"],
    // AllowActivity: ["ShockItem"],
    // ActivityAudio: ["Shocks"],
    PoseMapping: {
        TapedHands: "Hide",
        Yoked: "Hide",
        OverTheHead: "Hide",
        BackBoxTie: "Hide",
        BackElbowTouch: "Hide",
        BackCuffs: "Hide",
        AllFours: "Hide",
    },
    Layer: [
        {
            Name: "阿巴",
            Top: -110,
            Left: 0,
            AllowTypes: { typed: [1] }
        },
        {
            Name: "AK",
            Top: 0,
            Left: 0,
            AllowTypes: { typed: [2] }
        },
    ],
};

const extended = {
    Archetype: ExtendedArchetype.TYPED,
    DrawImages: false,
    Options: [{ Name: "无" }, { Name: "阿巴阿巴" }, { Name: "阿巴AK" }],
};

/** @type {Translation.Dialog} */
const dialog = {
    CN: {
        ItemHandheld阿巴阿巴_LuziSelect: "选择阿巴阿巴配置",
        ItemHandheld阿巴阿巴_Luzi无: "无",
        ItemHandheld阿巴阿巴_Luzi阿巴阿巴: "阿巴阿巴",
        ItemHandheld阿巴阿巴_Luzi阿巴AK: "阿巴AK",
        
        ItemHandheld阿巴阿巴_LuziSet无: "SourceCharacter移除了DestinationCharacter的阿巴阿巴.",
        ItemHandheld阿巴阿巴_LuziSet阿巴阿巴: "SourceCharacter切换DestinationCharacter阿巴阿巴.",
        ItemHandheld阿巴阿巴_LuziSet阿巴AK: "SourceCharacter切换DestinationCharacter阿巴AK.",
    },
    EN: {
        ItemHandheld阿巴阿巴_LuziSelect: "Select Aba Aba",
        ItemHandheld阿巴阿巴_Luzi无: "None",
        ItemHandheld阿巴阿巴_Luzi阿巴阿巴: "Aba Aba",
        ItemHandheld阿巴阿巴_Luzi阿巴AK: "Aba AK",

        ItemHandheld阿巴阿巴_LuziSet无: "SourceCharacter removed AbaAba from DestinationCharacter.",
        ItemHandheld阿巴阿巴_LuziSet阿巴阿巴: "SourceCharacter toggled AbaAba for DestinationCharacter.",
        ItemHandheld阿巴阿巴_LuziSet阿巴AK: "SourceCharacter toggled AbaAK for DestinationCharacter.",
    },
};

const translations = { CN: "阿巴阿巴", EN: "Aba Aba" };

export default function () {
    AssetManager.addAsset("ItemHandheld", asset, extended, translations);
    AssetManager.addCustomDialog(dialog);
}


// FIXME Saki快修这个！
// mod.hookFunction("ServerSend", 5, (args, next) => {
//     if (args[0] == "ChatRoomChat" && args[1]?.Type == "Action") {
//         let data = args[1];
//         let Dictionary = data.Dictionary;
//         if (Dictionary) {
//             if (Dictionary[3]?.AssetName?.includes('_Luzi')) {
//                 if (data.Content === "ActionUse") {
//                     let AssetName = Dictionary[3].AssetName;
//                     data.Dictionary.push({
//                         Tag: `NextAsset`, Text: AssetName.replace('_Luzi', '')
//                     });
//                 };
//                 if (data.Content === "ActionRemove") {
//                     let AssetName = Dictionary[3].AssetName;
//                     data.Dictionary.push({
//                         Tag: `PrevAsset`, Text: AssetName.replace('_Luzi', '')
//                     });
//                 };
//             }
//         };
//         if (Dictionary[3]?.AssetName?.includes('_Luzi')) {
//             if (data.Content === "ActionSwap") {
//                 let Dictionary = data.Dictionary;
//                 if (Dictionary) {
//                     let AssetName = Dictionary[3].AssetName;
//                     data.Dictionary.push({
//                         Tag: `PrevAsset`, Text: AssetName.replace('_Luzi', '')
//                     });
//                 };
//             }
//         };
//         if (Dictionary[4]?.AssetName?.includes('_Luzi')) {
//             if (data.Content === "ActionSwap") {
//                 let Dictionary = data.Dictionary;
//                 if (Dictionary) {
//                     let AssetName = Dictionary[4].AssetName;
//                     data.Dictionary.push({
//                         Tag: `NextAsset`, Text: AssetName.replace('_Luzi', '')
//                     });
//                 };
//             }
//         };
//     }
//     if (args[0] == "ChatRoomChat" && args[1]?.Type == "Action") {
//         let data = args[1];
//         const Content = data.Content;
//         // 检查 Content 是否含 "_Luzi"
//         if (Content.indexOf("_Luzi") !== -1) {
//             // 在 PlayerDialog 映射中查找对应的消息
//             const customKeyName = Content;
//             const msg = TextAllScreenCache.get(InterfaceStringsPath).cache[customKeyName] || "";

//             // 将修改后的消息添加到 Dictionary 中
//             data.Dictionary.push({
//                 Tag: `MISSING TEXT IN "Interface.csv": ${Content}`,
//                 Text: msg,
//             });
//         }
//     }
//     next(args);
// });