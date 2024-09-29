import ModManager from "@mod-utils/ModManager";

/** @type {_.PRecord<CustomGroupName,Set<string>>} */
const validAssets = {
    ItemMisc: new Set(["TeddyBear", "PetPotato", "BunPlush", "FoxPlush", "Karl"]),
    ItemEars: new Set(["FuturisticEarphones"]),
};

/** @returns {string | undefined} */
function validItemCraftingDesc(groupName) {
    for (const [groupName, assets] of Object.entries(validAssets)) {
        const item = InventoryGet(Player, /** @type{any}*/ (groupName));
        if (item && assets.has(item.Asset.Name)) {
            const m = item.Craft?.Description?.match(/["“](.+)["”]/);
            if (m) return m[1];
        }
    }
    return undefined;
}

function translateText(sourceText, targetLang) {
    return fetch(
        `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURI(
            sourceText
        )}`
    )
        .then((response) => response.json())
        .then((dt) => Promise.resolve({ sourceText: dt[0][0][1], translatedText: dt[0][0][0] }));
}

export default function () {
    ModManager.progressiveHook("ChatRoomMessage").inject((args, next) => {
        const data = args[0];
        if (data.Dictionary?.find((d) => d["AutoTranslated"])) return;
        if (["Chat", "Whisper", "Emote"].includes(data.Type)) {
            const tLang = validItemCraftingDesc();
            if (tLang) {
                const modedData = (text) => ({
                    ...data,
                    Content: `🔊 ${text}`,
                    Dictionary: /** @type {ChatMessageDictionary} */ ([
                        ...(data.Dictionary || []),
                        { Automatic: true },
                        { AutoTranslated: true },
                    ]),
                });

                translateText(data.Content, tLang).then(({ sourceText, translatedText }) => {
                    if (sourceText === data.Content) {
                        if (data.Sender === Player.MemberNumber) {
                            ServerSend("ChatRoomChat", modedData(translatedText));
                        } else {
                            ChatRoomMessage(modedData(translatedText));
                        }
                    }
                });
            }
        }
    });
}
