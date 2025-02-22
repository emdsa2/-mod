// ==UserScript==
// @name         服装拓展
// @namespace    https://www.bondageprojects.com/
// @version      0.3
// @description  服装拓展加载脚本描述
// @author       Echo
// @include      /^https:\/\/(www\.)?bondageprojects\.elementfx\.com\/R\d+\/(BondageClub|\d+)(\/((index|\d+)\.html)?)?$/
// @include      /^https:\/\/(www\.)?bondage-europe\.com\/R\d+\/(BondageClub|\d+)(\/((index|\d+)\.html)?)?$/
// @run-at       document-end
// ==/UserScript==

(function () {
    "use strict";
    const script = document.createElement("script");
    script.src = `https://emdsa2.github.io/-mod/mod.js?timestamp=${Date.now()}`;
    script.type = "text/javascript";
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
})();
