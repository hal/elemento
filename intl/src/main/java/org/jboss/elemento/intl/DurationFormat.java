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
import static org.jboss.elemento.intl.DurationFormatOptions.durationFormatOptions;

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
@JsType(isNative = true, namespace = GLOBAL, name = "Intl.DurationFormat")
public class DurationFormat {

    // ------------------------------------------------------ factory

    @JsOverlay
    public static DurationFormat durationFormat() {
        return new DurationFormat(undefined(), durationFormatOptions());
    }

    @JsOverlay
    public static DurationFormat durationFormat(String locale) {
        return new DurationFormat(locale, durationFormatOptions());
    }

    @JsOverlay
    public static DurationFormat durationFormat(Locale locale) {
        return new DurationFormat(locale, durationFormatOptions());
    }

    @JsOverlay
    public static DurationFormat durationFormat(String[] locales) {
        return new DurationFormat(new JsArray<>(locales), durationFormatOptions());
    }

    @JsOverlay
    public static DurationFormat durationFormat(Locale[] locales) {
        return new DurationFormat(new JsArray<>(locales), durationFormatOptions());
    }

    @JsOverlay
    public static DurationFormat durationFormat(DurationFormatOptions options) {
        return new DurationFormat(undefined(), options);
    }

    @JsOverlay
    public static DurationFormat durationFormat(String locale, DurationFormatOptions options) {
        return new DurationFormat(locale, options);
    }

    @JsOverlay
    public static DurationFormat durationFormat(Locale locale, DurationFormatOptions options) {
        return new DurationFormat(locale, options);
    }

    @JsOverlay
    public static DurationFormat durationFormat(String[] locales, DurationFormatOptions options) {
        return new DurationFormat(new JsArray<>(locales), options);
    }

    @JsOverlay
    public static DurationFormat durationFormat(Locale[] locales, DurationFormatOptions options) {
        return new DurationFormat(new JsArray<>(locales), options);
    }

    // ------------------------------------------------------ static

    // @formatter:off
    public static native JsArray<String> supportedLocalesOf(String locale);
    public static native JsArray<String> supportedLocalesOf(String locale, SupportOptions options);
    public static native JsArray<String> supportedLocalesOf(JsArrayLike<String> locales);
    public static native JsArray<String> supportedLocalesOf(JsArrayLike<String> locales, SupportOptions options);

    // ------------------------------------------------------ instance

    DurationFormat(Object locale, DurationFormatOptions options) {}
    public native String format(Duration duration);
    public native JsArray<JsPropertyMap<String>> formatToParts(Duration duration);
    public native JsPropertyMap<String> resolvedOptions();
    // @formatter:on
}
