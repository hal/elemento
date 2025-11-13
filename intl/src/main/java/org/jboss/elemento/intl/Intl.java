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
