/**
 * @author FrierenDv
 * @version 1.0.0
 * @see @link https://guthub.com/xct007/deviantart
 */

import {
	Axios,
	AUTH_CRED,
	Config,
	Result,
	TOP_TOPICS,
	DAILY_DEVIATIONS,
	DEVIATION,
	SEARCH_USER,
	USER_GALLERY,
} from "./Config.js";

/**
 * Get deviations top topics
 * @returns {Promise<Object>}
 */
export const topTopics = async (): Promise<Result> => {
	let result: Result;
	const Auth = await AUTH_CRED();
	if (Auth.status && Auth.access_token) {
		const data = await Axios.get(TOP_TOPICS(Auth.access_token), {
			...Config,
		}).catch((e: any) => {
			return e.response;
		});
		if (data.data && data.data.results) {
			result = {
				status: true,
				results: data.data.results,
			};
		} else {
			result = { status: false };
		}
	} else {
		result = { status: false };
	}
	return result;
};
/**
 * Get daily deviations top topics
 * @return {Promise<Object>}
 */
export const dailyDeviations = async (): Promise<Result> => {
	let result: Result;
	const Auth = await AUTH_CRED();
	if (Auth.status && Auth.access_token) {
		const data = await Axios.get(DAILY_DEVIATIONS(Auth.access_token), {
			...Config,
		}).catch((e: any) => {
			return e.response;
		});
		if (data.data && data.data.results) {
			result = {
				status: true,
				results: data.data.results,
			};
		} else {
			result = { status: false };
		}
	} else {
		result = { status: false };
	}
	return result;
};
/**
 * Get deviation detail by UUID/deviation id
 * @param {String} deviationId
 * @returns {Promise<Object>}
 */
export const deviationId = async (userid: string): Promise<Result> => {
	let result: Result;
	const Auth = await AUTH_CRED();
	if (Auth.status && Auth.access_token) {
		const data = await Axios.get(DEVIATION(userid, Auth.access_token), {
			...Config,
		}).catch((e: any) => {
			return e.response;
		});
		if (data.data.deviationid) {
			result = { status: true, ...data.data };
		} else if (
			data.data.error &&
			data.data.error_description &&
			data.data.error_details &&
			data.data.error_details.deviationid
		) {
			result = {
				status: false,
				message: data.data.error_details.deviationid,
			};
		} else {
			result = {
				status: false,
				message: "Data misspatch {DEVIATION}",
			};
		}
	} else {
		result = {
			status: false,
			message: "Failed to get access_token {AUTH_CRED}",
		};
	}
	return result;
};
/**
 * Search Deviant Art user
 * @param {String} query
 * @return {Promise<Object>}
 */
export const searchUsers = async (query: string): Promise<Result> => {
	let result: Result;
	const Auth = await AUTH_CRED();
	if (Auth.status && Auth.access_token) {
		const data = await Axios.get(SEARCH_USER(query, Auth.access_token), {
			...Config,
		}).catch((e: any) => {
			return e.response;
		});
		if (data.data.users && data.data.users.length) {
			result = {
				status: true,
				...data.data,
			};
		} else {
			result = {
				status: false,
				message: "Empty users data at {SEARCH_USER}",
			};
		}
	} else {
		result = {
			status: false,
			message: "Failed to get access_token {AUTH_CRED}",
		};
	}
	return result;
};
/**
 * Get user gallery by username
 * @param {String} username
 * @return {Promise<Object>}
 */
export const userGallery = async (username: string): Promise<Result> => {
	let result: Result;
	const Auth = await AUTH_CRED();
	if (Auth.status && Auth.access_token) {
		const data = await Axios.get(USER_GALLERY(username, Auth.access_token), {
			...Config,
		}).catch((e: any) => {
			return e.response;
		});
		if (data.data && data.data.results) {
			result = { status: true, results: data.data.results };
		} else {
			result = {
				status: false,
				message: "Wrong username or idk :/",
			};
		}
	} else {
		result = {
			status: false,
			message: "Failed to get access_token {AUTH_CRED}",
		};
	}
	return result;
};
const deviantArt = {
	topTopics,
	dailyDeviations,
	deviationId,
	searchUsers,
	userGallery,
};
export default deviantArt;
/** @encode */
