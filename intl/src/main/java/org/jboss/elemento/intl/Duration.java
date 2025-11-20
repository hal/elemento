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
 * href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration"><code>Temporal.Duration</code></a>.
 * <p>
 * <p>
 * In addition to the actual mappings, this class implements the builder pattern to create the options easily and in a type-safe
 * manner.
 *
 * @see <a
 * href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration</a>
 */
@JsType(isNative = true, namespace = GLOBAL)
public interface Duration {

    // @formatter:off
    @JsOverlay static Duration create() {
        return Js.uncheckedCast(JsPropertyMap.of());
    }
    @JsProperty void setYears(int years);
    @JsProperty void setMonths(int months);
    @JsProperty void setWeeks(int weeks);
    @JsProperty void setDays(int days);
    @JsProperty void setHours(int hours);
    @JsProperty void setMinutes(int minutes);
    @JsProperty void setSeconds(int seconds);
    @JsProperty void setMilliSeconds(int milliSeconds);
    @JsProperty void setMicroSeconds(int microSeconds);
    @JsProperty void setNanoSeconds(int nanoSeconds);
    // @formatter:on

    // ------------------------------------------------------ builder

    @JsOverlay
    default Duration years(int years) {
        setYears(years);
        return this;
    }

    @JsOverlay
    default Duration months(int months) {
        setMonths(months);
        return this;
    }

    @JsOverlay
    default Duration weeks(int weeks) {
        setWeeks(weeks);
        return this;
    }

    @JsOverlay
    default Duration days(int days) {
        setDays(days);
        return this;
    }

    @JsOverlay
    default Duration hours(int hours) {
        setHours(hours);
        return this;
    }

    @JsOverlay
    default Duration minutes(int minutes) {
        setMinutes(minutes);
        return this;
    }

    @JsOverlay
    default Duration seconds(int seconds) {
        setSeconds(seconds);
        return this;
    }

    @JsOverlay
    default Duration milliSeconds(int milliSeconds) {
        setMilliSeconds(milliSeconds);
        return this;
    }

    @JsOverlay
    default Duration microSeconds(int microSeconds) {
        setMicroSeconds(microSeconds);
        return this;
    }

    @JsOverlay
    default Duration nanoSeconds(int nanoSeconds) {
        setNanoSeconds(nanoSeconds);
        return this;
    }
}
