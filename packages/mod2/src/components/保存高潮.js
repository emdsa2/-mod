import ModManager from "@mod-utils/ModManager";
import { ModInfo } from "@mod-utils/rollupHelper";

const dataKey = `ECHO${ModInfo.name}`;

class 高潮数据 {
    constructor(player) {
        this.高潮开关 = false;
        this.高潮次数 = 0;

        if (player.ExtensionSettings[dataKey]) {
            const data = player.ExtensionSettings[dataKey][高潮数据.name];
            this.高潮开关 = data.高潮开关 || this.高潮开关;
            this.高潮次数 = data.高潮次数 || this.高潮次数;
        }
    }

    /**
     *
     * @param {Object} param0
     * @param {boolean} [param0.高潮开关] 高潮开关
     * @param {number} [param0.高潮次数] 高潮次数
     */
    reset({ 高潮开关, 高潮次数 } = {}) {
        this.高潮开关 = 高潮开关 || this.高潮开关;
        this.高潮次数 = 高潮次数 || this.高潮次数;
        this.save();
    }

    increase() {
        if (this.高潮开关) {
            this.高潮次数++;
            this.save();
        }
    }

    data() {
        return {
            高潮开关: this.高潮开关,
            高潮次数: this.高潮次数,
        };
    }

    save() {
        Player.ExtensionSettings[dataKey] = Object.assign(Player.ExtensionSettings[dataKey] || {}, {
            [高潮数据.name]: this.data(),
        });
        ServerPlayerExtensionSettingsSync(dataKey);
    }
}

/** @type { 高潮数据 | undefined } */
let data = undefined;

/**
 *
 * @param { { 高潮开关?:boolean, 高潮次数?:number } } param0
 */
export function 设置高潮数据(param0) {
    data?.reset(param0);
}

export function 高潮数据开关() {
    return data?.data().高潮开关;
}

export default function () {
    ModManager.afterPlayerLogin(() => {
        data = new 高潮数据(Player);

        const olddata = /** @type {any} */ (Player.OnlineSettings).ECHO;
        if (olddata) {
            // 如果存在旧数据
            const { 高潮开关, 高潮次数 } = olddata;
            if (高潮开关 !== undefined || 高潮次数 !== undefined) {
                data.reset(olddata);
            }
            delete Player.OnlineSettings["ECHO"];
            ServerAccountUpdate.QueueData({ OnlineSettings: Player.OnlineSettings });
        }
    });

    ModManager.hookFunction("ChatRoomRun", 1, (args, next) => {
        if (data?.高潮开关) {
            Player.ArousalSettings.OrgasmCount = data?.高潮次数;
        }
        next(args);
    });

    ModManager.hookFunction("ActivityOrgasmStart", 1, (args, next) => {
        const [C] = args;
        if (C.IsPlayer() && !ActivityOrgasmRuined) {
            data?.increase();
        }
        next(args);
    });
}
