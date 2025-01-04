/** @type {AssetGroupItemName[]} */
const ItemGroups = [
    "ItemFeet",
    "ItemLegs",
    "ItemVulva",
    "ItemVulvaPiercings",
    "ItemButt",
    "ItemPelvis",
    "ItemTorso",
    "ItemTorso2",
    "ItemNipples",
    "ItemNipplesPiercings",
    "ItemBreast",
    "ItemArms",
    "ItemHands",
    "ItemHandheld",
    "ItemNeck",
    "ItemNeckAccessories",
    "ItemNeckRestraints",
    "ItemMouth",
    "ItemMouth2",
    "ItemMouth3",
    "ItemHead",
    "ItemNose",
    "ItemHood",
    "ItemEars",
    "ItemMisc",
    "ItemDevices",
    "ItemAddon",
    "ItemBoots",
];

export class Tools {
    /**
     * 发送自定义动作对话
     * @param {Translation.Entry} Entry
     * @param {{TargetCharacter?:Character, SourceCharacter?:Character, Asset?:Asset}} arg1
     */
    static sendCustomDialog(Entry, { TargetCharacter, SourceCharacter, Asset }) {
        if (CurrentScreen !== "ChatRoom") return;

        const DialogKey = "EchoModCustomDialog";
        const rEntry = Entry[TranslationLanguage] || Entry["CN"];

        if (!rEntry) {
            console.warn(`Entry missing required language: ${TranslationLanguage}`, Entry);
            return;
        }

        const builder = new DictionaryBuilder();

        if (SourceCharacter) builder.sourceCharacter(SourceCharacter);
        if (TargetCharacter) builder.targetCharacter(TargetCharacter);
        if (Asset) builder.asset(Asset);
        builder.text(`MISSING ACTIVITY DESCRIPTION FOR KEYWORD ${DialogKey}`, rEntry);

        ServerSend("ChatRoomChat", {
            Content: DialogKey,
            Type: "Activity",
            Dictionary: builder.build(),
        });
    }
    /**
     * 所有物品身体组
     * @param {AssetGroupItemName[]} excepts
     * @returns {AssetGroupItemName[]}
     */
    static AllItemGroups(excepts = []) {
        return ItemGroups.filter((name) => !excepts.includes(name));
    }

    /**
     * 绘制更新函数
     * @param {Character} C 角色
     * @param { {FrameTimer?:number} } data 绘制中的持久化数据
     */
    static drawUpdate(C, data) {
        const FrameTime = Player.GraphicsSettings ? Math.max(30, Player.GraphicsSettings.AnimationQuality * 0.6) : 30;

        const now = CommonTime();

        if (!data.FrameTimer) data.FrameTimer = now + FrameTime;
        if (data.FrameTimer < now) {
            data.FrameTimer = now + FrameTime;
            AnimationRequestRefreshRate(C, FrameTime);
            AnimationRequestDraw(C);
        }
    }

    /**
     * 支持文本标签，包括源角色、目标角色、目标角色（所有格）、物品名称
     * @returns {CommonChatTags[]}
     */
    static CommonChatTags() {
        return [
            CommonChatTags.SOURCE_CHAR,
            CommonChatTags.TARGET_CHAR,
            CommonChatTags.DEST_CHAR,
            CommonChatTags.ASSET_NAME,
        ];
    }

    /**
     * 调整TopLeft数据工具函数
     * @param {TopLeft.Data} data
     * @param {number} diff
     * @returns {TopLeft.Data}
     */
    static topLeftAdjust(data, diff) {
        return /** @type {TopLeft.Data}*/ (
            Object.fromEntries(Object.entries(data).map(([key, value]) => [key, value + diff]))
        );
    }
}
