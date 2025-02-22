# Mod Overview

This mod introduces various enhancements to the game, including additional clothing and activities.

## Other Language of README

- [中文](README.zh.md)

## New Source Repository

The management difficulties caused by putting two mods together gradually became out of control.
Therefore, development of this project has been moved two new repositories: 
- [SugarChain-Studio/echo-clothing-ext](https://github.com/SugarChain-Studio/echo-clothing-ext)
- [SugarChain-Studio/echo-activity-ext](https://github.com/SugarChain-Studio/echo-activity-ext)

This repository will be preserved for wiki and documentation purposes.

## Change Logs

- **Clothing-Ext** : [changelog.html](https://sugarchain-studio.github.io/echo-clothing-ext/changelog.html)
- **Activity-Ext** : [changelog.html](https://sugarchain-studio.github.io/echo-activity-ext/changelog.html)

## Links

| Description             | Link                                                                                                    |
| ----------------------- | ------------------------------------------------------------------------------------------------------- |
| Clothing Expansion      | [Clothing Expansion](https://sugarchain-studio.github.io/echo-clothing-ext/bc-cloth.user.js)            |
| Action Expansion        | [Action Expansion](https://sugarchain-studio.github.io/echo-activity-ext/bc-activity.user.js)           |
| Clothing Expansion Beta | [Clothing Expansion Beta](https://sugarchain-studio.github.io/echo-clothing-ext/bc-cloth-beta.user.js)  |
| Action Expansion Beta   | [Action Expansion Beta](https://sugarchain-studio.github.io/echo-activity-ext/bc-activity-beta.user.js) |

## Installation Script

```javascript
(function() {
  const n = document.createElement('script');
  n.setAttribute('type', 'text/javascript');
  n.setAttribute('src', 'https://sugarchain-studio.github.io/echo-clothing-ext/bc-cloth.user.js?t=' + Date.now());
  n.onload = function() { n.remove(); };
  document.head.appendChild(n);
})();
```

wiki: https://github.com/emdsa2/-mod/wiki

## Add-on Menu Overview

This add-on menu overview was provided by Nemesea.

The menu of this add-on features three primary buttons:

### Left Button: Creation/Text/Deletion of New Activities

The left menu provides three options:

- **Top**: Name of the activity + choose target with toggle icon: only you (1 person-icon) or also other people (2 persons-icon).    When it's an activity only on yourself, use the pink icon to specify if the activity is made by yourself (finger pointing left) or by other people (finger pointing right).

- **Middle**: Insert the text corresponding to the activity in the big boxes, use the 3 icons to insert characters and pronouns, then save the activity.
- Only one box when the action is only on yourself.
- Two boxes when the action can also be done on other people: top box for the text on yourself, bottom box for the text on other people.
- 1st icon (finger pointing left) = source character, the one doing the activity.
- 2nd icon (finger pointing right) = target character, the one being affected by the activity.
- 3rd icon (restroom) = possessive pronoun of the target (if there is no target, it's pronoun for the source character).
- When clicking the Save button, you will see a red message announcing that the activity has been saved.

- **Bottom**: Deletion of activities, for example, if you accidentally messed up in the middle area.    You can select an activity and delete only this one, or use the trash bin (red button) to delete all new activities.

### Middle Button (Currently Not Working - WIP): Creation of New Clothes/Items

### Right Button: Orgasm Counter Options

You can choose to save orgasm counter or not, and you can clear it with the trash bin icon.

## Additional Features

The add-on also includes new items and clothes.

It adds extra clothes categories in the wardrobe after the original body zones, allowing you to combine, for example, two dresses.

All the new clothing, binding, and wardrobe slots are invisible to those who don't use the script.

## Getting Help And Bug Reports

Discord：https://discord.gg/K9YnNqsNKx
