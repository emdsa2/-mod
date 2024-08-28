import ModManager from "@mod-utils/ModManager";

/**
 * @type { _.PRecord<CustomActivityPrerequisite, ActivityManagerInterface.ICustomActivityPrerequisite> }
 */
const prereqMap = {};

/**
 * @param { ActivityManagerInterface.ICustomActivityPrerequisite } prereq
 */
export function addPrerequisite(prereq) {
    prereqMap[prereq.name] = prereq;
}

export function setupPrereq() {
    ModManager.hookFunction("ActivityCheckPrerequisite", 1, (args, next) => {
        const cusPrereq = prereqMap[args[0]];
        if (cusPrereq) return cusPrereq.test(...args);
        return next(args);
    });
}

/**
 * @param { string } prefix
 * @returns { CustomActivityPrerequisite }
 */
function randomPrereqKey(prefix) {
    while (true) {
        const key = `${prefix}_prereq_${Math.random().toString(36).substring(2)}`;
        if (!prereqMap[key]) return /** @type {CustomActivityPrerequisite}*/ (key);
    }
}

/**
 * @param {string} actName
 * @param {ActivityManagerInterface.ExCustomActivityPrerequisite[]} prereq
 * @returns {CustomActivityPrerequisite[]}
 */
export function enlistUnamedPrereq(actName, prereq) {
    return prereq.map((p) => {
        if (typeof p === "function") {
            const name = randomPrereqKey(actName);
            addPrerequisite({ name, test: p });
            return name;
        }
        return p;
    });
}
