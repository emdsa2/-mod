// ==UserScript==
// @name         BC 服装拓展Beta
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  服装拓展Beta
// @author       Luzi
// @include      /^https:\/\/(www\.)?bondageprojects\.elementfx\.com\/R\d+\/(BondageClub|\d+)(\/((index|\d+)\.html)?)?$/
// @include      /^https:\/\/(www\.)?bondage-europe\.com\/R\d+\/(BondageClub|\d+)(\/((index|\d+)\.html)?)?$/
// @grant        none
// @license      MIT
// ==/UserScript==
//@ts-nocheck
(function () {
    'use strict';
    // =======================================================================================
    /** @type {ModSDKGlobalAPI} *///@ts-ignore
    const bcModSdk = function () { "use strict"; const o = "1.2.0"; function e(o) { alert("Mod ERROR:\n" + o); const e = new Error(o); throw console.error(e), e; } const t = new TextEncoder; function n(o) { return !!o && "object" == typeof o && !Array.isArray(o); } function r(o) { const e = new Set; return o.filter((o => !e.has(o) && e.add(o))); } const i = new Map, a = new Set; function c(o) { a.has(o) || (a.add(o), console.warn(o)); } function s(o) { const e = [], t = new Map, n = new Set; for (const r of f.values()) { const i = r.patching.get(o.name); if (i) { e.push(...i.hooks); for (const [e, a] of i.patches.entries()) t.has(e) && t.get(e) !== a && c(`ModSDK: Mod '${r.name}' is patching function ${o.name} with same pattern that is already applied by different mod, but with different pattern:\nPattern:\n${e}\nPatch1:\n${t.get(e) || ""}\nPatch2:\n${a}`), t.set(e, a), n.add(r.name); } } e.sort(((o, e) => e.priority - o.priority)); const r = function (o, e) { if (0 === e.size) return o; let t = o.toString().replaceAll("\r\n", "\n"); for (const [n, r] of e.entries()) t.includes(n) || c(`ModSDK: Patching ${o.name}: Patch ${n} not applied`), t = t.replaceAll(n, r); return (0, eval)(`(${t})`); }(o.original, t); let i = function (e) { var t, i; const a = null === (i = (t = m.errorReporterHooks).hookChainExit) || void 0 === i ? void 0 : i.call(t, o.name, n), c = r.apply(this, e); return null == a || a(), c; }; for (let t = e.length - 1; t >= 0; t--) { const n = e[t], r = i; i = function (e) { var t, i; const a = null === (i = (t = m.errorReporterHooks).hookEnter) || void 0 === i ? void 0 : i.call(t, o.name, n.mod), c = n.hook.apply(this, [e, o => { if (1 !== arguments.length || !Array.isArray(e)) throw new Error(`Mod ${n.mod} failed to call next hook: Expected args to be array, got ${typeof o}`); return r.call(this, o); }]); return null == a || a(), c; }; } return { hooks: e, patches: t, patchesSources: n, enter: i, final: r }; } function l(o, e = !1) { let r = i.get(o); if (r) e && (r.precomputed = s(r)); else { let e = window; const a = o.split("."); for (let t = 0; t < a.length - 1; t++)if (e = e[a[t]], !n(e)) throw new Error(`ModSDK: Function ${o} to be patched not found; ${a.slice(0, t + 1).join(".")} is not object`); const c = e[a[a.length - 1]]; if ("function" != typeof c) throw new Error(`ModSDK: Function ${o} to be patched not found`); const l = function (o) { let e = -1; for (const n of t.encode(o)) { let o = 255 & (e ^ n); for (let e = 0; e < 8; e++)o = 1 & o ? -306674912 ^ o >>> 1 : o >>> 1; e = e >>> 8 ^ o; } return ((-1 ^ e) >>> 0).toString(16).padStart(8, "0").toUpperCase(); }(c.toString().replaceAll("\r\n", "\n")), d = { name: o, original: c, originalHash: l }; r = Object.assign(Object.assign({}, d), { precomputed: s(d), router: () => { }, context: e, contextProperty: a[a.length - 1] }), r.router = function (o) { return function (...e) { return o.precomputed.enter.apply(this, [e]); }; }(r), i.set(o, r), e[r.contextProperty] = r.router; } return r; } function d() { for (const o of i.values()) o.precomputed = s(o); } function p() { const o = new Map; for (const [e, t] of i) o.set(e, { name: e, original: t.original, originalHash: t.originalHash, sdkEntrypoint: t.router, currentEntrypoint: t.context[t.contextProperty], hookedByMods: r(t.precomputed.hooks.map((o => o.mod))), patchedByMods: Array.from(t.precomputed.patchesSources) }); return o; } const f = new Map; function u(o) { f.get(o.name) !== o && e(`Failed to unload mod '${o.name}': Not registered`), f.delete(o.name), o.loaded = !1, d(); } function g(o, t) { o && "object" == typeof o || e("Failed to register mod: Expected info object, got " + typeof o), "string" == typeof o.name && o.name || e("Failed to register mod: Expected name to be non-empty string, got " + typeof o.name); let r = `'${o.name}'`; "string" == typeof o.fullName && o.fullName || e(`Failed to register mod ${r}: Expected fullName to be non-empty string, got ${typeof o.fullName}`), r = `'${o.fullName} (${o.name})'`, "string" != typeof o.version && e(`Failed to register mod ${r}: Expected version to be string, got ${typeof o.version}`), o.repository || (o.repository = void 0), void 0 !== o.repository && "string" != typeof o.repository && e(`Failed to register mod ${r}: Expected repository to be undefined or string, got ${typeof o.version}`), null == t && (t = {}), t && "object" == typeof t || e(`Failed to register mod ${r}: Expected options to be undefined or object, got ${typeof t}`); const i = !0 === t.allowReplace, a = f.get(o.name); a && (a.allowReplace && i || e(`Refusing to load mod ${r}: it is already loaded and doesn't allow being replaced.\nWas the mod loaded multiple times?`), u(a)); const c = o => { let e = g.patching.get(o.name); return e || (e = { hooks: [], patches: new Map }, g.patching.set(o.name, e)), e; }, s = (o, t) => (...n) => { var i, a; const c = null === (a = (i = m.errorReporterHooks).apiEndpointEnter) || void 0 === a ? void 0 : a.call(i, o, g.name); g.loaded || e(`Mod ${r} attempted to call SDK function after being unloaded`); const s = t(...n); return null == c || c(), s; }, p = { unload: s("unload", (() => u(g))), hookFunction: s("hookFunction", ((o, t, n) => { "string" == typeof o && o || e(`Mod ${r} failed to patch a function: Expected function name string, got ${typeof o}`); const i = l(o), a = c(i); "number" != typeof t && e(`Mod ${r} failed to hook function '${o}': Expected priority number, got ${typeof t}`), "function" != typeof n && e(`Mod ${r} failed to hook function '${o}': Expected hook function, got ${typeof n}`); const s = { mod: g.name, priority: t, hook: n }; return a.hooks.push(s), d(), () => { const o = a.hooks.indexOf(s); o >= 0 && (a.hooks.splice(o, 1), d()); }; })), patchFunction: s("patchFunction", ((o, t) => { "string" == typeof o && o || e(`Mod ${r} failed to patch a function: Expected function name string, got ${typeof o}`); const i = l(o), a = c(i); n(t) || e(`Mod ${r} failed to patch function '${o}': Expected patches object, got ${typeof t}`); for (const [n, i] of Object.entries(t)) "string" == typeof i ? a.patches.set(n, i) : null === i ? a.patches.delete(n) : e(`Mod ${r} failed to patch function '${o}': Invalid format of patch '${n}'`); d(); })), removePatches: s("removePatches", (o => { "string" == typeof o && o || e(`Mod ${r} failed to patch a function: Expected function name string, got ${typeof o}`); const t = l(o); c(t).patches.clear(), d(); })), callOriginal: s("callOriginal", ((o, t, n) => { "string" == typeof o && o || e(`Mod ${r} failed to call a function: Expected function name string, got ${typeof o}`); const i = l(o); return Array.isArray(t) || e(`Mod ${r} failed to call a function: Expected args array, got ${typeof t}`), i.original.apply(null != n ? n : globalThis, t); })), getOriginalHash: s("getOriginalHash", (o => { "string" == typeof o && o || e(`Mod ${r} failed to get hash: Expected function name string, got ${typeof o}`); return l(o).originalHash; })) }, g = { name: o.name, fullName: o.fullName, version: o.version, repository: o.repository, allowReplace: i, api: p, loaded: !0, patching: new Map }; return f.set(o.name, g), Object.freeze(p); } function h() { const o = []; for (const e of f.values()) o.push({ name: e.name, fullName: e.fullName, version: e.version, repository: e.repository }); return o; } let m; const y = void 0 === window.bcModSdk ? window.bcModSdk = function () { const e = { version: o, apiVersion: 1, registerMod: g, getModsInfo: h, getPatchingInfo: p, errorReporterHooks: Object.seal({ apiEndpointEnter: null, hookEnter: null, hookChainExit: null }) }; return m = e, Object.freeze(e); }() : (n(window.bcModSdk) || e("Failed to init Mod SDK: Name already in use"), 1 !== window.bcModSdk.apiVersion && e(`Failed to init Mod SDK: Different version already loaded ('1.2.0' vs '${window.bcModSdk.version}')`), window.bcModSdk.version !== o && alert(`Mod SDK warning: Loading different but compatible versions ('1.2.0' vs '${window.bcModSdk.version}')\nOne of mods you are using is using an old version of SDK. It will work for now but please inform author to update`), window.bcModSdk); return "undefined" != typeof exports && (Object.defineProperty(exports, "__esModule", { value: !0 }), exports.default = y), y; }();

    const MOD_NAME = "服装拓展Beta";
    const MOD_FULL_NAME = "服装拓展Beta";
    const MOD_VERSION = "0.2.0";
    const MOD_REPOSITORY = "https://github.com/emdsa2/-mod";

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

        args[0] = updateAssetUrl(args[0], /Assets\/Female3DCG\/(BodyUpper|BodyLower)\/(Small|Normal|Large|XLarge)_(Asian|Black|White)\.png/);
        args[0] = updateAssetUrl(args[0], /Assets\/Female3DCG\/(BodyUpper|BodyLower)\/(Kneel|KneelingSpread|LegsClosed|Spread|AllFours|Hogtied|BackBoxTie|BackCuffs|BackElbowTouch|TapedHands|OverTheHead|Yoked)\/(Small|Normal|Large|XLarge)_(Asian|Black|White)\.png/);

        args[0] = updateAssetUrl(args[0], /Assets\/Female3DCG\/(BodyUpper|BodyLower)\/(FlatSmall|FlatMedium)_(Asian|Black|White)\.png/);
        args[0] = updateAssetUrl(args[0], /Assets\/Female3DCG\/(BodyUpper|BodyLower)\/(AllFours|Hogtied|BackBoxTie|BackCuffs|BackElbowTouch|TapedHands|OverTheHead|Yoked)\/(FlatSmall|FlatMedium)_(Asian|Black|White)\.png/);

        args[0] = updateAssetUrl(args[0], /Assets\/Female3DCG\/Pussy\/(Penis|Penis1|Penis2|Penis3)_(Asian|Black|White)\.png/);
        args[0] = updateAssetUrl(args[0], /Assets\/Female3DCG\/Pussy\/Hard\/(Penis|PussyDark1|PussyDark2|PussyDark3|PussyLight1|PussyLight2|PussyLight3)\.png/);

        args[0] = updateAssetUrl(args[0], /Assets\/Female3DCG\/Head\/(Default|NoEars|SmallEars)_(Asian|Black|White)\.png/);

        args[0] = updateAssetUrl(args[0], /Assets\/Female3DCG\/Hands\/Default_(Asian|Black|White)\.png/);
        args[0] = updateAssetUrl(args[0], /Assets\/Female3DCG\/Hands\/(AllFours|TapedHands)\/Default_(Asian|Black|White)\.png/);


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
                args[0] = "https://emdsa2.github.io/-mod/Female3DCG/ItemHandheld/Preview/阿巴阿巴_Luzi.png";
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
                            TapedHands: PoseType.DEFAULT,
                            Yoked: PoseType.DEFAULT, OverTheHead: PoseType.DEFAULT,
                            BackBoxTie: PoseType.DEFAULT,
                            BackElbowTouch: PoseType.DEFAULT,
                            BackCuffs: PoseType.DEFAULT,
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
                            TapedHands: PoseType.DEFAULT,
                            Yoked: PoseType.DEFAULT, OverTheHead: PoseType.DEFAULT,
                            BackBoxTie: PoseType.DEFAULT,
                            BackElbowTouch: PoseType.DEFAULT,
                            BackCuffs: PoseType.DEFAULT,
                        },
                    },
                    {
                        Name: "边缘", Priority: 26,
                        PoseMapping: {
                            TapedHands: PoseType.DEFAULT,
                            Yoked: PoseType.DEFAULT, OverTheHead: PoseType.DEFAULT,
                            BackBoxTie: PoseType.DEFAULT,
                            BackElbowTouch: PoseType.DEFAULT,
                            BackCuffs: PoseType.DEFAULT,
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
                Prerequisite: ["HasVagina"],
                Attribute: ["SuitLower"],
            },
            {
                Name: "鱼鱼尾_Luzi", Random: false, Gender: "F",
                Top: -110, Left: 0, Extended: true,
                OverrideHeight: { Height: 30, Priority: 19, },
                PoseMapping: { Spread: PoseType.DEFAULT, LegsClosed: PoseType.DEFAULT, KneelingSpread: "Kneel", Kneel: "Kneel", },
                Hide: ["BodyLower", "Socks", "SocksLeft", "SocksRight", "RightAnklet", "LeftAnklet", "Pussy"],
                Layer: [
                    { Name: "鱼尾上", Priority: 22 },
                    { Name: "鱼尾下不透明2", Priority: 22, AllowTypes: { w: 1 }, CopyLayerColor: "鱼尾下不透明", PoseMapping: { Spread: "Hide", LegsClosed: "Hide", KneelingSpread: "Kneel", Kneel: "Kneel", }, },
                    { Name: "鱼尾下透明2", Priority: 22, AllowTypes: { w: 0 }, CopyLayerColor: "鱼尾下透明", PoseMapping: { Spread: "Hide", LegsClosed: "Hide", KneelingSpread: "Kneel", Kneel: "Kneel", }, },
                    { Name: "鱼尾下骨架2", Priority: 22, CopyLayerColor: "鱼尾下骨架", PoseMapping: { Spread: "Hide", LegsClosed: "Hide", KneelingSpread: "Kneel", Kneel: "Kneel", }, },
                    { Name: "鱼尾下不透明", Priority: 22, AllowTypes: { w: 1 }, PoseMapping: { Spread: PoseType.DEFAULT, LegsClosed: PoseType.DEFAULT, KneelingSpread: "Hide", Kneel: "Hide", }, },
                    { Name: "鱼尾下透明", Priority: 22, AllowTypes: { w: 0 }, PoseMapping: { Spread: PoseType.DEFAULT, LegsClosed: PoseType.DEFAULT, KneelingSpread: "Hide", Kneel: "Hide", }, },
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
                // SetPose: ["AllFours"],
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
                            Hogtied: PoseType.DEFAULT,
                        },
                    },
                    {
                        Name: "乳胶衣", Priority: 6,
                        AllowTypes: { typed: 1 },
                        PoseMapping:
                        {
                            BackElbowTouch: "BackElbowTouch",
                            Hogtied: PoseType.DEFAULT,
                        },
                    },
                    {
                        Name: "透视紧身衣", Priority: 6,
                        AllowTypes: { typed: 2 },
                        PoseMapping:
                        {
                            BackElbowTouch: "BackElbowTouch",
                            Hogtied: PoseType.DEFAULT,
                        },
                    },
                    {
                        Name: "紧身衣", Priority: 6,
                        AllowTypes: { typed: 3 },
                        PoseMapping:
                        {
                            BackElbowTouch: "BackElbowTouch",
                            Hogtied: PoseType.DEFAULT,
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
                Audio: "DuctTapeRollShort",
                SetPose: ["BackElbowTouch", "LegsClosed"],
                Effect: [E.Block, E.BlockWardrobe, E.Slow],
                Prerequisite: ["HasBreasts"],
                Layer: [
                    { Name: "上", Priority: 24, ParentGroup: "BodyUpper", PoseMapping: { BackElbowTouch: PoseType.DEFAULT, }, },
                    { Name: "下", Priority: 24, ParentGroup: "BodyLower", PoseMapping: { LegsClosed: PoseType.DEFAULT, }, },
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
                SetPose: ["BackElbowTouch", "LegsClosed"],
                Effect: [E.Block, E.BlockWardrobe, E.Slow],
                Prerequisite: ["HasBreasts"],
                SelfUnlock: false,
                Layer: [
                    { Name: "上", Priority: 35, ParentGroup: "BodyUpper", PoseMapping: { BackElbowTouch: PoseType.DEFAULT, }, },
                    { Name: "下", Priority: 0, ParentGroup: "BodyLower", PoseMapping: { LegsClosed: PoseType.DEFAULT, }, },
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
                SetPose: ["BackElbowTouch", "LegsClosed"],
                Effect: [E.Block, E.BlockWardrobe, E.Slow],
                Prerequisite: ["HasBreasts"],
                Layer: [
                    { Name: "上", Priority: 24, ParentGroup: "BodyUpper", PoseMapping: { BackElbowTouch: PoseType.DEFAULT, }, },
                    { Name: "下", Priority: 24, ParentGroup: "BodyLower", PoseMapping: { LegsClosed: PoseType.DEFAULT, }, },
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
                SetPose: ["BackElbowTouch", "LegsClosed"],
                Effect: [E.Block, E.BlockWardrobe, E.Slow],
                Prerequisite: ["HasBreasts"],
                Layer: [
                    { Name: "上", Priority: 24, ParentGroup: "BodyUpper", PoseMapping: { BackElbowTouch: PoseType.DEFAULT, }, },
                    { Name: "下", Priority: 24, ParentGroup: "BodyLower", PoseMapping: { LegsClosed: PoseType.DEFAULT, }, },
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
                        PoseMapping: { AllFours: PoseType.DEFAULT, Hogtied: PoseType.DEFAULT, },
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
                            Hogtied: PoseType.DEFAULT,
                        },
                    },
                    {
                        Name: "乳胶衣", Priority: 6,
                        AllowTypes: { typed: 1 },
                        PoseMapping:
                        {
                            BackElbowTouch: "BackElbowTouch",
                            Hogtied: PoseType.DEFAULT,
                        },
                    },
                    {
                        Name: "透视紧身衣", Priority: 6,
                        AllowTypes: { typed: 2 },
                        PoseMapping:
                        {
                            BackElbowTouch: "BackElbowTouch",
                            Hogtied: PoseType.DEFAULT,
                        },
                    },
                    {
                        Name: "紧身衣", Priority: 6,
                        AllowTypes: { typed: 3 },
                        PoseMapping:
                        {
                            BackElbowTouch: "BackElbowTouch",
                            Hogtied: PoseType.DEFAULT,
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
                Audio: "DuctTapeRollShort",
                SetPose: ["BackElbowTouch", "LegsClosed"],
                Effect: [E.Block, E.BlockWardrobe, E.Slow],
                Prerequisite: ["HasBreasts"],
                Layer: [
                    { Name: "上", Priority: 24, ParentGroup: "BodyUpper", PoseMapping: { BackElbowTouch: PoseType.DEFAULT, }, },
                    { Name: "下", Priority: 24, ParentGroup: "BodyLower", PoseMapping: { LegsClosed: PoseType.DEFAULT, }, },
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
                SetPose: ["BackElbowTouch", "LegsClosed"],
                Effect: [E.Block, E.BlockWardrobe, E.Slow],
                Prerequisite: ["HasBreasts"],
                SelfUnlock: false,
                Layer: [
                    { Name: "上", Priority: 35, ParentGroup: "BodyUpper", PoseMapping: { BackElbowTouch: PoseType.DEFAULT, }, },
                    { Name: "下", Priority: 0, ParentGroup: "BodyLower", PoseMapping: { LegsClosed: PoseType.DEFAULT, }, },
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
                SetPose: ["BackElbowTouch", "LegsClosed"],
                Effect: [E.Block, E.BlockWardrobe, E.Slow],
                Prerequisite: ["HasBreasts"],
                Layer: [
                    { Name: "上", Priority: 24, ParentGroup: "BodyUpper", PoseMapping: { BackElbowTouch: PoseType.DEFAULT, }, },
                    { Name: "下", Priority: 24, ParentGroup: "BodyLower", PoseMapping: { LegsClosed: PoseType.DEFAULT, }, },
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
                SetPose: ["BackElbowTouch", "LegsClosed"],
                Effect: [E.Block, E.BlockWardrobe, E.Slow],
                Prerequisite: ["HasBreasts"],
                Layer: [
                    { Name: "上", Priority: 24, ParentGroup: "BodyUpper", PoseMapping: { BackElbowTouch: PoseType.DEFAULT, }, },
                    { Name: "下", Priority: 24, ParentGroup: "BodyLower", PoseMapping: { LegsClosed: PoseType.DEFAULT, }, },
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
                        PoseMapping: { AllFours: PoseType.DEFAULT, Hogtied: PoseType.DEFAULT, },
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
            {
                Name: "乳胶带床_Luzi", Random: false,
                AllowLock: true,
                Top: 0, Left: 0,
                Effect: [E.Freeze, E.BlockWardrobe, E.Block, E.Mounted, E.MapImmobile, E.OnBed],
                SetPose: ["BackElbowTouch", "LegsClosed"],
                DefaultColor: ["Default", "Default", "Default", "Default", "Default", "Default", "Default", "Default", "Default", "Default", "#000000", "Default", "Default", "Default", "Default", "Default"],
                Layer: [
                    {
                        Name: "外壳盖子关闭", Priority: 60, AllowTypes: { g: 2 },
                        Alpha: [
                            {
                                Group: ["HairFront", "HairBack", "Bracelet", "Cloth", "ClothAccessory", "ClothLower", "Corset", "Fluids", "Garters", "Gloves", "HairAccessory", "Hat", "ItemArms", "ItemBrest", "ItemButt", "ItemHandheld", "ItemHead", "ItemHood", "ItemLegs", "ItemMisc", "ItemNeck", "ItemNose", "ItemPelvis", "ItemTorso", "LeftAnKlet", "LeftHand", "Mask", "Mouth", "Nipples", "Panties", "RightAnklet", "RightHand", "Shoes", "Socks", "SocksLeft", "SocksRight", "Suit", "SuitLower", "TailStraps", "Wings", "Bra", "HairAccessory1", "HairAccessory2", "HairAccessory3", "Cloth_笨笨笨蛋Luzi2", "Cloth_笨笨蛋Luzi", "ClothLower_笨笨笨蛋Luzi2", "ClothLower_笨笨蛋Luzi",],
                                Masks: [
                                    [0, -100, 500, 150],//上
                                    [0, 695, 500, 120], //下
                                    [0, 0, 160, 1000], //左
                                    [340, 0, 135, 1000],//右
                                ],
                            },
                        ],
                    },
                    {
                        Name: "外壳", Priority: 1,
                    },
                    {
                        Name: "外壳盖子打开", Priority: 1, AllowTypes: { g: 1 },
                    },
                    {
                        Name: "床垫", Priority: 1,
                    },
                    {
                        Name: "床带上", Priority: 1,
                        ParentGroup: "BodyUpper",
                    },
                    {
                        Name: "床带下", Priority: 1,
                        ParentGroup: "BodyLower",
                    },
                    {
                        Name: "床环上", Priority: 1,
                        ParentGroup: "BodyUpper",
                    },
                    {
                        Name: "床环下", Priority: 1,
                        ParentGroup: "BodyLower",
                    },
                    {
                        Name: "内衬", Priority: 24,
                    },
                    {
                        Name: "圆环", Priority: 25,
                    },
                    {
                        Name: "绳子", Priority: 25,
                    },
                    {
                        Name: "拉链", Priority: 24,
                    },
                    {
                        Name: "拘束带上", Priority: 53,
                        ParentGroup: "BodyUpper",
                    },
                    {
                        Name: "拘束带下", Priority: 53,
                        ParentGroup: "BodyLower",
                    },
                    {
                        Name: "乳胶上", Priority: 23,
                        ParentGroup: "BodyUpper",
                    },
                    {
                        Name: "乳胶下", Priority: 23,
                        ParentGroup: "BodyLower",
                    },
                ],
            },
            {
                Name: "开腿展示架_Luzi", Random: false,
                Top: 0, Left: 0,
                Difficulty: 8,
                AllowLock: true,
                AllowTighten: true,
                DrawLocks: false,
                RemoveTime: 5,
                Time: 10,
                Extended: true,
                Effect: [E.Freeze, E.BlockWardrobe, E.Block, E.Mounted, E.MapImmobile, E.OnBed, E.OneWayEnclose],
                Hide: ["ItemHandheld", "BodyLower", "ItemLegs", "ItemFeet", "ItemBoots", "Shoes", "Garters", "LeftAnklet", "RightAnklet", "SocksLeft", "SocksRight", "Socks", "SuitLower"],
                Layer: [
                    {
                        Name: "框架抬手", Priority: 2, AllowTypes: { o: 1 },
                    },
                    {
                        Name: "框架", Priority: 2, AllowTypes: { o: 0 },
                    },
                    {
                        Name: "下半身开腿", Priority: 7,
                        ParentGroup: "BodyLower",
                        InheritColor: "BodyLower",
                        HideColoring: true,
                        ColorSuffix: { HEX_COLOR: "White" },
                    },
                    {
                        Name: "手固定", Priority: 50, AllowTypes: { o: 1 },
                        ParentGroup: "BodyUpper",
                    },
                    {
                        Name: "腿固定", Priority: 50,
                        ParentGroup: "BodyLower",
                    },
                    {
                        Name: "身体固定", Priority: 50,
                        ParentGroup: "BodyUpper",
                    },
                    {
                        Name: "嘴巴固定", Priority: 50, AllowTypes: { g: 1 },
                    },
                    {
                        Name: "脖子固定", Priority: 50,
                    },
                    {
                        Name: "下体棒子", Priority: 13, AllowTypes: { v: 1 },
                    },
                    {
                        Name: "链条", Priority: 1, Top: -760, Left: 0,
                    },
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
                Difficulty: 8,
                AllowLock: true,
                AllowTighten: true,
                DrawLocks: false,
                RemoveTime: 5,
                Time: 10,
                Effect: [E.Slow],
                Hide: ["ItemHandheld", "Hands", "Bracelet", "LeftHand", "RightHand", "SocksRight", "SocksLeft", "BodyLower", "BodyUpper",],
                Extended: true,
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
                            [PoseType.DEFAULT]: "Hide",
                            BackBoxTie: "Hide",
                            BackCuffs: "Hide",
                            BackElbowTouch: "Hide",
                            OverTheHead: "Hide",
                            Yoked: "Hide",
                            AllFours: "AllFours",
                            Hogtied: "Hogtied",
                        },
                    },

                    {
                        Name: "透视紧身衣下半身", Priority: 13, AllowTypes: { s: 1 },
                        Top: 462, Left: 0,
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
                        Name: "透视紧身衣上半身", Priority: 13, AllowTypes: { s: 1 },
                        Top: 0, Left: 0,
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
                        Name: "透视紧身衣全身", Priority: 13, AllowTypes: { s: 1 },
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
                        Name: "脚链", Priority: 31, AllowTypes: { ll: [1, 2, 3, 4, 5] },
                        Top: 460, Left: 0,
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
                        Name: "手链", Priority: 31, AllowTypes: { l: [1, 2, 3] },
                        Top: 0, Left: 0,
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
                    {
                        Name: "手链链子", Priority: 8, AllowTypes: { l: 2 },
                        Top: -430, Left: 0,
                    },
                    {
                        Name: "脚链链子", Priority: 8, AllowTypes: { ll: 2 },
                        Top: -430, Left: 0,
                    },
                    {
                        Name: "脚链链子反", Priority: 8, AllowTypes: { ll: [3, 4] },
                        Top: 530, Left: 0,
                    },

                    {
                        Name: "脚链拘束", Priority: 30, AllowTypes: { ll: [5] },
                        Top: 460, Left: 0,
                    },
                    {
                        Name: "吊顶链", Priority: 0, AllowTypes: { lll: [2] },
                        Top: -400, Left: -10,
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
                AllowLock: true,
                Difficulty: 25,
                Hide: ["Hands", "BodyLower", "BodyUpper",],
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
                            [PoseType.DEFAULT]: "Hide",
                            BackBoxTie: "Hide",
                            BackCuffs: "Hide",
                            BackElbowTouch: "Hide",
                            OverTheHead: "Hide",
                            Yoked: "Hide",
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
            {
                Name: "蜘蛛_Luzi", Random: false, Gender: "F",
                Top: 0, Left: -156,
                Difficulty: 25,
                Hide: ["Pussy", "BodyLower"],
                // Extended: true,
                Layer: [
                    {
                        Name: "肚子衔接", Priority: 16,
                        ParentGroup: "BodyLower",
                    },
                    {
                        Name: "肚子", Priority: 6,
                        ParentGroup: "BodyLower",
                    },
                    {
                        Name: "爪子前", Priority: 26,
                        ParentGroup: "BodyLower",
                    },
                    {
                        Name: "爪子中", Priority: 5,
                        ParentGroup: "BodyLower",
                    },
                    {
                        Name: "爪子后", Priority: 4,
                        ParentGroup: "BodyLower",
                    },


                ],
                OverrideHeight: {
                    Height: -250,
                    Priority: 21,
                    HeightRatioProportion: 0,
                },
            },
            {
                Name: "后背_Luzi", Random: false, Gender: "F",
                Top: 0, Left: 0,
                SetPose: ["OverTheHead", "Yoked", "BaseLower", "LegsClosed"],
                Hide: ["Hands", "BodyLower", "BodyUpper", "Pussy", "Nipples", "ItemNipples", "ItemNipplesPiercings", 'Cloth', 'ClothAccessory', 'Necklace', 'Suit', 'ClothLower', 'SuitLower', 'Bra', 'Corset', 'Panties', 'Socks', 'SocksRight', 'SocksLeft', 'RightAnklet', 'LeftAnklet', 'Garters', 'Shoes', 'TailStraps', 'Wings', 'BodyMarkings', 'Cloth_笨笨蛋Luzi', 'ClothAccessory_笨笨蛋Luzi', 'Necklace_笨笨蛋Luzi', 'ClothLower_笨笨蛋Luzi', 'Bra_笨笨蛋Luzi', 'Panties_笨笨蛋Luzi', 'Shoes_笨笨蛋Luzi', 'Hat_笨笨蛋Luzi', 'HairAccessory3_笨笨蛋Luzi', 'Gloves_笨笨蛋Luzi', 'Mask_笨笨蛋Luzi', 'Wings_笨笨蛋Luzi', 'Cloth_笨笨笨蛋Luzi2', 'ClothLower_笨笨笨蛋Luzi2',],
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
                            Kneel: "Hide",
                            KneelingSpread: "Hide",
                            LegsClosed: "LegsClosed",
                            Spread: "Hide",
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
                            BackBoxTie: "OverTheHead",
                            BackCuffs: "OverTheHead",
                            BackElbowTouch: "OverTheHead",
                            OverTheHead: "OverTheHead",
                            Yoked: "Yoked",
                            Hogtied: "Hide",
                            AllFours: "Hide",
                        },
                    },
                    {
                        Name: "纸袋", Priority: 70, AllowTypes: { typed: 0 },
                        Top: 0, Left: 0,
                    },
                    {
                        Name: "纸", Priority: 70, AllowTypes: { typed: 0 },
                        Top: 0, Left: 0,
                    },
                    {
                        Name: "胶带", Priority: 70, AllowTypes: { typed: 0 },
                        Top: 0, Left: 0,
                    },
                    {
                        Name: "麻袋头罩", Priority: 70, AllowTypes: { typed: 1 },
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
            {
                Name: "缩小(地)_Luzi", Visible: false, Random: false,
            },
            {
                Name: "缩小(空)_Luzi", Visible: false, Random: false,
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
                Options: [{}, { Property: { Difficulty: 52, Effect: ["BlindHeavy", "GagLight", "Freeze", "Enclose",], }, },],
            },
            {
                Name: "腿部拘束", Key: "t", DrawImages: false,
                Options: [{}, { Property: { Difficulty: 22, SetPose: ["LegsClosed"], Effect: ["Freeze", "Mounted"], }, },],
            },
            {
                Name: "手臂拘束", Key: "s", DrawImages: false,
                Options: [{}, { Property: { Difficulty: 18, SetPose: ["BackElbowTouch"], Effect: ["Freeze", "Block", "Mounted"], OverrideHeight: { Height: 0, Priority: 60 }, }, },],
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
                DrawImages: false,
                Options: [{}, {},],
            },
            {
                Name: "鱼尾", Key: "w",
                DrawImages: false,
                Options: [{}, {},],
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
                Options: [
                    {
                        Property: { Intensity: -1, Effect: ["Egged",], }
                    },
                    {
                        Property: { Intensity: 0, Effect: ["Egged", "Vibrating",], }
                    },
                    {
                        Property: { Intensity: 1, Effect: ["Egged", "Vibrating",], }
                    },
                    {
                        Property: { Intensity: 3, Effect: ["Egged", "Vibrating",], }
                    },
                    {
                        Property: { Intensity: 3, Effect: ["Egged", "Vibrating",], }
                    },
                ],
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
        DrawImages: false,
        Options: [
            { Name: "熊熊", },
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
        DrawImages: false,
        Options: [
            { Name: "戴上头套", },
            { Name: "摘掉头套", },
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
        DrawImages: false,
        Options: [
            { Name: "打开盖子", },
            { Name: "合上盖子", },
            { Name: "打开挡板", },
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
        DrawImages: false,
        Options: [
            { Name: "无照片", },
            { Name: "有照片", },
        ],
        BaselineProperty: { Opacity: 1, },
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
                    { Property: { Block: ['ItemVulva', 'ItemVulvaPiercings', 'ItemButt'], } },
                    {},
                    {
                        HasSubscreen: true,
                        Prerequisite: ["AccessVulva", "VulvaEmpty"],
                        Property: {
                            Effect: [E.VulvaShaft,],
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
                    {},
                    {},
                ],
            },
            {
                Name: "手套开关",
                DrawImages: false,
                Key: "h",
                Options: [
                    {},
                    {},
                    {
                        Property: { Difficulty: 13, SetPose: ["BackElbowTouch"], Effect: ["Block"], },
                    },
                ],
            },
            {
                Name: "嘴套开关",
                DrawImages: false,
                Key: "m",
                Options: [
                    {},
                    {},
                ],
            },
            {
                Name: "脚套开关",
                DrawImages: false,
                Key: "f",
                Options: [
                    {},
                    {},
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
                    { Property: { Block: ['ItemVulva', 'ItemVulvaPiercings', 'ItemButt'], } },
                    {},
                    {
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
                    {},
                    {},
                ],
            },
            {
                Name: "手套开关",
                DrawImages: false,
                Key: "h",
                Options: [
                    {},
                    {},
                    {
                        Property: { Difficulty: 13, SetPose: ["BackElbowTouch"], Effect: ["Block"], },
                    },
                ],
            },
            {
                Name: "嘴套开关",
                DrawImages: false,
                Key: "m",
                Options: [
                    {},
                    {},
                ],
            },
            {
                Name: "脚套开关",
                DrawImages: false,
                Key: "f",
                Options: [
                    {},
                    {},
                ],
            },
        ],
    };
    AssetFemale3DCGExtended.ItemAddon.隐形药水_Luzi = {
        Archetype: ExtendedArchetype.MODULAR,
        ChangeWhenLocked: false,
        Modules: [
            {
                Name: "紧身衣",
                DrawImages: false,
                Key: "s",
                Options: [
                    {
                        Property: { Difficulty: 8, Effect: [E.Block], },
                    },
                    {
                        Property: { Difficulty: 8, Effect: [E.Block], },
                    },
                ],
            },
            {
                Name: "铐子手",
                DrawImages: false,
                Key: "l",
                Options: [
                    {},
                    {
                        Property: { Difficulty: 8, Effect: [E.CuffedArms], },
                    },
                    {
                        Property: { Difficulty: 8, Effect: [E.CuffedArms, E.Mounted], SetPose: ["OverTheHead"], },
                        Expression: [{ Group: "Blush", Name: "Medium", Timer: 10 }],
                    },
                    {
                        Property: { Difficulty: 8, Effect: [E.CuffedArms, E.Mounted], SetPose: ["BackElbowTouch"], },
                        Expression: [{ Group: "Blush", Name: "Medium", Timer: 10 }],
                    },
                ],
            },
            {
                Name: "铐子腿",
                DrawImages: false,
                Key: "ll",
                Options: [
                    {},
                    {
                        Property: { Difficulty: 8, Effect: [E.CuffedFeet], },
                    },
                    {
                        Property: { Difficulty: 8, Effect: [E.CuffedFeet, E.Mounted], SetPose: ["KneelingSpread"], },
                        Expression: [{ Group: "Blush", Name: "Medium", Timer: 10 }],
                    },
                    {
                        Property: { Difficulty: 8, Effect: [E.CuffedFeet, E.Mounted], SetPose: ["KneelingSpread"], },
                        Expression: [{ Group: "Blush", Name: "Medium", Timer: 10 }],
                    },
                    {
                        Property: { Difficulty: 8, Effect: [E.CuffedFeet, E.Mounted], SetPose: ["Suspension", "KneelingSpread"], },
                        Expression: [{ Group: "Blush", Name: "Medium", Timer: 10 }],
                    },
                    {
                        Property: { Difficulty: 8, Effect: [E.CuffedFeet, E.Mounted], SetPose: ["Kneel"], },
                        Expression: [{ Group: "Blush", Name: "Medium", Timer: 10 }],
                    },
                ],
            },
            {
                Name: "自定义高度",
                DrawImages: false,
                Key: "lll",
                Options: [
                    {},
                    {
                        HasSubscreen: true,
                        ArchetypeConfig: {
                            Archetype: ExtendedArchetype.VARIABLEHEIGHT,
                            MaxHeight: 0,
                            MinHeight: -250,
                            DrawData: {
                                elementData: [{ position: [1140, 650, 100, 500], icon: "rope" }],
                            },
                            DialogPrefix: {
                                Chat: "SuspensionChange",
                            },
                        },
                    },
                    {
                        HasSubscreen: true,
                        ArchetypeConfig: {
                            Archetype: ExtendedArchetype.VARIABLEHEIGHT,
                            MaxHeight: 0,
                            MinHeight: -250,
                            DrawData: {
                                elementData: [{ position: [1140, 650, 100, 500], icon: "rope" }],
                            },
                            DialogPrefix: {
                                Chat: "SuspensionChange",
                            },
                        },
                    },
                ],
            },


        ],
    };
    AssetFemale3DCGExtended.ItemDevices.乳胶带床_Luzi = {
        Archetype: ExtendedArchetype.MODULAR,
        ChangeWhenLocked: false,
        Modules: [
            {
                Name: "盖子",
                DrawImages: false,
                Key: "g",
                Options: [
                    { Name: "无盖子", },
                    { Name: "有盖子", },
                    { Name: "关上盖子", },
                ],

            },
        ],
    };
    AssetFemale3DCGExtended.ItemDevices.开腿展示架_Luzi = {
        Archetype: ExtendedArchetype.MODULAR,
        ChangeWhenLocked: false,
        Modules: [
            {
                Name: "姿势",
                DrawImages: false,
                Key: "o",
                Options: [
                    { Name: "手背后", Property: { SetPose: ["BackElbowTouch", "KneelingSpread"], }, },
                    { Name: "手抬起", Property: { SetPose: ["OverTheHead", "KneelingSpread"], }, },
                ],
            },
            {
                Name: "嘴巴固定",
                DrawImages: false,
                Key: "g",
                Options: [
                    { Name: "无", },
                    { Name: "有", },
                ],
            },
            {
                Name: "下体棒子",
                DrawImages: false,
                Key: "v",
                Options: [
                    { Name: "无", },
                    { Name: "有", },
                ],
            },
            {
                Name: "自定义高度",
                DrawImages: false,
                Key: "d",
                Options: [
                    {},
                    {
                        HasSubscreen: true,
                        ArchetypeConfig: {
                            Archetype: ExtendedArchetype.VARIABLEHEIGHT,
                            MaxHeight: 0,
                            MinHeight: -250,
                            DrawData: {
                                elementData: [{ position: [1140, 650, 100, 500], icon: "rope" }],
                            },
                            DialogPrefix: {
                                Chat: "SuspensionChange",
                            },
                        },
                    },
                ],
            },
        ],
    };
    AssetFemale3DCGExtended.ItemAddon.后背_Luzi = {
        Archetype: ExtendedArchetype.TYPED,
        DrawImages: false,
        Options: [
            { Name: "纸袋", },
            { Name: "麻袋头罩", Property: { Block: ["ItemEars", "ItemMouth", "ItemMouth2", "ItemMouth3", "ItemHead", "ItemNose",], Hide: ["HairFront", "HairBack", "Glasses", "ItemMouth", "ItemMouth2", "ItemMouth3", "HairAccessory1", "HairAccessory2", "HairAccessory3", "Hat", "Mask", "ItemEars", "ItemHead",], }, },
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
        let assetGroup = AssetFemale3DCG.find(asset => asset.Group === assetgroupName);
        let asset = assetGroup.Asset.find(asset => asset.Name === assetName);
        let G = AssetGroupMap.get(assetgroupName);
        AssetAdd(G, asset, AssetFemale3DCGExtended);
    }

    function addExtraOutfitsToAssets() {
        // 需要执行相同操作的项的数组
        const itemsToCopy = ["Cloth", "ClothAccessory", "ClothLower", "Panties", "Necklace", "Bra", "Hat", "Shoes", "HairAccessory3", "Mask", "Wings", "Gloves"];

        // 循环遍历每个需要复制的项
        itemsToCopy.forEach(itemName => {
            // 找到对应项的索引位置
            let itemIndex = AssetFemale3DCG.findIndex(A => A.Group === itemName);
            if (itemIndex !== -1) { // 如果找到了对应项
                // 复制对应项
                let itemCopy = Object.assign({}, AssetFemale3DCG[itemIndex]); // 假设 AssetFemale3DCG 里的项是对象，如果是数组则使用 slice() 方法
                itemCopy.Group = itemName + "_笨笨蛋Luzi"; // 修改复制的项的名称为原名称加上 "2"

                // 获取复制项的 Asset 数组
                let copiedAssets = itemCopy.Asset;
                copiedAssets.forEach(asset => {
                    // 给每个对象都加上 Random: false 属性（如果不存在的话）
                    asset.Random = false;
                });
                AssetFemale3DCG.splice(itemIndex + 1, 0, itemCopy); // 在原索引位置之后插入复制的项
            }
        });

        // 遍历 itemsToCopy 中的每一项
        itemsToCopy.forEach(itemName => {
            // 找到对应项的对象
            const item = AssetFemale3DCGExtended[itemName];
            if (item) { // 如果找到了对应项
                // 复制对应项
                const itemCopy = { ...item };
                // 修改复制的项的名称为原名称加上 "2"
                const newItemName = itemName + "_笨笨蛋Luzi";
                itemCopy.Group = newItemName;

                // 将修改后的项添加到原数组中
                AssetFemale3DCGExtended[newItemName] = itemCopy;
            }
        });

        // 提取 AssetFemale3DCG 中 Group 属性包含 '_笨笨蛋Luzi' 的对象存入新数组
        const filteredAssetFemale3DCG = AssetFemale3DCG.filter(asset => asset.Group.includes('_笨笨蛋Luzi'));
        // 输出结果
        AssetLoad(filteredAssetFemale3DCG, "Female3DCG", AssetFemale3DCGExtended);
    }

    function addExtraOutfitsToAssets2() {
        // 需要执行相同操作的项的数组
        const itemsToCopy = ["Cloth", "ClothLower"];

        // 循环遍历每个需要复制的项
        itemsToCopy.forEach(itemName => {
            // 找到对应项的索引位置
            let itemIndex = AssetFemale3DCG.findIndex(A => A.Group === itemName);
            if (itemIndex !== -1) { // 如果找到了对应项
                // 复制对应项
                let itemCopy = Object.assign({}, AssetFemale3DCG[itemIndex]); // 假设 AssetFemale3DCG 里的项是对象，如果是数组则使用 slice() 方法
                itemCopy.Group = itemName + "_笨笨笨蛋Luzi2"; // 修改复制的项的名称为原名称加上 "2"

                // 获取复制项的 Asset 数组
                let copiedAssets = itemCopy.Asset;
                copiedAssets.forEach(asset => {
                    // 给每个对象都加上 Random: false 属性（如果不存在的话）
                    asset.Random = false;
                });
                AssetFemale3DCG.splice(itemIndex + 1, 0, itemCopy); // 在原索引位置之后插入复制的项
            }
        });

        // 遍历 itemsToCopy 中的每一项
        itemsToCopy.forEach(itemName => {
            // 找到对应项的对象
            const item = AssetFemale3DCGExtended[itemName];
            if (item) { // 如果找到了对应项
                // 复制对应项
                const itemCopy = { ...item };
                // 修改复制的项的名称为原名称加上 "2"
                const newItemName = itemName + "_笨笨笨蛋Luzi2";
                itemCopy.Group = newItemName;

                // 将修改后的项添加到原数组中
                AssetFemale3DCGExtended[newItemName] = itemCopy;
            }
        });

        // 提取 AssetFemale3DCG 中 Group 属性包含 '_笨笨蛋Luzi' 的对象存入新数组
        const filteredAssetFemale3DCG = AssetFemale3DCG.filter(asset => asset.Group.includes('_笨笨笨蛋Luzi2'));
        // 输出结果
        AssetLoad(filteredAssetFemale3DCG, "Female3DCG", AssetFemale3DCGExtended);
    }

    function addExtraExpressionsToAssets() {
        var Emoticon内容 = ["车车_Luzi", "衣架_Luzi", "电话_Luzi", "灯泡_Luzi", "警告_Luzi", "心_Luzi", "画画_Luzi", "符号_Luzi", "视频_Luzi", "洗澡_Luzi",];
        var GroupEmoticon = AssetFemale3DCG.filter(A => A.Group === "Emoticon");
        GroupEmoticon[0].AllowExpression = [...GroupEmoticon[0].AllowExpression, ...Emoticon内容];

        AssetGroup.forEach(A => {
            if (A.Name === "Emoticon") {
                var Emoticon内容 = ["车车_Luzi", "衣架_Luzi", "电话_Luzi", "灯泡_Luzi", "警告_Luzi", "心_Luzi", "画画_Luzi", "符号_Luzi", "视频_Luzi", "洗澡_Luzi",];
                A.AllowExpression = [...A.AllowExpression, ...Emoticon内容];
                // console.log(A.AllowExpression)
            }
        });
    }

    let isAssetAdded = false;
    mod.hookFunction('LoginResponse', 0, (args, next) => {
        if (!isAssetAdded) {
            AssetFemale3DCG.push(addAssetGroup.Liquid2_Luzi[0]);
            AssetFemale3DCG.push(addAssetGroup.BodyMarkings2_Luzi[0]);
            AssetGroupAdd("Female3DCG", addAssetGroup.Liquid2_Luzi[0]);
            AssetGroupAdd("Female3DCG", addAssetGroup.BodyMarkings2_Luzi[0]);

            addExtraOutfitsToAssets();
            addExtraOutfitsToAssets2();

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
                    ['Cloth_笨笨蛋Luzi', '🍔衣服2'],
                    ['ClothLower_笨笨蛋Luzi', '🍔下装2'],
                    ['Cloth_笨笨笨蛋Luzi2', '🍔衣服3'],
                    ['ClothLower_笨笨笨蛋Luzi2', '🍔下装3'],
                    ['Panties_笨笨蛋Luzi', '🍔内裤2'],
                    ['ClothAccessory_笨笨蛋Luzi', '🍔服装配饰2'],
                    ['Necklace_笨笨蛋Luzi', '🍔项链2'],
                    ['Bra_笨笨蛋Luzi', '🍔胸罩2'],
                    ['Shoes_笨笨蛋Luzi', '🍔鞋子2'],
                    ['Hat_笨笨蛋Luzi', '🍔帽子2'],
                    ['HairAccessory3_笨笨蛋Luzi', '🍔发饰2'],
                    ['Gloves_笨笨蛋Luzi', '🍔手套2'],
                    ['Mask_笨笨蛋Luzi', '🍔面具2'],
                    ['Wings_笨笨蛋Luzi', '🍔翅膀2'],
                    ['MISSING ASSETGROUP DESCRIPTION: Liquid2_Luzi', '🍔液体2_Luzi'],
                    ['MISSING ASSETGROUP DESCRIPTION: BodyMarkings2_Luzi', '🍔身体涂画2'],
                ]);
                const descriptionMap2 = new Map([
                    ['Cloth_笨笨蛋Luzi', '🍔Cloth2'],
                    ['ClothLower_笨笨蛋Luzi', '🍔Bottom2'],
                    ['Cloth_笨笨笨蛋Luzi2', '🍔Cloth3'],
                    ['ClothLower_笨笨笨蛋Luzi2', '🍔Bottom3'],
                    ['Panties_笨笨蛋Luzi', '🍔Panties2'],
                    ['ClothAccessory_笨笨蛋Luzi', '🍔Cloth Accessory2'],
                    ['Necklace_笨笨蛋Luzi', '🍔Necklace2'],
                    ['Bra_笨笨蛋Luzi', '🍔Bra2'],
                    ['Shoes_笨笨蛋Luzi', '🍔Shoes2'],
                    ['Hat_笨笨蛋Luzi', '🍔Hat2'],
                    ['HairAccessory3_笨笨蛋Luzi', '🍔Hair Accessory2'],
                    ['Gloves_笨笨蛋Luzi', '🍔Gloves2'],
                    ['Mask_笨笨蛋Luzi', '🍔Mask2'],
                    ['Wings_笨笨蛋Luzi', '🍔Wings2'],
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
                        "乳胶带床": "Latex belt bed",
                        "开腿展示架": "Leg Spread Display Stand",
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
                }
            }


            // 用于替换🍔组内的服装名字 ============================
            const nameMap = {
                'Cloth': 'Cloth_笨笨蛋Luzi',
                'ClothLower': 'ClothLower_笨笨蛋Luzi',
                'Panties': 'Panties_笨笨蛋Luzi',
                'ClothAccessory': 'ClothAccessory_笨笨蛋Luzi',
                'Necklace': 'Necklace_笨笨蛋Luzi',
                'Bra': 'Bra_笨笨蛋Luzi',
                'Shoes': 'Shoes_笨笨蛋Luzi',
                'Hat': 'Hat_笨笨蛋Luzi',
                'HairAccessory3': 'HairAccessory3_笨笨蛋Luzi',
                'Gloves': 'Gloves_笨笨蛋Luzi',
                'Mask': 'Mask_笨笨蛋Luzi',
                'Wings': 'Wings_笨笨蛋Luzi'
            };

            function replaceDescription(baseName, luZiName) {
                const baseAssets = AssetGroup.find(item => item.Name === baseName)?.Asset;
                const luZiAssets = AssetGroup.find(item => item.Name === luZiName)?.Asset;

                if (baseAssets && luZiAssets) {
                    baseAssets.forEach(baseAsset => {
                        const matchingAsset = luZiAssets.find(asset => asset.Name === baseAsset.Name);
                        if (matchingAsset) {
                            matchingAsset.Description = baseAsset.Description;
                        }
                    });
                }
            }

            for (const baseName in nameMap) {
                replaceDescription(baseName, nameMap[baseName]);
            }


            const nameMap2 = {
                'Cloth': 'Cloth_笨笨笨蛋Luzi2',
                'ClothLower': 'ClothLower_笨笨笨蛋Luzi2',
            };

            function replaceDescription2(baseName, luZiName) {
                const baseAssets = AssetGroup.find(item => item.Name === baseName)?.Asset;
                const luZiAssets = AssetGroup.find(item => item.Name === luZiName)?.Asset;

                if (baseAssets && luZiAssets) {
                    baseAssets.forEach(baseAsset => {
                        const matchingAsset = luZiAssets.find(asset => asset.Name === baseAsset.Name);
                        if (matchingAsset) {
                            matchingAsset.Description = baseAsset.Description;
                        }
                    });
                }
            }

            for (const baseName in nameMap2) {
                replaceDescription2(baseName, nameMap2[baseName]);
            }

            // ========================================================

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

                ItemAddon隐形药水_LuziSelectBase: '选择隐形药水配置',
                ItemAddon隐形药水_LuziSelect紧身衣: '选择紧身衣',
                ItemAddon隐形药水_LuziModule紧身衣: '紧身衣',
                ItemAddon隐形药水_LuziOptions0: '无',
                ItemAddon隐形药水_LuziOptions1: '透视紧身衣',
                ItemAddon隐形药水_LuziSelect铐子手: '选择手部铐子',
                ItemAddon隐形药水_LuziModule铐子手: '手部铐子',
                ItemAddon隐形药水_LuziOptionl0: '无',
                ItemAddon隐形药水_LuziOptionl1: '添加铁拷',
                ItemAddon隐形药水_LuziOptionl2: '添加铁链(向上吊起来)',
                ItemAddon隐形药水_LuziOptionl3: '添加铁链(手向后铐起来)',

                ItemAddon隐形药水_LuziSelect铐子腿: '选择腿部铐子',
                ItemAddon隐形药水_LuziModule铐子腿: '腿部铐子',
                ItemAddon隐形药水_LuziOptionll0: '无',
                ItemAddon隐形药水_LuziOptionll1: '添加铁拷',
                ItemAddon隐形药水_LuziOptionll2: '添加铁链(朝上)',
                ItemAddon隐形药水_LuziOptionll3: '添加铁链(朝下)',
                ItemAddon隐形药水_LuziOptionll4: '添加铁链(朝下反向)',
                ItemAddon隐形药水_LuziOptionll5: '添加铁链(合并)',

                ItemAddon隐形药水_LuziSelect自定义高度: '设置高度',
                ItemAddon隐形药水_LuziModule自定义高度: '调整高度',
                ItemAddon隐形药水_LuziOptionlll0: '无',
                ItemAddon隐形药水_LuziOptionlll1: '自定义高度',
                ItemAddon隐形药水_LuziOptionlll2: '自定义高度(吊顶链)',

                ItemDevices乳胶带床_LuziSelect盖子: '选择盖子',
                ItemDevices乳胶带床_LuziModule盖子: '盖子',
                ItemDevices乳胶带床_LuziOptiong0: '无',
                ItemDevices乳胶带床_LuziOptiong1: '添加盖子',
                ItemDevices乳胶带床_LuziOptiong2: '盖上盖子',


                ItemDevices开腿展示架_LuziSelectBase: '选择开腿展示架配置',

                ItemDevices开腿展示架_LuziSelect姿势: '选择姿势',
                ItemDevices开腿展示架_LuziModule姿势: '姿势',
                ItemDevices开腿展示架_LuziOptiono0: '背后',
                ItemDevices开腿展示架_LuziOptiono1: '抬手',

                ItemDevices开腿展示架_LuziSelect嘴巴固定: '选择嘴部拘束',
                ItemDevices开腿展示架_LuziModule嘴巴固定: '嘴部拘束',
                ItemDevices开腿展示架_LuziOptiong0: '无',
                ItemDevices开腿展示架_LuziOptiong1: '添加嘴部拘束',

                ItemDevices开腿展示架_LuziSelect下体棒子: '选择阴部道具',
                ItemDevices开腿展示架_LuziModule下体棒子: '阴部道具',
                ItemDevices开腿展示架_LuziOptionv0: '无',
                ItemDevices开腿展示架_LuziOptionv1: '添加阴部道具',

                ItemDevices开腿展示架_LuziSelect自定义高度: '设置高度',
                ItemDevices开腿展示架_LuziModule自定义高度: '调整高度',
                ItemDevices开腿展示架_LuziOptiond0: '无',
                ItemDevices开腿展示架_LuziOptiond1: '自定义高度',

                ItemAddon后背_LuziSelect: '选择后背配置',
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

                ItemAddon隐形药水_LuziSets1: 'SourceCharacter脱掉了DestinationCharacter身上的紧身衣',
                ItemAddon隐形药水_LuziSets0: 'SourceCharacter给DestinationCharacter穿上了紧身衣',

                ItemAddon隐形药水_LuziSetl0: 'SourceCharacter移除了DestinationCharacter身上的铐子',
                ItemAddon隐形药水_LuziSetl1: 'SourceCharacter在DestinationCharacter的手臂加上了铐子',
                ItemAddon隐形药水_LuziSetl2: 'SourceCharacter将吊顶链连接在了DestinationCharacter手臂上',
                ItemAddon隐形药水_LuziSetl3: 'SourceCharacter将的DestinationCharacter的手拷在一起',

                ItemAddon隐形药水_LuziSetll0: 'SourceCharacter移除了DestinationCharacter身上的铐子',
                ItemAddon隐形药水_LuziSetll1: 'SourceCharacter在DestinationCharacter的腿上加上了铐子',
                ItemAddon隐形药水_LuziSetll2: 'SourceCharacter将吊顶连连接在了DestinationCharacter的腿上',
                ItemAddon隐形药水_LuziSetll3: 'SourceCharacter将吊顶连连接在了DestinationCharacter的腿上',
                ItemAddon隐形药水_LuziSetll4: 'SourceCharacter将吊顶连连接在了DestinationCharacter的腿上,将DestinationCharacter头朝下吊了起来',
                ItemAddon隐形药水_LuziSetll5: 'SourceCharacter将DestinationCharacter的腿拷在一起',

                ItemAddon隐形药水_LuziSetlll0: 'SourceCharacter还原DestinationCharacter的高度',
                ItemAddon隐形药水_LuziSetlll1: 'SourceCharacter调整DestinationCharacter的高度',
                ItemAddon隐形药水_LuziSetlll2: 'SourceCharacter在DestinationCharacter的身上使用了吊顶连',

                ItemDevices乳胶带床_LuziSetg0: 'SourceCharacter去掉了DestinationCharacter的盖子',
                ItemDevices乳胶带床_LuziSetg1: 'SourceCharacter加上了DestinationCharacter的盖子',
                ItemDevices乳胶带床_LuziSetg2: 'SourceCharacter盖上了DestinationCharacter的盖子',


                ItemDevices开腿展示架_LuziSeto1: 'SourceCharacter修改了DestinationCharacter的手部拘束',
                ItemDevices开腿展示架_LuziSeto0: 'SourceCharacter修改了DestinationCharacter的手部拘束',

                ItemDevices开腿展示架_LuziSetg0: 'SourceCharacter移除了DestinationCharacter嘴部的拘束',
                ItemDevices开腿展示架_LuziSetg1: 'SourceCharacter添加了DestinationCharacter嘴部的拘束',

                ItemDevices开腿展示架_LuziSetv0: 'SourceCharacter移除了DestinationCharacter阴部的道具',
                ItemDevices开腿展示架_LuziSetv1: 'SourceCharacter添加了DestinationCharacter阴部的道具',

                ItemDevices开腿展示架_LuziSetd0: 'SourceCharacter还原DestinationCharacter的高度',
                ItemDevices开腿展示架_LuziSetd1: 'SourceCharacter调整DestinationCharacter的高度',

                ItemAddon后背_LuziSet纸袋: 'SourceCharacter在DestinationCharacter的头上套上了纸袋',
                ItemAddon后背_LuziSet麻袋头罩: 'SourceCharacter在DestinationCharacter的头上套上了麻袋',
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
                ItemDevices玻璃罐子_LuziOptionk3: 'High',
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

                ItemAddon隐形药水_LuziSelectBase: 'Select Invisibility Potion Configuration',
                ItemAddon隐形药水_LuziSelect紧身衣: 'Select Tights',
                ItemAddon隐形药水_LuziModule紧身衣: 'Tights',
                ItemAddon隐形药水_LuziOptions0: 'None',
                ItemAddon隐形药水_LuziOptions1: 'See-Through Tights',
                ItemAddon隐形药水_LuziSelect铐子手: 'Select Hand Cuffs',
                ItemAddon隐形药水_LuziModule铐子手: 'Hand Cuffs',
                ItemAddon隐形药水_LuziOptionl0: 'None',
                ItemAddon隐形药水_LuziOptionl1: 'Add Iron Shackles',
                ItemAddon隐形药水_LuziOptionl2: 'Adjust Chain Height',
                ItemAddon隐形药水_LuziOptionl3: 'Add Iron Chain (Hands Cuffed Behind)',

                ItemAddon隐形药水_LuziSelect铐子腿: 'Select Leg Cuffs',
                ItemAddon隐形药水_LuziModule铐子腿: 'Leg Cuffs',
                ItemAddon隐形药水_LuziOptionll0: 'None',
                ItemAddon隐形药水_LuziOptionll1: 'Add Iron Shackles',
                ItemAddon隐形药水_LuziOptionll2: 'Adjust Chain Height',
                ItemAddon隐形药水_LuziOptionll3: 'Adjust Chain Height',
                ItemAddon隐形药水_LuziOptionll4: 'Add Chain (Reversed Downward)',
                ItemAddon隐形药水_LuziOptionll5: 'Add Iron Chain (Merge)',

                ItemAddon隐形药水_LuziSelect自定义高度: 'Set Height',
                ItemAddon隐形药水_LuziModule自定义高度: 'Adjust Height',
                ItemAddon隐形药水_LuziOptionlll0: 'None',
                ItemAddon隐形药水_LuziOptionlll1: 'Custom Height',
                ItemAddon隐形药水_LuziOptionlll2: 'Custom Height',

                ItemDevices乳胶带床_LuziSelectBase: 'Select Latex Bed',
                ItemDevices乳胶带床_LuziSelect盖子: 'Select Cover',
                ItemDevices乳胶带床_LuziModule盖子: 'Cover',
                ItemDevices乳胶带床_LuziOptiong0: 'None',
                ItemDevices乳胶带床_LuziOptiong1: 'Add Cover',
                ItemDevices乳胶带床_LuziOptiong2: 'Close Cover',



                ItemDevices开腿展示架SelectBase: 'Select Leg Spread Display Configuration',

                ItemDevices开腿展示架Select_Pose: 'Select Pose',
                ItemDevices开腿展示架Module_Pose: 'Pose',
                ItemDevices开腿展示架Optiono0: 'Behind Back',
                ItemDevices开腿展示架Optiono1: 'Lift Hands',

                ItemDevices开腿展示架Select_MouthRestraint: 'Select Mouth Restraint',
                ItemDevices开腿展示架Module_MouthRestraint: 'Mouth Restraint',
                ItemDevices开腿展示架Optiong0: 'None',
                ItemDevices开腿展示架Optiong1: 'Add Mouth Restraint',

                ItemDevices开腿展示架Select_GenitalProp: 'Select Genital Prop',
                ItemDevices开腿展示架Module_GenitalProp: 'Genital Prop',
                ItemDevices开腿展示架Optionv0: 'None',
                ItemDevices开腿展示架Optionv1: 'Add Genital Prop',

                ItemDevices开腿展示架Select_CustomHeight: 'Set Height',
                ItemDevices开腿展示架Module_CustomHeight: 'Adjust Height',
                ItemDevices开腿展示架Optiond0: 'None',
                ItemDevices开腿展示架Optiond1: 'Custom Height',

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

                ItemAddon隐形药水_LuziSets1: 'SourceCharacter removed the tights from DestinationCharacter',
                ItemAddon隐形药水_LuziSets0: 'SourceCharacter put the tights on DestinationCharacter',

                ItemAddon隐形药水_LuziSetl0: 'SourceCharacter removed the cuffs from DestinationCharacter',
                ItemAddon隐形药水_LuziSetl1: 'SourceCharacter applied cuffs to DestinationCharacter\'s arms',
                ItemAddon隐形药水_LuziSetl2: 'SourceCharacter connected the hoist to DestinationCharacter\'s arms',
                ItemAddon隐形药水_LuziSetl3: 'SourceCharacter cuffs DestinationCharacter\'s hands together',

                ItemAddon隐形药水_LuziSetll0: 'SourceCharacter removed the cuffs from DestinationCharacter',
                ItemAddon隐形药水_LuziSetll1: 'SourceCharacter applied cuffs to DestinationCharacter\'s legs',
                ItemAddon隐形药水_LuziSetll2: 'SourceCharacter connected the hoist to DestinationCharacter\'s legs',
                ItemAddon隐形药水_LuziSetll3: 'SourceCharacter connected the hoist to DestinationCharacter\'s legs',
                ItemAddon隐形药水_LuziSetll4: 'SourceCharacter attached the hanging chain to DestinationCharacter\'s legs, suspending them head-down',
                ItemAddon隐形药水_LuziSetll5: 'SourceCharacter cuffs DestinationCharacter\'s legs together',

                ItemAddon隐形药水_LuziSetlll0: 'SourceCharacter restored DestinationCharacter\'s height',
                ItemAddon隐形药水_LuziSetlll1: 'SourceCharacter adjusted DestinationCharacter\'s height',
                ItemAddon隐形药水_LuziSetlll2: 'SourceCharacter adjusted DestinationCharacter\'s height',

                ItemDevices乳胶带床_LuziSetg0: 'SourceCharacter removes DestinationCharacter\'s cover',
                ItemDevices乳胶带床_LuziSetg1: 'SourceCharacter adds DestinationCharacter\'s cover',
                ItemDevices乳胶带床_LuziSetg2: 'SourceCharacter closes DestinationCharacter\'s cover',


                ItemDevices开腿展示架Seto1: 'SourceCharacter modifies DestinationCharacter\'s hand restraints',
                ItemDevices开腿展示架Seto0: 'SourceCharacter modifies DestinationCharacter\'s hand restraints',

                ItemDevices开腿展示架Setg0: 'SourceCharacter removes DestinationCharacter\'s mouth restraint',
                ItemDevices开腿展示架Setg1: 'SourceCharacter adds DestinationCharacter\'s mouth restraint',

                ItemDevices开腿展示架Setv0: 'SourceCharacter removes DestinationCharacter\'s genital prop',
                ItemDevices开腿展示架Setv1: 'SourceCharacter adds DestinationCharacter\'s genital prop',

                ItemDevices开腿展示架Setd0: 'SourceCharacter resets DestinationCharacter\'s height',
                ItemDevices开腿展示架Setd1: 'SourceCharacter adjusts DestinationCharacter\'s height',
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
    };
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
    };
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

        patchFunction("DialogClickExpressionMenu", {
            'CharacterSetFacialExpression(Player, FE.Group, expression);':
                `if (FE.Group == 'Liquid_Luzi') {
					const item = InventoryGet(Player, FE.Group);
                    if (!item.Property) item.Property = {};
					item.Property.Expression = expression;
				} else {
					CharacterSetFacialExpression(Player, FE.Group, expression);
				}`

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

    // 常量定义，避免硬编码
    const HIDDEN_BETA_MESSAGE = "╰(*°▽°*)╯BETA";
    const HIDDEN_ECHO_MESSAGE = "╰(*°▽°*)╯";
    const HIDDEN_ECHO2_MESSAGE = "(._.)";

    // 对输入进行清理和验证的函数
    function sanitizeText(text) {
        // 假设实现：这里可以添加更多的验证逻辑
        return text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }

    // 查找并返回与给定成员号相匹配的角色对象，如果找不到则返回undefined
    function findCharacterByMemberNumber(memberNumber) {
        return ChatRoomCharacterDrawlist.find(C => C.MemberNumber === memberNumber);
    }

    function Hidden(text) {
        // 清理和验证输入
        const sanitizedText = sanitizeText(text);
        ServerSend("ChatRoomChat", {
            Content: sanitizedText,
            Type: "Hidden",
        });
    }

    // 使用try-catch包裹可能抛出异常的代码
    try {
        mod.hookFunction("ChatRoomSync", 10, (args, next) => {
            setTimeout(() => {
                Hidden(HIDDEN_BETA_MESSAGE);
            }, 2000);
            next(args);
        });

        mod.hookFunction("ChatRoomSyncMemberLeave", 10, (args, next) => {
            setTimeout(() => {
                Hidden(HIDDEN_BETA_MESSAGE);
            }, 2000);
            next(args);
        });

        mod.hookFunction("ChatRoomMessage", 10, (args, next) => {
            let data = args[0];
            if (data.Content === 'ServerEnter') {
                setTimeout(() => {
                    Hidden(HIDDEN_BETA_MESSAGE);
                }, 2000);
            }
            next(args);
        });

        let CRCharacter;
        mod.hookFunction("ChatRoomMessage", 0, (args, next) => {
            const data = args[0];
            // 使用映射关系来优化代码的可维护性和可扩展性
            const messageHandlers = {
                [HIDDEN_BETA_MESSAGE]: () => CRCharacter.ECHOBETA = true,
                [HIDDEN_ECHO_MESSAGE]: () => CRCharacter.ECHO = true,
                [HIDDEN_ECHO2_MESSAGE]: () => CRCharacter.ECHO2 = true,
            };

            if (messageHandlers[data.Content] && data.Type === 'Hidden') {
                CRCharacter = findCharacterByMemberNumber(data.Sender);
                if (CRCharacter) {
                    messageHandlers[data.Content]();
                }
            }
            next(args);
        });
    } catch (error) {
        console.error("An error occurred:", error);
    }


    mod.hookFunction("ChatRoomDrawCharacterStatusIcons", 10, (args, next) => {
        if (ChatRoomHideIconState == 0) {
            let [C, CharX, CharY, Zoom] = args;
            if (C.ECHOBETA) {
                DrawImageResize("https://emdsa2.github.io/-mod/image/服装拓展beta.png",
                    CharX + 420 * Zoom, CharY + 5, 35 * Zoom, 35 * Zoom);
            }
            if (C.ECHO) {
                DrawImageResize("https://emdsa2.github.io/-mod/image/服装拓展.png",
                    CharX + 420 * Zoom, CharY + 5, 35 * Zoom, 35 * Zoom);
            }
            if (C.ECHO2) {
                DrawImageResize("https://emdsa2.github.io/-mod/image/动作拓展.png",
                    CharX + 420 * Zoom, CharY + 5, 35 * Zoom, 35 * Zoom);
            }

        }
        next(args);
    });

    // ================================================================================
    // ================================================================================
    // ================================================================================
    // ================================================================================
    // 好厉害的Saki！
    // 定义一个布尔变量，用于标记是否处于绘制角色的过程中
    let InDrawCharacter = false;

    let DrawCharacterCounter = false;

    // 定义一个变量，用于存储当前正在绘制的角色引用
    let CurrentDrawCharacter = null;

    mod.hookFunction("DrawCharacter", 10, (args, next) => {
        // 标记开始绘制角色
        InDrawCharacter = true;
        // 存储当前绘制的角色
        CurrentDrawCharacter = args[0];
        // 继续执行原始的DrawCharacter函数
        next(args);
        // 绘制完成后，清除当前角色引用
        CurrentDrawCharacter = null;
        // 标记结束绘制角色
        InDrawCharacter = false;
    });

    // 定义一个对象来存储不同道具的调整参数
    const assetAdjustments = {
        // "缩小(地)_Luzi": { widthMultiplier: 2, heightMultiplier: 2, offsetXMultiplier: 4, offsetYMultiplier: 2 },
        "缩小(地)_Luzi": { widthMultiplier: 3, heightMultiplier: 3, offsetXMultiplier: 3, offsetYMultiplier: 1.5 },
        "缩小(空)_Luzi": { widthMultiplier: 3, heightMultiplier: 3, offsetXMultiplier: 3, offsetYMultiplier: 10 },
    };


    mod.hookFunction("DrawImageEx", 10, (args, next) => {
        let [source, canvas, X, Y, options] = args;

        if (!options?.Width || !options?.Height) return next(args);
        let Width = options.Width;
        let Height = options.Height;

        // 如果当前处于绘制角色的过程中
        if (InDrawCharacter) {
            // 检查当前角色的所有道具
            CurrentDrawCharacter.Appearance.forEach(asset => {
                const adjustment = assetAdjustments[asset.Asset.Name];
                if (adjustment) {
                    // 如果绘图对象未定义，则初始化为空对象
                    if (options == undefined) options = {};

                    // 调整绘图位置和尺寸
                    X = X + Width / adjustment.offsetXMultiplier;
                    Y = Y + Height / adjustment.offsetYMultiplier;

                    Width = Width / adjustment.widthMultiplier;
                    Height = Height / adjustment.heightMultiplier;

                    // 更新绘图对象的宽度和高度
                    Object.assign(options, { Width, Height });
                }
            });
        }

        InDrawCharacter = false;
        // 调用原始的DrawImageEx函数，传入调整后的参数
        return next([source, canvas, X, Y, options]);
    });
})();
// 22 6 -10 _Asian
// -4 30 -38 _Black
//       74
//    -6 10

// const compressedData = LZString.compressToUTF16(JSON.stringify(Player.Crafting));
// const tempInput = document.createElement('textarea');
// tempInput.value = compressedData;
// document.body.appendChild(tempInput);
// tempInput.select();
// document.execCommand('copy');
// document.body.removeChild(tempInput);
// console.log("已导出")


// Player.Crafting = JSON.parse(LZString.decompressFromUTF16(制作道具数据文本));
// console.log("已导入")


