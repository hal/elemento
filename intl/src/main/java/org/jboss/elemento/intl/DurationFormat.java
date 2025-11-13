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
import jsinterop.base.JsArrayLike;
import jsinterop.base.JsPropertyMap;

/**
 * Mapping for <a
 * href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat"><code>Intl.DurationFormat</code></a>.
 * <p>
 * {@snippet class = DurationFormatDemo region = generalUsage}
 *
 * @see <a
 * href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat</a>
 */
@SuppressWarnings("unused")
@JsType(isNative = true, namespace = "Intl")
public class DurationFormat {

    // @formatter:off
    public static native JsArray<String> supportedLocalesOf(String locale);
    public static native JsArray<String> supportedLocalesOf(String locale, SupportOptions options);
    public static native JsArray<String> supportedLocalesOf(JsArrayLike<String> locales);
    public static native JsArray<String> supportedLocalesOf(JsArrayLike<String> locales, SupportOptions options);

    public DurationFormat() {}
    public DurationFormat(String locale) {}
    public DurationFormat(JsArrayLike<String> locales) {}
    public DurationFormat(DurationFormatOptions options) {}
    public DurationFormat(String locale, DurationFormatOptions options) {}
    public DurationFormat(JsArrayLike<String> locales, DurationFormatOptions options) {}

    public native String format(Duration duration);
    public native JsArray<JsPropertyMap<String>> formatToParts(Duration duration);
    public native JsPropertyMap<String> resolvedOptions();
    // @formatter:on
}
