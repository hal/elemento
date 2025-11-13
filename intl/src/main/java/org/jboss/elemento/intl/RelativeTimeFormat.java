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
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsType;
import jsinterop.base.JsArrayLike;

@SuppressWarnings("unused")
@JsType(isNative = true, namespace = "Intl")
public class RelativeTimeFormat {

    public static native JsArray<String> supportedLocalesOf(String locale);

    public static native JsArray<String> supportedLocalesOf(String locale, SupportOptions options);

    public static native JsArray<String> supportedLocalesOf(JsArrayLike<String> locales);

    public static native JsArray<String> supportedLocalesOf(JsArrayLike<String> locales, SupportOptions options);

    public RelativeTimeFormat() {}

    public RelativeTimeFormat(String locale) {}

    public RelativeTimeFormat(JsArrayLike<String> locales) {}

    public RelativeTimeFormat(RelativeTimeFormatOptions options) {}

    public RelativeTimeFormat(String locale, RelativeTimeFormatOptions options) {}

    public RelativeTimeFormat(JsArrayLike<String> locales, RelativeTimeFormatOptions options) {}

    public native String format(double value, String unit);

    @JsOverlay
    public final String format(double value, Unit unit) {
        return format(value, unit.name());
    }
}
