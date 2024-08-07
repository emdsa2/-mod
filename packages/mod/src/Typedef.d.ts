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
type CustomGroupName = AssetGroupName | `${AssetGroupBodyName}_笨笨蛋Luzi` | `${AssetGroupBodyName}_笨笨笨蛋Luzi2` | Liquid2_Luzi | BodyMarkings2_Luzi;

// 自定义身体部位定义，支持扩展的身体部位名称
type CustomGroupDefinition = ExtendType<AssetGroupDefinition, AssetGroupName, CustomGroupName>;

// 自定义物品定义，支持扩展的身体部位名称
type CustomAssetDefinition = ExtendType<AssetDefinition, AssetGroupName, CustomGroupName>;

type CustomGroupedAssetDefinitions = Partial<Record<CustomGroupName, CustomAssetDefinition[]>>;

type CustomDialog = Record<string, string>;

type CustomDialogSet = Partial<Record<ServerChatRoomLanguage, CustomDialog>>;

type Function = (...args: any[]) => any;

type AssetOverrideLeaf = string | AssetOverrideContainer;
type AssetOverrideContainer = Record<string, AssetOverrideLeaf>;
