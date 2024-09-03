import ModManager from "@mod-utils/ModManager";
import { Path } from "@mod-utils/path";

// TODO Saki救救
function checkItemName(itemPosition) {
    const validAssetNames = new Set(["TeddyBear", "PetPotato", "BunPlush", "FoxPlush", "Karl", "FuturisticEarphones"]);
    let itemMisc = InventoryGet(Player, itemPosition);
    if (itemMisc && itemMisc.Asset && itemMisc.Asset.Name) {
        let assetName = itemMisc.Asset.Name;
        return validAssetNames.has(assetName);
    }
    return false; // 如果没有找到道具或者道具名称为空,则返回 false
}

function extractItemDescription(itemPosition) {
    let itemMisc = InventoryGet(Player, itemPosition);
    if (itemMisc && itemMisc.Craft && itemMisc.Craft.Description) {
        // 假设原始字符串为 chineseStr
        let chineseStr = itemMisc.Craft.Description;

        // 将中文双引号替换为英文双引号
        let englishStr = chineseStr.replace(/“/g, '"').replace(/”/g, '"');

        // 检查第一个英文双引号内的内容
        let firstQuoteIndex = englishStr.indexOf('"');
        if (firstQuoteIndex !== -1) {
            let contentInsideQuotes = englishStr.substring(firstQuoteIndex + 1, englishStr.indexOf('"', firstQuoteIndex + 1));
            // 检查引号内的字符串长度是否超过两个字符
            if (contentInsideQuotes.length <= 2) {
                // 检查前两个字母
                let firstTwoLetters = contentInsideQuotes.substring(0, 2);
                return firstTwoLetters;
            }
        }
    }
}

// 判断翻译结果是否符合条件的函数
function meetsCriteria(translatedText, sourceText) {
    const blacklist = ["📞", "🔊", "\\", "/", "www"];
    // 检查翻译结果是否包含黑名单中的任何一个词
    for (let word of blacklist) {
        if (translatedText.includes(word)) {
            return false;
        }
    }
    // 检查翻译结果与原文是否一致
    if (translatedText === sourceText) {
        return false;
    }
    return true;
}

export default function () {
    ModManager.hookFunction("ChatRoomMessage", 0, (args, next) => {
        const data = args[0];

        if (data.Sender === Player.MemberNumber && (data.Type && ["Chat", "Whisper", "Emote"].includes(data.Type)) && checkItemName("ItemMisc") && extractItemDescription("ItemMisc")) {
            let targetLang = extractItemDescription("ItemMisc");
            if (targetLang) {
                let sourceText = data.Content;
                let url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText);
                fetch(url)
                    .then(response => response.json())
                    .then((dt) => {
                        if (dt && dt[0] && dt[0][0] && dt[0][0][0]) {
                            let translatedText = dt[0][0][0].replace("[T]", "");

                            if (meetsCriteria(translatedText, sourceText)) {
                                ServerSend("ChatRoomChat", {
                                    Content: "🔊 " + translatedText,
                                    Type: "Chat",
                                    Dictionary: [
                                        { SourceCharacter: !Player.MemberNumber },
                                        { TargetCharacter: Player.MemberNumber },
                                        { Tag: 'FocusAssetGroup', FocusGroupName: '0 0' },
                                        { ActivityName: '0 0' },
                                        { Tag: '0 0', Text: 10 },
                                    ]
                                });
                            }
                        }
                    })
            }
        }

        if (data.Sender !== Player.MemberNumber && (data.Type && ["Chat", "Whisper", "Emote"].includes(data.Type)) && checkItemName("ItemEars") && extractItemDescription("ItemEars")) {
            let targetLang = extractItemDescription("ItemEars");
            if (targetLang) {
                let sourceText = data.Content;
                let url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText);
                fetch(url)
                    .then(response => response.json())
                    .then((dt) => {
                        if (dt && dt[0] && dt[0][0] && dt[0][0][0]) {
                            let translatedText = dt[0][0][0].replace("[T]", "");

                            if (meetsCriteria(translatedText, sourceText)) {
                                // @ts-ignore
                                ChatRoomMessage({ Content: "📞 " + translatedText, Type: "Chat", Sender: Player.MemberNumber, Dictionary: [{ Tag: '发送私聊', Text: 1 }] });
                            }
                        }
                    })
            }
        }

        next(args);
    });
}
