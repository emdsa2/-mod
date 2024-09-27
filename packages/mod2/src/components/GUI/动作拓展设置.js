import { Path } from "@mod-utils/path";
import { BaseSubscreen, setCurrentScreen, setDefaultScreen } from "./gui";
import { 高潮计数保留设置 } from "./高潮计数保留设置";
import { 自定义动作设置 } from "./自定义动作设置";
import { RDrawImageResize, RMouseIn } from "./RDraw";
import { discord } from "./icon";
import { ModInfo } from "@mod-utils/rollupHelper";
import { i18n } from "./i18n";

class 动作拓展设置 extends BaseSubscreen {
    constructor(prev) {
        super(prev);

        this.exitButtonRect = { X: 114, Y: 75, W: 90, H: 90 };
        this.discordButtonRect = { X: 1700, Y: 840, W: 90, H: 90 };

        this.customActButtonRect = { X: 317, Y: 220, W: 360, H: 600 };
        this.customDressButtonRect = { X: 900, Y: 220, W: 360, H: 600 };
        this.miscButtonRect = { X: 1450, Y: 220, W: 360, H: 600 };
    }
    run() {
        DrawImageResize(Path.resolve("image/选择界面.png"), 0, 0, 2000, 1000);
        RDrawImageResize(this.exitButtonRect, Path.resolve("image/返回白.png"));

        DrawText(`- ${ModInfo.name}${i18n("General::Setting")} -`, 1000, 125, "Black");

        DrawImageResize(Path.resolve("image/界面选择.png"), 0, 0, 2000, 1000);
        DrawImageResize(Path.resolve("image/界面缠绕.png"), 0, 0, 2000, 1000);

        const gColor = (flag) => (flag ? "#FFFFFF" : "#888888");
        DrawText(i18n("Setting::Main::CustomActTile"), 500, 356, gColor(RMouseIn(this.customActButtonRect)));
        DrawText(i18n("Setting::Main::CustomAssetTitle"), 1080, 356, gColor(RMouseIn(this.customDressButtonRect)));
        DrawText(i18n("Setting::Main::MiscTitle"), 1624, 356, gColor(RMouseIn(this.miscButtonRect)));

        if (RMouseIn(this.discordButtonRect))
            DrawTextWrap(i18n("Setting::Main::DiscordHover"), 1500, 700, 400, 90, "White");
        RDrawImageResize(this.discordButtonRect, discord);
    }
    click() {
        if (RMouseIn(this.exitButtonRect)) this.exit();
        else if (RMouseIn(this.customActButtonRect)) setCurrentScreen(new 自定义动作设置(this));
        else if (RMouseIn(this.miscButtonRect)) setCurrentScreen(new 高潮计数保留设置(this));
        else if (RMouseIn(this.discordButtonRect)) window.open("https://discord.gg/K9YnNqsNKx");
    }
}

export default function () {
    setDefaultScreen(() => new 动作拓展设置(null));
}
