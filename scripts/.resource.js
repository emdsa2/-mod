const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const getProjectDir = () => {
    let dir = __dirname;
    while (!fs.existsSync(path.join(dir, "package.json"))) {
        const parentDir = path.dirname(dir);
        if (parentDir === dir) {
            throw new Error("无法找到项目根目录");
        }
        dir = parentDir;
    }
    return dir;
};

// args: --dev, --rel, --type <stable|beta>

const args = process.argv.slice(2);
const isDev = args.includes("--dev");
const isRel = args.includes("--rel");

/** @type {"stable" | "beta"} */
const buildType = (() => {
    const typeIndex = args.indexOf("--type");
    
    const type = typeIndex === -1 ? "stable" : args[typeIndex + 1];
    if (!["stable", "beta"].includes(type)) {
        throw new Error(`Invalid build type: ${type}`);
    }
    console.log(`Build type: ${type}`);
    return type;
})();

const projectDir = getProjectDir();
const resourcesDir = path.join(projectDir, "resources");

const publicDir = (()=>{
    if(buildType === "stable") {
        return path.join(projectDir, "public");
    } else {
        const pDir = path.join(projectDir, "public");
        if (!fs.existsSync(pDir)) {
            fs.mkdirSync(pDir);
        }

        return path.join(projectDir, "public", "beta");
    }
})()

function createSymlink(src, dest) {
    try {
        if (fs.existsSync(dest)) {
            const stat = fs.lstatSync(dest);
            if (stat.isDirectory()) {
                fs.rmSync(dest, { recursive: true });
                console.log(`Remove existed dir: ${dest}`);
            } else if (stat.isSymbolicLink()) {
                console.log(`Symbolic link existed: ${dest}, skip`);
                return;
            }
        }

        fs.symlinkSync(src, dest, "junction");
        console.log(`Create symbolic link: ${src} -> ${dest}`);
    } catch (err) {
        console.error(`Failed to create symbolic link: ${src} -> ${dest}`, err);
    }
}

function copyFiles(src, dest) {
    try {
        if (fs.existsSync(dest)) {
            const stat = fs.lstatSync(dest);
            if (stat.isSymbolicLink()) {
                fs.unlinkSync(dest);
                console.log(`Remove symbolic link: ${dest}`);
            }
        }

        execSync(`cp -r ${src} ${dest}`);
        console.log(`Copy files: ${src} -> ${dest}`);
    } catch (err) {
        console.error(`Failed to copy files: ${src} -> ${dest}`, err);
    }
}

function processDirectories() {
    const { dirs, files } = fs.readdirSync(resourcesDir).reduce(
        (acc, item) => {
            const stat = fs.statSync(path.join(resourcesDir, item));
            if (stat.isDirectory()) {
                acc.dirs.push(item);
            } else if (stat.isFile()) {
                acc.files.push(item);
            }
            return acc;
        },
        { dirs: [], files: [] }
    );

    files.forEach((file) => {
        const srcFile = path.join(resourcesDir, file);
        const destFile = path.join(publicDir, file);
        fs.copyFileSync(srcFile, destFile);
        console.log(`Copy file: ${srcFile} -> ${destFile}`);
    });

    dirs.forEach((dir) => {
        const srcDir = path.join(resourcesDir, dir);
        const destDir = path.join(publicDir, dir);

        if (isDev) {
            createSymlink(srcDir, destDir);
        } else if (isRel) {
            copyFiles(srcDir, destDir);
        }
    });
}

if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
}

processDirectories();
