const translationsDTF = [
    {
        regex: /Failed to get role data from (.+)\. This can be caused by missing permission to interact with their items\, the user having left the room meanwhile\, or the user not having the BC tab focused\./,
        replacement:
            "无法从 $1 获取角色数据. 这可能是由于缺少与其物品交互的权限, 用户已经离开房间, 或用户没有将 BC 标签页聚焦.",
    },
    { regex: / Global\: Configuration for (.+) \-/, replacement: "- 全局: $1 的配置 -" },
    { regex: /\- Miscellaneous\: Configuration for (.+) \-/, replacement: "- 杂项: $1 的配置 -" },
    { regex: /Dear (.+),/, replacement: "亲爱的 $1," },
    { regex: / Miscellaneous\: Configuration for (.+) \-/, replacement: "- 杂项: $1 的配置 -" },
    {
        regex: /\- Export \/ Import of Behaviour Log \- Configuration on (.+) \-/,
        replacement: "- 导出/导入 行为日志 - $1 上的配置 -",
    },
    {
        regex: / Export \/ Import of BCX module configurations on (.+) \-/,
        replacement: "- 导出 / 导入 $1 的BCX模块配置 -",
    },
    {
        regex: / Relationships\: Custom names shown \(only\) to (.+) \-/,
        replacement: "- 关系: 自定义名称(仅)显示给 $1 -",
    },
    {
        regex: /\- Export \/ Import of Authority \- Permissions on (.+) \-/,
        replacement: "- 导出 / 导入 权限 - $1 的权限 -",
    },
    {
        regex: /\- Export \/ Import of Commands \- Limits on (.+) \-/,
        replacement: "- 导出 / 导入 指令 - 对 $1 的限制 - ",
    },
    { regex: /\- Export \/ Import of Curses \- Limits on (.+) \-/, replacement: "- 导出 / 导入 诅咒 - 限制 $1 - " },
    { regex: /\- Export \/ Import of Rules \- Limits on (.+) \-/, replacement: "- 导出 / 导入 规则- $1 限制 -" },
    { regex: /\- Export \/ Import of Relationships on (.+) \-/, replacement: "- 导出 / 导入 $1 上的关系 -" },
    { regex: /\- Commands\: List all commands for (.+) \-/, replacement: "- 指令: 列出 $1 的所有指令 -" },
    { regex: / Authority\: Permission Settings for (.+) \-/, replacement: "- 权限: $1 的权限设置 -" },
    { regex: /\- Curses\: All active curses on (.+) \-/, replacement: "- 诅咒: 对$1 的所有有效诅咒 -" },
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
        regex: /Info\: Currently set role\: Friend \→ Newly selected role\: (.+)/,
        replacement: "信息: 当前设置的角色: 好友 → 新选择的角色: $1",
    },
    {
        regex: /Info\: Currently set role\: Public \→ Newly selected role\: (.+)/,
        replacement: "信息: 当前设置的角色: 公共 → 新选择的角色: $1",
    },
    {
        regex: /Info\: Currently set role\: Whitelist \→ Newly selected role\: (.+)/,
        replacement: "信息: 当前设置的角色: 白名单 → 新选择的角色: $1",
    },
    {
        regex: /Info\: Currently set role\: Mistress \→ Newly selected role\: (.+)/,
        replacement: "信息: 当前设置的角色: 女主人 → 新选择的角色: $1",
    },
    {
        regex: /Info\: Currently set role\: Lover \→ Newly selected role\: (.+)/,
        replacement: "信息: 当前设置的角色: 恋人 → 新选择的角色: $1",
    },
    {
        regex: /Info\: Currently set role\: Owner \→ Newly selected role\: (.+)/,
        replacement: "信息: 当前设置的角色: 所有者 → 新选择的角色: $1",
    },
    {
        regex: /Info\: Currently set role\: Clubowner \→ Newly selected role\: (.+)/,
        replacement: "信息: 当前设置的角色: 俱乐部主人 → 新选择的角色: $1",
    },
    {
        regex: /Info\: Currently set role\: (.+) \→ Newly selected role\: (.+)/,
        replacement: "信息: 当前设置的角色: $1 → 新选择的角色: $1",
    },
    {
        regex: /Info\: Currently set role\: (.+) \→ Newly selected role\: Clubowner/,
        replacement: "信息: 当前设置的角色: $1 → 新选择的角色: 俱乐部主人",
    },
    {
        regex: /Info\: Currently set role\: (.+) \→ Newly selected role\: Owner/,
        replacement: "信息: 当前设置的角色: $1 → 新选择的角色: 所有者",
    },
    {
        regex: /Info\: Currently set role\: (.+) \→ Newly selected role\: Lover/,
        replacement: "信息: 当前设置的角色: $1 → 新选择的角色: 恋人",
    },
    {
        regex: /Info\: Currently set role\: (.+) \→ Newly selected role\: Mistress/,
        replacement: "信息: 当前设置的角色: $1 → 新选择的角色: 女主人",
    },
    {
        regex: /Info\: Currently set role\: (.+) \→ Newly selected role\: Whitelist/,
        replacement: "信息: 当前设置的角色: $1 → 新选择的角色: 白名单",
    },
    {
        regex: /Info\: Currently set role\: (.+) \→ Newly selected role\: Friend/,
        replacement: "信息: 当前设置的角色: $1 → 新选择的角色: 好友",
    },
    {
        regex: /Info\: Currently set role\: (.+) \→ Newly selected role\: Public/,
        replacement: "信息: 当前设置的角色: $1 → 新选择的角色: 公共",
    },
    {
        regex: /Forbid using remotes on self \((.+) using one on (.+)\)/,
        replacement: "禁止自我使用遥控器($1 在 $2身上使用)",
    },
    {
        regex: /Forbid using keys on self \((.+) using one on (.+)\)/,
        replacement: "禁止自我使用钥匙($1 在 $2身上使用)",
    },
    {
        regex: /Forbid picking locks on self \((.+) picking one on (.+)\)/,
        replacement: "禁止自我撬锁($1 在 $2身上使用)",
    },
    { regex: /Forbid using locks on self \((.+) using one on (.+)\)/, replacement: "禁止自我使用锁($1 在 $2身上使用)" },
    {
        regex: /Forbid wardrobe use on self \((.+) using (.+)'s wardrobe\)/,
        replacement: "禁止自我使用衣柜($1 使用 $2 的衣柜)",
    },
    {
        regex: /Forbid freeing self \((.+) removing any items from (.+)'s body\)/,
        replacement: "禁止解救自己($1 从 $2 身上移除任何物品)",
    },
    {
        regex: /Prevent using BCX permissions \((.+) using her permissions for her own BCX\, with some exceptions\)/,
        replacement: "禁止使用BCX权限($1 使用她自己BCX的权限,有一些例外)",
    },
    { regex: /Prevent changing own emoticon \(for just (.+)\)/, replacement: "防止更改自己的表情符号(仅限 $1)" },
    {
        regex: /Force\-hide UI elements \(e\.g\.\, icons\, bars\, or names\)/,
        replacement: "强制隐藏UI元素(例如图标、条形、或名称)",
    },
    {
        regex: /Sensory deprivation\: Sound \(impacts (.+)'s hearing\; adjustable\)/,
        replacement: "感官剥夺: 听觉(影响 $1 的听觉；可调节)",
    },
    {
        regex: /Hearing whitelist \(of members whom (.+) can always understand\)/,
        replacement: "听觉白名单($1 始终能够理解的成员)",
    },
    {
        regex: /Sensory deprivation: Sight \(impacts (.+)'s sight\; adjustable\)/,
        replacement: "感官剥夺: 视觉(影响 $1 的视觉；可调节)",
    },
    {
        regex: /Seeing whitelist \(of members whom (.+) can always see\)/,
        replacement: "视觉白名单($1 始终能够看到的成员)",
    },
    {
        regex: /Control profile online description \(directly sets (.+)'s description\)/,
        replacement: "控制在线描述资料(直接设置 $1 的描述)",
    },
    { regex: /Control nickname \(directly sets (.+)'s nickname\)/, replacement: "控制昵称(直接设置 $1 的昵称)" },
    {
        regex: /Ready to be summoned \(leash (.+) from anywhere using a beep with message\)/,
        replacement: "准备被召唤(随时随地使用蜂鸣消息牵引 $1 )",
    },
    {
        regex: /Allow changing the whole appearance \(of (.+) - for the defined roles\)/,
        replacement: "允许更改整体外观(对于定义的角色更改 $1 的外观)",
    },
    {
        regex: /Enforce faltering speech \(an enhanced studder effect is added to (.+)'s chat texts\)/,
        replacement: "强制结巴的言语(对 $1 的聊天文本添加了增强的结巴效果)",
    },
    {
        regex: /Force garbled speech \(force (.+) to talk as if they were gagged\)/,
        replacement: "强制混乱言语(强制 $1 说话,就像他们被堵住一样",
    },
    { regex: /Forbid going afk \(logs whenever (.+) is inactive\)/, replacement: "禁止挂机(记录 $1 无操作时)" },
    {
        regex: /Track rule effect time \(counts the time this rule's trigger conditions were fulfilled\)/,
        replacement: "追踪规则生效时间(计算此规则的触发条件得到满足的时间)",
    },
    {
        regex: /Listen to my voice \(regularly show configurable sentences to (.+)\)/,
        replacement: "倾听我的声音(定期向 $1 展示可配置的句子)",
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
    { regex: /Send to asylum \(Lock (.+) into the asylum\)/, replacement: "送入收容所 (锁定 $1 进入收容所)" },
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
        replacement: "此规则防止 $1 将设置的最低角色或更高角色的角色添加到她的束缚俱乐部黑名单和幽灵列表中.",
    },
    {
        regex: /This rule prevents (.+) from adding characters with a role lower than a BCX Mistress to their bondage club whitelist\./,
        replacement: "此规则防止 $1 将低于 BCX Mistress 的角色的角色添加到她的绑缚俱乐部白名单中.",
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
            "此规则禁$1 在俱乐部的主大厅中使用女仆的帮助来解开约束. 建议与规则结合使用: '强制'被约束时无法进入单人房间''(现有的 BC 设置)', 以防止其他房间的 NPC 提供帮助.",
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
            "此规则禁 $1 从自己的身体上取下任何物品. 其他人仍然可以取下它们. 该规则具有一个切换按钮, 可以选择仍然允许取下原始资产制作者给予低难度评分的物品, 例如手持物品、毛绒玩具等. 这意味着赋予物品的自定义属性(例如“诱饵”)并未计入其中.",
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
            "此规则阻 $1 查看自己的性唤起仪表, 即使它处于活动和工作状态. 这意味着对于她来说, 当性高潮(快感事件)发生时, 这将是一个惊喜. 如果俱乐部设置允许, 不影响其他角色能够看到仪表.",
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
            "此规则将 $1 的基础游戏或 BCX 设置“重新登录时保留所有约束”强制设置为配置的值, 并防止她更改它. 还有一个选项, 可以将设置恢复到规则更改之前的状态.  恢复发生在规则变得不活跃时(例如通过切换或不满足的触发条件)或在删除规则时.",
    },
    {
        regex: /This rule forces (.+)\'s base game or BCX setting \'Garble chatroom names and descriptions while blind\' to the configured value and prevents her from changing it\. There is also an option to restore the setting to the state it was in before the rule changed it\. The restoration happens either when the rule becomes inactive \(for instance through toggle or unfulfilled trigger conditions\) or when it is removed\./,
        replacement:
            "此规则将 $1 的基础游戏或 BCX 设置“在失明时混淆聊天室名称和描述”强制设置为可配置的值, 并防止她更改它. 还有一个选项, 可以将设置恢复到规则更改之前的状态.  恢复发生在规则变得不活跃时(例如通过切换或不满足的触发条件)或在删除规则时.",
    },
    {
        regex: /This rule forces (.+)\'s base game setting \'Sensory deprivation setting\' to configurable value and prevents her from changing it\./,
        replacement: "此规则将 $1 的基础游戏设置“感官剥夺设置”强制设置为可配置的值, 并防止她更改它.",
    },
    {
        regex: /This rule forces (.+)\'s base game or BCX setting \'Prevent others from changing cosplay items\' to the configured value and prevents her from changing it\. There is also an option to restore the setting to the state it was in before the rule changed it\. The restoration happens either when the rule becomes inactive \(for instance through toggle or unfulfilled trigger conditions\) or when it is removed\./,
        replacement:
            "此规则将 $1 的基础游戏或 BCX 设置“防止其他人更改角色扮演服饰项目”强制设置为可配置的值, 并防止她更改它. 还有一个选项, 可以将设置恢复到规则更改之前的状态.  恢复发生在规则变得不活跃时(例如通过切换或不满足的触发条件)或在删除规则时.",
    },
    {
        regex: /This rule forces (.+)\'s base game or BCX setting \'Allow safeword use\' to the configured value and prevents her from changing it\. There is also an option to restore the setting to the state it was in before the rule changed it\. The restoration happens either when the rule becomes inactive \(for instance through toggle or unfulfilled trigger conditions\) or when it is removed\./,
        replacement:
            "此规则将 $1 的基础游戏或 BCX 设置“允许使用安全词”强制设置为可配置的值, 并防止她更改它. 还有一个选项, 可以将设置恢复到规则更改之前的状态.  恢复发生在规则变得不活跃时(例如通过切换或不满足的触发条件)或在删除规则时.",
    },
    {
        regex: /This rule forces (.+)\'s base game or BCX setting \'Cannot enter single\-player rooms when restrained\' to the configured value and prevents her from changing it\. There is also an option to restore the setting to the state it was in before the rule changed it\. The restoration happens either when the rule becomes inactive \(for instance through toggle or unfulfilled trigger conditions\) or when it is removed\./,
        replacement:
            "此规则将 $1 的基础游戏或 BCX 设置“受限时不能进入单人房间”强制设置为可配置的值, 并防止她更改它. 还有一个选项, 可以将设置恢复到规则更改之前的状态.  恢复发生在规则变得不活跃时(例如通过切换或不满足的触发条件)或在删除规则时.",
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
        replacement: "此规则观察 $1, 如果至少有一次在未激活 BCX 的情况下进入俱乐部, 则将其记录为违规.",
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
            "此规则禁 $1 在聊天中使用特定的单词. 禁用单词的列表可以进行配置. 检查不区分大小写(禁用 'no' 也会禁用 'NO' 和 'No'). 不影响表情和 OOC 文本, 但会影响私语.",
    },
    {
        regex: /This rule forbids (.+) to send a message to all people inside a chat room\. Does not affect whispers or emotes\, but does affect OOC\./,
        replacement: "此规则禁 $1 向聊天室内的所有人发送消息. 不影响私语或表情, 但会影响 OOC.",
    },
    { regex: /(.+) can only say the custom name/, replacement: "$1 只能说出定制名称" },
    {
        regex: /This rule can set the time (.+) needs to leave the current room\, when items or a rule force her to leave it slowly\. The time can be set between 1 and 600 seconds \(10 mins\)\./,
        replacement:
            "此规则可以设置 $1 在被物品或规则迫使她慢慢离开当前房间时需要的时间. 时间可以在 1 到 600 秒(10 分钟)之间设置.",
    },
    {
        regex: /This rule forces (.+) to switch rooms from anywhere in the club to the chat room of the summoner after 15 seconds\. It works by sending a beep message with the set text or simply the word \'summon\' to (.+)\. Members who are allowed to summon (.+) can be set\. NOTES\: (.+) can always be summoned no matter if she has a leash or is prevented from leaving the room \(ignoring restraints or locked rooms\)\. However\, if the target room is full or locked\, she will end up in the lobby\. Summoning will not work if the room name is not included with the beep message\!/,
        replacement:
            "此规则强制 $1 从俱乐部的任何地方切换到召唤者的聊天室, 时间为 15 秒. 它通过向 $2 发送一个带有设置文本或简单地包含单词 '召唤' 的蜂鸣消息来工作. 允许召唤 $3 的成员可以被设置. 注: 无论 $4 是否被束缚或禁止离开房间(忽略限制或锁定的房间), 她总是可以被召唤的. 但是, 如果目标房间已满或已锁定, 她将会进入大堂. 如果蜂鸣消息中不包含房间名, 召唤将无效!",
    },
    {
        regex: /This rule forbids (.+) to enter all rooms, that are not on an editable whitelist of still allowed ones\. NOTE\: As safety measure this rule is not in effect while the list is empty\. TIP\: This rule can be combined with the rule \"Forbid creating new rooms\"\./,
        replacement:
            "此规则禁 $1 进入未在可编辑的白名单上的所有房间. 注意: 作为安全措施, 此规则在列表为空时不生效. 提示: 此规则可以与规则 '禁止创建新房间' 结合使用.",
    },
    {
        regex: /Here you switch the rule on\/off\, set a timer for activating\/deactivating \/ deleting the rule and define when it can trigger, such as either always or based on where the player is and with whom\.The small green\/red bars next to the checkboxes indicate whether a condition is true at present or not and the big bar whether this means that the rule is in effect\, if active\. Depending on the rule\, you can either enforce its effect\, log all violations\, or both at the same time\. Lastly on the bottom right\, you can set whether the trigger conditions of this rule should follow the global rules config or not\./,
        replacement:
            "在此, 您可以切换规则的开/关状态, 设置激活/停用/删除规则的计时器, 并定义它何时触发, 例如始终或基于玩家的位置和与谁在一起. 复选框旁边的小绿色/红色条指示条件当前是否为真, 大条指示是否在生效(如果激活). 具体取决于规则, 您可以强制执行其效果、记录所有违规行为或同时执行两者. 最后, 在右下角, 您可以设置此规则的触发条件是否应遵循全局规则配置.",
    },
    {
        regex: /This rule forces (.+) to talk as if they were gagged\, automatically garbling all of their speech\. This rule does not affect OOC\. This rule only affects whispers if the rule \"Garble whispers while gagged\" is also in effect\./,
        replacement:
            "此规则强制 $1 以口球的方式交谈, 自动压制她的所有言论. 此规则不影响 OOC. 仅当规则 '口球时扭曲私语' 也生效时, 此规则才会影响私语.",
    },
    { regex: /(.+) has too much willpower to let you in\.\.\./, replacement: "$1 拥有太多意志力不让你进入..." },
    {
        regex: /You must be the owner to purchase this module for (.+)\.\.\./,
        replacement: "你必须是 $1 的所有者才能购买此模块...",
    },

    // { regex: /-/, replacement: "" },
];

const act_dialogs = [
    {
        regex: /(.+) moans uncontrollably as (.+)'s drug takes effect\./,
        replacement: "$1在$2的药物生效时无法控制地呻吟.",
    },
    {
        regex: /(.+) quivers as (.+) body is flooded with (.+)'s aphrodisiac\./,
        replacement: "$1在$3的催情剂涌入$2的身体时颤抖不已.",
    },
    {
        regex: /(.+)'s eyes roll back as a wave of pleasure washes over (.+) body\./,
        replacement: "$1的眼睛翻白,一股快感涌过$2的身体.",
    },
    {
        regex: /(.+) sighs as a cool relaxing calm glides through (.+) body, fighting to keep (.+) eyes open\./,
        replacement: "$1叹息着,一股凉爽、放松的平静感在$2的身体中流动,努力保持$3的眼睛睁开.",
    },
    {
        regex: /(.+)'s muscles relax as (.+)'s sedative courses through (.+) body/,
        replacement: "$1的肌肉在$2的镇静剂流过$3的身体时放松了.",
    },
    {
        regex: /(.+) fights to stay conscious against the relentless weight of (.+)'s drug\./,
        replacement: "$1努力保持清醒, 抵抗着$2的药物的无情压力.",
    },
    {
        regex: /(.+)'s eyes droop as (.+) fights to stay conscious against the cool, welcoming weight of (.+)'s drug\./,
        replacement: "$1的眼睛低垂, $2在抗拒着$3的药物的凉爽、欢迎的压力, 努力保持清醒.",
    },
    {
        regex: /(.+) moans thankfully as (.+)'s medicine heals (.+)\./,
        replacement: "$1感激地呻吟, $2的药物正在治愈$3.",
    },
    {
        regex: /(.+)'s body glows slightly as (.+)'s cure washes warmly over (.+)\./,
        replacement: "$1的身体微微发光, $2的治疗温暖地覆盖在$3身上.",
    },
    {
        regex: /(.+)'s drug rushes warmly through (.+)'s body, curing what ails (.+)\./,
        replacement: "$1的药物温暖地流过$2的身体, 治愈了$3的疾病.",
    },
    {
        regex: /(.+) gulps and swallows (.+)'s drink, a cool relaxing feeling starting to spread through (.+) body\./,
        replacement: "$1啜饮着$2的饮料, 一种凉爽而放松的感觉开始在$3的身体中蔓延.",
    },
    {
        regex: /(.+) sighs as a cool relaxing calm glides down (.+) throat, fighting to keep (.+) eyes open\./,
        replacement: "$1叹息着, 一股凉爽而放松的平静滑过$2的喉咙, 努力保持着$3的眼睛睁开.",
    },
    {
        regex: /(.+)'s muscles relax as (.+)'s sedative pours down (.+) throat and starts to take effect\./,
        replacement: "$1的肌肉在$2的镇定剂倾入$3的喉咙后放松, 开始产生作用.",
    },
    {
        regex: /(.+)'s eyes droop as (.+) fights to stay conscious against the cool, welcoming weight of (.+)'s drug\./,
        replacement: "$1的眼睛开始闭合, $2努力保持清醒, 抗拒着$3的药物带来的凉爽而欢迎的沉重感.",
    },
    {
        regex: /(.+) whimpers and struggles to keep control of (.+) mind\./,
        replacement: "$1呜咽着, 挣扎着保持对$2心灵的控制.",
    },
    {
        regex: /(.+) gasps weakly as (.+)'s drug slowly erases (.+) free will\./,
        replacement: "$1虚弱地喘息着, 随着$2的药物慢慢地抹去$3的自由意志.",
    },
    {
        regex: /(.+)'s eyes struggle to focus as (.+)'s drug makes (.+) more suggestible\./,
        replacement: "$1 的眼睛努力聚焦, $2的药物使得$3更易受建议.",
    },
    {
        regex: /(.+) starts to drift dreamily as they swallow (.+)'s drink\./,
        replacement: "$1开始梦幻般地漂浮, 当他们咽下$2的饮料.",
    },
    {
        regex: /(.+) gasps weakly and starts to lose focus as (.+)'s drug warms (.+) comfortably\./,
        replacement: "$1虚弱地喘息着, 开始失去焦点, $2的药物温暖地包裹着$3.",
    },
    {
        regex: /(.+)'s eyes flutter and defocus as (.+)'s drink slides warmly down (.+) throat\./,
        replacement: "$1的眼睛闪烁, 变得模糊不清, 当$2的饮料温暖地滑过$3的喉咙时.",
    },
    {
        regex: /(.+) gulps thankfully as (.+)'s medicine slowly heals (.+)\./,
        replacement: "$1感激地大口地喝着, 当$2的药物慢慢治愈了$3.",
    },
    {
        regex: /(.+)'s body glows slightly as (.+)'s cure glides warmly through (.+)\./,
        replacement: "$1的身体微微发光, 当$2的药物温暖地流过$3时.",
    },
    {
        regex: /(.+)'s antidote slowly washes through (.+)'s body, curing what ails (.+)\./,
        replacement: "$1的解毒药慢慢地流过$2的身体, 治愈了$3的病痛.",
    },
    {
        regex: /(.+)'s body goes limp as (.+) mind empties and (.+) awaits a command\./,
        replacement: "$1的身体变得无力, $2的头脑变得空虚, $3等待着一个命令.",
    },
    {
        regex: /(.+)'s eyes roll back as a wave of pleasure emanates from (.+) belly\./,
        replacement: "$1的眼睛翻白, 当一股快乐的感觉从$2的肚子中散发出来.",
    },
    {
        regex: /(.+)'s eyes move dreamily under (.+) closed eyelids\.\.\./,
        replacement: "$1的眼睛在闭合的眼皮下梦幻般地移动着...",
    },
    { regex: /(.+) exhales slowly, fully relaxed\.\.\./, replacement: "$1缓缓地呼出一口气, 完全放松..." },
    { regex: /(.+)'s muscles twitch weakly in (.+) sleep\.\.\./, replacement: "$1的肌肉在睡眠中微弱地抽搐着..." },
    { regex: /(.+) moans softly and relaxes\.\.\./, replacement: "$1轻轻地呻吟着并放松着..." },
    { regex: /(.+) fires a net wildly\./, replacement: "$1疯狂地射出一张网." },
    { regex: /(.+) fires at themselves point blank\./, replacement: "$1在零距离处射击自己." },
    { regex: /(.+) fires a net at (.+)\./, replacement: "$1向$2射出一张网." },
    {
        regex: /(.+)'s mask whirs and shudders as it reloads its own supply and continues emitting\./,
        replacement: "$1的面具嗡嗡作响, 颤抖着重新装载自己的供应并继续释放.",
    },
    {
        regex: /(.+)'s mask hums menacingly as it holds its supply in reserve\./,
        replacement: "$1的面具威胁地嗡嗡作响, 将其供应保留着.",
    },
    { regex: /(.+)'s mask clicks and turns itself back on\./, replacement: "$1的面具发出咔嚓声, 重新启动." },
    {
        regex: /(.+) reloads (.+)'s mask and turns it back on, pumping gas back into (.+) lungs\./,
        replacement: "$1重新装载了$2的面具并重新启动, 将气体注入$3的肺部.",
    },
    {
        regex: /(.+) switches on (.+)'s mask, filling (.+) lungs\./,
        replacement: "$1打开了$2的面具,将气体填满$3的肺部.",
    },
    {
        regex: /(.+) switches off (.+)'s mask, halting the flow of gas\./,
        replacement: "$1关闭了$2的面具,停止气体的流动.",
    },
    {
        regex: /(.+)'s eyes widen as (.+) mask activates, slowly filling (.+) lungs with its drug\./,
        replacement: "$1的眼睛睁大, $2面具启动, 缓慢地将药物填满$3的肺部.",
    },
    {
        regex: /(.+) takes a deep breath of cool, clean air as (.+) mask is removed\./,
        replacement: "$1深吸一口凉爽、清新的空气, 当$2面具被移除时.",
    },
    {
        regex: /(.+)'s mask hisses quietly as it runs out of its supply of gas\./,
        replacement: "$1的面具轻轻地嘶嘶作响, 它的气体用尽了.",
    },
    {
        regex: /(.+) groans helplessly as (.+) headset manipulates (.+) mind\./,
        replacement: "$1无助地呻吟着, $2耳机操控着$3的思维.",
    },
    {
        regex: /(.+) struggles to keep (.+) focus through the overwhelming influence of (.+) headset\./,
        replacement: "$1挣扎着保持$2的专注, 尽管$3耳机的影响是压倒性的.",
    },
    {
        regex: /(.+) whimpers as (.+) headset erases (.+) own mind relentlessly\./,
        replacement: "$1抽泣着, $2耳机无情地抹去了$3的思维.",
    },
    {
        regex: /(.+)'s muscles relax limply as (.+) takes a deep breath through (.+) mask\./,
        replacement: "$1的肌肉变得无力松弛, 当$2通过$3的面具深吸一口气.",
    },
    { regex: /(.+)'s eyes flutter weakly as (.+) inhales\./, replacement: "$1的眼睛微弱地眨动着, 当$2吸气时." },
    {
        regex: /(.+) struggles to keep (.+) drooping eyes open as (.+) mask continues to emit its sedative gas\./,
        replacement: "$1挣扎着保持$2沉重的眼睑睁开, $3的面具继续释放着镇定气体.",
    },
    {
        regex: /(.+) groans helplessly as (.+) mask sends another dose into (.+) lungs\./,
        replacement: "$1无助地呻吟着, $2的面具又向$3的肺部注入了一剂药物.",
    },
    {
        regex: /(.+) struggles to keep (.+) focus through the suggestible haze caused by (.+) mask\./,
        replacement: "$1挣扎着保持$2的专注, 尽管$3的面具造成的易受建议的阴霾.",
    },
    {
        regex: /(.+) whimpers as (.+) mask's drug pushes (.+) further out of (.+) own mind\./,
        replacement: "$1抽泣着, $2的面具的药物将$3推得更远离$4自己的思维.",
    },
    {
        regex: /(.+)'s spine tingles as (.+) takes a deep breath through (.+) mask\./,
        replacement: "$1的脊柱一阵刺痛, 当$2通过$3的面具深吸一口气.",
    },
    { regex: /(.+) lets out a muffled moan as (.+) inhales\./, replacement: "$1发出一声闷哼, 当$2吸气时." },
    {
        regex: /(.+)'s sensitive areas burn hot as (.+) breathes through (.+) mask\./,
        replacement: "$1敏感的部位在$2通过$3的面具呼吸时烧得滚烫.",
    },
    {
        regex: /(.+) sighs with relief as (.+) takes a deep gulp of healing mist\./,
        replacement: "$1欣慰地叹了口气, 当$2深吸一口治愈的薄雾.",
    },
    {
        regex: /(.+) feels a tingle across (.+) skin as (.+) mask heals them\./,
        replacement: "$1感到皮肤上一阵刺痛, 当$2的面具治愈了他们.",
    },
    {
        regex: /(.+) lets out a quiet moan as (.+) mask releases a healing mist into her lungs\./,
        replacement: "$1发出一声安静的呻吟, 当$2的面具释放出治愈的薄雾进入她的肺部.",
    },
    { regex: /(.+)'s whimpers, (.+) tongue held tightly\./, replacement: "$1呜咽, $2的舌头被紧紧地抓住." },
    { regex: /(.+) strains, trying to pull (.+) tongue free\./, replacement: "$1用力, 试图把$2的舌头拉出来." },
    { regex: /(.+) starts to drool, (.+) tongue held fast\./, replacement: "$1开始流口水, $2的舌头被牢牢地固定住." },
    { regex: /(.+) wiggles (.+) nose\./, replacement: "$1扭动$2的鼻子." },
    { regex: /(.+) wiggles (.+) nose with a small frown\./, replacement: "$1皱着眉头扭动$2的鼻子." },
    { regex: /(.+) sneezes in surprise\./, replacement: "$1惊讶地打了个喷嚏." },
    { regex: /(.+) looks crosseyed at (.+) nose\./, replacement: "$1斜视着$2的鼻子." },
    { regex: /(.+) wiggles (.+) nose with a squeak\./, replacement: "$1发出吱吱声, 扭动$2的鼻子." },
    { regex: /(.+) meeps\!/, replacement: "$1发出吱吱声!" },
    { regex: /(.+) swats at (.+)'s hand\./, replacement: "$1朝$2的手拍打." },
    {
        regex: /(.+) covers (.+) nose protectively, squinting at (.+)\./,
        replacement: "$1保护地捂着$2的鼻子, 斜着眼睛看着$3.",
    },
    { regex: /(.+) snatches (.+)'s booping finger\./, replacement: "$1抢夺$2戳戳的手指." },
    { regex: /(.+)'s nose overloads and shuts down\./, replacement: "$1的鼻子超载并关闭." },
    { regex: /(.+) struggles in (.+) bindings, huffing\./, replacement: "$1在$2约束中挣扎, 喘气." },
    { regex: /(.+) frowns and squirms in (.+) bindings\./, replacement: "$1在$2约束中皱眉挣扎." },
    { regex: /(.+) whimpers in (.+) bondage\./, replacement: "$1在$2束缚中呜咽." },
    { regex: /(.+) groans helplessly\./, replacement: "$1无助地呻吟." },
    { regex: /(.+) whines and wiggles in (.+) bondage\./, replacement: "$1在$2约束中呜咽和扭动." },
    { regex: /(.+)'s mouth moves silently\./, replacement: "$1的嘴无声地动着." },
    { regex: /(.+)'s mouth moves without a sound\./, replacement: "$1的嘴无声地动着." },
    { regex: /(.+)'s whimpers inaudibly, unable to breathe\./, replacement: "$1的呜咽无法听到, 无法呼吸." },
    { regex: /(.+) groans and convulses\./, replacement: "$1呻吟并抽搐." },
    { regex: /(.+) shudders as (.+) lungs burn\./, replacement: "$1当$2的肺燃烧时颤抖." },
    { regex: /(.+) gasps and gulps for air\./, replacement: "$1喘气并拼命吞咽空气." },
    { regex: /(.+)'s lungs expand hungrily as (.+) gasps in air\./, replacement: "$1的肺急切地扩张, 当$2喘着气." },
    { regex: /(.+) gasps for air with a whimper\./, replacement: "$1呜咽着喘气." },
    { regex: /(.+) coughs as (.+) collar pushes against (.+) throat\./, replacement: "$1在$2项圈顶向$3喉咙时咳嗽." },
    {
        regex: /(.+) gulps as (.+) feels the tight collar around (.+) neck\./,
        replacement: "$1感到$2紧贴在$3脖子上的紧领, gulp了一口气.",
    },
    { regex: /(.+) shifts nervously in (.+) tight collar\./, replacement: "$1在$2紧领中紧张地转动." },
    {
        regex: /(.+) trembles, very conscious of the tight collar around (.+) neck\./,
        replacement: "$1颤抖着, 非常意识到紧贴在$2脖子上的紧领.",
    },
    { regex: /(.+) huffs uncomfortably in (.+) tight collar\./, replacement: "$1在$2紧领中不舒服地咕噜作响." },
    {
        regex: /(.+) whimpers pleadingly as (.+) struggles to take a full breath\./,
        replacement: "$1恳求地呜咽, 当$2努力吸满一口气.",
    },
    { regex: /(.+) chokes against (.+) collar, moaning softly\./, replacement: "$1在$2项圈上窒息, 轻声呻吟." },
    {
        regex: /(.+)'s eyes flutter weakly as (.+) collar presses into (.+) neck\./,
        replacement: "$1的眼睛微弱地眨动, 当$2项圈压在$3脖子上时.",
    },
    {
        regex: /(.+) tries to focus on breathing, each inhale an effort in (.+) collar\./,
        replacement: "$1试着专注于呼吸, 在$2项圈中每一次吸气都是一种努力.",
    },
    { regex: /(.+) splutters and chokes, struggling to breathe\./, replacement: "$1咕噜作响并窒息, 挣扎着呼吸." },
    { regex: /(.+) grunts and moans, straining to breathe\./, replacement: "$1呻吟着并哼哼, 努力呼吸." },
    {
        regex: /(.+)'s eyes have trouble focusing, as (.+) chokes and gets lightheaded\./,
        replacement: "$1的眼睛难以聚焦, 因为$2窒息并感到头晕.",
    },
    {
        regex: /(.+)'s eyes flutter as (.+) fights to keep control of (.+) senses\.\.\./,
        replacement: "$1的眼睛飘动, 因为$2努力保持对$3感觉的控制.",
    },
    { regex: /(.+) whimpers and struggles to stay awake\.\.\./, replacement: "$1呜咽着, 挣扎着保持清醒..." },
    {
        regex: /(.+) can feel (.+) eyelids grow heavy as (.+) drifts on the edge of trance\.\.\./,
        replacement: "$1能感觉到$2眼皮变得沉重, 因为$3在恍惚边缘漂流...",
    },
    {
        regex: /(.+) lets out a low moan as (.+) muscles relax and (.+) starts to drop\.\.\./,
        replacement: "$1低声呻吟, 当$2肌肉放松时, $3开始下垂...",
    },
    {
        regex: /(.+)'s eyes flutter as (.+) fights to keep them open\.\.\./,
        replacement: "$1的眼睛飘动, 因为$2努力保持它们睁开...",
    },
    { regex: /(.+) yawns and struggles to stay awake\.\.\./, replacement: "$1打哈欠, 挣扎着保持清醒..." },
    {
        regex: /(.+) can feel (.+) eyelids grow heavy as (.+) drifts on the edge of sleep\.\.\./,
        replacement: "$1能感觉到$2眼皮变得沉重, 因为$3在睡眠边缘漂流...",
    },
    {
        regex: /(.+) takes a deep, relaxing breath as (.+) muscles relax and (.+) eyes start to droop\.\.\./,
        replacement: "$1深深地吸了一口放松的气息, 当$2肌肉放松, $3眼睛开始下垂...",
    },
    {
        regex: /(.+)'s eyes move dreamily under (.+) closed eyelids\.\.\./,
        replacement: "$1的眼睛在$2闭合的眼睑下梦幻般地移动...",
    },
    { regex: /(.+) takes another deep breath through (.+) gag\.\.\./, replacement: "$1通过$2口饰再次深呼吸..." },
    { regex: /(.+)'s muscles twitch weakly in (.+) sleep\.\.\./, replacement: "$1的肌肉在$2睡眠中微弱抽动..." },
    { regex: /(.+) moans softly and relaxes\.\.\./, replacement: "$1轻声呻吟并放松..." },
    { regex: /(.+)'s whimpers, (.+) tongue held tightly\./, replacement: "$1的呜咽声, $2舌头被牢牢地固定." },
    { regex: /(.+) strains, trying to pull (.+) tongue free\./, replacement: "$1用力, 试图把$2舌头拉出来." },
    { regex: /(.+) starts to drool, (.+) tongue held fast\./, replacement: "$1开始流口水, $2舌头被牢牢固定." },
    {
        regex: /(.+) barely trembles, unable to move (.+) mouth or make a sound\.\.\./,
        replacement: "$1几乎不发抖, 无法移动$2嘴巴或发出声音...",
    },
    {
        regex: /(.+)'s eyes plead helplessly as (.+) muscles refuse to obey\.\.\./,
        replacement: "$1的眼睛无助地乞求, 当$2肌肉拒绝服从...",
    },
    {
        regex: /(.+) manages to muster a quiet whimper, (.+) body held fast\.\.\./,
        replacement: "$1设法发出了一声轻柔的呜咽, $2身体被牢牢固定...",
    },
    {
        regex: /(.+)'s eyes widen as they try to speak without success\.\.\./,
        replacement: "$1的眼睛睁大, 当它们试图说话却没有成功...",
    },
    {
        regex: /(.+) looks around helplessly, unable to make a sound\.\.\./,
        replacement: "$1无助地四处张望, 无法发出声音...",
    },
    { regex: /(.+)'s mouth moves in silence\.\.\./, replacement: "$1的嘴巴无声地动着..." },
    { regex: /(.+)'s mouth moves silently\.\.\./, replacement: "$1的嘴巴无声地动着..." },
    {
        regex: /(.+) whimpers, struggling in (.+) bindings and unable to speak\.\.\./,
        replacement: "$1在$2约束中挣扎, 无法说话...",
    },
    {
        regex: /(.+)'s eyes widen as they squirm in (.+) bondage, only a gentle moan escaping\.\.\./,
        replacement: "$1的眼睛睁大, 当它们在$2束缚中扭动时, 只有一声轻柔的呻吟逃逸...",
    },
    {
        regex: /(.+) tries (.+) best to speak, but has to resign themselves to mearly a bound whimper\.\.\./,
        replacement: "$1尽力想说话, 但不得不只是发出一声被束缚的呜咽...",
    },
    {
        regex: /(.+) squirms in (.+) bindings, (.+) mouth moving in silence\.\.\./,
        replacement: "$1在$2约束中扭动, 嘴巴无声地移动...",
    },
    {
        regex: /(.+)'s eyelids flutter as a thought tries to enter (.+) blank mind\.\.\./,
        replacement: "$1的眼皮轻微颤动, 当一种想法试图进入$2空白的思维中...",
    },
    {
        regex: /(.+) sways weakly in (.+) place, drifting peacefully\.\.\./,
        replacement: "$1在$2地方虚弱地摇晃, 平静地漂流...",
    },
    {
        regex: /(.+) trembles as something deep and forgotten fails to resurface\.\.\./,
        replacement: "$1颤抖着, 因为某种深刻而被遗忘的东西未能重新浮出水面...",
    },
    {
        regex: /(.+) moans softly as (.+) drops even deeper into trance\.\.\./,
        replacement: "$1轻声呻吟, 因为$2甚至更深地陷入了恍惚之中...",
    },
    {
        regex: /(.+) quivers, patiently awaiting something to fill (.+) empty head\.\.\./,
        replacement: "$1颤抖着, 耐心等待着某种东西来填补$2空虚的脑袋...",
    },
    {
        regex: /(.+) stares blankly, (.+) mind open and suggestible\.\.\./,
        replacement: "$1茫然地凝视着, $2思维开放且易受影响...",
    },
    {
        regex: /(.+)'s eyelids flutter gently, awaiting a command\.\.\./,
        replacement: "$1的眼皮轻轻颤动, 等待着一声命令...",
    },
    {
        regex: /(.+) trembles with a quiet moan as (.+) yearns to obey\.\.\./,
        replacement: "$1轻声呻吟着颤抖, 因为$2渴望服从...",
    },
    {
        regex: /(.+)'s eyes move dreamily under (.+) closed eyelids\.\.\./,
        replacement: "$1的眼睛在$2闭着的眼皮下梦幻般地移动...",
    },
    { regex: /(.+) exhales slowly, fully relaxed\.\.\./, replacement: "$1慢慢地呼出气, 完全放松..." },
    { regex: /(.+)'s muscles twitch weakly in (.+) sleep\.\.\./, replacement: "$1的肌肉在$2睡眠中微弱抽动..." },
    { regex: /(.+) moans softly and relaxes\.\.\./, replacement: "$1轻声呻吟并放松..." },
    {
        regex: /(.+)'s eyes widen as (.+) gag inflates to completely fill (.+) throat\./,
        replacement: "$1的眼睛睁大, 当$2口饰膨胀完全填满$3喉咙时.",
    },
    { regex: /(.+) splutters and gasps for air around (.+) gag\./, replacement: "$1喷溅并在$2口饰周围喘息." },
    {
        regex: /(.+)'s eyes flutter as (.+) collar starts to tighten around (.+) neck with a quiet hiss\./,
        replacement: "$1的眼睛飘动, 当$2项圈开始在$3脖子上轻轻地发出嘶嘶声时.",
    },
    {
        regex: /(.+) gasps for air as (.+) collar presses in around (.+) neck with a hiss\./,
        replacement: "$1喘着气, 当$2项圈嘶嘶地压在$3脖子上时.",
    },
    {
        regex: /(.+)'s face runs flush, choking as (.+) collar hisses, barely allowing any air to (.+) lungs\./,
        replacement: "$1的脸色变得潮红, 当$2项圈嘶嘶作响时, 几乎没有任何空气进入$3的肺部, 导致窒息.",
    },
    {
        regex: /(.+) chokes and gasps desperately as (.+) collar slowly releases some pressure\./,
        replacement: "$1呼吸困难地喘息, 当$2项圈缓慢地释放一些压力时.",
    },
    {
        regex: /(.+)'s collar opens a little as (.+) lets out a moan, gulping for air\./,
        replacement: "$1的项圈稍微打开, 当$2发出呻吟时, 急切地吞食着空气.",
    },
    {
        regex: /(.+) whimpers thankfully as (.+) collar reduces most of its pressure around (.+) neck\./,
        replacement: "$1感激地呜咽着, 当$2项圈在$3脖子周围减轻大部分压力时.",
    },
    {
        regex: /(.+) takes a deep breath as (.+) collar releases its grip with a hiss\./,
        replacement: "$1深吸一口气, 当$2项圈发出嘶嘶声释放其控制时.",
    },
    {
        regex: /(.+) gulps thankfully as the threat to (.+) airway is removed\./,
        replacement: "$1感激地吞咽着, 当对$2气道的威胁消除时.",
    },
    {
        regex: /(.+)'s eyes start to roll back, gasping and choking as (.+) collar presses in tightly and completely with a menacing hiss\./,
        replacement: "$1的眼睛开始翻白, 当$2项圈紧紧而完全地压着时, 发出威胁的嘶嘶声, 喘息和窒息.",
    },
    {
        regex: /(.+)'s eyes flutter with a groan, unable to get any air to (.+) lungs\./,
        replacement: "$1的眼睛随着呻吟而飘动, 无法让任何空气进入$2的肺部.",
    },
    { regex: /(.+) chokes and spasms, (.+) collar holding tight\./, replacement: "$1窒息和痉挛, $2项圈紧紧地控制着." },
    {
        regex: /(.+) chokes and spasms, (.+) gripping (.+) throat relentlessly\./,
        replacement: "$1窒息和痉挛, $2不停地紧抓着$3的喉咙.",
    },
    {
        regex: /(.+) convulses weakly with a moan, (.+) eyes rolling back as the collar hisses impossibly tighter\./,
        replacement: "$1痉挛着, 带着呻吟, $2的眼睛翻白, 项圈发出不可思议的更紧的嘶嘶声.",
    },
    {
        regex: /As (.+) collapses unconscious, (.+) collar releases all of its pressure with a long hiss\./,
        replacement: "当$1失去知觉倒下时, $2的项圈发出长长的嘶嘶声, 释放出所有的压力.",
    },
    {
        regex: /As (.+) collapses unconscious, (.+) releases (.+) neck\./,
        replacement: "当$1失去知觉倒下时, $2释放了对$3脖子的控制.",
    },
    {
        regex: /As (.+) slumps unconscious, (.+) nose plugs fall out\./,
        replacement: "当$1失去知觉倒下时, $2的鼻塞掉了出来.",
    },
    { regex: /(.+) quivers with one last attempt to stay awake\.\.\./, replacement: "$1颤抖着, 做最后的努力保持清醒." },
    {
        regex: /(.+) trembles weakly with one last attempt to maintain (.+) senses\.\.\./,
        replacement: "$1微弱地颤抖, 做最后的努力保持$2感觉.",
    },
    { regex: /(.+)'s frowns as (.+) fights to remain conscious\./, replacement: "$1皱着眉头, 当$2努力保持清醒时." },
    {
        regex: /(.+)'s eyes immediately defocus, (.+) posture slumping slightly as (.+) loses control of (.+) body at the utterance of a trigger word\./,
        replacement: "$1的眼睛立即变得模糊, 当$2说出触发词时, $3的姿势略微下垂, 失去对$4身体的控制.",
    },
    {
        regex: /(.+)'s eyes glaze over, (.+) posture slumping weakly as (.+) loses control of (.+) body\./,
        replacement: "$1的眼睛变得呆滞, $2微弱地下垂, $3失去对$4身体的控制.",
    },
    {
        regex: /(.+) reboots, blinking and gasping as (.+) regains (.+) senses\./,
        replacement: "$1重新启动, 眨眼喘息, 当$2重新获得$3感官时.",
    },
    {
        regex: /(.+) blinks, shaking (.+) head with confusion as (.+) regains (.+) senses\./,
        replacement: "$1眨眼, 困惑地摇摇头, 当$3重新获得$4感官时.",
    },
    { regex: /(.+) gasps, blinking and blushing with confusion\./, replacement: "$1喘息, 眨眼并因困惑而脸红." },
    {
        regex: /(.+) concentrates, breaking the hold the previous trigger word held over (.+)\./,
        replacement: "$1集中精神, 打破了以前触发词对$2的控制.",
    },
    {
        regex: /(.+)'s eyes dart around, (.+) world suddenly plunged into darkness\./,
        replacement: "$1的眼睛四处游移, $2的世界突然陷入黑暗.",
    },
    { regex: /(.+) frowns as (.+) is completely deafened\./, replacement: "$1皱着眉头, 因为$2完全失聪." },
    {
        regex: /(.+)'s eyes widen in a panic as (.+) muscles seize in place\./,
        replacement: "$1恐慌地睁大眼睛, 当$2的肌肉僵硬时.",
    },
    {
        regex: /(.+) is unable to fight the spell's hypnotizing influence, slumping weakly as (.+) eyes go blank\./,
        replacement: "$1无法抵抗咒语的催眠影响, 当$2的眼睛变得空白时, 软弱地倒下.",
    },
    { regex: /(.+)'s protests suddenly fall completely silent\./, replacement: "$1的抗议突然完全沉默了." },
    {
        regex: /(.+)'s mouth moves in protest but not a single sound escapes\./,
        replacement: "$1的嘴在抗议, 但没有任何声音逃脱.",
    },
    {
        regex: /(.+) succumbs to the spell's overwhelming pressure, (.+) eyes closing as (.+) falls unconscious\./,
        replacement: "$1屈服于咒语的压倒性压力, 当$3失去意识时, $2的眼睛闭上了.",
    },
    {
        regex: /(.+) gasps, blinking as the magic affecting (.+) is removed\./,
        replacement: "$1喘息着眨眼, 当影响$2的魔法被移除时.",
    },
    {
        regex: /(.+) trembles as (.+) clothing shimmers and morphs around (.+)\./,
        replacement: "$1颤抖着, 当$2的衣服闪烁并在$3周围变形时.",
    },
    {
        regex: /(.+) squeaks as (.+) clothing shimmers and morphs around (.+)\./,
        replacement: "$1尖叫着, 当$2的衣服闪烁并在$3周围变形时.",
    },
    { regex: /(.+) trembles as (.+) body shimmers and morphs\./, replacement: "$1颤抖, 当$2的身体闪烁并改变形状时." },
    { regex: /(.+) squeaks as (.+) body shimmers and morphs\./, replacement: "$1尖叫着, 当$2的身体闪烁并改变形状时." },
    { regex: /(.+) squirms as (.+) arousal is paired\./, replacement: "$1扭动着身体, 当$2的兴奋被配对时." },
    {
        regex: /(.+) quivers as (.+) feels (.+) impending denial\./,
        replacement: "$1颤抖着, 当$2感受到$3即将到来的拒绝时.",
    },
    {
        regex: /(.+) whimpers as (.+) feels (.+) impending denial\./,
        replacement: "$1呜咽着, 当$2感受到$3即将到来的拒绝时.",
    },
    {
        regex: /(.+)'s muscles slump limply once more as another dose of chloroform is applied\./,
        replacement: "$1的肌肉再次无力松弛, 当又一剂氯仿被施用时.",
    },
    {
        regex: /(.+) eyes go wide as the sweet smell of ether fills (.+) nostrils\./,
        replacement: "$1的眼睛瞪大, 当乙醚的甜味充满$2的鼻孔时.",
    },
    {
        regex: /(.+) slumps back in (.+) sleep as another dose of ether assails (.+) senses\./,
        replacement: "$1在另一剂乙醚冲击$3的感官时, $2沉入睡梦中.",
    },
    {
        regex: /(.+), unable to continue holding (.+) breath, takes a desparate gasp through the chemical-soaked cloth\./,
        replacement: "$1, 无法继续屏住$2的呼吸, 透过浸满化学药品的布料拼命地喘气.",
    },
    {
        regex: /(.+)'s body trembles as the chloroform sinks deep into (.+) mind\./,
        replacement: "$1的身体颤抖, 当氯仿深深渗入$2的头脑时.",
    },
    {
        regex: /(.+) takes a deep, calm breath as (.+) chloroform starts to lose its potency\.\.\./,
        replacement: "$1深深地吸了口气, 当$2氯仿开始失去效力时, 保持平静.",
    },
    {
        regex: /(.+) continues to sleep peacefully as the cloth is removed\.\.\./,
        replacement: "$1继续安详地睡着, 当布料被移开时.",
    },
    {
        regex: /(.+) gulps in fresh air as the cloth is removed\.\.\./,
        replacement: "$1大口吸入新鲜空气, 当布料被移开时.",
    },
    { regex: /(.+) starts to stir with a gentle moan\.\.\./, replacement: "$1开始缓慢地挣扎着, 轻轻地呻吟着." },
    {
        regex: /(.+)'s eyes flutter and start to open sleepily\.\.\./,
        replacement: "$1的眼睛飘动着, 开始慢慢地睁开, 显得昏昏欲睡.",
    },
    {
        regex: /(.+) moans and trembles in frustration as (.+) is held right at the edge\.\.\./,
        replacement: "$1因被困在边缘而感到沮丧地呻吟和颤抖.",
    },
    { regex: /(.+) leads (.+) out of the room by the ear\./, replacement: "$1领着$2通过耳朵离开房间." },
    { regex: /(.+) roughly pulls (.+) out of the room by the arm\./, replacement: "$1粗暴地拉着$2通过手臂离开房间." },
    { regex: /(.+) tugs (.+) out of the room by the tongue\./, replacement: "$1拽着$2通过舌头离开房间." },
    { regex: /(.+) drags (.+) out of the room with a wince\./, replacement: "$1痛苦地拖着$2离开房间." },
    { regex: /(.+) feels as though (.+) abilities are enhanced\./, replacement: "$1感觉自己的能力得到了增强." },
    { regex: /(.+) feels as though (.+) abilities are deminished\./, replacement: "$1感觉自己的能力受到了削弱." },
    { regex: /(.+)'s abilities return to normal\./, replacement: "$1的能力恢复正常." },
    { regex: /(.+) blinks and returns to (.+) senses\./, replacement: "$1眨了眨眼, 回到了$2的感觉中." },
    {
        regex: /(.+)'s breathing calms down as (.+) regains control of (.+) arousal\./,
        replacement: "$1的呼吸平静下来, 当$2重新控制了$3的兴奋时.",
    },
    { regex: /(.+) slumps weakly as (.+) slips into unconciousness\./, replacement: "$1无力地瘫坐, 当$2陷入无意识时." },
    {
        regex: /(.+)'s eyelids flutter and start to open sleepily\.\.\./,
        replacement: "$1的眼睑飘动, 开始昏昏欲睡地睁开.",
    },
    { regex: /(.+)'s body reshapes and grows to twice its size\./, replacement: "$1的身体重新塑形并长大至两倍大小." },
    { regex: /(.+)'s body reshapes and shrinks to half its size\./, replacement: "$1的身体重新塑形并缩小至一半大小." },
    { regex: /(.+)'s body returns to its normal size\./, replacement: "$1的身体恢复到正常大小." },
    { regex: /(.+)'s (.+) engulfs (.+)\./, replacement: "$1的$2吞没了$3." },
    {
        regex: /(.+) struggles in (.+) bindings, unable to reach (.+) collar's controls\./,
        replacement: "$1在$2约束下挣扎, 无法触及$3项圈的控制装置.",
    },
    {
        regex: /(.+) struggles in (.+) bindings, unable to reach (.+)'s collar controls\./,
        replacement: "$1在$2约束下挣扎, 无法触及$3的项圈控制装置.",
    },
    { regex: /(.+) presses a button on (.+) collar\./, replacement: "$1按下$2项圈上的一个按钮." },
    { regex: /(.+) presses a button on (.+)'s collar\./, replacement: "$1按下$2的项圈上的一个按钮." },
    {
        regex: /(.+)\'s collar beeps and a computerized voice says "Access Denied\./,
        replacement: "$1的项圈发出嘟嘟声, 电脑化的声音说:“访问被拒绝.”",
    },
    {
        regex: /(.+)\'s collar chimes and a computerized voice reads out\:\nCurrent Level\: (.+)\.\.\.\nCorrective Cycles: (.+)\.\.\.\nTighten Trigger\: \'(.+)\'\.\.\.\nLoosen Trigger\: \'(.+)\'\.\.\.\nRemote Access\: (.+)\.\.\./,
        replacement:
            "$1的项圈响起提示音, 电脑化的声音读出:\n当前水平:$2...\n校正周期:$3...\n收紧触发器:“$4”...\n放松触发器:“$5”...\n远程访问:$6..",
    },
    { regex: /(.+) gives (.+) (.+) to (.+)\./, replacement: "$1给$2$3给$4." },
    {
        regex: /(.+) slowly waves (.+) (.+) in an intricate pattern, making sure (.+) follows along with (.+) (.+)/,
        replacement: "$1慢慢地挥动着$2$3以复杂的图案, 确保$4跟着他们的$5$6.",
    },
    {
        regex: /(.+) repeats an indecipherable phrase, touching (.+) (.+) to (.+)'s (.+)/,
        replacement: "$1重复着一个难以理解的短语, 把$2$3碰到$4的$5.",
    },
    {
        regex: /(.+) holds both(.+)(.+) and(.+)'s (.+) tightly, energy traveling from one to the other/,
        replacement: "$1紧紧地握着$2$3和$4的$5, 能量从一个传递到另一个",
    },
    {
        regex: /(.+) waves (.+) (.+) in an intricate pattern and casts (.+) on (.+)(.+)/,
        replacement: "$1挥动$2$3以复杂的图案并在$4上施放$5$6",
    },
    {
        regex: /(.+) chants an indecipherable phrase, pointing (.+) (.+) at (.+) and casting (.+)(.+)/,
        replacement: "$1吟诵着一个难以理解的短语, 指着$2$3对准$4并施放$5$6",
    },
    {
        regex: /(.+) aims (.+) (.+) at (.+) and, with a grin, casts (.+) (.+)/,
        replacement: "$1瞄准$2$3在$4上, 并带着笑容施放$5$6 ",
    },
    {
        regex: /(.+) struggles to wield (.+)'s (.+), (.+) spell backfiring\./,
        replacement: "$1挣扎着挥舞$2的$3, $4法术反噬.",
    },
    {
        regex: /(.+) struggles to wield (.+)'s (.+), (.+) spell fizzling with no effect\./,
        replacement: "$1挣扎着挥舞$2的$3, $4法术无效.",
    },
    { regex: /(.+) casts (.+) at (.+) but it seems to fizzle\./, replacement: "$1施放$2在$3, 但看起来失效了." },
    {
        regex: /(.+) tries to explain the details of (.+) to (.+) but (.+) don't seem to understand\./,
        replacement: "$1试图向$3解释$2的细节, 但$4似乎不理解.",
    },
    {
        regex: /(.+) tries to teach (.+) (.+) but (.+) don't seem to have ̶i̶n̶s̶t̶a̶l̶l̶e̶d̶ embraced Magic™\./,
        replacement: "$1试图教$3$2, 但$4似乎没有 embraced Magic™.",
    },
    {
        regex: /(.+)\'s (.+) fizzles when cast on (.+), none of its effects allowed to take hold\./,
        replacement: "$1的$2消失了, 没有任何效果.",
    },
    {
        regex: /(.+)\'s paired spell fizzles as it attempts to pair with (.+)\./,
        replacement: "$1的配对法术消失了, 当尝试与$2配对时.",
    },
    { regex: /(.+) squirms as (.+) arousal is paired\./, replacement: "$1扭动不安, 当$2的情欲被配对时." },
    {
        regex: /(.+) lets out a quiet gasp as the pleasure center of (.+) mind starts to tingle\./,
        replacement: "$1发出轻轻的呼吸声, 因为$2心灵的愉悦中心开始发麻.",
    },
    {
        regex: /(.+)\'s mind is already full of spells. (.+) must forget one before (.+) can learn (.+)\./,
        replacement: "$1的心灵已经充满了咒语.$2必须忘记一个才能学会$4.",
    },
    {
        regex: /(.+) already knows a spell called (.+) and ignores (.+) new instructions\./,
        replacement: "$1已经知道一个名为$2的咒语, 忽略了$3的新指示.",
    },
    {
        regex: /(.+) grins as they finally understand the details of (.+) and memorizes it for later\./,
        replacement: "$1露出笑容, 因为他们终于理解了$2的细节, 并把它记在心里以备将来.",
    },
    { regex: /(.+) gulps down (.+)'s (.+)\./, replacement: "$1吞下了$2的$3." },
    { regex: /(.+) leads (.+) out of the room by the (.+)\./, replacement: "$1牵着$2走出房间." },
    { regex: /(.+) leads (.+) and (.+) out of the room\./, replacement: "$1带着$2和$3走出房间." },
    { regex: /(.+) drags (.+) out of the room with a wince\./, replacement: "$1拖着$2一边皱着眉走出房间." },
    { regex: /(.+)\'s (.+) state wears off\./, replacement: "$1的$2状态消失了." },
    {
        regex: /(.+) (.+) successfully defends against (.+)'s (.+) attempt to force (.+) to drink (.+) (.+), spilling drink all over\./,
        replacement: "$1 $2 成功地抵御了$3的$4企图强迫$5喝 $6 $7, 饮料洒得到处都是.",
    },
    {
        regex: /(.+) (.+) manages to wrest (.+)'s (.+) (.+) out of (.+) grasp\!/,
        replacement: "$1$2设法夺过$3的$4$5脱离了$6的控制!",
    },
    { regex: /(.+) makes an activity roll and gets: (.+) (.+)/, replacement: "$1进行一次活动检定并获得: $2 $3" },
    {
        regex: /(.+) makes an activity check attack against (.+)\!/,
        replacement: "$1进行一次活动检定攻击, 攻击目标是$2!",
    },
    { regex: /(.+) makes an activity check defending from (.+)\!/, replacement: "$1进行一次活动检定防御, 防御来自$2!" },
    {
        regex: /(.+) (.+) manages to get (.+) (.+) past (.+)'s (.+) lips, forcing (.+) to swallow\./,
        replacement: "$1$2设法让$3$4经过$5的$6, 迫使$7吞咽.",
    },
    {
        regex: /(.+) lets out a long low moan as (.+)'s drink burns pleasurably down (.+) throat\./,
        replacement: "$1发出长长的低吟, 当$2的饮料愉快地灼烧着$3的喉咙.",
    },
    {
        regex: /(.+) gulps and quivers as (.+) body is slowly flooded with (.+)'s aphrodisiac\./,
        replacement: "$1低声喘息, 当$2的身体逐渐被$3的催情剂淹没.",
    },
    {
        regex: /(.+) gasps, snapping back into (.+) senses confused and blushing\./,
        replacement: "$1喘息, 突然回到$2的意识中, 感到困惑而脸红.",
    },
    {
        regex: /(.+) groans as air is allowed back into (.+) lungs\./,
        replacement: "$1呻吟着, 当空气重新进入$2的肺部时.",
    },
    {
        regex: /(.+)\'s eyes flutter as (.+) wraps (.+) hand around (.+) neck\./,
        replacement: "$1的眼睛眨动着, 当$2用$4的手环绕着$3的脖子时.",
    },
    {
        regex: /(.+) gasps for air as (.+) tightens (.+) grip on (.+) neck\./,
        replacement: "$1为了呼吸而喘息, 当$2在$4的脖子上紧紧抓着时.",
    },
    {
        regex: /(.+)\'s face runs flush, choking as (.+) presses firmly against (.+) neck, barely allowing any air to (.+) lungs\./,
        replacement: "$1的脸颊泛起红潮, 当$2紧紧压在$4的脖子上, 几乎不让空气进入$5的肺部时.",
    },
    {
        regex: /(.+) gasps in relief as (.+) releases (.+) pressure on (.+) neck\./,
        replacement: "$1松了口气, 当$2释放对$4的压力时.",
    },
    { regex: /(.+) chokes and spasms, struggling in (.+) gag\./, replacement: "$1呛着并痉挛, 挣扎在$2的口球中." },
    {
        regex: /(.+) convulses weakly with a moan, (.+) eyes rolling back as (.+) clenches around (.+) throat even tighter\./,
        replacement: "$1微弱地抽搐着发出呻吟声, 当$2更紧地锁紧$4的喉咙时, $3的眼睛翻白.",
    },
    {
        regex: /(.+) convulses weakly with a moan, (.+) eyes rolling back as (.+) lungs scream for air\./,
        replacement: "$1微弱地抽搐着发出呻吟声, 当$2的眼睛开始翻白时, $3的肺部呼吁空气.",
    },
    {
        regex: /(.+) snaps back into (.+) senses at (.+)'s voice\./,
        replacement: "$1突然回到$2的意识中, 听到了$3的声音.",
    },
    {
        regex: /(.+) (.+)manages to get (.+) (.+) past (.+)'s (.+)lips, forcing (.+) to swallow\./,
        replacement: "$1$2设法让$3$4经过$5的$6, 迫使$7吞咽.",
    },
    {
        regex: /(.+) (.+) manages to get (.+) (.+) past (.+)'s (.+) lips, forcing (.+) to swallow it\./,
        replacement: "$1$2设法让$3$4经过$5的$6, 迫使$7吞咽它.",
    },
    {
        regex: /(.+) (.+) successfully defends against (.+)'s (.+) attempt to force (.+) to drink (.+) (.+)\./,
        replacement: "$1$2成功抵御了$3的$4企图迫使$5喝下$6$7.",
    },
    {
        regex: /(.+) leads (.+) and (.+) out of the room by (.+) ears\./,
        replacement: "$1带着$2和$3走出房间, 拉着$4的耳朵.",
    },
    {
        regex: /(.+) roughly pulls (.+) and (.+) out of the room by (.+) arms\./,
        replacement: "$1粗暴地拉着$2和$3走出房间, 抓住$4的手臂.",
    },
    {
        regex: /(.+) tugs (.+) and (.+) out of the room by (.+) tongues\./,
        replacement: "$1拽着$2和$3走出房间, 用$4的舌头.",
    },
    { regex: /(.+) tries (.+) best to escape from (.+)'s grip\.\.\./, replacement: "$1竭尽全力从$3的控制中挣脱..." },
    {
        regex: /(.+)\'s eyes start to roll back with a groan as (.+) completely closes (.+) airway with (.+) hand\./,
        replacement: "$1的眼睛开始滚动, 发出呻吟声, 当$2用$4的手完全封闭$3的气道时.",
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
        replacement: "$1 睡着了，只有热烈的亲吻或严厉的打屁股才能唤醒他",
    },

    // 移除魔法效果
    { regex: /(.+) uses \"Remove enchantments\" spell on himself/, replacement: '$1 自己使用了 "移除魔法" 法术' },
    { regex: /(.+) uses \"Remove enchantments\" spell on (.+)/, replacement: '$1 对 $2 使用了 "移除魔法" 法术' },
    { regex: /All spell effects were removed from (.+)/, replacement: "所有法术效果从 $1 身上被移除了" },

    // 使其无助
    { regex: /(.+) uses \"Make helpless\" spell on himself/, replacement: '$1 自己使用了 "使无助" 法术' },
    { regex: /(.+) uses \"Make helpless\" spell on (.+)/, replacement: '$1 对 $2 使用了 "使无助" 法术' },
    { regex: /(.+) was enchanted, now he is totally helpless/, replacement: "$1 被施了魔法，现在他完全无助" },
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

export { translationsDTF, act_dialogs, pronouns };
