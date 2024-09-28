import ModManager from "@mod-utils/ModManager";

function sendShareHelp(shareName) {
    ChatRoomSendLocal(
        `<span style="font-size: 1.5em;">分享格式帮助</span>
<br/>
格式说明:
* 开头键入: <span style="color: red;">/分享</span> <span style="color: red;">[链接]</span>  (注意空格)
<br/>
网易云: 
网页版点开歌曲详情 => 唱片底下的蓝色字体'生成外链播放器' => 点击'复制代码'
客户端版 => 点击歌曲的分享 => 复制链接
示例: "/分享 https://music.163.com/song?id=******"  (在发送前会过滤掉其他uri参数，不会发送userid等信息)
<br/>
B站: 
点击视频下面的分享按钮 => 复制嵌入式链接
示例: "/分享 &lt;iframe src=&quot;//...aid=*******&amp;bvid=*******&amp;cid=*********...&gt; &lt;/iframe&gt;"
<br/>
YouTube: 
点击分享按钮 => 直接点复制按钮
示例: "/分享 https://youtu.be/*******?si=*******"
<br/>
那啥站: 复制网址
点击视频 => 直接复制浏览器地址栏的网址
示例: "/分享 https://cn.pornhub.com/view_video.php?viewkey=**********"
`,
        30000
    );
}

function shareErrReport() {
    ChatRoomSendLocal(
        `不支持你分享的链接，目前支持的有：${Object.keys(frame).join("，")}。使用"/分享"获取帮助! `,
        5000
    );
}

/**
 * @typedef { "nm" | "bili" | "ytb" | "phb" } ShareType
 */

/** @type {Record<ShareType, { displayName: string, get: (info: string) => string }>} */
const frame = {
    nm: {
        displayName: "网易云",
        get: (Id) =>
            `<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=${Id}&auto=0&height=66"></iframe>`,
    },
    bili: {
        displayName: "Bilibili",
        get: (info) => {
            const IDs = JSON.parse(info);
            return `<iframe width="100%" height="315" src="//player.bilibili.com/player.html?aid=${IDs[0]}&bvid=${IDs[1]}&cid=${IDs[2]}&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>`;
        },
    },
    ytb: {
        displayName: "Youtube",
        get: (info) => {
            const IDs = JSON.parse(info);
            return `<iframe width="100%" height="315" src="https://www.youtube.com/embed/${IDs[0]}?si=${IDs[1]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
        },
    },
    phb: {
        displayName: "Pornhub",
        get: (Id) =>
            `<iframe width="100%" height="315" src="https://www.pornhub.com/embed/${Id}" frameborder="0"  scrolling="no" allowfullscreen></iframe>`,
    },
};

/**
 * @typedef { { linkType: ShareType, info: string } } ShareInfo
 */

/**
 * 处理发送分享媒体
 * @param {string} parsed 传入命令的参数
 * @returns void
 */
function shareHandle(parsed) {
    const shareContent = parsed;

    /** @type {ShareInfo | undefined} */
    const sendv = (() => {
        if (shareContent.includes("music.163.com")) {
            const match = shareContent.match(/[?&]id=(\d+)/); // 拿到歌曲ID   用户ID不能发出去 保护隐私
            if (match)
                return {
                    linkType: "nm",
                    info: btoa(match[1]),
                };
        } else if (shareContent.startsWith('<iframe src="//player.bilibili.com/player.html')) {
            const match = shareContent.match(/aid=(\d+)&bvid=([A-Za-z0-9]+)&cid=([A-Za-z0-9]+)/);
            if (match)
                return {
                    linkType: "bili",
                    info: btoa(JSON.stringify([match[1], match[2], match[3]])),
                };
        } else if (shareContent.startsWith("https://youtu.be/")) {
            const match = shareContent.match(/([A-Za-z0-9_-]+)\?si=([A-Za-z0-9_-]+)/);
            if (match) return { linkType: "ytb", info: btoa(JSON.stringify([match[1], match[2]])) };
        } else if (shareContent.includes("pornhub.com/view_video.php")) {
            const match = shareContent.match(/viewkey=([A-Za-z0-9]+)/);
            if (match) return { linkType: "phb", info: btoa(match[1]) };
        }

        shareErrReport();
        return undefined;
    })();

    if (!sendv) return;

    // 发送
    ServerSend("ChatRoomChat", {
        Type: "Hidden",
        Content: "Share_Link",
        Dictionary: [sendv],
        Sender: Player.MemberNumber,
    });
    // 发送*号消息
    ChatRoomSendEmote(`一个 ${frame[sendv.linkType].displayName} 嵌入分享 ╰(*°▽°*)╯`);
    // 清理输入框内容
    ElementValue("InputChat", "");
}

export default function () {
    ModManager.hookFunction("ChatRoomMessage", 0, (args, next) => {
        const { Content, Dictionary } = args[0];
        if (Content === "Share_Link") {
            const { linkType, info } = /** @type { any } */ (Dictionary[0]);
            const result = frame[linkType]?.get(atob(info));
            if (result) ChatRoomSendLocal(result);
            return;
        }
        next(args);
    });

    CommandCombine({
        Tag: "分享",
        Description: '分享媒体链接,使用"/分享"获取帮助! ',
        Action: (parsed, msg) => {
            if (parsed === "") sendShareHelp();
            else {
                const ori = msg.substring(msg.indexOf(" ") + 1);
                shareHandle(ori);
            }
        },
    });
}
