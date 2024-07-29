// ==UserScript==
// @name        服装拓展 无🍔版
// @namespace    https://www.bondageprojects.com/
// @version      0.2
// @description  服装拓展 无🍔版
// @author       Echo
// @include      /^https:\/\/(www\.)?bondageprojects\.elementfx\.com\/R\d+\/(BondageClub|\d+)(\/((index|\d+)\.html)?)?$/
// @include      /^https:\/\/(www\.)?bondage-europe\.com\/R\d+\/(BondageClub|\d+)(\/((index|\d+)\.html)?)?$/
// @grant        GM_xmlhttpRequest
// @run-at       document-end
// ==/UserScript==

(function () {
    'use strict';
    const script = document.createElement("script");
    const timestamp = new Date().getTime(); // 创建当前时间的时间戳
    script.src = `https://emdsa2.github.io/-mod/mod1.js?timestamp=${timestamp}`;
    document.head.appendChild(script);
})();

