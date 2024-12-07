import { Path } from "@mod-utils/path";
import ActivityManager from "@mod-utils/ActivityManager";

/** @type { ActivityManagerInterface.ICustomActivity } */
const activity = {
    activity: {
        Name: "阿巴阿巴",
        Prerequisite: ["Need阿巴阿巴_Luzi"],
        MaxProgress: 50,
        Target: [
            "ItemBreast",
            "ItemButt",
            "ItemMouth",
            "ItemTorso",
            "ItemEars",
            "ItemArms",
            "ItemNeck",
            "ItemHead",
            "ItemHood",
            "ItemNose",
            "ItemPelvis",
            "ItemHands",
            "ItemLegs",
            "ItemFeet",
            "ItemBoots",
        ],
        TargetSelf: true,
    },
    run: (player, sender, info) => {
        // 不论是谁都要播放一下音效
        AudioPlayInstantSound(Path.resolve("Audio/阿巴阿巴.mp3"));
    },
    useImage: ["ItemHandheld", "阿巴阿巴_Luzi"],
    label: {
        CN: {
            ItemBreast: "射击乳房",
            ItemButt: "射击屁股",
            ItemMouth: "射击脸",
            ItemTorso: "射击腰",
            ItemEars: "射击耳朵",
            ItemArms: "射击手臂",
            ItemNeck: "射击脖子",
            ItemHood: "射击头",
            ItemHead: "射击眉心",
            ItemNose: "射击鼻子",
            ItemPelvis: "射击肚子",
            ItemHands: "射击手",
            ItemLegs: "射击大腿",
            ItemFeet: "射击小腿",
            ItemBoots: "射击脚",
        },
        EN: {
            ItemBreast: "Shoot Breast",
            ItemButt: "Shoot Butt",
            ItemMouth: "Shoot Mouth",
            ItemTorso: "Shoot Torso",
            ItemEars: "Shoot Ears",
            ItemArms: "Shoot Arms",
            ItemNeck: "Shoot Neck",
            ItemHood: "Shoot Hood",
            ItemHead: "Shoot Head",
            ItemNose: "Shoot Nose",
            ItemPelvis: "Shoot Pelvis",
            ItemHands: "Shoot Hands",
            ItemLegs: "Shoot Thighs",
            ItemFeet: "Shoot Calves",
            ItemBoots: "Shoot Feet",
        },
    },
    dialog: {
        CN: {
            ItemBreast: "SourceCharacter举起枪瞄准, 水弹直直击中了DestinationCharacter乳房.",
            ItemButt: "SourceCharacter举起枪瞄准, 水弹直直击中了DestinationCharacter屁股.",
            ItemMouth: "SourceCharacter举起枪瞄准, 水弹直直击中了DestinationCharacter脸.",
            ItemTorso: "SourceCharacter举起枪瞄准, 水弹直直击中了DestinationCharacter腰.",
            ItemEars: "SourceCharacter举起枪瞄准, 水弹直直击中了DestinationCharacter一侧的耳朵.",
            ItemArms: "SourceCharacter举起枪瞄准, 水弹直直击中了DestinationCharacter一侧的手臂.",
            ItemNeck: "SourceCharacter举起枪瞄准, 水弹直直击中了DestinationCharacter脖子.",
            ItemHood: "SourceCharacter举起枪瞄准, 水弹直直击中了DestinationCharacter头.",
            ItemHead: "SourceCharacter举起枪瞄准, 水弹直直击中了DestinationCharacter眉心.",
            ItemNose: "SourceCharacter举起枪瞄准, 水弹直直击中了DestinationCharacter鼻子.",
            ItemPelvis: "SourceCharacter举起枪瞄准, 水弹直直击中了DestinationCharacter肚子.",
            ItemHands: "SourceCharacter举起枪瞄准, 水弹直直击中了DestinationCharacter一侧的手.",
            ItemLegs: "SourceCharacter举起枪瞄准, 水弹直直击中了DestinationCharacter一侧的大腿.",
            ItemFeet: "SourceCharacter举起枪瞄准, 水弹直直击中了DestinationCharacter一侧的小腿.",
            ItemBoots: "SourceCharacter举起枪瞄准, 水弹直直击中了DestinationCharacter一侧的脚.",
        },
        EN: {
            ItemBreast:
                "SourceCharacter raised the gun and aimed, the water bullet hit DestinationCharacter breast directly.",
            ItemButt:
                "SourceCharacter raised the gun and aimed, the water bullet hit DestinationCharacter butt directly.",
            ItemMouth:
                "SourceCharacter raised the gun and aimed, the water bullet hit DestinationCharacter face directly.",
            ItemTorso:
                "SourceCharacter raised the gun and aimed, the water bullet hit DestinationCharacter torso directly.",
            ItemEars:
                "SourceCharacter raised the gun and aimed, the water bullet hit one of DestinationCharacter ears directly.",
            ItemArms:
                "SourceCharacter raised the gun and aimed, the water bullet hit one of DestinationCharacter arms directly.",
            ItemNeck:
                "SourceCharacter raised the gun and aimed, the water bullet hit DestinationCharacter neck directly.",
            ItemHood:
                "SourceCharacter raised the gun and aimed, the water bullet hit DestinationCharacter head directly.",
            ItemHead:
                "SourceCharacter raised the gun and aimed, the water bullet hit DestinationCharacter forehead directly.",
            ItemNose:
                "SourceCharacter raised the gun and aimed, the water bullet hit DestinationCharacter nose directly.",
            ItemPelvis:
                "SourceCharacter raised the gun and aimed, the water bullet hit DestinationCharacter belly directly.",
            ItemHands:
                "SourceCharacter raised the gun and aimed, the water bullet hit one of DestinationCharacter hands directly.",
            ItemLegs:
                "SourceCharacter raised the gun and aimed, the water bullet hit one of DestinationCharacter legs directly.",
            ItemFeet:
                "SourceCharacter raised the gun and aimed, the water bullet hit one of DestinationCharacter calves directly.",
            ItemBoots:
                "SourceCharacter raised the gun and aimed, the water bullet hit one of DestinationCharacter feet directly.",
        },
    },
};

export default function () {
    ActivityManager.addCustomActivity(activity);
}
