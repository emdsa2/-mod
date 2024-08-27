import { ModInfo } from "@mod-utils/rollupHelper";

const dataKey = `ECHO${ModInfo.name}`;

/**
 * 读取数据
 * @param { string } directory
 */
export function load(directory) {
    if (Player.ExtensionSettings[dataKey]?.[directory]) {
        return Player.ExtensionSettings[dataKey][directory];
    }
    return {};
}

/**
 * 保存数据
 * @param { string } directory
 * @param { any } data
 */
export function save(directory, data) {
    if (Player?.ExtensionSettings === undefined) return;
    Player.ExtensionSettings[dataKey] = Object.assign(Player.ExtensionSettings[dataKey] || {}, {
        [directory]: data,
    });
    ServerPlayerExtensionSettingsSync(dataKey);
}
