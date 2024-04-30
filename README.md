# Anime Catalog
*React Query Example Project*

- NodeJS v18.19.1
- npm v10.2.4
- Java v17

## Video


## Screenshots
![Screenshot_20240501_023355_com animecatalog](https://github.com/thechaudharysab/AnimeCatalog/assets/6399152/f0df22bb-545a-496d-83b9-39bff8215977)
![Screenshot_20240501_023344_com animecatalog](https://github.com/thechaudharysab/AnimeCatalog/assets/6399152/fa591565-d03a-4210-8a28-a4ffa204b1f6)
![Screenshot_20240501_023336_com animecatalog](https://github.com/thechaudharysab/AnimeCatalog/assets/6399152/6860d40c-2dea-4661-a358-0bafc81e88d6)
![Screenshot_20240501_023307_com animecatalog](https://github.com/thechaudharysab/AnimeCatalog/assets/6399152/6ba3b8ee-29a8-4203-9d14-ea7a705e86fa)
![Screenshot_20240501_023218_com animecatalog](https://github.com/thechaudharysab/AnimeCatalog/assets/6399152/f573acb4-f555-4d56-82f7-621b35404b19)


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
