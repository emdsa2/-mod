const packageJSON = require("./package.json");

const { buildModInfo, buildRollupSetting, createRollupConfig } = require("../rollup.tools");

module.exports = (cliArgs) => {
    const debug = !!cliArgs.configDebug;
    const baseURL = cliArgs.configBaseURL;
    const beta = !!cliArgs.configBeta;

    const modInfo = buildModInfo(packageJSON);
    const setting = buildRollupSetting(packageJSON, debug, beta);

    const log = (msg) => {
        console.log(`[${modInfo.name}] ${msg}`);
    };

    if (debug) log("Debug mode enabled");
    if (!baseURL) throw new Error("No deploy site specified");

    const baseURL_ = baseURL.endsWith("/") ? baseURL : `${baseURL}/`;

    log(`Deploying to ${baseURL_}`);
    log(`Build time: ${new Date().toLocaleString("zh-CN", { hour12: false })}`);

    return createRollupConfig(__dirname, baseURL, modInfo, setting);
};
