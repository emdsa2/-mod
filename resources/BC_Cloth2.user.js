// ==UserScript==
// @name         服装拓展
// @namespace    https://www.bondageprojects.com/
// @version      0.4
// @description  BC视觉表现的美学修正与拓展
// @author       Echo
// @include      /^https:\/\/(www\.)?bondageprojects\.elementfx\.com\/R\d+\/(BondageClub|\d+)(\/((index|\d+)\.html)?)?$/
// @include      /^https:\/\/(www\.)?bondage-europe\.com\/R\d+\/(BondageClub|\d+)(\/((index|\d+)\.html)?)?$/
// @run-at       document-end
// ==/UserScript==

(function () {
    "use strict";
    const script = document.createElement("script");
    script.src = `https://sugarchain-studio.github.io/echo-clothing-ext/bc-cloth.js?timestamp=${Date.now()}`;
    script.type = "text/javascript";
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
})();
