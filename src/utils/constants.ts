/* eslint-disable prettier/prettier */
const baseURL = 'https://api.jikan.moe/v4/';
// From the API docs
// https://api.jikan.moe/v4/seasons/upcoming
// https://api.jikan.moe/v4/anime?q=&status=airing
// https://api.jikan.moe/v4/anime?q=&status=complete

export enum Status {
    Airing = 'Airing',
    Complete = 'Complete',
    Upcoming = 'Upcoming'
}
