/* eslint-disable prettier/prettier */

/**
 * From the API docs, we'll need the following endpoints:
 * https://api.jikan.moe/v4/seasons/upcoming
 * https://api.jikan.moe/v4/anime?q=&status=Airing
 * https://api.jikan.moe/v4/anime?q=&status=complete
 */

import { useQuery } from '@tanstack/react-query';
import { BaseURL, Status } from '../utils/constants';

export const useFetchAnimeListing = (status: Status) => {

    var urlParameters = `anime?q=&status=${status.toLowerCase()}`;
    if (status === Status.Upcoming) {
        urlParameters = `seasons/${status.toLowerCase()}`;
    }

    const animeList = useQuery<AnimeCatalog.ApiResponse, Error>({
        queryKey: ['getAnimeList', status],
        queryFn: () => fetch(`${BaseURL}/${urlParameters}`).then((res) => res.json()),
        select: data => {
            // Sort by score descending
            const sortedAnime = data.data.sort((a, b) => b.score - a.score); 
            return {
                ...data,
                data: sortedAnime,
            };
        },
    });

    return {
        ...animeList,
        animeList: animeList.data?.data,
        pagination: animeList.data?.pagination,
    };

};

