const global_name = "ECHOLoadFlag";

/**
 * @param {string} tag
 * @param {()=>void} callback
 */
export function once(tag, callback) {
    if (!window[global_name]) {
        window[global_name] = {};
    }
    if (!window[global_name][tag]) {
        window[global_name][tag] = true;
        callback();
    }
}
