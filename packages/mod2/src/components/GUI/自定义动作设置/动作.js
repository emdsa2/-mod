import { Path } from "@mod-utils/path";
import 保存动作, { 动作数据管理 } from "../../保存数据/保存动作";
import { BaseSubscreen } from "../gui";
import {
    getInputElementById,
    ElementInputShowOrCreate,
    ElementTextAreaShowOrCreate,
    移除清空输入框,
    ReqTextAreaElementById,
} from "../utils";
import { RElementPositionFixed, RDrawButton, RMouseIn, RDrawText, RDrawTextCentered } from "../RDraw";
import ActivityManager from "@mod-utils/ActivityManager";
import { i18n } from "../i18n";

export class 自定义动作设置_动作 extends BaseSubscreen {
    /**
     * @param {()=>(AssetGroup|undefined)} getTargetGroup
     */
    constructor(getTargetGroup) {
        super();

        /** @type {'自己'|'对方'|'任意'} */
        this.targetType = "自己";

        this.targetGroup = getTargetGroup;

        this.actNameId = "笨蛋Luzi_activityName";
        this.actNameRect = { X: 1100, Y: 50, W: 550, H: 60 };

        this.targetButtonRect = { X: 1100, Y: 125, W: 250, H: 60 };

        this.targetSelfTextAreaId = "笨蛋Luzi_targetSelfText";
        this.targetSelfTextAreaRect = { X: 900, Y: 370, W: 750, H: 250 };
        this.targetSelfActRefRect = { X: 1430, Y: 300, W: 60, H: 60 };
        this.targetSelfActedRefRect = { X: 1510, Y: 300, W: 60, H: 60 };
        this.targetSelfActOwnRect = { X: 1590, Y: 300, W: 60, H: 60 };

        this.targetTextAreaId = "笨蛋Luzi_targetText";
        this.targetTextAreaRect = { X: 900, Y: 700, W: 750, H: 250 };
        this.targetActRefRect = { X: 1430, Y: 630, W: 60, H: 60 };
        this.targetActedRefRect = { X: 1510, Y: 630, W: 60, H: 60 };
        this.targetActOwnRect = { X: 1590, Y: 630, W: 60, H: 60 };

        this.saveButtonRect = { X: 1700, Y: 890, W: 250, H: 60 };
        this.saveButtonHint = { X: 1825, Y: 830 };
    }

    /** @returns {{ ret: boolean, what:string}} */
    canSaveReport() {
        if (!this.targetGroup()?.Name) return { ret: false, what: i18n("Setting::Act::Save::NeedBodyArea") };
        const name = getInputElementById(this.actNameId)?.value;
        if (!name) return { ret: false, what: i18n("Setting::Act::Save::NeedActName") };
        if (!动作数据管理()?.动作可用(name)) return { ret: false, what: i18n("Setting::Act::Save::ActExisted") };
        return { ret: true, what: "" };
    }

    run() {
        DrawImageResize(Path.resolve("image/白箭头右.png"), 270, 232, 90, 50);
        DrawText(i18n("Setting::Act::Act"), 220, 260, "White");

        RDrawText({ X: 900, Y: 80 }, i18n("Setting::Act::Name"), "White");
        ElementInputShowOrCreate(this.actNameId, "text", "", "20");
        RElementPositionFixed(this.actNameRect, this.actNameId);

        RDrawText({ X: 900, Y: 155 }, i18n("Setting::Act::Target"), "White");
        if (this.targetType === "任意")
            RDrawButton(this.targetButtonRect, i18n("Setting::Act::Target::Both"), "White", "");
        else if (this.targetType === "自己")
            RDrawButton(this.targetButtonRect, i18n("Setting::Act::Target::Self"), "White", "");
        else if (this.targetType === "对方")
            RDrawButton(this.targetButtonRect, i18n("Setting::Act::Target::Other"), "White", "");

        RDrawText({ X: 900, Y: 230 }, i18n("Setting::Act::BodyGroup"), "White");
        RDrawText(
            { X: 1100, Y: 230 },
            this.targetGroup()?.Description || i18n("Setting::Act::BodyGroup::Unset"),
            "White"
        );

        RDrawText({ X: 900, Y: 330 }, i18n("Setting::Act::Text::TextSelf"), "White");
        ElementTextAreaShowOrCreate(this.targetSelfTextAreaId, 200);
        RElementPositionFixed(this.targetSelfTextAreaRect, this.targetSelfTextAreaId);
        const selfDisabled = this.targetType === "对方";
        ReqTextAreaElementById(this.targetSelfTextAreaId).then((i) => {
            i.disabled = selfDisabled;
            i.style.backgroundColor = selfDisabled ? "LightGray" : "White";
        });
        const targetSelfColor = selfDisabled ? "LightGray" : "White";
        RDrawButton(this.targetSelfActRefRect, "👈", targetSelfColor, "", "", selfDisabled);
        RDrawButton(this.targetSelfActedRefRect, "👉", targetSelfColor, "", "", selfDisabled);
        RDrawButton(this.targetSelfActOwnRect, "🚻", targetSelfColor, "", "", selfDisabled);

        RDrawText({ X: 900, Y: 660 }, i18n("Setting::Act::Text::TextOther"), "White");
        ElementTextAreaShowOrCreate(this.targetTextAreaId, 200);
        RElementPositionFixed(this.targetTextAreaRect, this.targetTextAreaId);
        const targetDisabled = this.targetType === "自己";
        ReqTextAreaElementById(this.targetTextAreaId).then((i) => {
            i.disabled = targetDisabled;
            i.style.backgroundColor = targetDisabled ? "LightGray" : "White";
        });
        const targetColor = targetDisabled ? "LightGray" : "White";
        RDrawButton(this.targetActRefRect, "👈", targetColor, "", "", targetDisabled);
        RDrawButton(this.targetActedRefRect, "👉", targetColor, "", "", targetDisabled);
        RDrawButton(this.targetActOwnRect, "🚻", targetColor, "", "", targetDisabled);

        const { ret, what } = this.canSaveReport();
        if (ret) RDrawButton(this.saveButtonRect, i18n("General::Save"), "White", "");
        else {
            RDrawButton(this.saveButtonRect, i18n("General::Save"), "LightGray", "", "", true);
            if (RMouseIn(this.saveButtonRect)) {
                RDrawTextCentered(this.saveButtonHint, what, "White");
            }
        }
    }

    click() {
        if (RMouseIn(this.targetButtonRect)) {
            if (this.targetType === "自己") this.targetType = "对方";
            else if (this.targetType === "对方") this.targetType = "任意";
            else if (this.targetType === "任意") this.targetType = "自己";
            else this.targetType = "自己";
        }

        if (this.targetType !== "对方") {
            if (RMouseIn(this.targetSelfActRefRect)) {
                ReqTextAreaElementById(this.targetSelfTextAreaId).then((i) => (i.value += "SourceCharacter"));
            } else if (RMouseIn(this.targetSelfActedRefRect)) {
                ReqTextAreaElementById(this.targetSelfTextAreaId).then((i) => (i.value += "TargetCharacter"));
            } else if (RMouseIn(this.targetSelfActOwnRect)) {
                ReqTextAreaElementById(this.targetSelfTextAreaId).then((i) => (i.value += "PronounPossessive"));
            }
        }

        if (this.targetType !== "自己") {
            if (RMouseIn(this.targetActRefRect)) {
                ReqTextAreaElementById(this.targetTextAreaId).then((i) => (i.value += "SourceCharacter"));
            } else if (RMouseIn(this.targetActedRefRect)) {
                ReqTextAreaElementById(this.targetTextAreaId).then((i) => (i.value += "TargetCharacter"));
            } else if (RMouseIn(this.targetActOwnRect)) {
                ReqTextAreaElementById(this.targetTextAreaId).then((i) => (i.value += "PronounPossessive"));
            }
        }

        if (RMouseIn(this.saveButtonRect)) {
            const { ret, what } = this.canSaveReport();
            if (ret) {
                const act = {
                    Name: getInputElementById(this.actNameId)?.value || "",
                    Target: this.targetType !== "自己" ? this.targetGroup().Name : "",
                    TargetSelf: this.targetType !== "对方" ? this.targetGroup().Name : "",
                    Dialog: getInputElementById(this.targetTextAreaId)?.value || "",
                    DialogSelf: getInputElementById(this.targetSelfTextAreaId)?.value || "",
                };
                动作数据管理()?.增加动作(act);
                this.当前页面 = "动作";
            }
        }
    }

    unload() {
        移除清空输入框(this.actNameId);
        移除清空输入框(this.targetSelfTextAreaId);
        移除清空输入框(this.targetTextAreaId);
    }
}
