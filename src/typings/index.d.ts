/* eslint-disable prettier/prettier */
declare namespace AnimeCatalog {
    interface Anime {
    // image, name, rating, score, year
    mal_id: number;
    images: {
        jpg: {
            image_url: string;
        };
    };
    title: string; // = name i.e. One Piece
    rating: string; // PG-13 - Teens 13 or older
    score: number; // 8.72
    year: number; // 1999
    }
    interface ApiResponse {
    data: Anime[];
    pagination: Pagination;
    }
    interface Pagination {
    last_visible_page: number;
    current_page: number;
    has_next_page: boolean;
    items:
        {
            count: number;
            total: number;
            per_page: number;
        }
    }
}
