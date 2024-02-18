// ==UserScript==
// @name         BC 动作拓展
// @namespace    https://www.bondageprojects.com/
// @version      0.3.0
// @description  代码测试
// @author       Echo
// @include      /^https:\/\/(www\.)?bondageprojects\.elementfx\.com\/R\d+\/(BondageClub|\d+)(\/((index|\d+)\.html)?)?$/
// @include      /^https:\/\/(www\.)?bondage-europe\.com\/R\d+\/(BondageClub|\d+)(\/((index|\d+)\.html)?)?$/
// @grant        none
// @license      MIT
// ==/UserScript==

(function () {
    'use strict';
    // =======================================================================================
    var bcModSdk = function () { "use strict"; const e = "1.1.0"; function o(e) { alert("Mod ERROR:\n" + e); const o = new Error(e); throw console.error(o), o } const t = new TextEncoder; function n(e) { return !!e && "object" == typeof e && !Array.isArray(e) } function r(e) { const o = new Set; return e.filter((e => !o.has(e) && o.add(e))) } const i = new Map, a = new Set; function d(e) { a.has(e) || (a.add(e), console.warn(e)) } function s(e) { const o = [], t = new Map, n = new Set; for (const r of p.values()) { const i = r.patching.get(e.name); if (i) { o.push(...i.hooks); for (const [o, a] of i.patches.entries()) t.has(o) && t.get(o) !== a && d(`ModSDK: Mod '${r.name}' is patching function ${e.name} with same pattern that is already applied by different mod, but with different pattern:\nPattern:\n${o}\nPatch1:\n${t.get(o) || ""}\nPatch2:\n${a}`), t.set(o, a), n.add(r.name) } } o.sort(((e, o) => o.priority - e.priority)); const r = function (e, o) { if (0 === o.size) return e; let t = e.toString().replaceAll("\r\n", "\n"); for (const [n, r] of o.entries()) t.includes(n) || d(`ModSDK: Patching ${e.name}: Patch ${n} not applied`), t = t.replaceAll(n, r); return (0, eval)(`(${t})`) }(e.original, t); let i = function (o) { var t, i; const a = null === (i = (t = m.errorReporterHooks).hookChainExit) || void 0 === i ? void 0 : i.call(t, e.name, n), d = r.apply(this, o); return null == a || a(), d }; for (let t = o.length - 1; t >= 0; t--) { const n = o[t], r = i; i = function (o) { var t, i; const a = null === (i = (t = m.errorReporterHooks).hookEnter) || void 0 === i ? void 0 : i.call(t, e.name, n.mod), d = n.hook.apply(this, [o, e => { if (1 !== arguments.length || !Array.isArray(o)) throw new Error(`Mod ${n.mod} failed to call next hook: Expected args to be array, got ${typeof e}`); return r.call(this, e) }]); return null == a || a(), d } } return { hooks: o, patches: t, patchesSources: n, enter: i, final: r } } function c(e, o = !1) { let r = i.get(e); if (r) o && (r.precomputed = s(r)); else { let o = window; const a = e.split("."); for (let t = 0; t < a.length - 1; t++)if (o = o[a[t]], !n(o)) throw new Error(`ModSDK: Function ${e} to be patched not found; ${a.slice(0, t + 1).join(".")} is not object`); const d = o[a[a.length - 1]]; if ("function" != typeof d) throw new Error(`ModSDK: Function ${e} to be patched not found`); const c = function (e) { let o = -1; for (const n of t.encode(e)) { let e = 255 & (o ^ n); for (let o = 0; o < 8; o++)e = 1 & e ? -306674912 ^ e >>> 1 : e >>> 1; o = o >>> 8 ^ e } return ((-1 ^ o) >>> 0).toString(16).padStart(8, "0").toUpperCase() }(d.toString().replaceAll("\r\n", "\n")), l = { name: e, original: d, originalHash: c }; r = Object.assign(Object.assign({}, l), { precomputed: s(l), router: () => { }, context: o, contextProperty: a[a.length - 1] }), r.router = function (e) { return function (...o) { return e.precomputed.enter.apply(this, [o]) } }(r), i.set(e, r), o[r.contextProperty] = r.router } return r } function l() { const e = new Set; for (const o of p.values()) for (const t of o.patching.keys()) e.add(t); for (const o of i.keys()) e.add(o); for (const o of e) c(o, !0) } function f() { const e = new Map; for (const [o, t] of i) e.set(o, { name: o, original: t.original, originalHash: t.originalHash, sdkEntrypoint: t.router, currentEntrypoint: t.context[t.contextProperty], hookedByMods: r(t.precomputed.hooks.map((e => e.mod))), patchedByMods: Array.from(t.precomputed.patchesSources) }); return e } const p = new Map; function u(e) { p.get(e.name) !== e && o(`Failed to unload mod '${e.name}': Not registered`), p.delete(e.name), e.loaded = !1, l() } function g(e, t, r) { "string" == typeof e && "string" == typeof t && (alert(`Mod SDK warning: Mod '${e}' is registering in a deprecated way.\nIt will work for now, but please inform author to update.`), e = { name: e, fullName: e, version: t }, t = { allowReplace: !0 === r }), e && "object" == typeof e || o("Failed to register mod: Expected info object, got " + typeof e), "string" == typeof e.name && e.name || o("Failed to register mod: Expected name to be non-empty string, got " + typeof e.name); let i = `'${e.name}'`; "string" == typeof e.fullName && e.fullName || o(`Failed to register mod ${i}: Expected fullName to be non-empty string, got ${typeof e.fullName}`), i = `'${e.fullName} (${e.name})'`, "string" != typeof e.version && o(`Failed to register mod ${i}: Expected version to be string, got ${typeof e.version}`), e.repository || (e.repository = void 0), void 0 !== e.repository && "string" != typeof e.repository && o(`Failed to register mod ${i}: Expected repository to be undefined or string, got ${typeof e.version}`), null == t && (t = {}), t && "object" == typeof t || o(`Failed to register mod ${i}: Expected options to be undefined or object, got ${typeof t}`); const a = !0 === t.allowReplace, d = p.get(e.name); d && (d.allowReplace && a || o(`Refusing to load mod ${i}: it is already loaded and doesn't allow being replaced.\nWas the mod loaded multiple times?`), u(d)); const s = e => { "string" == typeof e && e || o(`Mod ${i} failed to patch a function: Expected function name string, got ${typeof e}`); let t = g.patching.get(e); return t || (t = { hooks: [], patches: new Map }, g.patching.set(e, t)), t }, f = { unload: () => u(g), hookFunction: (e, t, n) => { g.loaded || o(`Mod ${i} attempted to call SDK function after being unloaded`); const r = s(e); "number" != typeof t && o(`Mod ${i} failed to hook function '${e}': Expected priority number, got ${typeof t}`), "function" != typeof n && o(`Mod ${i} failed to hook function '${e}': Expected hook function, got ${typeof n}`); const a = { mod: g.name, priority: t, hook: n }; return r.hooks.push(a), l(), () => { const e = r.hooks.indexOf(a); e >= 0 && (r.hooks.splice(e, 1), l()) } }, patchFunction: (e, t) => { g.loaded || o(`Mod ${i} attempted to call SDK function after being unloaded`); const r = s(e); n(t) || o(`Mod ${i} failed to patch function '${e}': Expected patches object, got ${typeof t}`); for (const [n, a] of Object.entries(t)) "string" == typeof a ? r.patches.set(n, a) : null === a ? r.patches.delete(n) : o(`Mod ${i} failed to patch function '${e}': Invalid format of patch '${n}'`); l() }, removePatches: e => { g.loaded || o(`Mod ${i} attempted to call SDK function after being unloaded`); s(e).patches.clear(), l() }, callOriginal: (e, t, n) => (g.loaded || o(`Mod ${i} attempted to call SDK function after being unloaded`), "string" == typeof e && e || o(`Mod ${i} failed to call a function: Expected function name string, got ${typeof e}`), Array.isArray(t) || o(`Mod ${i} failed to call a function: Expected args array, got ${typeof t}`), function (e, o, t = window) { return c(e).original.apply(t, o) }(e, t, n)), getOriginalHash: e => ("string" == typeof e && e || o(`Mod ${i} failed to get hash: Expected function name string, got ${typeof e}`), c(e).originalHash) }, g = { name: e.name, fullName: e.fullName, version: e.version, repository: e.repository, allowReplace: a, api: f, loaded: !0, patching: new Map }; return p.set(e.name, g), Object.freeze(f) } function h() { const e = []; for (const o of p.values()) e.push({ name: o.name, fullName: o.fullName, version: o.version, repository: o.repository }); return e } let m; const y = function () { if (void 0 === window.bcModSdk) return window.bcModSdk = function () { const o = { version: e, apiVersion: 1, registerMod: g, getModsInfo: h, getPatchingInfo: f, errorReporterHooks: Object.seal({ hookEnter: null, hookChainExit: null }) }; return m = o, Object.freeze(o) }(); if (n(window.bcModSdk) || o("Failed to init Mod SDK: Name already in use"), 1 !== window.bcModSdk.apiVersion && o(`Failed to init Mod SDK: Different version already loaded ('1.1.0' vs '${window.bcModSdk.version}')`), window.bcModSdk.version !== e && (alert(`Mod SDK warning: Loading different but compatible versions ('1.1.0' vs '${window.bcModSdk.version}')\nOne of mods you are using is using an old version of SDK. It will work for now but please inform author to update`), window.bcModSdk.version.startsWith("1.0.") && void 0 === window.bcModSdk._shim10register)) { const e = window.bcModSdk, o = Object.freeze(Object.assign(Object.assign({}, e), { registerMod: (o, t, n) => o && "object" == typeof o && "string" == typeof o.name && "string" == typeof o.version ? e.registerMod(o.name, o.version, "object" == typeof t && !!t && !0 === t.allowReplace) : e.registerMod(o, t, n), _shim10register: !0 })); window.bcModSdk = o } return window.bcModSdk }(); return "undefined" != typeof exports && (Object.defineProperty(exports, "__esModule", { value: !0 }), exports.default = y), y }();

    const MOD_NAME = "动作拓展";
    const MOD_FULL_NAME = "动作拓展";
    const MOD_VERSION = "0.3.1";

    const 笨蛋Luzi = bcModSdk.registerMod({
        name: MOD_NAME,
        fullName: MOD_FULL_NAME,
        version: MOD_VERSION
    });

    const w = window;
    const ActivityICONS = new Map();
    const poseMapping = {};

    function patchFunction(target, patches) {
        笨蛋Luzi.patchFunction(target, patches);
    }

    var isLogin = false;
    笨蛋Luzi.hookFunction('LoginResponse', 0, (args, next) => {
        if (!isLogin) {
            console.log("动作拓展0.3.1已加载！")

            // 屏蔽跨域
            patchFunction("GLDrawLoadImage", {
                "Img.src = url;": 'Img.crossOrigin = "Anonymous";\n\t\tImg.src = url;',
            });
            patchFunction("CommonDynamicFunction", {
                "else": '// else',
                "console.log": '// console.log',
            });
            isLogin = true;
        }
        next(args);
    });

    /**
     * 替换原始动作
     * @param {string} args - 聊天数据
     * @param {string} itemSlot - 道具所在部位
     * @param {string} itemName - 道具名称
     * @param {string} itemContent - 道具内容
     * @param {string} replacementText - 替换文本
     */
    function ReplaceOriginalAction(args, itemSlot, itemName, itemContent, replacementText) {
        if (!!InventoryIsItemInList(Player, itemSlot, itemName)) {
            if (args[0] == "ChatRoomChat" && args[1]?.Type == "Activity") {
                if (args[1] && args[1]?.Content === itemContent) {
                    args[1].Content = "笨蛋Luzi";
                    args[1].Dictionary.push({
                        Tag: "MISSING ACTIVITY DESCRIPTION FOR KEYWORD " + args[1].Content,
                        Text: replacementText
                    });
                }
            }
        }
    }

    // 替换自己发出去的文字
    笨蛋Luzi.hookFunction("ServerSend", 5, (args, next) => {
        if (args[0] == "ChatRoomChat" && args[1]?.Type == "Activity") {
            let data = args[1];
            let actName = data.Dictionary[3]?.ActivityName ?? "";
            if (actName.indexOf("笨蛋Luzi_") == 0) {
                let { metadata, substitutions } = ChatRoomMessageRunExtractors(data, Player)
                let msg = ActivityDictionaryText(data.Content);
                msg = CommonStringSubstitute(msg, substitutions ?? [])
                data.Dictionary.push({
                    Tag: "MISSING ACTIVITY DESCRIPTION FOR KEYWORD " + data.Content,
                    Text: msg
                });
            }
            if (actName.indexOf("笨蛋笨Luzi_") == 0) {
                let { metadata, substitutions } = ChatRoomMessageRunExtractors(data, Player)
                let msg = ActivityDictionaryText(data.Content);
                msg = CommonStringSubstitute(msg, substitutions ?? [])
                data.Dictionary.push({
                    Tag: "MISSING ACTIVITY DESCRIPTION FOR KEYWORD " + data.Content,
                    Text: msg
                });
            }
            let language = localStorage.getItem("BondageClubLanguage");
            if ((language === "CN" || language === "TW")) {
                ReplaceOriginalAction(args, "SuitLower", "鱼鱼尾_Luzi", "ChatSelf-ItemFeet-Wiggle", "SourceCharacter摇晃自己的鱼尾.")
                ReplaceOriginalAction(args, "SuitLower", "鱼鱼尾_Luzi", "ChatSelf-ItemBoots-Wiggle", "SourceCharacter摇晃自己的鱼尾.")
                ReplaceOriginalAction(args, "SuitLower", "鱼鱼尾_Luzi", "ChatOther-ItemFeet-Kick", "SourceCharacter用鱼尾在TargetCharacter的小腿上拍了一下.")
                ReplaceOriginalAction(args, "SuitLower", "鱼鱼尾_Luzi", "ChatOther-ItemLegs-Kick", "SourceCharacter用鱼尾在TargetCharacter的大腿上拍了一下.")
                ReplaceOriginalAction(args, "SuitLower", "鱼鱼尾_Luzi", "ChatSelf-ItemBoots-笨蛋Luzi_跺脚", "SourceCharacter用鱼尾不停地拍打着地面.")
                ReplaceOriginalAction(args, "SuitLower", "鱼鱼尾_Luzi", "ChatSelf-ItemBoots-Lick", "SourceCharacter舔PronounPossessive的鱼尾巴.")
                ReplaceOriginalAction(args, "SuitLower", "鱼鱼尾_Luzi", "ChatSelf-ItemFeet-Caress", "SourceCharacter轻抚自己的鱼尾.")
                ReplaceOriginalAction(args, "SuitLower", "鱼鱼尾_Luzi", "ChatSelf-ItemBoots-Caress", "SourceCharacter抚摸PronounPossessive的鱼尾.")
                ReplaceOriginalAction(args, "SuitLower", "鱼鱼尾_Luzi", "ChatSelf-ItemFeet-Tickle", "SourceCharacter挠了挠自己的鱼尾.")
                ReplaceOriginalAction(args, "SuitLower", "鱼鱼尾_Luzi", "ChatSelf-ItemLegs-笨蛋Luzi_摇晃双腿", "SourceCharacter摇晃PronounPossessive的鱼尾.")
                ReplaceOriginalAction(args, "SuitLower", "鱼鱼尾_Luzi", "ChatSelf-ItemBoots-LSCG_Flick", "SourceCharacter轻弹自己的鱼尾.")
            }

            // 找到具有 ActivityName 属性的对象
            // const activityObjects = data.Dictionary.filter(item => item.hasOwnProperty('ActivityName'));
            // activityObjects.forEach(activityObject => {// 遍历找到的对象并替换 ActivityName 值
            //     activityObject.ActivityName = 'ShockItem';// 将 ActivityName 值替换为 'ShockItem'
            // });
            // console.log(args)

        }
        next(args);
    });


    /**
     * 创建活动对象的函数
     * @param {string} prerequisite - 动作前提条件
     * @param {string} name - 动作名称
     * @param {string} targetSelf - 对自己做动作的部位
     * @param {string} target - 对他人做动作的部位
     * @param {number} maxProgressSelf - 对自己做动作最大的兴奋值
     * @param {number} maxProgress - 对他人做动作最大的兴奋值
     * @param {Array} activityExpression - 动作表情
     * @param {string} targetSelftext - 对自己做动作的描述
     * @param {string} targettext - 对他人做动作的描述
     * @param {string} assetgroup - 道具图片的组名没有就 ""
     * @param {string} imageName - 如果道具组名没有就填写姿势图片名称
     * @param {boolean} modPosture - true修改姿势  false不修改姿势
     * @param {boolean} modifyOwnPosture - true修改自己的姿势  false活动的目标动作修改自己的姿势
     * @param {string} postureName - 姿势名称
     * @returns {object} - 包含创建的活动信息的对象
     */
    function createActivity(activityInfo) {
        const {
            prerequisite,
            name,
            targetSelf,
            target,
            maxProgressSelf,
            maxProgress,
            activityExpression,
            targetSelftext,
            targettext,
            assetgroup,
            imageName,
            modPosture,
            modifyOwnPosture,
            postureName
        } = activityInfo;

        const activity = {
            Name: `笨蛋Luzi_${name}`, // 道具名字
            TargetSelf: [targetSelf], // 自己的部位
            Target: [target], // 对方的部位
            MaxProgressSelf: maxProgressSelf, // 自己目标最大进度
            MaxProgress: maxProgress, // 对方活动最大进度
            Prerequisite: prerequisite, // 前提条件
            ActivityExpression: activityExpression, // 活动表情
        };
        ActivityFemale3DCG.push(activity); // 这个是把自己的活动数组添加进去
        ActivityFemale3DCGOrdering.push(activity.Name); // 这个是活动名字
        ActivityDictionary.push([`Activity笨蛋Luzi_${name}`, `${name}`]);
        if (targetSelftext) {
            ActivityDictionary.push([`Label-ChatSelf-${targetSelf}-${activity.Name}`, `${name}`]);
            ActivityDictionary.push([`ChatSelf-${targetSelf}-${activity.Name}`, targetSelftext]);
        };
        if (targettext) {
            ActivityDictionary.push([`Label-ChatOther-${target}-${activity.Name}`, `${name}`]);
            ActivityDictionary.push([`ChatOther-${target}-${activity.Name}`, targettext]);
        };

        if (!assetgroup) {
            ActivityICONS.set(`Assets/Female3DCG/Activity/笨蛋Luzi_${name}.png`, `Assets/Female3DCG/Activity/${imageName}.png`);
        } else {
            ActivityICONS.set(`Assets/Female3DCG/Activity/笨蛋Luzi_${name}.png`, `Assets/Female3DCG/${assetgroup}/Preview/${imageName}.png`);
        };
        if (modPosture) {
            if (modifyOwnPosture) {
                poseMapping[`ChatSelf-${targetSelf}-笨蛋Luzi_${name}`] = postureName;
            } else {
                poseMapping[`ChatOther-${target}-笨蛋Luzi_${name}`] = postureName;
            }
        };
    }
    // 添加动作
    const activitiesInfo = [
        {
            name: "歪头", prerequisite: [],
            targetSelf: "ItemNeck", targetSelftext: "SourceCharacter歪头.", maxProgressSelf: 50,
            target: "", targettext: "", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Wiggle",
            modPosture: false, modifyOwnPosture: true, postureName: ""
        },
        {
            name: "环视周围", prerequisite: [],
            targetSelf: "ItemNeck", targetSelftext: "SourceCharacter环视周围.", maxProgressSelf: 50,
            target: "", targettext: "", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Wiggle",
            modPosture: false, modifyOwnPosture: true, postureName: ""
        },
        {
            name: "上下打量", prerequisite: [],
            targetSelf: "", targetSelftext: "", maxProgressSelf: 50,
            target: "ItemHead", targettext: "SourceCharacter仔细打量TargetCharacter.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Wiggle",
            modPosture: false, modifyOwnPosture: true, postureName: ""
        },
        {
            name: "闭上眼睛", prerequisite: [],
            targetSelf: "ItemHead", targetSelftext: "SourceCharacter闭上了眼睛.", maxProgressSelf: 50,
            target: "", targettext: "", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Wiggle",
            modPosture: false, modifyOwnPosture: true, postureName: ""
        },
        {
            name: "眼睛呆滞", prerequisite: [],
            targetSelf: "ItemHead", targetSelftext: "SourceCharacter眼睛呆滞地看着前方.", maxProgressSelf: 50,
            target: "", targettext: "", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Wiggle",
            modPosture: false, modifyOwnPosture: true, postureName: ""
        },
        {
            name: "眼睛湿润", prerequisite: [],
            targetSelf: "ItemHead", targetSelftext: "SourceCharacter眼角泛着泪光.", maxProgressSelf: 50,
            target: "", targettext: "", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "MoanGagWhimper",
            modPosture: false, modifyOwnPosture: true, postureName: ""
        },
        {
            name: "流眼泪", prerequisite: [],
            targetSelf: "ItemHead", targetSelftext: "SourceCharacter眼泪从眼角流下.", maxProgressSelf: 50,
            target: "", targettext: "", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "MoanGagWhimper",
            modPosture: false, modifyOwnPosture: true, postureName: ""
        },
        {
            name: "张开嘴", prerequisite: [],
            targetSelf: "ItemMouth", targetSelftext: "SourceCharacter张开了嘴.", maxProgressSelf: 50,
            target: "", targettext: "", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Kiss",
            modPosture: false, modifyOwnPosture: true, postureName: ""
        },
        {
            name: "吞咽口水", prerequisite: [],
            targetSelf: "ItemNeck", targetSelftext: "SourceCharacter吞咽嘴里的口水.", maxProgressSelf: 50,
            target: "", targettext: "", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "MoanGagWhimper",
            modPosture: false, modifyOwnPosture: true, postureName: ""
        },
        {
            name: "流口水", prerequisite: [],
            targetSelf: "ItemMouth", targetSelftext: "SourceCharacter的口水顺着嘴角流下.", maxProgressSelf: 50,
            target: "", targettext: "", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "MoanGagWhimper",
            modPosture: false, modifyOwnPosture: true, postureName: ""
        },
        {
            name: "轻声喘息", prerequisite: ["Talk"],
            targetSelf: "ItemMouth", targetSelftext: "SourceCharacter发出轻声地喘息.", maxProgressSelf: 50,
            target: "", targettext: "", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "MoanGagGroan",
            modPosture: false, modifyOwnPosture: true, postureName: ""
        },
        {
            name: "打哈欠", prerequisite: ["UseMouth"],
            targetSelf: "ItemMouth", targetSelftext: "SourceCharacter张嘴打哈欠.", maxProgressSelf: 50,
            target: "", targettext: "", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Kiss",
            modPosture: false, modifyOwnPosture: true, postureName: ""
        },
        {
            name: "舔手", prerequisite: ["UseMouth"],
            targetSelf: "ItemHands", targetSelftext: "SourceCharacter舔PronounPossessive自己的手.", maxProgressSelf: 50,
            target: "ItemHands", targettext: "SourceCharacter舔TargetCharacter的手.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "MasturbateTongue",
            modPosture: false, modifyOwnPosture: true, postureName: ""
        },
        {
            name: "舔手指", prerequisite: ["UseMouth"],
            targetSelf: "ItemHands", targetSelftext: "SourceCharacter舔PronounPossessive自己的手指.", maxProgressSelf: 50,
            target: "ItemHands", targettext: "SourceCharacter舔TargetCharacter的手指.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "MasturbateTongue",
            modPosture: false, modifyOwnPosture: true, postureName: ""
        },
        {
            name: "吮吸手指", prerequisite: ["UseMouth"],
            targetSelf: "ItemHands", targetSelftext: "SourceCharacter吮吸PronounPossessive的手指.", maxProgressSelf: 50,
            target: "ItemHands", targettext: "SourceCharacter吮吸TargetCharacter的手指.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "FrenchKiss",
            modPosture: false, modifyOwnPosture: true, postureName: ""
        },
        {
            name: "舔脸", prerequisite: ["UseMouth"],
            targetSelf: "", targetSelftext: "", maxProgressSelf: 50,
            target: "ItemMouth", targettext: "SourceCharacter舔TargetCharacter的脸.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "MasturbateTongue",
            modPosture: false, modifyOwnPosture: true, postureName: ""
        },
        {
            name: "舔脚", prerequisite: ["UseTougue"],
            targetSelf: "ItemBoots", targetSelftext: "SourceCharacter舔PronounPossessive自己的脚.", maxProgressSelf: 50,
            target: "ItemBoots", targettext: "SourceCharacter舔TargetCharacter的脚.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "MasturbateTongue",
            modPosture: false, modifyOwnPosture: true, postureName: ""
        },
        {
            name: "嗅手", prerequisite: [],
            targetSelf: "ItemHands", targetSelftext: "SourceCharacter用鼻子嗅了嗅自己的手.", maxProgressSelf: 50,
            target: "ItemHands", targettext: "SourceCharacter用鼻子嗅了嗅TargetCharacter的手.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Kiss",
            modPosture: false, modifyOwnPosture: true, postureName: ""
        },
        {
            name: "跪下", prerequisite: ["UseArms"],
            targetSelf: "ItemLegs", targetSelftext: "SourceCharacter轻轻地跪了下来.", maxProgressSelf: 50,
            target: "", targettext: "", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Wiggle",
            modPosture: true, modifyOwnPosture: true, postureName: "Kneel"
        },
        {
            name: "站起来", prerequisite: ["UseArms"],
            targetSelf: "ItemLegs", targetSelftext: "SourceCharacter手扶着地站了起来.", maxProgressSelf: 50,
            target: "", targettext: "", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Wiggle",
            modPosture: true, modifyOwnPosture: true, postureName: ""
        },
        {
            name: "跪着张开腿", prerequisite: ["UseArms"],
            targetSelf: "ItemLegs", targetSelftext: "SourceCharacter张开了PronounPossessive的腿.", maxProgressSelf: 50,
            target: "", targettext: "", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Wiggle",
            modPosture: true, modifyOwnPosture: true, postureName: "KneelingSpread"
        },
        {
            name: "跪着并拢腿", prerequisite: ["UseArms"],
            targetSelf: "ItemLegs", targetSelftext: "SourceCharacter并拢了PronounPossessive的腿.", maxProgressSelf: 50,
            target: "", targettext: "", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Wiggle",
            modPosture: true, modifyOwnPosture: true, postureName: "Kneel"
        },
        {
            name: "趴下", prerequisite: ["UseArms"],
            targetSelf: "ItemBoots", targetSelftext: "SourceCharacter手放身后趴在地上.", maxProgressSelf: 50,
            target: "", targettext: "", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Wiggle",
            modPosture: true, modifyOwnPosture: true, postureName: "Hogtied"
        },
        {
            name: "四肢着地", prerequisite: ["UseArms"],
            targetSelf: "ItemBoots", targetSelftext: "SourceCharacter四肢着地趴在地上.", maxProgressSelf: 50,
            target: "", targettext: "", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Wiggle",
            modPosture: true, modifyOwnPosture: true, postureName: "AllFours"
        },
        {
            name: "起身跪下", prerequisite: ["UseArms"],
            targetSelf: "ItemBoots", targetSelftext: "SourceCharacter起身跪下.", maxProgressSelf: 50,
            target: "", targettext: "", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Wiggle",
            modPosture: true, modifyOwnPosture: true, postureName: "Kneel"
        },
        {
            name: "爬到脚边", prerequisite: [],
            targetSelf: "", targetSelftext: "", maxProgressSelf: 50,
            target: "ItemBoots", targettext: "SourceCharacter爬到TargetCharacter的脚边.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Wiggle",
            modPosture: true, modifyOwnPosture: false, postureName: "AllFours"
        },
        {
            name: "蹭大腿", prerequisite: [],
            targetSelf: "", targetSelftext: "", maxProgressSelf: 50,
            target: "ItemLegs", targettext: "SourceCharacter用头轻轻蹭TargetCharacter的大腿.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "PoliteKiss",
            modPosture: true, modifyOwnPosture: false, postureName: "Kneel"
        },
        {
            name: "蹭小腿", prerequisite: [],
            targetSelf: "", targetSelftext: "", maxProgressSelf: 50,
            target: "ItemFeet", targettext: "SourceCharacter用头轻轻蹭TargetCharacter的小腿.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "PoliteKiss",
            modPosture: true, modifyOwnPosture: false, postureName: "AllFours"
        },
        {
            name: "踮起双脚", prerequisite: ["UseFeet"],
            targetSelf: "ItemBoots", targetSelftext: "SourceCharacter踮起PronounPossessive的双脚.", maxProgressSelf: 50,
            target: "", targettext: "", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Kick",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "摇晃脚踝", prerequisite: [],
            targetSelf: "ItemBoots", targetSelftext: "SourceCharacter摇晃PronounPossessive的脚踝.", maxProgressSelf: 50,
            target: "", targettext: "", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Wiggle",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "伸出脚", prerequisite: [],
            targetSelf: "ItemBoots", targetSelftext: "SourceCharacter伸出PronounPossessive的脚.", maxProgressSelf: 50,
            target: "", targettext: "", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Kick",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "掰开双腿", prerequisite: ["UseHands", "UseArms"],
            targetSelf: "", targetSelftext: "", maxProgressSelf: 50,
            target: "ItemLegs", targettext: "SourceCharacter掰开TargetCharacter的双腿.", maxProgress: 500,
            activityExpression: [],
            assetgroup: "", imageName: "Wiggle",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "夹紧双腿", prerequisite: ["HasItemVulva"],
            targetSelf: "ItemLegs", targetSelftext: "SourceCharacter夹紧了自己的腿.", maxProgressSelf: 500,
            target: "", targettext: "", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Wiggle",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "脚托起下巴", prerequisite: ["HasKneel"],
            targetSelf: "", targetSelftext: "", maxProgressSelf: 50,
            target: "ItemMouth", targettext: "SourceCharacter用脚托起TargetCharacter的下巴.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Wiggle",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "戳脸", prerequisite: ["UseHands", "UseArms"],
            targetSelf: "ItemMouth", targetSelftext: "SourceCharacter戳了戳自己的脸.", maxProgressSelf: 50,
            target: "ItemMouth", targettext: "SourceCharacter戳了戳TargetCharacter的脸.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Caress",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "捏脸", prerequisite: ["UseHands", "UseArms"],
            targetSelf: "ItemMouth", targetSelftext: "SourceCharacter捏了捏自己的脸.", maxProgressSelf: 50,
            target: "ItemMouth", targettext: "SourceCharacter捏了捏TargetCharacter的脸.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Pinch",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "戳手臂", prerequisite: ["UseHands", "UseArms"],
            targetSelf: "ItemArms", targetSelftext: "SourceCharacter戳了戳自己的手臂.", maxProgressSelf: 50,
            target: "ItemArms", targettext: "SourceCharacter戳了戳TargetCharacter的手臂.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Caress",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "揉脸", prerequisite: ["UseHands", "UseArms"],
            targetSelf: "ItemMouth", targetSelftext: "SourceCharacter揉了揉自己的脸.", maxProgressSelf: 50,
            target: "ItemMouth", targettext: "SourceCharacter揉了揉TargetCharacter的脸.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Wiggle",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "摇晃手臂", prerequisite: ["UseHands"],
            targetSelf: "ItemArms", targetSelftext: "SourceCharacter摇晃自己的手臂.", maxProgressSelf: 50,
            target: "ItemArms", targettext: "SourceCharacter摇晃TargetCharacter的手臂.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Wiggle",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "轻推", prerequisite: ["UseHands", "UseArms"],
            targetSelf: "", targetSelftext: "", maxProgressSelf: 50,
            target: "ItemTorso", targettext: "SourceCharacter用手轻推TargetCharacter的身体.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Slap",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "托起脚", prerequisite: ["UseHands", "UseArms"],
            targetSelf: "", targetSelftext: "", maxProgressSelf: 50,
            target: "ItemBoots", targettext: "SourceCharacter托起TargetCharacter的脚.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Caress",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "扭动手腕", prerequisite: ["UseHands", "UseArms"],
            targetSelf: "ItemHands", targetSelftext: "SourceCharacter扭动PronounPossessive的手腕.", maxProgressSelf: 50,
            target: "", targettext: "", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Wiggle",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "扭动手腕", prerequisite: ["UseHands", "UseArms"],
            targetSelf: "ItemHead", targetSelftext: "SourceCharacter挠了挠PronounPossessive的头.", maxProgressSelf: 50,
            target: "", targettext: "", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Pull",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "盖住耳朵", prerequisite: ["UseHands", "UseArms"],
            targetSelf: "ItemEars", targetSelftext: "SourceCharacter用手盖住了自己的耳朵.", maxProgressSelf: 50,
            target: "ItemEars", targettext: "SourceCharacter用手盖住了TargetCharacter的耳朵.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "HandGag",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "遮住眼睛", prerequisite: ["UseHands", "UseArms"],
            targetSelf: "ItemHead", targetSelftext: "SourceCharacter用手遮住了自己的眼睛.", maxProgressSelf: 50,
            target: "ItemHead", targettext: "SourceCharacter用手遮住了TargetCharacter的眼睛.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "HandGag",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "捂住头", prerequisite: ["UseHands", "UseArms"],
            targetSelf: "ItemHead", targetSelftext: "SourceCharacter捂住自己的头.", maxProgressSelf: 50,
            target: "ItemHead", targettext: "SourceCharacter捂住TargetCharacter的头.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "HandGag",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "捂住下体", prerequisite: ["UseHands", "UseArms"],
            targetSelf: "ItemVulva", targetSelftext: "SourceCharacter捂住自己的下体.", maxProgressSelf: 50,
            target: "ItemVulva", targettext: "SourceCharacter捂住TargetCharacter的下体.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "HandGag",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "掀开裙子", prerequisite: ["UseHands", "UseArms"],
            targetSelf: "ItemButt", targetSelftext: "SourceCharacter掀开PronounPossessive的裙子.", maxProgressSelf: 50,
            target: "ItemButt", targettext: "SourceCharacter掀开TargetCharacter的裙子.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "MasturbateHand",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "挥手", prerequisite: ["UseHands", "UseArms"],
            targetSelf: "", targetSelftext: "", maxProgressSelf: 50,
            target: "ItemHands", targettext: "SourceCharacter向TargetCharacter挥手.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Slap",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "伸出手", prerequisite: ["UseHands", "UseArms"],
            targetSelf: "ItemHands", targetSelftext: "SourceCharacter伸出自己的手.", maxProgressSelf: 50,
            target: "", targettext: "", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Caress",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "捂住胸", prerequisite: ["UseHands", "UseArms"],
            targetSelf: "ItemBreast", targetSelftext: "SourceCharacter捂住自己的胸.", maxProgressSelf: 50,
            target: "", targettext: "", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Pull",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "手托起下巴", prerequisite: ["UseHands", "UseArms"],
            targetSelf: "", targetSelftext: "", maxProgressSelf: 50,
            target: "ItemMouth", targettext: "SourceCharacter用手托起TargetCharacter的下巴.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Caress",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "拽链子", prerequisite: ["UseHands", "UseArms", "HasLeash"],
            targetSelf: "", targetSelftext: "", maxProgressSelf: 50,
            target: "ItemNeck", targettext: "SourceCharacter拽TargetCharacter的链子.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "MasturbateHand",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "弹额头", prerequisite: ["UseHands", "UseArms"],
            targetSelf: "", targetSelftext: "", maxProgressSelf: 50,
            target: "ItemHead", targettext: "SourceCharacter弹了一下TargetCharacter的额头.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Pinch",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "弹阴蒂", prerequisite: ["UseHands", "UseArms"],
            targetSelf: "", targetSelftext: "", maxProgressSelf: 50,
            target: "ItemVulvaPiercings", targettext: "SourceCharacter弹了一下TargetCharacter的阴蒂.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Pinch",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "抱腿", prerequisite: ["UseArms"],
            targetSelf: "", targetSelftext: "", maxProgressSelf: 50,
            target: "ItemLegs", targettext: "SourceCharacter抱住TargetCharacter的腿.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Caress",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "拉扯衣角", prerequisite: ["UseHands", "UseArms"],
            targetSelf: "", targetSelftext: "", maxProgressSelf: 50,
            target: "ItemPelvis", targettext: "SourceCharacter用手拉扯TargetCharacter的衣角.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Pull",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "拍头", prerequisite: ["UseHands", "UseArms"],
            targetSelf: "", targetSelftext: "", maxProgressSelf: 50,
            target: "ItemHead", targettext: "SourceCharacter拍打TargetCharacter的头.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Slap",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "摇晃尾巴", prerequisite: ["HasTail"],
            targetSelf: "ItemButt", targetSelftext: "SourceCharacter摇晃PronounPossessive的尾巴.", maxProgressSelf: 50,
            target: "", targettext: "", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Wiggle",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "竖起尾巴", prerequisite: ["HasTailCat"],
            targetSelf: "ItemButt", targetSelftext: "SourceCharacter的尾巴竖了起来.", maxProgressSelf: 50,
            target: "", targettext: "", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Wiggle",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "炸毛", prerequisite: ["HasTailCat"],
            targetSelf: "ItemButt", targetSelftext: "SourceCharacter弓起后背, 身体的毛发立了起来, 发出嘶的声音.", maxProgressSelf: 50,
            target: "", targettext: "", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Bite",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "舔尾巴", prerequisite: ["HasTailCat"],
            targetSelf: "ItemButt", targetSelftext: "SourceCharacter舔自己的尾巴.", maxProgressSelf: 50,
            target: "ItemButt", targettext: "SourceCharacter舔TargetCharacter的尾巴.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "MasturbateTongue",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "轻抚尾巴", prerequisite: ["HasTail"],
            targetSelf: "ItemButt", targetSelftext: "SourceCharacter轻抚PronounPossessive的尾巴.", maxProgressSelf: 50,
            target: "ItemButt", targettext: "SourceCharacter轻抚TargetCharacter的尾巴.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Caress",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "尾巴叼在嘴里", prerequisite: ["HasTailCat"],
            targetSelf: "ItemButt", targetSelftext: "SourceCharacter叼起自己的尾巴.", maxProgressSelf: 50,
            target: "ItemButt", targettext: "SourceCharacter叼起TargetCharacter的尾巴.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Kiss",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "抬起屁股", prerequisite: [],
            targetSelf: "ItemButt", targetSelftext: "SourceCharacter弯腰抬起PronounPossessive的屁股.", maxProgressSelf: 50,
            target: "", targettext: "", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Wiggle",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "扇动翅膀", prerequisite: ["HasWings"],
            targetSelf: "ItemArms", targetSelftext: "SourceCharacter扇动PronounPossessive的翅膀.", maxProgressSelf: 50,
            target: "", targettext: "", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Wiggle",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "躲到身后", prerequisite: [],
            targetSelf: "", targetSelftext: "", maxProgressSelf: 50,
            target: "ItemTorso", targettext: "SourceCharacter躲到TargetCharacter的身后.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "SistersHug",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "移动到身后", prerequisite: [],
            targetSelf: "", targetSelftext: "", maxProgressSelf: 50,
            target: "ItemTorso", targettext: "SourceCharacter移动到TargetCharacter的身后.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "SistersHug",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "下巴搭在肩膀上", prerequisite: [],
            targetSelf: "", targetSelftext: "", maxProgressSelf: 50,
            target: "ItemNeck", targettext: "SourceCharacter把下巴搭在TargetCharacter的肩膀上.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "RestHead",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "手臂搭在肩膀上", prerequisite: ["UseArms"],
            targetSelf: "", targetSelftext: "", maxProgressSelf: 50,
            target: "ItemNeck", targettext: "SourceCharacter把手臂搭在TargetCharacter的肩膀上.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Slap",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "搂腰", prerequisite: ["UseArms", "UseHands"],
            targetSelf: "", targetSelftext: "", maxProgressSelf: 50,
            target: "ItemTorso", targettext: "SourceCharacter搂住TargetCharacter的腰.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "SistersHug",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "叉腰", prerequisite: ["UseArms", "UseHands"],
            targetSelf: "", targetSelftext: "", maxProgressSelf: 50,
            target: "ItemTorso", targettext: "SourceCharacter双手叉在腰上.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Choke",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "身体颤抖", prerequisite: [],
            targetSelf: "ItemTorso", targetSelftext: "SourceCharacter颤抖着身体.", maxProgressSelf: 50,
            target: "", targettext: "", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Wiggle",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "身体抽搐", prerequisite: [],
            targetSelf: "ItemTorso", targetSelftext: "SourceCharacter身体抽搐着.", maxProgressSelf: 50,
            target: "", targettext: "", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Wiggle",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "托起乳房", prerequisite: [],
            targetSelf: "ItemBreast", targetSelftext: "SourceCharacter托起PronounPossessive的双乳.", maxProgressSelf: 50,
            target: "ItemBreast", targettext: "SourceCharacter托起TargetCharacter的双乳.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Wiggle",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "揉搓乳头", prerequisite: ["UseHands", "UseArms", "ZoneNaked"],
            targetSelf: "ItemNipples", targetSelftext: "SourceCharacter揉搓PronounPossessive的乳头.", maxProgressSelf: 90,
            target: "ItemNipples", targettext: "SourceCharacter揉搓TargetCharacter的乳头.", maxProgress: 90,
            activityExpression: [],
            assetgroup: "", imageName: "Pinch",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "揉搓乳头", prerequisite: ["HasItemVulva"],
            targetSelf: "ItemLegs", targetSelftext: "SourceCharacter颤抖着双腿.", maxProgressSelf: 50,
            target: "", targettext: "", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Wiggle",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "摇晃双腿", prerequisite: [],
            targetSelf: "ItemLegs", targetSelftext: "SourceCharacter摇晃PronounPossessive的双腿.", maxProgressSelf: 50,
            target: "", targettext: "", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Wiggle",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "流出液体", prerequisite: ["HasItemVulva"],
            targetSelf: "ItemVulva", targetSelftext: "SourceCharacter股间有液体顺着的大腿流下.", maxProgressSelf: 50,
            target: "", targettext: "", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "MoanGagWhimper",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "失禁", prerequisite: ["HasItemVulva"],
            targetSelf: "ItemVulva", targetSelftext: "SourceCharacter的尿液顺着PronounPossessive大腿流下.", maxProgressSelf: 50,
            target: "", targettext: "", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "MoanGagWhimper",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "撇眼", prerequisite: [],
            targetSelf: "ItemHead", targetSelftext: "SourceCharacter撇了TargetCharacter一眼.", maxProgressSelf: 50,
            target: "", targettext: "", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Wiggle",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "跺脚", prerequisite: [],
            targetSelf: "ItemBoots", targetSelftext: "SourceCharacter不停地跺脚.", maxProgressSelf: 50,
            target: "", targettext: "", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Step",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "撩头发", prerequisite: ["UseArms", "UseHands"],
            targetSelf: "ItemHood", targetSelftext: "SourceCharacter撩起头发挂在耳边.", maxProgressSelf: 50,
            target: "", targettext: "", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Caress",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "手指插进阴道", prerequisite: ["UseHands", "ZoneNaked", "TargetZoneNaked"],
            targetSelf: "ItemVulva", targetSelftext: "SourceCharacter手指插进自己的的阴道内.", maxProgressSelf: 90,
            target: "ItemVulva", targettext: "SourceCharacter手指插进TargetCharacter的阴道内.", maxProgress: 90,
            activityExpression: [],
            assetgroup: "", imageName: "MasturbateHand",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "拔出自己的手指", prerequisite: ["UseHands", "ZoneNaked", "TargetZoneNaked"],
            targetSelf: "ItemVulva", targetSelftext: "SourceCharacter从PronounPossessive的阴道内拔出自己的手指,手指连着自己的爱液.", maxProgressSelf: 90,
            target: "ItemVulva", targettext: "SourceCharacter从TargetCharacter的阴道内拔出自己的手指,手指连着PronounPossessive的爱液.", maxProgress: 90,
            activityExpression: [],
            assetgroup: "", imageName: "MasturbateHand",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "蠕动手指", prerequisite: ["UseHands", "ZoneNaked", "TargetZoneNaked"],
            targetSelf: "ItemVulva", targetSelftext: "SourceCharacter在PronounPossessive的阴道内蠕动手指.", maxProgressSelf: 50,
            target: "ItemVulva", targettext: "SourceCharacter在TargetCharacter的阴道内蠕动手指.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Grope",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "快速抽插", prerequisite: ["UseHands", "ZoneNaked", "TargetZoneNaked"],
            targetSelf: "ItemVulva", targetSelftext: "SourceCharacter的手在PronounPossessive的阴道内快速抽插.", maxProgressSelf: 50,
            target: "ItemVulva", targettext: "SourceCharacter的手在TargetCharacter的阴道内快速抽插.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Grope",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "钩住阴蒂环", prerequisite: ["UseHands", "HasItemVulvaPiercings"],
            targetSelf: "ItemVulvaPiercings", targetSelftext: "SourceCharacter钩住自己的阴蒂环.", maxProgressSelf: 50,
            target: "ItemVulvaPiercings", targettext: "SourceCharacter钩住TargetCharacter的阴蒂环.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Pinch",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "拉扯阴蒂环", prerequisite: ["UseHands", "HasItemVulvaPiercings"],
            targetSelf: "ItemVulvaPiercings", targetSelftext: "SourceCharacter拉了一下自己的阴蒂环.", maxProgressSelf: 50,
            target: "ItemVulvaPiercings", targettext: "SourceCharacter拉了一下TargetCharacter的阴蒂环.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Pinch",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "宠物服爬到脚边", prerequisite: ["HasPet"],
            targetSelf: "", targetSelftext: "", maxProgressSelf: 50,
            target: "ItemBoots", targettext: "SourceCharacter爬到TargetCharacter脚边.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Wiggle",
            modPosture: true, modifyOwnPosture: false, postureName: "AllFours"
        },
        {
            name: "宠物服蹭小腿", prerequisite: ["HasPet"],
            targetSelf: "", targetSelftext: "", maxProgressSelf: 50,
            target: "ItemFeet", targettext: "SourceCharacter蹭TargetCharacter的腿.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Wiggle",
            modPosture: false, modifyOwnPosture: false, postureName: "AllFours"
        },
        {
            name: "宠物服蹭大腿", prerequisite: ["HasPet"],
            targetSelf: "", targetSelftext: "", maxProgressSelf: 50,
            target: "ItemLegs", targettext: "SourceCharacter蹭TargetCharacter的腿.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Wiggle",
            modPosture: false, modifyOwnPosture: false, postureName: "AllFours"
        },
        {
            name: "宠物服趴下", prerequisite: ["HasPet"],
            targetSelf: "ItemLegs", targetSelftext: "SourceCharacter四肢着地趴在地上.", maxProgressSelf: 50,
            target: "", targettext: "", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Wiggle",
            modPosture: true, modifyOwnPosture: false, postureName: "AllFours"
        },
        {
            name: "宠物服跪立", prerequisite: ["HasPet"],
            targetSelf: "ItemLegs", targetSelftext: "SourceCharacter手臂离地跪立.", maxProgressSelf: 50,
            target: "", targettext: "", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Wiggle",
            modPosture: true, modifyOwnPosture: true, postureName: "Hogtied"
        },
        {
            name: "宠物服扑", prerequisite: ["HasPet"],
            targetSelf: "", targetSelftext: "", maxProgressSelf: 50,
            target: "ItemArms", targettext: "SourceCharacter扑到TargetCharacter身上.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Wiggle",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "猫爪挠手", prerequisite: ["HasPawMittens"],
            targetSelf: "", targetSelftext: "", maxProgressSelf: 50,
            target: "ItemHands", targettext: "SourceCharacter用爪子挠了一下TargetCharacter的手.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "ItemHands", imageName: "PawMittens",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "猫爪挠手臂", prerequisite: ["HasPawMittens"],
            targetSelf: "", targetSelftext: "", maxProgressSelf: 50,
            target: "ItemArms", targettext: "SourceCharacter用爪子挠了一下TargetCharacter的手臂.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "ItemHands", imageName: "PawMittens",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "猫爪舔手", prerequisite: ["HasPawMittens"],
            targetSelf: "ItemHands", targetSelftext: "SourceCharacter舔自己的爪子.", maxProgressSelf: 50,
            target: "", targettext: "", maxProgress: 50,
            activityExpression: [],
            assetgroup: "ItemHands", imageName: "PawMittens",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "猫爪戳脸", prerequisite: ["HasPawMittens"],
            targetSelf: "ItemMouth", targetSelftext: "SourceCharacter用爪子戳了戳自己的脸.", maxProgressSelf: 50,
            target: "ItemMouth", targettext: "SourceCharacter用爪子戳了戳TargetCharacter的脸.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "ItemHands", imageName: "PawMittens",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "猫爪戳鼻子", prerequisite: ["HasPawMittens"],
            targetSelf: "ItemNose", targetSelftext: "SourceCharacter用爪子戳了戳自己的鼻子.", maxProgressSelf: 50,
            target: "ItemNose", targettext: "SourceCharacter用爪子戳了戳TargetCharacter的鼻子.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "ItemHands", imageName: "PawMittens",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "猫爪揉脸", prerequisite: ["HasPawMittens"],
            targetSelf: "ItemMouth", targetSelftext: "SourceCharacter用爪子揉了揉自己的脸.", maxProgressSelf: 50,
            target: "ItemMouth", targettext: "SourceCharacter用爪子揉了揉TargetCharacter的脸.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "ItemHands", imageName: "PawMittens",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "猫爪揉鼻子", prerequisite: ["HasPawMittens"],
            targetSelf: "ItemNose", targetSelftext: "SourceCharacter用爪子揉了揉自己的鼻子.", maxProgressSelf: 50,
            target: "ItemNose", targettext: "SourceCharacter用爪子揉了揉TargetCharacter的鼻子.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "ItemHands", imageName: "PawMittens",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "撞笼子", prerequisite: ["HasKennel"],
            targetSelf: "ItemArms", targetSelftext: "SourceCharacter用身体撞击笼子.", maxProgressSelf: 50,
            target: "", targettext: "", maxProgress: 50,
            activityExpression: [],
            assetgroup: "ItemDevices", imageName: "Kennel",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "咬笼子", prerequisite: ["HasKennel"],
            targetSelf: "ItemMouth", targetSelftext: "SourceCharacter用牙齿咬笼子.", maxProgressSelf: 50,
            target: "", targettext: "", maxProgress: 50,
            activityExpression: [],
            assetgroup: "ItemDevices", imageName: "Kennel",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "摇晃笼子", prerequisite: ["HasKennel"],
            targetSelf: "ItemArms", targetSelftext: "SourceCharacter摇晃笼子的门.", maxProgressSelf: 50,
            target: "", targettext: "", maxProgress: 50,
            activityExpression: [],
            assetgroup: "ItemDevices", imageName: "Kennel",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "泡沫剑架在脖子上", prerequisite: ["UseHands", "UseArms", "HasSword"],
            targetSelf: "ItemNeck", targetSelftext: "SourceCharacter把泡沫剑架在自己的脖子上.", maxProgressSelf: 50,
            target: "ItemNeck", targettext: "SourceCharacter把泡沫剑架在TargetCharacter的脖子上", maxProgress: 50,
            activityExpression: [],
            assetgroup: "ItemHandheld", imageName: "Sword",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "泡沫剑拍脸", prerequisite: ["UseHands", "UseArms", "HasSword"],
            targetSelf: "", targetSelftext: "", maxProgressSelf: 50,
            target: "ItemMouth", targettext: "SourceCharacter用泡沫剑轻轻拍了拍一下TargetCharacter的脸", maxProgress: 50,
            activityExpression: [],
            assetgroup: "ItemHandheld", imageName: "Sword",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "剪刀剪掉上衣", prerequisite: ["UseHands", "UseArms", "HasSword"],
            targetSelf: "ItemTorso", targetSelftext: "SourceCharacter用剪刀剪掉了自己的上衣.", maxProgressSelf: 50,
            target: "ItemTorso", targettext: "SourceCharacter用剪刀剪掉了TargetCharacter的上衣.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "ItemHandheld", imageName: "Scissors",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "剪刀剪掉下衣", prerequisite: ["UseHands", "UseArms", "HasSword"],
            targetSelf: "ItemPelvis", targetSelftext: "SourceCharacter用剪刀剪掉了自己的下衣.", maxProgressSelf: 50,
            target: "ItemPelvis", targettext: "SourceCharacter用剪刀剪掉了TargetCharacter的下衣.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "ItemHandheld", imageName: "Scissors",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "剪刀剪掉胸罩", prerequisite: ["UseHands", "UseArms", "HasSword"],
            targetSelf: "ItemBreast", targetSelftext: "SourceCharacter用剪刀剪掉了自己的胸罩.", maxProgressSelf: 50,
            target: "ItemBreast", targettext: "SourceCharacter用剪刀剪掉了TargetCharacter的胸罩.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "ItemHandheld", imageName: "Scissors",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "剪刀剪掉内裤", prerequisite: ["UseHands", "UseArms", "HasSword"],
            targetSelf: "ItemVulvaPiercings", targetSelftext: "SourceCharacter用剪刀剪掉了自己的内裤.", maxProgressSelf: 50,
            target: "ItemVulvaPiercings", targettext: "SourceCharacter用剪刀剪掉了TargetCharacter的内裤.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "ItemHandheld", imageName: "Scissors",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "剪刀剪掉袜子", prerequisite: ["UseHands", "UseArms", "HasSword"],
            targetSelf: "ItemBoots", targetSelftext: "SourceCharacter用剪刀剪掉了自己的袜子.", maxProgressSelf: 50,
            target: "ItemBoots", targettext: "SourceCharacter用剪刀剪掉了TargetCharacter的袜子.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "ItemHandheld", imageName: "Scissors",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "舔触手", prerequisite: ["HasTentacles"],
            targetSelf: "ItemMouth", targetSelftext: "SourceCharacter舔PronounPossessive的触手.", maxProgressSelf: 50,
            target: "", targettext: "", maxProgress: 50,
            activityExpression: [],
            assetgroup: "TailStraps", imageName: "Tentacles",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "触手摸头", prerequisite: ["HasTentacles2"],
            targetSelf: "ItemHead", targetSelftext: "SourceCharacter用触手摸了摸自己的头.", maxProgressSelf: 50,
            target: "ItemHead", targettext: "SourceCharacter用触手摸了摸TargetCharacter的头.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "TailStraps", imageName: "Tentacles",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "触手戳鼻子", prerequisite: ["HasTentacles2"],
            targetSelf: "ItemNose", targetSelftext: "SourceCharacter用触手戳了戳自己的鼻子.", maxProgressSelf: 50,
            target: "ItemNose", targettext: "SourceCharacter用触手戳了戳TargetCharacter的鼻子.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "TailStraps", imageName: "Tentacles",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "触手戳脸", prerequisite: ["HasTentacles2"],
            targetSelf: "ItemMouth", targetSelftext: "SourceCharacter用触手戳了戳自己的脸.", maxProgressSelf: 50,
            target: "ItemMouth", targettext: "SourceCharacter用触手戳了戳TargetCharacter的脸.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "TailStraps", imageName: "Tentacles",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "触手揉鼻子", prerequisite: ["HasTentacles2"],
            targetSelf: "ItemNose", targetSelftext: "SourceCharacter用触手揉了揉自己的鼻子.", maxProgressSelf: 50,
            target: "ItemNose", targettext: "SourceCharacter用触手揉了揉TargetCharacter的鼻子.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "TailStraps", imageName: "Tentacles",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "触手揉脸", prerequisite: ["HasTentacles2"],
            targetSelf: "ItemMouth", targetSelftext: "SourceCharacter用触手揉了揉自己的脸.", maxProgressSelf: 50,
            target: "ItemMouth", targettext: "SourceCharacter用触手揉了揉TargetCharacter的脸.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "TailStraps", imageName: "Tentacles",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "鱼尾揉脸", prerequisite: ["SuitLower鱼鱼尾_Luzi"],
            targetSelf: "ItemMouth", targetSelftext: "SourceCharacter用鱼尾揉了揉PronounPossessive自己的脸.", maxProgressSelf: 50,
            target: "ItemMouth", targettext: "SourceCharacter用鱼尾揉了揉TargetCharacter的脸.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "ItemLegs", imageName: "MermaidTail",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "鱼尾戳脸", prerequisite: ["SuitLower鱼鱼尾_Luzi"],
            targetSelf: "ItemMouth", targetSelftext: "SourceCharacter用鱼尾戳了戳PronounPossessive自己的脸.", maxProgressSelf: 50,
            target: "ItemMouth", targettext: "SourceCharacter用鱼尾戳了戳TargetCharacter的脸.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "ItemLegs", imageName: "MermaidTail",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "鱼尾抚脸", prerequisite: ["SuitLower鱼鱼尾_Luzi"],
            targetSelf: "ItemMouth", targetSelftext: "SourceCharacter用鱼尾轻抚PronounPossessive自己的脸颊.", maxProgressSelf: 50,
            target: "ItemMouth", targettext: "SourceCharacter用鱼尾轻抚TargetCharacter的脸颊.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "ItemLegs", imageName: "MermaidTail",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "鱼尾担膝盖", prerequisite: ["SuitLower鱼鱼尾_Luzi", "IsKneeling"],
            targetSelf: "", targetSelftext: "", maxProgressSelf: 50,
            target: "ItemLegs", targettext: "SourceCharacter将鱼尾担在了TargetCharacter的膝盖上.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "ItemLegs", imageName: "MermaidTail",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "鱼尾揉乳房", prerequisite: ["SuitLower鱼鱼尾_Luzi"],
            targetSelf: "ItemBreast", targetSelftext: "SourceCharacter用鱼尾揉了揉PronounPossessive自己的乳房.", maxProgressSelf: 50,
            target: "ItemBreast", targettext: "SourceCharacter用鱼尾揉了揉TargetCharacter的乳房.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "ItemLegs", imageName: "MermaidTail",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "鱼尾扇风", prerequisite: ["SuitLower鱼鱼尾_Luzi"],
            targetSelf: "ItemMouth", targetSelftext: "SourceCharacter用鱼尾给自己扇了扇风.", maxProgressSelf: 50,
            target: "ItemMouth", targettext: "SourceCharacter用鱼尾给TargetCharacter的脸扇了扇风.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "ItemLegs", imageName: "MermaidTail",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "鱼尾戳乳头", prerequisite: ["SuitLower鱼鱼尾_Luzi"],
            targetSelf: "ItemNipples", targetSelftext: "SourceCharacter用鱼尾戳了戳自己的乳头.", maxProgressSelf: 50,
            target: "ItemNipples", targettext: "SourceCharacter用鱼尾戳了戳TargetCharacter的乳头.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "ItemLegs", imageName: "MermaidTail",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "鱼尾碰手", prerequisite: ["SuitLower鱼鱼尾_Luzi"],
            targetSelf: "", targetSelftext: "", maxProgressSelf: 50,
            target: "ItemHands", targettext: "SourceCharacter将鱼尾踝搭在了TargetCharacter的手心上.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "ItemLegs", imageName: "MermaidTail",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "鱼尾抚弄大腿", prerequisite: ["SuitLower鱼鱼尾_Luzi"],
            targetSelf: "", targetSelftext: "", maxProgressSelf: 50,
            target: "ItemLegs", targettext: "SourceCharacter用鱼尾抚弄TargetCharacter的大腿.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "ItemLegs", imageName: "MermaidTail",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "躺上去", prerequisite: ["Hasbed"],
            targetSelf: "", targetSelftext: "", maxProgressSelf: 50,
            target: "ItemArms", targettext: "SourceCharacter躺到TargetCharacter的身边.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Scissors",
            modPosture: false, modifyOwnPosture: false, postureName: ""
        },
        {
            name: "骑上去", prerequisite: ["Hassaddle"],
            targetSelf: "", targetSelftext: "", maxProgressSelf: 50,
            target: "ItemTorso", targettext: "SourceCharacter骑在TargetCharacter的背上.", maxProgress: 50,
            activityExpression: [],
            assetgroup: "", imageName: "Wiggle",
            modPosture: true, modifyOwnPosture: false, postureName: "Kneel"
        },



    ];

    // 先决条件
    const CustomPrerequisiteFuncs = new Map(Object.entries({
        // 单向 仅自己
        "HasTail": (acting, acted, group) => !!InventoryGet(acted, "TailStraps"), // 有尾巴
        "HasWings": (acting, acted, group) => !!InventoryGet(acted, "Wings"), // 有翅膀
        "HasLeash": (acting, acted, group) => !!ChatRoomCanBeLeashed(acted), // 有拴绳
        "HasTailCat": (acting, acted, group) => // 有猫尾巴
            !!InventoryIsItemInList(acted, "TailStraps", "TailStrap") ||
            !!InventoryIsItemInList(acted, "TailStraps", "KittenTailStrap1"),
        "HasTentacles": (acting, acted, group) => !!InventoryIsItemInList(acted, "TailStraps", "Tentacles"), // 触手

        // 双向
        "HasPawMittens": (acting, acted, group) => // 有猫爪手套
            !!InventoryIsItemInList(acting, "ItemHands", "PawMittens"),
        "HasPet": (acting, acted, group) =>// 有宠物服
            !!InventoryIsItemInList(acting, "ItemArms", "BitchSuit") ||
            !!InventoryIsItemInList(acting, "ItemArms", "PetCrawler") ||
            !!InventoryIsItemInList(acting, "ItemArms", "StrictLeatherPetCrawler") ||
            !!InventoryIsItemInList(acting, "ItemArms", "ShinyPetSuit"),
        "HasKennel": (acting, acted, group) => // 有狗笼
            !!InventoryIsItemInList(acting, "ItemDevices", "Kennel"),
        "HasItemVulvaPiercings": (acting, acted, group) => !!InventoryGet(acted, "ItemVulvaPiercings"), // 有穿环
        "HasItemVulva": (acting, acted, group) => !!InventoryGet(acted, "ItemVulva"), // 阴部有道具
        "HasSword": (acting, acted, group) => // 有泡沫剑
            !!InventoryIsItemInList(acting, "ItemHandheld", "Sword"),
        "HasScissors": (acting, acted, group) => // 有剪刀
            !!InventoryIsItemInList(acting, "ItemHandheld", "Scissors"),

        "HasCloth": (acting, acted, group) => !!InventoryGet(acting, "Cloth"), // 有衣服
        "HasNoCloth": (acting, acted, group) => !InventoryGet(acting, "Cloth"), // 没有衣服
        "HasClothLower": (acting, acted, group) => !!InventoryGet(acting, "ClothLower"), // 有下装
        "HasBra": (acting, acted, group) => !!InventoryGet(acting, "Bra"), // 有胸罩
        "HasPanties": (acting, acted, group) => !!InventoryGet(acting, "Panties"), // 有内裤
        "HasSocks": (acting, acted, group) => !!InventoryGet(acting, "Socks"), // 有袜子
        "Hassaddle": (acting, acted, group) => !!InventoryIsItemInList(acting, "ItemTorso", "缰绳_Luzi"), // 鞍
        "Hasbed": (acting, acted, group) => !!InventoryIsItemInList(acting, "ItemDevices", "床右边_Luzi"), // 鞍

        "HasTentacles2": (acting, acted, group) => !!InventoryIsItemInList(acting, "TailStraps", "Tentacles"), // 触手

        "SuitLower鱼鱼尾_Luzi": (acting, acted, group) => !!InventoryIsItemInList(acting, "SuitLower", "鱼鱼尾_Luzi"),


    }));

    笨蛋Luzi.hookFunction("ActivityCheckPrerequisite", 500, (args, next) => {
        var prereqName = args[0];
        if (CustomPrerequisiteFuncs.has(prereqName)) {
            var acting = args[1];
            var acted = args[2];
            var targetGrp = args[3];
            var customPrereqFunc = CustomPrerequisiteFuncs.get(prereqName);
            if (!customPrereqFunc)
                return next(args);
            else {
                return customPrereqFunc(acting, acted, targetGrp);
            }
        }
        else
            return next(args);
    });

    笨蛋Luzi.hookFunction('DrawImageResize', 50, (args, next) => {
        const data = args[0];
        if (typeof data === 'string' && (data.indexOf("笨蛋Luzi_") !== -1 || data.indexOf("笨蛋笨Luzi_") !== -1)) {
            if (ActivityICONS.has(data)) {
                args[0] = ActivityICONS.get(data);
            }
            if (data.indexOf("笨蛋笨Luzi_") !== -1) {
                args[0] = "Assets/Female3DCG/Activity/Wiggle.png";
            }
        }
        next(args);
    });

    笨蛋Luzi.hookFunction("ChatRoomMessage", 0, (args, next) => {
        const data = args[0];
        const content = data.Content;
        if (data.Sender === Player.MemberNumber && poseMapping.hasOwnProperty(content)) {
            const poseName = poseMapping[content];
            PoseSetActive(Player, poseName);
            ChatRoomCharacterUpdate(Player)
        }
        next(args);
    });
    let is笨蛋炉子 = false;
    笨蛋Luzi.hookFunction("LoginResponse", 10, (args, next) => {
        next(args)
        if (!is笨蛋炉子) {
            var Nibble = { Name: "Nibble", MaxProgress: 40, Prerequisite: ["ZoneAccessible", "UseMouth", "ZoneNaked"], Target: ["ItemArms", "ItemBoots", "ItemEars", "ItemFeet", "ItemHands", "ItemLegs", "ItemMouth", "ItemNeck", "ItemNipples", "ItemNose", "ItemPelvis", "ItemTorso", "ItemTorso2", "ItemVulva", "ItemVulvaPiercings",], TargetSelf: ["ItemArms", "ItemBoots", "ItemHands", "ItemMouth", "ItemNipples",], };
            ActivityFemale3DCG.push(Nibble);
            // ActivityFemale3DCG.push(Nibble.Name);

            w.newActivities = activitiesInfo.map(activityInfo => createActivity(activityInfo));
            if (Player.OnlineSettings.ECHO && Player.OnlineSettings.ECHO.炉子ActivityFemale3DCG) {
                // 解压炉子ActivityFemale3DCG
                var decompressedActivityFemale3DCG = JSON.parse(LZString.decompressFromUTF16(Player.OnlineSettings.ECHO.炉子ActivityFemale3DCG));
                ActivityFemale3DCG.push(...decompressedActivityFemale3DCG); // 将解压缩后的数据添加到ActivityFemale3DCG数组中
            }
            if (Player.OnlineSettings.ECHO && Player.OnlineSettings.ECHO.炉子ActivityFemale3DCGOrdering) {
                // 解压炉子ActivityFemale3DCGOrdering
                var decompressedActivityFemale3DCGOrdering = JSON.parse(LZString.decompressFromUTF16(Player.OnlineSettings.ECHO.炉子ActivityFemale3DCGOrdering));
                ActivityFemale3DCGOrdering.push(...decompressedActivityFemale3DCGOrdering); // 将解压缩后的数据添加到ActivityFemale3DCGOrdering数组中
            }
            if (Player.OnlineSettings.ECHO && Player.OnlineSettings.ECHO.炉子ActivityDictionary) {
                // 解压炉子ActivityDictionary
                var decompressedActivityDictionary = JSON.parse(LZString.decompressFromUTF16(Player.OnlineSettings.ECHO.炉子ActivityDictionary));
                ActivityDictionary.push(...decompressedActivityDictionary); // 将解压缩后的数据添加到ActivityDictionary数组中
            }
            is笨蛋炉子 = true;
        }
    })


    // 翻译
    const translationMap = new Map([
        ["Bap", "拍打"],
        ["SourceCharacter baps TargetCharacter.", "SourceCharacter拍打了TargetCharacter."],
        ["Headbutt", "头槌"],
        ["SourceCharacter headbutts TargetCharacter.", "SourceCharacter用头猛撞TargetCharacter"],
        ["Nuzzle", "用鼻子轻抚"],
        ["SourceCharacter nuzzles against the side of TargetCharacter's head.", "SourceCharacter用鼻子轻抚TargetCharacter头的一侧."],
        ["SourceCharacter nuzzles into TargetCharacter's neck.", "SourceCharacter用鼻子轻抚在TargetCharacter的脖子."],
        ["SourceCharacter nuzzles into TargetCharacter's arms.", "SourceCharacter用鼻子轻抚在TargetCharacter的臂膀."],
        ["SourceCharacter nuzzles underneath TargetCharacter's hand.", "SourceCharacter用鼻子轻抚在TargetCharacter手底下."],
        ["SourceCharacter nuzzles into TargetCharacter's breasts.", "SourceCharacter用鼻子轻抚在TargetCharacter的胸部."],
        ["SourceCharacter nuzzles snugly into TargetCharacter.", "SourceCharacter亲昵地用鼻子轻抚着TargetCharacter."],
        ["SourceCharacter nuzzles against TargetCharacter's thigh.", "SourceCharacter用鼻子轻抚在TargetCharacter的大腿上."],
        ["SourceCharacter nuzzles along TargetCharacter's leg.", "SourceCharacter用鼻子沿着TargetCharacter的腿轻抚着."],
        ["SourceCharacter nuzzles under TargetCharacter's feet.", "SourceCharacter用鼻子轻抚在TargetCharacter的脚底下."],
        ["Hug", "拥抱"],
        ["SourceCharacter wraps PronounPossessive arms around TargetCharacter in a big warm hug.", "SourceCharacter用温暖的拥抱将PronounPossessive的手臂紧紧地环绕在TargetCharacter身上."],
        ["SourceCharacter wraps TargetCharacter in a therapeutic selfhug.", "SourceCharacter给TargetCharacter一个治疗性的自我拥抱."],
        ["Tackle", "扑倒"],
        ["SourceCharacter full body tackles TargetCharacter!", "SourceCharacter用全身扑在TargetCharacter身上!"],
        ["Flop", "瘫倒"],
        ["SourceCharacter flops on top of TargetCharacter.", "SourceCharacter瘫倒在TargetCharacter的身上."],
        ["Kiss Eyes", "亲吻眼睛"],
        ["SourceCharacter gently kisses over TargetCharacter's eyes.", "SourceCharacter轻轻地亲吻着TargetCharacter的眼睛."],
        ["Rub Pussy", "摩擦私处"],
        ["SourceCharacter grinds PronounPossessive pussy against TargetCharacter's penis.", "SourceCharacter用PronounPossessive的私处摩擦着TargetCharacter的阴茎."],
        ["Slap Face", "扇脸"],
        ["SourceCharacter slaps PronounPossessive ActivityAsset against TargetCharacter's face.", "SourceCharacter用PronounPossessive的ActivityAsset扇打在TargetCharacter的脸上."],
        ["Slap Mouth", "扇嘴巴"],
        ["SourceCharacter slaps PronounPossessive ActivityAsset against TargetCharacter's mouth.", "SourceCharacter用PronounPossessive的ActivityAsset扇打在TargetCharacter的嘴巴上."],
        ["Slap against Pussy", "扇打私处"],
        ["SourceCharacter slaps PronounPossessive ActivityAsset against TargetCharacter's pussy.", "SourceCharacter用PronounPossessive的ActivityAsset扇打在TargetCharacter的私处上."],
        ["Slap Breast", "扇打乳房"],
        ["SourceCharacter slaps PronounPossessive ActivityAsset against TargetCharacter's breast.", "SourceCharacter用PronounPossessive的ActivityAsset扇打在TargetCharacter的乳房上."],
        ["Slap Thigh", "扇打大腿"],
        ["SourceCharacter slaps PronounPossessive ActivityAsset against TargetCharacter's thigh.", "SourceCharacter用PronounPossessive的ActivityAsset扇打在TargetCharacter的大腿上."],
        ["Slap Calf", "扇打小腿"],
        ["SourceCharacter slaps PronounPossessive ActivityAsset against TargetCharacter's calf.", "SourceCharacter用PronounPossessive的ActivityAsset扇打在TargetCharacter的小腿上."],
        ["Slap Feet", "扇打脚"],
        ["SourceCharacter slaps PronounPossessive ActivityAsset against TargetCharacter's feet.", "SourceCharacter用PronounPossessive的ActivityAsset扇打在TargetCharacter的脚上."],
        ["Slap Butt", "扇打屁股"],
        ["SourceCharacter slaps PronounPossessive ActivityAsset against TargetCharacter's butt.", "SourceCharacter用PronounPossessive的ActivityAsset扇打在TargetCharacter的屁股上."],
        ["Slap Neck", "扇打脖子"],
        ["SourceCharacter slaps PronounPossessive ActivityAsset against TargetCharacter's neck.", "SourceCharacter用PronounPossessive的ActivityAsset扇打在TargetCharacter的脖子上."],
        ["Slap Arms", "扇打手臂"],
        ["ArmsLSCGSlapPenis", "SourceCharacter slaps PronounPossessive ActivityAsset against TargetCharacter's arm.", "SourceCharacter用PronounPossessive的ActivityAsset扇打在TargetCharacter的手臂上."],
        ["Slap Hand", "扇打手"],
        ["SourceCharacter slaps PronounPossessive ActivityAsset against TargetCharacter's hand.", "SourceCharacter用PronounPossessive的ActivityAsset扇打在TargetCharacter的手上."],
        ["Slap Penis", "扇打阴茎"],
        ["SourceCharacter slaps PronounPossessive ActivityAsset against TargetCharacter's penis.", "SourceCharacter用PronounPossessive的ActivityAsset扇打在TargetCharacter的阴茎上."],
        ["Nibble Tail", "轻咬尾巴"],
        ["SourceCharacter nibbles on TargetCharacter's tail.", "SourceCharacter轻咬TargetCharacter的尾巴."],
        ["SourceCharacter nibbles on PronounPossessive own tail.", "SourceCharacter轻咬自己的尾巴."],
        ["Nibble Halo", "咬光环"],
        ["SourceCharacter nibbles on TargetCharacter's halo.", "SourceCharacter咬TargetCharacter的光环."],
        ["Nibble Wing", "轻咬翅膀"],
        ["SourceCharacter nibbles on TargetCharacter's wing.", "SourceCharacter轻咬TargetCharacter的翅膀."],
        ["SourceCharacter nibbles on PronounPossessive own wing.", "SourceCharacter轻咬自己的翅膀."],
        ["Grind with Pussy", "用阴部磨擦"],
        ["SourceCharacter grinds PronounPossessive pussy against TargetCharacter's.", "SourceCharacter用阴部磨擦着TargetCharacter的阴部."],
        ["Ride with Pussy", "用阴部骑乘"],
        ["SourceCharacter fucks TargetCharacter's penis with PronounPossessive pussy, grinding up and down.", "SourceCharacter用阴部骑乘在TargetCharacter的阴茎,上下磨擦."],
        ["Sit on Face", "坐在脸上"],
        ["SourceCharacter grinds PronounPossessive pussy against TargetCharacter's face.", "SourceCharacter用阴部磨擦着TargetCharacter的脸."],
        ["Grind with Ass", "用臀部磨擦"],
        ["SourceCharacter grinds PronounPossessive ass against TargetCharacter's vulva.", "SourceCharacter用臀部磨擦着TargetCharacter的阴道."],
        ["Ride with Ass", "用臀部骑乘"],
        ["SourceCharacter fucks TargetCharacter's penis with PronounPossessive ass.", "SourceCharacter用臀部骑乘在TargetCharacter的阴茎."],
        ["Suck", "吮吸"],
        ["SourceCharacter wraps PronounPossessive lips around TargetCharacter's ActivityAsset and sucks.", "SourceCharacter用嘴唇包裹住TargetCharacter的ActivityAsset并吮吸."],
        ["SourceCharacter wraps PronounPossessive lips around TargetCharacter's ActivityAsset and sucks.", "SourceCharacter用嘴唇包裹住TargetCharacter的ActivityAsset并吮吸."],
        ["Deepthroat", "深喉"],
        ["SourceCharacter takes TargetCharacter's ActivityAsset deep down PronounPossessive throat.", "SourceCharacter将TargetCharacter的ActivityAsset深深地吞入PronounPossessive的喉咙."],
        ["SourceCharacter takes TargetCharacter's ActivityAsset deep down PronounPossessive throat.", "SourceCharacter将TargetCharacter的ActivityAsset深深地吞入PronounPossessive的喉咙."],
        ["Suck", "吮吸"],
        ["SourceCharacter wraps PronounPossessive lips around TargetCharacter's ActivityAsset and sucks.", "SourceCharacter用嘴唇包裹住TargetCharacter的ActivityAsset并吮吸."],
        ["SourceCharacter wraps PronounPossessive lips around PronounPossessive own ActivityAsset and sucks.", "SourceCharacter用嘴唇包裹住自己的ActivityAsset并吮吸."],
        ["Deepthroat", "深喉"],
        ["SourceCharacter takes TargetCharacter's ActivityAsset deep down PronounPossessive throat.", "SourceCharacter将TargetCharacter的ActivityAsset深深地吞入PronounPossessive的喉咙."],
        ["SourceCharacter takes PronounPossessive own ActivityAsset deep down PronounPossessive throat.", "SourceCharacter将自己的ActivityAsset深深地吞入PronounPossessive的喉咙."],
        ["Eat", "咬一口"],
        ["SourceCharacter takes a big bite out of TargetCharacter's ActivityAsset.", "SourceCharacter咬了TargetCharacter的ActivityAsset一大口."],
        ["SourceCharacter takes a big bite out of PronounPossessive own ActivityAsset.", "SourceCharacter咬了自己的ActivityAsset一大口."],
        ["Grab Tongue", "抓舌头"],
        ["SourceCharacter reaches in and grabs hold of TargetCharacter's tongue with PronounPossessive fingers.", "SourceCharacter伸手抓住TargetCharacter的舌头."],
        ["Release Tongue", "释放舌头"],
        ["SourceCharacter lets go of TargetCharacter's tongue.", "SourceCharacter松开TargetCharacter的舌头."],
        ["Hold Hands", "牵手"],
        ["SourceCharacter takes TargetCharacter's hand.", "SourceCharacter牵住TargetCharacter的手."],
        ["Release Hand", "放开手"],
        ["SourceCharacter lets go of TargetCharacter's hand.", "SourceCharacter放开TargetCharacter的手."],
        ["Pinch Butt", "捏屁股"],
        ["SourceCharacter pinches TargetCharacter's butt.", "SourceCharacter捏住TargetCharacter的屁股."],
        ["SourceCharacter pinches PronounPossessive own butt.", "SourceCharacter捏住自己的屁股."],
        ["Pinch Cheek", "捏脸颊"],
        ["SourceCharacter pinches TargetCharacter's cheek.", "SourceCharacter捏住TargetCharacter的脸颊."],
        ["SourceCharacter pinches PronounPossessive own cheek.", "SourceCharacter捏住自己的脸颊."],
        ["Release Ear", "释放耳朵"],
        ["SourceCharacter releases TargetCharacter's ear.", "SourceCharacter释放TargetCharacter的耳朵."],
        ["Grab Horn", "抓住角"],
        ["SourceCharacter grabs TargetCharacter's horn.", "SourceCharacter抓住TargetCharacter的角."],
        ["Release Arm", "释放手臂"],
        ["SourceCharacter releases TargetCharacter's arm.", "SourceCharacter放开TargetCharacter的手臂."],
        ["Release Horn", "释放角"],
        ["SourceCharacter releases TargetCharacter's horn.", "SourceCharacter放开TargetCharacter的角."],
        ["Release Neck", "释放脖子"],
        ["SourceCharacter releases TargetCharacter's neck.", "SourceCharacter放开TargetCharacter的脖子."],
        ["Release Mouth", "释放嘴巴"],
        ["SourceCharacter releases TargetCharacter's mouth.", "SourceCharacter释放TargetCharacter的嘴巴."],
        ["Stuff with Foot", "用脚填塞"],
        ["SourceCharacter shoves PronounPossessive foot into TargetCharacter's mouth, grabbing their tongue with PronounPossessive toes.", "SourceCharacter用脚塞进TargetCharacter的嘴巴,用脚趾夹住他们的舌头."],
        ["Remove Foot", "移开脚"],
        ["SourceCharacter removes PronounPossessive foot from TargetCharacter's mouth.", "SourceCharacter从TargetCharacter的嘴巴里取出自己的脚."],
        ["Tug", "拽"],
        ["SourceCharacter tugs on TargetCharacter's crotch rope.", "SourceCharacter拽着TargetCharacter的胯部绳索."],
        ["SourceCharacter tugs lewdly on PronounPossessive own crotch rope.", "SourceCharacter淫荡地拽着自己的胯部绳索."],
        ["Flick Ear", "轻弹耳朵"],
        ["SourceCharacter flicks TargetCharacter's ear.", "SourceCharacter轻弹TargetCharacter的耳朵."],
        ["SourceCharacter flicks PronounPossessive own ear.", "SourceCharacter轻弹自己的耳朵."],
        ["Flick Nose", "轻弹鼻子"],
        ["SourceCharacter flicks TargetCharacter's nose.", "SourceCharacter轻弹TargetCharacter的鼻子."],
        ["SourceCharacter flicks PronounPossessive own nose.", "SourceCharacter轻弹自己的鼻子."],
        ["Flick Nipple", "轻弹乳头"],
        ["SourceCharacter flicks TargetCharacter's nipple.", "SourceCharacter轻弹TargetCharacter的乳头."],
        ["SourceCharacter flicks PronounPossessive own nipple.", "SourceCharacter轻弹自己的乳头."],
        ["Flick Butt", "轻弹屁股"],
        ["SourceCharacter flicks TargetCharacter's butt.", "SourceCharacter轻弹TargetCharacter的屁股."],
        ["SourceCharacter flicks PronounPossessive own butt.", "SourceCharacter轻弹自己的屁股."],
        ["Flick Foot", "轻弹脚底"],
        ["SourceCharacter flicks the bottom of TargetCharacter's feet.", "SourceCharacter轻弹TargetCharacter的脚底."],
        ["SourceCharacter flicks the bottom of PronounPossessive feet.", "SourceCharacter轻弹自己的脚底."],
        ["Flick Forehead", "轻弹额头"],
        ["SourceCharacter flicks TargetCharacter's forehead.", "SourceCharacter轻弹TargetCharacter的额头."],
        ["SourceCharacter flicks PronounPossessive own forehead.", "SourceCharacter轻弹自己的额头."],
        ["Flick Neck", "轻弹脖子"],
        ["SourceCharacter flicks TargetCharacter's neck.", "SourceCharacter轻弹TargetCharacter的脖子."],
        ["SourceCharacter flicks PronounPossessive own neck.", "SourceCharacter轻弹自己的脖子."],
        ["Flick Thigh", "轻弹大腿"],
        ["SourceCharacter flicks TargetCharacter's thigh.", "SourceCharacter轻弹TargetCharacter的大腿."],
        ["SourceCharacter flicks PronounPossessive own thigh.", "SourceCharacter轻弹自己的大腿."],
        ["Flick Leg", "轻弹腿"],
        ["SourceCharacter flicks TargetCharacter's leg.", "SourceCharacter轻弹TargetCharacter的腿."],
        ["SourceCharacter flicks PronounPossessive own leg.", "SourceCharacter轻弹自己的腿."],
        ["Flick Clitoris", "轻弹阴蒂"],
        ["SourceCharacter flicks TargetCharacter's clitoris.", "SourceCharacter轻弹TargetCharacter的阴蒂."],
        ["SourceCharacter flicks PronounPossessive own clitoris.", "SourceCharacter轻弹自己的阴蒂."],
        ["Flick Balls", "轻弹睾丸"],
        ["SourceCharacter flicks TargetCharacter's balls.", "SourceCharacter轻弹TargetCharacter的睾丸."],
        ["SourceCharacter flicks PronounPossessive own balls.", "SourceCharacter轻弹自己的睾丸."],
        ["Flick Pussy", "轻弹阴部"],
        ["SourceCharacter flicks TargetCharacter's pussy.", "SourceCharacter轻弹TargetCharacter的阴部."],
        ["SourceCharacter flicks PronounPossessive own pussy.", "SourceCharacter轻弹自己的阴部."],
        ["Flick Penis", "轻弹阴茎"],
        ["SourceCharacter flicks TargetCharacter's penis.", "SourceCharacter轻弹TargetCharacter的阴茎."],
        ["SourceCharacter flicks PronounPossessive own penis.", "SourceCharacter轻弹自己的阴茎."],
        ["Chomp on Arm", "咬住手臂"],
        ["SourceCharacter chomps down on TargetCharacter's arm and doesn't let go.", "SourceCharacter狠狠地咬住TargetCharacter的手臂,不松口."],
        ["Chomp on Leg", "咬住腿"],
        ["SourceCharacter chomps down on TargetCharacter's leg and doesn't let go.", "SourceCharacter狠狠地咬住TargetCharacter的腿,不松口."],
        ["Chomp on Butt", "咬住屁股"],
        ["SourceCharacter chomps down on TargetCharacter's butt and doesn't let go.", "SourceCharacter狠狠地咬住TargetCharacter的屁股,不松口."],
        ["Chomp on Neck", "咬住脖子"],
        ["SourceCharacter chomps down on TargetCharacter's neck and doesn't let go.", "SourceCharacter狠狠地咬住TargetCharacter的脖子,不松口."],
        ["Release Chomp", "松开咬住"],
        ["SourceCharacter releases PronounPossessive chomp on TargetCharacter.", "SourceCharacter松开对TargetCharacter的咬住."],
        ["Quaff", "畅饮"],
        ["SourceCharacter presses PronounPossessive ActivityAsset up against TargetCharacter's lips.", "SourceCharacter将PronounPossessive的ActivityAsset紧贴在TargetCharacter的嘴唇上."],
        ["SourceCharacter quaffs the ActivityAsset in one gulp.", "SourceCharacter一口气畅饮了ActivityAsset."],
        ["Tighten Collar", "收紧项圈"],
        ["Loosen Collar", "放松项圈"],
        ["Collar Stats", "项圈状态"],
        ["Shoot Netgun", "射击网枪"],
        ["SourceCharacter takes aim at TargetCharacter with PronounPossessive net gun.", "SourceCharacter用PronounPossessive的网枪瞄准TargetCharacter."],
        ["SourceCharacter turns PronounPossessive net gun on PronounSelf.", "SourceCharacter将PronounPossessive的网枪对准PronounSelf."],
        ["Pour into Funnel", "倒入漏斗"],
        ["SourceCharacter pours PronounPossessive ActivityAsset into TargetCharacter's funnel.", "SourceCharacter将PronounPossessive的ActivityAsset倒入TargetCharacter的漏斗中."],
        ["SourceCharacter pours PronounPossessive ActivityAsset into PronounPossessive own funnel.", "SourceCharacter将PronounPossessive的ActivityAsset倒入PronounPossessive自己的漏斗中."],
        ["Gag Mouth", "堵住嘴巴"],
        ["SourceCharacter gags TargetCharacter with PronounPossessive ActivityAsset.", "SourceCharacter用PronounPossessive的ActivityAsset堵住了TargetCharacter的嘴巴."],
        ["SourceCharacter gags PronounSelf with PronounPossessive own ActivityAsset.", "SourceCharacter用PronounPossessive自己的ActivityAsset堵住了PronounSelf的嘴巴."],
        ["Place around Neck", "放在脖子上"],
        ["SourceCharacter places PronounPossessive ActivityAsset around TargetCharacter's neck.", "SourceCharacter将PronounPossessive的ActivityAsset放在TargetCharacter的脖子上."],
        ["SourceCharacter places PronounPossessive ActivityAsset around PronounPossessive own neck.", "SourceCharacter将PronounPossessive的ActivityAsset放在PronounPossessive自己的脖子上."],
        ["Take Gag", "取下口球"],
        ["SourceCharacter removes TargetCharacter's ActivityAsset.", "SourceCharacter取下了TargetCharacter的ActivityAsset."],
        ["SourceCharacter pulls the ActivityAsset from PronounPossessive mouth.", "SourceCharacter从PronounPossessive的嘴里取下了ActivityAsset."],
        ["SourceCharacter takes TargetCharacter's ActivityAsset from around TargetPronounPossessive neck.", "SourceCharacter从TargetPronounPossessive的脖子上取下了TargetCharacter的ActivityAsset."],
        ["SourceCharacter takes PronounPossessive own ActivityAsset from around PronounPossessive neck.", "SourceCharacter从PronounPossessive的脖子上取下了PronounPossessive自己的ActivityAsset."],
        ["Move to Mouth", "移至嘴边"],
        ["SourceCharacter moves TargetCharacter's ActivityAsset up to PronounPossessive mouth.", "SourceCharacter将TargetCharacter的ActivityAsset移到了PronounPossessive的嘴边."],
        ["SourceCharacter moves PronounPossessive own ActivityAsset up to PronounPossessive mouth.", "SourceCharacter将PronounPossessive自己的ActivityAsset移到了PronounPossessive的嘴边."],
        ["Wear around Neck", "挂在脖子上"],
        ["SourceCharacter removes TargetCharacter's ActivityAsset, letting it hang around their neck.", "SourceCharacter取下了TargetCharacter的ActivityAsset,让它挂在了他们的脖子上."],
        ["SourceCharacter removes the ActivityAsset from Pro…h and lets it hang around PronounPossessive neck.", "SourceCharacter取下了PronounPossessive的ActivityAsset,并让它挂在了PronounPossessive的脖子上."],
        ["Tie Up", "捆绑"],
        ["SourceCharacter swiftly wraps PronounPossessive rope around TargetCharacter's feet, binding TargetPronounPossessive tightly.", "SourceCharacter迅速地用绳子将PronounPossessive的脚缠绕起来,紧紧地捆绑着TargetPronounPossessive."],
        ["SourceCharacter wraps PronounPossessive rope around PronounPossessive feet tightly.", "SourceCharacter紧紧地用绳子将PronounPossessive的脚缠绕起来."],
        ["SourceCharacter swiftly wraps PronounPossessive rope around TargetCharacter's legs, binding TargetPronounPossessive tightly.", "SourceCharacter迅速地用绳子将PronounPossessive的腿缠绕起来,紧紧地捆绑着TargetPronounPossessive."],
        ["SourceCharacter wraps PronounPossessive rope around PronounPossessive legs tightly.", "SourceCharacter紧紧地用绳子将PronounPossessive的腿缠绕起来."],
        ["SourceCharacter swiftly wraps PronounPossessive rope around TargetCharacter's pelvis", "binding TargetPronounPossessive tightly.", "SourceCharacter迅速地用绳子将PronounPossessive的骨盆缠绕起来,紧紧地捆绑着TargetPronounPossessive."],
        ["SourceCharacter wraps PronounPossessive rope around PronounPossessive pelvis tightly.", "SourceCharacter紧紧地用绳子将PronounPossessive的骨盆缠绕起来."],
        ["SourceCharacter swiftly wraps PronounPossessive rope around TargetCharacter's arms, binding TargetPronounPossessive tightly.", "SourceCharacter迅速地用绳子将PronounPossessive的胳膊缠绕起来,紧紧地捆绑着TargetPronounPossessive."],
        ["SourceCharacter wraps PronounPossessive rope around PronounPossessive arms tightly.", "SourceCharacter紧紧地用绳子将PronounPossessive的胳膊缠绕起来."],
        ["SourceCharacter swiftly wraps PronounPossessive rope around TargetCharacter's eyes, binding TargetPronounPossessive tightly.", "SourceCharacter迅速地用绳子将PronounPossessive的眼睛缠绕起来,紧紧地捆绑着TargetPronounPossessive."],
        ["SourceCharacter wraps PronounPossessive rope around PronounPossessive eyes tightly.", "SourceCharacter紧紧地用绳子将PronounPossessive的眼睛缠绕起来."],
        ["SourceCharacter swiftly wraps PronounPossessive rope around TargetCharacter's neck, binding TargetPronounPossessive tightly.", "SourceCharacter迅速地用绳子将PronounPossessive的脖子缠绕起来,紧紧地捆绑着TargetPronounPossessive."],
        ["SourceCharacter wraps PronounPossessive rope around PronounPossessive neck tightly.", "SourceCharacter紧紧地用绳子将PronounPossessive的脖子缠绕起来."],
        ["SourceCharacter swiftly wraps PronounPossessive rope around TargetCharacter's breasts", "binding TargetPronounPossessive tightly.", "SourceCharacter迅速地用绳子将PronounPossessive的胸部缠绕起来,紧紧地捆绑着TargetPronounPossessive."],
        ["SourceCharacter wraps PronounPossessive rope around PronounPossessive breasts tightly.", "SourceCharacter紧紧地用绳子将PronounPossessive的胸部缠绕起来."],
        ["SourceCharacter swiftly wraps PronounPossessive rope around TargetCharacter's waist, binding TargetPronounPossessive tightly.", "SourceCharacter迅速地用绳子将PronounPossessive的腰部缠绕起来,紧紧地捆绑着TargetPronounPossessive."],
        ["SourceCharacter wraps PronounPossessive rope around PronounPossessive waist tightly.", "SourceCharacter紧紧地用绳子将PronounPossessive的腰部缠绕起来."],
        ["SourceCharacter swiftly wraps PronounPossessive rope around TargetCharacter's toes, binding TargetPronounPossessive tightly.", "SourceCharacter迅速地用绳子将PronounPossessive的脚趾缠绕起来,紧紧地捆绑着TargetPronounPossessive."],
        ["SourceCharacter wraps PronounPossessive rope around PronounPossessive toes tightly.", "SourceCharacter紧紧地用绳子将PronounPossessive的脚趾缠绕起来."],
        ["Steal", "抢夺"],
        ["SourceCharacter grabs at TargetCharacters hands, trying to steal TargetPronounPossessive item.", "SourceCharacter抓住了TargetCharacters的手,试图抢夺TargetPronounPossessive的物品."],
        ["Give Item", "交出物品"],
        ["SourceCharacter grabs at TargetCharacters hands, trying to steal TargetPronounPossessive item!", "SourceCharacter抓住了TargetCharacters的手，试图抢夺TargetPronounPossessive的物品!"],
        ["Shark Bite", "鲨鱼咬"],
        ["SourceCharacter's ActivityAsset bites TargetCharacter's arm.", "SourceCharacter的ActivityAsset咬住了TargetCharacter的胳膊."],
        ["SourceCharacter's ActivityAsset bites TargetCharacter's foot.", "SourceCharacter的ActivityAsset咬住了TargetCharacter的脚."],
        ["SourceCharacter's ActivityAsset bites TargetCharacter's breast.", "SourceCharacter的ActivityAsset咬住了TargetCharacter的乳房."],
        ["SourceCharacter's ActivityAsset bites TargetCharacter's butt.", "SourceCharacter的ActivityAsset咬住了TargetCharacter的臀部."],
        ["SourceCharacter's ActivityAsset bites TargetCharacter's ear.", "SourceCharacter的ActivityAsset咬住了TargetCharacter的耳朵."],
        ["SourceCharacter's ActivityAsset bites TargetCharacter's leg.", "SourceCharacter的ActivityAsset咬住了TargetCharacter的腿."],
        ["SourceCharacter's ActivityAsset bites TargetCharacter on the hand.", "SourceCharacter的ActivityAsset咬住了TargetCharacter的手."],
        ["SourceCharacter's ActivityAsset bites TargetCharacter in the thigh.", "SourceCharacter的ActivityAsset咬住了TargetCharacter的大腿."],
        ["SourceCharacter's ActivityAsset bites TargetCharacter on the neck.", "SourceCharacter的ActivityAsset咬住了TargetCharacter的脖子."],
        ["SourceCharacter's ActivityAsset bites TargetCharacter's nipple.", "SourceCharacter的ActivityAsset咬住了TargetCharacter的乳头."],
        ["SourceCharacter's ActivityAsset chomps on TargetCharacter.", "SourceCharacter的ActivityAsset狠狠地咬住了TargetCharacter."],
        ["Boop", "轻戳"],
        ["SourceCharacter boops TargetCharacter's nose with PronounPossessive ActivityAsset.", "SourceCharacter用PronounPossessive的ActivityAsset轻戳了TargetCharacter的鼻子."],
        ["Squeeze", "紧紧地拥抱"],
        ["SourceCharacter hugs PronounPossessive ActivityAsset tightly.", "SourceCharacter紧紧地拥抱着PronounPossessive的ActivityAsset."],
        ["SourceCharacter hugs PronounPossessive ActivityAsset tightly.", "SourceCharacter紧紧地拥抱着PronounPossessive的ActivityAsset."],
        ["Take Photo", "拍照"],
        ["SourceCharacter snaps a photo of TargetCharacter.", "SourceCharacter给TargetCharacter拍了一张照片."],
        ["SourceCharacter takes a selfie.", "SourceCharacter自拍了一张照片."],

    ]);

    const translationMapEN = new Map([
        ["歪头", "Tilt Head"],
        ["SourceCharacter歪头.", "SourceCharacter tilts head."],
        ["环视周围", "Look Around"],
        ["SourceCharacter环视周围.", "SourceCharacter looks around."],
        ["上下打量", "Size Up"],
        ["SourceCharacter仔细打量TargetCharacter.", "SourceCharacter sizes up TargetCharacter."],
        ["闭上眼睛", "Close Eyes"],
        ["SourceCharacter闭上了眼睛.", "SourceCharacter closes eyes."],
        ["眼睛呆滞", "Blank Stare"],
        ["SourceCharacter眼睛呆滞地看着前方.", "SourceCharacter stares blankly ahead."],
        ["眼睛湿润", "Watery Eyes"],
        ["SourceCharacter眼角泛着泪光.", "SourceCharacter's eyes are watery."],
        ["流眼泪", "Tear Up"],
        ["SourceCharacter眼泪从眼角流下.", "SourceCharacter tears up."],
        ["张开嘴", "Open Mouth"],
        ["SourceCharacter张开了嘴", "SourceCharacter opens mouth."],
        ["吞咽口水", "Swallow Saliva"],
        ["SourceCharacter吞咽嘴里的口水.", "SourceCharacter swallows saliva."],
        ["流口水", "Drool"],
        ["SourceCharacter的口水顺着嘴角流下.", "SourceCharacter drools down the corner of the mouth."],
        ["轻声喘息", "Softly Pant"],
        ["SourceCharacter发出轻声地喘息.", "SourceCharacter softly pants."],
        ["打哈欠", "Yawn"],
        ["SourceCharacter张嘴打哈欠.", "SourceCharacter yawns."],
        ["舔手", "Lick Hand"],
        ["SourceCharacter舔TargetCharacter的手.", "SourceCharacter licks TargetCharacter's hand."],
        ["SourceCharacter舔PronounPossessive自己的手.", "SourceCharacter licks PronounPossessive own hand."],
        ["舔手指", "Lick Fingers"],
        ["SourceCharacter舔TargetCharacter的手指.", "SourceCharacter licks TargetCharacter's fingers."],
        ["SourceCharacter舔PronounPossessive自己的手指.", "SourceCharacter licks PronounPossessive own fingers."],
        ["舔脚", "Lick Feet"],
        ["SourceCharacter舔TargetCharacter的脚.", "SourceCharacter licks TargetCharacter's feet."],
        ["SourceCharacter舔PronounPossessive自己的脚.", "SourceCharacter licks PronounPossessive own feet."],
        ["舔脸", "Lick Face"],
        ["SourceCharacter舔TargetCharacter的脸.", "SourceCharacter licks TargetCharacter's face."],
        ["吮吸手指", "Suck on Fingers"],
        ["SourceCharacter吮吸TargetCharacter的手指.", "SourceCharacter sucks on TargetCharacter's fingers."],
        ["SourceCharacter吮吸PronounPossessive的手指.", "SourceCharacter sucks on PronounPossessive own fingers."],
        ["嗅手", "Sniff"],
        ["SourceCharacter用鼻子嗅了嗅TargetCharacter的手.", "SourceCharacter sniffs TargetCharacter's hand."],
        ["SourceCharacter用鼻子嗅了嗅自己的手.", "SourceCharacter sniffs own hand."],
        ["跪下", "Kneel Down"],
        ["SourceCharacter轻轻地跪了下来.", "SourceCharacter kneels down gently."],
        ["站起来", "Stand Up"],
        ["SourceCharacter手扶着地站了起来.", "SourceCharacter stands up with hands on the ground."],
        ["跪着张开腿", "Kneel with Legs Spread"],
        ["SourceCharacter张开了PronounPossessive的腿.", "SourceCharacter kneels with legs spread."],
        ["跪着并拢腿", "Kneel with Legs Closed"],
        ["SourceCharacter并拢了PronounPossessive的腿.", "SourceCharacter kneels with legs closed."],
        ["手放身后", "Hands Behind Back"],
        ["SourceCharacter把PronounPossessive的手放在了身后.", "SourceCharacter puts PronounPossessive hands behind back."],
        ["手放身前", "Hands in Front"],
        ["SourceCharacter把PronounPossessive的手放在了身前.", "SourceCharacter puts PronounPossessive hands in front."],
        ["趴下", "Lie Down"],
        ["SourceCharacter手放身后趴在地上.", "SourceCharacter lies down with hands behind back."],
        ["四肢着地", "All Fours"],
        ["SourceCharacter四肢着地趴在地上.", "SourceCharacter is on all fours on the ground."],
        ["起身跪下", "Get Up and Kneel"],
        ["SourceCharacter起身跪下.", "SourceCharacter get up and kneels down."],
        ["爬到脚边", "Crawl to Feet"],
        ["SourceCharacter爬到TargetCharacter的脚边.", "SourceCharacter crawls to TargetCharacter's feet."],
        ["蹭大腿", "Nuzzle Thigh"],
        ["SourceCharacter用头轻轻蹭TargetCharacter的大腿.", "SourceCharacter gently nuzzles TargetCharacter's thigh."],
        ["蹭小腿", "Nuzzle Shin"],
        ["SourceCharacter用头轻轻蹭TargetCharacter的小腿.", "SourceCharacter gently nuzzles TargetCharacter's shin."],
        ["踮起双脚", "Stand on Tiptoes"],
        ["SourceCharacter踮起PronounPossessive的双脚.", "SourceCharacter stands on tiptoes."],
        ["摇晃脚踝", "Wiggle Ankles"],
        ["SourceCharacter摇晃PronounPossessive的脚踝.", "SourceCharacter wiggles PronounPossessive ankles."],
        ["伸出脚", "Extend Leg"],
        ["SourceCharacter伸出PronounPossessive的脚.", "SourceCharacter extends PronounPossessive leg."],
        ["掰开双腿", "Spread Legs"],
        ["SourceCharacter掰开TargetCharacter的双腿.", "SourceCharacter spreads TargetCharacter's legs."],
        ["脚托起下巴", "Foot on Chin"],
        ["SourceCharacter用脚托起TargetCharacter的下巴.", "SourceCharacter places foot on TargetCharacter's chin."],
        ["戳脸", "Poke Face"],
        ["SourceCharacter戳了戳TargetCharacter的脸.", "SourceCharacter pokes TargetCharacter's face."],
        ["SourceCharacter戳了戳自己的脸.", "SourceCharacter pokes own face."],
        ["捏脸", "Pinch Face"],
        ["SourceCharacter捏了捏TargetCharacter的脸.", "SourceCharacter pinches TargetCharacter's face."],
        ["SourceCharacter捏了捏自己的脸.", "SourceCharacter pinches own face."],
        ["戳手臂", "Poke Arm"],
        ["SourceCharacter戳了戳TargetCharacter的手臂.", "SourceCharacter pokes TargetCharacter's arm."],
        ["SourceCharacter戳了戳自己的手臂.", "SourceCharacter pokes own arm."],
        ["揉脸", "Rub Face"],
        ["SourceCharacter揉了揉TargetCharacter的脸.", "SourceCharacter rubs TargetCharacter's face."],
        ["SourceCharacter揉了揉自己的脸.", "SourceCharacter rubs own face."],
        ["摇晃手臂", "Shake Arms"],
        ["SourceCharacter摇晃TargetCharacter的手臂.", "SourceCharacter shakes TargetCharacter's arms."],
        ["SourceCharacter摇晃自己的手臂.", "SourceCharacter shakes own arms."],
        ["轻推", "Light Push"],
        ["SourceCharacter用手轻推TargetCharacter的身体.", "SourceCharacter lightly pushes TargetCharacter's body."],
        ["托起脚", "Lift Foot"],
        ["SourceCharacter托起TargetCharacter的脚.", "SourceCharacter lifts TargetCharacter's foot."],
        ["扭动手腕", "Twist Wrists"],
        ["SourceCharacter扭动PronounPossessive的手腕.", "SourceCharacter twists PronounPossessive wrists."],
        ["挠头", "Scratch Head"],
        ["SourceCharacter用手挠了挠PronounPossessive的头.", "SourceCharacter scratches PronounPossessive head."],
        ["盖住耳朵", "Cover Ears"],
        ["SourceCharacter用手遮住了TargetCharacter的眼睛.", "SourceCharacter covers TargetCharacter's ears with hands."],
        ["SourceCharacter用手遮住了自己的眼睛.", "SourceCharacter covers own ears with hands."],
        ["遮住眼睛", "Cover Eyes"],
        ["SourceCharacter捂住TargetCharacter的眼睛.", "SourceCharacter covers TargetCharacter's eyes with hands."],
        ["SourceCharacter捂住自己的眼睛.", "SourceCharacter covers own eyes with hands."],
        ["捂住头", "Cover Head"],
        ["SourceCharacter捂住TargetCharacter的头.", "SourceCharacter covers TargetCharacter's head with hands."],
        ["SourceCharacter捂住自己的头.", "SourceCharacter covers own head with hands."],
        ["捂住下体", "Cover Groin"],
        ["SourceCharacter捂住TargetCharacter的下体.", "SourceCharacter covers TargetCharacter's groin with hands."],
        ["SourceCharacter捂住自己的下体.", "SourceCharacter covers own groin with hands."],
        ["掀开裙子", "Lift Skirt"],
        ["SourceCharacter掀开TargetCharacter的裙子.", "SourceCharacter lifts TargetCharacter's skirt."],
        ["SourceCharacter掀开PronounPossessive的裙子.", "SourceCharacter lifts PronounPossessive's skirt."],
        ["挥手", "Wave Hand"],
        ["SourceCharacter向TargetCharacter挥手.", "SourceCharacter waves hand at TargetCharacter."],
        ["伸出手", "Reach Out Hand"],
        ["SourceCharacter伸出自己的手.", "SourceCharacter reaches out own hand."],
        ["拉扯衣角", "Tug Clothes"],
        ["SourceCharacter用手拉扯TargetCharacter的衣角.", "SourceCharacter tugs at TargetCharacter's clothes."],
        ["捂住胸", "Cover Chest"],
        ["SourceCharacter捂住自己的胸.", "SourceCharacter covers own chest."],
        ["手托起下巴", "Hand under Chin"],
        ["SourceCharacter用手托起TargetCharacter的下巴.", "SourceCharacter places hand under TargetCharacter's chin."],
        ["拽链子", "Pull Chain"],
        ["SourceCharacter拽TargetCharacter的链子.", "SourceCharacter pulls TargetCharacter's chain."],
        ["弹额头", "Flick Forehead"],
        ["SourceCharacter弹了一下TargetCharacter的额头.", "SourceCharacter flicks TargetCharacter's forehead."],
        ["弹阴蒂", "Flick Clitoris"],
        ["SourceCharacter弹了一下TargetCharacter的阴蒂.", "SourceCharacter flicks TargetCharacter's clitoris."],
        ["抱腿", "Hug Legs"],
        ["SourceCharacter抱住TargetCharacter的腿.", "SourceCharacter hugs TargetCharacter's legs."],
        ["摇晃尾巴", "Wag Tail"],
        ["SourceCharacter摇晃PronounPossessive的尾巴.", "SourceCharacter wags PronounPossessive tail."],
        ["竖起尾巴", "Raise Tail"],
        ["SourceCharacter的尾巴竖了起来.", "SourceCharacter raises own tail."],
        ["炸毛", "Puff Up"],
        ["SourceCharacter弓起后背, 身体的毛发立了起来, 发出嘶的声音.", "SourceCharacter arches back, body hair stands up, emitting a hissing sound."],
        ["舔尾巴", "Lick Tail"],
        ["SourceCharacter舔TargetCharacter的尾巴.", "SourceCharacter licks TargetCharacter's tail."],
        ["SourceCharacter舔自己的尾巴.", "SourceCharacter licks own tail."],
        ["轻抚尾巴", "Gently Stroke Tail"],
        ["SourceCharacter轻抚TargetCharacter的尾巴.", "SourceCharacter gently strokes TargetCharacter's tail."],
        ["SourceCharacter轻抚PronounPossessive的尾巴.", "SourceCharacter gently strokes PronounPossessive's tail."],
        ["尾巴叼在嘴里", "Hold Tail in Mouth"],
        ["SourceCharacter叼起TargetCharacter的尾巴.", "SourceCharacter holds TargetCharacter's tail in mouth."],
        ["SourceCharacter叼起自己的尾巴.", "SourceCharacter holds own tail in mouth."],
        ["抬起屁股", "Lift Buttocks"],
        ["SourceCharacter弯腰抬起PronounPossessive的屁股.", "SourceCharacter bends over, lifting PronounPossessive buttocks."],
        ["扇动翅膀", "Flap Wings"],
        ["SourceCharacter扇动PronounPossessive的翅膀.", "SourceCharacter flaps PronounPossessive wings."],
        ["躲到身后", "Hide Behind"],
        ["SourceCharacter躲到TargetCharacter的身后.", "SourceCharacter hides behind TargetCharacter."],
        ["移动到身后", "Move Behind"],
        ["SourceCharacter移动到TargetCharacter的身后.", "SourceCharacter moves behind TargetCharacter."],
        ["下巴搭在肩膀上", "Chin on Shoulder"],
        ["SourceCharacter把下巴搭在TargetCharacter的肩膀上.", "SourceCharacter places chin on TargetCharacter's shoulder."],
        ["手臂搭在肩膀上", "Arm on Shoulder"],
        ["SourceCharacter把手臂搭在TargetCharacter的肩膀上.", "SourceCharacter places arm on TargetCharacter's shoulder."],
        ["搂腰", "Embrace Waist"],
        ["SourceCharacter搂住TargetCharacter的腰.", "SourceCharacter embraces TargetCharacter's waist."],
        ["身体颤抖", "Body Trembles"],
        ["SourceCharacter颤抖着身体.", "SourceCharacter's body trembles."],
        ["身体抽搐", "Body Twitches"],
        ["SourceCharacter身体抽搐着.", "SourceCharacter's body twitches."],
        ["托起乳房", "Lift Breasts"],
        ["SourceCharacter托起TargetCharacter的双乳.", "SourceCharacter lifts TargetCharacter's breasts."],
        ["SourceCharacter托起PronounPossessive的双乳.", "SourceCharacter lifts PronounPossessive's breasts."],
        ["揉搓乳头", "Rub Nipples"],
        ["SourceCharacter揉搓TargetCharacter的乳头.", "SourceCharacter uses hands to pinch TargetCharacter's nipples, rubbing them."],
        ["SourceCharacter揉搓PronounPossessive的乳头.", "SourceCharacter uses hands to pinch PronounPossessive's nipples, rubbing them."],
        ["双腿颤抖", "Legs Tremble"],
        ["SourceCharacter颤抖着双腿.", "SourceCharacter's legs tremble."],
        ["摇晃双腿", "Shake Legs"],
        ["SourceCharacter摇晃PronounPossessive的双腿.", "SourceCharacter shakes own legs."],
        ["流出液体", "Liquid Flows"],
        ["SourceCharacter股间有液体顺着的大腿流下.", "Liquid flows down SourceCharacter's thighs."],
        ["失禁", "Incontinence"],
        ["SourceCharacter的尿液顺着PronounPossessive大腿流下.", "SourceCharacter's urine flows down PronounPossessive thighs."],
        ["夹紧双腿", "Squeeze Legs"],
        ["SourceCharacter夹紧了自己的腿..", "SourceCharacter squeezes TargetCharacter's legs."],
        ["手指插进阴道", "Insert Finger into Vagina"],
        ["SourceCharacter手指插进TargetCharacter的阴道内.", "SourceCharacter inserts finger into TargetCharacter's vagina."],
        ["SourceCharacter手指插进自己的的阴道内.", "SourceCharacter inserts finger into own vagina."],
        ["拔出自己的手指", "Remove Finger"],
        ["SourceCharacter从TargetCharacter的阴道内拔出自己的手指,手指连着PronounPossessive的爱液.", "SourceCharacter removes own finger from TargetCharacter's vagina, the finger coated with PronounPossessive love fluids."],
        ["SourceCharacter从PronounPossessive的阴道内拔出自己的手指,手指连着自己的爱液.", "SourceCharacter removes own finger from PronounPossessive's vagina, the finger coated with SourceCharacter's love fluids."],
        ["蠕动手指", "Wriggle Finger"],
        ["SourceCharacter在TargetCharacter的阴道内蠕动手指.", "SourceCharacter wriggles a finger inside TargetCharacter's vagina."],
        ["SourceCharacter在PronounPossessive的阴道内蠕动手指.", "SourceCharacter wriggles a finger inside PronounPossessive's vagina."],
        ["快速抽插", "Quickly Thrust"],
        ["SourceCharacter的手在TargetCharacter的阴道内快速抽插.", "SourceCharacter's hand quickly thrusts in and out of TargetCharacter's vagina, rubbing and kneading."],
        ["SourceCharacter的手在PronounPossessive的阴道内快速抽插.", "SourceCharacter's hand quickly thrusts in and out of PronounPossessive's vagina, rubbing and kneading."],
        ["钩住阴蒂环", "Hook Clitoral Piercing"],
        ["SourceCharacter钩住TargetCharacter的阴蒂环.", "SourceCharacter hooks onto TargetCharacter's clitoral piercing."],
        ["SourceCharacter钩住自己的阴蒂环.", "SourceCharacter hooks onto own clitoral piercing."],
        ["拉扯阴蒂环", "Tug Clitoral Piercing"],
        ["SourceCharacter拉了一下TargetCharacter的阴蒂环.", "SourceCharacter tugs on TargetCharacter's clitoral piercing and then releases it."],
        ["SourceCharacter拉了一下自己的阴蒂环.", "SourceCharacter tugs on own clitoral piercing and then releases it."],
        ["宠物服爬到脚边", "Pet Crawls to Feet"],
        ["SourceCharacter爬到TargetCharacter脚边.", "SourceCharacter's pet crawls to TargetCharacter's feet."],
        ["宠物服蹭小腿", "Pet Rubs Legs"],
        ["宠物服蹭大腿", "Pet Rubs Legs"],
        ["SourceCharacter蹭TargetCharacter的腿.", "SourceCharacter's pet rubs against TargetCharacter's legs."],
        ["宠物服趴下", "Pet Lies Down"],
        ["SourceCharacter四肢着地趴在地上.", "SourceCharacter's pet lies down on all fours."],
        ["宠物服跪立", "Pet Kneels"],
        ["SourceCharacter手臂离地跪立.", "SourceCharacter's pet kneels with its limbs off the ground."],
        ["宠物服扑", "Pet Pounces"],
        ["SourceCharacter扑到TargetCharacter身上.", "SourceCharacter's pet pounces onto TargetCharacter."],
        ["猫爪挠手", "Cat Scratches Hand"],
        ["SourceCharacter用爪子挠了一下TargetCharacter的手.", "SourceCharacter's pet scratches TargetCharacter's hand with its claws."],
        ["猫爪挠手臂", "Cat Scratches Arm"],
        ["SourceCharacter用爪子挠了一下TargetCharacter的手臂.", "SourceCharacter's pet scratches TargetCharacter's arm with its claws."],
        ["猫爪舔手", "Cat Licks Paw"],
        ["SourceCharacter舔自己的爪子.", "SourceCharacter's pet licks its own paw."],
        ["猫爪戳脸", "Cat Pokes Face"],
        ["SourceCharacter用爪子戳了戳TargetCharacter的脸.", "SourceCharacter's pet pokes TargetCharacter's face with its claws."],
        ["SourceCharacter用爪子戳了戳自己的脸.", "SourceCharacter's pet pokes its own face with its claws."],
        ["猫爪戳鼻子", "Cat Pokes Nose"],
        ["SourceCharacter用爪子戳了戳TargetCharacter的鼻子.", "SourceCharacter's pet pokes TargetCharacter's nose with its claws."],
        ["SourceCharacter用爪子戳了戳自己的鼻子.", "SourceCharacter's pet pokes its own nose with its claws."],
        ["猫爪揉脸", "Cat Rubs Face"],
        ["SourceCharacter用爪子揉了揉TargetCharacter的脸.", "SourceCharacter uses its claws to rub TargetCharacter's face."],
        ["SourceCharacter用爪子揉了揉自己的脸.", "SourceCharacter uses its claws to rub its own face."],
        ["猫爪揉鼻子", "Cat Rubs Nose"],
        ["SourceCharacter用爪子揉了揉TargetCharacter的鼻子.", "SourceCharacter uses its claws to rub TargetCharacter's nose."],
        ["SourceCharacter用爪子揉了揉自己的鼻子.", "SourceCharacter uses its claws to rub its own nose."],
        ["撞笼子", "Bump into Cage"],
        ["SourceCharacter用身体撞击笼子.", "SourceCharacter bumps its body into the cage."],
        ["咬笼子", "Bite Cage"],
        ["SourceCharacter用牙齿咬笼子.", "SourceCharacter bites the cage."],
        ["摇晃笼子", "Shake Cage"],
        ["SourceCharacter摇晃笼子的门.", "SourceCharacter shakes the door of the cage."],
        ["撇眼", "Roll Eyes"],
        ["SourceCharacter撇了TargetCharacter一眼.", "SourceCharacter rolls its eyes at TargetCharacter."],
        ["跺脚", "Stamp Feet"],
        ["SourceCharacter不停地跺脚.", "SourceCharacter keeps stamping its feet."],
        ["叉腰", "Put Hands on Hips"],
        ["SourceCharacter双手叉在腰上.", "SourceCharacter puts its hands on its hips."],
        ["撩头发", "Toss Hair"],
        ["SourceCharacter撩起头发挂在耳边.", "SourceCharacter tosses its hair, letting it hang by its ears."],
        ["骑上去", "Ride On"],
        ["SourceCharacter骑在TargetCharacter的背上.", "SourceCharacter Rides on TargetCharacter's Back."],
        ["泡沫剑架在脖子上", "Foam Sword Rests on the Neck"],
        ["SourceCharacter把泡沫剑架在自己的脖子上.", "SourceCharacter Places the Foam Sword on own Neck."],
        ["SourceCharacter把泡沫剑架在TargetCharacter的脖子上", "SourceCharacter Places the Foam Sword on TargetCharacter's Neck"],
        ["泡沫剑拍脸", "Foam Sword Hits the Face"],
        ["SourceCharacter用泡沫剑轻轻拍了拍一下TargetCharacter的脸", "SourceCharacter Gently Hits TargetCharacter's Face with a Foam Sword"],
        ["剪刀剪掉上衣", "Scissors Cut Off the Top"],
        ["SourceCharacter用剪刀剪掉了自己的上衣.", "SourceCharacter Cuts Off own Top with Scissors."],
        ["SourceCharacter用剪刀剪掉了TargetCharacter的上衣.", "SourceCharacter Cuts Off TargetCharacter's Top with Scissors."],
        ["剪刀剪掉下衣", "Scissors Cut Off the Bottom"],
        ["SourceCharacter用剪刀剪掉了自己的下衣.", "SourceCharacter Cuts Off own Bottom with Scissors."],
        ["SourceCharacter用剪刀剪掉了TargetCharacter的下衣.", "SourceCharacter Cuts Off TargetCharacter's Bottom with Scissors."],
        ["剪刀剪掉胸罩", "Scissors Cut Off the Bra"],
        ["SourceCharacter用剪刀剪掉了自己的胸罩.", "SourceCharacter Cuts Off own Bra with Scissors."],
        ["SourceCharacter用剪刀剪掉了TargetCharacter的胸罩.", "SourceCharacter Cuts Off TargetCharacter's Bra with Scissors."],
        ["剪刀剪掉内裤", "Scissors Cut Off the Underwear"],
        ["SourceCharacter用剪刀剪掉了自己的内裤.", "SourceCharacter Cuts Off own Underwear with Scissors."],
        ["SourceCharacter用剪刀剪掉了TargetCharacter的内裤.", "SourceCharacter Cuts Off TargetCharacter's Underwear with Scissors."],
        ["剪刀剪掉袜子", "Scissors Cut Off the Socks"],
        ["SourceCharacter用剪刀剪掉了自己的袜子.", "SourceCharacter Cuts Off own Socks with Scissors."],
        ["SourceCharacter用剪刀剪掉了TargetCharacter的袜子.", "SourceCharacter Cuts Off TargetCharacter's Socks with Scissors."],
        ["躺上去", "Lie Down"],
        ["SourceCharacter躺到TargetCharacter的身边.", "SourceCharacter Lies Down Next to TargetCharacter."],
        ["舔触手", "Lick Tentacles"],
        ["SourceCharacter舔PronounPossessive的触手.", "SourceCharacter Licks PronounPossessive Tentacles."],
        ["触手摸头", "Tentacles Pet Head"],
        ["SourceCharacter用触手摸了摸自己的头.", "SourceCharacter Pet own Head with Tentacles."],
        ["SourceCharacter用触手摸了摸TargetCharacter的头.", "SourceCharacter Pet TargetCharacter's Head with Tentacles."],
        ["触手戳鼻子", "Tentacles Poke Nose"],
        ["SourceCharacter用触手戳了戳自己的鼻子.", "SourceCharacter Pokes own Nose with Tentacles."],
        ["SourceCharacter用触手戳了戳TargetCharacter的鼻子.", "SourceCharacter Pokes TargetCharacter's Nose with Tentacles."],
        ["触手戳脸", "Tentacles Poke Face"],
        ["SourceCharacter用触手戳了戳自己的脸.", "SourceCharacter Pokes own Face with Tentacles."],
        ["SourceCharacter用触手戳了戳TargetCharacter的脸.", "SourceCharacter Pokes TargetCharacter's Face with Tentacles."],
        ["触手揉鼻子", "Tentacles Rub Nose"],
        ["SourceCharacter用触手揉了揉自己的鼻子.", "SourceCharacter Rubs own Nose with Tentacles."],
        ["SourceCharacter用触手揉了揉TargetCharacter的鼻子.", "SourceCharacter Rubs TargetCharacter's Nose with Tentacles."],
        ["触手揉脸", "Tentacles Rub Face"],
        ["SourceCharacter用触手揉了揉自己的脸.", "SourceCharacter Rubs own Face with Tentacles."],
        ["SourceCharacter用触手揉了揉TargetCharacter的脸.", "SourceCharacter用触手揉了揉TargetCharacter的脸."],
        ["鱼尾揉脸", "Fish Tail Rubs Face"],
        ["SourceCharacter用鱼尾揉了揉PronounPossessive自己的脸.", "SourceCharacter用鱼尾揉了揉自己的脸."],
        ["SourceCharacter用鱼尾揉了揉TargetCharacter的脸.", "SourceCharacter用鱼尾揉了揉TargetCharacter的脸."],
        ["鱼尾戳脸", "Fish Tail Pokes Face"],
        ["SourceCharacter用鱼尾戳了戳PronounPossessive自己的脸.", "SourceCharacter用鱼尾戳了戳自己的脸."],
        ["SourceCharacter用鱼尾戳了戳TargetCharacter的脸.", "SourceCharacter用鱼尾戳了戳TargetCharacter的脸."],
        ["鱼尾抚脸", "Fish Tail Caresses Face"],
        ["SourceCharacter用鱼尾轻抚PronounPossessive自己的脸颊.", "SourceCharacter用鱼尾轻抚自己的脸颊."],
        ["SourceCharacter用鱼尾轻抚TargetCharacter的脸颊.", "SourceCharacter用鱼尾轻抚TargetCharacter的脸颊."],
        ["鱼尾担膝盖", "Fish Tail Rests on Knee"],
        ["SourceCharacter将鱼尾担在了TargetCharacter的膝盖上.", "SourceCharacter将鱼尾担在了TargetCharacter的膝盖上."],
        ["鱼尾揉乳房", "Fish Tail Rubs Chest"],
        ["SourceCharacter用鱼尾揉了揉PronounPossessive自己的乳房.", "SourceCharacter用鱼尾揉了揉自己的乳房."],
        ["SourceCharacter用鱼尾揉了揉TargetCharacter的乳房.", "SourceCharacter用鱼尾揉了揉TargetCharacter的乳房."],
        ["鱼尾扇风", "Fish Tail Fans"],
        ["SourceCharacter用鱼尾给自己扇了扇风.", "SourceCharacter用鱼尾给自己扇了扇风."],
        ["SourceCharacter用鱼尾给TargetCharacter的脸扇了扇风.", "SourceCharacter用鱼尾给TargetCharacter的脸扇了扇风."],
        ["鱼尾戳乳头", "Fish Tail Pokes Nipple"],
        ["SourceCharacter用鱼尾戳了戳自己的乳头.", "SourceCharacter用鱼尾戳了戳自己的乳头."],
        ["SourceCharacter用鱼尾戳了戳TargetCharacter的乳头.", "SourceCharacter用鱼尾戳了戳TargetCharacter的乳头."],
        ["鱼尾碰手", "Fish Tail Touches Hand"],
        ["SourceCharacter将鱼尾踝搭在了TargetCharacter的手心上.", "SourceCharacter将鱼尾踝搭在了TargetCharacter的手心上."],
        ["鱼尾抚弄大腿", "Fish Tail Strokes Thigh"],
        ["SourceCharacter用鱼尾抚弄TargetCharacter的大腿.", "SourceCharacter用鱼尾抚弄TargetCharacter的大腿."],
        ["SourceCharacter拍打TargetCharacter的头.", "SourceCharacter拍打TargetCharacter的头."],

    ]);


    let is笨蛋炉子2 = false;
    笨蛋Luzi.hookFunction("ChatRoomSync", 10, (args, next) => {
        next(args);
        if (!is笨蛋炉子2) {
            setTimeout(() => {
                let language = localStorage.getItem("BondageClubLanguage");
                if ((language === "CN" || language === "TW")) {
                    // 替换翻译后的值
                    let found = false;
                    while (!found) {
                        const containsActivityLSCG_ = ActivityDictionary.some(activity => activity[0].includes('LSCG_'));
                        if (containsActivityLSCG_) {
                            ActivityDictionary.forEach(activity => {
                                const originalValue = activity[1];
                                if (translationMap.has(originalValue)) {
                                    activity[1] = translationMap.get(originalValue);
                                }
                            });
                            found = true;
                        } else {
                            break;
                        }
                    }
                };
                if (!(language === "CN" || language === "TW")) {
                    // 替换翻译后的值
                    ActivityDictionary.forEach(activity => {
                        const originalValue = activity[1];
                        if (translationMapEN.has(originalValue)) {
                            activity[1] = translationMapEN.get(originalValue);
                        }
                    });
                }
            }, 2000);
            is笨蛋炉子2 = true;
        }
    });

    // 笨蛋Luzi.hookFunction("ChatRoomMessageDisplay", 10, (args, next) => {
    //     console.log(args)
    //     next(args);
    // });





    //============================================================
    //============================================================
    /**
     * 从玩家身上移除指定活动的道具组函数
     * @param {object} data - 活动消息的数据对象
     * @param {string} groupName - 身体部位名称
     * @param {string} assetName - 活动名称
     * @param {string} removalGroup - 要移除的道具组名称
     */
    function removeActivityItems(data, groupName, assetName, removalGroup) {
        // 检测消息发送者是否是玩家自身, 并且消息内容是否包含对应的 Activity
        if (data.Sender === Player.MemberNumber && (data.Content.includes(`Self-${groupName}-${assetName}`) || data.Content.includes(`Other-${groupName}-${assetName}`))) {

            const targetCharacter = data.Dictionary.find(entry => entry.TargetCharacter !== undefined)?.TargetCharacter; // 提取对方的ID
            const playerIndex = ChatRoomCharacter.findIndex(player => player.MemberNumber === targetCharacter); // 查找房间内对应的玩家
            const targetMember = ChatRoomCharacter[playerIndex]; // 对方玩家的信息
            if (playerIndex !== -1) {
                InventoryRemove(targetMember, removalGroup);
                ChatRoomCharacterUpdate(targetMember)
            }
        }
    }
    function 缰绳(name) {
        const halter =
        {
            Name: "缰绳",
            Description: name,
            Property: name,
        };
        InventoryWear(Player, "缰绳_Luzi", "ItemTorso", "", 1, 1, halter);
        ChatRoomCharacterUpdate(Player)
    }
    function 床右边(name) {
        const halter =
        {
            Name: "床右边",
            Description: name,
            Property: name,
        };
        InventoryWear(Player, "床右边_Luzi", "ItemDevices", "", 1, 1, halter);
        ChatRoomCharacterUpdate(Player)
    }
    笨蛋Luzi.hookFunction("ChatRoomMessage", 0, (args, next) => {
        const data = args[0];
        if (data.Sender === Player.MemberNumber && data.Content === 'ChatOther-ItemTorso-笨蛋Luzi_骑上去' && data.Type === 'Activity' && data.Dictionary) {
            const targetCharacter = data.Dictionary.find(entry => entry.TargetCharacter !== undefined)?.TargetCharacter; // 提取对方的ID
            // 遍历ChatRoomCharacterDrawlist中的所有角色的Name和MemberNumber
            for (let i = 0; i < ChatRoomCharacterDrawlist.length; i++) {
                const characterName = ChatRoomCharacterDrawlist[i].Name;
                const memberNumber = ChatRoomCharacterDrawlist[i].MemberNumber;

                if (memberNumber === targetCharacter) {
                    缰绳(`${characterName}`) // 检查是否符合玩家ID
                }
            }
        }
        if (data.Sender === Player.MemberNumber && data.Content === 'ChatOther-ItemArms-笨蛋Luzi_躺上去' && data.Type === 'Activity' && data.Dictionary) {
            const targetCharacter = data.Dictionary.find(entry => entry.TargetCharacter !== undefined)?.TargetCharacter; // 提取对方的ID
            // 遍历ChatRoomCharacterDrawlist中的所有角色的Name和MemberNumber
            for (let i = 0; i < ChatRoomCharacterDrawlist.length; i++) {
                const characterName = ChatRoomCharacterDrawlist[i].Name;
                const memberNumber = ChatRoomCharacterDrawlist[i].MemberNumber;

                if (memberNumber === targetCharacter) {
                    床右边(`${characterName}`) // 检查是否符合玩家ID
                }
            }
        }
        removeActivityItems(data, "ItemTorso", "笨蛋Luzi_剪刀剪掉上衣", "Cloth");
        removeActivityItems(data, "ItemPelvis", "笨蛋Luzi_剪刀剪掉下衣", "ClothLower");
        removeActivityItems(data, "ItemBreast", "笨蛋Luzi_剪刀剪掉胸罩", "Bra");
        removeActivityItems(data, "ItemVulvaPiercings", "笨蛋Luzi_剪刀剪掉内裤", "Panties");
        removeActivityItems(data, "ItemBoots", "笨蛋Luzi_剪刀剪掉袜子", "Socks");

        next(args);
    });
    //============================================================
    //============================================================

    //============================================================
    //============================================================

    // 这个忘记写的是个什么东西了 有空优化一下逻辑
    let currentLanguage = '';
    let currentLanguage2 = '';
    let halo2 = false;
    笨蛋Luzi.hookFunction("ChatRoomMessage", 0, (args, next) => {
        const data = args[0];
        // console.log(data);
        halo2 = true;
        let luzi = InventoryGet(Player, "ItemEars");

        if ((data.Sender === Player.MemberNumber && data.Content === "ActionRemove" && data.Dictionary[3].GroupName === "ItemEars") ||
            (data.Sender === Player.MemberNumber && data.Content === "ActionSwap" && data.Dictionary[3].GroupName === "ItemEars")) {
            currentLanguage = '';
        }

        if (luzi !== null) {
            if (luzi.Craft && luzi.Craft.Description) {
                // 使用正则表达式匹配双引号内的内容
                const matches = luzi.Craft.Description.match(/"([^"]*)"/);

                // 如果有匹配的内容,matches[1] 就是双引号内的内容
                if (matches) {
                    currentLanguage = matches[1];
                }
            }
        } else { currentLanguage = ''; }
        // ============================================
        let luzi2 = InventoryGet(Player, "ItemMisc");
        if ((data.Sender === Player.MemberNumber && data.Content === "ActionRemove" && data.Dictionary[3].GroupName === "ItemMisc") ||
            (data.Sender === Player.MemberNumber && data.Content === "ActionSwap" && data.Dictionary[3].GroupName === "ItemMisc")) {
            currentLanguage2 = '';
        }
        if (luzi2 !== null) {
            if (luzi2.Craft && luzi2.Craft.Description) {
                const validAssetNames = ["TeddyBear", "PetPotato", "BunPlush", "FoxPlush", "Karl"];
                if (validAssetNames.includes(luzi2.Asset.Name)) {
                    // 使用正则表达式匹配双引号内的内容
                    const matches = luzi2.Craft.Description.match(/"([^"]*)"/);

                    // 如果有匹配的内容,matches[1] 就是双引号内的内容
                    if (matches) {
                        currentLanguage2 = matches[1];
                    }
                }
            }
        } else { currentLanguage2 = ''; }
        // ============================================
        if (data.Sender !== Player.MemberNumber && (data.Type === "Chat" || data.Type === "Whisper" || data.Type === "Emote") && !data.Content.includes("[T]") && !data.Content.includes("📞") && !data.Content.includes("🔊") && !data.Content.includes("\\") && !data.Content.includes("/")) {
            let sourceText = data.Dictionary?.find(d => d.Tag === "BCX_ORIGINAL_MESSAGE")?.Text ?? data.Content;
            let sourceLang = 'auto';
            let targetLang = currentLanguage;

            if (targetLang !== sourceLang) {
                let url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText);
                fetch(url)
                    .then(response => response.json())
                    .then((dt) => {
                        if (dt && dt[0] && dt[0][0] && dt[0][0][0]) {
                            let translatedText = dt[0][0][0].replace("[T]", ""); // 去掉翻译中的[T]

                            if (translatedText !== sourceText) {
                                ChatRoomMessage({ Content: "📞 " + translatedText, Type: "Chat", Sender: Player.MemberNumber, Dictionary: [{ Tag: '发送私聊', Text: 1 }] });
                            }
                        } else {
                            //console.log("无效的翻译数据:", dt);
                        }
                    })
                    .catch(error => {
                        //console.error("翻译请求失败:", error);
                    });
            }
        }
        if (data.Sender === Player.MemberNumber && (data.Type === "Chat" || data.Type === "Whisper" || data.Type === "Emote") && !data.Content.includes("[T]") && !data.Content.includes("📞") && !data.Content.includes("🔊") && !data.Content.includes("\\") && !data.Content.includes("/")) {
            let sourceText = data.Dictionary?.find(d => d.Tag === "BCX_ORIGINAL_MESSAGE")?.Text ?? data.Content;
            let sourceLang = 'auto';
            let targetLang = currentLanguage2;

            if (targetLang !== sourceLang) {
                let url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText);
                fetch(url)
                    .then(response => response.json())
                    .then((dt) => {
                        if (dt && dt[0] && dt[0][0] && dt[0][0][0]) {
                            let translatedText = dt[0][0][0].replace("[T]", ""); // 去掉翻译中的[T]

                            if (translatedText !== sourceText) {
                                ServerSend("ChatRoomChat", {
                                    Content: "🔊 " + translatedText, // 不包含[T]的翻译文本
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
                        } else {
                            //console.log("无效的翻译数据:", dt);
                        }
                    })
                    .catch(error => {
                        //console.error("翻译请求失败:", error);
                    });
            }
        }

        next(args);
    });
    //============================================================
    //============================================================
    // 嵌入链接分享 目前只支持 bilibili 网易云音乐 youtube pornhub
    笨蛋Luzi.hookFunction("ChatRoomMessage", 0, (args, next) => {
        const data = args[0];
        if (data.Type === "Hidden" && data.Content.includes('<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/')) {
            ChatRoomSendLocal(data.Content);
        };
        if (data.Type === "Hidden" && data.Content.includes('<iframe src="//player.bilibili.com/player.html')) {
            ChatRoomSendLocal(data.Content);
        };
        if (data.Type === "Hidden" && data.Content.includes('<iframe width="560" height="315" src="https://www.youtube.com/')) {
            ChatRoomSendLocal(data.Content);
        };
        if (data.Type === "Hidden" && data.Content.includes('<iframe src="https://www.pornhub.com/')) {
            ChatRoomSendLocal(data.Content);
        };
        // console.log("公开", data)
        next(args);
    });

    笨蛋Luzi.hookFunction("ServerSend", 5, (args, next) => {
        const data = args;
        // Player.ChatSettings.MuStylePoses
        if (Player && Player.ChatSettings && data[0] === "ChatRoomChat" && typeof data[1]?.Content === 'string' && data[1]?.Content.includes('></iframe>') && data[1]?.Type === "Chat") {
            if (data[1]?.Content.includes('<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/')) {
                args[1].Type = "Hidden";
                ChatRoomSendEmote("一个 网易云 嵌入分享 ╰(*°▽°*)╯");
            };
            if (data[1]?.Content.includes('<iframe src="//player.bilibili.com/player.html')) {
                let modifiedContent = data[1].Content.replace(/width\s*=\s*['"]\d+['"]/i, 'width="560"');
                modifiedContent = modifiedContent.replace(/height\s*=\s*['"]\d+['"]/i, 'height="315"');
                args[1].Content = modifiedContent;
                args[1].Type = "Hidden";
                ChatRoomSendEmote("一个 Bilibili 嵌入分享 ╰(*°▽°*)╯");
            };
            if (data[1]?.Content.includes('<iframe width="560" height="315" src="https://www.youtube.com/')) {
                let modifiedContent = data[1].Content.replace(/width\s*=\s*['"]\d+['"]/i, 'width="560"');
                modifiedContent = modifiedContent.replace(/height\s*=\s*['"]\d+['"]/i, 'height="315"');
                args[1].Content = modifiedContent;
                args[1].Type = "Hidden";
                ChatRoomSendEmote("一个 Youtube 嵌入分享 ╰(*°▽°*)╯");
            };
            if (data[1]?.Content.includes('<iframe src="https://www.pornhub.com/')) {
                let modifiedContent = data[1].Content.replace(/width\s*=\s*['"]\d+['"]/i, 'width="560"');
                modifiedContent = modifiedContent.replace(/height\s*=\s*['"]\d+['"]/i, 'height="315"');
                args[1].Content = modifiedContent;
                args[1].Type = "Hidden";
                ChatRoomSendEmote("一个 Pornhub 嵌入分享 ╰(*°▽°*)╯");
            };
        };
        // console.log("自己", data[1])
        next(args);
    });

    //============================================================
    //============================================================
    // 保存高潮开关和次数到ECHO
    function saveOrgasmSettings(bl, count) {
        Player.OnlineSettings.ECHO = Player.OnlineSettings.ECHO || {};
        Player.OnlineSettings.ECHO.高潮开关 = bl;
        Player.OnlineSettings.ECHO.高潮次数 = count;
        ServerAccountUpdate.QueueData({ OnlineSettings: Player.OnlineSettings });
    }

    // 保存高潮开关到ECHO
    function saveOrgasmToggle(bl) {
        Player.OnlineSettings.ECHO = Player.OnlineSettings.ECHO || {};
        Player.OnlineSettings.ECHO.高潮开关 = bl;
        ServerAccountUpdate.QueueData({ OnlineSettings: Player.OnlineSettings });
    }

    // 保存高潮次数到ECHO
    function saveOrgasmCount(num) {
        Player.OnlineSettings.ECHO = Player.OnlineSettings.ECHO || {};
        Player.OnlineSettings.ECHO.高潮次数 = num;
        ServerAccountUpdate.QueueData({ OnlineSettings: Player.OnlineSettings });
    }

    // 处理聊天室消息
    笨蛋Luzi.hookFunction("ChatRoomMessage", 0, (args, next) => {
        const data = args[0];
        const 开关 = Player.OnlineSettings.ECHO && Player.OnlineSettings.ECHO.高潮开关;
        const 历史次数 = (Player.OnlineSettings.ECHO && Player.OnlineSettings.ECHO.高潮次数) || 0;

        if (data.Sender === Player.MemberNumber && data.Content.includes("Orgasm") && data.Type === "Activity") {
            // 如果消息包含"Orgasm"且类型为"Activity",增加历史高潮次数
            saveOrgasmSettings(true, Player.ArousalSettings.OrgasmCount);

        }

        if (data.Content === 'ServerEnter') {
            if (开关) {
                // 如果开关打开,同步新的高潮次数到玩家的ArousalSettings
                Player.ArousalSettings.OrgasmCount = 历史次数;
                ActivityChatRoomArousalSync(Player);
            }
        }

        next(args);
    });


    function 动作拓展设置进入Run() {
        if (PreferenceSubscreen === "") {
            DrawButton(1340, 50, 400, 90, "      动作拓展设置", "White", "Icons/Use.png");
        }
    }
    function 动作拓展设置进入Click() {
        if (MouseIn(1340, 50, 400, 90) && PreferenceSubscreen === "") {
            PreferenceSubscreen = "动作拓展设置";
        }
    }

    function 动作拓展设置退出UIRun() {
        if (PreferenceSubscreen === "动作拓展设置" || PreferenceSubscreen === "自定义动作设置" || PreferenceSubscreen === "自定义服装设置" || PreferenceSubscreen === "高潮计数保留设置") {
            DrawButton(1815, 75, 90, 90, "", "White", "Icons/Exit.png"); // 退出按钮
            DrawText(`- ${PreferenceSubscreen} -`, 1000, 125, "Black");
        }
    }

    function 动作拓展设置退出UIClick() {
        if (MouseIn(1815, 75, 90, 90) && (PreferenceSubscreen === "动作拓展设置" || PreferenceSubscreen === "自定义动作设置" || PreferenceSubscreen === "自定义服装设置" || PreferenceSubscreen === "高潮计数保留设置")) {
            // 如果 PreferenceSubscreen 为 "动作拓展设置"，执行 PreferenceSubscreenArousalExit()
            if (PreferenceSubscreen === "动作拓展设置") {
                PreferenceSubscreenArousalExit();
            } else {
                // 如果 PreferenceSubscreen 不为 "动作拓展设置"，返回 PreferenceSubscreen 的上一级
                PreferenceSubscreen = "动作拓展设置";
            }
        }
    }

    function 动作拓展设置主界面Run() {
        if (PreferenceSubscreen === "动作拓展设置") {
            DrawButton(250, 190, 390, 90, "      自定义动作", "White", "data:image/png;base64,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");
            DrawButton(250, 290, 390, 90, "      自定义服装", "White", "data:image/png;base64,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");
            DrawButton(250, 390, 390, 90, "      高潮计数保留", "White", "Icons/Trash.png");
            DrawButton(1500, 840, 390, 90, "      Discord", "White", "Icons/Trash.png");
            if (MouseIn(1500, 840, 390, 90)) {
                DrawTextWrap(
                    `插件翻译\n\n\n\n\n动作\n/\n服装拓展\n\n在此查看插件更新及反馈建议`
                    , 1500, 700, 390, 90, "White");
            }
        }
    }
    function 动作拓展设置主界面Click() {
        if (PreferenceSubscreen === "动作拓展设置") {
            if (MouseIn(250, 190, 390, 90)) {
                PreferenceSubscreen = "自定义动作设置";
            }
            if (MouseIn(250, 290, 390, 90)) {
                PreferenceSubscreen = "自定义服装设置";
            }
            if (MouseIn(250, 390, 390, 90)) {
                PreferenceSubscreen = "高潮计数保留设置";
                if (Player.OnlineSettings.ECHO === undefined) { saveOrgasmSettings(false, 0) }
            }
            if (MouseIn(1500, 840, 390, 90)) {
                window.open("https://discord.gg/K9YnNqsNKx");
            }
        }
    }



    /**
     * 创建活动对象的函数
     * @param {string} name - 动作名称
     * @param {string} targetSelf - 对自己做动作的部位
     * @param {string} target - 对他人做动作的部位
     * @param {string} targetSelftext - 对自己做动作的描述
     * @param {string} targettext - 对他人做动作的描述
     * @returns {object} - 包含创建的活动信息的对象
     */
    function createActivity2(activityInfo) {
        const {
            name,
            targetSelf,
            target,
            targetSelftext,
            targettext,
        } = activityInfo;

        const activity = {
            Name: `笨蛋笨Luzi_${name}`, // 道具名字
            TargetSelf: [targetSelf], // 自己的部位
            Target: [target], // 对方的部位
            Prerequisite: [],
            MaxProgress: 50,
            MaxProgressSelf: 50,
        };
        ActivityFemale3DCG.push(activity); // 这个是把自己的活动数组添加进去
        ActivityFemale3DCGOrdering.push(activity.Name); // 这个是活动名字
        ActivityDictionary.push([`Activity笨蛋笨Luzi_${name}`, `${name}`]);
        if (targetSelf) {
            ActivityDictionary.push([`Label-ChatSelf-${targetSelf}-${activity.Name}`, `${name}`]);
            ActivityDictionary.push([`ChatSelf-${targetSelf}-${activity.Name}`, targetSelftext]);
        };
        if (target) {
            ActivityDictionary.push([`Label-ChatOther-${target}-${activity.Name}`, `${name}`]);
            ActivityDictionary.push([`ChatOther-${target}-${activity.Name}`, targettext]);
        };


    }


    // 👤👥
    // 🅰🅱
    // 👈👉
    /**
     * 创建活动对象的函数
     * @param {string} name - 输入框名称
     */
    function 移除清空输入框(name) {
        if (document.getElementById(name)) {
            document.getElementById(name).style.display = "none"; // 移除输入框
            document.getElementById(name).value = ""; // 清空输入框
        }
    }

    function resetLuzi() {
        ActivityFemale3DCGOrdering = ActivityFemale3DCGOrdering.filter(item => !item.includes("笨蛋笨Luzi_"));
        ActivityFemale3DCG = ActivityFemale3DCG.filter(obj => !obj.Name || !obj.Name.includes("笨蛋笨Luzi_"));
        ActivityDictionary = ActivityDictionary.filter(subArray => {
            return !subArray.every(item => item.includes("笨蛋笨Luzi_"));
        });
        Player.OnlineSettings.ECHO.炉子ActivityDictionary = "";
        Player.OnlineSettings.ECHO.炉子ActivityFemale3DCG = "";
        Player.OnlineSettings.ECHO.炉子ActivityFemale3DCGOrdering = "";
        ServerAccountUpdate.QueueData({ OnlineSettings: Player.OnlineSettings });
    }

    var 单双 = "👤"
    var isme = "👈"
    var 新建动作 = false
    var 当前动作索引 = 0;
    var 动作
    function 自定义动作设置Run() {
        if (PreferenceSubscreen === "自定义动作设置") { // 装备量表
            DrawCharacter(Player, 50, 50, 0.9, false);// 绘制主要标签和玩家
            if (PreferenceArousalIsActive()) {
                // 绘制所有可用的角色区域
                for (let Group of AssetGroup) {
                    if (Group.IsItem() && !Group.MirrorActivitiesFrom && AssetActivitiesForGroup("Female3DCG", Group.Name).length)
                        DrawAssetGroupZone(Player, Group.Zone, 0.9, 50, 50, 1, "#808080FF", 3, PreferenceGetFactorColor(PreferenceGetZoneFactor(Player, Group.Name)));
                }
                // 可以选择并在角色身上绘制区域
                if (Player.FocusGroup != null) {
                    DrawAssetGroupZone(Player, Player.FocusGroup.Zone, 0.9, 50, 50, 1, "cyan");
                    MainCanvas.textAlign = "center";
                }
            }

            ElementCreateInput("笨蛋Luzi_activityName", "text", "", "20"); // 创建一个新的文本输入元素
            ElementPosition("笨蛋Luzi_activityName", 960, 250, 400); // 特定位置绘制一个输入框
            DrawText(`动作名字:`, 660, 260, "Black");// 绘制一个文本元素

            let name = document.getElementById('笨蛋Luzi_activityName')?.value || "";
            let targetSelfText = document.getElementById('笨蛋Luzi_targetSelfText')?.value || "";
            let targetText = document.getElementById('笨蛋Luzi_targetText')?.value || "";

            let targetSelf = Player.FocusGroup?.Name || "";
            let target = Player.FocusGroup?.Name || "";

            if (单双 === "👤") {
                DrawButton(1500, 200, 90, 90, "👤", "White", "");
                DrawImageResize("data:image/png;base64,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",
                    500, 100, 100, 140,);
                if (isme === "👈") {
                    DrawButton(410, 120, 80, 90, "👈", "White", "");
                    ElementCreateInput("笨蛋Luzi_targetSelfText", "text", "", "200");
                    ElementPosition("笨蛋Luzi_targetSelfText", 1260, 350, 500); // 特定位置绘制一个输入框
                    DrawText(`对自己使用动作的文本:`, 760, 360, "Black");// 绘制一个文本元素
                    DrawButton(1560, 328, 80, 60, "👈", "White", "");
                    DrawButton(1660, 328, 80, 60, "👉", "White", "");
                    DrawButton(1760, 328, 80, 60, "🚻", "White", "");


                    target = "";
                } else { 移除清空输入框("笨蛋Luzi_targetSelfText") }
                // document.getElementById("笨蛋Luzi_targetSelfText").value

                if (isme === "👉") {
                    DrawButton(410, 120, 80, 90, "👉", "White", "");
                    ElementCreateInput("笨蛋Luzi_targetText", "text", "", "200");
                    ElementPosition("笨蛋Luzi_targetText", 1260, 350, 500); // 特定位置绘制一个输入框
                    DrawText(`对别人使用动作的文本:`, 760, 360, "Black");// 绘制一个文本元素
                    DrawButton(1560, 328, 80, 60, "👈", "White", "");
                    DrawButton(1660, 328, 80, 60, "👉", "White", "");
                    DrawButton(1760, 328, 80, 60, "🚻", "White", "");


                    targetSelf = "";
                } else { 移除清空输入框("笨蛋Luzi_targetText") }
            }
            if (单双 === "👥") {
                DrawButton(1500, 200, 90, 90, "👥", "White", "");
                ElementCreateInput("笨蛋Luzi_targetSelfText", "text", "", "200");
                ElementPosition("笨蛋Luzi_targetSelfText", 1260, 350, 500); // 特定位置绘制一个输入框
                DrawText(`对自己使用动作的文本:`, 760, 360, "Black");// 绘制一个文本元素
                DrawButton(1560, 328, 80, 60, "👈", "White", "");
                DrawButton(1660, 328, 80, 60, "👉", "White", "");
                DrawButton(1760, 328, 80, 60, "🚻", "White", "");

                ElementCreateInput("笨蛋Luzi_targetText", "text", "", "200");
                ElementPosition("笨蛋Luzi_targetText", 1260, 450, 500); // 特定位置绘制一个输入框
                DrawText(`对别人使用动作的文本:`, 760, 460, "Black");// 绘制一个文本元素
                DrawButton(1560, 428, 80, 60, "👈", "White", "");
                DrawButton(1660, 428, 80, 60, "👉", "White", "");
                DrawButton(1760, 428, 80, 60, "🚻", "White", "");


            }

            const activityInfo2 = {
                name: name,
                targetSelf: targetSelf,
                target: target,
                targetSelftext: targetSelfText,
                targettext: targetText
            };

            if (Player.FocusGroup && Player.FocusGroup.Name && name) {
                if (MouseIn(1600, 200, 90, 90)) {
                    // 获取用户输入的动作名字
                    let name = document.getElementById('笨蛋Luzi_activityName')?.value || "";
                    // 检查是否存在重复的动作名字
                    if (ActivityFemale3DCGOrdering.includes("笨蛋笨Luzi_" + name)) {
                        DrawText(`动作名字已存在, 请输入其他名字! `, 1600, 300, "red");// 绘制一个文本元素
                    }
                    if (!ActivityFemale3DCGOrdering.includes("笨蛋笨Luzi_" + name)) {
                        DrawText(`新建动作`, 1600, 300, "Black");// 绘制一个文本元素
                    }
                }

                if (!新建动作) {
                    DrawButton(1600, 200, 90, 90, "✪ ω ✪", "White", "");
                }
                if (新建动作) {
                    DrawButton(1600, 200, 90, 90, "0 ω 0", "White", "");

                    createActivity2(activityInfo2);
                    新建动作 = false
                }
            }

            DrawText(`删除已有动作:`, 660, 760, "Black");// 绘制一个文本元素
            动作 = ActivityFemale3DCGOrdering.filter(item => item.includes("笨蛋笨Luzi_"));
            DrawBackNextButton(800, 725, 400, 64, 动作[当前动作索引], "White", "", () => { }, () => { });
            DrawButton(1260, 720, 98, 78, "🚮", "White", "");

            DrawButton(1600, 720, 90, 90, "♻", "red", "");
            if (MouseIn(1600, 720, 90, 90)) {
                DrawText(`清空所有创建动作`, 1650, 680, "red");// 绘制一个文本元素
            }

        } else {
            移除清空输入框("笨蛋Luzi_activityName");
            移除清空输入框("笨蛋Luzi_targetSelfText");
            移除清空输入框("笨蛋Luzi_targetText")
        }
    }

    function 笨蛋LZActivity() {
        Player.OnlineSettings.ECHO = Player.OnlineSettings.ECHO || {};
        Player.OnlineSettings.ECHO.炉子ActivityFemale3DCG = LZString.compressToUTF16(JSON.stringify(ActivityFemale3DCG.filter(obj => obj.Name && obj.Name.includes("笨蛋笨Luzi_"))));
        Player.OnlineSettings.ECHO.炉子ActivityFemale3DCGOrdering = LZString.compressToUTF16(JSON.stringify(ActivityFemale3DCGOrdering.filter(item => item.includes("笨蛋笨Luzi_"))));
        Player.OnlineSettings.ECHO.炉子ActivityDictionary = LZString.compressToUTF16(JSON.stringify(ActivityDictionary.filter(subArray => { return subArray.some(item => item.includes("笨蛋笨Luzi_")); })));
        ServerAccountUpdate.QueueData({ OnlineSettings: Player.OnlineSettings });
    }


    function 自定义动作设置Click() {
        if (PreferenceSubscreen === "自定义动作设置") {
            for (const Group of AssetGroup) {
                if (Group.IsItem() && !Group.MirrorActivitiesFrom && AssetActivitiesForGroup("Female3DCG", Group.Name).length) {
                    const Zone = Group.Zone.find(z => DialogClickedInZone(Player, z, 0.9, 50, 50, 1));
                    if (Zone) {
                        Player.FocusGroup = Group;
                        PreferenceArousalZoneFactor = PreferenceGetZoneFactor(Player, Group.Name);
                    }
                }
            }

            if (MouseIn(1500, 200, 90, 90)) {
                单双 = (单双 === "👤") ? "👥" : "👤";
                移除清空输入框("笨蛋Luzi_targetSelfText");
                移除清空输入框("笨蛋Luzi_targetText");
            }

            if (MouseIn(410, 120, 80, 90)) {
                isme = (isme === "👈") ? "👉" : "👈";
                移除清空输入框("笨蛋Luzi_targetSelfText");
                移除清空输入框("笨蛋Luzi_targetText");
            }

            if (MouseIn(1600, 200, 90, 90)) {
                let name = document.getElementById('笨蛋Luzi_activityName')?.value || "";// 获取用户输入的动作名字
                // 检查是否存在重复的动作名字
                if (ActivityFemale3DCGOrdering.includes("笨蛋笨Luzi_" + name)) {
                    新建动作 = false;
                }

                if (!ActivityFemale3DCGOrdering.includes("笨蛋笨Luzi_" + name)) {
                    新建动作 = true
                    笨蛋LZActivity();
                    console.log("已存储进个人设置");
                }
            }

            if (Array.isArray(动作) && 动作.length > 0) {
                DrawBackNextButton(800, 725, 400, 64, 动作[当前动作索引], "White", "",
                    // 点击按钮切换到上一个字符串
                    () => { 当前动作索引 = (当前动作索引 - 1 + 动作.length) % 动作.length; return 动作[当前动作索引]; },
                    // 点击按钮切换到下一个字符串
                    () => { 当前动作索引 = (当前动作索引 + 1) % 动作.length; return 动作[当前动作索引]; }
                );
            }

            if (MouseIn(1260, 720, 98, 78)) {
                ActivityFemale3DCG = ActivityFemale3DCG.filter(obj => obj.Name !== 动作[当前动作索引]);
                ActivityFemale3DCGOrdering = ActivityFemale3DCGOrdering.filter(item => item !== 动作[当前动作索引]);
                var regex2 = new RegExp(".*" + 动作[当前动作索引] + "\\b");
                ActivityDictionary.filter(subArray => !regex2.test(subArray[0]));
                笨蛋LZActivity();
                console.log("已存储进个人设置");
            }

            if (MouseIn(1600, 720, 90, 90)) {
                resetLuzi()
                console.log("已全部清空");
            }


            if (单双 === "👤") {
                if (isme === "👈") {
                    if (MouseIn(1560, 328, 80, 60)) { document.getElementById('笨蛋Luzi_targetSelfText').value += "SourceCharacter" };
                    if (MouseIn(1660, 328, 80, 60)) { document.getElementById('笨蛋Luzi_targetSelfText').value += "TargetCharacter" };
                    if (MouseIn(1760, 328, 80, 60)) { document.getElementById('笨蛋Luzi_targetSelfText').value += "PronounPossessive" }
                };
                if (isme === "👉") {
                    if (MouseIn(1560, 328, 80, 60)) { document.getElementById('笨蛋Luzi_targetText').value += "SourceCharacter" };
                    if (MouseIn(1660, 328, 80, 60)) { document.getElementById('笨蛋Luzi_targetText').value += "TargetCharacter" };
                    if (MouseIn(1760, 328, 80, 60)) { document.getElementById('笨蛋Luzi_targetText').value += "PronounPossessive" }
                };
            };

            if (单双 === "👥") {
                if (MouseIn(1560, 328, 80, 60)) { document.getElementById('笨蛋Luzi_targetSelfText').value += "SourceCharacter" };
                if (MouseIn(1660, 328, 80, 60)) { document.getElementById('笨蛋Luzi_targetSelfText').value += "TargetCharacter" };
                if (MouseIn(1760, 328, 80, 60)) { document.getElementById('笨蛋Luzi_targetSelfText').value += "PronounPossessive" };
                if (MouseIn(1560, 428, 80, 60)) { document.getElementById('笨蛋Luzi_targetText').value += "SourceCharacter" };
                if (MouseIn(1660, 428, 80, 60)) { document.getElementById('笨蛋Luzi_targetText').value += "TargetCharacter" };
                if (MouseIn(1760, 428, 80, 60)) { document.getElementById('笨蛋Luzi_targetText').value += "PronounPossessive" }
            }

        };
    };


    function 高潮计数Run() {
        if (PreferenceSubscreen === "高潮计数保留设置") {
            // 高潮计数
            DrawCheckbox(250, 200, 64, 64, "                    高潮计数保留", Player.OnlineSettings.ECHO.高潮开关);
            DrawButton(250, 290, 390, 90, "      清空高潮次数", "White", "Icons/Trash.png");
            // 高潮计数

            // ElementCreateInput("InputLuzi", "text", "", "20"); // 添加输入框设置
            // ElementPosition("InputLuzi", 447, 450, 400); // 绘制输入框
            // DrawText("触摸触发动作", 760, 460, "Black");
            // // 在创建和绘制输入框之后,通过ID获取输入框的引用
            // var luziInput = document.getElementById("InputLuzi"); // 储存输入框的值
            // luziInput.value = "笨蛋Luzi"; // 将值设置回输入框
        }
    }
    function 高潮计数Click() {
        if (PreferenceSubscreen === "高潮计数保留设置") {
            // 初始按钮
            // 高潮计数
            if (MouseIn(250, 200, 64, 64)) {
                saveOrgasmToggle(!Player.OnlineSettings.ECHO.高潮开关);
            }
            if (MouseIn(250, 290, 390, 90)) {
                saveOrgasmCount(0);
            }
            // 高潮计数

        }
    }

    function 自定义服装设置Run() {
        if (PreferenceSubscreen === "自定义服装设置") {
            DrawImageResize("data:image/png;base64,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",
                0, 0, 2000, 1000);
        }
    }




    笨蛋Luzi.hookFunction("PreferenceRun", 50, (args, next) => {
        next(args);
        动作拓展设置进入Run();
        动作拓展设置主界面Run();
        动作拓展设置退出UIRun();
        自定义服装设置Run();
        自定义动作设置Run();
        高潮计数Run();
    });

    笨蛋Luzi.hookFunction("PreferenceClick", 10, (args, next) => {
        next(args);
        动作拓展设置进入Click();
        动作拓展设置主界面Click();
        动作拓展设置退出UIClick();
        自定义动作设置Click();
        高潮计数Click();
    });

    笨蛋Luzi.hookFunction("DrawBackNextButton", 10, (args, next) => {
        if (args[4]?.includes("笨蛋笨Luzi_")) {
            args[4] = args[4]?.replace("笨蛋笨Luzi_", "");
        }
        next(args);
    });



    // ========================================================================
    // ========================================================================
    // DrawCheckbox
    // DrawText
    // DrawTextFit
    var loginSuccess = false;
    var playername = "";
    var playernum = "";
    var playerNickname = "";

    w.printedTextMap = new Map();
    // 打印整个 printedTextMap
    // w.printPrintedTextMap = function () {
    //     console.log("Printed Text Map:");
    //     printedTextMap.forEach((value, key) => {
    //         console.log(`${key}: ${value}`);
    //     });
    // };
    // Promise 用于确保 playername 已经被设置
    var playernamePromise = new Promise((resolve) => {
        笨蛋Luzi.hookFunction("LoginResponse", 10, (args, next) => {
            next(args);

            loginSuccess = true;

            resolve();
        });
    });

    // 定义 labelMap
    w.labelMap;

    playernamePromise.then(() => {
        w.labelMap = new Map([
            // BCX
            ["You can find BCX here ►", "从这里浏览BCX ►"],
            ["- Bondage Club Extended -", "- Bondage Club 拓展 -"],
            ["BCX TUTORIAL: Welcome", "BCX教程: 欢迎"],
            ["Loading...", "加载中..."],
            ["BCX TUTORIAL: Adding curses", "BCX教程: 添加诅咒"],
            ["BCX TUTORIAL: Quick overview", "BCX教程: 快速概述"],
            ["BCX TUTORIAL: End of introduction", "BCX教程: 介绍结束"],
            ["BCX TUTORIAL: Curses module overview", "BCX教程: 诅咒模块概述"],
            ["BCX TUTORIAL: New chat room icons", "BCX教程: 新的聊天室图标"],
            ["BCX TUTORIAL: Logging module screen", "BCX教程: 日志模块界面"],
            ["BCX TUTORIAL: Rules module overview", "BCX教程: 规则模块概述"],
            ["BCX TUTORIAL: Logging configuration screen", "BCX教程: 日志配置界面"],
            ["BCX TUTORIAL: Introduction to roles and permissions", "BCX教程: 角色和权限的介绍"],
            ["BCX TUTORIAL: Permission system base principles", "BCX教程: 权限系统的基本原理"],
            ["BCX TUTORIAL: Limiting curse slots / rules", "BCX教程: 限制诅咒 插槽/规则"],
            ["BCX TUTORIAL: General permission examples", "BCX教程: 一般权限示例"],
            ["BCX TUTORIAL: Permission setup example 1", "BCX教程: 权限设置示例1"],
            ["BCX TUTORIAL: Permission setup example 2", "BCX教程: 权限设置示例2"],
            ["BCX TUTORIAL: Permission system overview", "BCX教程: 权限系统概述"],
            ["BCX TUTORIAL: Commands module overview", "BCX教程: 指令模块概述"],
            ["BCX TUTORIAL: Trigger conditions", "BCX教程: 触发条件"],
            ["BCX TUTORIAL: Adding a rule", "BCX教程: 添加规则"],
            ["BCX TUTORIAL: Chat commands", "BCX教程: 聊天指令"],
            ["Please choose a preset, which sets your default experience, permissions and configuration.", "请选择一个预设,以设定您的默认体验、权限和配置."],
            ["Note: You can change the defaults, but changing to another preset is not possible without resetting BCX fully.", "注意: 您可以更改默认值,但更改至另一个预设需要完全重置BCX."],
            ["Dominant", "支配者"],
            ["This preset is for dominants who", "这个预设是为从不打算屈服的"],
            ["never intend to submit. Therefore,", "支配者准备的. 因此,"],
            ["most modules are not loaded at", "大多数模块在开始时都没有加载."],
            ["start. That said, you can still use", "但是, 您仍然可以在其他"],
            ["the BCX graphical user interface", "BCX用户上操作"],
            ["on other BCX users to use actions,", "BCX用户界面,"],
            ["you have permission for, on them,", "您拥有其权限,"],
            ["same as with all other presets.", "就像使用所有其他预设一样."],
            ["Switch/Exploring", "转换/探索者"],
            ["This preset is for switches who", "这个预设是给"],
            ["are sometimes dominant and", "有时想占主导地位,"],
            ["sometimes submissive, enabling", "有时想服从的转换者,"],
            ["them to explore BCX slowly, while", "使他们能够慢慢探索BCX,"],
            ["having full control over all of its", "因此, 转换者拥有完整的"],
            ["settings and features.", "设置和功能."],
            ["Easily try out all features", "轻松尝试所有功能"],
            ["Submissive", "服从者"],
            ["This preset is for submissives,", "这个预设是为服从者准备的,"],
            ["who want to give some of their", "他们想把一些控制权"],
            ["control to selected dominants and", "交给选定的支配者和爱人,"],
            ["lovers, giving only them authority", "只给他们"],
            ["over some of BCX's settings. You", "'对BCX的一些设置的权力'"],
            ["can irreversably give away more", "当你想要的时候,你可以"],
            ["and more control, when you want.", "不可逆转地交出越来越多的控制权"],
            ["Similar to Ace's Cursed Script", "类似于Ace的诅咒脚本"],
            ["Slave", "奴隶"],
            ["This preset is a much more", "这种预设是一种更加极端的"],
            ["extreme submissive experience,", "顺从体验,没有给您留下太多的"],
            ["not leaving much control over the", "设置和权限控制,"],
            ["settings and permissions to you,", "从而使其他人能够在"],
            ["thus enabling others to use many", "您身上使用BCX的许多功能."],
            ["of BCX's features on you. Owners", "如果支配者想要,"],
            ["can even unblock the most extreme", "他们甚至可以解除"],
            ["settings, if they desire so.", "最极端设置的封锁."],
            ["BCX: First time init finalized", "BCX: 首次初始化完成"],
            ["Your BCX version: 0.9.9", ""], // 要去看BCX的版本号在那
            ["This is the latest version", "这是最新版本"],
            ["View changelog", "查看更新日志"],
            ["BCX Patreon", ""],
            ["BCX Discord", ""],
            ["Enable typing indicator", "启用输入指示器"],
            ["Show BCX icons above characters in chatroom", "在聊天室中显示BCX图标在角色上方"],
            ["Show your BCX Supporter Heart to all BCX users", "向所有BCX用户展示你的BCX支持者称号"],
            ["Cheat: Give yourself the mistress padlock and its key", "作弊: 给自己女主人挂锁和钥匙"],
            ["Cheat: Give yourself the pandora padlock and its key", "作弊: 给自己潘多拉挂锁和钥匙"],
            ["- Permanent deletion of ALL Bondage Club Extended data -", "- 永久删除所有 Bondage Club 扩展数据 -"],
            ["Use the following text to auto fill the chat room search field:", "使用以下文字自动填充聊天室搜索字段:"],
            ["Hide BC's typing & wardrobe icon on users showing BCX one", "在显示BCX 的输入和衣柜图标的用户上隐藏BC的"],
            ["Cheat: Prevent random NPC events (kidnappings, ransoms, asylum, club slaves)", "作弊: 防止随机NPC事件(绑架,赎金,收容所,俱乐部奴隶)"],
            ["Enable status indicator showing when you are in any player's BCX menu, biography, or wardrobe", "当你在任何玩家的BCX菜单、简介或衣柜时,启用状态指示器"],
            ["If you confirm, all BCX data (including settings, curses, logs, ...) will be permanently deleted!", "如果您确认,所有BCX数据(包括设置,诅咒,日志,…)将被永久删除!"],
            ["you confirm, all BCX data (including settings, curses, logs, ...) will be permanently deleted!", "您确认后,所有BCX数据(包括设置,诅咒,日志,…)将被永久删除!"],
            ["As part of the deletion process, the window will reload, logging you out of your account.", "作为删除过程的一部分,窗口将重新加载,使您退出您的帐户"],
            ["You will be able to use BCX again, but none of your current data will be coming back!", "您将能够再次使用BCX,但您当前的任何数据都不会存在!"],
            ["Cheat: Prevent loosing Mistress status when reputation falls below 50 dominance", "作弊: 在声望低于50支配力时防止失去女主人地位"],
            ["Use the extended wardrobe importer as default", "使用扩展的衣橱导入器作为默认设置"],
            ["This action cannot be undone!", "此操作无法撤销!"],
            ["Authority module permissions", "权限模块权限"],
            ["Hierarchy of roles:", "角色权限层次结构:"],
            ["Actual character name", "实际角色名字"],
            ["Lowest permitted role", "最低允许角色"],
            ["Enforce speaking it?", "强制说出?"],
            ["Export compressed", "导出压缩"],
            ["Member Number:", "角色编号:"],
            ["Behaviour Log", "行为日志"],
            ["Custom name", "自定义名字"],
            ["- Warning -", "- 警告 -"],
            ["Deleting...", "删除中…"],
            ["is permitted", "允许"],
            ["New name:", "新名字:"],
            ["Commands", "指令"],
            ["Filter:", "筛选:"],
            ["Attach", "附加"],
            ["note:", "记录:"],
            ["Curses", "诅咒"],
            ["Body", "身体"],
            ["when", "当"],
            ["Praise", "表扬"],
            ["Only note", "仅注释"],
            ["Scold", "责备"],
            ["Name", "名字"],
            ["Note", "说明"],
            ["room", "房间"],
            ["Rules", "规则"],
            ["Items", "物品"],
            ["Normal", "普通"],
            ["Limited", "限制"],
            ["Blocked", "屏蔽"],
            ["Clothing", "服装"],
            ["Relationships", "关系"],
            ["room named", "房间名字"],
            ["Filter name:", "筛选名称:"],
            ["Member number", "角色编号"],
            ["room with role", "房间存在"],
            ["Timer disabled", "禁用定时器"],
            ["room with member", "房间存在"],
            ["Enforce this rule", "执行此规则"],
            ["Rule trigger conditions:", "规则触发条件:"],
            ["Please select a member.", "请选择一名角色."],
            ["Curse trigger conditions:", "诅咒触发条件:"],
            ["Timer disabled by default", "定时器默认禁用"],
            ["Remove the item when the curse", "移除诅咒时同时移除物品"],
            ["Set to global rules configuration", "设置为全局规则配置"],
            ["Set to global curses configuration", "设置为全局诅咒配置"],
            ["Example: which rope tie is used", "示例: 哪一种绳索绑法"],
            ["Also curse the item's configuration", "同时对物品的配置施加诅咒"],
            ["This rule is active and can trigger", "该规则处于激活状态,可触发"],
            ["This curse is active and can trigger", "这个诅咒是有效的,可以触发"],
            ["- View / Edit the 'Miscellaneous' curse -", "- 查看/编辑 '杂项'诅咒 -"],
            ["triggering - does not remove locked items", "触发 - 不会移除锁定的物品"],
            ["becomes inactive, removed, or is no longer", "变得不活跃,被移除,或不再存在"],
            ["- View / Edit the global curses configuration -", "- 查看/编辑 全局诅咒配置 -"],
            ["- View / Edit the 'Ready to be summoned' rule -", "- 查看/编辑 '传唤准备'规则 -"],
            ["Note: Settings are applied to new curses and all existing ones set to the global config.", "注意: 设置应用于新的诅咒和所有现有的设置到全局配置"],
            [`- Rules: Description of the rule: "Forbid using remotes on others"-`, `- 规则: 规则的描述: "禁止在其他人身上使用遥控器" -`],
            [`- Rules: Description of the rule: "Forbid using remotes on self"-`, `- 规则: 规则的描述: "禁止在自己身上上使用遥控器" -`],
            [`- Rules: Description of the rule: "Forbid using keys on others"-`, `- 规则: 规则的描述: "禁止在其他人身上使用钥匙" -`],
            [`- Rules: Description of the rule: "Forbid using keys on self"-`, `- 规则: 规则的描述: "禁止在自己身上使用钥匙" -`],
            ["- View / Edit the 'Forbid using remotes on others' rule -", "- 查看/编辑 '禁止在其他人身上使用遥控器' 规则 -"],
            ["- View / Edit the 'Forbid using remotes on self' rule -", "- 查看/编辑 '禁止在自己身上上使用遥控器' 规则 -"],
            ["- View / Edit the 'Forbid using keys on others' rule -", "- 查看/编辑 '禁止在其他人身上使用钥匙' 规则 -"],
            ["- View / Edit the 'Forbid using keys on self' rule -", "- 查看/编辑 '禁止在自己身上使用钥匙' 规则 -"],
            [`- Rules: Description of the rule: "Forbid tying up others"-`, `- 规则: 规则的描述: "禁止捆绑他人" -`],
            [`- Rules: Description of the rule: "Prevent blacklisting"-`, `- 规则: 规则的描述: "禁止增加黑名单" -`],
            [`- Rules: Description of the rule: "Forbid freeing self"-`, `- 规则: 规则的描述: "禁止释放自己" -`],
            ["- View / Edit the 'Forbid using locks on self' rule -", "- 查看/编辑 '禁止对自己使用锁' 规则 -"],
            ["- View / Edit the 'Restrict allowed body poses' rule -", "- 查看/编辑 '限制身体姿势' 规则 -"],
            ["- View / Edit the 'Forbid tying up others' rule -", "- 查看/编辑 '禁止捆绑他人' 规则 -"],
            ["- View / Edit the 'Prevent blacklisting' rule -", "- 查看/编辑 '禁止增加黑名单' 规则 -"],
            ["- View / Edit the 'Forbid freeing self' rule -", "- 查看/编辑 '禁止释放自己' 规则 -"],
            ["- Global: Enable/Disable BCX's modules -", "- 全局: 启用/禁用BCX的模块 -"],
            ["- View / Edit the 'Restrict entering rooms' rule -", "- 查看/编辑 '限制进入房间' 规则 -"],
            ["- View / Edit the 'Prevent leaving the room' rule -", "- 查看/编辑 '阻止离开房间' 规则 -"],
            ["- View / Edit the 'Forbid creating new rooms' rule -", "- 查看/编辑 '禁止创建新房间' 规则 -"],
            ["- View / Edit the 'Forbid picking locks on self' rule -", "- 查看/编辑 '禁止撬自己的锁' 规则 -"],
            ["- View / Edit the 'Forbid wardrobe use on self' rule -", "- 查看/编辑 '禁止自己使用衣柜' 规则 -"],
            ["- View / Edit the 'Forbid picking locks on others' rule -", "- 查看/编辑 '禁止撬别人的锁' 规则 -"],
            ["- View / Edit the 'Forbid using locks on others' rule -", "- 查看/编辑 '禁止对其他人使用锁' 规则 -"],
            [`- Rules: Description of the rule: "Restrict entering rooms"-`, `- 规则: 规则的描述: "限制进入房间" -`],
            [`- Rules: Description of the rule: "Prevent leaving the room"-`, `- 规则: 规则的描述: "阻止离开房间" -`],
            ["- View / Edit the 'Forbid wardrobe use on others' rule -", "- 查看/编辑 '禁止在别人身上使用衣柜' 规则 -"],
            [`- Rules: Description of the rule: "Forbid creating new rooms"-`, `- 规则: 规则的描述: "禁止创建新房间" -`],
            [`- Rules: Description of the rule: "Restrict allowed body poses"-`, `- 规则: 规则的描述: "限制身体姿势" -`],
            [`- Rules: Description of the rule: "Forbid using locks on self"-`, `- 规则: 规则的描述: "禁止对自己使用锁" -`],
            [`- Rules: Description of the rule: "Forbid picking locks on self"-`, `- 规则: 规则的描述: "禁止撬自己的锁" -`],
            [`- Rules: Description of the rule: "Forbid wardrobe use on self"-`, `- 规则: 规则的描述: "禁止自己使用衣柜" -`],
            [`- Rules: Description of the rule: "Forbid picking locks on others"-`, `- 规则: 规则的描述: "禁止撬别人的锁" -`],
            [`- Rules: Description of the rule: "Forbid using locks on others"-`, `- 规则: 规则的描述: "禁止对其他人使用锁" -`],
            [`- Rules: Description of the rule: "Forbid wardrobe use on others"-`, `- 规则: 规则的描述: "禁止在别人身上使用衣柜" -`],
            ["Warning: Disabling a module will reset all its settings and stored data!", "警告: 禁用模块将重置其所有设置和存储的数据!"],
            [`- Rules: Description of the rule: "Forbid the antiblind command"-`, `- 规则: 规则的描述: "禁止使用防盲指令" -`],
            [`- Rules: Description of the rule: "Prevent usage of all activities"-`, `- 规则: 规则的描述: "禁止使用所有交互活动" -`],
            [`- Rules: Description of the rule: "Forbid mainhall maid services"-`, `- 规则: 规则的描述: "禁止大厅女仆服务" -`],
            [`- Rules: Description of the rule: "Forbid changing difficulty"-`, `- 规则: 规则的描述: "禁止改变难度" -`],
            [`- Rules: Description of the rule: "Prevent whitelisting"-`, `- 规则: 规则的描述: "禁止增加白名单" -`],
            ["- View / Edit the 'Prevent usage of all activities' rule -", "- 查看/编辑 '禁止使用所有交互活动' 规则 -"],
            ["- View / Edit the 'Forbid mainhall maid services' rule -", "- 查看/编辑 '禁止大厅女仆服务' 规则 -"],
            ["- View / Edit the 'Forbid changing difficulty' rule -", "- 查看/编辑 '禁止改变难度' 规则 -"],
            ["- View / Edit the 'Prevent whitelisting' rule -", "- 查看/编辑 '禁止增加白名单' 规则 -"],
            ["- View / Edit the 'Forbid the antiblind command' rule -", "- 查看/编辑 '禁止使用防盲指令' 规则 -"],
            [`- Rules: Description of the rule: "Forbid the action command"-`, `- 规则: 规则的描述: "禁止动作指令" -`],
            ["- View / Edit the 'Forbid the action command' rule -", "- 查看/编辑 '禁止动作指令' 规则 -"],
            [`- Rules: Description of the rule: "Prevent using BCX permissions"-`, `- 规则: 规则的描述: "禁止使用BCX权限" -`],
            ["- View / Edit the 'Prevent using BCX permissions' rule -", "- 查看/编辑 '禁止使用BCX权限' 规则 -"],
            [`- Rules: Description of the rule: "Forbid looking at room admin UI"-`, `- 规则: 规则的描述: "禁止查看房间管理界面" -`],
            ["- View / Edit the 'Forbid looking at room admin UI' rule -", "- 查看/编辑 '禁止查看房间管理界面' 规则 -"],
            [`- Rules: Description of the rule: "Forbid using GGTS"-`, `- 规则: 规则的描述: "禁止使用GGTS" -`],
            ["- View / Edit the 'Forbid using GGTS' rule -", "- 查看/编辑 '禁止使用GGTS' 规则 -"],
            [`- Rules: Description of the rule: "Prevent working as club slave"-`, `- 规则: 规则的描述: "禁止成为俱乐部奴隶" -`],
            ["- View / Edit the 'Prevent working as club slave' rule -", "- 查看/编辑 '禁止成为俱乐部奴隶' 规则 -"],
            [`- Rules: Description of the rule: "Prevent using items of others"-`, `- 规则: 规则的描述: "禁止使用其他人物品" -`],
            ["- View / Edit the 'Prevent using items of others' rule -", "- 查看/编辑 '禁止使用其他人物品' 规则 -"],
            [`- Rules: Description of the rule: "Prevent changing own emoticon"-`, `- 规则: 规则的描述: "禁止更改自己的状态符号" -`],
            ["- View / Edit the 'Prevent changing own emoticon' rule -", "- 查看/编辑 '禁止更改自己的状态符号' 规则 -"],
            [`- Rules: Description of the rule: "Force-hide UI elements"-`, `- 规则: 规则的描述: "强制隐藏UI元素" -`],
            ["- View / Edit the 'Force-hide UI elements' rule -", "- 查看/编辑 '强制隐藏UI元素' 规则 -"],
            [`- Rules: Description of the rule: "Sensory deprivation: Sound"-`, `- 规则: 规则的描述: "感觉剥夺: 听觉" -`],
            ["- View / Edit the 'Sensory deprivation: Sound' rule -", "- 查看/编辑 '感觉剥夺: 听觉' 规则 -"],
            [`- Rules: Description of the rule: "Hearing whitelist"-`, `- 规则: 规则的描述: "听觉白名单" -`],
            ["- View / Edit the 'Hearing whitelist' rule -", "- 查看/编辑 '听觉白名单' 规则 -"],
            [`- Rules: Description of the rule: "Sensory deprivation: Sight"-`, `- 规则: 规则的描述: "感觉剥夺:视觉" -`],
            ["- View / Edit the 'Sensory deprivation: Sight' rule -", "- 查看/编辑 '感觉剥夺:视觉' 规则 -"],
            [`- Rules: Description of the rule: "Seeing whitelist"-`, `- 规则: 规则的描述: "视觉白名单" -`],
            ["- View / Edit the 'Seeing whitelist' rule -", "- 查看/编辑 '视觉白名单' 规则 -"],
            [`- Rules: Description of the rule: "Fully blind when eyes are closed"-`, `- 规则: 规则的描述: "闭上眼睛时完全失明" -`],
            ["- View / Edit the 'Fully blind when eyes are closed' rule -", "- 查看/编辑 '闭上眼睛时完全失明' 规则 -"],
            [`- Rules: Description of the rule: "Field of vision for eyes"-`, `- 规则: 规则的描述: "眼睛视野" -`],
            ["- View / Edit the 'Field of vision for eyes' rule -", "- 查看/编辑 '眼睛视野' 规则 -"],
            [`- Rules: Description of the rule: "Fully blind when blindfolded"-`, `- 规则: 规则的描述: "蒙眼时完全看不见" -`],
            ["- View / Edit the 'Fully blind when blindfolded' rule -", "- 查看/编辑 '蒙眼时完全看不见' 规则 -"],
            [`- Rules: Description of the rule: "Always leave rooms slowly"-`, `- 规则: 规则的描述: "总是缓慢离开房间" -`],
            ["- View / Edit the 'Always leave rooms slowly' rule -", "- 查看/编辑 '总是缓慢离开房间' 规则 -"],
            [`- Rules: Description of the rule: "Set slowed leave time"-`, `- 规则: 规则的描述: "设置缓慢离开时间" -`],
            ["- View / Edit the 'Set slowed leave time' rule -", "- 查看/编辑 '设置缓慢离开时间' 规则 -"],
            [`- Rules: Description of the rule: "Control ability to orgasm"-`, `- 规则: 规则的描述: "控制高潮" -`],
            ["- View / Edit the 'Control ability to orgasm' rule -", "- 查看/编辑 '控制高潮' 规则 -"],
            [`- Rules: Description of the rule: "Secret orgasm progress"-`, `- 规则: 规则的描述: "隐藏高潮进度" -`],
            ["- View / Edit the 'Secret orgasm progress' rule -", "- 查看/编辑 '隐藏高潮进度' 规则 -"],
            [`- Rules: Description of the rule: "Room admin transfer"-`, `- 规则: 规则的描述: "设置房间管理" -`],
            ["- View / Edit the 'Room admin transfer' rule -", "- 查看/编辑 '设置房间管理' 规则 -"],
            [`- Rules: Description of the rule: "Limit bound admin power"-`, `- 规则: 规则的描述: "限制被束缚时管理员的权限" -`],
            ["- View / Edit the 'Limit bound admin power' rule -", "- 查看/编辑 '限制被束缚时管理员的权限' 规则 -"],
            [`- Rules: Description of the rule: "Control profile online description"-`, `- 规则: 规则的描述: "控制在线描述" -`],
            ["- View / Edit the 'Control profile online description' rule -", "- 查看/编辑 '控制在线描述' 规则 -"],
            [`- Rules: Description of the rule: "Control playername"-`, `- 规则: 规则的描述: "控制昵称" -`],
            ["- View / Edit the 'Control playername' rule -", "- 查看/编辑 '控制昵称' 规则 -"],
            [`- Rules: Description of the rule: "Always carry a suitcase"-`, `- 规则: 规则的描述: "总是携带手提箱" -`],
            ["- View / Edit the 'Always carry a suitcase' rule -", "- 查看/编辑 '总是携带手提箱' 规则 -"],
            [`- Rules: Description of the rule: "Restrict being leashed by others"-`, `- 规则: 规则的描述: "限制被别人牵引" -`],
            ["- View / Edit the 'Restrict being leashed by others' rule -", "- 查看/编辑 '限制被别人牵引' 规则 -"],
            [`- Rules: Description of the rule: "Hide online friends if blind"-`, `- 规则: 规则的描述: "失明时隐藏好友列表" -`],
            ["- View / Edit the 'Hide online friends if blind' rule -", "- 查看/编辑 '失明时隐藏好友列表' 规则 -"],
            [`- Rules: Description of the rule: "Ready to be summoned"-`, `- 规则: 规则的描述: "准备被召唤" -`],
            ["- View / Edit the 'Ready to be summoned' rule -", "- 查看/编辑 '准备被召唤' 规则 -"],
            [`- Rules: Description of the rule: "Allow changing the whole appearance"-`, `- 规则: 规则的描述: "允许改变整体外观" -`],
            ["- View / Edit the 'Allow changing the whole appearance' rule -", "- 查看/编辑 '允许改变整体外观' 规则 -"],
            [`- Rules: Description of the rule: "Force 'Item permission'"-`, `- 规则: 规则的描述: "强制 '物品权限'" -`],
            ["- View / Edit the 'Force 'Item permission'' rule -", "- 查看/编辑 '强制 '物品权限'' 规则 -"],
            [`- Rules: Description of the rule: "Force 'Locks on you can't be picked'"-`, `- 规则: 规则的描述: "强制 '锁在你身上无法被撬开'" -`],
            ["- View / Edit the 'Force 'Locks on you can't be picked'' rule -", "- 查看/编辑 '强制 '锁在你身上无法被撬开'' 规则 -"],
            [`- Rules: Description of the rule: "Force 'Cannot enter single-player rooms when restrained'"-`, `- 规则: 规则的描述: "强制 '当被束缚时不能进入单人房间'" -`],
            ["- View / Edit the 'Force 'Cannot enter single-player rooms when restrained'' rule -", "- 查看/编辑 '强制 '当被束缚时不能进入单人房间'' 规则 -"],
            [`- Rules: Description of the rule: "Force 'Allow safeword use'"-`, `- 规则: 规则的描述: "强制 '允许使用安全词'" -`],
            ["- View / Edit the 'Force 'Allow safeword use'' rule -", "- 查看/编辑 '强制 '允许使用安全词'' 规则 -"],
            [`- Rules: Description of the rule: "Force 'Arousal meter'"-`, `- 规则: 规则的描述: "强制 '高潮条'" -`],
            ["- View / Edit the 'Force 'Arousal meter'' rule -", "- 查看/编辑 '强制 '高潮条'' 规则 -"],
            [`- Rules: Description of the rule: "Force 'Block advanced vibrator modes'"-`, `- 规则: 规则的描述: "强制 '屏蔽高级震动器模式'" -`],
            ["- View / Edit the 'Force 'Block advanced vibrator modes'' rule -", "- 查看/编辑 '强制 '屏蔽高级震动器模式'' 规则 -"],
            [`- Rules: Description of the rule: "Force 'Arousal speech stuttering'"-`, `- 规则: 规则的描述: "强制 '兴奋口吃'" -`],
            ["- View / Edit the 'Force 'Arousal speech stuttering'' rule -", "- 查看/编辑 '强制 '兴奋口吃'' 规则 -"],
            [`- Rules: Description of the rule: "Force 'Show AFK bubble'"-`, `- 规则: 规则的描述: "强制 '显示AFK气泡'" -`],
            ["- View / Edit the 'Force 'Show AFK bubble'' rule -", "- 查看/编辑 '强制 '显示AFK气泡'' 规则 -"],
            [`- Rules: Description of the rule: "Force 'Allow others to alter your whole appearance'"-`, `- 规则: 规则的描述: "强制 '允许别人改变你的整体外观'" -`],
            ["- View / Edit the 'Force 'Allow others to alter your whole appearance'' rule -", "- 查看/编辑 '强制 '允许别人改变你的整体外观'' 规则 -"],
            [`- Rules: Description of the rule: "Force 'Prevent others from changing cosplay items'"-`, `- 规则: 规则的描述: "强制 '禁止别人更换你的角色扮演道具'" -`],
            ["- View / Edit the 'Force 'Prevent others from changing cosplay items'' rule -", "- 查看/编辑 '强制 '禁止别人更换你的角色扮演道具'' 规则 -"],
            [`- Rules: Description of the rule: "Force 'Sensory deprivation setting'"-`, `- 规则: 规则的描述: "强制 '感官剥夺设置'" -`],
            ["- View / Edit the 'Force 'Sensory deprivation setting'' rule -", "- 查看/编辑 '强制 '感官剥夺设置'' 规则 -"],
            [`- Rules: Description of the rule: "Force 'Hide non-adjacent players while partially blind'"-`, `- 规则: 规则的描述: "强制 '在部分失明时隐藏非相邻玩家'" -`],
            ["- View / Edit the 'Force 'Hide non-adjacent players while partially blind'' rule -", "- 查看/编辑 '强制 '在部分失明时隐藏非相邻玩家'' 规则 -"],
            [`- Rules: Description of the rule: "Force 'Garble chatroom names and descriptions while blind'"-`, `- 规则: 规则的描述: "强制 '失明时混淆聊天室名称和描述'" -`],
            ["- View / Edit the 'Force 'Garble chatroom names and descriptions while blind'' rule -", "- 查看/编辑 '强制 '失明时混淆聊天室名称和描述'' 规则 -"],
            [`- Rules: Description of the rule: "Force 'Keep all restraints when relogging'"-`, `- 规则: 规则的描述: "强制 '重新登录时保存所有拘束和道具'" -`],
            ["- View / Edit the 'Force 'Keep all restraints when relogging'' rule -", "- 查看/编辑 '强制 '重新登录时保存所有拘束和道具'' 规则 -"],
            [`- Rules: Description of the rule: "Force 'Players can drag you to rooms when leashed'"-`, `- 规则: 规则的描述: "强制 '当被牵住时,玩家可以将你拖到房间'" -`],
            ["- View / Edit the 'Force 'Players can drag you to rooms when leashed'' rule -", "- 查看/编辑 '强制 '当被牵住时,玩家可以将你拖到房间'' 规则 -"],
            [`- Rules: Description of the rule: "Force 'Return to chatrooms on relog'"-`, `- 规则: 规则的描述: "强制 '重新登录时返回聊天室'" -`],
            ["- View / Edit the 'Force 'Return to chatrooms on relog'' rule -", "- 查看/编辑 '强制 '重新登录时返回聊天室'' 规则 -"],
            [`- Rules: Description of the rule: "Force 'Events while plugged or vibed'"-`, `- 规则: 规则的描述: "强制 '插着或振动时发生事件'" -`],
            ["- View / Edit the 'Force 'Events while plugged or vibed'' rule -", "- 查看/编辑 '强制 '插着或振动时发生事件'' 规则 -"],
            [`- Rules: Description of the rule: "Force 'Allow item tint effects'"-`, `- 规则: 规则的描述: "强制 '允许物品染色'" -`],
            ["- View / Edit the 'Force 'Allow item tint effects'' rule -", "- 查看/编辑 '强制 '允许物品染色'' 规则 -"],
            [`- Rules: Description of the rule: "Force 'Allow item blur effects'"-`, `- 规则: 规则的描述: "强制 '允许物品模糊'" -`],
            ["- View / Edit the 'Force 'Allow item blur effects'' rule -", "- 查看/编辑 '强制 '允许物品模糊'' 规则 -"],
            [`- Rules: Description of the rule: "Force 'Flip room vertically when upside-down'"-`, `- 规则: 规则的描述: "强制 '倒立时垂直翻转房间'" -`],
            ["- View / Edit the 'Force 'Flip room vertically when upside-down'' rule -", "- 查看/编辑 '强制 '倒立时垂直翻转房间'' 规则 -"],
            [`- Rules: Description of the rule: "Force 'Prevent random NPC events'"-`, `- 规则: 规则的描述: "强制 '阻止随机NPC事件'" -`],
            ["- View / Edit the 'Force 'Prevent random NPC events'' rule -", "- 查看/编辑 '强制 '阻止随机NPC事件'' 规则 -"],
            [`- Rules: Description of the rule: "Forbid club owner changes"-`, `- 规则: 规则的描述: "禁止更换主人" -`],
            ["- View / Edit the 'Forbid club owner changes' rule -", "- 查看/编辑 '禁止更换主人' 规则 -"],
            [`- Rules: Description of the rule: "Forbid getting new lovers"-`, `- 规则: 规则的描述: "禁止交新的恋人" -`],
            ["- View / Edit the 'Forbid getting new lovers' rule -", "- 查看/编辑 '禁止交新的恋人' 规则 -"],
            [`- Rules: Description of the rule: "Forbid breaking up with lovers"-`, `- 规则: 规则的描述: "禁止与恋人分手" -`],
            ["- View / Edit the 'Forbid breaking up with lovers' rule -", "- 查看/编辑 '禁止与恋人分手' 规则 -"],
            [`- Rules: Description of the rule: "Forbid taking new submissives"-`, `- 规则: 规则的描述: "禁止接收新的顺服者" -`],
            ["- View / Edit the 'Forbid taking new submissives' rule -", "- 查看/编辑 '禁止接收新的顺服者' 规则 -"],
            [`- Rules: Description of the rule: "Forbid disowning submissives"-`, `- 规则: 规则的描述: "禁止放弃顺从者" -`],
            ["- View / Edit the 'Forbid disowning submissives' rule -", "- 查看/编辑 '禁止放弃顺从者' 规则 -"],
            [`- Rules: Description of the rule: "Allow specific sounds only"-`, `- 规则: 规则的描述: "仅允许特定声音" -`],
            ["- View / Edit the 'Allow specific sounds only' rule -", "- 查看/编辑 '仅允许特定声音' 规则 -"],
            [`- Rules: Description of the rule: "Garble whispers while gagged"-`, `- 规则: 规则的描述: "嘴巴被堵住时混淆私语" -`],
            ["- View / Edit the 'Garble whispers while gagged' rule -", "- 查看/编辑 '嘴巴被堵住时混淆私语' 规则 -"],
            [`- Rules: Description of the rule: "Block OOC chat while gagged"-`, `- 规则: 规则的描述: "嘴巴被堵住时阻止OOC聊天" -`],
            ["- View / Edit the 'Block OOC chat while gagged' rule -", "- 查看/编辑 '嘴巴被堵住时阻止OOC聊天' 规则 -"],
            [`- Rules: Description of the rule: "Block OOC chat"-`, `- 规则: 规则的描述: "阻止OOC聊天" -`],
            ["- View / Edit the 'Block OOC chat' rule -", "- 查看/编辑 '阻止OOC聊天' 规则 -"],
            [`- Rules: Description of the rule: "Doll talk"-`, `- 规则: 规则的描述: "玩偶说话" -`],
            ["- View / Edit the 'Doll talk' rule -", "- 查看/编辑 '玩偶说话' 规则 -"],
            [`- Rules: Description of the rule: "Forbid saying certain words in chat"-`, `- 规则: 规则的描述: "禁止在聊天中说某些词语" -`],
            ["- View / Edit the 'Forbid saying certain words in chat' rule -", "- 查看/编辑 '禁止在聊天中说某些词语' 规则 -"],
            [`- Rules: Description of the rule: "Forbid saying certain words in emotes"-`, `- 规则: 规则的描述: "禁止在表情中说某些词语" -`],
            ["- View / Edit the 'Forbid saying certain words in emotes' rule -", "- 查看/编辑 '禁止在表情中说某些词语' 规则 -"],
            [`- Rules: Description of the rule: "Forbid talking openly"-`, `- 规则: 规则的描述: "禁止公开交谈" -`],
            ["- View / Edit the 'Forbid talking openly' rule -", "- 查看/编辑 '禁止公开交谈' 规则 -"],
            [`- Rules: Description of the rule: "Limit talking openly"-`, `- 规则: 规则的描述: "限制公开交谈" -`],
            ["- View / Edit the 'Limit talking openly' rule -", "- 查看/编辑 '限制公开交谈' 规则 -"],
            [`- Rules: Description of the rule: "Forbid using emotes"-`, `- 规则: 规则的描述: "禁止使用表情" -`],
            ["- View / Edit the 'Forbid using emotes' rule -", "- 查看/编辑 '禁止使用表情' 规则 -"],
            [`- Rules: Description of the rule: "Limit using emotes"-`, `- 规则: 规则的描述: "限制使用表情" -`],
            ["- View / Edit the 'Limit using emotes' rule -", "- 查看/编辑 '限制使用表情' 规则 -"],
            [`- Rules: Description of the rule: "Restrict sending whispers"-`, `- 规则: 规则的描述: "限制发送私语" -`],
            ["- View / Edit the 'Restrict sending whispers' rule -", "- 查看/编辑 '限制发送私语' 规则 -"],
            [`- Rules: Description of the rule: "Restrict receiving whispers"-`, `- 规则: 规则的描述: "限制接收私语" -`],
            ["- View / Edit the 'Restrict receiving whispers' rule -", "- 查看/编辑 '限制接收私语' 规则 -"],
            [`- Rules: Description of the rule: "Restrict sending beep messages"-`, `- 规则: 规则的描述: "限制发送蜂鸣消息" -`],
            ["- View / Edit the 'Restrict sending beep messages' rule -", "- 查看/编辑 '限制发送蜂鸣消息' 规则 -"],
            [`- Rules: Description of the rule: "Restrict receiving beeps"-`, `- 规则: 规则的描述: "限制接收蜂鸣" -`],
            ["- View / Edit the 'Restrict receiving beeps' rule -", "- 查看/编辑 '限制接收蜂鸣' 规则 -"],
            [`- Rules: Description of the rule: "Order to greet club"-`, `- 规则: 规则的描述: "登录时自动发蜂鸣消息" -`],
            ["- View / Edit the 'Order to greet club' rule -", "- 查看/编辑 '登录时自动发蜂鸣消息' 规则 -"],
            [`- Rules: Description of the rule: "Forbid the antigarble option"-`, `- 规则: 规则的描述: "禁止反语言混淆选项" -`],
            ["- View / Edit the 'Forbid the antigarble option' rule -", "- 查看/编辑 '禁止反语言混淆选项' 规则 -"],
            [`- Rules: Description of the rule: "Force to retype"-`, `- 规则: 规则的描述: "强制重新输入" -`],
            ["- View / Edit the 'Force to retype' rule -", "- 查看/编辑 '强制重新输入' 规则 -"],
            [`- Rules: Description of the rule: "Order to greet room"-`, `- 规则: 规则的描述: "进房间时自动发出设置好的问候语" -`],
            ["- View / Edit the 'Order to greet room' rule -", "- 查看/编辑 '进房间时自动发出设置好的问候语' 规则 -"],
            [`- Rules: Description of the rule: "Greet new guests"-`, `- 规则: 规则的描述: "问候新客人" -`],
            ["- View / Edit the 'Greet new guests' rule -", "- 查看/编辑 '问候新客人' 规则 -"],
            [`- Rules: Description of the rule: "Enforce faltering speech"-`, `- 规则: 规则的描述: "强制断句" -`],
            ["- View / Edit the 'Enforce faltering speech' rule -", "- 查看/编辑 '强制断句' 规则 -"],
            [`- Rules: Description of the rule: "Establish mandatory words"-`, `- 规则: 规则的描述: "建立强制性词汇" -`],
            ["- View / Edit the 'Establish mandatory words' rule -", "- 查看/编辑 '建立强制性词汇' 规则 -"],
            [`- Rules: Description of the rule: "Establish mandatory words in emotes"-`, `- 规则: 规则的描述: "在表情中建立强制性词汇" -`],
            ["- View / Edit the 'Establish mandatory words in emotes' rule -", "- 查看/编辑 '在表情中建立强制性词汇' 规则 -"],
            [`- Rules: Description of the rule: "Partial hearing"-`, `- 规则: 规则的描述: "部分听觉" -`],
            ["- View / Edit the 'Partial hearing' rule -", "- 查看/编辑 '部分听觉' 规则 -"],
            [`- Rules: Description of the rule: "Force garbled speech"-`, `- 规则: 规则的描述: "强制口吃" -`],
            ["- View / Edit the 'Force garbled speech' rule -", "- 查看/编辑 '强制口吃' 规则 -"],
            [`- Rules: Description of the rule: "Forbid going afk"-`, `- 规则: 规则的描述: "禁止afk" -`],
            ["- View / Edit the 'Forbid going afk' rule -", "- 查看/编辑 '禁止afk' 规则 -"],
            [`- Rules: Description of the rule: "Track rule effect time"-`, `- 规则: 规则的描述: "追踪规则触发的时间" -`],
            ["- View / Edit the 'Track rule effect time' rule -", "- 查看/编辑 '追踪规则触发的时间' 规则 -"],
            [`- Rules: Description of the rule: "Listen to my voice"-`, `- 规则: 规则的描述: "听见我的声音" -`],
            ["- View / Edit the 'Listen to my voice' rule -", "- 查看/编辑 '听见我的声音' 规则 -"],
            [`- Rules: Description of the rule: "Log money changes"-`, `- 规则: 规则的描述: "记录货币变化" -`],
            ["- View / Edit the 'Log money changes' rule -", "- 查看/编辑 '记录货币变化' 规则 -"],
            [`- Rules: Description of the rule: "Track BCX activation"-`, `- 规则: 规则的描述: "追踪BCX激活" -`],
            ["- View / Edit the 'Track BCX activation' rule -", "- 查看/编辑 '追踪BCX激活' 规则 -"],
            [`- Commands: Description of the command: "Eyes" -`, `- 指令: 指令的描述: "眼睛" -`],
            [`- Commands: Description of the command: "Mouth" -`, `- 指令: 指令的描述: "嘴巴" -`],
            [`- Commands: Description of the command: "Arms" -`, `- 指令: 指令的描述: "手臂" -`],
            [`- Commands: Description of the command: "Legs" -`, `- 指令: 指令的描述: "腿" -`],
            [`- Commands: Description of the command: "Allfours" -`, `- 指令: 指令的描述: "四肢着地" -`],
            [`- Commands: Description of the command: "Go and wait" -`, `- 指令: 指令的描述: "去等待" -`],
            [`- Commands: Description of the command: "Send to cell" -`, `- 指令: 指令的描述: "送进监狱" -`],
            [`- Commands: Description of the command: "Send to asylum" -`, `- 指令: 指令的描述: "送进收容所" -`],
            [`- Commands: Description of the command: "Deposit all keys" -`, `- 指令: 指令的描述: "没收所有钥匙" -`],
            [`- Commands: Description of the command: "Show remaining time" -`, `- 指令: 指令的描述: "显示剩余时间" -`],
            [`- Commands: Description of the command: "Send to serve drinks" -`, `- 指令: 指令的描述: "送去招待饮料" -`],
            [`- Commands: Description of the command: "Manipulate the arousal meter" -`, `- 指令: 指令的描述: "操纵高潮条" -`],
            [`- Commands: Description of the command: "Emoticon" -`, `- 指令: 指令的描述: "表情符号" -`],
            [`- Commands: Description of the command: "Forced say" -`, `- 指令: 指令的描述: "强制说" -`],
            [`- Commands: Description of the command: "Say" -`, `- 指令: 指令的描述: "说" -`],
            [`- Commands: Description of the command: "Typing task" -`, `- 指令: 指令的描述: "输入任务" -`],
            [`- Commands: Description of the command: "Forced typing task" -`, `- 指令: 指令的描述: "强制输入任务" -`],
            ["Authority module permissions (continued)", "权限模块权限 (延续)"],
            ["Behaviour Log module permissions", "行为日志模块权限"],
            ["Behaviour Log module permissions (continued)", "行为日志模块权限 (延续)"],
            ["Curses module permissions", "诅咒模块权限"],
            ["Curses module permissions (continued)", "诅咒模块权限 (延续)"],
            ["Rules module permissions", "规则模块权限"],
            ["Commands module permissions", "指令模块权限"],
            ["Relationships module permissions", "关系模块权限"],
            ["Export-Import module permissions", "导出-导入 模块权限"],
            ["Miscellaneous module permissions", "其他模块权限"],
            ["Locks on you can't be picked", "你的锁是无法被撬开的"],
            ["Restore previous value when rule ends", "规则结束时恢复之前的值"],
            ["Behaviour log entry when rule is violated", "违反规则时记录到行为日志"],
            ["Allow item blur effects", "允许物品模糊效果"],
            ["Global", "全局"],
            ["Authority", "权限"],
            ["Export-Import", "导入导出"],
            ["Miscellaneous", "杂项"],
            ["For saying 'thank you' with a tip", "用于赞助支持"],
            ["Open changelog on GitHub", "在 GitHub 上打开更新日志"],
            ["Open invite to BCX Discord server", "打开 BCX Discord服务器邀请"],
            ["Show the BCX tutorial again", "再次显示 BCX教程"],
            ["Close tutorial", "关闭教程"],
            ["Page 1/20", "第 1 页/20"],
            ["Page 2/20", "第 2 页/20"],
            ["Page 3/20", "第 3 页/20"],
            ["Page 4/20", "第 4 页/20"],
            ["Page 5/20", "第 5 页/20"],
            ["Page 6/20", "第 6 页/20"],
            ["Page 7/20", "第 7 页/20"],
            ["Page 8/20", "第 8 页/20"],
            ["Page 9/20", "第 9 页/20"],
            ["Page 10/20", "第 10 页/20"],
            ["Page 11/20", "第 11 页/20"],
            ["Page 12/20", "第 12 页/20"],
            ["Page 13/20", "第 13 页/20"],
            ["Page 14/20", "第 14 页/20"],
            ["Page 15/20", "第 15 页/20"],
            ["Page 16/20", "第 16 页/20"],
            ["Page 17/20", "第 17 页/20"],
            ["Page 18/20", "第 18 页/20"],
            ["Page 19/20", "第 19 页/20"],
            ["Page 20/20", "第 20 页/20"],
            ["Instant Messenger", "即时消息"],
            [`Your initially selected BCX preset was: "Dominant"`, `你最初选择的BCX预设是: "支配者"`],
            [`Your initially selected BCX preset was: "Switch"`, `你最初选择的BCX预设是: "转换者"`],
            [`Your initially selected BCX preset was: "Submissive"`, `你最初选择的BCX预设是: "服从者"`],
            [`Your initially selected BCX preset was: "Slave"`, `你最初选择的BCX预设是: "奴隶"`],
            ["Manage BCX modules", "管理 BCX模块"],
            ["Clear all BCX data", "清除所有 BCX数据"],
            ["Enable/Disable individual modules", "启用/禁用 单个模块"],
            ["Emergency reset of BCX", "紧急重置BCX"],
            ["Confirm", "确认"],
            ["Cancel", "取消"],
            ["BCX main menu", "BCX 主菜单"],
            ["Confirm (9)", "确认 (9)"],
            ["Confirm (8)", "确认 (8)"],
            ["Confirm (7)", "确认 (7)"],
            ["Confirm (6)", "确认 (6)"],
            ["Confirm (5)", "确认 (5)"],
            ["Confirm (4)", "确认 (4)"],
            ["Confirm (3)", "确认 (3)"],
            ["Confirm (2)", "确认 (2)"],
            ["Confirm (1)", "确认 (1)"],
            ["Confirm (0)", "确认 (0)"],
            ["Add as owner", "添加为所有者"],
            ["Add as mistress", "添加为女主人"],
            ["Page 1 / 0", "第 1 页 / 0"],
            ["Clubowner", "俱乐部主人"],
            ["Owner", "所有者"],
            ["Lover", "恋人"],
            ["Mistress", "女主人"],
            ["Whitelist", "白名单"],
            ["Friend", "朋友"],
            ["Public", "公开"],
            ["Configure the role-based BCX permissions", "配置基于角色的 BCX 权限"],
            ["Select member number from list", "从列表中选择成员编号"],
            ["You - either top or bottom of the hierarchy", "你 - 可以是层次结构的顶部或底部"],
            ["Your owner, visible on your character profile", "你的所有者,在你的角色资料中可见"],
            [`Any character, added to the list on the left as "Owner"`, `任何角色,添加到左侧列表中作为 "所有者"`],
            ["Any of your lovers, visible on your character profile", "你的任何恋人,在你的角色资料中可见"],
            [`Any character, added to the list on the left as "Mistress"`, `任何角色,添加到左侧列表中作为 "女主人"`],
            ["Anyone you have white-listed", "你白名单中的任何人"],
            ["Anyone you have friend-listed", "你好友名单中的任何人"],
            ["Anyone, who can use items on you", "任何可以在你身上使用物品的人"],
            ["Allow forbidding self access", "允许禁止自己访问"],
            ["Allow granting Mistress status", "允许授予女主人身份"],
            ["Allow granting Owner status", "允许授予所有者身份"],
            ["Allow granting self access", "允许授予自己访问权限"],
            ["Allow lowest access modification", "允许最低访问权限修改"],
            ["Previous screen", "上一页"],
            ["Allow revoking Mistress status", "允许撤销女主人身份"],
            ["Allow revoking Owner status", "允许撤销所有者身份"],
            ["Allow viewing list of owners/mistresses", "允许查看所有者/女主人列表"],
            ["Allow deleting log entries", "允许删除日志条目"],
            ["Allow to attach notes to the body", "允许附加注释到身体上"],
            ["Allow to configure what is logged", "允许配置日志记录的内容"],
            ["Allow to praise or scold", "允许表扬或责备"],
            ["Allow to see normal log entries", "允许查看正常的日志条目"],
            ["Allow to see protected log entries", "允许查看受保护的日志内容"],
            ["Allow changing colors of cursed objects", "允许更改被诅咒物品的颜色"],
            ["Allow to view who added the curse originally", "允许查看最初添加诅咒的人"],
            ["Allows editing the global curses configuration", "允许编辑全局诅咒配置"],
            ["Allows handling curses on limited object slots", "允许在限制的物体槽上处理诅咒"],
            ["Allows handling curses on non-limited object slots", "允许在非限制的物体槽上处理诅咒"],
            ["Allows to limit/block individual curse object slots", "允许限制/阻止单个诅咒对象槽"],
            ["Allow to view who added the rule originally", "允许查看最初添加规则的人"],
            ["Allows controlling limited rules", "允许控制限制的规则"],
            ["Allows controlling non-limited rules", "允许控制非限制的规则"],
            ["Allows editing the global rules configuration", "允许编辑全局规则配置"],
            ["Allows to limit/block specific rules", "允许限制/阻止特定规则"],
            ["Allows controlling limited commands", "允许控制限制的指令"],
            ["Allows controlling non-limited commands", "允许控制非限制的指令"],
            ["Allows to limit/block specific commands", "允许限制/阻止特定指令"],
            ["Allow changing relationship config for herself", "允许更改自己的关系配置"],
            ["Allow changing relationship config for others", "允许更改其他人的关系配置"],
            ["Allow viewing others in relationship list", "允许查看关系列表中的其他人"],
            ["Allow exporting BCX module configurations", "允许导出 BCX 模块配置"],
            ["Allow importing items using wardrobe", "允许使用衣柜导入物品"],
            ["Allow using the allowactivities command on this player", "允许在此玩家上使用 allowactivities 命令"],
            [`- Authority: Changing minimum access to permission "Allows controlling limited commands" -`, `- 权限: 更改对权限 "允许控制限制的指令" 的最小访问权限`],
            ["Info: Currently set role: Owner → Newly selected role: Owner", "信息: 当前设置的角色: 所有者 → 新选择的角色: 所有者"],
            ["This player's owner, visible on their character profile", "这个玩家的所有者,可在他们的角色资料中看到"],
            ["This player - either top or bottom of the hierarchy", "这个玩家 - 可能是层级的顶端或底端"],
            ["Any lover of this player, visible on their profile", "这个玩家的任何恋人,在他们的资料中可见"],
            ["Anyone this player has white-listed", "任何已加入白名单的玩家"],
            ["Anyone this player has friend-listed", "任何已加入好友列表的玩家"],
            ["Anyone, who can use items on this player", "任何可以在这个玩家身上使用物品的玩家"],
            ["Info: Currently set role: Public → Newly selected role: Public", "信息: 当前设置的角色: 公共 → 新选择的角色: 公共"],
            ["Info: Currently set role: Public → Newly selected role: Friend", "信息: 当前设置的角色: 公共 → 新选择的角色: 好友"],
            ["Info: Currently set role: Public → Newly selected role: Whitelist", "信息: 当前设置的角色: 公共 → 新选择的角色: 白名单"],
            ["Info: Currently set role: Public → Newly selected role: Mistress", "信息: 当前设置的角色: 公共 → 新选择的角色: 女主人"],
            ["Info: Currently set role: Public → Newly selected role: Lover", "信息: 当前设置的角色: 公共 → 新选择的角色: 恋人"],
            ["Info: Currently set role: Public → Newly selected role: Owner", "信息: 当前设置的角色: 公共 → 新选择的角色: 所有者"],
            ["Info: Currently set role: Public → Newly selected role: Clubowner", "信息: 当前设置的角色: 公共 → 新选择的角色: 俱乐部主人"],
            ["Info: Currently set role: Friend → Newly selected role: Friend", "信息: 当前设置的角色: 好友 → 新选择的角色: 好友"],
            ["Info: Currently set role: Friend → Newly selected role: Public", "信息: 当前设置的角色: 好友 → 新选择的角色: 公共"],
            ["Info: Currently set role: Friend → Newly selected role: Whitelist", "信息: 当前设置的角色: 好友 → 新选择的角色: 白名单"],
            ["Info: Currently set role: Friend → Newly selected role: Mistress", "信息: 当前设置的角色: 好友 → 新选择的角色: 女主人"],
            ["Info: Currently set role: Friend → Newly selected role: Lover", "信息: 当前设置的角色: 好友 → 新选择的角色: 恋人"],
            ["Info: Currently set role: Friend → Newly selected role: Owner", "信息: 当前设置的角色: 好友 → 新选择的角色: 所有者"],
            ["Info: Currently set role: Friend → Newly selected role: Clubowner", "信息: 当前设置的角色: 好友 → 新选择的角色: 俱乐部主人"],
            ["Info: Currently set role: Whitelist → Newly selected role: Whitelist", "信息: 当前设置的角色: 白名单 → 新选择的角色: 白名单"],
            ["Info: Currently set role: Whitelist → Newly selected role: Public", "信息: 当前设置的角色: 白名单 → 新选择的角色: 公共"],
            ["Info: Currently set role: Whitelist → Newly selected role: Friend", "信息: 当前设置的角色: 白名单 → 新选择的角色: 好友"],
            ["Info: Currently set role: Whitelist → Newly selected role: Mistress", "信息: 当前设置的角色: 白名单 → 新选择的角色: 女主人"],
            ["Info: Currently set role: Whitelist → Newly selected role: Lover", "信息: 当前设置的角色: 白名单 → 新选择的角色: 恋人"],
            ["Info: Currently set role: Whitelist → Newly selected role: Owner", "信息: 当前设置的角色: 白名单 → 新选择的角色: 所有者"],
            ["Info: Currently set role: Whitelist → Newly selected role: Clubowner", "信息: 当前设置的角色: 白名单 → 新选择的角色: 俱乐部主人"],
            ["Info: Currently set role: Mistress → Newly selected role: Mistress", "信息: 当前设置的角色: 女主人 → 新选择的角色: 女主人"],
            ["Info: Currently set role: Mistress → Newly selected role: Public", "信息: 当前设置的角色: 女主人 → 新选择的角色: 公共"],
            ["Info: Currently set role: Mistress → Newly selected role: Friend", "信息: 当前设置的角色: 女主人 → 新选择的角色: 好友"],
            ["Info: Currently set role: Mistress → Newly selected role: Whitelist", "信息: 当前设置的角色: 女主人 → 新选择的角色: 白名单"],
            ["Info: Currently set role: Mistress → Newly selected role: Lover", "信息: 当前设置的角色: 女主人 → 新选择的角色: 恋人"],
            ["Info: Currently set role: Mistress → Newly selected role: Owner", "信息: 当前设置的角色: 女主人 → 新选择的角色: 所有者"],
            ["Info: Currently set role: Mistress → Newly selected role: Clubowner", "信息: 当前设置的角色: 女主人 → 新选择的角色: 俱乐部主人"],
            ["Info: Currently set role: Lover → Newly selected role: Lover", "信息: 当前设置的角色: 恋人 → 新选择的角色: 恋人"],
            ["Info: Currently set role: Lover → Newly selected role: Public", "信息: 当前设置的角色: 恋人 → 新选择的角色: 公共"],
            ["Info: Currently set role: Lover → Newly selected role: Friend", "信息: 当前设置的角色: 恋人 → 新选择的角色: 好友"],
            ["Info: Currently set role: Lover → Newly selected role: Whitelist", "信息: 当前设置的角色: 恋人 → 新选择的角色: 白名单"],
            ["Info: Currently set role: Lover → Newly selected role: Mistress", "信息: 当前设置的角色: 恋人 → 新选择的角色: 女主人"],
            ["Info: Currently set role: Lover → Newly selected role: Owner", "信息: 当前设置的角色: 恋人 → 新选择的角色: 所有者"],
            ["Info: Currently set role: Lover → Newly selected role: Clubowner", "信息: 当前设置的角色: 恋人 → 新选择的角色: 俱乐部主人"],
            ["Info: Currently set role: Clubowner → Newly selected role: Clubowner", "信息: 当前设置的角色: 俱乐部主人 → 新选择的角色: 俱乐部主人"],
            ["Info: Currently set role: Clubowner → Newly selected role: Owner", "信息: 当前设置的角色: 俱乐部主人 → 新选择的角色: 所有者"],
            ["Info: Currently set role: Clubowner → Newly selected role: Lover", "信息: 当前设置的角色: 俱乐部主人 → 新选择的角色: 恋人"],
            ["Info: Currently set role: Clubowner → Newly selected role: Mistress", "信息: 当前设置的角色: 俱乐部主人 → 新选择的角色: 女主人"],
            ["Info: Currently set role: Clubowner → Newly selected role: Whitelist", "信息: 当前设置的角色: 俱乐部主人 → 新选择的角色: 白名单"],
            ["Info: Currently set role: Clubowner → Newly selected role: Friend", "信息: 当前设置的角色: 俱乐部主人 → 新选择的角色: 好友"],
            ["Info: Currently set role: Clubowner → Newly selected role: Public", "信息: 当前设置的角色: 俱乐部主人 → 新选择的角色: 公共"],
            ["You have no permission to use this", "您没有使用此功能的权限"],
            ["Skip tutorial", "跳过教程"],
            ["<< Back to the tutorial", "<< 返回教程"],
            [`- Authority: Changing minimum access to permission "Allow forbidding self access" -`, `- 权限: 更改对权限 "允许禁止自我访问" 的最小访问权限`],
            [`- Authority: Changing minimum access to permission "Allows editing the global curses configuration" -`, `- 权限: 更改对权限 "允许编辑全局诅咒配置" 的最小访问权限`],
            ["Info: Currently set role: Owner → Newly selected role: Lover", "信息: 当前设置的角色: 所有者 → 新选择的角色: 恋人"],
            ["Info: Currently set role: Owner → Newly selected role: Mistress", "信息: 当前设置的角色: 所有者 → 新选择的角色: 女主人"],
            ["Info: Currently set role: Owner → Newly selected role: Whitelist", "信息: 当前设置的角色: 所有者 → 新选择的角色: 白名单"],
            ["Info: Currently set role: Owner → Newly selected role: Friend", "信息: 当前设置的角色: 所有者 → 新选择的角色: 好友"],
            ["Info: Currently set role: Owner → Newly selected role: Public", "信息: 当前设置的角色: 所有者 → 新选择的角色: 公共"],
            ["Info: Currently set role: Owner → Newly selected role: Clubowner", "信息: 当前设置的角色: 所有者 → 新选择的角色: 俱乐部主人"],
            ["The log has been cleared", "日志已被清除"],
            ["Configure logging", "配置日志记录"],
            ["Ability to see attached notes", "能够查看附加的备注"],
            ["Yes", "是"],
            ["Log changes in logging configuration", "记录日志配置的更改"],
            ["Protected", "受保护的"],
            ["Log changes in permission settings", "记录权限设置的更改"],
            ["Log deleted log entries", "记录删除的日志条目"],
            ["Log each addition, removal or change of rules", "记录每个规则的添加、移除或更改"],
            ["No", "否"],
            ["Log each application, removal or change of curses", "记录每个诅咒的应用、移除或更改"],
            ["Delete all log entries", "删除所有日志条目"],
            ["Log each change in relationships module", "记录关系模块的每次更改"],
            ["Log each change of commands limit", "记录命令限制的每次更改"],
            ["Log each single orgasm", "记录每一次的高潮"],
            ["Log every rule violation", "记录每一次违规"],
            ["Log every time a triggered curse reapplies an item", "记录每一次触发的诅咒重新应用物品"],
            ["Log getting or losing a BCX owner/mistress", "记录每一次增加或删除 BCX 所有者/女主人"],
            ["Log praising or scolding behavior", "记录赞扬或责备的行为"],
            ["Log which private rooms are entered", "记录进入哪些私人房间"],
            ["Log which public rooms are entered", "记录进入哪些公共房间"],
            ["Back", "返回"],
            ["ALL", "全部"],
            ["Activate all", "全部激活"],
            ["A. only", "仅激活"],
            ["Deactivate all", "全部停用"],
            ["D. only", "仅停用"],
            ["Change global rules config", "更改全局规则配置"],
            ["Page 1 / 1", "第1页 / 共1页"],
            ["Add new rule", "添加新规则"],
            ["Existing rules set to global rules config are also changed", "全局规则配置中的现有规则也将被更改"],
            ["...from the list of yet unestablished rules", "......从尚未建立的规则列表中"],
            ["Switch all added rules to active", "将所有已添加规则切换为激活状态"],
            ["Activate only global config rules", "仅激活全局配置规则"],
            ["Deactivate only global config rules", "仅停用全局配置规则"],
            ["Switch all added rules to inactive", "将所有已添加规则切换为非激活状态"],
            ["Forbid using remotes on others", "禁止在其他人身上使用遥控器"],
            ["Forbid using keys on others", "禁止在其他人身上使用钥匙"],
            ["Forbid picking locks on others", "禁止在其他人身上撬锁"],
            ["Forbid using locks on others", "禁止在其他人身上使用锁"],
            ["Forbid wardrobe use on others", "禁止在其他人身上使用衣柜"],
            ["Restrict allowed body poses", "限制允许的身体姿势"],
            ["Forbid creating new rooms", "禁止创建新房间"],
            ["Restrict entering rooms (only allow entering specific ones)", "限制进入房间(仅允许进入特定房间)"],
            ["Prevent leaving the room (while defined roles are inside)", "防止离开房间(当指定的角色在房间内时)"],
            ["Forbid tying up others (either everybody or only more dominant characters)", "禁止捆绑他人(可以是所有人或仅更占主导地位的角色)"],
            ["Prevent blacklisting (and ghosting of the defined roles)", "防止黑名单(和指定角色的幽灵化)"],
            ["Prevent whitelisting (of roles 'friend' or 'public')", "防止白名单('朋友'或'公共'角色)"],
            ["Forbid the antiblind command (BCX's .antiblind command)", "禁止反盲命令(BCX的 .antiblind 指令)"],
            ["Forbid changing difficulty (multiplayer difficulty preference)", "禁止更改难度(多人游戏的难度偏好)"],
            ["Prevent usage of all activities (any action buttons such as kissing or groping)", "防止使用所有活动(如亲吻或触摸等任何动作按钮)"],
            ["Forbid mainhall maid services (to get out of any restraints)", "禁止主厅女仆服务(以摆脱任何约束)"],
            ["Forbid the action command (BCX's .action/.a chat command)", "禁止行动指令(BCX的 .action/.a 聊天指令)"],
            ["Forbid looking at room admin UI (while blindfolded)", "禁止查看房间管理UI(戴眼罩时)"],
            ["Forbid using GGTS (training by GGTS is forbidden)", "禁止使用GGTS(GGTS的培训是禁止的)"],
            ["Prevent working as club slave (the task from the mistress room)", "防止成为俱乐部奴隶(女王室的任务)"],
            ["Prevent using items of others (items not bought)", "防止使用他人的物品(未购买的物品)"],
            ["Force-hide UI elements (e.g., icons, bars, or names)", "强制隐藏UI元素(例如图标、条形、或名称)"],
            ["Fully blind when eyes are closed", "闭眼时完全失明"],
            ["Field of vision for eyes", "眼睛的视野"],
            ["Fully blind when blindfolded", "戴眼罩时完全失明"],
            ["Always leave rooms slowly", "始终缓慢离开房间"],
            ["Set slowed leave time", "设置缓慢离开时间"],
            ["Control ability to orgasm (adjustable: only-edge, only-ruin, no-resist)", "控制达到性高潮的能力(可调节: 仅限边缘,仅限毁灭,无抵抗)"],
            ["Secret orgasm progress (unable to see the own arousal meter)", "秘密性高潮进度(无法看到自己的高潮条)"],
            ["Room admin transfer (give admin to defined roles)", "房间管理员转让(将管理员权限赋予指定角色)"],
            ["Limit bound admin power (restrict room admin powers while restrained)", "限制被束缚玩家的管理员权限(在被束缚时限制房间管理员权限)"],
            ["Always carry a suitcase (from the kidnappers league multiplayer game)", "始终携带手提箱(来自绑匪联盟多人游戏)"],
            ["Restrict being leashed by others", "限制被他人牵引"],
            ["Hide online friends if blind (also preventing beeps from the friendlist - exceptions settable)", "如果失明,则隐藏在线好友(同时阻止来自好友列表的提示声音 - 可设置例外)"],
            ["Force 'Item permission' (Existing BC setting)", "强制 '物品权限'(现有BC设置)"],
            ["Force 'Locks on you can't be picked' (Existing BC setting)", "强制 '无法撬开你身上的锁'(现有BC设置)"],
            ["Force 'Cannot enter single-player rooms when restrained' (Existing BC setting)", "强制 '被束缚时无法进入单人房间'(现有BC设置)"],
            ["Force 'Allow safeword use' (Existing BC setting)", "强制 '允许使用安全词'(现有BC设置)"],
            ["Force 'Arousal meter' (Existing BC setting)", "强制 '高潮条'(现有BC设置)"],
            ["Force 'Block advanced vibrator modes' (Existing BC setting)", "强制 '阻止高级震动器模式'(现有BC设置)"],
            ["Force 'Arousal speech stuttering' (Existing BC setting)", "强制 '高潮时语速失常'(现有BC设置)"],
            ["Force 'Show AFK bubble' (Existing BC setting)", "强制 '显示离开键盘气泡'(现有BC设置)"],
            ["Force 'Allow others to alter your whole appearance' (Existing BC setting)", "强制 '允许他人更改你的整体外观'(现有BC设置)"],
            ["Force 'Prevent others from changing cosplay items' (Existing BC setting)", "强制 '阻止他人更改角色扮演物品'(现有BC设置)"],
            ["Force 'Sensory deprivation setting' (Existing BC setting)", "强制 '感官剥夺设置'(现有BC设置)"],
            ["Force 'Hide non-adjacent players while partially blind' (Existing BC setting)", "强制 '在局部失明时隐藏非邻近玩家'(现有BC设置)"],
            ["Force 'Garble chatroom names and descriptions while blind' (Existing BC setting)", "强制 '局部失明时混淆聊天室名称和描述'(现有BC设置)"],
            ["Force 'Keep all restraints when relogging' (Existing BC setting)", "强制 '重新登录时保存所有约束'(现有BC设置)"],
            ["Force 'Players can drag you to rooms when leashed' (Existing BC setting)", "强制 '当被牵引时允许玩家将你拖到其他房间'(现有BC设置)"],
            ["Force 'Return to chatrooms on relog' (Existing BC setting)", "强制 '重新登录时返回聊天室'(现有BC设置)"],
            ["Force 'Events while plugged or vibed' (Existing BC setting)", "强制 '插入或震动时发生事件'(现有BC设置)"],
            ["Force 'Allow item tint effects' (Existing BC setting)", "强制 '允许物品着色效果'(现有BC设置)"],
            ["Force 'Allow item blur effects' (Existing BC setting)", "强制 '允许物品模糊效果'(现有BC设置)"],
            ["Force 'Flip room vertically when upside-down' (Existing BC setting)", "强制 '倒置时垂直翻转房间'(现有BC设置)"],
            ["Force 'Prevent random NPC events' (from BCX's Misc module)", "强制 '阻止随机NPC事件'(来自BCX的Misc模块)"],
            ["Forbid club owner changes (getting or leaving owner)", "禁止更改俱乐部主人(获得或离开主人)"],
            ["Forbid getting new lovers", "禁止交新的恋人"],
            ["Forbid breaking up with lovers", "禁止与恋人分手"],
            ["Forbid taking new submissives (by offering them an ownership trial)", "禁止接收新的顺从者(通过为他们提供所有权试用期)"],
            ["Forbid disowning submissives", "禁止放弃顺从者"],
            ["Allow specific sounds only (such as an animal sound)", "只允许特定的声音(如动物声音)"],
            ["Garble whispers while gagged (same as normal messages)", "在塞口球时混肴悄悄话(与普通消息相同)"],
            ["Block OOC chat while gagged (no more misuse of OOC for normal chatting while gagged)", "在被堵嘴时阻止OOC聊天(防止在被堵嘴时滥用OOC进行正常聊天)"],
            ["Block OOC chat (blocks use of OOC in messages)", "阻止OOC聊天(阻止在消息中使用OOC)"],
            ["Doll talk (allows only short sentences with simple words)", "娃娃聊天(只允许简单词汇的短句)"],
            ["Forbid saying certain words in chat (based on a configurable blacklist)", "禁止在聊天中说某些词(基于可配置的黑名单)"],
            ["Forbid saying certain words in emotes (based on a configurable blacklist)", "禁止在表情中说某些词(基于可配置的黑名单)"],
            ["Forbid talking openly (in a chat room)", "禁止在聊天室里公开谈话"],
            ["Limit talking openly (only allow a set number of chat messages per minute)", "限制公开聊天(每分钟只允许设定数量的聊天消息)"],
            ["Forbid using emotes (in a chat room)", "禁止在聊天室使用表情"],
            ["Limit using emotes (only allow a set number of emotes per minute)", "限制使用表情(每分钟只允许设定数量的表情)"],
            ["Restrict sending whispers (except to defined roles)", "限制发送私语(除了指定的角色)"],
            ["Restrict receiving whispers (except from defined roles)", "限制接收私语(除了指定的角色)"],
            ["Restrict sending beep messages (except to selected members)", "限制发送蜂鸣消息(仅限于选定的成员)"],
            ["Restrict receiving beeps (and beep messages, except from selected members)", "限制接收蜂鸣声(和蜂鸣消息,除非来自选定的成员)"],
            ["Order to greet club (when entering it through the login portal)", "命令打招呼俱乐部(通过登录门户进入时)"],
            ["Forbid the antigarble option (BCX's .antigarble command)", "禁止防乱码选项(BCX的 .antigarble 命令)"],
            ["Force to retype (if sending a message in chat is rejected by BCX due to a rule violation)", "强制重新输入(如果违反规则而BCX将拒绝在聊天中发送消息)"],
            ["Order to greet room (with a settable sentence when entering it newly)", "命令向房间打招呼(新进入房间时用设置的句子打招呼)"],
            ["Greet new guests (when they join the current room)", "欢迎新客人(当他们加入当前房间时)"],
            ["Establish mandatory words (of which at least one needs to always be included when speaking)", "建立强制词汇(说话时必须包含至少一个)"],
            ["Establish mandatory words in emotes (of which at least one needs to always be included)", "在表情中建立强制词汇(发送表情时必须包含至少一个)"],
            ["Partial hearing (of muffled speech - random & word list based)", "部分听力(受到沉闷言语的影响 - 基于随机和词汇表)"],
            ["Track rule effect time (counts the time this rule's trigger conditions were fulfilled)", "追踪规则生效时间(计算此规则的触发条件得到满足的时间)"],
            ["Log money changes (spending and/or getting money)", "记录金钱变动(支出和/或获得金钱)"],
            ["Edit rules permissions", "编辑规则权限"],
            ["Leave permission mode", "离开权限模式"],
            ["Change global curses config", "更改全局诅咒配置"],
            ["Add new curse", "添加新诅咒"],
            ["Lift all curses", "解除所有诅咒"],
            ["Place new curses on body, items or clothes", "在身体、物品或衣物上施加新的诅咒"],
            ["Remove all curses on body, items or clothes", "移除身体、物品或衣物上的所有诅咒"],
            ["Existing curses set to global curses config are also changed", "全局诅咒配置中已存在的诅咒也会被更改"],
            ["Activate only global config curses", "仅激活全局配置的诅咒"],
            ["Switch all added curses to inactive", "将所有已添加诅咒切换为非活动状态"],
            ["Switch all added curses to active", "将所有已添加诅咒切换为活动状态"],
            ["Deactivate only global config curses", "仅停用全局配置的诅咒"],
            ["Curse occupied", "诅咒已占用"],
            ["Curse all", "全部诅咒"],
            ["Lower Leg", "小腿"],
            ["Upper Leg", "大腿"],
            ["Nipple Piercing", "乳头穿孔"],
            ["Collar Addon", "颈圈添加物"],
            ["Collar Restraint", "颈圈约束"],
            ["Mouth (1)", "嘴巴 (1)"],
            ["Mouth (2)", "嘴巴 (2)"],
            ["Mouth (3)", "嘴巴 (3)"],
            ["Hood", "头套"],
            ["Devices", "设备"],
            ["General Addon", "通用附属物"],
            ["Feet", "脚"],
            ["Ears Accessory", "耳朵饰品"],
            ["Page 1 / 2", "第 1 页 / 2"],
            ["Page 2 / 2", "第 2 页 / 2"],
            ["Nothing", "无"],
            ["Curse all occupied slots at once", "一次性诅咒所有已占用的插槽"],
            ["Curse all slots at once", "一次性诅咒所有插槽"],
            ["Edit curse slot permissions", "编辑诅咒插槽权限"],
            ["Character Height", "角色身高"],
            ["Mouth Style", "嘴巴样式"],
            ["Pussy Style", "阴部样式"],
            ["Toggle alphabetical sorting", "切换字母排序"],
            ["Toggle availability-based sorting", "切换基于可用性的排序"],
            ["You don't have permission to use this rule", "您没有使用此规则的权限"],
            ["Show remaining time (Remaining time of keyhold, asylum stay, or GGTS training)", "显示剩余时间 (持钥匙时间、收容所逗留时间或 GGTS 训练)"],
            ["Edit commands permissions", "编辑命令权限"],
            ["Add", "添加"],
            ["Authority - Permissions", "权限 - 权限"],
            ["Behaviour Log - Configuration", "行为日志 - 配置"],
            ["Curses - Limits", "诅咒 - 限制"],
            ["Rules - Limits", "规则 - 限制"],
            ["Commands - Limits", "指令 - 限制"],
            ["Export", "导出"],
            ["Import", "导入"],
            ["Export current config", "导出当前配置"],
            ["Try to import a previously exported config", "尝试导入先前导出的配置"],
            ["Enable timer", "启用定时器"],
            ["Always in effect", "始终生效"],
            ["in", "在"],
            ["public", "公共"],
            ["-1d", "-1天"],
            ["-1h", "-1小时"],
            ["-5m", "-5分钟"],
            ["+5m", "+5分钟"],
            ["+1h", "+1小时"],
            ["+1d", "+1天"],
            ["Removes rule instead of only deactivating it", "删除规则而不仅仅是停用它"],
            ["Overwrites current trigger conditions", "覆盖当前触发条件"],
            ["All selected below", "下面全部选中"],
            ["not in", "不在"],
            ["private", "私有"],
            ["[unknown],", "[未知],"],
            ["Mistress ↑", "女主人 ↑"],
            ["Whitelist ↑", "白名单 ↑"],
            ["Friend ↑", "朋友 ↑"],
            ["Public ↑", "公共 ↑"],
            ["Owner ↑", "所有者 ↑"],
            ["Lover ↑", "恋人 ↑"],
            ["Go back without saving", "返回而不保存"],
            ["Save all changes and go back", "保存所有更改并返回"],
            ["Many", "许多"],
            ["Default", "默认"],
            ["Exclude body parts", "排除身体部位"],
            ["Include items/restraints", "包括物品/限制"],
            ["Copied to clipboard!", "已复制到剪贴板!"],
            ["Background 1 / 5", "背景 1 / 5"],
            ["Clothes", "衣服"],
            ["Select individually", "单独选择"],
            ["Cosplay items", "角色扮演道具"],
            ["Restraints/items", "限制/物品"],
            ["Collar", "项圈"],
            ["Piercings", "穿孔"],
            ["Locks", "锁"],
            ["Background 2 / 5", "背景 2 / 5"],
            ["Background 3 / 5", "背景 3 / 5"],
            ["Background 4 / 5", "背景 4 / 5"],
            ["Background 5 / 5", "背景 5 / 5"],
            ["Color help", "颜色帮助"],
            ["<<< Back", "<<< 返回"],
            ["[EMPTY]", "[空]"],
            ["Global configuration is not possible on others", "无法在其他角色上进行全局配置"],
            ["Please select the new lowest role that should still have this permission.", "请选择新的最低角色权限等级以保持此权限."],
            ["All roles to the left of the selected one will also automatically get access.", "所选角色左侧的所有角色也将自动获得访问权限."],
            ["WARNING: If you confirm, all permitted roles can remove your access to this and all other permissions!", "警告: 如果您确认,所有被允许的角色都可以撤销您对此和所有其他权限的访问权限!"],
            [`- Authority: Changing minimum access to permission "Allow granting Mistress status" -`, `- 权限: 更改对 "允许授予女主身份" 权限的最低访问级别 -`],
            [`- Authority: Changing minimum access to permission "Allow granting Owner status" -`, `- 权限: 更改对 "允许授予所有者身份" 权限的最低访问级别 -`],
            [`- Authority: Changing minimum access to permission "Allow granting self access" -`, `- 权限: 更改对 "允许授予自己访问权限" 权限的最低访问级别 -`],
            [`- Authority: Changing minimum access to permission "Allow lowest access modification" -`, `- 权限: 更改对 "允许最低访问级别修改" 权限的最低访问级别 -`],
            [`- Authority: Changing minimum access to permission "Allow revoking Mistress status" -`, `- 权限: 更改对 "允许撤销女主身份" 权限的最低访问级别 -`],
            [`- Authority: Changing minimum access to permission "Allow revoking Owner status" -`, `- 权限: 更改对 "允许撤销所有者身份" 权限的最低访问级别 -`],
            [`- Authority: Changing minimum access to permission "Allow viewing list of owners/mistresses" -`, `- 权限: 更改对 "允许查看所有者/女主列表" 权限的最低访问级别 -`],
            [`- Authority: Changing minimum access to permission "Allow deleting log entries" -`, `- 权限: 更改对 "允许删除日志条目" 权限的最低访问级别 -`],
            [`- Authority: Changing minimum access to permission "Allow to attach notes to the body" -`, `- 权限: 更改对 "允许在身体上添加注释" 权限的最低访问级别 -`],
            [`- Authority: Changing minimum access to permission "Allow to configure what is logged" -`, `- 权限: 更改对 "允许配置记录的内容" 权限的最低访问级别 -`],
            [`- Authority: Changing minimum access to permission "Allow to praise or scold" -`, `- 权限: 更改对 "允许表扬或责备" 权限的最低访问级别 -`],
            [`- Authority: Changing minimum access to permission "Allow to see normal log entries" -`, `- 权限: 更改对 "允许查看普通日志条目" 权限的最低访问级别 -`],
            [`- Authority: Changing minimum access to permission "Allow to see protected log entries" -`, `- 权限: 更改对 "允许查看受保护的日志条目" 权限的最低访问级别 -`],
            [`- Authority: Changing minimum access to permission "Allow changing colors of cursed objects" -`, `- 权限: 更改对 "允许更改被诅咒物品的颜色" 权限的最低访问级别 -`],
            [`- Authority: Changing minimum access to permission "Allow to view who added the curse originally" -`, `- 权限: 更改对 "允许查看最初添加诅咒的人" 权限的最低访问级别 -`],
            [`- Authority: Changing minimum access to permission "Allows handling curses on limited object slots" -`, `- 权限: 更改对 "允许在限制的对象槽上处理诅咒" 权限的最低访问级别 -`],
            [`- Authority: Changing minimum access to permission "Allows handling curses on non-limited object slots" -`, `- 权限: 更改对 "允许在非限制的对象槽上处理诅咒" 权限的最低访问级别 -`],
            [`- Authority: Changing minimum access to permission "Allows to limit/block individual curse object slots" -`, `- 权限: 更改对 "允许限制/阻止个别诅咒对象槽" 权限的最低访问级别 -`],
            [`- Authority: Changing minimum access to permission "Allow to view who added the rule originally" -`, `- 权限: 更改对 "允许查看最初添加规则的人" 权限的最低访问级别 -`],
            [`- Authority: Changing minimum access to permission "Allows controlling limited rules" -`, `- 权限: 更改对 "允许控制限制规则" 权限的最低访问级别 -`],
            [`- Authority: Changing minimum access to permission "Allows controlling non-limited rules" -`, `- 权限: 更改对 "允许控制非限制规则" 权限的最低访问级别 -`],
            [`- Authority: Changing minimum access to permission "Allows editing the global rules configuration" -`, `- 权限: 更改对 "允许编辑全局规则配置" 权限的最低访问级别 -`],
            [`- Authority: Changing minimum access to permission "Allows to limit/block specific rules" -`, `- 权限: 更改对 "允许限制/阻止特定规则" 权限的最低访问级别 -`],
            [`- Authority: Changing minimum access to permission "Allows controlling non-limited commands" -`, `- 权限: 更改对 "允许控制非限制命令" 权限的最低访问级别 -`],
            [`- Authority: Changing minimum access to permission "Allows to limit/block specific commands" -`, `- 权限: 更改对 "允许限制/阻止特定命令" 权限的最低访问级别 -`],
            [`- Authority: Changing minimum access to permission "Allow changing relationship config for herself" -`, `- 权限: 更改对 "允许为自己更改关系配置" 权限的最低访问级别 -`],
            [`- Authority: Changing minimum access to permission "Allow changing relationship config for others" -`, `- 权限: 更改对 "允许为其他人更改关系配置" 权限的最低访问级别 -`],
            [`- Authority: Changing minimum access to permission "Allow viewing others in relationship list" -`, `- 权限: 更改对 "允许查看其他人的关系列表" 权限的最低访问级别 -`],
            [`- Authority: Changing minimum access to permission "Allow exporting BCX module configurations" -`, `- 权限: 更改对 "允许导出BCX模块配置" 权限的最低访问级别 -`],
            [`- Authority: Changing minimum access to permission "Allow importing items using wardrobe" -`, `- 权限: 更改对 "允许使用衣柜导入物品" 权限的最低访问级别 -`],
            [`- Authority: Changing minimum access to permission "Allow using the allowactivities command on this player" -`, `- 权限: 更改对 "允许在此玩家上使用 allowactivities 命令" 权限的最低访问级别 -`],
            [`Miscellaneous module configuration is not possible on others`, `无法在他人身上进行杂项模块配置`],
            ["Module is deactivated", "模块已停用"],
            ["Members numbers allowed to summon:", "允许召唤的成员编号:"],
            ["The text used for summoning:", "用于召唤的文本:"],
            ["Time in seconds before enforcing summon:", "强制召唤前的时间(秒):"],
            ["Minimum role that is allowed to leash:", "允许牵引的最低角色:"],
            ["Allow safeword use", "允许使用安全词"],
            ["Hearing whitelist", "听觉白名单"],
            ["Seeing whitelist", "视觉白名单"],
            ["Members numbers still heard while hearing impaired:", "听觉受损时仍然可听到的成员编号:"],
            ["Also understand if those are speech impaired", "是否同时理解言语障碍"],
            ["New leave time in seconds:", "新的离开时间(秒):"],
            ["Set this player's nickname:", "设置此玩家的昵称:"],
            ["Restore the previous nickname at rule end", "在规则结束时恢复先前的昵称"],
            ["Set the allowed sounds:", "设置允许的声音:"],
            ["All forbidden words:", "所有禁止的词语:"],
            ["Amount of minutes, before being considered inactive:", "被视为不活跃之前的分钟数:"],
            ["Also log getting money", "也记录获取金钱"],
            ["Still allow unlocking owner locks or items", "仍然允许解锁主人锁或物品"],
            ["Still allow unlocking lover locks or items", "仍然允许解锁恋人锁或物品"],
            ["Minimum role able to request counted time:", "能够请求计时的最低角色:"],
            ["The sentences that will be shown at random:", "将随机显示的句子:"],
            ["Frequency of a sentence being shown (in minutes):", "句子显示的频率(分钟):"],
            ["Item permission", "物品权限"],
            ["Everyone, no exceptions", "所有人,无例外"],
            ["BCX: Rule changed your 'Item permission' setting", "BCX: 规则更改了您的'物品权限'设置"],
            ["Everyone, except blacklist", "所有人,除了黑名单"],
            ["Owner, Lovers, whitelist & Dominants", "主人,恋人,白名单和支配者"],
            ["Owner, Lovers and whitelist only", "仅主人,恋人和白名单"],
            ["BCX: Rule changed your 'Locks on you can't be picked' setting", "BCX: 规则更改了您的'不能撬开您身上的锁'设置"],
            ["Cannot enter single-player rooms when restrained", "被束缚时无法进入单人房间"],
            ["Hearing impairment:", "听觉受损:"],
            ["Light", "轻度"],
            ["Medium", "中度"],
            ["Heavy", "重度"],
            ["Eyesight impairment:", "视觉受损:"],
            ["Player sees the effect also on herself", "玩家也能在自己身上看到效果"],
            ["Hide names and icons during the effect", "在效果期间隐藏名字和图标"],
            ["Orgasm attempts will be fixed to:", "尝试高潮将被固定为:"],
            ["Edge", "边缘"],
            ["Ruin", "毁灭"],
            ["Prevent resisting", "防止抵抗"],
            ["Minimum role that gets admin:", "获得管理员权限的最低角色:"],
            ["Player loses admin afterwards", "玩家在之后失去管理员权限"],
            ["Edit this player's profile description:", "编辑此玩家的个人描述:"],
            ["Members numbers that can always be seen:", "始终可见的成员编号:"],
            ["Mark poses as being allowed or forbidden:", "将姿势标记为允许或禁止:"],
            ["Only joining rooms with these names is allowed:", "只允许加入具有这些名称的房间:"],
            ["Minimum role preventing room leaving:", "阻止离开房间的最低角色:"],
            ["Favorite: Listed first in overview", "收藏: 在概览中首先列出"],
            ["Still allow removing low difficulty items", "仍然允许移除低难度物品"],
            ["Only forbid tying people with higher dominance", "仅禁止对更高支配值的玩家进行绑缚"],
            ["Minimum role forbidden to blacklist:", "被禁止添加到黑名单的最低角色:"],
            ["The level of forced garbling", "强制性的语音失真程度"],
            ["Words that can always be understood:", "始终可以理解的单词:"],
            ["Some words are randomly understood", "一些单词将随机理解"],
            ["Can also understand gagged persons", "也能理解被塞口球的玩家"],
            ["At least one of these words always needs to be used:", "这些单词中至少需要始终使用一个:"],
            ["Also affect whispered messages", "也影响私语消息"],
            ["Member numbers still allowed to send beeps:", "仍然允许发送蜂鸣消息的成员编号:"],
            ["Auto replies blocked sender with this:", "自动回复被屏蔽发件人使用此:"],
            ["Only in effect when unable to use hands", "仅在无法使用双手时生效"],
            ["Member numbers that will be greeted:", "将被问候的成员编号:"],
            ["The sentence that has to be used to greet any joined room:", "必须用于问候任何加入的房间的句子:"],
            ["Also forbid emote messages before greeting", "还禁止在问候之前发送表情消息"],
            ["The sentence that will be used to greet new guests:", "将用于问候新客人的句子:"],
            ["Restrict receiving beeps", "限制接收蜂鸣消息"],
            ["Order to greet club", "命令问候俱乐部"],
            ["Forbid the antigarble option", "禁止反语音失真选项"],
            ["Force to retype", "强制重新输入"],
            ["Order to greet room", "命令问候房间"],
            ["Greet new guests", "问候新客人"],
            ["Page 5 / 5", "第5页 / 5"],
            ["Restrict entering rooms", "限制进入房间"],
            ["Prevent leaving the room", "防止离开房间"],
            ["Forbid freeing self", "禁止解救自己"],
            ["Forbid tying up others", "禁止绑缚他人"],
            ["Prevent blacklisting", "防止加入黑名单"],
            ["Prevent whitelisting", "防止加入白名单"],
            ["Forbid the antiblind command", "禁止使用反盲指令"],
            ["Force garbled speech", "强制语音失真"],
            ["Partial hearing", "部分听觉"],
            ["Establish mandatory words in emotes", "在表情中设定强制的单词"],
            ["Establish mandatory words", "设定强制的单词"],
            ["Enforce faltering speech", "强制支支吾吾的说话"],
            ["Page 4 / 5", "第4页 / 5"],
            ["Control ability to orgasm", "控制高潮的能力"],
            ["Secret orgasm progress", "秘密高潮进度"],
            ["Room admin transfer", "房间管理员转让"],
            ["Limit bound admin power", "限制被束缚的管理员权限"],
            ["Control profile online description", "控制个人资料在线描述"],
            ["Always carry a suitcase", "始终携带手提箱"],
            ["Hide online friends if blind", "如果失明则隐藏在线好友"],
            ["Forbid wardrobe use on self", "禁止使用衣柜"],
            ["Page 3 / 5", "第3页 / 5"],
            ["Log money changes", "记录货币变动"],
            ["Forbid using keys on self", "禁止自己使用钥匙"],
            ["Track rule effect time", "追踪规则生效时间"],
            ["Listen to my voice", "倾听我的声音"],
            ["Force 'Item permission'", "强制'物品权限'"],
            ["Force 'Locks on you can't be picked'", "强制'无法打开自己身上的锁'"],
            ["Force 'Cannot enter single-player rooms when restrained'", "强制'被束缚时无法进入单人房间'"],
            ["Forbid using locks on self", "禁止对自己使用锁"],
            ["Sensory deprivation: Sound", "感觉剥夺: 听觉"],
            ["Sensory deprivation: Sight", "感觉剥夺: 视觉"],
            ["Garble whispers while gagged", "戴口球时扭曲私语"],
            ["Page 2 / 5", "第2页 / 5"],
            ["Forbid changing difficulty", "禁止更改难度"],
            ["Prevent usage of all activities", "阻止使用所有交互活动"],
            ["Forbid mainhall maid services", "禁止主厅女仆服务"],
            ["Forbid the action command", "禁止使用动作命令"],
            ["Usage blocked by BCX", "被BCX禁止使用"],
            ["Filter items", "过滤物品"],
            ["Select what shall be hidden:", "选择要隐藏的内容:"],
            ["Icons", "图标"],
            ["Also hide emoticons during the effect", "在生效期间也隐藏表情符号"],
            ["Icons/Bar", "图标/条"],
            ["Icons/Bar/Names", "图标/条/名称"],
            ["Minimum role that is allowed:", "允许的最低角色:"],
            ["Sexual activities - Activation", "性活动 - 激活"],
            ["Allow with a hybrid meter", "允许使用混合仪表"],
            ["Meter visibility", "仪表可见性"],
            ["Show arousal to everyone", "向所有人显示高潮条"],
            ["Show if they have access", "如果他们有权限则显示"],
            ["BCX: Rule changed your 'Arousal meter' setting", "BCX: 规则更改了你的'高潮条'设置"],
            ["Allow with a locked meter", "允许使用锁定的仪表"],
            ["Disable sexual activities", "禁用性活动"],
            ["Allow without a meter", "允许没有仪表"],
            ["Allow with a manual meter", "允许使用手动仪表"],
            ["Show to yourself only", "仅自己可见"],
            ["Block advanced vibrator modes", "阻止高级震动器模式"],
            ["Speech stuttering", "语言结巴"],
            ["Aroused & vibrated", "激动和振动"],
            ["Never stutter", "永不结巴"],
            ["When you're aroused", "当你兴奋时"],
            ["When you're vibrated", "当你被振动时"],
            ["Show AFK bubble", "显示离开状态气泡"],
            ["BCX: Rule changed your 'Show AFK bubble' setting", "BCX: 规则更改了你的'显示离开状态气泡'设置"],
            ["Allow others to alter your whole appearance", "允许他人更改你的整体外观"],
            ["Prevent others from changing cosplay items", "阻止他人更改角色扮演物品"],
            ["Sensory deprivation setting", "感官剥夺设置"],
            ["Disable examining when blind", "失明时禁用检查"],
            ["Hide others' messages", "隐藏他人的消息"],
            ["Hide names", "隐藏名称"],
            ["BCX: Rule changed your 'Sensory deprivation setting' setting", "BCX: 规则更改了你的'感官剥夺设置'设置"],
            ["Total", "总计"],
            ["Hide non-adjacent players while partially blind", "部分失明时隐藏非相邻玩家"],
            ["Garble chatroom names and descriptions while blind", "失明时混淆聊天室名称和描述"],
            ["Keep all restraints when relogging", "重新登录时保留所有约束"],
            ["Players can drag you to rooms when leashed", "当被牵引时其他玩家可以拖动你到其他房间"],
            ["Return to chatrooms on relog", "重新登录时返回聊天室"],
            ["Auto-remake rooms", "自动重新创建房间"],
            ["BCX: Rule changed your 'Return to chatrooms on relog' setting", "BCX: 规则更改了你的'重新登录时返回聊天室'设置"],
            ["Events while plugged or vibed", "插入或振动时的事件"],
            ["Allow item tint effects", "允许物品色调效果"],
            ["BCX: Rule changed your 'Allow item blur effects' setting", "BCX: 规则更改了你的'允许物品模糊效果'设置"],
            ["Flip room vertically when upside-down", "倒置时垂直翻转房间"],
            ["BCX: Rule changed your 'Flip room vertically when upside-down' setting", "BCX: 规则更改了你的'倒置时垂直翻转房间'设置"],
            ["Prevent random NPC events", "防止随机NPC事件"],
            ["Max. character length of any word:", "任何单词的最大字符长度:"],
            ["Max. number of words per message:", "每条消息的最大单词数:"],
            ["Maximum allowed number of chat messages per minute (> 0):", "每分钟允许的最大聊天消息数 (> 0):"],
            ["Maximum allowed number of emotes per minute (> 0):", "每分钟允许的最大表情数 (> 0):"],
            ["Minimum role whispering is still allowed to:", "仍允许接收悄悄话的最低角色:"],
            ["Minimum role still allowed to send whisper:", "仍允许发送耳语的最低角色:"],
            ["Member numbers still allowed to be beeped:", "仍允许蜂鸣消息的玩家编号:"],
            ["Forbid saying certain words in emotes", "禁止在表情中说某些词"],
            ["Forbid talking openly", "禁止公开讲话"],
            ["Limit talking openly", "限制公开讲话"],
            ["Forbid using emotes", "禁止使用表情"],
            ["Limit using emotes", "限制使用表情"],
            ["Restrict sending whispers", "限制发送耳语"],
            ["Restrict receiving whispers", "限制接收耳语"],
            ["Restrict sending beep messages", "限制发送蜂鸣消息"],
            ["Page 8 / 8", "第8页 / 8"],
            ["Force 'Keep all restraints when relogging'", "强制'重新登录时保留所有约束'"],
            ["Force 'Players can drag you to rooms when leashed'", "强制'被牵引时其他玩家可以拖动你到其他房间'"],
            ["Force 'Return to chatrooms on relog'", "强制'重新登录时返回聊天室'"],
            ["Force 'Events while plugged or vibed'", "强制'插塞或震动时的事件'"],
            ["Force 'Allow item tint effects'", "强制'允许物品染色效果'"],
            ["Force 'Allow item blur effects'", "强制'允许物品模糊效果'"],
            ["Force 'Flip room vertically when upside-down'", "强制'上下颠倒时垂直翻转房间'"],
            ["Force 'Prevent random NPC events'", "强制'阻止随机NPC事件'"],
            ["Forbid taking new submissives", "禁止接收新的顺从者"],
            ["Block OOC chat while gagged", "堵住口球时禁止OOC聊天"],
            ["Doll talk", "娃娃聊天"],
            ["Page 7 / 8", "第7页 / 8"],
            ["Prevent using items of others", "阻止使用他人的物品"],
            ["Prevent changing own emoticon", "阻止更改自己的表情符号"],
            ["Force-hide UI elements", "强制隐藏UI元素"],
            ["Forbid using remotes on self", "禁止对自己使用遥控器"],
            ["Forbid picking locks on self", "禁止撬自己身上锁"],
            ["Prevent using BCX permissions", "阻止使用 BCX 权限"],
            ["Force 'Allow safeword use'", "强制 '允许使用安全词'"],
            ["Forbid club owner changes", "禁止更改俱乐部主人"],
            ["Allow specific sounds only", "仅允许特定声音"],
            ["Block OOC chat", "屏蔽 OOC 聊天"],
            ["Forbid saying certain words in chat", "禁止在聊天中说特定的词语"],
            ["Track BCX activation", "追踪 BCX 激活"],
            ["Allow changing the whole appearance", "允许更改整体外观"],
            ["Force 'Arousal meter'", "强制'高潮条'"],
            ["Force 'Block advanced vibrator modes'", "强制'阻止高级震动器模式'"],
            ["Force 'Arousal speech stuttering'", "强制'Arousal言语结巴'"],
            ["Force 'Show AFK bubble'", "强制'显示AFK气泡'"],
            ["Force 'Allow others to alter your whole appearance'", "强制'允许他人更改你的整体外观'"],
            ["Force 'Prevent others from changing cosplay items'", "强制'阻止他人更改角色扮演物品'"],
            ["Force 'Sensory deprivation setting'", "强制'感官剥夺设置'"],
            ["Force 'Hide non-adjacent players while partially blind'", "强制'在部分失明时隐藏非相邻玩家'"],
            ["Force 'Garble chatroom names and descriptions while blind'", "强制'在失明时混淆聊天室名称和描述'"],
            ["Page 6 / 8", "第6页 / 共8页"],
            ["Forbid looking at room admin UI", "禁止查看房间管理UI"],
            ["Forbid using GGTS", "禁止使用GGTS"],
            ["Prevent working as a club slave", "阻止作为俱乐部奴隶工作"],
            ["Page 5 / 8", "第5页 / 共8页"],
            ["Page 4 / 8", "第4页 / 共8页"],
            ["Page 3 / 8", "第3页 / 共8页"],
            ["Page 2 / 8", "第2页 / 共8页"],
            ["BCX: You are not allowed to talk openly in chatrooms!", "BCX: 你不能在聊天室中公开说话!"],
            ["BCX: A BCX rule prevents you from using this while unable to see!", "BCX: 一个BCX规则阻止你在无法看到的情况下使用这个!"],
            ["EBCH: Turn on Ungarble (Hearing Whitelist)", "EBCH: 打开去噪(听觉白名单)"],
            ["EBCH: Turn off custom notifications", "EBCH: 关闭自定义通知"],
            ["EBCH: Turn on chatlogging", "EBCH: 打开聊天记录"],
            ["Instant Messenger (Disabled by BCX)", "即时通讯(被BCX禁用)"],
            ["EBCH: Turn on Ungarble (all)", "EBCH: 打开去噪(全部)"],
            ["EBCH: Turn on custom notifications", "EBCH: 打开自定义通知"],
            ["EBCH: Turn off ungarble", "EBCH: 关闭去噪"],
            ["EBCH: Preparing DB.", "EBCH: 准备数据库."],
            ["EBCH: DB Ready.", "EBCH: 数据库准备就绪."],
            ["EBCH: Turn off chatlogging", "EBCH: 关闭聊天记录"],
            ["EBCH: Pose UI on", "EBCH: 打开POSE UI"],
            ["BaseHand", "基础手势"],
            ["HandsUp", "举手"],
            ["HandsHigh", "高举双手"],
            ["BackLoose", "轻松背手"],
            ["BackTight", "紧绷背手"],
            ["Standing", "站立"],
            ["Kneeling", "跪姿"],
            ["KneelSpr", "跪地张腿"],
            ["StandCl", "站立闭合"],
            ["StandSpr", "站立张退"],
            ["BellyLie", "仰卧"],
            ["AllFours", "四脚着地"],
            ["EBCH: Pose UI off", "EBCH: 关闭POSE UI"],
            ["Base Hands", "基础手势"],
            ["Hands Up", "举手"],
            ["Hands Up High", "高举双手"],
            ["Back Loose", "轻松背手"],
            ["Back Tight", "紧绷背手"],
            ["Stand", "站立"],
            ["Kneel", "跪姿"],
            ["Kneel Spread", "跪地张腿"],
            ["Standing Closed Legs", "站立闭合腿"],
            ["Standing Spread", "站立张腿"],
            ["Belly Lie", "仰卧"],
            ["All Fours", "四脚着地"],
            ["BCX: You are not allowed to use emotes in chatrooms!", "BCX: 不允许在聊天室使用表情!"],
            ["BCX: You are not allowed to change the emoticon!", "BCX: 不允许更改表情!"],
            ["Toggle Shared Crafts", "切换共享工艺"],
            ["Modify layering priority", "修改图层优先级"],
            ["Adjust individual layers", "调整单独图层"],
            ["Set item priority", "设置物品优先级"],
            ["Choose clothing", "选择服装"],
            ["Choose body parts", "选择身体部位"],
            ["Choose cosplay items", "选择角色道具"],
            ["How does it work?", "它是如何操作的?"],
            ["Control nickname", "控制昵称"],
            ["Ready to be summoned", "准备好被召唤"],
            ["If you are permitted, this screen enables you to view, add, or remove the BCX-only roles 'Owner' and 'Mistress', which expand the classic roles of BC such as Bondage Club's Owner and the Lovers. The hierarchy of all roles that can be used to set various things in BCX can be seen on the right. The higher up a role is, the more authority it has. For instance, if something applies or is permitted for a Mistress, it also always is for an Owner. Any number of Owners and Mistresses can be set. Check their current power over BCX with the button on the right.", "如果您被允许, 此界面使您能够查看、添加或删除仅限BCX的角色'主人'和'女主人', 这扩展了BC的经典角色, 如 Bondage Club 的主人和恋人. 可用于在BCX中设置各种内容的所有角色的层次结构显示在右侧. 角色越靠近顶端, 其权限越大. 例如, 如果某事适用于女主人或为其允许,那么主人也始终如此. 可以设置任意数量的主人和女主人. 使用右侧的按钮检查它们对 BCX 的当前权限."],
            ["we are happy you are interested in our extension for the Bondage Club (BC) in which we invest a lot of our free time and love. If you have any questions, suggestions, or encounter any bugs, please feel free to get in touch with us on Discord. A button linking to it is in the main menu.", "我们很高兴您对我们在其中投入了很多空闲时间和热情对 Bondage Club (BC) 扩展感兴趣. 如果您有任何问题、建议或遇到任何错误,请随时通过 Discord 与我们联系. 主菜单中有一个链接到Discord的按钮."],
            ["The heart of BCX: Allows to configure the permissions to set up and use most of BCX. Default settings depend on the initial BCX setup preset selected. Self access is the checkbox next to every permission and the lowest access role is to its right. Example: If 'allow forbidding self access', 'allow granting self access', 'allow lowest access modification' have the checkbox removed and lowest role is 'Owner', then current and newly added BCX owners and the BC owner can get full control over any permissions they have access to. So careful with those three permissions!", "BCX的核心: 允许配置设置和使用 BCX 的大多数权限. 默认设置取决于所选的初始 BCX设置预设. 自访问是每个权限旁边的复选框, 最低访问角色在其右侧. 例如: 如果'允许禁止自访问', '允许授予自访问', '允许最低访问修改' 的复选框已移除, 且最低角色为'主人', 那么当前和新添加的 BCX所有者 以及 BC所有者 可以完全控制其访问权限的任何权限. 因此请小心处理这三个权限!"],
            ["This screen shows logs of important events. What is logged depends on the logging configuration, which can be viewed/edited via the button to the right. Log entries can have normal or protected visibility. Access to those as well as removing entries or the configuration is determined by the according authority module permission settings. The log can document the BCX's user's conduct, any rule violations, important changes made to BCX settings, curses or rules, and notes from other people.", "此界面显示重要事件的日志. 记录的内容取决于日志配置, 可以通过右侧的按钮查看/编辑. 日志条目可以具有普通或受保护的可见性. 访问这些条目以及删除条目或配置是由相应的权限模块权限设置确定的. 日志可以记录BCX用户的行为, 任何违规行为, 对BCX设置的重要更改, 诅咒或规则, 以及其他人的注释."],
            ["This screen determines what is logged in the behaviour log and what the visibility of each type of log messages is. 'Yes' means this log type has normal visibility, while 'protected' means only roles who have permission to view protected entries can view them. 'No' means that this log type is not logged at all. In the permission settings view of the authority module, the permissions of this log module can be configured.", "此界面确定在行为日志中记录了什么以及每种类型的日志消息的可见性. '是'表示此日志类型具有普通可见性, 而 '受保护' 表示只有具有查看受保护条目权限的角色才能查看它们. '否' 表示根本不记录此日志类型. 在权限模块的权限设置视图中, 可以配置此日志模块的权限."],
            ["This screen shows all active curses on the player, including many information, such as duration, if it is a cursed item/clothing/body slot or a blocked item or clothing slot that forces to stay unrestrained or naked there. Clicking on the button with the cog icon in the middle of each row moves you to a new screen that allows to configure the curse (if you have permission). When the cog icon has a blue aura, that means that the curse's conditions are the same as the global config. If permitted, you can remove single curses with the 'X' button.", "此界面显示玩家身上的所有活动诅咒, 包括许多信息, 例如持续时间、是否为 被诅咒的物品/服装/身体槽 或 强制保持未受限制 或 赤裸的封锁物品 或 服装槽. 单击每行中间带有齿轮图标的按钮会将您移动到一个新界面, 允许配置诅咒(如果您有权限). 当齿轮图标带有蓝色光环时, 这意味着诅咒的条件与全局配置相同. 如果允许, 您可以使用 'X'按钮删除单个诅咒."],
            ["The settings on this page are the global/default settings for all newly added curses. Changes to the trigger conditions are also applied to existing curses that are (still) set to global curses configuration, though. Exception is if a timer is set here. Such a timer only applies to newly created curses.", "此页面的设置是所有新添加的诅咒的 全局/默认设置. 对触发条件的更改也适用于仍设置为 全局诅咒配置的现有诅咒, 但例外情况是如果此处设置了 计时器. 这样的计时器仅适用于新创建的诅咒."],
            ["Here, you can add a curse to any empty slot (white) which will keep it empty or on any worn item (gold) which will prevent removal. You add the curse by simply clicking the slot which then becomes purple to indicate that it is now cursed. Grey slots indicate that you have no access to them, due to them being blocked or due to your permission settings. Slots can be limited/blocked via the settings button on the very right. The screen has a second page for the character's body slots.", "在这里, 您可以将诅咒添加到任何空槽(白色), 使其保持空白, 或添加到任何佩戴的物品(金色), 使其无法移除. 您只需点击槽即可添加诅咒, 然后该槽变为紫色, 表示现在已受到诅咒. 灰色槽表示您无权访问它们, 这是由于它们被封锁或由于您的权限设置. 可以通过最右侧的设置按钮限制/封锁槽. 界面的第二页用于角色的身体槽."],
            ["This screen shows all active rules for the player, including many information, such as duration, the rule type and little status icons that show if the rule is enforced and/or transgressions are logged. Clicking on the button with the cog icon in the middle of each row moves you to a new screen that allows to configure the rule (if you have permission). When the cog icon has a blue aura, then that means that the rule's conditions are the same as the global config. If permitted, you can remove single rules with the 'X' button.", "此界面显示玩家的所有活动规则, 包括许多信息, 例如持续时间、规则类型和小的状态图标, 显示规则 是否正在执行 和/或 是否记录了违规行为. 单击每行中间带有齿轮图标的按钮会将您移动到一个新界面, 允许配置规则(如果您有权限). 当齿轮图标带有蓝色光环时, 这意味着规则的条件与全局配置相同. 如果允许, 您可以使用'X'按钮删除单个规则."],
            ["On this screen you can see the available commands for the player. Clicking on one shows a more detailed description of it. Greyed out commands indicate that you have no access to them due to being blocked or due to your permission settings. Commands can be limited/blocked via the settings button on the very right. Commands will be used in the chat room's chat by whispering them with a '!' before the command to another player. Note: SOME of the commands can also be used on yourself with a leading '.' instead of '!' (e.g. '.eyes close')", "在此界面上, 您可以查看玩家的可用命令. 单击其中一个会显示更详细的描述. 灰色的命令表示由于受阻或由于权限设置而无法访问它们. 可以通过最右侧的设置按钮 限制/封锁 命令. 命令将在聊天室的聊天中使用, 通过向其他玩家用 '!' 在命令之前轻声呢喃给出. 注意: 其中一些命令也可以在自己身上使用, 以 '.' 而不是 '!' 为前缀(例如'.eyes close')"],
            ["Here you can cycle commands between being not limited, limited and blocked. Blocked means no one can use this command, while limited means only roles that have the permission to use limited commands can trigger them in that chat. There is no need to save changes as they are instantly in effect.", "在这里, 您可以在 不受限制、受限制 和 受阻 之间循环命令. 阻塞意味着没有人可以使用此命令, 而有限意味着只有具有使用有限命令权限的角色才能在该聊天中触发它们. 无需保存更改, 它们会立即生效."],
            ["This screen lets you add custom nicknames for other club members. The set custom name replaces the added character's real name / BC-nickname in this player's chat, except within chat commands, which are considered OOC. You can also enforce the custom name so that the player is blocked from sending a chat message / whisper that use the character's name / BC-nickname while with her. The player cannot have multiple custom names set for a single character. A character who has a custom name set on this screen can always see their own set custom name in this list.", "此界面允许您为其他俱乐部成员添加自定义昵称. 设置的自定义名称将替换此玩家聊天中添加的角色姓名/BC昵称, 但在被视为OOC的聊天命令中除外. 您还可以强制执行自定义名称, 以阻止玩家在与其一起使用角色的名称/BC昵称的聊天消息/耳语. 对于单个角色, 玩家不能设置多个自定义名称. 在此界面上设置了自定义名称的角色始终可以在此列表中看到其自己设置的自定义名称."],
            ["Please select the module feature you want to backup or import from a previous export. After storing the exported texts, you can later on use them again, e.g. for switching between cursed outfits or different rule sets. These exports are compatible between different BCX users and can be used by everyone with BCX who is permitted to make changes to the according module. For instance, if an owner has the permission to control limited AND non-limited rules on the sub, she is with that also allowed to import previously exported rules that are not blocked.", "请选择您要备份或从以前的导出中导入的模块功能. 在存储了导出的文本之后, 您以后可以再次使用它们, 例如在诅咒的服装之间切换或不同的规则集之间切换. 这些导出在不同的BCX用户之间是兼容的, 并且可以由具有更改相应模块的权限的BCX的每个人使用. 例如, 如果所有者有权限控制子女的有限和非有限规则, 那么她也被允许导入先前未被阻止的导出规则."],
            ["This screen offers various settings to configure your Bondage Club experience in general, such as enabling/disabling the typing indicator that shows other BCX users an icon when you are currently typing something to public chat or whispering something to only them. The cheats are only temporarily active as long as they are set; items that were only given via a cheat are then also gone again.", "此界面提供各种设置, 以一般配置您在Bondage Club中的体验, 例如启用/禁用打字指示器, 当您当前在公共聊天中输入或向他们私下耳语时, 它会向其他BCX用户显示一个图标. 作弊只在设置时是临时的；仅通过作弊获得的物品也将消失."],
            ["On this screen you can establish new rules for the player by simply clicking any rule template. After clicking on it, you can edit the rule's configuration. Purple rule templates indicate, that they are already in use; greyed out ones, that you have no access to them due to being blocked or due to your permission settings. Rule templates can be limited/blocked via the settings button on the very right. Note: If you want to be able to log rule violations, this type of log entry may need to be allowed in the configuration page of the behavior log module.", "在此界面上, 您可以通过简单地单击任何规则模板来为玩家建立新规则. 单击后, 您可以编辑规则的配置. 紫色的规则模板表示它们已在使用中；灰色的模板表示由于被阻止或由于权限设置而无法访问它们. 规则模板可以通过最右侧的设置按钮限制/封锁. 注意: 如果要能够记录违规行为, 可能需要在行为日志模块的配置页面中允许此类型的日志条目."],



            // FBC
            ["[FBC] Notes", "[FBC] 笔记"],
            ["For Better Club Settings (FBC)", "更好的 Better Club 设置 (FBC)"],
            ["Join Discord", "加入 Discord"],
            ["License", "授权证书"],
            ["Information", "信息"],
            ["Show friends going offline too", "显示好友离线消息"],
            ["Show friend presence notifications in chat, when possible", "如果可能,在聊天中显示朋友在线通知"],
            ["Click on a setting to see its description", "点击设置看到它的描述"],
            ["Show sent messages while waiting for server", "等待服务器时显示已发送的消息"],
            ["Show numeric arousal meter", "显示数字高潮条"],
            ["Animation Engine", "动画引擎"],
            ["Hide the hidden items icon", "隐藏道具图标"],
            ["Enable anti-cheat", "开启防作弊功能"],
            ["Blacklist detected cheaters automatically", "自动将作弊者列入黑名单"],
            ["Prompt before loading content from a 3rd party domain", "从第三方域名加载内容前的提示"],
            ["Allow IMs to bypass BCX beep restrictions", "允许即时消息绕过BCX提示音限制"],
            ["Change this rule's configuration", "更改此规则的配置"],
            ["Remaining duration of the rule", "规则的剩余时间"],
            ["Rule will be enforced", "规则将被执行"],
            ["Remove rule", "移除规则"],
            ["Rule violations will be logged", "违规将被记录"],
            ["FBC Settings", "FBC 设置"],
            ["LSCG Settings", "LSCG 设置"],
            ["MBS Settings", "MBS 设置"],
            ["Adds clickable links and image embeds from trusted domains only (e.g. imgur) to chat messages.", "仅从受信任的域 (例如 imgur) 添加可点击链接和图像嵌入到聊天消息中."],
            ["Allows you to send messages to other players without having to open the friends list, with enhancements.", "允许您通过增强功能向其他玩家发送消息,而无需打开好友列表."],
            ["Allows you to use Ctrl+Enter to send OOC messages.", "允许您使用 Ctrl+Enter 发送 OOC 消息."],
            ["Changes the input field to italics when you're in whisper mode to make it more obvious.", "在密语模式下将输入字段更改为斜体,以使其更为明显."],
            ["Improves contrast between the colors used for chat messages to comply with web accessibility standards.", "改善聊天消息中使用的颜色之间的对比度,以符合Web辅助功能标准."],
            ["Enables friend presence tracking and shows a notification when a friend logs in.", "启用好友在线状态跟踪,并在好友登录时显示通知."],
            ["Shows a notification when a friend logs out. (Requires friend presence)", "当好友退出登录时显示通知.(需要好友在线状态)"],
            ["Shows friend presence notifications in chat, when possible. (Requires friend presence)", "在可能的情况下在聊天中显示好友在线状态通知.(需要好友在线状态)"],
            ["Saves the profiles for everyone you've seen and allows you to browse them using /profiles in chatrooms.", "保存您见过的每个人的个人资料,并允许您使用/chatrooms中的/profiles进行浏览."],
            ["Shows messages you've sent while waiting for the server to respond, confirming you have sent the message and the server is just being slow.", "显示您在等待服务器响应时发送的消息,确认您已发送消息,服务器只是在运行缓慢."],
            ["Enables the animation engine. This will replace the game's expression and pose system.", "启用动画引擎.这将替代游戏的表情和姿势系统."],
            ["Automatically express arousal when performing an activity.", "在执行活动时自动表达兴奋."],
            ["Automatically express reactions to certain activities.", "对某些活动自动表达反应."],
            ["More intense activities will affect arousal faster.", "更强烈的活动将更快地影响兴奋."],
            ["More stuttering at high arousal, moans between words with vibrators.", "在高度兴奋时更多地口吃,振动器之间的呻吟."],
            ["Shows the numeric value of arousal meters when expanded.", "展开时显示兴奋仪表的数字值."],
            ["Adds additional options when looking at equipped items or pieces of clothing.", "在查看已装备的物品或衣物时添加额外选项."],
            ["Increase the amount of wardrobe slots to save more outfits.", "增加衣柜槽的数量以保存更多服装."],
            ["Allows you to preview all saved outfits at a glance, no more having to remember names.", "允许您一目了然地预览所有保存的服装,无需记住名称."],
            ["Slur your speech a little bit while gagged forcing others, even those cheating, to have some trouble understanding you.", "在被堵嘴时稍微嘟囔,迫使其他人,甚至是那些作弊的人,难以理解您."],
            ["Use equipped gags' full effect to prevent others from understanding you fully, even those that are cheating.", "使用已装备的堵嘴的完整效果,即使那些作弊的人也无法完全理解您."],
            ["Use equipped gags' full effect to prevent others from understanding you fully, even those that are cheating. This option adds another level of gagging for the most extreme predicaments, preventing you from making much sound at all.", "使用已装备的堵嘴的完整效果,即使那些作弊的人也无法完全理解您.此选项为最极端的困境增加了另一层堵嘴,阻止您发出太多声音."],
            ["You will be partially blinded while not wearing glasses.", "在不戴眼镜时您会被部分蒙蔽."],
            ["Allows you to be leashed between rooms even when you are not wearing an item that counts as a leash to allow roleplaying being carried in arms.", "即使您没有佩戴计为拴绳的物品,也允许您在房间之间被拴绳,以便在手臂中进行角色扮演."],
            ["You can choose to hide items (not on extreme difficulty). The game shows an icon on players that have hidden items. This option hides that icon.", "您可以选择隐藏物品(不在极端困难模式下).游戏在拥有隐藏物品的玩家身上显示一个图标.此选项隐藏了该图标."],
            ["Prevents certain console cheats from impacting your character. Whitelisted actors are exempt from this.", "防止某些控制台作弊对您的角色产生影响.被列入白名单的演员不受此影响."],
            ["Automatically blacklist detected cheaters. Whitelisted actors are exempt from this.", "自动将检测到的作弊者列入黑名单.被列入白名单的演员不受此影响."],
            ["Automatically clears the drawing cache every hour, preventing memory usage from growing out of control during long play sessions.", "每小时自动清除绘图缓存,防止在长时间游戏过程中内存使用量失控."],
            ["Shows the current FPS in the top-left corner of the screen.", "在界面左上角显示当前FPS."],
            ["Limits the FPS to 10 in the background. This is useful for saving resources when you are not interacting with the game.", "将后台中的FPS限制为10.当您不与游戏交互时,这对节省资源很有用."],
            ["Limits the FPS to 15. This is useful for saving resources.", "将FPS限制为15.这对于节省资源很有用."],
            ["Limits the FPS to 30. This is useful for saving resources.", "将FPS限制为30.这对于节省资源很有用."],
            ["Limits the FPS to 60. This is useful for saving resources.", "将FPS限制为60.这对于节省资源很有用."],
            ["Check for FBC updates on startup.", "启动时检查FBC更新."],
            ["Automatically re-enter your password after you disconnect from the game. For convenience or AFK. Requires the password for the current account to have been saved in the login screen. Passwords are saved in your browser's local storage in plain text.", "在您从游戏断开连接后,自动重新输入密码.方便或离开键盘.要求在登录界面中保存了当前帐户的密码.密码以纯文本形式保存在浏览器的本地存储中."],
            ["Adds a quick switch for the two options next to the chat input area.", "在聊天输入区域旁边添加了两个选项的快速切换."],
            ["Automatically ghost+blocklist unnaturally new users. This is useful for preventing malicious bots, but is not recommended to be enabled normally.", "自动幽灵+黑名单不自然的新用户.这对于防止恶意机器人很有用,但通常不建议启用."],
            ["Allows you to set specific durations for timer locks.", "允许您为定时器锁定设置特定的持续时间."],
            ["When you leave the game, you will be prompted to confirm your decision. This is useful for preventing accidentally closing the tab, but will cause you to reconnect.", "当您离开游戏时,系统将提示您确认决定.这对于防止意外关闭标签很有用,但会导致您重新连接."],
            ["Disables drawing on the screen. This is useful for preventing accidental drawing.", "禁用界面上的绘图.这对于防止意外绘图很有用."],
            ["Show a confirmation prompt before allowing content from a 3rd party domain to be loaded.", "在加载第三方域的内容之前显示确认提示."],
            ["Bypasses gagged effect on others and deafen effect on yourself. You'll still be unable to understand others if they use FBC's gag anti-cheat.", "绕过对其他人的堵嘴效果和对自己的失聪效果.如果其他人使用FBC的堵嘴反作弊,您仍然无法理解他们."],
            ["Randomly reveals the order of some of the pins with higher lockpicking skill revealing more pins on average. Picking can still be impossible like other forms of struggling.", "随机显示具有更高撬锁技能的一些销的顺序,平均而言,揭示的销更多.像其他形式的挣扎一样,撬锁可能仍然是不可能的."],
            ["Allows you to open menus while bound, even if they're disabled in the settings.", "允许您在被束缚时打开菜单,即使在设置中禁用了它们."],
            ["All three forms of struggling will be completed automatically in a realistic amount of time, if the restraint is possible to struggle out of.", "如果可能摆脱约束,所有三种形式的挣扎将在现实时间内自动完成."],
            ["This setting is temporary until BCX supports a focus mode rule.", "此设置在BCX支持焦点模式规则之前是临时的."],
            ["Share a list of your installed addons with other FBC users in the room, visible via /versions chat command.", "与房间中的其他FBC用户共享您已安装插件的列表,可通过/versions聊天命令查看."],
            ["Load Bondage Club Extended. To see all details, see the link in sidiousious.gitlab.io/bce. This option always loads the latest version, which may change between refreshes.", "加载Bondage Club Extended.要查看所有详细信息,请访问sidiousious.gitlab.io/bce中的链接.此选项始终加载最新版本,可能在刷新之间更改."],
            ["Load the latest beta version of BCX. To see all details, see the link in sidiousious.gitlab.io/bce. This option always loads the latest version, which may change between refreshes.", "加载BCX的最新测试版.要查看所有详细信息,请访问sidiousious.gitlab.io/bce中的链接.此选项始终加载最新版本,可能在刷新之间更改."],
            ["Load the latest stable version of EBCH. To see all details, see the link in sidiousious.gitlab.io/bce. This option always loads the latest version, which may change between refreshes.", "加载EBCH的最新稳定版.要查看所有详细信息,请访问sidiousious.gitlab.io/bce中的链接.此选项始终加载最新版本,可能在刷新之间更改."],
            ["Load the latest stable version of MBS. To see all details, see the link in sidiousious.gitlab.io/bce. This option always loads the latest version, which may change between refreshes.", "加载MBS的最新稳定版.要查看所有详细信息,请访问sidiousious.gitlab.io/bce中的链接.此选项始终加载最新版本,可能在刷新之间更改."],
            ["Load the latest stable version of LSCG. To see all details, see the link in sidiousious.gitlab.io/bce. This option always loads the latest version, which may change between refreshes.", "加载LSCG的最新稳定版.要查看所有详细信息,请访问sidiousious.gitlab.io/bce中的链接.此选项始终加载最新版本,可能在刷新之间更改."],

            ["More", "更多"],
            ["More options [BCX]", "更多选项 [BCX]"],
            ["Standardize your room description so the room's purpose is clear and it can easily be filtered:", "标准化您的房间描述, 以便清晰显示房间的用途, 并且可以轻松进行过滤: "],
            ["Create a theme room", "创建一个主题房间"],
            ["Templates for storing / overwriting current room information & settings (press a name to toggle auto-apply)", "用于存储/覆盖当前房间信息和设置的模板(按名称切换自动应用)"],
            ["- empty template slot -", "- 空模板槽 -"],
            ["Load", "加载"],
            ["    Save", "    保存"],
            ["1. Select the room type:", "1. 选择房间类型: "],
            ["2. Optionally, select one room setting:", "2. 可选地, 选择一个房间设置: "],
            ["3. Optionally, select limits for the room:", "3. 可选地, 选择房间的限制: "],
            ["4. Optionally, write a room introduction message/greeting that everyone joining will see as emote:", "4. 可选地, 编写一个房间介绍消息/欢迎词, 所有加入的人都会看到其作为表情. "],
            ["AFK/Storage", "AFK/存储"],
            ["Chill/Chat", "休闲/聊天"],
            ["Tying all up", "全部捆绑"],
            ["Game", "游戏"],
            ["Roleplaying", "角色扮演"],
            ["Kidnap/Danger", "绑架/危险"],
            ["Market/Auction", "市场/拍卖"],
            ["Undefined", "未定义"],
            ["Adventure", "冒险"],
            ["Historic", "历史"],
            ["Romantic", "浪漫"],
            ["SciFi", "科幻"],
            ["Fantasy", "奇幻"],
            ["Modern", "现代"],
            ["School", "学校"],
            ["no-anal", "无屁眼交易"],
            ["no-animals", "无动物"],
            ["no-fantasy", "无幻想"],
            ["no-limits", "无限制"],
            ["no-males", "无男性"],
            ["no-sexual", "无性行为"],
            ["no-tentacles", "无触手"],
            ["Blocked items:", "已屏蔽的物品:"],
            ["OK", "确定"],
            ["Import everything onscreen", "导入界面上的所有内容"],
            ["Export everything onscreen", "导出界面上的所有内容"],







            // MBS
            ["- Maid's Bondage Scripts 1.1.7.dev0+484830ff -", ""],
            ["Configure the Wheel of Fortune", "配置幸运转盘"],
            ["Allow wheel spinning while restrainted", "允许转盘在约束下旋转"],
            ["Lock MBS settings while restrained", "受限状态下锁定MBS设置"],
            ["Select custom wheel of fortune item sets: page 0", "选择自定义幸运转盘道具套装: 第0页"],
            ["Select custom wheel of fortune item sets: page 1", "选择自定义幸运转盘道具套装: 第1页"],
            ["Select custom wheel of fortune commands: page 0", "选择自定义转盘指令: 第0页"],
            ["Select custom wheel of fortune commands: page 1", "选择自定义转盘指令: 第1页"],
            ["Reset", "重置"],
            ["Latest Changes", "最新更改"],
            ["Configure Wheel of Fortune", "配置幸运之轮"],
            ["0: Empty", "0: 空"],
            ["1: Empty", "1: 空"],
            ["2: Empty", "2: 空"],
            ["3: Empty", "3: 空"],
            ["4: Empty", "4: 空"],
            ["5: Empty", "5: 空"],
            ["6: Empty", "6: 空"],
            ["7: Empty", "7: 空"],
            ["8: Empty", "8: 空"],
            ["9: Empty", "9: 空"],
            ["10: Empty", "10: 空"],
            ["11: Empty", "11: 空"],
            ["12: Empty", "12: 空"],
            ["13: Empty", "13: 空"],
            ["14: Empty", "14: 空"],
            ["15: Empty", "15: 空"],
            ["item sets: page 1", "道具套装: 第1页"],
            ["commands: page 1", "指令: 第1页"],
            ["Exit", "退出"],
            ["16: Empty", "16: 空"],
            ["17: Empty", "17: 空"],
            ["18: Empty", "18: 空"],
            ["19: Empty", "19: 空"],
            ["20: Empty", "20: 空"],
            ["21: Empty", "21: 空"],
            ["22: Empty", "22: 空"],
            ["23: Empty", "23: 空"],
            ["24: Empty", "24: 空"],
            ["25: Empty", "25: 空"],
            ["26: Empty", "26: 空"],
            ["27: Empty", "27: 空"],
            ["28: Empty", "28: 空"],
            ["29: Empty", "29: 空"],
            ["30: Empty", "30: 空"],
            ["31: Empty", "31: 空"],
            ["commands: page 0", "指令: 第0页"],
            ["item sets: page 0", "道具套装: 第0页"],
            ["Clear all MBS data", "清除所有MBS数据"],
            ["Open the MBS changelog", "打开MBS更改日志"],
            ["Parse", "解析"],
            ["Clothes and underwear", "衣服和内衣"],
            ["Clothes, underwear and cosplay items", "衣服、内衣和角色扮演道具"],
            ["Accept: Missing outfit", "接受:缺少服装"],
            ["Delete", "删除"],
            ["Missing outfit code", "缺少服装代码"],
            ["Accept: Missing name", "接受:缺少名称"],


            // LSCG
            ["- Little Sera's Club Games v0.3.41 -", ""],
            ["- LSCG General -", "- LSCG 通用 -"],
            ["- LSCG Triggered Hypnosis -", "- LSCG 触发催眠 -"],
            ["- LSCG Breathplay -", "- LSCG 窒息游戏 -"],
            ["Now available:", "现在可用:"],
            ["Andrew's Collar Control Module!!", "安德鲁的颈圈控制模块!!"],
            ["Has your owner sent you shopping for a more controlling collar?", "你的主人是否让你去购物找一个更有控制力的颈圈?"],
            ["Are you looking for some extra motivation for good behavior?", "你是否在寻找一些额外的动力来保持良好行为?"],
            ["Act now and secure your Control Module now for the low low price of $500!", "立即行动,以低低的价格$500购买并保护您的控制模块!"],
            ["Attach this revolutionary new device to your existing collar and it will", "将这个革命性的新设备连接到您现有的颈圈上,"],
            ["enhance it with the ability to tighten and loosen on command!", "它将增强其根据命令收紧和松开的能力!"],
            ["Let your dom quiet down those bratty moments and reward good behavior!", "让你的主人平息那些调皮的时刻并奖励良好的行为!"],
            ["Update Collar:", "更新颈圈:"],
            ["Current Name: undefined", "当前名称: 未定义"],
            ["- LSCG Drug Enhancements -", "- LSCG 药物增强 -"],
            ["- LSCG Activities -", "- LSCG 活动 -"],
            ["Please Select a Zone", "请选择一个区域"],
            ["- LSCG Magic™ -", "- LSCG 魔法™ -"],
            ["Magic™!", "魔法™!"],
            ["Want to wow and amaze your friends and lovers?", "想要让你的朋友和爱人赞叹不已吗?"],
            ["Are you looking to impress and punish your enemies?", "你是不是想要给你的敌人留下深刻印象并惩罚他们?"],
            ["With just a simple signature you too can experience the thrill of Magic™!", "只需简单的签名,你也可以体验到Magic™的刺激!"],
            ["- Reveal the ancient secrets of the arcane! -", "- 揭示神秘古老的奥秘! -"],
            ["- Craft your own amazing potions! -", "- 制作你自己的惊人药剂! -"],
            ["- Share in your powers, or dont! -", "- 分享你的力量n或不要! -"],
            ["General", "一般"],
            ["Triggered Hypnosis", "触发催眠"],
            ["Breathplay", "窒息游戏"],
            ["Drug Enhancements", "药物增强"],
            ["Activities", "活动"],
            ["Magic™", "魔法™"],
            ["Open Help", "打开帮助"],
            ["Export LSCG Settings", "导出 LSCG 设置"],
            ["Open LSCG Wiki on GitHub.", "在 GitHub 上打开 LSCG Wiki"],
            ["Open LSCG Latest Release on Github.", "在 Github 上打开 LSCG 最新版本"],
            ["Import LSCG Settings", "导入 LSCG 设置"],
            ["Emergency reset of LSCG", "紧急重置 LSCG"],
            ["LSCG Scripts Enabled:", "LSCG 脚本已启用:"],
            ["Block Settings While Restrained:", "在受限制时阻止设置:"],
            ["Immersive Conditions:", "身临其境的条件:"],
            ["Blur While Edged:", "寸止时模糊:"],
            ["Enable Lipstick Marks:", "启用口红痕迹:"],
            ["Dry Lipstick:", "干的口红:"],
            ["Enable Boop Reactions:", "启用 Boop 反应:"],
            ["Show Check Rolls:", "显示掷骰结果:"],
            ["Share Public Craftings:", "分享公共工艺:"],
            ["Hide Resizing Effects:", "隐藏调整大小效果:"],
            ["Hide all Opacity Overrides:", "隐藏所有不透明度覆盖:"],
            ["Prevent Remote Opacity Changes:", "防止远程不透明度更改:"],
            ["Enable LSCG Features.", "启用 LSCG 功能."],
            ["Prevents LSCG settings access while restrained.", "在受束缚时阻止 LSCG 设置访问."],
            ["Applies a more restrictive set of conditional states while incapacitated by LSCG.", "在被 LSCG 使无能力时应用更严格的条件状态集."],
            ["Apply extra blurring to the screen while edging.", "在寸止时为界面添加额外模糊."],
            ["Apply kiss marks when lipstick-wearing people kiss you on the cheek/forehead/neck.", "当涂口红的人吻你的脸颊/额头/颈部时添加吻痕."],
            ["Never apply kissmarks when you are the kisser.", "当你是亲吻者时不留下吻痕."],
            ["Auto-react when booped.", "当被戳时自动反应."],
            ["If enabled, will display the attacker/defender roll values for activity checks.", "如果启用,将显示活动检查的攻击者/防御者掷骰值."],
            ["If enabled, other LSCG users in the room will be able to use your crafted items on other people.", "如果启用,房间中的其他 LSCG 用户将能够在其他人身上使用你制作的物品."],
            ["If checked, you will not see any LSCG resizing effects. (eg. from magic)", "如果选中,你将看不到任何 LSCG 的调整大小效果.(例如,来自魔法的效果)"],
            ["If checked, will skip any opacity override effects. (includes x-ray vision)", "如果选中,将跳过任何不透明度覆盖效果.(包括透视视觉)"],
            ["If checked, other players will not be able to directly modify the opacity settings on your wardrobe items.", "如果选中,其他玩家将无法直接修改你的衣柜物品的不透明度设置."],
            ["LSCG main menu", "LSCG 主菜单"],
            ["Enabled:", "启用:"],
            ["Override Trigger Words:", "覆盖触发词:"],
            ["Override Awaken Words:", "覆盖唤醒词:"],
            ["Custom list of words and/or phrases as awakener triggers. Separated by a comma.", "自定义单词和/或短语作为唤醒触发器的列表.用逗号分隔."],
            ["Override Allowed Member IDs:", "覆盖允许的成员 ID:"],
            ["Hypnosis Length (min.):", "催眠时长(分钟):"],
            ["Cooldown (sec.):", "冷却时间(秒):"],
            ["Enable Cycle:", "启用循环:"],
            ["Trigger Cycle Time (min.):", "触发循环时间(分钟):"],
            ["Custom list of words and/or phrases as hypnisis triggers. Separated by a comma.", "自定义单词和/或短语作为催眠触发器的列表.用逗号分隔."],
            ["Enabled the Triggered Hypnosis Features.", "启用触发式催眠功能."],
            ["Comma separated list of member IDs. If empty will use standard Item Permissions.", "成员 ID 的逗号分隔列表.如果为空,将使用标准的物品权限."],
            ["Length of hypnosis time (in minutes) before automatically recovering. Set to 0 for indefinite.", "自动恢复前的催眠时间长度(以分钟为单位).设置为 0 表示无限制."],
            ["If checked, only one trigger will be active at a time and will cycle after use.", "如果选中,一次只能激活一个触发器,并在使用后循环."],
            ["Number of minutes after activation to wait before cycling to a new trigger.", "激活后等待多少分钟,然后循环到一个新的触发器."],
            ["Cooldown time (in seconds) before you can be hypnotized again.", "再次被催眠之前的冷却时间(以秒为单位)."],
            ["Allow Remote Access:", "允许远程访问:"],
            ["Remote Access Requires Trance:", "远程访问需要催眠:"],
            ["Remote Access Limited to Hypnotizer:", "远程访问限制为催眠者:"],
            ["Allow Remote Override Member Modification:", "允许远程覆盖成员修改:"],
            ["Lockable:", "可锁定:"],
            ["Build arousal while hypnotized:", "催眠时兴奋:"],
            ["Hypnotized Eye Color:", "催眠眼睛颜色:"],
            ["Hypnotized Eye Type:", "催眠眼睛类型:"],
            ["If checked, allowed users can modify these settings.", "如果选中,允许的用户可以修改这些设置."],
            ["If checked, remote access is only possible while actively hypnotized.", "如果选中,远程访问仅在被积极催眠时才可能."],
            ["If checked, only the user who hypnotized you can access your settings (after matching other conditions).", "如果选中,只有催眠你的用户在匹配其他条件后才能访问你的设置."],
            ["If checked, any remote users can change your Override Member Id list (otherwise, only owner can).", "如果选中,任何远程用户都可以更改你的覆盖成员ID列表(否则,只有主人可以)."],
            ["If checked, allowed users can lock you out of these settings.", "如果选中,允许的用户可以锁定你无法访问这些设置."],
            ["If checked being hypnotized will increase arousal.", "如果选中,被催眠时将增加兴奋."],
            ["Hex code of your eye color while hypnotized (default: #A2A2A2).", "催眠时你的眼睛颜色的十六进制代码(默认:#A2A2A2)."],
            ["Eye type # to use while under hypnosis (default: 9).", "在催眠状态下使用的眼睛类型 #(默认:9)."],
            ["Allow Speech Trigger Words:", "允许语音触发词汇:"],
            ["Silence Trigger Words:", "禁止语音触发词汇:"],
            ["When spoken while hypnotized, will allow speech. Separated by a comma.", "在催眠状态下说出时,将允许语音.用逗号分隔."],
            ["When spoken while hypnotized, will prevent speech. Separated by a comma.", "在催眠状态下说出时,将阻止语音.用逗号分隔."],
            ["Enable Hand Choking:", "启用手部窒息:"],
            ["Enable Gag Suffocation:", "启用口球窒息:"],
            ["Sleep on Passout:", "昏倒时进入睡眠:"],
            ["Sleep time (minutes):", "睡眠时间(分钟):"],
            ["How long you will sleep after passout if enabled.", "启用后昏倒后的睡眠时长."],
            [`Enables breathplay using "Choke Neck" activity. If done repeatedly will cause blackout.`, `启用"颈部窒息"活动进行窒息游戏.如果反复进行,会导致晕厥.`],
            ["Enabled breathplay using nose plugs and sufficient gags.", "使用鼻塞和足够的口球进行窒息游戏."],
            ["Will force sleep on passout.", "在昏倒时强制进入睡眠."],
            ["Allow Self-Tightening:", "允许自我拉紧:"],
            ["Allow Self-Loosening:", "允许自我放松:"],
            ["Allowed Members IDs:", "允许的成员ID:"],
            ["Limit to Crafted User:", "限制为制作的用户:"],
            ["Tighten Trigger:", "拉紧触发:"],
            ["Loosen Trigger:", "放松触发:"],
            ["Immersive:", "沉浸式:"],
            ["Enable Buttons:", "启用按钮:"],
            ["Any Collar:", "任何项圈:"],
            ["Update", "更新"],
            ["Enabled the Choking Collar Features.", "启用窒息项圈功能."],
            ["Enables Remote Access to Collar Settings.", "启用远程访问项圈设置."],
            ["Allowes Remote Access Users to lock you out of these settings.", "允许远程访问用户锁定您无法访问这些设置."],
            ["Comma separated list of member IDs who can activate the collar. Leave empty for item permissions.", "以逗号分隔的成员ID列表,可以激活项圈.留空表示使用项权限."],
            ["Limits collar activation to crafted user and allowed list. If no crafted user will use item permissions.", "将项圈激活限制为精心制作的用户和允许的列表.如果没有精心制作的用户,将使用项权限."],
            ["Word or phrase that, if spoken, will tighten the collar.", "如果说出的话或短语将拉紧项圈."],
            ["Word or phrase that, if spoken, will loosen the collar.", "如果说出的话或短语将放松项圈."],
            ["Allow the wearer to loosen their own collar.", "允许佩戴者自己放松项圈."],
            ["Allow the wearer to tighten their own collar.", "允许佩戴者自己拉紧项圈."],
            ["Allows activation of the collar features via buttons (activities & commands).", "通过按钮(活动和命令)启用项圈功能."],
            ["If enabled, any collar can trigger and activate.", "如果启用,任何项圈都可以触发和激活."],
            ["Prevents the wearer from viewing triggers via show-triggers.", "防止佩戴者通过show-triggers查看触发词."],
            ["Enable Sedative:", "启用镇静剂:"],
            ["Enable Brainwash Drug:", "启用洗脑药物:"],
            ["Enable Aphrodisiac:", "启用催情剂:"],
            ["Filled Glass Sip Limit:", "玻璃杯饮用限制:"],
            ["Allow Continuous Delivery:", "允许持续投递:"],
            ["Inexhaustible Gases:", "不竭之气:"],
            ["Show Drug Levels:", "显示药物水平:"],
            ["Heartbeat Sound:", "心跳声:"],
            ["Chaotic Net Gun:", "混乱网枪:"],
            ["If true, will allow respirators to deliver a continuous supply of drugged gas.", "如果为真,将允许呼吸器提供持续的麻醉气体."],
            [`Activates for any injector or drink with "horny" or "aphrodisiac" in its crafted name or description.`, `对于任何注射器或饮料,如果其精心制作的名称或描述中包含"horny"或"aphrodisiac",则激活.`],
            [`Activates for any injector or drink with "sedative" or "tranquilizer" in its crafted name or description.`, `对于任何注射器或饮料,如果其精心制作的名称或描述中包含"sedative"或"tranquilizer",则激活.`],
            ["Enable Enhanced Injections and Net Gun.", "启用增强注射和网枪."],
            [`Activates for any injector or drink with "mind control," "hypnotizing," or "brainwashing" in its crafted name or description.`, `对于任何注射器或饮料,如果其精心制作的名称或描述中包含"mind control","hypnotizing"或"brainwashing",则激活.`],
            ["Number of sips before your filled glasses empty. (0 for no limit)", "玻璃杯空前的饮用次数.(0 表示无限制)"],
            ["If true, any continuous delivery (eg. respirator) on you will never run out of gas.", "如果为真,您身上的任何持续投递(例如呼吸器)都不会用尽气体."],
            ["If true, will display bars showing the level of each drug type.", "如果为真,将显示显示每种药物类型水平的条形图."],
            ["If true, enables an occasional heartbeat sound while under the influence of aphrodisiac.", "如果为真,在受到催情剂影响时,偶尔会启用心跳声."],
            ["If true, your net gun will fire wildly and have a 50/50 chance to net a random character instead of your target.", "如果为真,您的网枪将疯狂射击,并有50/50的机会网住一个随机角色而不是您的目标."],
            ["Enable Chloroform:", "启用氯仿:"],
            ["Chloroform Never Fades:", "氯仿永不褪:"],
            ["Fall asleep if chloroformed.", "如果被氯仿,就会入睡."],
            ["If enabled one rag over your mouth will last forever until removed, otherwise its potency will fade after an hour.", "如果启用,放在嘴上的一块抹布将永远持续,直到被移除,否则其效力将在一小时后减弱."],
            ["Number times within 5 minutes this activity must be done before hypnosis or sleep is triggered.", "在5分钟内必须完成此活动的次数,然后才能触发催眠或睡眠."],
            ["Using this activity on this location can trigger hypnosis.", "在此位置使用此活动可以触发催眠."],
            ["Arousal threshold required for this activity to trigger hypnosis. If both trance and sleep are checked, lower arousal triggers sleep.", "触发催眠所需的性唤起阈值.如果同时选中了催眠和睡眠,则较低的性唤起将触发睡眠."],
            ["Using this activity on this location will awaken you from trance or deep sleep.", "在此位置使用此活动将唤醒您从催眠或深度睡眠中."],
            ["Using this activity on this location can cause an orgasm.", "在此位置使用此活动可能导致性高潮."],
            ["Arousal threshold required for this activity to cause an orgasm.", "使此活动导致性高潮所需的性唤醒阈值."],
            ["Member IDs who can trance/sleep/awaken/orgasm with this activity. Leave empty to use BC item permissions", "可以使用此活动进行催眠/睡眠/唤醒/性高潮的成员ID.留空以使用BC项权限."],
            ["Using this activity on this location can put them to sleep.", "在此位置使用此活动可以使他们入睡."],
            ["Can Induce Trance", "可以诱导催眠"],
            ["Can Induce Sleep", "可以诱导睡眠"],
            ["Repeats Required", "所需重复次数"],
            ["Trance Arousal Threshold", "催眠性唤醒阈值"],
            ["Can Awaken", "可以唤醒"],
            ["Can Cause Orgasm", "可以导致性高潮"],
            ["Orgasm Arousal Threshold", "性高潮性唤醒阈值"],
            ["Allowed Member IDs", "允许的成员ID"],
            ["Enable Wild Magic:", "启用野性魔法:"],
            ["Force Wild Magic", "强制野性魔法"],
            ["True Wild Magic", "真实野性魔法"],
            ["Prevent X-Ray Vision", "防止X射线视觉"],
            ["Blocked Effects:", "阻止的效果:"],
            ["Hypnotizing", "催眠"],
            ["Hypnotizes the target.", "催眠目标."],
            ["Cast a random spell from your spell list, with a chance of a truly random spell.", "从你的法术列表中随机施放一个法术,有可能是真正随机的法术."],
            ["Generate a truly random spell whenever casting.", "每次施放时生成一个真正随机的法术."],
            ["Lead-line all your clothing.", "给你的所有衣物加铅衬."],
            ["Toggle which spell effects you want to block on yourself.", "切换你想在自己身上屏蔽的法术效果."],
            ["Prevent the ability to choose the spell you are casting.", "阻止选择你要施放的法术的能力."],
            ["Enabled the use and application of Magic™.", "启用魔法™的使用和应用."],
            ["Allowed", "允许"],
            ["Slumbering", "沉睡"],
            ["Induces a deep slumber in the target.", "使目标陷入深度沉睡."],
            ["Arousing", "唤起"],
            ["Arouses the target.", "唤醒目标."],
            ["Blinding", "致盲"],
            ["Prevents the target from seeing.", "防止目标看见."],
            ["Deafening", "致聋"],
            ["Prevents the target from hearing.", "防止目标听见."],
            ["Gagged", "堵嘴"],
            ["Gags the target.", "给目标堵嘴."],
            ["Petrifying", "石化"],
            ["Petrifies the target.", "使目标石化."],
            ["Enlarging", "增大"],
            ["Enlarges the target to twice their size.", "将目标的大小增大一倍."],
            ["Bless", "祝福"],
            ["Applies a +5 buff to all the target's skills for 15 minutes", "为目标的所有技能施加+5增益,持续15分钟"],
            ["Bane", "诅咒"],
            ["Applies a -5 debuff to all the target's skills for 15 minutes", "为目标的所有技能施加-5减益,持续15分钟"],
            ["Pairing", "配对"],
            ["Pair two targets, such that when one feels arousal the other also does.", "将两个目标配对,使一个感到性唤醒时另一个也会感到."],
            ["Siphoning", "吸取"],
            ["Redirect all of the target's orgasmic pleasure to another.", "将目标的所有性高潮快感重定向到另一个目标."],
            ["Outfit", "服装"],
            ["Magically change the target's clothing and equipment.", "魔法更改目标的服装和装备."],
            ["Polymorph", "变形"],
            ["Polymorph the target's body and/or cosplay items", "变形目标的身体和/或角色扮演物品"],
            ["Dispell", "驱散"],
            ["Dispells any existing effects on the target (including anything drug induced).", "驱散目标上的任何现有效果(包括任何药物引起的效果)."],
            ["X-Ray Vision", "X射线视觉"],
            ["Grants the target X-Ray vision", "赋予目标X射线视觉"],
            ["Spell Crafting", "法术制作"],
            ["No Spells Known...", "没有已知法术..."],
            ["Create new Spell", "创建新法术"],
            ["Create your arcane sorceries and potions.", "创建你的奥术巫术和药水."],
            ["Remote Allowed Member IDs:", "远程允许的成员ID:"],
            ["Never Defend:", "永不防御:"],
            ["Defenseless Against Member IDs:", "无防御能力的成员ID:"],
            ["Limited Spell Duration:", "有限的法术持续时间:"],
            ["Maximum Spell Duration:", "最大法术持续时间:"],
            ["Allow Outfit Spell to Change Neck Items:", "允许装束法术更改颈部物品:"],
            ["Allow Polymorph Spell to Change Genitals:", "允许变形法术更改生殖器:"],
            ["Allow Polymorph Spell to Change Pronouns:", "允许变形法术更改代词:"],
            ["Require Whitelist:", "需要白名单:"],
            ["If checked, outfit spell effects can modify and replace your neck items.", "如果选中,装束法术效果可以修改和替换你的颈部物品."],
            ["If checked, polymorph spell effects can modify your genitals.", "如果选中,变形法术效果可以修改你的生殖器."],
            ["If checked, polymorph spell effects can modify your pronouns.", "如果选中,变形法术效果可以修改你的代词."],
            ["If checked, only people on your whitelist can cast spells on you or teach you spells.", "如果选中,只有在你的白名单上的人才能对你施放法术或教授法术."],
            ["Maximum amount of time, in minutes, you will be affected by any specific spell effects. Set to 0 for no maximum.", "你将受到特定法术效果影响的最长时间,以分钟为单位.设置为0表示没有最长时间."],
            ["If checked, you will eventually break free from a detrimental spell's effects, the time variable based on how poorly you fail an activity roll against the caster.", "如果选中,你最终会摆脱有害法术的影响,时间变量基于你在与施法者的活动检定中表现不佳的程度."],
            ["Comma separated list of member IDs. If empty will use standard Item Permissions. You will never defend against their spells.", "以逗号分隔的成员ID列表.如果为空,将使用标准的物品权限.你永远不会对他们的法术进行防御."],
            ["If checked, you will never defend against spells cast on you.", "如果选中,你将永远不会对施加在你身上的法术进行防御."],
            ["Spell Name:", "法术名称:"],
            ["Allow Potion:", "允许药水:"],
            ["None", "无"],
            ["Next", "下一个"],
            ["Previous", "上一个"],
            ["Name of your powerful spell", "你强大法术的名称"],
            ["An effect the spell has.", "法术的效果"],
            ["Allows this spell to be brewed into a crafted potion bottles/glasses/mugs using its name.", "允许将此法术酿造成使用其名称的精心制作的药水瓶/玻璃杯/马克杯."],
            ["Delete Spell No. 1", "删除法术编号 1"],
            ["Delete Spell No. 2", "删除法术编号 2"],
            ["Delete Spell No. 3", "删除法术编号 3"],
            ["Effect #1:", "效果 #1:"],
            ["Effect #2:", "效果 #2:"],
            ["Effect #3:", "效果 #3:"],
            ["Spell No. 1", "法术编号 1"],
            ["Spell No. 2", "法术编号 2"],
            ["Spell No. 3", "法术编号 3"],
            ["LSCG Remote Settings", "LSCG 远程设置"],
            ["You do not have access to her mind...", "你无法访问她的思维..."],
            ["You do not have access to her collar...", "你无法访问她的项圈..."],
            ["Section is Unavailable", "该部分不可用"],
            ["Configure", "配置"],
            ["Module is deactivated", "模块已停用"],
            ["Poses", "姿势"],
            ["~Sign Here~", "~在此签名~"],
            ["~ Any sufficiently advanced technology is indistinguishable from magic ~", "~ 任何足够先进的技术都无法与魔法区分开 ~"],
            ["* Signatory agrees to Magic™ Installation (ᴘᴀᴛ. ᴘᴇɴᴅ.) required to experience spell effects *", "签署者同意魔法™安装（专利申请中）以体验咒语效果"],
            ["Apply signature to scroll", "在卷轴上签名"],
            ["Magic", "魔法"],
            ["Cast Spell", "施放咒语"],
            ["Wild Magic", "野性魔法"],
            ["Teach Spell", "教授咒语"],
            ["Select a spell to cast...", "选择要施放的咒语..."],
            ["Asleep", "沉睡中"],
            ["Aroused", "性兴奋"],
            ["Deafened", "失聪"],
            ["Blinded", "失明"],
            ["Enlarged", "巨大化"],
            ["Petrified", "石化"],
            ["Blessed", "受祝福"],
            ["Select a paired target...", "选择一个配对的目标..."],
            ["Arousal Paired", "高潮配对"],
            ["Orgasms Siphoned", "吸取性高潮"],
            ["Baned", "被诅咒"],
            ["Paste Outfit Code:", "粘贴服装代码:"],
            ["Redressed", "更衣"],
            ["Whole Body:", "整体:"],
            ["Hair:", "头发:"],
            ["Skin/Jewelry/Makeup:", "皮肤/珠宝/化妆:"],
            ["Genitals:", "生殖器:"],
            ["Polymorphed", "变形"],
            ["Polymorph applies cosplay items from the outfit code.", "变形应用套装代码中的角色扮演道具."],
            ["Polymorph changes the target's skin.", "变形改变目标的皮肤."],
            ["Polymorph changes the target's genitals.", "变形改变目标的生殖器."],
            ["Polymorph modifies the whole body.", "变形修改整个身体."],
            ["Cosplay:", "角色装扮:"],
            ["Petrifying", "石化"],
            ["Enlarging", "增大"],
            ["Bless", "祝福"],
            ["Bane", "诅咒"],
            ["Pairing", "配对"],
            ["Siphoning", "吸取"],
            ["Blinding", "致盲"],
            ["Deafening", "耳聋"],
            ["Gagged", "口塞"],
            ["Hypnotizing", "催眠"],
            ["Slumbering", "沉睡"],
            ["Arousing", "唤起"],
            ["Outfit", "服装"],
            ["Polymorph", "变形"],
            ["Dispell", "解除"],
            ["Hypnotized", "被催眠"],

            ["Needs BC item permission", "需要BC项权限"],
            ["Enable Clothed Erection Detection:", "启用穿着勃起检测:"],
            ["If checked, you will get a private message if you can feel an erection during certain activities.", "如果选中, 您将在某些活动中感受到勃起时会收到私信."],
            ["Show whisper button on chat messages", "在聊天消息中显示密语按钮"],
            ["Adds a whisper button to chat messages, allowing you to whisper to the sender more conveniently.", "在聊天消息中添加密语按钮, 让您更方便地与发送者进行密语交流."],
            ["Control Collar", "控制项圈"],
            ["Update Collar to Current", "将项圈更新为当前"],
            ["View next items", "查看下一项"],
            ["Mode: Preview", "模式：预览"],
            ["Sold", "已售"],
            ["Mode: Shop", "模式：商店"],
            ["Player money", "玩家金钱"],
            ["Underwear", "内衣"],
            ["Nude", "裸体"],
            ["View previous items", "查看上一项"],
            ["Cosplay", "角色装扮"],



            // BCAR
            ["BCAR + Settings", ""],
            ["Current Version", ""],
            ["- BCAR+ Settings -", ""],
            ["Open Changelog", ""],
            ["Open Wiki", ""],
            ["List of all commands", ""],
            ["Ears", ""],
            ["Tails", ""],
            ["Wings", ""],
            ["Profiles", ""],
            ["Reactions", ""],
            ["Non-Binary", ""],
            ["Human", ""],
            ["Lower Right", ""],
            ["Female", ""],
            ["Lower Left", ""],
            ["Fox", ""],
            ["Upper Left", ""],
            ["Mouse", ""],
            ["Male", ""],
            ["Open BCAR+ Changelog on GitHub.", ""],
            ["Open BCAR+ Wiki on GitHub.", ""],
            ["Cat", ""],
            ["Dog", ""],
            ["- BCAR+ Commands -", ""],
            ["General Commands", ""],
            ["/bcar animalhelp - Opens animal instructions and commands page.", ""],
            ["/bcar arousalhelp - Opens arousal instructions and commands page.", ""],
            ["/bcar changelog - Shows the BCAR changelog.", ""],
            ["/bcar help - Opens the help window.", ""],
            ["/bcar status - Opens the status window.", ""],
            ["/bcar misc - Opens misc instructions and commands page.", ""],
            ["/bcar profilehelp - Opens profile instructions and commands page.", ""],
            [`/bcar male - Lets the reactions refer to the Player as "he".`, ""],
            [`/bcar female - Lets the reactions refer to the Player as "she".`, ""],
            [`/bcar other - Lets the reactions refer to the Player as "they".`, ""],
            ["/bcar timerhelp - Opens timer instructions and commands page.", ""],
            ["/bcar reset - Resets the ears, tails and wings to the default settings.", ""],
            ["/bcar versions - Shows you the version of BCAR+ you are using.", ""],
            ["Animals Commands", ""],
            ["/bcar cat - Changes the reactions and sounds to cat realted ones.", ""],
            ["/bcar dog - Changes the reactions and sounds to dog realted ones.", ""],
            ["/bcar fox - Changes the reactions and sounds to fox realted ones.", ""],
            ["/bcar human - Literally disables the reactions and sounds.", ""],
            ["/bcar mouse - Changes the reactions and sounds to mouse realted ones.", ""],
            ["Ear Commands", ""],
            ["/bcar ear1 - Saves the primary ears.", ""],
            ["/bcar ear2 - Saves the secondary ears.", ""],
            ["/bcar earwiggle - Toggles the ear wiggling on/off.", ""],
            ["/bcar earwigglecount - Determines the number of wiggles.", ""],
            ["/bcar eardelay - Determines the wiggle speed.", ""],
            ["/bcar eardelete - Removes the ears.", ""],
            ["/bcar earhelp - Opens ear instructions and commands page.", ""],
            ["Emote Commands", ""],
            ["/bcar emoteear - Toggles ear wiggle emote on/off.", ""],
            ["/bcar emotetail - Toggles tail wag emote on/off.", ""],
            ["/bcar emotehelp - Opens emote instructions and commands page.", ""],
            ["Expression Commands", ""],
            ["/bcar expression - Toggles expression on/off.", ""],
            ["/bcar expressions - Toggles expression on/off.", ""],
            ["/bcar expressionhelp - Opens expression instructions and commands page.", ""],
            ["Gender Commands", ""],
            ["Misc Commands", ""],
            ["/cum - Lets the player cum instantly.", ""],
            ["/leave - Lets the player leave the room immediately.", ""],
            ["/safewordspecific - Lets the player remove a certain restraint.", ""],
            ["/wardrobe - Opens the wardrobe of the player.", ""],
            ["Profile Commands", ""],
            ["/bcar save1 - Saves current setup in Profile1.", ""],
            ["/bcar save2 - Saves current setup in Profile2.", ""],
            ["/bcar save3 - Saves current setup in Profile3.", ""],
            ["/bcar load1 - Loads the setup saved in Profile1.", ""],
            ["/bcar load2 - Loads the setup saved in Profile2.", ""],
            ["/bcar load3 - Loads the setup saved in Profile3.", ""],
            ["/bcar profile1 - Shows which setup is saved in Profile1.", ""],
            ["/bcar profile2 - Shows which setup is saved in Profile2.", ""],
            ["/bcar profile3 - Shows which setup is saved in Profile3.", ""],
            ["Tail Commands", ""],
            ["/bcar tail1 - Saves the primary tail.", ""],
            ["/bcar tail2 - Saves the secondary tail.", ""],
            ["/bcar tailwag - Toggles the tail wagging on/off.", ""],
            ["/bcar tailwagcount - Determines the number of wags.", ""],
            ["/bcar taildelay - Determines the wag speed.", ""],
            ["/bcar taildelete - Removes the tail.", ""],
            ["/bcar tailhelp - Opens tail instructions and commands page.", ""],
            ["Timer Commands", ""],
            ["/bcar timer - Toggles the timer on/off.", ""],
            ["10/11", ""],
            ["Wing Commands", ""],
            ["/bcar wing1 - Saves the primary wings.", ""],
            ["/bcar wing2 - Saves the secondary wings.", ""],
            ["/bcar wingflap - Toggles the wing flapping on/off.", ""],
            ["/bcar wingflapcount - Determines the number of flaps.", ""],
            ["/bcar wingdelay - Determines the flap speed.", ""],
            ["/bcar wingdelete - Removes the wings.", ""],
            ["/bcar winghelp - Opens wing instructions and commands page.", ""],
            ["/bcar fly - Starts flying.", ""],
            ["/bcar land - Stops flying.", ""],
            ["- BCAR+ Ears -", ""],
            ["How To Use", ""],
            ["First equip the main ears you want", ""],
            [`to wear primarily in the "Ears" slot`, ""],
            ["in your wardrobe. Use Update Ear 1", ""],
            ["to save the main ears.", ""],
            ["For your ears to wiggle follow the same", ""],
            ["steps and equip a different type of ", ""],
            [`"Ears" to use as your secondary.`, ""],
            ["Use Update Ear 2 to save", ""],
            ["the secondary ears.", ""],
            ["The default of Wiggle Count is 12. ", ""],
            ["You can set it to an even number ", ""],
            ["between 0 and 40. ", ""],
            ["The default of Wiggle Delay is 175. ", ""],
            ["You can set it to a number ", ""],
            ["between 50 and 3000. ", ""],
            ["Update Ear 1:", ""],
            ["Update Ear 2:", ""],
            ["Enable Ear Wiggle:", ""],
            ["Wiggle Count:", ""],
            ["Wiggle Delay (ms):", ""],
            ["Clear Ears:", ""],
            ["Clear", ""],
            ["Wiggle Ears:", ""],
            ["Test", ""],
            ["Clear Ears", ""],
            ["Test Ear Wiggles", ""],
            ["Update Ear 2 to Current", ""],
            ["Update Ear 1 to Current", ""],
            ["- BCAR+ Tail -", ""],
            ["First equip the main tail you want", ""],
            [`to wear primarily in the "TailStraps"`, ""],
            ["slot in your wardrobe. Use Update Tail 1", ""],
            ["to save the main tail.", ""],
            ["For your tail to wag follow the same", ""],
            [`"Tail" to use as your secondary.`, ""],
            ["Use Update Tail 2 to save", ""],
            ["the secondary tail.", ""],
            ["The default of Wag Count is 6. ", ""],
            ["The default of Wag Delay is 800. ", ""],
            ["between 200 and 5000. ", ""],
            ["Update Tail 1:", ""],
            ["Update Tail 2:", ""],
            ["Enable Tail Wag:", ""],
            ["Wag Count:", ""],
            ["Wag Delay (ms):", ""],
            ["Clear Tail:", ""],
            ["Wag Tail:", ""],
            ["Update Tail 1 to Current", ""],
            ["Update Tail 2 to Current", ""],
            ["Test Tail Wags", ""],
            ["Clear Tail", ""],
            ["- BCAR+ Miscellaneous -", ""],
            ["Enable Animation Buttons:", ""],
            ["Enable Arousal Manipulation:", ""],
            ["Enable BCAR+ Expressions:", ""],
            ["Enable Ear Emote:", ""],
            ["Enable Tail Emote:", ""],
            ["Reset BCAR+", ""],
            ["Resets every setting to default.", ""],
            ["- BCAR+ Profiles -", ""],
            ["Profile 1:", ""],
            ["Save", ""],
            ["Profile 2:", ""],
            ["Profile 3:", ""],
            ["Save Profile 1", ""],
            ["Save Profile 2", ""],
            ["Save Profile 3", ""],
            ["Load Profile 1", ""],
            ["Load Profile 2", ""],
            ["Load Profile 3", ""],
            ["Delete Profile 3", ""],
            ["Delete Profile 2", ""],
            ["Delete Profile 1", ""],
            ["- BCAR+ Reactions -", ""],
            [`-  -`, `-  -`],
            ["", ""],
        ]);






        const translationsDTF = [
            { regex: /Failed to get role data from (.+)\. This can be caused by missing permission to interact with their items\, the user having left the room meanwhile\, or the user not having the BC tab focused\./, replacement: "无法从 $1 获取角色数据. 这可能是由于缺少与其物品交互的权限, 用户已经离开房间，或用户没有将 BC 标签页聚焦." },
            { regex: / Global\: Configuration for (.+) \-/, replacement: "- 全局: $1 的配置 -" },
            { regex: /\- Miscellaneous\: Configuration for (.+) \-/, replacement: "- 杂项: $1 的配置 -" },
            { regex: /Dear (.+),/, replacement: "亲爱的 $1," },
            { regex: / Miscellaneous\: Configuration for (.+) \-/, replacement: "- 杂项: $1 的配置 -" },
            { regex: /\- Export \/ Import of Behaviour Log \- Configuration on (.+) \-/, replacement: "- 导出/导入 行为日志 - $1 上的配置 -" },
            { regex: / Export \/ Import of BCX module configurations on (.+) \-/, replacement: "- 导出 / 导入 $1 的BCX模块配置 -" },
            { regex: / Relationships\: Custom names shown \(only\) to (.+) \-/, replacement: "- 关系: 自定义名称(仅)显示给 $1 -" },
            { regex: /\- Export \/ Import of Authority \- Permissions on (.+) \-/, replacement: "- 导出 / 导入 权限 - $1 的权限 -" },
            { regex: /\- Export \/ Import of Commands \- Limits on (.+) \-/, replacement: "- 导出 / 导入 指令 - 对 $1 的限制 - " },
            { regex: /\- Export \/ Import of Curses \- Limits on (.+) \-/, replacement: "- 导出 / 导入 诅咒 - 限制 $1 - " },
            { regex: /\- Export \/ Import of Rules \- Limits on (.+) \-/, replacement: "- 导出 / 导入 规则- $1 限制 -" },
            { regex: /\- Export \/ Import of Relationships on (.+) \-/, replacement: "- 导出 / 导入 $1 上的关系 -" },
            { regex: /\- Commands\: List all commands for (.+) \-/, replacement: "- 指令: 列出 $1 的所有指令 -" },
            { regex: / Authority\: Permission Settings for (.+) \-/, replacement: "- 权限: $1 的权限设置 -" },
            { regex: /\- Curses\: All active curses on (.+) \-/, replacement: "- 诅咒: 对$1 的所有有效诅咒 -" },
            { regex: / Behaviour Log\: Configuration for (.+) \-/, replacement: "- 行为日志: $1 的配置 -" },
            { regex: /\- Rules\: All active rules on (.+) \-/, replacement: "- 规则: $1 上的所有活动规则 -" },
            { regex: /\- Authority\: Role Management for (.+) \-/, replacement: "- 权限: $1 的角色管理 -" },
            { regex: /\- Export \/ Import of Curses on (.+) \-/, replacement: "- 导出 / 导入 $1 上的诅咒 -" },
            { regex: /\- Export \/ Import of Rules on (.+) \-/, replacement: "- 导出 / 导入 $1 的规则 -" },
            { regex: /\- Behaviour Log\: About (.+) \-/, replacement: "- 行为日志: 关于 $1 -" },
            { regex: /\- Curses\: Place new curses on (.+) \-/, replacement: "- 诅咒: 对 $1 施加新的诅咒 -" },
            { regex: /\- Rules\: Create new rules for (.+) \-/, replacement: "- 为 $1 创建新规则 -" },
            { regex: /Added by\: (.+) \((.+)\)/, replacement: "添加者: $1 ($2)" },
            { regex: /Info\: Currently set role\: Friend \→ Newly selected role\: (.+)/, replacement: "信息: 当前设置的角色: 好友 → 新选择的角色: $1" },
            { regex: /Info\: Currently set role\: Public \→ Newly selected role\: (.+)/, replacement: "信息: 当前设置的角色: 公共 → 新选择的角色: $1" },
            { regex: /Info\: Currently set role\: Whitelist \→ Newly selected role\: (.+)/, replacement: "信息: 当前设置的角色: 白名单 → 新选择的角色: $1" },
            { regex: /Info\: Currently set role\: Mistress \→ Newly selected role\: (.+)/, replacement: "信息: 当前设置的角色: 女主人 → 新选择的角色: $1" },
            { regex: /Info\: Currently set role\: Lover \→ Newly selected role\: (.+)/, replacement: "信息: 当前设置的角色: 恋人 → 新选择的角色: $1" },
            { regex: /Info\: Currently set role\: Owner \→ Newly selected role\: (.+)/, replacement: "信息: 当前设置的角色: 所有者 → 新选择的角色: $1" },
            { regex: /Info\: Currently set role\: Clubowner \→ Newly selected role\: (.+)/, replacement: "信息: 当前设置的角色: 俱乐部主人 → 新选择的角色: $1" },
            { regex: /Info\: Currently set role\: (.+) \→ Newly selected role\: (.+)/, replacement: "信息: 当前设置的角色: $1 → 新选择的角色: $1" },
            { regex: /Info\: Currently set role\: (.+) \→ Newly selected role\: Clubowner/, replacement: "信息: 当前设置的角色: $1 → 新选择的角色: 俱乐部主人" },
            { regex: /Info\: Currently set role\: (.+) \→ Newly selected role\: Owner/, replacement: "信息: 当前设置的角色: $1 → 新选择的角色: 所有者" },
            { regex: /Info\: Currently set role\: (.+) \→ Newly selected role\: Lover/, replacement: "信息: 当前设置的角色: $1 → 新选择的角色: 恋人" },
            { regex: /Info\: Currently set role\: (.+) \→ Newly selected role\: Mistress/, replacement: "信息: 当前设置的角色: $1 → 新选择的角色: 女主人" },
            { regex: /Info\: Currently set role\: (.+) \→ Newly selected role\: Whitelist/, replacement: "信息: 当前设置的角色: $1 → 新选择的角色: 白名单" },
            { regex: /Info\: Currently set role\: (.+) \→ Newly selected role\: Friend/, replacement: "信息: 当前设置的角色: $1 → 新选择的角色: 好友" },
            { regex: /Info\: Currently set role\: (.+) \→ Newly selected role\: Public/, replacement: "信息: 当前设置的角色: $1 → 新选择的角色: 公共" },
            { regex: /Forbid using remotes on self \((.+) using one on (.+)\)/, replacement: "禁止自我使用遥控器($1 在 $2身上使用)" },
            { regex: /Forbid using keys on self \((.+) using one on (.+)\)/, replacement: "禁止自我使用钥匙($1 在 $2身上使用)" },
            { regex: /Forbid picking locks on self \((.+) picking one on (.+)\)/, replacement: "禁止自我撬锁($1 在 $2身上使用)" },
            { regex: /Forbid using locks on self \((.+) using one on (.+)\)/, replacement: "禁止自我使用锁($1 在 $2身上使用)" },
            { regex: /Forbid wardrobe use on self \((.+) using (.+)'s wardrobe\)/, replacement: "禁止自我使用衣柜($1 使用 $2 的衣柜)" },
            { regex: /Forbid freeing self \((.+) removing any items from (.+)'s body\)/, replacement: "禁止解救自己($1 从 $2 身上移除任何物品)" },
            { regex: /Prevent using BCX permissions \((.+) using her permissions for her own BCX\, with some exceptions\)/, replacement: "禁止使用BCX权限($1 使用她自己BCX的权限,有一些例外)" },
            { regex: /Prevent changing own emoticon \(for just (.+)\)/, replacement: "防止更改自己的表情符号(仅限 $1)" },
            { regex: /Force\-hide UI elements \(e\.g\.\, icons\, bars\, or names\)/, replacement: "强制隐藏UI元素(例如图标、条形、或名称)" },
            { regex: /Sensory deprivation\: Sound \(impacts (.+)'s hearing\; adjustable\)/, replacement: "感官剥夺: 听觉(影响 $1 的听觉；可调节)" },
            { regex: /Hearing whitelist \(of members whom (.+) can always understand\)/, replacement: "听觉白名单($1 始终能够理解的成员)" },
            { regex: /Sensory deprivation: Sight \(impacts (.+)'s sight\; adjustable\)/, replacement: "感官剥夺: 视觉(影响 $1 的视觉；可调节)" },
            { regex: /Seeing whitelist \(of members whom (.+) can always see\)/, replacement: "视觉白名单($1 始终能够看到的成员)" },
            { regex: /Control profile online description \(directly sets (.+)'s description\)/, replacement: "控制在线描述资料(直接设置 $1 的描述)" },
            { regex: /Control nickname \(directly sets (.+)'s nickname\)/, replacement: "控制昵称(直接设置 $1 的昵称)" },
            { regex: /Ready to be summoned \(leash (.+) from anywhere using a beep with message\)/, replacement: "准备被召唤(随时随地使用蜂鸣消息牵引 $1 )" },
            { regex: /Allow changing the whole appearance \(of (.+) - for the defined roles\)/, replacement: "允许更改整体外观(对于定义的角色更改 $1 的外观)" },
            { regex: /Enforce faltering speech \(an enhanced studder effect is added to (.+)'s chat texts\)/, replacement: "强制结巴的言语(对 $1 的聊天文本添加了增强的结巴效果)" },
            { regex: /Force garbled speech \(force (.+) to talk as if they were gagged\)/, replacement: "强制混乱言语(强制 $1 说话,就像他们被堵住一样" },
            { regex: /Forbid going afk \(logs whenever (.+) is inactive\)/, replacement: "禁止挂机(记录 $1 无操作时)" },
            { regex: /Track rule effect time \(counts the time this rule's trigger conditions were fulfilled\)/, replacement: "追踪规则生效时间(计算此规则的触发条件得到满足的时间)" },
            { regex: /Listen to my voice \(regularly show configurable sentences to (.+)\)/, replacement: "倾听我的声音(定期向 $1 展示可配置的句子)" },
            { regex: /Track BCX activation \(logs if (.+) enters the club without BCX\)/, replacement: "追踪BCX激活情况(如果 $1 在没有BCX的情况下进入俱乐部,则记录)" },
            { regex: /Eyes \(Control (.+)'s eyes\)/, replacement: "眼睛 (控制 $1 的眼睛)" },
            { regex: /Mouth \(Control (.+)'s mouth\)/, replacement: "嘴巴 (控制 $1 的嘴巴)" },
            { regex: /Arms \(Control (.+)'s arm poses\)/, replacement: "手臂 (控制 $1 的手臂姿势)" },
            { regex: /Legs \(Control (.+)'s leg poses\)/, replacement: "腿 (控制 $1 的腿部姿势)" },
            { regex: /Allfours \(Make (.+) get on all fours\)/, replacement: "四肢着地 (让 $1 四肢着地)" },
            { regex: /Go and wait \(Makes (.+) leave and wait in another chat room\.\)/, replacement: "前去等待 (让 $1 离开并在另一个聊天室等待)" },
            { regex: /Send to cell \(Lock (.+) in a singleplayer isolation cell\)/, replacement: "送到监狱 (锁定 $1 在单人隔离监狱中)" },
            { regex: /Send to asylum \(Lock (.+) into the asylum\)/, replacement: "送入收容所 (锁定 $1 进入收容所)" },
            { regex: /Deposit all keys \(Store away (.+)\'s keys\)/, replacement: "存放所有钥匙 (存放 $1 的所有钥匙)" },
            { regex: /Show remaining time \(Remaining time of keyhold\, asylum stay\, or GGTS training\)/, replacement: "显示剩余时间 (持钥匙时间、收容所逗留时间或 GGTS 训练)" },
            { regex: /Send to serve drinks \(Force (.+) to do bound maid work\)/, replacement: "发送去送饮料 (强制 $1 做女仆工作)" },
            { regex: /Manipulate the arousal meter \(Controls (.+)\'s orgasms directly\)/, replacement: "操控欲望仪表 (直接控制 $1 的高潮)" },
            { regex: /Emoticon \(Control (.+)\'s emoticon\)/, replacement: "表情符号 (控制 $1 的表情符号)" },
            { regex: /Forced say \(Makes (.+) instantly say the text\)/, replacement: "强制说话 (使 $1 立即说出文本)" },
            { regex: /Say \(Blocks (.+) until she typed the text\)/, replacement: "说话 (阻止 $1 直到她输入文本)" },
            { regex: /Typing task \(Orders (.+) to type a text several times or until she makes a mistake\)/, replacement: "打字任务 (命令 $1 多次输入文本或直到她犯错)" },
            { regex: /Forced typing task \(Orders (.+) to type a text a set number of times\)/, replacement: "强制打字任务 (命令 $1 输入固定次数的文本)" },
            { regex: /This rule prevents (.+) from adding characters with the set minimum role or a higher one to their bondage club blacklist and ghostlist\./, replacement: "此规则防止 $1 将设置的最低角色或更高角色的角色添加到她的束缚俱乐部黑名单和幽灵列表中." },
            { regex: /This rule prevents (.+) from adding characters with a role lower than a BCX Mistress to their bondage club whitelist\./, replacement: "此规则防止 $1 将低于 BCX Mistress 的角色的角色添加到她的绑缚俱乐部白名单中." },
            { regex: /This rule forbids (.+) to use any kind of lock on her own body. \(Others still can add locks on her items normally\)/, replacement: "此规则禁止 $1 在自己的身体上使用任何类型的锁. (其他人仍然可以正常在她的物品上添加锁)" },
            { regex: /This rule forbids (.+) to use the wardrobe of other club members\./, replacement: "此规则禁$1 使用其他俱乐部成员的衣柜." },
            { regex: /This rule forbids (.+) to create new rooms\./, replacement: "此规则禁$1 创建新房间." },
            { regex: /This rule forbids (.+) to use or trigger a vibrator or similar remote controlled item on other club members\./, replacement: "此规则禁止 $1 在其他俱乐部成员身上使用或触发振动器或类似的远程控制物品." },
            { regex: /This rule forbids (.+) to unlock any locked item on other club members\, with options to still allow unlocking of owner and\/or lover locks and items\. Note\: Despite the name\, this rule also blocks unlocking locks that don\'t require a key \(e\.g\. exclusive lock\)\. However\, locks that can be unlocked in other ways \(timer locks by removing time\, code\/password locks by entering correct code\) can still be unlocked by (.+)\./, replacement: "此规则禁 $1 解锁其他俱乐部成员的任何上锁物品, 选项允许仍然解锁所有者和/或情人的锁和物品.注意: 尽管名称如此, 此规则还会阻止解锁不需要钥匙的锁(例如, 专属锁).但是, 可以通过其他方式解锁的锁(通过减少时间的定时器锁, 通过输入正确代码解锁的代码 / 密码锁)仍然可以由 $2 解锁." },
            { regex: /This rule forbids (.+) to lockpick any locked items on other club members\./, replacement: "此规则禁$1 对其他俱乐部成员的任何上锁物品进行撬锁." },
            { regex: /This rule shows the amount of time that (.+) spent \(online\) in the club\, since the rule was added\, while all of the rule\'s trigger conditions were fulfilled\. So it can for instance log the time spent in public rooms \/ in the club in general, or in a specific room or with some person as part of a roleplayed task or order\. The currently tracked time can be inquired by whispering \'\!ruletime\' to (.+)\. To reset the counter\, remove and add the rule again\./, replacement: "此规则显示了自规则添加以来 $1 在俱乐部度过的(在线)时间, 同时满足了所有规则的触发条件. 因此, 它可以记录在公共房间/俱乐部中总共度过的时间, 或在特定房间或与某人一起作为角色扮演任务或命令的一部分中度过的时间. 通过私聊 '!ruletime' 给 $2 可以查询当前跟踪的时间. 要重置计数器, 请删除并再次添加规则." },
            { regex: /This rule logs whenever money is used to buy something. It also shows how much money (.+) currently has in the log entry\. Optionally\, earning money can also be logged\. Note\: Please be aware that this last option can potentially fill the whole behaviour log rapidly\./, replacement: "此规则记录每当金钱用于购买物品时. 日志条目还显示 (.+) 当前在日志中的金钱金额. 可以选择记录赚钱的情况. 注意: 请注意, 最后一个选项可能会迅速填满整个行为日志." },
            { regex: /This rule forbids (.+) to use or trigger a vibrator or similar remote controlled item on her own body\. \(Others still can use remotes on her\)/, replacement: "此规则禁$1 对自己的身体使用或触发振动器或类似的远程控制物品. (其他人仍然可以在她身上使用遥控器)" },
            { regex: /This rule forbids (.+) to unlock any locked item on her own body\. Note\: Despite the name\, this rule also blocks unlocking locks that don\'t require a key \(e\.g\. exclusive lock\)\. However\, locks that can be unlocked in other ways \(timer locks by removing time\, code\/password locks by entering correct code\) can still be unlocked by (.+)\. Others can still unlock her items on her normally\./, replacement: "此规则禁 $1 解锁自己身体上的任何上锁物品. 注意: 尽管名称如此, 此规则还会阻止解锁不需要钥匙的锁(例如, 专属锁). 但是, 可以通过其他方式解锁的锁(通过减少时间的定时器锁, 通过输入正确代码解锁的代码 / 密码锁)仍然可以由 $2 解锁. 其他人仍然可以正常解锁她身上的物品." },
            { regex: /This rule forbids (.+) to lockpick any locked items on her own body\. \(Others still can pick locks on her normally\)/, replacement: "此规则禁 $1 在自己的身体上撬任何上锁物品. (其他人仍然可以正常撬她的锁)" },
            { regex: /This rule forbids (.+) to use any kind of lock on other club members\./, replacement: "此规则禁 $1 在其他俱乐部成员身上使用任何类型的锁." },
            { regex: /This rule forbids (.+) to access her own wardrobe\. \(Others still can change her clothes normally\)/, replacement: "此规则禁 $1 访问自己的衣柜. (其他人仍然可以正常更改她的衣服)" },
            { regex: /Allows to restrict the body poses (.+) is able to get into by herself\./, replacement: "允许限制 $1 可以自行摆出的身体姿势." },
            { regex: /This rule forbids (.+) access to some parts of their own BCX they have permission to use\, making it as if they do not have \'self access\' \(see BCX tutorial on permission system\) while the rule is active\. This rule still leaves access for all permissions where the lowest permitted role \(\'lowest access\'\) is also set to (.+) \(to prevent getting stuck\)\. This rule does not affect (.+)\'s permissions to use another users\'s BCX\./, replacement: "此规则禁 $1 访问她们有权限使用的自己的 BCX 的某些部分, 使其好像在规则激活时没有 'self access'(请参阅 BCX 权限系统上的教程). 该规则仍然保留了所有最低允许角色('lowest access')也设置为 $2 的权限访问(以防止被困住). 此规则不影响 $3 对其他用户的 BCX 的使用权限." },
            { regex: /This rule forbids (.+) to use a maid's help to get out of restraints in the club\'s main hall\. Recommended to combine with the rule\: \'Force \'Cannot enter single\-player rooms when restrained\' \(Existing BC setting\)\' to prevent NPCs in other rooms from helping\./, replacement: "此规则禁$1 在俱乐部的主大厅中使用女仆的帮助来解开约束. 建议与规则结合使用: '强制'被约束时无法进入单人房间''(现有的 BC 设置)', 以防止其他房间的 NPC 提供帮助." },
            { regex: /This rule forbids (.+) to change her Bondage Club multiplayer difficulty, regardless of the current value\./, replacement: "此规则禁 $1 更改她的 Bondage Club 多人游戏难度, 无论当前值如何." },
            { regex: /This rule forbids (.+) to use the antiblind command\. Antiblind is a BCX feature that enables a BCX user to see the whole chat room and all other characters at all times\, even when wearing a blinding item\. If (.+) should be forbidden to use the command\, this rule should be used\./, replacement: "此规则禁 $1 使用 antiblind 命令. Antiblind 是 BCX 的一个功能, 它使 BCX 用户能够在任何时候看到整个聊天室和所有其他角色, 即使佩戴蒙眼物品. 如果 $2 被禁止使用该命令, 应使用此规则." },
            { regex: /This rule forbids (.+) to use any items on other characters\. Can be set to only affect using items on characters with a higher dominant \/ lower submissive score than (.+) has\./, replacement: "此规则禁 $1 在其他角色身上使用任何物品. 可以设置为仅在 $2 的主导/从属得分高于/低于的角色身上使用." },
            { regex: /This rule forbids (.+) to remove any items from her own body\. Other people can still remove them\. The rule has a toggle to optionally still allow to remove items which were given a low difficulty score by the original asset maker\, such as hand\-held items\, plushies\, etc\. This means that custom crafted properties given to an item such as \'decoy\' are not factored in\./, replacement: "此规则禁 $1 从自己的身体上取下任何物品. 其他人仍然可以取下它们. 该规则具有一个切换按钮, 可以选择仍然允许取下原始资产制作者给予低难度评分的物品, 例如手持物品、毛绒玩具等. 这意味着赋予物品的自定义属性(例如“诱饵”)并未计入其中." },
            { regex: /This rule prevents (.+) from leaving the room they are currently inside while at least one character with the set minimum role or a higher one is present inside\. NOTE\: Careful when setting the minimum role too low\. If it is set to public for instance\, it would mean that (.+) can only leave the room when they are alone in it\./, replacement: "此规则阻 $1 在当前有至少一个设置的最小角色或更高角色的角色在内时离开所在的房间. 注意: 在设置最小角色时要小心. 例如, 如果设置为 public, 那么 $2 只能在房间内独自一人时离开." },
            { regex: /This rule sets (.+)\'s online description \(in her profile\) to any text entered in the rule config\, blocking changes to it\. Warning\: This rule is editing the actual profile text\. This means that after saving a changed text, the original text is lost\!/, replacement: "此规则将 $1 的在线描述(在她的个人资料中)设置为在规则配置中输入的任何文本, 阻止对其进行更改. 警告: 此规则正在编辑实际的个人资料文本. 这意味着在保存更改的文本后, 原始文本将丢失!" },
            { regex: /This rule forbids (.+) to do any room admin actions \(except for kick\/ban\)\, when she is restrained\.Note\: This rule does not affect an admin\'s ability to bypass locked rooms\, if restraints allow it\. Tip\: This rule can be combined with the rule 'Force \´Return to chatrooms on relog\´' to trap (.+) in it\./, replacement: "此规则禁 $1 在被拘束时执行任何房间管理员操作(除了踢出/封禁). 注意: 此规则不影响管理员通过锁定的房间的能力, 如果拘束允许的话. 提示: 此规则可以与规则 强制'重新登录时返回聊天室' 结合使用, 以将 $2 困在其中." },
            { regex: /This rule prevents (.+) from seeing their own arousal meter\, even while it is active and working\. This means\, that it is a surprise to them\, when the orgasm \(quick\-time event\) happens. Does not effect other characters being able to see the meter\, if club settings allow that\./, replacement: "此规则阻 $1 查看自己的性唤起仪表, 即使它处于活动和工作状态. 这意味着对于她来说, 当性高潮(快感事件)发生时, 这将是一个惊喜. 如果俱乐部设置允许, 不影响其他角色能够看到仪表." },
            { regex: /This rule impacts (.+)\'s ability to control their orgasms\, independent of items\. There are three control options\, which are\: Never cum \(always edge, the bar never reaches 100\%\)\, force into ruined orgasm \(orgasm screen starts, but doesn't let her actually cum\) and prevent resisting orgasm \(able to enter orgasm screen, but unable to resist it\)\./, replacement: "此规则影响 $1 控制她的性高潮的能力, 独立于物品. 有三个控制选项, 它们分别是: 永不高潮(始终边缘, 条形永远不达到100 %), 强迫进入毁坏的高潮(高潮画面开始, 但不让她真正高潮) 和 防止抵抗高潮(能够进入高潮画面, 但无法抵抗它)." },
            { regex: /This rule forces (.+) to always leave the room slowly\, independent of the items she is wearing\. WARNING\: Due to limitation in Bondage Club itself\, only BCX users will be able to stop (.+) from leaving the room\. This rule will ignore BC\'s roleplay difficulty setting \'Cannot be slowed down\' and slow down (.+) regardless\!/, replacement: "此规则强制 $1 总是缓慢离开房间, 与她穿戴的物品无关. 警告: 由于 Bondage Club 本身的限制, 只有BCX用户才能阻 $2 离开房间. 此规则将忽略BC的角色扮演难度设置 '无法减速', 并且无论如何都会减缓 $3!" },
            { regex: /This rule enforces full blindness when wearing any item that limits sight in any way\. \(This rules does NOT respect Light sensory deprivation setting and always forces player to be fully blind\. The crafting property \'thin\' is not factored in either due to technical limitations\. \)/, replacement: "此规则在佩戴任何以任何方式限制视力的物品时强制完全失明.  (该规则不考虑轻度感官剥夺设置, 始终强制玩家完全失明. 由于技术限制, 制作属性 '薄' 也未考虑在内.)" },
            { regex: /This rule forbids (.+) from opening the room admin screen while blindfolded\, as this discloses the room background and the member numbers of admins\, potentially in the room right now\. If (.+) is a room admin, she can still use chat commands for altering the room or kicking\/banning\./, replacement: "此规则禁 $1 在被蒙眼的情况下打开房间管理界面, 这会显示房间背景和管理员的会员编号, 可能就在当前房间. 如果 $2 是房间管理员, 她仍然可以使用聊天命令来更改房间或 踢出/封禁." },
            { regex: /This rule enforces hiding of certain UI elements for (.+) over all characters inside the room\. Different levels of the effect can be set which follow exactly the behavior of the \'eye\'\-toggle in the button row above the chat\. There is also an option to hide emoticon bubbles over all characters\' heads\./, replacement: "此规则强制隐藏 $1 在房间内所有角色的某些UI元素. 可以设置不同级别的效果, 完全遵循上方聊天框上方的 '眼睛' 切换按钮的行为. 还有一个选项, 可以隐藏所有角色头上的表情气泡." },
            { regex: /This rule impacts (.+)\'s natural ability to hear in the same way items do\, independent of them \(strength of deafening can be adjusted\)\./, replacement: "此规则影响 $1 对声音的自然感知方式, 独立于物品(可以调整失聪的强度)." },
            { regex: /This rule defines a list of members whose voice can always be understood by (.+) \- independent of any sensory deprivation items or hearing impairing BCX rules on (.+)\. There is an additional option to toggle whether (.+) can still understand a white\-listed member\'s voice if that member is speech impaired herself \(e\.g\. by being gagged\)\./, replacement: "此规则定义了一个成员列表, $1 始终可以听懂这些成员的声音 - 与 $2 身上的任何感官剥夺物品或听力受损的 BCX 规则无关. 还有一个额外的选项, 可以切换是否 $3 仍然能听懂一个被列入白名单的成员的声音, 即使该成员本身有言语障碍(例如被口球堵住)." },
            { regex: /This rule impacts (.+)\'s natural ability to see in the same way items do\, independent of them \(strength of blindness can be adjusted\)\./, replacement: "此规则影响 $1 对视觉的自然感知方式, 独立于物品(可以调整失明的强度)." },
            { regex: /This rule defines a list of members whose appearance can always be seen normally by (.+) \- independent of any blinding items or seeing impairing BCX rules on (.+)\./, replacement: "此规则定义了一个成员列表, $1 始终可以正常看到这些成员的外观 - 与 $2 身上的任何蒙眼物品或视觉受损的 BCX 规则无关." },
            { regex: /This rule enforces full blindness when the eyes are closed\. \(Light sensory deprivation setting is still respected and doesn\'t blind fully\)/, replacement: "此规则在闭眼时强制完全失明. (仍然尊重光感剥夺设置, 不会完全失明)" },
            { regex: /This rule forces (.+)\'s base game setting \'Return to chatrooms on relog\' to configurable value and prevents her from changing it\./, replacement: "此规则将 $1 的基础游戏设置'重新登录时返回聊天室'强制设置为可配置的值, 并防止她更改它." },
            { regex: /This rule forces (.+)\'s base game or BCX setting \'Keep all restraints when relogging\' to the configured value and prevents her from changing it\. There is also an option to restore the setting to the state it was in before the rule changed it\. The restoration happens either when the rule becomes inactive \(for instance through toggle or unfulfilled trigger conditions\) or when it is removed\./, replacement: "此规则将 $1 的基础游戏或 BCX 设置“重新登录时保留所有约束”强制设置为配置的值, 并防止她更改它. 还有一个选项, 可以将设置恢复到规则更改之前的状态.  恢复发生在规则变得不活跃时(例如通过切换或不满足的触发条件)或在删除规则时." },
            { regex: /This rule forces (.+)\'s base game or BCX setting \'Garble chatroom names and descriptions while blind\' to the configured value and prevents her from changing it\. There is also an option to restore the setting to the state it was in before the rule changed it\. The restoration happens either when the rule becomes inactive \(for instance through toggle or unfulfilled trigger conditions\) or when it is removed\./, replacement: "此规则将 $1 的基础游戏或 BCX 设置“在失明时混淆聊天室名称和描述”强制设置为可配置的值, 并防止她更改它. 还有一个选项, 可以将设置恢复到规则更改之前的状态.  恢复发生在规则变得不活跃时(例如通过切换或不满足的触发条件)或在删除规则时." },
            { regex: /This rule forces (.+)\'s base game setting \'Sensory deprivation setting\' to configurable value and prevents her from changing it\./, replacement: "此规则将 $1 的基础游戏设置“感官剥夺设置”强制设置为可配置的值, 并防止她更改它." },
            { regex: /This rule forces (.+)\'s base game or BCX setting \'Prevent others from changing cosplay items\' to the configured value and prevents her from changing it\. There is also an option to restore the setting to the state it was in before the rule changed it\. The restoration happens either when the rule becomes inactive \(for instance through toggle or unfulfilled trigger conditions\) or when it is removed\./, replacement: "此规则将 $1 的基础游戏或 BCX 设置“防止其他人更改角色扮演服饰项目”强制设置为可配置的值, 并防止她更改它. 还有一个选项, 可以将设置恢复到规则更改之前的状态.  恢复发生在规则变得不活跃时(例如通过切换或不满足的触发条件)或在删除规则时." },
            { regex: /This rule forces (.+)\'s base game or BCX setting \'Allow safeword use\' to the configured value and prevents her from changing it\. There is also an option to restore the setting to the state it was in before the rule changed it\. The restoration happens either when the rule becomes inactive \(for instance through toggle or unfulfilled trigger conditions\) or when it is removed\./, replacement: "此规则将 $1 的基础游戏或 BCX 设置“允许使用安全词”强制设置为可配置的值, 并防止她更改它. 还有一个选项, 可以将设置恢复到规则更改之前的状态.  恢复发生在规则变得不活跃时(例如通过切换或不满足的触发条件)或在删除规则时." },
            { regex: /This rule forces (.+)\'s base game or BCX setting \'Cannot enter single\-player rooms when restrained\' to the configured value and prevents her from changing it\. There is also an option to restore the setting to the state it was in before the rule changed it\. The restoration happens either when the rule becomes inactive \(for instance through toggle or unfulfilled trigger conditions\) or when it is removed\./, replacement: "此规则将 $1 的基础游戏或 BCX 设置“受限时不能进入单人房间”强制设置为可配置的值, 并防止她更改它. 还有一个选项, 可以将设置恢复到规则更改之前的状态.  恢复发生在规则变得不活跃时(例如通过切换或不满足的触发条件)或在删除规则时." },
            { regex: /This rule sets (.+)\'s nickname \(replacing her name in most cases\) to any text entered in the rule config\, blocking changes to it from BC's nickname menu\. You can optionally choose whether the previous BC nickname will be restored while the rule is not in effect\./, replacement: "此规则将 $1 的昵称(在大多数情况下替换她的名字)设置为规则配置中输入的任何文本, 阻止 BC 的昵称菜单更改它. 您还可以选择在规则不生效时是否恢复先前的 BC 昵称." },
            { regex: /This rule forces (.+) to constantly participate in the kidnappers league\'s suitcase delivery task\, by automatically giving her a new suitcase\, whenever the suitcase item slot is empty\./, replacement: "此规则强制 $1 不断参与绑匪联盟的手提箱交付任务, 每当手提箱物品槽为空时, 就会自动给她一个新的手提箱." },
            { regex: /This rule only allows selected roles to leash (.+)\, responding with a message about unsuccessful leashing to others when they attempt to do so\./, replacement: "此规则只允许选定的角色拴住 $1, 在其他人尝试时向他们回复关于无法拴住的消息." },
            { regex: /This rule hides persons on (.+)\'s friend list when she is fully blinded\, which also makes sending beeps impossible\. Received beeps can still be answered\. The rule allows to manage a list of members who can be seen normally\./, replacement: "此规则在 $1 完全失明时隐藏她的好友列表上的人物, 这也使得发送哔声成为不可能. 仍然可以回答接收到的哔声. 规则允许管理一个可以正常看到的成员列表." },
            { regex: /This rule lets you define a minimum role which \(and all higher roles\) has permission to fully change the whole appearance of (.+) \(body and cosplay items\)\, ignoring the settings of the BC online preferences \'Allow others to alter your whole appearance\' and \'Prevent others from changing cosplay items\'\. So this rule can define a group of people which is allowed\, while everyone else is not\. IMPORTANT\: Only other BCX users will be able to change (.+)\'s appearance if this rule allows them to\, while the BC settings would forbid them to\./, replacement: "此规则允许您定义一个最低角色, 该角色(及所有更高的角色)具有完全更改 $1 整体外观的权限(包括身体和cosplay物品), 而不考虑 BC 在线首选项 '允许他人更改你的整体外观' 和 '阻止他人更改cosplay物品' 的设置. 因此, 此规则可以定义一个被允许的人群, 而其他所有人则不允许. 重要提示: 只有其他 BCX 用户可以在此规则允许的情况下更改 $2 的外观, 而 BC 设置会禁止他们这样做." },
            { regex: /This rule forces (.+)\'s base game or BCX setting \'Locks on you can\'t be picked\' to the configured value and prevents her from changing it\. There is also an option to restore the setting to the state it was in before the rule changed it\. The restoration happens either when the rule becomes inactive \(for instance through toggle or unfulfilled trigger conditions\) or when it is removed\./, replacement: "此规则强制 $1 的基础游戏或 BCX 设置 '锁定在你身上不能被撬开' 为配置的值, 并防止她更改它. 还有一个选项, 可以将设置恢复到规则更改之前的状态. 恢复发生在规则变为非活动状态时(例如通过切换或不符合触发条件)或被移除时." },
            { regex: /This rule observes (.+)\, logging it as a rule violation if the club was previously entered at least once without BCX active\./, replacement: "此规则观察 $1, 如果至少有一次在未激活 BCX 的情况下进入俱乐部, 则将其记录为违规." },
            { regex: /This rule reminds or tells (.+) one of the recorded sentences at random in a settable interval\. Only (.+) can see the set message and it is only shown if in a chat room\./, replacement: "此规则以可设置的间隔随机提醒或告诉 $1 记录的一条句子. 只有 $2 能看到设置的消息, 并且只在聊天室中显示." },
            { regex: /This rule gives (.+) ability to understand parts of a muffled sentence ungarbled\, based on a white list of words and\/or randomly\. On default\, applies only to muffled hearing from deafening effects on (.+)\, but optionally can be enhanced to allow also partially understanding the muffled speech of other persons who are speech impaired\. Doesn\'t affect emotes and OOC text\./, replacement: "此规则赋予 $1 以能够理解部分被压制的句子的能力, 基于一个白名单词汇和/或随机选择. 默认情况下, 仅适用于 $2 受到压制效果而听力受损的情况, 但可选择增强以允许部分理解其他言语受损的人的压抑语音. 不影响表情和 OOC 文本." },
            { regex: /This rule forbids (.+) to use the antigarble command\. Antigarble is a BCX feature that enables a BCX user to understand muffled voices from other gagged characters or when wearing a deafening item\. If (.+) should be forbidden to use the command\, this rule should be used\./, replacement: "此规则禁 $1 使用 antigarble 命令. Antigarble 是 BCX 的一项功能, 允许 BCX 用户在其他被塞口球的角色或佩戴耳聋物品时理解压制的声音. 如果不允许 $2 使用该命令, 应使用此规则." },
            { regex: /This rule forbids (.+) to send an emote \(with \* or \/me\) to all people inside a chat room\./, replacement: "此规则禁 $1 向聊天室内的所有人发送表情符号(使用 * 或 /me)." },
            { regex: /This rule forbids (.+) to leave their current club owner or get a new one\. Advancing ownership from trial to full ownership is unaffected. Doesn\'t prevent the club owner from releasing her\./, replacement: "此规则禁 $1 离开她当前的俱乐部所有者或寻找新的. 从试用到完整所有权的提升不受影响. 不阻止俱乐部所有者解救她." },
            { regex: /This rule forbids (.+) to get a new lover. Advancing lovership from dating to engagement or from engagement to marriage is unaffected\./, replacement: "此规则禁 $1 找到新的恋人. 从约会到订婚或从订婚到结婚的提升不受影响." },
            { regex: /This rule allows (.+) to only communicate using a list of specific sound patterns in chat messages and whispers. These patterns cannot be mixed in the same message, though\. Only one sound from the list per message is valid\. That said, any variation of a sound in the list is allowed as long as the letters are in order\. \(Example\: if the set sound is \'Meow\'\, then this is a valid message\: \'Me\.\.ow\? meeeow\! mmeooowwwwwww\?\! meow\. me\.\. oo\.\.w \~\'\)/, replacement: "此规则允许 $1 仅使用聊天消息和私语中的特定声音模式进行通信. 但这些模式不能在同一条消息中混合. 每条消息只能包含列表中的一个声音. 也就是说, 只有一个声音是有效的. 换句话说, 只要字母是按顺序的, 列表中声音的任何变体都是允许的.  (例如: 如果设置的声音是 'Meow', 那么以下是有效的消息: 'Me..ow? meeeow! mmeooowwwwwww?! meow. me.. oo..w ~')" },
            { regex: /This rule alters (.+)\'s outgoing whisper messages while gagged to be garbled the same way normal chat messages are. This means\, that strength of the effect depends on the type of gag and \(OOC text\) is not affected\. Note\: While the rule is in effect\, the BC immersion preference \'Prevent OOC \& whispers while gagged\' is altered\, to allow gagged whispers\, since those are now garbled by the rule\. OOC prevention is not changed\./, replacement: "此规则更改 $1 在被口球时发出的私语消息, 使其与正常聊天消息一样被压制. 这意味着效果的强度取决于口球的类型, 而(OOC 文本)不受影响. 注意: 在规则生效期间, BC 沉浸偏好 'Prevent OOC & whispers while gagged' 会发生变化, 以允许被压制的私语, 这些现在由规则压制. OOC 防护没有改变." },
            { regex: /This rule forbids (.+) to use OOC \(messages between round brackets\) in chat or OOC whisper messages at any moment\. This is a very extreme rule and should be used with great caution\!/, replacement: "此规则禁 $1 在任何时候在聊天中使用 OOC(圆括号之间的消息). 这是一个非常极端的规则, 应谨慎使用!" },
            { regex: /This rule forbids (.+) to use certain words in the chat\. The list of banned words can be configured\. Checks are not case sensitive \(forbidding \'no\' also forbids \'NO\' and \'No\'\)\. Doesn\'t affect emotes and OOC text\, but does affect whispers\./, replacement: "此规则禁 $1 在聊天中使用特定的单词. 禁用单词的列表可以进行配置. 检查不区分大小写(禁用 'no' 也会禁用 'NO' 和 'No'). 不影响表情和 OOC 文本, 但会影响私语." },
            { regex: /This rule forbids (.+) to send a message to all people inside a chat room\. Does not affect whispers or emotes\, but does affect OOC\./, replacement: "此规则禁 $1 向聊天室内的所有人发送消息. 不影响私语或表情, 但会影响 OOC." },
            { regex: /(.+) can only say the custom name/, replacement: "$1 只能说出定制名称" },
            { regex: /This rule can set the time (.+) needs to leave the current room\, when items or a rule force her to leave it slowly\. The time can be set between 1 and 600 seconds \(10 mins\)\./, replacement: "此规则可以设置 $1 在被物品或规则迫使她慢慢离开当前房间时需要的时间. 时间可以在 1 到 600 秒(10 分钟)之间设置." },
            { regex: /This rule forces (.+) to switch rooms from anywhere in the club to the chat room of the summoner after 15 seconds\. It works by sending a beep message with the set text or simply the word \'summon\' to (.+)\. Members who are allowed to summon (.+) can be set\. NOTES\: (.+) can always be summoned no matter if she has a leash or is prevented from leaving the room \(ignoring restraints or locked rooms\)\. However\, if the target room is full or locked\, she will end up in the lobby\. Summoning will not work if the room name is not included with the beep message\!/, replacement: "此规则强制 $1 从俱乐部的任何地方切换到召唤者的聊天室, 时间为 15 秒. 它通过向 $2 发送一个带有设置文本或简单地包含单词 '召唤' 的蜂鸣消息来工作. 允许召唤 $3 的成员可以被设置. 注: 无论 $4 是否被束缚或禁止离开房间(忽略限制或锁定的房间), 她总是可以被召唤的. 但是, 如果目标房间已满或已锁定, 她将会进入大堂. 如果蜂鸣消息中不包含房间名, 召唤将无效!" },
            { regex: /This rule forbids (.+) to enter all rooms, that are not on an editable whitelist of still allowed ones\. NOTE\: As safety measure this rule is not in effect while the list is empty\. TIP\: This rule can be combined with the rule \"Forbid creating new rooms\"\./, replacement: "此规则禁 $1 进入未在可编辑的白名单上的所有房间. 注意: 作为安全措施, 此规则在列表为空时不生效. 提示: 此规则可以与规则 '禁止创建新房间' 结合使用." },
            { regex: /Here you switch the rule on\/off\, set a timer for activating\/deactivating \/ deleting the rule and define when it can trigger, such as either always or based on where the player is and with whom\.The small green\/red bars next to the checkboxes indicate whether a condition is true at present or not and the big bar whether this means that the rule is in effect\, if active\. Depending on the rule\, you can either enforce its effect\, log all violations\, or both at the same time\. Lastly on the bottom right\, you can set whether the trigger conditions of this rule should follow the global rules config or not\./, replacement: "在此, 您可以切换规则的开/关状态, 设置激活/停用/删除规则的计时器, 并定义它何时触发, 例如始终或基于玩家的位置和与谁在一起. 复选框旁边的小绿色/红色条指示条件当前是否为真, 大条指示是否在生效(如果激活). 具体取决于规则, 您可以强制执行其效果、记录所有违规行为或同时执行两者. 最后, 在右下角, 您可以设置此规则的触发条件是否应遵循全局规则配置." },
            { regex: /This rule forces (.+) to talk as if they were gagged\, automatically garbling all of their speech\. This rule does not affect OOC\. This rule only affects whispers if the rule \"Garble whispers while gagged\" is also in effect\./, replacement: "此规则强制 $1 以口球的方式交谈, 自动压制她的所有言论. 此规则不影响 OOC. 仅当规则 '口球时扭曲私语' 也生效时, 此规则才会影响私语." },
            { regex: /(.+) has too much willpower to let you in\.\.\./, replacement: "$1 拥有太多意志力不让你进入..." },
            { regex: /You must be the owner to purchase this module for (.+)\.\.\./, replacement: "你必须是 $1 的所有者才能购买此模块..." },




            // { regex: /-/, replacement: "" },
        ];

        // 同步替换函数
        function replaceLabelSync(label) {
            let replacement = w.labelMap.get(label);
            while (replacement) {
                label = replacement;
                replacement = w.labelMap.get(label);
            }
            return label;
        }

        function replaceLabels(args) {
            let playername = InformationSheetSelection?.Name || Player.Name;
            // let playernum = InformationSheetSelection?.MemberNumber || Player.MemberNumber;
            let playerNickname = InformationSheetSelection?.Nickname || Player.Nickname;

            // function GetPlayerName(player) {
            //     return player?.Nickname != null && player?.Nickname != '' ? player?.Nickname : player?.Name;
            // }

            let label = args[0];
            if (loginSuccess && label && label.length > 0) {
                if (label.includes(Player.Name) || label.includes(InformationSheetSelection?.Name)) {
                    translationsDTF.forEach(({ regex, replacement }) => {
                        args[0] = args[0].replace(regex, replacement.replace(playername, playerNickname));
                    });

                    // if (ChatRoomCharacterCount >= 1) {

                    //     if (InformationSheetSelection?.Nickname && args[0].indexOf(playername) !== -1 && !args[0].includes(playerNickname)) {
                    //         args[0] = args[0].replace(new RegExp(playername, 'g'), playerNickname);
                    //     }

                    // }

                } else {
                    args[0] = replaceLabelSync(label);
                }




                if (args[0].indexOf("Your BCX version: ") !== -1) {
                    args[0] = args[0].replace(/Your BCX version\: (.+)/, "您的BCX版本: $1");
                }
                if (args[0].indexOf("'s BCX version: ") !== -1) {
                    args[0] = args[0].replace(/(.+)\'s BCX version\: (.+)/, "$1 的BCX版本: $2");
                }
                if (args[0].indexOf("BCX loaded! Version:") !== -1) {
                    args[0] = args[0].replace(/BCX loaded! Version\: (.+)/, "您的BCX版本: $1");
                }
                if (args[0].indexOf("For Better Club v") !== -1) {
                    args[0] = args[0].replace(/For Better Club v(.+) Loaded/, "您的BCX版本: $1");
                }
                if (args[0].indexOf("MBS: Show new") !== -1) {
                    args[0] = args[0].replace(/MBS\: Show new (.+) items/, "MBS:显示新的$1项目");
                }
                if (args[0].indexOf("Buy new ") !== -1) {
                    args[0] = args[0].replace(/Buy new (.+) items\: Page (.+)/, "购买新的 $1 项：第 $2 页");
                }
                if (args[0].indexOf("Preview new ") !== -1) {
                    args[0] = args[0].replace(/Preview new (.+) items\: Page (.+)/, "购买新的 $1 项：第 $2 页");
                }
                // 检查是否已经打印过这个文本
                // if (!printedTextMap.has(args[0])) {
                //     console.log(args[0]);
                //     printedTextMap.set(args[0], true);
                // }
            }
        };





        const textsToTranslate = {
            "#fusam-addon-manager-header > h1": "插件管理器",
            "#fusam-addon-manager-body > p": "关于安全性的说明：尽管被发现是恶意的插件会从插件管理器中移除，但仍然有可能有一些漏网的鱼鱼",
            "#fusam-show-button": "插件管理器",
            "#fusam-addon-manager-close": "保存",
        };


        // 映射对象，存储搜索文本和对应的替换文本
        const textReplacements = {
            "For Better Club (FBC)": "更好的俱乐部 (FBC)",
            "Smarter, extensible facial animation and posing engine, instant messaging, appearance layering and a collection of quality of life improvements.": "智能、可扩展的面部动画和姿势引擎、即时消息、外观分层以及一系列提升游戏品质的改进",
            "by the authors of the Addon Manager": "由插件管理器的作者编写",
            "Universal Remote": "通用远程控制器 (Universal Remote)",
            "This remote works across chat rooms, but requires both players to have it. /ur or friends list to use.": "该远程控制器可以跨聊天室使用，但需要双方玩家都拥有它。/ur 或 好友列表中使用。",
            "Bondage Club Extended (BCX)": "束缚俱乐部扩展 (BCX)",
            "by Jomshir98 & Claudia": "由 Jomshir98 & Claudia 编写",
            "Adds rules, curses, and more to enhance D/s play alongside a handful of quality of life improvements": "添加规则、诅咒等，以增强 D/s 游戏体验，并提供一些提升游戏品质的改进",
            "Themed": "主题 (Themed)",
            "by dDeepLb": "由 dDeepLb 编写",
            "Adds custom themes to BC along with other features": "为 BC 添加自定义主题以及其他功能",
            "Advanced Drone Control System (ADCS)": "先进仆从机控制系统 (ADCS)",
            "by SaotomeToyStore": "由 SaotomeToyStore 制作",
            "Expansion of Drone gameplay": "提供一些主人语言指令控制ADCS束缚套装的功能",
            "BCX Reset Button Disabler": "BCX 重置按钮禁用器 (BCX Reset Button Disabler)",
            "by Ciber": "由 Ciber 制作",
            "A very simple addon that disables the Module and Reset Buttons from BCX. That means you can have a new layer of helplessness.": "一个非常简单的插件，可以禁用 BCX 的模块和重置按钮。这意味着你可以增加一层新的无助感。",
            "Bondage Club Auto React (BCAR)": "束缚俱乐部自动回应 (BCAR)",
            "by Dr Branestawm": "由 Dr Branestawm 制作",
            "Automatically reacts to messages in the Bondage Club": "自动回应束缚俱乐部的消息",
            "Bondage Club X-Toys Integration": "束缚俱乐部 X-Toys 集成 (Bondage Club X-Toys Integration)",
            "by ItsNorin": "由 ItsNorin 制作",
            "Sync club interactions and toys with IRL remote-controlled toys, recommended use with https://github.com/itsFro/BCBridge": "将俱乐部互动和玩具与现实生活中的远程控制玩具同步，建议与 https://github.com/itsFro/BCBridge 一起使用",
            "BCTweaks": "BC调整 (BCTweaks)",
            "by Crimsonfox & agicitag": "由 Crimsonfox & agicitag 制作",
            "Split arousal and orgasm bars, tail wagging, and Best Friends": "分割兴奋和高潮条，摇尾巴和最好的朋友",
            "Eli's Bondage Club Helper (EBCH)": "Eli 的束缚俱乐部助手 (EBCH)",
            "by Elicia": "由 Elicia 制作",
            "Ungarble, custom notifications, altering other player's poses": "解除混淆，自定义通知，修改其他玩家的姿势",
            "Little Sera's Club Games (LSCG)": "Little Sera 的俱乐部游戏 (LSCG)",
            "by Little Sera": "由 Little Sera 制作",
            "Adds large gamified systems for hypnotism and breathplay": "添加了大型游戏化系统，用于催眠和呼吸游戏。",
            "Mute's Bondage Club Hacks Collection (MBCHC)": "Mute 的束缚俱乐部黑客收藏 (MBCHC)",
            "by Mute": "由 Mute 制作",
            "Autohack, local time, some keyboard goodies etc.": "自动黑客，本地时间，一些键盘上的东西等等",
            "Maid's Bondage Scripts (MBS)": "女仆的束缚脚本 (MBS)",
            "by Rama": "由 Rama 制作",
            "Additional crafting slots, additional options in wheel of fortune, and custom outfits in wheel of fortune": "额外的制作槽，命运之轮中的额外选项，以及命运之轮中的定制服装",
            "Responsive": "回应 (Responsive)",
            "by SaotomeToyStore, dDeepLb": "由 SaotomeToyStore，dDeepLb 制作",
            "Automatically sends messages when the user reaches a certain state (slapped, orgasm, etc).": "当用户达到特定状态（被打，高潮等）时自动发送消息。",
            "ULTRAbc": "ULTRA Bondage Club (ULTRAbc)",
            "by Nemesea": "由 Nemesea 制作",
            "A large collection of cheats, quality of life improvements, and a moaner script": "一大堆作弊、提高生活质量的改进和呻吟者脚本",
            "NotifyPlus": "改进提醒 (NotifyPlus)",
            "by SaotomeToyStore": "由 SaotomeToyStore 制作",
            "Improve the Name Mentioned notification in the original BC. Use keywords for mentioning names according to different roles. (Note: source code unavailable)": "改进BC原本提醒中的提到名字的规则。按照不同的身份配置提到名字的触发关键词。（注：源代码不可用）",
            "TTS and Morse": "TTS 和 Morse (TTS and Morse)",
            "by KatKammand": "由 KatKammand 制作",
            "Text-to-speech reading for chat messages, and some buttplug.io + morse functionalities.": "聊天文字转语音阅读，以及一些 buttplug.io + morse 功能。",
            "Chat Auto Translator Script": "聊天自动翻译脚本 (Chat Auto Translator Script)",
            "by Ciber, dDeepLb and KatKammand": "由 Ciber，dDeepLb 和 KatKammand 制作",
            "Addon that auto-translates the chat to the language you want. 130+ Languages available. Commands: /ttoggle to toggle the translator on and off. And /tlang": "将聊天自动翻译为您想要的语言的插件。有 130 多种语言可用。命令：/ttoggle 切换翻译器的开关。/tlang ",
            ", to change the language used.": "用于更改所使用的语言。",
            "Device": "本设备启用",
            "Account": "当前账户开启",
            "None": "无",
            "stable": "稳定版",
            "dev": "开发版",

            // "": "",
            // "": "",
            // console.log(1)

        };


        // 递归函数替换文本内容
        function replaceTextNodes(element) {
            if (element.nodeType === Node.TEXT_NODE) { // 如果是文本节点，则进行文本替换
                let nodeValue = element.nodeValue;
                // 遍历映射对象，查找并替换文本
                for (let searchText in textReplacements) {
                    if (nodeValue.includes(searchText)) {
                        const replacedText = textReplacements[searchText];
                        if (!nodeValue.includes(replacedText)) { // 检查当前节点是否已经包含替换后的文本
                            nodeValue = nodeValue.replace(searchText, replacedText);
                            element.nodeValue = nodeValue;
                            element.parentElement.setAttribute('data-replaced', true); // 添加标记
                        }
                    }
                }
            } else if (element.nodeType === Node.ELEMENT_NODE) {
                // 如果是元素节点，则递归遍历其子节点
                for (let i = 0; i < element.childNodes.length; i++) {
                    replaceTextNodes(element.childNodes[i]);
                }
            }
        }


        笨蛋Luzi.hookFunction("DrawText", 10, (args, next) => {
            let language = localStorage.getItem("BondageClubLanguage");
            if (language === "CN" || language === "TW") {
                replaceLabels(args);
                // 遍历待翻译的文本内容，翻译并替换对应的元素文本内容
                for (const [selector, translatedText] of Object.entries(textsToTranslate)) {
                    const element = document.querySelector(selector);
                    if (element) {
                        element.textContent = translatedText;
                    }
                }
                const myDiv = document.querySelector("#fusam-addon-manager-body");
                if (myDiv) {
                    // 调用递归函数替换文本内容
                    replaceTextNodes(myDiv);
                }
            }
            next(args);
        });


        笨蛋Luzi.hookFunction("DrawTextFit", 10, (args, next) => {
            let language = localStorage.getItem("BondageClubLanguage");
            if (language === "CN" || language === "TW") {
                replaceLabels(args);
            }
            next(args);
        });

        笨蛋Luzi.hookFunction("DrawTextWrap", 10, (args, next) => {
            let language = localStorage.getItem("BondageClubLanguage");
            if (language === "CN" || language === "TW") {
                replaceLabels(args);
            }
            next(args);
        });

    });

    const translations = [
        { regex: /(.+) moans uncontrollably as (.+)'s drug takes effect\./, replacement: "$1在$2的药物生效时无法控制地呻吟." },
        { regex: /(.+) quivers as (.+) body is flooded with (.+)'s aphrodisiac\./, replacement: "$1在$3的催情剂涌入$2的身体时颤抖不已." },
        { regex: /(.+)'s eyes roll back as a wave of pleasure washes over (.+) body\./, replacement: "$1的眼睛翻白,一股快感涌过$2的身体." },
        { regex: /(.+) sighs as a cool relaxing calm glides through (.+) body, fighting to keep (.+) eyes open\./, replacement: "$1叹息着,一股凉爽、放松的平静感在$2的身体中流动,努力保持$3的眼睛睁开." },
        { regex: /(.+)'s muscles relax as (.+)'s sedative courses through (.+) body/, replacement: "$1的肌肉在$2的镇静剂流过$3的身体时放松了." },
        { regex: /(.+) fights to stay conscious against the relentless weight of (.+)'s drug\./, replacement: "$1努力保持清醒, 抵抗着$2的药物的无情压力." },
        { regex: /(.+)'s eyes droop as (.+) fights to stay conscious against the cool, welcoming weight of (.+)'s drug\./, replacement: "$1的眼睛低垂, $2在抗拒着$3的药物的凉爽、欢迎的压力, 努力保持清醒." },
        { regex: /(.+) moans thankfully as (.+)'s medicine heals (.+)\./, replacement: "$1感激地呻吟, $2的药物正在治愈$3." },
        { regex: /(.+)'s body glows slightly as (.+)'s cure washes warmly over (.+)\./, replacement: "$1的身体微微发光, $2的治疗温暖地覆盖在$3身上." },
        { regex: /(.+)'s drug rushes warmly through (.+)'s body, curing what ails (.+)\./, replacement: "$1的药物温暖地流过$2的身体, 治愈了$3的疾病." },
        { regex: /(.+) gulps and swallows (.+)'s drink, a cool relaxing feeling starting to spread through (.+) body\./, replacement: "$1啜饮着$2的饮料, 一种凉爽而放松的感觉开始在$3的身体中蔓延." },
        { regex: /(.+) sighs as a cool relaxing calm glides down (.+) throat, fighting to keep (.+) eyes open\./, replacement: "$1叹息着, 一股凉爽而放松的平静滑过$2的喉咙, 努力保持着$3的眼睛睁开." },
        { regex: /(.+)'s muscles relax as (.+)'s sedative pours down (.+) throat and starts to take effect\./, replacement: "$1的肌肉在$2的镇定剂倾入$3的喉咙后放松, 开始产生作用." },
        { regex: /(.+)'s eyes droop as (.+) fights to stay conscious against the cool, welcoming weight of (.+)'s drug\./, replacement: "$1的眼睛开始闭合, $2努力保持清醒, 抗拒着$3的药物带来的凉爽而欢迎的沉重感.", },
        { regex: /(.+) whimpers and struggles to keep control of (.+) mind\./, replacement: "$1呜咽着, 挣扎着保持对$2心灵的控制." },
        { regex: /(.+) gasps weakly as (.+)'s drug slowly erases (.+) free will\./, replacement: "$1虚弱地喘息着, 随着$2的药物慢慢地抹去$3的自由意志." },
        { regex: /(.+)'s eyes struggle to focus as (.+)'s drug makes (.+) more suggestible\./, replacement: "$1 的眼睛努力聚焦, $2的药物使得$3更易受建议." },
        { regex: /(.+) starts to drift dreamily as they swallow (.+)'s drink\./, replacement: "$1开始梦幻般地漂浮, 当他们咽下$2的饮料." },
        { regex: /(.+) gasps weakly and starts to lose focus as (.+)'s drug warms (.+) comfortably\./, replacement: "$1虚弱地喘息着, 开始失去焦点, $2的药物温暖地包裹着$3." },
        { regex: /(.+)'s eyes flutter and defocus as (.+)'s drink slides warmly down (.+) throat\./, replacement: "$1的眼睛闪烁, 变得模糊不清, 当$2的饮料温暖地滑过$3的喉咙时." },
        { regex: /(.+) gulps thankfully as (.+)'s medicine slowly heals (.+)\./, replacement: "$1感激地大口地喝着, 当$2的药物慢慢治愈了$3." },
        { regex: /(.+)'s body glows slightly as (.+)'s cure glides warmly through (.+)\./, replacement: "$1的身体微微发光, 当$2的药物温暖地流过$3时." },
        { regex: /(.+)'s antidote slowly washes through (.+)'s body, curing what ails (.+)\./, replacement: "$1的解毒药慢慢地流过$2的身体, 治愈了$3的病痛." },
        { regex: /(.+)'s body goes limp as (.+) mind empties and (.+) awaits a command\./, replacement: "$1的身体变得无力, $2的头脑变得空虚, $3等待着一个命令." },
        { regex: /(.+)'s eyes roll back as a wave of pleasure emanates from (.+) belly\./, replacement: "$1的眼睛翻白, 当一股快乐的感觉从$2的肚子中散发出来." },
        { regex: /(.+)'s eyes move dreamily under (.+) closed eyelids\.\.\./, replacement: "$1的眼睛在闭合的眼皮下梦幻般地移动着..." },
        { regex: /(.+) exhales slowly, fully relaxed\.\.\./, replacement: "$1缓缓地呼出一口气, 完全放松..." },
        { regex: /(.+)'s muscles twitch weakly in (.+) sleep\.\.\./, replacement: "$1的肌肉在睡眠中微弱地抽搐着..." },
        { regex: /(.+) moans softly and relaxes\.\.\./, replacement: "$1轻轻地呻吟着并放松着..." },
        { regex: /(.+) fires a net wildly\./, replacement: "$1疯狂地射出一张网." },
        { regex: /(.+) fires at themselves point blank\./, replacement: "$1在零距离处射击自己." },
        { regex: /(.+) fires a net at (.+)\./, replacement: "$1向$2射出一张网." },
        { regex: /(.+)'s mask whirs and shudders as it reloads its own supply and continues emitting\./, replacement: "$1的面具嗡嗡作响, 颤抖着重新装载自己的供应并继续释放." },
        { regex: /(.+)'s mask hums menacingly as it holds its supply in reserve\./, replacement: "$1的面具威胁地嗡嗡作响, 将其供应保留着." },
        { regex: /(.+)'s mask clicks and turns itself back on\./, replacement: "$1的面具发出咔嚓声, 重新启动." },
        { regex: /(.+) reloads (.+)'s mask and turns it back on, pumping gas back into (.+) lungs\./, replacement: "$1重新装载了$2的面具并重新启动, 将气体注入$3的肺部." },
        { regex: /(.+) switches on (.+)'s mask, filling (.+) lungs\./, replacement: "$1打开了$2的面具,将气体填满$3的肺部." },
        { regex: /(.+) switches off (.+)'s mask, halting the flow of gas\./, replacement: "$1关闭了$2的面具,停止气体的流动." },
        { regex: /(.+)'s eyes widen as (.+) mask activates, slowly filling (.+) lungs with its drug\./, replacement: "$1的眼睛睁大, $2面具启动, 缓慢地将药物填满$3的肺部." },
        { regex: /(.+) takes a deep breath of cool, clean air as (.+) mask is removed\./, replacement: "$1深吸一口凉爽、清新的空气, 当$2面具被移除时." },
        { regex: /(.+)'s mask hisses quietly as it runs out of its supply of gas\./, replacement: "$1的面具轻轻地嘶嘶作响, 它的气体用尽了." },
        { regex: /(.+) groans helplessly as (.+) headset manipulates (.+) mind\./, replacement: "$1无助地呻吟着, $2耳机操控着$3的思维." },
        { regex: /(.+) struggles to keep (.+) focus through the overwhelming influence of (.+) headset\./, replacement: "$1挣扎着保持$2的专注, 尽管$3耳机的影响是压倒性的." },
        { regex: /(.+) whimpers as (.+) headset erases (.+) own mind relentlessly\./, replacement: "$1抽泣着, $2耳机无情地抹去了$3的思维." },
        { regex: /(.+)'s muscles relax limply as (.+) takes a deep breath through (.+) mask\./, replacement: "$1的肌肉变得无力松弛, 当$2通过$3的面具深吸一口气." },
        { regex: /(.+)'s eyes flutter weakly as (.+) inhales\./, replacement: "$1的眼睛微弱地眨动着, 当$2吸气时." },
        { regex: /(.+) struggles to keep (.+) drooping eyes open as (.+) mask continues to emit its sedative gas\./, replacement: "$1挣扎着保持$2沉重的眼睑睁开, $3的面具继续释放着镇定气体." },
        { regex: /(.+) groans helplessly as (.+) mask sends another dose into (.+) lungs\./, replacement: "$1无助地呻吟着, $2的面具又向$3的肺部注入了一剂药物." },
        { regex: /(.+) struggles to keep (.+) focus through the suggestible haze caused by (.+) mask\./, replacement: "$1挣扎着保持$2的专注, 尽管$3的面具造成的易受建议的阴霾." },
        { regex: /(.+) whimpers as (.+) mask's drug pushes (.+) further out of (.+) own mind\./, replacement: "$1抽泣着, $2的面具的药物将$3推得更远离$4自己的思维." },
        { regex: /(.+)'s spine tingles as (.+) takes a deep breath through (.+) mask\./, replacement: "$1的脊柱一阵刺痛, 当$2通过$3的面具深吸一口气." },
        { regex: /(.+) lets out a muffled moan as (.+) inhales\./, replacement: "$1发出一声闷哼, 当$2吸气时." },
        { regex: /(.+)'s sensitive areas burn hot as (.+) breathes through (.+) mask\./, replacement: "$1敏感的部位在$2通过$3的面具呼吸时烧得滚烫." },
        { regex: /(.+) sighs with relief as (.+) takes a deep gulp of healing mist\./, replacement: "$1欣慰地叹了口气, 当$2深吸一口治愈的薄雾." },
        { regex: /(.+) feels a tingle across (.+) skin as (.+) mask heals them\./, replacement: "$1感到皮肤上一阵刺痛, 当$2的面具治愈了他们." },
        { regex: /(.+) lets out a quiet moan as (.+) mask releases a healing mist into her lungs\./, replacement: "$1发出一声安静的呻吟, 当$2的面具释放出治愈的薄雾进入她的肺部." },
        { regex: /(.+)'s whimpers, (.+) tongue held tightly\./, replacement: "$1呜咽, $2的舌头被紧紧地抓住." },
        { regex: /(.+) strains, trying to pull (.+) tongue free\./, replacement: "$1用力, 试图把$2的舌头拉出来." },
        { regex: /(.+) starts to drool, (.+) tongue held fast\./, replacement: "$1开始流口水, $2的舌头被牢牢地固定住." },
        { regex: /(.+) wiggles (.+) nose\./, replacement: "$1扭动$2的鼻子." },
        { regex: /(.+) wiggles (.+) nose with a small frown\./, replacement: "$1皱着眉头扭动$2的鼻子." },
        { regex: /(.+) sneezes in surprise\./, replacement: "$1惊讶地打了个喷嚏." },
        { regex: /(.+) looks crosseyed at (.+) nose\./, replacement: "$1斜视着$2的鼻子." },
        { regex: /(.+) wiggles (.+) nose with a squeak\./, replacement: "$1发出吱吱声, 扭动$2的鼻子." },
        { regex: /(.+) meeps\!/, replacement: "$1发出吱吱声!" },
        { regex: /(.+) swats at (.+)'s hand\./, replacement: "$1朝$2的手拍打." },
        { regex: /(.+) covers (.+) nose protectively, squinting at (.+)\./, replacement: "$1保护地捂着$2的鼻子, 斜着眼睛看着$3." },
        { regex: /(.+) snatches (.+)'s booping finger\./, replacement: "$1抢夺$2戳戳的手指." },
        { regex: /(.+)'s nose overloads and shuts down\./, replacement: "$1的鼻子超载并关闭." },
        { regex: /(.+) struggles in (.+) bindings, huffing\./, replacement: "$1在$2约束中挣扎, 喘气." },
        { regex: /(.+) frowns and squirms in (.+) bindings\./, replacement: "$1在$2约束中皱眉挣扎." },
        { regex: /(.+) whimpers in (.+) bondage\./, replacement: "$1在$2束缚中呜咽." },
        { regex: /(.+) groans helplessly\./, replacement: "$1无助地呻吟." },
        { regex: /(.+) whines and wiggles in (.+) bondage\./, replacement: "$1在$2约束中呜咽和扭动." },
        { regex: /(.+)'s mouth moves silently\./, replacement: "$1的嘴无声地动着." },
        { regex: /(.+)'s mouth moves without a sound\./, replacement: "$1的嘴无声地动着." },
        { regex: /(.+)'s whimpers inaudibly, unable to breathe\./, replacement: "$1的呜咽无法听到, 无法呼吸." },
        { regex: /(.+) groans and convulses\./, replacement: "$1呻吟并抽搐." },
        { regex: /(.+) shudders as (.+) lungs burn\./, replacement: "$1当$2的肺燃烧时颤抖." },
        { regex: /(.+) gasps and gulps for air\./, replacement: "$1喘气并拼命吞咽空气." },
        { regex: /(.+)'s lungs expand hungrily as (.+) gasps in air\./, replacement: "$1的肺急切地扩张, 当$2喘着气." },
        { regex: /(.+) gasps for air with a whimper\./, replacement: "$1呜咽着喘气." },
        { regex: /(.+) coughs as (.+) collar pushes against (.+) throat\./, replacement: "$1在$2项圈顶向$3喉咙时咳嗽." },
        { regex: /(.+) gulps as (.+) feels the tight collar around (.+) neck\./, replacement: "$1感到$2紧贴在$3脖子上的紧领, gulp了一口气." },
        { regex: /(.+) shifts nervously in (.+) tight collar\./, replacement: "$1在$2紧领中紧张地转动." },
        { regex: /(.+) trembles, very conscious of the tight collar around (.+) neck\./, replacement: "$1颤抖着, 非常意识到紧贴在$2脖子上的紧领." },
        { regex: /(.+) huffs uncomfortably in (.+) tight collar\./, replacement: "$1在$2紧领中不舒服地咕噜作响." },
        { regex: /(.+) whimpers pleadingly as (.+) struggles to take a full breath\./, replacement: "$1恳求地呜咽, 当$2努力吸满一口气." },
        { regex: /(.+) chokes against (.+) collar, moaning softly\./, replacement: "$1在$2项圈上窒息, 轻声呻吟." },
        { regex: /(.+)'s eyes flutter weakly as (.+) collar presses into (.+) neck\./, replacement: "$1的眼睛微弱地眨动, 当$2项圈压在$3脖子上时." },
        { regex: /(.+) tries to focus on breathing, each inhale an effort in (.+) collar\./, replacement: "$1试着专注于呼吸, 在$2项圈中每一次吸气都是一种努力." },
        { regex: /(.+) splutters and chokes, struggling to breathe\./, replacement: "$1咕噜作响并窒息, 挣扎着呼吸." },
        { regex: /(.+) grunts and moans, straining to breathe\./, replacement: "$1呻吟着并哼哼, 努力呼吸." },
        { regex: /(.+)'s eyes have trouble focusing, as (.+) chokes and gets lightheaded\./, replacement: "$1的眼睛难以聚焦, 因为$2窒息并感到头晕." },
        { regex: /(.+)'s eyes flutter as (.+) fights to keep control of (.+) senses\.\.\./, replacement: "$1的眼睛飘动, 因为$2努力保持对$3感觉的控制." },
        { regex: /(.+) whimpers and struggles to stay awake\.\.\./, replacement: "$1呜咽着, 挣扎着保持清醒..." },
        { regex: /(.+) can feel (.+) eyelids grow heavy as (.+) drifts on the edge of trance\.\.\./, replacement: "$1能感觉到$2眼皮变得沉重, 因为$3在恍惚边缘漂流..." },
        { regex: /(.+) lets out a low moan as (.+) muscles relax and (.+) starts to drop\.\.\./, replacement: "$1低声呻吟, 当$2肌肉放松时, $3开始下垂..." },
        { regex: /(.+)'s eyes flutter as (.+) fights to keep them open\.\.\./, replacement: "$1的眼睛飘动, 因为$2努力保持它们睁开..." },
        { regex: /(.+) yawns and struggles to stay awake\.\.\./, replacement: "$1打哈欠, 挣扎着保持清醒..." },
        { regex: /(.+) can feel (.+) eyelids grow heavy as (.+) drifts on the edge of sleep\.\.\./, replacement: "$1能感觉到$2眼皮变得沉重, 因为$3在睡眠边缘漂流..." },
        { regex: /(.+) takes a deep, relaxing breath as (.+) muscles relax and (.+) eyes start to droop\.\.\./, replacement: "$1深深地吸了一口放松的气息, 当$2肌肉放松, $3眼睛开始下垂..." },
        { regex: /(.+)'s eyes move dreamily under (.+) closed eyelids\.\.\./, replacement: "$1的眼睛在$2闭合的眼睑下梦幻般地移动..." },
        { regex: /(.+) takes another deep breath through (.+) gag\.\.\./, replacement: "$1通过$2口饰再次深呼吸..." },
        { regex: /(.+)'s muscles twitch weakly in (.+) sleep\.\.\./, replacement: "$1的肌肉在$2睡眠中微弱抽动..." },
        { regex: /(.+) moans softly and relaxes\.\.\./, replacement: "$1轻声呻吟并放松..." },
        { regex: /(.+)'s whimpers, (.+) tongue held tightly\./, replacement: "$1的呜咽声, $2舌头被牢牢地固定." },
        { regex: /(.+) strains, trying to pull (.+) tongue free\./, replacement: "$1用力, 试图把$2舌头拉出来." },
        { regex: /(.+) starts to drool, (.+) tongue held fast\./, replacement: "$1开始流口水, $2舌头被牢牢固定." },
        { regex: /(.+) barely trembles, unable to move (.+) mouth or make a sound\.\.\./, replacement: "$1几乎不发抖, 无法移动$2嘴巴或发出声音..." },
        { regex: /(.+)'s eyes plead helplessly as (.+) muscles refuse to obey\.\.\./, replacement: "$1的眼睛无助地乞求, 当$2肌肉拒绝服从..." },
        { regex: /(.+) manages to muster a quiet whimper, (.+) body held fast\.\.\./, replacement: "$1设法发出了一声轻柔的呜咽, $2身体被牢牢固定..." },
        { regex: /(.+)'s eyes widen as they try to speak without success\.\.\./, replacement: "$1的眼睛睁大, 当它们试图说话却没有成功..." },
        { regex: /(.+) looks around helplessly, unable to make a sound\.\.\./, replacement: "$1无助地四处张望, 无法发出声音..." },
        { regex: /(.+)'s mouth moves in silence\.\.\./, replacement: "$1的嘴巴无声地动着..." },
        { regex: /(.+)'s mouth moves silently\.\.\./, replacement: "$1的嘴巴无声地动着..." },
        { regex: /(.+) whimpers, struggling in (.+) bindings and unable to speak\.\.\./, replacement: "$1在$2约束中挣扎, 无法说话..." },
        { regex: /(.+)'s eyes widen as they squirm in (.+) bondage, only a gentle moan escaping\.\.\./, replacement: "$1的眼睛睁大, 当它们在$2束缚中扭动时, 只有一声轻柔的呻吟逃逸..." },
        { regex: /(.+) tries (.+) best to speak, but has to resign themselves to mearly a bound whimper\.\.\./, replacement: "$1尽力想说话, 但不得不只是发出一声被束缚的呜咽..." },
        { regex: /(.+) squirms in (.+) bindings, (.+) mouth moving in silence\.\.\./, replacement: "$1在$2约束中扭动, 嘴巴无声地移动..." },
        { regex: /(.+)'s eyelids flutter as a thought tries to enter (.+) blank mind\.\.\./, replacement: "$1的眼皮轻微颤动, 当一种想法试图进入$2空白的思维中..." },
        { regex: /(.+) sways weakly in (.+) place, drifting peacefully\.\.\./, replacement: "$1在$2地方虚弱地摇摆, 平静地漂流..." },
        { regex: /(.+) trembles as something deep and forgotten fails to resurface\.\.\./, replacement: "$1颤抖着, 因为某种深刻而被遗忘的东西未能重新浮出水面..." },
        { regex: /(.+) moans softly as (.+) drops even deeper into trance\.\.\./, replacement: "$1轻声呻吟, 因为$2甚至更深地陷入了恍惚之中..." },
        { regex: /(.+) quivers, patiently awaiting something to fill (.+) empty head\.\.\./, replacement: "$1颤抖着, 耐心等待着某种东西来填补$2空虚的脑袋..." },
        { regex: /(.+) stares blankly, (.+) mind open and suggestible\.\.\./, replacement: "$1茫然地凝视着, $2思维开放且易受影响..." },
        { regex: /(.+)'s eyelids flutter gently, awaiting a command\.\.\./, replacement: "$1的眼皮轻轻颤动, 等待着一声命令..." },
        { regex: /(.+) trembles with a quiet moan as (.+) yearns to obey\.\.\./, replacement: "$1轻声呻吟着颤抖, 因为$2渴望服从..." },
        { regex: /(.+)'s eyes move dreamily under (.+) closed eyelids\.\.\./, replacement: "$1的眼睛在$2闭着的眼皮下梦幻般地移动..." },
        { regex: /(.+) exhales slowly, fully relaxed\.\.\./, replacement: "$1慢慢地呼出气, 完全放松..." },
        { regex: /(.+)'s muscles twitch weakly in (.+) sleep\.\.\./, replacement: "$1的肌肉在$2睡眠中微弱抽动..." },
        { regex: /(.+) moans softly and relaxes\.\.\./, replacement: "$1轻声呻吟并放松..." },
        { regex: /(.+)'s eyes widen as (.+) gag inflates to completely fill (.+) throat\./, replacement: "$1的眼睛睁大, 当$2口饰膨胀完全填满$3喉咙时." },
        { regex: /(.+) splutters and gasps for air around (.+) gag\./, replacement: "$1喷溅并在$2口饰周围喘息." },
        { regex: /(.+)'s eyes flutter as (.+) collar starts to tighten around (.+) neck with a quiet hiss\./, replacement: "$1的眼睛飘动, 当$2项圈开始在$3脖子上轻轻地发出嘶嘶声时." },
        { regex: /(.+) gasps for air as (.+) collar presses in around (.+) neck with a hiss\./, replacement: "$1喘着气, 当$2项圈嘶嘶地压在$3脖子上时." },
        { regex: /(.+)'s face runs flush, choking as (.+) collar hisses, barely allowing any air to (.+) lungs\./, replacement: "$1的脸色变得潮红, 当$2项圈嘶嘶作响时, 几乎没有任何空气进入$3的肺部, 导致窒息." },
        { regex: /(.+) chokes and gasps desperately as (.+) collar slowly releases some pressure\./, replacement: "$1呼吸困难地喘息, 当$2项圈缓慢地释放一些压力时." },
        { regex: /(.+)'s collar opens a little as (.+) lets out a moan, gulping for air\./, replacement: "$1的项圈稍微打开, 当$2发出呻吟时, 急切地吞食着空气." },
        { regex: /(.+) whimpers thankfully as (.+) collar reduces most of its pressure around (.+) neck\./, replacement: "$1感激地呜咽着, 当$2项圈在$3脖子周围减轻大部分压力时." },
        { regex: /(.+) takes a deep breath as (.+) collar releases its grip with a hiss\./, replacement: "$1深吸一口气, 当$2项圈发出嘶嘶声释放其控制时." },
        { regex: /(.+) gulps thankfully as the threat to (.+) airway is removed\./, replacement: "$1感激地吞咽着, 当对$2气道的威胁消除时." },
        { regex: /(.+)'s eyes start to roll back, gasping and choking as (.+) collar presses in tightly and completely with a menacing hiss\./, replacement: "$1的眼睛开始翻白, 当$2项圈紧紧而完全地压着时, 发出威胁的嘶嘶声, 喘息和窒息." },
        { regex: /(.+)'s eyes flutter with a groan, unable to get any air to (.+) lungs\./, replacement: "$1的眼睛随着呻吟而飘动, 无法让任何空气进入$2的肺部." },
        { regex: /(.+) chokes and spasms, (.+) collar holding tight\./, replacement: "$1窒息和痉挛, $2项圈紧紧地控制着." },
        { regex: /(.+) chokes and spasms, (.+) gripping (.+) throat relentlessly\./, replacement: "$1窒息和痉挛, $2不停地紧抓着$3的喉咙." },
        { regex: /(.+) convulses weakly with a moan, (.+) eyes rolling back as the collar hisses impossibly tighter\./, replacement: "$1痉挛着, 带着呻吟, $2的眼睛翻白, 项圈发出不可思议的更紧的嘶嘶声." },
        { regex: /As (.+) collapses unconscious, (.+) collar releases all of its pressure with a long hiss\./, replacement: "当$1失去知觉倒下时, $2的项圈发出长长的嘶嘶声, 释放出所有的压力." },
        { regex: /As (.+) collapses unconscious, (.+) releases (.+) neck\./, replacement: "当$1失去知觉倒下时, $2释放了对$3脖子的控制." },
        { regex: /As (.+) slumps unconscious, (.+) nose plugs fall out\./, replacement: "当$1失去知觉倒下时, $2的鼻塞掉了出来." },
        { regex: /(.+) quivers with one last attempt to stay awake\.\.\./, replacement: "$1颤抖着, 做最后的努力保持清醒." },
        { regex: /(.+) trembles weakly with one last attempt to maintain (.+) senses\.\.\./, replacement: "$1微弱地颤抖, 做最后的努力保持$2感觉." },
        { regex: /(.+)'s frowns as (.+) fights to remain conscious\./, replacement: "$1皱着眉头, 当$2努力保持清醒时." },
        { regex: /(.+)'s eyes immediately defocus, (.+) posture slumping slightly as (.+) loses control of (.+) body at the utterance of a trigger word\./, replacement: "$1的眼睛立即变得模糊, 当$2说出触发词时, $3的姿势略微下垂, 失去对$4身体的控制." },
        { regex: /(.+)'s eyes glaze over, (.+) posture slumping weakly as (.+) loses control of (.+) body\./, replacement: "$1的眼睛变得呆滞, $2微弱地下垂, $3失去对$4身体的控制." },
        { regex: /(.+) reboots, blinking and gasping as (.+) regains (.+) senses\./, replacement: "$1重新启动, 眨眼喘息, 当$2重新获得$3感官时." },
        { regex: /(.+) blinks, shaking (.+) head with confusion as (.+) regains (.+) senses\./, replacement: "$1眨眼, 困惑地摇摇头, 当$3重新获得$4感官时." },
        { regex: /(.+) gasps, blinking and blushing with confusion\./, replacement: "$1喘息, 眨眼并因困惑而脸红." },
        { regex: /(.+) concentrates, breaking the hold the previous trigger word held over (.+)\./, replacement: "$1集中精神, 打破了以前触发词对$2的控制." },
        { regex: /(.+)'s eyes dart around, (.+) world suddenly plunged into darkness\./, replacement: "$1的眼睛四处游移, $2的世界突然陷入黑暗." },
        { regex: /(.+) frowns as (.+) is completely deafened\./, replacement: "$1皱着眉头, 因为$2完全失聪." },
        { regex: /(.+)'s eyes widen in a panic as (.+) muscles seize in place\./, replacement: "$1恐慌地睁大眼睛, 当$2的肌肉僵硬时." },
        { regex: /(.+) is unable to fight the spell's hypnotizing influence, slumping weakly as (.+) eyes go blank\./, replacement: "$1无法抵抗咒语的催眠影响, 当$2的眼睛变得空白时, 软弱地倒下." },
        { regex: /(.+)'s protests suddenly fall completely silent\./, replacement: "$1的抗议突然完全沉默了." },
        { regex: /(.+)'s mouth moves in protest but not a single sound escapes\./, replacement: "$1的嘴在抗议, 但没有任何声音逃脱." },
        { regex: /(.+) succumbs to the spell's overwhelming pressure, (.+) eyes closing as (.+) falls unconscious\./, replacement: "$1屈服于咒语的压倒性压力, 当$3失去意识时, $2的眼睛闭上了." },
        { regex: /(.+) gasps, blinking as the magic affecting (.+) is removed\./, replacement: "$1喘息着眨眼, 当影响$2的魔法被移除时." },
        { regex: /(.+) trembles as (.+) clothing shimmers and morphs around (.+)\./, replacement: "$1颤抖着, 当$2的衣服闪烁并在$3周围变形时." },
        { regex: /(.+) squeaks as (.+) clothing shimmers and morphs around (.+)\./, replacement: "$1尖叫着, 当$2的衣服闪烁并在$3周围变形时." },
        { regex: /(.+) trembles as (.+) body shimmers and morphs\./, replacement: "$1颤抖, 当$2的身体闪烁并改变形状时." },
        { regex: /(.+) squeaks as (.+) body shimmers and morphs\./, replacement: "$1尖叫着, 当$2的身体闪烁并改变形状时." },
        { regex: /(.+) squirms as (.+) arousal is paired\./, replacement: "$1扭动着身体, 当$2的兴奋被配对时." },
        { regex: /(.+) quivers as (.+) feels (.+) impending denial\./, replacement: "$1颤抖着, 当$2感受到$3即将到来的拒绝时." },
        { regex: /(.+) whimpers as (.+) feels (.+) impending denial\./, replacement: "$1呜咽着, 当$2感受到$3即将到来的拒绝时." },
        { regex: /(.+)'s muscles slump limply once more as another dose of chloroform is applied\./, replacement: "$1的肌肉再次无力松弛, 当又一剂氯仿被施用时." },
        { regex: /(.+) eyes go wide as the sweet smell of ether fills (.+) nostrils\./, replacement: "$1的眼睛瞪大, 当乙醚的甜味充满$2的鼻孔时." },
        { regex: /(.+) slumps back in (.+) sleep as another dose of ether assails (.+) senses\./, replacement: "$1在另一剂乙醚冲击$3的感官时, $2沉入睡梦中." },
        { regex: /(.+), unable to continue holding (.+) breath, takes a desparate gasp through the chemical-soaked cloth\./, replacement: "$1, 无法继续屏住$2的呼吸, 透过浸满化学药品的布料拼命地喘气." },
        { regex: /(.+)'s body trembles as the chloroform sinks deep into (.+) mind\./, replacement: "$1的身体颤抖, 当氯仿深深渗入$2的头脑时." },
        { regex: /(.+) takes a deep, calm breath as (.+) chloroform starts to lose its potency\.\.\./, replacement: "$1深深地吸了口气, 当$2氯仿开始失去效力时, 保持平静." },
        { regex: /(.+) continues to sleep peacefully as the cloth is removed\.\.\./, replacement: "$1继续安详地睡着, 当布料被移开时." },
        { regex: /(.+) gulps in fresh air as the cloth is removed\.\.\./, replacement: "$1大口吸入新鲜空气, 当布料被移开时." },
        { regex: /(.+) starts to stir with a gentle moan\.\.\./, replacement: "$1开始缓慢地挣扎着, 轻轻地呻吟着." },
        { regex: /(.+)'s eyes flutter and start to open sleepily\.\.\./, replacement: "$1的眼睛飘动着, 开始慢慢地睁开, 显得昏昏欲睡." },
        { regex: /(.+) moans and trembles in frustration as (.+) is held right at the edge\.\.\./, replacement: "$1因被困在边缘而感到沮丧地呻吟和颤抖." },
        { regex: /(.+) leads (.+) out of the room by the ear\./, replacement: "$1领着$2通过耳朵离开房间." },
        { regex: /(.+) roughly pulls (.+) out of the room by the arm\./, replacement: "$1粗暴地拉着$2通过手臂离开房间." },
        { regex: /(.+) tugs (.+) out of the room by the tongue\./, replacement: "$1拽着$2通过舌头离开房间." },
        { regex: /(.+) drags (.+) out of the room with a wince\./, replacement: "$1痛苦地拖着$2离开房间." },
        { regex: /(.+) feels as though (.+) abilities are enhanced\./, replacement: "$1感觉自己的能力得到了增强." },
        { regex: /(.+) feels as though (.+) abilities are deminished\./, replacement: "$1感觉自己的能力受到了削弱." },
        { regex: /(.+)'s abilities return to normal\./, replacement: "$1的能力恢复正常." },
        { regex: /(.+) blinks and returns to (.+) senses\./, replacement: "$1眨了眨眼, 回到了$2的感觉中." },
        { regex: /(.+)'s breathing calms down as (.+) regains control of (.+) arousal\./, replacement: "$1的呼吸平静下来, 当$2重新控制了$3的兴奋时." },
        { regex: /(.+) slumps weakly as (.+) slips into unconciousness\./, replacement: "$1无力地瘫坐, 当$2陷入无意识时." },
        { regex: /(.+)'s eyelids flutter and start to open sleepily\.\.\./, replacement: "$1的眼睑飘动, 开始昏昏欲睡地睁开." },
        { regex: /(.+)'s body reshapes and grows to twice its size\./, replacement: "$1的身体重新塑形并长大至两倍大小." },
        { regex: /(.+)'s body reshapes and shrinks to half its size\./, replacement: "$1的身体重新塑形并缩小至一半大小." },
        { regex: /(.+)'s body returns to its normal size\./, replacement: "$1的身体恢复到正常大小." },
        { regex: /(.+)'s (.+) engulfs (.+)\./, replacement: "$1的$2吞没了$3." },
        { regex: /(.+) struggles in (.+) bindings, unable to reach (.+) collar's controls\./, replacement: "$1在$2约束下挣扎, 无法触及$3项圈的控制装置." },
        { regex: /(.+) struggles in (.+) bindings, unable to reach (.+)'s collar controls\./, replacement: "$1在$2约束下挣扎, 无法触及$3的项圈控制装置." },
        { regex: /(.+) presses a button on (.+) collar\./, replacement: "$1按下$2项圈上的一个按钮." },
        { regex: /(.+) presses a button on (.+)'s collar\./, replacement: "$1按下$2的项圈上的一个按钮." },
        { regex: /(.+)\'s collar beeps and a computerized voice says "Access Denied\./, replacement: "$1的项圈发出嘟嘟声, 电脑化的声音说：“访问被拒绝.”" },
        { regex: /(.+)\'s collar chimes and a computerized voice reads out\:\nCurrent Level\: (.+)\.\.\.\nCorrective Cycles: (.+)\.\.\.\nTighten Trigger\: \'(.+)\'\.\.\.\nLoosen Trigger\: \'(.+)\'\.\.\.\nRemote Access\: (.+)\.\.\./, replacement: "$1的项圈响起提示音, 电脑化的声音读出：\n当前水平：$2...\n校正周期：$3...\n收紧触发器：“$4”...\n放松触发器：“$5”...\n远程访问：$6.." },
        { regex: /(.+) gives (.+) (.+) to (.+)\./, replacement: "$1给$2$3给$4." },
        { regex: /(.+) slowly waves (.+) (.+) in an intricate pattern, making sure (.+) follows along with (.+) (.+)/, replacement: "$1慢慢地挥动着$2$3以复杂的图案, 确保$4跟着他们的$5$6." },
        { regex: /(.+) repeats an indecipherable phrase, touching (.+) (.+) to (.+)'s (.+)/, replacement: "$1重复着一个难以理解的短语, 把$2$3碰到$4的$5." },
        { regex: /(.+) holds both(.+)(.+) and(.+)'s (.+) tightly, energy traveling from one to the other/, replacement: "$1紧紧地握着$2$3和$4的$5, 能量从一个传递到另一个" },
        { regex: /(.+) waves (.+) (.+) in an intricate pattern and casts (.+) on (.+)(.+)/, replacement: "$1挥动$2$3以复杂的图案并在$4上施放$5$6" },
        { regex: /(.+) chants an indecipherable phrase, pointing (.+) (.+) at (.+) and casting (.+)(.+)/, replacement: "$1吟诵着一个难以理解的短语, 指着$2$3对准$4并施放$5$6" },
        { regex: /(.+) aims (.+) (.+) at (.+) and, with a grin, casts (.+) (.+)/, replacement: "$1瞄准$2$3在$4上, 并带着笑容施放$5$6 " },
        { regex: /(.+) struggles to wield (.+)'s (.+), (.+) spell backfiring\./, replacement: "$1挣扎着挥舞$2的$3, $4法术反噬." },
        { regex: /(.+) struggles to wield (.+)'s (.+), (.+) spell fizzling with no effect\./, replacement: "$1挣扎着挥舞$2的$3, $4法术无效." },
        { regex: /(.+) casts (.+) at (.+) but it seems to fizzle\./, replacement: "$1施放$2在$3, 但看起来失效了." },
        { regex: /(.+) tries to explain the details of (.+) to (.+) but (.+) don't seem to understand\./, replacement: "$1试图向$3解释$2的细节, 但$4似乎不理解." },
        { regex: /(.+) tries to teach (.+) (.+) but (.+) don't seem to have ̶i̶n̶s̶t̶a̶l̶l̶e̶d̶ embraced Magic™\./, replacement: "$1试图教$3$2, 但$4似乎没有 embraced Magic™." },
        { regex: /(.+)\'s (.+) fizzles when cast on (.+), none of its effects allowed to take hold\./, replacement: "$1的$2消失了, 没有任何效果." },
        { regex: /(.+)\'s paired spell fizzles as it attempts to pair with (.+)\./, replacement: "$1的配对法术消失了, 当尝试与$2配对时." },
        { regex: /(.+) squirms as (.+) arousal is paired\./, replacement: "$1扭动不安, 当$2的情欲被配对时." },
        { regex: /(.+) lets out a quiet gasp as the pleasure center of (.+) mind starts to tingle\./, replacement: "$1发出轻轻的呼吸声, 因为$2心灵的愉悦中心开始发麻." },
        { regex: /(.+)\'s mind is already full of spells. (.+) must forget one before (.+) can learn (.+)\./, replacement: "$1的心灵已经充满了咒语.$2必须忘记一个才能学会$4." },
        { regex: /(.+) already knows a spell called (.+) and ignores (.+) new instructions\./, replacement: "$1已经知道一个名为$2的咒语, 忽略了$3的新指示." },
        { regex: /(.+) grins as they finally understand the details of (.+) and memorizes it for later\./, replacement: "$1露出笑容, 因为他们终于理解了$2的细节, 并把它记在心里以备将来." },
        { regex: /(.+) gulps down (.+)'s (.+)\./, replacement: "$1吞下了$2的$3." },
        { regex: /(.+) leads (.+) out of the room by the (.+)\./, replacement: "$1牵着$2走出房间." },
        { regex: /(.+) leads (.+) and (.+) out of the room\./, replacement: "$1带着$2和$3走出房间." },
        { regex: /(.+) drags (.+) out of the room with a wince\./, replacement: "$1拖着$2一边皱着眉走出房间." },
        { regex: /(.+)\'s (.+) state wears off\./, replacement: "$1的$2状态消失了." },
        { regex: /(.+) (.+) successfully defends against (.+)'s (.+) attempt to force (.+) to drink (.+) (.+), spilling drink all over\./, replacement: "$1 $2 成功地抵御了$3的$4企图强迫$5喝 $6 $7, 饮料洒得到处都是." },
        { regex: /(.+) (.+) manages to wrest (.+)'s (.+) (.+) out of (.+) grasp\!/, replacement: "$1$2设法夺过$3的$4$5脱离了$6的控制!" },
        { regex: /(.+) makes an activity roll and gets: (.+) (.+)/, replacement: "$1进行一次活动检定并获得: $2 $3" },
        { regex: /(.+) makes an activity check attack against (.+)\!/, replacement: "$1进行一次活动检定攻击, 攻击目标是$2!" },
        { regex: /(.+) makes an activity check defending from (.+)\!/, replacement: "$1进行一次活动检定防御, 防御来自$2!" },
        { regex: /(.+) (.+) manages to get (.+) (.+) past (.+)'s (.+) lips, forcing (.+) to swallow\./, replacement: "$1$2设法让$3$4经过$5的$6, 迫使$7吞咽." },
        { regex: /(.+) lets out a long low moan as (.+)'s drink burns pleasurably down (.+) throat\./, replacement: "$1发出长长的低吟, 当$2的饮料愉快地灼烧着$3的喉咙." },
        { regex: /(.+) gulps and quivers as (.+) body is slowly flooded with (.+)'s aphrodisiac\./, replacement: "$1低声喘息, 当$2的身体逐渐被$3的催情剂淹没." },
        { regex: /(.+) gasps, snapping back into (.+) senses confused and blushing\./, replacement: "$1喘息, 突然回到$2的意识中, 感到困惑而脸红." },
        { regex: /(.+) groans as air is allowed back into (.+) lungs\./, replacement: "$1呻吟着, 当空气重新进入$2的肺部时." },
        { regex: /(.+)\'s eyes flutter as (.+) wraps (.+) hand around (.+) neck\./, replacement: "$1的眼睛眨动着, 当$2用$4的手环绕着$3的脖子时." },
        { regex: /(.+) gasps for air as (.+) tightens (.+) grip on (.+) neck\./, replacement: "$1为了呼吸而喘息, 当$2在$4的脖子上紧紧抓着时." },
        { regex: /(.+)\'s face runs flush, choking as (.+) presses firmly against (.+) neck, barely allowing any air to (.+) lungs\./, replacement: "$1的脸颊泛起红潮, 当$2紧紧压在$4的脖子上, 几乎不让空气进入$5的肺部时." },
        { regex: /(.+) gasps in relief as (.+) releases (.+) pressure on (.+) neck\./, replacement: "$1松了口气, 当$2释放对$4的压力时." },
        { regex: /(.+) chokes and spasms, struggling in (.+) gag\./, replacement: "$1呛着并痉挛, 挣扎在$2的口球中." },
        { regex: /(.+) convulses weakly with a moan, (.+) eyes rolling back as (.+) clenches around (.+) throat even tighter\./, replacement: "$1微弱地抽搐着发出呻吟声, 当$2更紧地锁紧$4的喉咙时, $3的眼睛翻白." },
        { regex: /(.+) convulses weakly with a moan, (.+) eyes rolling back as (.+) lungs scream for air\./, replacement: "$1微弱地抽搐着发出呻吟声, 当$2的眼睛开始翻白时, $4的肺部呼吁空气." },
        { regex: /(.+) snaps back into (.+) senses at (.+)'s voice\./, replacement: "$1突然回到$2的意识中, 听到了$3的声音." },
        { regex: /(.+) (.+)manages to get (.+) (.+) past (.+)'s (.+)lips, forcing (.+) to swallow\./, replacement: "$1$2设法让$3$4经过$5的$6, 迫使$7吞咽." },
        { regex: /(.+) (.+) manages to get (.+) (.+) past (.+)'s (.+) lips, forcing (.+) to swallow it\./, replacement: "$1$2设法让$3$4经过$5的$6, 迫使$7吞咽它." },
        { regex: /(.+) (.+) successfully defends against (.+)'s (.+) attempt to force (.+) to drink (.+) (.+)\./, replacement: "$1$2成功抵御了$3的$4企图迫使$5喝下$6$7." },
        { regex: /(.+) leads (.+) and (.+) out of the room by (.+) ears\./, replacement: "$1带着$2和$3走出房间, 拉着$4的耳朵." },
        { regex: /(.+) roughly pulls (.+) and (.+) out of the room by (.+) arms\./, replacement: "$1粗暴地拉着$2和$3走出房间, 抓住$4的手臂." },
        { regex: /(.+) tugs (.+) and (.+) out of the room by (.+) tongues\./, replacement: "$1拽着$2和$3走出房间, 用$4的舌头." },
        { regex: /(.+) tries (.+) best to escape from (.+)'s grip\.\.\./, replacement: "$1竭尽全力从$3的控制中挣脱..." },
        { regex: /(.+)\'s eyes start to roll back with a groan as (.+) completely closes (.+) airway with (.+) hand\./, replacement: "$1的眼睛开始滚动, 发出呻吟声, 当$2用$4的手完全封闭$3的气道时." },
    ];





    笨蛋Luzi.hookFunction("ChatRoomMessage", 0, (args, next) => {

        let language = localStorage.getItem("BondageClubLanguage");
        if (language === "CN" || language === "TW") {
            const data = args[0];
            if (data.Content === 'Beep') {
                const filteredDictionary = data.Dictionary.filter(item => item.Tag === 'msg');
                const filteredObject = filteredDictionary[0];
                if (filteredObject) {
                    translations.forEach(({ regex, replacement }) => {
                        filteredObject.Text = filteredObject.Text.replace(regex, replacement);
                    });
                    if (filteredObject.Text.indexOf("herself") !== -1) {
                        filteredObject.Text = filteredObject.Text.replace(/herself/g, "她自己");
                    }
                    if (filteredObject.Text.indexOf("her") !== -1) {
                        filteredObject.Text = filteredObject.Text.replace(/her/g, "她");
                    }
                    if (filteredObject.Text.indexOf("she") !== -1) {
                        filteredObject.Text = filteredObject.Text.replace(/she/g, "她");
                    }
                    if (filteredObject.Text.indexOf("net") !== -1) {
                        filteredObject.Text = filteredObject.Text.replace(/net/g, "网");
                    }
                    // console.log(filteredObject.Text);
                }
                // console.log(data);
            }
        }

        next(args);
    });

    笨蛋Luzi.hookFunction("ServerSend", 0, (args, next) => {
        let language = localStorage.getItem("BondageClubLanguage");
        if (language === "CN" || language === "TW") {
            const data = args[1];
            if (data.Content === 'Beep') {
                const filteredDictionary = data.Dictionary.filter(item => item.Tag === 'msg');
                const filteredObject = filteredDictionary[0];
                if (filteredObject) {
                    translations.forEach(({ regex, replacement }) => {
                        filteredObject.Text = filteredObject.Text.replace(regex, replacement);
                    });
                    if (filteredObject.Text.indexOf("herself") !== -1) {
                        filteredObject.Text = filteredObject.Text.replace(/herself/g, "她自己");
                    }
                    if (filteredObject.Text.indexOf("her") !== -1) {
                        filteredObject.Text = filteredObject.Text.replace(/her/g, "她");
                    }
                    if (filteredObject.Text.indexOf("she") !== -1) {
                        filteredObject.Text = filteredObject.Text.replace(/she/g, "她");
                    }
                    if (filteredObject.Text.indexOf("net") !== -1) {
                        filteredObject.Text = filteredObject.Text.replace(/net/g, "网");
                    }
                    // console.log(filteredObject.Text);
                }
                // console.log(data);
            }
        }
        next(args);
    });
    // ========================================================================
    // ========================================================================
















    // ========================================================================
    // ========================================================================
    // ========================================================================
    // ========================================================================
    // ========================================================================
    // ========================================================================
    function getMountArray(name, data, assetgroup) {
        let characterInventories = [];
        const character = name;
        const mountData = InventoryGet(data, assetgroup);
        if (mountData) {
            characterInventories.push({
                characterName: character,
                itemName: mountData.Asset ? mountData.Asset.Name : "",
                playerWithReins: mountData.Craft?.Description,
            });
        }
        return characterInventories;
    }
    w.saddleMapping = new Map();
    var saddleData;

    w.bedMapping = new Map();
    var bedData;


    patchFunction("DrawCharacter", {
        'if (CurrentScreen != "ChatRoom" || ChatRoomHideIconState <= 1)': '',
        'DrawArousalMeter(C, X, Y, Zoom);': '',
        'OnlineGameDrawCharacter(C, X, Y, Zoom);': '',
        'if (C.HasHiddenItems) DrawImageZoomCanvas("Screens/Character/Player/HiddenItem.png", DrawCanvas, 0, 0, 86, 86, X + 54 * Zoom, Y + 880 * Zoom, 70 * Zoom, 70 * Zoom);': '',
        'if ((C.Name != "") && ((CurrentModule == "Room") || (CurrentModule == "Online" && !(CurrentScreen == "ChatRoom" && ChatRoomHideIconState >= 3)) || ((CurrentScreen == "Wardrobe") && !C.IsPlayer())) && (CurrentScreen != "Private") && (CurrentScreen != "PrivateBed") && (CurrentScreen != "PrivateRansom"))': '',
        'if ((CurrentScreen !== "ChatRoom") || (ChatRoomMapViewIsActive() === false) || (CurrentCharacter != null))': '',
        'if ((!Player.IsBlind() && BlurLevel <= 10) || (Player.GameplaySettings && Player.GameplaySettings.SensDepChatLog == "SensDepLight"))': '',
        'DrawCanvas.font = CommonGetFont(30);': '',
        'const NameOffset = CurrentScreen == "ChatRoom" && (ChatRoomCharacter.length > 5 || (ChatRoomCharacter.length == 5 && CommonPhotoMode)) && CurrentCharacter == null ? -4 : 0;': '',
        'DrawText(CharacterNickname(C), X + 255 * Zoom, Y + 980 * Zoom + NameOffset, (CommonIsColor(C.LabelColor)) ? C.LabelColor : "White", "Black");': '',
        'DrawCanvas.font = CommonGetFont(36);': '',
        'SourcePos: [0, YStart, Canvas.width, SourceHeight],': 'SourcePos: [],',


        // Options = {}
    });

    笨蛋Luzi.hookFunction("DrawCharacter", 10, (args, next) => {
        var C = args[0];
        var X = args[1];
        var Y = args[2];
        var Zoom = args[3];
        var IsHeightResizeAllowed = args[4];
        var DrawCanvas = args[5];

        // 乘骑 ------------------------------------------
        w.mountCharacterArray = getMountArray(args[0].Name, args[0], "ItemTorso");
        // 鞍
        if (mountCharacterArray.length > 0 && mountCharacterArray[0].itemName === "鞍_Luzi" && ChatRoomChatHidden === false) {
            saddleData = args[0];
            saddleMapping.set(saddleData.Name, {
                saddleData1: args[0],
                saddleDataX: args[1],
                saddleDataY: args[2],
                saddleDataZ: args[3],
            });

        }
        // 缰绳
        if (mountCharacterArray.length > 0 && mountCharacterArray[0].itemName === "缰绳_Luzi" && ChatRoomChatHidden === false) {
            if (saddleMapping.has(mountCharacterArray[0].playerWithReins)) {
                const newXValue = saddleMapping.get(mountCharacterArray[0].playerWithReins).saddleDataX; // 这里加运算符可以修改位置
                args[1] = newXValue;
                args[2] = saddleMapping.get(mountCharacterArray[0].playerWithReins).saddleDataY;
                args[3] = saddleMapping.get(mountCharacterArray[0].playerWithReins).saddleDataZ;
            }
        }
        // 乘骑 ------------------------------------------

        // 床 ------------------------------------------
        w.bedCharacterArray = getMountArray(args[0].Name, args[0], "ItemDevices");
        // 鞍 前面玩家
        if (bedCharacterArray.length > 0 && bedCharacterArray[0].itemName === "床左边_Luzi" && ChatRoomChatHidden === false) {
            if (ChatRoomCharacterCount == 2) {
                const newXValue = args[1] - 80; // 这里加运算符可以修改位置
                args[1] = newXValue;
            }
            if (ChatRoomCharacterCount == 3) {
                const newXValue = args[1] - 83; // 这里加运算符可以修改位置
                args[1] = newXValue;
            }
            if (ChatRoomCharacterCount == 4) {
                const newXValue = args[1] - 60; // 这里加运算符可以修改位置
                args[1] = newXValue;
            }
            if (ChatRoomCharacterCount >= 5) {
                const newXValue = args[1] - 50; // 这里加运算符可以修改位置
                args[1] = newXValue;
            }
            bedData = args[0];
            bedMapping.set(bedData.Name, {
                bedData1: args[0],
                bedDataX: args[1],
                bedDataY: args[2],
                bedDataZ: args[3],
            });

        }
        // 缰绳 后面玩家
        if (bedCharacterArray.length > 0 && bedCharacterArray[0].itemName === "床右边_Luzi" && ChatRoomChatHidden === false) {
            if (bedMapping.has(bedCharacterArray[0].playerWithReins)) {
                if (ChatRoomCharacterCount == 2) {
                    const newXValue = bedMapping.get(bedCharacterArray[0].playerWithReins).bedDataX + 180; // 这里加运算符可以修改位置
                    args[1] = newXValue;
                }
                if (ChatRoomCharacterCount == 3) {
                    const newXValue = bedMapping.get(bedCharacterArray[0].playerWithReins).bedDataX + 156; // 这里加运算符可以修改位置
                    args[1] = newXValue;
                }
                if (ChatRoomCharacterCount == 4) {
                    const newXValue = bedMapping.get(bedCharacterArray[0].playerWithReins).bedDataX + 116; // 这里加运算符可以修改位置
                    args[1] = newXValue;
                }
                if (ChatRoomCharacterCount >= 5) {
                    const newXValue = bedMapping.get(bedCharacterArray[0].playerWithReins).bedDataX + 96; // 这里加运算符可以修改位置
                    args[1] = newXValue;
                }
                args[2] = bedMapping.get(bedCharacterArray[0].playerWithReins).bedDataY;
                args[3] = bedMapping.get(bedCharacterArray[0].playerWithReins).bedDataZ;

                // const originalXValue = bedMapping.get(bedCharacterArray[0].playerWithReins).bedDataX;
                // const offset = 50; // 设置偏移量为 50 点
                // const newXValue = originalXValue - offset; // 计算新的位置
                // args[1] = newXValue;
            }
        }
        // 床 ------------------------------------------

        if (ChatRoomChatHidden === true) {
            w.saddleMapping.clear();
            w.bedMapping.clear();
        }

        next(args);

        if (!DrawCanvas) DrawCanvas = MainCanvas;

        var OverrideDark = (
            CurrentModule == "MiniGame"
            || ((Player.Effect.includes("VRAvatars") && C.Effect.includes("VRAvatars")))
            || CurrentScreen == "InformationSheet"
            || CurrentScreen === "Crafting"
            || (CurrentScreen === "ChatRoom") && (ChatRoomMapViewIsActive() === true) && (CurrentCharacter == null)
        );

        if ((C != null) && ((C.IsPlayer()) || (OverrideDark || Player.GetBlindLevel() < 3))) {

            const BlurLevel = Player.GetBlurLevel();// 如果需要，应用模糊滤镜
            if (!C.IsPlayer() && !OverrideDark && BlurLevel > 0) {
                MainCanvas.filter = `blur(${BlurLevel}px)`;
            }

            if (CurrentScreen != "ChatRoom" || ChatRoomHideIconState <= 1) {// 在某些条件下绘制性唤醒仪表盘和游戏图片
                DrawArousalMeter(C, X, Y, Zoom);
                OnlineGameDrawCharacter(C, X, Y, Zoom);
                if (C.HasHiddenItems) DrawImageZoomCanvas("Screens/Character/Player/HiddenItem.png", DrawCanvas, 0, 0, 86, 86, X + 54 * Zoom, Y + 880 * Zoom, 70 * Zoom, 70 * Zoom);
            }
            // 在角色下面绘制角色名称
            if ((C.Name != "") && ((CurrentModule == "Room") || (CurrentModule == "Online" && !(CurrentScreen == "ChatRoom" && ChatRoomHideIconState >= 3)) || ((CurrentScreen == "Wardrobe") && !C.IsPlayer())) && (CurrentScreen != "Private") && (CurrentScreen != "PrivateBed") && (CurrentScreen != "PrivateRansom"))
                if ((CurrentScreen !== "ChatRoom") || (ChatRoomMapViewIsActive() === false) || (CurrentCharacter != null))
                    if ((!Player.IsBlind() && BlurLevel <= 10) || (Player.GameplaySettings && Player.GameplaySettings.SensDepChatLog == "SensDepLight")) {
                        DrawCanvas.font = CommonGetFont(30);
                        const NameOffset = CurrentScreen == "ChatRoom" && (ChatRoomCharacter.length > 5 || (ChatRoomCharacter.length == 5 && CommonPhotoMode)) && CurrentCharacter == null ? -4 : 0;
                        DrawText(CharacterNickname(C), X + 255 * Zoom, Y + 980 * Zoom + NameOffset, (CommonIsColor(C.LabelColor)) ? C.LabelColor : "White", "Black");
                        DrawCanvas.font = CommonGetFont(36);
                    }

        }


    });




    // 为了
    笨蛋Luzi.hookFunction("DrawStatus", 10, (args, next) => {
        next(args);
        // 根据玩家数量调整缩放和绘制坐标
        const Space = ChatRoomCharacterCount >= 2 ? 1000 / Math.min(ChatRoomCharacterCount, 5) : 500;
        const Zoom = ChatRoomCharacterZoom;
        const X = ChatRoomCharacterCount >= 3 ? (Space - 500 * Zoom) / 2 : 0;
        const Y = ChatRoomCharacterCount <= 5 ? 1000 * (1 - Zoom) / 2 : 0;


        // 乘骑 ------------------------------------------
        // 用于存储找到的角色的数组
        w.foundCharacters = [];
        w.foundCharacters2 = [];
        for (let i = 0; i < ChatRoomCharacterDrawlist.length; i++) {
            const appearanceArray = ChatRoomCharacterDrawlist[i].Appearance;
            // 使用内层的 for 循环遍历当前数组项的 Appearance 数组
            for (let j = 0; j < appearanceArray.length; j++) {
                // 获取当前数组项的 Asset 对象
                const currentAsset = appearanceArray[j].Asset;

                // 检查 Asset.Name 是否等于 "鞍_Luzi"
                if (currentAsset.Name === "鞍_Luzi") {
                    // 先从 foundCharacters 数组中移除相同的角色
                    const index = foundCharacters.findIndex(char => char.Name === ChatRoomCharacterDrawlist[i].Name);
                    if (index !== -1) {
                        foundCharacters.splice(index, 1);
                    }
                    // 将找到的角色添加到数组中（排在最后）
                    foundCharacters2.push(ChatRoomCharacterDrawlist[i]);
                } else if (currentAsset.Name === "缰绳_Luzi") {
                    // 将找到的角色添加到数组中
                    foundCharacters.push(ChatRoomCharacterDrawlist[i]);
                }
            }
        }

        // // 先绘制缰绳角色的数组
        // for (let C = 0; C < ChatRoomCharacterDrawlist.length; C++) {
        //     let ChatRoomCharacterX = C >= 5 ? ChatRoomCharacterX_Lower : ChatRoomCharacterX_Upper;
        //     if (!(Player.GraphicsSettings && Player.GraphicsSettings.CenterChatrooms)) ChatRoomCharacterX = 0;
        //     const Zoom = ChatRoomCharacterZoom;
        //     const CharX = ChatRoomCharacterX + (ChatRoomCharacterCount == 1 ? 0 : X + (C % 5) * Space);
        //     const CharY = ChatRoomCharacterCount == 1 ? 0 : Y + Math.floor(C / 5) * 500;
        //     if ((ChatRoomCharacterCount == 1) && ChatRoomCharacterDrawlist[C].ID !== 0) continue;
        //     if (foundCharacters.includes(ChatRoomCharacterDrawlist[C])) {
        //         // 如果在数组中,可以在这里执行额外的操作
        //         DrawCharacter(ChatRoomCharacterDrawlist[C], CharX, CharY, Zoom);
        //     }
        // }

        // 再绘制鞍角色的数组
        for (let C = 0; C < ChatRoomCharacterDrawlist.length; C++) {
            let ChatRoomCharacterX = C >= 5 ? ChatRoomCharacterX_Lower : ChatRoomCharacterX_Upper;
            if (!(Player.GraphicsSettings && Player.GraphicsSettings.CenterChatrooms)) ChatRoomCharacterX = 0;
            const Zoom = ChatRoomCharacterZoom;
            const CharX = ChatRoomCharacterX + (ChatRoomCharacterCount == 1 ? 0 : X + (C % 5) * Space);
            const CharY = ChatRoomCharacterCount == 1 ? 0 : Y + Math.floor(C / 5) * 500;
            if ((ChatRoomCharacterCount == 1) && ChatRoomCharacterDrawlist[C].ID !== 0) continue;
            if (foundCharacters2.includes(ChatRoomCharacterDrawlist[C])) {
                // 如果在数组中,可以在这里执行额外的操作
                DrawCharacter(ChatRoomCharacterDrawlist[C], CharX, CharY, Zoom);
            }
        }
        // 乘骑 ------------------------------------------

        // bed ------------------------------------------
        // 用于存储找到的角色的数组
        w.foundCharactersbed = [];
        w.foundCharacters2bed = [];
        for (let i = 0; i < ChatRoomCharacterDrawlist.length; i++) {
            const appearanceArray = ChatRoomCharacterDrawlist[i].Appearance;
            // 使用内层的 for 循环遍历当前数组项的 Appearance 数组
            for (let j = 0; j < appearanceArray.length; j++) {
                // 获取当前数组项的 Asset 对象
                const currentAsset = appearanceArray[j].Asset;

                // 检查 Asset.Name 是否等于 "床左边_Luzi"
                if (currentAsset.Name === "床左边_Luzi") {
                    // 先从 foundCharactersbed 数组中移除相同的角色
                    const index = foundCharactersbed.findIndex(char => char.Name === ChatRoomCharacterDrawlist[i].Name);
                    if (index !== -1) {
                        foundCharactersbed.splice(index, 1);
                    }
                    // 将找到的角色添加到数组中（排在最后）
                    foundCharacters2bed.push(ChatRoomCharacterDrawlist[i]);
                } else if (currentAsset.Name === "床右边_Luzi") {
                    // 将找到的角色添加到数组中
                    foundCharactersbed.push(ChatRoomCharacterDrawlist[i]);
                }
            }
        }

        // // 再绘制鞍角色的数组
        // for (let C = 0; C < ChatRoomCharacterDrawlist.length; C++) {
        //     let ChatRoomCharacterX = C >= 5 ? ChatRoomCharacterX_Lower : ChatRoomCharacterX_Upper;
        //     if (!(Player.GraphicsSettings && Player.GraphicsSettings.CenterChatrooms)) ChatRoomCharacterX = 0;
        //     const Zoom = ChatRoomCharacterZoom;
        //     const CharX = ChatRoomCharacterX + (ChatRoomCharacterCount == 1 ? 0 : X + (C % 5) * Space);
        //     const CharY = ChatRoomCharacterCount == 1 ? 0 : Y + Math.floor(C / 5) * 500;
        //     if ((ChatRoomCharacterCount == 1) && ChatRoomCharacterDrawlist[C].ID !== 0) continue;
        //     if (foundCharacters2bed.includes(ChatRoomCharacterDrawlist[C])) {
        //         // 如果在数组中,可以在这里执行额外的操作
        //         DrawCharacter(ChatRoomCharacterDrawlist[C], CharX, CharY, Zoom);
        //     }
        // }

        // 先绘制缰绳角色的数组
        for (let C = 0; C < ChatRoomCharacterDrawlist.length; C++) {
            let ChatRoomCharacterX = C >= 5 ? ChatRoomCharacterX_Lower : ChatRoomCharacterX_Upper;
            if (!(Player.GraphicsSettings && Player.GraphicsSettings.CenterChatrooms)) ChatRoomCharacterX = 0;
            const Zoom = ChatRoomCharacterZoom;
            const CharX = ChatRoomCharacterX + (ChatRoomCharacterCount == 1 ? 0 : X + (C % 5) * Space);
            const CharY = ChatRoomCharacterCount == 1 ? 0 : Y + Math.floor(C / 5) * 500;
            if ((ChatRoomCharacterCount == 1) && ChatRoomCharacterDrawlist[C].ID !== 0) continue;
            if (foundCharactersbed.includes(ChatRoomCharacterDrawlist[C])) {
                // 如果在数组中,可以在这里执行额外的操作
                DrawCharacter(ChatRoomCharacterDrawlist[C], CharX, CharY, Zoom);
            }
        }
        // bed ------------------------------------------


    });


    // var isLogin2 = false;
    // 笨蛋Luzi.hookFunction('LoginResponse', 0, (args, next) => {
    //     if (!isLogin2) {
    //         patchFunction("ChatRoomDrawCharacter", {
    //             "DrawCharacter(ChatRoomCharacterDrawlist[C], CharX, CharY, Zoom);": '',

    //         });
    //         isLogin2 = true;
    //     }
    //     next(args);
    // });


    笨蛋Luzi.hookFunction("ChatRoomSync", 10, (args, next) => {
        let data = args;
        if (data) {
            w.saddleMapping.clear();
            w.bedMapping.clear();
        }
        next(args);
    });

    笨蛋Luzi.hookFunction("ChatRoomSyncMemberLeave", 10, (args, next) => {
        let data = args;
        if (data) {
            w.saddleMapping.clear();
            w.bedMapping.clear();
        }
        next(args);
    });
    // ========================================================================
    // ========================================================================

    function Hidden(text) {
        ServerSend("ChatRoomChat", {
            Content: `${text}`,
            Type: "Hidden",
        })
    };

    笨蛋Luzi.hookFunction("ChatRoomSync", 10, (args, next) => {
        setTimeout(() => {
            Hidden("(._.)");
        }, 2000);
        next(args);

    });
    笨蛋Luzi.hookFunction("ChatRoomSyncMemberLeave", 10, (args, next) => {
        setTimeout(() => {
            Hidden("(._.)");
        }, 2000);
        next(args);
    });
    笨蛋Luzi.hookFunction("ChatRoomMessage", 10, (args, next) => {
        let data = args[0]
        if (data.Content === 'ServerEnter') {
            setTimeout(() => {
                Hidden("(._.)");
            }, 2000);
        }
        next(args)
    });

    let CRCharacter;
    笨蛋Luzi.hookFunction("ChatRoomMessage", 0, (args, next) => {
        const data = args[0];
        if (data.Content === '╰(*°▽°*)╯BETA' && data.Type === 'Hidden') {
            CRCharacter = ChatRoomCharacterDrawlist.find(C => C.MemberNumber === data.Sender);
            // console.log(CRCharacter)
            if (CRCharacter) {
                CRCharacter.ECHOBETA = true;
            }
        }
        if (data.Content === '╰(*°▽°*)╯' && data.Type === 'Hidden') {
            CRCharacter = ChatRoomCharacterDrawlist.find(C => C.MemberNumber === data.Sender);
            // console.log(CRCharacter)
            if (CRCharacter) {
                CRCharacter.ECHO = true;
            }
        }
        if (data.Content === '(._.)' && data.Type === 'Hidden') {
            CRCharacter = ChatRoomCharacterDrawlist.find(C => C.MemberNumber === data.Sender);
            // console.log(CRCharacter)
            if (CRCharacter) {
                CRCharacter.ECHO2 = true;
            }
        }
        next(args);
    });

    笨蛋Luzi.hookFunction("ChatRoomDrawCharacterStatusIcons", 10, (args, next) => {
        if (ChatRoomHideIconState == 0) {
            let C = args[0];
            let CharX = args[1];
            let CharY = args[2];
            let Zoom = args[3];
            if (C.ECHOBETA) {
                DrawImageResize("data:image/png;base64,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",
                    CharX + 420 * Zoom, CharY + 5, 35 * Zoom, 35 * Zoom);
            }
            if (C.ECHO) {
                DrawImageResize("data:image/png;base64,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",
                    CharX + 420 * Zoom, CharY + 5, 35 * Zoom, 35 * Zoom);
            }
            if (C.ECHO2) {
                DrawImageResize("data:image/png;base64,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",
                    CharX + 420 * Zoom, CharY + 5, 35 * Zoom, 35 * Zoom);
            }

        }
        next(args);

    });

    // ========================================================================
    // ========================================================================

})();




