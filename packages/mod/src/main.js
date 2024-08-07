import AssetManager from "./assetManager";
import ModManager from "./modManager";
import { ModInfo } from "./rollupHelper";

import { setup } from "./components";

ModManager.init(ModInfo);
AssetManager.init();

AssetManager.queueSetup(() => setup());
