declare const __mod_version__: string;
declare const __mod_full_name__: string;
declare const __mod_name__: string;
declare const __mod_repo__: string | undefined;
declare const __mod_base_url__: string;
declare const __mod_resource_base_url__: string;
declare const __mod_asset_overrides__: AssetOverrideContainer;

declare const __mod_rollup_imports__: string[];
declare const __mod_rollup_setup__: string[];

/** 扩展的身体组（非物品）名称 */
type CustomGroupBodyName =
    | AssetGroupBodyName
    | `${AssetGroupBodyName}_笨笨蛋Luzi`
    | `${AssetGroupBodyName}_笨笨笨蛋Luzi2`
    | "Liquid2_Luzi"
    | "BodyMarkings2_Luzi"
    | "动物身体_Luzi"
    | "长袖子_Luzi"
    | "新前发_Luzi"
    | "新后发_Luzi"
    | "额外头发_Luzi"
    | "额外身高_Luzi"
    | "身体痕迹_Luzi"
    | "眼睛左_Luzi"
    | "眼睛右_Luzi";

/** 扩展身体组名称 */
type CustomGroupName = AssetGroupItemName | CustomGroupBodyName | AssetGroupScriptName;

namespace _ {
    /** 将 T 类型中的 From 类型 *递归地* 替换为 To 类型。主要用于把 AssetGroupName 替换为 CustomGroupName。*/
    type ExtendType<T, From, To> = { [K in keyof T]: T[K] extends From ? To : ExtendType<T[K], From, To> };

    /** 将 S 类型中的 K 指定的属性的类型替换为 T 类型。 */
    type SetType<S, K extends keyof T, T> = Omit<S, K> & { [P in K]: T };

    /** 等效于Partial<Record<K,T>>，写太多写累了 */
    type PRecord<K extends string, T> = { [P in K]?: T };

    /** 不同身体组的定义类型 */
    namespace CGroupDef {
        type Item = _.SetType<
            _.ExtendType<AssetGroupDefinition.Item, AssetGroupName, CustomGroupName>,
            "Group",
            AssetGroupItemName
        >;
        type Appearance = _.SetType<
            _.ExtendType<AssetGroupDefinition.Appearance, AssetGroupName, CustomGroupName>,
            "Group",
            CustomGroupBodyName
        >;
        type Script = AssetGroupDefinition.Script;
    }

    /** 不同身体组的物品定义类型 */
    namespace CAssetDef {
        type Item = _.ExtendType<AssetDefinition.Item, AssetGroupName, CustomGroupName>;
        type Appearance = _.ExtendType<AssetDefinition.Appearance, AssetGroupName, CustomGroupName>;
        type Script = AssetDefinition.Script;
    }

    type GroupedAssetType = {
        [K in CustomGroupName]?: K extends AssetGroupItemName
        ? CAssetDef.Item[]
        : K extends CustomGroupBodyName
        ? CAssetDef.Appearance[]
        : K extends AssetGroupScriptName
        ? CAssetDef.Script[]
        : never;
    };
}

/** 自定义身体组定义，支持扩展的身体组名称 */
type CustomGroupDefinition = _.CGroupDef.Item | _.CGroupDef.Appearance | _.CGroupDef.Script;

/** 自定义道具物品定义 */
type CustomAssetDefinitionItem = _.CAssetDef.Item;

/** 自定义外观物品定义 */
type CustomAssetDefinitionAppearance = _.CAssetDef.Appearance;

/** 自定义物品定义，支持扩展的身体组名称 */
type CustomAssetDefinition = CustomAssetDefinitionItem | CustomAssetDefinitionAppearance | _.CAssetDef.Script;

/** 按照身体组分类的物品定义 */
type CustomGroupedAssetDefinitions = _.GroupedAssetType;

/** 自定义图片映射 */
type CustomImageMapping = Record<string, string>;

namespace Translation {
    type CustomRecord<T extends string, U> = _.PRecord<ServerChatRoomLanguage, _.PRecord<T, U>>;

    /**
     * 物品描述翻译条目
     * @example
     * { CN: "中文名字", EN: "English Name" }
     */
    type Entry = _.PRecord<ServerChatRoomLanguage, string>;

    /**
     * 自定义的对话条目
     *
     * @example
     * // 为对话条目 "ItemTorso抚摸" 定义翻译
     * {
     *   CN: {
     *      "ItemTorso抚摸":"抚摸"
     *   },
     *   EN: {
     *      "ItemTorso抚摸":"Caresse"
     *   }
     * }
     *
     */
    type Dialog = _.PRecord<ServerChatRoomLanguage, Record<string, string>>;

    /**
     * 按组分类的，含有很多物品的，描述翻译条目
     * @example
     * // 为 "ItemDevices" 组的 "物品名字_Luzi" 物品定义翻译
     * {
     *     CN: {
     *         "ItemDevices" : { "物品名字_Luzi": "中文名字"}
     *     },
     *     EN: {
     *         "ItemDevices" : { "物品名字_Luzi": "English Name"}
     *    }
     * }
     */
    type GroupedEntries = CustomRecord<CustomGroupName, Record<string, string>>;
}

type FuncWork<Args extends any[] = []> = (...args: Args) => void;

type AssetOverrideLeaf = string | AssetOverrideContainer;
type AssetOverrideContainer = Record<string, AssetOverrideLeaf>;

type CopyGroupInfo = { name: CustomGroupName; mirror: AssetGroupName; description?: TranslationEntry };

namespace ModManagerInterface {
    namespace _ {
        type PatchHook<T extends (...args: any[]) => any> = import("bondage-club-mod-sdk").PatchHook<T>;
        type GetDotedPathType<K extends string> = import("bondage-club-mod-sdk").GetDotedPathType<typeof globalThis, K>;
    }
    type ModSDKModInfo = import("bondage-club-mod-sdk").ModSDKModInfo;
    type ModSDKModAPI = import("bondage-club-mod-sdk").ModSDKModAPI;

    type HookFunction<T extends string> = _.PatchHook<_.GetDotedPathType<T>>;
    type FunctionArguments<T extends string> = Parameters<HookFunction<T>>[0];
    type FunctionType<T extends string> = Parameters<HookFunction<T>>[1];
    type FunctionReturnType<T extends string> = ReturnType<HookFunction<T>>;

    type InjectFunction<T extends string> = (...args: Parameters<HookFunction<T>>) => void;
    type CheckFunction<T extends string> = (...args: Parameters<HookFunction<T>>) => boolean;

    type HookableMod = {
        hookFunction<T extends string>(funcName: T, priority: number, hook: HookFunction<T>): void;
    };
}

namespace ProgressiveHookInterface {
    type InjectWork<T extends string> = { value: "inject"; work: ModManager.InjectFunction<T> };
    type NextWork<T extends string> = { value: "next" };
    type OverrideWork<T extends string> = { value: "override"; work: ModManager.HookFunction<T> };
    type FlagWork<T extends string> = { value: "flag"; flag: boolean; once: boolean };
    type CheckWork<T extends string> = { value: "check"; work: ModManager.CheckFunction<T> };

    type WorkType<T extends string> = InjectWork<T> | NextWork<T> | OverrideWork<T> | FlagWork<T> | CheckWork<T>;
}

type CustomActivityPrerequisite =
    | ActivityPrerequisite
    | "TargetHasTail"
    | "TargetHasWings"
    | "TargetHasLeash"
    | "TargetHasCatTail"
    | "TargetHasTentacles"
    | "NeedTentacles"
    | "NeedPawMittens"
    | "NeedPetSuit"
    | "NeedKennel"
    | "TargetHasItemVulvaPiercings"
    | "TargetHasItemVulva"
    | "NeedSword"
    | "NeedScissors"
    | "NeedCloth"
    | "NeedNoCloth"
    | "NeedNoClothLower"
    | "NeedBra"
    | "NeedPanties"
    | "NeedSocks"
    | "NeedSuitLower鱼鱼尾_Luzi"
    | "Need阿巴阿巴_Luzi";

type CustomActivity = Omit<Activity, "Name" | "Prerequisite" | "ActivityID"> & {
    Name: string;
    ActivityID?: number;
    Prerequisite: ActivityManagerInterface.ExCustomActivityPrerequisite[];
};

namespace Translation {
    type ActivityEntry = _.PRecord<ServerChatRoomLanguage, _.PRecord<AssetGroupItemName, string>>;
}

namespace ActivityManagerInterface {
    type ActivityDialogKey = `Chat${"Other" | "Self"}-${AssetGroupItemName}-${CustomActivity["Name"]}`;

    type ActivityRunnableTriggerMode = "OnSelf" | "OtherOnSelf" | "OnOther";

    type PrerequisiteCheckFunction = (
        ...args: ModManagerInterface.FunctionArguments<"ActivityCheckPrerequisite">
    ) => boolean;

    type ExCustomActivityPrerequisite = CustomActivityPrerequisite | ActivityManagerInterface.PrerequisiteCheckFunction;

    interface ICustomActivityPrerequisite {
        readonly name: CustomActivityPrerequisite;
        readonly test: PrerequisiteCheckFunction;
    }

    interface IActivityRunnable {
        readonly mode?: ActivityRunnableTriggerMode;
        run?: (player: PlayerCharacter, sender: Character, info: ActivityInfo) => void;
    }

    interface ICustomActivity extends IActivityRunnable {
        readonly activity: CustomActivity;

        // 提供一个字符串时，代表使用对应的动作的图片。提供[组名, 物品名]时，代表使用对应的物品的图片。
        readonly useImage?: [AssetGroupName, string] | ActivityName;
        // 对他人使用动作的动作名称
        readonly label?: Translation.ActivityEntry | Translation.Entry;
        readonly dialog?: Translation.ActivityEntry | Translation.Entry;
        // 对自己使用动作的动作名称，如果没有定义则使用 label
        readonly labelSelf?: Translation.ActivityEntry | Translation.Entry;
        readonly dialogSelf?: Translation.ActivityEntry | Translation.Entry;
    }

    interface IActivityModifier extends Required<IActivityRunnable> {
        readonly name: ActivityName;
    }

    interface ActivityInfo {
        SourceCharacter: number;
        TargetCharacter: number;
        ActivityGroup: AssetGroupName;
        ActivityName: string;
        Asset?: {
            AssetName: string;
            CraftName: string;
            GroupName: AssetGroupItemName;
        };
        BCDictionary: ChatMessageDictionaryEntry[];
    }
}

declare function ServerSend<T = keyof ClientToServerEvents>(
    Message: T,
    ...args: Parameters<ClientToServerEvents[T]>
): void;

interface XCharacterDrawOrderState {
    prevCharacter?: number;
    nextCharacter?: number;
    associatedAsset?: { group: AssetGroupItemName; asset: string };
    associatedPose?: { pose: AssetPoseName[] };
    drawState?: { X: number; Y: number; Zoom: number };
}

type XCharacter = { XCharacterDrawOrder?: XCharacterDrawOrderState } & Character;

type DrawFunParameters<T extends (...args: any[]) => any> = T extends (
    X: number,
    Y: number,
    W: number,
    H: number,
    ...args: infer P
) => any
    ? P
    : never;

type SliceParameters<E extends number, T extends (...args: any[]) => any> = E extends 0
    ? args
    : E extends 1
    ? T extends (_: any, ...args: infer P) => any
    ? P
    : never
    : E extends 2
    ? T extends (_: any, _: any, ...args: infer P) => any
    ? P
    : never
    : E extends 3
    ? T extends (_: any, _: any, _: any, ...args: infer P) => any
    ? P
    : never
    : E extends 4
    ? T extends (_: any, _: any, _: any, _: any, ...args: infer P) => any
    ? P
    : never
    : E extends 5
    ? T extends (_: any, _: any, _: any, _: any, _: any, ...args: infer P) => any
    ? P
    : never
    : never;

type Rect = { X: number; Y: number; W: number; H: number };
type Point = { X: number; Y: number };
