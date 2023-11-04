// ==UserScript==
// @name         BC 服装拓展
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  服装拓展
// @author       Luzi
// @include      /^https:\/\/(www\.)?bondageprojects\.elementfx\.com\/R\d+\/(BondageClub|\d+)(\/((index|\d+)\.html)?)?$/
// @include      /^https:\/\/(www\.)?bondage-europe\.com\/R\d+\/(BondageClub|\d+)(\/((index|\d+)\.html)?)?$/
// @grant        none
// @license      MIT
// ==/UserScript==
(function () {
    'use strict';
    // =======================================================================================
    var bcModSdk = function () { "use strict"; const e = "1.1.0"; function o(e) { alert("Mod ERROR:\n" + e); const o = new Error(e); throw console.error(o), o } const t = new TextEncoder; function n(e) { return !!e && "object" == typeof e && !Array.isArray(e) } function r(e) { const o = new Set; return e.filter((e => !o.has(e) && o.add(e))) } const i = new Map, a = new Set; function d(e) { a.has(e) || (a.add(e), console.warn(e)) } function s(e) { const o = [], t = new Map, n = new Set; for (const r of p.values()) { const i = r.patching.get(e.name); if (i) { o.push(...i.hooks); for (const [o, a] of i.patches.entries()) t.has(o) && t.get(o) !== a && d(`ModSDK: Mod '${r.name}' is patching function ${e.name} with same pattern that is already applied by different mod, but with different pattern:\nPattern:\n${o}\nPatch1:\n${t.get(o) || ""}\nPatch2:\n${a}`), t.set(o, a), n.add(r.name) } } o.sort(((e, o) => o.priority - e.priority)); const r = function (e, o) { if (0 === o.size) return e; let t = e.toString().replaceAll("\r\n", "\n"); for (const [n, r] of o.entries()) t.includes(n) || d(`ModSDK: Patching ${e.name}: Patch ${n} not applied`), t = t.replaceAll(n, r); return (0, eval)(`(${t})`) }(e.original, t); let i = function (o) { var t, i; const a = null === (i = (t = m.errorReporterHooks).hookChainExit) || void 0 === i ? void 0 : i.call(t, e.name, n), d = r.apply(this, o); return null == a || a(), d }; for (let t = o.length - 1; t >= 0; t--) { const n = o[t], r = i; i = function (o) { var t, i; const a = null === (i = (t = m.errorReporterHooks).hookEnter) || void 0 === i ? void 0 : i.call(t, e.name, n.mod), d = n.hook.apply(this, [o, e => { if (1 !== arguments.length || !Array.isArray(o)) throw new Error(`Mod ${n.mod} failed to call next hook: Expected args to be array, got ${typeof e}`); return r.call(this, e) }]); return null == a || a(), d } } return { hooks: o, patches: t, patchesSources: n, enter: i, final: r } } function c(e, o = !1) { let r = i.get(e); if (r) o && (r.precomputed = s(r)); else { let o = window; const a = e.split("."); for (let t = 0; t < a.length - 1; t++)if (o = o[a[t]], !n(o)) throw new Error(`ModSDK: Function ${e} to be patched not found; ${a.slice(0, t + 1).join(".")} is not object`); const d = o[a[a.length - 1]]; if ("function" != typeof d) throw new Error(`ModSDK: Function ${e} to be patched not found`); const c = function (e) { let o = -1; for (const n of t.encode(e)) { let e = 255 & (o ^ n); for (let o = 0; o < 8; o++)e = 1 & e ? -306674912 ^ e >>> 1 : e >>> 1; o = o >>> 8 ^ e } return ((-1 ^ o) >>> 0).toString(16).padStart(8, "0").toUpperCase() }(d.toString().replaceAll("\r\n", "\n")), l = { name: e, original: d, originalHash: c }; r = Object.assign(Object.assign({}, l), { precomputed: s(l), router: () => { }, context: o, contextProperty: a[a.length - 1] }), r.router = function (e) { return function (...o) { return e.precomputed.enter.apply(this, [o]) } }(r), i.set(e, r), o[r.contextProperty] = r.router } return r } function l() { const e = new Set; for (const o of p.values()) for (const t of o.patching.keys()) e.add(t); for (const o of i.keys()) e.add(o); for (const o of e) c(o, !0) } function f() { const e = new Map; for (const [o, t] of i) e.set(o, { name: o, original: t.original, originalHash: t.originalHash, sdkEntrypoint: t.router, currentEntrypoint: t.context[t.contextProperty], hookedByMods: r(t.precomputed.hooks.map((e => e.mod))), patchedByMods: Array.from(t.precomputed.patchesSources) }); return e } const p = new Map; function u(e) { p.get(e.name) !== e && o(`Failed to unload mod '${e.name}': Not registered`), p.delete(e.name), e.loaded = !1, l() } function g(e, t, r) { "string" == typeof e && "string" == typeof t && (alert(`Mod SDK warning: Mod '${e}' is registering in a deprecated way.\nIt will work for now, but please inform author to update.`), e = { name: e, fullName: e, version: t }, t = { allowReplace: !0 === r }), e && "object" == typeof e || o("Failed to register mod: Expected info object, got " + typeof e), "string" == typeof e.name && e.name || o("Failed to register mod: Expected name to be non-empty string, got " + typeof e.name); let i = `'${e.name}'`; "string" == typeof e.fullName && e.fullName || o(`Failed to register mod ${i}: Expected fullName to be non-empty string, got ${typeof e.fullName}`), i = `'${e.fullName} (${e.name})'`, "string" != typeof e.version && o(`Failed to register mod ${i}: Expected version to be string, got ${typeof e.version}`), e.repository || (e.repository = void 0), void 0 !== e.repository && "string" != typeof e.repository && o(`Failed to register mod ${i}: Expected repository to be undefined or string, got ${typeof e.version}`), null == t && (t = {}), t && "object" == typeof t || o(`Failed to register mod ${i}: Expected options to be undefined or object, got ${typeof t}`); const a = !0 === t.allowReplace, d = p.get(e.name); d && (d.allowReplace && a || o(`Refusing to load mod ${i}: it is already loaded and doesn't allow being replaced.\nWas the mod loaded multiple times?`), u(d)); const s = e => { "string" == typeof e && e || o(`Mod ${i} failed to patch a function: Expected function name string, got ${typeof e}`); let t = g.patching.get(e); return t || (t = { hooks: [], patches: new Map }, g.patching.set(e, t)), t }, f = { unload: () => u(g), hookFunction: (e, t, n) => { g.loaded || o(`Mod ${i} attempted to call SDK function after being unloaded`); const r = s(e); "number" != typeof t && o(`Mod ${i} failed to hook function '${e}': Expected priority number, got ${typeof t}`), "function" != typeof n && o(`Mod ${i} failed to hook function '${e}': Expected hook function, got ${typeof n}`); const a = { mod: g.name, priority: t, hook: n }; return r.hooks.push(a), l(), () => { const e = r.hooks.indexOf(a); e >= 0 && (r.hooks.splice(e, 1), l()) } }, patchFunction: (e, t) => { g.loaded || o(`Mod ${i} attempted to call SDK function after being unloaded`); const r = s(e); n(t) || o(`Mod ${i} failed to patch function '${e}': Expected patches object, got ${typeof t}`); for (const [n, a] of Object.entries(t)) "string" == typeof a ? r.patches.set(n, a) : null === a ? r.patches.delete(n) : o(`Mod ${i} failed to patch function '${e}': Invalid format of patch '${n}'`); l() }, removePatches: e => { g.loaded || o(`Mod ${i} attempted to call SDK function after being unloaded`); s(e).patches.clear(), l() }, callOriginal: (e, t, n) => (g.loaded || o(`Mod ${i} attempted to call SDK function after being unloaded`), "string" == typeof e && e || o(`Mod ${i} failed to call a function: Expected function name string, got ${typeof e}`), Array.isArray(t) || o(`Mod ${i} failed to call a function: Expected args array, got ${typeof t}`), function (e, o, t = window) { return c(e).original.apply(t, o) }(e, t, n)), getOriginalHash: e => ("string" == typeof e && e || o(`Mod ${i} failed to get hash: Expected function name string, got ${typeof e}`), c(e).originalHash) }, g = { name: e.name, fullName: e.fullName, version: e.version, repository: e.repository, allowReplace: a, api: f, loaded: !0, patching: new Map }; return p.set(e.name, g), Object.freeze(f) } function h() { const e = []; for (const o of p.values()) e.push({ name: o.name, fullName: o.fullName, version: o.version, repository: o.repository }); return e } let m; const y = function () { if (void 0 === window.bcModSdk) return window.bcModSdk = function () { const o = { version: e, apiVersion: 1, registerMod: g, getModsInfo: h, getPatchingInfo: f, errorReporterHooks: Object.seal({ hookEnter: null, hookChainExit: null }) }; return m = o, Object.freeze(o) }(); if (n(window.bcModSdk) || o("Failed to init Mod SDK: Name already in use"), 1 !== window.bcModSdk.apiVersion && o(`Failed to init Mod SDK: Different version already loaded ('1.1.0' vs '${window.bcModSdk.version}')`), window.bcModSdk.version !== e && (alert(`Mod SDK warning: Loading different but compatible versions ('1.1.0' vs '${window.bcModSdk.version}')\nOne of mods you are using is using an old version of SDK. It will work for now but please inform author to update`), window.bcModSdk.version.startsWith("1.0.") && void 0 === window.bcModSdk._shim10register)) { const e = window.bcModSdk, o = Object.freeze(Object.assign(Object.assign({}, e), { registerMod: (o, t, n) => o && "object" == typeof o && "string" == typeof o.name && "string" == typeof o.version ? e.registerMod(o.name, o.version, "object" == typeof t && !!t && !0 === t.allowReplace) : e.registerMod(o, t, n), _shim10register: !0 })); window.bcModSdk = o } return window.bcModSdk }(); return "undefined" != typeof exports && (Object.defineProperty(exports, "__esModule", { value: !0 }), exports.default = y), y }();

    const MOD_NAME = "服装拓展";
    const MOD_FULL_NAME = "服装拓展";
    const MOD_VERSION = "0.0.01";


    const mod = bcModSdk.registerMod({
        name: MOD_NAME,
        fullName: MOD_FULL_NAME,
        version: MOD_VERSION
    });
    // =======================================================================================
    const w = window;
    // =======================================================================================
    const CustomImages22 = new Map(); // 缩略图
    // =======================================================================================
    // =======================================================================================

    // =======================================================================================
    // 下面这两个函数不用管+体型的  看见折叠就好了
    function luzi上半身(name, args) {
        if (args && args.length > 0 && args[0].indexOf("Luzi_") > -1) {
            const modifiedArgs = [...args]; // 复制原始的 args，创建一个新的数组
            for (let i = 0; i < 4; i++) {
                if (modifiedArgs[0].includes(`Yoked/Luzi_${name}_White`)) {
                    modifiedArgs[0] = ICONS2[`${name}_Yoked`];
                    modifiedArgs[2] = 0;
                    modifiedArgs[3] = 700;
                }
                if (modifiedArgs[0].includes(`OverTheHead/Luzi_${name}_White`)) {
                    modifiedArgs[0] = ICONS2[`${name}_OverTheHead`];
                    modifiedArgs[2] = 0;
                    modifiedArgs[3] = 700;
                }
                if (modifiedArgs[0].includes(`BackBoxTie/Luzi_${name}_White`)) {
                    modifiedArgs[0] = ICONS2[`${name}_BackBoxTie`];
                    modifiedArgs[2] = 0;
                    modifiedArgs[3] = 700;
                }
                if (modifiedArgs[0].includes(`BackElbowTouch/Luzi_${name}_White`)) {
                    modifiedArgs[0] = ICONS2[`${name}_BackElbowTouch`];
                    modifiedArgs[2] = 0;
                    modifiedArgs[3] = 700;
                }
                if (modifiedArgs[0].includes(`BackCuffs/Luzi_${name}_White`)) {
                    modifiedArgs[0] = ICONS2[`${name}_BackCuffs`];
                    modifiedArgs[2] = 0;
                    modifiedArgs[3] = 700;
                }
                if (modifiedArgs[0].includes(`BodyUpper/Luzi_${name}_White`)) {
                    modifiedArgs[0] = ICONS2[`${name}_`];
                    modifiedArgs[2] = 0;
                    modifiedArgs[3] = 700;
                }
            }
            args[0] = modifiedArgs[0];
            args[2] = modifiedArgs[2];
            args[3] = modifiedArgs[3];
        }
        return args; // 如果没有匹配，返回原始 args
    }

    function luzi下半身(name, args) {
        if (args && args.length > 0 && args[0].indexOf("Luzi_") > -1) {
            const 体型 = ['Small', 'Normal', 'Large', 'XLarge'];

            for (let i = 0; i < 4; i++) {
                if (args[0].includes(`Kneel/Luzi_${name}`)) {
                    args[0] = ICONS2[`${name}_Kneel`];
                    args[2] = 0;
                    args[3] = 700;
                }
                if (args[0].includes(`KneelingSpread/Luzi_${name}`)) {
                    args[0] = ICONS2[`${name}_KneelingSpread`];
                    args[2] = 0;
                    args[3] = 700;
                }
                if (args[0].includes(`LegsClosed/Luzi_${name}`)) {
                    args[0] = ICONS2[`${name}_LegsClosed`];
                    args[2] = 0;
                    args[3] = 700;
                }
                if (args[0].includes(`Spread/Luzi_${name}`)) {
                    args[0] = ICONS2[`${name}_Spread`];
                    args[2] = 0;
                    args[3] = 700;
                }
                if (args[0].includes(`Luzi_${name}`)) {
                    args[0] = ICONS2[`${name}_`];
                    args[2] = 0;
                    args[3] = 700;
                }
            }
        }
        return args; // 如果没有匹配，返回原始 args
    }
    // 上面这两个函数不用管是+体型的 看见折叠就好了
    // =======================================================================================
    // -- 为道具添加自定义缩略图   // 下面这个也不用管     看见折叠就好了
    mod.hookFunction("DrawImageResize", 1, (args, next) => {
        var data = args[0];
        if (!!data && data.indexOf("Luzi_") > -1) {
            var Female3DCG = data.substring(data.indexOf("Luzi_"));
            Female3DCG = Female3DCG.substring(0, Female3DCG.indexOf(".png"))
            if (CustomImages22.has(Female3DCG))
                args[0] = CustomImages22.get(Female3DCG);
        }
        return next(args);
    });
    // =======================================================================================
    // =======================================================================================

    /**
     * @param {*} name --  这个是 "Cloth.Asset.push" 里面 "Luzi_xxx" 的名字
     * @param {*} n图层 -- 这个图层就是 Cloth.Asset.Layer 里面的东西
     * @param {*} args --  这个就填 "args" 就行
     * @param {*} _特殊1 -- 这个特殊的意思就是    例 "ICONS2" 里面 "女仆装1_Small" + 后缀命名  "_露手"
     * @param {*} _特殊2 
     * @param {*} _特殊3 // 例 luzi衣服(`女仆装1`, `Dress`, args, `_露手`);
     * @param {*} _特殊4 
     * @param {*} _特殊5 
     * @param {*} _特殊6 
     * @returns 
     */
    function luzi衣服(name, n图层, args, _特殊1 = "", _特殊2 = "", _特殊3 = "", _特殊4 = "", _特殊5 = "", _特殊6 = "") {
        if (args && args.length > 0 && args[0].indexOf("Luzi_") > -1) {
            const modifiedArgs = [...args]; // 复制原始的 args，创建一个新的数组
            const 体型 = ['Small', 'Normal', 'Large', 'XLarge', 'Luzi_没手臂'];
            for (let i = 0; i < 5; i++) {
                if (modifiedArgs[0].includes(`Yoked/Luzi_${name}_${体型[i]}_${n图层}`)) {
                    modifiedArgs[0] = ICONS2[`${name}_${体型[i]}${_特殊2}`];
                    modifiedArgs[2] = 0;
                    modifiedArgs[3] = 700;
                }
                if (modifiedArgs[0].includes(`OverTheHead/Luzi_${name}_${体型[i]}_${n图层}`)) {
                    modifiedArgs[0] = ICONS2[`${name}_${体型[i]}${_特殊3}`];
                    modifiedArgs[2] = 0;
                    modifiedArgs[3] = 700;
                }
                if (modifiedArgs[0].includes(`BackBoxTie/Luzi_${name}_${体型[i]}_${n图层}`)) {
                    modifiedArgs[0] = ICONS2[`${name}_${体型[i]}${_特殊4}`];
                    modifiedArgs[2] = 0;
                    modifiedArgs[3] = 700;
                }
                if (modifiedArgs[0].includes(`BackElbowTouch/Luzi_${name}_${体型[i]}_${n图层}`)) {
                    modifiedArgs[0] = ICONS2[`${name}_${体型[i]}${_特殊5}`];
                    modifiedArgs[2] = 0;
                    modifiedArgs[3] = 700;
                }
                if (modifiedArgs[0].includes(`BackCuffs/Luzi_${name}_${体型[i]}_${n图层}`)) {
                    modifiedArgs[0] = ICONS2[`${name}_${体型[i]}${_特殊6}`];
                    modifiedArgs[2] = 0;
                    modifiedArgs[3] = 700;
                }
                if (modifiedArgs[0].includes(`Luzi_${name}_${体型[i]}_${n图层}`)) {
                    modifiedArgs[0] = ICONS2[`${name}_${体型[i]}${_特殊1}`];
                    modifiedArgs[2] = 0;
                    modifiedArgs[3] = 700;
                }
            }
            // 直接修改args[0]的值
            args[0] = modifiedArgs[0];
            args[2] = modifiedArgs[2];
            args[3] = modifiedArgs[3];
        }
        return args; // 返回修改后的参数
    }

    function luzi下装(name, 图层, args, _特殊1 = "", _特殊2 = "", _特殊3 = "", _特殊4 = "") {
        if (args && args.length > 0 && args[0].indexOf("Luzi_") > -1) {
            const modifiedArgs = [...args]; // 复制原始的 args，创建一个新的数组
            const 体型 = ['Small', 'Normal', 'Large', 'XLarge'];

            for (let i = 0; i < 4; i++) {
                if (modifiedArgs[0].includes(`Kneel/Luzi_${name}_${体型[i]}_${图层}`)) {
                    modifiedArgs[0] = ICONS2[`${name}_${体型[i]}${_特殊2}`];
                    modifiedArgs[2] = 0;
                    modifiedArgs[3] = 700;
                }
                if (modifiedArgs[0].includes(`KneelingSpread/Luzi_${name}_${体型[i]}_${图层}`)) {
                    modifiedArgs[0] = ICONS2[`${name}_${体型[i]}${_特殊3}`];
                    modifiedArgs[2] = 0;
                    modifiedArgs[3] = 700;
                }
                if (modifiedArgs[0].includes(`LegsClosed/Luzi_${name}_${体型[i]}_${图层}`)) {
                    modifiedArgs[0] = ICONS2[`${name}_${体型[i]}${_特殊4}`];
                    modifiedArgs[2] = 0;
                    modifiedArgs[3] = 700;
                }
                if (modifiedArgs[0].includes(`Luzi_${name}_${体型[i]}_${图层}`)) {
                    modifiedArgs[0] = ICONS2[`${name}_${体型[i]}${_特殊1}`];
                    modifiedArgs[2] = 0;
                    modifiedArgs[3] = 700;
                }
            }
            // 直接修改args[0]的值
            args[0] = modifiedArgs[0];
            args[2] = modifiedArgs[2];
            args[3] = modifiedArgs[3];
        }
        return args; // 如果没有匹配，返回原始 args
    }

    function luzi简单道具(name, 图层, 图层2, args) {
        if (args && args.length > 0 && args[0].indexOf("Luzi_") > -1) {
            const 体型 = ['Small', 'Normal', 'Large', 'XLarge'];
            for (let i = 0; i < 4; i++) {
                if (args[0].includes(`Luzi_${name}_${体型[i]}_${图层}`)) {
                    const modifiedArgs = [...args];
                    modifiedArgs[0] = 图层2;
                    modifiedArgs[2] = 0;
                    modifiedArgs[3] = 700;
                    // 直接修改args[0]的值
                    args[0] = modifiedArgs[0];
                    args[2] = modifiedArgs[2];
                    args[3] = modifiedArgs[3];
                }
            }
        }
        return args; // 如果没有匹配，返回原始 args
    }

    function 帽子(name, 图层, args, _特殊1 = "", _特殊2 = "", _特殊3 = "", _特殊4 = "", _特殊5 = "", _特殊6 = "") {
        if (args && args.length > 0 && args[0].indexOf("Luzi_") > -1) {
            const modifiedArgs = [...args]; // 复制原始的 args，创建一个新的数组

            if (modifiedArgs[0].includes(`Yoked/Luzi_${name}_${图层}`)) {
                modifiedArgs[0] = ICONS2[`${name}_${_特殊2}`];
            }
            if (modifiedArgs[0].includes(`OverTheHead/Luzi_${name}_${图层}`)) {
                modifiedArgs[0] = ICONS2[`${name}_${_特殊3}`];
            }
            if (modifiedArgs[0].includes(`BackBoxTie/Luzi_${name}_${图层}`)) {
                modifiedArgs[0] = ICONS2[`${name}_${_特殊4}`];
            }
            if (modifiedArgs[0].includes(`BackElbowTouch/Luzi_${name}_${图层}`)) {
                modifiedArgs[0] = ICONS2[`${name}_${_特殊5}`];
            }
            if (modifiedArgs[0].includes(`BackCuffs/Luzi_${name}_${图层}`)) {
                modifiedArgs[0] = ICONS2[`${name}_${_特殊6}`];
            }
            if (modifiedArgs[0].includes(`Luzi_${name}_${图层}`)) {
                modifiedArgs[0] = ICONS2[`${name}_${_特殊1}`];
            }

            modifiedArgs[2] = 0;
            modifiedArgs[3] = 700;

            // 直接修改args[0]的值
            args[0] = modifiedArgs[0];
            args[2] = modifiedArgs[2];
            args[3] = modifiedArgs[3];
        }
        return args; // 如果没有匹配，返回原始 args
    }

    function luzi简单道具2(name, 图层, 图层2, args) {
        if (args && args.length > 0 && args[0].indexOf("Luzi_") > -1) {
            const modifiedArgs = [...args]; // 复制原始的 args，创建一个新的数组

            if (modifiedArgs[0].includes(`Luzi_${name}_${图层}`)) {
                modifiedArgs[0] = 图层2;
                modifiedArgs[2] = 0;
                modifiedArgs[3] = 700;
            }

            // 直接修改args[0]的值
            args[0] = modifiedArgs[0];
            args[2] = modifiedArgs[2];
            args[3] = modifiedArgs[3];
        }
        return args; // 如果没有匹配，返回原始 args
    }
    // 这些主要是用来调用图片的
    function luzi人棍上身(name, args, _图层 = "") {
        if (args && args.length > 0 && args[0].indexOf("Luzi_") > -1) {
            const modifiedArgs = [...args]; // 复制原始的 args，创建一个新的数组
            for (let i = 0; i < 2; i++) {
                if (modifiedArgs[0].includes(`Yoked/${name}_Luzi_没手臂${_图层}`)) {
                    modifiedArgs[0] = ICONS2[`${name}_Yoked`];
                    modifiedArgs[2] = 0;
                    modifiedArgs[3] = 700;
                }
                if (modifiedArgs[0].includes(`OverTheHead/${name}_Luzi_没手臂${_图层}`)) {
                    modifiedArgs[0] = ICONS2[`${name}_OverTheHead`];
                    modifiedArgs[2] = 0;
                    modifiedArgs[3] = 700;
                }
                if (modifiedArgs[0].includes(`BackElbowTouch/${name}_Luzi_没手臂${_图层}`)) {
                    modifiedArgs[0] = ICONS2[`${name}_BackElbowTouch`];
                    modifiedArgs[2] = 0;
                    modifiedArgs[3] = 700;
                }
                if (modifiedArgs[0].includes(`BackCuffs/${name}_Luzi_没手臂${_图层}`)) {
                    modifiedArgs[0] = ICONS2[`${name}_BackElbowTouch`];
                    modifiedArgs[2] = 0;
                    modifiedArgs[3] = 700;
                }
                if (modifiedArgs[0].includes(`BackBoxTie/${name}_Luzi_没手臂${_图层}`)) {
                    modifiedArgs[0] = ICONS2[`${name}_BackBoxTie`];
                    modifiedArgs[2] = 0;
                    modifiedArgs[3] = 700;
                }
            }
            // 直接修改args[0]的值
            args[0] = modifiedArgs[0];
            args[2] = modifiedArgs[2];
            args[3] = modifiedArgs[3];
        }
        return args; // 返回修改后的参数
    }
    // 这些主要是用来调用图片的
    function luzi人棍下身(name, args, _图层 = "") {
        if (args && args.length > 0 && args[0].indexOf("Luzi_") > -1) {
            const modifiedArgs = [...args]; // 复制原始的 args，创建一个新的数组
            for (let i = 0; i < 2; i++) {
                if (modifiedArgs[0].includes(`KneelingSpread/${name}_Luzi_没腿${_图层}`)) {
                    modifiedArgs[0] = ICONS2[`${name}_KneelingSpread`];
                    modifiedArgs[2] = 0;
                    modifiedArgs[3] = 700;
                }
                if (modifiedArgs[0].includes(`Kneel/${name}_Luzi_没腿${_图层}`)) {
                    modifiedArgs[0] = ICONS2[`${name}_Kneel`];
                    modifiedArgs[2] = 0;
                    modifiedArgs[3] = 700;
                }
            }
            // 直接修改args[0]的值
            args[0] = modifiedArgs[0];
            args[2] = modifiedArgs[2];
            args[3] = modifiedArgs[3];
        }
        return args; // 返回修改后的参数
    }

    // 透视紧身衣_BackBoxTie: "",
    // 透视紧身衣_Yoked: "",
    // 透视紧身衣_OverTheHead: "",
    // 透视紧身衣_BackElbowTouch: "",
    // Assets/Female3DCG/Suit/Yoked/SeethroughSuit_Luzi_%E6%B2%A1%E6%89%8B%E8%87%82_Suit.png
    // 透视紧身衣_Kneel: "",
    // 透视紧身衣_KneelingSpread: "",
    // =======================================================================================

    // =======================================================================================
    // 替换名字和给予略缩图
    // CustomImages22.set(costumeName, costumeIcon);
    // =======================================================================================

    // =======================================================================================
    const assetsConfig = {
        Cloth: [
            {
                Name: "Luzi_女仆装1",
                Prerequisite: ["HasBreasts"],
                Layer: [
                    { Name: "Dress" },
                ]
            },
            {
                Name: "Luzi_修女下身1",
                Prerequisite: ["HasBreasts"],
                Layer: [
                    { Name: "Back", CopyLayerColor: "Dress", Priority: 6 },
                    { Name: "Back2", Priority: 5 },
                    { Name: "Dress", Priority: 32 }
                ]
            }
        ],
        Hat: [
            {
                Name: "Luzi_修女头饰1",
                Prerequisite: ["HasBreasts"],
                Layer: [
                    { Name: "Back", Priority: 1 },
                    { Name: "Back2", Priority: 54 },
                    { Name: "Front", Priority: 55 }
                ]
            }
        ],
        BodyUpper: [
            {
                Name: "Luzi_没手臂",
                Extended: true,
                Gender: "F",
                Layer: [
                    { Name: "", ParentGroup: null, HasType: false },
                ],
                SetPose: ["BackBoxTie"],             // 触发 Kneel 姿势
                AllowPose: ["BackBoxTie", 'BackCuffs', 'BackElbowTouch', 'OverTheHead', 'TapedHands', 'Yoked'],   // 允许 Kneel 和 KneelingSpread 姿势
                AllowActivePose: ["BackBoxTie", 'BackCuffs', 'BackElbowTouch', 'OverTheHead', 'TapedHands', 'Yoked'], // 允许主动姿势 Kneel 和 KneelingSpread
            }
        ],
        BodyLower: [{
            Name: "Luzi_没腿",
            SetPose: ["Kneel"],             // 触发 Kneel 姿势
            AllowPose: ["Kneel", "KneelingSpread"],   // 允许 Kneel 和 KneelingSpread 姿势
            AllowActivePose: ["Kneel", "KneelingSpread"], // 允许主动姿势 Kneel 和 KneelingSpread
        }],


    };



    // 这个是替换名字 左边是 Cloth.Asset.push  Name的名字 右边是要替换的名字
    const newDescriptions = {
        'Luzi_女仆装1': '女仆装',
        'Luzi_修女下身1': '修女下身',
        'Luzi_修女头饰1': '修女头饰',
        'Luzi_没手臂': '上身:小号特殊',
        'Luzi_没腿': '下身:小号特殊',
    };
    // =======================================================================================
    // =======================================================================================
    for (const groupName in assetsConfig) {
        const group = AssetFemale3DCG.find(group => group.Group === groupName);
        if (group) {
            group.Asset.push(...assetsConfig[groupName]);
        }
    }
    // =======================================================================================
    // =======================================================================================
    mod.hookFunction("GLDrawImage", 1, (args, next) => {
        // 这个是查找替换 newDescriptions
        const filteredAssets = Asset.filter(item => item.Name.includes('Luzi_'));
        filteredAssets.forEach(item => {
            const newName = item.Name;
            if (newDescriptions[newName]) {
                item.Description = newDescriptions[newName];
            }
        });
        // =======================================================================================
        // 'Assets/Female3DCG/BodyUpper/BackBoxTie/Luzi_没手臂_White.png'

        // 'Assets/Female3DCG/Nipples/Nipples1_Luzi_没手臂.png'
        // =======================================================================================
        // 下面这些是调用图片的
        var data = args[0];

        // 定义要保留不替换的字符串的数组
        var stringsToKeep = [/White/, /SeethroughSuit/];
        for (var i = 0; i < args.length; i++) {
            if (typeof args[i] === 'string') {
                // 检查是否在不替换列表中
                if (!stringsToKeep.some(regex => regex.test(args[i]))) {
                    args[i] = args[i].replace(/Luzi_没手臂/g, 'Small');
                }
            }
        }
        // 定义要保留不替换的字符串的数组
        var stringsToKeep = [/White/, /SeethroughSuit/];
        for (var i = 0; i < args.length; i++) {
            if (typeof args[i] === 'string') {
                // 检查是否在不替换列表中
                if (!stringsToKeep.some(regex => regex.test(args[i]))) {
                    args[i] = args[i].replace(/Luzi_没腿/g, 'Small');
                }
            }
        }
        if (args[0].includes(`Suit`)) {  // 括号里面改要找的关键词 写Luzi_就只会显示含有Luzi_的数组 // 测试的话 可以在 F12 直接修改值不用刷新
            //console.log(args) // <-- 要弄懂主要看这个
        }

        if (!!data && data.indexOf("Luzi_") > -1) {
            if (args && args.length > 0) {
                luzi衣服(`女仆装1`, `Dress`, args, `_露手`);

                luzi衣服(`修女下身1`, `Dress`, args, `_露手`);
                luzi简单道具(`修女下身1`, "Back2", ICONS2.修女下身1_Back2, args);
                luzi简单道具(`修女下身1`, "Back", ICONS2.修女下身1_Back, args);

                帽子(`修女头饰1`, `Front`, args, "", `抬手`, `举手`);
                luzi简单道具2(`修女头饰1`, "Back2", ICONS2.修女头饰1_Back2, args);
                luzi简单道具2(`修女头饰1`, "Back", ICONS2.修女头饰1_Back, args);

                luzi人棍上身(`SeethroughSuit`, args, `_Suit`)
                luzi人棍下身(`SeethroughSuit`, args)
                // ---------------------
                luzi上半身(`没手臂`, args);
                luzi下半身(`没腿`, args);
                ServerPlayerInventorySync();
            }
        }
        return next(args);
    });
    // =======================================================================================
    // 下面这些是条件函数 不加的话人棍体型不会被识别性别    // 这个应该还有别的用处
    function CustomInventoryPrerequisiteMessage(C, Prerequisite) {
        switch (Prerequisite) {
            case "HasBreasts":
                const existingSizes = ["XLarge", "Large", "Normal", "Small", "Luzi_没手臂"];
                return !InventoryIsItemInList(C, "BodyUpper", existingSizes) ? "MustHaveBreasts" : "";
        }
    }
    // ---------------------
    // 使用新的自定义函数来替代原始函数
    mod.hookFunction("InventoryPrerequisiteMessage", 1, (args, next) => {
        args[1] = CustomInventoryPrerequisiteMessage(args[0], args[1]); // 调用自定义函数
        return next(args);
    });
    // =======================================================================================
    // 这个不用管不知道加上去有什么用看着官方有就跟着加的      看见折叠就好了
    AssetFemale3DCGExtended.BodyUpper.Luzi_没手臂 = {
        Archetype: ExtendedArchetype.TYPED,
        CopyConfig: { GroupName: "BodyUpper", AssetName: "Small" },
    };
})();
// Player.ActivePose

// Assets/Female3DCG/BodyUpper/Small_White.png
// Assets/Female3DCG/BodyUpper/Normal_White.png
// Assets/Female3DCG/BodyUpper/Large_White.png
// Assets/Female3DCG/BodyUpper/XLarge_White.png



// Assets/Female3DCG/Cloth/Luzi_女仆装1_Luzi_没手臂_Dress.png
// Assets/Female3DCG/Cloth/Luzi_女仆装1_XLarge_Dress.png



