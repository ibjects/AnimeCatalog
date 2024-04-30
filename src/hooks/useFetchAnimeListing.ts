/* eslint-disable prettier/prettier */
import { useInfiniteQuery } from '@tanstack/react-query';
import { BaseURL, Status } from '../utils/constants';

const useFetchAnimeListing = (status: Status) => {

    var urlParameters = `anime?q=&status=${status.toLowerCase()}&page=`;
    if (status === Status.Upcoming) {
        urlParameters = `seasons/${status.toLowerCase()}?page=`;
    }

    return useInfiniteQuery({
        queryKey: ['getAnimeList', status],
        queryFn: ({ pageParam = 1 }) => fetch(`${BaseURL}/${urlParameters}${pageParam}`).then((res) => {
            if (!res.ok) {
                throw new Error(`Network response was not ok, status ${res.status}`);
            }
            return res.json();
        }),
        initialPageParam: 1,
        getNextPageParam: (lastPage, _allPages) => {
            return lastPage.pagination?.has_next_page ? lastPage.pagination.current_page + 1 : undefined;
        },
        retry: 2,
    });
};

export default useFetchAnimeListing;
