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
     * @param {number | Partial<Record<AssetPoseName | PoseTypeDefault, number>>} diff
     * @returns {TopLeft.Data}
     */
    static topLeftAdjust(data, diff) {
        if (typeof diff === "number") {
            return /** @type {TopLeft.Data}*/ (
                Object.fromEntries(Object.entries(data).map(([key, value]) => [key, value + diff]))
            );
        } else {
            return /** @type {TopLeft.Data}*/ (
                Object.fromEntries(Object.entries(data).map(([key, value]) => [key, value + (diff[key] ?? 0)]))
            );
        }
    }

    /**
     * 覆写TopLeft数据工具函数
     * @param {TopLeft.Data} data
     * @param {number | Partial<Record<AssetPoseName | PoseTypeDefault, number>>} over
     * @returns {TopLeft.Data}
     */
    static topLeftOverride(data, over) {
        if (typeof over === "number") {
            return /** @type {TopLeft.Data}*/ (Object.fromEntries(Object.entries(data).map(([key, _]) => [key, over])));
        } else {
            return /** @type {TopLeft.Data}*/ (
                Object.fromEntries(Object.entries(data).map(([key, value]) => [key, over[key] ?? value]))
            );
        }
    }

    /**
     * 获取物品图片资源URL
     * @param {DynamicDrawingData<Record<string, unknown>>} drawData
     * @param {string} [OverrideName]
     */
    static getAssetURL(drawData, OverrideName) {
        const { A, L, Pose, G, GroupName } = drawData;

        const layer = A.Layer.find((l) => l.Name === L);

        let poseSegment = layer.PoseMapping[Pose];
        switch (poseSegment) {
            case PoseType.HIDE:
            case PoseType.DEFAULT:
            case undefined:
                poseSegment = "";
                break;
            default:
                poseSegment += "/";
                break;
        }

        const urlParts = [A.Name, G, OverrideName ?? L].filter((c) => c);

        return `Assets/${A.Group.Family}/${GroupName}/${poseSegment}${urlParts.join("_")}.png`;
    }

    /**
     * 有的物品基本上是复制的，但是有一些细微的差别，这个函数可以复制对应的物品对话
     * @param {CustomGroupName[]} groupNames 物品组名
     * @param {string[]} assetNames 物品名
     * @param {Translation.Dialog} simpleDesc
     * @return {Translation.Dialog}
     */
    static replicateTypedItemDialog(groupNames, assetNames, simpleDesc) {
        return groupNames.reduce((pv, group) => {
            for (const asset of assetNames) {
                for (const [lang, entry] of Object.entries(simpleDesc)) {
                    for (const [key, value] of Object.entries(entry)) {
                        const dialogKey = `${group}${asset}${key}`;
                        if (!pv[lang]) pv[lang] = {};
                        pv[lang][dialogKey] = value;
                    }
                }
            }
            return pv;
        }, /** @type {Translation.Dialog} */ ({}));
    }
}
