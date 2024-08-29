import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "玩偶_Luzi",
    Random: false,
    Top: 0,
    Left: 0,
    ParentGroup: null,
    Priority: 28,
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

        // 狼窝
        { Name: "吉娜", AllowTypes: { s: 1 } },
        { Name: "Ada", AllowTypes: { s: 2 } },
        { Name: "Luzi2", AllowTypes: { s: 3 } },
        { Name: "Reisigure", AllowTypes: { s: 4 } },
        { Name: "Atlantis", AllowTypes: { s: 5 } },
        { Name: "Xin", AllowTypes: { s: 6 } },

        // 芷窝
        { Name: "Ttong", AllowTypes: { z: 1 } },
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

        // 小夜家玩偶
        { Name: "向归夜", AllowTypes: { y: 1 } },
        { Name: "圣光光", AllowTypes: { y: 2 } },
        { Name: "娜娜", AllowTypes: { y: 3 } },
        { Name: "彤酱", AllowTypes: { y: 4 } },
        { Name: "璃心", AllowTypes: { y: 5 } },
        { Name: "雫", AllowTypes: { y: 6 } },
        { Name: "小狼", AllowTypes: { y: 7 } },
        { Name: "小果", AllowTypes: { y: 8 } },

        // 路过的玩偶
        { Name: "li", AllowTypes: { l: 1 } },
        { Name: "YouXiang", AllowTypes: { l: 2 } },
        { Name: "Lilian", AllowTypes: { l: 3 } },
        { Name: "冷雨", AllowTypes: { l: 4 } },
    ],
};

const typeNames = {
    d: "玩具店玩偶",
    s: "狼窝玩偶",
    z: "芷窝玩偶",
    c: "Catnest玩偶",
    f: "猫州猫庭府玩偶",
    y: "小夜家玩偶",
    l: "路过的玩偶",
};

const translations = { CN: "玩偶", EN: "Plushies" };

/** @type {Translation.Dialog} */
const predefDialog = {
    CN: {
        ItemMisc玩偶_LuziSetd2: "SourceCharacter给了DestinationCharacter一只笨蛋的Luzi玩偶.",
        ItemMisc玩偶_LuziSets3: "SourceCharacter给了DestinationCharacter一只笨蛋的Luzi玩偶.",
        ItemMisc玩偶_LuziSetc3: "SourceCharacter给了DestinationCharacter一只超厉害超威严bc第一的Cyäegha大人的眼线!",
        ItemMisc玩偶_LuziSetc4: "SourceCharacter给了DestinationCharacter一只超色气的PumpkinPie玩偶.",
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
}, /** @type {ModularItemModuleConfig[]} */ ([]));

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
}, /** @type { Record<string,string> } */ ({}));

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
        pv[`ItemMisc玩偶_LuziOption${Key}${i}`] = `${layerName}`;
        pv[`ItemMisc玩偶_LuziSet${Key}${i}`] = `SourceCharacter给了DestinationCharacter一只可爱的${layerName}玩偶.`;
    });

    return pv;
}, /** @type { Record<string,string> } */ ({ ItemMisc玩偶_LuziSelectBase: "选择房间", ...(predefDialog.CN || {}) }));

/** @type { Record<string,string> } */

const enDialog = /** @type {ModularItemModuleConfig[]}*/ (modules).reduce((pv, cv) => {
    const { Name, Key, Options } = cv;

    pv[`ItemMisc玩偶_LuziSelect${Name}`] = `Select ${Name}`;
    pv[`ItemMisc玩偶_LuziModule${Name}`] = `${Name}`;
    pv[`ItemMisc玩偶_LuziOption${Key}0`] = "Empty";
    pv[`ItemMisc玩偶_LuziSet${Key}0`] = "SourceCharacter removes the doll from DestinationCharacter's hand.";

    Options.forEach((_, i) => {
        if (i === 0) return;
        const layerName = layerNames[`${Name}${i}`];
        if (!layerName) return;
        pv[`ItemMisc玩偶_LuziOption${Key}${i}`] = `${layerName}`;
        pv[`ItemMisc玩偶_LuziSet${Key}${i}`] = `SourceCharacter gives DestinationCharacter a cute ${layerName} doll.`;
    });

    return pv;
}, /** @type { Record<string,string> } */ ({ ItemMisc玩偶_LuziSelectBase: "Select Room", ...(predefDialog.EN || {}) }));

/** @type {Translation.Dialog} */
const dialogs = {
    CN: cnDialog,
    EN: enDialog,
};

export default function () {
    AssetManager.addAsset("ItemMisc", asset, extended, translations);
    AssetManager.addCustomDialog(dialogs);
}
