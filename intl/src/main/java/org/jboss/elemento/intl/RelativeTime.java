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

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import elemental2.core.JsDate;
import jsinterop.base.JsArrayLike;

import static org.jboss.elemento.intl.Unit.day;
import static org.jboss.elemento.intl.Unit.hour;
import static org.jboss.elemento.intl.Unit.minute;
import static org.jboss.elemento.intl.Unit.month;
import static org.jboss.elemento.intl.Unit.quarter;
import static org.jboss.elemento.intl.Unit.second;
import static org.jboss.elemento.intl.Unit.year;

/**
 * Based on <a
 * href="https://github.com/yairEO/relative-time/blob/master/relative-time.js">https://github.com/yairEO/relative-time/blob/master/relative-time.js</a>
 *
 * @see <a href="https://github.com/yairEO/relative-time">https://github.com/yairEO/relative-time</a>
 */
public class RelativeTime {

    static final Map<Unit, Long> UNITS = new HashMap<>();

    static {
        UNITS.put(year, 24 * 60 * 60 * 1000 * 365L);
        UNITS.put(quarter, (24 * 60 * 60 * 1000 * 365L) / 4);
        UNITS.put(month, (24 * 60 * 60 * 1000 * 365L) / 12);
        UNITS.put(day, 24 * 60 * 60 * 1000L);
        UNITS.put(hour, 60 * 60 * 1000L);
        UNITS.put(minute, 60 * 1000L);
        UNITS.put(second, 1000L);
    }

    private final RelativeTimeFormat rtf;

    public RelativeTime() {
        this.rtf = new RelativeTimeFormat();
    }

    public RelativeTime(String locale) {
        this.rtf = new RelativeTimeFormat(locale);
    }

    public RelativeTime(JsArrayLike<String> locales) {
        this.rtf = new RelativeTimeFormat(locales);
    }

    public RelativeTime(RelativeTimeFormatOptions options) {
        this.rtf = new RelativeTimeFormat(options);
    }

    public RelativeTime(String locale, RelativeTimeFormatOptions options) {
        this.rtf = new RelativeTimeFormat(locale, options);
    }

    public RelativeTime(JsArrayLike<String> locales, RelativeTimeFormatOptions options) {
        this.rtf = new RelativeTimeFormat(locales, options);
    }

    public final String from(JsDate date) {
        return from(date.valueOf(), JsDate.now());
    }

    public final String from(JsDate from, JsDate to) {
        return from(from.valueOf(), to.valueOf());
    }

    public final String from(Date date) {
        return from(date.getTime(), JsDate.now());
    }

    public final String from(Date from, Date to) {
        return from(from.getTime(), to.getTime());
    }

    public final String from(double date) {
        return from(date, JsDate.now());
    }

    public final String from(double from, double to) {
        long elapsed = (long) (from - to);
        for (Map.Entry<Unit, Long> entry : UNITS.entrySet()) {
            Unit unit = entry.getKey();
            long value = entry.getValue();
            if (Math.abs(elapsed) > value) {
                return rtf.format(elapsed / value, unit);
            }
        }
        return rtf.format(elapsed / 1000, second);
    }
}
