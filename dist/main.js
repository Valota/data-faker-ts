"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberAsString = exports.fontId = exports.formattedDateWithinFromNow = exports.formattedDateNow = exports.formattedDate = void 0;
const luxon_1 = require("luxon");
const fonts_json_1 = __importDefault(require("./fonts.json"));
//https://moment.github.io/luxon/#/formatting?id=table-of-tokens
/**
 * Get formatted date from Luxon DateTime
 * @param {DateTime} fromDateLuxon Date to format
 * @param {string} returnFormatLuxon Return format from https://moment.github.io/luxon/#/formatting?id=table-of-tokens. For example 'yyyy-MM-dd'
 * @param {boolean} returnAsInt Return value as an integer.
 * @returns {number | string}
 */
function formattedDate(fromDateLuxon, returnFormatLuxon, returnAsInt = false) {
    let returnVal = fromDateLuxon.toFormat(returnFormatLuxon);
    return returnAsInt ? parseInt(returnVal) : returnVal;
}
exports.formattedDate = formattedDate;
/**
 * Get a formatted date
 * @param {string} returnFormatLuxon Return format from https://moment.github.io/luxon/#/formatting?id=table-of-tokens. For example 'yyyy-MM-dd'
 * @param {boolean} returnAsInt Return value as an integer.
 * @returns {number | string}
 */
function formattedDateNow(returnFormatLuxon, returnAsInt = false) {
    return formattedDate(luxon_1.DateTime.now(), returnFormatLuxon, returnAsInt);
}
exports.formattedDateNow = formattedDateNow;
/**
 * Get a formatted random date within the selected time period.
 *
 * @param {number} withinStart Start value, can be negative. For example -12
 * @param {number} withinEnd End value, can be negative. For example 13
 * @param {TimeUnits} withinUnit Unit for the values. For example 'h'
 * @param {string} returnFormatLuxon Return format from https://moment.github.io/luxon/#/formatting?id=table-of-tokens. For example 'yyyy-MM-dd'
 * @param {boolean} returnAsInt Return value as an integer.
 * @returns {number | string}
 * @example
 * //returns for example 2023-02-13 or 2023-02-18 when called on 2023-02-14
 * formattedDateWithinFromNow(-2,5, "d", "yyyy-MM-dd")
 */
function formattedDateWithinFromNow(withinStart, withinEnd, withinUnit, returnFormatLuxon, returnAsInt = false) {
    const multipliers = { 's': 1, 'min': 60, 'h': 3600, 'd': 86400, 'mo': 2592000, 'y': 31536000 };
    let timestamp = Math.round(Date.now() / 1000) + (Math.random() * (withinEnd - withinStart) + withinStart) * multipliers[withinUnit];
    return formattedDate(luxon_1.DateTime.fromSeconds(timestamp), returnFormatLuxon, returnAsInt);
}
exports.formattedDateWithinFromNow = formattedDateWithinFromNow;
/**
 * get a random font id string
 *
 * @returns {string}
 */
function fontId() {
    return fonts_json_1.default[Math.floor(Math.random() * fonts_json_1.default.length)];
}
exports.fontId = fontId;
/**
 * get a random number as a string
 *
 * @param {number} min
 * @param {number} max
 * @param {number} precision
 * @returns {string}
 */
function numberAsString(min, max, precision = 2) {
    const nils = Math.pow(10, precision);
    const num = Math.round((min + (Math.random() * (max - min))) * nils) / nils;
    return "" + num;
}
exports.numberAsString = numberAsString;
