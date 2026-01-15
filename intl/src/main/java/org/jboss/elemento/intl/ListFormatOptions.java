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
 * href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/ListFormat#options">list
 * format options</a> passed to {@link ListFormat} constructors.
 * <p>
 * In addition to the actual mappings, this class implements the builder pattern using enums to create the options easily and in
 * a type-safe manner. Some enums are shared with other format option builders of the <code>Intl</code> module and may contain
 * more values than intended for the given method. In that case the allowed values are listed on the method. In all other cases
 * all enum values are applicable.
 * <p>
 * {@snippet class = ListFormatDemo region = generalUsage}
 *
 * @see <a
 * href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/ListFormat#options">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/ListFormat#options</a>
 */
@SuppressWarnings("unused")
@JsType(isNative = true, namespace = GLOBAL)
public interface ListFormatOptions {

    // @formatter:off
    @JsOverlay static ListFormatOptions listFormatOptions() { return Js.uncheckedCast(JsPropertyMap.of()); }
    @JsProperty void setLocaleMatcher(String localeMatcher);
    @JsProperty void setStyle(String style);
    @JsProperty void setType(String type);
    // @formatter:on

    // ------------------------------------------------------ builder

    /** Allowed values: {@link Matcher#lookup}, {@link Matcher#bestFit}. */
    @JsOverlay
    default ListFormatOptions localMatcher(Matcher localeMatcher) {
        setLocaleMatcher(localeMatcher.value);
        return this;
    }

    @JsOverlay
    default ListFormatOptions type(Grouping type) {
        setType(type.value);
        return this;
    }

    /** Allowed values: {@link Format#long_}, {@link Format#short_}, {@link Format#narrow}. */
    @JsOverlay
    default ListFormatOptions style(Format style) {
        setStyle(style.value);
        return this;
    }
}
