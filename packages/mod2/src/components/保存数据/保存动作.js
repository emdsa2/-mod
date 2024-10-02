import ModManager from "@mod-utils/ModManager";
import ActivityManager from "@mod-utils/ActivityManager";
import { load, save } from "./dataAccess";
import log from "@mod-utils/log";

/**
 * @typedef { {Name:string, Target?:string, TargetSelf?: string, Dialog?:string, DialogSelf?:string} } ActivityData
 */

/**
 * @param {string} actName
 * @returns {ActivityName}
 */
export function activityName(actName) {
    return /** @type {ActivityName} */ (`笨蛋笨Luzi_${actName}`);
}

/**
 * @param {any} data
 * @returns {Record<string, ActivityData>}
 */
function validate(data) {
    /** @type {Record<string, ActivityData>} */
    const ret = {};
    if (typeof ret != "object") return ret;

    Object.entries(data).forEach(([key, value]) => {
        if (typeof key !== "string" || typeof value !== "object" || !value) return;
        if (typeof value.Name !== "string") return;
        if (value.Target && (typeof value.Target !== "string" || typeof value.Dialog !== "string")) return;
        if (value.TargetSelf && (typeof value.TargetSelf !== "string" || typeof value.DialogSelf !== "string")) return;
        ret[key] = value;
    });

    return ret;
}

const 动作数据key = "动作数据";

class 动作数据 {
    constructor() {
        /** @type {Record<string, ActivityData>} */
        this.data = validate(
            (() => {
                let ret = load(动作数据key);
                if (Object.keys(ret).length === 0) return load(动作数据.name);
                return ret;
            })()
        );
        Object.values(this.data).forEach((act) => this.注册动作(act));
    }

    /**
     * @param {ActivityData[]} acts
     */
    增加一组动作(acts) {
        acts.forEach((act) => {
            if (this.data[act.Name]) return;
            if (!ActivityManager.checkActivityAvailability(activityName(act.Name))) return;
            this.data[act.Name] = act;
            this.注册动作(act);
        });
        this.保存();
    }

    /**
     * @param {ActivityData} act
     * @returns {boolean} 如果添加成功返回true
     */
    增加动作(act) {
        if (this.data[act.Name]) return false;
        if (!ActivityManager.checkActivityAvailability(activityName(act.Name))) return false;
        this.data[act.Name] = act;
        this.注册动作(act);
        this.保存();
        return true;
    }

    /**
     * @param {string} actName
     * @returns { boolean}
     */
    动作可用(actName) {
        return this.data[actName] === undefined;
    }

    /**
     * @param {string} actName
     */
    删除动作(actName) {
        const name = activityName(actName);
        ActivityManager.removeCustomActivity(name);
        delete this.data[actName];
        this.保存();
    }

    /**
     *
     * @param {ActivityData} act
     */
    注册动作(act) {
        if (!act.Name) {
            log.warn(`动作名称为空 : ${JSON.stringify(act)}`);
            return;
        }

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
        save(动作数据key, this.data);
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

        const olddata = /** @type {any} */ (Player.OnlineSettings).ECHO;
        if (olddata) {
            // 如果存在旧数据
            const { 炉子ActivityFemale3DCG, 炉子ActivityDictionary } = olddata;
            if (炉子ActivityFemale3DCG !== undefined && 炉子ActivityDictionary !== undefined) {
                console.log("迁移动作数据");
                try {
                    /** @type {Activity[]} */
                    let decompressedActivity = JSON.parse(LZString.decompressFromUTF16(炉子ActivityFemale3DCG));
                    /** @type {[string,string][]} */
                    let decompressedDictionary = JSON.parse(LZString.decompressFromUTF16(炉子ActivityDictionary));

                    const oldPrefix = "笨蛋笨Luzi_";

                    /** @type {ActivityData[]} */
                    const resultActivity = [];
                    decompressedActivity.forEach((act) => {
                        if (ActivityManager.checkActivityAvailability(act.Name)) {
                            resultActivity.push({
                                Name: act.Name.startsWith(oldPrefix) ? act.Name.slice(oldPrefix.length) : act.Name,
                                Target: act.Target?.[0] || "",
                                TargetSelf: (() => {
                                    if (typeof act.TargetSelf === "boolean")
                                        if (act.TargetSelf) return act.Target?.[0] || "";
                                    if (Array.isArray(act.TargetSelf)) return act.TargetSelf[0] || "";
                                })(),
                            });
                        }
                    });

                    resultActivity.forEach((data) => {
                        const selfdialog = decompressedDictionary.find(
                            ([k, v]) => k === `ChatSelf-${data.TargetSelf}-${oldPrefix}${data.Name}`
                        );
                        if (selfdialog) data.DialogSelf = selfdialog[1];
                        const targetdialog = decompressedDictionary.find(
                            ([k, v]) => k === `ChatOther-${data.Target}-${oldPrefix}${data.Name}`
                        );
                        if (selfdialog) data.Dialog = targetdialog[1];
                    });

                    data.增加一组动作(resultActivity);
                    delete olddata["炉子ActivityFemale3DCG"];
                    delete olddata["炉子ActivityDictionary"];
                    ServerAccountUpdate.QueueData({ OnlineSettings: Player.OnlineSettings });
                } catch (e) {}
            }
        }
    });
}

export function 动作数据管理() {
    return data;
}
