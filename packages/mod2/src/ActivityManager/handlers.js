import log from "@mod-utils/log";
import { ActivityDeconstruct } from "./utility";

/** @type {_.PRecord<string, ActivityManagerInterface.IActivityRunnable>} */
const actHandlers = {};

/**
 *
 * @param {string} ModName
 * @returns {ChatRoomMessageHandler}
 */
export function makeChatRoomMsgHandler(ModName) {
    return {
        Description: `[${ModName}] Activity Manager`,
        Priority: 1024,
        Callback: (data, sender, msg, metadata) => {
            if (Player && Player.MemberNumber) {
                const pl = Player;
                if (data.Type === "Activity" && data.Dictionary) {
                    const d = ActivityDeconstruct(data.Dictionary);
                    if (d) actHandlers[d.ActivityName]?.run?.(pl, sender, d);
                }
            }
            return false;
        },
    };
}

/**
 *
 * @param { string } name
 * @param { ActivityManagerInterface.IActivityRunnable } handler
 */
export function pushHandler(name, handler) {
    if (actHandlers[name]) {
        log.warn(`Handler for ${name} already exists, overwriting`);
    }
    actHandlers[name] = handler;
}
