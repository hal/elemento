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

import elemental2.core.JsArray;
import jsinterop.annotations.JsType;

import static jsinterop.annotations.JsPackage.GLOBAL;

/**
 * Mapping for <a
 * href="https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale"><code>Intl.Locale</code></a>.
 * <p>
 * {@snippet class = LocaleDemo region = generalUsage}
 *
 * @see <a
 * href="https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale">https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale</a>
 */
@SuppressWarnings("unused")
@JsType(isNative = true, namespace = GLOBAL, name = "Intl.Locale")
public class Locale {

    // @formatter:off
    public String baseName;
    public String calendar;
    public String caseFirst;
    public String collation;
    public String hourCycle;
    public String language;
    public String numberingSystem;
    public boolean numeric;
    public String region;
    public String script;
    public String variants;

    public Locale(String locale) {}
    public Locale(String locale, LocaleOptions options) {}

    public native JsArray<String> getCalendars();
    public native JsArray<String> getCollations();
    public native JsArray<String> getHourCycles();
    public native JsArray<String> getNumberingSystems();
    public native TextInfo getTextInfo();
    public native JsArray<String> getTimeZones();
    public native WeekInfo getWeekInfo();
    public native Locale maximize();
    public native Locale minimize();
    // @formatter:on
}
