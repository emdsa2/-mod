const fs = require("fs");
const path = require("path");

/**
 * @brief 分析相对路径，与path.relative()不同的是，返回的路径会保持"./"开头
 * @param {string} from
 * @param {string} to
 * @returns {string}
 */
function relativePath(from, to) {
    const ret = path.relative(from, to).replace(/\\/g, "/");
    if (ret == "") return ".";
    return !ret.startsWith("./") ? `./${ret}` : ret;
}

/**
 * @brief 收集组件，生成import语句和setup语句
 * @param { string } componentsDir 组件目录
 * @param { string } baseDir 组件目录是一组相对目录，这些目录的基础目录
 * @param { string } importStartDir import语句的起始目录
 * @returns { { imports: string, setups: string } }
 */
function collectComponents(componentsDir, baseDir, importStartDir) {
    imports = [];
    setups = [];

    const compDir = `${baseDir}/${componentsDir}`;

    const files = ((dir) => {
        let dirWork = [dir];
        let files = [];
        while (dirWork.length > 0) {
            const dir = dirWork.pop();
            const rDir = relativePath(importStartDir, dir);

            fs.readdirSync(dir, { withFileTypes: true }).forEach((file) => {
                if (file.isDirectory()) dirWork.push(`${dir}/${file.name}`);
                else if (file.isFile() && file.name.endsWith(".js")) {
                    if (file.name === "index.js") return;
                    const fileName = file.name.replace(".js", "");
                    files.push({ name: fileName, path: `${rDir}/${fileName}` });
                }
            });
        }
        return files;
    })(compDir);

    files.forEach((file) => {
        imports.push(`import ${file.name} from "${file.path}";`);
        setups.push(`${file.name}();`);
    });

    imports = imports.join("\n");
    setups = setups.join("\n");

    return { imports, setups };
}

/**
 * @brief 从package.json中构建mod信息
 * @param {Object} packageObj 通过require()加载的package.json对象
 * @returns { { name: string, fullName: string, version: string, repo: string } }
 */
function buildModInfo(packageObj) {
    return {
        name: `"${packageObj.bcModInfo.name}"`,
        fullName: `"${packageObj.bcModInfo.fullName}"`,
        version: `"${packageObj.version}"`,
        repo: (() => {
            if (!packageObj.repository || !packageObj.repository.url) return "undefined";
            if (packageObj.repository.url.startsWith("git+"))
                return `"${packageObj.repository.url.replace("git+", "").replace(".git", "")}"`;
            return `"${packageObj.repository.url.replace(".git", "")}"`;
        })(),
    };
}

/**
 * @typedef { string | AssetOverrideContainer } AssetOverrideLeaf
 * @typedef { Record<string, AssetOverrideLeaf> } AssetOverrideContainer
 * @brief 读取assets映射
 * @param {string} startDir 基础目录
 * @param {string[]} assetDirs 资源目录
 * @returns { AssetOverrideContainer } 资源映射表
 */
function readAssetsMapping(startDir, assetDirs) {
    let workingDir = [...assetDirs];
    let assets = {};

    function makeLeaf(fpath) {
        let curDir = assets;
        let dirs = path.dirname(fpath).split(/\\|\//);
        let file = path.basename(fpath);

        console.log(`[Assets] Found asset: ${fpath}, map : ${JSON.stringify(dirs)}`);
        while (dirs.length > 0) {
            const cur = dirs.shift();
            if (cur === ".") continue;
            if (!curDir[cur]) curDir[cur] = {};
            curDir = curDir[cur];
        }
        curDir[file] = 0;
    }

    while (workingDir.length > 0) {
        const dir = workingDir.pop();

        fs.readdirSync(path.join(startDir, dir), { withFileTypes: true }).forEach((file) => {
            if (file.isDirectory()) workingDir.push(`${dir}/${file.name}`);
            else if (file.isFile()) makeLeaf(`${dir}/${file.name}`);
        });
    }
    return assets;
}

module.exports = { relativePath, collectComponents, buildModInfo, readAssetsMapping };
