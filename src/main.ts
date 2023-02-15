import {DateTime} from "luxon";

import fonts from "./fonts.json";

//https://moment.github.io/luxon/#/formatting?id=table-of-tokens

/**
 * Get formatted date from Luxon DateTime
 * @param {DateTime} fromDateLuxon Date to format
 * @param {string} returnFormatLuxon Return format from https://moment.github.io/luxon/#/formatting?id=table-of-tokens. For example 'yyyy-MM-dd'
 * @param {boolean} returnAsInt Return value as an integer.
 * @returns {number | string}
 */
export function formattedDate(fromDateLuxon:DateTime, returnFormatLuxon:string, returnAsInt:boolean = false): number|string {
	let returnVal =fromDateLuxon.toFormat(returnFormatLuxon);
	return returnAsInt ? parseInt(returnVal) : returnVal;
}

/**
 * Get a formatted date
 * @param {string} returnFormatLuxon Return format from https://moment.github.io/luxon/#/formatting?id=table-of-tokens. For example 'yyyy-MM-dd'
 * @param {boolean} returnAsInt Return value as an integer.
 * @returns {number | string}
 */
export function formattedDateNow(returnFormatLuxon:string, returnAsInt:boolean = false):number|string {
	return formattedDate(DateTime.now(), returnFormatLuxon, returnAsInt);
}


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
export function formattedDateWithinFromNow(withinStart:number,withinEnd:number, withinUnit:TimeUnits, returnFormatLuxon:string, returnAsInt:boolean = false): number|string {
	const multipliers = {'s':1, 'min':60, 'h':3600, 'd':86400, 'mo': 2592000, 'y':31536000};

	let timestamp = Math.round(Date.now()/1000) + (Math.random()*(withinEnd-withinStart)+withinStart) * multipliers[withinUnit];
	return formattedDate(DateTime.fromSeconds(timestamp), returnFormatLuxon, returnAsInt);
}

/**
 * get a random font id string
 *
 * @returns {string}
 */
export function fontId():string {
	return fonts[Math.floor(Math.random() * fonts.length)];
}

/**
 * get a random number as a string
 *
 * @param {number} min
 * @param {number} max
 * @param {number} precision
 * @returns {string}
 */
export function numberAsString(min:number, max:number, precision:number = 2):string {
	const nils = Math.pow(10,precision)
	const num = Math.round((min+(Math.random()*(max-min)))*nils)/nils;
	return "" + num;
}

