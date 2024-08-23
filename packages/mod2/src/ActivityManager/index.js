import { pushHandler } from "./handlers";
import { pushLoad, setupLoad } from "./load";
import { addAcvitityEntry, setupEntry } from "./entries";
import { addPrerequisites, setupPrereq } from "./prereq";
import { addCustomActivity, testCustomActivity } from "./stash";

export default class ActivityManager {
    /**
     * 添加一个自定义的动作前提条件
     * @param { ActivityManagerInterface.ICustomActivityPrerequisite[] } prereqs
     */
    static addPrerequisites(prereqs) {
        prereqs.forEach((p) => addPrerequisites(p));
    }

    /**
     * 添加一个自定义的动作
     * @param {ActivityManagerInterface.ICustomActivity} act
     * @returns {void}
     */
    static addCustomActivity(act) {
        pushLoad(() => {
            ActivityFemale3DCG.push(/** @type {Activity}*/ (act.activity));
            ActivityFemale3DCGOrdering.push(/** @type {ActivityName}*/ (act.activity.Name));
            addAcvitityEntry(act);
            pushHandler(act.activity.Name, act);
            addCustomActivity(act);
        });
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
        pushHandler(modifier.name, modifier);
    }

    static init() {
        setupLoad(
            () =>
                Array.isArray(ActivityFemale3DCG) &&
                Array.isArray(ActivityFemale3DCGOrdering) &&
                Array.isArray(ChatRoomMessageHandlers)
        );

        setupEntry();
        setupPrereq();
    }
}
