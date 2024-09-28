import { pushHandler, setupHandler } from "./handlers";
import { pushLoad, setupLoad } from "./load";
import { addAcvitityEntry, setupEntry } from "./entries";
import { addPrerequisite, enlistUnamedPrereq, setupPrereq } from "./prereq";
import { addCustomActivity, testCustomActivity } from "./stash";
import { addActivityImageMapping, setupImgMapping } from "./image";

export default class ActivityManager {
    /**
     * 添加一个自定义的动作前提条件
     * @param { ActivityManagerInterface.ICustomActivityPrerequisite[] } prereqs
     */
    static addPrerequisites(prereqs) {
        pushLoad(() => prereqs.forEach((p) => addPrerequisite(p)));
    }

    /**
     * 判断一个动作名称是否可用
     * @param {string} name
     * @returns {boolean}
     */
    static checkActivityAvailability(name) {
        return !ActivityFemale3DCGOrdering.includes(/** @type {ActivityName}*/ (name));
    }

    /**
     * 添加一个自定义的动作
     * @param {ActivityManagerInterface.ICustomActivity} act
     * @returns {void}
     */
    static addCustomActivity(act) {
        const copyAct = { ...act };
        pushLoad(() => {
            copyAct.activity.Prerequisite = enlistUnamedPrereq(copyAct.activity.Name, copyAct.activity.Prerequisite);
            copyAct.activity.ActivityID = -1;

            ActivityFemale3DCG.push(/** @type {Activity}*/ (copyAct.activity));
            ActivityFemale3DCGOrdering.push(/** @type {ActivityName}*/ (copyAct.activity.Name));
            addAcvitityEntry(copyAct);
            pushHandler(copyAct.activity.Name, copyAct);
            addCustomActivity(copyAct);

            if (typeof copyAct.useImage === "string")
                addActivityImageMapping({ [copyAct.activity.Name]: copyAct.useImage });
            else if (Array.isArray(copyAct.useImage))
                addActivityImageMapping({ [copyAct.activity.Name]: copyAct.useImage[1] }, copyAct.useImage[0]);
        });
    }

    static removeCustomActivity(name) {
        ActivityFemale3DCG = ActivityFemale3DCG.filter((act) => act.Name !== name);
        ActivityFemale3DCGOrdering = ActivityFemale3DCGOrdering.filter((act) => act !== name);
    }

    /**
     * 判断一个动作是否是自定义的
     * @param { string } name
     * @returns
     */
    static activityIsCustom(name) {
        return testCustomActivity(name);
    }

    /**
     * 添加多个自定义的动作
     * @param {ActivityManagerInterface.ICustomActivity[]} acts
     * @returns {void}
     */
    static addCustomActivities(acts) {
        acts.forEach((act) => this.addCustomActivity(act));
    }

    /**
     * 为一个已有的动作添加额外的触发函数
     * @param {ActivityManagerInterface.IActivityModifier} modifier
     */
    static modifyActivity(modifier) {
        pushLoad(() => pushHandler(modifier.name, modifier));
    }

    static init() {
        setupLoad(
            () =>
                Array.isArray(ActivityFemale3DCG) &&
                ActivityFemale3DCG.length > 0 &&
                Array.isArray(ActivityFemale3DCGOrdering) &&
                Array.isArray(ChatRoomMessageHandlers)
        );

        pushLoad(() => setupHandler());

        setupEntry();
        setupPrereq();
        setupImgMapping();
    }
}
