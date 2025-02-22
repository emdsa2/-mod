# 模组概述

这个模组为游戏引入了各种增强功能，包括额外的服装和活动。

## 新的源码仓库

由于将两个模组放在一起管理变得越来越难以控制，因此该项目的开发已移至两个新的仓库：
- [SugarChain-Studio/echo-clothing-ext](https://github.com/SugarChain-Studio/echo-clothing-ext)
- [SugarChain-Studio/echo-activity-ext](https://github.com/SugarChain-Studio/echo-activity-ext)

此仓库将保留用于维基和文档目的。

## 链接

| 描述                   | 链接                                                                                                    |
| ---------------------- | ------------------------------------------------------------------------------------------------------- |
| 服装扩展               | [服装扩展](https://sugarchain-studio.github.io/echo-clothing-ext/bc-cloth.user.js)                      |
| 动作扩展               | [动作扩展](https://sugarchain-studio.github.io/echo-activity-ext/bc-activity.user.js)                   |
| 服装扩展测试版         | [服装扩展测试版](https://sugarchain-studio.github.io/echo-clothing-ext/bc-cloth-beta.user.js)           |
| 动作扩展测试版         | [动作扩展测试版](https://sugarchain-studio.github.io/echo-activity-ext/bc-activity-beta.user.js)        |

## 安装脚本

```javascript
(function() {
  const n = document.createElement('script');
  n.setAttribute('type', 'text/javascript');
  n.setAttribute('src', 'https://sugarchain-studio.github.io/echo-clothing-ext/bc-cloth.user.js?t=' + Date.now());
  n.onload = function() { n.remove(); };
  document.head.appendChild(n);
})();
```

维基: https://github.com/emdsa2/-mod/wiki

## 插件菜单概述

此插件菜单概述由Nemesea提供。

该插件的菜单有三个主要按钮：

### 左按钮：创建/文本/删除新活动

左侧菜单提供三个选项：

- **顶部**：活动名称 + 选择目标，使用切换图标：仅自己（1人图标）或包括其他人（2人图标）。当活动仅对自己时，使用粉红色图标指定活动是由自己（手指向左）还是由其他人（手指向右）进行的。

- **中间**：在大框中插入与活动对应的文本，使用3个图标插入字符和代词，然后保存活动。
- 当动作仅对自己时，只有一个框。
- 当动作也可以对其他人进行时，有两个框：顶部框用于自己，底部框用于其他人。
- 第一个图标（手指向左）= 源角色，即进行活动的人。
- 第二个图标（手指向右）= 目标角色，即受活动影响的人。
- 第三个图标（厕所）= 目标的所有格代词（如果没有目标，则为源角色的代词）。
- 点击保存按钮时，您会看到红色消息，宣布活动已保存。

- **底部**：删除活动，例如，如果您在中间区域意外弄乱了。您可以选择一个活动并仅删除此活动，或使用垃圾桶（红色按钮）删除所有新活动。

### 中按钮（目前不起作用 - 正在开发中）：创建新服装/物品

### 右按钮：高潮计数器选项

您可以选择是否保存高潮计数器，并可以使用垃圾桶图标清除它。

## 其他功能

该插件还包括新物品和服装。

它在衣柜中添加了额外的服装类别，在原始身体区域之后，允许您例如组合两件连衣裙。

所有新的服装、绑定和衣柜槽位对于不使用脚本的人都是不可见的。

## 获取帮助和问题反馈

Discord：https://discord.gg/K9YnNqsNKx
