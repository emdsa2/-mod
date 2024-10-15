import ActivityManager from "@mod-utils/ActivityManager";

/**@type {Partial<Record<AssetGroupItemName, CustomGroupName[]>>} */
const groupMap = {
    ItemTorso: ["Cloth", "Cloth_笨笨蛋Luzi", "Cloth_笨笨笨蛋Luzi2"],
    ItemLegs: ["ClothLower", "ClothLower_笨笨蛋Luzi", "ClothLower_笨笨笨蛋Luzi2"],
    ItemBreast: ["Bra", "ClothAccessory", "Corset"],
    ItemVulvaPiercings: ["Panties"],
    ItemFeet: ["Socks", "SocksLeft", "SocksRight"],
    ItemBoots: ["Shoes"],
};

/** @type { ActivityManagerInterface.ICustomActivity } */
const activity = {
    activity: {
        Name: "剪刀剪掉上衣",
        Prerequisite: ["UseHands", "UseArms", "NeedScissors"],
        MaxProgress: 50,
        Target: ["ItemTorso", "ItemLegs", "ItemBreast", "ItemVulvaPiercings", "ItemFeet", "ItemBoots"],
        TargetSelf: true,
    },
    useImage: ["ItemHandheld", "Scissors"],
    mode: "OnSelf",
    run: (player, sender, info) => {
        // 使用动作拓展才会被剪衣服，可以只处理收到消息的情况
        const groups = groupMap[info.ActivityGroup];
        if (groups) {
            player.Appearance = player.Appearance.filter((i) => !groups.includes(i.Asset.Group.Name));
            ChatRoomCharacterUpdate(player);
        }
    },
    label: {
        CN: {
            ItemTorso: "剪刀剪掉上衣",
            ItemLegs: "剪刀剪掉下衣",
            ItemBreast: "剪刀剪掉胸罩",
            ItemVulvaPiercings: "剪刀剪掉内裤",
            ItemFeet: "剪刀剪掉袜子",
            ItemBoots: "剪刀剪掉鞋子",
        },
        EN: {
            ItemTorso: "Scissors Cut Off the Top",
            ItemLegs: "Scissors Cut Off the Bottom",
            ItemBreast: "Scissors Cut Off the Bra",
            ItemVulvaPiercings: "Scissors Cut Off the Underwear",
            ItemFeet: "Scissors Cut Off the Socks",
            ItemBoots: "Scissors Cut Off the Shoes",
        },
        UA: {
            ItemTorso: "Відрізати верхній одяг ножицями",
            ItemLegs: "Відрізати нижній одяг ножицями",
            ItemBreast: "Відрізати лівчик ножицями",
            ItemVulvaPiercings: "Відрізати трусики ножицями",
            ItemFeet: "Відрізати шкарпетки ножицями",
            ItemBoots: "Відрізати взуття ножицями",
        },
    },
    dialog: {
        CN: {
            ItemTorso: "SourceCharacter用剪刀剪掉了TargetCharacter的上衣.",
            ItemLegs: "SourceCharacter用剪刀剪掉了TargetCharacter的下衣.",
            ItemBreast: "SourceCharacter用剪刀剪掉了TargetCharacter的胸罩.",
            ItemVulvaPiercings: "SourceCharacter用剪刀剪掉了TargetCharacter的内裤.",
            ItemFeet: "SourceCharacter用剪刀剪掉了TargetCharacter的袜子.",
            ItemBoots: "SourceCharacter用剪刀剪掉了TargetCharacter的鞋子.",
        },
        EN: {
            ItemTorso: "SourceCharacter Cuts Off TargetCharacter's Top with Scissors.",
            ItemLegs: "SourceCharacter Cuts Off TargetCharacter's Bottom with Scissors.",
            ItemBreast: "SourceCharacter Cuts Off TargetCharacter's Bra with Scissors.",
            ItemVulvaPiercings: "SourceCharacter Cuts Off TargetCharacter's Underwear with Scissors.",
            ItemFeet: "SourceCharacter Cuts Off TargetCharacter's Socks with Scissors.",
            ItemBoots: "SourceCharacter Cuts Off TargetCharacter's Shoes with Scissors.",
        },
        UA: {
            ItemTorso: "SourceCharacter ріже верхній одяг TargetCharacter ножицями.",
            ItemLegs: "SourceCharacter ріже нижній одяг TargetCharacter ножицями.",
            ItemBreast: "SourceCharacter ріже лівчик TargetCharacter ножицями.",
            ItemVulvaPiercings: "SourceCharacter ріже трусики TargetCharacter ножицями.",
            ItemFeet: "SourceCharacter ріже шкарпетки TargetCharacter ножицями.",
            ItemBoots: "SourceCharacter ріже взуття TargetCharacter ножицями.",
        },
    },
    labelSelf: {
        CN: {
            ItemTorso: "剪刀剪掉上衣",
            ItemLegs: "剪刀剪掉下衣",
            ItemBreast: "剪刀剪掉胸罩",
            ItemVulvaPiercings: "剪刀剪掉内裤",
            ItemFeet: "剪刀剪掉袜子",
            ItemBoots: "剪刀剪掉鞋子",
        },
        EN: {
            ItemTorso: "Scissors Cut Off the Top",
            ItemLegs: "Scissors Cut Off the Bottom",
            ItemBreast: "Scissors Cut Off the Bra",
            ItemVulvaPiercings: "Scissors Cut Off the Underwear",
            ItemFeet: "Scissors Cut Off the Socks",
            ItemBoots: "Scissors Cut Off the Shoes",
        },
        UA: {
            ItemTorso: "Відрізати верхній одяг ножицями",
            ItemLegs: "Відрізати нижній одяг ножицями",
            ItemBreast: "Відрізати лівчик ножицями",
            ItemVulvaPiercings: "Відрізати трусики ножицями",
            ItemFeet: "Відрізати шкарпетки ножицями",
            ItemBoots: "Відрізати взуття ножицями",
        },
    },
    dialogSelf: {
        CN: {
            ItemTorso: "SourceCharacter用剪刀剪掉了自己的上衣.",
            ItemLegs: "SourceCharacter用剪刀剪掉了自己的下衣.",
            ItemBreast: "SourceCharacter用剪刀剪掉了自己的胸罩.",
            ItemVulvaPiercings: "SourceCharacter用剪刀剪掉了自己的内裤.",
            ItemFeet: "SourceCharacter用剪刀剪掉了自己的袜子.",
            ItemBoots: "SourceCharacter用剪刀剪掉了自己的鞋子.",
        },
        EN: {
            ItemTorso: "SourceCharacter Cuts Off own Top with Scissors.",
            ItemLegs: "SourceCharacter Cuts Off own Bottom with Scissors.",
            ItemBreast: "SourceCharacter Cuts Off own Bra with Scissors.",
            ItemVulvaPiercings: "SourceCharacter Cuts Off own Underwear with Scissors.",
            ItemFeet: "SourceCharacter Cuts Off own Socks with Scissors.",
            ItemBoots: "SourceCharacter Cuts Off own Shoes with Scissors.",
        },
        UA: {
            ItemTorso: "SourceCharacter ріже свій верхній одяг ножицями.",
            ItemLegs: "SourceCharacter ріже свій нижній одяг ножицями.",
            ItemBreast: "SourceCharacter ріже свій лівчик ножицями.",
            ItemVulvaPiercings: "SourceCharacter ріже свої трусики ножицями.",
            ItemFeet: "SourceCharacter ріже свої шкарпетки ножицями.",
            ItemBoots: "SourceCharacter ріже свої взуття ножицями.",
        },
    },
};

export default function () {
    ActivityManager.addCustomActivity(activity);
}
