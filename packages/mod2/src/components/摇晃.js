import ActivityManager from "@mod-utils/ActivityManager";
import ChatRoomOrder from "@mod-utils/ChatRoomOrder";

/**
* 道具切换
* @param {string} item1 - 道具名称 1
* @param {string} item2 - 道具名称 2
*/// @ts-ignore
function 摇晃尾巴(player, item1, item2) {
    for (let i = 0; i < 4; i++) {
        setTimeout(() => {
            if (InventoryGet(Player, "TailStraps").Asset.Name === item1) {
                let 道具颜色 = InventoryGet(player, "TailStraps").Color

                InventoryWear(player, item2, "TailStraps", 道具颜色);
                ChatRoomCharacterUpdate(player); // 更新外观

            } else if (InventoryGet(player, "TailStraps").Asset.Name === item2) {
                let 道具颜色 = InventoryGet(player, "TailStraps").Color

                InventoryWear(player, item1, "TailStraps", 道具颜色);
                ChatRoomCharacterUpdate(player); // 更新外观
            }
        }, 200 * i);
    }
}

/** @type { ActivityManagerInterface.ICustomActivity []} */
const activities = [
    {
        activity: {
            Name: "摇晃尾巴",
            Prerequisite: ["TargetHasTail"],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemButt"],
        },
        run: (player, sender, info) => {
            if (info.SourceCharacter === player.MemberNumber) {
                const asset = AssetGet("Female3DCG", "TailStraps", "穿戴式猫尾镜像_Luzi");
                if (!asset) return;
                摇晃尾巴(player, "TailStrap", "穿戴式猫尾镜像_Luzi");
                摇晃尾巴(player, "PuppyTailStrap", "穿戴式狗尾镜像_Luzi");
                摇晃尾巴(player, "PuppyTailStrap1", "穿戴式软小狗尾镜像_Luzi");
                摇晃尾巴(player, "KittenTailStrap1", "穿戴式浅色猫尾镜像_Luzi");
                摇晃尾巴(player, "KittenTailStrap2", "小型穿戴式软猫尾镜像_Luzi");
                摇晃尾巴(player, "FoxTailStrap1", "FoxTailStrap2");
                摇晃尾巴(player, "WolfTailStrap1", "大型穿戴式狼尾镜像_Luzi");
                摇晃尾巴(player, "WolfTailStrap2", "小型穿戴式狼尾镜像_Luzi");
                摇晃尾巴(player, "WolfTailStrap3", "白色穿戴式狼尾镜像_Luzi");
                摇晃尾巴(player, "DragonTailStrap2Left", "DragonTailStrap2Right");
            }
        },
        useImage: "Wiggle",
        label: {
            CN: "摇晃尾巴",
            EN: "Wag Tail",
        },
        dialog: {
            CN: "SourceCharacter摇晃PronounPossessive的尾巴.",
            EN: "SourceCharacter wags PronounPossessive tail.",
        },
    },
];

export default function () {
    ActivityManager.addCustomActivities(activities);
}
