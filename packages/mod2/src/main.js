import ActivityManager from "./ActivityManager";
import ModManager from "@mod-utils/ModManager";
import { ModInfo } from "@mod-utils/rollupHelper";

import { setup } from "./components";

ModManager.init(ModInfo);
ActivityManager.init(setup);
