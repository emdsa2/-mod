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

    static findDrawOrderPair(C) {
        return findDrawOrderPair(C, ChatRoomCharacterDrawlist);
    }
}
