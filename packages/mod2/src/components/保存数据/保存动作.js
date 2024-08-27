import ModManager from "@mod-utils/ModManager";
import { ModInfo } from "@mod-utils/rollupHelper";
import ActivityManager from "@mod-utils/ActivityManager";
import { load, save } from "./dataAccess";

const dataKey = `ECHO${ModInfo.name}`;

/**
 * @typedef { {Name:string, Target:string, TargetSelf?: string, Dialog?:string, DialogSelf?:string} } ActivityData
 */

/**
 * @param {string} actName
 * @returns {ActivityName}
 */
export function activityName(actName) {
    return /** @type {ActivityName} */ (`笨蛋笨Luzi_${actName}`);
}

class 动作数据 {
    constructor() {
        /** @type {Record<string, ActivityData>} */
        this.data = load(动作数据.name);

        Object.values(this.data).forEach((act) => this.注册动作(act));
    }

    /**
     * @param {ActivityData} act
     * @returns {boolean} 如果添加成功返回true
     */
    增加动作(act) {
        if (this.data[act.Name]) return false;
        if (ActivityManager.checkActivityAvailability(activityName(act.Name))) return false;
        this.data[act.Name] = act;
        this.注册动作(act);
        this.保存();
        return true;
    }

    /**
     *
     * @param {ActivityData} act
     */
    注册动作(act) {
        /** @type { ActivityManagerInterface.ICustomActivity } */
        const nAct = {
            activity: {
                Name: activityName(act.Name),
                Prerequisite: [],
                MaxProgress: 0,
                Target: /** @type {AssetGroupItemName[]}*/ (act.Target ? [act.Target] : []),
                TargetSelf: /** @type {AssetGroupItemName[]}*/ (act.TargetSelf ? [act.TargetSelf] : []),
            },
            label: {
                [TranslationLanguage]: act.Name,
            },
            dialog: {
                [TranslationLanguage]: act.Dialog || act.Name,
            },
            dialogSelf: {
                [TranslationLanguage]: act.DialogSelf || act.Name,
            },
        };

        ActivityManager.addCustomActivity(nAct);
    }

    保存() {
        save(动作数据.name, this.data);
    }

    清空() {
        Object.keys(this.data).forEach((key) => {
            ActivityManager.removeCustomActivity(activityName(key));
        });

        this.data = {};
        this.保存();
    }
}

/** @type {动作数据 | undefined} */
let data = undefined;
export default function () {
    ModManager.afterPlayerLogin(() => {
        data = new 动作数据();
    });
}

export function 动作数据管理() {
    return data;
}
