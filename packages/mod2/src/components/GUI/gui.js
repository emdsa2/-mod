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
            else PreferenceSubscreen = null;
        } else {
            this._Current.load();
        }
    },
};

export class Subscreen {
    load() {}
    run() {}
    click() {}
    exit() {
        GUIScreen.Current = null;
    }
    unload() {}
}

export class BaseSubscreen extends Subscreen {
    constructor(prev) {
        super();
        this.prev = prev;
    }
    exit() {
        GUIScreen.Current = this.prev;
    }
}

/** @type { () => Subscreen } */
let defaultScreenProvider = null;

export function setDefaultScreen(provider) {
    defaultScreenProvider = provider;
}

export function setCurrentScreen(screen) {
    GUIScreen.Current = screen;
}

export default function () {
    PreferenceRegisterExtensionSetting({
        Identifier: "动作拓展设置",
        ButtonText: "动作拓展设置",
        Image: "Icons/Use.png",
        load: () => {
            if (defaultScreenProvider) GUIScreen.Current = defaultScreenProvider();
        },
        click: () => GUIScreen.Current?.click(),
        run: () => GUIScreen.Current?.run(),
        unload: () => GUIScreen.Current?.unload(),
        exit: () => GUIScreen.Current?.exit(),
    });
}
