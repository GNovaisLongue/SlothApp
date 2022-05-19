Sloth

Initial Commit accessed via GitKraken
Final Project - Mobile App
Done using React

-App.js - Initialization file leading to 'MainFile.js'
-MainFile.js - contains the routes and root pages of the application.
-Index.js - contains the export for all the current screen files together for easy import

-Login.js - first screen of the app and requires simple username and login to access the application.
-SignUp.js - creates an account for a new user.
-BottomTabs.js - Bottom Tab containing navigation between screens
-MainMenu.js - Main screen and that shows the character of the user and leads to the store (ModalStore.js)
-Classes.js - list of current classes along with calendar (ModalCalendar.js)
-UserProfile.js - Contains the general profile of the user along with their points(leaves) and items' inventory
-Settings.js - general purpose settings (soon to be added)
-Games.js - their minigames (not added yet)(need access to their database)

-ModalStore.js - Store where you can exchange your points (leaves) for items to equip your character
-ModalCalendar.js - Contais the google calendar

App using imports:
@react-navigation/native
@react-navigation/drawer
@react-navigation/stack
@react-navigation/bottom-tabs
@react-navigation/material-bottom-tabs
(will add more later)

yet to be used:
imports related to themes and styles
