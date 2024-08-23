import { pushHandler } from "./handlers";
import { pushLoad, setupLoad } from "./load";
import { addAcvitityEntry, setupEntry } from "./entries";
import { addPrerequisite, setupPrereq } from "./prereq";
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

            if (typeof act.useImage === "string") addActivityImageMapping({ [act.activity.Name]: act.useImage });
            else if (Array.isArray(act.useImage))
                addActivityImageMapping({ [act.activity.Name]: act.useImage[1] }, act.useImage[0]);
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
        pushLoad(() => pushHandler(modifier.name, modifier));
    }

    static init(loadFunc) {
        setupLoad(
            () =>
                Array.isArray(ActivityFemale3DCG) &&
                ActivityFemale3DCG.length > 0 &&
                Array.isArray(ActivityFemale3DCGOrdering) &&
                Array.isArray(ChatRoomMessageHandlers)
        );

        pushLoad(() => loadFunc());

        setupEntry();
        setupPrereq();
        setupImgMapping();
    }
}
