import { setupSync, setXDrawState } from "./sync";
import { findDrawOrderPair, setupXCharacterDrawlist } from "./XCharacterDrawlist";

export default class ChatRoomOrder {
    /**
     * @param {XCharacterDrawOrderState} state
     */
    static setDrawOrder(state) {
        setXDrawState(state);
    }

    static clearDrawOrder() {
        setXDrawState({});
    }

    static setup() {
        setupXCharacterDrawlist();
        setupSync();
    }

    static findPair(C) {
        return findDrawOrderPair(C, ChatRoomCharacterDrawlist);
    }

    static requirePairDrawState(C) {
        const ret = findDrawOrderPair(C, ChatRoomCharacterDrawlist);
        if (!ret || !ret.prev.XCharacterDrawOrder.drawState || !ret.next.XCharacterDrawOrder.drawState)
            return undefined;
        return {
            prev: {
                C: ret.prev,
                draState: ret.prev.XCharacterDrawOrder.drawState,
            },
            next: {
                C: ret.next,
                draState: ret.next.XCharacterDrawOrder.drawState,
            },
        };
    }
}
