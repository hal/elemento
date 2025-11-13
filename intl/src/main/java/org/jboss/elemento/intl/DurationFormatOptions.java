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
package org.jboss.elemento.intl;

import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;

/**
 * Mapping for <a
 * href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/DurationFormat#options">duration
 * format options</a> passed to {@link DurationFormat} constructors.
 * <p>
 * In addition to the actual mappings, this class implements the builder pattern using enums to create the options easily and in
 * a type-safe manner. Some enums are shared with other format option builders of the <code>Intl</code> module and may contain
 * more values than intended for the given method. In that case the allowed values are listed on the method. In all other cases
 * all enum values are applicable.
 * <p>
 * {@snippet class = DurationFormatDemo region = generalUsage}
 *
 * @see <a
 * href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/DurationFormat#options">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/DurationFormat#options</a>
 */
@SuppressWarnings("unused")
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface DurationFormatOptions {

    // @formatter:off
    @JsOverlay static DurationFormatOptions create() { return Js.uncheckedCast(JsPropertyMap.of()); }
    @JsProperty void setDays(String days);
    @JsProperty void setDaysDisplay(String daysDisplay);
    @JsProperty void setFractionDigits(double fractionDigits);
    @JsProperty void setHours(String hours);
    @JsProperty void setHoursDisplay(String hoursDisplay);
    @JsProperty void setLocaleMatcher(String localeMatcher);
    @JsProperty void setMicroSeconds(String microSeconds);
    @JsProperty void setMicroSecondsDisplay(String microSecondsDisplay);
    @JsProperty void setMilliSeconds(String milliSeconds);
    @JsProperty void setMilliSecondsDisplay(String milliSecondsDisplay);
    @JsProperty void setMinutes(String minutes);
    @JsProperty void setMinutesDisplay(String minutesDisplay);
    @JsProperty void setMonths(String months);
    @JsProperty void setMonthsDisplay(String monthsDisplay);
    @JsProperty void setNanoSeconds(String nanoSeconds);
    @JsProperty void setNanoSecondsDisplay(String nanoSecondsDisplay);
    @JsProperty void setNumberingSystem(String numberingSystem);
    @JsProperty void setSeconds(String seconds);
    @JsProperty void setSecondsDisplay(String secondsDisplay);
    @JsProperty void setStyle(String style);
    @JsProperty void setWeeks(String weeks);
    @JsProperty void setWeeksDisplay(String weeksDisplay);
    @JsProperty void setYears(String years);
    @JsProperty void setYearsDisplay(String yearsDisplay);
    // @formatter:on

    // ------------------------------------------------------ builder

    /** Allowed values: {@link Format#long_}, {@link Format#short_}, {@link Format#narrow}. */
    @JsOverlay
    default DurationFormatOptions days(Format days) {
        setDays(days.value);
        return this;
    }

    @JsOverlay
    default DurationFormatOptions daysDisplay(When daysDisplay) {
        setDaysDisplay(daysDisplay.value);
        return this;
    }

    /**
     * Number of how many fractional second digits to display in the output. Possible values are from 0 to 9.
     */
    @JsOverlay
    default DurationFormatOptions fractionDigits(double fractionDigits) {
        setFractionDigits(fractionDigits);
        return this;
    }

    /**
     * Allowed values: {@link Format#long_}, {@link Format#short_}, {@link Format#narrow}, {@link Format#numeric},
     * {@link Format#_2digit}.
     */
    @JsOverlay
    default DurationFormatOptions hours(Format hours) {
        setHours(hours.value);
        return this;
    }

    @JsOverlay
    default DurationFormatOptions hoursDisplay(When hoursDisplay) {
        setHoursDisplay(hoursDisplay.value);
        return this;
    }

    /** Allowed values: {@link Matcher#lookup}, {@link Matcher#bestFit}. */
    @JsOverlay
    default DurationFormatOptions localeMatcher(Matcher localeMatcher) {
        setLocaleMatcher(localeMatcher.value);
        return this;
    }

    /**
     * If {@link #milliSeconds(Format)} is {@link Format#numeric} or {@link Format#_2digit}, the only possible value is
     * {@link Format#numeric}; the default is {@link Format#numeric}. Otherwise, possible values are {@link Format#long_},
     * {@link Format#short_}, {@link Format#narrow}, {@link Format#numeric}.
     */
    @JsOverlay
    default DurationFormatOptions microSeconds(Format microSeconds) {
        setMicroSeconds(microSeconds.value);
        return this;
    }

    @JsOverlay
    default DurationFormatOptions microSecondsDisplay(When microSecondsDisplay) {
        setMicroSecondsDisplay(microSecondsDisplay.value);
        return this;
    }

    /**
     * If {@link #seconds(Format)} is {@link Format#numeric} or {@link Format#_2digit}, the only possible value is
     * {@link Format#numeric}; the default is {@link Format#numeric}. Otherwise, possible values are {@link Format#long_},
     * {@link Format#short_}, {@link Format#narrow}, {@link Format#numeric}.
     */
    @JsOverlay
    default DurationFormatOptions milliSeconds(Format milliSeconds) {
        setMilliSeconds(milliSeconds.value);
        return this;
    }

    @JsOverlay
    default DurationFormatOptions milliSecondsDisplay(When milliSecondsDisplay) {
        setMilliSecondsDisplay(milliSecondsDisplay.value);
        return this;
    }

    /**
     * If {@link #hours(Format)} is {@link Format#numeric} or {@link Format#_2digit}, possible values are {@link Format#numeric}
     * and {@link Format#_2digit}, and {@link Format#numeric} is normalized to {@link Format#_2digit}; the default is
     * {@link Format#numeric}. Otherwise, possible values are {@link Format#long_}, {@link Format#short_},
     * {@link Format#narrow}, {@link Format#numeric}, and {@link Format#_2digit}.
     */
    @JsOverlay
    default DurationFormatOptions minutes(Format minutes) {
        setMinutes(minutes.value);
        return this;
    }

    @JsOverlay
    default DurationFormatOptions minutesDisplay(When minutesDisplay) {
        setMinutesDisplay(minutesDisplay.value);
        return this;
    }

    /** Allowed values: {@link Format#long_}, {@link Format#short_}, {@link Format#narrow}. */
    @JsOverlay
    default DurationFormatOptions months(Format months) {
        setMonths(months.value);
        return this;
    }

    @JsOverlay
    default DurationFormatOptions monthsDisplay(When monthsDisplay) {
        setMonthsDisplay(monthsDisplay.value);
        return this;
    }

    /**
     * If {@link #microSeconds(Format)} is {@link Format#numeric} or {@link Format#_2digit}, the only possible value is
     * {@link Format#numeric}; the default is {@link Format#numeric}. Otherwise, possible values are {@link Format#long_},
     * {@link Format#short_}, {@link Format#narrow}, {@link Format#numeric}.
     */
    @JsOverlay
    default DurationFormatOptions nanoSeconds(Format nanoSeconds) {
        setNanoSeconds(nanoSeconds.value);
        return this;
    }

    @JsOverlay
    default DurationFormatOptions nanoSecondsDisplay(When nanoSecondsDisplay) {
        setNanoSecondsDisplay(nanoSecondsDisplay.value);
        return this;
    }

    /**
     * The numbering system to use for number formatting, such as "arab", "hans", "mathsans", and so on. For a list of supported
     * numbering system types, see {@link Intl#supportedValuesOf(Category)}.
     */
    @JsOverlay
    default DurationFormatOptions numberingSystem(String numberingSystem) {
        setNumberingSystem(numberingSystem);
        return this;
    }

    /**
     * If {@link #minutes(Format)} is {@link Format#numeric} or {@link Format#_2digit}, possible values are
     * {@link Format#numeric} and {@link Format#_2digit}, and {@link Format#numeric} is normalized to {@link Format#_2digit};
     * the default is {@link Format#numeric}. Otherwise, possible values are {@link Format#long_}, {@link Format#short_},
     * {@link Format#narrow}, {@link Format#numeric}, and {@link Format#_2digit}.
     */
    @JsOverlay
    default DurationFormatOptions seconds(Format seconds) {
        setSeconds(seconds.value);
        return this;
    }

    @JsOverlay
    default DurationFormatOptions secondsDisplay(When secondsDisplay) {
        setSecondsDisplay(secondsDisplay.value);
        return this;
    }

    /** Allowed values: {@link Format#long_}, {@link Format#short_}, {@link Format#narrow}, {@link Format#digital}. */
    @JsOverlay
    default DurationFormatOptions style(Format style) {
        setStyle(style.value);
        return this;
    }

    /** Allowed values: {@link Format#long_}, {@link Format#short_}, {@link Format#narrow}. */
    @JsOverlay
    default DurationFormatOptions weeks(Format weeks) {
        setWeeks(weeks.value);
        return this;
    }

    @JsOverlay
    default DurationFormatOptions weeksDisplay(When weeksDisplay) {
        setWeeksDisplay(weeksDisplay.value);
        return this;
    }

    /** Allowed values: {@link Format#long_}, {@link Format#short_}, {@link Format#narrow}. */
    @JsOverlay
    default DurationFormatOptions years(Format years) {
        setYears(years.value);
        return this;
    }

    @JsOverlay
    default DurationFormatOptions yearsDisplay(When yearsDisplay) {
        setYearsDisplay(yearsDisplay.value);
        return this;
    }
}
