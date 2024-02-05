// ==UserScript==
// @name         BC 服装拓展二改data
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  服装拓展二改data
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

    const MOD_NAME = "服装拓展二改data";
    const MOD_FULL_NAME = "服装拓展二改data";
    const MOD_VERSION = "0.2.0";

    const mod = bcModSdk.registerMod({
        name: MOD_NAME,
        fullName: MOD_FULL_NAME,
        version: MOD_VERSION
    });
    const w = window;


    // 获取图像数据并转换为 Base64 编码
    function fetchImageAndConvertToBase64(imageName, imageUrl) {
        return fetch(imageUrl)
            .then(response => response.blob())
            .then(blob => {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onloadend = () => resolve([imageName, reader.result]);
                    reader.onerror = reject;
                    reader.readAsDataURL(blob);
                });
            });
    }
    
    const imageUrlArray = {
        "Assets/Female3DCG/ItemDevices/猪猪_Luzi_鼻子.png": "https://raw.githubusercontent.com/emdsa2/-mod/main/image/%E7%8C%AA%E7%8C%AA%E9%BC%BB%E5%AD%90.png",
        "Assets/Female3DCG/ItemDevices/猪猪_Luzi_猪猪.png": "https://raw.githubusercontent.com/emdsa2/-mod/main/image/%E7%8C%AA%E7%8C%AA%E7%8C%AA%E7%8C%AA.png",
        "Assets/Female3DCG/ItemDevices/猪猪_Luzi_缰绳.png": "https://raw.githubusercontent.com/emdsa2/-mod/main/image/%E7%8C%AA%E7%8C%AA%E7%BC%B0%E7%BB%B3.png",
    };

    // 初始化 ICONSSSSSSS 为空对象
    w.ICONSSSSSSS = {};

    // 使用 Promise.all 处理所有图像链接
    Promise.all(Object.entries(imageUrlArray).map(([imageName, imageUrl]) => fetchImageAndConvertToBase64(imageName, imageUrl)))
        .then(base64Array => {
            // 将所有的 Base64 编码拼接到 ICONSSSSSSS 中
            base64Array.forEach(([imageName, base64]) => {
                w.ICONSSSSSSS[imageName] = base64;
            });

            // console.log(w.ICONSSSSSSS);
        })
        .catch(error => { console.error(error); });




    // =======================================================================================
    const ICONS = Object.freeze({
        "Assets/Female3DCG/ItemDevices/Preview/猪猪_Luzi.png": "https://i.ibb.co/r0N2zGr/Luzi.png",

    });



    // Small
    // Normal
    // Large
    // XLarge
    mod.hookFunction("GLDrawImage", 1, (args, next) => {
        const data = args[0];

        if (data.includes("_Luzi")) {
            // console.log(data)
        }


        if (ICONSSSSSSS[data]) {
            args[0] = ICONSSSSSSS[data];
            args[2] = 0;
            args[3] = 590;
        }

        if (ICONS[data]) {
            args[0] = ICONS[data];
            args[2] = 0;
            args[3] = 590;
        }




        next(args);
    });
    mod.hookFunction("DrawImageResize", 1, (args, next) => {
        const data = args[0];
        if (ICONS[data]) {
            args[0] = ICONS[data];
        }

        next(args);
    });





    // ================================================================================
    // ================================================================================
    const addAsset = {
        ItemDevices: [
            { Name: "猪猪_Luzi", Random: false, SetPose: ["KneelingSpread"], AllowActivePose: ["KneelingSpread"], OverrideHeight: { Height: -150, Priority: 21 }, Layer: [{ Name: "鼻子", Priority: 56 }, { Name: "猪猪", Priority: 55 }, { Name: "缰绳", Priority: 26 },], },


        ],

    };
    function updateFemale3DCGAssets() {
        // "Socks", "SocksRight", "SocksLeft","RightAnklet","LeftAnklet","Garters",
        for (const groupName in addAsset) {
            const group = AssetFemale3DCG.find(group => group.Group === groupName);
            if (group) {
                group.Asset.push(...addAsset[groupName]);
            }
        }
        //Asset.forEach(A => { if (A.Name === "隐藏四肢_Luzi") { console.log(A) } });
        AssetFemale3DCGExtended.BodyUpper.手臂空_Luzi = {
            Archetype: ExtendedArchetype.TYPED,
            CopyConfig: { GroupName: "BodyUpper", AssetName: "Small" },
        };

    }

    function AssetAdd_Luzi(assetgroupName, assetName) {
        let assetGtoup = AssetFemale3DCG.find(asset => asset.Group === assetgroupName)
        let asset = assetGtoup.Asset.find(asset => asset.Name === assetName)
        let G = AssetGroupMap.get(assetgroupName)
        AssetAdd(G, asset, AssetFemale3DCGExtended);
    }

    let isAssetAdded = false;
    mod.hookFunction('LoginResponse', 0, (args, next) => {
        if (!isAssetAdded) {
            // PoseRecord.push(...newPose);

            updateFemale3DCGAssets();

            AssetAdd_Luzi("ItemDevices", "猪猪_Luzi");

            // const G = AssetGroupAdd("Female3DCG", 'ItemDevices');
            // AssetAdd(G , AssetFemale3DCG[73].Asset[58] , AssetFemale3DCGExtended);
            isAssetAdded = true;
        }
        next(args);
    });





    // ================================================================================
    // ================================================================================



    // ================================================================================
    // ================================================================================


    mod.hookFunction("LoginResponse", 50, (args, next) => {
        next(args);

        if (Asset) {        // 确保 Asset 不为 undefined
            const assetDescription = Asset.filter(item => item.Name && item.Name.includes('_Luzi'));
            assetDescription.forEach(item => {
                if (item.Name) {
                    item.Description = item.Name.replace('_Luzi', '');
                }
            });
        }


    });

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
        if (args[0] && args[0].includes('_Luzi')) {
            args[0] = args[0].replace(/.*?_Luzi/, ''); // 删除'_Luzi'及其前面的字符串
        }
        next(args);
    });

    // ================================================================================
    // ================================================================================


    // ================================================================================
    // ================================================================================




})();
