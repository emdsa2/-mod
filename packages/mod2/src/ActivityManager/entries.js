import { RecordEntries, RecordFlatten } from "@mod-utils/fp";
import ModManager from "@mod-utils/ModManager";
import { Option } from "@mod-utils/fp";

/** @type { _.PRecord<ServerChatRoomLanguage, Record<ActivityManagerInterface.ActivityDialogKey, string>> } */
const entries = {};

/**
 * 添加动作翻译条目
 * @param { "Label-" | "" } prefix
 * @param {Translation.ActivityEntry} src
 * @param { "Self" | "Other" } selfOther
 * @param {string} activityName
 */
function addGroupEntry(prefix, src, selfOther, activityName) {
    RecordEntries(src).forEach(([lang, grouped]) => {
        (entries[lang] = RecordFlatten(
            grouped,
            (groupName) => `${prefix}Chat${selfOther}-${groupName}-${activityName}`
        )),
            entries[lang] || {};
    });
}

/**
 * @param { "Label-" | "" } prefix
 * @param { Translation.Entry } src
 * @param { "Self" | "Other" } selfOther
 * @param {string} activityName
 * @param { AssetGroupItemName[] } groups
 */
function addSimpleEntry(prefix, src, selfOther, activityName, groups) {
    RecordEntries(src).forEach(([lang, entry]) => {
        entries[lang] = groups.reduce((pv, groupName) => {
            pv[`${prefix}Chat${selfOther}-${groupName}-${activityName}`] = entry;
            return pv;
        }, entries[lang] || {});
    });
}

/**
 * @param { "Label-" | "" } prefix
 * @param { Translation.ActivityEntry | Translation.Entry } src
 * @param { "Self" | "Other" } selfOther
 * @param {string} activityName
 * @param { AssetGroupItemName[] } groups
 */
function addEntryBranch(prefix, src, selfOther, activityName, groups) {
    if (isTranslationEntry(src)) {
        addSimpleEntry(prefix, src, selfOther, activityName, groups);
    } else {
        addGroupEntry(prefix, src, selfOther, activityName);
    }
}

/**
 * @param { Translation.ActivityEntry | Translation.Entry } src
 * @returns { src is Translation.Entry }
 */
function isTranslationEntry(src) {
    return Object.entries(src).some((v) => typeof v === "string");
}

/**
 * 添加动作翻译条目
 * @param {ActivityManagerInterface.ICustomActivity} src
 */
export function addAcvitityEntry(src) {
    const { activity, label, labelSelf, dialog, dialogSelf } = src;
    const { Name, Target, TargetSelf } = activity;

    addEntryBranch("Label-", label, "Other", Name, Target);
    addEntryBranch("", dialog, "Other", Name, Target);

    const tGroups = (() => {
        if (typeof TargetSelf === "boolean" && TargetSelf) return Target;
        if (Array.isArray(TargetSelf)) return TargetSelf;
        return [];
    })();

    addEntryBranch("Label-", labelSelf, "Self", Name, tGroups);
    addEntryBranch("", dialogSelf, "Self", Name, tGroups);
}

export function setupEntry() {
    ModManager.hookFunction("ActivityDictionaryText", 1, (args, next) => {
        return ((tag) => entries[TranslationLanguage]?.[tag] ?? entries["CN"][tag])(args[0]) || next(args);
    });

    ModManager.progressiveHook("ServerSend", 1)
        .inside("ActivityRun")
        .inject((args, next) => {
            const { Content, Dictionary } = args;
            Option(entries[TranslationLanguage]?.[Content] ?? entries["CN"][Content]).value_then((v) => {
                Dictionary.push({ Tag: Content, Text: v });
            });
        });
}
