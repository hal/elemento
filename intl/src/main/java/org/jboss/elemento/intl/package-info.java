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
 * Provides type-safe Java mappings for the JavaScript
 * <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl">Intl API</a>,
 * enabling locale-aware formatting of dates, times, numbers, lists, durations, and relative times.
 *
 * <p>This package wraps the native JavaScript Intl functionality with a fluent, builder-based API and introduces
 * type-safe enums for configuration options, making internationalization in GWT applications more convenient and
 * less error-prone.</p>
 *
 * <h2>Main Components</h2>
 *
 * <h3>Formatters</h3>
 * <dl>
 *     <dt>{@link org.jboss.elemento.intl.DateTimeFormat}</dt>
 *     <dd>Format dates and times according to locale-specific conventions. Supports various date/time styles
 *     (full, long, medium, short) and customizable formatting options.</dd>
 *
 *     <dt>{@link org.jboss.elemento.intl.NumberFormat}</dt>
 *     <dd>Format numbers, currencies, percentages, and units with locale-specific separators, decimal handling,
 *     and display options.</dd>
 *
 *     <dt>{@link org.jboss.elemento.intl.ListFormat}</dt>
 *     <dd>Format lists of items with locale-specific conjunctions ("and"), disjunctions ("or"), or as units.</dd>
 *
 *     <dt>{@link org.jboss.elemento.intl.DurationFormat}</dt>
 *     <dd>Format time durations (hours, minutes, seconds, etc.) in a human-readable, locale-aware format.</dd>
 *
 *     <dt>{@link org.jboss.elemento.intl.RelativeTimeFormat}</dt>
 *     <dd>Format relative time values like "3 days ago" or "in 2 months" according to locale conventions.</dd>
 * </dl>
 *
 * <h3>Locale Support</h3>
 * <dl>
 *     <dt>{@link org.jboss.elemento.intl.Locale}</dt>
 *     <dd>Represents and manipulates locale identifiers with support for calendar systems, numbering systems,
 *     collation, and other locale-specific properties.</dd>
 *
 *     <dt>{@link org.jboss.elemento.intl.Intl}</dt>
 *     <dd>Provides utility methods for canonicalizing locales and querying supported values for various
 *     internationalization categories.</dd>
 * </dl>
 *
 * <h2>Usage Examples</h2>
 *
 * <h3>Date and Time Formatting</h3>
 * {@snippet :
 * import static org.jboss.elemento.intl.DateTimeFormat.dateTimeFormat;
 * import static org.jboss.elemento.intl.DateTimeFormatOptions.dateTimeFormatOptions;
 * import static org.jboss.elemento.intl.Format.full;
 *
 * var date = new JsDate(2020, 11, 20, 3, 23, 16, 738);
 *
 * // Format with default locale
 * dateTimeFormat("en-US").format(new JsDate());
 * // → "12/20/2020"
 *
 * // Format with full date and time style
 * dateTimeFormat("en-GB", dateTimeFormatOptions()
 *         .dateStyle(full)
 *         .timeStyle(full)
 *         .timeZone("Australia/Sydney")).format(date);
 * // → "Sunday, 20 December 2020 at 14:23:16 GMT+11"
 * }
 *
 * <h3>Number Formatting</h3>
 * {@snippet :
 * import static org.jboss.elemento.intl.Format.currency;
 * import static org.jboss.elemento.intl.NumberFormat.numberFormat;
 * import static org.jboss.elemento.intl.NumberFormatOptions.numberFormatOptions;
 *
 * double number = 123456.789;
 *
 * // Format as currency
 * numberFormat("de-DE", numberFormatOptions()
 *         .style(currency)
 *         .currency("EUR"))
 *         .format(number);
 * // → "123.456,79 €"
 *
 * // Limit to significant digits
 * numberFormat("en-IN", numberFormatOptions()
 *         .maximumSignificantDigits(3))
 *         .format(number);
 * // → "1,23,000"
 * }
 *
 * <h3>List Formatting</h3>
 * {@snippet :
 * import static org.jboss.elemento.intl.Grouping.conjunction;
 * import static org.jboss.elemento.intl.ListFormat.listFormat;
 * import static org.jboss.elemento.intl.ListFormatOptions.listFormatOptions;
 * import static org.jboss.elemento.intl.Format.long_;
 *
 * var vehicles = JsArray.of("Motorcycle", "Bus", "Car");
 *
 * listFormat("en", listFormatOptions()
 *         .style(long_)
 *         .type(conjunction)).format(vehicles);
 * // → "Motorcycle, Bus, and Car"
 * }
 *
 * <h3>Duration Formatting</h3>
 * {@snippet :
 * import static org.jboss.elemento.intl.Duration.duration;
 * import static org.jboss.elemento.intl.DurationFormat.durationFormat;
 * import static org.jboss.elemento.intl.DurationFormatOptions.durationFormatOptions;
 * import static org.jboss.elemento.intl.Format.long_;
 *
 * var duration = duration()
 *         .hours(1)
 *         .minutes(46)
 *         .seconds(40);
 *
 * durationFormat("fr-FR", durationFormatOptions().style(long_)).format(duration);
 * // → "1 heure, 46 minutes et 40 secondes"
 * }
 *
 * <h3>Relative Time Formatting</h3>
 * {@snippet :
 * import static org.jboss.elemento.intl.RelativeTimeFormat.relativeTimeFormat;
 * import static org.jboss.elemento.intl.RelativeTimeFormatOptions.relativeTimeFormatOptions;
 * import static org.jboss.elemento.intl.Format.short_;
 * import static org.jboss.elemento.intl.Unit.day;
 * import static org.jboss.elemento.intl.Unit.quarter;
 *
 * var rtf = relativeTimeFormat("en", relativeTimeFormatOptions().style(short_));
 *
 * rtf.format(3, quarter);
 * // → "in 3 qtrs."
 *
 * rtf.format(-1, day);
 * // → "1 day ago"
 * }
 *
 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl">MDN Web Docs: Intl</a>
 */
package org.jboss.elemento.intl;