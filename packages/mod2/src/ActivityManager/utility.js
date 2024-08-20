/**
 *
 * @param {ChatMessageDictionaryEntry[]} dict
 * @returns {ActivityManagerInterface.ActivityInfo | undefined}
 */
export function ActivityDeconstruct(dict) {
    let SourceCharacter, TargetCharacter, ActivityGroup, ActivityName, Asset;
    for (let v of dict) {
        if (v["TargetCharacter"] !== undefined) TargetCharacter = { MemberNumber: v["TargetCharacter"] };
        else if (v["SourceCharacter"] !== undefined) SourceCharacter = { MemberNumber: v["SourceCharacter"] };
        else if (v["ActivityName"] !== undefined) ActivityName = v["ActivityName"];
        else if (v["Tag"] === "FocusAssetGroup") ActivityGroup = v["FocusGroupName"];
        else if (v["Tag"] === "ActivityAsset") {
            Asset = {
                AssetName: v["AssetName"],
                CraftName: v["CraftName"],
                GroupName: v["GroupName"],
            };
        }
    }
    if (
        SourceCharacter === undefined ||
        TargetCharacter === undefined ||
        ActivityGroup === undefined ||
        ActivityName === undefined
    )
        return undefined;
    return { SourceCharacter, TargetCharacter, ActivityGroup, ActivityName, Asset, BCDictionary: dict };
}
