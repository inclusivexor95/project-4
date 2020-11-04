# Dungeons & Dragons Character Creator

This project consists of a full stack web application (hosted [here](https://dndproject4.herokuapp.com) on heroku) built with a React frontend, a Node/Express backend and data storage using MongoDB (i.e. the MERN stack). The core function of the webapp is to facilitate creation of new characters for the tabletop roleplaying game "Dungeons & Dragons". The webapp can also be used to roll the different types of dice used in D&D (Dungeons & Dragons), and keep track of stats and items while playing the game. 

This project is a work in progress and there are plans to add multiple other functions.

## Game Background

Dungeons & Dragons (commonly abbreviated as D&D or DnD) is a fantasy tabletop role-playing game (RPG) originally designed by Gary Gygax and Dave Arneson. It was first published in 1974 by Tactical Studies Rules, Inc. (TSR). The game has been published by Wizards of the Coast (now a subsidiary of Hasbro) since 1997. It was derived from miniature wargames, with a variation of the 1971 game Chainmail serving as the initial rule system. D&D's publication is commonly recognized as the beginning of modern role-playing games and the role-playing game industry.

D&D departs from traditional wargaming by allowing each player to create their own character to play instead of a military formation. These characters embark upon imaginary adventures within a fantasy setting. A Dungeon Master (DM) serves as the game's referee and storyteller, while maintaining the setting in which the adventures occur, and playing the role of the inhabitants of the game world. The characters form a party and they interact with the setting's inhabitants and each other. Together they solve dilemmas, engage in battles, explore, and gather treasure and knowledge. In the process, the characters earn experience points (XP) in order to rise in levels, and become increasingly powerful over a series of separate gaming sessions.

Multiple iterations of D&D have been released over the years, however this project focuses on the newest, D&D 5e (5th Edition).

## Website Guide

When the URL (https://dndproject4.herokuapp.com) is initially loaded, a simple landing page is displayed.

![Screenshot of landing page](/public/assets/screenshots/landingScreenshotNotLoggedIn.png)

Towards the top of the screen, below the title (D&D Character Creator) is the navigation bar, which contains "Log In" and "Sign Up" buttons. These link to their respective form pages, and are replaced by the user's name and a "Log Out" button once the user has created an account/logged in. 

Also in the navigation bar are two buttons labeled "Character List" (only visible when logged in) and "Dice Roller" which link to the two (for now) main webapp functions: the character creator and the dice roller.

### Character Creator

After clicking on the "Character List" button in the navigation bar, the character list page loads. On this page a list of the user's created D&D characters, as well as a "Create a Character" button at the bottom. 

![Screenshot of character list page](/public/assets/screenshots/charListScreenshot.png)

In addition to each character's name, this page contains each character's race and class, the two most important characteristics of a D&D character. Below these, a "Details" button links to the character creation page for that specific character, where the user can view the characters stats, items, and other information as well as make changes to all of these attributes. The "Create a Character" button links to the same character creation page, but with a brand new character instead.

![Screenshot of character creation page](/public/assets/screenshots/charCreateScreenshot.png)

The character creation page is modeled after a D&D "character sheet", the form that D&D players use to create and the stats/info/items of their character. The page contains various fields and information that may not make sense to someone who has never played the game; more information can be found on the [official D&D website](https://dnd.wizards.com), specifically in the Gameplay > Getting Started section. The character creation page also contains brief step-by-step instructions for creating a character in the box to the left of the character sheet.

In addition to the info normally found on a D&D character sheet, two yellow buttons can be found that, when clicked, will perform additional functions (work in progress). The one with the t-shirt icon opens an equipment component where items from the character's inventory can be equipped to the character, and the button with the book icon opens a spellbook component where spells can be added to the character's currently known spells.

### Dice Roller

The "Dice Roller" button in the navigation bar is links to a page with multiple different types of dice displayed on it. These are the dice used in D&D and many other similar tabletop games. This page allows the user to roll different combinations of these dice, while adding or subtracting a 'modifier' value from the result.

![Screenshot of dice roller page](/public/assets/screenshots/diceRollScreenshot.png)

Clicking each of the gray boxes containing the coloured dice adds that die's value to the bar at the bottom (beside "I want to roll:"). The dice are, in order, a d4, d6, d8, d10, d12, and d20. "d4" means a 4-sided die, "d6" is a 6 sided die, and so on. Beside the bar is a yellow "+" button, which means whatever numerical value entered into the grey box on its right will be added to the dice total after the roll is completed. Clicking the "+" button turns it into a minus, subtracting the value instead. Clicking the "Roll" button on the right completes the roll, and displays the result in the grey box at the bottom, beside "Result:".

## Future Additions

The long term plan for this project is to make a fully comprehensive tool for both playing D&D and testing characters. As such there are quite a few additional features that will eventually be added to the project. Some of these are:

- Adding stats/data for all items & equipment in the game so they can be easily added/equipped to characters
- Adding stats/data for all spells & abilities in the game so they can be added to a character's spellbook
- Adding a more comprehensive step-by-step character creation tool/guide
- Giving the dice roller the ability to be minimized and/or used on other pages (e.g. during character creation)
- Adding a 'combat testing' page/feature so that characters can be tested against D&D monsters

