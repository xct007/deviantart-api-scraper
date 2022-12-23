/** BASE ENPOINT */
export declare const TOP_TOPICS: (token: string) => string;
export declare const DAILY_DEVIATIONS: (token: string) => string;
export declare const DEVIATION: (userid: string, token: string) => string;
export declare const USER_GALLERY: (username: string, token: string) => string;
export declare const SEARCH_USER: (query: string, token: string) => string;
export declare const Config: {
    headers: {
        "da-session-id": string;
        "da-minor-version": number;
        "Content-Type": string;
        "User-Agent": string;
        "Accept-Encoding": string;
    };
};
export declare const AUTH_CRED: () => Promise<{
    access_token?: string;
    token_type?: string;
    expires_in?: number;
    status: string | boolean;
    error?: string;
}>;
export declare const Axios: import("axios").AxiosInstance;
export interface Result {
    status: boolean;
    message?: string;
    error?: string;
    error_description?: string;
    estimated_total?: number;
    has_more?: boolean;
    users?: {
        userid: string;
        username: string;
        usericon: string;
        type: string;
        details: {
            sex: string;
            age: null | unknown;
            joindate: string;
        };
        profile: {
            user_is_artist: boolean;
            artist_level: null | string | string[] | unknown;
            artist_speciality: null | string | string[] | unknown;
            real_name: string;
            tagline: string;
            website: string;
            cover_photo: string;
        };
        stats: {
            watchers: number;
            friends: number;
        };
    };
    results?: {
        name?: string;
        canonical_name?: string;
        example_deviations?: {
            deviationid?: string;
            printid?: null | unknown;
            url?: string;
            title?: string;
            category?: string;
            category_path?: string;
            is_favourited?: boolean;
            is_deleted?: boolean;
            is_published?: boolean;
            is_blocked?: boolean;
            author?: {
                userid?: string;
                username?: string;
                usericon?: string;
                type?: string;
            };
            stats: {
                comments?: number;
                favourites?: number;
            };
            published_time?: string;
            allows_comments?: boolean;
            preview?: {
                src?: string;
                height?: number;
                width?: number;
                transparency?: boolean;
            };
            content?: {
                src?: string;
                height?: number;
                width?: number;
                transparency?: boolean;
                filesize?: number;
            };
            thumbs?: {
                src?: string;
                height?: number;
                width?: number;
                transparency?: boolean;
            }[];
            daily_deviation?: {
                body?: string;
                time?: string;
                giver?: {
                    userid?: string;
                    username?: string;
                    usericon?: string;
                    type?: string;
                };
            };
            is_mature?: boolean;
            is_downloadable?: boolean;
            download_filesize?: number;
        };
    }[];
}
//# sourceMappingURL=Config.d.ts.map