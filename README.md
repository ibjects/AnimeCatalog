# Anime Catalog
*React Query Example Project*

- NodeJS v18.19.1
- npm v10.2.4
- Java v17

## Video

https://github.com/thechaudharysab/AnimeCatalog/assets/6399152/9bf7b21b-b1c7-4e72-800e-b3aa3dbb283c

### TLDR of functionalities:
The app has the following functionalities:
- Drawer, Stack, and Tab Navigation implemented
- Anime Listing View which has three tabs i.e. Airing, Complete, & Upcoming
- Each Anime Listing Tab has a search bar
- Each tab is infinite scroll until the API has data. Proper pagination is implemented.
- Selecting any anime from the list take you to it's details screen
- Drawer navigation has two screens i.e. Anime Listing and Favourites
- All API calls are done using react-query
- Custom hooks created for majority of the functionalities
- Favourities functionality implemented using async-storage
- User can add/remove favourites
- Empty view placeholders added where needed

### How to run locally

1. Clone the repo
2. Open terminal `cd <project path>` and then run `yarn`
3. _For Android Only_: Open `/AnimeCatalog/android` folder **Android Studio** and sync gradle.
4. _For iOS only_: Open terminal `cd <project path>` and then run `yarn pod-install`
5. To run on Android: Open terminal `cd <project path>` and then run `yarn start` and press `a` to run on android. *If you face an unknown error, please try `yarn start --reset-cache` and press `a` to run on android.*


#### Debugging & Testing

**The app is only tested on Android**

Pods folder cleaning and reinstalling:

- `cd ios` > `pod repo update` > `pod cache clean --all`
- Then remove the pod files and install again, for example: `rm Podfile.lock` > `rm -rf Pods/` > `pod install --verbose`
