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

/**
 * Mapping for <a
 * href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl"><code>Intl</code></a>.
 *
 * @see <a
 * href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl</a>
 */
@JsType(isNative = true, namespace = "Intl")
public class Intl {

    public static native JsArray<String> getCanonicalLocales(String locale);

    public static native JsArray<String> getCanonicalLocales(JsArray<String> locales);

    public static native JsArray<String> supportedValuesOf(String key);

    @JsOverlay
    public static JsArray<String> supportedValuesOf(Category category) {
        return supportedValuesOf(category.value);
    }
}
