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

/** @record */
function Duration() {}

/** @record */
function DurationFormatOptions() {}

/** @record */
function ListFormatOptions() {}

/** @record */
function LocaleOptions() {}

/** @record */
function NumberFormatOptions() {}

/** @record */
function RelativeTimeFormatOptions() {}

/** @record */
function SupportOptions() {}

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

