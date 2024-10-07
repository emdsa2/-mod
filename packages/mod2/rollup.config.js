const packageJSON = require("./package.json");
const commonjs = require("@rollup/plugin-commonjs");
const resolve = require("@rollup/plugin-node-resolve");
const replace = require("@rollup/plugin-replace");
const copy = require("rollup-plugin-copy");
const terser = require("@rollup/plugin-terser");
const alias = require("@rollup/plugin-alias");

const {
    buildModInfo,
    buildRollupSetting,
    collectComponents,
    relativePath,
    readAssetsMapping,
} = require("../rollup.tools");

/**
 * @param { string } curDir
 * @param { string } baseURL
 * @param { ReturnType<typeof buildModInfo> } modInfo
 * @param { ReturnType<typeof buildRollupSetting> } rollupSetting
 */
function createRollupConfig(curDir, baseURL, modInfo, rollupSetting) {
    const buildDestDir = `${process.env.INIT_CWD}/public/`;
    const curDirRelative = relativePath(".", curDir);

    const config = {
        input: `${curDirRelative}/${rollupSetting.input}`,
        output: {
            file: `${buildDestDir}/${rollupSetting.output}`,
            format: "iife",
            sourcemap: "inline",
            banner: ``,
        },
        treeshake: true,
    };

    const componentsImports = rollupSetting.componentDir
        ? collectComponents(rollupSetting.componentDir, curDirRelative, rollupSetting.componentDir)
        : { imports: "", setups: "" };

    const assetMapping = rollupSetting.assets
        ? JSON.stringify(readAssetsMapping(rollupSetting.assets.location, rollupSetting.assets.assets))
        : "{}";

    const loader_replaces = {
        __base_url__: `${baseURL.endsWith("/") ? baseURL.substring(0, baseURL.length - 1) : baseURL}`,
        __description__: rollupSetting.description,
        __name__: modInfo.name,
        __author__: rollupSetting.author,
        __script_file__: rollupSetting.output,

        __mod_name__: `"${modInfo.name}"`,
        __mod_full_name__: `"${modInfo.fullName}"`,
        __mod_version__: `"${modInfo.version}"`,
        __mod_repo__: modInfo.repo ? `"${modInfo.repo}"` : "undefined",
        __mod_asset_overrides__: assetMapping,
        __mod_base_url__: `"${baseURL}"`,

        __mod_rollup_imports__: componentsImports.imports,
        __mod_rollup_setup__: componentsImports.setups,
    };

    return {
        ...config,
        plugins: [
            copy({
                targets: [
                    {
                        src: `${curDirRelative}/../loader.template.user.js`,
                        dest: buildDestDir,
                        rename: rollupSetting.loaderName,
                        transform: (contents, filename) =>
                            Object.entries(loader_replaces).reduce((pv, [from, to]) => {
                                return pv.replace(from, to);
                            }, contents.toString()),
                    },
                ],
            }),
            replace({
                ...loader_replaces,
                preventAssignment: false,
            }),
            alias({
                entries: {
                    "@mod-utils": `${curDir}/../utils`,
                    "bondage-club-mod-sdk": `${curDir}/node_modules/bondage-club-mod-sdk`,
                },
            }),
            commonjs(),
            resolve({ browser: true }),
            ...(rollupSetting.debug ? [] : [terser({ sourceMap: true })]),
        ],
    };
}

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
    if (!baseURL || typeof baseURL !== "string") throw new Error("No deploy site specified");

    const baseURL_ = baseURL.endsWith("/") ? baseURL : `${baseURL}/`;

    log(`Deploying to ${baseURL_}`);
    log(`Build time: ${new Date().toLocaleString("zh-CN", { hour12: false })}`);

    return createRollupConfig(__dirname, baseURL, modInfo, setting);
};
