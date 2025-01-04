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
            Name: `塞食物_${assetName}`,
            Prerequisite: [
                Prereqs.Acted.GroupEmpty(["ItemMouth"]),
                Prereqs.Acting.GroupIs("ItemHandheld", [assetName]),
            ],
            MaxProgress: 50,
            Target: ["ItemMouth"],
            TargetSelf: true,
        },
        useImage: ["ItemMouth", assetName],
        run: (player, sender, info) => {
            if (info.SourceCharacter === player.MemberNumber) {
                const asset = AssetGet("Female3DCG", "ItemMouth", assetName);
                if (!asset) return;

                // 获取 TargetCharacter 玩家信息
                const target = ChatRoomCharacter.find((obj) => obj.MemberNumber === info.TargetCharacter);
                if (!target) return;

                // 给棒棒糖
                InventoryWear(target, assetName, info.ActivityGroup);
                InventoryRemove(player, "ItemHandheld");

                // 更新外观
                ChatRoomCharacterItemUpdate(target, info.ActivityGroup);
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
            CN: "塞棒棒糖",
            EN: "Stuff with Lollipop",
            UA: "Наповнити рот льодяником",
        },
        {
            CN: "SourceCharacter将手里的棒棒糖塞进TargetCharacter的嘴里.",
            EN: "SourceCharacter stuffs TargetCharacter's mouth with lollipop.",
            UA: "SourceCharacter наповнює рот TargetCharacter льодяником.",
        }
    ),
    activityBuilder(
        "烤鱼_Luzi",
        {
            CN: "塞烤鱼",
            EN: "Stuff with Grilled Fish",
        },
        {
            CN: "SourceCharacter将手里的烤鱼塞进TargetCharacter的嘴里.",
            EN: "SourceCharacter stuffs TargetCharacter's mouth with Grilled Fish.",
        }
    ),
    activityBuilder(
        "鸡腿_Luzi",
        {
            CN: "塞鸡腿",
            EN: "Stuff with Roasted Chicken Leg",
        },
        {
            CN: "SourceCharacter将手里的鸡腿塞进TargetCharacter的嘴里.",
            EN: "SourceCharacter stuffs TargetCharacter's mouth with Roasted Chicken Leg.",
        }
    ),
];

export default function () {
    ActivityManager.addCustomActivities(activities);
}
