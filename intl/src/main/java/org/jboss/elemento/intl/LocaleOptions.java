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
 * href="https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/Locale#options">locale
 * options</a> passed to {@link Locale} constructors.
 * <p>
 * In addition to the actual mappings, this class implements the builder pattern using enums to create the options easily and in
 * a type-safe manner. Some enums are shared with other format option builders of the <code>Intl</code> module and may contain
 * more values than intended for the given method. In that case the allowed values are listed on the method. In all other cases
 * all enum values are applicable.
 * <p>
 * {@snippet class = LocaleDemo region = generalUsage}
 *
 * @see <a
 * href="https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/Locale#options">https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/Locale#options</a>
 */
@SuppressWarnings("unused")
@JsType(isNative = true, namespace = GLOBAL)
public interface LocaleOptions {

    // @formatter:off
    @JsOverlay static LocaleOptions localeOptions() { return Js.uncheckedCast(JsPropertyMap.of()); }
    @JsProperty void setLanguage(String language);
    @JsProperty void setScript(String script);
    @JsProperty void setRegion(String region);
    @JsProperty void setVariants(String variants);
    @JsProperty void setCalendar(String calendar);
    @JsProperty void setCollation(String collation);
    @JsProperty void setNumberingSystem(String numberingSystem);
    @JsProperty void setCaseFirst(String caseFirst);
    @JsProperty void setHourCycle(String hourCycle);
    @JsProperty void setNumeric(boolean numeric);
    // @formatter:on

    // ------------------------------------------------------ builder

    @JsOverlay
    default LocaleOptions language(String language) {
        setLanguage(language);
        return this;
    }

    @JsOverlay
    default LocaleOptions script(String script) {
        setScript(script);
        return this;
    }

    @JsOverlay
    default LocaleOptions region(String region) {
        setRegion(region);
        return this;
    }

    @JsOverlay
    default LocaleOptions variants(String variants) {
        setVariants(variants);
        return this;
    }

    @JsOverlay
    default LocaleOptions calendar(Calendar calendar) {
        setCalendar(calendar.value);
        return this;
    }

    @JsOverlay
    default LocaleOptions collation(Collation collation) {
        setCollation(collation.value);
        return this;
    }

    @JsOverlay
    default LocaleOptions numberingSystem(NumberingSystem numberingSystem) {
        setNumberingSystem(numberingSystem.value);
        return this;
    }

    @JsOverlay
    default LocaleOptions caseFirst(CaseFirst caseFirst) {
        setCaseFirst(caseFirst.value);
        return this;
    }

    /** Allowed values: {@link HourCycle#h23}, {@link HourCycle#h12}, and {@link HourCycle#h11}. */
    @JsOverlay
    default LocaleOptions hourCycle(HourCycle hourCycle) {
        setHourCycle(hourCycle.value);
        return this;
    }

    @JsOverlay
    default LocaleOptions numeric(boolean numeric) {
        setNumeric(numeric);
        return this;
    }
}
