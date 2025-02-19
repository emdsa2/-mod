const translationsDTF = [
    {
        regex: /Failed to get role data from (.+)\. This can be caused by missing permission to interact with their items\, the user having left the room meanwhile\, or the user not having the BC tab focused\./,
        replacement: "无法从 $1 获取角色数据.这可能是由于缺乏与其物品交互的权限、用户已离开房间,或者用户未将 BC 标签页聚焦."
    },
    { regex: / Global\: Configuration for (.+) \-/, replacement: "- 全局: $1 的配置 -" },
    { regex: /\- Miscellaneous\: Configuration for (.+) \-/, replacement: "- 杂项: $1 的配置 -" },
    { regex: /Dear (.+),/, replacement: "亲爱的 $1," },
    { regex: / Miscellaneous\: Configuration for (.+) \-/, replacement: "- 杂项: $1 的配置 -" },
    { regex: /\- Export \/ Import of Behaviour Log \- Configuration on (.+) \-/, replacement: "- 导出/导入 行为日志 - $1 上的配置 -", },
    { regex: / Export \/ Import of BCX module configurations on (.+) \-/, replacement: "- 导出 / 导入 $1 的BCX模块配置 -", },
    { regex: / Relationships\: Custom names shown \(only\) to (.+) \-/, replacement: "- 关系: 自定义名称(仅)显示给 $1 -", },
    { regex: /\- Export \/ Import of Authority \- Permissions on (.+) \-/, replacement: "- 导出 / 导入 权限 - $1 的权限 -", },
    { regex: /\- Export \/ Import of Commands \- Limits on (.+) \-/, replacement: "- 导出 / 导入 指令 - 对 $1 的限制 - ", },
    { regex: /\- Export \/ Import of Curses \- Limits on (.+) \-/, replacement: "- 导出 / 导入 诅咒 - 限制 $1 - " },
    { regex: /\- Export \/ Import of Rules \- Limits on (.+) \-/, replacement: "- 导出 / 导入 规则- $1 限制 -" },
    { regex: /\- Export \/ Import of Relationships on (.+) \-/, replacement: "- 导出 / 导入 $1 上的关系 -" },
    { regex: /\- Commands\: List all commands for (.+) \-/, replacement: "- 指令: 列出 $1 的所有指令 -" },
    { regex: / Authority\: Permission Settings for (.+) \-/, replacement: "- 权限: $1 的权限设置 -" },
    { regex: /\- Curses\: All active curses on (.+) \-/, replacement: "- 诅咒: 对 $1 的所有有效诅咒 -" },
    { regex: / Behaviour Log\: Configuration for (.+) \-/, replacement: "- 行为日志: $1 的配置 -" },
    { regex: /\- Rules\: All active rules on (.+) \-/, replacement: "- 规则: $1 上的所有活动规则 -" },
    { regex: /\- Authority\: Role Management for (.+) \-/, replacement: "- 权限: $1 的角色管理 -" },
    { regex: /\- Export \/ Import of Curses on (.+) \-/, replacement: "- 导出 / 导入 $1 上的诅咒 -" },
    { regex: /\- Export \/ Import of Rules on (.+) \-/, replacement: "- 导出 / 导入 $1 的规则 -" },
    { regex: /\- Behaviour Log\: About (.+) \-/, replacement: "- 行为日志: 关于 $1 -" },
    { regex: /\- Curses\: Place new curses on (.+) \-/, replacement: "- 诅咒: 对 $1 施加新的诅咒 -" },
    { regex: /\- Rules\: Create new rules for (.+) \-/, replacement: "- 为 $1 创建新规则 -" },
    { regex: /Added by\: (.+) \((.+)\)/, replacement: "添加者: $1 ($2)" },
    {
        regex: /Forbid using remotes on self \((.+) using one on (.+)\)/,
        replacement: "禁止对自己使用遥控器($1 在 $2身上使用)",
    },
    { regex: /Forbid using keys on self \((.+) using one on (.+)\)/, replacement: "禁止对自己使用钥匙($1 在 $2身上使用)", },
    {
        regex: /Forbid picking locks on self \((.+) picking one on (.+)\)/,
        replacement: "禁止撬自己的锁($1 在 $2身上使用)",
    },
    { regex: /Forbid using locks on self \((.+) using one on (.+)\)/, replacement: "禁止对自己使用锁($1 在 $2身上使用)" },
    {
        regex: /Forbid wardrobe use on self \((.+) using (.+)'s wardrobe\)/,
        replacement: "禁止更换自己的服装($1 使用 $2 的衣柜)",
    },
    {
        regex: /Forbid freeing self \((.+) removing any items from (.+)'s body\)/,
        replacement: "禁止自己解开自己的拘束($1 从 $2 身上移除任何物品)",
    },
    {
        regex: /Prevent using BCX permissions \((.+) using her permissions for her own BCX\, with some exceptions\)/,
        replacement: "禁止使用BCX权限($1 使用她自己BCX的权限,有一些例外)",
    },
    { regex: /Prevent changing own emoticon \(for just (.+)\)/, replacement: "防止更改自己的表情符号(仅限 $1)" },
    { regex: /Force\-hide UI elements \(e\.g\.\, icons\, bars\, or names\)/, replacement: "强制隐藏UI元素(例如图标、条形、或名称)", },
    { regex: /Sensory deprivation\: Sound \(impacts (.+)'s hearing\; adjustable\)/, replacement: "感官剥夺: 听觉(影响 $1 的听觉；可调节)", },
    { regex: /Hearing whitelist \(of members whom (.+) can always understand\)/, replacement: "听觉白名单($1 始终能够理解的成员)", },
    { regex: /Sensory deprivation: Sight \(impacts (.+)'s sight\; adjustable\)/, replacement: "感官剥夺: 视觉(影响 $1 的视觉；可调节)", },
    { regex: /Seeing whitelist \(of members whom (.+) can always see\)/, replacement: "视觉白名单($1 始终能够看到的成员)", },
    { regex: /Control profile online description \(directly sets (.+)'s description\)/, replacement: "控制在线描述资料(直接设置 $1 的描述)", },
    { regex: /Control nickname \(directly sets (.+)'s nickname\)/, replacement: "控制昵称(直接设置 $1 的昵称)" },
    {
        regex: /Ready to be summoned \(leash (.+) from anywhere using a beep with message\)/,
        replacement: "准备好被召唤(随时随地使用蜂鸣消息传送 $1 )",
    },
    {
        regex: /Allow changing the whole appearance \(of (.+) - for the defined roles\)/,
        replacement: "允许更改整体外观(对于定义的角色更改 $1 的外观)",
    },
    {
        regex: /Enforce faltering speech \(an enhanced studder effect is added to (.+)'s chat texts\)/,
        replacement: "强制口吃(对 $1 的聊天文本添加了增强的阿巴阿巴的效果)",
    },
    {
        regex: /Force garbled speech \(force (.+) to talk as if they were gagged\)/,
        replacement: "强制言语混乱(强制 $1 说话, 就像被堵住一样)",
    },
    { regex: /Forbid going afk \(logs whenever (.+) is inactive\)/, replacement: "禁止 AFK(记录 $1 无操作时)" },
    {
        regex: /Track rule effect time \(counts the time this rule's trigger conditions were fulfilled\)/,
        replacement: "追踪规则生效时间(计算此规则的触发条件得到满足的时间)",
    },
    {
        regex: /Listen to my voice \(regularly show configurable sentences to (.+)\)/,
        replacement: "听我的声音(定时向 $1 弹出指定的句子)",
    },
    {
        regex: /Track BCX activation \(logs if (.+) enters the club without BCX\)/,
        replacement: "追踪BCX激活情况(如果 $1 在没有BCX的情况下进入俱乐部,则记录)",
    },
    { regex: /Eyes \(Control (.+)'s eyes\)/, replacement: "眼睛 (控制 $1 的眼睛)" },
    { regex: /Mouth \(Control (.+)'s mouth\)/, replacement: "嘴巴 (控制 $1 的嘴巴)" },
    { regex: /Arms \(Control (.+)'s arm poses\)/, replacement: "手臂 (控制 $1 的手臂姿势)" },
    { regex: /Legs \(Control (.+)'s leg poses\)/, replacement: "腿 (控制 $1 的腿部姿势)" },
    { regex: /Allfours \(Make (.+) get on all fours\)/, replacement: "四肢着地 (让 $1 四肢着地)" },
    {
        regex: /Go and wait \(Makes (.+) leave and wait in another chat room\.\)/,
        replacement: "前去等待 (让 $1 离开并在另一个聊天室等待)",
    },
    {
        regex: /Send to cell \(Lock (.+) in a singleplayer isolation cell\)/,
        replacement: "送到监狱 (锁定 $1 在单人隔离监狱中)",
    },
    { regex: /Send to asylum \(Lock (.+) into the aslyum\)/, replacement: "送入收容所 (把 $1 关进收容所)" },
    { regex: /Deposit all keys \(Store away (.+)\'s keys\)/, replacement: "存放所有钥匙 (存放 $1 的所有钥匙)" },
    {
        regex: /Show remaining time \(Remaining time of keyhold\, asylum stay\, or GGTS training\)/,
        replacement: "显示剩余时间 (持钥匙时间、收容所逗留时间或 GGTS 训练)",
    },
    {
        regex: /Send to serve drinks \(Force (.+) to do bound maid work\)/,
        replacement: "发送去送饮料 (强制 $1 做女仆工作)",
    },
    {
        regex: /Manipulate the arousal meter \(Controls (.+)\'s orgasms directly\)/,
        replacement: "操控欲望仪表 (直接控制 $1 的高潮)",
    },
    { regex: /Emoticon \(Control (.+)\'s emoticon\)/, replacement: "表情符号 (控制 $1 的表情符号)" },
    { regex: /Forced say \(Makes (.+) instantly say the text\)/, replacement: "强制说话 (使 $1 立即说出文本)" },
    { regex: /Say \(Blocks (.+) until she typed the text\)/, replacement: "说话 (阻止 $1 直到她输入文本)" },
    {
        regex: /Typing task \(Orders (.+) to type a text several times or until she makes a mistake\)/,
        replacement: "打字任务 (命令 $1 多次输入文本或直到她犯错)",
    },
    {
        regex: /Forced typing task \(Orders (.+) to type a text a set number of times\)/,
        replacement: "强制打字任务 (命令 $1 输入固定次数的文本)",
    },
    {
        regex: /This rule prevents (.+) from adding characters with the set minimum role or a higher one to their bondage club blacklist and ghostlist\./,
        replacement: "此规则防止 $1 将设置的最低角色或更高角色的角色添加到她的束缚俱乐部黑名单和忽视列表中.",
    },
    {
        regex: /This rule prevents (.+) from adding characters with a role lower than a BCX Mistress to their bondage club whitelist\./,
        replacement: "此规则防止 $1 将低于 BCX 女主人 的角色的角色添加到她的绑缚俱乐部白名单中.",
    },
    {
        regex: /This rule forbids (.+) to use any kind of lock on her own body. \(Others still can add locks on her items normally\)/,
        replacement: "此规则禁止 $1 在自己的身体上使用任何类型的锁. (其他人仍然可以正常在她的物品上添加锁)",
    },
    {
        regex: /This rule forbids (.+) to use the wardrobe of other club members\./,
        replacement: "此规则禁$1 使用其他俱乐部成员的衣柜.",
    },
    { regex: /This rule forbids (.+) to create new rooms\./, replacement: "此规则禁$1 创建新房间." },
    {
        regex: /This rule forbids (.+) to use or trigger a vibrator or similar remote controlled item on other club members\./,
        replacement: "此规则禁止 $1 在其他俱乐部成员身上使用或触发振动器或类似的远程控制物品.",
    },
    {
        regex: /This rule forbids (.+) to unlock any locked item on other club members\, with options to still allow unlocking of owner and\/or lover locks and items\. Note\: Despite the name\, this rule also blocks unlocking locks that don\'t require a key \(e\.g\. exclusive lock\)\. However\, locks that can be unlocked in other ways \(timer locks by removing time\, code\/password locks by entering correct code\) can still be unlocked by (.+)\./,
        replacement:
            "此规则禁 $1 解锁其他俱乐部成员的任何上锁物品, 选项允许仍然解锁所有者和/或情人的锁和物品.注意: 尽管名称如此, 此规则还会阻止解锁不需要钥匙的锁(例如, 专属锁).但是, 可以通过其他方式解锁的锁(通过减少时间的定时器锁, 通过输入正确代码解锁的代码 / 密码锁)仍然可以由 $2 解锁.",
    },
    {
        regex: /This rule forbids (.+) to lockpick any locked items on other club members\./,
        replacement: "此规则禁$1 对其他俱乐部成员的任何上锁物品进行撬锁.",
    },
    {
        regex: /This rule shows the amount of time that (.+) spent \(online\) in the club\, since the rule was added\, while all of the rule\'s trigger conditions were fulfilled\. So it can for instance log the time spent in public rooms \/ in the club in general, or in a specific room or with some person as part of a roleplayed task or order\. The currently tracked time can be inquired by whispering \'\!ruletime\' to (.+)\. To reset the counter\, remove and add the rule again\./,
        replacement:
            "此规则显示了自规则添加以来 $1 在俱乐部度过的(在线)时间, 同时满足了所有规则的触发条件. 因此, 它可以记录在公共房间/俱乐部中总共度过的时间, 或在特定房间或与某人一起作为角色扮演任务或命令的一部分中度过的时间. 通过私聊 '!ruletime' 给 $2 可以查询当前跟踪的时间. 要重置计数器, 请删除并再次添加规则.",
    },
    {
        regex: /This rule logs whenever money is used to buy something. It also shows how much money (.+) currently has in the log entry\. Optionally\, earning money can also be logged\. Note\: Please be aware that this last option can potentially fill the whole behaviour log rapidly\./,
        replacement:
            "此规则记录每当金钱用于购买物品时. 日志条目还显示 (.+) 当前在日志中的金钱金额. 可以选择记录赚钱的情况. 注意: 请注意, 最后一个选项可能会迅速填满整个行为日志.",
    },
    {
        regex: /This rule forbids (.+) to use or trigger a vibrator or similar remote controlled item on her own body\. \(Others still can use remotes on her\)/,
        replacement: "此规则禁$1 对自己的身体使用或触发振动器或类似的远程控制物品. (其他人仍然可以在她身上使用遥控器)",
    },
    {
        regex: /This rule forbids (.+) to unlock any locked item on her own body\. Note\: Despite the name\, this rule also blocks unlocking locks that don\'t require a key \(e\.g\. exclusive lock\)\. However\, locks that can be unlocked in other ways \(timer locks by removing time\, code\/password locks by entering correct code\) can still be unlocked by (.+)\. Others can still unlock her items on her normally\./,
        replacement:
            "此规则禁 $1 解锁自己身体上的任何上锁物品. 注意: 尽管名称如此, 此规则还会阻止解锁不需要钥匙的锁(例如, 专属锁). 但是, 可以通过其他方式解锁的锁(通过减少时间的定时器锁, 通过输入正确代码解锁的代码 / 密码锁)仍然可以由 $2 解锁. 其他人仍然可以正常解锁她身上的物品.",
    },
    {
        regex: /This rule forbids (.+) to lockpick any locked items on her own body\. \(Others still can pick locks on her normally\)/,
        replacement: "此规则禁 $1 在自己的身体上撬任何上锁物品. (其他人仍然可以正常撬她的锁)",
    },
    {
        regex: /This rule forbids (.+) to use any kind of lock on other club members\./,
        replacement: "此规则禁 $1 在其他俱乐部成员身上使用任何类型的锁.",
    },
    {
        regex: /This rule forbids (.+) to access her own wardrobe\. \(Others still can change her clothes normally\)/,
        replacement: "此规则禁 $1 访问自己的衣柜. (其他人仍然可以正常更改她的衣服)",
    },
    {
        regex: /Allows to restrict the body poses (.+) is able to get into by herself\./,
        replacement: "允许限制 $1 可以自行摆出的身体姿势.",
    },
    {
        regex: /This rule forbids (.+) access to some parts of their own BCX they have permission to use\, making it as if they do not have \'self access\' \(see BCX tutorial on permission system\) while the rule is active\. This rule still leaves access for all permissions where the lowest permitted role \(\'lowest access\'\) is also set to (.+) \(to prevent getting stuck\)\. This rule does not affect (.+)\'s permissions to use another users\'s BCX\./,
        replacement:
            "此规则禁 $1 访问她们有权限使用的自己的 BCX 的某些部分, 使其好像在规则激活时没有 'self access'(请参阅 BCX 权限系统上的教程). 该规则仍然保留了所有最低允许角色('lowest access')也设置为 $2 的权限访问(以防止被困住). 此规则不影响 $3 对其他用户的 BCX 的使用权限.",
    },
    {
        regex: /This rule forbids (.+) to use a maid's help to get out of restraints in the club\'s main hall\. Recommended to combine with the rule\: \'Force \'Cannot enter single\-player rooms when restrained\' \(Existing BC setting\)\' to prevent NPCs in other rooms from helping\./,
        replacement:
            "此规则禁 $1 在俱乐部的主大厅中使用女仆的帮助来解开约束. 建议与规则结合使用: '强制'被约束时无法进入单人房间''(现有的 BC 设置)', 以防止其他房间的 NPC 提供帮助.",
    },
    {
        regex: /This rule forbids (.+) to change her Bondage Club multiplayer difficulty, regardless of the current value\./,
        replacement: "此规则禁 $1 更改她的 Bondage Club 多人游戏难度, 无论当前值如何.",
    },
    {
        regex: /This rule forbids (.+) to use the antiblind command\. Antiblind is a BCX feature that enables a BCX user to see the whole chat room and all other characters at all times\, even when wearing a blinding item\. If (.+) should be forbidden to use the command\, this rule should be used\./,
        replacement:
            "此规则禁 $1 使用 antiblind 命令. Antiblind 是 BCX 的一个功能, 它使 BCX 用户能够在任何时候看到整个聊天室和所有其他角色, 即使佩戴蒙眼物品. 如果 $2 被禁止使用该命令, 应使用此规则.",
    },
    {
        regex: /This rule forbids (.+) to use any items on other characters\. Can be set to only affect using items on characters with a higher dominant \/ lower submissive score than (.+) has\./,
        replacement:
            "此规则禁 $1 在其他角色身上使用任何物品. 可以设置为仅在 $2 的主导/从属得分高于/低于的角色身上使用.",
    },
    {
        regex: /This rule forbids (.+) to remove any items from her own body\. Other people can still remove them\. The rule has a toggle to optionally still allow to remove items which were given a low difficulty score by the original asset maker\, such as hand\-held items\, plushies\, etc\. This means that custom crafted properties given to an item such as \'decoy\' are not factored in\./,
        replacement:
            "此规则禁 $1 从自己的身体上取下任何物品. 其他人仍然可以取下它们. 该规则具有一个切换按钮, 可以选择仍然允许取下原始资产制作者给予低难度评分的物品, 例如手持物品、毛绒玩具等. 这意味着赋予物品的自定义属性(例如\"诱饵\")并未计入其中.",
    },
    {
        regex: /This rule prevents (.+) from leaving the room they are currently inside while at least one character with the set minimum role or a higher one is present inside\. NOTE\: Careful when setting the minimum role too low\. If it is set to public for instance\, it would mean that (.+) can only leave the room when they are alone in it\./,
        replacement:
            "此规则阻 $1 在当前有至少一个设置的最小角色或更高角色的角色在内时离开所在的房间. 注意: 在设置最小角色时要小心. 例如, 如果设置为 public, 那么 $2 只能在房间内独自一人时离开.",
    },
    {
        regex: /This rule sets (.+)\'s online description \(in her profile\) to any text entered in the rule config\, blocking changes to it\. Warning\: This rule is editing the actual profile text\. This means that after saving a changed text, the original text is lost\!/,
        replacement:
            "此规则将 $1 的在线描述(在她的个人资料中)设置为在规则配置中输入的任何文本, 阻止对其进行更改. 警告: 此规则正在编辑实际的个人资料文本. 这意味着在保存更改的文本后, 原始文本将丢失!",
    },
    {
        regex: /This rule forbids (.+) to do any room admin actions \(except for kick\/ban\)\, when she is restrained\.Note\: This rule does not affect an admin\'s ability to bypass locked rooms\, if restraints allow it\. Tip\: This rule can be combined with the rule 'Force \´Return to chatrooms on relog\´' to trap (.+) in it\./,
        replacement:
            "此规则禁 $1 在被拘束时执行任何房间管理员操作(除了踢出/封禁). 注意: 此规则不影响管理员通过锁定的房间的能力, 如果拘束允许的话. 提示: 此规则可以与规则 强制'重新登录时返回聊天室' 结合使用, 以将 $2 困在其中.",
    },
    {
        regex: /This rule prevents (.+) from seeing their own arousal meter\, even while it is active and working\. This means\, that it is a surprise to them\, when the orgasm \(quick\-time event\) happens. Does not effect other characters being able to see the meter\, if club settings allow that\./,
        replacement:
            "此规则阻止 $1 查看自己的性唤起仪表, 即使它处于活动和工作状态. 这意味着对于她来说, 当性高潮(快感事件)发生时, 这将是一个惊喜. 如果俱乐部设置允许, 不影响其他角色能够看到仪表.",
    },
    {
        regex: /This rule impacts (.+)\'s ability to control their orgasms\, independent of items\. There are three control options\, which are\: Never cum \(always edge, the bar never reaches 100\%\)\, force into ruined orgasm \(orgasm screen starts, but doesn't let her actually cum\) and prevent resisting orgasm \(able to enter orgasm screen, but unable to resist it\)\./,
        replacement:
            "此规则影响 $1 控制她的性高潮的能力, 独立于物品. 有三个控制选项, 它们分别是: 永不高潮(始终边缘, 条形永远不达到100 %), 强迫进入毁坏的高潮(高潮画面开始, 但不让她真正高潮) 和 防止抵抗高潮(能够进入高潮画面, 但无法抵抗它).",
    },
    {
        regex: /This rule forces (.+) to always leave the room slowly\, independent of the items she is wearing\. WARNING\: Due to limitation in Bondage Club itself\, only BCX users will be able to stop (.+) from leaving the room\. This rule will ignore BC\'s roleplay difficulty setting \'Cannot be slowed down\' and slow down (.+) regardless\!/,
        replacement:
            "此规则强制 $1 总是缓慢离开房间, 与她穿戴的物品无关. 警告: 由于 Bondage Club 本身的限制, 只有BCX用户才能阻 $2 离开房间. 此规则将忽略BC的角色扮演难度设置 '无法减速', 并且无论如何都会减缓 $3!",
    },
    {
        regex: /This rule enforces full blindness when wearing any item that limits sight in any way\. \(This rules does NOT respect Light sensory deprivation setting and always forces player to be fully blind\. The crafting property \'thin\' is not factored in either due to technical limitations\. \)/,
        replacement:
            "此规则在佩戴任何以任何方式限制视力的物品时强制完全失明.  (该规则不考虑轻度感官剥夺设置, 始终强制玩家完全失明. 由于技术限制, 制作属性 '薄' 也未考虑在内.)",
    },
    {
        regex: /This rule forbids (.+) from opening the room admin screen while blindfolded\, as this discloses the room background and the member numbers of admins\, potentially in the room right now\. If (.+) is a room admin, she can still use chat commands for altering the room or kicking\/banning\./,
        replacement:
            "此规则禁 $1 在被蒙眼的情况下打开房间管理界面, 这会显示房间背景和管理员的会员编号, 可能就在当前房间. 如果 $2 是房间管理员, 她仍然可以使用聊天命令来更改房间或 踢出/封禁.",
    },
    {
        regex: /This rule enforces hiding of certain UI elements for (.+) over all characters inside the room\. Different levels of the effect can be set which follow exactly the behavior of the \'eye\'\-toggle in the button row above the chat\. There is also an option to hide emoticon bubbles over all characters\' heads\./,
        replacement:
            "此规则强制隐藏 $1 在房间内所有角色的某些UI元素. 可以设置不同级别的效果, 完全遵循上方聊天框上方的 '眼睛' 切换按钮的行为. 还有一个选项, 可以隐藏所有角色头上的表情气泡.",
    },
    {
        regex: /This rule impacts (.+)\'s natural ability to hear in the same way items do\, independent of them \(strength of deafening can be adjusted\)\./,
        replacement: "此规则影响 $1 对声音的自然感知方式, 独立于物品(可以调整失聪的强度).",
    },
    {
        regex: /This rule defines a list of members whose voice can always be understood by (.+) \- independent of any sensory deprivation items or hearing impairing BCX rules on (.+)\. There is an additional option to toggle whether (.+) can still understand a white\-listed member\'s voice if that member is speech impaired herself \(e\.g\. by being gagged\)\./,
        replacement:
            "此规则定义了一个成员列表, $1 始终可以听懂这些成员的声音 - 与 $2 身上的任何感官剥夺物品或听力受损的 BCX 规则无关. 还有一个额外的选项, 可以切换是否 $3 仍然能听懂一个被列入白名单的成员的声音, 即使该成员本身有言语障碍(例如被口球堵住).",
    },
    {
        regex: /This rule impacts (.+)\'s natural ability to see in the same way items do\, independent of them \(strength of blindness can be adjusted\)\./,
        replacement: "此规则影响 $1 对视觉的自然感知方式, 独立于物品(可以调整失明的强度).",
    },
    {
        regex: /This rule defines a list of members whose appearance can always be seen normally by (.+) \- independent of any blinding items or seeing impairing BCX rules on (.+)\./,
        replacement:
            "此规则定义了一个成员列表, $1 始终可以正常看到这些成员的外观 - 与 $2 身上的任何蒙眼物品或视觉受损的 BCX 规则无关.",
    },
    {
        regex: /This rule enforces full blindness when the eyes are closed\. \(Light sensory deprivation setting is still respected and doesn\'t blind fully\)/,
        replacement: "此规则在闭眼时强制完全失明. (仍然尊重光感剥夺设置, 不会完全失明)",
    },
    {
        regex: /This rule forces (.+)\'s base game setting \'Return to chatrooms on relog\' to configurable value and prevents her from changing it\./,
        replacement: "此规则将 $1 的基础游戏设置'重新登录时返回聊天室'强制设置为可配置的值, 并防止她更改它.",
    },
    {
        regex: /This rule forces (.+)\'s base game or BCX setting \'Keep all restraints when relogging\' to the configured value and prevents her from changing it\. There is also an option to restore the setting to the state it was in before the rule changed it\. The restoration happens either when the rule becomes inactive \(for instance through toggle or unfulfilled trigger conditions\) or when it is removed\./,
        replacement:
            "此规则将 $1 的基础游戏或 BCX 设置\"重新登录时保留所有约束\"强制设置为配置的值, 并防止她更改它. 还有一个选项, 可以将设置恢复到规则更改之前的状态.  恢复发生在规则变得不活跃时(例如通过切换或不满足的触发条件)或在删除规则时.",
    },
    {
        regex: /This rule forces (.+)\'s base game or BCX setting \'Garble chatroom names and descriptions while blind\' to the configured value and prevents her from changing it\. There is also an option to restore the setting to the state it was in before the rule changed it\. The restoration happens either when the rule becomes inactive \(for instance through toggle or unfulfilled trigger conditions\) or when it is removed\./,
        replacement:
            "此规则将 $1 的基础游戏或 BCX 设置\"在失明时混淆聊天室名称和描述\"强制设置为可配置的值, 并防止她更改它. 还有一个选项, 可以将设置恢复到规则更改之前的状态.  恢复发生在规则变得不活跃时(例如通过切换或不满足的触发条件)或在删除规则时.",
    },
    {
        regex: /This rule forces (.+)\'s base game setting \'Sensory deprivation setting\' to configurable value and prevents her from changing it\./,
        replacement: "此规则将 $1 的基础游戏设置\"感官剥夺设置\"强制设置为可配置的值, 并防止她更改它.",
    },
    {
        regex: /This rule forces (.+)\'s base game or BCX setting \'Prevent others from changing cosplay items\' to the configured value and prevents her from changing it\. There is also an option to restore the setting to the state it was in before the rule changed it\. The restoration happens either when the rule becomes inactive \(for instance through toggle or unfulfilled trigger conditions\) or when it is removed\./,
        replacement:
            "此规则将 $1 的基础游戏或 BCX 设置\"防止其他人更改角色扮演服饰项目\"强制设置为可配置的值, 并防止她更改它. 还有一个选项, 可以将设置恢复到规则更改之前的状态.  恢复发生在规则变得不活跃时(例如通过切换或不满足的触发条件)或在删除规则时.",
    },
    {
        regex: /This rule forces (.+)\'s base game or BCX setting \'Allow safeword use\' to the configured value and prevents her from changing it\. There is also an option to restore the setting to the state it was in before the rule changed it\. The restoration happens either when the rule becomes inactive \(for instance through toggle or unfulfilled trigger conditions\) or when it is removed\./,
        replacement:
            "此规则将 $1 的基础游戏或 BCX 设置\"允许使用安全词\"强制设置为可配置的值, 并防止她更改它. 还有一个选项, 可以将设置恢复到规则更改之前的状态.  恢复发生在规则变得不活跃时(例如通过切换或不满足的触发条件)或在删除规则时.",
    },
    {
        regex: /This rule forces (.+)\'s base game or BCX setting \'Cannot enter single\-player rooms when restrained\' to the configured value and prevents her from changing it\. There is also an option to restore the setting to the state it was in before the rule changed it\. The restoration happens either when the rule becomes inactive \(for instance through toggle or unfulfilled trigger conditions\) or when it is removed\./,
        replacement:
            "此规则将 $1 的基础游戏或 BCX 设置\"受限时不能进入单人房间\"强制设置为可配置的值, 并防止她更改它. 还有一个选项, 可以将设置恢复到规则更改之前的状态.  恢复发生在规则变得不活跃时(例如通过切换或不满足的触发条件)或在删除规则时.",
    },
    {
        regex: /This rule sets (.+)\'s nickname \(replacing her name in most cases\) to any text entered in the rule config\, blocking changes to it from BC's nickname menu\. You can optionally choose whether the previous BC nickname will be restored while the rule is not in effect\./,
        replacement:
            "此规则将 $1 的昵称(在大多数情况下替换她的名字)设置为规则配置中输入的任何文本, 阻止 BC 的昵称菜单更改它. 您还可以选择在规则不生效时是否恢复先前的 BC 昵称.",
    },
    {
        regex: /This rule forces (.+) to constantly participate in the kidnappers league\'s suitcase delivery task\, by automatically giving her a new suitcase\, whenever the suitcase item slot is empty\./,
        replacement:
            "此规则强制 $1 不断参与绑匪联盟的手提箱交付任务, 每当手提箱物品槽为空时, 就会自动给她一个新的手提箱.",
    },
    {
        regex: /This rule only allows selected roles to leash (.+)\, responding with a message about unsuccessful leashing to others when they attempt to do so\./,
        replacement: "此规则只允许选定的角色拴住 $1, 在其他人尝试时向他们回复关于无法拴住的消息.",
    },
    {
        regex: /This rule hides persons on (.+)\'s friend list when she is fully blinded\, which also makes sending beeps impossible\. Received beeps can still be answered\. The rule allows to manage a list of members who can be seen normally\./,
        replacement:
            "此规则在 $1 完全失明时隐藏她的好友列表上的人物, 这也使得发送哔声成为不可能. 仍然可以回答接收到的哔声. 规则允许管理一个可以正常看到的成员列表.",
    },
    {
        regex: /This rule lets you define a minimum role which \(and all higher roles\) has permission to fully change the whole appearance of (.+) \(body and cosplay items\)\, ignoring the settings of the BC online preferences \'Allow others to alter your whole appearance\' and \'Prevent others from changing cosplay items\'\. So this rule can define a group of people which is allowed\, while everyone else is not\. IMPORTANT\: Only other BCX users will be able to change (.+)\'s appearance if this rule allows them to\, while the BC settings would forbid them to\./,
        replacement:
            "此规则允许您定义一个最低角色, 该角色(及所有更高的角色)具有完全更改 $1 整体外观的权限(包括身体和cosplay物品), 而不考虑 BC 在线首选项 '允许他人更改你的整体外观' 和 '阻止他人更改cosplay物品' 的设置. 因此, 此规则可以定义一个被允许的人群, 而其他所有人则不允许. 重要提示: 只有其他 BCX 用户可以在此规则允许的情况下更改 $2 的外观, 而 BC 设置会禁止他们这样做.",
    },
    {
        regex: /This rule forces (.+)\'s base game or BCX setting \'Locks on you can\'t be picked\' to the configured value and prevents her from changing it\. There is also an option to restore the setting to the state it was in before the rule changed it\. The restoration happens either when the rule becomes inactive \(for instance through toggle or unfulfilled trigger conditions\) or when it is removed\./,
        replacement:
            "此规则强制 $1 的基础游戏或 BCX 设置 '锁定在你身上不能被撬开' 为配置的值, 并防止她更改它. 还有一个选项, 可以将设置恢复到规则更改之前的状态. 恢复发生在规则变为非活动状态时(例如通过切换或不符合触发条件)或被移除时.",
    },
    {
        regex: /This rule observes (.+)\, logging it as a rule violation if the club was previously entered at least once without BCX active\./,
        replacement: "此规则监视 $1, 如果至少有一次在未激活 BCX 的情况下进入俱乐部, 则将其记录为违规.",
    },
    {
        regex: /This rule reminds or tells (.+) one of the recorded sentences at random in a settable interval\. Only (.+) can see the set message and it is only shown if in a chat room\./,
        replacement:
            "此规则以可设置的间隔随机提醒或告诉 $1 记录的一条句子. 只有 $2 能看到设置的消息, 并且只在聊天室中显示.",
    },
    {
        regex: /This rule gives (.+) ability to understand parts of a muffled sentence ungarbled\, based on a white list of words and\/or randomly\. On default\, applies only to muffled hearing from deafening effects on (.+)\, but optionally can be enhanced to allow also partially understanding the muffled speech of other persons who are speech impaired\. Doesn\'t affect emotes and OOC text\./,
        replacement:
            "此规则赋予 $1 以能够理解部分被压制的句子的能力, 基于一个白名单词汇和/或随机选择. 默认情况下, 仅适用于 $2 受到压制效果而听力受损的情况, 但可选择增强以允许部分理解其他言语受损的人的压抑语音. 不影响表情和 OOC 文本.",
    },
    {
        regex: /This rule forbids (.+) to use the antigarble command\. Antigarble is a BCX feature that enables a BCX user to understand muffled voices from other gagged characters or when wearing a deafening item\. If (.+) should be forbidden to use the command\, this rule should be used\./,
        replacement:
            "此规则禁 $1 使用 antigarble 命令. Antigarble 是 BCX 的一项功能, 允许 BCX 用户在其他被塞口球的角色或佩戴耳聋物品时理解压制的声音. 如果不允许 $2 使用该命令, 应使用此规则.",
    },
    {
        regex: /This rule forbids (.+) to send an emote \(with \* or \/me\) to all people inside a chat room\./,
        replacement: "此规则禁 $1 向聊天室内的所有人发送表情符号(使用 * 或 /me).",
    },
    {
        regex: /This rule forces (.+)'s base game setting 'Arousal meter' to configurable value and prevents her from changing it.\./,
        replacement: "此规则强制控制 $1 的基础游戏设置中的性奋量表模式，并阻止她更改模式.",
    },
    {
        regex: /This rule forces (.+)'s base game or BCX setting \'Hide non-adjacent players while partially blind\' to the configured value and prevents her from changing it\. There is also an option to restore the setting to the state it was in before the rule changed it\. The restoration happens either when the rule becomes inactive \(for instance through toggle or unfulfilled trigger conditions\) or when it is removed\./,
        replacement: "该规则会强制 $1 的基础游戏或 BCX 设置中的 “部分失明时隐藏非相邻玩家 ”改为你设定的值，并阻止她更改该设置.还有一个选项可以将设置恢复到规则改变之前的状态.当规则失效（例如关闭或触发条件未满足）或被移除时，就会发生恢复.",
    },
    {
        regex: /This rule forbids (.+) to leave their current club owner or get a new one\. Advancing ownership from trial to full ownership is unaffected. Doesn\'t prevent the club owner from releasing her\./,
        replacement:
            "此规则禁 $1 离开她当前的俱乐部所有者或寻找新的. 从试用到完整所有权的提升不受影响. 不阻止俱乐部所有者解救她.",
    },
    {
        regex: /This rule forbids (.+) to get a new lover. Advancing lovership from dating to engagement or from engagement to marriage is unaffected\./,
        replacement: "此规则禁 $1 找到新的恋人. 从约会到订婚或从订婚到结婚的提升不受影响.",
    },
    {
        regex: /This rule allows (.+) to only communicate using a list of specific sound patterns in chat messages and whispers. These patterns cannot be mixed in the same message, though\. Only one sound from the list per message is valid\. That said, any variation of a sound in the list is allowed as long as the letters are in order\. \(Example\: if the set sound is \'Meow\'\, then this is a valid message\: \'Me\.\.ow\? meeeow\! mmeooowwwwwww\?\! meow\. me\.\. oo\.\.w \~\'\)/,
        replacement:
            "此规则允许 $1 仅使用聊天消息和私语中的特定声音模式进行通信. 但这些模式不能在同一条消息中混合. 每条消息只能包含列表中的一个声音. 也就是说, 只有一个声音是有效的. 换句话说, 只要字母是按顺序的, 列表中声音的任何变体都是允许的.  (例如: 如果设置的声音是 'Meow', 那么以下是有效的消息: 'Me..ow? meeeow! mmeooowwwwwww?! meow. me.. oo..w ~')",
    },
    {
        regex: /This rule alters (.+)\'s outgoing whisper messages while gagged to be garbled the same way normal chat messages are. This means\, that strength of the effect depends on the type of gag and \(OOC text\) is not affected\. Note\: While the rule is in effect\, the BC immersion preference \'Prevent OOC \& whispers while gagged\' is altered\, to allow gagged whispers\, since those are now garbled by the rule\. OOC prevention is not changed\./,
        replacement:
            "此规则更改 $1 在被口球时发出的私语消息, 使其与正常聊天消息一样被压制. 这意味着效果的强度取决于口球的类型, 而(OOC 文本)不受影响. 注意: 在规则生效期间, BC 沉浸偏好 'Prevent OOC & whispers while gagged' 会发生变化, 以允许被压制的私语, 这些现在由规则压制. OOC 防护没有改变.",
    },
    {
        regex: /This rule forbids (.+) to use OOC \(messages between round brackets\) in chat or OOC whisper messages at any moment\. This is a very extreme rule and should be used with great caution\!/,
        replacement: "此规则禁 $1 在任何时候在聊天中使用 OOC(圆括号之间的消息). 这是一个非常极端的规则, 应谨慎使用!",
    },
    {
        regex: /This rule forbids (.+) to use certain words in the chat\. The list of banned words can be configured\. Checks are not case sensitive \(forbidding \'no\' also forbids \'NO\' and \'No\'\)\. Doesn\'t affect emotes and OOC text\, but does affect whispers\./,
        replacement:
            "这个规则禁止 $1 在聊天中使用特定的单词.禁用的单词列表可以进行配置.检查时不区分大小写(禁用 'no' 也会禁用 'NO' 和 'No').这个规则不影响表情和 OOC 文本,但会影响私语."
    },
    {
        regex: /This rule forbids (.+) to send a message to all people inside a chat room\. Does not affect whispers or emotes\, but does affect OOC\./,
        replacement: "在聊天室里,你不能给所有人发消息,但可以私聊或用表情符号.这个规则也会影响到OOC.",
    },
    { regex: /(.+) can only say the custom name/, replacement: "$1 只能说出定制名称" },
    {
        regex: /This rule can set the time (.+) needs to leave the current room\, when items or a rule force her to leave it slowly\. The time can be set between 1 and 600 seconds \(10 mins\)\./,
        replacement:
            "这个规则可以设定一个时间,当物品或规则逼迫她慢慢离开当前房间时,需要等待的时间.设置的时间范围是1到600秒(10分钟)之间.",
    },
    {
        regex: /This rule forces (.+) to switch rooms from anywhere in the club to the chat room of the summoner after 15 seconds\. It works by sending a beep message with the set text or simply the word \'summon\' to (.+)\. Members who are allowed to summon (.+) can be set\. NOTES\: (.+) can always be summoned no matter if she has a leash or is prevented from leaving the room \(ignoring restraints or locked rooms\)\. However\, if the target room is full or locked\, she will end up in the lobby\. Summoning will not work if the room name is not included with the beep message\!/,
        replacement:
            "这个规则要求在15秒内,$1必须从俱乐部的任何地方切换到召唤者的聊天室.它通过向$2发送一条带有设置文本或简单包含单词'召唤'的蜂鸣消息来实现.允许设置可以召唤$3的成员.注意: 无论$4是否被束缚或禁止离开房间(忽略限制或锁定的房间),她总是可以被召唤.但是,如果目标房间已满或已锁定,她将会进入大堂.如果蜂鸣消息中没有包含房间名,那么召唤将无效！",
    },
    {
        regex: /This rule forbids (.+) to enter all rooms, that are not on an editable whitelist of still allowed ones\. NOTE\: As safety measure this rule is not in effect while the list is empty\. TIP\: This rule can be combined with the rule \"Forbid creating new rooms\"\./,
        replacement:
            "这个规则禁止 $1 进入不在可编辑白名单上的所有房间.注意: 作为安全措施,这个规则在列表为空时不会生效.提示: 这个规则可以和 '禁止创建新房间' 的规则一起使用."
    },
    {
        regex: /Here you switch the rule on\/off\, set a timer for activating\/deactivating \/ deleting the rule and define when it can trigger, such as either always or based on where the player is and with whom\.The small green\/red bars next to the checkboxes indicate whether a condition is true at present or not and the big bar whether this means that the rule is in effect\, if active\. Depending on the rule\, you can either enforce its effect\, log all violations\, or both at the same time\. Lastly on the bottom right\, you can set whether the trigger conditions of this rule should follow the global rules config or not\./,
        replacement:
            "在这里,您可以切换规则的开关状态,设置激活、停用或删除规则的计时器,并定义它何时触发,比如说总是或者根据玩家的位置和与谁在一起.复选框旁边的小绿条和红条显示条件当前是否成立,大条则表示这个规则是否生效(如果已激活).具体来说,根据不同的规则,您可以选择强制执行效果、记录所有违规行为,或者两者都做.最后,在右下角,您可以设置这个规则的触发条件是否要遵循全局规则配置."
    },
    {
        regex: /This rule forces (.+) to talk as if they were gagged\, automatically garbling all of their speech\. This rule does not affect OOC\. This rule only affects whispers if the rule \"Garble whispers while gagged\" is also in effect\./,
        replacement:
            "这个规则强迫 $1 像被堵嘴一样说话,自动让她的所有话都变得模糊.这个规则不影响 OOC.只有在 '口球时扭曲私语' 这个规则生效的时候,这个规则才会影响私语..",
    },
    { regex: /(.+) has too much willpower to let you in\.\.\./, replacement: "$1 拥有太多意志力不让你进入……" },
    {
        regex: /You must be the owner to purchase this module for (.+)\.\.\./,
        replacement: "你得是 $1 的主人才能买这个模块……",
    },
    {
        regex: /(.+) is resisting any hypnotic suggestions\.\.\./,
        replacement: "$1 正在抵制任何催眠暗示……",
    },
    {
        regex: /Installed by(.+)/,
        replacement: "制作人$1",
    },
    {
        regex: /Trigger Phrase(.+)/,
        replacement: "触发短语:$1",
    },
    {
        regex: /You must be the owner to purchase this module for (.+).../,
        replacement: "您必须是主人才能为 $1 购买此模块……",
    },


    // { regex: /-/, replacement: "" },
];

const act_dialogs = [
    {
        regex: /(.+) moans uncontrollably as (.+)'s drug takes effect\./,
        replacement: "当$2的药物生效时,$1不由自主地呻吟起来."
    },
    {
        regex: /(.+) quivers as (.+) body is flooded with (.+)'s aphrodisiac\./,
        replacement: "当$1的身体被$3的催情剂充斥时,$2颤抖不止."
    },
    {
        regex: /(.+)'s eyes roll back as a wave of pleasure washes over (.+) body\./,
        replacement: "当一阵愉悦感席卷$1的身体时,$2的眼睛向后翻转."
    },
    {
        regex: /(.+) sighs as a cool relaxing calm glides through (.+) body, fighting to keep (.+) eyes open\./,
        replacement: "当一阵清凉、放松、平静的感觉流过$1的身体时,$2叹息着,努力睁开$3的眼睛."
    },
    {
        regex: /(.+)'s muscles relax as (.+)'s sedative courses through (.+) body/,
        replacement: "随着$2的镇静剂在$3的身体里起作用,$1的肌肉放松下来."
    },
    {
        regex: /(.+) fights to stay conscious against the relentless weight of (.+)'s drug\./,
        replacement: "$1奋力抵抗着$2的药物那持续不断的作用以保持清醒."
    },
    {
        regex: /(.+)'s eyes droop as (.+) fights to stay conscious against the cool, welcoming weight of (.+)'s drug\./,
        replacement: "$1的眼睛耷拉下来,而$2在对抗着$3的药物那清凉、令人舒缓的压力努力保持清醒."
    },
    {
        regex: /(.+) moans thankfully as (.+)'s medicine heals (.+)\./,
        replacement: "当$2的药物治愈了$3,$1满怀感激地呻吟着."
    },
    {
        regex: /(.+)'s body glows slightly as (.+)'s cure washes warmly over (.+)\./,
        replacement: "当$2的治愈方法温暖地作用于$3时,$1的身体微微发光."
    },
    {
        regex: /(.+)'s drug rushes warmly through (.+)'s body, curing what ails (.+)\./,
        replacement: "$1 的药物温暖地在 $2 的身体里涌动,治愈了困扰 $3 的病症."
    },
    {
        regex: /(.+) gulps and swallows (.+)'s drink, a cool relaxing feeling starting to spread through (.+) body\./,
        replacement: "$1 大口吞咽着 $2 的饮料,一种清凉放松的感觉开始在 $3 的身体里扩散开来."
    },
    {
        regex: /(.+) sighs as a cool relaxing calm glides down (.+) throat, fighting to keep (.+) eyes open\./,
        replacement: "当一阵清凉、放松、平静的感觉滑下 $2 的喉咙时,$1 叹了口气,努力保持 $3 的眼睛睁开."
    },
    {
        regex: /(.+)'s muscles relax as (.+)'s sedative pours down (.+) throat and starts to take effect\./,
        replacement: "当$2的镇静剂顺着$3的喉咙灌入并开始生效时,$1的肌肉放松下来."
    },
    {
        regex: /(.+)'s eyes droop as (.+) fights to stay conscious against the cool, welcoming weight of (.+)'s drug\./,
        replacement: "当$1努力抵抗着$3的药物那清凉、诱人的沉重感以保持清醒时,$2的眼睛耷拉下来."
    },
    {
        regex: /(.+) whimpers and struggles to keep control of (.+) mind\./,
        replacement: "$1呜咽着,努力控制住$2的意识."
    },
    {
        regex: /(.+) gasps weakly as (.+)'s drug slowly erases (.+) free will\./,
        replacement: "当$2的药物慢慢抹去$3的自由意志时,$1虚弱地倒抽一口气."
    },
    {
        regex: /(.+)'s eyes struggle to focus as (.+)'s drug makes (.+) more suggestible\./,
        replacement: "当$2的药物让$3变得更容易受暗示时,$1的眼睛努力想要聚焦."
    },
    {
        regex: /(.+) starts to drift dreamily as they swallow (.+)'s drink\./,
        replacement: "当他们吞下$2的饮料时,$1开始如梦般地恍惚起来."
    },
    {
        regex: /(.+) gasps weakly and starts to lose focus as (.+)'s drug warms (.+) comfortably\./,
        replacement: "当$2的药物让$3舒适地沉浸其中时,$1虚弱地喘息着并开始失去焦点."
    },
    {
        regex: /(.+)'s eyes flutter and defocus as (.+)'s drink slides warmly down (.+) throat\./,
        replacement: "当$2的饮料温暖地顺着$3的喉咙滑下时,$1的眼睛眨动且视线模糊."
    },
    {
        regex: /(.+) gulps thankfully as (.+)'s medicine slowly heals (.+)\./,
        replacement: "$1满怀感激地大口吞咽,因为$2的药物正在慢慢治愈$3."
    },
    {
        regex: /(.+)'s body glows slightly as (.+)'s cure glides warmly through (.+)\./,
        replacement: "当$2的治愈能量温暖地在$3体内流淌时,$1的身体微微发光."
    },
    {
        regex: /(.+)'s antidote slowly washes through (.+)'s body, curing what ails (.+)\./,
        replacement: "$1的解药缓慢地在$2的身体中流淌,治愈了困扰$3的病症."
    },
    {
        regex: /(.+)'s body goes limp as (.+) mind empties and (.+) awaits a command\./,
        replacement: "当$2的思维变得空白,$1的身体变得绵软无力,等待着命令."
    },
    {
        regex: /(.+)'s eyes roll back as a wave of pleasure emanates from (.+) belly\./,
        replacement: "当一阵愉悦感从$2的腹部散发出来时,$1的眼睛向后翻转."
    },
    {
        regex: /(.+)'s eyes move dreamily under (.+) closed eyelids\.\.\./,
        replacement: "在$1紧闭的眼皮底下,$2的眼睛如梦般地移动着……"
    },
    {
        regex: /(.+)'s mask whirs and shudders as it reloads its own supply and continues emitting\./,
        replacement: "$1的面具发出呼呼声并颤抖着,因为它正在重新装载自身供应并继续释放."
    },
    {
        regex: /(.+)'s mask hums menacingly as it holds its supply in reserve\./,
        replacement: "$1的面罩发出充满威胁的嗡嗡声,同时储备着能量.",
    },
    {
        regex: /(.+)'s mask clicks and turns itself back on\./,
        replacement: "$1的面罩发出咔嚓声,然后重新运作了.",
    },
    {
        regex: /(.+) reloads (.+)'s mask and turns it back on, pumping gas back into (.+) lungs\./,
        replacement: "$1重新装载了$2的面罩并将其打开,把气体重新泵入$3的肺部."
    },
    {
        regex: /(.+) switches on (.+)'s mask, filling (.+) lungs\./,
        replacement: "$1打开了$2的面罩,使气体充满$3的肺部."
    },
    {
        regex: /(.+) switches off (.+)'s mask, halting the flow of gas\./,
        replacement: "$1关掉了$2的面罩,阻断了气体的流动."
    },
    {
        regex: /(.+)'s eyes widen as (.+) mask activates, slowly filling (.+) lungs with its drug\./,
        replacement: "$1的眼睛睁大,随着$2的面罩启动,慢慢地用其药物充满$3的肺部."
    },
    {
        regex: /(.+) takes a deep breath of cool, clean air as (.+) mask is removed\./,
        replacement: "当$2的面罩被取下时,$1深吸了一口凉爽、清新的空气."
    },
    {
        regex: /(.+)'s mask hisses quietly as it runs out of its supply of gas\./,
        replacement: "$1的面罩在气体供应耗尽时安静地发出嘶嘶声."
    },
    {
        regex: /(.+) groans helplessly as (.+) headset manipulates (.+) mind\./,
        replacement: "$1无助地呻吟,因为$2的耳机在操纵着$3的思想."
    },
    {
        regex: /(.+) struggles to keep (.+) focus through the overwhelming influence of (.+) headset\./,
        replacement: "$1努力在$3耳机那压倒性的影响下保持$2的专注."
    },
    {
        regex: /(.+) whimpers as (.+) headset erases (.+) own mind relentlessly\./,
        replacement: "$1抽泣着,因为$2的耳机在毫不留情地抹去$3自己的思想."
    },
    {
        regex: /(.+)'s muscles relax limply as (.+) takes a deep breath through (.+) mask\./,
        replacement: "当$2通过$3的面罩深吸一口气时,$1的肌肉绵软地松弛下来."
    },
    {
        regex: /(.+)'s eyes flutter weakly as (.+) inhales\./,
        replacement: "当$2吸气时,$1的眼睛无力地眨动."
    },
    {
        regex: /(.+) struggles to keep (.+) drooping eyes open as (.+) mask continues to emit its sedative gas\./,
        replacement: "$1努力让$2下垂的眼睛睁开,而$3的面罩持续释放着镇静气体."
    },
    {
        regex: /(.+) groans helplessly as (.+) mask sends another dose into (.+) lungs\./,
        replacement: "$1无助地呻吟,因为$2的面罩又向$3的肺部输送了一剂药物."
    },
    {
        regex: /(.+) struggles to keep (.+) focus through the suggestible haze caused by (.+) mask\./,
        replacement: "$1努力在$3的面罩所导致的易受暗示的迷雾中保持$2的专注力."
    },
    {
        regex: /(.+) whimpers as (.+) mask's drug pushes (.+) further out of (.+) own mind\./,
        replacement: "当$2面罩的药物将$3进一步推出$4自己的思维时,$1抽泣起来."
    },
    {
        regex: /(.+)'s spine tingles as (.+) takes a deep breath through (.+) mask\./,
        replacement: "当$2通过$3面罩深吸一口气时,$1的脊椎感到一阵刺痛."
    },
    { regex: /(.+) lets out a muffled moan as (.+) inhales\./, replacement: "当$2吸气时,$1发出一声低沉的呻吟." },
    {
        regex: /(.+)'s sensitive areas burn hot as (.+) breathes through (.+) mask\./,
        replacement: "当$2通过$3面罩呼吸时,$1的敏感区域灼热起来."
    },
    {
        regex: /(.+) sighs with relief as (.+) takes a deep gulp of healing mist\./,
        replacement: "当$2深吸一口治疗雾气时,$1宽慰地叹了口气."
    },
    {
        regex: /(.+) feels a tingle across (.+) skin as (.+) mask heals them\./,
        replacement: "当$2的面罩为$1治疗时,$1感觉自己的皮肤一阵刺痛."
    },
    {
        regex: /(.+) lets out a quiet moan as (.+) mask releases a healing mist into (.+) lungs\./,
        replacement: "当$2的面罩向$3的肺部释放治疗雾气时,$1轻轻呻吟."
    },
    { regex: /(.+)'s whimpers, (.+) tongue held tightly\./, replacement: "$1呜咽着,$2的舌头被紧紧地含着." },
    { regex: /(.+) strains, trying to pull (.+) tongue free\./, replacement: "$1使劲,试图把$2的舌头拉出来." },
    { regex: /(.+) starts to drool, (.+) tongue held fast\./, replacement: "$1开始流口水,$2的舌头被紧紧固定住." },
    { regex: /(.+) wiggles (.+) nose\./, replacement: "$1晃动着$2的鼻子." },
    { regex: /(.+) wiggles (.+) nose with a small frown\./, replacement: "$1微微皱着眉,晃动了一下$2的鼻子." },
    { regex: /(.+) sneezes in surprise\./, replacement: "$1惊讶地打了个喷嚏." },
    { regex: /(.+) looks crosseyed at (.+) nose\./, replacement: "$1斜着眼看向$2的鼻子." },
    { regex: /(.+) wiggles (.+) nose with a squeak\./, replacement: "$1伴随着吱吱声扭动着$2的鼻子." },
    { regex: /(.+) meeps\!/, replacement: "$1发出了吱吱声!" },
    { regex: /(.+) swats at (.+)'s hand\./, replacement: "$1拍打了$2的手." },
    { regex: /(.+) covers (.+) nose protectively, squinting at (.+)\./, replacement: "$1保护性地捂住$2的鼻子,眯着眼看向$3." },
    { regex: /(.+) snatches (.+)'s booping finger\./, replacement: "$1一把抓住$2正在轻戳的手指." },
    { regex: /(.+)'s nose overloads and shuts down\./, replacement: "$1的鼻子超负荷运转然后停止了." },
    { regex: /(.+) struggles in (.+) bindings, huffing\./, replacement: "$1在$2的捆绑中挣扎,大口喘气." },
    { regex: /(.+) frowns and squirms in (.+) bindings\./, replacement: "$1皱着眉在$2的捆绑中扭动." },
    { regex: /(.+) whimpers in (.+) bondage\./, replacement: "$1在$2的束缚中呜咽." },
    { regex: /(.+) groans helplessly\./, replacement: "$1无奈地呻吟." },
    { regex: /(.+) whines and wiggles in (.+) bondage\./, replacement: "$1在$2的束缚中呜呜叫并扭动." },
    { regex: /(.+)'s mouth moves silently\./, replacement: "$1的嘴默默地动着." },
    { regex: /(.+)'s mouth moves without a sound\./, replacement: "$1的嘴动了但没有声音." },
    { regex: /(.+)'s whimpers inaudibly, unable to breathe\./, replacement: "$1无声地呜咽着,无法呼吸." },
    { regex: /(.+) groans and convulses\./, replacement: "$1痛苦地呻吟并痉挛." },
    { regex: /(.+) shudders as (.+) lungs burn\./, replacement: "$1因肺部灼热而颤抖,$2想要吸入空气." },
    { regex: /(.+) gasps and gulps for air\./, replacement: "$1大口喘息并拼命吸气." },
    { regex: /(.+)'s lungs expand hungrily as (.+) gasps in air\./, replacement: "$1的肺部在$2喘息着吸气时饥渴地扩张着." },
    { regex: /(.+) gasps for air with a whimper\./, replacement: "$1伴着一声呜咽艰难地喘气吸气." },
    { regex: /(.+) coughs as (.+) collar pushes against (.+) throat\./, replacement: "当$2的项圈紧压$3的喉咙时,$1咳嗽起来." },
    {
        regex: /(.+) gulps as (.+) feels the tight collar around (.+) neck\./,
        replacement: "$1在$2感觉到脖子上的紧项圈时,$3咽了咽口水."
    },
    {
        regex: /(.+) shifts nervously in (.+) tight collar\./,
        replacement: "$1在$2的紧项圈里紧张地扭动."
    },
    {
        regex: /(.+) trembles, very conscious of the tight collar around (.+) neck\./,
        replacement: "$1颤抖着,十分清楚地感受到$2脖子上的紧项圈."
    },
    {
        regex: /(.+) huffs uncomfortably in (.+) tight collar\./,
        replacement: "$1在$2的紧项圈里不舒服地喘着气."
    },
    {
        regex: /(.+) whimpers pleadingly as (.+) struggles to take a full breath\./,
        replacement: "每当$2艰难地想要进行一次完整的呼吸时,$1都会可怜巴巴地呜咽着."
    },
    { regex: /(.+) chokes against (.+) collar, moaning softly\./, replacement: "$1被$2的项圈紧紧勒住,发出轻声呻吟." },
    {
        regex: /(.+)'s eyes flutter weakly as (.+) collar presses into (.+) neck\./,
        replacement: "当$2的项圈紧压在$3的脖子上时,$1的眼睛虚弱地眨动着."
    },
    {
        regex: /(.+) tries to focus on breathing, each inhale an effort in (.+) collar\./,
        replacement: "$1试图专注于呼吸,然而在$2的项圈中每次吸气都很费力."
    },
    {
        regex: /(.+)'s eyes flutter weakly as (.+) collar presses into (.+) neck\./,
        replacement: "当$2的项圈紧压在$3的脖子上时,$1的眼睛虚弱地眨动着."
    },
    {
        regex: /(.+) tries to focus on breathing, each inhale an effort in (.+) collar\./,
        replacement: "$1试图专注于呼吸,然而在$2的项圈中每次吸气都很费力."
    },
    {
        regex: /(.+)'s eyes have trouble focusing, as (.+) chokes and gets lightheaded\./,
        replacement: "$1的眼睛难以聚焦,因为$2窒息并感到头晕."
    },
    {
        regex: /(.+)'s eyes flutter as (.+) fights to keep control of (.+) senses\.\.\./,
        replacement: "当$2努力保持对$3感官的控制时,$1的眼睛会眨动……"
    },
    { regex: /(.+) whimpers and struggles to stay awake\.\.\./, replacement: "$1轻声呜咽着,努力保持清醒……" },
    {
        regex: /(.+) can feel (.+) eyelids grow heavy as (.+) drifts on the edge of trance\.\.\./,
        replacement: "$1能感觉到$2的眼皮愈发沉重,$3在恍惚的边缘游离……"
    },
    {
        regex: /(.+) lets out a low moan as (.+) muscles relax and (.+) starts to drop\.\.\./,
        replacement: "$2的肌肉松弛,发出一声低吟,$3的身体开始逐渐下垂……"
    },
    {
        regex: /(.+)'s eyes flutter as (.+) fights to keep them open\.\.\./,
        replacement: "$1的眼睛眨动着,而$2努力想让它们保持睁开的状态……"
    },
    {
        regex: /(.+) yawns and struggles to stay awake\.\.\./, replacement: "$1打着哈欠,努力保持清醒……"
    },
    {
        regex: /(.+) can feel (.+) eyelids grow heavy as (.+) drifts on the edge of sleep\.\.\./,
        replacement: "$1能感觉到$2的眼皮变得沉重,好像$3正在睡眠的边缘游离……"
    },
    {
        regex: /(.+) takes a deep, relaxing breath as (.+) muscles relax and (.+) eyes start to droop\.\.\./,
        replacement: "$1深吸了一口气,此时$2的肌肉逐渐放松,$3的眼睛开始耷拉……"
    },
    {
        regex: /(.+) takes another deep breath through (.+) gag\.\.\./, replacement: "$1通过$2的塞口物又深吸了一口气……"
    },
    {
        regex: /(.+) exhales slowly, fully relaxed\.\.\./, replacement: "$1缓缓地呼气,完全放松了下来……"
    },
    { regex: /(.+)'s muscles twitch weakly in (.+) sleep\.\.\./, replacement: "$1在$2的睡眠中肌肉微弱地抽动着……" },
    { regex: /(.+) moans softly and relaxes\.\.\./, replacement: "$1轻声呻吟着,然后逐渐放松下来……" },
    { regex: /(.+) fires a net wildly\./, replacement: "$1胡乱地射出一张网.", },
    { regex: /(.+) fires at themselves point blank\./, replacement: "$1近距离朝自己开火.", },
    { regex: /(.+) fires a net at (.+)\./, replacement: "$1向$2发射一张网.", },
    {
        regex: /(.+) barely trembles, unable to move (.+) mouth or make a sound\.\.\./,
        replacement: "$1微微颤抖着,无法移动$2的嘴巴或发出声音……"
    },
    {
        regex: /(.+)'s eyes plead helplessly as (.+) muscles refuse to obey\.\.\./,
        replacement: "$2的肌肉不听使唤,$1的眼睛无助地恳求着……"
    },
    {
        regex: /(.+) manages to muster a quiet whimper, (.+) body held fast\.\.\./,
        replacement: "$1成功地勉强发出一声安静的呜咽,$2的身体被牢牢地控制住……"
    },
    {
        regex: /(.+)'s eyes widen as they try to speak without success\.\.\./,
        replacement: "$1的眼睛睁大,他们试图说话却没有成功……"
    },
    {
        regex: /(.+) looks around helplessly, unable to make a sound\.\.\./,
        replacement: "$1无助地环顾四周,发不出声音……"
    },
    { regex: /(.+)'s mouth moves in silence\.\.\./, replacement: "$1的嘴巴在寂静中动着……" },
    { regex: /(.+)'s mouth moves silently\.\.\./, replacement: "$1的嘴巴默默地动着……" },
    {
        regex: /(.+) whimpers, struggling in (.+) bindings and unable to speak\.\.\./,
        replacement: "$1呜咽着,在$2的捆绑中挣扎,无法言语……"
    },
    {
        regex: /(.+)'s eyes widen as they squirm in (.+) bondage, only a gentle moan escaping\.\.\./,
        replacement: "$1的眼睛睁得大大的,因为$2的身体在束缚中扭动着,无法动弹.$2只是轻轻地呻吟着,仿佛在忍受痛苦.",
    },
    {
        regex: /(.+) tries (.+) best to speak, but has to resign themselves to mearly a bound whimper\.\.\./,
        replacement: "无论$1如何竭尽全力地发声,最终却也只能发出被束缚着的微弱呜咽声……",
    },
    {
        regex: /(.+) squirms in (.+) bindings, (.+) mouth moving in silence\.\.\./,
        replacement: "$1在$2的束缚中扭动挣扎,$3的嘴巴无声地活动着……"
    },
    {
        regex: /(.+)'s eyelids flutter as a thought tries to enter (.+) blank mind\.\.\./,
        replacement: "当一个想法试图进入$2空白的脑海时,$1的眼皮会不由自主地颤动……"
    },
    {
        regex: /(.+) sways weakly in (.+) place, drifting peacefully\.\.\./,
        replacement: "$1在$2的地方无力地摇晃着,平静地飘荡……"
    },
    {
        regex: /(.+) trembles as something deep and forgotten fails to resurface\.\.\./,
        replacement: "$1颤抖着,因为某些深藏且被遗忘的东西未能重新浮现……"
    },
    {
        regex: /(.+) moans softly as (.+) drops even deeper into trance\.\.\./,
        replacement: "当$2陷入更深的恍惚状态时,$1轻声呻吟着……"
    },
    {
        regex: /(.+) quivers, patiently awaiting something to fill (.+) empty head\.\.\./,
        replacement: "$1颤抖着,耐心地等待着有什么来填补$2空洞的头脑……"
    },
    {
        regex: /(.+) stares blankly, (.+) mind open and suggestible\.\.\./,
        replacement: "$1茫然地凝视着,$2的思维敞开且易受影响……"
    },
    {
        regex: /(.+)'s eyelids flutter gently, awaiting a command\.\.\./,
        replacement: "$1的眼皮轻轻颤动,等待着指令……"
    },
    {
        regex: /(.+) trembles with a quiet moan as (.+) yearns to obey\.\.\./,
        replacement: "$1伴随着轻声呻吟微微颤抖,因为$2渴望服从……"
    },
    {
        regex: /(.+)'s eyes widen as (.+) gag inflates to completely fill (.+) throat\./,
        replacement: "当$2的塞口物膨胀至完全填满$3的喉咙时,$1的眼睛睁得大大的."
    },
    { regex: /(.+) splutters and gasps for air around (.+) gag\./, replacement: "$1喷溅着并在$2口塞周围大口喘气." },
    {
        regex: /(.+)'s eyes flutter as (.+) collar starts to tighten around (.+) neck with a quiet hiss\./,
        replacement: "当$2的项圈开始悄无声息地在$3的脖子周围收紧时,$1的眼睛开始扑闪."
    },
    {
        regex: /(.+) gasps for air as (.+) collar presses in around (.+) neck with a hiss\./,
        replacement: "$1因呼吸困难而大口喘气,$2的项圈带着嘶嘶声紧紧压在$3的脖子周围."
    },
    {
        regex: /(.+)'s face runs flush, choking as (.+) collar hisses, barely allowing any air to (.+) lungs\./,
        replacement: "$1的脸涨得通红,在$2项圈发出嘶嘶声时被呛得喘不过气来,项圈几乎不让任何空气进入$3的肺部."
    },
    {
        regex: /(.+) chokes and gasps desperately as (.+) collar slowly releases some pressure\./,
        replacement: "$1艰难地喘着粗气,拼命地吸气,这时$2项圈慢慢地释放了一些压力."
    },
    {
        regex: /(.+)'s collar opens a little as (.+) lets out a moan, gulping for air\./,
        replacement: "$1的项圈稍稍打开了一些,$2发出一声呻吟,大口地吞咽着空气."
    },
    {
        regex: /(.+) whimpers thankfully as (.+) collar reduces most of its pressure around (.+) neck\./,
        replacement: "$1满怀感激地呜咽着,因为$2的项圈减轻了环绕在$3脖子周围的大部分压力."
    },
    {
        regex: /(.+) takes a deep breath as (.+) collar releases its grip with a hiss\./,
        replacement: "$1深吸了一口气,因为$2的项圈伴随着嘶嘶声松开了束缚."
    },
    {
        regex: /(.+) gulps thankfully as the threat to (.+) airway is removed\./,
        replacement: "当折磨$1许久的窒息感消失后,她庆幸地长舒了一口气.",
    },
    {
        regex: /(.+)'s eyes start to roll back, gasping and choking as (.+) collar presses in tightly and completely with a menacing hiss\./,
        replacement: "$1的眼睛开始翻白,她的颈部被项圈死死勒入肉中,伴随着痛苦的喘息与项圈的收紧声,她再也无法获取一丁点空气.",
    },
    {
        regex: /(.+)'s eyes flutter with a groan, unable to get any air to (.+) lungs\./,
        replacement: "$1的眼睛伴随着呻吟微微颤动,无法使任何空气进入$2的肺部."
    },
    {
        regex: /(.+) chokes and spasms, (.+) collar holding tight\./, replacement: "$1窒息并痉挛,$2项圈紧紧地勒着."
    },
    {
        regex: /(.+) chokes and spasms, (.+) gripping (.+) throat relentlessly\./,
        replacement: "$1窒息并痉挛,$2无情地紧握着$3的喉咙."
    },
    {
        regex: /(.+) convulses weakly with a moan, (.+) eyes rolling back as the collar hisses impossibly tighter\./,
        replacement: "$1痛苦地抽搐着,嘴里发出微弱的呻吟声,项圈发出不可能更紧的嘶嘶声,$2的眼睛开始翻白.",
    },
    {
        regex: /As (.+) collapses unconscious, (.+) collar releases all of its pressure with a long hiss\./,
        replacement: "当$1失去意识昏倒时,$2项圈伴随着一声长长的嘶嘶声释放了所有的压力."
    },
    {
        regex: /As (.+) collapses unconscious, (.+) releases (.+) neck\./,
        replacement: "当$1昏倒失去知觉时,$2松开了$3的脖子."
    },
    {
        regex: /As (.+) slumps unconscious, (.+) nose plugs fall out\./,
        replacement: "当$1无力地倒下失去意识时,$2的鼻塞掉了出来."
    },
    { regex: /(.+) quivers with one last attempt to stay awake\.\.\./, replacement: "$1伴随着最后一次保持清醒的尝试而颤抖着……" },
    {
        regex: /(.+) trembles weakly with one last attempt to maintain (.+) senses\.\.\./,
        replacement: "$1虚弱地颤抖着,做着最后一次维持$2意识的尝试……"
    },
    { regex: /(.+)'s frowns as (.+) fights to remain conscious\./, replacement: "$1皱起眉头,因为$2在努力保持清醒." },
    {
        regex: /(.+)'s eyes immediately defocus, (.+) posture slumping slightly as (.+) loses control of (.+) body at the utterance of a trigger word\./,
        replacement: "$1的眼睛立刻失去焦点,当$2说出触发词时,$3的姿势轻微下垂,$3失去了对$4身体的控制."
    },
    {
        regex: /(.+)'s eyes glaze over, (.+) posture slumping weakly as (.+) loses control of (.+) body\./,
        replacement: "$1的眼睛变得无神,$2的姿势虚弱地垮下,因为$3失去了对$4身体的控制."
    },
    {
        regex: /(.+) reboots, blinking and gasping as (.+) regains (.+) senses\./,
        replacement: "$1重新启动,眨着眼并大口喘气,当$2重新获得$3的感知时."
    },
    {
        regex: /(.+) blinks, shaking (.+) head with confusion as (.+) regains (.+) senses\./,
        replacement: "$1眨了眨眼,困惑地摇了摇$2的头,当$3重新获得$4的感知时."
    },
    {
        regex: /(.+) gasps, blinking and blushing with confusion\./, replacement: "$1喘着气,眨着眼,因困惑而脸红."
    },
    {
        regex: /(.+) concentrates, breaking the hold the previous trigger word held over (.+)\./,
        replacement: "$1集中精力,打破了之前触发词对$2的掌控."
    },
    {
        regex: /(.+)'s eyes dart around, (.+) world suddenly plunged into darkness\./,
        replacement: "$1的眼睛快速转动,$2的世界突然陷入一片黑暗."
    },
    {
        regex: /(.+) frowns as (.+) is completely deafened\./, replacement: "$1皱起眉头,因为$2完全丧失了听力."
    },
    {
        regex: /(.+)'s eyes widen in a panic as (.+) muscles seize in place\./,
        replacement: "$1惊慌地睁大双眼,因为$2的肌肉僵在了原地."
    },
    {
        regex: /(.+) is unable to fight the spell's hypnotizing influence, slumping weakly as (.+) eyes go blank\./,
        replacement: "$1无法抵御咒语的催眠作用,当$2的眼睛变得空洞时,无力地瘫倒."
    },
    {
        regex: /(.+)'s protests suddenly fall completely silent\./, replacement: "$1的抗议突然彻底安静了下来."
    },
    {
        regex: /(.+)'s mouth moves in protest but not a single sound escapes\./,
        replacement: "$1的嘴巴在抗议地动着,但没有一丝声音传出."
    },
    {
        regex: /(.+) succumbs to the spell's overwhelming pressure, (.+) eyes closing as (.+) falls unconscious\./,
        replacement: "$1屈服于咒语那巨大的压力,当$3失去意识时,$2的眼睛闭上了."
    },
    {
        regex: /(.+) gasps, blinking as the magic affecting (.+) is removed\./,
        replacement: "当作用于$2的魔法被移除时,$1喘着气,眨着眼."
    },
    {
        regex: /(.+) gasps, blinking as any magic affecting (.+) is removed\./,
        replacement: "当任何作用于$2的魔法被移除时,$1喘着气,眨着眼睛."
    },
    { regex: /(.+) trembles as (.+) clothing shimmers and morphs around (.+)\./, replacement: "$1颤抖着,当$2的衣物闪烁并在$3周围发生形态变化时." },
    { regex: /(.+) squeaks as (.+) clothing shimmers and morphs around (.+)\./, replacement: "$1尖叫着,当$2的衣服闪烁并在$3周围变形的时候." },
    { regex: /(.+) trembles as (.+) body shimmers and morphs\./, replacement: "$1颤抖着,当$2的身体闪烁并变形时." },
    { regex: /(.+) squeaks as (.+) body shimmers and morphs\./, replacement: "$1尖叫着,当$2的身体闪烁并变形时." },
    { regex: /(.+) squirms as (.+) arousal is paired\./, replacement: "$1扭动着,当$2的高潮被同步到自己身上时." },
    { regex: /(.+) quivers as (.+) feels (.+) impending denial\./, replacement: "$1颤抖着,当$2感觉到$3即将来临的拒绝时." },
    { regex: /(.+) whimpers as (.+) feels (.+) impending denial\./, replacement: "$1呜咽着,当$2感受到$3即将到来的拒绝时." },
    {
        regex: /(.+)'s muscles slump limply once more as another dose of chloroform is applied\./,
        replacement: "$1的肌肉再次绵软地松弛下来,当又一剂氯仿被使用时."
    },
    {
        regex: /(.+) eyes go wide as the sweet smell of ether fills (.+) nostrils\./,
        replacement: "$1的眼睛睁得很大,当乙醚的甜香充斥着$2的鼻孔时."
    },
    {
        regex: /(.+) slumps back in (.+) sleep as another dose of ether assails (.+) senses\./,
        replacement: "$1在另一剂乙醚冲击$3的感官时,$2又陷入了睡眠中."
    },
    {
        regex: /(.+), unable to continue holding (.+) breath, takes a desparate gasp through the chemical-soaked cloth\./,
        replacement: "$1,无法继续屏住$2的呼吸,透过浸满化学制剂的布绝望地大口喘气."
    },
    { regex: /(.+)'s body trembles as the chloroform sinks deep into (.+) mind\./, replacement: "$1的身体颤抖着,当氯仿深深侵入$2的脑海时." },
    { regex: /(.+) takes a deep, calm breath as (.+) chloroform starts to lose its potency\.\.\./, replacement: "$1深吸一口气,保持平静,当$2的氯仿开始失去药效……" },
    { regex: /(.+) continues to sleep peacefully as the cloth is removed\.\.\./, replacement: "$1继续平静地睡着,当这块布被移除时……" },
    { regex: /(.+) gulps in fresh air as the cloth is removed\.\.\./, replacement: "$1在布料被移除时大口吞咽着新鲜空气……" },
    { regex: /(.+) starts to stir with a gentle moan\.\.\./, replacement: "$1开始缓慢地挣扎着, 轻轻地呻吟着." },
    { regex: /(.+)'s eyes flutter and start to open sleepily\.\.\./, replacement: "$1的眼睛微微颤动,开始困倦地睁开……" },
    {
        regex: /(.+) moans and trembles in frustration as (.+) is held right at the edge\.\.\./,
        replacement: "$1沮丧地呻吟着并颤抖着,当$2被正好困在高潮边缘时……"
    },
    { regex: /(.+) leads (.+) out of the room by the ear\./, replacement: "$1揪着$2的耳朵把其带出房间." },
    { regex: /(.+) roughly pulls (.+) out of the room by the arm\./, replacement: "$1粗暴地拽着$2的胳膊把其带出房间." },
    { regex: /(.+) tugs (.+) out of the room by the tongue\./, replacement: "$1拽着$2的舌头离开房间." },
    { regex: /(.+) drags (.+) out of the room with a wince\./, replacement: "$1皱着眉把$2拖出房间." },
    { regex: /(.+) feels as though (.+) abilities are enhanced\./, replacement: "$1感觉好像$2的能力得到了增强." },
    { regex: /(.+) feels as though (.+) abilities are deminished\./, replacement: "$1感觉好像$2的能力被削弱了." },
    { regex: /(.+)'s abilities return to normal\./, replacement: "$1的能力回归正常." },
    { regex: /(.+) blinks and returns to (.+) senses\./, replacement: "$1眨了眨眼,回到了$2的感知中." },
    { regex: /(.+)'s breathing calms down as (.+) regains control of (.+) arousal\./, replacement: "$1的呼吸平稳下来,当$2重新掌控了$3的高潮状态时." },
    { regex: /(.+) slumps weakly as (.+) slips into unconciousness\./, replacement: "$1虚弱地瘫倒,当$2陷入昏迷时." },
    { regex: /(.+)'s eyelids flutter and start to open sleepily\.\.\./, replacement: "$1的眼皮颤动,开始困倦地睁开……" },
    { regex: /(.+)'s body reshapes and grows to twice its size\./, replacement: "$1 的身体重新塑形并且长大到原来的两倍." },
    { regex: /(.+)'s body reshapes and shrinks to half its size\./, replacement: "$1 的身体重新塑形并且缩小到原来的一半." },
    { regex: /(.+)'s body returns to its normal size\./, replacement: "$1 的身体回归正常大小." },
    { regex: /(.+)'s (.+) engulfs (.+)\./, replacement: "$1 的 $2 吞噬了 $3 ." },
    { regex: /(.+) struggles in (.+) bindings, unable to reach (.+) collar's controls\./, replacement: "$1 在 $2 的束缚中挣扎,无法够到 $3 项圈的控制装置." },
    { regex: /(.+) struggles in (.+) bindings, unable to reach (.+)'s collar controls\./, replacement: "$1 在 $2 的束缚中挣扎,无法够到 $3 的项圈控制装置." },
    { regex: /(.+) presses a button on (.+) collar\./, replacement: "$1 按下 $2 项圈上的一个按钮." },
    { regex: /(.+) presses a button on (.+)'s collar\./, replacement: "$1 按下 $2 的项圈上的一个按钮." },
    { regex: /(.+)\'s collar beeps and a computerized voice says "Access Denied\./, replacement: "$1 的项圈发出蜂鸣声,一个电脑化的声音说: \"访问被拒绝.\"  " },
    {
        regex: /(.+)\'s collar chimes and a computerized voice reads out\:\nCurrent Level\: (.+)\.\.\.\nCorrective Cycles: (.+)\.\.\.\nTighten Trigger\: \'(.+)\'\.\.\.\nLoosen Trigger\: \'(.+)\'\.\.\.\nRemote Access\: (.+)\.\.\./,
        replacement:
            "$1 的项圈发出鸣响,电脑化的声音读出: \n当前等级: $2……\n校正周期: $3……\n收紧触发器: '$4'……\n放松触发器: '$5'……\n远程访问: $6……"
    },
    { regex: /(.+) gives (.+) to (.+)\./, replacement: "$1 把 $2 给 $3 ." },
    {
        regex: /(.+) slowly waves (.+) in an intricate pattern, making sure (.+) follows along with (.+)/,
        replacement: "$1 慢慢地挥动着 $2 形成复杂的图案,确保 $3 跟随他们的 $4."
    },
    {
        regex: /(.+) repeats an indecipherable phrase, touching (.+) to (.+)'s (.+)/,
        replacement: "$1 重复着一个难以理解的咒语,将 $2 触碰到 $3 的 $4 ."
    },
    {
        regex: /(.+) holds both (.+) and (.+)'s (.+) tightly, energy traveling from one to the other/,
        replacement: "$1 紧紧地握着 $2 和 $3 的 $4 ,能量在两者之间传递."
    },
    {
        regex: /(.+) waves (.+) in an intricate pattern and casts (.+) on (.+)/,
        replacement: "$1 挥动 $2 形成复杂的图案,并在 $4 上施展 $3 ."
    },
    {
        regex: /(.+) chants an indecipherable phrase, pointing (.+) at (.+) and casting (.+)/,
        replacement: "$1 吟诵着一个难以理解的咒语,将 $2 指向 $3 并施展 $4 ."
    },
    {
        regex: /(.+) chants an indecipherable phrase, tapping (.+) (.+) against (.+) and casting (.+)/,
        replacement: "$1 吟唱着一句难以理解的咒语, 用$2的$3轻触, 并施展出了$4魔法."
    },
    { regex: /(.+) aims (.+) at (.+) and, with a grin, casts (.+)/, replacement: "$1 把 $2 瞄准 $3 ,带着笑容施展 $4 ." },
    {
        regex: /(.+) struggles to wield (.+)'s (.+), (.+) spell backfiring\./,
        replacement: "$1 挣扎着挥动 $2 的 $3 ,$4 法术产生反噬."
    },
    {
        regex: /(.+) struggles to wield (.+)'s (.+), (.+) spell fizzling with no effect\./,
        replacement: "$1 挣扎着挥动 $2 的 $3 ,$4 法术毫无效果地消散了."
    },
    { regex: /(.+) casts (.+) at (.+) but it seems to fizzle\./, replacement: "$1 向 $3 施放 $2 ,但似乎失效了." },
    {
        regex: /(.+) tries to explain the details of (.+) to (.+) but (.+) don't seem to understand\./,
        replacement: "$1 试图向 $3 解释 $2 的细节,但 $4 似乎不理解."
    },
    {
        regex: /(.+) tries to teach (.+) (.+) but (.+) don't seem to have ̶i̶n̶s̶t̶a̶l̶l̶e̶d̶ embraced Magic™\./,
        replacement: "$1 试图教 $2 $3 ,但 $4 似乎没有接纳 Magic™ ."
    },
    {
        regex: /(.+)\'s (.+) fizzles when cast on (.+), none of its effects allowed to take hold\./,
        replacement: "$1 的 $2 在对 $3 施放时失效了,没有任何效果产生."
    },
    {
        regex: /(.+)\'s paired spell fizzles as it attempts to pair with (.+)\./,
        replacement: "$1 的配对法术在尝试与 $2 配对时失效了."
    },
    { regex: /(.+) squirms as (.+) arousal is paired\./, replacement: "$1 扭动着,当 $2 的兴奋被配对时." },
    {
        regex: /(.+) lets out a quiet gasp as the pleasure center of (.+) mind starts to tingle\./,
        replacement: "$1 发出一声轻轻的喘息,因为 $2 心灵的愉悦中心开始有刺痛感."
    },
    {
        regex: /(.+)\'s mind is already full of spells. (.+) must forget one before (.+) can learn (.+)\./,
        replacement: "$1 的脑海中已经充满了咒语.$2 必须先忘记一个,$3 才能学会 $4 ."
    },
    {
        regex: /(.+) already knows a spell called (.+) and ignores (.+) new instructions\./,
        replacement: "$1 已经知道一个叫做 $2 的咒语,并且忽略了 $3 的新指令."
    },
    {
        regex: /(.+) grins as they finally understand the details of (.+) and memorizes it for later\./,
        replacement: "$1 咧嘴笑了,因为他们终于理解了 $2 的细节,并将其记住以备后用."
    },
    { regex: /(.+) gulps down (.+)'s (.+)\./, replacement: "$1 吞下了 $2 的 $3 ." },
    { regex: /(.+) leads (.+) out of the room by the (.+)\./, replacement: "$1 牵着 $2 走出房间." },
    { regex: /(.+) leads (.+) and (.+) out of the room\./, replacement: "$1 带着 $2 和 $3 走出房间." },
    { regex: /(.+) drags (.+) out of the room with a wince\./, replacement: "$1 拖着 $2 一边皱着眉走出房间." },
    { regex: /(.+)\'s (.+) state wears off\./, replacement: "$1 的 $2 状态消失了." },
    {
        regex: /(.+) successfully defends against (.+)'s (.+) attempt to force (.+) to drink (.+), spilling drink all over\./,
        replacement: "$1 成功地抵御了 $2 的 $3 企图强迫 $4 喝 $5 ,饮料洒得到处都是."
    },
    { regex: /(.+) manages to wrest (.+)'s (.+) out of (.+) grasp\!/, replacement: "$1 设法夺过 $2 的 $3 从 $4 的手中!" },
    { regex: /(.+) makes an activity roll and gets: (.+)/, replacement: "$1 进行一次活动检定并获得: $2 " },
    { regex: /(.+) makes an activity check attack against (.+)\!/, replacement: "$1 进行一次活动检定攻击,攻击目标是 $2!" },
    { regex: /(.+) makes an activity check defending from (.+)\!/, replacement: "$1进行一次活动检定防御, 防御来自$2!" },
    {
        regex: /(.+) manages to get (.+) past (.+)'s (.+) lips, forcing (.+) to swallow\./,
        replacement: "$1 设法让 $2 经过 $3 的 $4 嘴唇,迫使 $5 吞咽."
    },
    {
        regex: /(.+) lets out a long low moan as (.+)'s drink burns pleasurably down (.+) throat\./,
        replacement: "$1 发出一声长长的低吟,当 $2 的饮料愉快地灼烧着 $3 的喉咙."
    },
    {
        regex: /(.+) gulps and quivers as (.+) body is slowly flooded with (.+)'s aphrodisiac\./,
        replacement: "$1 大口吞咽并颤抖着,当 $2 的身体慢慢被 $3 的催情剂淹没."
    },
    {
        regex: /(.+) gasps, snapping back into (.+) senses confused and blushing\./,
        replacement: "$1 喘息着,突然回到 $2 的意识中,感到困惑并脸红."
    },
    {
        regex: /(.+) groans as air is allowed back into (.+) lungs\./,
        replacement: "$1 呻吟着,当空气重新回到 $2 的肺部."
    },
    {
        regex: /(.+)\'s eyes flutter as (.+) wraps (.+) hand around (.+) neck\./,
        replacement: "$1 的眼睛眨动着,当 $2 用 $3 的手环绕着 $4 的脖子."
    },
    {
        regex: /(.+) gasps for air as (.+) tightens (.+) grip on (.+) neck\./,
        replacement: "$1 喘着粗气想要呼吸,当 $2 收紧 $3 对 $4 脖子的控制."
    },
    {
        regex: /(.+)\'s face runs flush, choking as (.+) presses firmly against (.+) neck, barely allowing any air to (.+) lungs\./,
        replacement: "$1 的脸涨得通红,窒息着,当 $2 紧紧压在 $3 的脖子上,几乎不让任何空气进入 $4 的肺里."
    },
    {
        regex: /(.+) gasps in relief as (.+) releases (.+) pressure on (.+) neck\./,
        replacement: "$1 如释重负地喘着气,当 $2 减轻对 $4 脖子的压力时."
    },
    { regex: /(.+) chokes and spasms, struggling in (.+) gag\./, replacement: "$1 呛着并痉挛,在 $2 中挣扎." },
    {
        regex: /(.+) convulses weakly with a moan, (.+) eyes rolling back as (.+) clenches around (.+) throat even tighter\./,
        replacement: "$1 虚弱地抽搐着发出呻吟声, 当 $3 更紧地掐住 $4 的喉咙, $2 的眼睛翻白.",
    },
    {
        regex: /(.+) convulses weakly with a moan, (.+) eyes rolling back as (.+) lungs scream for air\./,
        replacement: "$1 虚弱地抽搐着并呻吟,$2 眼睛翻白,$3 的肺在渴求空气."
    },
    {
        regex: /(.+) snaps back into (.+) senses at (.+)'s voice\./,
        replacement: "$1 突然回到 $2 的意识中,听到了 $3 的声音."
    },
    {
        regex: /(.+)manages to get (.+) past (.+)'s (.+)lips, forcing (.+) to swallow\./,
        replacement: "$1 设法让 $2 经过 $3 的 $4 嘴唇,迫使 $5 吞咽."
    },
    {
        regex: /(.+) manages to get (.+) past (.+)'s (.+) lips, forcing (.+) to swallow it\./,
        replacement: "$1 设法让 $2 经过 $3 的 $4 嘴唇,迫使 $5 吞咽它."
    },
    {
        regex: /(.+) successfully defends against (.+)'s (.+) attempt to force (.+) to drink (.+)\./,
        replacement: "$1 成功抵御了 $2 的 $3 企图迫使 $4 喝下 $5 ."
    },
    {
        regex: /(.+) leads (.+) and (.+) out of the room by (.+) ears\./,
        replacement: "$1 带着 $2 和 $3 走出房间,拉着 $4 的耳朵."
    },
    {
        regex: /(.+) roughly Pulls (.+) and (.+) out of the room by (.+) arms\./,
        replacement: "$1 粗暴地拉着 $2 和 $3 走出房间,抓住 $4 的手臂."
    },
    {
        regex: /(.+) tugs (.+) and (.+) out of the room by (.+) tongues\./,
        replacement: "$1 拽着 $2 和 $3 走出房间,用 $4 的舌头."
    },
    { regex: /(.+) tries (.+) best to escape from (.+)'s grip\.\.\./, replacement: "$1 竭尽全力从 $3 的控制中挣脱..." },
    {
        regex: /(.+)\'s eyes start to roll back with a groan as (.+) completely closes (.+) airway with (.+) hand\./,
        replacement: "$1 的眼睛开始翻白并呻吟,当 $2 用 $4 的手完全封闭 $3 的气道时."
    },
    { regex: /(.+) grabs at (.+)'s (.+), trying to steal it\!/, replacement: "$1一把抓住$2的$3, 试图偷取它!", },
    {
        regex: /(.+) fails to steal (.+)'s (.+) and is dazed from the attempt\!/,
        replacement: "$1未能偷走$2的$3, 并且在尝试之后感到茫然失措!",
    },
    {
        regex: /(.+)'s leash seems to be cursed and slips out of (.+)'s hand\./,
        replacement: "$1的牵引绳似乎被诅咒了,从$2手中滑落.",
    },
    {
        regex: /(.+)'s eyes lock on to (.+) and (.+) follows (.+) out of the room obediently\./,
        replacement: "$1的目光锁定在$2上,接着$3顺从地跟随$4走出房间."
    },
    {
        regex: /(.+) looks around, a little confused about how (.+) got here\./,
        replacement: "$1环顾四周,有点搞不清楚$2是怎么来到这里的.",
    },
    {
        regex: /(.+) moans quietly as (.+) slips back down under trance\.\.\./,
        replacement: "当$1再次陷入恍惚时,她低声呻吟起来……",
    },
    {
        regex: /(.+) gasps quietly as (.+) mind can suddenly form sentences once again\.\.\./,
        replacement: "$1轻轻地喘息着,$2的大脑突然又能组织句子了……",
    },
    { regex: /(.+) gasps as pleasure rushes over (.+)\./, replacement: "$1因极度的快感而喘息不已.", },
    { regex: /(.+)'s mouth falls silent once again\.\.\./, replacement: "$1再次陷入沉默,嘴唇紧闭.", },
    { regex: /(.+) gasps as pleasure (.+) over (.+)\./, replacement: "$1 因愉悦而喘息,(这种愉悦)笼罩着 $3." },
    { regex: /(.+)'s blank expression hides (.+) impending denial\./, replacement: "$1茫然的表情掩饰了$2他即将要否认的事实.", },
    { regex: /(.+)'s face begins to blush and (.+) breathing speeds up\./, replacement: "$1的脸开始泛红,$2呼吸也加快了.", },
    { regex: /(.+) struggles to perform some action\./, replacement: "$1挣扎着去做某个动作.", },
    { regex: /(.+) starts to remove clothing from (.+) body\./, replacement: "$1开始从$2身上脱去衣服.", },
    { regex: /(.+) moves their body into a pose obediently\./, replacement: "$1顺从地摆出一个姿势.", },
    { regex: /(.+)'s eyes start to follow (.+)'s every movement\./, replacement: "$1的目光开始追随$2的一举一动.", },
    { regex: /(.+) mouth starts to move automatically\./, replacement: "$1嘴巴开始不由自主地动起来.", },
    {
        regex: /(.+) looks frustrated, their inability to both walk and talk preventing them from serving drinks./,
        replacement: "$1 看起来很沮丧,既不能走路也不能说话,这使得他们无法为客人提供饮料."
    },
    { regex: /(.+) opens her mouth but no sound comes out./, replacement: "$1张开嘴,但发不出声音.", },
    { regex: /(.+) transform the Power Staff into Staff/, replacement: "$1将能量杖转换为法杖.", },
    { regex: /(.+) transform the Power Staff into Wand/, replacement: "$1能量杖变成魔杖.", },
    { regex: /(.+) groans softly as (.+) is allowed speech once more\.\.\./, replacement: "$1再次获准说话时,$2轻轻地呻吟着……", },
    { regex: /(.+) mouth starts to move automatically\./, replacement: "$1的嘴巴开始不由自主地动起来.", },
    { regex: /(.+) has accessed your remote settings\!/, replacement: "$1访问了您的远程设置!", },
    {
        regex: /(.+) waves (.+) in front of (.+), and with a sudden boop, casts (.+) on (.+), the spell's power also arcing to (.+)\./,
        replacement: "$ $1把$2的$3举到$4面前,突然用魔杖敲了一下,施展了\"$5\"咒语,咒语的力量也传到了$6身上.",
    },
    { regex: /(.+) successfully saves against (.+)'s \[(.+)\] (.+)\./, replacement: "$1成功抵御了$2的 \[$3\] \"$4\"咒语.", },
    {
        regex: /(.+) baps (.+) with (.+) and, with a grin, casts (.+), the spell's power also arcing to (.+)\./,
        replacement: "$1用$2的$4拍了拍$3,笑着施展了\"$5\"咒语,咒语的力量也传到了$6身上.",
    },
    {
        regex: /(.+) splutters and chokes\, struggling to breathe\./,
        replacement: "$1快要喘不过来了 ,咳得厉害 ,挣扎着想要呼吸.",
    },
    {
        regex: /(.+) trembled as pleasure rushes over (.+)\./,
        replacement: "当愉悦的感觉涌上$1的身体时 ,$2不由得颤抖起来.",
    },
    {
        regex: /(.+) grunts and moans, straining to breathe\./,
        replacement: "$1发出粗重的喘息声和呻吟声,努力呼吸着.",
    },
    {
        regex: /(.+) swallows (.+) (.+)\./,
        replacement: "$1喝下了$2的$3.",
    },

    {
        regex: /This rule forbids (.+) to use OOC \(messages between round brackets\) in chat or OOC whisper messages while she is gagged\./,
        replacement: "此规则禁止 $1 在被堵嘴时在聊天或 OOC 私聊消息中使用 OOC（圆括号内的消息）。",
    },
    {
        regex: /This rule forbids (.+) to use the action command\. Action is a BCX feature that enables to format a message to look like a BC chat action\. If (.+) should be forbidden to use the command to communicate, this rule should be used\./,
        replacement: "此规则禁止 $1 使用动作命令。动作是 BCX 的一项功能，可以将消息格式化为类似 BC 聊天动作的样式。如果应禁止 $2 使用该命令进行交流，则应使用此规则。",
    },
    {
        regex: /This rule forbids (.+) to send any beeps with message, except to the defined list of member numbers\. Sending beeps without a message is not affected\. Optionally, it can be set that (.+) is only forbidden to send beeps while she is unable to use her hands \(e\.g\. fixed to a cross\)\./,
        replacement: "此规则禁止 $1 发送带有消息的哔哔声，除非发送给定义的成员编号列表。发送不带消息的哔哔声不受影响。可选地，可以设置为仅当 $2 无法使用双手（例如固定在十字架上）时禁止发送哔哔声。",
    },
    {
        regex: /This rule forbids (.+) to whisper anything to most people inside a chat room, except to the defined roles\. Also affects whispered OOC messages\./,
        replacement: "此规则禁止 $1 在聊天室内向大多数人私聊任何内容，除非是向定义的角色私聊。此规则也影响私聊的 OOC 消息。",
    },
    {
        regex: /This rule prevents (.+) from receiving any beep \(regardless if the beep carries a message or not\), except for beeps from the defined list of member numbers\. If someone tries to send (.+) a beep message while this rule blocks them from doing so, they get an auto reply beep, if the rule has an auto reply set\. (.+) won't get any indication that she would have received a beep unless the rule is not enforced, in which case she will see both the beep and the auto reply\. Optionally, the rule can be set to only activate while (.+) is unable to use her hands \(e\.g\. fixed to a cross\)\./,
        replacement: "此规则阻止 $1 接收任何哔哔声（无论是否带有消息），除非来自定义的成员编号列表。如果有人尝试向 $2 发送哔哔消息但被此规则阻止，且规则设置了自动回复，则他们会收到自动回复的哔哔声。$3 不会收到任何提示表明她本应收到哔哔声，除非规则未生效，此时她会同时看到哔哔声和自动回复。可选地，可以设置为仅当 $4 无法使用双手（例如固定在十字架上）时激活此规则。",
    },
    {
        regex: /This rule prevents (.+) from receiving any whispers, except from the defined roles\. If someone tries to send (.+) a whisper message while this rule blocks them from doing so, they get an auto reply whisper, if the rule has an auto reply set \(text field is not empty\)\. (.+) won't get any indication that she would have received a whisper unless the rule is not enforced, in which case she will see both the whisper and the auto reply\. This rule can also be used \(by dommes\) to prevent getting unwanted whispers from strangers in public\./,
        replacement: "此规则阻止 $1 接收任何私聊消息，除非来自定义的角色。如果有人尝试向 $2 发送私聊消息但被此规则阻止，且规则设置了自动回复（文本字段不为空），则他们会收到自动回复的私聊消息。$3 不会收到任何提示表明她本应收到私聊消息，除非规则未生效，此时她会同时看到私聊消息和自动回复。此规则也可用于（由主导者）防止在公共场合收到陌生人的 unwanted 私聊消息。",
    },
    {
        regex: /This rule forbids (.+) to use any \(sexual\) activities in chat rooms\. Other players can still use activities on her, as this rules does not block the arousal & sexual activities system itself, as forcing the according BC setting would\./,
        replacement: "此规则禁止 $1 在聊天室中使用任何（性）活动。其他玩家仍然可以对她使用活动，因为此规则不会阻止 arousal 和性活动系统本身，这与强制更改相应的 BC 设置不同。",
    },
    {
        regex: /This rule prevents (.+) from showing, removing or changing an emoticon \(afk, zZZ, etc\.\) over her head\. It also blocks her from using the emoticon command on herself\./,
        replacement: "此规则阻止 $1 显示、移除或更改头顶的表情符号（如 afk、zZZ 等）。同时禁止她对自己使用表情符号命令。",
    },
    {
        regex: /This rule gives (.+) a list of words from which at least one has to always be used in any chat message\. The list of mandatory words can be configured\. Checks are not case sensitive \(adding 'miss' also works for 'MISS' and 'Miss' - Note: 'Miiiiissss' would also match\)\. Doesn't affect whispers, emotes and OOC text\. There is a toggle for affecting whispers, too\./,
        replacement: "此规则为 $1 提供一个单词列表，任何聊天消息中必须至少使用其中一个单词。必选单词列表可配置。检查不区分大小写（添加 'miss' 也会匹配 'MISS' 和 'Miss'——注意：'Miiiiissss' 也会匹配）。不影响私聊、表情和 OOC 文本。也可选择是否影响私聊。",
    },
    {
        regex: /This rule forces (.+)'s base game setting 'Item permission' to configurable value and prevents her from changing it\./,
        replacement: "此规则强制将 $1 的基础游戏设置 '物品权限' 设为可配置的值，并阻止她更改该设置。",
    },
    {
        regex: /This rule forbids (.+) to do any room admin actions \(except for kick\/ban\), when she is restrained\. Note: This rule does not affect an admin's ability to bypass locked rooms, if restraints allow it\. Tip: This rule can be combined with the rule 'Force ´Return to chatrooms on relog´' to trap (.+) in it\./,
        replacement: "此规则禁止 $1 在被束缚时执行任何房间管理操作（踢出/封禁除外）。注意：如果束缚允许，此规则不会影响管理员绕过锁定房间的能力。提示：此规则可与规则 '强制重新登录后返回聊天室' 结合使用，以将 $2 困在其中。",
    },
    {
        regex: /This rule limits (.+)'s ability to send a message to all people inside a chat room to only the set number per minute\. Does not affect whispers or emotes, but does affect OOC\. Note: Setting '0' will have no effect, as there is another rule to forbid open talking completely\./,
        replacement: "此规则限制 $1 在聊天室内向所有人发送消息的频率为每分钟仅可发送设定的次数。不影响私聊或表情，但会影响 OOC。注意：设置为 '0' 将无效，因为另有规则完全禁止公开发言。",
    },
    {
        regex: /This rule forbids (.+) to send an emote \(with \* or \/me\) to all people inside a chat room to only the set number per minute\. Note: Setting '0' will have no effect, as there is another rule to forbid using emotes completely\./,
        replacement: "此规则禁止 $1 在聊天室内向所有人发送表情（使用 * 或 /me）的频率为每分钟仅可发送设定的次数。注意：设置为 '0' 将无效，因为另有规则完全禁止使用表情。",
    },
    {
        regex: /This rule gives (.+) a list of words from which at least one has to always be used in any emote message\. The list of mandatory words can be configured\. Checks are not case sensitive \(adding 'miss' also works for 'MISS' and 'Miss' - Note: 'Miiiiissss' would also match\)\./,
        replacement: "此规则为 $1 提供一个单词列表，任何表情消息中必须至少使用其中一个单词。必选单词列表可配置。检查不区分大小写（添加 'miss' 也会匹配 'MISS' 和 'Miss'——注意：'Miiiiissss' 也会匹配）。",
    },
    {
        regex: /This rule enforces full blindness when the eyes are closed\. \(Light sensory deprivation setting is still respected and doesn't blind fully\)/,
        replacement: "此规则在闭眼时强制完全失明。（轻度感官剥夺设置仍会生效，不会完全失明）",
    },
    {
        regex: /This rule forces (.+)'s base game setting 'Arousal meter' to configurable value and prevents her from changing it\./,
        replacement: "此规则强制将 $1 的基础游戏设置 '兴奋度计量条' 设为可配置的值，并阻止她更改该设置。",
    },
    {
        regex: /This rule lets you define a minimum role which (.+) will automatically give room admin rights to \(if she has admin rights in the room\)\. Also has the option to remove admin rights from (.+) afterwards\./,
        replacement: "此规则允许您定义一个最低角色，$1 会自动将房间管理员权限授予该角色（如果她在房间中拥有管理员权限）。还可选择在此后移除 $2 的管理员权限。",
    },
    {
        regex: /This rule enforces full blindness when wearing any item that limits sight in any way\. \(This rules does NOT respect Light sensory deprivation setting and always forces player to be fully blind\. The crafting property 'thin' is not factored in either due to technical limitations\. \)/,
        replacement: "此规则在佩戴任何限制视力的物品时强制完全失明。（此规则不遵循轻度感官剥夺设置，并始终强制玩家完全失明。由于技术限制，制作属性 '薄' 也不会被考虑在内。）",
    },
    {
        regex: /This rule forces (.+)'s base game setting 'Arousal speech stuttering' to configurable value and prevents her from changing it\./,
        replacement: "此规则强制将 $1 的基础游戏设置 '兴奋时口吃' 设为可配置的值，并阻止她更改该设置。",
    },
    {
        regex: /Thus rule converts (.+)'s messages, so she is only able to speak studdering and with random filler sounds, for some \[RP\] reason \(anxiousness, arousal, fear, etc\.\)\. Converts the typed chat text automatically\. Affects chat messages and whispers, but not OOC\./,
        replacement: "此规则转换 $1 的消息，使她只能以口吃和随机填充音的方式说话，出于某些 [RP] 原因（焦虑、兴奋、恐惧等）。自动转换输入的聊天文本。影响聊天消息和私聊，但不影响 OOC。",
    },
    {
        regex: /(.+) will automatically send all defined member numbers \(if they are currently online and friends with (.+)\) a beep the moment (.+) joins the club or the moment she start BCX to make her presence known\. Disconnects don't count as coming into the club again, as far as detectable\. NOTE: Trigger conditions should not be selected when using this rule, as if you for instance select 'when in public room' the rule will only greet when you load BCX in a public room\./,
        replacement: "$1 将在加入俱乐部或启动 BCX 时自动向所有定义的成员编号（如果他们当前在线且是 $2 的好友）发送哔哔声，以告知她的存在。只要可检测到，断开连接不会被视为再次进入俱乐部。注意：使用此规则时不应选择触发条件，例如，如果选择 '在公共房间时'，则规则仅在您在公共房间加载 BCX 时才会触发问候。",
    },
    {
        regex: /This rule forbids (.+) to use any words longer than set limit and limits number of words too\. Both limits are configurable independently\. Doesn't affect OOC text, but does affect whispers\. Note: Setting '0' means this part is not limited \(∞\), as there is another rule to forbid open talking completely\./,
        replacement: "此规则禁止 $1 使用超过设定长度的单词，并限制单词数量。两个限制可独立配置。不影响 OOC 文本，但会影响私聊。注意：设置为 '0' 表示该部分不受限制（∞），因为另有规则完全禁止公开发言。",
    },
    {
        regex: /Forces (.+) to greet people newly entering the current chat room with the set sentence\. NOTE: Only (.+) and the new guest can see the message not to make it spammy\. After a new person has been greeted, she will not be greeted for 10 minutes after she left \(including disconnect\) the room (.+) is in\. Setting an emote as a greeting is also supported by starting the set message with one or two '\*' characters\./,
        replacement: "强制 $1 使用设定的句子问候新进入当前聊天室的人。注意：只有 $2 和新客人可以看到该消息，以避免刷屏。新客人被问候后，在她离开（包括断开连接）$3 所在的房间后 10 分钟内不会再次被问候。支持将表情设置为问候语，只需在设定消息的开头添加一个或两个 '*' 字符。",
    },
    {
        regex: /This rule forbids (.+) to revieve training by the base club's GGTS feature\. If the rule is enforced while (.+) has remaining GGTS training time, it is removed the moment (.+) enters the GGTS room\./,
        replacement: "此规则禁止 $1 通过俱乐部基础的 GGTS 功能接受训练。如果规则在 $2 仍有剩余 GGTS 训练时间时生效，则在她进入 GGTS 房间时，剩余时间将被移除。",
    },
    {
        regex: /This rule prevents (.+) to work as a club slave by picking up a club slave collar from the club management room\./,
        replacement: "此规则阻止 $1 通过从俱乐部管理室领取俱乐部奴隶项圈来担任俱乐部奴隶。",
    },
    {
        regex: /This rule prevents (.+) to use items she does not own herself, but can use on someone because this person owns them\./,
        replacement: "此规则阻止 $1 使用她自己不拥有但可以因他人拥有而使用的物品。",
    },
    {
        regex: /This rule forces (.+)'s base game or BCX setting 'Block advanced vibrator modes' to the configured value and prevents her from changing it\. There is also an option to restore the setting to the state it was in before the rule changed it\. The restoration happens either when the rule becomes inactive \(for instance through toggle or unfulfilled trigger conditions\) or when it is removed\./,
        replacement: "此规则强制将 $1 的基础游戏或 BCX 设置 '阻止高级振动模式' 设为配置的值，并阻止她更改该设置。还可选择将设置恢复为规则更改前的状态。恢复会在规则变为非活动状态时（例如通过切换或未满足触发条件）或规则被移除时生效。",
    },
    {
        regex: /This rule forces (.+)'s base game or BCX setting 'Show AFK bubble' to the configured value and prevents her from changing it\. There is also an option to restore the setting to the state it was in before the rule changed it\. The restoration happens either when the rule becomes inactive \(for instance through toggle or unfulfilled trigger conditions\) or when it is removed\./,
        replacement: "此规则强制将 $1 的基础游戏或 BCX 设置 '显示 AFK 气泡' 设为配置的值，并阻止她更改该设置。还可选择将设置恢复为规则更改前的状态。恢复会在规则变为非活动状态时（例如通过切换或未满足触发条件）或规则被移除时生效。",
    },
    {
        regex: /This rule forces (.+)'s base game or BCX setting 'Allow others to alter your whole appearance' to the configured value and prevents her from changing it\. There is also an option to restore the setting to the state it was in before the rule changed it\. The restoration happens either when the rule becomes inactive \(for instance through toggle or unfulfilled trigger conditions\) or when it is removed\./,
        replacement: "此规则强制将 $1 的基础游戏或 BCX 设置 '允许他人完全更改你的外观' 设为配置的值，并阻止她更改该设置。还可选择将设置恢复为规则更改前的状态。恢复会在规则变为非活动状态时（例如通过切换或未满足触发条件）或规则被移除时生效。",
    },
    {
        regex: /This rule forbids (.+) to go afk and logs when the allowed inactivity threshold is overstepped\./,
        replacement: "此规则禁止 $1 进入 AFK 状态，并在超过允许的不活动阈值时记录日志。",
    },
    {
        regex: /Sets a specific sentence that (.+) must say loud after entering a room that is not empty\. The sentence is autopopulating the chat window text input\. When to say it is left to (.+), but when the rule is enforced, it is the only thing that can be said in this room after joining it\. Emotes can still be used, though, unless toggled to be forbidden\. Disconnects don't count as coming into a new room again, as far as detectable\./,
        replacement: "设置一个特定的句子，$1 必须在进入非空房间后大声说出。该句子会自动填充到聊天窗口的文本输入框中。何时说出由 $2 决定，但当规则生效时，这是加入房间后唯一可以说的内容。不过，表情仍然可以使用，除非设置为禁止。只要可检测到，断开连接不会被视为再次进入新房间。",
    },
    {
        regex: /This rule forces (.+)'s base game or BCX setting 'Allow item blur effects' to the configured value and prevents her from changing it\. There is also an option to restore the setting to the state it was in before the rule changed it\. The restoration happens either when the rule becomes inactive \(for instance through toggle or unfulfilled trigger conditions\) or when it is removed\./,
        replacement: "此规则强制将 $1 的基础游戏或 BCX 设置 '允许物品模糊效果' 设为配置的值，并阻止她更改该设置。还可选择将设置恢复为规则更改前的状态。恢复会在规则变为非活动状态时（例如通过切换或未满足触发条件）或规则被移除时生效。",
    },
    {
        regex: /This rule forces (.+)'s base game or BCX setting 'Flip room vertically when upside-down' to the configured value and prevents her from changing it\. There is also an option to restore the setting to the state it was in before the rule changed it\. The restoration happens either when the rule becomes inactive \(for instance through toggle or unfulfilled trigger conditions\) or when it is removed\./,
        replacement: "此规则强制将 $1 的基础游戏或 BCX 设置 '倒置时垂直翻转房间' 设为配置的值，并阻止她更改该设置。还可选择将设置恢复为规则更改前的状态。恢复会在规则变为非活动状态时（例如通过切换或未满足触发条件）或规则被移除时生效。",
    },
    {
        regex: /This rule forces (.+)'s base game or BCX setting 'Prevent random NPC events' to the configured value and prevents her from changing it\. There is also an option to restore the setting to the state it was in before the rule changed it\. The restoration happens either when the rule becomes inactive \(for instance through toggle or unfulfilled trigger conditions\) or when it is removed\./,
        replacement: "此规则强制将 $1 的基础游戏或 BCX 设置 '阻止随机 NPC 事件' 设为配置的值，并阻止她更改该设置。还可选择将设置恢复为规则更改前的状态。恢复会在规则变为非活动状态时（例如通过切换或未满足触发条件）或规则被移除时生效。",
    },
    {
        regex: /This rule forbids (.+) to leave any of their lovers, independent of lovership stage \(leaving dating, engaged and married characters is forbidden\)\. Doesn't prevent her lovers from breaking up with her\./,
        replacement: "此规则禁止 $1 离开任何恋人，无论恋爱阶段如何（禁止离开约会、订婚和已婚的角色）。但不阻止她的恋人与其分手。",
    },
    {
        regex: /This rule forbids (.+) to let go of any of their subs\. \(affects both trial and full ownerships\)\. Doesn't prevent her submissives from breaking the bond\./,
        replacement: "此规则禁止 $1 放弃任何他们的 sub（影响试用和完全所有权）。但不阻止她的 submissives 解除关系。",
    },
    {
        regex: /This rule forbids (.+) to use certain words as part of any emote messages\. The list of banned words can be configured\. Checks are not case sensitive \(forbidding 'no' also forbids 'NO' and 'No'\)\./,
        replacement: "此规则禁止 $1 在任何表情消息中使用某些单词。被禁单词列表可配置。检查不区分大小写（禁止 'no' 也会禁止 'NO' 和 'No'）。",
    },
    {
        regex: /This rule forces (.+) to retype any chat\/whisper\/emote\/OOC message as a punishment when they try to send it and another enforced BCX speech rule determines that there is any rule violation in that message\./,
        replacement: "此规则强制 $1 作为惩罚重新输入任何聊天/私聊/表情/OOC 消息，当她们尝试发送消息且其他已生效的 BCX 语言规则判定该消息存在违规时。",
    },
    {
        regex: /This rule forces (.+)'s base game or BCX setting 'Players can drag you to rooms when leashed' to the configured value and prevents her from changing it\. There is also an option to restore the setting to the state it was in before the rule changed it\. The restoration happens either when the rule becomes inactive \(for instance through toggle or unfulfilled trigger conditions\) or when it is removed\./,
        replacement: "此规则强制将 $1 的基础游戏或 BCX 设置 '玩家在被牵绳时可以拖拽你到房间' 设为配置的值，并阻止她更改该设置。还可选择将设置恢复为规则更改前的状态。恢复会在规则变为非活动状态时（例如通过切换或未满足触发条件）或规则被移除时生效。",
    },
    {
        regex: /This rule forces (.+)'s base game or BCX setting 'Events while plugged or vibed' to the configured value and prevents her from changing it\. There is also an option to restore the setting to the state it was in before the rule changed it\. The restoration happens either when the rule becomes inactive \(for instance through toggle or unfulfilled trigger conditions\) or when it is removed\./,
        replacement: "此规则强制将 $1 的基础游戏或 BCX 设置 '插入或振动时的事件' 设为配置的值，并阻止她更改该设置。还可选择将设置恢复为规则更改前的状态。恢复会在规则变为非活动状态时（例如通过切换或未满足触发条件）或规则被移除时生效。",
    },
    {
        regex: /This rule forces (.+)'s base game or BCX setting 'Allow item tint effects' to the configured value and prevents her from changing it\. There is also an option to restore the setting to the state it was in before the rule changed it\. The restoration happens either when the rule becomes inactive \(for instance through toggle or unfulfilled trigger conditions\) or when it is removed\./,
        replacement: "此规则强制将 $1 的基础游戏或 BCX 设置 '允许物品染色效果' 设为配置的值，并阻止她更改该设置。还可选择将设置恢复为规则更改前的状态。恢复会在规则变为非活动状态时（例如通过切换或未满足触发条件）或规则被移除时生效。",
    },
    {
        regex: /This rule forbids (.+) to start a trial with new submissive\. Advancing ownership from trial to full ownership is unaffected\./,
        replacement: "此规则禁止 $1 与新 submissive 开始试用关系。从试用升级为完全所有权不受影响。",
    },
    {
        regex: /Rule violations will not be logged/,
        replacement: "规则违规将不会被记录",
    },

    // {
    //     regex: /(.+)\./,
    //     replacement: "$1.",
    // },

    // BCX
    { regex: /(.+) spoke openly in a room\./, replacement: "$1尝试在房间说话.", },
    {
        regex: /The curse on (.+)\'s (.+) wakes up and the item reappears\./,
        replacement: "在$1的$2上的诅咒苏醒,该物品再次出现."
    },
    {
        regex: /tried to use a remote control on (.+) own body\, which was forbidden\./,
        replacement: "$1试图对自己的身体使用遥控器,而这是被禁止的."
    },
    {
        regex: /(.+) almost forgot to use a mandatory word while talking\./,
        replacement: "$1在交谈时忘了使用一个必说词汇."
    },
    {
        regex: /(.+) tried to use the antiblind command\./,
        replacement: "$1尝试使用反盲指令."
    },
    {
        regex: /(.+) 牵着她的手走出房间\./,
        replacement: "$1尝试使用反盲指令."
    },
    {
        regex: /A magical shield on (.+) repelled the suspiciously magical changes attempted by (.+)! \[WCE Anti\-Cheat\]/,
        replacement: "$1 身上出现了一道神奇的护盾, 挡下了 $2 试图施展的可疑魔法! [WCE 反作弊系统]"
    },
    {
        regex: /(.+) received a summon: \"(.+)\"\./,
        replacement: "$1接到了一个招唤: \"$2\"."
    },
    {
        regex: /The demand for (.+) 's presence is now enforced\./,
        replacement: "$1 现在必须要过去了."
    },
    {
        regex: /The curse on (.+)'s (.+) wakes up, not allowing the item to be replaced by another item\./,
        replacement: "$1 身上 $2 的诅咒苏醒了, 禁止该物品被其他物品替换.",
    },
    {
        regex: /(.+) did not use a mandatory word while talking\./,
        replacement: "$1 在说话时未使用规定的词汇.",
    },
    {
        regex: /(.+) tried to use OOC in a message while gagged\./,
        replacement: "$1 被封口时还试图使用 OOC 消息.",
    },
    {
        regex: /The curses on (.+)'s body become dormant and several items fall off (.+) body\./,
        replacement: "$1 身上的诅咒陷入休眠状态, 几件物品从她身上脱落.",
    },
    {
        regex: /The curse on (.+)'s becomes dormant and the (.+) falls off her body\./,
        replacement: "$1 身上的诅咒陷入休眠状态, $2 物品从她身上脱落.",
    },
    {
        regex: /The curse on (.+)'s (.+) wakes up and the item reappears\./,
        replacement: "$1身上的诅咒被唤醒, $2 重新出现.",
    },
    {
        regex: /(.+) broke a rule to only speak using specific sound patterns\./,
        replacement: "$1违反了只使用特定句子说话的规定.",
    },


    // BCC
    // 强制舔腿
    { regex: /(.+) uses "Force lick legs" spell on (.+)/, replacement: '$1 对 $2 使用了 "强制舔腿" 法术' },
    { regex: /(.+) gets on his knees and starts licking (.+) legs/, replacement: "$1 跪下并开始舔 $2 的腿" },

    // 催眠入睡
    { regex: /(.+) uses \"Put to sleep\" spell on himself/, replacement: '$1 自己使用了 "催眠入睡" 法术' },
    { regex: /(.+) uses \"Put to sleep\" spell on (.+)/, replacement: '$1 对 $2 使用了 "催眠入睡" 法术' },
    {
        regex: /(.+) fell asleep, only hot kiss or hard spanking can wake his up/,
        replacement: "$1 睡着了,只有热烈的亲吻或严厉的打屁股才能唤醒他"
    },

    // 移除魔法效果
    { regex: /(.+) uses \"Remove enchantments\" spell on himself/, replacement: '$1 自己使用了 "移除魔法" 法术' },
    { regex: /(.+) uses \"Remove enchantments\" spell on (.+)/, replacement: '$1 对 $2 使用了 "移除魔法" 法术' },
    { regex: /All spell effects were removed from (.+)/, replacement: "所有法术效果从 $1 身上被移除了" },

    // 使其无助
    { regex: /(.+) uses \"Make helpless\" spell on himself/, replacement: '$1 自己使用了 "使无助" 法术' },
    { regex: /(.+) uses \"Make helpless\" spell on (.+)/, replacement: '$1 对 $2 使用了 "使无助" 法术' },
    { regex: /(.+) was enchanted, now he is totally helpless/, replacement: "$1 被施了魔法,现在他完全无助" },
    // 制造幻觉
    { regex: /(.+) uses \"Make hallucination\" spell on himself/, replacement: '$1 自己使用了 "制造幻觉" 法术' },
    { regex: /(.+) uses \"Make hallucination\" spell on (.+)/, replacement: '$1 对 $2 使用了 "制造幻觉" 法术' },
    { regex: /(.+) was subject to hallucinations/, replacement: "$1 开始产生幻觉" },

    // 使说猫语
    { regex: /(.+) uses \"Make cat speech\" spell on himself/, replacement: '$1 自己使用了 "让猫语" 法术' },
    { regex: /(.+) uses \"Make cat speech\" spell on (.+)/, replacement: '$1 对 $2 使用了 "让猫语" 法术' },
    { regex: /(.+) was forced to speak like a cat/, replacement: "$1 被迫像猫一样说话" },

    // 使说婴儿语
    { regex: /(.+) uses \"Make baby speech\" spell on himself/, replacement: '$1 自己使用了 "让婴儿语" 法术' },
    { regex: /(.+) uses \"Make baby speech\" spell on (.+)/, replacement: '$1 对 $2 使用了 "让婴儿语" 法术' },
    { regex: /(.+) was forced to speak like a baby/, replacement: "$1 被迫像婴儿一样说话" },

    // 使说小狗语
    { regex: /(.+) uses \"Make puppy speech\" spell on himself/, replacement: '$1 自己使用了 "让小狗语" 法术' },
    { regex: /(.+) uses \"Make puppy speech\" spell on (.+)/, replacement: '$1 对 $2 使用了 "让小狗语" 法术' },
    { regex: /(.+) was forced to speak like a puppy/, replacement: "$1 被迫像小狗一样说话" },

    // 使说牛语
    { regex: /(.+) uses \"Make cow speech\" spell on himself/, replacement: '$1 自己使用了 "让牛语" 法术' },
    { regex: /(.+) uses \"Make cow speech\" spell on (.+)/, replacement: '$1 对 $2 使用了 "让牛语" 法术' },
    { regex: /(.+) was forced to speak like a cow/, replacement: "$1 被迫像牛一样说话" },

    // 使目标感到情欲
    { regex: /(.+) uses \"Maky horny\" spell on himself/, replacement: '$1 自己使用了 "亢奋" 法术' },
    { regex: /(.+) uses \"Maky horny\" spell on (.+)/, replacement: '$1 对 $2 使用了 "亢奋" 法术' },
    { regex: /(.+) became very horny/, replacement: "$1 变得非常亢奋" },

    // 剥夺声音
    { regex: /(.+) uses \"Take away voice\" spell on himself/, replacement: '$1 自己使用了 "剥夺声音" 法术' },
    { regex: /(.+) uses \"Take away voice\" spell on (.+)/, replacement: '$1 对 $2 使用了 "剥夺声音" 法术' },
    { regex: /(.+) lost his voice/, replacement: "$1 失去了声音" },

    // 控制
    { regex: /(.+) uses \"Control\" spell on himself/, replacement: '$1 自己使用了 "自我控制" 法术' },
    { regex: /(.+) uses \"Control\" spell on (.+)/, replacement: '$1 对 $2 使用了 "控制" 法术' },
    { regex: /(.+) lost control of his body/, replacement: "$1 失去了对自己身体的控制" },

    // 翻转
    { regex: /(.+) uses \"Flip\" spell on himself/, replacement: '$1 自己使用了 "翻转屏幕" 法术' },
    { regex: /(.+) uses \"Flip\" spell on (.+)/, replacement: '$1 对 $2 使用了 "翻转屏幕" 法术' },
    { regex: /(.+)'s screen was flipped/, replacement: "$1 的屏幕被翻转了" },

    // 溶解衣物
    { regex: /(.+) uses \"Dissolve clothes\" spell on himself/, replacement: '$1 自己使用了 "溶解衣物" 法术' },
    { regex: /(.+) uses \"Dissolve clothes\" spell on (.+)/, replacement: '$1 对 $2 使用了 "溶解衣物" 法术' },
    { regex: /(.+)'s clothes were dissolved/, replacement: "$1 的衣物被溶解了" },
];

const pronouns = [
    { regex: /herself/g, replacement: "她自己" },
    { regex: /(her|she)/g, replacement: "她" },
    { regex: /net/g, replacement: "网" },
];

const translationsDTF2 = [
    { regex: /Instruction (.+):/, replacement: "指令 $1:", },
    { regex: /Delete (.+)/, replacement: "删除 $1", },
    { regex: /Delete Spell No. (.+)/, replacement: "删除法术编号 $1", },
    { regex: /Effect (.+):/, replacement: "效果 $1:", },
    { regex: /Spell No. (.+)/, replacement: "法术编号 $1", },
    { regex: /Page (.+)\/(.+)/, replacement: "第 $1 页/$2", },
    { regex: /Background (.+)\/(.+)/, replacement: "背景 第 $1 页/$2", },
    { regex: /Confirm \((.+)\)/, replacement: "确认 \($1\)", },
    { regex: /- Little Sera's Club Games v(.+) -/, replacement: "Little Sera 的俱乐部游戏 v$1" },
    { regex: /Your BCX version: (.+)/, replacement: "您的 BCX 版本: $1" },
    { regex: /Your initially selected BCX preset was: \"(.+)\"/, replacement: "你最初选择的BCX预设是: \"$1\"" },
    { regex: /- Rules: Description of the rule: \"(.+)\"-/, replacement: "- 规则描述: \"$1\" -", },
    { regex: /- View \/ Edit the \'(.+)\' rule -/, replacement: "- 查看/编辑 \'$1\' 规则 -", },
    { regex: /(.+)\"Force \'(.+)/, replacement: "$1\"强制 \'$2", },
    { regex: /(.+)Forbid using remotes on others(.+)/, replacement: "$1禁止对别人使用遥控器$2", },
    { regex: /(.+)Forbid using remotes on self(.+)/, replacement: "$1禁止对自己使用遥控器$2", },
    { regex: /(.+)Forbid using keys on others(.+)/, replacement: "$1禁止对别人使用遥控器$2", },
    { regex: /(.+)Forbid using keys on self(.+)/, replacement: "$1禁止对自己使用钥匙$2", },
    { regex: /(.+)Forbid tying up others(.+)/, replacement: "$1禁止捆绑别人$2", },
    { regex: /(.+)Prevent blacklisting(.+)/, replacement: "$1禁止增加黑名单$2", },
    { regex: /(.+)Forbid freeing self(.+)/, replacement: "$1禁止自己解开自己的拘束$2", },
    { regex: /(.+)Forbid creating new rooms(.+)/, replacement: "$1禁止创建新房间$2", },
    { regex: /(.+)Restrict allowed body poses(.+)/, replacement: "$1限制允许的身体姿势$2", },
    { regex: /(.+)Forbid using locks on self(.+)/, replacement: "$1禁止对自己使用锁$2", },
    { regex: /(.+)Forbid picking locks on self(.+)/, replacement: "$1禁止自己的撬自己的锁$2", },
    { regex: /(.+)Forbid wardrobe use on self(.+)/, replacement: "$1禁止更换自己的服装$2", },
    { regex: /(.+)Forbid picking locks on others(.+)/, replacement: "$1禁止撬别人的锁$2", },
    { regex: /(.+)Forbid using locks on others(.+)/, replacement: "$1禁止对别人使用锁$2", },
    { regex: /(.+)Forbid wardrobe use on others(.+)/, replacement: "$1禁止更换别人的服装$2", },
    { regex: /(.+)Restrict entering rooms(.+)/, replacement: "$1限制进入房间$2", },
    { regex: /(.+)Prevent leaving the room(.+)/, replacement: "$1禁止离开房间$2", },
    { regex: /(.+)Forbid the antiblind command(.+)/, replacement: "$1禁止使用防盲指令$2", },
    { regex: /(.+)Prevent usage of all activities(.+)/, replacement: "$1禁止使用所有交互动作$2", },
    { regex: /(.+)Forbid mainhall maid services(.+)/, replacement: "$1禁止大厅女仆服务$2", },
    { regex: /(.+)Forbid changing difficulty(.+)/, replacement: "$1禁止改变难度$2", },
    { regex: /(.+)Prevent whitelisting(.+)/, replacement: "$1禁止增加白名单$2", },
    { regex: /(.+)Forbid the action command(.+)/, replacement: "$1禁止动作指令$2", },
    { regex: /(.+)Prevent using BCX permissions(.+)/, replacement: "$1禁止使用 BCX 权限$2", },
    { regex: /(.+)Forbid looking at room admin UI(.+)/, replacement: "$1禁止查看房间管理界面$2", },
    { regex: /(.+)Forbid using GGTS(.+)/, replacement: "$1禁止使用 GGTS$2", },
    { regex: /(.+)Prevent working as club slave(.+)/, replacement: "$1禁止成为俱乐部的奴隶$2", },
    { regex: /(.+)Prevent using items of others(.+)/, replacement: "$1禁止使用别人的物品$2", },
    { regex: /(.+)Prevent changing own emoticon(.+)/, replacement: "$1禁止更改自己的表情符号$2", },
    { regex: /(.+)Force-hide UI elements(.+)/, replacement: "$1强制隐藏 UI 元素$2", },
    { regex: /(.+)Sensory deprivation: Sound(.+)/, replacement: "$1感觉剥夺: 听觉$2", },
    { regex: /(.+)Hearing whitelist(.+)/, replacement: "$1听觉白名单$2", },
    { regex: /(.+)Sensory deprivation: Sight(.+)/, replacement: "$1感觉剥夺: 视觉$2", },
    { regex: /(.+)Seeing whitelist(.+)/, replacement: "$1视觉白名单$2", },
    { regex: /(.+)Fully blind when eyes are closed(.+)/, replacement: "$1闭上眼睛时完全失去视力$2", },
    { regex: /(.+)Field of vision for eyes(.+)/, replacement: "$1眼睛的视野$2", },
    { regex: /(.+)Fully blind when blindfolded(.+)/, replacement: "$1蒙眼时完全看不见$2", },
    { regex: /(.+)Always leave rooms slowly(.+)/, replacement: "$1总是慢慢离开房间$2", },
    { regex: /(.+)Set slowed leave time(.+)/, replacement: "$1设置缓慢离开的时间$2", },
    { regex: /(.+)Control ability to orgasm(.+)/, replacement: "$1控制高潮$2", },
    { regex: /(.+)Secret orgasm progress(.+)/, replacement: "$1隐藏高潮进度$2", },
    { regex: /(.+)Room admin transfer(.+)/, replacement: "$1转移房间管理权限$2", },
    { regex: /(.+)Limit bound admin power(.+)/, replacement: "$1限制被束缚时管理员的权限$2", },
    { regex: /(.+)Control profile online description(.+)/, replacement: "$1控制在线个人简介$2", },
    { regex: /(.+)Control playername(.+)/, replacement: "$1控制昵称$2", },
    { regex: /(.+)Always carry a suitcase(.+)/, replacement: "$1总是携带一个手提箱$2", },
    { regex: /(.+)Restrict being leashed by others(.+)/, replacement: "$1限制被别人牵引$2", },
    { regex: /(.+)Hide online friends if blind(.+)/, replacement: "$1失明时隐藏好友列表$2", },
    { regex: /(.+)Ready to be summoned(.+)/, replacement: "$1准备好被召唤$2", },
    { regex: /(.+)Allow changing the whole appearance(.+)/, replacement: "$1允许改变整体外观$2", },
    { regex: /(.+)Item permission(.+)/, replacement: "$1物品权限$2", },
    { regex: /(.+)Locks on you can't be picked(.+)/, replacement: "$1锁在你身上无法被撬开$2", },
    { regex: /(.+)Cannot enter single-player rooms when restrained(.+)/, replacement: "$1当被束缚时不能进入单人房间$2", },
    { regex: /(.+)Allow safeword use(.+)/, replacement: "$1允许使用安全词$2", },
    { regex: /(.+)Arousal meter(.+)/, replacement: "$1高潮条$2", },
    { regex: /(.+)Block advanced vibrator modes(.+)/, replacement: "$1屏蔽高级震动器模式$2", },
    { regex: /(.+)Arousal speech stuttering(.+)/, replacement: "$1兴奋时口吃$2", },
    { regex: /(.+)Show AFK bubble(.+)/, replacement: "$1显示 AFK 气泡$2", },
    { regex: /(.+)Allow others to alter your whole appearance(.+)/, replacement: "$1允许别人改变你的整体外观$2", },
    { regex: /(.+)Prevent others from changing cosplay items(.+)/, replacement: "$1禁止别人更换你的角色扮演道具$2", },
    { regex: /(.+)Sensory deprivation setting(.+)/, replacement: "$1感官剥夺设置$2", },
    { regex: /(.+)Hide non-adjacent players while partially blind(.+)/, replacement: "$1在部分失明时隐藏非相邻玩家$2", },
    { regex: /(.+)Garble chatroom names and descriptions while blind(.+)/, replacement: "$1失明时混淆聊天室的名称和描述$2", },
    { regex: /(.+)Keep all restraints when relogging(.+)/, replacement: "$1重新登录时保存所有束缚和道具$2", },
    { regex: /(.+)Players can drag you to rooms when leashed(.+)/, replacement: "$1当被牵住时, 玩家可以把你拖到其他房间$2", },
    { regex: /(.+)Return to chatrooms on relog(.+)/, replacement: "$1重新登录时返回聊天室$2", },
    { regex: /(.+)Events while plugged or vibed(.+)/, replacement: "$1插着或振动时发生事件$2", },
    { regex: /(.+)Allow item tint effects(.+)/, replacement: "$1允许物品染色效果$2", },
    { regex: /(.+)Allow item blur effects(.+)/, replacement: "$1允许物品模糊效果$2", },
    { regex: /(.+)Flip room vertically when upside-down(.+)/, replacement: "$1倒立时房间垂直翻转$2", },
    { regex: /(.+)Prevent random NPC events(.+)/, replacement: "$1阻止随机 NPC 事件$2", },
    { regex: /Cheat: (.+) (kidnappings, ransoms, asylum, club slaves)/, replacement: "作弊: $1 (绑架、赎金、庇护、俱乐部奴隶)", },
    { regex: /(.+)Forbid club owner changes(.+)/, replacement: "$1禁止更换俱乐部主人$2", },
    { regex: /(.+)Forbid getting new lovers(.+)/, replacement: "$1禁止交新的恋人$2", },
    { regex: /(.+)Forbid breaking up with lovers(.+)/, replacement: "$1禁止与恋人分手$2", },
    { regex: /(.+)Forbid taking new submissives(.+)/, replacement: "$1禁止接收新的顺从者$2", },
    { regex: /(.+)Forbid disowning submissives(.+)/, replacement: "$1禁止放弃顺从者$2", },
    { regex: /(.+)Allow specific sounds only(.+)/, replacement: "$1仅允许特定声音$2", },
    { regex: /(.+)Garble whispers while gagged(.+)/, replacement: "$1嘴巴被堵住时混淆私聊$2", },
    { regex: /(.+)Block OOC chat while gagged(.+)/, replacement: "$1嘴巴被堵住时阻止 OOC 聊天$2", },
    { regex: /(.+)Block OOC chat(.+)/, replacement: "$1阻止 OOC 聊天$2", },
    { regex: /(.+)Doll talk(.+)/, replacement: "$1玩偶言语$2", },
    { regex: /(.+)Forbid saying certain words in chat(.+)/, replacement: "$1禁止在聊天中说某些词$2", },
    { regex: /(.+)Forbid saying certain words in emotes(.+)/, replacement: "$1禁止在表情中说某些词$2", },
    { regex: /(.+)Forbid talking openly(.+)/, replacement: "$1禁止公开聊天$2", },
    { regex: /(.+)Limit talking openly(.+)/, replacement: "$1限制公开聊天$2", },
    { regex: /(.+)Forbid using emotes(.+)/, replacement: "$1禁止使用表情符号$2", },
    { regex: /(.+)Limit using emotes(.+)/, replacement: "$1限制使用表情符号$2", },
    { regex: /(.+)Restrict sending whispers(.+)/, replacement: "$1限制发送耳语$2", },
    { regex: /(.+)Restrict receiving whispers(.+)/, replacement: "$1限制接收耳语$2", },
    { regex: /(.+)Restrict sending beep messages(.+)/, replacement: "$1限制发送蜂鸣消息$2", },
    { regex: /(.+)Restrict receiving beeps(.+)/, replacement: "$1限制接收蜂鸣$2", },
    { regex: /(.+)Order to greet club(.+)/, replacement: "$1登录时自动发蜂鸣消息$2", },
    { regex: /(.+)Forbid the antigarble option(.+)/, replacement: "$1禁止反语言混淆选项$2", },
    { regex: /(.+)Force to retype(.+)/, replacement: "$1强制重新输入$2", },
    { regex: /(.+)Order to greet room(.+)/, replacement: "$1进房间时自动发送的问候语$2", },
    { regex: /(.+)Greet new guests(.+)/, replacement: "$1问候新客人$2", },
    { regex: /(.+)Enforce faltering speech(.+)/, replacement: "$1强制断句说话$2", },
    { regex: /(.+)Establish mandatory words(.+)/, replacement: "$1建立必用的词汇$2", },
    { regex: /(.+)Establish mandatory words in emotes(.+)/, replacement: "$1在表情中建立必用的词汇$2", },
    { regex: /(.+)Partial hearing(.+)/, replacement: "$1部分听觉$2", },
    { regex: /(.+)Force garbled speech(.+)/, replacement: "$1强制口吃说话$2", },
    { regex: /(.+)Forbid going afk(.+)/, replacement: "$1禁止 AFK$2", },
    { regex: /(.+)Track rule effect time(.+)/, replacement: "$1追踪规则生效时间$2", },
    { regex: /(.+)Listen to my voice(.+)/, replacement: "$1听我的声音$2", },
    { regex: /(.+)Log money changes(.+)/, replacement: "$1记录货币变动$2", },
    { regex: /(.+)Track BCX activation(.+)/, replacement: "$1追踪 BCX 激活情况$2", },
    { regex: /Force \'(.+)\'/, replacement: "强制 \'$1\'", },
    { regex: /Force \'(.+)\' (Existing BC setting)/, replacement: "强制 \'$1\' (现有的 BC 设置)", },
    { regex: /Info: Currently set role: (.+) → Newly selected role: (.+)/, replacement: "信息: 当前权限级别: $1 → 新的权限级别: $2", },
    { regex: /- View \/ Edit the \'(.+)\' curse -/, replacement: "- 查看 \/ 编辑 \'$1\' 诅咒 -", },
    { regex: /Fetish & Activity Compatibility(.+)/, replacement: "癖好 & 动作 癖好相似度$1", },
    { regex: /Compatibility(.+)/, replacement: "癖好相似度$1", },
    {
        regex: /Fetishes\: (.+)\% \｜ Activities \(You \→ 她\)\: (.+)\% \｜ Activities \(她 → You\)\: (.+)\%/,
        replacement: "癖好相似度: $1% ｜ %动作 (你 → 她): $2% ｜ 动作 (她 → 你): $3%"
    },
    {
        regex: /\(\((.+)'s test punishes (.+) meddling with a sharp jolt\.\)/,
        replacement: "(($1 的测试装置以强烈的电击惩罚她的干扰。)",
    },
    {
        regex: /\(\((.+)'s (.+) tightens around (.+), countering (.+) tampering\.\)/,
        replacement: "(($1 的 $2 紧紧束缚住她，阻止她的干扰。)",
    },
    {
        regex: /\(\((.+)'s test tightens around (.+), countering (.+) tampering\.\)/,
        replacement: "(($1 的测试装置紧紧束缚住她，阻止她的干扰。)",
    },
    {
        regex: /\(\((.+)'s test releases a sedating spray, resisting (.+) meddling, and weakening (.+) muscles\.\)/,
        replacement: "(($1 的测试装置释放出镇静喷雾，抵抗她的干扰，并削弱她的肌肉力量。)",
    },
    {
        regex: /\(\((.+) intones with magical power, using nothing but (.+) voice to cast (.+) on (.+)\.\)/,
        replacement: "(($1 以魔法力量吟唱，仅用她的声音对自己施放了 $3。)",
    },
    {
        regex: /\(\((.+) flinches as the item in (.+) hand is flung into the air\.\)/,
        replacement: "(($1 退缩了一下，手中的物品被抛到了空中。)",
    },
    {
        regex: /\(\((.+)'s (.+) clicks menacingly as it resists (.+) tampering\.\)/,
        replacement: "(($1 的 $2 发出威胁性的咔嗒声，抵抗她的干扰。)",
    },
    {
        regex: /\(\((.+)'s (.+) releases a sedating spray, resisting (.+) meddling, and weakening (.+) muscles\.\)/,
        replacement: "(($1 的 $2 释放出镇静喷雾，抵抗她的干扰，并削弱她的肌肉力量。)",
    },

    
    // MPA Authority 相关
    { 
       regex: /Maya\'s Petplay Additions - (.+)\'s Authority/, 
       replacement: "Maya的宠物玩法扩展 - $1 的权限" 
   },
   { 
       regex: /Notify when others are accessing (.+)\'s settings/, 
       replacement: "当他人访问 $1 的设置时通知" 
   },
   { 
       regex: /Allow (.+) changing her own settings while bound/, 
       replacement: "允许 $1 在被束缚时更改自己的设置" 
   },
   { 
       regex: /Allow (.+) changing the settings of others while bound/, 
       replacement: "允许 $1 在被束缚时更改他人的设置" 
   },
   { 
       regex: /Allow (.+) to change her Authority settings/, 
       replacement: "允许 $1 更改她的权限设置" 
   },
   { 
       regex: /Allow others to change (.+)\'s Authority settings/, 
       replacement: "允许他人更改 $1 的权限设置" 
   },
   { 
       regex: /Allow (.+) to change her Profile settings/, 
       replacement: "允许 $1 更改她的个人资料设置" 
   },
   { 
       regex: /Allow others to change (.+)\'s Profile settings/, 
       replacement: "允许他人更改 $1 的个人资料设置" 
   },
   { 
       regex: /Allow (.+) to change her Clicker settings/, 
       replacement: "允许 $1 更改她的训练器设置" 
   },
   { 
       regex: /Allow others to change (.+)\'s Clicker settings/, 
       replacement: "允许他人更改 $1 的训练器设置" 
   },
   { 
       regex: /Allow (.+) to change her Virtual Pet settings/, 
       replacement: "允许 $1 更改她的虚拟宠物设置" 
   },
   { 
       regex: /Allow others to change (.+)\'s Virtual Pet settings/, 
       replacement: "允许他人更改 $1 的虚拟宠物设置" 
   },
   { 
       regex: /Allow (.+) to change her Virtual Pet Conditions settings/, 
       replacement: "允许 $1 更改她的虚拟宠物状态效果设置" 
   },
   { 
       regex: /Allow others to change (.+)\'s Virtual Pet Conditions settings/, 
       replacement: "允许他人更改 $1 的虚拟宠物状态效果设置" 
   },

   // Profile 相关
   { 
       regex: /Maya\'s Petplay Additions - (.+)\'s Profile/, 
       replacement: "Maya的宠物玩法扩展 - $1 的个人资料" 
   },

   // Clicker 相关
   { 
       regex: /Maya\'s Petplay Additions - (.+)\'s Clicker/, 
       replacement: "Maya的宠物玩法扩展 - $1 的训练器" 
   },

   // Virtual Pet 相关
   { 
       regex: /Maya\'s Petplay Additions - (.+)\'s Virtual Pet/, 
       replacement: "Maya的宠物玩法扩展 - $1 的虚拟宠物" 
   },
   { 
       regex: /Maya\'s Petplay Additions - (.+)\'s Virtual Pet Hud/, 
       replacement: "Maya的宠物玩法扩展 - $1 的虚拟宠物状态显示" 
   },
   { 
       regex: /Maya\'s Petplay Additions - (.+)\'s Virtual Pet Conditions/, 
       replacement: "Maya的宠物玩法扩展 - $1 的虚拟宠物状态效果" 
   }
];

export { translationsDTF, translationsDTF2, act_dialogs, pronouns };
