/**
 * @param {Rect} rect
 * @returns {boolean}
 */
export function RMouseIn(rect) {
    return MouseIn(rect.X, rect.Y, rect.W, rect.H);
}

/**
 * @param {Rect} rect
 * @param  {SliceParameters<4, typeof DrawButton>} args
 */
export function RDrawButton(rect, ...args) {
    DrawButton(rect.X, rect.Y, rect.W, rect.H, ...args);
}

/**
 * @param {Rect} rect
 * @param  {SliceParameters<4, typeof DrawBackNextButton>} args
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

/**
 * @param {Rect} rect
 * @param {string} label
 * @param {SliceParameters<5, typeof DrawButton>} args
 */
export function RDrawIconButton(rect, label, ...args) {
    DrawButton(rect.X, rect.Y, rect.W, rect.H, "", ...args);
    RDrawText({ X: rect.X + rect.H + 10, Y: rect.Y + rect.H / 2 }, label, "black");
}

/**
 * @param {Rect} rect
 * @param {boolean} checked
 */
export function RDrawCheckbox(rect, checked) {
    DrawCheckbox(rect.X, rect.Y, rect.W, rect.H, "", checked);
}

/**
 * @param {Rect} rect
 * @param {string} color
 */
export function RDrawRect(rect, color) {
    DrawRect(rect.X, rect.Y, rect.W, rect.H, color);
}
