/**
 *
 * @param {ChatMessageDictionaryEntry[]} dict
 * @returns {ActivityManagerInterface.ActivityInfo | undefined}
 */
export function ActivityDeconstruct(dict) {
    const ret = dict.reduce((pv, cv) => {
        if (cv["TargetCharacter"] !== undefined) pv.TargetCharacter = cv["TargetCharacter"];
        else if (cv["SourceCharacter"] !== undefined) pv.SourceCharacter = cv["SourceCharacter"];
        else if (cv["ActivityName"] !== undefined) pv.ActivityName = cv["ActivityName"];
        else if (cv["Tag"] === "FocusAssetGroup") pv.ActivityGroup = cv["FocusGroupName"];
        else if (cv["Tag"] === "ActivityAsset") {
            pv.Asset = {
                AssetName: cv["AssetName"],
                CraftName: cv["CraftName"],
                GroupName: cv["GroupName"],
            };
        }

        return pv;
    }, /** @type { Partial<ActivityManagerInterface.ActivityInfo> } */ ({}));

    return [ret.TargetCharacter, ret.SourceCharacter, ret.ActivityName, ret.ActivityGroup].some((x) => x === undefined)
        ? undefined
        : /** @type { ActivityManagerInterface.ActivityInfo } */ (ret);
}
