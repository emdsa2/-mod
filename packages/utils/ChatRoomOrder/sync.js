import ModManager from "@mod-utils/ModManager";
import { key } from "./constant";

let doSync = false;
function syncRun() {
    if (!doSync) return;
    const pl = /** @type {XCharacter}*/ (Player);
    if (!pl || !pl?.MemberNumber) return;
    if (!pl?.XCharacterDrawOrder) return;
    /** @type {XCharacterDrawOrderState} */
    const data = Object.fromEntries(Object.entries(pl.XCharacterDrawOrder).filter(([k, v]) => k !== "drawState"));
    if (!data) return;
    doSync = false;
    ServerSend("ChatRoomChat", {
        Content: key,
        Type: "Hidden",
        Dictionary: [data],
    });
}

setInterval(() => syncRun(), 400);

export function setSync() {
    doSync = true;
}

/**
 *
 * @param {XCharacterDrawOrderState} data
 */
export function setXDrawState(data) {
    /** @type {XCharacter}*/ (Player).XCharacterDrawOrder = data;
    setSync();
}

/**
 * @param {Partial<XCharacterDrawOrderState>} data
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
        setSync();
        next(args);
    });

    ModManager.hookFunction("ChatRoomSyncMemberLeave", 10, (args, next) => {
        setSync();
        next(args);
    });

    ModManager.hookFunction("ChatRoomMessage", 10, (args, next) => {
        let data = args[0];
        if (data.Content === "ServerEnter") {
            setSync();
        }
        next(args);
    });

    ModManager.hookFunction("ChatRoomMessage", 0, (args, next) => {
        const { Type, Content, Sender, Dictionary } = args[0];
        if (Type === "Hidden" && Content === key) {
            /** @type {XCharacter}*/
            const target = ChatRoomCharacter.find((c) => c.MemberNumber === Sender);
            if (target) {
                const drawState = target.XCharacterDrawOrder?.drawState;
                target.XCharacterDrawOrder = validate(/** @type {unknown}*/ (Dictionary[0]));
                if (drawState) target.XCharacterDrawOrder.drawState = drawState;
            }
            return;
        }
        next(args);
    });
}
