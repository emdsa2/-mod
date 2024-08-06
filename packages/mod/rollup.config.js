const commonjs = require("@rollup/plugin-commonjs");
const resolve = require("@rollup/plugin-node-resolve");
const replace = require("@rollup/plugin-replace");
const terser = require("@rollup/plugin-terser");
const path = require("path");
const fs = require("fs");
const package = require("./package.json");

const { relativePath, collectComponents, buildModInfo, readAssetsMapping } = require("../rollup.tools");

const modInfo = buildModInfo(package);

const buildDestDir = `${process.env.INIT_CWD}/public/`;

const resolveRelativeDir = relativePath(".", __dirname);

const rSetting = package.rollupSetting;

const mainInputFile = `${resolveRelativeDir}/${rSetting.input}`;

const default_config = (debug) => ({
    input: `${mainInputFile}`,
    output: {
        file: `${buildDestDir}/${rSetting.output}`,
        format: "iife",
        sourcemap: debug ? false : "inline",
        banner: ``,
    },
    treeshake: true,
});

const componentsImports = collectComponents(rSetting.componentDir, resolveRelativeDir, rSetting.componentDir);

const assetMapping = JSON.stringify(readAssetsMapping(rSetting.assets.location, rSetting.assets.assets));

const defaultPluins = [
    replace({
        __mod_name__: modInfo.name,
        __mod_full_name__: modInfo.fullName,
        __mod_version__: modInfo.version,
        __repo__: modInfo.repo,
        __rollup_imports__: componentsImports.imports,
        __rollup_setup__: componentsImports.setups,
        __asset_overrides__: assetMapping,
        preventAssignment: false,
    }),
    commonjs(),
    resolve({ browser: true }),
];

const plugins = (debug) => (debug ? defaultPluins : [...defaultPluins, terser({ sourceMap: true })]);

const log = (msg) => {
    console.log(`[${modInfo.name}] ${msg}`);
};

module.exports = (cliArgs) => {
    const debug = !!cliArgs.configDebug;
    const deploy = cliArgs.configDeploy;

    if (debug) log("Debug mode enabled");

    return { ...default_config(debug), plugins: plugins(debug) };
};
