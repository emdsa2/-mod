import { Path } from "@mod-utils/path";
import { BaseSubscreen } from "./gui";
import { 设置高潮数据, 高潮数据开关 } from "../保存数据/保存高潮";
import { 保存制作物品, 读取制作物品 } from "../保存数据/保存制作物品";

export class 高潮计数保留设置 extends BaseSubscreen {
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
