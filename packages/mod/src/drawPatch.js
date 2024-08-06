import ModManager from "./modManager";

/** @type {Record<string,string>} */
const ICONSSSSSSS = Object.freeze({
    "Assets/Female3DCG/Socks/CowPrintedSocks_Small.png":
        "https://emdsa2.github.io/-mod/image/CowPrintedSocks_Small.png",
    "Assets/Female3DCG/Socks/LegsClosed/CowPrintedSocks_Small.png":
        "https://emdsa2.github.io/-mod/image/LegsClosed_CowPrintedSocks_Small.png",
    "Assets/Female3DCG/Socks/Spread/CowPrintedSocks_Small.png":
        "https://emdsa2.github.io/-mod/image/Spread_CowPrintedSocks_Small.png",
    "Assets/Female3DCG/Socks/Kneel/CowPrintedSocks_Small.png":
        "https://emdsa2.github.io/-mod/image/Kneel_CowPrintedSocks_Small.png",
    "Assets/Female3DCG/Socks/KneelingSpread/CowPrintedSocks_Small.png":
        "https://emdsa2.github.io/-mod/image/KneelingSpread_CowPrintedSocks_Small.png",
    "Assets/Female3DCG/Socks/CowPrintedSocks_Normal.png":
        "https://emdsa2.github.io/-mod/image/CowPrintedSocks_Normal.png",
    "Assets/Female3DCG/Socks/LegsClosed/CowPrintedSocks_Normal.png":
        "https://emdsa2.github.io/-mod/image/LegsClosed_CowPrintedSocks_Normal.png",
    "Assets/Female3DCG/Socks/Spread/CowPrintedSocks_Normal.png":
        "https://emdsa2.github.io/-mod/image/Spread_CowPrintedSocks_Normal.png",
    "Assets/Female3DCG/Socks/Kneel/CowPrintedSocks_Normal.png":
        "https://emdsa2.github.io/-mod/image/Kneel_CowPrintedSocks_Normal.png",
    "Assets/Female3DCG/Socks/KneelingSpread/CowPrintedSocks_Normal.png":
        "https://emdsa2.github.io/-mod/image/KneelingSpread_CowPrintedSocks_Normal.png",
    "Assets/Female3DCG/Socks/CowPrintedSocks_Large.png":
        "https://emdsa2.github.io/-mod/image/CowPrintedSocks_Large.png",
    "Assets/Female3DCG/Socks/LegsClosed/CowPrintedSocks_Large.png":
        "https://emdsa2.github.io/-mod/image/LegsClosed_CowPrintedSocks_Large.png",
    // 丢失 "Assets/Female3DCG/Socks/Spread/CowPrintedSocks_Large.png": "",
    "Assets/Female3DCG/Socks/Kneel/CowPrintedSocks_Large.png":
        "https://emdsa2.github.io/-mod/image/Kneel_CowPrintedSocks_Large.png",
    "Assets/Female3DCG/Socks/KneelingSpread/CowPrintedSocks_Large.png":
        "https://emdsa2.github.io/-mod/image/KneelingSpread_CowPrintedSocks_Large.png",
    "Assets/Female3DCG/Socks/CowPrintedSocks_XLarge.png":
        "https://emdsa2.github.io/-mod/image/CowPrintedSocks_XLarge.png",
    "Assets/Female3DCG/Socks/LegsClosed/CowPrintedSocks_XLarge.png":
        "https://emdsa2.github.io/-mod/image/LegsClosed_CowPrintedSocks_XLarge.png",
    "Assets/Female3DCG/Socks/Spread/CowPrintedSocks_XLarge.png":
        "https://emdsa2.github.io/-mod/image/Spread_CowPrintedSocks_XLarge.png",
    "Assets/Female3DCG/Socks/Kneel/CowPrintedSocks_XLarge.png":
        "https://emdsa2.github.io/-mod/image/Kneel_CowPrintedSocks_XLarge.png",
    "Assets/Female3DCG/Socks/KneelingSpread/CowPrintedSocks_XLarge.png":
        "https://emdsa2.github.io/-mod/image/KneelingSpread_CowPrintedSocks_XLarge.png",
});

export default function setup() {
    ModManager.patchFunction("GLDrawLoadImage", {
        "Img.src = url;": 'Img.crossOrigin = "Anonymous";\n\t\tImg.src = url;',
    });

    ModManager.hookFunction("GLDrawImage", 1, (args, next) => {
        const data = args[0];
        if (typeof data === "string") {
            if (data.includes("_笨笨蛋Luzi")) {
                args[0] = data.replace("_笨笨蛋Luzi", "");
            }

            if (data.includes("_笨笨笨蛋Luzi2")) {
                args[0] = data.replace("_笨笨笨蛋Luzi2", "");
            }

            if (ICONSSSSSSS[data]) {
                args[0] = ICONSSSSSSS[data];
                args[2] = 0;
                args[3] = 590;
            }

            if (data.includes("_Luzi")) {
                args[0] = data.replace("Assets", "https://emdsa2.github.io/-mod");
            }

            if (data.includes("Socks/KneelingSpread/圣诞_Luzi")) {
                args[2] = 0;
            }

            if (data.includes("ItemAddon/被子右边")) {
                args[2] += 8;
            }

            if (data.includes("Socks/KneelingSpread/踩脚袜_Luzi")) {
                args[2] = 0;
            }

            /*----------------手套 BackBoxTie----------------------*/
            if (
                data.includes("Assets/Female3DCG/Gloves/BackBoxTie/FishnetGloves_") ||
                data.includes("Assets/Female3DCG/Gloves/BackBoxTie/Gloves2_") ||
                data.includes("Assets/Female3DCG/Gloves/BackBoxTie/Gloves3_") ||
                data.includes("Assets/Female3DCG/Gloves/BackBoxTie/GlovesFur_Small_Fabric") ||
                data.includes("Assets/Female3DCG/Gloves/BackBoxTie/GlovesFur_Normal_Fabric") ||
                data.includes("Assets/Female3DCG/Gloves/BackBoxTie/GlovesFur_Large_Fabric") ||
                data.includes("Assets/Female3DCG/Gloves/BackBoxTie/GlovesFur_XLarge_Fabric") ||
                data.includes("Assets/Female3DCG/Gloves/BackBoxTie/HaremGlove_") ||
                data.includes("Assets/Female3DCG/Gloves/BackBoxTie/LatexElbowGloves_") ||
                data.includes("Assets/Female3DCG/Gloves/BackBoxTie/MistressGloves_")
            ) {
                args[0] = data.replace("Assets", "https://emdsa2.github.io/-mod");
            }

            next(args);
        }
    });

    ModManager.hookFunction("DrawButton", 1, (args, next) => {
        const data = args[6];
        if (typeof data === "string") {
            if (data.includes("_Luzi")) {
                args[6] = data.replace("Assets", "https://emdsa2.github.io/-mod");
            }
        }
        next(args);
    });
}
