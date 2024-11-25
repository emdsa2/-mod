import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomGroupedAssetDefinitions} */
const assets = {
    ItemMouth: [
        {
            Name: "肛鞭",
            Random: false,
            Top: 0,
            Left: 0,
            Priority: 55,
            ParentGroup: null,
            Effect: [],
        },
    ],
    ItemHandheld: [
        {
            Name: "肛鞭",
            Random: false,
            Top: 0,
            Left: 0,
            ParentGroup: null,
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
            肛鞭: "肛鞭",
        },
        ItemMouth: {
            肛鞭: "肛鞭",
        },
    },
    EN: {
        ItemHandheld: {
            肛鞭: "肛鞭",
        },
        ItemMouth: {
            肛鞭: "肛鞭",
        },
    },
    RU: {
        ItemHandheld: {
            肛鞭: "肛鞭",
        },
        ItemMouth: {
            肛鞭: "肛鞭",
        },
    },
};



// /** @type { CustomAssetDefinition } */
// const assetButt = {
//     Name: "大号拉珠",
// 	Time: 14,
// 	Prerequisite: ["AccessButt"],
// 	Effect: [E.IsPlugged],
// 	ExpressionTrigger: [{ Name: "Low", Group: "Blush", Timer: 10 }],
// 	Extended: true,
// 	Activity: "MasturbateItem",
// 	CreateLayerTypes: ["typed"], 
//     Layer: [
//     ]
// };

// /** @type {AssetArchetypeConfig} */
// const extendedButt = {
//     Archetype: ExtendedArchetype.TYPED,
//     ChatTags: [
//         CommonChatTags.SOURCE_CHAR,
//         CommonChatTags.DEST_CHAR,
//         CommonChatTags.ASSET_NAME,
//     ],
//     Options: [
//     ],
//     DrawImages: false,
//     ChatSetting: TypedItemChatSetting.SILENT,
//     ScriptHooks: {
//         PublishAction: InventoryItemButtLongAnalBeadsPublishActionHook,
//     },
// };

// /** @type {Translation.Dialog} */
// const dialogButt = {
//     CN: {
//         ItemButt肛鞭SelectBase: "选择塞入珠子的数量",
//     },
//     EN: {
//         ItemButt肛鞭SelectBase: "Select the number",
//     }
// };

// const translationsButt = {
//     CN: "大号拉珠",
//     EN: "Large pull beads",
// };

// /** @type {ExtendedItemScriptHookCallbacks.PublishAction<TypedItemData, TypedItemOption>} */
// function InventoryItemButtLongAnalBeadsPublishActionHook(data, originalFunction, C, item, newOption, previousOption) {
// 	const beadsOld = previousOption.Property.InsertedBeads || 1;
// 	const beadsNew = newOption.Property.InsertedBeads || 1;
// 	const beadsChange = beadsNew - beadsOld;
// 	if (beadsChange === 0 || data === null) {
// 		return;
// 	}

// 	/** @type {ExtendedItemChatData<TypedItemOption>} */
// 	const chatData = {
// 		C,
// 		previousOption,
// 		newOption,
// 		previousIndex: data.options.indexOf(previousOption),
// 		newIndex: data.options.indexOf(newOption),
// 	};

//     /*@ts-ignore*/
// 	const dictionary = ExtendedItemBuildChatMessageDictionary(chatData, data, item).focusGroup(item.Asset.Group.Name)
// 		.build();
// 	dictionary.push(
// 		{ ActivityName: "MasturbateItem" },
// 		{ ActivityCounter: Math.abs(beadsChange) },
// 	);

// 	const Prefix = (typeof data.dialogPrefix.chat === "function") ? data.dialogPrefix.chat(chatData) : data.dialogPrefix.chat;
// 	const Suffix = beadsChange > 0 ? "Increase" : "Decrease";
// 	ChatRoomPublishCustomAction(`${Prefix}${Math.abs(beadsChange)}${Suffix}`, true, dictionary);

// 	if (C.IsPlayer()) {
// 		// The Player pulls beads from her own butt
// 		for (let i = beadsChange; i < 0; i++) {
// 			ActivityArousalItem(C, C, item.Asset);
// 		}
// 	}
// }

// function AddAssetButt()
// {
//     extendedButt["Options"] = [];
//     for(var i = 0; i < 9 ; i++)
//     {
//         assetButt["Layer"][i]  = {
//             Name: (i+1) + "", 
//             Top : i * (-44),
//             AllowTypes: { typed: i },
//             Alpha : [{ Group: ["ItemButt",],
//                 Masks: [
//                     [220, 0, 60, 532], 
//                 ],
//             }]
//         };

//         extendedButt["Options"][i]  = {
//             Name: (i+1) + "", 
//             Property: { InsertedBeads: i + 1 },
            
//         };

//         var key = "Assets/Female3DCG/ItemButt/大号拉珠_typed" + i + "_" + (i+1) + ".png";

//         /**  @type {CustomImageMapping} */
//         var pair = {};
//         pair[key] = "Assets/Female3DCG/ItemButt/大号拉珠.png";
//         AssetManager.addImageMapping(pair);

//         dialogButt["CN"]["ItemButt大号拉珠" + (i + 1)] = (i + 1)+ "个珠子";
//         dialogButt["CN"]["ItemButt大号拉珠Set" + (i + 1) + "Increase"] = "SourceCharacter将" + (i + 1) + "个珠子塞入TargetCharacter的肛门.";
//         dialogButt["CN"]["ItemButt大号拉珠Set" + (i + 1) + "Decrease"] = "SourceCharacter将" + (i + 1) + "个珠子拉出TargetCharacter的肛门.";

//         if ( i == 0)
//         {
//             dialogButt["EN"]["ItemButt大号拉珠" + (i + 1)] = (i + 1)+ " Bead";
//             dialogButt["EN"]["ItemButt大号拉珠Set" + (i + 1) + "Increase"] = "SourceCharacter inserts " + (i + 1) + " bead in DestinationCharacter butt.";
//             dialogButt["EN"]["ItemButt大号拉珠Set" + (i + 1) + "Decrease"] = "SourceCharacter pulls " + (i + 1) + " bead from DestinationCharacter butt.";
//         }else{            
//             dialogButt["EN"]["ItemButt大号拉珠" + (i + 1)] = (i + 1)+ " Beads";            
//             dialogButt["EN"]["ItemButt大号拉珠Set" + (i + 1) + "Increase"] = "SourceCharacter inserts " + (i + 1) + " beads in DestinationCharacter butt.";
//             dialogButt["EN"]["ItemButt大号拉珠Set" + (i + 1) + "Decrease"] = "SourceCharacter pulls " + (i + 1) + " beads from DestinationCharacter butt.";
//         }

//     }
//     AssetManager.addAsset("ItemButt", assetButt, extendedButt, translationsButt);
//     AssetManager.addCustomDialog(dialogButt);
// }

export default function () {
    AssetManager.addGroupedAssets(assets, translations);
    // AddAssetButt();
}
