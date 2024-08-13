const commonjs = require("@rollup/plugin-commonjs");
const resolve = require("@rollup/plugin-node-resolve");
const replace = require("@rollup/plugin-replace");
const copy = require("rollup-plugin-copy");
const terser = require("@rollup/plugin-terser");
const packageJSON = require("./package.json");
const alias = require("@rollup/plugin-alias");

const {
    relativePath,
    collectComponents,
    buildModInfo,
    buildLoaderInfo,
    readAssetsMapping,
} = require("../rollup.tools");

const modInfo = buildModInfo(packageJSON);

const loaderInfo = buildLoaderInfo(packageJSON);

const buildDestDir = `${process.env.INIT_CWD}/public/`;

const curDirRelative = relativePath(".", __dirname);

const rSetting = packageJSON.rollupSetting;

const mainInputFile = `${curDirRelative}/${rSetting.input}`;

const default_config = (debug) => ({
    input: `${mainInputFile}`,
    output: {
        file: `${buildDestDir}/${rSetting.output}`,
        format: "iife",
        sourcemap: "inline",
        banner: ``,
    },
    treeshake: true,
});

const componentsImports = rSetting.componentDir
    ? collectComponents(rSetting.componentDir, curDirRelative, rSetting.componentDir)
    : { imports: "", setups: "" };

const assetMapping = rSetting.assets
    ? JSON.stringify(readAssetsMapping(rSetting.assets.location, rSetting.assets.assets))
    : "{}";

const copySetting = (baseURL) => [
    copy({
        targets: [
            {
                src: `${curDirRelative}/loader.template.user.js`,
                dest: buildDestDir,
                rename: loaderInfo.file_name,
                transform: (contents, filename) =>
                    contents
                        .toString()
                        .replace(
                            "__base_url__",
                            `${baseURL.endsWith("/") ? baseURL.substring(0, baseURL.length - 1) : baseURL}`
                        )
                        .replace("__description__", loaderInfo.description)
                        .replace("__name__", modInfo.name)
                        .replace("__author__", loaderInfo.author)
                        .replace("__script_file__", rSetting.output),
            },
        ],
    }),
];

const defaultPluins = (baseURL) => [
    replace({
        __mod_name__: `"${modInfo.name}"`,
        __mod_full_name__: `"${modInfo.fullName}"`,
        __mod_version__: `"${modInfo.version}"`,
        __repo__: modInfo.repo ? `"${modInfo.repo}"` : "undefined",
        __rollup_imports__: componentsImports.imports,
        __rollup_setup__: componentsImports.setups,
        __asset_overrides__: assetMapping,
        __base_url__: `"${baseURL}"`,
        preventAssignment: false,
    }),
    alias({
        entries: {
            "@mod-utils": `${__dirname}/../utils`,
            "bondage-club-mod-sdk": `${__dirname}/node_modules/bondage-club-mod-sdk`,
        },
    }),
    commonjs(),
    resolve({ browser: true }),
];

const plugins = (debug, baseURL) => {
    const base = [...copySetting(baseURL), ...defaultPluins(baseURL)];
    if (!debug) base.push(terser({ sourceMap: true }));
    return base;
};

const log = (msg) => {
    console.log(`[${modInfo.name}] ${msg}`);
};

module.exports = (cliArgs) => {
    const debug = !!cliArgs.configDebug;
    const baseURL = cliArgs.configBaseURL;

    if (debug) log("Debug mode enabled");
    if (!baseURL) throw new Error("No deploy site specified");

    const baseURL_ = baseURL.endsWith("/") ? baseURL : `${baseURL}/`;

    log(`Deploying to ${baseURL_}`);
    log(`Build time: ${new Date().toLocaleString("zh-CN", { hour12: false })}`);

    return { ...default_config(debug), plugins: plugins(debug, baseURL) };
};
