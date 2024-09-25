/**
 * @param {Rect} rect
 * @returns {boolean}
 */
export function RMouseIn(rect) {
    return MouseIn(rect.X, rect.Y, rect.W, rect.H);
}

/**
 * @param {Rect} rect
 * @param  {DrawFunParameters<typeof DrawButton>} args
 */
export function RDrawButton(rect, ...args) {
    DrawButton(rect.X, rect.Y, rect.W, rect.H, ...args);
}

/**
 * @param {Rect} rect
 * @param  {DrawFunParameters<typeof DrawBackNextButton>} args
 */
export function RDrawBackNextButton(rect, ...args) {
    DrawBackNextButton(rect.X, rect.Y, rect.W, rect.H, ...args);
}

/**
 * @param {Rect} rect
 * @param {string} id
 */
export function RElementPositionFixed(rect, id) {
    ElementPositionFixed(id, rect.X, rect.Y, rect.W, rect.H);
}

/**
 * @param {Point} anchor
 * @param {string} text
 * @param {string} color
 * @param {string} [backColor]
 */
export function RDrawText(anchor, text, color, backColor) {
    const oldTextAlign = MainCanvas.textAlign;
    MainCanvas.textAlign = "left";
    DrawText(text, anchor.X, anchor.Y, color, backColor);
    MainCanvas.textAlign = oldTextAlign;
}

/**
 * @param {Point} anchor
 * @param {string} text
 * @param {string} color
 * @param {string} [backColor]
 */
export function RDrawTextCentered(anchor, text, color, backColor) {
    const oldTextAlign = MainCanvas.textAlign;
    MainCanvas.textAlign = "center";
    DrawText(text, anchor.X, anchor.Y, color, backColor);
    MainCanvas.textAlign = oldTextAlign;
}

/**
 * @param {Rect} rect
 * @param {(Parameters<typeof DrawImageResize>)[0]} source
 */
export function RDrawImageResize(rect, source) {
    DrawImageResize(source, rect.X, rect.Y, rect.W, rect.H);
}
