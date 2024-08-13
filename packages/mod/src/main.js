import AssetManager from "@mod-utils/AssetManager";
import ModManager from "@mod-utils/ModManager";
import { ModInfo } from "@mod-utils/rollupHelper";

import { setup } from "./components";

ModManager.init(ModInfo);
AssetManager.init(setup);
