// ==UserScript==
// @name         BC 服装拓展 无🍔版
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  服装拓展 无🍔版
// @author       Luzi
// @include      /^https:\/\/(www\.)?bondageprojects\.elementfx\.com\/R\d+\/(BondageClub|\d+)(\/((index|\d+)\.html)?)?$/
// @include      /^https:\/\/(www\.)?bondage-europe\.com\/R\d+\/(BondageClub|\d+)(\/((index|\d+)\.html)?)?$/
// @grant        none
// @license      MIT
// ==/UserScript==
(function () {
    'use strict';
    // =======================================================================================
    var bcModSdk = function () {
        "use strict"; const o = "1.2.0"; function e(o) { alert("Mod ERROR:\n" + o); const e = new Error(o); throw console.error(e), e } const t = new TextEncoder; function n(o) { return !!o && "object" == typeof o && !Array.isArray(o) } function r(o) { const e = new Set; return o.filter((o => !e.has(o) && e.add(o))) } const i = new Map, a = new Set; function c(o) { a.has(o) || (a.add(o), console.warn(o)) } function s(o) { const e = [], t = new Map, n = new Set; for (const r of f.values()) { const i = r.patching.get(o.name); if (i) { e.push(...i.hooks); for (const [e, a] of i.patches.entries()) t.has(e) && t.get(e) !== a && c(`ModSDK: Mod '${r.name}' is patching function ${o.name} with same pattern that is already applied by different mod, but with different pattern:\nPattern:\n${e}\nPatch1:\n${t.get(e) || ""}\nPatch2:\n${a}`), t.set(e, a), n.add(r.name) } } e.sort(((o, e) => e.priority - o.priority)); const r = function (o, e) { if (0 === e.size) return o; let t = o.toString().replaceAll("\r\n", "\n"); for (const [n, r] of e.entries()) t.includes(n) || c(`ModSDK: Patching ${o.name}: Patch ${n} not applied`), t = t.replaceAll(n, r); return (0, eval)(`(${t})`) }(o.original, t); let i = function (e) { var t, i; const a = null === (i = (t = m.errorReporterHooks).hookChainExit) || void 0 === i ? void 0 : i.call(t, o.name, n), c = r.apply(this, e); return null == a || a(), c }; for (let t = e.length - 1; t >= 0; t--) { const n = e[t], r = i; i = function (e) { var t, i; const a = null === (i = (t = m.errorReporterHooks).hookEnter) || void 0 === i ? void 0 : i.call(t, o.name, n.mod), c = n.hook.apply(this, [e, o => { if (1 !== arguments.length || !Array.isArray(e)) throw new Error(`Mod ${n.mod} failed to call next hook: Expected args to be array, got ${typeof o}`); return r.call(this, o) }]); return null == a || a(), c } } return { hooks: e, patches: t, patchesSources: n, enter: i, final: r } } function l(o, e = !1) { let r = i.get(o); if (r) e && (r.precomputed = s(r)); else { let e = window; const a = o.split("."); for (let t = 0; t < a.length - 1; t++)if (e = e[a[t]], !n(e)) throw new Error(`ModSDK: Function ${o} to be patched not found; ${a.slice(0, t + 1).join(".")} is not object`); const c = e[a[a.length - 1]]; if ("function" != typeof c) throw new Error(`ModSDK: Function ${o} to be patched not found`); const l = function (o) { let e = -1; for (const n of t.encode(o)) { let o = 255 & (e ^ n); for (let e = 0; e < 8; e++)o = 1 & o ? -306674912 ^ o >>> 1 : o >>> 1; e = e >>> 8 ^ o } return ((-1 ^ e) >>> 0).toString(16).padStart(8, "0").toUpperCase() }(c.toString().replaceAll("\r\n", "\n")), d = { name: o, original: c, originalHash: l }; r = Object.assign(Object.assign({}, d), { precomputed: s(d), router: () => { }, context: e, contextProperty: a[a.length - 1] }), r.router = function (o) { return function (...e) { return o.precomputed.enter.apply(this, [e]) } }(r), i.set(o, r), e[r.contextProperty] = r.router } return r } function d() { for (const o of i.values()) o.precomputed = s(o) } function p() { const o = new Map; for (const [e, t] of i) o.set(e, { name: e, original: t.original, originalHash: t.originalHash, sdkEntrypoint: t.router, currentEntrypoint: t.context[t.contextProperty], hookedByMods: r(t.precomputed.hooks.map((o => o.mod))), patchedByMods: Array.from(t.precomputed.patchesSources) }); return o } const f = new Map; function u(o) { f.get(o.name) !== o && e(`Failed to unload mod '${o.name}': Not registered`), f.delete(o.name), o.loaded = !1, d() } function g(o, t) { o && "object" == typeof o || e("Failed to register mod: Expected info object, got " + typeof o), "string" == typeof o.name && o.name || e("Failed to register mod: Expected name to be non-empty string, got " + typeof o.name); let r = `'${o.name}'`; "string" == typeof o.fullName && o.fullName || e(`Failed to register mod ${r}: Expected fullName to be non-empty string, got ${typeof o.fullName}`), r = `'${o.fullName} (${o.name})'`, "string" != typeof o.version && e(`Failed to register mod ${r}: Expected version to be string, got ${typeof o.version}`), o.repository || (o.repository = void 0), void 0 !== o.repository && "string" != typeof o.repository && e(`Failed to register mod ${r}: Expected repository to be undefined or string, got ${typeof o.version}`), null == t && (t = {}), t && "object" == typeof t || e(`Failed to register mod ${r}: Expected options to be undefined or object, got ${typeof t}`); const i = !0 === t.allowReplace, a = f.get(o.name); a && (a.allowReplace && i || e(`Refusing to load mod ${r}: it is already loaded and doesn't allow being replaced.\nWas the mod loaded multiple times?`), u(a)); const c = o => { let e = g.patching.get(o.name); return e || (e = { hooks: [], patches: new Map }, g.patching.set(o.name, e)), e }, s = (o, t) => (...n) => { var i, a; const c = null === (a = (i = m.errorReporterHooks).apiEndpointEnter) || void 0 === a ? void 0 : a.call(i, o, g.name); g.loaded || e(`Mod ${r} attempted to call SDK function after being unloaded`); const s = t(...n); return null == c || c(), s }, p = { unload: s("unload", (() => u(g))), hookFunction: s("hookFunction", ((o, t, n) => { "string" == typeof o && o || e(`Mod ${r} failed to patch a function: Expected function name string, got ${typeof o}`); const i = l(o), a = c(i); "number" != typeof t && e(`Mod ${r} failed to hook function '${o}': Expected priority number, got ${typeof t}`), "function" != typeof n && e(`Mod ${r} failed to hook function '${o}': Expected hook function, got ${typeof n}`); const s = { mod: g.name, priority: t, hook: n }; return a.hooks.push(s), d(), () => { const o = a.hooks.indexOf(s); o >= 0 && (a.hooks.splice(o, 1), d()) } })), patchFunction: s("patchFunction", ((o, t) => { "string" == typeof o && o || e(`Mod ${r} failed to patch a function: Expected function name string, got ${typeof o}`); const i = l(o), a = c(i); n(t) || e(`Mod ${r} failed to patch function '${o}': Expected patches object, got ${typeof t}`); for (const [n, i] of Object.entries(t)) "string" == typeof i ? a.patches.set(n, i) : null === i ? a.patches.delete(n) : e(`Mod ${r} failed to patch function '${o}': Invalid format of patch '${n}'`); d() })), removePatches: s("removePatches", (o => { "string" == typeof o && o || e(`Mod ${r} failed to patch a function: Expected function name string, got ${typeof o}`); const t = l(o); c(t).patches.clear(), d() })), callOriginal: s("callOriginal", ((o, t, n) => { "string" == typeof o && o || e(`Mod ${r} failed to call a function: Expected function name string, got ${typeof o}`); const i = l(o); return Array.isArray(t) || e(`Mod ${r} failed to call a function: Expected args array, got ${typeof t}`), i.original.apply(null != n ? n : globalThis, t) })), getOriginalHash: s("getOriginalHash", (o => { "string" == typeof o && o || e(`Mod ${r} failed to get hash: Expected function name string, got ${typeof o}`); return l(o).originalHash })) }, g = { name: o.name, fullName: o.fullName, version: o.version, repository: o.repository, allowReplace: i, api: p, loaded: !0, patching: new Map }; return f.set(o.name, g), Object.freeze(p) } function h() { const o = []; for (const e of f.values()) o.push({ name: e.name, fullName: e.fullName, version: e.version, repository: e.repository }); return o } let m; const y = void 0 === window.bcModSdk ? window.bcModSdk = function () { const e = { version: o, apiVersion: 1, registerMod: g, getModsInfo: h, getPatchingInfo: p, errorReporterHooks: Object.seal({ apiEndpointEnter: null, hookEnter: null, hookChainExit: null }) }; return m = e, Object.freeze(e) }() : (n(window.bcModSdk) || e("Failed to init Mod SDK: Name already in use"), 1 !== window.bcModSdk.apiVersion && e(`Failed to init Mod SDK: Different version already loaded ('1.2.0' vs '${window.bcModSdk.version}')`), window.bcModSdk.version !== o && alert(`Mod SDK warning: Loading different but compatible versions ('1.2.0' vs '${window.bcModSdk.version}')\nOne of mods you are using is using an old version of SDK. It will work for now but please inform author to update`), window.bcModSdk); return "undefined" != typeof exports && (Object.defineProperty(exports, "__esModule", { value: !0 }), exports.default = y), y
    }();

    const MOD_NAME = "服装拓展 无🍔版";
    const MOD_FULL_NAME = "服装拓展 无🍔版";
    const MOD_VERSION = "0.2.0";
    const MOD_REPOSITORY = "https://github.com/emdsa2/-mod";
    const Luzi = "笨蛋Luzi";

    const mod = bcModSdk.registerMod({
        name: MOD_NAME,
        fullName: MOD_FULL_NAME,
        version: MOD_VERSION,
        repository: MOD_REPOSITORY,
    });


    function patchFunction(target, patches) {
        mod.patchFunction(target, patches);
    }

    // 屏蔽跨域
    patchFunction("GLDrawLoadImage", {
        "Img.src = url;": 'Img.crossOrigin = "Anonymous";\n\t\tImg.src = url;',
    });

    const ICONSSSSSSS = {

        "Assets/Female3DCG/Socks/CowPrintedSocks_Small.png": "https://emdsa2.github.io/-mod/image/CowPrintedSocks_Small.png",
        "Assets/Female3DCG/Socks/LegsClosed/CowPrintedSocks_Small.png": "https://emdsa2.github.io/-mod/image/LegsClosed_CowPrintedSocks_Small.png",
        "Assets/Female3DCG/Socks/Spread/CowPrintedSocks_Small.png": "https://emdsa2.github.io/-mod/image/Spread_CowPrintedSocks_Small.png",
        "Assets/Female3DCG/Socks/Kneel/CowPrintedSocks_Small.png": "https://emdsa2.github.io/-mod/image/Kneel_CowPrintedSocks_Small.png",
        "Assets/Female3DCG/Socks/KneelingSpread/CowPrintedSocks_Small.png": "https://emdsa2.github.io/-mod/image/KneelingSpread_CowPrintedSocks_Small.png",
        "Assets/Female3DCG/Socks/CowPrintedSocks_Normal.png": "https://emdsa2.github.io/-mod/image/CowPrintedSocks_Normal.png",
        "Assets/Female3DCG/Socks/LegsClosed/CowPrintedSocks_Normal.png": "https://emdsa2.github.io/-mod/image/LegsClosed_CowPrintedSocks_Normal.png",
        "Assets/Female3DCG/Socks/Spread/CowPrintedSocks_Normal.png": "https://emdsa2.github.io/-mod/image/Spread_CowPrintedSocks_Normal.png",
        "Assets/Female3DCG/Socks/Kneel/CowPrintedSocks_Normal.png": "https://emdsa2.github.io/-mod/image/Kneel_CowPrintedSocks_Normal.png",
        "Assets/Female3DCG/Socks/KneelingSpread/CowPrintedSocks_Normal.png": "https://emdsa2.github.io/-mod/image/KneelingSpread_CowPrintedSocks_Normal.png",
        "Assets/Female3DCG/Socks/CowPrintedSocks_Large.png": "https://emdsa2.github.io/-mod/image/CowPrintedSocks_Large.png",
        "Assets/Female3DCG/Socks/LegsClosed/CowPrintedSocks_Large.png": "https://emdsa2.github.io/-mod/image/LegsClosed_CowPrintedSocks_Large.png",
        // 丢失 "Assets/Female3DCG/Socks/Spread/CowPrintedSocks_Large.png": "",
        "Assets/Female3DCG/Socks/Kneel/CowPrintedSocks_Large.png": "https://emdsa2.github.io/-mod/image/Kneel_CowPrintedSocks_Large.png",
        "Assets/Female3DCG/Socks/KneelingSpread/CowPrintedSocks_Large.png": "https://emdsa2.github.io/-mod/image/KneelingSpread_CowPrintedSocks_Large.png",
        "Assets/Female3DCG/Socks/CowPrintedSocks_XLarge.png": "https://emdsa2.github.io/-mod/image/CowPrintedSocks_XLarge.png",
        "Assets/Female3DCG/Socks/LegsClosed/CowPrintedSocks_XLarge.png": "https://emdsa2.github.io/-mod/image/LegsClosed_CowPrintedSocks_XLarge.png",
        "Assets/Female3DCG/Socks/Spread/CowPrintedSocks_XLarge.png": "https://emdsa2.github.io/-mod/image/Spread_CowPrintedSocks_XLarge.png",
        "Assets/Female3DCG/Socks/Kneel/CowPrintedSocks_XLarge.png": "https://emdsa2.github.io/-mod/image/Kneel_CowPrintedSocks_XLarge.png",
        "Assets/Female3DCG/Socks/KneelingSpread/CowPrintedSocks_XLarge.png": "https://emdsa2.github.io/-mod/image/KneelingSpread_CowPrintedSocks_XLarge.png",


    };


    const ICONSSSSSSSS = {
        "Assets/Female3DCG/Pussy/Penis_White.png": "https://emdsa2.github.io/-mod/Female3DCG/Pussy/Penis_White.png",
        "Assets/Female3DCG/Pussy/Pussy1_White.png": "https://emdsa2.github.io/-mod/Female3DCG/Pussy/Pussy1_White.png",
        "Assets/Female3DCG/Pussy/Pussy2_White.png": "https://emdsa2.github.io/-mod/Female3DCG/Pussy/Pussy2_White.png",
        "Assets/Female3DCG/Pussy/Pussy3_White.png": "https://emdsa2.github.io/-mod/Female3DCG/Pussy/Pussy3_White.png",
        "Assets/Female3DCG/Pussy/Hard/Penis_White.png": "https://emdsa2.github.io/-mod/Female3DCG/Pussy/Hard/Penis_White.png",

        "Assets/Female3DCG/Head/Default_White.png": "https://emdsa2.github.io/-mod/Female3DCG/Head/Default_White.png",
        "Assets/Female3DCG/Head/NoEars_White.png": "https://emdsa2.github.io/-mod/Female3DCG/Head/NoEars_White.png",
        "Assets/Female3DCG/Head/SmallEars_White.png": "https://emdsa2.github.io/-mod/Female3DCG/Head/SmallEars_White.png",
        "Assets/Female3DCG/Head/Default_Asian.png": "https://emdsa2.github.io/-mod/Female3DCG/Head/Default_Asian.png",
        "Assets/Female3DCG/Head/NoEars_Asian.png": "https://emdsa2.github.io/-mod/Female3DCG/Head/NoEars_Asian.png",
        "Assets/Female3DCG/Head/SmallEars_Asian.png": "https://emdsa2.github.io/-mod/Female3DCG/Head/SmallEars_Asian.png",
        "Assets/Female3DCG/Head/Default_Black.png": "https://emdsa2.github.io/-mod/Female3DCG/Head/Default_Black.png",
        "Assets/Female3DCG/Head/NoEars_Black.png": "https://emdsa2.github.io/-mod/Female3DCG/Head/NoEars_Black.png",
        "Assets/Female3DCG/Head/SmallEars_Black.png": "https://emdsa2.github.io/-mod/Female3DCG/Head/SmallEars_Black.png",

        "Assets/Female3DCG/Hands/Default_White.png": "https://emdsa2.github.io/-mod/Female3DCG/Hands/Default_White.png",
        "Assets/Female3DCG/Hands/AllFours/Default_White.png": "https://emdsa2.github.io/-mod/Female3DCG/Hands/AllFours/Default_White.png",
        "Assets/Female3DCG/Hands/TapedHands/Default_White.png": "https://emdsa2.github.io/-mod/Female3DCG/Hands/TapedHands/Default_White.png",
        "Assets/Female3DCG/Hands/Default_Asian.png": "https://emdsa2.github.io/-mod/Female3DCG/Hands/Default_Asian.png",
        "Assets/Female3DCG/Hands/AllFours/Default_Asian.png": "https://emdsa2.github.io/-mod/Female3DCG/Hands/AllFours/Default_Asian.png",
        "Assets/Female3DCG/Hands/TapedHands/Default_Asian.png": "https://emdsa2.github.io/-mod/Female3DCG/Hands/TapedHands/Default_Asian.png",
        "Assets/Female3DCG/Hands/Default_Black.png": "https://emdsa2.github.io/-mod/Female3DCG/Hands/Default_Black.png",
        "Assets/Female3DCG/Hands/AllFours/Default_Black.png": "https://emdsa2.github.io/-mod/Female3DCG/Hands/AllFours/Default_Black.png",
        "Assets/Female3DCG/Hands/TapedHands/Default_Black.png": "https://emdsa2.github.io/-mod/Female3DCG/Hands/TapedHands/Default_Black.png",

    };
    // =======================================================================================

    // #B28686
    // Small
    // Normal
    // Large
    // XLarge
    mod.hookFunction("GLDrawImage", 1, (args, next) => {
        const data = args[0];
        if (typeof data === 'string') {
            if (data.includes("_笨笨蛋Luzi")) {
                args[0] = data.replace("_笨笨蛋Luzi", "");
            }

            if (data.includes("_笨笨笨蛋Luzi2")) {
                args[0] = data.replace("_笨笨笨蛋Luzi2", "");
            }

            if (ICONSSSSSSS[data]) {
                args[0] = ICONSSSSSSS[data];
                args[2] = 0;
                args[3] = 590;
            }

            if (data.includes("_Luzi")) {
                args[0] = data.replace("Assets", "https://emdsa2.github.io/-mod");
            }

            if (data.includes("Assets/Female3DCG/BodyUpper") || data.includes("Assets/Female3DCG/BodyLower")) {
                args[0] = data.replace("Assets", "https://emdsa2.github.io/-mod");
            }


            if (ICONSSSSSSSS[data]) {
                args[0] = ICONSSSSSSSS[data];
            }

            if (data.includes("Socks/KneelingSpread/圣诞_Luzi")) {
                args[2] = 0;
            }

            if (data.includes("ItemAddon/被子右边")) {
                args[2] += 8;
            }

            if (data.includes("Socks/KneelingSpread/踩脚袜_Luzi")) {
                args[2] = 0;
            }


        }


        /*----------------手套 BackBoxTie----------------------*/
        if (
            data.includes("Assets/Female3DCG/Gloves/BackBoxTie/FishnetGloves_") ||
            data.includes("Assets/Female3DCG/Gloves/BackBoxTie/Gloves2_") ||
            data.includes("Assets/Female3DCG/Gloves/BackBoxTie/Gloves3_") ||
            data.includes("Assets/Female3DCG/Gloves/BackBoxTie/GlovesFur_Small_Fabric") ||
            data.includes("Assets/Female3DCG/Gloves/BackBoxTie/GlovesFur_Normal_Fabric") ||
            data.includes("Assets/Female3DCG/Gloves/BackBoxTie/GlovesFur_Large_Fabric") ||
            data.includes("Assets/Female3DCG/Gloves/BackBoxTie/GlovesFur_XLarge_Fabric") ||
            data.includes("Assets/Female3DCG/Gloves/BackBoxTie/HaremGlove_") ||
            data.includes("Assets/Female3DCG/Gloves/BackBoxTie/LatexElbowGloves_") ||
            data.includes("Assets/Female3DCG/Gloves/BackBoxTie/MistressGloves_")
        ) {
            args[0] = data.replace("Assets", "https://emdsa2.github.io/-mod");
        }

        next(args);
    });


    function updateAssetUrl(data, regexPattern) {
        if (regexPattern.test(data)) {
            return data.replace(/Assets/g, "https://emdsa2.github.io/-mod");
        }
        return data;
    }


    mod.hookFunction("GLDrawImage", 1, (args, next) => {
        if (!args || typeof args[0] !== 'string') {
            next(args);
            return;
        }

        args[0] = updateAssetUrl(args[0], /Assets\/Female3DCG\/Suit\/SeethroughSuit_(Small|Normal|Large|XLarge)_Suit\.png/);
        args[0] = updateAssetUrl(args[0], /Assets\/Female3DCG\/Suit\/(BackBoxTie|BackCuffs|TapedHands|OverTheHead|Yoked)\/SeethroughSuit_(Small|Normal|Large|XLarge)_Suit\.png/);
        args[0] = updateAssetUrl(args[0], /Assets\/Female3DCG\/Suit\/SeethroughSuit_(Small|Normal|Large|XLarge)_Suit\.png/);
        args[0] = updateAssetUrl(args[0], /Assets\/Female3DCG\/Suit\/(BackBoxTie|BackCuffs|TapedHands|OverTheHead|Yoked)\/SeethroughSuit_(Small|Normal|Large|XLarge)_Suit\.png/);
        args[0] = updateAssetUrl(args[0], /Assets\/Female3DCG\/Suit\/SeethroughSuitZip_(Small|Normal|Large|XLarge)_Base\.png/);
        args[0] = updateAssetUrl(args[0], /Assets\/Female3DCG\/Suit\/(BackBoxTie|BackCuffs|TapedHands|OverTheHead|Yoked)\/SeethroughSuitZip_(Small|Normal|Large|XLarge)_Base\.png/);
        args[0] = updateAssetUrl(args[0], /Assets\/Female3DCG\/Suit\/Catsuit_(Small|Normal|Large|XLarge)_Base\.png/);
        args[0] = updateAssetUrl(args[0], /Assets\/Female3DCG\/Suit\/(BackBoxTie|BackCuffs|TapedHands|OverTheHead|Yoked)\/Catsuit_(Small|Normal|Large|XLarge)_Base\.png/);
        args[0] = updateAssetUrl(args[0], /Assets\/Female3DCG\/Suit\/SeamlessCatsuit_(Small|Normal|Large|XLarge)_Suit\.png/);
        args[0] = updateAssetUrl(args[0], /Assets\/Female3DCG\/Suit\/(BackBoxTie|BackCuffs|TapedHands|OverTheHead|Yoked)\/SeamlessCatsuit_(Small|Normal|Large|XLarge)_Suit\.png/);
        args[0] = updateAssetUrl(args[0], /Assets\/Female3DCG\/Suit\/PilotSuit_(Small|Normal|Large|XLarge)_Layer4\.png/);
        args[0] = updateAssetUrl(args[0], /Assets\/Female3DCG\/Suit\/(BackBoxTie|BackCuffs|TapedHands|OverTheHead|Yoked)\/PilotSuit_(Small|Normal|Large|XLarge)_Layer4\.png/);
        args[0] = updateAssetUrl(args[0], /Assets\/Female3DCG\/Suit\/PilotSuit_(Small|Normal|Large|XLarge)_Layer1\.png/);
        args[0] = updateAssetUrl(args[0], /Assets\/Female3DCG\/Suit\/ReverseBunnySuit_(Small|Normal|Large|XLarge)_Suit\.png/);
        args[0] = updateAssetUrl(args[0], /Assets\/Female3DCG\/Suit\/(BackBoxTie|BackCuffs|TapedHands|OverTheHead|Yoked)\/ReverseBunnySuit_(Small|Normal|Large|XLarge)_Suit\.png/);
        args[0] = updateAssetUrl(args[0], /Assets\/Female3DCG\/SuitLower\/Catsuit_(Small|Normal|Large|XLarge)_Base\.png/);
        args[0] = updateAssetUrl(args[0], /Assets\/Female3DCG\/SuitLower\/(Kneel|KneelingSpread|LegsClosed|Spread)\/Catsuit_(Small|Normal|Large|XLarge)_Base\.png/);
        args[0] = updateAssetUrl(args[0], /Assets\/Female3DCG\/SuitLower\/PilotSuit_(Small|Normal|Large|XLarge)_Layer4\.png/);
        args[0] = updateAssetUrl(args[0], /Assets\/Female3DCG\/SuitLower\/(LegsClosed|Spread)\/PilotSuit_(Small|Normal|Large|XLarge)_Layer4\.png/);
        args[0] = updateAssetUrl(args[0], /Assets\/Female3DCG\/SuitLower\/PilotSuit_(Small|Normal|Large|XLarge)_Layer1\.png/);
        args[0] = updateAssetUrl(args[0], /Assets\/Female3DCG\/SuitLower\/(Kneel|LegsClosed|Spread)\/PilotSuit_(Small|Normal|Large|XLarge)_Layer1\.png/);
        args[0] = updateAssetUrl(args[0], /Assets\/Female3DCG\/SuitLower\/ReverseBunnySuit_(Small|Normal|Large|XLarge)\.png/);
        args[0] = updateAssetUrl(args[0], /Assets\/Female3DCG\/SuitLower\/(Kneel|KneelingSpread|LegsClosed|Spread)\/ReverseBunnySuit_(Small|Normal|Large|XLarge)\.png/);
        args[0] = updateAssetUrl(args[0], /Assets\/Female3DCG\/SuitLower\/SeamlessCatsuit_(Small|Normal|Large|XLarge)\.png/);
        args[0] = updateAssetUrl(args[0], /Assets\/Female3DCG\/SuitLower\/(Kneel|KneelingSpread|LegsClosed|Spread)\/SeamlessCatsuit_(Small|Normal|Large|XLarge)\.png/);
        args[0] = updateAssetUrl(args[0], /Assets\/Female3DCG\/SuitLower\/SeethroughSuit_(Small|Normal|Large|XLarge)\.png/);
        args[0] = updateAssetUrl(args[0], /Assets\/Female3DCG\/SuitLower\/(Kneel|KneelingSpread|LegsClosed|Spread)\/SeethroughSuit_(Small|Normal|Large|XLarge)\.png/);
        args[0] = updateAssetUrl(args[0], /Assets\/Female3DCG\/SuitLower\/SeethroughSuitZip_(Small|Normal|Large|XLarge)_Base\.png/);
        args[0] = updateAssetUrl(args[0], /Assets\/Female3DCG\/SuitLower\/(Kneel|KneelingSpread|LegsClosed|Spread)\/SeethroughSuitZip_(Small|Normal|Large|XLarge)_Base\.png/);
        args[0] = updateAssetUrl(args[0], /Assets\/Female3DCG\/Socks\/(FootlessSocks1|LatexSocks1|Pantyhose1|Pantyhose2|Stockings1|Stockings2|Stockings3|Stockings4|VSocks1)_(Small|Normal|Large|XLarge)\.png/);
        args[0] = updateAssetUrl(args[0], /Assets\/Female3DCG\/Socks\/(Kneel|KneelingSpread|LegsClosed|Spread)\/(FootlessSocks1|LatexSocks1|Pantyhose1|Pantyhose2|Stockings1|Stockings2|Stockings3|Stockings4|VSocks1)_(Small|Normal|Large|XLarge)\.png/);
        args[0] = updateAssetUrl(args[0], /Assets\/Female3DCG\/Socks\/GradientPantyhose_(Small|Normal|Large|XLarge)_Upper\.png/);
        args[0] = updateAssetUrl(args[0], /Assets\/Female3DCG\/Socks\/(Kneel|KneelingSpread|LegsClosed|Spread)\/GradientPantyhose_(Small|Normal|Large|XLarge)_Upper\.png/);
        args[0] = updateAssetUrl(args[0], /Assets\/Female3DCG\/Socks\/GradientPantyhose_(Small|Normal|Large|XLarge)_Lower\.png/);
        args[0] = updateAssetUrl(args[0], /Assets\/Female3DCG\/Socks\/(LegsClosed|Spread)\/GradientPantyhose_(Small|Normal|Large|XLarge)_Lower\.png/);
        args[0] = updateAssetUrl(args[0], /Assets\/Female3DCG\/Socks\/YuletideVelvetWarmth_(Small|Normal|Large|XLarge)_Sock\.png/);
        args[0] = updateAssetUrl(args[0], /Assets\/Female3DCG\/Socks\/(Kneel|KneelingSpread|LegsClosed|Spread)\/YuletideVelvetWarmth_(Small|Normal|Large|XLarge)_Sock\.png/);
        args[0] = updateAssetUrl(args[0], /Assets\/Female3DCG\/Socks\/SocksStriped1_(Small|Normal|Large|XLarge)_(Dark|Light)\.png/);
        args[0] = updateAssetUrl(args[0], /Assets\/Female3DCG\/Socks\/(Kneel|KneelingSpread|LegsClosed|Spread)\/SocksStriped1_(Small|Normal|Large|XLarge)_(Dark|Light)\.png/);

        args[0] = updateAssetUrl(args[0], /Assets\/Female3DCG\/ItemDevices\/KabeshiriWall_(Asian|Black|White)_(Butt|Feet|Hands|Legs|Penis|Pussy)\.png/);

        args[0] = updateAssetUrl(args[0], /Assets\/Female3DCG\/ItemArms\/(Kneel|AllFours)\/ShinyPetSuit_(Small|Normal|Large|XLarge)_Latex_(Open|Closed2|Closed|Latex)\.png/);
        args[0] = updateAssetUrl(args[0], /Assets\/Female3DCG\/ItemArms\/(Kneel|AllFours)\/ShinyPetSuit_(Small|Normal|Large|XLarge)_Zips_(Open|Closed2|Closed)\.png/);
        args[0] = updateAssetUrl(args[0], /Assets\/Female3DCG\/ItemArms\/(Kneel|AllFours)\/ShinyPetSuit_(Small|Normal|Large|XLarge)_Zips\.png/);


        next(args);
    });



    const PreviewICONS = Object.freeze({

        "Assets/Female3DCG/TailStraps/Preview/穿戴式狗尾:镜像_Luzi.png": "Assets/Female3DCG/TailStraps/Preview/PuppyTailStrap.png",
        "Assets/Female3DCG/TailStraps/Preview/白色穿戴式狼尾:镜像_Luzi.png": "Assets/Female3DCG/TailStraps/Preview/WolfTailStrap3.png",
        "Assets/Female3DCG/TailStraps/Preview/穿戴式浅色猫尾:镜像_Luzi.png": "Assets/Female3DCG/TailStraps/Preview/KittenTailStrap1.png",
        "Assets/Female3DCG/TailStraps/Preview/穿戴式软小狗尾:镜像_Luzi.png": "Assets/Female3DCG/TailStraps/Preview/PuppyTailStrap1.png",
        "Assets/Female3DCG/TailStraps/Preview/大型穿戴式狼尾:镜像_Luzi.png": "Assets/Female3DCG/TailStraps/Preview/WolfTailStrap1.png",
        "Assets/Female3DCG/TailStraps/Preview/小型穿戴式狼尾:镜像_Luzi.png": "Assets/Female3DCG/TailStraps/Preview/WolfTailStrap2.png",
        "Assets/Female3DCG/TailStraps/Preview/小型穿戴式软猫尾:镜像_Luzi.png": "Assets/Female3DCG/TailStraps/Preview/KittenTailStrap2.png",
        "Assets/Female3DCG/TailStraps/Preview/穿戴式猫尾:镜像_Luzi.png": "Assets/Female3DCG/TailStraps/Preview/TailStrap.png",

        "Screens/Inventory/ItemTorso/拘束套装_Luzi/无.png": "https://emdsa2.github.io/-mod/image/空.png",
        "Screens/Inventory/ItemTorso/拘束套装_Luzi/乳胶衣.png": "https://emdsa2.github.io/-mod/image/空.png",
        "Screens/Inventory/ItemTorso/拘束套装_Luzi/透视紧身衣.png": "https://emdsa2.github.io/-mod/image/空.png",
        "Screens/Inventory/ItemTorso/拘束套装_Luzi/紧身衣.png": "https://emdsa2.github.io/-mod/image/空.png",

        "Screens/Inventory/ItemDevices/窝瓜_Luzi/没盖子.png": "https://emdsa2.github.io/-mod/image/空.png",
        "Screens/Inventory/ItemDevices/窝瓜_Luzi/有盖子.png": "https://emdsa2.github.io/-mod/image/空.png",


        "Screens/Inventory/SuitLower/鱼鱼尾_Luzi/q0.png": "https://emdsa2.github.io/-mod/image/空.png",
        "Screens/Inventory/SuitLower/鱼鱼尾_Luzi/q1.png": "https://emdsa2.github.io/-mod/image/空.png",
        "Screens/Inventory/SuitLower/鱼鱼尾_Luzi/w0.png": "https://emdsa2.github.io/-mod/image/空.png",
        "Screens/Inventory/SuitLower/鱼鱼尾_Luzi/w1.png": "https://emdsa2.github.io/-mod/image/空.png",

    });


    mod.hookFunction('DrawImageResize', 1, (args, next) => {
        const data = args[0];
        if (typeof data === 'string') {
            if (data.includes("_笨笨蛋Luzi")) {
                args[0] = data.replace("_笨笨蛋Luzi", "");
            }

            if (data.includes("_笨笨笨蛋Luzi2")) {
                args[0] = data.replace("_笨笨笨蛋Luzi2", "");
            }

            if (PreviewICONS[data]) {
                args[0] = PreviewICONS[data];
            }

            if (data.includes("_Luzi")) {
                args[0] = data.replace("Assets", "https://emdsa2.github.io/-mod");
            }

            if (data.includes("阿巴阿巴")) {
                args[0] = "https://emdsa2.github.io/-mod/Female3DCG/ItemHandheld/Preview/阿巴阿巴_Luzi.png"
            }
        }

        next(args);
    });

    mod.hookFunction('DrawButton', 1, (args, next) => {
        const data = args[6];
        if (typeof data === 'string') {
            if (data.includes("_Luzi")) {
                args[6] = data.replace("Assets", "https://emdsa2.github.io/-mod");
            }
        }
        next(args);

    });

    // ================================================================================
    // ================================================================================
    const addAsset = {
        ItemHood: [
            {
                Name: "绷带头部_Luzi", Random: false,
                Priority: 51,
                Top: 0, Left: 0,
            },
            {
                Name: "毛毯头部_Luzi", Random: false,
                Top: 0, Left: 0,
                Hide: ["HairBack"],
                Layer: [
                    { Name: "上", Priority: 52, },
                    { Name: "下", Priority: 1, },
                ],
            },
        ],
        Wings: [
            {
                Name: "蝴蝶结背饰_Luzi", Random: false,
                Top: -110, Left: 0,
            },
        ],
        Glasses: [
            {
                Name: "单边眼镜左_Luzi", Random: false,
                Top: 0, Left: 0,
            },
            {
                Name: "单边眼镜右_Luzi", Random: false,
                Top: 0, Left: 0,
            },
            {
                Name: "眼镜卡_Luzi", Random: false,
                Top: 0, Left: 0,
                Layer: [{ Name: "眼镜", Priority: 56, },],
            },
        ],
        Cloth: [
            {
                Name: "女仆装_Luzi", Random: false, Gender: "F",
                Top: 0, Left: 0,
                Prerequisite: ["HasBreasts"],
                Layer: [
                    {
                        Name: "裙子",
                        PoseMapping: {
                            TapedHands: "BackElbowTouch",
                            Yoked: "BackElbowTouch", OverTheHead: "BackElbowTouch",
                            BackBoxTie: "BackElbowTouch",
                            BackElbowTouch: "BackElbowTouch",
                            BackCuffs: "BackElbowTouch",
                        },
                    },
                    {
                        Name: "围裙",
                        PoseMapping: {
                            TapedHands: "BackElbowTouch",
                            Yoked: "BackElbowTouch", OverTheHead: "BackElbowTouch",
                            BackBoxTie: "BackElbowTouch",
                            BackElbowTouch: "BackElbowTouch",
                            BackCuffs: "BackElbowTouch",
                        },
                    },
                    {
                        Name: "蝴蝶结",
                        PoseMapping: {
                            TapedHands: "",
                            Yoked: "", OverTheHead: "",
                            BackBoxTie: "",
                            BackElbowTouch: "",
                            BackCuffs: "",
                        },
                    },
                ],
            },
            {
                Name: "奶牛_Luzi", Random: false, Gender: "F",
                Top: 0, Left: 0,
                Prerequisite: ["HasBreasts"],
                Layer: [
                    {
                        Name: "衣服", Priority: 26,
                        PoseMapping: {
                            TapedHands: "",
                            Yoked: "", OverTheHead: "",
                            BackBoxTie: "",
                            BackElbowTouch: "",
                            BackCuffs: "",
                        },
                    },
                    {
                        Name: "边缘", Priority: 26,
                        PoseMapping: {
                            TapedHands: "",
                            Yoked: "", OverTheHead: "",
                            BackBoxTie: "",
                            BackElbowTouch: "",
                            BackCuffs: "",
                        },
                    },
                ],
            },
        ],
        Socks: [
            {
                Name: "圣诞_Luzi", Random: false,
                Top: 0, Left: 0,
                Layer: [
                    { Name: "袜子", },
                    { Name: "绒毛", },
                ],
            },
            {
                Name: "踩脚袜_Luzi", Random: false,
                Top: 0, Left: 0,
            },
            {
                Name: "条纹袜_Luzi", Random: false,
                Top: 0, Left: 0,
            },
            {
                Name: "条纹袜2_Luzi", Random: false,
                Top: 0, Left: 0,
            },
        ],
        Suit: [
            {
                Name: "乳胶衣上_Luzi", Random: false, Gender: "F",
                Top: -110, Left: 0,
                Random: false,
                Prerequisite: ["HasBreasts"],
                Expose: ["ItemNipples", "ItemBreast", "ItemNipplesPiercings"],
                Layer: [
                    {
                        Name: "手套", Priority: 27,
                        PoseMapping: {
                            TapedHands: "Hide",
                            Yoked: "Hide", OverTheHead: "Hide",
                            BackBoxTie: "Hide",
                            BackElbowTouch: "Hide",
                            BackCuffs: "Hide",
                        },
                    },
                    { Name: "上衣", Priority: 14, },
                ],
            },
        ],
        SuitLower: [
            {
                Name: "乳胶衣下_Luzi", Random: false, Gender: "F",
                Top: -110, Left: 0,
                Random: false,
                Prerequisite: ["HasVagina"],
                Attribute: ["SuitLower"],
            },
            {
                Name: "鱼鱼尾_Luzi", Random: false, Gender: "F",
                Top: -110, Left: 0, Extended: true,
                OverrideHeight: { Height: 30, Priority: 19, },
                PoseMapping: { Spread: "", LegsClosed: "", KneelingSpread: "Kneel", Kneel: "Kneel", },
                Hide: ["BodyLower", "Socks", "SocksLeft", "SocksRight", "RightAnklet", "LeftAnklet", "Pussy"],
                Layer: [
                    { Name: "鱼尾上", Priority: 22 },
                    { Name: "鱼尾下不透明2", Priority: 22, AllowTypes: { w: 1 }, CopyLayerColor: "鱼尾下不透明", PoseMapping: { Spread: "Hide", LegsClosed: "Hide", KneelingSpread: "Kneel", Kneel: "Kneel", }, },
                    { Name: "鱼尾下透明2", Priority: 22, AllowTypes: { w: 0 }, CopyLayerColor: "鱼尾下透明", PoseMapping: { Spread: "Hide", LegsClosed: "Hide", KneelingSpread: "Kneel", Kneel: "Kneel", }, },
                    { Name: "鱼尾下骨架2", Priority: 22, CopyLayerColor: "鱼尾下骨架", PoseMapping: { Spread: "Hide", LegsClosed: "Hide", KneelingSpread: "Kneel", Kneel: "Kneel", }, },
                    { Name: "鱼尾下不透明", Priority: 22, AllowTypes: { w: 1 }, PoseMapping: { Spread: "", LegsClosed: "", KneelingSpread: "Hide", Kneel: "Hide", }, },
                    { Name: "鱼尾下透明", Priority: 22, AllowTypes: { w: 0 }, PoseMapping: { Spread: "", LegsClosed: "", KneelingSpread: "Hide", Kneel: "Hide", }, },
                    { Name: "鱼尾下骨架", Priority: 22 },
                    { Name: "鱼尾鱼鳍上透明", Priority: 22, AllowTypes: { q: 1 } },
                    { Name: "鱼尾鱼鳍上骨架", Priority: 22, AllowTypes: { q: 1 } },
                    { Name: "高光上半", Priority: 22 },
                    { Name: "高光下半", Priority: 22 },
                ]
            },
        ],
        Panties: [
            {
                Name: "淫纹_Luzi", Random: false, Gender: "F",
                Top: -110, Left: 0,
                Priority: 9,
                Prerequisite: ["HasVagina"],
                Fetish: ["Lingerie"],
                DefaultColor: ["#E975A0"],
            },
        ],
        TailStraps: [
            {
                Name: "穿戴式狗尾镜像_Luzi", Random: false, Top: -100, Left: 0,
            },
            {
                Name: "白色穿戴式狼尾镜像_Luzi", Random: false, Top: -100, Left: 0,
            },
            {
                Name: "穿戴式浅色猫尾镜像_Luzi", Random: false, Top: 0, Left: 0,
            },
            {
                Name: "穿戴式软小狗尾镜像_Luzi", Random: false, Top: 0, Left: 0,
            },
            {
                Name: "大型穿戴式狼尾镜像_Luzi", Random: false, Top: -100, Left: 0,
            },
            {
                Name: "小型穿戴式狼尾镜像_Luzi", Random: false, Top: 0, Left: 0,
            },
            {
                Name: "小型穿戴式软猫尾镜像_Luzi", Random: false, Top: 0, Left: 0,
            },
            {
                Name: "穿戴式猫尾镜像_Luzi", Random: false, Top: -100, Left: 0,
                Layer: [
                    { Name: "尾巴" },
                    { Name: "蝴蝶结" },
                    { Name: "铃铛" },
                ],
            },
        ],
        ItemHands: [
            {
                Name: "拳击手套_Luzi", Random: false, Gender: "F",
                PoseMapping: {
                    Yoked: "Yoked", OverTheHead: "OverTheHead",
                    BackBoxTie: "Hide",
                    BackElbowTouch: "Hide",
                    BackCuffs: "Hide",
                    AllFours: "Hide",
                },
                Effect: [E.MergedFingers],
                Hide: ["ItemHandheld"],
            },
        ],
        ItemHandheld: [
            {
                Name: "电蚊拍_Luzi", Random: false,
                Top: -110, Left: 0,
                Fetish: ["Sadism"],
                AllowActivity: ["ShockItem"],
                ActivityAudio: ["Shocks"],
                PoseMapping: {
                    TapedHands: "Hide",
                    Yoked: "Hide", OverTheHead: "Hide",
                    BackBoxTie: "Hide",
                    BackElbowTouch: "Hide",
                    BackCuffs: "Hide",
                    AllFours: "Hide",
                },
            },
            {
                Name: "阿巴阿巴_Luzi", Random: false,
                Top: -110, Left: 0,
                Fetish: ["Sadism"],
                // AllowActivity: ["ShockItem"],
                // ActivityAudio: ["Shocks"],
                PoseMapping: {
                    TapedHands: "Hide",
                    Yoked: "Hide", OverTheHead: "Hide",
                    BackBoxTie: "Hide",
                    BackElbowTouch: "Hide",
                    BackCuffs: "Hide",
                    AllFours: "Hide",
                },
            },
        ],
        ItemArms: [
            {
                Name: "乳胶宠物拘束服_Luzi", Random: false, Gender: "F",
                Top: 0, Left: 0,
                Difficulty: 12,
                SelfBondage: 8,
                Time: 40,
                RemoveTime: 30,
                AllowLock: true,
                AllowTighten: true,
                Fetish: ["Leather", "Pet"],
                Prerequisite: ["HasBreasts"],
                PoseMapping: { Kneel: "Kneel", KneelingSpread: "KneelingSpread", AllFours: "AllFours", },
                AllowActivePose: ["KneelingSpread", "BackElbowTouch", "AllFours"],
                SetPose: ["BackElbowTouch", "Kneel"],
                Effect: [E.Block, E.BlockWardrobe],
                Block: ["ItemHands", "ItemHandheld"],
                Layer: [
                    { Name: "本体" },
                    { Name: "束带" },
                    { Name: "挂钩" },
                    {
                        Name: "Lock",
                        ParentGroup: null,
                        LockLayer: true
                    },
                ],
            },
        ],
        ItemTorso: [
            {
                Name: "鞍_Luzi",
                Random: false,
                SetPose: ["AllFours"],
                AllowActivePose: ["AllFours"],
            },
            {
                Name: "缰绳_Luzi",
                Random: false,
            },
            {
                Name: "拘束套装_Luzi", Random: false, Gender: "F",
                Top: 0, Left: 0,
                Difficulty: 25,
                Effect: [E.Block, E.BlockWardrobe, E.Slow],
                Prerequisite: ["HasBreasts"],
                SetPose: ["BackElbowTouch"],
                AllowActivePose: ["BackElbowTouch"],
                Layer: [
                    {
                        Name: "下半身", Priority: 31,
                        ParentGroup: "BodyLower",
                        PoseMapping:
                        {
                            Kneel: "Kneel",
                            KneelingSpread: "KneelingSpread",
                            LegsClosed: "LegsClosed",
                            Spread: "Spread",
                            Hogtied: "Hide",
                        },
                    },
                    {
                        Name: "上半身", Priority: 31,
                        ParentGroup: "BodyUpper",
                        PoseMapping:
                        {
                            BackElbowTouch: "BackElbowTouch",
                            Hogtied: "Hogtied",
                        },
                    },
                    {
                        Name: "下半身圆环", Priority: 31,
                        ParentGroup: "BodyLower",
                        PoseMapping:
                        {
                            Kneel: "Kneel",
                            KneelingSpread: "KneelingSpread",
                            LegsClosed: "LegsClosed",
                            Spread: "Spread",
                            Hogtied: "Hide",
                        },
                    },
                    {
                        Name: "上半身圆环", Priority: 32,
                        ParentGroup: "BodyUpper",
                        PoseMapping:
                        {
                            BackElbowTouch: "BackElbowTouch",
                            Hogtied: "Hogtied",
                        },
                    },
                    {
                        Name: "下半身松紧扣", Priority: 32,
                        ParentGroup: "BodyLower",
                        PoseMapping:
                        {
                            Kneel: "Kneel",
                            KneelingSpread: "KneelingSpread",
                            LegsClosed: "LegsClosed",
                            Spread: "Spread",
                            Hogtied: "Hide",
                        },
                    },
                    {
                        Name: "上半身松紧扣", Priority: 32,
                        ParentGroup: "BodyUpper",
                        PoseMapping:
                        {
                            BackElbowTouch: "BackElbowTouch",
                            Hogtied: "Hogtied",
                        },
                    },
                    {
                        Name: "链子", Priority: 30,
                        ParentGroup: "BodyLower",
                        PoseMapping:
                        {
                            Kneel: "Kneel",
                            KneelingSpread: "KneelingSpread",
                            LegsClosed: "LegsClosed",
                            Spread: "Spread",
                            Hogtied: "Hide",
                        },
                    },
                    {
                        Name: "手臂", Priority: 5,
                        ParentGroup: "BodyUpper",
                        PoseMapping:
                        {
                            BackElbowTouch: "BackElbowTouch",
                            Hogtied: "",
                        },
                    },
                    {
                        Name: "乳胶衣", Priority: 6,
                        AllowTypes: { typed: 1 },
                        PoseMapping:
                        {
                            BackElbowTouch: "BackElbowTouch",
                            Hogtied: "",
                        },
                    },
                    {
                        Name: "透视紧身衣", Priority: 6,
                        AllowTypes: { typed: 2 },
                        PoseMapping:
                        {
                            BackElbowTouch: "BackElbowTouch",
                            Hogtied: "",
                        },
                    },
                    {
                        Name: "紧身衣", Priority: 6,
                        AllowTypes: { typed: 3 },
                        PoseMapping:
                        {
                            BackElbowTouch: "BackElbowTouch",
                            Hogtied: "",
                        },
                    },
                ],
            },
            {
                Name: "胶带全身_Luzi", Gender: "F", Random: false,
                Top: 0, Left: 0,
                Difficulty: 10,
                SelfBondage: 6,
                Time: 30,
                RemoveTime: 40,
                AllowTighten: true,
                Random: false,
                Audio: "DuctTapeRollShort",
                SetPose: ["BackElbowTouch", "LegsClosed"],
                Effect: [E.Block, E.BlockWardrobe, E.Slow],
                Prerequisite: ["HasBreasts"],
                Layer: [
                    { Name: "上", Priority: 24, ParentGroup: "BodyUpper", PoseMapping: { BackElbowTouch: "", }, },
                    { Name: "下", Priority: 24, ParentGroup: "BodyLower", PoseMapping: { LegsClosed: "", }, },
                ],
            },
            {
                Name: "睡袋改_Luzi", Gender: "F", Random: false,
                Top: 0, Left: 0,
                Difficulty: 10,
                SelfBondage: 6,
                Time: 30,
                RemoveTime: 40,
                AllowLock: true,
                AllowTighten: true,
                DrawLocks: false,
                Random: false,
                SetPose: ["BackElbowTouch", "LegsClosed"],
                Effect: [E.Block, E.BlockWardrobe, E.Slow],
                Prerequisite: ["HasBreasts"],
                SelfUnlock: false,
                Layer: [
                    { Name: "上", Priority: 35, ParentGroup: "BodyUpper", PoseMapping: { BackElbowTouch: "", }, },
                    { Name: "下", Priority: 0, ParentGroup: "BodyLower", PoseMapping: { LegsClosed: "", }, },
                ],
            },
            {
                Name: "全包毛毯改_Luzi", Gender: "F", Random: false,
                Top: 0, Left: 0,
                Difficulty: 10,
                SelfBondage: 6,
                Time: 30,
                RemoveTime: 40,
                AllowTighten: true,
                Random: false,
                SetPose: ["BackElbowTouch", "LegsClosed"],
                Effect: [E.Block, E.BlockWardrobe, E.Slow],
                Prerequisite: ["HasBreasts"],
                Layer: [
                    { Name: "上", Priority: 24, ParentGroup: "BodyUpper", PoseMapping: { BackElbowTouch: "", }, },
                    { Name: "下", Priority: 24, ParentGroup: "BodyLower", PoseMapping: { LegsClosed: "", }, },
                ],
            },
            {
                Name: "绷带全身_Luzi", Gender: "F", Random: false,
                Top: 0, Left: 0,
                Difficulty: 10,
                SelfBondage: 6,
                Time: 30,
                RemoveTime: 40,
                AllowTighten: true,
                Random: false,
                SetPose: ["BackElbowTouch", "LegsClosed"],
                Effect: [E.Block, E.BlockWardrobe, E.Slow],
                Prerequisite: ["HasBreasts"],
                Layer: [
                    { Name: "上", Priority: 24, ParentGroup: "BodyUpper", PoseMapping: { BackElbowTouch: "", }, },
                    { Name: "下", Priority: 24, ParentGroup: "BodyLower", PoseMapping: { LegsClosed: "", }, },
                ],
            },
            {
                Name: "触手服_Luzi", Random: false, Gender: "F",
                Top: 0, Left: 0,
                Difficulty: 8,
                AllowLock: true,
                AllowTighten: true,
                DrawLocks: false,
                Prerequisite: ["HasBreasts"],
                DynamicBeforeDraw: true,
                DynamicScriptDraw: true,
                RemoveTime: 5,
                Time: 10,
                Value: 30,
                Layer: [
                    {
                        AllowTypes: { d: 0 },
                        Name: "触手服", Priority: 15,
                        PoseMapping: { AllFours: "Hide", Hogtied: 'Hogtied', },
                    },
                    {
                        AllowTypes: { s: 1 },
                        Name: "上衣", Priority: 16,
                        PoseMapping: { AllFours: "Hide", Hogtied: 'Hogtied', },
                    },
                    {
                        AllowTypes: { d: [1, 2] },
                        Name: "触手服开", Priority: 15,
                        PoseMapping: { AllFours: "Hide", Hogtied: 'Hogtied', },
                    },
                    {
                        AllowTypes: { m: 1 },
                        Name: "触手服嘴套", Priority: 15,
                        ParentGroup: "ItemHood",
                        PoseMapping: { AllFours: "", Hogtied: "", },
                    },
                    {
                        AllowTypes: { h: [1, 2] },
                        ParentGroup: "BodyUpper",
                        Name: "触手服手套", Priority: 27,
                        PoseMapping: { AllFours: 'Hide', Hogtied: 'Hide', Yoked: 'Yoked', OverTheHead: 'OverTheHead', BackCuffs: 'BackCuffs', BackBoxTie: 'BackBoxTie', TapedHands: 'TapedHands', BackElbowTouch: 'BackElbowTouch' },
                    },
                    {
                        AllowTypes: { f: 1 },
                        Name: "触手服脚套", Priority: 15,
                        ParentGroup: "BodyLower",
                        PoseMapping: { AllFours: 'Hide', Hogtied: 'Hide', Kneel: 'Kneel', KneelingSpread: 'KneelingSpread', LegsClosed: 'LegsClosed' },
                    },
                    {
                        ParentGroup: "ItemVulva",
                        AllowTypes: { d: 2 },
                        Name: "Pussy", Priority: 13,
                        PoseMapping: { AllFours: "Hide", },
                    },
                    {
                        ParentGroup: "ItemVulva",
                        AllowTypes: { d: 2 },
                        Name: "PussyMask", Priority: 14,
                        PoseMapping: { AllFours: "Hide", },
                        InheritColor: "BodyLower",
                        HideColoring: true,
                        ColorSuffix: { HEX_COLOR: "White" },
                    },
                    {
                        Name: "触手", Priority: 13,
                        AllowTypes: { d: 2 },
                        ParentGroup: "ItemVulva",
                        PoseMapping: { AllFours: "Hide", },
                    },
                    {
                        Name: "触手背后", Priority: 2,
                        AllowTypes: { d: 2 },
                        ParentGroup: "ItemVulva",
                        PoseMapping: { AllFours: "Hide", },
                    },
                ],
            },
        ],
        ItemTorso2: [
            {
                Name: "拘束套装_Luzi", Random: false, Gender: "F",
                Top: 0, Left: 0,
                Difficulty: 25,
                Effect: [E.Block, E.BlockWardrobe, E.Slow],
                Prerequisite: ["HasBreasts"],
                SetPose: ["BackElbowTouch"],
                AllowActivePose: ["BackElbowTouch"],
                Layer: [
                    {
                        Name: "下半身", Priority: 31,
                        ParentGroup: "BodyLower",
                        PoseMapping:
                        {
                            Kneel: "Kneel",
                            KneelingSpread: "KneelingSpread",
                            LegsClosed: "LegsClosed",
                            Spread: "Spread",
                            Hogtied: "Hide",
                        },
                    },
                    {
                        Name: "上半身", Priority: 31,
                        ParentGroup: "BodyUpper",
                        PoseMapping:
                        {
                            BackElbowTouch: "BackElbowTouch",
                            Hogtied: "Hogtied",
                        },
                    },
                    {
                        Name: "下半身圆环", Priority: 31,
                        ParentGroup: "BodyLower",
                        PoseMapping:
                        {
                            Kneel: "Kneel",
                            KneelingSpread: "KneelingSpread",
                            LegsClosed: "LegsClosed",
                            Spread: "Spread",
                            Hogtied: "Hide",
                        },
                    },
                    {
                        Name: "上半身圆环", Priority: 32,
                        ParentGroup: "BodyUpper",
                        PoseMapping:
                        {
                            BackElbowTouch: "BackElbowTouch",
                            Hogtied: "Hogtied",
                        },
                    },
                    {
                        Name: "下半身松紧扣", Priority: 32,
                        ParentGroup: "BodyLower",
                        PoseMapping:
                        {
                            Kneel: "Kneel",
                            KneelingSpread: "KneelingSpread",
                            LegsClosed: "LegsClosed",
                            Spread: "Spread",
                            Hogtied: "Hide",
                        },
                    },
                    {
                        Name: "上半身松紧扣", Priority: 32,
                        ParentGroup: "BodyUpper",
                        PoseMapping:
                        {
                            BackElbowTouch: "BackElbowTouch",
                            Hogtied: "Hogtied",
                        },
                    },
                    {
                        Name: "链子", Priority: 30,
                        ParentGroup: "BodyLower",
                        PoseMapping:
                        {
                            Kneel: "Kneel",
                            KneelingSpread: "KneelingSpread",
                            LegsClosed: "LegsClosed",
                            Spread: "Spread",
                            Hogtied: "Hide",
                        },
                    },
                    {
                        Name: "手臂", Priority: 5,
                        ParentGroup: "BodyUpper",
                        PoseMapping:
                        {
                            BackElbowTouch: "BackElbowTouch",
                            Hogtied: "",
                        },
                    },
                    {
                        Name: "乳胶衣", Priority: 6,
                        AllowTypes: { typed: 1 },
                        PoseMapping:
                        {
                            BackElbowTouch: "BackElbowTouch",
                            Hogtied: "",
                        },
                    },
                    {
                        Name: "透视紧身衣", Priority: 6,
                        AllowTypes: { typed: 2 },
                        PoseMapping:
                        {
                            BackElbowTouch: "BackElbowTouch",
                            Hogtied: "",
                        },
                    },
                    {
                        Name: "紧身衣", Priority: 6,
                        AllowTypes: { typed: 3 },
                        PoseMapping:
                        {
                            BackElbowTouch: "BackElbowTouch",
                            Hogtied: "",
                        },
                    },
                ],
            },
            {
                Name: "胶带全身_Luzi", Gender: "F", Random: false,
                Top: 0, Left: 0,
                Difficulty: 10,
                SelfBondage: 6,
                Time: 30,
                RemoveTime: 40,
                AllowTighten: true,
                Random: false,
                Audio: "DuctTapeRollShort",
                SetPose: ["BackElbowTouch", "LegsClosed"],
                Effect: [E.Block, E.BlockWardrobe, E.Slow],
                Prerequisite: ["HasBreasts"],
                Layer: [
                    { Name: "上", Priority: 24, ParentGroup: "BodyUpper", PoseMapping: { BackElbowTouch: "", }, },
                    { Name: "下", Priority: 24, ParentGroup: "BodyLower", PoseMapping: { LegsClosed: "", }, },
                ],
            },
            {
                Name: "睡袋改_Luzi", Gender: "F", Random: false,
                Top: 0, Left: 0,
                Difficulty: 10,
                SelfBondage: 6,
                Time: 30,
                RemoveTime: 40,
                AllowLock: true,
                AllowTighten: true,
                DrawLocks: false,
                Random: false,
                SetPose: ["BackElbowTouch", "LegsClosed"],
                Effect: [E.Block, E.BlockWardrobe, E.Slow],
                Prerequisite: ["HasBreasts"],
                SelfUnlock: false,
                Layer: [
                    { Name: "上", Priority: 35, ParentGroup: "BodyUpper", PoseMapping: { BackElbowTouch: "", }, },
                    { Name: "下", Priority: 0, ParentGroup: "BodyLower", PoseMapping: { LegsClosed: "", }, },
                ],
            },
            {
                Name: "全包毛毯改_Luzi", Gender: "F", Random: false,
                Top: 0, Left: 0,
                Difficulty: 10,
                SelfBondage: 6,
                Time: 30,
                RemoveTime: 40,
                AllowTighten: true,
                Random: false,
                SetPose: ["BackElbowTouch", "LegsClosed"],
                Effect: [E.Block, E.BlockWardrobe, E.Slow],
                Prerequisite: ["HasBreasts"],
                Layer: [
                    { Name: "上", Priority: 24, ParentGroup: "BodyUpper", PoseMapping: { BackElbowTouch: "", }, },
                    { Name: "下", Priority: 24, ParentGroup: "BodyLower", PoseMapping: { LegsClosed: "", }, },
                ],
            },
            {
                Name: "绷带全身_Luzi", Gender: "F", Random: false,
                Top: 0, Left: 0,
                Difficulty: 10,
                SelfBondage: 6,
                Time: 30,
                RemoveTime: 40,
                AllowTighten: true,
                Random: false,
                SetPose: ["BackElbowTouch", "LegsClosed"],
                Effect: [E.Block, E.BlockWardrobe, E.Slow],
                Prerequisite: ["HasBreasts"],
                Layer: [
                    { Name: "上", Priority: 24, ParentGroup: "BodyUpper", PoseMapping: { BackElbowTouch: "", }, },
                    { Name: "下", Priority: 24, ParentGroup: "BodyLower", PoseMapping: { LegsClosed: "", }, },
                ],
            },
            {
                Name: "触手服_Luzi", Random: false, Gender: "F",
                Top: 0, Left: 0,
                Difficulty: 8,
                AllowLock: true,
                AllowTighten: true,
                DrawLocks: false,
                Prerequisite: ["HasBreasts"],
                DynamicBeforeDraw: true,
                DynamicScriptDraw: true,
                RemoveTime: 5,
                Time: 10,
                Value: 30,
                Layer: [
                    {
                        AllowTypes: { d: 0 },
                        Name: "触手服", Priority: 15,
                        PoseMapping: { AllFours: "Hide", Hogtied: 'Hogtied', },
                    },
                    {
                        AllowTypes: { s: 1 },
                        Name: "上衣", Priority: 16,
                        PoseMapping: { AllFours: "Hide", Hogtied: 'Hogtied', },
                    },
                    {
                        AllowTypes: { d: [1, 2] },
                        Name: "触手服开", Priority: 15,
                        PoseMapping: { AllFours: "Hide", Hogtied: 'Hogtied', },
                    },
                    {
                        AllowTypes: { m: 1 },
                        Name: "触手服嘴套", Priority: 15,
                        ParentGroup: "ItemHood",
                        PoseMapping: { AllFours: "", Hogtied: "", },
                    },
                    {
                        AllowTypes: { h: [1, 2] },
                        ParentGroup: "BodyUpper",
                        Name: "触手服手套", Priority: 27,
                        PoseMapping: { AllFours: 'Hide', Hogtied: 'Hide', Yoked: 'Yoked', OverTheHead: 'OverTheHead', BackCuffs: 'BackCuffs', BackBoxTie: 'BackBoxTie', TapedHands: 'TapedHands', BackElbowTouch: 'BackElbowTouch' },
                    },
                    {
                        AllowTypes: { f: 1 },
                        Name: "触手服脚套", Priority: 15,
                        ParentGroup: "BodyLower",
                        PoseMapping: { AllFours: 'Hide', Hogtied: 'Hide', Kneel: 'Kneel', KneelingSpread: 'KneelingSpread', LegsClosed: 'LegsClosed' },
                    },
                    {
                        ParentGroup: "ItemVulva",
                        AllowTypes: { d: 2 },
                        Name: "Pussy", Priority: 13,
                        PoseMapping: { AllFours: "Hide", },
                    },
                    {
                        ParentGroup: "ItemVulva",
                        AllowTypes: { d: 2 },
                        Name: "PussyMask", Priority: 14,
                        PoseMapping: { AllFours: "Hide", },
                        InheritColor: "BodyLower",
                        HideColoring: true,
                        ColorSuffix: { HEX_COLOR: "White" },
                    },
                    {
                        Name: "触手", Priority: 13,
                        AllowTypes: { d: 2 },
                        ParentGroup: "ItemVulva",
                        PoseMapping: { AllFours: "Hide", },
                    },
                    {
                        Name: "触手背后", Priority: 2,
                        AllowTypes: { d: 2 },
                        ParentGroup: "ItemVulva",
                        PoseMapping: { AllFours: "Hide", },
                    },
                ],
            },
        ],
        ItemDevices: [
            {
                Name: "猪猪_Luzi", Random: false,
                Top: -110, Left: 0,
                SetPose: ["KneelingSpread"],
                AllowActivePose: ["KneelingSpread"],
                OverrideHeight: { Height: -150, Priority: 21 },
                Layer: [
                    { Name: "鼻子", Priority: 56 },
                    { Name: "猪猪", Priority: 55 },
                    { Name: "缰绳", Priority: 26 },
                ],
            },
            {
                Name: "玻璃罐子_Luzi", Random: false, Gender: "F",
                Top: -110, Left: 0,
                AllowLock: true,
                Difficulty: 50,
                Hide: ["Mouth", "Glasses", "TailStraps"],
                AllowActivePose: ["BackBoxTie", 'BackCuffs', 'BackElbowTouch', 'LegsClosed'],
                Extended: true,
                DefaultColor: ["#151515", "#151515", "#FFFFFF", "#FFFFFF", "#2A2A2A", "#404040", "#2A2A2A", "#404040", "#EE168E", "#EE168E", "#9E2184", "#6D0B4A", "#4A4242", "#FF3CC3", "#E17070"],
                Layer: [
                    { Name: "舌头", AllowColorize: false, Priority: 7 },
                    { Name: "身体衔接", Priority: 30 },
                    { Name: "管道衔接", Priority: 40, AllowTypes: { gz: 1 } },
                    { Name: "管道", Priority: 38, AllowTypes: { gz: 1 } },
                    { Name: "管道2", Priority: 5, AllowTypes: { gz: 1 } },
                    { Name: "上1", Priority: 56 },
                    { Name: "上2", Priority: 4 },
                    { Name: "下1", Priority: 56 },
                    { Name: "下2", Priority: 4 },
                    { Name: "面板", Priority: 56 },
                    { Name: "液体", Priority: 39, AllowTypes: { yt: 1 } },
                    { Name: "液体2", Priority: 6, AllowTypes: { yt: 1 } },
                    { Name: "玻璃罐液体前", Priority: 56, AllowTypes: { yt: 1 } },
                    { Name: "玻璃罐液体后", Priority: 4, AllowTypes: { yt: 1 } },
                    { Name: "玻璃外层", Priority: 57, AllowTypes: { c: 0 } },
                    { Name: "发光", Priority: 31 },
                    { Name: "玻璃关闭", Priority: 57, AllowTypes: { c: 1 } },
                    { Name: "手臂拘束", Priority: 35, AllowTypes: { s: 1 } },
                    { Name: "腿部拘束", Priority: 35, AllowTypes: { t: 1 } },
                    { Name: "吊顶链", Priority: 5, AllowTypes: { s: 1 } },],
            },
            {
                Name: "床左边_Luzi", Random: false,
                Top: -260, Left: 0,
                Priority: 1,
                Difficulty: -20,
                SelfBondage: 0,
                Time: 5,
                RemoveTime: 5,
                RemoveAtLogin: true,
                OverrideHeight: { Height: 20, HeightRatioProportion: 1, Priority: 21 },
                DefaultColor: ["#523629", "#888990", "#808284"],
                RemoveItemOnRemove: [
                    { Group: "ItemAddon", Name: "Covers" },
                    { Group: "ItemAddon", Name: "被子左边_Luzi" },
                    { Group: "ItemAddon", Name: "被子右边_Luzi" },
                    { Group: "ItemAddon", Name: "BedRopes" },
                    { Group: "ItemAddon", Name: "BedStraps" },
                    { Group: "ItemAddon", Name: "BedTape" },
                    { Group: "ItemAddon", Name: "BedChains" },
                    { Group: "ItemArms", Name: "UnderBedBondageCuffs" },
                    { Group: "ItemArms", Name: "MedicalBedRestraints" },
                    { Group: "ItemArms", Name: "HempRope", Type: "BedSpreadEagle" },
                    { Group: "ItemLegs", Name: "MedicalBedRestraints" },
                    { Group: "ItemFeet", Name: "HempRope", Type: "BedSpreadEagle" },
                    { Group: "ItemFeet", Name: "MedicalBedRestraints" },
                ],
                Effect: ["Mounted", "OnBed"],
                Layer: [
                    { Name: "骨架" },
                    { Name: "床垫" },
                    { Name: "枕头" },
                ]
            },
            {
                Name: "床右边_Luzi", Random: false,
                Top: -260, Left: -110,
                Priority: 1,
                Difficulty: -20,
                SelfBondage: 0,
                Time: 5,
                RemoveTime: 5,
                RemoveAtLogin: true,
                DefaultColor: ["#523629", "#888990", "#808284",],
                OverrideHeight: { Height: 20, HeightRatioProportion: 1, Priority: 21, },
                RemoveItemOnRemove: [
                    { Group: "ItemAddon", Name: "Covers", },
                    { Group: "ItemAddon", Name: "被子左边_Luzi", },
                    { Group: "ItemAddon", Name: "被子右边_Luzi", },
                    { Group: "ItemAddon", Name: "BedRopes", },
                    { Group: "ItemAddon", Name: "BedStraps", },
                    { Group: "ItemAddon", Name: "BedTape", },
                    { Group: "ItemAddon", Name: "BedChains", },
                    { Group: "ItemArms", Name: "UnderBedBondageCuffs", },
                    { Group: "ItemArms", Name: "MedicalBedRestraints", },
                    { Group: "ItemArms", Name: "HempRope", Type: "BedSpreadEagle", },
                    { Group: "ItemLegs", Name: "MedicalBedRestraints", },
                    { Group: "ItemFeet", Name: "HempRope", Type: "BedSpreadEagle", },
                    { Group: "ItemFeet", Name: "MedicalBedRestraints", },
                ],
                Effect: ["Mounted", "OnBed",],
                Layer: [
                    { Name: "骨架", },
                    { Name: "床垫", },
                    { Name: "枕头", },
                ]
            },
            {
                Name: "窝瓜_Luzi", Random: false,
                Top: 140, Left: 0,
                Fetish: ["Pet"],
                Difficulty: -25,
                AllowLock: true,
                SelfBondage: 0,
                Time: 5,
                RemoveTime: 5,
                Effect: [E.Tethered],
                RemoveAtLogin: true,
                SetPose: ["Kneel"],
                AllowActivePose: [...PoseAllKneeling, "AllFours", "Hogtied",],
                FixedPosition: true,
                Extended: true,
                PoseMapping: {
                    AllFours: "AllFours",
                    Hogtied: "AllFours",
                },
                Layer: [
                    { Name: "后", Priority: 1, },
                    { Name: "前", Priority: 58, },
                    { Name: "灯", Priority: 57, },
                    { Name: "盖", Priority: 2, },
                    {
                        Name: "盖1",
                        Priority: 58,
                        AllowTypes: { typed: 1, },
                    },
                ],
            },
            {
                Name: "树_Luzi", Random: false,
                Top: -110, Left: -150,
            },
            {
                Name: "独角兽玩偶_Luzi", Random: false,
                Priority: 58,
                Value: 40,
                Difficulty: -2,
                Time: 15,
                RemoveTime: 10,
                Top: -45,
                AllowLock: true,
                Extended: true,
                MinOpacity: 0,
                Opacity: 0,
                SetPose: ["AllFours"],
                Effect: [E.BlockWardrobe, E.Freeze],
                Layer: [
                    {
                        Name: "身体", AllowTypes: { typed: [0, 1] },
                        Alpha: [
                            {
                                Group: ["HairFront", "HairBack", "Bracelet", "Cloth", "ClothAccessory", "ClothLower", "Corset", "Fluids", "Garters", "Gloves", "HairAccessory", "Hat", "ItemArms", "ItemBrest", "ItemButt", "ItemHandheld", "ItemHead", "ItemHood", "ItemLegs", "ItemMisc", "ItemNeck", "ItemNose", "ItemPelvis", "ItemTorso", "LeftAnKlet", "LeftHand", "Mask", "Mouth", "Nipples", "Panties", "RightAnklet", "RightHand", "Shoes", "Socks", "SocksLeft", "SocksRight", "Suit", "SuitLower", "TailStraps", "Wings", "Bra", "HairAccessory1", "HairAccessory2", "HairAccessory3",],
                                Masks: [
                                    [0, 388, 500, 200],//下
                                ],
                            },
                        ],
                    },

                    { Name: "背景", Priority: 6, MinOpacity: 1, AllowTypes: { typed: [0, 1] }, },
                    { Name: "脚", AllowTypes: { typed: [0, 1] }, },
                    { Name: "头背景", Priority: 6, MinOpacity: 1, AllowTypes: { typed: 0 }, },
                    { Name: "头发后", AllowTypes: { typed: 0 }, },
                    { Name: "耳朵外", AllowTypes: { typed: 0 }, },
                    { Name: "耳朵内", AllowTypes: { typed: 0 }, },
                    {
                        Name: "头", AllowTypes: { typed: 0 },
                        Alpha: [
                            {
                                Group: ["HairFront", "HairBack", "Bracelet", "Cloth", "ClothAccessory", "ClothLower", "Corset", "Fluids", "Garters", "Gloves", "HairAccessory", "Hat", "ItemArms", "ItemBrest", "ItemButt", "ItemHandheld", "ItemHead", "ItemHood", "ItemLegs", "ItemMisc", "ItemNeck", "ItemNose", "ItemPelvis", "ItemTorso", "LeftAnKlet", "LeftHand", "Mask", "Mouth", "Nipples", "Panties", "RightAnklet", "RightHand", "Shoes", "Socks", "SocksLeft", "SocksRight", "Suit", "SuitLower", "TailStraps", "Wings", "Bra", "HairAccessory1", "HairAccessory2", "HairAccessory3",],
                                Masks: [
                                    [0, -200, 500, 270],//上
                                    [0, 0, 154, 400],//左
                                    [350, 0, 200, 400],//右
                                    [0, 160, 172, 75],//左中
                                    [336, 170, 100, 65],//右中
                                ],
                            },
                        ],
                    },
                    { Name: "头发前", AllowTypes: { typed: 0 }, },
                    { Name: "眼白", AllowTypes: { typed: 0 }, },
                    { Name: "瞳孔", AllowTypes: { typed: 0 }, },
                    { Name: "眉毛", AllowTypes: { typed: 0 }, },
                    { Name: "睫毛", AllowTypes: { typed: 0 }, },
                    { Name: "角", AllowTypes: { typed: 0 }, },
                    { Name: "高光", AllowTypes: { typed: 0 }, },
                ],
            },
            {
                Name: "巨型玩偶_Luzi", Random: false,
                Priority: 58,
                Value: 40,
                Difficulty: -2,
                Time: 15,
                RemoveTime: 10,
                Top: 0,
                AllowLock: true,
                Extended: true,
                MinOpacity: 0,
                Opacity: 0,
                SetPose: ["Kneel"],
                Effect: [E.BlockWardrobe, E.Freeze],
                Layer: [
                    {
                        Name: "背景",
                        Priority: 1,
                        MinOpacity: 1,
                    },
                    {
                        Name: "玩偶",
                        Alpha: [
                            {
                                Group: ["HairFront", "HairBack", "Bracelet", "Cloth", "ClothAccessory", "ClothLower", "Corset", "Fluids", "Garters", "Gloves", "HairAccessory", "Hat", "ItemArms", "ItemBrest", "ItemButt", "ItemHandheld", "ItemHead", "ItemHood", "ItemLegs", "ItemMisc", "ItemNeck", "ItemNose", "ItemPelvis", "ItemTorso", "LeftAnKlet", "LeftHand", "Mask", "Mouth", "Nipples", "Panties", "RightAnklet", "RightHand", "Shoes", "Socks", "SocksLeft", "SocksRight", "Suit", "SuitLower", "TailStraps", "Wings", "Bra", "HairAccessory1", "HairAccessory2", "HairAccessory3",],
                                Masks: [
                                    [0, 0, 155, 750],
                                    [350, 0, 150, 750],
                                    [155, 0, 255, 65],
                                    [155, 700, 255, 30],
                                    AssetLowerOverflowAlpha,
                                ],
                            },
                        ],
                    },
                    { Name: "围巾" },
                ],
            },
            {
                Name: "拳击袋_Luzi", Random: false,
                Top: 0, Left: 0,
                AllowLock: true,
                Extended: true,
                MinOpacity: 0,
                Opacity: 0,
                Hide: ["", "", ""],
                SetPose: ["BackElbowTouch", "Kneel"],
                Layer: [
                    { Name: "链条前", Priority: 67, Top: -800, },
                    { Name: "带子", Priority: 66, },
                    { Name: "链条环", Priority: 66, },
                    {
                        Name: "沙袋前", Priority: 64, AllowTypes: { typed: 0 },
                        Alpha: [
                            {
                                Group: ["HairFront", "HairBack", "Bracelet", "Cloth", "ClothAccessory", "ClothLower", "Corset", "Fluids", "Garters", "Gloves", "HairAccessory", "Hat", "ItemArms", "ItemBrest", "ItemButt", "ItemHandheld", "ItemHead", "ItemHood", "ItemLegs", "ItemMisc", "ItemNeck", "ItemNose", "ItemPelvis", "ItemTorso", "LeftAnKlet", "LeftHand", "Mask", "Mouth", "Nipples", "Panties", "RightAnklet", "RightHand", "Shoes", "Socks", "SocksLeft", "SocksRight", "Suit", "SuitLower", "TailStraps", "Wings", "Bra", "HairAccessory1", "HairAccessory2", "HairAccessory3",],
                                Masks: [
                                    [0, 0, 500, 35],//上
                                    [0, 717, 500, 70], //下
                                    [0, 0, 130, 1000], //左
                                    [370, 200, 135, 1000],//右
                                ],
                            },
                        ],
                    },
                    { Name: "沙袋后", Priority: 1, MinOpacity: 1, },
                    { Name: "链条后", Priority: 0, Top: -800, MinOpacity: 1, },
                    {
                        Name: "沙袋前框", Priority: 65, AllowTypes: { typed: 1 },
                        Alpha: [
                            {
                                Group: ["HairFront", "HairBack", "Bracelet", "Cloth", "ClothAccessory", "ClothLower", "Corset", "Fluids", "Garters", "Gloves", "HairAccessory", "Hat", "ItemArms", "ItemBrest", "ItemButt", "ItemHandheld", "ItemHead", "ItemHood", "ItemLegs", "ItemMisc", "ItemNeck", "ItemNose", "ItemPelvis", "ItemTorso", "LeftAnKlet", "LeftHand", "Mask", "Mouth", "Nipples", "Panties", "RightAnklet", "RightHand", "Shoes", "Socks", "SocksLeft", "SocksRight", "Suit", "SuitLower", "TailStraps", "Wings", "Bra", "HairAccessory1", "HairAccessory2", "HairAccessory3",],
                                Masks: [
                                    [0, 0, 500, 35],
                                    [0, 717, 500, 50],
                                    [0, 0, 130, 1000],
                                    [370, 200, 135, 1000],
                                ],
                            },
                        ],
                    },
                    { Name: "照片框", Priority: 65, AllowTypes: { typed: 1 }, },
                    { Name: "胶带", Priority: 65, AllowTypes: { typed: 1 }, },
                ],
                OverrideHeight: {
                    Height: -100,
                    Priority: 41,
                    HeightRatioProportion: 0,
                },
            },
            {
                Name: "垃圾桶_Luzi", Random: false,
                Top: 0, Left: 0,
                AllowLock: true,
                Extended: true,
                MinOpacity: 0,
                Opacity: 0,
                Priority: 58,
                SetPose: ["Kneel"],
                Layer: [
                    { Name: "轮子", Priority: 1, MinOpacity: 1 },
                    { Name: "背景", Priority: 2, MinOpacity: 1 },
                    { Name: "外框", MinOpacity: 1 },
                    {
                        Name: "垃圾桶",
                        Alpha: [
                            {
                                Group: ["HairFront", "HairBack", "Bracelet", "Cloth", "ClothAccessory", "ClothLower", "Corset", "Fluids", "Garters", "Gloves", "HairAccessory", "Hat", "ItemArms", "ItemBrest", "ItemButt", "ItemHandheld", "ItemHead", "ItemHood", "ItemLegs", "ItemMisc", "ItemNeck", "ItemNose", "ItemPelvis", "ItemTorso", "LeftAnKlet", "LeftHand", "Mask", "Mouth", "Nipples", "Panties", "RightAnklet", "RightHand", "Shoes", "Socks", "SocksLeft", "SocksRight", "Suit", "SuitLower", "TailStraps", "Wings", "Bra", "HairAccessory1", "HairAccessory2", "HairAccessory3",],
                                Masks: [
                                    [0, 695, 500, 70], //下
                                    [0, 175, 160, 1000], //左
                                    [340, 175, 135, 1000],//右
                                ],
                            },
                        ],
                    },
                    {
                        Name: "盖子", AllowTypes: { typed: [1, 2] },
                        Alpha: [
                            {
                                Group: ["HairFront", "HairBack", "Bracelet", "Cloth", "ClothAccessory", "ClothLower", "Corset", "Fluids", "Garters", "Gloves", "HairAccessory", "Hat", "ItemArms", "ItemBrest", "ItemButt", "ItemHandheld", "ItemHead", "ItemHood", "ItemLegs", "ItemMisc", "ItemNeck", "ItemNose", "ItemPelvis", "ItemTorso", "LeftAnKlet", "LeftHand", "Mask", "Mouth", "Nipples", "Panties", "RightAnklet", "RightHand", "Shoes", "Socks", "SocksLeft", "SocksRight", "Suit", "SuitLower", "TailStraps", "Wings", "Bra", "HairAccessory1", "HairAccessory2", "HairAccessory3",],
                                Masks: [
                                    [0, 0, 500, 50],//上
                                    [0, 0, 160, 1000], //左
                                    [340, 0, 135, 1000],//右
                                ],
                            },
                        ],
                    },
                    { Name: "挡板", AllowTypes: { typed: 1 }, },
                    { Name: "图案", AllowTypes: { typed: 1 }, },
                ],
            },
        ],
        ItemAddon: [
            {
                Name: "被子左边_Luzi", Random: false,
                Top: -260, Left: 0,
                Difficulty: 1,
                SelfBondage: 0,
                DefaultColor: ["#99A2AB", "Default"],
                Layer: [
                    { Name: "外" },
                    { Name: "内" }
                ],
            },
            {
                Name: "被子右边_Luzi", Random: false,
                Top: -260, Left: -210,
                Difficulty: 1,
                SelfBondage: 0,
                DefaultColor: ["#99A2AB", "Default"],
                Layer: [
                    { Name: "外" },
                    { Name: "内" }
                ],
            },
            {
                Name: "隐形药水_Luzi", Random: false, Gender: "F",
                Top: 0, Left: 0,
                Difficulty: 25,
                Hide: ["ItemHandheld", "Hands", "BodyLower", "BodyUpper", "BodyFull"],
                Layer: [
                    {
                        Name: "下半身", Priority: 9,
                        Top: {
                            [PoseType.DEFAULT]: 460,
                            KneelingSpread: 460,
                            Kneel: 460,
                            LegsClosed: 460,
                            Spread: 460,
                        },
                        Left: {
                            [PoseType.DEFAULT]: 0,
                            KneelingSpread: 0,
                        },
                        ParentGroup: "BodyLower",
                        InheritColor: "BodyLower",
                        HideColoring: true,
                        ColorSuffix: { HEX_COLOR: "White" },
                        PoseMapping:
                        {
                            Kneel: "Kneel",
                            KneelingSpread: "KneelingSpread",
                            LegsClosed: "LegsClosed",
                            Spread: "Spread",
                            Hogtied: "Hide",
                            AllFours: "Hide",
                        },
                    },
                    {
                        Name: "上半身", Priority: 9,
                        Top: {
                            [PoseType.DEFAULT]: 0,
                            KneelingSpread: 0,
                        },
                        Left: {
                            [PoseType.DEFAULT]: 0,
                            KneelingSpread: 0,
                        },
                        ParentGroup: "BodyUpper",
                        InheritColor: "BodyUpper",
                        HideColoring: true,
                        ColorSuffix: { HEX_COLOR: "White" },
                        PoseMapping:
                        {
                            BackBoxTie: "BackBoxTie",
                            BackCuffs: "BackCuffs",
                            BackElbowTouch: "BackElbowTouch",
                            OverTheHead: "OverTheHead",
                            Yoked: "Yoked",
                            Hogtied: "Hide",
                            AllFours: "Hide",
                        },

                    },
                    {
                        Name: "全身", Priority: 9,
                        Top: {
                            Hogtied: 500,
                        },
                        Left: 0,
                        ParentGroup: "BodyUpper",
                        InheritColor: "BodyUpper",
                        HideColoring: true,
                        ColorSuffix: { HEX_COLOR: "White" },
                        PoseMapping:
                        {
                            AllFours: "AllFours",
                            Hogtied: "Hogtied",
                        },
                    },

                    {
                        Name: "透视紧身衣下半身", Priority: 13,
                        Top: {
                            [PoseType.DEFAULT]: 462,
                            KneelingSpread: 462,
                            Kneel: 462,
                            LegsClosed: 462,
                            Spread: 462,
                        },
                        Left: {
                            [PoseType.DEFAULT]: 0,
                            KneelingSpread: 0,
                        },
                        ParentGroup: "BodyLower",
                        PoseMapping:
                        {
                            Kneel: "Kneel",
                            KneelingSpread: "KneelingSpread",
                            LegsClosed: "LegsClosed",
                            Spread: "Spread",
                            Hogtied: "Hide",
                            AllFours: "Hide",
                        },
                    },
                    {
                        Name: "透视紧身衣上半身", Priority: 13,
                        Top: {
                            [PoseType.DEFAULT]: 0,
                            KneelingSpread: 0,
                        },
                        Left: {
                            [PoseType.DEFAULT]: 0,
                            KneelingSpread: 0,
                        },
                        ParentGroup: "BodyUpper",
                        PoseMapping:
                        {
                            BackBoxTie: "BackBoxTie",
                            BackCuffs: "BackCuffs",
                            BackElbowTouch: "BackElbowTouch",
                            OverTheHead: "OverTheHead",
                            Yoked: "Yoked",
                            Hogtied: "Hide",
                            AllFours: "Hide",
                        },

                    },
                    {
                        Name: "透视紧身衣全身", Priority: 13,
                        Top: {
                            Hogtied: 500,
                        },
                        Left: 0,
                        ParentGroup: "BodyUpper",
                        PoseMapping:
                        {
                            AllFours: "Hide",
                            Hogtied: "Hogtied",
                        },
                    },





                    {
                        Name: "脚链", Priority: 31,
                        Top: {
                            [PoseType.DEFAULT]: 460,
                            KneelingSpread: 460,
                            Kneel: 460,
                            LegsClosed: 460,
                            Spread: 460,
                        },
                        Left: {
                            [PoseType.DEFAULT]: 0,
                            KneelingSpread: 0,
                        },
                        ParentGroup: "BodyLower",
                        PoseMapping:
                        {
                            Kneel: "Kneel",
                            KneelingSpread: "KneelingSpread",
                            LegsClosed: "LegsClosed",
                            Spread: "Spread",
                            Hogtied: "Hide",
                            AllFours: "Hide",
                        },
                    },
                    {
                        Name: "手链", Priority: 31,
                        Top: {
                            [PoseType.DEFAULT]: 0,
                            KneelingSpread: 0,
                        },
                        Left: {
                            [PoseType.DEFAULT]: 0,
                            KneelingSpread: 0,
                        },
                        ParentGroup: "BodyUpper",
                        PoseMapping:
                        {
                            BackBoxTie: "BackBoxTie",
                            BackCuffs: "BackCuffs",
                            BackElbowTouch: "Hide",
                            OverTheHead: "OverTheHead",
                            Yoked: "Yoked",
                            Hogtied: "Hide",
                            AllFours: "Hide",
                        },

                    },




                ],
                OverrideHeight: {
                    Height: -450,
                    Priority: 21,
                    HeightRatioProportion: 0,
                },

            },
            {
                Name: "人偶_Luzi", Random: false, Gender: "F",
                Top: 0, Left: 0,
                Difficulty: 25,
                Hide: ["Hands", "BodyLower", "BodyUpper", "BodyFull"],
                Layer: [
                    {
                        Name: "下半身", Priority: 9,
                        Top: 460, Left: 0,
                        ParentGroup: "BodyLower",
                        InheritColor: "BodyLower",
                        HideColoring: true,
                        ColorSuffix: { HEX_COLOR: "White" },
                        PoseMapping:
                        {
                            Kneel: "Kneel",
                            KneelingSpread: "KneelingSpread",
                            LegsClosed: "LegsClosed",
                            Spread: "Spread",
                            Hogtied: "Hide",
                            AllFours: "Hide",
                        },
                    },
                    {
                        Name: "上半身", Priority: 9,
                        Top: 0, Left: 0,
                        ParentGroup: "BodyUpper",
                        InheritColor: "BodyUpper",
                        HideColoring: true,
                        ColorSuffix: { HEX_COLOR: "White" },
                        PoseMapping:
                        {
                            BackBoxTie: "BackBoxTie",
                            BackCuffs: "BackCuffs",
                            BackElbowTouch: "BackElbowTouch",
                            OverTheHead: "OverTheHead",
                            Yoked: "Yoked",
                            Hogtied: "Hide",
                            AllFours: "Hide",
                        },

                    },
                    {
                        Name: "全身", Priority: 9,
                        Top: 0, Left: 0,
                        ParentGroup: "BodyUpper",
                        InheritColor: "BodyUpper",
                        HideColoring: true,
                        ColorSuffix: { HEX_COLOR: "White" },
                        PoseMapping:
                        {
                            AllFours: "AllFours",
                            Hogtied: "Hogtied",
                        },
                    },
                    {
                        Name: "手", Priority: 26,
                        Top: 0, Left: 0,
                        ParentGroup: "BodyUpper",
                        InheritColor: "BodyUpper",
                        HideColoring: true,
                        ColorSuffix: { HEX_COLOR: "White" },
                        PoseMapping:
                        {
                            BackBoxTie: "Hide",
                            BackCuffs: "Hide",
                            BackElbowTouch: "Hide",
                            OverTheHead: "Hide",
                            Yoked: "Hide",
                            Hogtied: "Hide",
                            AllFours: "AllFours",
                        },
                    },
                    {
                        Name: "钥匙孔", Priority: 10,
                        Top: 0, Left: 0,
                    },
                ],
            },
        ],
        ItemVulva: [
            {
                Name: "更多有线跳蛋_Luzi", Random: false, Gender: "F",
                Top: 0, Left: 0,
                Difficulty: 25,
                Prerequisite: ["HasBreasts", "AccessVulva"],
                Priority: 14,
                PoseMapping: { AllFours: 'Hide', Hogtied: 'Hide', Kneel: 'Kneel', KneelingSpread: 'KneelingSpread', LegsClosed: 'LegsClosed' },
                DefaultColor: ["Default", "Default", "Default", "#3B3B3B", "Default", "Default", "#3B3B3B"],
                Layer: [
                    {
                        Name: "跳蛋1",
                        AllowTypes: { n: [0, 1, 2, 3, 4] },
                    },
                    {
                        Name: "跳蛋2",
                        AllowTypes: { n: [1, 2, 3, 4] },
                    },
                    {
                        Name: "跳蛋5",
                        AllowTypes: { n: [4] },
                    },
                    {
                        Name: "绑带5",
                        ParentGroup: "BodyLower",
                        AllowTypes: { n: [4] },
                    },
                    {
                        Name: "跳蛋3",
                        AllowTypes: { n: [2, 3, 4] },
                    },
                    {
                        Name: "跳蛋4",
                        AllowTypes: { n: [3, 4] },
                    },
                    {
                        Name: "绑带",
                        ParentGroup: "BodyLower",
                    },
                ],
            },
        ],
        Liquid2_Luzi: [
            {
                Name: "无_Luzi", Random: false,
            },
            {
                Name: "少_Luzi", Random: false,
                Priority: 9,
                DefaultColor: ["#D9DCFF"],
            },
            {
                Name: "中_Luzi", Random: false,
                Priority: 9,
                DefaultColor: ["#D9DCFF"],
            },
        ],
        BodyMarkings: [
            {
                Name: "淫纹_Luzi", Random: false, Gender: "F",
                Top: -110, Left: 0,
                Priority: 9,
                PoseMapping: {
                    BackBoxTie: PoseType.DEFAULT,
                    BackCuffs: PoseType.DEFAULT,
                    BackElbowTouch: PoseType.DEFAULT,
                    OverTheHead: PoseType.DEFAULT,
                    TapedHands: PoseType.DEFAULT,
                    Yoked: PoseType.DEFAULT,
                    AllFours: PoseType.HIDE,
                    Hogtied: PoseType.HIDE,
                },
                DefaultColor: ["#E975A0"],
            },
            {
                Name: "刻度尺_Luzi", Random: false, Gender: "F",
                Top: 0, Left: 0,
                Priority: 9,
                PoseMapping: {
                    BackBoxTie: PoseType.DEFAULT,
                    BackCuffs: PoseType.DEFAULT,
                    BackElbowTouch: PoseType.DEFAULT,
                    OverTheHead: PoseType.DEFAULT,
                    TapedHands: PoseType.DEFAULT,
                    Yoked: PoseType.DEFAULT,
                    AllFours: PoseType.HIDE,
                    Hogtied: PoseType.HIDE,
                },
                DefaultColor: ["#000000"],
            },
            {
                Name: "番茄酱_Luzi", Random: false,
                Top: 0, Left: 0,
                Priority: 9,
                PoseMapping: {
                    BackBoxTie: PoseType.DEFAULT,
                    BackCuffs: PoseType.DEFAULT,
                    BackElbowTouch: PoseType.DEFAULT,
                    OverTheHead: PoseType.DEFAULT,
                    TapedHands: PoseType.DEFAULT,
                    Yoked: PoseType.DEFAULT,
                    AllFours: PoseType.HIDE,
                    Hogtied: PoseType.HIDE,
                },
            },
        ],
        BodyMarkings2_Luzi: [
            {
                Name: "淫纹_Luzi", Random: false, Gender: "F",
                Top: -110, Left: 0,
                Priority: 9,
                PoseMapping: {
                    BackBoxTie: PoseType.DEFAULT,
                    BackCuffs: PoseType.DEFAULT,
                    BackElbowTouch: PoseType.DEFAULT,
                    OverTheHead: PoseType.DEFAULT,
                    TapedHands: PoseType.DEFAULT,
                    Yoked: PoseType.DEFAULT,
                    AllFours: PoseType.HIDE,
                    Hogtied: PoseType.HIDE,
                },
                DefaultColor: ["#E975A0"],
            },
            {
                Name: "刻度尺_Luzi", Random: false, Gender: "F",
                Top: 0, Left: 0,
                Priority: 9,
                PoseMapping: {
                    BackBoxTie: PoseType.DEFAULT,
                    BackCuffs: PoseType.DEFAULT,
                    BackElbowTouch: PoseType.DEFAULT,
                    OverTheHead: PoseType.DEFAULT,
                    TapedHands: PoseType.DEFAULT,
                    Yoked: PoseType.DEFAULT,
                    AllFours: PoseType.HIDE,
                    Hogtied: PoseType.HIDE,
                },
                DefaultColor: ["#000000"],
            },
            {
                Name: "番茄酱_Luzi", Random: false,
                Top: 0, Left: 0,
                Priority: 9,
                PoseMapping: {
                    BackBoxTie: PoseType.DEFAULT,
                    BackCuffs: PoseType.DEFAULT,
                    BackElbowTouch: PoseType.DEFAULT,
                    OverTheHead: PoseType.DEFAULT,
                    TapedHands: PoseType.DEFAULT,
                    Yoked: PoseType.DEFAULT,
                    AllFours: PoseType.HIDE,
                    Hogtied: PoseType.HIDE,
                },
            },
        ],
    };

    const addAssetGroup = {
        Liquid2_Luzi: [
            {
                Group: "Liquid2_Luzi",
                ParentGroup: "BodyLower",
                PoseMapping: { ...AssetPoseMapping.BodyLower },
                Priority: 53,
                Left: 0,
                Top: 0,
                Asset: [
                    {
                        Name: "无_Luzi", Random: false,
                    },
                ],
            },
        ],
        BodyMarkings2_Luzi: [
            {
                Group: "BodyMarkings2_Luzi",
                Priority: 9,
                Clothing: true,
                Default: false,
                Random: false,
                Asset: [
                    {
                        Name: "无_Luzi", Random: false,
                    },
                ],
            },
        ],
    };
    // InventoryGet(Player, "Liquid_Luzi").Property.Expression
    // InventoryGet(Player, "Emoticon").Property.Expression
    // Asset.find(group => group.Name === "Liquid_Luzi");
    // Asset.find(group => group.Name === "Emoticon");

    AssetFemale3DCGExtended.ItemDevices.玻璃罐子_Luzi = {
        Archetype: ExtendedArchetype.MODULAR,
        Modules: [
            {
                Name: "窗户", Key: "c", DrawImages: false,
                Options: [{}, { Property: { Difficulty: 52, Effect: ["BlindHeavy", "GagLight", "Prone", "Freeze", "Enclose",], }, },],
            },
            {
                Name: "腿部拘束", Key: "t", DrawImages: false,
                Options: [{}, { Property: { Difficulty: 22, SetPose: ["LegsClosed"], Effect: ["Prone", "Freeze", "Mounted"], }, },],
            },
            {
                Name: "手臂拘束", Key: "s", DrawImages: false,
                Options: [{}, { Property: { Difficulty: 18, SetPose: ["BackElbowTouch"], Effect: ["Prone", "Freeze", "Block", "Mounted"], OverrideHeight: { Height: 0, Priority: 60 }, }, },],
            },
            {
                Name: "管道", Key: "gz", DrawImages: false,
                Options: [{}, {},],
            },
            {
                Name: "液体", Key: "yt", DrawImages: false,
                Options: [{}, {},],
            },
            {
                Name: "快感模块", Key: "k", DrawImages: false,
                Options: [{ Property: { Intensity: -1, Effect: ["Egged"] } }, { Property: { Intensity: 0, Effect: ["Egged", "Vibrating"] } }, { Property: { Intensity: 1, Effect: ["Egged", "Vibrating"] } }, { Property: { Intensity: 2, Effect: ["Egged", "Vibrating"] } }, { Property: { Intensity: 3, Effect: ["Egged", "Vibrating"] } },],
            },
            {
                Name: "电击模块", Key: "d", DrawImages: false,
                Options: [{ Property: { ShockLevel: 0 } }, { Property: { ShockLevel: 0 } }, { Property: { ShockLevel: 1 } }, { Property: { ShockLevel: 2 } },],
            },
            {
                Name: "高潮锁", Key: "g", DrawImages: false,
                Options: [{}, { Property: { Effect: ["DenialMode"] } }, { Property: { Effect: ["DenialMode", "RuinOrgasms"] } },],
            },
        ],
        ChangeWhenLocked: false,
    };
    AssetFemale3DCGExtended.ItemDevices.窝瓜_Luzi = {
        Archetype: ExtendedArchetype.TYPED,
        ChatTags: [CommonChatTags.SOURCE_CHAR, CommonChatTags.TARGET_CHAR],
        DrawImages: false,
        Options: [
            {
                Name: "没盖子",
            },
            {
                Name: "有盖子",
                Property: {
                    SetPose: ["AllFours"],
                    AllowActivePose: ["Hogtied"],
                    Hide: ["ItemArms", "ItemButt", "TailStraps", "Wings"],
                    HideItem: ["ItemMiscTeddyBear"],
                    HideItemExclude: [
                        "ItemArmsBitchSuit",
                        "ItemArmsBitchSuitExposed",
                        "ItemArmsShinyPetSuit",
                    ],
                    Block: [
                        "ItemArms",
                        "ItemBreast",
                        "ItemButt",
                        "ItemFeet",
                        "ItemBoots",
                        "ItemLegs",
                        "ItemMisc",
                        "ItemNipples",
                        "ItemNipplesPiercings",
                        "ItemPelvis",
                        "ItemTorso",
                        "ItemVulva",
                        "ItemVulvaPiercings",
                    ],
                },
                Random: false,
            },
        ],
    };
    AssetFemale3DCGExtended.ItemTorso2.拘束套装_Luzi = {
        Archetype: ExtendedArchetype.TYPED,
        ChatTags: [CommonChatTags.SOURCE_CHAR, CommonChatTags.TARGET_CHAR],
        DrawImages: false,
        Options: [
            {
                Name: "无",
            },
            {
                Name: "乳胶衣",
            },
            {
                Name: "透视紧身衣",
            },
            {
                Name: "紧身衣",
            },
        ],
    };
    AssetFemale3DCGExtended.ItemTorso.拘束套装_Luzi = {
        Archetype: ExtendedArchetype.TYPED,
        ChatTags: [CommonChatTags.SOURCE_CHAR, CommonChatTags.TARGET_CHAR],
        DrawImages: false,
        Options: [
            {
                Name: "无",
            },
            {
                Name: "乳胶衣",
            },
            {
                Name: "透视紧身衣",
            },
            {
                Name: "紧身衣",
            },
        ],
    };
    AssetFemale3DCGExtended.SuitLower.鱼鱼尾_Luzi = {
        Archetype: ExtendedArchetype.MODULAR,
        Modules: [
            {
                Name: "鱼鳍", Key: "q",
                Options: [{}, {}],
            },
            {
                Name: "鱼尾", Key: "w",
                Options: [{}, {}],
            },
        ],
    };
    AssetFemale3DCGExtended.ItemVulva.更多有线跳蛋_Luzi = {
        Archetype: ExtendedArchetype.MODULAR,
        Modules: [
            {
                Name: "跳蛋开关",
                DrawImages: false,
                Key: "o",
                Options: [{ Property: { Intensity: -1, Effect: ["Egged"] } }, { Property: { Intensity: 0, Effect: ["Egged", "Vibrating"] } }, { Property: { Intensity: 1, Effect: ["Egged", "Vibrating"] } }, { Property: { Intensity: 3, Effect: ["Egged", "Vibrating"] } }, { Property: { Intensity: 5, Effect: ["Egged", "Vibrating"] } },],
            },
            {
                Name: "跳蛋数量",
                DrawImages: false,
                Key: "n",
                Options: [{}, {}, {}, {}, {},],
            },
        ],
    };
    AssetFemale3DCGExtended.ItemDevices.巨型玩偶_Luzi = {
        Archetype: ExtendedArchetype.TYPED,
        Options: [
            { Name: "熊熊", DrawImages: false, },
        ],
        BaselineProperty: { Opacity: 0.7 },
        ScriptHooks: {
            Init: PropertyOpacityInit,
            Load: PropertyOpacityLoad,
            Draw: PropertyOpacityDraw,
            Exit: PropertyOpacityExit,
        },
    };
    AssetFemale3DCGExtended.ItemDevices.独角兽玩偶_Luzi = {
        Archetype: ExtendedArchetype.TYPED,
        Options: [
            { Name: "戴上头套", DrawImages: false, },
            { Name: "摘掉头套", DrawImages: false, },
        ],
        BaselineProperty: { Opacity: 0.7 },
        ScriptHooks: {
            Init: PropertyOpacityInit,
            Load: PropertyOpacityLoad,
            Draw: PropertyOpacityDraw,
            Exit: PropertyOpacityExit,
        },
    };
    AssetFemale3DCGExtended.ItemDevices.垃圾桶_Luzi = {
        Archetype: ExtendedArchetype.TYPED,
        Options: [
            { Name: "打开盖子", DrawImages: false, },
            { Name: "合上盖子", DrawImages: false, },
            { Name: "打开挡板", DrawImages: false, },
        ],
        BaselineProperty: { Opacity: 1 },
        ScriptHooks: {
            Init: PropertyOpacityInit,
            Load: PropertyOpacityLoad,
            Draw: PropertyOpacityDraw,
            Exit: PropertyOpacityExit,
        },
    };
    AssetFemale3DCGExtended.ItemDevices.拳击袋_Luzi = {
        Archetype: ExtendedArchetype.TYPED,
        Options: [
            { Name: "无照片", DrawImages: false, },
            { Name: "有照片", DrawImages: false, },
        ],
        BaselineProperty: { Opacity: 1 },
        ScriptHooks: {
            Init: PropertyOpacityInit,
            Load: PropertyOpacityLoad,
            Draw: PropertyOpacityDraw,
            Exit: PropertyOpacityExit,
        },
    };
    AssetFemale3DCGExtended.ItemTorso.触手服_Luzi = {
        Archetype: ExtendedArchetype.MODULAR,
        ChangeWhenLocked: false,
        Modules: [
            {
                Name: "触手状态",
                DrawImages: false,
                Key: "d",
                Options: [
                    { DrawImages: false, Property: { Block: ['ItemVulva', 'ItemVulvaPiercings', 'ItemButt'], } },
                    { DrawImages: false, },
                    {
                        DrawImages: false,
                        HasSubscreen: true,
                        Prerequisite: ["AccessVulva", "VulvaEmpty"],
                        Property: {
                            Effect: [E.VulvaShaft],
                        },
                        ArchetypeConfig: {
                            Archetype: ExtendedArchetype.VIBRATING,
                            ScriptHooks: {
                                ScriptDraw: AssetsItemTorso触手服_LuziScriptDrawHook,
                            },
                        },
                    },
                ],
            },
            {
                Name: "上衣开关",
                DrawImages: false,
                Key: "s",
                Options: [
                    { DrawImages: false, },
                    { DrawImages: false, },
                ],
            },
            {
                Name: "手套开关",
                DrawImages: false,
                Key: "h",
                Options: [
                    { DrawImages: false, },
                    { DrawImages: false, },
                    {
                        Property: { Difficulty: 13, SetPose: ["BackElbowTouch"], Effect: ["Block"], },
                        DrawImages: false,
                    },
                ],
            },
            {
                Name: "嘴套开关",
                DrawImages: false,
                Key: "m",
                Options: [
                    { DrawImages: false, },
                    { DrawImages: false, },
                ],
            },
            {
                Name: "脚套开关",
                DrawImages: false,
                Key: "f",
                Options: [
                    { DrawImages: false, },
                    { DrawImages: false, },
                ],
            },
        ],
    };
    AssetFemale3DCGExtended.ItemTorso2.触手服_Luzi = {
        Archetype: ExtendedArchetype.MODULAR,
        ChangeWhenLocked: false,
        Modules: [
            {
                Name: "触手状态",
                DrawImages: false,
                Key: "d",
                Options: [
                    { DrawImages: false, Property: { Block: ['ItemVulva', 'ItemVulvaPiercings', 'ItemButt'], } },
                    { DrawImages: false, },
                    {
                        DrawImages: false,
                        HasSubscreen: true,
                        Prerequisite: ["AccessVulva", "VulvaEmpty"],
                        Property: {
                            Effect: [E.VulvaShaft],
                        },
                        ArchetypeConfig: {
                            Archetype: ExtendedArchetype.VIBRATING,
                            ScriptHooks: {
                                ScriptDraw: AssetsItemTorso触手服_LuziScriptDrawHook,
                            },
                        },
                    },
                ],
            },
            {
                Name: "上衣开关",
                DrawImages: false,
                Key: "s",
                Options: [
                    { DrawImages: false, },
                    { DrawImages: false, },
                ],
            },
            {
                Name: "手套开关",
                DrawImages: false,
                Key: "h",
                Options: [
                    { DrawImages: false, },
                    { DrawImages: false, },
                    {
                        Property: { Difficulty: 13, SetPose: ["BackElbowTouch"], Effect: ["Block"], },
                        DrawImages: false,
                    },
                ],
            },
            {
                Name: "嘴套开关",
                DrawImages: false,
                Key: "m",
                Options: [
                    { DrawImages: false, },
                    { DrawImages: false, },
                ],
            },
            {
                Name: "脚套开关",
                DrawImages: false,
                Key: "f",
                Options: [
                    { DrawImages: false, },
                    { DrawImages: false, },
                ],
            },
        ],
    };

    function mergeAddAssetIntoFemale3DCGAssets() { // 塞进 AssetFemale3DCG
        for (const groupName in addAsset) {
            const group = AssetFemale3DCG.find(group => group.Group === groupName);
            if (group) {
                group.Asset.push(...addAsset[groupName]);
            }
        }
    }

    function AssetAdd_Luzi(assetgroupName, assetName) { // 加载道具
        let assetGroup = AssetFemale3DCG.find(asset => asset.Group === assetgroupName)
        let asset = assetGroup.Asset.find(asset => asset.Name === assetName)
        let G = AssetGroupMap.get(assetgroupName)
        AssetAdd(G, asset, AssetFemale3DCGExtended);
    }

    function addExtraExpressionsToAssets() {
        var Emoticon内容 = ["车车_Luzi", "衣架_Luzi", "电话_Luzi", "灯泡_Luzi", "警告_Luzi", "心_Luzi", "画画_Luzi", "符号_Luzi", "视频_Luzi",];
        var GroupEmoticon = AssetFemale3DCG.filter(A => A.Group === "Emoticon");
        GroupEmoticon[0].AllowExpression = [...GroupEmoticon[0].AllowExpression, ...Emoticon内容];

        AssetGroup.forEach(A => {
            if (A.Name === "Emoticon") {
                var Emoticon内容 = ["车车_Luzi", "衣架_Luzi", "电话_Luzi", "灯泡_Luzi", "警告_Luzi", "心_Luzi", "画画_Luzi", "符号_Luzi", "视频_Luzi",];
                A.AllowExpression = [...A.AllowExpression, ...Emoticon内容];
                // console.log(A.AllowExpression)
            }
        });
    }

    let isAssetAdded = false;
    mod.hookFunction('LoginResponse', 0, (args, next) => {
        if (!isAssetAdded) {
            AssetFemale3DCG.push(addAssetGroup.Liquid2_Luzi[0])
            AssetFemale3DCG.push(addAssetGroup.BodyMarkings2_Luzi[0])
            AssetGroupAdd("Female3DCG", addAssetGroup.Liquid2_Luzi[0])
            AssetGroupAdd("Female3DCG", addAssetGroup.BodyMarkings2_Luzi[0])

            addExtraExpressionsToAssets();
            mergeAddAssetIntoFemale3DCGAssets();

            for (const type in addAsset) {
                addAsset[type].forEach(item => {
                    AssetAdd_Luzi(String(type), String(item.Name));
                });
            }

            if (Asset) {        // 用于删除自定义服装的_Luzi后缀
                const assetDescription = Asset.filter(item => item.Name && item.Name.includes('_Luzi'));
                assetDescription.forEach(item => {
                    if (item.Name) {
                        item.Description = item.Name.replace('_Luzi', '');
                    }
                });
            }

            if (AssetGroup) {        // 用于修改服装组名
                const descriptionMap = new Map([
                    ['MISSING ASSETGROUP DESCRIPTION: Liquid2_Luzi', '🍔液体2_Luzi'],
                    ['MISSING ASSETGROUP DESCRIPTION: BodyMarkings2_Luzi', '🍔身体涂画2'],
                ]);
                const descriptionMap2 = new Map([
                    ['MISSING ASSETGROUP DESCRIPTION: Liquid2_Luzi', '🍔Liquid2_Luzi'],
                    ['MISSING ASSETGROUP DESCRIPTION: BodyMarkings2_Luzi', '🍔BodyMarkings2'],
                ]);

                let language = localStorage.getItem("BondageClubLanguage");
                if ((language === "CN" || language === "TW")) {
                    AssetGroup.forEach(item => {
                        if (item.Name) {
                            const description = descriptionMap.get(item.Name);
                            if (description) {
                                item.Description = description;
                            }
                        }
                    });
                    AssetGroup.forEach(item => {
                        if (item.Description) {
                            const description = descriptionMap.get(item.Description);
                            if (description) {
                                item.Description = description;
                            }
                        }
                    });
                } else {
                    AssetGroup.forEach(item => {
                        if (item.Name) {
                            const description = descriptionMap2.get(item.Name);
                            if (description) {
                                item.Description = description;
                            }
                        }
                        if (item.Description) {
                            const description = descriptionMap2.get(item.Description);
                            if (description) {
                                item.Description = description;
                            }
                        }
                    });

                    // 英文翻译 ================
                    const descriptionMap = {
                        "绷带头部": "Bandage Head",
                        "毛毯头部": "Blanket Head",
                        "蝴蝶结背饰": "Bow Back Accessory",
                        "单边眼镜左": "Monocle Left",
                        "单边眼镜右": "Monocle Right",
                        "眼镜卡": "Glasses Card",
                        "女仆装": "Maid Costume",
                        "奶牛": "Cow",
                        "圣诞": "Christmas",
                        "踩脚袜": "Footstep Socks",
                        "条纹袜": "Striped Socks",
                        "条纹袜2": "Striped Socks 2",
                        "乳胶衣上": "Latex Top",
                        "乳胶衣下": "Latex Bottom",
                        "鱼鱼尾": "Fish Tail",
                        "淫纹": "Erotic Pattern",
                        "穿戴式狗尾镜像": "Wearable Dog Tail",
                        "白色穿戴式狼尾镜像": "White Wearable Wolf Tail",
                        "穿戴式浅色猫尾镜像": "Light-colored Wearable Cat Tail",
                        "穿戴式软小狗尾镜像": "Soft Wearable Puppy Tail",
                        "大型穿戴式狼尾镜像": "Large Wearable Wolf Tail",
                        "小型穿戴式狼尾镜像": "Small Wearable Wolf Tail",
                        "小型穿戴式软猫尾镜像": "Small Soft Wearable Cat Tail",
                        "穿戴式猫尾镜像": "Wearable Cat Tail",
                        "拳击手套": "Boxing Gloves",
                        "电蚊拍": "Electric Fly Swatter",
                        "阿巴阿巴": "Aba Aba",
                        "乳胶宠物拘束服": "Latex Pet Restraint Suit",
                        "鞍": "Saddle",
                        "缰绳": "Reins",
                        "拘束套装": "Restraint Set",
                        "胶带全身": "Tape Full Body",
                        "睡袋改": "Modified Sleeping Bag",
                        "全包毛毯改": "Fully Wrapped Blanket",
                        "绷带全身": "Bandage Full Body",
                        "触手服": "Tentacle Suit",
                        "猪猪": "Piggy",
                        "玻璃罐子": "Glass Jar",
                        "床左边": "Left Side of Bed",
                        "床右边": "Right Side of Bed",
                        "窝瓜": "Pumpkin",
                        "树": "Tree",
                        "独角兽玩偶": "Unicorn Stuffed Toy",
                        "巨型玩偶": "Giant Stuffed Toy",
                        "拳击袋": "Boxing Bag",
                        "垃圾桶": "Trash Can",
                        "被子左边": "Left Side of Quilt",
                        "被子右边": "Right Side of Quilt",
                        "更多有线跳蛋": "More Wired Vibrators",
                        "无": "None",
                        "少": "Few",
                        "中": "Medium",
                        "刻度尺": "Ruler",
                        "番茄酱": "Ketchup",
                        "隐形药水": "potion of invisibility",
                    };

                    Asset.forEach(item => {
                        if (item.Name.includes('_Luzi')) {
                            const englishDescription = descriptionMap[item.Description];
                            if (englishDescription) {
                                item.Description = englishDescription; // 直接修改数组中的对象属性
                            } else {
                                console.log(`No English translation for: ${item.Description}`);
                            }
                        }
                    });
                    // 英文翻译 ================
                }
            }


            let addAssetStringSCVCN = {
                ItemTorso触手服_LuziSelectBase: '选择配置',
                ItemTorso触手服_LuziSelect触手状态: '选择触手状态',
                ItemTorso触手服_LuziSelect上衣开关: '选择上衣状态',
                ItemTorso触手服_LuziSelect手套开关: '选择手套状态',
                ItemTorso触手服_LuziSelect嘴套开关: '选择嘴套状态',
                ItemTorso触手服_LuziSelect脚套开关: '选择脚套状态',
                ItemTorso触手服_LuziModule手套开关: '选择手套状态',
                ItemTorso触手服_LuziModule嘴套开关: '选择嘴套状态',
                ItemTorso触手服_LuziModule脚套开关: '选择脚套状态',
                ItemTorso触手服_LuziModule触手状态: '选择触手状态',
                ItemTorso触手服_LuziModule上衣开关: '选择上衣状态',
                ItemTorso触手服_LuziOptiond0: '封闭阴部',
                ItemTorso触手服_LuziOptiond1: '暴露阴部',
                ItemTorso触手服_LuziOptiond2: '触手插入',
                ItemTorso触手服_LuziOptions0: '上衣隐藏',
                ItemTorso触手服_LuziOptions1: '上衣显示',
                ItemTorso触手服_LuziOptionm0: '嘴套隐藏',
                ItemTorso触手服_LuziOptionm1: '嘴套显示',
                ItemTorso触手服_LuziOptionh0: '手套隐藏',
                ItemTorso触手服_LuziOptionh1: '手套显示',
                ItemTorso触手服_LuziOptionh2: '束缚手臂',
                ItemTorso触手服_LuziOptionf0: '脚套隐藏',
                ItemTorso触手服_LuziOptionf1: '脚套显示',
                ItemTorso2触手服_LuziSelectBase: '选择配置',
                ItemTorso2触手服_LuziSelect触手状态: '选择触手状态',
                ItemTorso2触手服_LuziSelect上衣开关: '选择上衣状态',
                ItemTorso2触手服_LuziSelect手套开关: '选择手套状态',
                ItemTorso2触手服_LuziSelect嘴套开关: '选择嘴套状态',
                ItemTorso2触手服_LuziSelect脚套开关: '选择脚套状态',
                ItemTorso2触手服_LuziModule手套开关: '选择手套状态',
                ItemTorso2触手服_LuziModule嘴套开关: '选择嘴套状态',
                ItemTorso2触手服_LuziModule脚套开关: '选择脚套状态',
                ItemTorso2触手服_LuziModule触手状态: '选择触手状态',
                ItemTorso2触手服_LuziModule上衣开关: '选择上衣状态',
                ItemTorso2触手服_LuziOptiond0: '封闭阴部',
                ItemTorso2触手服_LuziOptiond1: '暴露阴部',
                ItemTorso2触手服_LuziOptiond2: '触手插入',
                ItemTorso2触手服_LuziOptions0: '上衣隐藏',
                ItemTorso2触手服_LuziOptions1: '上衣显示',
                ItemTorso2触手服_LuziOptionm0: '嘴套隐藏',
                ItemTorso2触手服_LuziOptionm1: '嘴套显示',
                ItemTorso2触手服_LuziOptionh0: '手套隐藏',
                ItemTorso2触手服_LuziOptionh1: '手套显示',
                ItemTorso2触手服_LuziOptionh2: '束缚手臂',
                ItemTorso2触手服_LuziOptionf0: '脚套隐藏',
                ItemTorso2触手服_LuziOptionf1: '脚套显示',
                ItemVulva更多有线跳蛋_LuziSelectBase: '选择配置',
                ItemVulva更多有线跳蛋_LuziSelect跳蛋开关: '跳蛋开关',
                ItemVulva更多有线跳蛋_LuziSelect跳蛋数量: '跳蛋数量',
                ItemVulva更多有线跳蛋_LuziModule跳蛋开关: '跳蛋开关',
                ItemVulva更多有线跳蛋_LuziModule跳蛋数量: '跳蛋数量',
                ItemVulva更多有线跳蛋_LuziOptionn0: '1个',
                ItemVulva更多有线跳蛋_LuziOptionn1: '2个',
                ItemVulva更多有线跳蛋_LuziOptionn2: '3个',
                ItemVulva更多有线跳蛋_LuziOptionn3: '4个',
                ItemVulva更多有线跳蛋_LuziOptionn4: '5个',
                ItemVulva更多有线跳蛋_LuziOptiono0: '关闭',
                ItemVulva更多有线跳蛋_LuziOptiono1: '低',
                ItemVulva更多有线跳蛋_LuziOptiono2: '中',
                ItemVulva更多有线跳蛋_LuziOptiono3: '高',
                ItemVulva更多有线跳蛋_LuziOptiono4: '最高',
                SuitLower鱼鱼尾_LuziSelectBase: '选择配置',
                SuitLower鱼鱼尾_LuziSelect鱼鳍: '设置鱼鳍',
                SuitLower鱼鱼尾_LuziSelect鱼尾: '设置鱼尾',
                SuitLower鱼鱼尾_LuziModule鱼鳍: '鱼鳍',
                SuitLower鱼鱼尾_LuziOptionq0: '无',
                SuitLower鱼鱼尾_LuziOptionq1: '有',
                SuitLower鱼鱼尾_LuziModule鱼尾: '鱼尾',
                SuitLower鱼鱼尾_LuziOptionw0: '透明',
                SuitLower鱼鱼尾_LuziOptionw1: '不透明',
                ItemTorso2拘束套装_LuziSelect: '选择配置',
                ItemTorso2拘束套装_LuziSet无: '',
                ItemTorso2拘束套装_LuziSet乳胶衣: '',
                ItemTorso2拘束套装_LuziSet透视紧身衣: '',
                ItemTorso2拘束套装_LuziSet紧身衣: '',
                ItemDevices窝瓜_LuziSelect: '选择窝配置',
                ItemDevices玻璃罐子_LuziSelectBase: '选择罐子配置',
                ItemDevices玻璃罐子_LuziSelect窗户: '设置窗户',
                ItemDevices玻璃罐子_LuziModule窗户: '窗户',
                ItemDevices玻璃罐子_LuziOptionc0: '无',
                ItemDevices玻璃罐子_LuziOptionc1: '密封',
                ItemDevices玻璃罐子_LuziSelect腿部拘束: '设置腿部拘束',
                ItemDevices玻璃罐子_LuziModule腿部拘束: '腿部拘束',
                ItemDevices玻璃罐子_LuziOptiont0: '无',
                ItemDevices玻璃罐子_LuziOptiont1: '腿拘束',
                ItemDevices玻璃罐子_LuziSelect手臂拘束: '设置手臂拘束',
                ItemDevices玻璃罐子_LuziModule手臂拘束: '手臂拘束',
                ItemDevices玻璃罐子_LuziOptions0: '无',
                ItemDevices玻璃罐子_LuziOptions1: '手臂拘束',
                ItemDevices玻璃罐子_LuziSelect管道: '设置管道',
                ItemDevices玻璃罐子_LuziModule管道: '管道',
                ItemDevices玻璃罐子_LuziOptiongz0: '无',
                ItemDevices玻璃罐子_LuziOptiongz1: '连接身体',
                ItemDevices玻璃罐子_LuziSelect液体: '设置液体',
                ItemDevices玻璃罐子_LuziModule液体: '液体',
                ItemDevices玻璃罐子_LuziOptionyt0: '无',
                ItemDevices玻璃罐子_LuziOptionyt1: '注入液体',
                ItemDevices玻璃罐子_LuziSelect快感模块: '设置快感模块',
                ItemDevices玻璃罐子_LuziModule快感模块: '快感模块',
                ItemDevices玻璃罐子_LuziOptionk0: '关闭',
                ItemDevices玻璃罐子_LuziOptionk1: '低',
                ItemDevices玻璃罐子_LuziOptionk2: '一般',
                ItemDevices玻璃罐子_LuziOptionk3: '高',
                ItemDevices玻璃罐子_LuziOptionk4: '最多',
                ItemDevices玻璃罐子_LuziSelect电击模块: '设置电击模块',
                ItemDevices玻璃罐子_LuziModule电击模块: '电击模块',
                ItemDevices玻璃罐子_LuziOptiond0: '关闭',
                ItemDevices玻璃罐子_LuziOptiond1: '低',
                ItemDevices玻璃罐子_LuziOptiond2: '一般',
                ItemDevices玻璃罐子_LuziOptiond3: '高',
                ItemDevices玻璃罐子_LuziSelect高潮锁: '设置高潮锁',
                ItemDevices玻璃罐子_LuziModule高潮锁: '高潮锁',
                ItemDevices玻璃罐子_LuziOptiong0: '允许',
                ItemDevices玻璃罐子_LuziOptiong1: '寸止',
                ItemDevices玻璃罐子_LuziOptiong2: '拒绝',
                ItemDevices垃圾桶_LuziSelect: '选择垃圾桶配置',
                ItemDevices独角兽玩偶_LuziSelect: '选择独角兽玩偶配置',
                ItemDevices巨型玩偶_LuziSelect: '选择巨型玩偶配置',
                ItemDevices拳击袋_LuziSelect: '选择拳击袋配置',

            };

            let addInterfaceCSVCN = {
                ItemTorso触手服_LuziSetd0: 'TargetCharacterName的触手服下部的小口逐渐合上,粘连在一起.',
                ItemTorso触手服_LuziSetd1: 'TargetCharacterName的触手服下部裂开一个小口,露出阴部.',
                ItemTorso触手服_LuziSetd2: 'TargetCharacterName的触手服下部裂开一个小口,露出阴部,触手服下长出一只湿滑的触手插入了阴道.',
                ItemTorso触手服_LuziSets0: 'TargetCharacterName的触手服缓慢变化,露出胸部.',
                ItemTorso触手服_LuziSets1: 'TargetCharacterName的触手服缓慢变化,生长覆盖了胸部.',
                ItemTorso触手服_LuziSeth0: 'TargetCharacterName的触手服缓慢变化,露出手臂.',
                ItemTorso触手服_LuziSeth1: 'TargetCharacterName的触手服缓慢变化,生长覆盖了手部.',
                ItemTorso触手服_LuziSeth2: 'TargetCharacterName的触手服缓慢变化,强制将手臂束缚在身后.',
                ItemTorso触手服_LuziSetf0: 'TargetCharacterName的触手服缓慢变化,露出腿部.',
                ItemTorso触手服_LuziSetf1: 'TargetCharacterName的触手服缓慢变化,生长覆盖了脚部.',
                ItemTorso触手服_LuziSetm0: 'TargetCharacterName的触手服缓慢变化,露出嘴部.',
                ItemTorso触手服_LuziSetm1: 'TargetCharacterName的触手服缓慢变化,生长覆盖嘴部.',
                ItemTorso2触手服_LuziSetd0: 'TargetCharacterName的触手服下部的小口逐渐合上,粘连在一起.',
                ItemTorso2触手服_LuziSetd1: 'TargetCharacterName的触手服下部裂开一个小口,露出阴部.',
                ItemTorso2触手服_LuziSetd2: 'TargetCharacterName的触手服下部裂开一个小口,露出阴部,触手服下长出一只湿滑的触手插入了阴道.',
                ItemTorso2触手服_LuziSets0: 'TargetCharacterName的触手服缓慢变化,露出胸部.',
                ItemTorso2触手服_LuziSets1: 'TargetCharacterName的触手服缓慢变化,生长覆盖了胸部.',
                ItemTorso2触手服_LuziSeth0: 'TargetCharacterName的触手服缓慢变化,露出手臂.',
                ItemTorso2触手服_LuziSeth1: 'TargetCharacterName的触手服缓慢变化,生长覆盖了手部.',
                ItemTorso2触手服_LuziSeth2: 'TargetCharacterName的触手服缓慢变化,强制将手臂束缚在身后.',
                ItemTorso2触手服_LuziSetf0: 'TargetCharacterName的触手服缓慢变化,露出腿部.',
                ItemTorso2触手服_LuziSetf1: 'TargetCharacterName的触手服缓慢变化,生长覆盖了脚部.',
                ItemTorso2触手服_LuziSetm0: 'TargetCharacterName的触手服缓慢变化,露出嘴部.',
                ItemTorso2触手服_LuziSetm1: 'TargetCharacterName的触手服缓慢变化,生长覆盖嘴部.',
                ItemVulva更多有线跳蛋_LuziSeto0: 'SourceCharacter拨动开关,将TargetCharacter的跳蛋设置为关闭.',
                ItemVulva更多有线跳蛋_LuziSeto1: 'SourceCharacter拨动开关,将TargetCharacter的跳蛋设置为低.',
                ItemVulva更多有线跳蛋_LuziSeto2: 'SourceCharacter拨动开关,将TargetCharacter的跳蛋设置为中.',
                ItemVulva更多有线跳蛋_LuziSeto3: 'SourceCharacter拨动开关,将TargetCharacter的跳蛋设置为高.',
                ItemVulva更多有线跳蛋_LuziSeto4: 'SourceCharacter拨动开关,将TargetCharacter的跳蛋设置为最高.',
                ItemVulva更多有线跳蛋_LuziSetn0: 'SourceCharacter将TargetCharacter阴部的跳蛋拉出,仅剩下1个.',
                ItemVulva更多有线跳蛋_LuziSetn1: 'SourceCharacter摆弄着有线跳蛋,现在TargetCharacter的阴道内有2个跳蛋.',
                ItemVulva更多有线跳蛋_LuziSetn2: 'SourceCharacter摆弄着有线跳蛋,现在TargetCharacter的阴道内有3个跳蛋.',
                ItemVulva更多有线跳蛋_LuziSetn3: 'SourceCharacter摆弄着有线跳蛋,现在TargetCharacter的阴道内有4个跳蛋.',
                ItemVulva更多有线跳蛋_LuziSetn4: 'SourceCharacter摆弄着有线跳蛋,现在TargetCharacter的阴道内有5个跳蛋.',
                ItemDevices窝瓜_LuziSet没盖子: 'SourceCharacter推开了DestinationCharacter的盖子',
                ItemDevices窝瓜_LuziSet有盖子: 'SourceCharacter盖上了DestinationCharacter的盖子',
                ItemDevices玻璃罐子_LuziSetc0: 'SourceCharacter打开了DestinationCharacter的罐子',
                ItemDevices玻璃罐子_LuziSetc1: 'SourceCharacter封上了DestinationCharacter的罐子',
                ItemDevices玻璃罐子_LuziSett0: "SourceCharacter移除了DestinationCharacter双腿的拘束",
                ItemDevices玻璃罐子_LuziSett1: "SourceCharacter将DestinationCharacter的双腿束缚在一起",
                ItemDevices玻璃罐子_LuziSets0: "SourceCharacter移除了DestinationCharacter手腕和手肘的拘束",
                ItemDevices玻璃罐子_LuziSets1: "SourceCharacter将DestinationCharacter的手腕和手肘束缚到她的身后",
                ItemDevices玻璃罐子_LuziSetgz0: 'SourceCharacter移除了连接DestinationCharacter的身体的管子',
                ItemDevices玻璃罐子_LuziSetgz1: 'SourceCharacter将管子连接进了DestinationCharacter的身体',
                ItemDevices玻璃罐子_LuziSetyt0: 'SourceCharacter排空了DestinationCharacter身体和罐子里的液体',
                ItemDevices玻璃罐子_LuziSetyt1: 'DestinationCharacter的身体和罐子充满了液体',
                ItemDevices玻璃罐子_LuziSetk0: "插在DestinationCharacter体内的振动装置停止振动",
                ItemDevices玻璃罐子_LuziSetk1: "插在DestinationCharacter体内的振动装置轻微逗弄起来",
                ItemDevices玻璃罐子_LuziSetk2: "插在DestinationCharacter体内的振动装置带温和嗡鸣着",
                ItemDevices玻璃罐子_LuziSetk3: "插在DestinationCharacter体内的振动装置猛烈地颤动",
                ItemDevices玻璃罐子_LuziSetk4: "插在DestinationCharacter体内的振动装置以最大速度振动着",
                ItemDevices玻璃罐子_LuziSetd0: 'SourceCharacter关闭了插在DestinationCharacter体内的振动装置关闭了',
                ItemDevices玻璃罐子_LuziSetd1: 'SourceCharacter将插在DestinationCharacter体内的电击装置设置为等级1',
                ItemDevices玻璃罐子_LuziSetd2: 'SourceCharacter将插在DestinationCharacter体内的电击装置设置为等级2',
                ItemDevices玻璃罐子_LuziSetd3: 'SourceCharacter将插在DestinationCharacter体内的电击装置设置为等级3',
                ItemDevices玻璃罐子_LuziSetg0: 'SourceCharacter关闭了插在DestinationCharacter体内的振动装置设置为允许高潮',
                ItemDevices玻璃罐子_LuziSetg1: 'SourceCharacter将插在DestinationCharacter体内的振动装置设置为寸止模式',
                ItemDevices玻璃罐子_LuziSetg2: 'SourceCharacter将插在DestinationCharacter体内的振动装置设置为拒绝模式',
                ItemDevices垃圾桶_LuziSet合上盖子: 'SourceCharacter合上了DestinationCharacter的盖子',
                ItemDevices垃圾桶_LuziSet打开盖子: 'SourceCharacter打开了DestinationCharacter的盖子',
                ItemDevices垃圾桶_LuziSet打开挡板: 'SourceCharacter打开了DestinationCharacter的挡板',
                ItemDevices独角兽玩偶_LuziSet戴上头套: 'SourceCharacter戴上了DestinationCharacter的头套',
                ItemDevices独角兽玩偶_LuziSet摘掉头套: 'SourceCharacter摘掉了DestinationCharacter的头套',
                ItemDevices拳击袋_LuziSet有照片: 'SourceCharacter贴上了DestinationCharacter的照片',
                ItemDevices拳击袋_LuziSet无照片: 'SourceCharacter摘掉了DestinationCharacter的照片',
            };

            let addAssetStringSCVEN = {
                ItemTorso触手服_LuziSelectBase: 'Select Configuration',
                ItemTorso触手服_LuziSelect触手状态: 'Select Tentacle Status',
                ItemTorso触手服_LuziSelect上衣开关: 'Select Top Status',
                ItemTorso触手服_LuziSelect手套开关: 'Select Glove Status',
                ItemTorso触手服_LuziSelect嘴套开关: 'Select Mouth Cover Status',
                ItemTorso触手服_LuziSelect脚套开关: 'Select Foot Cover Status',
                ItemTorso触手服_LuziModule手套开关: 'Select Glove Status',
                ItemTorso触手服_LuziModule嘴套开关: 'Select Mouth Cover Status',
                ItemTorso触手服_LuziModule脚套开关: 'Select Foot Cover Status',
                ItemTorso触手服_LuziModule触手状态: 'Select Tentacle Status',
                ItemTorso触手服_LuziModule上衣开关: 'Select Top Status',
                ItemTorso触手服_LuziOptiond0: 'Seal Genital Area',
                ItemTorso触手服_LuziOptiond1: 'Expose Genital Area',
                ItemTorso触手服_LuziOptiond2: 'Insert Tentacle',
                ItemTorso触手服_LuziOptions0: 'Hide Top',
                ItemTorso触手服_LuziOptions1: 'Display Top',
                ItemTorso触手服_LuziOptionm0: 'Hide Mouth Cover',
                ItemTorso触手服_LuziOptionm1: 'Display Mouth Cover',
                ItemTorso触手服_LuziOptionh0: 'Hide Gloves',
                ItemTorso触手服_LuziOptionh1: 'Display Gloves',
                ItemTorso触手服_LuziOptionh2: 'Bind Arms',
                ItemTorso触手服_LuziOptionf0: 'Hide Foot Covers',
                ItemTorso触手服_LuziOptionf1: 'Display Foot Covers',
                ItemTorso2触手服_LuziSelectBase: 'Select Configuration',
                ItemTorso2触手服_LuziSelect触手状态: 'Select Tentacle Status',
                ItemTorso2触手服_LuziSelect上衣开关: 'Select Top Status',
                ItemTorso2触手服_LuziSelect手套开关: 'Select Glove Status',
                ItemTorso2触手服_LuziSelect嘴套开关: 'Select Mouth Cover Status',
                ItemTorso2触手服_LuziSelect脚套开关: 'Select Foot Cover Status',
                ItemTorso2触手服_LuziModule手套开关: 'Select Glove Status',
                ItemTorso2触手服_LuziModule嘴套开关: 'Select Mouth Cover Status',
                ItemTorso2触手服_LuziModule脚套开关: 'Select Foot Cover Status',
                ItemTorso2触手服_LuziModule触手状态: 'Select Tentacle Status',
                ItemTorso2触手服_LuziModule上衣开关: 'Select Top Status',
                ItemTorso2触手服_LuziOptiond0: 'Seal Genital Area',
                ItemTorso2触手服_LuziOptiond1: 'Expose Genital Area',
                ItemTorso2触手服_LuziOptiond2: 'Insert Tentacle',
                ItemTorso2触手服_LuziOptions0: 'Hide Top',
                ItemTorso2触手服_LuziOptions1: 'Display Top',
                ItemTorso2触手服_LuziOptionm0: 'Hide Mouth Cover',
                ItemTorso2触手服_LuziOptionm1: 'Display Mouth Cover',
                ItemTorso2触手服_LuziOptionh0: 'Hide Gloves',
                ItemTorso2触手服_LuziOptionh1: 'Display Gloves',
                ItemTorso2触手服_LuziOptionh2: 'Bind Arms',
                ItemTorso2触手服_LuziOptionf0: 'Hide Foot Covers',
                ItemTorso2触手服_LuziOptionf1: 'Display Foot Covers',
                ItemVulva更多有线跳蛋_LuziSelectBase: 'Select Configuration',
                ItemVulva更多有线跳蛋_LuziSelect跳蛋开关: 'Select Vibrator Switch',
                ItemVulva更多有线跳蛋_LuziSelect跳蛋数量: 'Select Vibrator Quantity',
                ItemVulva更多有线跳蛋_LuziModule跳蛋开关: 'Select Vibrator Switch',
                ItemVulva更多有线跳蛋_LuziModule跳蛋数量: 'Select Vibrator Quantity',
                ItemVulva更多有线跳蛋_LuziOptionn0: '1 Vibrator',
                ItemVulva更多有线跳蛋_LuziOptionn1: '2 Vibrators',
                ItemVulva更多有线跳蛋_LuziOptionn2: '3 Vibrators',
                ItemVulva更多有线跳蛋_LuziOptionn3: '4 Vibrators',
                ItemVulva更多有线跳蛋_LuziOptionn4: '5 Vibrators',
                ItemVulva更多有线跳蛋_LuziOptiono0: 'Off',
                ItemVulva更多有线跳蛋_LuziOptiono1: 'Low',
                ItemVulva更多有线跳蛋_LuziOptiono2: 'Medium',
                ItemVulva更多有线跳蛋_LuziOptiono3: 'High',
                ItemVulva更多有线跳蛋_LuziOptiono4: 'Maximum',
                SuitLower鱼鱼尾_LuziSelectBase: 'Select Configuration',
                SuitLower鱼鱼尾_LuziSelect鱼鳍: 'Set Fins',
                SuitLower鱼鱼尾_LuziSelect鱼尾: 'Set Tail',
                SuitLower鱼鱼尾_LuziModule鱼鳍: 'Fins',
                SuitLower鱼鱼尾_LuziOptionq0: 'None',
                SuitLower鱼鱼尾_LuziOptionq1: 'Present',
                SuitLower鱼鱼尾_LuziModule鱼尾: 'Tail',
                SuitLower鱼鱼尾_LuziOptionw0: 'Transparent',
                SuitLower鱼鱼尾_LuziOptionw1: 'Opaque',
                ItemTorso2拘束套装_LuziSelect: 'Select Configuration',
                ItemTorso2拘束套装_LuziSet无: '',
                ItemTorso2拘束套装_LuziSet乳胶衣: '',
                ItemTorso2拘束套装_LuziSet透视紧身衣: '',
                ItemTorso2拘束套装_LuziSet紧身衣: '',
                ItemDevices窝瓜_LuziSelect: 'Select Configuration',
                ItemDevices玻璃罐子_LuziSelectBase: 'Select Container Configuration',
                ItemDevices玻璃罐子_LuziSelect窗户: 'Set Window',
                ItemDevices玻璃罐子_LuziModule窗户: 'Window',
                ItemDevices玻璃罐子_LuziOptionc0: 'None',
                ItemDevices玻璃罐子_LuziOptionc1: 'Sealed',
                ItemDevices玻璃罐子_LuziSelect腿部拘束: 'Set Leg Restraint',
                ItemDevices玻璃罐子_LuziModule腿部拘束: 'Leg Restraint',
                ItemDevices玻璃罐子_LuziOptiont0: 'None',
                ItemDevices玻璃罐子_LuziOptiont1: 'Leg Restraint',
                ItemDevices玻璃罐子_LuziSelect手臂拘束: 'Set Arm Restraint',
                ItemDevices玻璃罐子_LuziModule手臂拘束: 'Arm Restraint',
                ItemDevices玻璃罐子_LuziOptions0: 'None',
                ItemDevices玻璃罐子_LuziOptions1: 'Arm Restraint',
                ItemDevices玻璃罐子_LuziSelect管道: 'Set Tube',
                ItemDevices玻璃罐子_LuziModule管道: 'Tube',
                ItemDevices玻璃罐子_LuziOptiongz0: 'None',
                ItemDevices玻璃罐子_LuziOptiongz1: 'Connect to Body',
                ItemDevices玻璃罐子_LuziSelect液体: 'Set Liquid',
                ItemDevices玻璃罐子_LuziModule液体: 'Liquid',
                ItemDevices玻璃罐子_LuziOptionyt0: 'None',
                ItemDevices玻璃罐子_LuziOptionyt1: 'Inject Liquid',
                ItemDevices玻璃罐子_LuziSelect快感模块: 'Set Pleasure Module',
                ItemDevices玻璃罐子_LuziModule快感模块: 'Pleasure Module',
                ItemDevices玻璃罐子_LuziOptionk0: 'Off',
                ItemDevices玻璃罐子_LuziOptionk1: 'Low',
                ItemDevices玻璃罐子_LuziOptionk2: 'Moderate',
                Devices玻璃罐子_LuziOptionk3: 'High',
                ItemDevices玻璃罐子_LuziSelect声音模块: 'Set Sound Module',
                ItemDevices玻璃罐子_LuziModule声音模块: 'Sound Module',
                ItemDevices玻璃罐子_LuziOptionsd0: 'Silent',
                ItemDevices玻璃罐子_LuziOptionsd1: 'Ambient Sounds',
                ItemDevices玻璃罐子_LuziOptionsd2: 'Music',
                ItemDevices玻璃罐子_LuziSelect温度模块: 'Set Temperature Module',
                ItemDevices玻璃罐子_LuziModule温度模块: 'Temperature Module',
                ItemDevices玻璃罐子_LuziOptiontm0: 'Room Temperature',
                ItemDevices玻璃罐子_LuziOptiontm1: 'Warm',
                ItemDevices玻璃罐子_LuziOptiontm2: 'Hot',
                ItemDevices玻璃罐子_LuziOptiontm3: 'Cold',
                ItemDevices玻璃罐子_LuziSelect电击模块: 'Set Electro Module',
                ItemDevices玻璃罐子_LuziModule电击模块: 'Electro Module',
                ItemDevices玻璃罐子_LuziOptiond0: 'Off',
                ItemDevices玻璃罐子_LuziOptiond1: 'Low',
                ItemDevices玻璃罐子_LuziOptiond2: 'Medium',
                ItemDevices玻璃罐子_LuziOptiond3: 'High',
                ItemDevices玻璃罐子_LuziSelect高潮锁: 'Set Orgasm Lock',
                ItemDevices玻璃罐子_LuziModule高潮锁: 'Orgasm Lock',
                ItemDevices玻璃罐子_LuziOptiong0: 'Allow',
                ItemDevices玻璃罐子_LuziOptiong1: 'Edge',
                ItemDevices玻璃罐子_LuziOptiong2: 'Deny',
                ItemDevices垃圾桶_LuziSelect: 'Select Trash Bin Configuration',
                ItemDevices独角兽玩偶_LuziSelect: 'Select Unicorn Doll Configuration',
                ItemDevices巨型玩偶_LuziSelect: 'Select Giant Doll Configuration',
                ItemDevices拳击袋_LuziSelect: 'Select Punching Bag Configuration',
                ItemDevices独角兽玩偶_Luzi戴上头套: "Put on Headgear",
                ItemDevices独角兽玩偶_Luzi摘掉头套: "Remove Headgear",
                ItemDevices巨型玩偶_Luzi熊熊: "Bear",
                ItemTorso2拘束套装_Luzi无: "No",
                ItemTorso2拘束套装_Luzi乳胶衣: "Latex Suit",
                ItemTorso2拘束套装_Luzi透视紧身衣: "Sheer Bodysuit",
                ItemTorso2拘束套装_Luzi紧身衣: "Bodysuit",
                ItemTorso拘束套装_Luzi无: "No",
                ItemTorso拘束套装_Luzi乳胶衣: "Latex Suit",
                ItemTorso拘束套装_Luzi透视紧身衣: "Sheer Bodysuit",
                ItemTorso拘束套装_Luzi紧身衣: "Bodysuit",
                ItemDevices窝瓜_Luzi没盖子: "No Lid",
                ItemDevices窝瓜_Luzi有盖子: "With Lid",
                ItemDevices垃圾桶_Luzi打开盖子: "Open Lid",
                ItemDevices垃圾桶_Luzi合上盖子: "Close Lid",
                ItemDevices垃圾桶_Luzi打开挡板: "Open Flap",
                ItemDevices拳击袋_Luzi无照片: "No Photo",
                ItemDevices拳击袋_Luzi有照片: "With Photo",

            };

            let addInterfaceCSVEN = {
                ItemTorso触手服_LuziSetd0: 'The lower opening of TargetCharacterName\'s tentacle suit gradually closes and adheres together.',
                ItemTorso触手服_LuziSetd1: 'A small opening in the lower part of TargetCharacterName\'s tentacle suit splits to reveal the genital area.',
                ItemTorso触手服_LuziSetd2: 'A small opening in the lower part of TargetCharacterName\'s tentacle suit splits to reveal the genital area, and a slimy tentacle grows out from the suit and inserts into the vagina.',
                ItemTorso触手服_LuziSets0: 'The tentacle suit on TargetCharacterName slowly changes, revealing the chest.',
                ItemTorso触手服_LuziSets1: 'The tentacle suit on TargetCharacterName slowly changes, growing over the chest.',
                ItemTorso触手服_LuziSeth0: 'The tentacle suit on TargetCharacterName slowly changes, revealing the arms.',
                ItemTorso触手服_LuziSeth1: 'The tentacle suit on TargetCharacterName slowly changes, growing over the hands.',
                ItemTorso触手服_LuziSeth2: 'The tentacle suit on TargetCharacterName slowly changes, forcibly binding the arms behind the back.',
                ItemTorso触手服_LuziSetf0: 'The tentacle suit on TargetCharacterName slowly changes, revealing the legs.',
                ItemTorso触手服_LuziSetf1: 'The tentacle suit on TargetCharacterName slowly changes, growing over the feet.',
                ItemTorso触手服_LuziSetm0: 'The tentacle suit on TargetCharacterName slowly changes, revealing the mouth.',
                ItemTorso触手服_LuziSetm1: 'The tentacle suit on TargetCharacterName slowly changes, growing over the mouth.',
                ItemTorso2触手服_LuziSetd0: 'The lower opening of TargetCharacterName\'s tentacle suit gradually closes and adheres together.',
                ItemTorso2触手服_LuziSetd1: 'A small opening in the lower part of TargetCharacterName\'s tentacle suit splits to reveal the genital area.',
                ItemTorso2触手服_LuziSetd2: 'A small opening in the lower part of TargetCharacterName\'s tentacle suit splits to reveal the genital area, and a slimy tentacle grows out from the suit and inserts into the vagina.',
                ItemTorso2触手服_LuziSets0: 'The tentacle suit on TargetCharacterName slowly changes, revealing the chest.',
                ItemTorso2触手服_LuziSets1: 'The tentacle suit on TargetCharacterName slowly changes, growing over the chest.',
                ItemTorso2触手服_LuziSeth0: 'The tentacle suit on TargetCharacterName slowly changes, revealing the arms.',
                ItemTorso2触手服_LuziSeth1: 'The tentacle suit on TargetCharacterName slowly changes, growing over the hands.',
                ItemTorso2触手服_LuziSeth2: 'The tentacle suit on TargetCharacterName slowly changes, forcibly binding the arms behind the back.',
                ItemTorso2触手服_LuziSetf0: 'The tentacle suit on TargetCharacterName slowly changes, revealing the legs.',
                ItemTorso2触手服_LuziSetf1: 'The tentacle suit on TargetCharacterName slowly changes, growing over the feet.',
                ItemTorso2触手服_LuziSetm0: 'The tentacle suit on TargetCharacterName slowly changes, revealing the mouth.',
                ItemTorso2触手服_LuziSetm1: 'The tentacle suit on TargetCharacterName slowly changes, growing over the mouth.',
                ItemVulva更多有线跳蛋_LuziSeto0: 'SourceCharacter flicks the switch, setting TargetCharacter\'s vibrator egg to off.',
                ItemVulva更多有线跳蛋_LuziSeto1: 'SourceCharacter flicks the switch, setting TargetCharacter\'s vibrator egg to low.',
                ItemVulva更多有线跳蛋_LuziSeto2: 'SourceCharacter flicks the switch, setting TargetCharacter\'s vibrator egg to medium.',
                ItemVulva更多有线跳蛋_LuziSeto3: 'SourceCharacter flicks the switch, setting TargetCharacter\'s vibrator egg to high.',
                ItemVulva更多有线跳蛋_LuziSeto4: 'SourceCharacter flicks the switch, setting TargetCharacter\'s vibrator egg to maximum.',
                ItemVulva更多有线跳蛋_LuziSetn0: 'SourceCharacter pulls out the vibrator egg from TargetCharacter\'s genitalia, leaving only one remaining.',
                ItemVulva更多有线跳蛋_LuziSetn1: 'SourceCharacter fiddles with the wired vibrator egg, now there are two vibrator eggs inside TargetCharacter\'s vagina.',
                ItemVulva更多有线跳蛋_LuziSetn2: 'SourceCharacter fiddles with the wired vibrator egg, now there are three vibrator eggs inside TargetCharacter\'s vagina.',
                ItemVulva更多有线跳蛋_LuziSetn3: 'SourceCharacter fiddles with the wired vibrator egg, now there are four vibrator eggs inside TargetCharacter\'s vagina.',
                ItemVulva更多有线跳蛋_LuziSetn4: 'SourceCharacter fiddles with the wired vibrator egg, now there are five vibrator eggs inside TargetCharacter\'s vagina.',
                ItemDevices窝瓜_LuziSet没盖子: 'SourceCharacter pushes open the lid of DestinationCharacter.',
                ItemDevices窝瓜_LuziSet有盖子: 'SourceCharacter covers DestinationCharacter with a lid.',
                ItemDevices玻璃罐子_LuziSetc0: 'SourceCharacter opens DestinationCharacter\'s jar.',
                ItemDevices玻璃罐子_LuziSetc1: 'SourceCharacter seals DestinationCharacter\'s jar.',
                ItemDevices玻璃罐子_LuziSett0: "SourceCharacter removes the restraints from DestinationCharacter\'s legs.",
                ItemDevices玻璃罐子_LuziSett1: "SourceCharacter binds DestinationCharacter\'s legs together.",
                ItemDevices玻璃罐子_LuziSets0: "SourceCharacter removes the restraints from DestinationCharacter\'s wrists and elbows.",
                ItemDevices玻璃罐子_LuziSets1: "SourceCharacter binds DestinationCharacter\'s wrists and elbows behind her back.",
                ItemDevices玻璃罐子_LuziSetgz0: 'SourceCharacter removes the tube connected to DestinationCharacter\'s body.',
                ItemDevices玻璃罐子_LuziSetgz1: 'SourceCharacter connects the tube into DestinationCharacter\'s body.',
                ItemDevices玻璃罐子_LuziSetyt0: 'SourceCharacter drains the liquid from DestinationCharacter\'s body and the jar.',
                ItemDevices玻璃罐子_LuziSetyt1: 'DestinationCharacter\'s body and the jar are filled with liquid.',
                ItemDevices玻璃罐子_LuziSetk0: "The vibrating device inside DestinationCharacter stops vibrating.",
                ItemDevices玻璃罐子_LuziSetk1: "The vibrating device inside DestinationCharacter teases gently.",
                ItemDevices玻璃罐子_LuziSetk2: "The vibrating device inside DestinationCharacter hums softly.",
                ItemDevices玻璃罐子_LuziSetk3: "The vibrating device inside DestinationCharacter vibrates fiercely.",
                ItemDevices玻璃罐子_LuziSetk4: "The vibrating device inside DestinationCharacter vibrates at maximum speed.",
                ItemDevices玻璃罐子_LuziSetd0: 'SourceCharacter turns off the vibrating device inside DestinationCharacter.',
                ItemDevices玻璃罐子_LuziSetd1: 'SourceCharacter sets the electric shock device inside DestinationCharacter to level 1.',
                ItemDevices玻璃罐子_LuziSetd2: 'SourceCharacter sets the electric shock device inside DestinationCharacter to level 2.',
                ItemDevices玻璃罐子_LuziSetd3: 'SourceCharacter sets the electric shock device inside DestinationCharacter to level 3.',
                ItemDevices玻璃罐子_LuziSetg0: 'SourceCharacter turns off the orgasm allowance setting of the vibrating device inside DestinationCharacter.',
                ItemDevices玻璃罐子_LuziSetg1: 'SourceCharacter sets the vibrating device inside DestinationCharacter to edge play mode.',
                ItemDevices玻璃罐子_LuziSetg2: 'SourceCharacter sets the vibrating device inside DestinationCharacter to denial mode.',
                ItemDevices垃圾桶_LuziSet合上盖子: 'SourceCharacter closes the lid on DestinationCharacter.',
                ItemDevices垃圾桶_LuziSet打开盖子: 'SourceCharacter opens the lid on DestinationCharacter.',
                ItemDevices垃圾桶_LuziSet打开挡板: 'SourceCharacter opens the flap on DestinationCharacter.',
                ItemDevices独角兽玩偶_LuziSet戴上头套: 'SourceCharacter puts on the headgear for DestinationCharacter.',
                ItemDevices独角兽玩偶_LuziSet摘掉头套: 'SourceCharacter removes the headgear from DestinationCharacter.',
                ItemDevices拳击袋_LuziSet有照片: 'SourceCharacter attaches a photo to DestinationCharacter.',
                ItemDevices拳击袋_LuziSet无照片: 'SourceCharacter removes the photo from DestinationCharacter.',
            };

            let language = localStorage.getItem("BondageClubLanguage");
            if (language === "CN" || language === "TW") {
                Object.assign(TextAllScreenCache.get(AssetStringsPath).cache, addAssetStringSCVCN);
                Object.assign(TextAllScreenCache.get(InterfaceStringsPath).cache, addInterfaceCSVCN);
            } else {
                Object.assign(TextAllScreenCache.get(AssetStringsPath).cache, addAssetStringSCVEN);
                Object.assign(TextAllScreenCache.get(InterfaceStringsPath).cache, addInterfaceCSVEN);
            }


            // ========================================================
            isAssetAdded = true;
        }

        Asset.map(i => ({ Name: i.Name, Group: i.Group.Name }));
        InventoryAddMany(Player, Asset.map(i => ({ Name: i.Name, Group: i.Group.Name })));

        CraftingItemListBuild();

        next(args);

    });

    // ==================================触手服动画钩子================================
    window.AssetsItemTorso触手服_LuziBeforeDraw = function AssetsItemTorso触手服_LuziBeforeDraw({ PersistentData, L, X, Y, Property }) {
        const Data = PersistentData();
        if (typeof Data.DildoState !== "number") Data.DildoState = 0;
        if (typeof Data.Modifier !== "number") Data.Modifier = 1;

        //if (L === "DevicePleasureHolder") return { Y: Y + Data.DildoState };
        if (L !== "触手" && L !== "触手背后") return;

        const Properties = Property || {};
        const Intensity = typeof Properties.Intensity === "number" ? Properties.Intensity : -1;


        const FuckLength = 15;
        const TimeModifier = 0.007;
        const AnimationQualityRatio = (Player.GraphicsSettings ? Math.max(Player.GraphicsSettings.AnimationQuality * 0.6, 30) : 30) / 30;
        Data.Speed = (Intensity + 1) * 2;
        if (Data.DildoState >= 1 && Intensity > -1) {
            Data.Modifier = -1;
        } else if (Data.DildoState <= 0) {
            Data.Modifier = 1;
        } else if (Data.DildoState <= 1 && Intensity === -1) {
            Data.Modifier = 1;
            Data.Speed = 1;
        }

        Data.DildoState += Data.Modifier * Data.Speed * AnimationQualityRatio * TimeModifier;
        if (AnimationQualityRatio > FuckLength) Data.DildoState = Math.random();

        return { Y: Y + FuckLength * (-Math.cos(Data.DildoState * 2 * Math.PI)) };
    }
    window.AssetsItemTorso2触手服_LuziBeforeDraw = function AssetsItemTorso2触手服_LuziBeforeDraw({ PersistentData, L, X, Y, Property }) {
        const Data = PersistentData();
        if (typeof Data.DildoState !== "number") Data.DildoState = 0;
        if (typeof Data.Modifier !== "number") Data.Modifier = 1;

        //if (L === "DevicePleasureHolder") return { Y: Y + Data.DildoState };
        if (L !== "触手" && L !== "触手背后") return;

        const Properties = Property || {};
        const Intensity = typeof Properties.Intensity === "number" ? Properties.Intensity : -1;


        const FuckLength = 15;
        const TimeModifier = 0.007;
        const AnimationQualityRatio = (Player.GraphicsSettings ? Math.max(Player.GraphicsSettings.AnimationQuality * 0.6, 30) : 30) / 30;
        Data.Speed = (Intensity + 1) * 2;
        if (Data.DildoState >= 1 && Intensity > -1) {
            Data.Modifier = -1;
        } else if (Data.DildoState <= 0) {
            Data.Modifier = 1;
        } else if (Data.DildoState <= 1 && Intensity === -1) {
            Data.Modifier = 1;
            Data.Speed = 1;
        }

        Data.DildoState += Data.Modifier * Data.Speed * AnimationQualityRatio * TimeModifier;
        if (AnimationQualityRatio > FuckLength) Data.DildoState = Math.random();

        return { Y: Y + FuckLength * (-Math.cos(Data.DildoState * 2 * Math.PI)) };
    }
    function AssetsItemTorso触手服_LuziScriptDrawHook(data, originalFunction, drawData) {
        originalFunction(drawData);

        const Data = drawData.PersistentData();
        const Properties = drawData.Item.Property || {};
        const FrameTime = Player.GraphicsSettings ? Math.max(30, (Player.GraphicsSettings.AnimationQuality * 0.6)) : 30;
        const Intensity = typeof Properties.Intensity === "number" ? Properties.Intensity : -1;
        const FuckLength = 32;

        if (typeof Data.FuckChangeTime !== "number") Data.FuckChangeTime = CommonTime() + FrameTime;
        if (typeof Data.DildoState !== "number") Data.DildoState = 0;

        if (Data.FuckChangeTime < CommonTime() && !(Intensity === -1 && FuckLength <= Data.DildoState)) {
            Data.FuckChangeTime = CommonTime() + FrameTime;
            AnimationRequestRefreshRate(drawData.C, FrameTime);
            AnimationRequestDraw(drawData.C);
        }
    }
    // ================================================================================
    // ================================================================================

    mod.hookFunction("ServerSend", 5, (args, next) => {
        if (args[0] == "ChatRoomChat" && args[1]?.Type == "Action") {
            let data = args[1];
            let Dictionary = data.Dictionary;
            if (Dictionary) {
                if (Dictionary[3]?.AssetName?.includes('_Luzi')) {
                    if (data.Content === "ActionUse") {
                        let AssetName = Dictionary[3].AssetName;
                        data.Dictionary.push({
                            Tag: `NextAsset`, Text: AssetName.replace('_Luzi', '')
                        });
                    };
                    if (data.Content === "ActionRemove") {
                        let AssetName = Dictionary[3].AssetName;
                        data.Dictionary.push({
                            Tag: `PrevAsset`, Text: AssetName.replace('_Luzi', '')
                        });
                    };
                }
            };
            if (Dictionary[3]?.AssetName?.includes('_Luzi')) {
                if (data.Content === "ActionSwap") {
                    let Dictionary = data.Dictionary;
                    if (Dictionary) {
                        let AssetName = Dictionary[3].AssetName;
                        data.Dictionary.push({
                            Tag: `PrevAsset`, Text: AssetName.replace('_Luzi', '')
                        });
                    };
                }
            };
            if (Dictionary[4]?.AssetName?.includes('_Luzi')) {
                if (data.Content === "ActionSwap") {
                    let Dictionary = data.Dictionary;
                    if (Dictionary) {
                        let AssetName = Dictionary[4].AssetName;
                        data.Dictionary.push({
                            Tag: `NextAsset`, Text: AssetName.replace('_Luzi', '')
                        });
                    };
                }
            };
        }
        if (args[0] == "ChatRoomChat" && args[1]?.Type == "Action") {
            let data = args[1];
            const Content = data.Content;
            // 检查 Content 是否含 "_Luzi"
            if (Content.indexOf("_Luzi") !== -1) {
                // 在 PlayerDialog 映射中查找对应的消息
                const customKeyName = Content;
                const msg = TextAllScreenCache.get(InterfaceStringsPath).cache[customKeyName] || "";

                // 将修改后的消息添加到 Dictionary 中
                data.Dictionary.push({
                    Tag: `MISSING TEXT IN "Interface.csv": ${Content}`,
                    Text: msg,
                });
            }
        }
        next(args);
    });

    mod.hookFunction("DrawTextFit", 10, (args, next) => {
        // console.log(args[0])
        if (args[0] && args[0].includes('_Luzi')) {
            args[0] = args[0].replace(/.*?_Luzi/, ''); // 删除'_Luzi'及其前面的字符串
        }
        if (args[0] && args[0].includes('_笨笨蛋Luzi')) {
            args[0] = args[0].replace(/.*?_笨笨蛋Luzi/, ''); // 删除'_Luzi'及其前面的字符串
        }
        if (args[0] && args[0].includes('_笨笨笨蛋Luzi2')) {
            args[0] = args[0].replace(/.*?_笨笨笨蛋Luzi2/, ''); // 删除'_Luzi'及其前面的字符串
        }
        next(args);
    });


    // ================================================================================
    // ================================================================================
    // 完整的双人床！ 修改了角色画布的宽度 好厉害的星涟!
    function GLDrawLoadEx(_evt, force2d = false) {
        GLDrawCanvas = document.createElement("canvas");
        GLDrawCanvas.width = 1000 * 2; // <- 修改 主画布 整体宽度
        GLDrawCanvas.height = CanvasDrawHeight;

        const glOpts = GLDrawGetOptions();
        let gl = null;
        for (const glVersion of ["webgl2", "webgl"]) {
            gl = GLDrawCanvas.getContext(glVersion, glOpts);
            if (gl) {
                /* @ts-ignore */
                GLVersion = glVersion;
                break;
            }
        }
        if (!gl || force2d) {

            if (force2d) {
                console.error('WebGL: forcing fallback to 2D renderer');
            } else {
                console.error('WebGL: failed to initialize canvas');
            }
            GLVersion = "No WebGL";
            GLDrawCanvas.remove();
            GLDrawCanvas = null;
            return;
        }
        console.info(`WebGL: initialized as ${GLVersion}`);
        /* @ts-ignore */
        GLDrawCanvas.GL = gl;
        GLDrawMakeGLProgram(GLDrawCanvas.GL);
        GLDrawClearRect(GLDrawCanvas.GL, 0, 0, 1000 * 2, CanvasDrawHeight, 0);
        GLDrawCanvas.addEventListener("webglcontextlost", GLDrawOnContextLost, false);
        GLDrawCanvas.addEventListener("webglcontextrestored", GLDrawOnContextRestored, false);
    }

    mod.hookFunction("GLDrawLoad", 999, (args, next) => {
        GLDrawLoadEx(...args);
    });

    function 笨蛋Luzi() {
        patchFunction("CommonDrawCanvasPrepare", {
            "C.Canvas.width = 500;": 'C.Canvas.width = 500 * 2;', // <- 修改 Canvas画布 整体宽度
            "C.CanvasBlink.width = 500;": 'C.CanvasBlink.width = 500 * 2;', // <- 修改 CanvasBlink画布 整体宽度

            'C.Canvas.getContext("2d").clearRect(0, 0, 500, CanvasDrawHeight);': 'C.Canvas.getContext("2d").clearRect(0, 0, 500 * 4, CanvasDrawHeight);', // <- 清理 Canvas画布 因闪烁消失的多余像素
            'C.CanvasBlink.getContext("2d").clearRect(0, 0, 500, CanvasDrawHeight);': 'C.CanvasBlink.getContext("2d").clearRect(0, 0, 500 * 4, CanvasDrawHeight);', // <- 清理 CanvasBlink画布 因闪烁消失的多余像素
        });

        patchFunction("GLDrawAppearanceBuild", {
            '500': '500 * 2', // <- 修改 Canvas 和 CanvasBlink 两者的距离
            'GLDrawClearRect(GLDrawCanvas.GL, 0, 0, 1000, CanvasDrawHeight, 0);': 'GLDrawClearRect(GLDrawCanvas.GL, 0, 0, 1000 * 2, CanvasDrawHeight, 0);', // <- 也是清理

            'GLDrawClearRect(GLDrawCanvas.GL, x, CanvasDrawHeight - y - h, w, h, 0),': 'GLDrawClearRect(GLDrawCanvas.GL, x, CanvasDrawHeight - y - h, w, h, 500 / 2),', // <- 整体向右移动
            'GLDrawClearRect(GLDrawCanvas.GL, x, CanvasDrawHeight - y - h, w, h, blinkOffset),': 'GLDrawClearRect(GLDrawCanvas.GL, x, CanvasDrawHeight - y - h, w, h, blinkOffset + 500 / 2),',// <- 整体向右移动

            'GLDrawImage(src, GLDrawCanvas.GL, x, y, opts, 0),': 'GLDrawImage(src, GLDrawCanvas.GL, x, y, opts, 500 / 2),', // <- 整体向右移动
            'GLDrawImage(src, GLDrawCanvas.GL, x, y, opts, blinkOffset),': 'GLDrawImage(src, GLDrawCanvas.GL, x, y, opts, blinkOffset + 500 / 2),', // <- 整体向右移动

            'GLDraw2DCanvas(GLDrawCanvas.GL, Img, x, y, 0, alphaMasks),': 'GLDraw2DCanvas(GLDrawCanvas.GL, Img, x, y, 500 / 2, alphaMasks),', // <- 整体向右移动
            'GLDraw2DCanvas(GLDrawCanvas.GL, Img, x, y, blinkOffset, alphaMasks),': 'GLDraw2DCanvas(GLDrawCanvas.GL, Img, x, y, blinkOffset + 500 / 2, alphaMasks),', // <- 整体向右移动
        });

        patchFunction("DrawCharacter", {
            '500 * HeightRatio * Zoom': '500 * HeightRatio * Zoom * 2', // <-  向左回正
            'TempCanvas.canvas.width = CanvasDrawWidth;': 'TempCanvas.canvas.width = CanvasDrawWidth * 2;', // <-  向左回正

            'const XOffset = CharacterAppearanceXOffset(C, HeightRatio);': 'function CharacterAppearanceXOffsetEx(C, HeightRatio) {return 875 * (1 - HeightRatio) / 2;} const XOffset = CharacterAppearanceXOffsetEx(C, HeightRatio);', // <-  向左回正

            'DrawImageEx(Canvas, DrawCanvas, X + XOffset * Zoom': 'let offset = (500 / 2 - 1000 * 0.5) * Zoom; DrawImageEx(Canvas, DrawCanvas, X + offset + XOffset * Zoom', // <-  向左回正
        });

        patchFunction("DrawCharacterSegment", {
            'DrawCanvasSegment(C.Canvas, Left': 'DrawCanvasSegment(C.Canvas, Left + 250', // <- 衣柜缩略图 向左回正

        });
    };

    let isGLDrawResetCanvas = false;
    mod.hookFunction("DrawCharacter", 10, (args, next) => {
        if (!isGLDrawResetCanvas) {
            GLDrawResetCanvas(false); // <- 重新运行一次
            isGLDrawResetCanvas = true;
        }
        next(args);
    });

    // 本地版登陆后调用
    mod.hookFunction("LoginResponse", 10, (args, next) => {
        if (!isGLDrawResetCanvas) {
            笨蛋Luzi(); // 赐福
            GLDrawResetCanvas(false); // <- 重新运行一次
            isGLDrawResetCanvas = true;
        }
        next(args);
        if (Player.Canvas.width == 500) {
            Player.Canvas.width = 1000;
            Player.CanvasBlink.width = 1000;
        }
    });

    笨蛋Luzi();
    // ================================================================================
    // ================================================================================
    // 头顶的小裙子标识

    function Hidden(text) {
        ServerSend("ChatRoomChat", {
            Content: `${text}`,
            Type: "Hidden",
        })
    };

    mod.hookFunction("ChatRoomSync", 10, (args, next) => {
        setTimeout(() => {
            Hidden("╰(*°▽°*)╯");
        }, 2000);
        next(args);
    });

    mod.hookFunction("ChatRoomSyncMemberLeave", 10, (args, next) => {
        setTimeout(() => {
            Hidden("╰(*°▽°*)╯");
        }, 2000);
        next(args);
    });

    mod.hookFunction("ChatRoomMessage", 10, (args, next) => {
        let data = args[0]
        if (data.Content === 'ServerEnter') {
            setTimeout(() => {
                Hidden("╰(*°▽°*)╯");
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

    mod.hookFunction("ChatRoomDrawCharacterStatusIcons", 10, (args, next) => {
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

    // ================================================================================
    // ================================================================================

})();


