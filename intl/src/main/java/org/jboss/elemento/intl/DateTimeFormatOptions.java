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
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;

import static jsinterop.annotations.JsPackage.GLOBAL;

/**
 * Mapping for <a
 * href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options">date
 * time format options</a> passed to {@link DateTimeFormat} constructors.
 * <p>
 * In addition to the actual mappings, this class implements the builder pattern using enums to create the options easily and in
 * a type-safe manner. Some enums are shared with other format option builders of the <code>Intl</code> module and may contain
 * more values than intended for the given method. In that case the allowed values are listed on the method. In all other cases
 * all enum values are applicable.
 * <p>
 * {@snippet class = DateTimeFormatDemo region = dayPeriod}
 *
 * @see <a
 * href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options</a>
 */
@SuppressWarnings("unused")
@JsType(isNative = true, namespace = GLOBAL)
public interface DateTimeFormatOptions {

    // @formatter:off
    @JsOverlay static DateTimeFormatOptions dateTimeFormatOptions() { return Js.uncheckedCast(JsPropertyMap.of()); }
    @JsProperty void setCalendar(String calendar);
    @JsProperty void setDateStyle(String dateStyle);
    @JsProperty void setDay(String day);
    @JsProperty void setDayPeriod(String dayPeriod);
    @JsProperty void setEra(String era);
    @JsProperty void setFormatMatcher(String formatMatcher);
    @JsProperty void setFractionalSecondDigits(int fractionalSecondDigits);
    @JsProperty void setHour(String hour);
    @JsProperty void setHour12(boolean hour12);
    @JsProperty void setHourCycle(String hourCycle);
    @JsProperty void setLocaleMatcher(String localeMatcher);
    @JsProperty void setMinute(String minute);
    @JsProperty void setMonth(String month);
    @JsProperty void setNumberingSystem(String numberingSystem);
    @JsProperty void setSecond(String second);
    @JsProperty void setTimeStyle(String timeStyle);
    @JsProperty void setTimeZone(String timeZone);
    @JsProperty void setTimeZoneName(String timeZoneName);
    @JsProperty void setWeekday(String weekday);
    @JsProperty void setYear(String year);
    // @formatter:on

    // ------------------------------------------------------ builder

    /**
     * The calendar to use, such as "chinese", "gregory", "persian", and so on. For a list of supported calendar types, see
     * {@link Intl#supportedValuesOf(Category)}.
     */
    @JsOverlay
    default DateTimeFormatOptions calendar(Calendar calendar) {
        setCalendar(calendar.value);
        return this;
    }

    /** Allowed values: {@link Format#full}, {@link Format#long_}, {@link Format#medium}. */
    @JsOverlay
    default DateTimeFormatOptions dateStyle(Format dateStyle) {
        setDateStyle(dateStyle.value);
        return this;
    }

    /** Allowed values: {@link Format#numeric}, {@link Format#_2digit}. */
    @JsOverlay
    default DateTimeFormatOptions day(Format day) {
        setDay(day.value);
        return this;
    }

    /** Allowed values: {@link Format#long_}, {@link Format#short_}, {@link Format#narrow}. */
    @JsOverlay
    default DateTimeFormatOptions dayPeriod(Format dayPeriod) {
        setDayPeriod(dayPeriod.value);
        return this;
    }

    /** Allowed values: {@link Format#long_}, {@link Format#short_}, {@link Format#narrow}. */
    @JsOverlay
    default DateTimeFormatOptions era(Format era) {
        setEra(era.value);
        return this;
    }

    /** Allowed values: {@link Matcher#basic}, {@link Matcher#bestFit}. */
    @JsOverlay
    default DateTimeFormatOptions formatMatcher(Matcher formatMatcher) {
        setFormatMatcher(formatMatcher.value);
        return this;
    }

    @JsOverlay
    default DateTimeFormatOptions fractionalSecondDigits(int fractionalSecondDigits) {
        setFractionalSecondDigits(fractionalSecondDigits);
        return this;
    }

    /** Allowed values: {@link Format#numeric}, {@link Format#_2digit}. */
    @JsOverlay
    default DateTimeFormatOptions hour(Format hour) {
        setHour(hour.value);
        return this;
    }

    @JsOverlay
    default DateTimeFormatOptions hour12(boolean hour12) {
        setHour12(hour12);
        return this;
    }

    @JsOverlay
    default DateTimeFormatOptions hourCycle(HourCycle hourCycle) {
        setHourCycle(hourCycle.value);
        return this;
    }

    /** Allowed values: {@link Matcher#lookup}, {@link Matcher#bestFit}. */
    @JsOverlay
    default DateTimeFormatOptions localeMatcher(Matcher localeMatcher) {
        setLocaleMatcher(localeMatcher.value);
        return this;
    }

    /** Allowed values: {@link Format#numeric}, {@link Format#_2digit}. */
    @JsOverlay
    default DateTimeFormatOptions minute(Format minute) {
        setMinute(minute.value);
        return this;
    }

    /**
     * Allowed values: {@link Format#numeric}, {@link Format#_2digit}, {@link Format#long_}, {@link Format#short_},
     * {@link Format#narrow}.
     */
    @JsOverlay
    default DateTimeFormatOptions month(Format month) {
        setMonth(month.value);
        return this;
    }

    /**
     * The numbering system to use for number formatting, such as "arab", "hans", "mathsans", and so on. For a list of supported
     * numbering system types, see {@link Intl#supportedValuesOf(Category)}.
     */
    @JsOverlay
    default DateTimeFormatOptions numberingSystem(String numberingSystem) {
        setNumberingSystem(numberingSystem);
        return this;
    }

    /** Allowed values: {@link Format#numeric}, {@link Format#_2digit}. */
    @JsOverlay
    default DateTimeFormatOptions second(Format second) {
        setSecond(second.value);
        return this;
    }

    /** Allowed values: {@link Format#full}, {@link Format#long_}, {@link Format#medium}. */
    @JsOverlay
    default DateTimeFormatOptions timeStyle(Format dateStyle) {
        setTimeStyle(dateStyle.value);
        return this;
    }

    /**
     * The time zone to use. Can be any <a
     * href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets">IANA
     * time zone name</a>, including named identifiers such as "UTC", "America/New_York", and "Etc/GMT+8", and offset
     * identifiers such as "+01:00", "-2359", and "+23". The default is the runtime's time zone.
     */
    @JsOverlay
    default DateTimeFormatOptions timeZone(String timeZone) {
        setTimeZone(timeZone);
        return this;
    }

    @JsOverlay
    default DateTimeFormatOptions timeZoneName(TimeZoneName timeZoneName) {
        setTimeZoneName(timeZoneName.value);
        return this;
    }

    /** Allowed values: {@link Format#long_}, {@link Format#short_}, {@link Format#narrow}. */
    @JsOverlay
    default DateTimeFormatOptions weekday(Format weekday) {
        setWeekday(weekday.value);
        return this;
    }

    /** Allowed values: {@link Format#numeric}, {@link Format#_2digit}. */
    @JsOverlay
    default DateTimeFormatOptions year(Format year) {
        setYear(year.value);
        return this;
    }
}
