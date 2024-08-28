import { setupSync, setXDrawState } from "./sync";
import { findDrawOrderPair, setupXCharacterDrawlist } from "./XCharacterDrawlist";

const setupKey = "MODChatRoomOrder";

export default class ChatRoomOrder {
    /**
     * 设置当前玩家的配对绘制状态
     * @param {XCharacterDrawOrderState} state
     */
    static setDrawOrder(state) {
        setXDrawState(state);
    }

    /**
     * 清除当前玩家的配对绘制状态
     */
    static clearDrawOrder() {
        setXDrawState({});
    }

    /**
     * 初始化配对绘制功能
     */
    static setup() {
        if (window[setupKey]) return;
        window[setupKey] = ChatRoomOrder;
        setupXCharacterDrawlist();
        setupSync();
    }

    /**
     * 查找一个人物的配对绘制对象
     * @param { Character } C
     * @returns {{prev:XCharacter,next:XCharacter}}
     */
    static findPair(C) {
        return findDrawOrderPair(C, ChatRoomCharacterDrawlist);
    }

    /**
     * 如果两个人物被设置为配对绘制，返回两个人物的绘制状态
     * @param {Character} C
     * @returns {{prev:{C:Character,drawState:XCharacterDrawOrderState["drawState"]},next:{C:Character,drawState:XCharacterDrawOrderState["drawState"]}} | undefined} 如果没找到，返回undefined
     */
    static requirePairDrawState(C) {
        const ret = findDrawOrderPair(C, ChatRoomCharacterDrawlist);
        if (!ret || !ret.prev.XCharacterDrawOrder.drawState || !ret.next.XCharacterDrawOrder.drawState)
            return undefined;
        return {
            prev: {
                C: ret.prev,
                drawState: ret.prev.XCharacterDrawOrder.drawState,
            },
            next: {
                C: ret.next,
                drawState: ret.next.XCharacterDrawOrder.drawState,
            },
        };
    }

    /**
     * 如果两个人物被设置为配对绘制，返回两个人物和参考中心
     * @param {Character} C
     * @returns {{prev:XCharacter, next:XCharacter, center:{X:number,Y:number}} | undefined} 如果没找到，返回undefined
     */
    static requireSharedCenter(C) {
        const pair = findDrawOrderPair(C, ChatRoomCharacterDrawlist);
        if (!pair || !pair.prev.XCharacterDrawOrder.drawState || !pair.next.XCharacterDrawOrder.drawState)
            return undefined;
        const { prev, next } = {
            prev: pair.prev.XCharacterDrawOrder.drawState,
            next: pair.next.XCharacterDrawOrder.drawState,
        };

        const center = (() => {
            // 如果两个人物的Y坐标差距大于300，说明两个人物不在同一水平线上，直接使用第二个人物为基准位置
            if (Math.abs(prev.Y - next.Y) > 300) return { X: next.X, Y: next.Y };
            // 取两个人物的中心点
            return { X: (prev.X + next.X) / 2, Y: (prev.Y + next.Y) / 2 };
        })();

        return { ...pair, center };
    }
}
