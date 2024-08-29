import ModManager from "@mod-utils/ModManager";
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

export default function () {
    ModManager.afterPlayerLogin(() => {
        const olddata = /** @type {any} */ (Player.OnlineSettings).ECHO;
        if (olddata) {
            // 如果存在旧数据
            const { 炉子Crafting } = olddata;
            if (炉子Crafting) {
                console.log("迁移制作物品数据");
                save(dataDir, 炉子Crafting);
                delete olddata["炉子Crafting"];
                ServerAccountUpdate.QueueData({ OnlineSettings: Player.OnlineSettings });
            }
        }
    });
}
