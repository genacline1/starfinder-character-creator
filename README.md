Starfinder 1e Character Creator

A React-based character creation tool for Starfinder 1e, focused on making a complex, rules-heavy system easier to build, manage, and use during play.

Overview

This project started as a personal tool to replace managing characters in Google Sheets, which became difficult to maintain as character complexity increased and was not as user friendly for other players at my table who are not familiar with spreadsheets.

The goal is to structure Starfinder’s character creation system into reusable data and build a UI that supports step-by-step creation, validation, and real-time feedback with an easy to understand user experience.

Features
Step-by-step character creation flow (race, theme, class, abilities, skills, feats, etc.)
Real-time stat calculation (HP, stamina, resolve, skill bonuses, etc.)
Skill allocation with class bonuses, level caps, and validation
Equipment management (armor, weapons, inventory, custom items)
Save/load system using localStorage
Export/import character data as JSON
Separate character sheet view for in-game use
Tech Stack
React (component-driven UI)
Vite (build tooling)
LocalStorage (client-side persistence)
Framer Motion (UI interactions/animation)
TanStack Query (state/query management)
Design Approach

This project focuses on handling a system with a large number of interdependent rules:

Game data (classes, skills, abilities, etc.) is stored as structured objects and referenced throughout the app
Derived values (modifiers, bonuses, totals) are calculated dynamically rather than stored
UI components are built to be reusable across different parts of character creation
Validation is handled inline (e.g., skill rank limits, trained-only skills, class bonuses)

The intent is to keep the logic predictable, traceable, and easy to extend as more game content is added.

Example: Skill System

The skill allocator demonstrates how multiple systems interact:

Skill points per level are derived from class + Intelligence modifier
Total ranks are limited by character level
Class skills grant a +3 bonus when trained
Trained-only skills are conditionally usable

This is handled dynamically in the UI rather than relying on precomputed values.

Why This Exists

Most existing tools for Starfinder either lack flexibility or become difficult to manage as characters level.

This project is an attempt to:

Better understand how to model complex systems in a UI
Build something practical for actual gameplay
Explore how data structure and UX interact in rule-heavy applications
Future Improvements
Expanded class support and features (connections, abilities, etc.)
Better mobile usability
More robust validation and edge-case handling
Optional cloud save or account-based persistence
Improved in-game tracking (conditions, effects, etc.)

Running Locally
git clone https://github.com/genacline1/starfinder-character-creator.git
cd starfinder-character-creator
npm install
npm run dev

Live App
https://genacline1.github.io/starfinder-character-creator/
