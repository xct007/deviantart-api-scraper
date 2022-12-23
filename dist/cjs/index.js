"use strict";
/**
 * @author FrierenDv
 * @version 1.0.0
 * @see @link https://guthub.com/xct007/deviantart
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.userGallery = exports.searchUsers = exports.deviationId = exports.dailyDeviations = exports.topTopics = void 0;
const Config_js_1 = require("./Config.js");
/**
 * Get deviations top topics
 * @returns {Promise<Object>}
 */
const topTopics = async () => {
    let result;
    const Auth = await (0, Config_js_1.AUTH_CRED)();
    if (Auth.status && Auth.access_token) {
        const data = await Config_js_1.Axios.get((0, Config_js_1.TOP_TOPICS)(Auth.access_token), {
            ...Config_js_1.Config,
        }).catch((e) => {
            return e.response;
        });
        if (data.data && data.data.results) {
            result = {
                status: true,
                results: data.data.results,
            };
        }
        else {
            result = { status: false };
        }
    }
    else {
        result = { status: false };
    }
    return result;
};
exports.topTopics = topTopics;
/**
 * Get daily deviations top topics
 * @return {Promise<Object>}
 */
const dailyDeviations = async () => {
    let result;
    const Auth = await (0, Config_js_1.AUTH_CRED)();
    if (Auth.status && Auth.access_token) {
        const data = await Config_js_1.Axios.get((0, Config_js_1.DAILY_DEVIATIONS)(Auth.access_token), {
            ...Config_js_1.Config,
        }).catch((e) => {
            return e.response;
        });
        if (data.data && data.data.results) {
            result = {
                status: true,
                results: data.data.results,
            };
        }
        else {
            result = { status: false };
        }
    }
    else {
        result = { status: false };
    }
    return result;
};
exports.dailyDeviations = dailyDeviations;
/**
 * Get deviation detail by UUID/deviation id
 * @param {String} deviationId
 * @returns {Promise<Object>}
 */
const deviationId = async (userid) => {
    let result;
    const Auth = await (0, Config_js_1.AUTH_CRED)();
    if (Auth.status && Auth.access_token) {
        const data = await Config_js_1.Axios.get((0, Config_js_1.DEVIATION)(userid, Auth.access_token), {
            ...Config_js_1.Config,
        }).catch((e) => {
            return e.response;
        });
        if (data.data.deviationid) {
            result = { status: true, ...data.data };
        }
        else if (data.data.error &&
            data.data.error_description &&
            data.data.error_details &&
            data.data.error_details.deviationid) {
            result = {
                status: false,
                message: data.data.error_details.deviationid,
            };
        }
        else {
            result = {
                status: false,
                message: "Data misspatch {DEVIATION}",
            };
        }
    }
    else {
        result = {
            status: false,
            message: "Failed to get access_token {AUTH_CRED}",
        };
    }
    return result;
};
exports.deviationId = deviationId;
/**
 * Search Deviant Art user
 * @param {String} query
 * @return {Promise<Object>}
 */
const searchUsers = async (query) => {
    let result;
    const Auth = await (0, Config_js_1.AUTH_CRED)();
    if (Auth.status && Auth.access_token) {
        const data = await Config_js_1.Axios.get((0, Config_js_1.SEARCH_USER)(query, Auth.access_token), {
            ...Config_js_1.Config,
        }).catch((e) => {
            return e.response;
        });
        if (data.data.users && data.data.users.length) {
            result = {
                status: true,
                ...data.data,
            };
        }
        else {
            result = {
                status: false,
                message: "Empty users data at {SEARCH_USER}",
            };
        }
    }
    else {
        result = {
            status: false,
            message: "Failed to get access_token {AUTH_CRED}",
        };
    }
    return result;
};
exports.searchUsers = searchUsers;
/**
 * Get user gallery by username
 * @param {String} username
 * @return {Promise<Object>}
 */
const userGallery = async (username) => {
    let result;
    const Auth = await (0, Config_js_1.AUTH_CRED)();
    if (Auth.status && Auth.access_token) {
        const data = await Config_js_1.Axios.get((0, Config_js_1.USER_GALLERY)(username, Auth.access_token), {
            ...Config_js_1.Config,
        }).catch((e) => {
            return e.response;
        });
        if (data.data && data.data.results) {
            result = { status: true, results: data.data.results };
        }
        else {
            result = {
                status: false,
                message: "Wrong username or idk :/",
            };
        }
    }
    else {
        result = {
            status: false,
            message: "Failed to get access_token {AUTH_CRED}",
        };
    }
    return result;
};
exports.userGallery = userGallery;
const deviantArt = {
    topTopics: exports.topTopics,
    dailyDeviations: exports.dailyDeviations,
    deviationId: exports.deviationId,
    searchUsers: exports.searchUsers,
    userGallery: exports.userGallery,
};
exports.default = deviantArt;
/** @encode */
//# sourceMappingURL=index.js.map