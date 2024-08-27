import ModManager from "@mod-utils/ModManager";
import { key } from "./constant";

function sync() {
    const pl = /** @type {XCharacter}*/ (Player);
    if (!pl || !pl?.MemberNumber) return;
    if (!pl?.XCharacterDrawOrder) return;
    /** @type {XCharacterDrawOrderState} */
    const data = Object.fromEntries(Object.entries(pl.XCharacterDrawOrder).filter(([k, v]) => k !== "drawState"));
    if (!data) return;

    ServerSend("ChatRoomChat", {
        Content: key,
        Type: "Hidden",
        Dictionary: [data],
    });
}

/**
 *
 * @param {XCharacterDrawOrderState} data
 */
export function setXDrawState(data) {
    /** @type {XCharacter}*/ (Player).XCharacterDrawOrder = data;
    sync();
}

/**
 * @param {any} data
 * @returns {XCharacterDrawOrderState}
 */
function validate(data) {
    const ret = {};
    if (data) {
        if (typeof data.prevCharacter === "number") {
            ret.prevCharacter = data.prevCharacter;
        }
        if (typeof data.nextCharacter === "number") {
            ret.nextCharacter = data.nextCharacter;
        }
        if (
            data.associatedAsset &&
            typeof data.associatedAsset.group === "string" &&
            typeof data.associatedAsset.asset === "string"
        ) {
            ret.associatedAsset = {
                group: data.associatedAsset.group,
                asset: data.associatedAsset.asset,
            };
        }
        if (
            data.associatedPose &&
            Array.isArray(data.associatedPose.pose) &&
            data.associatedPose.pose.every((p) => typeof p === "string")
        ) {
            ret.associatedPose = {
                pose: data.associatedPose.pose,
            };
        }
    }
    return ret;
}

export function setupSync() {
    ModManager.hookFunction("ChatRoomSync", 10, (args, next) => {
        sync();
        next(args);
    });

    ModManager.hookFunction("ChatRoomSyncMemberLeave", 10, (args, next) => {
        sync();
        next(args);
    });

    ModManager.hookFunction("ChatRoomMessage", 10, (args, next) => {
        let data = args[0];
        if (data.Content === "ServerEnter") {
            sync();
        }
        next(args);
    });

    ModManager.hookFunction("ChatRoomMessage", 0, (args, next) => {
        const { Type, Content, Sender, Dictionary } = args[0];
        if (Type === "Hidden" && Content === key) {
            const target = ChatRoomCharacter.find((c) => c.MemberNumber === Sender);
            if (target) /** @type {XCharacter} */ (target).XCharacterDrawOrder = validate(Dictionary[0]);
            return;
        }
        next(args);
    });
}
