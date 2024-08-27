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

export { translationsDTF };
