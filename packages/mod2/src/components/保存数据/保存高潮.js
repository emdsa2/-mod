import ModManager from "@mod-utils/ModManager";
import { load, save } from "./dataAccess";

const 高潮数据key = "高潮数据";

class 高潮数据 {
    constructor() {
        /** @type {boolean} */
        this.高潮开关 = false;
        /** @type {number} */
        this.高潮次数 = 0;

        /** @type {{高潮开关:boolean, 高潮次数:number }} */
        const data = (() => {
            let ret = load(高潮数据key);
            if (Object.keys(ret).length === 0) return load(高潮数据.name);
            return ret;
        })();
        if (data) {
            this.高潮开关 = data.高潮开关;
            this.高潮次数 = data.高潮次数;
        }
    }

    /**
     *
     * @param {Object} param0
     * @param {boolean} [param0.高潮开关] 高潮开关
     * @param {number} [param0.高潮次数] 高潮次数
     */
    设置值({ 高潮开关, 高潮次数 } = {}) {
        if (高潮开关 !== undefined) this.高潮开关 = 高潮开关;
        if (高潮次数 !== undefined) this.高潮次数 = 高潮次数;
        this.保存();
    }

    增加() {
        if (this.高潮开关) {
            this.高潮次数++;
            this.保存();
        }
    }

    data() {
        return {
            高潮开关: this.高潮开关,
            高潮次数: this.高潮次数,
        };
    }

    保存() {
        save(高潮数据key, this.data());
    }
}

/** @type { 高潮数据 | undefined } */
let data = undefined;

/**
 *
 * @param { { 高潮开关?:boolean, 高潮次数?:number } } param0
 */
export function 设置高潮数据(param0) {
    data?.设置值(param0);
}

/** @returns {boolean} */
export function 高潮数据开关() {
    return data?.data().高潮开关;
}

export default function () {
    ModManager.afterPlayerLogin(() => {
        data = new 高潮数据();

        const olddata = /** @type {any} */ (Player.OnlineSettings).ECHO;
        if (olddata) {
            // 如果存在旧数据
            const { 高潮开关, 高潮次数 } = olddata;
            if (高潮开关 !== undefined || 高潮次数 !== undefined) {
                console.log("迁移高潮数据");
                data.设置值(olddata);
                delete olddata["高潮开关"];
                delete olddata["高潮次数"];
                ServerAccountUpdate.QueueData({ OnlineSettings: Player.OnlineSettings });
            }
        }
    });

    ModManager.hookFunction("ChatRoomRun", 1, (args, next) => {
        if (data?.高潮开关 && Player.ArousalSettings?.OrgasmCount !== undefined) {
            Player.ArousalSettings.OrgasmCount = data?.高潮次数;
        }
        next(args);
    });

    ModManager.hookFunction("ActivityOrgasmStart", 1, (args, next) => {
        const [C] = args;
        if (C.IsPlayer() && !ActivityOrgasmRuined) {
            data?.增加();
        }
        next(args);
    });
}
