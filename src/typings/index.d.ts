/* eslint-disable prettier/prettier */
declare namespace AnimeCatalog {
    interface Anime {
        mal_id: number;
        images: {
            jpg: {
                image_url: string;
            };
        };
        title: string;
        rating: string;
        score: number;
        year: number;
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
