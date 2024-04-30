/* eslint-disable prettier/prettier */
import { NavigationProp } from '@react-navigation/native';

export type RootStackParamList = {
    AnimeTabs: undefined;
    Favorites: undefined;
    Details: { selectedAnimeItemMalId: AnimeCatalog.Anime['mal_id'] };
};

export interface ScreenProps<T extends keyof RootStackParamList> {
    navigation: NavigationProp<RootStackParamList, T>;
}
