import ActivityManager from "@mod-utils/ActivityManager";
import { 保存制作物品, 读取制作物品 } from "../保存数据/保存制作物品";
import { 设置高潮数据, 高潮数据开关 } from "../保存数据/保存高潮";
import { flying_pig } from "./flying_pig";
import { activityName, 动作数据管理 } from "../保存数据/保存动作";
import { Path } from "@mod-utils/path";
import log from "@mod-utils/log";

const GUIScreen = {
    /** @type { Subscreen | null } */
    _Current: null,
    get Current() {
        return this._Current;
    },
    /**
     * @param {Subscreen | null} value
     */
    set Current(value) {
        if (this._Current !== null) this._Current.unload();
        this._Current = value;
        if (this._Current === null) {
            if (typeof PreferenceSubscreenExtensionsClear === "function") PreferenceSubscreenExtensionsClear();
            else PreferenceSubscreen = "";
        } else {
            this._Current.load();
        }
    },
};

function getInputElementById(id) {
    return /** @type {HTMLInputElement | null}*/ (document.getElementById(id));
}

function ElementInputShowOrCreate(id, type, value, maxLength) {
    const ele = getInputElementById(id);
    if (ele) {
        ele.hidden = false;
    } else {
        ElementCreateInput(id, type, value, maxLength);
    }
}

function ElementTextAreaShowOrCreate(id, maxLength) {
    const ele = getInputElementById(id);
    if (ele) {
        ele.hidden = false;
        ele.maxLength = maxLength;
    } else {
        ElementCreateTextArea(id).maxLength = maxLength;
    }
}

function 移除清空输入框(name) {
    const ele = getInputElementById(name);
    if (ele) {
        ele.style.display = "none"; // 移除输入框
        ele.value = ""; // 清空输入框
    }
}

function 移除清空输入框不清空(name) {
    const ele = getInputElementById(name);
    if (ele) {
        ele.style.display = "none"; // 移除输入框
    }
}

class Subscreen {
    load() {}
    run() {}
    click() {}
    exit() {
        GUIScreen.Current = null;
    }
    unload() {}
}

class BaseSubscreen extends Subscreen {
    constructor(prev) {
        super();
        this.prev = prev;
    }
    exit() {
        GUIScreen.Current = this.prev;
    }
}
class 自定义动作设置 extends BaseSubscreen {
    constructor(prev) {
        super(prev);
        this.单双 = "👤";
        this.isme = "👈";
        this.新建动作 = false;
        this.当前动作索引 = 0;
        this.动作 = undefined;
        this.当前界面 = undefined;
    }

    run() {
        DrawImageResize(Path.resolve("image/选择界面.png"), 0, 0, 2000, 1000);
        DrawImageResize(Path.resolve("image/条线.png"), 0, 0, 2000, 1000);
        DrawImageResize(Path.resolve("image/返回白.png"), 114, 75, 90, 90);
        DrawText(`- 自定义动作设置 -`, 1000, 125, "Black");

        DrawCharacter(Player, 370, 50, 0.9, false); // 绘制主要标签和玩家
        if (PreferenceArousalIsActive()) {
            // 绘制所有可用的角色区域
            for (let Group of AssetGroup) {
                if (
                    Group.IsItem() &&
                    !Group.MirrorActivitiesFrom &&
                    AssetActivitiesForGroup("Female3DCG", Group.Name).length
                )
                    DrawAssetGroupZone(
                        Player,
                        Group.Zone,
                        0.9,
                        370,
                        50,
                        1,
                        "#808080FF",
                        3,
                        PreferenceGetFactorColor(PreferenceGetZoneFactor(Player, Group.Name))
                    );
            }
            // 可以选择并在角色身上绘制区域
            if (Player.FocusGroup != null) {
                DrawAssetGroupZone(Player, Player.FocusGroup.Zone, 0.9, 370, 50, 1, "cyan");
                MainCanvas.textAlign = "center";
            }
        }
        // DrawButton(80, 210, 160, 100, "", "#646464", "");
        const activityInfo2 = {
            Name: getInputElementById("笨蛋Luzi_activityName")?.value || "",
            Target: Player.FocusGroup?.Name || "",
            TargetSelf: Player.FocusGroup?.Name || "",
            Dialog: getInputElementById("笨蛋Luzi_targetSelfText")?.value || "",
            DialogSelf: getInputElementById("笨蛋Luzi_targetSelfText")?.value || "",
        };

        if (MouseIn(80, 210, 160, 100)) {
            DrawImageResize(Path.resolve("image/白箭头右.png"), 270, 232, 90, 50);
            DrawText(`动作`, 220, 260, "White");
        } else {
            if (this.当前界面 !== `动作`) {
                DrawText(`动作`, 160, 260, "White");
            }
        }

        if (MouseIn(80, 380, 160, 100)) {
            DrawImageResize(Path.resolve("image/白箭头右.png"), 270, 399, 90, 50);
            DrawText(`文本`, 220, 426.67, "White");
        } else {
            if (this.当前界面 !== `文本`) {
                DrawText(`文本`, 160, 426.67, "White");
            }
        }

        if (this.当前界面 == `动作`) {
            ElementInputShowOrCreate("笨蛋Luzi_activityName", "text", "", "20"); // 创建一个新的文本输入元素
            ElementPosition("笨蛋Luzi_activityName", 1260, 250, 400); // 特定位置绘制一个输入框
            DrawText(`动作名字:`, 960, 260, "White"); // 绘制一个文本元素
            DrawImageResize(Path.resolve("image/白箭头右.png"), 270, 232, 90, 50);
            DrawText(`动作`, 220, 260, "White");
            if (this.单双 === "👤") {
                DrawButton(1500, 200, 90, 90, "👤", "White", "");
                DrawImageResize(flying_pig, 940, 340, 100, 140);

                if (this.isme === "👈") {
                    DrawButton(840, 356, 80, 90, "👈", "White", "");
                }

                if (this.isme === "👉") {
                    DrawButton(840, 356, 80, 90, "👉", "White", "");
                }
            }
            if (this.单双 === "👥") {
                DrawButton(1500, 200, 90, 90, "👥", "White", "");
            }
        } else {
            移除清空输入框不清空("笨蛋Luzi_activityName");
        }

        if (this.当前界面 == `文本`) {
            DrawImageResize(Path.resolve("image/白箭头右.png"), 270, 399, 90, 50);
            DrawText(`文本`, 220, 426.67, "White");
            if (this.单双 === "👤") {
                if (this.isme === "👈") {
                    ElementCreateTextArea("笨蛋Luzi_targetSelfText");
                    document.getElementById("笨蛋Luzi_targetSelfText").setAttribute("maxLength", 1000);
                    ElementPosition("笨蛋Luzi_targetSelfText", 1310, 650, 850, 480); // 特定位置绘制一个输入框

                    DrawText(`对自己使用动作的文本:`, 1100, 360, "White"); // 绘制一个文本元素
                    DrawButton(1460, 328, 80, 60, "👈", "White", "");
                    DrawButton(1560, 328, 80, 60, "👉", "White", "");
                    DrawButton(1660, 328, 80, 60, "🚻", "White", "");

                    delete activityInfo2.Target;
                } else {
                    移除清空输入框("笨蛋Luzi_targetSelfText");
                }
                // document.getElementById("笨蛋Luzi_targetSelfText").value

                if (this.isme === "👉") {
                    ElementTextAreaShowOrCreate("笨蛋Luzi_targetText", 1000);
                    ElementPosition("笨蛋Luzi_targetText", 1310, 650, 850, 480); // 特定位置绘制一个输入框

                    DrawText(`对别人使用动作的文本:`, 1100, 360, "White"); // 绘制一个文本元素
                    DrawButton(1460, 328, 80, 60, "👈", "White", "");
                    DrawButton(1560, 328, 80, 60, "👉", "White", "");
                    DrawButton(1660, 328, 80, 60, "🚻", "White", "");

                    delete activityInfo2.TargetSelf;
                } else {
                    移除清空输入框("笨蛋Luzi_targetText");
                }
            }
            if (this.单双 === "👥") {
                ElementTextAreaShowOrCreate("笨蛋Luzi_targetSelfText", 1000);
                ElementPosition("笨蛋Luzi_targetSelfText", 1310, 300, 800, 380); // 特定位置绘制一个输入框
                DrawText(`对自己使用动作的文本:`, 1100, 80, "White"); // 绘制一个文本元素
                DrawButton(1730, 135, 80, 60, "👈", "White", "");
                DrawButton(1860, 135, 80, 60, "👉", "White", "");
                DrawButton(1730, 220, 80, 60, "🚻", "White", "");

                ElementTextAreaShowOrCreate("笨蛋Luzi_targetText", 1000);
                ElementPosition("笨蛋Luzi_targetText", 1310, 790, 800, 380); // 特定位置绘制一个输入框
                DrawText(`对别人使用动作的文本:`, 1100, 560, "White"); // 绘制一个文本元素
                DrawButton(1730, 635, 80, 60, "👈", "White", "");
                DrawButton(1860, 635, 80, 60, "👉", "White", "");
                DrawButton(1730, 720, 80, 60, "🚻", "White", "");
            }

            if (Player.FocusGroup && Player.FocusGroup.Name && activityInfo2.Name) {
                if (MouseIn(1770, 460, 150, 80)) {
                    // 获取用户输入的动作名字
                    const name = getInputElementById("笨蛋Luzi_activityName")?.value || "";
                    if (name.length === 0) return;
                    const nName = activityName(name);

                    // 检查是否存在重复的动作名字
                    if (ActivityManager.checkActivityAvailability(nName)) {
                        DrawText(`动作名字已存在!`, 1850, 400, "red"); // 绘制一个文本元素
                    }
                    if (!ActivityManager.checkActivityAvailability(nName)) {
                        DrawText(`新建动作`, 1850, 400, "White"); // 绘制一个文本元素
                    }
                }

                if (!this.新建动作) {
                    DrawButton(1770, 460, 150, 80, "新建", "White", "");
                }
                if (this.新建动作) {
                    DrawButton(1770, 460, 150, 80, "✪ ω ✪", "White", "");
                    动作数据管理()?.增加动作(activityInfo2);
                    this.新建动作 = false;
                }
            }
        } else {
            移除清空输入框不清空("笨蛋Luzi_targetSelfText");
            移除清空输入框不清空("笨蛋Luzi_targetText");
        }

        if (MouseIn(80, 710, 160, 100)) {
            DrawImageResize(Path.resolve("image/白箭头右.png"), 270, 730, 90, 50);
            DrawText(`删除`, 220, 760, "White");
        } else {
            if (this.当前界面 !== `删除`) {
                DrawText(`删除`, 160, 760, "White");
            }
        }

        if (this.当前界面 == `删除`) {
            DrawImageResize(Path.resolve("image/白箭头右.png"), 270, 730, 90, 50);
            DrawText(`删除`, 220, 760, "White");

            DrawText(`删除已有动作:`, 1000, 260, "White"); // 绘制一个文本元素
            this.动作 = Object.keys(动作数据管理()?.data || {});
            this.当前动作索引 = Math.min(this.当前动作索引, this.动作.length - 1);
            DrawBackNextButton(900, 325, 400, 64, this.动作[this.当前动作索引] ?? "", "White", "");
            DrawButton(1360, 325, 100, 64, "🚮", "White", "");

            DrawButton(1600, 720, 90, 90, "♻", "red", "");
            if (MouseIn(1600, 720, 90, 90)) {
                DrawText(`清空所有创建动作`, 1650, 680, "red"); // 绘制一个文本元素
            }
        }
    }
    click() {
        if (MouseIn(114, 75, 90, 90)) {
            动作数据管理()?.保存();
            log.info("已存储进个人设置");
            this.exit();
        }

        for (const Group of AssetGroup) {
            if (
                Group.IsItem() &&
                !Group.MirrorActivitiesFrom &&
                AssetActivitiesForGroup("Female3DCG", Group.Name).length
            ) {
                const Zone = Group.Zone.find((z) => DialogClickedInZone(Player, z, 0.9, 370, 50, 1));
                if (Zone) {
                    Player.FocusGroup = Group;
                    PreferenceArousalZoneFactor = PreferenceGetZoneFactor(Player, Group.Name);
                }
            }
        }

        if (MouseIn(80, 210, 160, 100)) {
            this.当前界面 = `动作`;
        }
        if (this.当前界面 == `动作`) {
            if (MouseIn(1500, 200, 90, 90)) {
                this.单双 = this.单双 === "👤" ? "👥" : "👤";
                移除清空输入框("笨蛋Luzi_targetSelfText");
                移除清空输入框("笨蛋Luzi_targetText");
            }

            if (MouseIn(840, 356, 80, 90)) {
                this.isme = this.isme === "👈" ? "👉" : "👈";
                移除清空输入框("笨蛋Luzi_targetSelfText");
                移除清空输入框("笨蛋Luzi_targetText");
            }
        }

        if (MouseIn(80, 380, 160, 100)) {
            this.当前界面 = `文本`;
        }
        if (this.当前界面 == `文本`) {
            if (this.单双 === "👤") {
                if (this.isme === "👈") {
                    if (MouseIn(1460, 328, 80, 60)) {
                        getInputElementById("笨蛋Luzi_targetSelfText").value += "SourceCharacter";
                    }
                    if (MouseIn(1560, 328, 80, 60)) {
                        getInputElementById("笨蛋Luzi_targetSelfText").value += "TargetCharacter";
                    }
                    if (MouseIn(1660, 328, 80, 60)) {
                        getInputElementById("笨蛋Luzi_targetSelfText").value += "PronounPossessive";
                    }
                }
                if (this.isme === "👉") {
                    if (MouseIn(1460, 328, 80, 60)) {
                        getInputElementById("笨蛋Luzi_targetText").value += "SourceCharacter";
                    }
                    if (MouseIn(1560, 328, 80, 60)) {
                        getInputElementById("笨蛋Luzi_targetText").value += "TargetCharacter";
                    }
                    if (MouseIn(1660, 328, 80, 60)) {
                        getInputElementById("笨蛋Luzi_targetText").value += "PronounPossessive";
                    }
                }
            }

            if (this.单双 === "👥") {
                if (MouseIn(1730, 135, 80, 60)) {
                    getInputElementById("笨蛋Luzi_targetSelfText").value += "SourceCharacter";
                }
                if (MouseIn(1860, 135, 80, 60)) {
                    getInputElementById("笨蛋Luzi_targetSelfText").value += "TargetCharacter";
                }
                if (MouseIn(1730, 220, 80, 60)) {
                    getInputElementById("笨蛋Luzi_targetSelfText").value += "PronounPossessive";
                }
                if (MouseIn(1730, 635, 80, 60)) {
                    getInputElementById("笨蛋Luzi_targetText").value += "SourceCharacter";
                }
                if (MouseIn(1860, 635, 80, 60)) {
                    getInputElementById("笨蛋Luzi_targetText").value += "TargetCharacter";
                }
                if (MouseIn(1730, 720, 80, 60)) {
                    getInputElementById("笨蛋Luzi_targetText").value += "PronounPossessive";
                }
            }

            if (MouseIn(1770, 460, 150, 80)) {
                let name = getInputElementById("笨蛋Luzi_activityName")?.value || ""; // 获取用户输入的动作名字
                const nName = activityName(name);
                // 检查是否存在重复的动作名字
                if (ActivityFemale3DCGOrdering.includes(nName)) {
                    this.新建动作 = false;
                }

                if (!ActivityFemale3DCGOrdering.includes(nName)) {
                    this.新建动作 = true;
                    动作数据管理()?.保存();
                    log.info("已存储进个人设置");
                }
            }
            // Player.OnlineSettings.ECHO
        }

        if (MouseIn(80, 710, 160, 100)) {
            this.当前界面 = `删除`;
        }

        if (this.当前界面 == `删除`) {
            if (Array.isArray(this.动作) && this.动作.length > 0) {
                DrawBackNextButton(
                    900,
                    325,
                    400,
                    64,
                    this.动作[this.当前动作索引] ?? "",
                    "White",
                    "",
                    // 点击按钮切换到上一个字符串
                    () => {
                        this.当前动作索引 = (this.当前动作索引 - 1 + this.动作.length) % this.动作.length;
                        return this.动作[this.当前动作索引];
                    },
                    // 点击按钮切换到下一个字符串
                    () => {
                        this.当前动作索引 = (this.当前动作索引 + 1) % this.动作.length;
                        return this.动作[this.当前动作索引];
                    }
                );
            }
            if (MouseIn(1360, 325, 100, 64)) {
                动作数据管理()?.删除动作(this.动作[this.当前动作索引]);
                log.info("已存储进个人设置");
            }
            if (MouseIn(1600, 720, 90, 90)) {
                动作数据管理()?.清空();
                console.log("已全部清空");
            }
        }
    }
    unload() {
        移除清空输入框("笨蛋Luzi_activityName");
        移除清空输入框("笨蛋Luzi_targetSelfText");
        移除清空输入框("笨蛋Luzi_targetText");
    }
}

class 高潮计数保留设置 extends BaseSubscreen {
    constructor(prev) {
        super(prev);
    }
    run() {
        DrawImageResize(Path.resolve("image/选择界面.png"), 0, 0, 2000, 1000);
        DrawImageResize(Path.resolve("image/返回白.png"), 114, 75, 90, 90);

        DrawText(`- 杂项设置 -`, 1000, 125, "Black");

        DrawText(`高潮计数保留`, 450, 236, "#FFFFFF");
        DrawCheckbox(250, 200, 64, 64, "", 高潮数据开关());
        DrawButton(250, 290, 390, 90, "      清空高潮次数", "White", "Icons/Trash.png");

        DrawButton(1050, 290, 390, 90, "       储存制作", "White", "Icons/Crafting.png");
        DrawButton(1450, 290, 390, 90, "       读取制作", "White", "Icons/Crafting.png");
    }
    click() {
        if (MouseIn(114, 75, 90, 90)) {
            this.exit();
        }
        if (MouseIn(250, 200, 64, 64)) {
            设置高潮数据({ 高潮开关: !高潮数据开关() });
        }
        if (MouseIn(250, 290, 390, 90)) {
            设置高潮数据({ 高潮次数: 0 });
        }
        if (MouseIn(1050, 290, 290, 90)) {
            保存制作物品();
            console.log("已储存");
        }
        if (MouseIn(1450, 290, 290, 90)) {
            读取制作物品();
            console.log("已读取");
        }
    }
}

class 动作拓展设置 extends BaseSubscreen {
    constructor(prev) {
        super(prev);
    }
    run() {
        DrawImageResize(Path.resolve("image/选择界面.png"), 0, 0, 2000, 1000);
        DrawImageResize(Path.resolve("image/返回白.png"), 114, 75, 90, 90);
        DrawText(`- 动作拓展设置 -`, 1000, 125, "Black");

        DrawImageResize(Path.resolve("image/界面选择.png"), 0, 0, 2000, 1000);

        DrawImageResize(Path.resolve("image/界面缠绕.png"), 0, 0, 2000, 1000);

        // DrawButton(900, 220, 360, 600, "", "#646464", "");
        if (MouseIn(317, 220, 360, 600)) {
            DrawText(`自定义动作`, 500, 356, "#FFFFFF");
        } else {
            DrawText(`自定义动作`, 500, 356, "#888888");
        }

        if (MouseIn(900, 220, 360, 600)) {
            DrawText(`自定义服装`, 1080, 356, "#FFFFFF");
        } else {
            DrawText(`自定义服装`, 1080, 356, "#888888");
        }

        if (MouseIn(1450, 220, 360, 600)) {
            DrawText(`杂项`, 1624, 356, "#FFFFFF");
        } else {
            DrawText(`杂项`, 1624, 356, "#888888");
        }

        // DrawButton(1500, 840, 390, 90, "      Discord", "White", "Icons/Trash.png");
        if (MouseIn(1500, 840, 390, 90)) {
            DrawTextWrap(
                `插件翻译\n\n\n\n\n动作\n/\n服装拓展\n\n在此查看插件更新及反馈建议`,
                1500,
                700,
                390,
                90,
                "White"
            );
        }
    }
    click() {
        if (MouseIn(114, 75, 90, 90)) {
            this.exit();
        }
        if (MouseIn(317, 220, 360, 600)) {
            GUIScreen.Current = new 自定义动作设置(this);
        }
        if (MouseIn(900, 220, 360, 600)) {
        }
        if (MouseIn(1450, 220, 360, 600)) {
            GUIScreen.Current = new 高潮计数保留设置(this);
        }
        if (MouseIn(1500, 840, 390, 90)) {
            window.open("https://discord.gg/K9YnNqsNKx");
        }
    }
}

export default function () {
    PreferenceRegisterExtensionSetting({
        Identifier: "动作拓展设置",
        ButtonText: "动作拓展设置",
        Image: "Icons/Use.png",
        load: () => (GUIScreen.Current = new 动作拓展设置(null)),
        click: () => GUIScreen.Current?.click(),
        run: () => GUIScreen.Current?.run(),
        unload: () => GUIScreen.Current?.unload(),
        exit: () => GUIScreen.Current?.exit(),
    });
}
