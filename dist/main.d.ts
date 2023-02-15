import { DateTime } from "luxon";
/**
 * Get formatted date from Luxon DateTime
 * @param {DateTime} fromDateLuxon Date to format
 * @param {string} returnFormatLuxon Return format from https://moment.github.io/luxon/#/formatting?id=table-of-tokens. For example 'yyyy-MM-dd'
 * @param {boolean} returnAsInt Return value as an integer.
 * @returns {number | string}
 */
export declare function formattedDate(fromDateLuxon: DateTime, returnFormatLuxon: string, returnAsInt?: boolean): number | string;
/**
 * Get a formatted date
 * @param {string} returnFormatLuxon Return format from https://moment.github.io/luxon/#/formatting?id=table-of-tokens. For example 'yyyy-MM-dd'
 * @param {boolean} returnAsInt Return value as an integer.
 * @returns {number | string}
 */
export declare function formattedDateNow(returnFormatLuxon: string, returnAsInt?: boolean): number | string;
type TimeUnits = 's' | 'min' | 'h' | 'd' | 'mo' | 'y';
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
export declare function formattedDateWithinFromNow(withinStart: number, withinEnd: number, withinUnit: TimeUnits, returnFormatLuxon: string, returnAsInt?: boolean): number | string;
/**
 * get a random font id string
 *
 * @returns {string}
 */
export declare function fontId(): string;
/**
 * get a random number as a string
 *
 * @param {number} min
 * @param {number} max
 * @param {number} precision
 * @returns {string}
 */
export declare function numberAsString(min: number, max: number, precision?: number): string;
export {};
