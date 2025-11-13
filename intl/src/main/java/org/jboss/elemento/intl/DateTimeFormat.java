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
import elemental2.core.JsDate;
import jsinterop.annotations.JsType;
import jsinterop.base.JsArrayLike;
import jsinterop.base.JsPropertyMap;

/**
 * Mapping for <a
 * href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat"><code>Intl.DateTimeFormat</code></a>.
 * <p>
 * {@snippet class = DateTimeFormatDemo region = generalUsage}
 *
 * @see <a
 * href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat</a>
 */
@SuppressWarnings("unused")
@JsType(isNative = true, namespace = "Intl")
public class DateTimeFormat {

    public static native JsArray<String> supportedLocalesOf(String locale);

    public static native JsArray<String> supportedLocalesOf(String locale, SupportOptions options);

    public static native JsArray<String> supportedLocalesOf(JsArrayLike<String> locales);

    public static native JsArray<String> supportedLocalesOf(JsArrayLike<String> locales, SupportOptions options);

    public DateTimeFormat() {}

    public DateTimeFormat(String locale) {}

    public DateTimeFormat(JsArrayLike<String> locales) {}

    public DateTimeFormat(DateTimeFormatOptions options) {}

    public DateTimeFormat(String locale, DateTimeFormatOptions options) {}

    public DateTimeFormat(JsArrayLike<String> locales, DateTimeFormatOptions options) {}

    public native String format(JsDate date);

    public native JsArray<JsPropertyMap<String>> formatToParts(JsDate date);

    public native String formatRange(JsDate start, JsDate end);

    public native JsArray<JsPropertyMap<String>> formatRangeToParts(JsDate start, JsDate end);

    public native JsPropertyMap<String> resolvedOptions();
}
