import { sleepFor } from "@mod-utils/sleep";

let scriptLoadStarted = false;
let scriptLoadDone = false;

const afterload = [];

function loadScript(url) {
    if (scriptLoadDone) return Promise.resolve();

    if (scriptLoadStarted) {
        return new Promise((resolve) => {
            afterload.push(resolve);
        });
    }

    scriptLoadStarted = true;

    return new Promise((resolve) => {
        afterload.push(resolve);

        (() => {
            const item = document.createElement("link");
            item.rel = "stylesheet";
            item.href = "https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.css";
            document.head.appendChild(item);
        })();

        (() => {
            const item = document.createElement("script");
            item.src = "https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.js";
            item.onload = () => {
                scriptLoadDone = true;
                afterload.forEach((f) => f());
            };
            document.body.appendChild(item);
        })();
    });
}

const container_id = "ECHO_BC_audioplayer";

function getContainer() {
    let ret = document.getElementById(container_id);
    if (!ret) {
        ret = document.createElement("div");
        ret.id = container_id;
        document.body.appendChild(ret);
    }
    return ret;
}

/**
 * https://github.com/metowolf/MetingJS/blob/fd5394054c3b28c82a95b799e6c468da0f6f704f/source/Meting.js#L44C1-L72C4
 * @param {string} src
 * @returns {string | undefined}
 */
function parseSource(src) {
    let rules = [
        ["music.163.com.*song.*id=(\\d+)", "netease", "song"],
        ["music.163.com.*album.*id=(\\d+)", "netease", "album"],
        ["music.163.com.*artist.*id=(\\d+)", "netease", "artist"],
        ["music.163.com.*playlist.*id=(\\d+)", "netease", "playlist"],
        ["music.163.com.*discover/toplist.*id=(\\d+)", "netease", "playlist"],
        ["y.qq.com.*song/(\\w+).html", "tencent", "song"],
        ["y.qq.com.*album/(\\w+).html", "tencent", "album"],
        ["y.qq.com.*singer/(\\w+).html", "tencent", "artist"],
        ["y.qq.com.*playsquare/(\\w+).html", "tencent", "playlist"],
        ["y.qq.com.*playlist/(\\w+).html", "tencent", "playlist"],
        ["xiami.com.*song/(\\w+)", "xiami", "song"],
        ["xiami.com.*album/(\\w+)", "xiami", "album"],
        ["xiami.com.*artist/(\\w+)", "xiami", "artist"],
        ["xiami.com.*collect/(\\w+)", "xiami", "playlist"],
    ];

    for (let rule of rules) {
        let patt = new RegExp(rule[0]);
        let res = patt.exec(src);
        if (res !== null) {
            return `https://api.i-meto.com/meting/api?server=${rule[1]}&type=${rule[2]}&id=${
                res[1]
            }&r=${Math.random()}`;
        }
    }
    return undefined;
}

class PlayerManager {
    constructor() {
        this.player = null;
        this.src = "";
        this.volume = 0;
    }

    createPlayer(data) {
        loadScript().then(() => {
            // @ts-ignore
            this.player = new APlayer({
                container: getContainer(),
                audio: data,
                mutex: true,
                fixed: true,
                // mini: true,
                lrcType: 3,
                autoplay: true,
                storageName: "echo_bc_music",
            });
        });
    }

    setUrl(source) {
        if (this.src === source) return;
        this.src = source;

        fetch(parseSource(source))
            .then((res) => res.json())
            .then((data) => {
                if (!this.player) this.createPlayer(data);
                else {
                    this.player.list.clear();
                    this.player.list.add(data);
                }
            });
    }

    setVolume(volume) {
        if (this.volume === volume) return;
        this.volume = volume;
        if (this.player) this.player.volume(volume);
    }
}

export default function () {
    const player = new PlayerManager();

    (async () => {
        while (true) {
            await sleepFor(1000);
            if (!ChatRoomCustomized) continue;

            const volume = Player?.AudioSettings?.MusicVolume;
            if (volume != undefined) player.setVolume(volume);

            const url = ChatRoomData?.Custom?.MusicURL;
            if (url) {
                player.setUrl(url);
                player.player?.play();
            } else player.player?.pause();
        }
    })();
}
