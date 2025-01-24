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
 * @returns {{url:string,type:string} | undefined}
 */
function parseSource(src) {
    /** @type {[RegExp,string,string][]} */
    let rules = [
        [/music\.163\.com.*song.*[\?&]id=(\d+)/, "netease", "song"],
        [/music\.163\.com.*album.*[\?&]id=(\d+)/, "netease", "album"],
        [/music\.163\.com.*artist.*[\?&]id=(\d+)/, "netease", "artist"],
        [/music\.163\.com.*playlist.*[\?&]id=(\d+)/, "netease", "playlist"],
        [/music\.163\.com.*discover\/toplist.*id=(\\d+)/, "netease", "playlist"],
        [/y\.qq\.com.*songDetail\/(\w+)/, "tencent", "song"],
        [/y\.qq\.com.*albumDetail\/(\w+)/, "tencent", "album"],
        [/y\.qq\.com.*singer\/(\w+)/, "tencent", "artist"],
        [/y\.qq\.com.*playlist\/(\d+)/, "tencent", "playlist"],
        [/xiami.com.*song\/(\w+)/, "xiami", "song"],
        [/xiami.com.*album\/(\w+)/, "xiami", "album"],
        [/xiami.com.*artist\/(\w+)/, "xiami", "artist"],
        [/xiami.com.*collect\/(\w+)/, "xiami", "playlist"],
    ];

    for (let rule of rules) {
        let res = rule[0].exec(src);
        if (res !== null) {
            return {
                url: `https://api.i-meto.com/meting/api?server=${rule[1]}&type=${rule[2]}&id=${
                    res[1]
                }&r=${Math.random()}`,
                type: rule[2],
            };
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

    createPlayer(data, type) {
        return loadScript().then(() => {
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

        const req = parseSource(source);
        if (!req) {
            this.hide();
        }
        return fetch(req.url)
            .then(
                (res) =>
                    new Promise((resolve) => {
                        if (!res.ok) console.error(res.statusText);
                        else resolve(res.json());
                    })
            )
            .then((data) => {
                return new Promise((resolve) => {
                    if (!this.player) this.createPlayer(data, req.type).then(resolve);
                    else {
                        getContainer().style.display = "block";

                        this.player.list.clear();
                        this.player.list.add(data);
                        resolve();
                    }
                });
            })
            .then(() => {
                const list = this.player.list;
                if (req.type === "playlist" && list && list.audios.length > 1) {
                    this.player.list.switch(Math.floor(Date.now() / 5 / 60 / 1000) % list.audios.length);
                }

                this.player.play();
            });
    }

    setVolume(volume) {
        if (this.volume === volume) return;
        this.volume = volume;
        if (this.player) this.player.volume(volume);
    }

    hide() {
        if (this.player) {
            this.player.pause();
            getContainer().style.display = "none";
        }
    }

    isHided() {
        return this.player && getContainer().style.display === "none";
    }

    resume() {
        if (this.player) {
            this.player.play();
            getContainer().style.display = "block";
        }
    }
}

export default function () {
    const player = new PlayerManager();

    (async () => {
        while (true) {
            await sleepFor(1000);
            if (!ChatRoomCustomized) {
                player.hide();
                continue;
            }

            if (player.isHided()) player.resume();

            const volume = Player?.AudioSettings?.MusicVolume;
            if (volume != undefined) player.setVolume(volume);

            const url = ChatRoomData?.Custom?.MusicURL;
            if (url) player.setUrl(url);
            else player.player?.pause();
        }
    })();
}
