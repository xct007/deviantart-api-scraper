"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Axios = exports.AUTH_CRED = exports.Config = exports.SEARCH_USER = exports.USER_GALLERY = exports.DEVIATION = exports.DAILY_DEVIATIONS = exports.TOP_TOPICS = void 0;
const axios_1 = __importDefault(require("axios"));
const https = require("https");
const BASE_URL = "https://www.deviantart.com";
/**
 * @warning
 * <CLIENT_SECRET> AND <SESSION_ID> MIGHT BE CHANGE
 * BECAUSE WITHOUT THAT WE CANT MAKE REQUEST TO API.
 */
const CLIENT_ID = 1700;
const CLIENT_SECRET = "865ba884bab93564ddef9eed03b" + "d7bd06cd49b5b8a0834c0e845fbc643345fb8";
const SESSION_ID = "90b92cb846a2bf1b4beb02e65a8f9e2a";
const VERSION = 20210526;
/** BASE ENPOINT */
const TOP_TOPICS = (token) => `${BASE_URL}/api/v1/oauth2/browse/toptopics?access_token=${token}&with_session=false&mature_content=true`;
exports.TOP_TOPICS = TOP_TOPICS;
const DAILY_DEVIATIONS = (token) => `${BASE_URL}/api/v1/oauth2/browse/dailydeviations?access_token=${token}&with_session=false&mature_content=true`;
exports.DAILY_DEVIATIONS = DAILY_DEVIATIONS;
const DEVIATION = (userid, token) => `${BASE_URL}/api/v1/oauth2/deviation/${userid}?access_token=${token}&expand=user.watch%2Cdeviation.fulltext&with_session=false&mature_content=true`;
exports.DEVIATION = DEVIATION;
const USER_GALLERY = (username, token) => `${BASE_URL}/api/oauth2/gallery/all?access_token=${token}&username=${username}&mature_content=true&offset=24&limit=24&with_session=false`;
exports.USER_GALLERY = USER_GALLERY;
const SEARCH_USER = (query, token) => `${BASE_URL}/api/v1/oauth2/browse/deviants/search?access_token=${token}&q=${query}&limit=50&expand=user.detail%2Cuser.stats%2Cuser.profile&with_session=false&mature_content=true`;
exports.SEARCH_USER = SEARCH_USER;
exports.Config = {
    headers: {
        "da-session-id": SESSION_ID,
        "da-minor-version": VERSION,
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": "DevianArt-Android/3.3.0",
        "Accept-Encoding": "deflate",
    },
};
const AUTH_CRED = async () => {
    let Params = new URLSearchParams();
    Params.append("client_id", CLIENT_ID);
    Params.append("client_secret", CLIENT_SECRET);
    const data = await axios_1.default
        .request({
        url: `${BASE_URL}/oauth2/token?grant_type=client_credentials&with_session=false&mature_content=1`,
        method: "POST",
        ...exports.Config,
        data: Params,
    })
        .catch((error) => {
        return error.response;
    });
    if (data.data && data.data.status && data.data.access_token) {
        return {
            ...data.data,
        };
    }
    else {
        return {
            status: false,
            error: `:{`,
        };
    }
};
exports.AUTH_CRED = AUTH_CRED;
exports.Axios = axios_1.default.create({
    httpsAgent: new https.Agent({ keepAlive: true }),
});
//# sourceMappingURL=Config.js.map