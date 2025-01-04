import ActivityManager from "@mod-utils/ActivityManager";
import { Prereqs } from "../Prereqs";

/**
 *
 * @param {string} assetName
 * @param {Translation.Entry} label
 * @param {Translation.Entry} dialog
 * @returns {ActivityManagerInterface.ICustomActivity}
 */
function activityBuilder(assetName, label, dialog) {
    return {
        activity: {
            Name: `咬走_${assetName}`,
            Prerequisite: [
                "UseMouth",
                Prereqs.Acted.TargetGroupIs([assetName]),
                Prereqs.Acting.GroupEmpty(["ItemMouth"]),
            ],
            MaxProgress: 50,
            Target: ["ItemMouth"],
        },
        useImage: ["ItemMouth", assetName],
        run: (player, sender, info) => {
            if (info.SourceCharacter === player.MemberNumber) {
                const asset = AssetGet("Female3DCG", "ItemMouth", assetName);
                if (!asset) return;

                // 获取 TargetCharacter 玩家信息
                const target = ChatRoomCharacter.find((obj) => obj.MemberNumber === info.TargetCharacter);
                if (!target) return;

                InventoryRemove(target, info.ActivityGroup);
                InventoryWear(player, assetName, "ItemMouth");
                InventoryRemove(player, "ItemHandheld");

                ChatRoomCharacterItemUpdate(target, "ItemMouth");
                ChatRoomCharacterItemUpdate(player, "ItemHandheld");
                CharacterRefresh(player, true);
            }
        },
        label,
        dialog,
    };
}

/** @type { ActivityManagerInterface.ICustomActivity []} */
const activities = [
    activityBuilder(
        "棒棒糖_Luzi",
        {
            CN: "咬走棒棒糖",
            EN: "Bite off Lollipop",
        },
        {
            CN: "SourceCharacter从TargetCharacter嘴里咬走棒棒糖.",
            EN: "SourceCharacter bites off lollipop from TargetCharacter mouth.",
        }
    ),
    activityBuilder(
        "烤鱼_Luzi",
        {
            CN: "咬走烤鱼",
            EN: "Bite off Grilled Fish",
        },
        {
            CN: "SourceCharacter从TargetCharacter嘴里咬走烤鱼.",
            EN: "SourceCharacter bites off grilled fish from TargetCharacter mouth.",
        }
    ),
    activityBuilder(
        "鸡腿_Luzi",
        {
            CN: "咬走鸡腿",
            EN: "Bite off Roasted Chicken Leg",
        },
        {
            CN: "SourceCharacter从TargetCharacter嘴里咬走烤鸡腿.",
            EN: "SourceCharacter bites off roasted chicken leg from TargetCharacter mouth.",
        }
    ),
    activityBuilder(
        "煎包_Luzi",
        {
            CN: "咬走煎包",
            EN: "Bite off Fried Bun",
        },
        {
            CN: "SourceCharacter从TargetCharacter嘴里咬走煎包.",
            EN: "SourceCharacter bites off fried bun from TargetCharacter mouth.",
        }
    ),
    activityBuilder(
        "蛋糕卷_Luzi",
        {
            CN: "咬走蛋糕卷",
            EN: "Bite off Cake Roll",
        },
        {
            CN: "SourceCharacter从TargetCharacter嘴里咬走蛋糕卷.",
            EN: "SourceCharacter bites off cake roll from TargetCharacter mouth.",
        }
    ),
];

export default function () {
    ActivityManager.addCustomActivities(activities);
}
