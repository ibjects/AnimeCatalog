import { useEffect, useState, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { FAVORITES_KEY } from '../utils/constants';

const useFavourites = () => {
    const [favourites, setFavourites] = useState<AnimeCatalog.Anime[]>([]);

    const addFavourite = useCallback(async (anime: AnimeCatalog.Anime) => {
        const updatedFavs = [anime, ...favourites];
        await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavs));
        setFavourites(updatedFavs);
    }, [favourites]);

    const removeFavourite = useCallback(async (malId: AnimeCatalog.Anime['mal_id']) => {
        const updatedFavs = favourites.filter(anime => anime.mal_id !== malId);
        await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavs));
        setFavourites(updatedFavs);
    }, [favourites]);

    useEffect(() => {
        loadFavourites();
    }, [addFavourite, removeFavourite]);

    const loadFavourites = async () => {
        const fetchedFavs = await AsyncStorage.getItem(FAVORITES_KEY);
        const favs = fetchedFavs ? JSON.parse(fetchedFavs) : [];
        setFavourites(favs);
    };

    return {
        favourites,
        addFavourite,
        removeFavourite,
    };
};

export default useFavourites;
