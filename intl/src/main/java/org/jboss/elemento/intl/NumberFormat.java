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
import jsinterop.base.JsPropertyMap;

import static jsinterop.annotations.JsPackage.GLOBAL;
import static jsinterop.base.Js.undefined;
import static org.jboss.elemento.intl.NumberFormatOptions.numberFormatOptions;

/**
 * Mapping for <a
 * href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat"><code>Intl.NumberFormat</code></a>.
 * <p>
 * {@snippet class = NumberFormatDemo region = generalUsage}
 *
 * @see <a
 * href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat</a>
 */
@SuppressWarnings("unused")
@JsType(isNative = true, namespace = GLOBAL, name = "Intl.NumberFormat")
public class NumberFormat {

    // ------------------------------------------------------ factory

    @JsOverlay
    public static NumberFormat numberFormat() {
        return new NumberFormat(undefined(), numberFormatOptions());
    }

    @JsOverlay
    public static NumberFormat numberFormat(String locale) {
        return new NumberFormat(locale, numberFormatOptions());
    }

    @JsOverlay
    public static NumberFormat numberFormat(Locale locale) {
        return new NumberFormat(locale, numberFormatOptions());
    }

    @JsOverlay
    public static NumberFormat numberFormat(String[] locales) {
        return new NumberFormat(new JsArray<>(locales), numberFormatOptions());
    }

    @JsOverlay
    public static NumberFormat numberFormat(Locale[] locales) {
        return new NumberFormat(new JsArray<>(locales), numberFormatOptions());
    }

    @JsOverlay
    public static NumberFormat numberFormat(NumberFormatOptions options) {
        return new NumberFormat(undefined(), options);
    }

    @JsOverlay
    public static NumberFormat numberFormat(String locale, NumberFormatOptions options) {
        return new NumberFormat(locale, options);
    }

    @JsOverlay
    public static NumberFormat numberFormat(Locale locale, NumberFormatOptions options) {
        return new NumberFormat(locale, options);
    }

    @JsOverlay
    public static NumberFormat numberFormat(String[] locales, NumberFormatOptions options) {
        return new NumberFormat(new JsArray<>(locales), options);
    }

    @JsOverlay
    public static NumberFormat numberFormat(Locale[] locales, NumberFormatOptions options) {
        return new NumberFormat(new JsArray<>(locales), options);
    }

    // ------------------------------------------------------ static

    // @formatter:off
    public static native JsArray<String> supportedLocalesOf(String locale);
    public static native JsArray<String> supportedLocalesOf(String locale, SupportOptions options);
    public static native JsArray<String> supportedLocalesOf(JsArrayLike<String> locales);
    public static native JsArray<String> supportedLocalesOf(JsArrayLike<String> locales, SupportOptions options);

    // ------------------------------------------------------ instance

    NumberFormat(Object locale, NumberFormatOptions options) {}
    public native String format(double number);
    public native JsArray<JsPropertyMap<String>> formatToParts(double number);
    public native String formatRange(double start, double end);
    public native JsArray<JsPropertyMap<String>> formatRangeToParts(double start, double end);
    public native JsPropertyMap<String> resolvedOptions();
    // @formatter:on
}
