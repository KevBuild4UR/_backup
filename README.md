---
search: english
---

# Welcome to the Neptune documentation!

Strategically place pick-ups, define weaponry, location and tons of other variables to make your own unique Job for others to take on. This is the basic rule of Grand Theft Auto V creator. Through the Neptune, you can activate the same creator environment as Rockstar Games, use many new props, and other hidden functions such as finish line camera, invisible props (Retail version Only) and fake props (Retail version Only). This guide provides some general tips to help you better start using Neptune for free.

## Introduction to Neptune

The functions of Neptune are mainly multi-version common functions. Generally speaking, Neptune's "Developer mode" and other features are still available even if the game is updated. In addition, you can use Neptune to modify the photo of your jobs.

Get started now and enjoy the developer mode environment of people wanting to create the most creative jobs in the Grand Theft Auto V.

## How to enable game-in developer mode through Neptune

You only need to check the "Developer Mode" checkbox in the program to enable developer mode. After this, you will notice some changes in the creator.

![Developer Mode](https://www.neptune.work/images/upload/dev-creator-interface.jpg)

### Why can’t I find the unlocked modded props or vehicles (such as specials, after hours decorations, etc.)?

This is usually caused by enabling developer mode in the normal creator environment. To solve this problem, please save your current job and exit, reload your job to load the dev creator.

## How to replace your job photo through Neptune

Click "Change your photo" button and select a JPEG image for replacement. After confirmation, the program will start to try to upload. Once the upload finishes, please save your job and exit, reload to check whether the replacement is successful.

![Once the upload finishes, please save your job and reload it.](https://www.neptune.work/images/upload/replacejobphoto-1.jpg)

![Reload to check whether the replacement is successful.](https://www.neptune.work/images/upload/replacejobphoto-2.jpg)

## Some tips that are only available in developer mode creator

### Place freely in the interior

In developer mode, you are free to set props, vehicles and other variables in any restricted area.

### Load & Enter IPLs

#### Load an IPL (Dev Survival Creator Only)

There is an unnamed tab in the "Survival Details" option of the survival creator. After entering the tab, you need to select the third or the fourth option to load IPLs (the third tab is exteriors and the fourth tab is interiors) in a survival.

![After entering the tab, you need to select the third or the fourth option to load IPLs (the third tab is exteriors and the fourth tab is interiors) in a survival.
](https://www.neptune.work/images/upload/survivaliplsoptions.jpg)

![Aircraft Carrier (exterior) was loaded.](https://www.neptune.work/images/upload/survivalenableaircraftcarrier.jpg)

#### Enter the interior
You can directly enter the interior by pressing the "Space" key (Keyboard) or "X" key (Controller) under the enabled interior options, or you can teleport into the interior through the first-person "Cycle Items" option in developer mode. This is impossible in the current ordinary creator. (These interiors are generally not loaded in the game, in the survival creator you will be free to choose whether to enable these interiors)

The first step is to enter the first-person view, and use the "Override Position" to move the props to the interior, After the settings are completed, the props will be used as a waypoint.

The second step is to select the "Cycle Items" option to switch to the prop you set to be used as a waypoint.

The third step is to remove the prop or select the prop to enter the collision-free state. At this time, you have successfully entered the loaded interior. If you were not teleport to the waypoint prop you set after teleporting, but were teleported to the surface, the reason is probably that the interior has not been loaded yet. If multiple attempts still fail, please try to save the job and reload it or start a test (the purpose is to reload the online contents).

![You can directly teleport into the interior through the first-person "Override Position" option in developer mode.](https://www.neptune.work/images/upload/teleporttointerior.jpg)

For more information on available IPLs, please see the "[Available IPLs](https://www.neptune.work/#/ipls)" tab.

### Create a super long distance Transform Race warp checkpoint

First of all, place a warp checkpoint and its destination checkpoint, and a checkpoint you need to use as the real destination. After the placement, you only need to delete the checkpoint associated with the warp checkpoint. After that, the remaining checkpoint will become the destination.

![First, place a warp checkpoint and its destination checkpoint.](https://www.neptune.work/images/upload/placesuperlongwarpcheckpoint-1.jpg)

![After the placement, you only need to delete the checkpoint associated with the warp checkpoint. After that, the remaining checkpoint will become the destination.](https://www.neptune.work/images/upload/placesuperlongwarpcheckpoint-2.jpg)

### Set team start points anywhere

When you encounter a situation where you cannot place the team start point or spawn point, just press and hold "Delete" on your keyboard to continue placing it (be careful when using it on props).

### Team respawn point option in Capture creator

There is an unnamed tab between "Team Start Points" and "Team Capture Points" options of the Capture creator, it is the "Team Respawn Points" option. You can place team respawn points instead of respawn areas to respawn the player in any one of the Team Respawn Points you’ve placed.

![There is an unnamed tab between "Team Start Points" and "Team Capture Points" options.](https://www.neptune.work/images/upload/teamrespawnpoint-1.jpg)

![This is where you can place extra spawn points for each team.](https://www.neptune.work/images/upload/teamrespawnpoint-2.jpg)

### Create an Alien Invasion Survival

There is an unnamed tab in the "Survival Details" option of the survival creator. After entering the tab, you need to select the fifth option and set all three options to "Yes" to enable the Alien Invasion Survival.

![An unnamed tab in the "Survival Details" option.](https://www.neptune.work/images/upload/survival-dev-options.jpg)

![You need to select the fifth option and set all three options to "Yes" to enable the Alien Invasion Survival.](https://www.neptune.work/images/upload/menusurvivalalienin.jpg)

![You need to select the fifth option and set all three options to "Yes" to enable the Alien Invasion Survival.](https://www.neptune.work/images/upload/enablealiensurvival.jpg)

![You need to select the fifth option and set all three options to "Yes" to enable the Alien Invasion Survival.](https://www.neptune.work/images/upload/aliensurvivalstart.jpg)

Code about the alien invasion survival:

```c
int func_829()
{
    int iVar0;
    
    if (unk_0xB2A5215A0837CA5F("MenuMGIn"))
    {
        unk_0xF530F03252D7AEE0("MenuMGIn");
        iVar0 = 1;
    }
    if (unk_0xB2A5215A0837CA5F("MenuMGSelectionIn"))
    {
        unk_0xF530F03252D7AEE0("MenuMGSelectionIn");
        iVar0 = 1;
    }
    if (unk_0xB2A5215A0837CA5F("MenuMGSelectionTint"))
    {
        unk_0xF530F03252D7AEE0("MenuMGSelectionTint");
        iVar0 = 1;
    }
    if (unk_0xB2A5215A0837CA5F("MenuMGTournamentIn"))
    {
        unk_0xF530F03252D7AEE0("MenuMGTournamentIn");
        iVar0 = 1;
    }
    if (unk_0xB2A5215A0837CA5F("MenuMGHeistIn"))
    {
        unk_0xF530F03252D7AEE0("MenuMGHeistIn");
        iVar0 = 1;
    }
    if (unk_0xB2A5215A0837CA5F("MenuMGHeistTint"))
    {
        unk_0xF530F03252D7AEE0("MenuMGHeistTint");
        iVar0 = 1;
    }
    if (unk_0xB2A5215A0837CA5F("MenuMGHeistIntro"))
    {
        unk_0xF530F03252D7AEE0("MenuMGHeistIntro");
        iVar0 = 1;
    }
    if (unk_0xB2A5215A0837CA5F("MenuMGTournamentTint"))
    {
        unk_0xF530F03252D7AEE0("MenuMGTournamentTint");
        iVar0 = 1;
    }
    if (unk_0xB2A5215A0837CA5F("MenuMGRemixIn"))
    {
        unk_0xF530F03252D7AEE0("MenuMGRemixIn");
        iVar0 = 1;
    }
    if (unk_0xB2A5215A0837CA5F("MenuSurvivalAlienIn"))
    {
        unk_0xF530F03252D7AEE0("MenuSurvivalAlienIn");
        iVar0 = 1;
    }
    return iVar0;
}
```
