import axios from "axios";
const https = require("https");

const BASE_URL = "https://www.deviantart.com";

/**
 * @warning
 * <CLIENT_SECRET> AND <SESSION_ID> MIGHT BE CHANGE
 * BECAUSE WITHOUT THAT WE CANT MAKE REQUEST TO API.
 */
const CLIENT_ID = 1700;
const CLIENT_SECRET =
	"865ba884bab93564ddef9eed03b" + "d7bd06cd49b5b8a0834c0e845fbc643345fb8";
const SESSION_ID = "90b92cb846a2bf1b4beb02e65a8f9e2a";
const VERSION = 20210526;

/** BASE ENPOINT */
export const TOP_TOPICS = (token: string): string =>
	`${BASE_URL}/api/v1/oauth2/browse/toptopics?access_token=${token}&with_session=false&mature_content=true`;
export const DAILY_DEVIATIONS = (token: string) =>
	`${BASE_URL}/api/v1/oauth2/browse/dailydeviations?access_token=${token}&with_session=false&mature_content=true`;
export const DEVIATION = (userid: string, token: string): string =>
	`${BASE_URL}/api/v1/oauth2/deviation/${userid}?access_token=${token}&expand=user.watch%2Cdeviation.fulltext&with_session=false&mature_content=true`;
export const USER_GALLERY = (username: string, token: string): string =>
	`${BASE_URL}/api/oauth2/gallery/all?access_token=${token}&username=${username}&mature_content=true&offset=24&limit=24&with_session=false`;
export const SEARCH_USER = (query: string, token: string) =>
	`${BASE_URL}/api/v1/oauth2/browse/deviants/search?access_token=${token}&q=${query}&limit=50&expand=user.detail%2Cuser.stats%2Cuser.profile&with_session=false&mature_content=true`;

export const Config = {
	headers: {
		"da-session-id": SESSION_ID,
		"da-minor-version": VERSION,
		"Content-Type": "application/x-www-form-urlencoded",
		"User-Agent": "DevianArt-Android/3.3.0",
		"Accept-Encoding": "deflate",
	},
};

export const AUTH_CRED = async (): Promise<{
	access_token?: string;
	token_type?: string;
	expires_in?: number;
	status: string | boolean;
	error?: string;
}> => {
	let Params: any = new URLSearchParams();
	Params.append("client_id", CLIENT_ID);
	Params.append("client_secret", CLIENT_SECRET);
	const data = await axios
		.request({
			url: `${BASE_URL}/oauth2/token?grant_type=client_credentials&with_session=false&mature_content=1`,
			method: "POST",
			...Config,
			data: Params,
		})
		.catch((error: any) => {
			return error.response;
		});
	if (data.data && data.data.status && data.data.access_token) {
		return {
			...data.data,
		};
	} else {
		return {
			status: false,
			error: `:{`,
		};
	}
};
export const Axios = axios.create({
	httpsAgent: new https.Agent({ keepAlive: true }),
});

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
