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
        },
    },
    dialog: {
        CN: {
            ItemBreast: "SourceCharacter举起枪瞄准, 水弹直直击中了TargetCharacter的乳房.",
            ItemButt: "SourceCharacter举起枪瞄准, 水弹直直击中了TargetCharacter的屁股.",
            ItemMouth: "SourceCharacter举起枪瞄准, 水弹直直击中了TargetCharacter的脸.",
            ItemTorso: "SourceCharacter举起枪瞄准, 水弹直直击中了TargetCharacter的腰.",
            ItemEars: "SourceCharacter举起枪瞄准, 水弹直直击中了TargetCharacter的耳朵.",
            ItemArms: "SourceCharacter举起枪瞄准, 水弹直直击中了TargetCharacter的手臂.",
            ItemNeck: "SourceCharacter举起枪瞄准, 水弹直直击中了TargetCharacter的脖子.",
            ItemHood: "SourceCharacter举起枪瞄准, 水弹直直击中了TargetCharacter的头.",
            ItemHead: "SourceCharacter举起枪瞄准, 水弹直直击中了TargetCharacter的眉心.",
            ItemNose: "SourceCharacter举起枪瞄准, 水弹直直击中了TargetCharacter的鼻子.",
            ItemPelvis: "SourceCharacter举起枪瞄准, 水弹直直击中了TargetCharacter的肚子.",
        },
    },
    labelSelf: {
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
        },
    },
    dialogSelf: {
        CN: {
            ItemBreast: "SourceCharacter举起枪瞄准PronounPossessive自己的乳房.",
            ItemButt: "SourceCharacter举起枪瞄准PronounPossessive自己的屁股.",
            ItemMouth: "SourceCharacter举起枪瞄准PronounPossessive自己的脸.",
            ItemTorso: "SourceCharacter举起枪瞄准PronounPossessive自己的腰.",
            ItemEars: "SourceCharacter举起枪瞄准PronounPossessive自己的耳朵.",
            ItemArms: "SourceCharacter举起枪瞄准PronounPossessive自己的手臂.",
            ItemNeck: "SourceCharacter举起枪瞄准PronounPossessive自己的脖子.",
            ItemHood: "SourceCharacter举起枪瞄准PronounPossessive自己的头.",
            ItemHead: "SourceCharacter举起枪瞄准PronounPossessive自己的眉心.",
            ItemNose: "SourceCharacter举起枪瞄准PronounPossessive自己的鼻子.",
            ItemPelvis: "SourceCharacter举起枪瞄准PronounPossessive自己的肚子.",
        },
    },
};

export default function () {
    ActivityManager.addCustomActivity(activity);
}
