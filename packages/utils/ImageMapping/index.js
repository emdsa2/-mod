class ImageMapping {
    constructor() {
        this.basic = /** @type {Record<string,string>} */ ({}); // basicImgMapping
        this.custom = /** @type {Record<string,string>} */ ({}); // customImgMapping
    }

    /**
     * 添加自定义图片映射
     * @param { Record<string,string> } mappings
     */
    addImgMapping(mappings) {
        Object.entries(mappings).forEach(([key, value]) => {
            this.custom[key] = value;
        });
    }

    /**
     * 设置基础图片映射
     * @param { Record<string,string> } mappings
     */
    setBasicImgMapping(mappings) {
        this.basic = mappings;
    }

    /**
     * 图片映射。分为两个阶段，基础映射和自定义映射。基础映射是在打包时生成的，自定义映射是在运行时添加的。
     *
     * 自定义映射必须得到基础映射或者非映射的图片。
     *
     * 典型过程如下：
     *
     * Assets/Female3DCG/Cloth_笨笨蛋Luzi/Kneel/礼服_Luzi_Large_Bottom.png
     *
     * -> Assets/Female3DCG/Cloth/Kneel/礼服_Luzi_Large_Bottom.png (自定义映射，镜像身体组)
     *
     * -> ${baseURL}/Assets/Female3DCG/Cloth/Kneel/礼服_Luzi_Large_Bottom.png (基础映射)
     */
    mapImgSrc(src) {
        if (typeof src !== "string") return src;
        if (!src.endsWith(".png")) return src;

        if (src.startsWith("data:image")) return src;
        if (src.startsWith("http")) return src;

        let test = src.startsWith("./") ? src.slice(2) : src;
        let test_return = test;
        if (this.custom[test_return]) test_return = this.custom[test_return];
        if (this.basic[test_return]) test_return = this.basic[test_return];
        if (test_return !== test) return test_return;
        return src;
    }

    /**
     * @param {string} src
     * @param {(src: string) => void} accept
     */
    mapImg(src, accept) {
        let result = src;
        if (this.custom[result]) result = this.custom[result];
        if (this.basic[result]) result = this.basic[result];

        if (result !== src) accept(result);
    }
}

const global_name = "ECHOImageMapping";

/**
 * @returns { ImageMapping }
 */
function Mapping() {
    if (window[global_name]) {
        return window[global_name];
    }
    window[global_name] = new ImageMapping();
    return window[global_name];
}

export { Mapping };
