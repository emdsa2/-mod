/** @type {_.PRecord<string, ActivityManagerInterface.ICustomActivity>} */
const customStorage = {};

export function addCustomActivity(act) {
    customStorage[act.activity.Name] = act;
}

export function testCustomActivity(name) {
    return !!customStorage[name];
}
