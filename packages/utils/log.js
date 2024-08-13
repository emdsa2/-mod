import { ModInfo } from "./rollupHelper";

export default class log {
    /**
     * 在控制台打印信息
     * @param {string} message
     */
    static info(message) {
        console.log(`[${ModInfo.name}] ${message}`);
    }

    /**
     * 在控制台打印警告
     * @param {string} message
     */
    static warn(message) {
        console.warn(`[${ModInfo.name}] ${message}`);
    }

    /**
     * 在控制台打印错误
     * @param {string} message
     */
    static error(message) {
        console.error(`[${ModInfo.name}] ${message}`);
    }
}
