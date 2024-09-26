import { RecordEntries, RecordMap } from "@mod-utils/fp";
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
    RecordEntries(src).forEach(
        ([lang, grouped]) =>
            (entries[lang] = RecordMap(
                grouped,
                (groupName) => `${prefix}Chat${selfOther}-${groupName}-${activityName}`,
                entries[lang] || {}
            ))
    );
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
    return Object.values(src).some((v) => typeof v === "string");
}

/**
 * 添加动作翻译条目
 * @param {ActivityManagerInterface.ICustomActivity} src
 */
export function addAcvitityEntry(src) {
    const { activity, label, labelSelf, dialog, dialogSelf } = src;
    const { Name, Target, TargetSelf } = activity;

    const dlabel = label ?? { CN: Name };

    if (isTranslationEntry(dlabel)) {
        RecordEntries(dlabel).forEach(([lang, entry]) => {
            if (!entries[lang]) entries[lang] = {};
            entries[lang][`Activity${Name}`] = entry;
        });
    } else {
        RecordEntries(dlabel).forEach(([lang, entry]) => {
            if (!entries[lang]) entries[lang] = {};
            entries[lang][`Activity${Name}`] = Object.values(entry)[0] || Name;
        });
    }

    addEntryBranch("Label-", dlabel, "Other", Name, Target);
    Option(dialog).value_then((d) => addEntryBranch("", d, "Other", Name, Target));

    const tGroups = (() => {
        if (typeof TargetSelf === "boolean" && TargetSelf) return Target;
        if (Array.isArray(TargetSelf)) return TargetSelf;
        return [];
    })();

    Option(labelSelf || label).value_then((l) => addEntryBranch("Label-", l, "Self", Name, tGroups));
    Option(dialogSelf || dialog).value_then((ds) => addEntryBranch("", ds, "Self", Name, tGroups));
}

export function setupEntry() {
    /** @type {(string) => undefined | string} */
    const resolve = (tag) => entries[TranslationLanguage]?.[tag] ?? entries["CN"]?.[tag];

    ModManager.hookFunction("ActivityDictionaryText", 1, (args, next) => resolve(args[0]) || next(args));

    ModManager.progressiveHook("ServerSend", 1)
        .inside("ActivityRun")
        .inject((args, next) => {
            const { Content, Dictionary, Type } = /** @type { Parameters<ClientToServerEvents["ChatRoomChat"]>[0] } */ (
                args[1]
            );
            if (Type !== "Activity") return;
            Option(resolve(Content)).value_then((v) =>
                Dictionary.push({ Tag: `MISSING ACTIVITY DESCRIPTION FOR KEYWORD ${Content}`, Text: v })
            );
        });
}

window["CustomEntry"] = () => entries;
