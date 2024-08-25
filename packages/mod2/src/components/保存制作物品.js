import ModManager from "@mod-utils/ModManager";
import { ModInfo } from "@mod-utils/rollupHelper";

const dataKey = `ECHO${ModInfo.name}`;

export function 保存制作物品() {
    Player.ExtensionSettings[dataKey] = Object.assign(Player.ExtensionSettings[dataKey] || {}, {
        炉子Crafting: LZString.compressToUTF16(JSON.stringify(Player.Crafting)),
    });
    ServerPlayerExtensionSettingsSync(dataKey);
}

export function 读取制作物品() {
    if (Player.ExtensionSettings[dataKey]) {
        try {
            const data = JSON.parse(LZString.decompressFromUTF16(Player.ExtensionSettings[dataKey].炉子Crafting));
            Player.Crafting = data;
        } catch (e) {
            console.error(e);
        }
    }
}

export default function () {}
