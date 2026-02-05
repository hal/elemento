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
import jsinterop.annotations.JsConstructor;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsType;
import jsinterop.base.JsArrayLike;
import jsinterop.base.JsPropertyMap;

import static jsinterop.annotations.JsPackage.GLOBAL;
import static jsinterop.base.Js.undefined;
import static org.jboss.elemento.intl.ListFormatOptions.listFormatOptions;

/**
 * Mapping for <a
 * href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat"><code>Intl.ListFormat</code></a>.
 * <p>
 * {@snippet class = ListFormatDemo region = generalUsage}
 *
 * @see <a
 * href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat</a>
 */
@SuppressWarnings("unused")
@JsType(isNative = true, namespace = GLOBAL, name = "Intl.ListFormat")
public class ListFormat {

    // ------------------------------------------------------ factory

    @JsOverlay
    public static ListFormat listFormat() {
        return new ListFormat(undefined(), listFormatOptions());
    }

    @JsOverlay
    public static ListFormat listFormat(String locale) {
        return new ListFormat(locale, listFormatOptions());
    }

    @JsOverlay
    public static ListFormat listFormat(Locale locale) {
        return new ListFormat(locale, listFormatOptions());
    }

    @JsOverlay
    public static ListFormat listFormat(String[] locales) {
        return new ListFormat(new JsArray<>(locales), listFormatOptions());
    }

    @JsOverlay
    public static ListFormat listFormat(Locale[] locales) {
        return new ListFormat(new JsArray<>(locales), listFormatOptions());
    }

    @JsOverlay
    public static ListFormat listFormat(ListFormatOptions options) {
        return new ListFormat(undefined(), options);
    }

    @JsOverlay
    public static ListFormat listFormat(String locale, ListFormatOptions options) {
        return new ListFormat(locale, options);
    }

    @JsOverlay
    public static ListFormat listFormat(Locale locale, ListFormatOptions options) {
        return new ListFormat(locale, options);
    }

    @JsOverlay
    public static ListFormat listFormat(String[] locales, ListFormatOptions options) {
        return new ListFormat(new JsArray<>(locales), options);
    }

    @JsOverlay
    public static ListFormat listFormat(Locale[] locales, ListFormatOptions options) {
        return new ListFormat(new JsArray<>(locales), options);
    }

    // ------------------------------------------------------ static

    // @formatter:off
    public static native JsArray<String> supportedLocalesOf(String locale);
    public static native JsArray<String> supportedLocalesOf(String locale, SupportOptions options);
    public static native JsArray<String> supportedLocalesOf(JsArrayLike<String> locales);
    public static native JsArray<String> supportedLocalesOf(JsArrayLike<String> locales, SupportOptions options);

    // ------------------------------------------------------ instance

    @JsConstructor ListFormat(Object locale, ListFormatOptions options) {}
    public native String format(JsArray<String> list);
    public native JsArray<JsPropertyMap<String>> formatToParts(JsArray<String> list);
    public native JsPropertyMap<String> resolvedOptions();
    // @formatter:on
}
