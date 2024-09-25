import { Path } from "@mod-utils/path";
import { BaseSubscreen, setCurrentScreen, setDefaultScreen } from "./gui";
import { 高潮计数保留设置 } from "./高潮计数保留设置";
import { 自定义动作设置 } from "./自定义动作设置";

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
            setCurrentScreen(new 自定义动作设置(this));
        }
        if (MouseIn(900, 220, 360, 600)) {
        }
        if (MouseIn(1450, 220, 360, 600)) {
            setCurrentScreen(new 高潮计数保留设置(this));
        }
        if (MouseIn(1500, 840, 390, 90)) {
            window.open("https://discord.gg/K9YnNqsNKx");
        }
    }
}

export default function () {
    setDefaultScreen(() => new 动作拓展设置(null));
}
