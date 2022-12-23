/**
 * @author FrierenDv
 * @version 1.0.0
 * @see @link https://guthub.com/xct007/deviantart
 */
import { Result } from "./Config.js";
/**
 * Get deviations top topics
 * @returns {Promise<Object>}
 */
export declare const topTopics: () => Promise<Result>;
/**
 * Get daily deviations top topics
 * @return {Promise<Object>}
 */
export declare const dailyDeviations: () => Promise<Result>;
/**
 * Get deviation detail by UUID/deviation id
 * @param {String} deviationId
 * @returns {Promise<Object>}
 */
export declare const deviationId: (userid: string) => Promise<Result>;
/**
 * Search Deviant Art user
 * @param {String} query
 * @return {Promise<Object>}
 */
export declare const searchUsers: (query: string) => Promise<Result>;
/**
 * Get user gallery by username
 * @param {String} username
 * @return {Promise<Object>}
 */
export declare const userGallery: (username: string) => Promise<Result>;
declare const deviantArt: {
    topTopics: () => Promise<Result>;
    dailyDeviations: () => Promise<Result>;
    deviationId: (userid: string) => Promise<Result>;
    searchUsers: (query: string) => Promise<Result>;
    userGallery: (username: string) => Promise<Result>;
};
export default deviantArt;
/** @encode */
//# sourceMappingURL=index.d.ts.map