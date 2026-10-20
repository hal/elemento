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
 *
 * Known warnings that cannot be fixed via externs (Closure Compiler limitations):
 *
 * - Intl.Locale vs string: Elemento's DateTimeFormat, ListFormat, NumberFormat, and
 *   RelativeTimeFormat accept Intl.Locale as the locale parameter (which browsers support),
 *   but Closure's built-in externs only declare string|Array<string>. Redeclaring the
 *   constructors causes JSC_DUP_VAR_DECLARATION / JSC_TYPE_REDEFINITION warnings that are
 *   worse than the original type mismatches. These warnings are harmless — Intl.Locale is
 *   accepted by all modern browsers.
 *   Upstream fix: https://github.com/google/closure-compiler/blob/master/externs/browser/intl.js
 */

// ------------------------------------------------------ record types
// Used by elemento-intl as @JsType(isNative=true, namespace=GLOBAL) interfaces.
// Closure needs to know these as structural types (plain JS objects).

/** @record */
function DateTimeFormatOptions() {}

/** @type {string|undefined} */
DateTimeFormatOptions.prototype.calendar;

/** @type {string|undefined} */
DateTimeFormatOptions.prototype.dateStyle;

/** @type {string|undefined} */
DateTimeFormatOptions.prototype.day;

/** @type {string|undefined} */
DateTimeFormatOptions.prototype.dayPeriod;

/** @type {string|undefined} */
DateTimeFormatOptions.prototype.era;

/** @type {string|undefined} */
DateTimeFormatOptions.prototype.formatMatcher;

/** @type {number|undefined} */
DateTimeFormatOptions.prototype.fractionalSecondDigits;

/** @type {string|undefined} */
DateTimeFormatOptions.prototype.hour;

/** @type {boolean|undefined} */
DateTimeFormatOptions.prototype.hour12;

/** @type {string|undefined} */
DateTimeFormatOptions.prototype.hourCycle;

/** @type {string|undefined} */
DateTimeFormatOptions.prototype.localeMatcher;

/** @type {string|undefined} */
DateTimeFormatOptions.prototype.minute;

/** @type {string|undefined} */
DateTimeFormatOptions.prototype.month;

/** @type {string|undefined} */
DateTimeFormatOptions.prototype.numberingSystem;

/** @type {string|undefined} */
DateTimeFormatOptions.prototype.second;

/** @type {string|undefined} */
DateTimeFormatOptions.prototype.timeStyle;

/** @type {string|undefined} */
DateTimeFormatOptions.prototype.timeZone;

/** @type {string|undefined} */
DateTimeFormatOptions.prototype.timeZoneName;

/** @type {string|undefined} */
DateTimeFormatOptions.prototype.weekday;

/** @type {string|undefined} */
DateTimeFormatOptions.prototype.year;

/** @record */
function Duration() {}

/** @type {number|undefined} */
Duration.prototype.years;

/** @type {number|undefined} */
Duration.prototype.months;

/** @type {number|undefined} */
Duration.prototype.weeks;

/** @type {number|undefined} */
Duration.prototype.days;

/** @type {number|undefined} */
Duration.prototype.hours;

/** @type {number|undefined} */
Duration.prototype.minutes;

/** @type {number|undefined} */
Duration.prototype.seconds;

/** @type {number|undefined} */
Duration.prototype.milliseconds;

/** @type {number|undefined} */
Duration.prototype.microseconds;

/** @type {number|undefined} */
Duration.prototype.nanoseconds;

/** @record */
function DurationFormatOptions() {}

/** @type {string|undefined} */
DurationFormatOptions.prototype.style;

/** @type {string|undefined} */
DurationFormatOptions.prototype.localeMatcher;

/** @type {string|undefined} */
DurationFormatOptions.prototype.numberingSystem;

/** @type {number|undefined} */
DurationFormatOptions.prototype.fractionDigits;

/** @type {string|undefined} */
DurationFormatOptions.prototype.years;

/** @type {string|undefined} */
DurationFormatOptions.prototype.yearsDisplay;

/** @type {string|undefined} */
DurationFormatOptions.prototype.months;

/** @type {string|undefined} */
DurationFormatOptions.prototype.monthsDisplay;

/** @type {string|undefined} */
DurationFormatOptions.prototype.weeks;

/** @type {string|undefined} */
DurationFormatOptions.prototype.weeksDisplay;

/** @type {string|undefined} */
DurationFormatOptions.prototype.days;

/** @type {string|undefined} */
DurationFormatOptions.prototype.daysDisplay;

/** @type {string|undefined} */
DurationFormatOptions.prototype.hours;

/** @type {string|undefined} */
DurationFormatOptions.prototype.hoursDisplay;

/** @type {string|undefined} */
DurationFormatOptions.prototype.minutes;

/** @type {string|undefined} */
DurationFormatOptions.prototype.minutesDisplay;

/** @type {string|undefined} */
DurationFormatOptions.prototype.seconds;

/** @type {string|undefined} */
DurationFormatOptions.prototype.secondsDisplay;

/** @type {string|undefined} */
DurationFormatOptions.prototype.milliseconds;

/** @type {string|undefined} */
DurationFormatOptions.prototype.millisecondsDisplay;

/** @type {string|undefined} */
DurationFormatOptions.prototype.microseconds;

/** @type {string|undefined} */
DurationFormatOptions.prototype.microsecondsDisplay;

/** @type {string|undefined} */
DurationFormatOptions.prototype.nanoseconds;

/** @type {string|undefined} */
DurationFormatOptions.prototype.nanosecondsDisplay;

/** @record */
function ListFormatOptions() {}

/** @type {string|undefined} */
ListFormatOptions.prototype.localeMatcher;

/** @type {string|undefined} */
ListFormatOptions.prototype.style;

/** @type {string|undefined} */
ListFormatOptions.prototype.type;

/** @record */
function LocaleOptions() {}

/** @type {string|undefined} */
LocaleOptions.prototype.language;

/** @type {string|undefined} */
LocaleOptions.prototype.script;

/** @type {string|undefined} */
LocaleOptions.prototype.region;

/** @type {string|undefined} */
LocaleOptions.prototype.variants;

/** @type {string|undefined} */
LocaleOptions.prototype.calendar;

/** @type {string|undefined} */
LocaleOptions.prototype.collation;

/** @type {string|undefined} */
LocaleOptions.prototype.numberingSystem;

/** @type {string|undefined} */
LocaleOptions.prototype.caseFirst;

/** @type {string|undefined} */
LocaleOptions.prototype.hourCycle;

/** @type {boolean|undefined} */
LocaleOptions.prototype.numeric;

/** @record */
function NumberFormatOptions() {}

/** @type {string|undefined} */
NumberFormatOptions.prototype.compactDisplay;

/** @type {string|undefined} */
NumberFormatOptions.prototype.currency;

/** @type {string|undefined} */
NumberFormatOptions.prototype.currencyDisplay;

/** @type {string|undefined} */
NumberFormatOptions.prototype.currencySign;

/** @type {string|undefined} */
NumberFormatOptions.prototype.localeMatcher;

/** @type {number|undefined} */
NumberFormatOptions.prototype.maximumFractionDigits;

/** @type {number|undefined} */
NumberFormatOptions.prototype.maximumSignificantDigits;

/** @type {number|undefined} */
NumberFormatOptions.prototype.minimumFractionDigits;

/** @type {number|undefined} */
NumberFormatOptions.prototype.minimumIntegerDigits;

/** @type {number|undefined} */
NumberFormatOptions.prototype.minimumSignificantDigits;

/** @type {string|undefined} */
NumberFormatOptions.prototype.notation;

/** @type {string|undefined} */
NumberFormatOptions.prototype.numberingSystem;

/** @type {number|undefined} */
NumberFormatOptions.prototype.roundingIncrement;

/** @type {string|undefined} */
NumberFormatOptions.prototype.roundingMode;

/** @type {string|undefined} */
NumberFormatOptions.prototype.roundingPriority;

/** @type {string|undefined} */
NumberFormatOptions.prototype.signDisplay;

/** @type {string|undefined} */
NumberFormatOptions.prototype.style;

/** @type {string|undefined} */
NumberFormatOptions.prototype.trailingZeroDisplay;

/** @type {string|undefined} */
NumberFormatOptions.prototype.unit;

/** @type {string|undefined} */
NumberFormatOptions.prototype.unitDisplay;

/** @type {string|undefined} */
NumberFormatOptions.prototype.useGrouping;

/** @record */
function RelativeTimeFormatOptions() {}

/** @type {string|undefined} */
RelativeTimeFormatOptions.prototype.localeMatcher;

/** @type {string|undefined} */
RelativeTimeFormatOptions.prototype.numberingSystem;

/** @type {string|undefined} */
RelativeTimeFormatOptions.prototype.numeric;

/** @type {string|undefined} */
RelativeTimeFormatOptions.prototype.style;

/** @record */
function SupportOptions() {}

/** @type {string|undefined} */
SupportOptions.prototype.localeMatcher;

// ------------------------------------------------------ Intl.DurationFormat

/**
 * @constructor
 * @param {(string|!Intl.Locale|!Array<string>|!Array<!Intl.Locale>)=} locales
 * @param {!Object=} options
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat
 */
Intl.DurationFormat = function(locales, options) {};

/**
 * @param {!Array<string>} locales
 * @param {{localeMatcher: (string|undefined)}=} options
 * @return {!Array<string>}
 */
Intl.DurationFormat.supportedLocalesOf = function(locales, options) {};

/**
 * @param {!Object=} duration
 * @return {string}
 */
Intl.DurationFormat.prototype.format = function(duration) {};

/**
 * @param {!Object=} duration
 * @return {!Array<{type: string, value: string}>}
 */
Intl.DurationFormat.prototype.formatToParts = function(duration) {};

/**
 * @return {{locale: string, numberingSystem: string, style: string, fractionDigits: number}}
 */
Intl.DurationFormat.prototype.resolvedOptions = function() {};

