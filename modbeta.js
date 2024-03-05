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
(function () {
    'use strict';
    // =======================================================================================
    var bcModSdk = function () {
        "use strict"; const e = "1.1.0"; function o(e) { alert("Mod ERROR:\n" + e); const o = new Error(e); throw console.error(o), o; } const t = new TextEncoder; function n(e) { return !!e && "object" == typeof e && !Array.isArray(e); } function r(e) { const o = new Set; return e.filter((e => !o.has(e) && o.add(e))); } const i = new Map, a = new Set; function d(e) { a.has(e) || (a.add(e), console.warn(e)); } function s(e) { const o = [], t = new Map, n = new Set; for (const r of p.values()) { const i = r.patching.get(e.name); if (i) { o.push(...i.hooks); for (const [o, a] of i.patches.entries()) t.has(o) && t.get(o) !== a && d(`ModSDK: Mod '${r.name}' is patching function ${e.name} with same pattern that is already applied by different mod, but with different pattern:\nPattern:\n${o}\nPatch1:\n${t.get(o) || ""}\nPatch2:\n${a}`), t.set(o, a), n.add(r.name); } } o.sort(((e, o) => o.priority - e.priority)); const r = function (e, o) { if (0 === o.size) return e; let t = e.toString().replaceAll("\r\n", "\n"); for (const [n, r] of o.entries()) t.includes(n) || d(`ModSDK: Patching ${e.name}: Patch ${n} not applied`), t = t.replaceAll(n, r); return (0, eval)(`(${t})`); }(e.original, t); let i = function (o) { var t, i; const a = null === (i = (t = m.errorReporterHooks).hookChainExit) || void 0 === i ? void 0 : i.call(t, e.name, n), d = r.apply(this, o); return null == a || a(), d; }; for (let t = o.length - 1; t >= 0; t--) { const n = o[t], r = i; i = function (o) { var t, i; const a = null === (i = (t = m.errorReporterHooks).hookEnter) || void 0 === i ? void 0 : i.call(t, e.name, n.mod), d = n.hook.apply(this, [o, e => { if (1 !== arguments.length || !Array.isArray(o)) throw new Error(`Mod ${n.mod} failed to call next hook: Expected args to be array, got ${typeof e}`); return r.call(this, e); }]); return null == a || a(), d; }; } return { hooks: o, patches: t, patchesSources: n, enter: i, final: r }; } function c(e, o = !1) { let r = i.get(e); if (r) o && (r.precomputed = s(r)); else { let o = window; const a = e.split("."); for (let t = 0; t < a.length - 1; t++) if (o = o[a[t]], !n(o)) throw new Error(`ModSDK: Function ${e} to be patched not found; ${a.slice(0, t + 1).join(".")} is not object`); const d = o[a[a.length - 1]]; if ("function" != typeof d) throw new Error(`ModSDK: Function ${e} to be patched not found`); const c = function (e) { let o = -1; for (const n of t.encode(e)) { let e = 255 & (o ^ n); for (let o = 0; o < 8; o++) e = 1 & e ? -306674912 ^ e >>> 1 : e >>> 1; o = o >>> 8 ^ e; } return ((-1 ^ o) >>> 0).toString(16).padStart(8, "0").toUpperCase(); }(d.toString().replaceAll("\r\n", "\n")), l = { name: e, original: d, originalHash: c }; r = Object.assign(Object.assign({}, l), { precomputed: s(l), router: () => { }, context: o, contextProperty: a[a.length - 1] }), r.router = function (e) { return function (...o) { return e.precomputed.enter.apply(this, [o]); }; }(r), i.set(e, r), o[r.contextProperty] = r.router; } return r; } function l() { const e = new Set; for (const o of p.values()) for (const t of o.patching.keys()) e.add(t); for (const o of i.keys()) e.add(o); for (const o of e) c(o, !0); } function f() { const e = new Map; for (const [o, t] of i) e.set(o, { name: o, original: t.original, originalHash: t.originalHash, sdkEntrypoint: t.router, currentEntrypoint: t.context[t.contextProperty], hookedByMods: r(t.precomputed.hooks.map((e => e.mod))), patchedByMods: Array.from(t.precomputed.patchesSources) }); return e; } const p = new Map; function u(e) { p.get(e.name) !== e && o(`Failed to unload mod '${e.name}': Not registered`), p.delete(e.name), e.loaded = !1, l(); } function g(e, t, r) { "string" == typeof e && "string" == typeof t && (alert(`Mod SDK warning: Mod '${e}' is registering in a deprecated way.\nIt will work for now, but please inform author to update.`), e = { name: e, fullName: e, version: t }, t = { allowReplace: !0 === r }), e && "object" == typeof e || o("Failed to register mod: Expected info object, got " + typeof e), "string" == typeof e.name && e.name || o("Failed to register mod: Expected name to be non-empty string, got " + typeof e.name); let i = `'${e.name}'`; "string" == typeof e.fullName && e.fullName || o(`Failed to register mod ${i}: Expected fullName to be non-empty string, got ${typeof e.fullName}`), i = `'${e.fullName} (${e.name})'`, "string" != typeof e.version && o(`Failed to register mod ${i}: Expected version to be string, got ${typeof e.version}`), e.repository || (e.repository = void 0), void 0 !== e.repository && "string" != typeof e.repository && o(`Failed to register mod ${i}: Expected repository to be undefined or string, got ${typeof e.version}`), null == t && (t = {}), t && "object" == typeof t || o(`Failed to register mod ${i}: Expected options to be undefined or object, got ${typeof t}`); const a = !0 === t.allowReplace, d = p.get(e.name); d && (d.allowReplace && a || o(`Refusing to load mod ${i}: it is already loaded and doesn't allow being replaced.\nWas the mod loaded multiple times?`), u(d)); const s = e => { "string" == typeof e && e || o(`Mod ${i} failed to patch a function: Expected function name string, got ${typeof e}`); let t = g.patching.get(e); return t || (t = { hooks: [], patches: new Map }, g.patching.set(e, t)), t; }, f = { unload: () => u(g), hookFunction: (e, t, n) => { g.loaded || o(`Mod ${i} attempted to call SDK function after being unloaded`); const r = s(e); "number" != typeof t && o(`Mod ${i} failed to hook function '${e}': Expected priority number, got ${typeof t}`), "function" != typeof n && o(`Mod ${i} failed to hook function '${e}': Expected hook function, got ${typeof n}`); const a = { mod: g.name, priority: t, hook: n }; return r.hooks.push(a), l(), () => { const e = r.hooks.indexOf(a); e >= 0 && (r.hooks.splice(e, 1), l()); }; }, patchFunction: (e, t) => { g.loaded || o(`Mod ${i} attempted to call SDK function after being unloaded`); const r = s(e); n(t) || o(`Mod ${i} failed to patch function '${e}': Expected patches object, got ${typeof t}`); for (const [n, a] of Object.entries(t)) "string" == typeof a ? r.patches.set(n, a) : null === a ? r.patches.delete(n) : o(`Mod ${i} failed to patch function '${e}': Invalid format of patch '${n}'`); l(); }, removePatches: e => { g.loaded || o(`Mod ${i} attempted to call SDK function after being unloaded`); s(e).patches.clear(), l(); }, callOriginal: (e, t, n) => (g.loaded || o(`Mod ${i} attempted to call SDK function after being unloaded`), "string" == typeof e && e || o(`Mod ${i} failed to call a function: Expected function name string, got ${typeof e}`), Array.isArray(t) || o(`Mod ${i} failed to call a function: Expected args array, got ${typeof t}`), function (e, o, t = window) { return c(e).original.apply(t, o); }(e, t, n)), getOriginalHash: e => ("string" == typeof e && e || o(`Mod ${i} failed to get hash: Expected function name string, got ${typeof e}`), c(e).originalHash) }, g = { name: e.name, fullName: e.fullName, version: e.version, repository: e.repository, allowReplace: a, api: f, loaded: !0, patching: new Map }; return p.set(e.name, g), Object.freeze(f); } function h() { const e = []; for (const o of p.values()) e.push({ name: o.name, fullName: o.fullName, version: o.version, repository: o.repository }); return e; } let m; const y = function () { if (void 0 === window.bcModSdk) return window.bcModSdk = function () { const o = { version: e, apiVersion: 1, registerMod: g, getModsInfo: h, getPatchingInfo: f, errorReporterHooks: Object.seal({ hookEnter: null, hookChainExit: null }) }; return m = o, Object.freeze(o); }(); if (n(window.bcModSdk) || o("Failed to init Mod SDK: Name already in use"), 1 !== window.bcModSdk.apiVersion && o(`Failed to init Mod SDK: Different version already loaded ('1.1.0' vs '${window.bcModSdk.version}')`), window.bcModSdk.version !== e && (alert(`Mod SDK warning: Loading different but compatible versions ('1.1.0' vs '${window.bcModSdk.version}')\nOne of mods you are using is using an old version of SDK. It will work for now but please inform author to update`), window.bcModSdk.version.startsWith("1.0.") && void 0 === window.bcModSdk._shim10register)) { const e = window.bcModSdk, o = Object.freeze(Object.assign(Object.assign({}, e), { registerMod: (o, t, n) => o && "object" == typeof o && "string" == typeof o.name && "string" == typeof o.version ? e.registerMod(o.name, o.version, "object" == typeof t && !!t && !0 === t.allowReplace) : e.registerMod(o, t, n), _shim10register: !0 })); window.bcModSdk = o; } return window.bcModSdk; }(); return "undefined" != typeof exports && (Object.defineProperty(exports, "__esModule", { value: !0 }), exports.default = y), y;
    }();

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

    });


    // Small
    // Normal
    // Large
    // XLarge
    mod.hookFunction("GLDrawImage", 1, (args, next) => {
        const data = args[0];

        if (typeof data === 'string' && data.includes("_笨笨蛋Luzi")) {
            args[0] = data.replace("_笨笨蛋Luzi", "");
        }

        if (typeof data === 'string' && ICONSSSSSSS[data]) {
            args[0] = ICONSSSSSSS[data];
            args[2] = 0;
            args[3] = 590;
        }

        if (typeof data === 'string' && data.includes("_Luzi")) {
            let data = args[0];
            args[0] = data.replace("Assets", "https://emdsa2.github.io/-mod");
        }

        if (typeof data === 'string' && data.includes("Socks/KneelingSpread/圣诞_Luzi")) {
            args[2] = 0;
        }

        if (typeof data === 'string' && data.includes("ItemTorso/缰绳_Luzi_Normal")) {
            args[2] = -600;
        }

        next(args);
    });

    mod.hookFunction('DrawImageResize', 1, (args, next) => {
        const data = args[0];

        if (typeof data === 'string' && data.includes("_笨笨蛋Luzi")) {
            args[0] = data.replace("_笨笨蛋Luzi", "");
        }

        if (typeof data === 'string' && PreviewICONS[data]) {
            args[0] = PreviewICONS[data];
        }

        if (typeof data === 'string' && data.includes("_Luzi")) {
            let data = args[0];
            args[0] = data.replace("Assets", "https://emdsa2.github.io/-mod");
        }

        next(args);
    });

    mod.hookFunction('DrawButton', 1, (args, next) => {
        const data = args[6];

        if (typeof data === 'string' && data.includes("_Luzi")) {
            let data = args[6];
            args[6] = data.replace("Assets", "https://emdsa2.github.io/-mod");
        }

        next(args);
    });

    // ================================================================================
    // ================================================================================
    const addAsset = {
        Hat: [
            {
                Name: "修女头饰_Luzi", Random: false,
                Top: -110, Left: 0,
                Layer: [
                    { Name: "前面", Priority: 55, },
                    { Name: "后面", Priority: 4, },
                    { Name: "后面2", Priority: 3, },
                ],
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
                Name: "修女_Luzi", Random: false, Gender: "F",
                Top: -110, Left: 0,
                Prerequisite: ["HasBreasts"],
                Layer: [
                    {
                        Name: "衣服",
                        Priority: 32,
                        PoseMapping: {
                            TapedHands: "TapedHands",
                            Yoked: "Yoked", OverTheHead: "OverTheHead",
                            BackBoxTie: "BackBoxTie",
                            BackElbowTouch: "BackBoxTie",
                            BackCuffs: "BackBoxTie",
                        },
                    },
                    {
                        Name: "带子",
                        Priority: 33,
                        PoseMapping: {
                            TapedHands: "",
                            Yoked: "", OverTheHead: "",
                            BackBoxTie: "",
                            BackElbowTouch: "",
                            BackCuffs: "",
                        },
                    },
                    {
                        Name: "披肩",
                        Priority: 34,
                        PoseMapping: {
                            TapedHands: "",
                            Yoked: "Yoked", OverTheHead: "OverTheHead",
                            BackBoxTie: "",
                            BackElbowTouch: "",
                            BackCuffs: "",
                        },
                    },
                    {
                        Name: "后面",
                        CopyLayerColor: "衣服",
                        Priority: 5,
                        PoseMapping: {
                            TapedHands: "",
                            Yoked: "", OverTheHead: "",
                            BackBoxTie: "",
                            BackElbowTouch: "",
                            BackCuffs: ""
                        },
                    },
                    {
                        Name: "后面2",
                        Priority: 4,
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
                Name: "圣诞_Luzi", Random: false, Gender: "F",
                Top: 0, Left: 0,
                Prerequisite: ["HasBreasts"],
                Layer: [
                    {
                        Name: "蝴蝶结", Priority: 33,
                        PoseMapping: {
                            TapedHands: "TapedHands",
                            Yoked: "Yoked", OverTheHead: "Yoked",
                            BackBoxTie: "Yoked",
                            BackElbowTouch: "Yoked",
                            BackCuffs: "Yoked",
                        },
                    },
                    {
                        Name: "披肩", Priority: 33,
                        PoseMapping: {
                            TapedHands: "",
                            Yoked: "Yoked", OverTheHead: "Yoked",
                            BackBoxTie: "Yoked",
                            BackElbowTouch: "Yoked",
                            BackCuffs: "Yoked",
                        },
                    },
                    {
                        Name: "绒毛", Priority: 32,
                        PoseMapping: {
                            TapedHands: "",
                            Yoked: "", OverTheHead: "",
                            BackBoxTie: "",
                            BackElbowTouch: "",
                            BackCuffs: "",
                        },
                    },
                    {
                        Name: "条纹", Priority: 33,
                        PoseMapping: {
                            TapedHands: "",
                            Yoked: "", OverTheHead: "",
                            BackBoxTie: "",
                            BackElbowTouch: "",
                            BackCuffs: "",
                        },
                    },
                    {
                        Name: "布料", Priority: 31,
                        PoseMapping: {
                            TapedHands: "TapedHands",
                            Yoked: "Yoked", OverTheHead: "Yoked",
                            BackBoxTie: "Yoked",
                            BackElbowTouch: "Yoked",
                            BackCuffs: "Yoked",
                        },
                    },
                    {
                        Name: "打底",
                        Priority: 31,
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
                Name: "礼服_Luzi", Random: false, Gender: "F",
                Top: -110, Left: 0,
                Prerequisite: ["HasBreasts"],
                Layer: [
                    {
                        Name: "Bottom",
                        Priority: 33,
                        ParentGroup: "BodyLower",
                        PoseMapping:
                        {
                            Kneel: "Kneel",
                            KneelingSpread: "KneelingSpread",
                            LegsClosed: "",
                            Spread: "",
                            AllFours: "Hide",
                            Hogtied: "Hide",
                        },
                    },
                    {
                        Name: "Top",
                        Priority: 33,
                        ParentGroup: "BodyUpper",
                        PoseMapping:
                        {
                            TapedHands: "TapedHands",
                            Yoked: "Yoked",
                            OverTheHead: "OverTheHead",
                            BackBoxTie: "BackBoxTie",
                            BackElbowTouch: "BackElbowTouch",
                            BackCuffs: "BackCuffs",
                            AllFours: "AllFours",
                            Hogtied: "Hogtied",
                        },
                    },
                    {
                        Name: "Silk",
                        Priority: 32,
                        PoseMapping:
                        {
                            TapedHands: "",
                            Yoked: "Yoked",
                            OverTheHead: "",
                            BackBoxTie: "",
                            BackElbowTouch: "",
                            BackCuffs: "",
                            AllFours: "AllFours",
                            Hogtied: "Hogtied",
                        },
                    },
                    {
                        Name: "Back",
                        Priority: 5,
                        ParentGroup: "BodyUpper",
                        PoseMapping:
                        {
                            Kneel: "Kneel",
                            KneelingSpread: "Kneel",
                            LegsClosed: "",
                            Spread: "",
                            AllFours: "Hide",
                            Hogtied: "Hide",
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
            },
            {
                Name: "条纹袜_Luzi", Random: false,
            },
            {
                Name: "条纹袜2_Luzi", Random: false,
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
                Top: -110, Left: 0,
                OverrideHeight: { Height: 30, Priority: 21, },
                Hide: [],
                PoseMapping: { Spread: "", LegsClosed: "", KneelingSpread: "", Kneel: "", },
                Hide: ["BodyLower", "Socks", "SocksLeft", "SocksRight", "RightAnklet", "LeftAnklet", "Pussy"],
                Layer: [
                    { Name: "鱼尾上", Priority: 22 },
                    { Name: "鱼尾下", Priority: 22 },
                    { Name: "鱼尾鱼鳍上", Priority: 22 },
                    { Name: "鱼尾鱼鳍下", Priority: 22 },
                    { Name: "高光", Priority: 22 },
                ]
            },
        ],
        Panties: [
            {
                Name: "淫纹_Luzi", Random: false, Gender: "F",
                Top: -110, Left: 0,
                Prerequisite: ["HasVagina"],
                Fetish: ["Lingerie"],
                DefaultColor: ["#E975A0"],
            },
        ],
        Bra: [
            {
                Name: "透视皮衣_Luzi", Random: false, Gender: "F",
                Top: 0, Left: 0,
                Prerequisite: ["HasBreasts"],
                Layer: [
                    {
                        Name: "皮",
                        PoseMapping: {
                            TapedHands: "BackElbowTouch",
                            Yoked: "BackElbowTouch", OverTheHead: "BackElbowTouch",
                            BackBoxTie: "BackElbowTouch",
                            BackElbowTouch: "BackElbowTouch",
                            BackCuffs: "BackElbowTouch",
                        },
                    },
                    {
                        Name: "丝",
                        PoseMapping: {
                            TapedHands: "BackElbowTouch",
                            Yoked: "BackElbowTouch", OverTheHead: "BackElbowTouch",
                            BackBoxTie: "BackElbowTouch",
                            BackElbowTouch: "BackElbowTouch",
                            BackCuffs: "BackElbowTouch",
                        },
                    },
                ],
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
        Wings: [
            {
                Name: "蝴蝶结背饰_Luzi", Random: false,
                Top: -110, Left: 0,
            },
        ],
        HairAccessory1: [
            {
                Name: "奶牛耳_Luzi", Random: false,
                Top: 0, Left: 0,
                Layer: [
                    { Name: "牛耳", Priority: 40, },
                    { Name: "牛角", Priority: 55, },
                ],
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
        ],
        ItemHood: [
            {
                Name: "纸袋_Luzi", Random: false,
                Top: 0, Left: 0,
                Layer: [
                    { Name: "胶带", Priority: 58, },
                    { Name: "字", Priority: 57, },
                    { Name: "A4纸", Priority: 56, },
                    { Name: "纸袋", Priority: 55, },
                ],
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
        ],
        ItemTorso2: [
            {
                Name: "拘束套装_Luzi",
                Top: 0,
                Left: 0,
                Random: false,
                Gender: "F",
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

        ],
        ItemAddon: [
            {
                Name: "被子左边_Luzi", Random: false,
                Top: -260, Left: 0,
                Value: -1,
                Difficulty: 1,
                SelfBondage: 0,
                Prerequisite: "OnBed",
                BuyGroup: "Bed",
                DefaultColor: ["#99A2AB", "Default"],
                Layer: [
                    { Name: "外" },
                    { Name: "内" }
                ],
            },
            {
                Name: "被子右边_Luzi", Random: false,
                Top: -260, Left: -200,
                Value: -1,
                Difficulty: 1,
                SelfBondage: 0,
                Prerequisite: "OnBed",
                BuyGroup: "Bed",
                DefaultColor: ["#99A2AB", "Default"],
                Layer: [
                    { Name: "外" },
                    { Name: "内" }
                ],
            },
        ],
    };



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


    const dialogMap = new Map([
        ['ItemDevices玻璃罐子_LuziSelectBase', '选择罐子配置'], ['ItemDevices玻璃罐子_LuziSelect窗户', '设置窗户'], ['ItemDevices玻璃罐子_LuziModule窗户', '窗户'], ['ItemDevices玻璃罐子_LuziOptionc0', '无'], ['ItemDevices玻璃罐子_LuziOptionc1', '密封'], ['ItemDevices玻璃罐子_LuziSetc0', 'SourceCharacter打开了DestinationCharacter的罐子'], ['ItemDevices玻璃罐子_LuziSetc1', 'SourceCharacter封上了DestinationCharacter的罐子'], ['ItemDevices玻璃罐子_LuziSelect腿部拘束', '设置腿部拘束'], ['ItemDevices玻璃罐子_LuziModule腿部拘束', '腿部拘束'], ['ItemDevices玻璃罐子_LuziOptiont0', '无'], ['ItemDevices玻璃罐子_LuziOptiont1', '腿拘束'], ['ItemDevices玻璃罐子_LuziSett0', "SourceCharacter移除了DestinationCharacter双腿的拘束"], ['ItemDevices玻璃罐子_LuziSett1', "SourceCharacter将DestinationCharacter的双腿束缚在一起"], ['ItemDevices玻璃罐子_LuziSelect手臂拘束', '设置手臂拘束'], ['ItemDevices玻璃罐子_LuziModule手臂拘束', '手臂拘束'], ['ItemDevices玻璃罐子_LuziOptions0', '无'], ['ItemDevices玻璃罐子_LuziOptions1', '手臂拘束'], ['ItemDevices玻璃罐子_LuziSets0', "SourceCharacter移除了DestinationCharacter手腕和手肘的拘束"], ['ItemDevices玻璃罐子_LuziSets1', "SourceCharacter将DestinationCharacter的手腕和手肘束缚到她的身后"], ['ItemDevices玻璃罐子_LuziSelect管道', '设置管道'], ['ItemDevices玻璃罐子_LuziModule管道', '管道'], ['ItemDevices玻璃罐子_LuziOptiongz0', '无'], ['ItemDevices玻璃罐子_LuziOptiongz1', '连接身体'], ['ItemDevices玻璃罐子_LuziSetgz0', 'SourceCharacter移除了连接DestinationCharacter的身体的管子'], ['ItemDevices玻璃罐子_LuziSetgz1', 'SourceCharacter将管子连接进了DestinationCharacter的身体'], ['ItemDevices玻璃罐子_LuziSelect液体', '设置液体'], ['ItemDevices玻璃罐子_LuziModule液体', '液体'], ['ItemDevices玻璃罐子_LuziOptionyt0', '无'], ['ItemDevices玻璃罐子_LuziOptionyt1', '注入液体'], ['ItemDevices玻璃罐子_LuziSetyt0', 'SourceCharacter排空了DestinationCharacter身体和罐子里的液体'], ['ItemDevices玻璃罐子_LuziSetyt1', 'DestinationCharacter的身体和罐子充满了液体'], ['ItemDevices玻璃罐子_LuziSelect快感模块', '设置快感模块'], ['ItemDevices玻璃罐子_LuziModule快感模块', '快感模块'], ['ItemDevices玻璃罐子_LuziOptionk0', '关闭'], ['ItemDevices玻璃罐子_LuziOptionk1', '低'], ['ItemDevices玻璃罐子_LuziOptionk2', '一般'], ['ItemDevices玻璃罐子_LuziOptionk3', '高'], ['ItemDevices玻璃罐子_LuziOptionk4', '最多'], ['ItemDevices玻璃罐子_LuziSetk0', "插在DestinationCharacter体内的振动装置停止振动"], ['ItemDevices玻璃罐子_LuziSetk1', "插在DestinationCharacter体内的振动装置轻微逗弄起来"], ['ItemDevices玻璃罐子_LuziSetk2', "插在DestinationCharacter体内的振动装置带温和嗡鸣着"], ['ItemDevices玻璃罐子_LuziSetk3', "插在DestinationCharacter体内的振动装置猛烈地颤动"], ['ItemDevices玻璃罐子_LuziSetk4', "插在DestinationCharacter体内的振动装置以最大速度振动着"], ['ItemDevices玻璃罐子_LuziSelect电击模块', '设置电击模块'], ['ItemDevices玻璃罐子_LuziModule电击模块', '电击模块'], ['ItemDevices玻璃罐子_LuziOptiond0', '关闭'], ['ItemDevices玻璃罐子_LuziOptiond1', '低'], ['ItemDevices玻璃罐子_LuziOptiond2', '一般'], ['ItemDevices玻璃罐子_LuziOptiond3', '高'], ['ItemDevices玻璃罐子_LuziSetd0', 'SourceCharacter关闭了插在DestinationCharacter体内的振动装置关闭了'], ['ItemDevices玻璃罐子_LuziSetd1', 'SourceCharacter将插在DestinationCharacter体内的电击装置设置为等级1'], ['ItemDevices玻璃罐子_LuziSetd2', 'SourceCharacter将插在DestinationCharacter体内的电击装置设置为等级2'], ['ItemDevices玻璃罐子_LuziSetd3', 'SourceCharacter将插在DestinationCharacter体内的电击装置设置为等级3'], ['ItemDevices玻璃罐子_LuziSelect高潮锁', '设置高潮锁'], ['ItemDevices玻璃罐子_LuziModule高潮锁', '高潮锁'], ['ItemDevices玻璃罐子_LuziOptiong0', '允许'], ['ItemDevices玻璃罐子_LuziOptiong1', '寸止'], ['ItemDevices玻璃罐子_LuziOptiong2', '拒绝'], ['ItemDevices玻璃罐子_LuziSetg0', 'SourceCharacter关闭了插在DestinationCharacter体内的振动装置设置为允许高潮'], ['ItemDevices玻璃罐子_LuziSetg1', 'SourceCharacter将插在DestinationCharacter体内的振动装置设置为寸止模式'], ['ItemDevices玻璃罐子_LuziSetg2', 'SourceCharacter将插在DestinationCharacter体内的振动装置设置为拒绝模式'],
        ['ItemDevices窝瓜_LuziSelect', '选择窝配置'],
        ['ItemDevices窝瓜_LuziSet没盖子', 'SourceCharacter推开了DestinationCharacter的盖子'],
        ['ItemDevices窝瓜_LuziSet有盖子', 'SourceCharacter盖上了DestinationCharacter的盖子'],

        ['ItemTorso2拘束套装_LuziSelect', '选择配置'],
        ['ItemTorso2拘束套装_LuziSet无', ''],
        ['ItemTorso2拘束套装_LuziSet乳胶衣', ''],
        ['ItemTorso2拘束套装_LuziSet透视紧身衣', ''],
        ['ItemTorso2拘束套装_LuziSet紧身衣', ''],


    ]);





    function mergeAddAssetIntoFemale3DCGAssets() { // 把服装拓展脚本数据转进 AssetFemale3DCG
        for (const groupName in addAsset) {
            const group = AssetFemale3DCG.find(group => group.Group === groupName);
            if (group) {
                group.Asset.push(...addAsset[groupName]);
            }
        }
    }

    function AssetAdd_Luzi(assetgroupName, assetName) {
        let assetGtoup = AssetFemale3DCG.find(asset => asset.Group === assetgroupName)
        let asset = assetGtoup.Asset.find(asset => asset.Name === assetName)
        let G = AssetGroupMap.get(assetgroupName)
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
            addExtraOutfitsToAssets();
            addExtraExpressionsToAssets()


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

                ]);
                AssetGroup.forEach(item => {
                    if (item.Name) {
                        const description = descriptionMap.get(item.Name);
                        if (description) {
                            item.Description = description;
                        }
                    }
                });

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
            // ========================================================
            dialogMap.forEach((value, key) => { PlayerDialog.set(key, value); });
            // ========================================================
            isAssetAdded = true;
        }
        AssetFemale3DCG.forEach(group => {
            if (group.Group.includes("_笨笨蛋Luzi")) {
                group.Asset.forEach(item => InventoryAdd(Player, item.Name, group.Group, true));
            }
        });
        CraftingItemListBuild()
        next(args);
    });


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
            if (Content.indexOf("_Luzi")) {
                // 在 PlayerDialog 映射中查找对应的消息
                const msg = PlayerDialog.get(Content) || ""; // 如果找不到，则使用

                // 将修改后的消息添加到 Dictionary 中
                data.Dictionary.push({
                    Tag: "MISSING PLAYER DIALOG: " + Content, Text: msg,
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
        next(args);
    });

    // ================================================================================
    // ================================================================================
    function Hidden(text) {
        ServerSend("ChatRoomChat", {
            Content: `${text}`,
            Type: "Hidden",
        })
    };

    mod.hookFunction("ChatRoomSync", 10, (args, next) => {
        setTimeout(() => {
            Hidden("╰(*°▽°*)╯BETA");
        }, 2000);
        next(args);
    });

    mod.hookFunction("ChatRoomSyncMemberLeave", 10, (args, next) => {
        setTimeout(() => {
            Hidden("╰(*°▽°*)╯BETA");
        }, 2000);
        next(args);
    });

    mod.hookFunction("ChatRoomMessage", 10, (args, next) => {
        let data = args[0]
        if (data.Content === 'ServerEnter') {
            setTimeout(() => {
                Hidden("╰(*°▽°*)╯BETA");
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
    // 完整的双人床！ 修改了角色画布的宽度 好厉害的星涟
    function GLDrawLoadEx(_evt, force2d = false) {
        GLDrawCanvas = document.createElement("canvas");
        GLDrawCanvas.width = 1000 * 2;
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

    let isGLDrawCanvaswidth = false;
    mod.hookFunction("DrawCharacter", 10, (args, next) => {
        if (!isGLDrawCanvaswidth) {
            GLDrawResetCanvas(false)
            ChatRoomViews.Character.Run = function () { };
            isGLDrawCanvaswidth = true;
        }
        next(args);
    });

    patchFunction("CommonDrawCanvasPrepare", {
        "C.Canvas.width = 500;": 'C.Canvas.width = 500 * 2;',
        "C.CanvasBlink.width = 500;": 'C.CanvasBlink.width = 500 * 2;',

        'C.Canvas.getContext("2d").clearRect(0, 0, 500, CanvasDrawHeight);': 'C.Canvas.getContext("2d").clearRect(0, 0, 500 * 4, CanvasDrawHeight);',
        'C.CanvasBlink.getContext("2d").clearRect(0, 0, 500, CanvasDrawHeight);': 'C.CanvasBlink.getContext("2d").clearRect(0, 0, 500 * 4, CanvasDrawHeight);',
    });

    patchFunction("GLDrawAppearanceBuild", {
        '500': '500 * 2',
        'GLDrawClearRect(GLDrawCanvas.GL, 0, 0, 1000, CanvasDrawHeight, 0);': 'GLDrawClearRect(GLDrawCanvas.GL, 0, 0, 1000 * 2, CanvasDrawHeight, 0);',

        'GLDrawClearRect(GLDrawCanvas.GL, x, CanvasDrawHeight - y - h, w, h, 0),': 'GLDrawClearRect(GLDrawCanvas.GL, x, CanvasDrawHeight - y - h, w, h, 500 / 2),',
        'GLDrawClearRect(GLDrawCanvas.GL, x, CanvasDrawHeight - y - h, w, h, blinkOffset),': 'GLDrawClearRect(GLDrawCanvas.GL, x, CanvasDrawHeight - y - h, w, h, blinkOffset + 500 / 2),',

        'GLDrawImage(src, GLDrawCanvas.GL, x, y, opts, 0),': 'GLDrawImage(src, GLDrawCanvas.GL, x, y, opts, 500 / 2),',
        'GLDrawImage(src, GLDrawCanvas.GL, x, y, opts, blinkOffset),': 'GLDrawImage(src, GLDrawCanvas.GL, x, y, opts, blinkOffset + 500 / 2),',

        'GLDraw2DCanvas(GLDrawCanvas.GL, Img, x, y, 0, alphaMasks),': 'GLDraw2DCanvas(GLDrawCanvas.GL, Img, x, y, 500 / 2, alphaMasks),',
        'GLDraw2DCanvas(GLDrawCanvas.GL, Img, x, y, blinkOffset, alphaMasks),': 'GLDraw2DCanvas(GLDrawCanvas.GL, Img, x, y, blinkOffset + 500 / 2, alphaMasks),',
    });

    patchFunction("DrawCharacter", {
        '500 * HeightRatio * Zoom': '500 * HeightRatio * Zoom * 2',
        'TempCanvas.canvas.width = CanvasDrawWidth;': 'TempCanvas.canvas.width = CanvasDrawWidth * 2;',

        'const XOffset = CharacterAppearanceXOffset(C, HeightRatio);': 'function CharacterAppearanceXOffsetEx(C, HeightRatio) {return 875 * (1 - HeightRatio) / 2;} const XOffset = CharacterAppearanceXOffsetEx(C, HeightRatio);',

        'DrawImageEx(Canvas, DrawCanvas, X + XOffset * Zoom': 'let offset = (500 / 2 - 1000 * 0.5) * Zoom; DrawImageEx(Canvas, DrawCanvas, X + offset + XOffset * Zoom',
    });

    // ================================================================================
    // ================================================================================

})();
