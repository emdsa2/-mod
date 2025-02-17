import AssetManager from "@mod-utils/AssetManager";
import { VersionSupport } from "@mod-utils/VersionSupport";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "玩偶_Luzi",
    Random: false,
    Top: 0,
    Left: 0,
    ParentGroup: VersionSupport.NoParentGroup,
    Priority: 50,
    PoseMapping: {
        TapedHands: "TapedHands",
        Yoked: "TapedHands",
        OverTheHead: "TapedHands",
        BackBoxTie: "TapedHands",
        BackElbowTouch: "TapedHands",
        BackCuffs: "TapedHands",
        Hogtied: "TapedHands",
        AllFours: "TapedHands",
    },
    Layer: [
        // 玩具店
        { Name: "Saki", AllowTypes: { d: 1 } },
        { Name: "Luzi", AllowTypes: { d: 2 } },
        { Name: "若若", AllowTypes: { d: 3 } },

        // 狼窝
        { Name: "吉娜", AllowTypes: { s: 1 } },
        { Name: "Ada", AllowTypes: { s: 2 } },
        { Name: "Luzi2", AllowTypes: { s: 3 } },
        { Name: "Reisigure", AllowTypes: { s: 4 } },
        { Name: "Atlantis", AllowTypes: { s: 5 } },
        { Name: "Xin", AllowTypes: { s: 6 } },
        { Name: "空", AllowTypes: { s: 7 } },
        { Name: "空", AllowTypes: { s: 8 } },

        // 芷窝
        { Name: "芷童", AllowTypes: { z: 1 } },
        { Name: "ZforShort", AllowTypes: { z: 2 } },
        { Name: "Gin", AllowTypes: { z: 3 } },
        { Name: "Echo", AllowTypes: { z: 4 } },
        { Name: "ᐛ", AllowTypes: { z: 5 } },
        { Name: "ᐖ", AllowTypes: { z: 6 } },
        { Name: "芙缇娅", AllowTypes: { z: 7 } },
        { Name: "芷小童", AllowTypes: { z: 8 } },
        { Name: "临", AllowTypes: { z: 9 } },
        { Name: "小安", AllowTypes: { z: 10 } },
        { Name: "Suki", AllowTypes: { z: 11 } },
        { Name: "haru", AllowTypes: { z: 12 } },
        { Name: "兔叽", AllowTypes: { z: 13 } },
        { Name: "空", AllowTypes: { z: 14 } },
        { Name: "空", AllowTypes: { z: 15 } },
        { Name: "空", AllowTypes: { z: 16 } },
        { Name: "空", AllowTypes: { z: 17 } },

        // Catnest
        { Name: "XinLian", AllowTypes: { c: 1 } },
        { Name: "Zheiyun", AllowTypes: { c: 2 } },
        { Name: "Cyäegha", AllowTypes: { c: 3 } },
        { Name: "PumpkinPie", AllowTypes: { c: 4 } },
        { Name: "Lux", AllowTypes: { c: 5 } },
        { Name: "居x", AllowTypes: { c: 6 } },
        { Name: "Caius", AllowTypes: { c: 7 } },
        { Name: "Neko", AllowTypes: { c: 8 } },

        // 猫州猫庭府玩偶
        { Name: "Axa", AllowTypes: { f: 1 } },
        { Name: "Shirayuki", AllowTypes: { f: 2 } },
        { Name: "Nail", AllowTypes: { f: 3 } },
        { Name: "Nekonya蓝", AllowTypes: { f: 4 } },
        { Name: "小果", AllowTypes: { f: 5 } },
        { Name: "空", AllowTypes: { f: 6 } },
        { Name: "空", AllowTypes: { f: 7 } },
        { Name: "空", AllowTypes: { f: 8 } },

        // 小夜家玩偶
        { Name: "向归夜", AllowTypes: { y: 1 } },
        { Name: "圣光光", AllowTypes: { y: 2 } },
        { Name: "娜娜", AllowTypes: { y: 3 } },
        { Name: "彤酱", AllowTypes: { y: 4 } },
        { Name: "璃心", AllowTypes: { y: 5 } },
        { Name: "雫", AllowTypes: { y: 6 } },
        { Name: "小狼", AllowTypes: { y: 7 } },
        { Name: "小果", AllowTypes: { y: 8 } },
        { Name: "茗子", AllowTypes: { y: 9 } },
        { Name: "时光光", AllowTypes: { y: 10 } },
        { Name: "xxxx", AllowTypes: { y: 11 } },
        { Name: "果子狸", AllowTypes: { y: 12 } },
        { Name: "雪瑗", AllowTypes: { y: 13 } },
        { Name: "空", AllowTypes: { y: 14 } },
        { Name: "空", AllowTypes: { y: 15 } },
        { Name: "空", AllowTypes: { y: 16 } },
        { Name: "空", AllowTypes: { y: 17 } },

        // 盒子的小黑屋
        { Name: "葡萄果汁盒", AllowTypes: { hz: 1 } },
        { Name: "时雨Tokiame", AllowTypes: { hz: 2 } },
        { Name: "殇梦溪", AllowTypes: { hz: 3 } },
        { Name: "Neko2", AllowTypes: { hz: 4 } },
        { Name: "mizuki池", AllowTypes: { hz: 5 } },
        { Name: "莉娅", AllowTypes: { hz: 6 } },
        { Name: "空", AllowTypes: { hz: 7 } },
        { Name: "空", AllowTypes: { hz: 8 } },

        // 吸血鬼城堡
        { Name: "岚岚", AllowTypes: { x: 1 } },
        { Name: "欧佩娜", AllowTypes: { x: 2 } },
        { Name: "艾欧娜", AllowTypes: { x: 3 } },
        { Name: "柚子", AllowTypes: { x: 4 } },
        { Name: "梨子", AllowTypes: { x: 5 } },
        { Name: "Lyndis琳", AllowTypes: { x: 6 } },
        { Name: "黛烟", AllowTypes: { x: 7 } },
        { Name: "空", AllowTypes: { x: 8 } },

        // 路过的玩偶
        { Name: "li", AllowTypes: { l: 1 } },
        { Name: "YouXiang", AllowTypes: { l: 2 } },
        { Name: "Lilian", AllowTypes: { l: 3 } },
        { Name: "泠雨", AllowTypes: { l: 4 } },
        { Name: "墨芸", AllowTypes: { l: 5 } },
        { Name: "Poi", AllowTypes: { l: 6 } },
        { Name: "Pokemon", AllowTypes: { l: 7 } },
        { Name: "Clara", AllowTypes: { l: 8 } },
        { Name: "WallyIlma", AllowTypes: { l: 9 } },
        { Name: "奈芙塔莉", AllowTypes: { l: 10 } },
        { Name: "瑞饼", AllowTypes: { l: 11 } },
        { Name: "Annie", AllowTypes: { l: 12 } },
        { Name: "accoo", AllowTypes: { l: 13 } },
        { Name: "鸢", AllowTypes: { l: 14 } },
        { Name: "疾风", AllowTypes: { l: 15 } },
        { Name: "Eleanor", AllowTypes: { l: 16 } },
        { Name: "小铃铛", AllowTypes: { l: 17 } },
        { Name: "莉莉丝", AllowTypes: { l: 18 } },
        { Name: "LaBi", AllowTypes: { l: 19 } },
        { Name: "空", AllowTypes: { l: 20 } },
        { Name: "空", AllowTypes: { l: 21 } },
        { Name: "空", AllowTypes: { l: 22 } },
        { Name: "空", AllowTypes: { l: 23 } },
        { Name: "空", AllowTypes: { l: 24 } },
        { Name: "空", AllowTypes: { l: 25 } },
        { Name: "空", AllowTypes: { l: 26 } },
    ],
};

const typeNames = {
    d: "玩具店玩偶",
    s: "狼窝玩偶",
    z: "芷窝玩偶",
    c: "Catnest玩偶",
    f: "猫州猫庭府玩偶",
    y: "小夜家玩偶",
    hz: "盒子的小黑屋玩偶",
    x: "吸血鬼城堡",
    l: "路过的玩偶",
};

const translations = { CN: "玩偶", EN: "Plushies" };

/** @type {Translation.Dialog} */
const predefDialog = {
    CN: {
        ItemMisc玩偶_LuziOptionhz4: "Neko",

        ItemMisc玩偶_LuziSetd2: "SourceCharacter给了DestinationCharacter一只笨蛋的Luzi玩偶.",
        ItemMisc玩偶_LuziSets3: "SourceCharacter给了DestinationCharacter一只笨蛋的Luzi玩偶.",
        ItemMisc玩偶_LuziSetc3: "SourceCharacter给了DestinationCharacter一只超厉害超威严bc第一的Cyäegha大人的眼线!",
        ItemMisc玩偶_LuziSetc4: "SourceCharacter给了DestinationCharacter一只超色气的PumpkinPie样子的玩偶.",
        ItemMisc玩偶_LuziSetx1: "SourceCharacter给了DestinationCharacter一只城堡真正的主人, 伟大! 优雅! 的吸血鬼始祖岚岚大人样子的玩偶.",

    },
};

// 下面是根据上面的内容，生成描述的代码
// 也就是说，不用手动写描述文字啦，只用写上面的内容就行

/** @type {ModularItemModuleConfig []} */
const modules = /** @type {AssetLayerDefinition[]}*/ (asset.Layer).reduce((pv, cv) => {
    const Key = Object.keys(cv.AllowTypes)[0];
    const Name = typeNames[Key];
    const module = pv.find((m) => m.Name === Name);
    if (!module) {
        pv.push({
            Name,
            DrawImages: false,
            Key,
            Options: [{}, {}],
        });
    } else {
        module.Options.push({});
    }
    return pv;
}, /** @type {ModularItemModuleConfig[]} */([]));

/** @type {ModularItemConfig} */
const extended = {
    Archetype: ExtendedArchetype.MODULAR,
    ChangeWhenLocked: false,
    Modules: modules,
};

const layerNames = /** @type {AssetLayerDefinition[]}*/ (asset.Layer).reduce((pv, cv) => {
    const [k, v] = Object.entries(cv.AllowTypes)[0];
    pv[`${typeNames[k]}${v}`] = cv.Name;
    return pv;
}, /** @type { Record<string,string> } */({}));

/** @type { Record<string,string> } */
const cnDialog = /** @type {ModularItemModuleConfig[]}*/ (modules).reduce((pv, cv) => {
    const { Name, Key, Options } = cv;

    pv[`ItemMisc玩偶_LuziSelect${Name}`] = `选择${Name}`;
    pv[`ItemMisc玩偶_LuziModule${Name}`] = `${Name}`;
    pv[`ItemMisc玩偶_LuziOption${Key}0`] = "空";
    pv[`ItemMisc玩偶_LuziSet${Key}0`] = "SourceCharacter移除了DestinationCharacter手上的玩偶.";

    Options.forEach((_, i) => {
        if (i === 0) return;
        const layerName = layerNames[`${Name}${i}`];
        if (!layerName) return;
        const keyOption = `ItemMisc玩偶_LuziOption${Key}${i}`;
        const keySet = `ItemMisc玩偶_LuziSet${Key}${i}`;
        if (typeof pv[keyOption] !== "string") pv[keyOption] = `${layerName}`;
        if (typeof pv[keySet] !== "string")
            pv[keySet] = `SourceCharacter给DestinationCharacter一个可爱的${layerName}玩偶.`;
    });

    return pv;
}, /** @type { Record<string,string> } */({ ItemMisc玩偶_LuziSelectBase: "选择房间", ...(predefDialog.CN || {}) }));

/** @type { Record<string,string> } */

const enDialog = /** @type {ModularItemModuleConfig[]}*/ (modules).reduce((pv, cv) => {
    const { Name, Key, Options } = cv;

    pv[`ItemMisc玩偶_LuziSelect${Name}`] = `Select ${Name}`;
    pv[`ItemMisc玩偶_LuziModule${Name}`] = `${Name}`;
    pv[`ItemMisc玩偶_LuziOption${Key}0`] = "Empty";
    pv[`ItemMisc玩偶_LuziSet${Key}0`] = "SourceCharacter removes the doll from DestinationCharacter hand.";

    Options.forEach((_, i) => {
        if (i === 0) return;
        const layerName = layerNames[`${Name}${i}`];
        if (!layerName) return;
        const keyOption = `ItemMisc玩偶_LuziOption${Key}${i}`;
        const keySet = `ItemMisc玩偶_LuziSet${Key}${i}`;
        if (typeof pv[keyOption] !== "string") pv[keyOption] = `${layerName}`;
        if (typeof pv[keySet] !== "string")
            pv[keySet] = `SourceCharacter gives DestinationCharacter a cute ${layerName} doll.`;
    });

    return pv;
}, /** @type { Record<string,string> } */({ ItemMisc玩偶_LuziSelectBase: "Select Room", ...(predefDialog.EN || {}) }));

/** @type { Record<string,string> } */
const ruDialog = /** @type {ModularItemModuleConfig[]}*/ (modules).reduce((pv, cv) => {
    const { Name, Key, Options } = cv;

    pv[`ItemMisc玩偶_LuziSelect${Name}`] = `Выбрать ${Name}`;
    pv[`ItemMisc玩偶_LuziModule${Name}`] = `${Name}`;
    pv[`ItemMisc玩偶_LuziOption${Key}0`] = "Пусто";
    pv[`ItemMisc玩偶_LuziSet${Key}0`] = "SourceCharacter удаляет куклу из руки DestinationCharacter.";

    Options.forEach((_, i) => {
        if (i === 0) return;
        const layerName = layerNames[`${Name}${i}`];
        if (!layerName) return;
        const keyOption = `ItemMisc玩偶_LuziOption${Key}${i}`;
        const keySet = `ItemMisc玩偶_LuziSet${Key}${i}`;
        if (typeof pv[keyOption] !== "string") pv[keyOption] = `${layerName}`;
        if (typeof pv[keySet] !== "string")
            pv[keySet] = `SourceCharacter дает DestinationCharacter милую куклу ${layerName}.`;
    });

    return pv;
}, /** @type { Record<string,string> } */({ ItemMisc玩偶_LuziSelectBase: "Выбрать комнату", ...(predefDialog.RU || {}) }));

/** @type {Translation.Dialog} */
const dialogs = {
    CN: cnDialog,
    EN: enDialog,
    RU: ruDialog,
};

export default function () {
    AssetManager.addAsset("ItemMisc", asset, extended, translations);
    AssetManager.addCustomDialog(dialogs);
}
