import log from "@mod-utils/log";
import { ActivityDeconstruct } from "./utility";
import { ModInfo } from "@mod-utils/rollupHelper";

/** @type {_.PRecord<string, ActivityManagerInterface.IActivityRunnable>} */
const actHandlers = {};

/**
 *
 * @param {string} handlerKey
 * @returns {ChatRoomMessageHandler}
 */
export function makeChatRoomMsgHandler(handlerKey) {
    return {
        Description: `[${handlerKey}] Activity Manager`,
        Priority: 1024,
        Callback: (data, sender, msg, metadata) => {
            if (Player && Player.MemberNumber) {
                const pl = Player;
                if (data.Type === "Activity" && data.Dictionary) {
                    (() => {
                        const d = ActivityDeconstruct(data.Dictionary);
                        if (!d) return;
                        const runner = actHandlers[d.ActivityName];
                        if (!runner?.run) return;
                        if (runner.mode === "OnOther" && d.TargetCharacter === Player.MemberNumber) return;
                        if (runner.mode === "OnSelf" && d.TargetCharacter !== Player.MemberNumber) return;
                        if (
                            runner.mode === "OtherOnSelf" &&
                            !(d.SourceCharacter !== Player.MemberNumber && d.TargetCharacter === Player.MemberNumber)
                        )
                            return;
                        runner.run(pl, sender, d);
                    })();
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

export function setupHandler() {
    ChatRoomRegisterMessageHandler(makeChatRoomMsgHandler(`${ModInfo.name}`));
}
