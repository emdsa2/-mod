import ModManager from "@mod-utils/ModManager";

/**
 * @type { _.PRecord<CustomActivityPrerequisite, ActivityManagerInterface.ICustomActivityPrerequisite> }
 */
const prereqMap = {};

/**
 * @param { ActivityManagerInterface.ICustomActivityPrerequisite } prereq
 */
export function addPrerequisites(prereq) {
    prereqMap[prereq.name] = prereq;
}

export function setupPrereq() {
    ModManager.hookFunction("ActivityCheckPrerequisite", 1, (args, next) => {
        const cusPrereq = prereqMap[args[0]];
        if (cusPrereq) return cusPrereq.test(...args);
        return next(args);
    });
}
