declare const __mod_version__: string;
declare const __mod_full_name__: string;
declare const __mod_name__: string;
declare const __repo__: string | undefined;
declare const __asset_overrides__: AssetOverrideContainer;

type ExtendType<T, M extends { [K in keyof T]?: any }> = {
    [K in keyof T]: K extends keyof M ? M[K] : T[K];
};

type CustomGroupDefinition = ExtendType<AssetGroupDefinition, { Group: string }>;

type CustomAssetDefinition = AssetDefinition;

type CustomGroupedAssetDefinitions = Partial<Record<AssetGroupName, CustomAssetDefinition[]>>;

type CustomTexts = Record<string, string>;

type CustomLanguageTexts = Partial<Record<ServerChatRoomLanguage, CustomTexts>>;

type Function = (...args: any[]) => any;

declare const __rollup_imports__: string[];
declare const __rollup_setup__: string[];

type AssetOverrideLeaf = stirng | AssetOverrideContainer;
type AssetOverrideContainer = Record<string, AssetOverrideLeaf>;