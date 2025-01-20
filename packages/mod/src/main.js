import AssetManager from "@mod-utils/AssetManager";
import ModManager from "@mod-utils/ModManager";
import { ModInfo } from "@mod-utils/rollupHelper";

import { setup } from "./components";
import { once } from "@mod-utils/loadFlag";

once(ModInfo.name, () => {
    ModManager.init(ModInfo);
    AssetManager.init(setup);
});
