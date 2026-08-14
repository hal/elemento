// noinspection BadExpressionStatementJS,JSUnusedGlobalSymbols,SpellCheckingInspection,ES6ConvertVarToLetConst,JSCommentMatchesSignature

/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

/**
 * @fileoverview Missing Intl externs not yet in https://github.com/google/closure-compiler/blob/master/externs/browser/intl.js
 * @externs
 */

/**
 * @constructor
 * @param {string|Array<string>=} locales
 * @param {{
 *     localeMatcher: (string|undefined),
 *     numberingSystem: (string|undefined),
 *     style: (string|undefined),
 *     years: (string|undefined),
 *     yearsDisplay: (string|undefined),
 *     months: (string|undefined),
 *     monthsDisplay: (string|undefined),
 *     weeks: (string|undefined),
 *     weeksDisplay: (string|undefined),
 *     days: (string|undefined),
 *     daysDisplay: (string|undefined),
 *     hours: (string|undefined),
 *     hoursDisplay: (string|undefined),
 *     minutes: (string|undefined),
 *     minutesDisplay: (string|undefined),
 *     seconds: (string|undefined),
 *     secondsDisplay: (string|undefined),
 *     milliseconds: (string|undefined),
 *     millisecondsDisplay: (string|undefined),
 *     microseconds: (string|undefined),
 *     microsecondsDisplay: (string|undefined),
 *     nanoseconds: (string|undefined),
 *     nanosecondsDisplay: (string|undefined),
 *     fractionDigits: (number|undefined)
 *     }=}
 *         options
 */
Intl.DurationFormat = function (locales, options) {
};

/**
 * @param {Array<string>} locales
 * @param {{localeMatcher: (string|undefined)}=} options
 * @return {Array<string>}
 */
Intl.DurationFormat.supportedLocalesOf = function(locales, options) {};

/**
 * @param {{
 *     years: (number|undefined),
 *     months: (number|undefined),
 *     weeks: (number|undefined),
 *     days: (number|undefined),
 *     hours: (number|undefined),
 *     minutes: (number|undefined),
 *     seconds: (number|undefined),
 *     milliseconds: (number|undefined),
 *     microseconds: (number|undefined),
 *     nanoseconds: (number|undefined),
 *     }=}
 *         duration
 * @return {string}
 */
Intl.DurationFormat.prototype.format = function(num) {};

/**
 * @param {number} num
 * @return {!Array<{type: string, value: string}>}
 * @see http://www.ecma-international.org/ecma-402/#sec-intl.numberformat.prototype.formattoparts
 */
Intl.DurationFormat.prototype.formatToParts = function(num) {};

/**
 * @return {{locale: string, numberingSystem: string, style: string, fractionDigits: number }}
 */
Intl.DurationFormat.prototype.resolvedOptions = function() {};
