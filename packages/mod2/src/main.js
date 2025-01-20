import ActivityManager from "@mod-utils/ActivityManager";
import ModManager from "@mod-utils/ModManager";
import { ModInfo } from "@mod-utils/rollupHelper";
import ChatRoomOrder from "@mod-utils/ChatRoomOrder";

import { setup } from "./components";
import { once } from "@mod-utils/loadFlag";

once(ModInfo.name, () => {
    ModManager.init(ModInfo);
    ChatRoomOrder.setup();
    ActivityManager.init();
    setup();
});
