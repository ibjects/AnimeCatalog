import { QueryState, useQuery } from '@tanstack/react-query';

const useAnimeDetails = (malId: number) => {

    /** Polling example with refetchInterval  */
    //   const refetchIntervalFuncExample = ({data}: QueryState) => {
    //     // state.data.data has the data.

    //     // ⬇ Weather or not data is available refetch every 5 sec
    //     // return 5000; // 5 sec

    //     if (data) {
    //       // ⬇ If data has been fetched, it refetches every 5 seconds (presumably to keep the data updated).
    //       // return 5000; // 5 sec

    //       // ⬇ If data has been fetched, Stop refetching for this query execution
    //       return false;
    //     } else {
    //       // If no data has been fetched yet (initial state), refetch more frequently (every 1 second) to potentially retrieve the data faster.
    //       return 1000; // 1 sec
    //     }
    //   };

    return useQuery({
        queryKey: ['getAnimeDetails', malId],
        queryFn: () =>
            fetch(`https://api.jikan.moe/v4/anime/${malId}`).then(res => res.json()),
        enabled: !!malId,
        retry: 2,
        // refetchInterval: ({state}) => refetchIntervalFuncExample(state), // Polling example
    });
};

export default useAnimeDetails;
