declare const __mod_version__: string;
declare const __mod_full_name__: string;
declare const __mod_name__: string;
declare const __repo__: string | undefined;
declare const __base_url__: string;
declare const __asset_overrides__: AssetOverrideContainer;

declare const __rollup_imports__: string[];
declare const __rollup_setup__: string[];

type ExtendType<T, From, To> = {
    [K in keyof T]: T[K] extends From ? To : ExtendType<T[K], From, To>;
}

// 扩展身体部位名称
type CustomGroupName = AssetGroupName | `${AssetGroupBodyName}_笨笨蛋Luzi` | `${AssetGroupBodyName}_笨笨笨蛋Luzi2` | "Liquid2_Luzi" | "BodyMarkings2_Luzi";

// 自定义身体部位定义，支持扩展的身体部位名称
type CustomGroupDefinition = ExtendType<AssetGroupDefinition, AssetGroupName, CustomGroupName>;

// 自定义物品定义，支持扩展的身体部位名称
type CustomAssetDefinition = ExtendType<AssetDefinition.Item | AssetDefinition.Appearance, AssetGroupName, CustomGroupName>;

type CustomImageMapping = Record<string, string>;

type CustomGroupedAssetDefinitions = Partial<Record<CustomGroupName, CustomAssetDefinition[]>>;

type CustomDialog = Record<string, string>;

namespace Translation {

    type CustomRecord<T extends string, U> = Partial<Record<ServerChatRoomLanguage, Partial<Record<T, U>>>>;

    /**
     * 物品描述翻译条目
     * @example 
     * { CN: "中文名字", EN: "English Name" }
     */
    type Entry = Partial<Record<ServerChatRoomLanguage, string>>;

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
    type Dialog = Partial<Record<ServerChatRoomLanguage, CustomDialog>>;


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


type CopyGroupInfo = { name: CustomGroupName, mirror: AssetGroupName, description?: TranslationEntry }  