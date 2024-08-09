import { baseURL } from "./rollupHelper";

const emptyPNGPath = `${baseURL}image/空.png`;

export class Path {
    /**
     * 资源路径解析，如果以"/"开头或者"http"开头则直接返回，否则拼接基础资源URL
     * @param {string} path
     * @returns {string}
     *
     * @example
     * resolveResource("https://example.com/image.png");
     * // 返回"https://example.com/image.png"
     *
     * @example
     * resolveResource("image.png");
     * // 返回 `${baseURL}image.png`
     *
     */

    static resolve(path) {
        if (path.startsWith("/") || path.startsWith("http")) {
            return path;
        }
        return baseURL + path;
    }

    // image/空.png
    static get 空png() {
        return emptyPNGPath;
    }
}
