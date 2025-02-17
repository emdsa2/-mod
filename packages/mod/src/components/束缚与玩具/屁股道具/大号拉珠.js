import AssetManager from "@mod-utils/AssetManager";
import { VersionSupport } from "@mod-utils/VersionSupport";
import { Tools } from "@mod-utils/Tools";

/** @type {CustomGroupedAssetDefinitions} */
const assets = {
    ItemMouth: [
        {
            Name: "大号拉珠",
            Random: false,
            Top: 0,
            Left: 0,
            Priority: 55,
            ParentGroup: VersionSupport.NoParentGroup,
            Effect: [],
        },
    ],
    ItemHandheld: [
        {
            Name: "大号拉珠",
            Random: false,
            Top: 0,
            Left: 0,
            ParentGroup: VersionSupport.NoParentGroup,
            PoseMapping: {
                TapedHands: PoseType.DEFAULT,
                Yoked: "Hide",
                OverTheHead: "Hide",
                BackBoxTie: "Hide",
                BackElbowTouch: "Hide",
                BackCuffs: "Hide",
                Hogtied: "Hide",
                AllFours: "Hide",
            },
        },
    ],
};

/** @type { Translation.GroupedEntries } */
const translations = {
    CN: {
        ItemHandheld: {
            大号拉珠: "大号拉珠",
        },
        ItemMouth: {
            大号拉珠: "大号拉珠",
        },
    },
    EN: {
        ItemHandheld: {
            大号拉珠: "Large beads",
        },
        ItemMouth: {
            大号拉珠: "Large beads",
        },
    },
    RU: {
        ItemHandheld: {
            大号拉珠: "Большие бусины",
        },
        ItemMouth: {
            大号拉珠: "Большие бусины",
        },
    },
};

/** @type { CustomAssetDefinition } */
const assetButt = {
    Name: "大号拉珠",
    Time: 14,
    Prerequisite: ["AccessButt"],
    Effect: [E.IsPlugged],
    ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }],
    Extended: true,
    Activity: "MasturbateItem",
    CreateLayerTypes: ["typed"],
    PoseMapping: {
        Hogtied: "Hide",
        AllFours: "Hide",
    },
    Layer: [],
};

/** @type {AssetArchetypeConfig} */
const extendedButt = {
    Archetype: ExtendedArchetype.TYPED,
    ChatTags: Tools.CommonChatTags(),
    Options: [],
    DrawImages: false,
    ChatSetting: TypedItemChatSetting.SILENT,
    ScriptHooks: {
        PublishAction: InventoryItemButtLongAnalBeadsPublishActionHook,
    },
};

/** @type {Translation.Dialog} */
const dialogButt = {
    CN: {
        ItemButt大号拉珠Select: "选择塞入珠子的数量",
    },
    EN: {
        ItemButt大号拉珠Select: "Select number of beads inserted",
    },
};

const translationsButt = {
    CN: "大号拉珠",
    EN: "Large pull beads",
};

/** @type {ExtendedItemScriptHookCallbacks.PublishAction<TypedItemData, TypedItemOption>} */
function InventoryItemButtLongAnalBeadsPublishActionHook(data, originalFunction, C, item, newOption, previousOption) {
    const beadsOld = previousOption.Property.InsertedBeads || 1;
    const beadsNew = newOption.Property.InsertedBeads || 1;
    const beadsChange = beadsNew - beadsOld;
    if (beadsChange === 0 || data === null) {
        return;
    }

    /** @type {ExtendedItemChatData<TypedItemOption>} */
    const chatData = {
        C,
        previousOption,
        newOption,
        previousIndex: data.options.indexOf(previousOption),
        newIndex: data.options.indexOf(newOption),
    };

    const dictionary = ExtendedItemBuildChatMessageDictionary(chatData, data, item)
        .focusGroup(/** @type {AssetGroupItemName}*/ (item.Asset.Group.Name))
        .build();
    dictionary.push({ ActivityName: "MasturbateItem" }, { ActivityCounter: Math.abs(beadsChange) });

    const Prefix =
        typeof data.dialogPrefix.chat === "function" ? data.dialogPrefix.chat(chatData) : data.dialogPrefix.chat;
    const Suffix = beadsChange > 0 ? "Increase" : "Decrease";
    ChatRoomPublishCustomAction(`${Prefix}${Math.abs(beadsChange)}${Suffix}`, true, dictionary);

    if (C.IsPlayer()) {
        // The Player pulls beads from her own butt
        for (let i = beadsChange; i < 0; i++) {
            ActivityArousalItem(C, C, item.Asset);
        }
    }
}

function AddAssetButt() {
    extendedButt["Options"] = [];

    /**  @type {CustomImageMapping} */
    const imageMappings = {};

    for (let i = 0; i < 9; i++) {
        const bcount = i + 1;

        assetButt["Layer"][i] = {
            Name: `${bcount}`,
            Top: i * -44,
            AllowTypes: { typed: i },
            Alpha: [{ Group: ["ItemButt"], Masks: [[220, 0, 60, 532]] }],
        };

        extendedButt["Options"][i] = {
            Name: `${bcount}`,
            Property: { InsertedBeads: bcount },
        };

        imageMappings[`Assets/Female3DCG/ItemButt/大号拉珠_typed${i}_${bcount}.png`] =
            "Assets/Female3DCG/ItemButt/大号拉珠.png";

        dialogButt["CN"][`ItemButt大号拉珠${bcount}`] = `${bcount}个珠子`;
        dialogButt["CN"][
            `ItemButt大号拉珠Set${bcount}Increase`
        ] = `SourceCharacter抓住AssetName，将${bcount}个珠子塞入TargetCharacter的肛门.`;
        dialogButt["CN"][
            `ItemButt大号拉珠Set${bcount}Decrease`
        ] = `SourceCharacter抓住AssetName，将${bcount}个珠子拉出TargetCharacter的肛门.`;

        const bead = i === 0 ? "Bead" : "Beads";
        const lower_bead = bead.toLowerCase();

        dialogButt["EN"][`ItemButt大号拉珠${bcount}`] = `${bcount} ${bead}`;
        dialogButt["EN"][
            `ItemButt大号拉珠Set${bcount}Increase`
        ] = `SourceCharacter grabs AssetName, and inserts ${bcount} ${lower_bead} in DestinationCharacter butt.`;
        dialogButt["EN"][
            `ItemButt大号拉珠Set${bcount}Decrease`
        ] = `SourceCharacter grabs AssetName, and pulls ${bcount} ${lower_bead} from DestinationCharacter butt.`;
    }

    AssetManager.addImageMapping(imageMappings);
    AssetManager.addAsset("ItemButt", assetButt, extendedButt, translationsButt);
    AssetManager.addCustomDialog(dialogButt);
}

export default function () {
    AssetManager.addGroupedAssets(assets, translations);
    AddAssetButt();
}
