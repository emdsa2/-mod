import ModManager from "../modManager";
import { Path } from "../path";

const status = Object.freeze({
    echo: {
        msg: "╰(*°▽°*)╯",
        flag: "ECHO",
        img: Path.resolve("image/服装拓展.png"),
    },
    echoBeta: {
        msg: "╰(*°▽°*)╯BETA",
        flag: "ECHOBETA",
        img: Path.resolve("image/服装拓展beta.png"),
    },
    echo2: {
        msg: "(._.)",
        flag: "ECHO2",
        img: Path.resolve("image/动作拓展.png"),
    },
});

function flagStatus(data) {
    const state = Object.values(status).find((s) => data.Content === s.msg);
    if (!state) return;

    const CRCharacter = ChatRoomCharacterDrawlist.find((C) => C.MemberNumber === data.Sender);
    if (CRCharacter) {
        CRCharacter[state.flag] = true;
    }
}

function drawStatus(drawArgs) {
    const [C, CharX, CharY, Zoom] = drawArgs;
    const state = Object.values(status).find((s) => C[s.flag]);
    if (!state) return;
    DrawImageResize(state.img, CharX + 420 * Zoom, CharY + 5, 35 * Zoom, 35 * Zoom);
}

function sendHidden(text) {
    ServerSend("ChatRoomChat", {
        Content: `${text}`,
        Type: "Hidden",
    });
}

function delayedSendHidden(text) {
    setTimeout(() => {
        sendHidden(text);
    }, 2000);
}

export default function () {
    ModManager.hookFunction("ChatRoomSync", 10, (args, next) => {
        delayedSendHidden(status.echo.msg);
        next(args);
    });

    ModManager.hookFunction("ChatRoomSyncMemberLeave", 10, (args, next) => {
        delayedSendHidden(status.echo.msg);
        next(args);
    });

    ModManager.hookFunction("ChatRoomMessage", 10, (args, next) => {
        let data = args[0];
        if (data.Content === "ServerEnter") {
            delayedSendHidden(status.echo.msg);
        }
        next(args);
    });

    ModManager.hookFunction("ChatRoomMessage", 0, (args, next) => {
        const data = args[0];
        if (data.Type === "Hidden") {
            flagStatus(data);
        }
        next(args);
    });

    ModManager.hookFunction("ChatRoomDrawCharacterStatusIcons", 10, (args, next) => {
        if (ChatRoomHideIconState == 0) {
            drawStatus(args);
        }
        next(args);
    });
}
