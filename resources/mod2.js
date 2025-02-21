(function () {
    "use strict";
    const script = document.createElement("script");
    script.src = `https://sugarchain-studio.github.io/echo-activity-ext/bc-activity.js?timestamp=${Date.now()}`;
    script.type = "text/javascript";
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
})();