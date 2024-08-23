import ActivityManager from "../ActivityManager";

/** @type { ActivityManagerInterface.ICustomActivity } */
const activity = {
    activity: {
        Name: "剪刀剪掉上衣",
        Prerequisite: ["UseHands", "UseArms", "NeedScissors"],
        MaxProgress: 50,
        Target: ["ItemTorso", "ItemPelvis", "ItemBreast", "ItemVulvaPiercings", "ItemBoots"],
        TargetSelf: true,
    },
    useImage: ["ItemHandheld", "Scissors"],
    mode: "OtherOnSelf",
    run: (player, sender, info) => {
        // 使用动作拓展才会被剪衣服，可以只处理收到消息的情况
        if (info.TargetCharacter === player.MemberNumber) {
            const group = info.ActivityGroup;
            InventoryRemove(player, group, true);
        }
    },
    label: {
        CN: {
            ItemTorso: "剪刀剪掉上衣",
            ItemPelvis: "剪刀剪掉下衣",
            ItemBreast: "剪刀剪掉胸罩",
            ItemVulvaPiercings: "剪刀剪掉内裤",
            ItemBoots: "剪刀剪掉袜子",
        },
        EN: {
            ItemTorso: "Scissors Cut Off the Top",
            ItemPelvis: "Scissors Cut Off the Bottom",
            ItemBreast: "Scissors Cut Off the Bra",
            ItemVulvaPiercings: "Scissors Cut Off the Underwear",
            ItemBoots: "Scissors Cut Off the Socks",
        },
    },
    dialog: {
        CN: {
            ItemTorso: "SourceCharacter用剪刀剪掉了TargetCharacter的上衣.",
            ItemPelvis: "SourceCharacter用剪刀剪掉了TargetCharacter的下衣.",
            ItemBreast: "SourceCharacter用剪刀剪掉了TargetCharacter的胸罩.",
            ItemVulvaPiercings: "SourceCharacter用剪刀剪掉了TargetCharacter的内裤.",
            ItemBoots: "SourceCharacter用剪刀剪掉了TargetCharacter的袜子.",
        },
        EN: {
            ItemTorso: "SourceCharacter Cuts Off TargetCharacter's Top with Scissors.",
            ItemPelvis: "SourceCharacter Cuts Off TargetCharacter's Bottom with Scissors.",
            ItemBreast: "SourceCharacter Cuts Off TargetCharacter's Bra with Scissors.",
            ItemVulvaPiercings: "SourceCharacter Cuts Off TargetCharacter's Underwear with Scissors.",
            ItemBoots: "SourceCharacter Cuts Off TargetCharacter's Socks with Scissors.",
        },
    },
    labelSelf: {
        CN: {
            ItemTorso: "剪刀剪掉上衣",
            ItemPelvis: "剪刀剪掉下衣",
            ItemBreast: "剪刀剪掉胸罩",
            ItemVulvaPiercings: "剪刀剪掉内裤",
            ItemBoots: "剪刀剪掉袜子",
        },
        EN: {
            ItemTorso: "Scissors Cut Off the Top",
            ItemPelvis: "Scissors Cut Off the Bottom",
            ItemBreast: "Scissors Cut Off the Bra",
            ItemVulvaPiercings: "Scissors Cut Off the Underwear",
            ItemBoots: "Scissors Cut Off the Socks",
        },
    },
    dialogSelf: {
        CN: {
            ItemTorso: "SourceCharacter用剪刀剪掉了自己的上衣.",
            ItemPelvis: "SourceCharacter用剪刀剪掉了自己的下衣.",
            ItemBreast: "SourceCharacter用剪刀剪掉了自己的胸罩.",
            ItemVulvaPiercings: "SourceCharacter用剪刀剪掉了自己的内裤.",
            ItemBoots: "SourceCharacter用剪刀剪掉了自己的袜子.",
        },
        EN: {
            ItemTorso: "SourceCharacter Cuts Off own Top with Scissors.",
            ItemPelvis: "SourceCharacter Cuts Off own Bottom with Scissors.",
            ItemBreast: "SourceCharacter Cuts Off own Bra with Scissors.",
            ItemVulvaPiercings: "SourceCharacter Cuts Off own Underwear with Scissors.",
            ItemBoots: "SourceCharacter Cuts Off own Socks with Scissors.",
        },
    },
};

export default function () {
    ActivityManager.addCustomActivity(activity);
}
