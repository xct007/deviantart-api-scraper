import axios from "axios";
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
export const TOP_TOPICS = (token) => `${BASE_URL}/api/v1/oauth2/browse/toptopics?access_token=${token}&with_session=false&mature_content=true`;
export const DAILY_DEVIATIONS = (token) => `${BASE_URL}/api/v1/oauth2/browse/dailydeviations?access_token=${token}&with_session=false&mature_content=true`;
export const DEVIATION = (userid, token) => `${BASE_URL}/api/v1/oauth2/deviation/${userid}?access_token=${token}&expand=user.watch%2Cdeviation.fulltext&with_session=false&mature_content=true`;
export const USER_GALLERY = (username, token) => `${BASE_URL}/api/oauth2/gallery/all?access_token=${token}&username=${username}&mature_content=true&offset=24&limit=24&with_session=false`;
export const SEARCH_USER = (query, token) => `${BASE_URL}/api/v1/oauth2/browse/deviants/search?access_token=${token}&q=${query}&limit=50&expand=user.detail%2Cuser.stats%2Cuser.profile&with_session=false&mature_content=true`;
export const Config = {
    headers: {
        "da-session-id": SESSION_ID,
        "da-minor-version": VERSION,
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": "DevianArt-Android/3.3.0",
        "Accept-Encoding": "deflate",
    },
};
export const AUTH_CRED = async () => {
    let Params = new URLSearchParams();
    Params.append("client_id", CLIENT_ID);
    Params.append("client_secret", CLIENT_SECRET);
    const data = await axios
        .request({
        url: `${BASE_URL}/oauth2/token?grant_type=client_credentials&with_session=false&mature_content=1`,
        method: "POST",
        ...Config,
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
export const Axios = axios.create({
    httpsAgent: new https.Agent({ keepAlive: true }),
});
//# sourceMappingURL=Config.js.map