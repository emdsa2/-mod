// ==UserScript==
// @name         BC 动作拓展
// @namespace    https://www.bondageprojects.com/
// @version      0.2.0
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
    const MOD_VERSION = "0.2.0";


    const mod = bcModSdk.registerMod({
        name: MOD_NAME,
        fullName: MOD_FULL_NAME,
        version: MOD_VERSION
    });


    //============================================================
    //============================================================
    mod.hookFunction("ServerSend", 5, (args, next) => { // ServerSend 只能检测自己发出的聊天信息 可以用来替换自己发出去的文字
        if (args[0] == "ChatRoomChat" && args[1]?.Type == "Activity") {
            let data = args[1];
            let actName = data.Dictionary[3]?.ActivityName ?? "";
            if (actName.indexOf("Act_") == 0) { // 这个条件表示只有当消息中包含以 "Act_" 开头的自定义活动时,才会执行下面的操作
                // 拦截自定义活动的发送并执行自定义操作
                let { metadata, substitutions } = ChatRoomMessageRunExtractors(data, Player)
                let msg = ActivityDictionaryText(data.Content);
                msg = CommonStringSubstitute(msg, substitutions ?? [])
                data.Dictionary.push({
                    Tag: "MISSING ACTIVITY DESCRIPTION FOR KEYWORD " + data.Content,
                    Text: msg
                });
            }
        }
        return next(args);
    });

    //============================================================
    //============================================================
    /**
     * 创建活动对象的函数
     * @param {string} name - 活动的名称
     * @param {string} target - 活动的目标
     * @param {string} targetSelf - 活动的自身目标
     * @param {number} maxProgress - 活动的最大进度
     * @param {number} maxProgressSelf - 活动自身的最大进度
     * @param {Array} activityExpression - 活动表达式,包含一系列的动作
     * @returns {object} - 包含创建的活动信息的对象
     */
    function createActivity(name, target, targetSelf, maxProgress, maxProgressSelf, prerequisite, activityExpression) {
        const activity = {
            Name: `Act_${name}`,
            Target: [target],
            TargetSelf: [targetSelf],
            MaxProgress: maxProgress,
            MaxProgressSelf: maxProgressSelf,
            Prerequisite: prerequisite,
            ActivityExpression: activityExpression,
        };
        ActivityFemale3DCG.push(activity);
        ActivityFemale3DCGOrdering.push(activity.Name);
    }

    /**
     * 活动添加文字描述
     * @param {string} name - 活动的名称
     * @param {string} target - 对别人的描述
     * @param {string} targetSelf - 对自己的描述
     * @returns {Array} - 包含添加的值的数组
     */
    function ActivityDictionaryadd(name, target, targetSelf) {
        const addedValues = [];
        // 使用 filter 函数来检查 Name 属性中是否包含指定名称
        const actActivityFemale3DCG = ActivityFemale3DCG.filter(activity => activity.Name.includes(name));
        if (actActivityFemale3DCG.length > 0) {
            const actName = actActivityFemale3DCG[0].Name;
            const actNameWithoutPrefix = actName.substring(4);
            const actTarget = actActivityFemale3DCG[0].Target;
            const actTargetSelf = actActivityFemale3DCG[0].TargetSelf;

            addedValues.push([`ActivityAct_${actNameWithoutPrefix}`, `${actNameWithoutPrefix}`]);
            if (actTarget.length > 0) {
                addedValues.push([`Label-ChatOther-${actTarget}-${actName}`, `${actNameWithoutPrefix}`]);
                addedValues.push([`ChatOther-${actTarget}-${actName}`, target]);
            }
            if (actTargetSelf.length > 0) {
                addedValues.push([`Label-ChatSelf-${actTargetSelf}-${actName}`, `${actNameWithoutPrefix}`]);
                addedValues.push([`ChatSelf-${actTargetSelf}-${actName}`, targetSelf]);
            }
        }
        // 返回添加的值的数组
        return addedValues;
    }

    // name target targetSelf
    var activityAdd = {
        // 头
        Act_歪头: { A: createActivity("歪头", "", "ItemNeck", 50, 50, [], []), B: ActivityDictionaryadd("Act_歪头", "", "SourceCharacter歪头.") },
        Act_环顾四周: { A: createActivity("环顾四周", "", "ItemNeck", 50, 50, [], []), B: ActivityDictionaryadd("Act_环顾四周", "", "SourceCharacter环视周围.") },
        Act_上下打量: { A: createActivity("上下打量", "ItemHead", "", 50, 50, [], []), B: ActivityDictionaryadd("Act_上下打量", "SourceCharacter仔细打量TargetCharacter", "") },
        Act_闭上眼睛: { A: createActivity("闭上眼睛", "", "ItemHead", 50, 50, [], []), B: ActivityDictionaryadd("Act_闭上眼睛", "", "SourceCharacter闭上了眼睛.") },
        Act_眼睛呆滞: { A: createActivity("眼睛呆滞", "", "ItemHead", 50, 50, [], []), B: ActivityDictionaryadd("Act_眼睛呆滞", "", "SourceCharacter眼睛呆滞地看着前方.") },
        Act_眼睛湿润: { A: createActivity("眼睛湿润", "", "ItemHead", 50, 50, [], []), B: ActivityDictionaryadd("Act_眼睛湿润", "", "SourceCharacter眼角泛着泪光.") },
        Act_流眼泪: { A: createActivity("流眼泪", "", "ItemHead", 50, 50, [], []), B: ActivityDictionaryadd("Act_流眼泪", "", "SourceCharacter眼泪从眼角流下.") },
        //  吞咽
        Act_张开嘴: { A: createActivity("张开嘴", "", "ItemMouth", 50, 50, [], []), B: ActivityDictionaryadd("Act_张开嘴", "", "SourceCharacter张开了嘴") },
        Act_吞咽口水: { A: createActivity("吞咽口水", "", "ItemNeck", 50, 50, [], []), B: ActivityDictionaryadd("Act_吞咽口水", "", "SourceCharacter吞咽嘴里的口水") },
        Act_流口水: { A: createActivity("流口水", "", "ItemMouth", 50, 50, [], []), B: ActivityDictionaryadd("Act_流口水", "", "SourceCharacter的口水顺着嘴角流下") },
        //声音
        Act_轻声喘息: { A: createActivity("轻声喘息", "", "ItemMouth", 50, 50, [], ["Talk"]), B: ActivityDictionaryadd("Act_轻声喘息", "", "SourceCharacter发出轻声地喘息.") },
        Act_打哈欠: { A: createActivity("打哈欠", "", "ItemMouth", 50, 50, ["UseMouth"], []), B: ActivityDictionaryadd("Act_打哈欠", "", "SourceCharacter张嘴打哈欠.") },
        //舔吸
        Act_舔手: { A: createActivity("舔手", "ItemHands", "ItemHands", 50, 50, ["UseMouth"], []), B: ActivityDictionaryadd("Act_舔手", "SourceCharacter舔TargetCharacter的手.", "SourceCharacter舔PronounPossessive自己的手.") },
        Act_舔手指: { A: createActivity("舔手指", "ItemHands", "ItemHands", 50, 50, ["UseMouth"], []), B: ActivityDictionaryadd("Act_舔手指", "SourceCharacter舔TargetCharacter的手指.", "SourceCharacter舔PronounPossessive自己的手指.") },
        Act_舔脚: { A: createActivity("舔脚", "ItemBoots", "ItemBoots", 50, 50, ["UseTougue"], []), B: ActivityDictionaryadd("Act_舔脚", "SourceCharacter舔TargetCharacter的脚.", "SourceCharacter舔PronounPossessive自己的脚.") },
        Act_舔脸: { A: createActivity("舔脸", "ItemMouth", "", 50, 50, ["UseMouth"], []), B: ActivityDictionaryadd("Act_舔脸", "SourceCharacter舔TargetCharacter的脸.", "") },
        Act_吮吸手指: { A: createActivity("吮吸手指", "ItemHands", "ItemHands", 50, 50, ["UseMouth"], []), B: ActivityDictionaryadd("Act_吮吸手指", "SourceCharacter吮吸TargetCharacter的手指.", "SourceCharacter吮吸PronounPossessive的手指.") },
        Act_嗅: { A: createActivity("嗅", "ItemHands", "ItemHands", 50, 50, [], []), B: ActivityDictionaryadd("Act_嗅", "SourceCharacter用鼻子嗅了嗅TargetCharacter的手.", "SourceCharacter用鼻子嗅了嗅自己的手.") },
        //姿势
        Act_跪下: { A: createActivity("跪下", "", "ItemLegs", 50, 50, ["UseArms"], []), B: ActivityDictionaryadd("Act_跪下", "", "SourceCharacter轻轻地跪了下来.") },
        Act_站起来: { A: createActivity("站起来", "", "ItemLegs", 50, 50, ["UseArms"], []), B: ActivityDictionaryadd("Act_站起来", "", "SourceCharacter手扶着地站了起来.") },
        Act_跪着张开双腿: { A: createActivity("跪着张开双腿", "", "ItemLegs", 50, 50, ["UseArms"], []), B: ActivityDictionaryadd("Act_跪着张开双腿", "", "SourceCharacter张开了PronounPossessive的腿.") },
        Act_跪着合并双腿: { A: createActivity("跪着合并双腿", "", "ItemLegs", 50, 50, ["UseArms"], []), B: ActivityDictionaryadd("Act_跪着合并双腿", "", "SourceCharacter并拢了PronounPossessive的腿.") },
        Act_手放身后: { A: createActivity("手放身后", "", "ItemArms", 50, 50, ["UseArms"], []), B: ActivityDictionaryadd("Act_手放身后", "", "SourceCharacter把PronounPossessive的手放在了身后.") },
        Act_手放身前: { A: createActivity("手放身前", "", "ItemArms", 50, 50, ["UseArms"], []), B: ActivityDictionaryadd("Act_手放身前", "", "SourceCharacter把PronounPossessive的手放在了身前.") },
        Act_趴下: { A: createActivity("趴下", "", "ItemBoots", 50, 50, ["UseArms"], []), B: ActivityDictionaryadd("Act_趴下", "", "SourceCharacter手放身后趴在地上.") },
        Act_四肢着地: { A: createActivity("四肢着地", "", "ItemBoots", 50, 50, ["UseArms"], []), B: ActivityDictionaryadd("Act_四肢着地", "", "SourceCharacter四肢着地趴在地上.") },
        Act_起身跪下: { A: createActivity("起身跪下", "", "ItemBoots", 50, 50, ["UseArms"], []), B: ActivityDictionaryadd("Act_起身跪下", "", "SourceCharacter起身跪下.") },
        Act_爬到脚边: { A: createActivity("爬到脚边", "ItemBoots", "", 50, 50, ["UseArms"], []), B: ActivityDictionaryadd("Act_爬到脚边", "SourceCharacter爬到TargetCharacter的脚边.", "") },
        Act_蹭大腿: { A: createActivity("蹭大腿", "ItemLegs", "", 50, 50, ["UseArms"], []), B: ActivityDictionaryadd("Act_蹭大腿", "SourceCharacter用头轻轻蹭TargetCharacter的大腿.", "") },
        Act_蹭小腿: { A: createActivity("蹭小腿", "ItemFeet", "", 50, 50, ["UseArms"], []), B: ActivityDictionaryadd("Act_蹭小腿", "SourceCharacter用头轻轻蹭TargetCharacter的小腿.", "") },
        //脚
        Act_踮起双脚: { A: createActivity("踮起双脚", "", "ItemBoots", 50, 50, ["UseFeet"], []), B: ActivityDictionaryadd("Act_踮起双脚", "", "SourceCharacter踮起PronounPossessive的双脚.") },
        Act_摇晃脚踝: { A: createActivity("摇晃脚踝", "", "ItemBoots", 50, 50, [], []), B: ActivityDictionaryadd("Act_摇晃脚踝", "", "SourceCharacter摇晃PronounPossessive的脚踝.") },
        Act_伸出脚: { A: createActivity("伸出脚", "", "ItemBoots", 50, 50, ["UseFeet"], []), B: ActivityDictionaryadd("Act_伸出脚", "", "SourceCharacter伸出PronounPossessive的脚.") },
        Act_掰开双腿: { A: createActivity("掰开双腿", "ItemLegs", "", 50, 50, ["UseHands", "UseArms"], []), B: ActivityDictionaryadd("Act_掰开双腿", "SourceCharacter掰开TargetCharacter的双腿", "") },
        Act_脚托起下巴: { A: createActivity("脚托起下巴", "ItemMouth", "", 50, 50, ["HasKneel"], []), B: ActivityDictionaryadd("Act_脚托起下巴", "SourceCharacter用脚托起TargetCharacter的下巴.", "") },
        //手
        Act_戳脸: { A: createActivity("戳脸", "ItemMouth", "ItemMouth", 50, 50, ["UseHands", "UseArms"], []), B: ActivityDictionaryadd("Act_戳脸", "SourceCharacter戳了戳TargetCharacter的脸.", "SourceCharacter戳了戳自己的脸") },
        Act_捏脸: { A: createActivity("捏脸", "ItemMouth", "ItemMouth", 50, 50, ["UseHands", "UseArms"], []), B: ActivityDictionaryadd("Act_捏脸", "SourceCharacter捏了捏TargetCharacter的脸.", "SourceCharacter捏了捏自己的脸.") },
        Act_戳手臂: { A: createActivity("戳手臂", "ItemArms", "ItemArms", 50, 50, ["UseHands", "UseArms"], []), B: ActivityDictionaryadd("Act_戳手臂", "SourceCharacter戳了戳TargetCharacter的手臂.", "SourceCharacter戳了戳自己的手臂.") },
        Act_揉脸: { A: createActivity("揉脸", "ItemMouth", "ItemMouth", 50, 50, ["UseHands", "UseArms"], []), B: ActivityDictionaryadd("Act_揉脸", "SourceCharacter揉了揉TargetCharacter的脸.", "SourceCharacter揉了揉自己的脸.") },
        Act_摇晃手臂: { A: createActivity("摇晃手臂", "ItemArms", "ItemArms", 50, 50, ["UseHands"], []), B: ActivityDictionaryadd("Act_摇晃手臂", "SourceCharacter摇晃TargetCharacter的手臂.", "SourceCharacter摇晃自己的手臂.") },
        Act_轻推: { A: createActivity("轻推", ["ItemTorso"], "", 50, 50, ["UseHands", "UseArms"], []), B: ActivityDictionaryadd("Act_轻推", "SourceCharacter用手轻推TargetCharacter的身体.", "") },
        Act_托起脚: { A: createActivity("托起脚", "ItemBoots", "", 50, 50, ["UseHands", "UseArms"], []), B: ActivityDictionaryadd("Act_托起脚", "SourceCharacter托起TargetCharacter的脚.", "") },
        Act_扭动手腕: { A: createActivity("扭动手腕", "", "ItemHands", 50, 50, [], []), B: ActivityDictionaryadd("Act_扭动手腕", "", "SourceCharacter扭动PronounPossessive的手腕.") },
        Act_挠头: { A: createActivity("挠头", "", "ItemHead", 50, 50, ["UseHands", "UseArms"], []), B: ActivityDictionaryadd("Act_挠头", "", "SourceCharacter用手挠了挠PronounPossessive的头.") },
        Act_捂住耳朵: { A: createActivity("捂住耳朵", "ItemEars", "ItemEars", 50, 50, ["UseHands", "UseArms"], []), B: ActivityDictionaryadd("Act_捂住耳朵", "SourceCharacter用手盖住了TargetCharacter的耳朵.", "SourceCharacter用手盖住了自己的耳朵.") },
        Act_捂住眼睛: { A: createActivity("捂住眼睛", "ItemHead", "ItemHead", 50, 50, ["UseArms", "UseHands"], []), B: ActivityDictionaryadd("Act_捂住眼睛", "SourceCharacter捂住TargetCharacter的眼睛.", "SourceCharacter捂住自己的眼睛.") },
        Act_捂住头: { A: createActivity("捂住头", "ItemHead", "ItemHead", 50, 50, ["UseHands", "UseArms"], []), B: ActivityDictionaryadd("Act_捂住头", "SourceCharacter捂住TargetCharacter的头.", "SourceCharacter捂住自己的头.") },
        Act_捂住下体: { A: createActivity("捂住下体", "ItemVulva", "ItemVulva", 50, 50, ["UseHands", "UseArms"], []), B: ActivityDictionaryadd("Act_捂住下体", "SourceCharacter捂住TargetCharacter的下体.", "SourceCharacter捂住自己的下体.") },
        Act_掀开裙子: { A: createActivity("掀开裙子", "ItemButt", "ItemButt", 50, 50, ["UseHands", "UseArms"], []), B: ActivityDictionaryadd("Act_掀开裙子", "SourceCharacter掀开TargetCharacter的裙子.", "SourceCharacter掀开PronounPossessive的裙子.") },
        Act_挥手: { A: createActivity("挥手", "Itemhands", "", 50, 50, ["UseHands", "UseArms"], []), B: ActivityDictionaryadd("Act_挥手", "", "SourceCharacter向TargetCharacter挥手.") },
        Act_伸出手: { A: createActivity("伸出手", "", "ItemHands", 50, 50, ["UseHands", "UseArms"], []), B: ActivityDictionaryadd("Act_伸出手", "", "SourceCharacter伸出自己的手.") }, Act_拉扯衣角: { A: createActivity("拉扯衣角", "ItemPelvis", "", 50, 50, ["UseHands", "UseArms"], []), B: ActivityDictionaryadd("Act_拉扯衣角", "SourceCharacter用手拉扯TargetCharacter的衣角.", "") },
        Act_捂住胸: { A: createActivity("捂住胸", "", "ItemBreast", 50, 50, ["UseHands", "UseArms"], []), B: ActivityDictionaryadd("Act_捂住胸", "", "SourceCharacter捂住自己的胸.") },
        Act_手托起下巴: { A: createActivity("手托起下巴", "ItemMouth", "", 50, 50, ["UseHands", "UseArms"], []), B: ActivityDictionaryadd("Act_手托起下巴", "SourceCharacter用手托起TargetCharacter的下巴.", "") },
        Act_拽链子: { A: createActivity("拽链子", "ItemNeck", "", 50, 50, ["UseHands", "UseArms", "HasLeash"], []), B: ActivityDictionaryadd("Act_拽链子", "SourceCharacter拽TargetCharacter的链子.", "") },
        Act_弹额头: { A: createActivity("弹额头", "ItemHead", "", 50, 50, ["UseHands", "UseArms"], []), B: ActivityDictionaryadd("Act_弹额头", "SourceCharacter弹了一下TargetCharacter的额头.", "") },
        Act_弹阴蒂: { A: createActivity("弹阴蒂", "ItemVulvaPiercings", "", 50, 50, ["UseHands", "UseArms"], []), B: ActivityDictionaryadd("Act_弹阴蒂", "SourceCharacter弹了一下TargetCharacter的阴蒂.", "") },
        Act_抱腿: { A: createActivity("抱腿", "ItemLegs", "", 50, 50, ["UseArms"], []), B: ActivityDictionaryadd("Act_抱腿", "SourceCharacter抱住TargetCharacter的腿.", "") },
        //尾巴
        Act_摇晃尾巴: { A: createActivity("摇晃尾巴", "", "ItemButt", 50, 50, ["HasTail"], []), B: ActivityDictionaryadd("Act_摇晃尾巴", "", "SourceCharacter摇晃PronounPossessive的尾巴.") },
        Act_竖起尾巴: { A: createActivity("竖起尾巴", "", "ItemButt", 50, 50, ["HasTailCat"], []), B: ActivityDictionaryadd("Act_竖起尾巴", "", "SourceCharacter的尾巴竖了起来.") },
        Act_炸毛: { A: createActivity("炸毛", "", "ItemButt", 50, 50, ["HasTailCat"], []), B: ActivityDictionaryadd("Act_炸毛", "", "SourceCharacter弓起后背,身体的毛发立了起来,发出嘶的声音.") },
        Act_舔尾巴: { A: createActivity("舔尾巴", "ItemButt", "ItemButt", 50, 50, ["HasTailCat"], []), B: ActivityDictionaryadd("Act_舔尾巴", "SourceCharacter舔TargetCharacter的尾巴.", "SourceCharacter舔自己的尾巴.") },
        Act_轻抚尾巴: { A: createActivity("轻抚尾巴", "ItemButt", "ItemButt", 50, 50, ["HasTail"], []), B: ActivityDictionaryadd("Act_轻抚尾巴", "SourceCharacter轻抚TargetCharacter的尾巴.", "SourceCharacter轻抚PronounPossessive的尾巴.") },
        Act_尾巴叼在嘴里: { A: createActivity("尾巴叼在嘴里", "ItemButt", "ItemButt", 50, 50, ["HasTailCat"], []), B: ActivityDictionaryadd("Act_尾巴叼在嘴里", "SourceCharacter叼起TargetCharacter的尾巴.", "SourceCharacter把自己的尾巴叼在嘴里.") },
        // 屁股
        Act_抬起屁股: { A: createActivity("抬起屁股", "", "ItemButt", 50, 50, [], []), B: ActivityDictionaryadd("Act_抬起屁股", "", "SourceCharacter弯腰抬起PronounPossessive的屁股.") },
        // 有翅膀
        Act_扇动翅膀: { A: createActivity("扇动翅膀", "", "ItemArms", 50, 50, ["HasWings"], []), B: ActivityDictionaryadd("Act_扇动翅膀", "", "SourceCharacter扇动PronounPossessive的翅膀.") },
        //身体
        Act_躲到身后: { A: createActivity("躲到身后", "ItemTorso", "", 50, 50, [], []), B: ActivityDictionaryadd("Act_躲到身后", "SourceCharacter躲到TargetCharacter的身后.", "") },
        Act_移动到身后: { A: createActivity("移动到身后", "ItemTorso", "", 50, 50, [], []), B: ActivityDictionaryadd("Act_移动到身后", "SourceCharacter移动到TargetCharacter的身后.", "") },
        Act_下巴搭在肩膀上: { A: createActivity("下巴搭在肩膀上", "ItemNeck", "", 50, 50, [], []), B: ActivityDictionaryadd("Act_下巴搭在肩膀上", "SourceCharacter把下巴搭在TargetCharacter的肩膀上.", "") },
        Act_手臂搭在肩膀上: { A: createActivity("手臂搭在肩膀上", "ItemNeck", "", 50, 50, ["UseArms"], []), B: ActivityDictionaryadd("Act_手臂搭在肩膀上", "SourceCharacter把手臂搭在TargetCharacter的肩膀上.", "") },
        Act_搂腰: { A: createActivity("搂腰", "ItemTorso", "", 50, 50, ["UseArms", "UseHands"], []), B: ActivityDictionaryadd("Act_搂腰", "SourceCharacter搂住TargetCharacter的腰.", "") },
        Act_叉腰: { A: createActivity("叉腰", "", "ItemTorso", 50, 50, ["UseArms", "UseHands"], []), B: ActivityDictionaryadd("Act_叉腰", "", "SourceCharacter双手叉腰.") },

        Act_身体颤抖: { A: createActivity("身体颤抖", "", "ItemTorso", 50, 50, [], []), B: ActivityDictionaryadd("Act_身体颤抖", "", "SourceCharacter身体在颤抖.") },
        Act_身体抽搐: { A: createActivity("身体抽搐", "", "ItemTorso", 50, 50, [], []), B: ActivityDictionaryadd("Act_身体抽搐", "", "SourceCharacter身体在抽搐.") },
        // 胸部
        Act_托起乳房: { A: createActivity("托起乳房", "ItemBreast", "ItemBreast", 50, 50, [], []), B: ActivityDictionaryadd("Act_托起乳房", "SourceCharacter托起TargetCharacter的双乳.", "SourceCharacter托起PronounPossessive的双乳.") },
        Act_揉搓乳头: { A: createActivity("揉搓乳头", "ItemNipples", "ItemMipples", 50, 50, ["UseHands", "UseArms", "ZoneNaked"], []), B: ActivityDictionaryadd("Act_揉搓乳头", "SourceCharacter用手捏住TargetCharacter的乳头,开始揉搓.", "SourceCharacter用手捏住PronounPossessive的乳头,开始揉搓.") },
        // 下体有道具
        Act_双腿颤抖: { A: createActivity("双腿颤抖", "", "ItemLegs", 50, 50, ["HasItemVulva"], []), B: ActivityDictionaryadd("Act_双腿颤抖", "", "SourceCharacter的双腿颤抖着.") },
        Act_摇晃双腿: { A: createActivity("摇晃双腿", "", "ItemLegs", 50, 50, ["HasItemVulva"], []), B: ActivityDictionaryadd("Act_摇晃双腿", "", "SourceCharacter摇晃自己的双腿.") },
        Act_流出液体: { A: createActivity("流出液体", "", "ItemVulva", 50, 50, ["HasItemVulva"], []), B: ActivityDictionaryadd("Act_流出液体", "", "有液体顺着SourceCharacter的大腿流下.") },
        Act_失禁: { A: createActivity("失禁", "", "ItemVulva", 50, 50, ["HasItemVulva"], []), B: ActivityDictionaryadd("Act_失禁", "", "SourceCharacter的尿液顺着PronounPossessive大腿流下.") },
        Act_夹紧双腿: { A: createActivity("夹紧双腿", "", "ItemLegs", 50, 50, ["HasItemVulva"], []), B: ActivityDictionaryadd("Act_夹紧双腿", "", "SourceCharacter夹紧TargetCharacter的双腿.") },

        Act_撇眼: { A: createActivity("撇眼", "ItemHead", "", 50, 50, [], []), B: ActivityDictionaryadd("Act_撇眼", "SourceCharacter撇了TargetCharacter一眼.", "") },
        Act_跺脚: { A: createActivity("跺脚", "", "ItemBoots", 50, 50, [], []), B: ActivityDictionaryadd("Act_跺脚", "", "SourceCharacter不停地跺脚.") },
        Act_撩头发: { A: createActivity("撩头发", "", "ItemHood", 50, 50, [], []), B: ActivityDictionaryadd("Act_撩头发", "", "SourceCharacter撩起头发挂在耳边.") },

        // 阴部手
        Act_手指插进阴道: { A: createActivity("手指插进阴道", "ItemVulva", "ItemVulva", 50, 50, ["UseHands", "ZoneNaked", "TargetZoneNaked"], []), B: ActivityDictionaryadd("Act_手指插进阴道", "SourceCharacter手指插进TargetCharacter的阴道内.", "SourceCharacter手指插进自己的的阴道内.") },
        Act_拔出自己的手指: { A: createActivity("拔出自己的手指", "ItemVulva", "ItemVulva", 50, 50, ["UseHands", "ZoneNaked", "TargetZoneNaked"], []), B: ActivityDictionaryadd("Act_拔出自己的手指", "SourceCharacter从TargetCharacter的阴道内拔出自己的手指,手指连着PronounPossessive的爱液.", "SourceCharacter从PronounPossessive的阴道内拔出自己的手指,手指连着自己的爱液.") },
        Act_蠕动手指: { A: createActivity("蠕动手指", "ItemVulva", "ItemVulva", 50, 50, ["UseHands", "ZoneNaked", "TargetZoneNaked"], []), B: ActivityDictionaryadd("Act_蠕动手指", "SourceCharacter在TargetCharacter的阴道内蠕动手指.", "SourceCharacter在PronounPossessive的阴道内蠕动手指.") },
        Act_快速抽插: { A: createActivity("快速抽插", "ItemVulva", "ItemVulva", 50, 50, ["UseHands", "ZoneNaked", "TargetZoneNaked"], []), B: ActivityDictionaryadd("Act_快速抽插", "SourceCharacter的手在TargetCharacter的阴道内快速抽插,开始揉搓.", "SourceCharacter的手在PronounPossessive的阴道内快速抽插,开始揉搓.") },

        Act_钩住阴蒂环: { A: createActivity("钩住阴蒂环", "ItemVulvaPiercings", "ItemVulvaPiercings", 50, 50, ["UseHands", "HasItemVulvaPiercings"], []), B: ActivityDictionaryadd("Act_钩住阴蒂环", "SourceCharacter钩住TargetCharacter的阴蒂环.", "SourceCharacter钩住自己的阴蒂环.") },
        Act_拉扯阴蒂环: { A: createActivity("拉扯阴蒂环", "ItemVulvaPiercings", "ItemVUlvaPiercings", 50, 50, ["UseHands", "HasItemVulvaPiercings"], []), B: ActivityDictionaryadd("Act_拉扯阴蒂环", "SourceCharacter拉了一下TargetCharacter的阴蒂环.", "SourceCharacter拉了一下自己的阴蒂环.") },
        //宠物服
        Act_宠物服爬到脚边: { A: createActivity("宠物服爬到脚边", "ItemBoots", "", 50, 50, ["HasPet"], []), B: ActivityDictionaryadd("Act_宠物服爬到脚边", "SourceCharacter爬到TargetCharacter脚边.", "") },
        Act_宠物服蹭腿: { A: createActivity("宠物服蹭腿", ["ItemLegs", "ItemFeet"], "", 50, 50, ["HasPet"], []), B: ActivityDictionaryadd("Act_宠物服蹭腿", "SourceCharacter蹭TargetCharacter的腿.", "") },
        Act_宠物服趴下: { A: createActivity("宠物服趴下", "", "ItemLegs", 50, 50, ["HasPet"], []), B: ActivityDictionaryadd("Act_宠物服趴下", "", "SourceCharacter四肢着地趴在地上.") },
        Act_宠物服跪立: { A: createActivity("宠物服跪立", "", "ItemLegs", 50, 50, ["HasPet"], []), B: ActivityDictionaryadd("Act_宠物服跪立", "", "SourceCharacter手臂离地跪立.") },
        Act_宠物服扑: { A: createActivity("宠物服扑", "ItemArms", "", 50, 50, ["HasPet"], []), B: ActivityDictionaryadd("Act_宠物服扑", "SourceCharacter扑到TargetCharacter身上.", "") },

        // 有猫爪
        Act_猫爪挠手: { A: createActivity("猫爪挠手", "ItemHands", "", 50, 50, ["HasPawMittens"], []), B: ActivityDictionaryadd("Act_猫爪挠手", "SourceCharacter用爪子挠了一下TargetCharacter的手.", "") },
        Act_猫爪挠手臂: { A: createActivity("猫爪挠手臂", "ItemArms", "", 50, 50, ["HasPawMittens"], []), B: ActivityDictionaryadd("Act_猫爪挠手臂", "SourceCharacter用爪子挠了一下TargetCharacter的手臂.", "") },
        Act_猫爪舔手: { A: createActivity("猫爪舔手", "", "ItemHands", 50, 50, ["HasPawMittens"], []), B: ActivityDictionaryadd("Act_猫爪舔手", "", "SourceCharacter舔自己的爪子.") },
        Act_猫爪戳脸: { A: createActivity("猫爪戳脸", "ItemMouth", "ItemMouth", 50, 50, ["HasPawMittens"], []), B: ActivityDictionaryadd("Act_猫爪戳脸", "SourceCharacter用爪子戳了戳TargetCharacter的脸.", "SourceCharacter用爪子戳了戳自己的脸.") },
        Act_猫爪戳鼻子: { A: createActivity("猫爪戳鼻子", "ItemNose", "ItemNose", 50, 50, ["HasPawMittens"], []), B: ActivityDictionaryadd("Act_猫爪戳鼻子", "SourceCharacter用爪子戳了戳TargetCharacter的鼻子.", "SourceCharacter用爪子戳了戳自己的鼻子.") },
        Act_猫爪揉脸: { A: createActivity("猫爪揉脸", "ItemMouth", "ItemMouth", 50, 50, ["HasPawMittens"], []), B: ActivityDictionaryadd("Act_猫爪揉脸", "SourceCharacter用爪子揉了揉TargetCharacter的脸.", "SourceCharacter用爪子揉了揉自己的脸.") },
        Act_猫爪揉鼻子: { A: createActivity("猫爪揉鼻子", "ItemNose", "ItemNose", 50, 50, ["HasPawMittens"], []), B: ActivityDictionaryadd("Act_猫爪揉鼻子", "SourceCharacter用爪子揉了揉TargetCharacter的鼻子.", "SourceCharacter用爪子揉了揉自己的鼻子.") },

        // 有笼子
        Act_撞笼子: { A: createActivity("撞笼子", "", "ItemDevices", 50, 50, ["HasKennel"], []), B: ActivityDictionaryadd("Act_撞笼子", "", "SourceCharacter用身体撞击笼子.") },
        Act_咬笼子: { A: createActivity("咬笼子", "", "ItemDevices", 50, 50, ["HasKennel"], []), B: ActivityDictionaryadd("Act_咬笼子", "", "SourceCharacter用牙齿咬笼子.") },
        Act_摇晃笼子: { A: createActivity("摇晃笼子", "", "ItemDevices", 50, 50, ["HasKennel"], []), B: ActivityDictionaryadd("Act_摇晃笼子", "", "SourceCharacter摇晃笼子的门.") },

        Act_泡沫剑架在脖子上: { A: createActivity("泡沫剑架在脖子上", "ItemNeck", "ItemNeck", 50, 50, ["UseHands", "UseArms", "HasSword"], []), B: ActivityDictionaryadd("Act_泡沫剑架在脖子上", "SourceCharacter把泡沫剑架在TargetCharacter的脖子上.", "SourceCharacter把泡沫剑架在自己的脖子上.") },
        Act_泡沫剑拍脸: { A: createActivity("泡沫剑拍脸", "ItemMouth", "", 50, 50, ["UseHands", "UseArms", "HasSword"], []), B: ActivityDictionaryadd("Act_泡沫剑拍脸", "SourceCharacter用泡沫剑轻轻拍了拍一下TargetCharacter的脸.", "") },

        Act_剪刀剪掉上衣: { A: createActivity("剪刀剪掉上衣", "ItemTorso", "ItemTorso", 50, 50, ["UseHands", "UseArms", "HasScissors"], []), B: ActivityDictionaryadd("Act_剪刀剪掉上衣", "SourceCharacter用剪刀剪掉了TargetCharacter的上衣.", "SourceCharacter用剪刀剪掉了自己的上衣.") },
        Act_剪刀剪掉下衣: { A: createActivity("剪刀剪掉下衣", "ItemPelvis", "ItemPelvis", 50, 50, ["UseHands", "UseArms", "HasScissors"], []), B: ActivityDictionaryadd("Act_剪刀剪掉下衣", "SourceCharacter用剪刀剪掉了TargetCharacter的下衣.", "SourceCharacter用剪刀剪掉了自己的下衣.") },
        // Act_剪刀剪掉绳子: { A: createActivity("剪刀剪掉绳子", "ItemMouth", "", 50, 50, ["UseHands", "UseArms", "HasScissors"], []), B: ActivityDictionaryadd("Act_剪刀剪掉绳子", "SourceCharacter用泡沫剑轻轻拍了拍一下TargetCharacter的脸", "") },
        Act_剪刀剪掉胸罩: { A: createActivity("剪刀剪掉胸罩", "ItemBreast", "ItemBreast", 50, 50, ["UseHands", "UseArms", "HasScissors"], []), B: ActivityDictionaryadd("Act_剪刀剪掉胸罩", "SourceCharacter用剪刀剪掉了TargetCharacter的胸罩.", "SourceCharacter用剪刀剪掉了自己的胸罩.") },
        Act_剪刀剪掉内裤: { A: createActivity("剪刀剪掉内裤", "ItemVulvaPiercings", "ItemVulvaPiercings", 50, 50, ["UseHands", "UseArms", "HasScissors"], []), B: ActivityDictionaryadd("Act_剪刀剪掉内裤", "SourceCharacter用剪刀剪掉了TargetCharacter的内裤.", "SourceCharacter用剪刀剪掉了自己的内裤.") },
        Act_剪刀剪掉袜子: { A: createActivity("剪刀剪掉袜子", "ItemBoots", "ItemBoots", 50, 50, ["UseHands", "UseArms", "HasScissors"], []), B: ActivityDictionaryadd("Act_剪刀剪掉袜子", "SourceCharacter用剪刀剪掉了TargetCharacter的袜子.", "SourceCharacter用剪刀剪掉了自己的袜子.") },

        Act_骑上去: { A: createActivity("骑上去", "ItemTorso", "", 50, 50, ["Hassaddle"], []), B: ActivityDictionaryadd("Act_骑上去", "SourceCharacter骑在TargetCharacter的背上.", "") },
        Act_躺上去: { A: createActivity("躺上去", "ItemDevices", "", 50, 50, ["Hasbed"], []), B: ActivityDictionaryadd("Act_躺上去", "SourceCharacter躺到TargetCharacter的身边.", "") },
    };

    //============================================================
    //============================================================
    const CustomPrerequisiteFuncs = new Map(Object.entries({
        // 单向 仅自己
        "HasTail": (acting, acted, group) => !!InventoryGet(acted, "TailStraps"), // 有尾巴
        "HasWings": (acting, acted, group) => !!InventoryGet(acted, "Wings"), // 有翅膀
        "HasLeash": (acting, acted, group) => !!ChatRoomCanBeLeashed(acted), // 有拴绳
        "HasTailCat": (acting, acted, group) => // 有猫尾巴
            !!InventoryIsItemInList(acted, "TailStraps", "TailStrap") ||
            !!InventoryIsItemInList(acted, "TailStraps", "KittenTailStrap1"),

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


        "Hassaddle": (acting, acted, group) => // 鞍
            !!InventoryIsItemInList(acting, "ItemTorso", "缰绳_Luzi"),

        "Hasbed": (acting, acted, group) => // 鞍
            !!InventoryIsItemInList(acting, "ItemDevices", "床右边_Luzi"),

    }));

    mod.hookFunction("ActivityCheckPrerequisite", 500, (args, next) => {
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
    mod.hookFunction("ChatRoomMessage", 0, (args, next) => {
        const data = args[0];
        if (data.Sender === Player.MemberNumber && data.Content === 'ChatOther-ItemTorso-Act_骑上去' && data.Type === 'Activity' && data.Dictionary) {
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
        if (data.Sender === Player.MemberNumber && data.Content === 'ChatOther-ItemDevices-Act_躺上去' && data.Type === 'Activity' && data.Dictionary) {
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
        removeActivityItems(data, "ItemTorso", "Act_剪刀剪掉上衣", "Cloth");
        removeActivityItems(data, "ItemPelvis", "Act_剪刀剪掉下衣", "ClothLower");
        removeActivityItems(data, "ItemBreast", "Act_剪刀剪掉胸罩", "Bra");
        removeActivityItems(data, "ItemVulvaPiercings", "Act_剪刀剪掉内裤", "Panties");
        removeActivityItems(data, "ItemBoots", "Act_剪刀剪掉袜子", "Socks");

        next(args);
    });
    //============================================================
    //============================================================

    mod.hookFunction("LoginResponse", 10, (args, next) => {
        next(args)
        for (const key in activityAdd) {
            const activity2 = activityAdd[key].B;
            activity2.forEach((subArray) => {
                ActivityDictionary.push(subArray);
            });
        }
    })

    var Nibble = { Name: "Nibble", MaxProgress: 40, Prerequisite: ["ZoneAccessible", "UseMouth", "ZoneNaked"], Target: ["ItemArms", "ItemBoots", "ItemEars", "ItemFeet", "ItemHands", "ItemLegs", "ItemMouth", "ItemNeck", "ItemNipples", "ItemNose", "ItemPelvis", "ItemTorso", "ItemTorso2", "ItemVulva", "ItemVulvaPiercings",], TargetSelf: ["ItemArms", "ItemBoots", "ItemHands", "ItemMouth", "ItemNipples",], };
    ActivityFemale3DCG.push(Nibble);
    ActivityFemale3DCG.push(Nibble.Name);


    const Activitypng = "Assets/Female3DCG/Activity/";
    const PawMittenspng = "Assets/Female3DCG/ItemHands/Preview/PawMittens.png";
    const Kennelpng = "Assets/Female3DCG/ItemDevices/Preview/Kennel.png";
    const Swordspng = "Assets/Female3DCG/ItemHandheld/Preview/Sword.png";
    const Scissorspng = "Assets/Female3DCG/ItemHandheld/Preview/Scissors.png";

    const ICONS = Object.freeze({ // 图片文件
    });
    const imageReplacement = new Map([ // 替换图片
        // ["Assets/Female3DCG/Activity/Act_托起乳房.png", ICONS2["Luzi_Oaood"]],
        [Activitypng + "Act_歪头.png", Activitypng + "Wiggle.png"],
        [Activitypng + "Act_环顾四周.png", Activitypng + "Wiggle.png"],
        [Activitypng + "Act_上下打量.png", Activitypng + "Wiggle.png"],
        [Activitypng + "Act_闭上眼睛.png", Activitypng + "Wiggle.png"],
        [Activitypng + "Act_眼睛呆滞.png", Activitypng + "Wiggle.png"],
        [Activitypng + "Act_眼睛湿润.png", Activitypng + "MoanGagWhimper.png"],
        [Activitypng + "Act_流眼泪.png", Activitypng + "MoanGagWhimper.png"],
        [Activitypng + "Act_张开嘴.png", Activitypng + "Kiss.png"],
        [Activitypng + "Act_吞咽口水.png", Activitypng + "MoanGagWhimper.png"],
        [Activitypng + "Act_流口水.png", Activitypng + "MoanGagWhimper.png"],
        [Activitypng + "Act_轻声喘息.png", Activitypng + "MoanGagGroan.png"],
        [Activitypng + "Act_打哈欠.png", Activitypng + "Kiss.png"],
        [Activitypng + "Act_舔手.png", Activitypng + "MasturbateTongue.png"],
        [Activitypng + "Act_舔手指.png", Activitypng + "MasturbateTongue.png"],
        [Activitypng + "Act_吮吸手指.png", Activitypng + "FrenchKiss.png"],
        [Activitypng + "Act_舔脸.png", Activitypng + "MasturbateTongue.png"],
        [Activitypng + "Act_舔脚.png", Activitypng + "MasturbateTongue.png"],
        [Activitypng + "Act_嗅.png", Activitypng + "Kiss.png"],
        [Activitypng + "Act_跪下.png", Activitypng + "Wiggle.png"],
        [Activitypng + "Act_站起来.png", Activitypng + "Wiggle.png"],
        [Activitypng + "Act_跪着张开双腿.png", Activitypng + "Wiggle.png"],
        [Activitypng + "Act_跪着合并双腿.png", Activitypng + "Wiggle.png"],
        [Activitypng + "Act_手放身后.png", Activitypng + "Caress.png"],
        [Activitypng + "Act_手放身前.png", Activitypng + "Caress.png"],
        [Activitypng + "Act_趴下.png", Activitypng + "Wiggle.png"],
        [Activitypng + "Act_四肢着地.png", Activitypng + "Wiggle.png"],
        [Activitypng + "Act_爬到脚边.png", Activitypng + "Wiggle.png"],
        [Activitypng + "Act_蹭腿.png", Activitypng + "Wiggle.png"],
        [Activitypng + "Act_蹭腿.png", Activitypng + "Wiggle.png"],
        [Activitypng + "Act_踮起双脚.png", Activitypng + "Kick.png"],
        [Activitypng + "Act_摇晃脚踝.png", Activitypng + "Wiggle.png"],
        [Activitypng + "Act_伸出脚.png", Activitypng + "Kick.png"],
        [Activitypng + "Act_夹紧双腿.png", Activitypng + "Wiggle.png"],
        [Activitypng + "Act_掰开双腿.png", Activitypng + "Wiggle.png"],
        [Activitypng + "Act_脚托起下巴.png", Activitypng + "Kick.png"],
        [Activitypng + "Act_脚托起下巴2.png", Activitypng + "Kick.png"],
        [Activitypng + "Act_抬起屁股.png", Activitypng + "Wiggle.png"],
        [Activitypng + "Act_扇动翅膀.png", Activitypng + "Wiggle.png"],
        [Activitypng + "Act_猫爪挠手.png", PawMittenspng],
        [Activitypng + "Act_猫爪挠手臂.png", PawMittenspng],
        [Activitypng + "Act_猫爪舔手.png", PawMittenspng],
        [Activitypng + "Act_猫爪戳鼻子.png", PawMittenspng],
        [Activitypng + "Act_猫爪戳脸.png", PawMittenspng],
        [Activitypng + "Act_猫爪揉脸.png", PawMittenspng],
        [Activitypng + "Act_猫爪揉鼻子.png", PawMittenspng],
        [Activitypng + "Act_戳脸.png", Activitypng + "Caress.png"],
        [Activitypng + "Act_捏脸.png", Activitypng + "Pinch.png"],
        [Activitypng + "Act_戳手臂.png", Activitypng + "Caress.png"],
        [Activitypng + "Act_揉脸.png", Activitypng + "Wiggle.png"],
        [Activitypng + "Act_摇晃手臂.png", Activitypng + "Wiggle.png"],
        [Activitypng + "Act_轻推.png", Activitypng + "Slap.png"],
        [Activitypng + "Act_托起脚.png", Activitypng + "Caress.png"],
        [Activitypng + "Act_扭动手腕.png", Activitypng + "Wiggle.png"],
        [Activitypng + "Act_挠头.png", Activitypng + "Pull.png"],
        [Activitypng + "Act_捂住耳朵.png", Activitypng + "HandGag.png"],
        [Activitypng + "Act_捂住眼睛.png", Activitypng + "HandGag.png"],
        [Activitypng + "Act_捂住头.png", Activitypng + "HandGag.png"],
        [Activitypng + "Act_捂住下体.png", Activitypng + "HandGag.png"],
        [Activitypng + "Act_拍头.png", Activitypng + "Slap.png"],
        [Activitypng + "Act_掀开裙子.png", Activitypng + "MasturbateHand.png"],
        [Activitypng + "Act_挥手.png", Activitypng + "Slap.png"],
        [Activitypng + "Act_伸出手.png", Activitypng + "Caress.png"],
        [Activitypng + "Act_拉扯衣角.png", Activitypng + "Pull.png"],
        [Activitypng + "Act_捂住胸.png", Activitypng + "Pull.png"],
        [Activitypng + "Act_手托起下巴.png", Activitypng + "Caress.png"],
        [Activitypng + "Act_拽链子.png", Activitypng + "MasturbateHand.png"],
        [Activitypng + "Act_弹额头.png", Activitypng + "Pinch.png"],
        [Activitypng + "Act_弹阴蒂.png", Activitypng + "Pinch.png"],
        [Activitypng + "Act_摇晃尾巴.png", Activitypng + "Wiggle.png"],
        [Activitypng + "Act_竖起尾巴.png", Activitypng + "Wiggle.png"],
        [Activitypng + "Act_炸毛.png", Activitypng + "Bite.png"],
        [Activitypng + "Act_舔尾巴.png", Activitypng + "MasturbateTongue.png"],
        [Activitypng + "Act_轻抚尾巴.png", Activitypng + "Caress.png"],
        [Activitypng + "Act_尾巴叼在嘴里.png", Activitypng + "Kiss.png"],
        [Activitypng + "Act_躲到身后.png", Activitypng + "SistersHug.png"],
        [Activitypng + "Act_移动到身后.png", Activitypng + "SistersHug.png"],
        [Activitypng + "Act_下巴搭在肩膀上.png", Activitypng + "RestHead.png"],
        [Activitypng + "Act_手臂搭在肩膀上.png", Activitypng + "Slap.png"],
        [Activitypng + "Act_搂腰.png", Activitypng + "SistersHug.png"],
        [Activitypng + "Act_身体颤抖.png", Activitypng + "Wiggle.png"],
        [Activitypng + "Act_身体抽搐.png", Activitypng + "Wiggle.png"],
        [Activitypng + "Act_托起乳房.png", Activitypng + "Wiggle.png"],
        [Activitypng + "Act_揉搓乳头.png", Activitypng + "Pinch.png"],
        [Activitypng + "Act_双腿颤抖.png", Activitypng + "Wiggle.png"],
        [Activitypng + "Act_摇晃双腿.png", Activitypng + "Wiggle.png"],
        [Activitypng + "Act_流出液体.png", Activitypng + "MoanGagWhimper.png"],
        [Activitypng + "Act_失禁.png", Activitypng + "MoanGagWhimper.png"],
        [Activitypng + "Act_抱.png", Activitypng + "Wiggle.png"],
        [Activitypng + "Act_手指插进阴道.png", Activitypng + "MasturbateHand.png"],
        [Activitypng + "Act_拔出自己的手指.png", Activitypng + "MasturbateHand.png"],
        [Activitypng + "Act_蠕动手指.png", Activitypng + "Grope.png"],
        [Activitypng + "Act_快速抽插.png", Activitypng + "Grope.png"],
        [Activitypng + "Act_钩住阴蒂环.png", Activitypng + "Pinch.png"],
        [Activitypng + "Act_拉扯阴蒂环.png", Activitypng + "Pinch.png"],
        [Activitypng + "Act_宠物服爬到脚边.png", Activitypng + "Wiggle.png"],
        [Activitypng + "Act_宠物服蹭腿.png", Activitypng + "Wiggle.png"],
        [Activitypng + "Act_宠物服蹭腿.png", Activitypng + "Wiggle.png"],
        [Activitypng + "Act_宠物服趴下.png", Activitypng + "Wiggle.png"],
        [Activitypng + "Act_宠物服立起来.png", Activitypng + "Wiggle.png"],
        [Activitypng + "Act_宠物服跪立.png", Activitypng + "Wiggle.png"],
        [Activitypng + "Act_宠物服扑.png", Activitypng + "Wiggle.png"],
        [Activitypng + "Act_起身跪下.png", Activitypng + "Wiggle.png"],
        [Activitypng + "Act_蹭大腿.png", Activitypng + "PoliteKiss.png"],
        [Activitypng + "Act_蹭小腿.png", Activitypng + "PoliteKiss.png"],
        [Activitypng + "Act_撇眼.png", Activitypng + "Wiggle.png"],
        [Activitypng + "Act_跺脚.png", Activitypng + "Step.png"],
        [Activitypng + "Act_叉腰.png", Activitypng + "Choke.png"],
        [Activitypng + "Act_撞笼子.png", Kennelpng],
        [Activitypng + "Act_咬笼子.png", Kennelpng],
        [Activitypng + "Act_摇晃笼子.png", Kennelpng],

        [Activitypng + "Act_泡沫剑架在脖子上.png", Swordspng],
        [Activitypng + "Act_泡沫剑拍脸.png", Swordspng],

        [Activitypng + "Act_剪刀剪掉上衣.png", Scissorspng],
        [Activitypng + "Act_剪刀剪掉下衣.png", Scissorspng],
        [Activitypng + "Act_剪刀剪掉胸罩.png", Scissorspng],
        [Activitypng + "Act_剪刀剪掉内裤.png", Scissorspng],
        [Activitypng + "Act_剪刀剪掉袜子.png", Scissorspng],

        [Activitypng + "Act_骑上去.png", Activitypng + "SistersHug.png"],
        [Activitypng + "Act_躺上去.png", Activitypng + "SistersHug.png"],


    ]);

    // 图片加载队列
    const imageQueue = [];
    // 在绘制循环中使用图片加载队列
    mod.hookFunction('DrawImageResize', 0, async (args, next) => {
        const data = args[0];
        if (!!data && typeof data === 'string' && data.indexOf("Act_") > -1) {
            const modifiedImage = imageReplacement.get(data);
            if (modifiedImage) {
                // 检查图片是否在队列中
                const queuedImage = imageQueue.find((item) => item.src === modifiedImage);
                if (queuedImage) {
                    // 等待加载完成后再使用图片
                    args[0] = await queuedImage.image;
                } else {
                    // 如果不在队列中,说明图片已经加载完成,直接使用
                    args[0] = modifiedImage;
                }
            }
        }
        next(args);
    });

    //============================================================
    //============================================================

    const poseMapping = {
        "ChatSelf-ItemLegs-Act_跪下": "Kneel",
        "ChatSelf-ItemBoots-Act_起身跪下": "Kneel",
        "ChatSelf-ItemLegs-Act_跪着合并双腿": "Kneel",
        "ChatSelf-ItemLegs-Act_跪着张开双腿": "KneelingSpread",
        "ChatSelf-ItemArms-Act_手放身后": "BackBoxTie",
        "ChatSelf-ItemBoots-Act_趴下": "Hogtied",
        "ChatSelf-ItemBoots-Act_四肢着地": "AllFours",
        "ChatSelf-ItemLegs-Act_站起来": null,
        "ChatSelf-ItemArms-Act_手放身前": null,
        "ChatSelf-ItemLegs-Act_宠物服立起来": "Hogtied",
        "ChatSelf-ItemLegs-Act_宠物服趴下": "AllFours",
        "ChatOther-ItemTorso-Act_骑上去": "Kneel",
    };

    mod.hookFunction("ChatRoomMessage", 0, (args, next) => {
        const data = args[0];
        const content = data.Content;
        if (data.Sender === Player.MemberNumber && poseMapping.hasOwnProperty(content)) {
            const poseName = poseMapping[content];
            PoseSetActive(Player, poseName);
            ChatRoomCharacterUpdate(Player)
        }

        next(args);
    });
    //============================================================
    //============================================================




    const translationMap = new Map([
        ["Bap", "拍打"],
        ["SourceCharacter baps TargetCharacter.", "SourceCharacter拍打了TargetCharacter."],
        ["Headbutt", "用头猛撞"],
        ["SourceCharacter headbutts TargetCharacter.", "SourceCharacter用头猛撞TargetCharacter"],
        ["Nuzzle", "用鼻子轻抚"],
        ["SourceCharacter nuzzles against the side of TargetCharacter's head.", "SourceCharacter用鼻子轻抚在TargetCharacter头的一侧."],
        ["SourceCharacter nuzzles into TargetCharacter's neck.", "SourceCharacter用鼻子轻抚进TargetCharacter的脖子."],
        ["SourceCharacter nuzzles into TargetCharacter's arms.", "SourceCharacter用鼻子轻抚进TargetCharacter的臂膀."],
        ["SourceCharacter nuzzles underneath TargetCharacter's hand.", "SourceCharacter用鼻子轻抚在TargetCharacter手底下."],
        ["SourceCharacter nuzzles into TargetCharacter's breasts.", "SourceCharacter用鼻子轻抚进TargetCharacter的胸部."],
        ["SourceCharacter nuzzles snugly into TargetCharacter.", "SourceCharacter亲昵地用鼻子轻抚着TargetCharacter."],
        ["SourceCharacter nuzzles against TargetCharacter's thigh.", "SourceCharacter用鼻子轻抚在TargetCharacter的大腿上."],
        ["SourceCharacter nuzzles along TargetCharacter's leg.", "SourceCharacter用鼻子轻抚沿着TargetCharacter的腿."],
        ["SourceCharacter nuzzles under TargetCharacter's feet.", "SourceCharacter用鼻子轻抚在TargetCharacter的脚底下."],
        ["Hug", "拥抱"],
        ["SourceCharacter wraps PronounPossessive arms around TargetCharacter in a big warm hug.", "SourceCharacter用温暖的拥抱将PronounPossessive的手臂紧紧地环绕在TargetCharacter身上."],
        ["SourceCharacter wraps TargetCharacter in a therapeutic selfhug.", "SourceCharacter给TargetCharacter一个治疗性的自我拥抱."],
        ["Tackle", "扑倒"],
        ["SourceCharacter full body tackles TargetCharacter!", "SourceCharacter用全身扑倒了TargetCharacter!"],
        ["Flop", "瘫倒"],
        ["SourceCharacter flops on top of TargetCharacter.", "SourceCharacter瘫倒在TargetCharacter的上面."],
        ["Kiss Eyes", "亲吻眼睛"],
        ["SourceCharacter gently kisses over TargetCharacter's eyes.", "SourceCharacter轻轻地亲吻着TargetCharacter的眼睛."],
        ["Rub Pussy", "摩擦私处"],
        ["SourceCharacter grinds PronounPossessive pussy against TargetCharacter's penis.", "SourceCharacter用PronounPossessive的私处摩擦着TargetCharacter的阴茎."],
        ["Slap Face", "扇脸"],
        ["SourceCharacter slaps PronounPossessive ActivityAsset against TargetCharacter's face.", "SourceCharacter用PronounPossessive的ActivityAsset扇打在TargetCharacter的脸上."],
        ["Slap Mouth", "扇嘴巴"],
        ["SourceCharacter slaps PronounPossessive ActivityAsset against TargetCharacter's mouth.", "SourceCharacter用PronounPossessive的ActivityAsset扇打在TargetCharacter的嘴巴上."],
        ["Slap against Pussy", "扇打在私处上"],
        ["SourceCharacter slaps PronounPossessive ActivityAsset against TargetCharacter's pussy.", "SourceCharacter用PronounPossessive的ActivityAsset扇打在TargetCharacter的私处上."],
        ["Slap Breast", "扇打在乳房上"],
        ["SourceCharacter slaps PronounPossessive ActivityAsset against TargetCharacter's breast.", "SourceCharacter用PronounPossessive的ActivityAsset扇打在TargetCharacter的乳房上."],
        ["Slap Thigh", "扇打在大腿上"],
        ["SourceCharacter slaps PronounPossessive ActivityAsset against TargetCharacter's thigh.", "SourceCharacter用PronounPossessive的ActivityAsset扇打在TargetCharacter的大腿上."],
        ["Slap Calf", "扇打在小腿上"],
        ["SourceCharacter slaps PronounPossessive ActivityAsset against TargetCharacter's calf.", "SourceCharacter用PronounPossessive的ActivityAsset扇打在TargetCharacter的小腿上."],
        ["Slap Feet", "扇打在脚上"],
        ["SourceCharacter slaps PronounPossessive ActivityAsset against TargetCharacter's feet.", "SourceCharacter用PronounPossessive的ActivityAsset扇打在TargetCharacter的脚上."],
        ["Slap Butt", "扇打在屁股上"],
        ["SourceCharacter slaps PronounPossessive ActivityAsset against TargetCharacter's butt.", "SourceCharacter用PronounPossessive的ActivityAsset扇打在TargetCharacter的屁股上."],
        ["Slap Neck", "扇打在脖子上"],
        ["SourceCharacter slaps PronounPossessive ActivityAsset against TargetCharacter's neck.", "SourceCharacter用PronounPossessive的ActivityAsset扇打在TargetCharacter的脖子上."],
        ["Slap Arms", "扇打在手臂上"],
        ["ArmsLSCGSlapPenis", "SourceCharacter slaps PronounPossessive ActivityAsset against TargetCharacter's arm.", "SourceCharacter用PronounPossessive的ActivityAsset扇打在TargetCharacter的手臂上."],
        ["Slap Hand", "扇打在手上"],
        ["SourceCharacter slaps PronounPossessive ActivityAsset against TargetCharacter's hand.", "SourceCharacter用PronounPossessive的ActivityAsset扇打在TargetCharacter的手上."],
        ["Slap Penis", "扇打在阴茎上"],
        ["SourceCharacter slaps PronounPossessive ActivityAsset against TargetCharacter's penis.", "SourceCharacter用PronounPossessive的ActivityAsset扇打在TargetCharacter的阴茎上."],
        ["Nibble Tail", "咬尾巴"],
        ["SourceCharacter nibbles on TargetCharacter's tail.", "SourceCharacter咬TargetCharacter的尾巴."],
        ["SourceCharacter nibbles on PronounPossessive own tail.", "SourceCharacter咬自己的尾巴."],
        ["Nibble Halo", "咬光环"],
        ["SourceCharacter nibbles on TargetCharacter's halo.", "SourceCharacter咬TargetCharacter的光环."],
        ["Nibble Wing", "咬翅膀"],
        ["SourceCharacter nibbles on TargetCharacter's wing.", "SourceCharacter咬TargetCharacter的翅膀."],
        ["SourceCharacter nibbles on PronounPossessive own wing.", "SourceCharacter咬自己的翅膀."],
        ["Grind with Pussy", "用阴部磨擦"],
        ["SourceCharacter grinds PronounPossessive pussy against TargetCharacter's.", "SourceCharacter用阴部磨擦着TargetCharacter的."],
        ["Ride with Pussy", "用阴部骑乘"],
        ["SourceCharacter fucks TargetCharacter's penis with PronounPossessive pussy, grinding up and down.", "SourceCharacter用阴部骑乘TargetCharacter的阴茎,上下磨擦."],
        ["Sit on Face", "坐在脸上"],
        ["SourceCharacter grinds PronounPossessive pussy against TargetCharacter's face.", "SourceCharacter用阴部磨擦着TargetCharacter的脸."],
        ["Grind with Ass", "用臀部磨擦"],
        ["SourceCharacter grinds PronounPossessive ass against TargetCharacter's vulva.", "SourceCharacter用臀部磨擦着TargetCharacter的阴道."],
        ["Ride with Ass", "用臀部骑乘"],
        ["SourceCharacter fucks TargetCharacter's penis with PronounPossessive ass.", "SourceCharacter用臀部骑乘TargetCharacter的阴茎."],
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
        ["SourceCharacter takes a big bite out of TargetCharacter's ActivityAsset.", "SourceCharacter咬了TargetCharacter的ActivityAsset的一大口."],
        ["SourceCharacter takes a big bite out of PronounPossessive own ActivityAsset.", "SourceCharacter咬了自己的ActivityAsset的一大口."],
        ["Grab Tongue", "抓舌头"],
        ["SourceCharacter reaches in and grabs hold of TargetCharacter's tongue with PronounPossessive fingers.", "SourceCharacter伸手抓住TargetCharacter的舌头,用自己的手指."],
        ["Release Tongue", "释放舌头"],
        ["SourceCharacter lets go of TargetCharacter's tongue.", "SourceCharacter松开TargetCharacter的舌头."],
        ["Hold Hands", "握手"],
        ["SourceCharacter takes TargetCharacter's hand.", "SourceCharacter握住TargetCharacter的手."],
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
        ["SourceCharacter releases TargetCharacter's arm.", "SourceCharacter释放TargetCharacter的手臂."],
        ["Release Horn", "释放角"],
        ["SourceCharacter releases TargetCharacter's horn.", "SourceCharacter释放TargetCharacter的角."],
        ["Release Neck", "释放脖子"],
        ["SourceCharacter releases TargetCharacter's neck.", "SourceCharacter释放TargetCharacter的脖子."],
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
        ["SourceCharacter chomps down on TargetCharacter's arm and doesn't let go.", "SourceCharacter狠狠地咬住TargetCharacter的手臂,不肯松口."],
        ["Chomp on Leg", "咬住腿"],
        ["SourceCharacter chomps down on TargetCharacter's leg and doesn't let go.", "SourceCharacter狠狠地咬住TargetCharacter的腿,不肯松口."],
        ["Chomp on Butt", "咬住屁股"],
        ["SourceCharacter chomps down on TargetCharacter's butt and doesn't let go.", "SourceCharacter狠狠地咬住TargetCharacter的屁股,不肯松口."],
        ["Chomp on Neck", "咬住脖子"],
        ["SourceCharacter chomps down on TargetCharacter's neck and doesn't let go.", "SourceCharacter狠狠地咬住TargetCharacter的脖子,不肯松口."],
        ["Release Chomp", "松开咬住"],
        ["SourceCharacter releases PronounPossessive chomp on TargetCharacter.", "SourceCharacter松开对TargetCharacter的咬住."],
        ["Quaff", "畅饮"],
        ["SourceCharacter presses PronounPossessive ActivityAsset up against TargetCharacter's lips.", "SourceCharacter将PronounPossessive的ActivityAsset紧贴在TargetCharacter的嘴唇上."],
        ["SourceCharacter quaffs the ActivityAsset in one gulp.", "SourceCharacter一口气畅饮了ActivityAsset."],
        ["Tighten Collar", "收紧颈圈"],
        ["Loosen Collar", "放松颈圈"],
        ["Collar Stats", "颈圈状态"],
        ["Shoot Netgun", "射击净网枪"],
        ["SourceCharacter takes aim at TargetCharacter with PronounPossessive net gun.", "SourceCharacter用PronounPossessive的净网枪瞄准TargetCharacter."],
        ["SourceCharacter turns PronounPossessive net gun on PronounSelf.", "SourceCharacter将PronounPossessive的净网枪对准PronounSelf."],
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
        ["SourceCharacter pulls the ActivityAsset from PronounPossessive mouth.", "SourceCharacter从PronounPossessive的嘴里拔出了ActivityAsset."],
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
        ["Steal", "偷窃"],
        ["SourceCharacter grabs at TargetCharacters hands, trying to steal TargetPronounPossessive item.", "SourceCharacter试图偷窃TargetPronounPossessive的物品,抓住了TargetCharacters的手."],
        ["Give Item", "交出物品"],
        ["SourceCharacter grabs at TargetCharacters hands, trying to steal TargetPronounPossessive item!", "SourceCharacter试图偷窃TargetPronounPossessive的物品,抓住了TargetCharacters的手!"],
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
        ["环顾四周", "Look Around"],
        ["SourceCharacter环视周围.", "SourceCharacter looks around."],
        ["上下打量", "Size Up"],
        ["SourceCharacter仔细打量TargetCharacter", "SourceCharacter sizes up TargetCharacter."],
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
        ["SourceCharacter吞咽嘴里的口水", "SourceCharacter swallows saliva."],
        ["流口水", "Drool"],
        ["SourceCharacter的口水顺着嘴角流下", "SourceCharacter drools down the corner of the mouth."],
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
        ["嗅", "Sniff"],
        ["SourceCharacter用鼻子嗅了嗅TargetCharacter的手.", "SourceCharacter sniffs TargetCharacter's hand."],
        ["SourceCharacter用鼻子嗅了嗅自己的手.", "SourceCharacter sniffs own hand."],
        ["跪下", "Kneel Down"],
        ["SourceCharacter轻轻地跪了下来.", "SourceCharacter kneels down gently."],
        ["站起来", "Stand Up"],
        ["SourceCharacter手扶着地站了起来.", "SourceCharacter stands up with hands on the ground."],
        ["跪着张开双腿", "Kneel with Legs Spread"],
        ["SourceCharacter张开了PronounPossessive的腿.", "SourceCharacter kneels with legs spread."],
        ["跪着合并双腿", "Kneel with Legs Together"],
        ["SourceCharacter并拢了PronounPossessive的腿.", "SourceCharacter kneels with legs together."],
        ["手放身后", "Hands Behind Back"],
        ["SourceCharacter把PronounPossessive的手放在了身后.", "SourceCharacter puts PronounPossessive hands behind back."],
        ["手放身前", "Hands in Front"],
        ["SourceCharacter把PronounPossessive的手放在了身前.", "SourceCharacter puts PronounPossessive hands in front."],
        ["趴下", "Lie Down"],
        ["SourceCharacter手放身后趴在地上.", "SourceCharacter lies down with hands behind back."],
        ["四肢着地", "All Fours"],
        ["SourceCharacter四肢着地趴在地上.", "SourceCharacter is on all fours on the ground."],
        ["起身跪下", "Kneel from Standing"],
        ["SourceCharacter起身跪下.", "SourceCharacter kneels down from standing."],
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
        ["SourceCharacter戳了戳自己的脸", "SourceCharacter pokes own face."],
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
        ["捂住耳朵", "Cover Ears"],
        ["SourceCharacter用手盖住了TargetCharacter的耳朵.", "SourceCharacter covers TargetCharacter's ears with hands."],
        ["SourceCharacter用手盖住了自己的耳朵.", "SourceCharacter covers own ears with hands."],
        ["捂住眼睛", "Cover Eyes"],
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
        ["拉扯衣角", "Tug at Clothes"],
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
        ["SourceCharacter弓起后背,身体的毛发立了起来,发出嘶的声音.", "SourceCharacter arches back, body hair stands up, emitting a hissing sound."],
        ["舔尾巴", "Lick Tail"],
        ["SourceCharacter舔TargetCharacter的尾巴.", "SourceCharacter licks TargetCharacter's tail."],
        ["SourceCharacter舔自己的尾巴.", "SourceCharacter licks own tail."],
        ["轻抚尾巴", "Gently Stroke Tail"],
        ["SourceCharacter轻抚TargetCharacter的尾巴.", "SourceCharacter gently strokes TargetCharacter's tail."],
        ["SourceCharacter轻抚PronounPossessive的尾巴.", "SourceCharacter gently strokes PronounPossessive's tail."],
        ["尾巴叼在嘴里", "Hold Tail in Mouth"],
        ["SourceCharacter叼起TargetCharacter的尾巴.", "SourceCharacter holds TargetCharacter's tail in mouth."],
        ["SourceCharacter把自己的尾巴叼在嘴里.", "SourceCharacter holds own tail in mouth."],
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
        ["SourceCharacter身体在颤抖.", "SourceCharacter's body trembles."],
        ["身体抽搐", "Body Twitches"],
        ["SourceCharacter身体在抽搐.", "SourceCharacter's body twitches."],
        ["托起乳房", "Lift Breasts"],
        ["SourceCharacter托起TargetCharacter的双乳.", "SourceCharacter lifts TargetCharacter's breasts."],
        ["SourceCharacter托起PronounPossessive的双乳.", "SourceCharacter lifts PronounPossessive's breasts."],
        ["揉搓乳头", "Rub Nipples"],
        ["SourceCharacter用手捏住TargetCharacter的乳头,开始揉搓.", "SourceCharacter uses hands to pinch TargetCharacter's nipples, rubbing them."],
        ["SourceCharacter用手捏住PronounPossessive的乳头,开始揉搓.", "SourceCharacter uses hands to pinch PronounPossessive's nipples, rubbing them."],
        ["双腿颤抖", "Legs Tremble"],
        ["SourceCharacter的双腿颤抖着.", "SourceCharacter's legs tremble."],
        ["摇晃双腿", "Shake Legs"],
        ["SourceCharacter摇晃自己的双腿.", "SourceCharacter shakes own legs."],
        ["流出液体", "Liquid Flows"],
        ["有液体顺着SourceCharacter的大腿流下.", "Liquid flows down SourceCharacter's thighs."],
        ["失禁", "Incontinence"],
        ["SourceCharacter的尿液顺着PronounPossessive大腿流下.", "SourceCharacter's urine flows down PronounPossessive thighs."],
        ["夹紧双腿", "Clamp Legs"],
        ["夹紧双腿", "Squeeze Legs"],
        ["SourceCharacter夹紧TargetCharacter的双腿.", "SourceCharacter squeezes TargetCharacter's legs."],
        ["手指插进阴道", "Insert Finger into Vagina"],
        ["SourceCharacter手指插进TargetCharacter的阴道内.", "SourceCharacter inserts a finger into TargetCharacter's vagina."],
        ["SourceCharacter手指插进自己的的阴道内.", "SourceCharacter inserts a finger into own vagina."],
        ["拔出自己的手指", "Withdraw Finger"],
        ["SourceCharacter从TargetCharacter的阴道内拔出自己的手指,手指连着PronounPossessive的爱液.", "SourceCharacter withdraws own finger from TargetCharacter's vagina, the finger coated with PronounPossessive love fluids."],
        ["SourceCharacter从PronounPossessive的阴道内拔出自己的手指,手指连着自己的爱液.", "SourceCharacter withdraws own finger from PronounPossessive's vagina, the finger coated with SourceCharacter's love fluids."],
        ["蠕动手指", "Wriggle Finger"],
        ["SourceCharacter在TargetCharacter的阴道内蠕动手指.", "SourceCharacter wriggles a finger inside TargetCharacter's vagina."],
        ["SourceCharacter在PronounPossessive的阴道内蠕动手指.", "SourceCharacter wriggles a finger inside PronounPossessive's vagina."],
        ["快速抽插", "Quickly Thrust"],
        ["SourceCharacter的手在TargetCharacter的阴道内快速抽插,开始揉搓.", "SourceCharacter's hand quickly thrusts in and out of TargetCharacter's vagina, rubbing and kneading."],
        ["SourceCharacter的手在PronounPossessive的阴道内快速抽插,开始揉搓.", "SourceCharacter's hand quickly thrusts in and out of PronounPossessive's vagina, rubbing and kneading."],
        ["钩住阴蒂环", "Hook Clitoral Piercing"],
        ["SourceCharacter钩住TargetCharacter的阴蒂环.", "SourceCharacter hooks onto TargetCharacter's clitoral piercing."],
        ["SourceCharacter钩住自己的阴蒂环.", "SourceCharacter hooks onto own clitoral piercing."],
        ["拉扯阴蒂环", "Tug Clitoral Piercing"],
        ["SourceCharacter拉了一下TargetCharacter的阴蒂环又松开了.", "SourceCharacter tugs on TargetCharacter's clitoral piercing and then releases it."],
        ["SourceCharacter拉了一下自己的阴蒂环又松开了.", "SourceCharacter tugs on own clitoral piercing and then releases it."],
        ["宠物服爬到脚边", "Pet Crawls to Feet"],
        ["SourceCharacter爬到TargetCharacter脚边.", "SourceCharacter's pet crawls to TargetCharacter's feet."],
        ["宠物服蹭腿", "Pet Rubs Legs"],
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
        ["SourceCharacter用身体撞笼子.", "SourceCharacter bumps its body into the cage."],
        ["咬笼子", "Bite Cage"],
        ["SourceCharacter用牙齿咬笼子.", "SourceCharacter bites the cage."],
        ["摇晃笼子", "Shake Cage"],
        ["SourceCharacter摇晃笼子的门.", "SourceCharacter shakes the door of the cage."],
        ["撇眼", "Roll Eyes"],
        ["SourceCharacter撇了TargetCharacter一眼.", "SourceCharacter rolls its eyes at TargetCharacter."],
        ["跺脚", "Stamp Feet"],
        ["SourceCharacter不停地跺脚.", "SourceCharacter keeps stamping its feet."],
        ["叉腰", "Put Hands on Hips"],
        ["SourceCharacter双手叉腰.", "SourceCharacter puts its hands on its hips."],
        ["撩头发", "Toss Hair"],
        ["SourceCharacter撩起头发挂在耳边.", "SourceCharacter tosses its hair, letting it hang by its ears."],

    ]);

    mod.hookFunction("ChatRoomSync", 10, (args, next) => {
        next(args);
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
    });

    mod.hookFunction("ChatRoomMessage", 10, (args, next) => {
        next(args)
        // LSCG行动翻译
        let data = args[0]
        if (data.Content === 'ServerEnter') {
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
        }

    });

    //============================================================
    //============================================================

    mod.hookFunction("ChatRoomMessage", 0, (args, next) => {
        const data = args[0];
        const senderIsPlayer = data.Sender === Player.MemberNumber || data.Sender !== Player.MemberNumber;

        if (senderIsPlayer) {
            // 网易云
            const neteaseMatch = data.Content.match(/网易云 (\d+)/);
            if (neteaseMatch) {
                const songId = neteaseMatch[1];
                const iframe = `<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=${songId}&auto=1&height=66"></iframe>`;
                ChatRoomSendLocal(iframe);
            }

            // Bilibili
            const bilibiliMatch = data.Content.match(/哔哩哔哩 (.+)/);
            if (bilibiliMatch) {
                const paramsString = bilibiliMatch[1];
                const aidMatch = paramsString.match(/aid=(\d+)/);
                const bvidMatch = paramsString.match(/bvid=([A-Za-z0-9]+)/);

                if (aidMatch && bvidMatch) {
                    const aid = aidMatch[1];
                    const bvid = bvidMatch[1];
                    const iframe = `<iframe src="//player.bilibili.com/player.html?aid=${aid}&bvid=${bvid}&cid=1215423721&p=1" width="500" height="300" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>`;
                    ChatRoomSendLocal(iframe);
                }
            }

            // YouTube
            const youtubeMatch = data.Content.match(/youtube (.+)/);
            if (youtubeMatch) {
                const videoId = youtubeMatch[1];
                const iframe = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
                ChatRoomSendLocal(iframe);
            }

            // 通用视频嵌入链接
            const generalMatch = data.Content.match(/通用视频嵌入链接\s*\(\s*(.+)\s*\)/);
            if (generalMatch) {
                const videoId = generalMatch[1].trim();
                const iframe = `<iframe width="560" height="315" src="${videoId}" frameborder="0" scrolling="no" allowfullscreen></iframe>`;
                ChatRoomSendLocal(iframe);
            }
        }

        // 继续执行原有逻辑
        next(args);
    });

    //============================================================
    //============================================================
    // 这个忘记写的是个什么东西了 有空优化一下逻辑
    let currentLanguage = '';
    let currentLanguage2 = '';
    let halo2 = false;
    mod.hookFunction("ChatRoomMessage", 0, (args, next) => {
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
        }
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
        }
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
    mod.hookFunction("ChatRoomMessage", 0, (args, next) => {
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

    mod.hookFunction("PreferenceRun", 50, (args, next) => {
        next(args);
        if (PreferenceSubscreen === "") {
            DrawButton(1340, 50, 400, 90, "      一些设置", "White", "Icons/Use.png");
        }
        if (PreferenceSubscreen === "Luzi") {
            // 高潮计数
            DrawButton(1815, 75, 90, 90, "", "White", "Icons/Exit.png");
            DrawText("- 设置 -", 1000, 125, "Black");
            DrawCheckbox(250, 200, 64, 64, "                    高潮计数保留", Player.OnlineSettings.ECHO.高潮开关);
            DrawButton(250, 290, 390, 90, "      清空高潮次数", "White", "Icons/Trash.png");
            // 高潮计数
            DrawButton(1500, 840, 390, 90, "      Discord", "White", "Icons/Trash.png");
            if (MouseIn(1500, 840, 390, 90,) && PreferenceSubscreen === "Luzi") {
                DrawTextWrap(
                    `插件翻译\n\n\n\n\n动作\n/\n服装拓展\n\n在此查看插件更新及反馈建议`
                    , 1500, 700, 390, 90, "black");
            }

            // ElementCreateInput("InputLuzi", "text", "", "20"); // 添加输入框设置
            // ElementPosition("InputLuzi", 447, 450, 400); // 绘制输入框
            // DrawText("触摸触发动作", 760, 460, "Black");
            // // 在创建和绘制输入框之后,通过ID获取输入框的引用
            // var luziInput = document.getElementById("InputLuzi"); // 储存输入框的值
            // luziInput.value = "笨蛋Luzi"; // 将值设置回输入框
        }
    });

    mod.hookFunction("PreferenceClick", 10, (args, next) => {
        next(args);
        // 初始按钮
        if (MouseIn(1340, 50, 400, 90) && PreferenceSubscreen === "") {
            PreferenceSubscreen = "Luzi"; // 当鼠标点击图标后修改PreferenceSubscreen的值
            if (Player.OnlineSettings.ECHO === undefined) { saveOrgasmSettings(false, 0) }

        }
        if (MouseIn(1815, 75, 90, 90) && PreferenceSubscreen === "Luzi") {
            // document.getElementById("InputLuzi").style.display = "none"; // 移除输入框
            PreferenceSubscreenArousalExit();
        }
        // 初始按钮
        // 高潮计数
        if (MouseIn(250, 200, 64, 64) && PreferenceSubscreen === "Luzi") {
            saveOrgasmToggle(!Player.OnlineSettings.ECHO.高潮开关);
        }
        if (MouseIn(250, 290, 390, 90) && PreferenceSubscreen === "Luzi") {
            saveOrgasmCount(0);
        }
        // 高潮计数


        if (MouseIn(1500, 840, 390, 90) && PreferenceSubscreen === "Luzi") {
            window.open("https://discord.gg/K9YnNqsNKx");
            // 
        }
    });

    // ========================================================================
    // ========================================================================
    // DrawCheckbox
    // DrawText
    // DrawTextFit
    const w = window;
    var loginSuccess = false;
    var playername = "";
    var playernum = "";
    var playerNickname = "";

    var printedTextMap = new Map();
    // 打印整个 printedTextMap
    w.printPrintedTextMap = function () {
        console.log("Printed Text Map:");
        printedTextMap.forEach((value, key) => {
            console.log(`${key}: ${value}`);
        });
    };
    // Promise 用于确保 playername 已经被设置
    var playernamePromise = new Promise((resolve) => {
        mod.hookFunction("LoginResponse", 10, (args, next) => {
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
            ["For saying 'thank you' with a tip", "说 '谢谢'并给出小费"],
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
            ["Log getting or losing a BCX owner/mistress", "记录增加或删除 BCX 所有者/女主人的情况"],
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
            ["Share Addons", "分享插件"],
            ["Load BCX by Jomshir98", "加载 BCX by Jomshir98"],
            ["Load BCX beta", "加载 BCX测试版"],
            ["Load EBCH by Elicia", "加载 EBCH by Elicia"],
            ["Load MBS by Rama", "加载 Rama by Rama"],
            ["Load LSCG by LittleSera", "加载 LSCG by LittleSera"],
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
            ["- LSCG Breathplay -", "- LSCG 呼吸游戏 -"],
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
            { regex: /Your BCX version\: (.+)/, replacement: "您的BCX版本: $1" },
            { regex: /(.+)\'s BCX version\: (.+)/, replacement: "$1 的BCX版本: $2" },
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

                if (args[0].indexOf("Your BCX version") !== -1) {
                    args[0] = args[0].replace(/Your BCX version\: (.+)/, "您的BCX版本: $1");
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

        mod.hookFunction("DrawText", 10, (args, next) => {
            let language = localStorage.getItem("BondageClubLanguage");
            if (language === "CN" || language === "TW") {
                replaceLabels(args);
            }
            next(args);
        });

        mod.hookFunction("DrawTextFit", 10, (args, next) => {
            let language = localStorage.getItem("BondageClubLanguage");
            if (language === "CN" || language === "TW") {
                replaceLabels(args);
            }
            next(args);
        });

        mod.hookFunction("DrawTextWrap", 10, (args, next) => {
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





    mod.hookFunction("ChatRoomMessage", 0, (args, next) => {

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

    mod.hookFunction("ServerSend", 0, (args, next) => {
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

    mod.hookFunction("DrawCharacter", 10, (args, next) => {

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

    });



    mod.hookFunction("ChatRoomDrawCharacter", 10, (args, next) => {
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

        // 先绘制缰绳角色的数组
        for (let C = 0; C < ChatRoomCharacterDrawlist.length; C++) {
            let ChatRoomCharacterX = C >= 5 ? ChatRoomCharacterX_Lower : ChatRoomCharacterX_Upper;
            if (!(Player.GraphicsSettings && Player.GraphicsSettings.CenterChatrooms)) ChatRoomCharacterX = 0;
            const Zoom = ChatRoomCharacterZoom;
            const CharX = ChatRoomCharacterX + (ChatRoomCharacterCount == 1 ? 0 : X + (C % 5) * Space);
            const CharY = ChatRoomCharacterCount == 1 ? 0 : Y + Math.floor(C / 5) * 500;
            if ((ChatRoomCharacterCount == 1) && ChatRoomCharacterDrawlist[C].ID !== 0) continue;
            if (foundCharacters.includes(ChatRoomCharacterDrawlist[C])) {
                // 如果在数组中,可以在这里执行额外的操作
                DrawCharacter(ChatRoomCharacterDrawlist[C], CharX, CharY, Zoom);
                DrawStatus(ChatRoomCharacterDrawlist[C], CharX, CharY, Zoom);
                if (ChatRoomCharacterDrawlist[C].MemberNumber != null) ChatRoomDrawCharacterOverlay(ChatRoomCharacterDrawlist[C], CharX, CharY, Zoom, C);
            }
        }

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
                DrawStatus(ChatRoomCharacterDrawlist[C], CharX, CharY, Zoom);
                if (ChatRoomCharacterDrawlist[C].MemberNumber != null) ChatRoomDrawCharacterOverlay(ChatRoomCharacterDrawlist[C], CharX, CharY, Zoom, C);
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

        // 再绘制鞍角色的数组
        for (let C = 0; C < ChatRoomCharacterDrawlist.length; C++) {
            let ChatRoomCharacterX = C >= 5 ? ChatRoomCharacterX_Lower : ChatRoomCharacterX_Upper;
            if (!(Player.GraphicsSettings && Player.GraphicsSettings.CenterChatrooms)) ChatRoomCharacterX = 0;
            const Zoom = ChatRoomCharacterZoom;
            const CharX = ChatRoomCharacterX + (ChatRoomCharacterCount == 1 ? 0 : X + (C % 5) * Space);
            const CharY = ChatRoomCharacterCount == 1 ? 0 : Y + Math.floor(C / 5) * 500;
            if ((ChatRoomCharacterCount == 1) && ChatRoomCharacterDrawlist[C].ID !== 0) continue;
            if (foundCharacters2bed.includes(ChatRoomCharacterDrawlist[C])) {
                // 如果在数组中,可以在这里执行额外的操作
                DrawCharacter(ChatRoomCharacterDrawlist[C], CharX, CharY, Zoom);
                DrawStatus(ChatRoomCharacterDrawlist[C], CharX, CharY, Zoom);
                if (ChatRoomCharacterDrawlist[C].MemberNumber != null) ChatRoomDrawCharacterOverlay(ChatRoomCharacterDrawlist[C], CharX, CharY, Zoom, C);
            }
        }

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
                DrawStatus(ChatRoomCharacterDrawlist[C], CharX, CharY, Zoom);
                if (ChatRoomCharacterDrawlist[C].MemberNumber != null) ChatRoomDrawCharacterOverlay(ChatRoomCharacterDrawlist[C], CharX, CharY, Zoom, C);
            }
        }
        // bed ------------------------------------------




    });


    mod.hookFunction("ChatRoomSync", 10, (args, next) => {
        let data = args;
        if (data) {
            w.saddleMapping.clear();
            w.bedMapping.clear();
        }
        next(args);
    });

    mod.hookFunction("ChatRoomSyncMemberLeave", 10, (args, next) => {
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

    mod.hookFunction("ChatRoomSync", 10, (args, next) => {
        setTimeout(() => {
            Hidden("(._.)");
        }, 2000);
        next(args);

    });
    mod.hookFunction("ChatRoomSyncMemberLeave", 10, (args, next) => {
        setTimeout(() => {
            Hidden("(._.)");
        }, 2000);
        next(args);
    });
    mod.hookFunction("ChatRoomMessage", 10, (args, next) => {
        let data = args[0]
        if (data.Content === 'ServerEnter') {
            setTimeout(() => {
                Hidden("(._.)");
            }, 2000);
        }
        next(args)
    });

    let CRCharacter;
    mod.hookFunction("ChatRoomMessage", 0, (args, next) => {
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

    mod.hookFunction("ChatRoomDrawCharacterOverlay", 10, (args, next) => {
        if (ChatRoomHideIconState == 0) {
            let C = args[0];
            let CharX = args[1];
            let CharY = args[2];
            let Zoom = args[3];
            if (C.ECHOBETA) {
                DrawImageResize("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAAAsSAAALEgHS3X78AAAAG3RFWHRTb2Z0d2FyZQBDZWxzeXMgU3R1ZGlvIFRvb2zBp+F8AAAJOUlEQVRo3u3aa1BU5xnA8f9h2V12lwVdVAKIimDNB0MMQVMZQry1GCeKHXRUTB3teI0xNdE0Y5JKJKaJwWqbVjJMFVGjYIwmQtWYamI1WqKArTRGRbFgFOMmwHLZ+56nHwIOKmLazIQ1w/Nlz877zDnzm/e8z3vZVUSEH3Mo3cBuYDfwe0VsbKyhqanpJbPZ/NnFixeLf1TAuLi4wPr6+j/abLaFJpNpl81mm/KjACqKEqooygCLxZLW0NDwks/n0/Xs2XNjXV3dHL8H9u/f/4mQkJDhMTEx+4ETxcXFChAFDAKGAAnAI2az+Sder9fT1+XR1qg+DD1Cs+vr63/j90Cj0XjN4XCEm0wmr8Vicamq6rJarQFut9sI6AAMBgMBAQFEODysNYUwtamO3v36vlRdXf07vwfq9XpRVRWv10uYEkALENqnt+h0OtVut6s6nU51u91IXb2+2NwbuwhPNF1nwODBC86ePZvr98A5c+aoZ86c4cSJE8pvdSGEKVDotvNPr4fwgQPQ6XRcPneeLaae/ExrZK/HxQz71xIbGzv9/PnzO+6FIiNWq5XHHnuMgPMX+CA4nFBFQ6nPSaGrmZNeN88aQpiiM6BFQ6G7mXmOem9ERMTPv/zyy0/uCSDA+++/T0ZGBk8TyG8NPdEQgIqKQ8CgQAABAKx3NrLcZVMTExN/FR4e/m5RUZHjngDa7Xbmz5/P3m3bKAjuTXKgocPko14ns5u/pkGvtUdERHzev3//LWazubioqKjar4FNTU1cbzAzOC6OiVLLpuAwAlt7rX34UPnC5+Wvbgd7PHYqfR5fSJ/eVyIjI/dFR0cXAP8oKiry+A1w3rx5YrPZKC0t5T9X9YjawmBvLSWh93UIbB/XVS/HvG62upo45HWiNxptkZGRp3r06PHrkydPnvYLoKIo0vqJiIJFgTxTL0Zr9TfG3a2houIUuKR6+Mzr4rjXRaHbDoBWq1VDQ0PftFqty/0CmJKSInq9nurqamorK1lt7EWGPggtmg7zy30u/uRs4t9eJzWqDwd49QZDc1BQUJWiKEdCQkKOhoeHf1xSUtLgF8Dm5mZZuXIl63+/hqf1wSw3WFBaq6dVfNynBGJSvu1JJ8Iw2xVqdVoVUAIDA1WDwfBLo9H4d71e//W5c+fcflVkxowZE5iWluZZtmwZY9HwlN7M5z4vZT435V4XNaqPMVo9eaZehCgarouPFNtVUqZPk3379jkaGhqMwB9E5Fm/nCaio6On19XVbbfb7ZgAL6AEBREVFUV8fDx9+/YlNzeXFZpgngkycVVVedh2hWeWL+fSpUtqYWFh2yA1i0izXwEnTJiglJWVFTU0NDwRExPD0KFDGTFiBI8++ij9+vUjNDQUp9PJpEmT+NfBjyky90GLQlJjLauy3yQ1NZX4+Pi222WKSJbf9eCDDz4Ynp+ffy0yMpJevXqh0dxeWA4ePMiECRNIUzXM0gczoekr/rJpE7NmzSI5OZljx44BnAJ+KiL+NQYBwsPDxWazUVFRwaBBg25r37lzJ3PnzsVuszFeZ6TY62T37t2kpaXx4Ycf8vjjjwugAskiUuJ3wLZ5sLy8nIceeqjDnIiICL755hs8Hg86nY4DBw4wcuRImpubiY2N5fr16wDFIjLRb4EHDx5kzJgxHea8+uqrvPHGGzidTjQaDeXl5QwZMgSAl19+mddee43WGjVURD73S2BhYSFTp07tMMfhcBAcHIzJZMJsNlNSUkJ0dHT7e7RdZolIpl8BLRaL1NfX8/bbb7NgwYIOczweD8OHD6eiooL09HR27Lh5n7t06VLWrl0LUAGMEJEWvwHGxsZKVVUVr7/+Oi+88EL73rh158/GjRuJi4ujsrLyprbjx4+TkpIiPp9PAUaJyGG/ASYkJMipU6d48cUXWbVq1R2BBw4cYNy4cWg0Go4cOUJSUtKNNpfLRUJCAmfOnAE4ISKP+A0wJSVFjh49ypIlS1i7du0dge3H2rp161iyZMlNbVu3bmXmzJk3plgR8Y/tUmpqqnz00UcsWLCA9evXExBw5z3gqFGjOHz4MOnp6RQUFKDVatsv2hk6dCgXL14EWCciz/kFcOLEiVJcXMzs2bPZsGFDp8ANGzYwd+5cYmJiOH36NMHBwXcqNo0iEuoXwClTpsh7773Hk08+yebNmzsFlpWVkZiYiMVi4eTJkwwcOPCm9pKSEpKSkkREFOA5EVnX5cBp06bJjh07mD59Ou+8806nwMuXL5OQkEBjYyP79+9n9OjRt+UMGzaM0tJSgCbAIiLeLgVmZGRIQUEB06ZNY9u2bZ0CW1paSExM5OzZs+Tl5TF79uzbcvbs2cOkSZO+PZ+CiSKy754B+nw+Ro8ezZEjR1i2bBnZ2dkd5g0cOFAuXbqkAB+IyC/84hWdMWMGW7Zs6RSoqiqLFy8mJyeHkSNH8sknHR9sZ2VlkZmZCeAA7heRmi4Dpqeny+7du5k5cyabNm3qFAiQk5PDokWLCAsLw2q1djhvXr16laioqLavfxaRxV0+TcyZM4fc3Ny7Ag8dOsTYsWNvrGB0Ol2HeZMnT2bXrl0AV4CHReSrLp3oFy1axFtvvXVXYEVFxY2jisrKSuLi4jrMu3btGhEREW3FJkNE3u3SpdrSpUvJzs7udKkGUF1dTXx8PI2Njezdu5fx48d3mOf1ehk1apTj008/NbQvNl222F6xYgWvvPLKXYF1dXUMGzaMqqoqcnJyWLhw4R1zZ8yYcXn79u3RwOnWMxvHDw4cNGiQXLhwgdWrV/P888/fFeh0OklOTqasrIwVK1awcuXK2/aOV65cIT8/X83KyvKJiLb92vQHB/bp00esVmunG95bY/z48ezfv5+oqChSU1MJCwujpaWFyspKamtrqampkcbGRgAFqAGGd1mR0el04vF42LlzJ5MnT+401263s2bNGsnMzFS+w62dwLvAfBFxdvmZTI8ePWTcuHFKUlISDzzwANHR0ZjNZgCqqqokPz/fm5eXp/F4PG1l9jLf/rYYAgS0XruBUmAzUAw45BZQlwH/h7ADu4Cn2o7rFUXRiojnOz2vC4AXgDxgMHA/MADo00HqF8DfgFwROfN/P68LgMHtesIIGIEgQAtoWl89V+smtvF7P6/775TdwG5gN7Ab+D3iv1pwu837LMfzAAAAAElFTkSuQmCC",
                    CharX + 420 * Zoom, CharY + 5, 35 * Zoom, 35 * Zoom);
            }
            if (C.ECHO) {
                DrawImageResize("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAAAsSAAALEgHS3X78AAAAG3RFWHRTb2Z0d2FyZQBDZWxzeXMgU3R1ZGlvIFRvb2zBp+F8AAAG+ElEQVRo3u2abUxU6RXHf5eBcUFxcfAFpZjKS7sfFJUF1rKECNrw8oFoAAUxJCToYomGisTEGFDUGAOBRivGBhF8A1Y0tcRFXY0GX6oVhECKpggqI6hQFEcR3WHm9IMzVOTNdJOdwXK+zH3u+ec+9zd35pzznPsoIsLnbMo44DjgOOA44P8doKIoXwK/BlpF5MWYAlQURfnolApwBbyAuYAP8A3wG+AvIvLdWAP8G/AFMAnQmD4dgImA+iP5E8BbRP49lgCHmtCgKIrB1taWqVOnGoOCgtrKyso8ACOwQkROjRnApKQko4ODAxqNRmbNmsWUKVOYNm2a0cXFxejm5qaeOHEiAPPnz9fX19fbATdE5NuxFGQ+acJ9+/axYcMG8/D3InLxswIEUKlUYjQaFeB7YJWIGD4rwLy8PMPGjRtVwHNTsGkbs4CPHz/m7t271NXV0djYiFarpbm5mYcPH5ola0SkwOoB165dKzqdjq6uLp49e4ZWq+XVq1cYjUZGuZdmEfEcq2likC1atIjly5czYcKEmtTU1K9NpyNFpMKqAYOCgkStVmNvb4+joyOTJ0/G0dERd3d3vLy8mDt3Li4uLv9NkAbDO1tb22rgW+DvQKCIGK0WUK/Xi6IoKIqCjY0Ngyu3wZaTk/Ov9PR0T6AP+JWIdH4WUdRsXV1d4unp2dvd3e0A/ElE/vhZAQLExcUZS0tLbUxDRxF5PaYBu7u7cXJy6h83NDTg7e1tHmaKSJZVAvb29orRaMTe3h4bG5tB/vb2duLi4qiurqanp2eALzAwkOvXrwPUAotE5CerA5wxY4a8fPmShoYGvLy8BvnLy8uJiYkBoKysjBUrVvT7zp07R3h4uJhWGYEictNq8+CdO3dYuHDhcF8CHR0d+Pv7c+vWrf7zr1+/xsPDg46ODoAKEYm0WsCLFy+yZMmSITU7duwgIyMDjUZDbW0ts2fP7vdt3bqVXbt2YUoZC0Tkn1YJWFpaysqVK4f7n+Lg4IBKpaKiooLw8PCPr2E+zBKRTKsC1Gg08uLFCw4cOEBycvJwxQD+/v7U1dWRkJBAcXHxAH9aWhq5ubkADcDvRKTHagA9PDykpaWF3bt3s3nz5mErmaSkJA4dOoSnpydNTU0DfDdu3CAoKEgMBoMCBIvIFasB9PHxkdraWrZs2cLOnTuHBTx//jxhYWGoVCqqqqoICAjo97179w4fHx8aGxsB/iEi31hVsX316lVSU1PJzc0dsRY1+/Ly8khNTR3gO3r0KAkJCebhfBGptwrA0NBQuXDhAsnJyezfv3/IZG+24OBgrly5QlRUFCUlJdjZ2Q1IGQsWLKC5uRkgT0Q2WgVgZGSkVFRUkJiYSEFBwYiABQUFrFmzhjlz5lBfX8+kSZOGCzY6EfnSKgBjYmKkvLyc1atXU1xcPCJgTU0Nvr6+aDQabt++jbu7+wD/zZs3CQgIEBFRgI0ikmdxwNjYWCkrKyMuLo5jx46NCKjVavHx8UGn01FZWUlISMggjZ+fH9XV1QCvAI2I9FkUcNWqVVJSUkJsbCzHjx8fEbCnpwdfX1/u3btHYWEhiYmJgzRnzpxh2bJlAAZTS+OHMQNoMBgICQmhqqqKTZs2kZ2dPaTO3d1dHjx4oAB/FZHlVvETjY+P58iRIyMCGo1G1q9fT35+PosXL+by5ctD6rKyssjMzAToBb4SkVaLAUZFRcnp06dJSEjg8OHDIwIC5Ofnk5KSgrOzM52dnUPmzfb2dlxdXc3DP4vIeouniaSkJA4ePDgq4KVLl1i6dGl/BaNWq4fURUdHc+rUKYA24GsReWbRRJ+SksLevXtHBfywVdHU1ISn59C936dPnzJz5kxzsFklIt9btFRLS0sjOzt71Lbho0eP8Pb2RqfTcfbsWSIiIobU9fX1ERwc3Hvt2jX7D4ONxYrtjIwMtm3bNirg8+fP8fPzo6Wlhfz8fNatWzesNj4+XnvixAk3oN7Us+n9xQG9vLzk/v377Nmzh/T09FEB3759S2BgIDU1NWRkZLB9+/ZBa8e2tjaKioqMWVlZBhGx+7A2/cUBp0+fLp2dnSMueD+2iIgIKisrcXV1JTQ0FGdnZ3p6emhqauLJkye0traKTqcDUIBWwN9iQUatVoter+fkyZNER0ePqH3z5g05OTmSmZmpfMKl3/L+Rel3IvLW4j0ZJycnCQsLUwICApg3bx5ubm44OjoC0NLSIkVFRX2FhYUqvV5vDrNaU9N4MmBjOv4JqAaKgQqgVz4CstrXZx8+SOAU8Adzu15RFDsR0X/SfBYAvA8UAr8FvuL9jqbpQ0jvAj8CB0Wk8X+ezwKAkz54Eg683wT0BWDH+11PArwzLWJ1P3u+8c1444DjgOOA44A/w/4DdfzCvkv2N9cAAAAASUVORK5CYII=",
                    CharX + 420 * Zoom, CharY + 5, 35 * Zoom, 35 * Zoom);
            }
            if (C.ECHO2) {
                DrawImageResize("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAAAsSAAALEgHS3X78AAAAG3RFWHRTb2Z0d2FyZQBDZWxzeXMgU3R1ZGlvIFRvb2zBp+F8AAAGB0lEQVRo3u3af0hUaxrA8e8zP9aZ1GEcze7ADBJqkZNDZui2wYJMQRISRptxieDCLYqcJZfqcosbtX9sGxGU9oO6sNCPpV1d/KdwCSUuXTEp3NWR6orBHZHxKsbmHN1bMmfm3T+uSV1/dL3LbueE75/nOc8558P78rzvec8RpRQfcpNF4CJwEbgINCRQRD4ClgKDSqmxDxH4JfAp8C3QBfQCT4H+qWPabHnq/zxkfhZQRNKACLBilvC/ge+Bl8A4MDZ1bBJIKqWqzQAsnOqxtEAg8FUikfhVLBaz67qOruskk0kAmaMHxQzAk8Bxl8ulDQ8PZzidTouu68RiMUZGRhgdHUXTNEZGRlKjo6MSj8d5+fIluq5z7do1ixmA3wEfVVdXq+bm5oX2iLF7UES2A00AHR0drF+/ng8GKCJW4DrwsdfrVUNDQz/nYQ0NzJqqnr6MjAxKS0tZvnw5a9eupaysjOLiYpYsWWJqYDXwN2DWQmGxWLDb7fj9fnw+H0uXLsXlcuFwOLDZbCSTSRoaGgwN/Cuwo6SkhGPHjnHz5k1u3779elr4Sc2w04SI+IBBgKamJrZv3z4dGx0dpbu7m8ePHxONRtE0jXg8zvj4OK9evSKRSKCUwmKx0NHRYVjgZ8Afc3Jykv39/Va32z3v+alUilQqxY+vb7fbjQcUETvwNVBeW1ubamho+G8ma0MCs4B/AZNtbW1poVCIDw34e+ALn8+X6OnpsXs8numYpmm4XC7TAxXAvn37uHz58psVkWXLljE+Pk5jYyNVVVXvqqCIiLGAIlID/MVisagHDx5IWVnZdGxoaIhAIMDY2BjNzc1UV8//JtTV1UVpaanhgI3Ab4qLi4lEIm/FHj16xIYNG8jMzKSzs5PCwsJ5rzU4OIjf7zcW0GazTSSTyfRLly6xf//+t2JNTU3s2LGDgoICent7cTgc815rcnKStLQ04wBF5FPgS4fDQVdXF0VFRW/Fa2truXjxIps2baKlpQWbzTbvzXRdx2azGQr4D6AkPz+fZ8+ezYgXFRXx9OlT6urqOHv2LO+qH8lkEqvVagygiJQC7YBjrgLyGnTlyhX27t37zpulUiksFothgJ8Df3C5XKl4PD5j5dLb20swGEREaG1tZQGT//sHTs1VnUBZOBx+VV9fP6N6nDt3jrq6OjweD93d3fj9flMBS4CHgPXevXt6RUWF/cfnVFVVcefOHfLy8ohGo+ZayYjIaeCI2+1OPn/+3Gq1Wmecs2bNGnp6eti4cSOtra3mAYpIOvAccJw5c4ZDhw7NSNI0jWAwyMDAAMePH+fkyZOmAlYCd9LS0qSvr0/y8vJmJMViMVavXs3Y2BgtLS1UVlaaCnge+G0oFKKtrW3WpL6+PoqKilBKEYvF8Hq9pgJ+Dzjr6+sJh8OzJt29e5fNmzfjdrvp7+8nJyfHHEAR+Rj4s81mU5FIRFatWjVr0qlTpzh69Cj5+fl0d3eTkZFhGmAUyJtveALU1NTQ2NhIeXk57e3t71yDGgIoIgF++M73i1u3bsnOnTvnTAoEAjx58oTKykpaWlrMsWUhIr8Dzubm5qpoNCpOp3POJK/Xy/DwMAcOHODChQumAUaBvF27dnH9+vU53wwGBgYIBoNomsbVq1fZs2eP8YEiEgLaAI4cOcLp06fnTLh//z6hUAhd1+ns7KS8vPwn3+y97cmISCbwTyBfRFQ4HJbDhw/j8/lmJNy4cYPdu3cDMDExQXp6uvGBU0M0F/gGyALIyspi5cqVbN26lW3btrFixQ+f48+fP8/BgwenH3ghzRDvgyLyJxHZrZSascL2eDxKKSUvXrzA7XYzODi4oDnQENuGUw+QDnwBfAJkArPuJtntdrVlyxZOnDghhYWFOJ3OOYtTIpGgvb2diooKw20bFgLFgB/IBVzAcuDXU3gAsrOzk+vWrbMUFBRIdnb29G63pmkMDQ3x8OFDIpGIOf6yeGNh8AlQA/gWMEzNAXwDmgUUAr8EAoB3qqczgBQwAXwHDACtSqm/mwo4x36ODXhdpJJKqQTvqS3+bbgIXAQuAv+n7T/VJMOvwbsMuQAAAABJRU5ErkJggg==",
                    CharX + 420 * Zoom, CharY + 5, 35 * Zoom, 35 * Zoom);
            }

        }
        next(args);
    });

    // ========================================================================
    // ========================================================================

})();
