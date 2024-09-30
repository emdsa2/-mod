import ModManager from "@mod-utils/ModManager";
import { setXDrawState } from "./sync";

/**
 * @param {XCharacter} C
 */
function validAssociated(C) {
    const { associatedAsset, associatedPose } = C.XCharacterDrawOrder;
    const ret = (() => {
        if (associatedAsset && !InventoryIsItemInList(C, associatedAsset.group, [associatedAsset.asset])) return false;
        if (associatedPose && !associatedPose.pose.every((p) => C.ActivePose.includes(p))) return false;
        return true;
    })();

    if (!ret && C.IsPlayer()) setXDrawState({});
    return ret;
}

/**
 * @param {XCharacter} C
 * @returns {boolean} 如果是需要特殊处理的角色返回true
 */
function validXCharacter(C) {
    if (!C || !C.XCharacterDrawOrder) return false;
    const { prevCharacter, nextCharacter } = C.XCharacterDrawOrder;
    if (!prevCharacter && !nextCharacter) return false;
    if (prevCharacter === C.MemberNumber || nextCharacter === C.MemberNumber) return false;
    if (!validAssociated(C)) return false;
    return true;
}

/**
 *
 * @param {XCharacter} C
 * @param {XCharacter[]} characters
 * @returns { { prev: XCharacter, next: XCharacter } | undefined }
 */
export function findDrawOrderPair(C, characters) {
    if (!C || !validXCharacter(C)) return undefined;
    const { prevCharacter, nextCharacter } = C.XCharacterDrawOrder;
    if (prevCharacter) {
        const other = characters.find((c) => c.MemberNumber === prevCharacter);
        if (other && validXCharacter(other) && other.XCharacterDrawOrder.nextCharacter === C.MemberNumber)
            return { prev: other, next: C };
        return undefined;
    } else if (nextCharacter) {
        const other = characters.find((c) => c.MemberNumber === nextCharacter);
        if (other && validXCharacter(other) && other.XCharacterDrawOrder.prevCharacter === C.MemberNumber)
            return { prev: C, next: other };
        return undefined;
    }
    return undefined;
}

export class XCharacterDrawlist {
    /**
     *
     * @param {XCharacter[]} drawlist
     * @returns
     */
    constructor(drawlist) {
        /** @type {number[]} */
        this.nList = [];

        if (!Array.isArray(drawlist)) return;

        let mMap = new Map(Array.from(drawlist, (c, idx) => [c.MemberNumber, idx]));

        let cList = Array.from(drawlist, (_, idx) => idx);
        /** @type {number[]} */
        const pList = [];
        while (cList.length > 0) {
            const cIdx = cList.shift();
            const c = drawlist[cIdx];
            const result = findDrawOrderPair(c, drawlist);
            if (result) {
                const idxes = Object.values(result).map((c) => mMap.get(c.MemberNumber));
                pList.push(...idxes);
                cList = cList.filter((idx) => !idxes.includes(idx));
                continue;
            }
            pList.push(cIdx);
        }

        this.nList = pList;

        this.cur = 0;
    }

    next() {
        const ret = this.nList[this.cur];
        this.cur = (this.cur + 1) % this.nList.length;
        return ret;
    }

    get length() {
        return this.nList.length;
    }
}

export function setupXCharacterDrawlist() {
    const func = ModManager.randomGlobalFunction("CreateX", () => new XCharacterDrawlist(ChatRoomCharacterDrawlist));

    ModManager.patchFunction("ChatRoomCharacterViewLoopCharacters", {
        "for (let C = 0; C < ChatRoomCharacterDrawlist.length; C++) {": `const XDraws = ${func}(); for (let C = 0; C < ChatRoomCharacterDrawlist.length; C++) { const CN = XDraws.next();`,
        "!ChatRoomCharacterDrawlist[C].IsPlayer()": "!ChatRoomCharacterDrawlist[CN].IsPlayer()",
        "const res = callback(C, CharX, CharY, Space, Zoom);":
            "const res = callback(C, CharX, CharY, Space, Zoom, CN);",
    });

    ModManager.patchFunction("ChatRoomCharacterViewDraw", {
        "ChatRoomCharacterViewLoopCharacters((charIdx, charX, charY, _space, roomZoom) => {":
            "ChatRoomCharacterViewLoopCharacters((charIdx, charX, charY, _space, roomZoom, cIdx) => {",
        "ChatRoomCharacterDrawlist[charIdx]": "ChatRoomCharacterDrawlist[cIdx]",
    });

    ModManager.patchFunction("ChatRoomCharacterViewClick", {
        "ChatRoomCharacterViewLoopCharacters((charIdx, charX, charY, space, zoom) => {":
            "ChatRoomCharacterViewLoopCharacters((charIdx, charX, charY, space, zoom, cIdx) => {",
        "ChatRoomCharacterDrawlist[charIdx]": "ChatRoomCharacterDrawlist[cIdx]",
    });

    Object.assign(ChatRoomViews.Character, {
        Draw: ChatRoomCharacterViewDraw,
        Click: ChatRoomCharacterViewClick,
    });

    ModManager.progressiveHook("DrawCharacter", 100)
        .inside("ChatRoomCharacterViewLoopCharacters")
        .inject((args, next) => {
            const [C, X, Y, Zoom] = args;

            const pl = /** @type {XCharacter} */ (C);
            if (!pl || !pl.XCharacterDrawOrder) return;
            pl.XCharacterDrawOrder.drawState = { X, Y, Zoom };
        });
}
