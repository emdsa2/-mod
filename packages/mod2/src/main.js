import ActivityManager from "@mod-utils/ActivityManager";
import ModManager from "@mod-utils/ModManager";
import { ModInfo } from "@mod-utils/rollupHelper";
import ChatRoomOrder from "@mod-utils/ChatRoomOrder";

import { setup } from "./components";
import AssetManager from "@mod-utils/AssetManager";

ModManager.init(ModInfo);
ChatRoomOrder.setup();
ActivityManager.init();
setup();
