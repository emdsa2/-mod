// ==UserScript==
// @name         动作拓展
// @namespace    https://www.bondageprojects.com/
// @version      0.4
// @description  更多可爱有趣的互动
// @author       Echo
// @include      /^https:\/\/(www\.)?bondageprojects\.elementfx\.com\/R\d+\/(BondageClub|\d+)(\/((index|\d+)\.html)?)?$/
// @include      /^https:\/\/(www\.)?bondage-europe\.com\/R\d+\/(BondageClub|\d+)(\/((index|\d+)\.html)?)?$/
// @run-at       document-end
// ==/UserScript==

(function () {
    "use strict";
    const script = document.createElement("script");
    script.src = `https://sugarchain-studio.github.io/echo-activity-ext/bc-activity.js?timestamp=${Date.now()}`;
    script.type = "text/javascript";
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
})();
