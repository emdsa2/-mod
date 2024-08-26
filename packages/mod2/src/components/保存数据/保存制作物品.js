import { load, save } from "./dataAccess";

const dataDir = "炉子Crafting";

export function 保存制作物品() {
    save(dataDir, LZString.compressToUTF16(JSON.stringify(Player.Crafting)));
}

export function 读取制作物品() {
    const str = load(dataDir);
    try {
        const data = JSON.parse(LZString.decompressFromUTF16(str));
        Player.Crafting = data;
    } catch (e) {
        console.error(`读取保存的制作物品错误 ${e}`);
    }
}
