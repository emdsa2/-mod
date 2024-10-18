import ModManager from "@mod-utils/ModManager";

/** @type {_.PRecord<CustomGroupName,Set<string>>} */
const speakingAssets = {
    ItemMisc: new Set(["TeddyBear", "PetPotato", "BunPlush", "FoxPlush", "Karl"]),
};

/** @type {_.PRecord<CustomGroupName,Set<string>>} */
const hearingAssets = {
    ItemEars: new Set(["FuturisticEarphones"]),
};
/**
 * @param {_.PRecord<CustomGroupName,Set<string>>} vAssets
 * @returns {string | undefined}
 */
function validItemCraftingDesc(vAssets) {
    for (const [groupName, assets] of Object.entries(vAssets)) {
        const item = InventoryGet(Player, /** @type{any}*/ (groupName));
        if (item && assets.has(item.Asset.Name)) {
            const m = item.Craft?.Description?.match(/["“](.+)["”]/);
            if (m) return m[1];
        }
    }
    return undefined;
}

/**
 * @param {string} sourceText
 * @param {string} targetLang
 * @returns {Promise<{ translatedText: string }>}
 */
function translateText(sourceText, targetLang) {
    return fetch(
        `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURI(
            sourceText
        )}`
    )
        .then((response) => response.json())
        .then((dt) => {
            const [translatedText, retSourceText] = dt[0][0];
            const retSourceLang = dt[2];
            if (retSourceLang === targetLang || translatedText === sourceText || retSourceText !== sourceText)
                return undefined;
            else return Promise.resolve({ translatedText });
        });
}

export default function () {
    ModManager.progressiveHook("ChatRoomMessage").inject((args, next) => {
        const data = args[0];
        if (["Chat", "Whisper", "Emote"].includes(data.Type)) {
            if (Array.isArray(data.Dictionary) && data.Dictionary.find((d) => d["AutoTranslated"])) return;
            if (["\\", "/", "www"].some((s) => data.Content.includes(s))) return;
            const modedData = (prefix, text) => ({
                ...data,
                Content: `${prefix} ${text}`,
                Dictionary: /** @type {ChatMessageDictionary} */ ([{ Automatic: true }, { AutoTranslated: true }]),
            });

            if (data.Sender === Player.MemberNumber) {
                const tLang = validItemCraftingDesc(speakingAssets);
                if (tLang)
                    translateText(data.Content, tLang).then(({ translatedText }) =>
                        ServerSend("ChatRoomChat", modedData("🔊", translatedText))
                    );
            } else {
                const tLang = validItemCraftingDesc(hearingAssets);
                if (tLang)
                    translateText(data.Content, tLang).then(({ translatedText }) =>
                        ChatRoomMessage(modedData("📞", translatedText))
                    );
            }
        }
    });
}
