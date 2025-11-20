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
 * href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options">number
 * format options</a> passed to {@link NumberFormat} constructors.
 * <p>
 * In addition to the actual mappings, this class implements the builder pattern using enums to create the options easily and in
 * a type-safe manner. Some enums are shared with other format option builders of the <code>Intl</code> module and may contain
 * more values than intended for the given method. In that case the allowed values are listed on the method. In all other cases
 * all enum values are applicable.
 * <p>
 * {@snippet class = NumberFormatDemo region = generalUsage}
 *
 * @see <a
 * href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options</a>
 */
@SuppressWarnings("unused")
@JsType(isNative = true, namespace = GLOBAL)
public interface NumberFormatOptions {

    // @formatter:off
    @JsOverlay static NumberFormatOptions create() { return Js.uncheckedCast(JsPropertyMap.of()); }
    @JsProperty void setCompactDisplay(String display);
    @JsProperty void setCurrency(String currency);
    @JsProperty void setCurrencyDisplay(String currencyDisplay);
    @JsProperty void setCurrencySign(String currencySign);
    @JsProperty void setLocaleMatcher(String localeMatcher);
    @JsProperty void setMaximumFractionDigits(double digits);
    @JsProperty void setMaximumSignificantDigits(double digits);
    @JsProperty void setMinimumFractionDigits(double digits);
    @JsProperty void setMinimumIntegerDigits(double digits);
    @JsProperty void setMinimumSignificantDigits(double digits);
    @JsProperty void setNotation(String notation);
    @JsProperty void setNumberingSystem(String numberingSystem);
    @JsProperty void setRoundingIncrement(double increment);
    @JsProperty void setRoundingMode(String mode);
    @JsProperty void setRoundingPriority(String priority);
    @JsProperty void setSignDisplay(String display);
    @JsProperty void setStyle(String style);
    @JsProperty void setTrailingZeroDisplay(String display);
    @JsProperty void setUnit(String unit);
    @JsProperty void setUnitDisplay(String unitDisplay);
    @JsProperty void setUseGrouping(String grouping);
    // @formatter:on

    // ------------------------------------------------------ builder

    /** Allowed values: {@link Format#short_}, {@link Format#long_}. */
    @JsOverlay
    default NumberFormatOptions compactDisplay(Format display) {
        setCompactDisplay(display.value);
        return this;
    }

    /**
     * The currency to use in currency formatting. Possible values are the ISO 4217 currency codes, such as "USD" for the US
     * dollar, "EUR" for the euro, or "CNY" for the Chinese RMB — see {@link Intl#supportedValuesOf(Category)}. There is no
     * default value; if the {@link #style(Format)} is {@link Format#currency}, the currency property must be provided. It is
     * normalized to uppercase.
     */
    @JsOverlay
    default NumberFormatOptions currency(String currency) {
        setCurrency(currency);
        return this;
    }

    /**
     * Allowed values: {@link CurrencyDisplay#code}, {@link CurrencyDisplay#symbol}, {@link CurrencyDisplay#narrowSymbol},
     * {@link CurrencyDisplay#name}.
     */
    @JsOverlay
    default NumberFormatOptions currencyDisplay(CurrencyDisplay currencyDisplay) {
        setCurrencyDisplay(currencyDisplay.value);
        return this;
    }

    /** Allowed values: {@link CurrencyDisplay#standard}, {@link CurrencyDisplay#accounting}. */
    @JsOverlay
    default NumberFormatOptions currencySign(CurrencyDisplay currencyDisplay) {
        setCurrencySign(currencyDisplay.value);
        return this;
    }

    /** Allowed values: {@link Matcher#lookup}, {@link Matcher#bestFit}. */
    @JsOverlay
    default NumberFormatOptions localMatcher(Matcher localeMatcher) {
        setLocaleMatcher(localeMatcher.value);
        return this;
    }

    @JsOverlay
    default NumberFormatOptions maximumFractionDigits(int digits) {
        setMaximumFractionDigits(digits);
        return this;
    }

    @JsOverlay
    default NumberFormatOptions maximumSignificantDigits(int digits) {
        setMaximumSignificantDigits(digits);
        return this;
    }

    @JsOverlay
    default NumberFormatOptions minimumFractionDigits(int digits) {
        setMinimumFractionDigits(digits);
        return this;
    }

    @JsOverlay
    default NumberFormatOptions minimumIntegerDigits(int digits) {
        setMinimumIntegerDigits(digits);
        return this;
    }

    @JsOverlay
    default NumberFormatOptions minimumSignificantDigits(int digits) {
        setMinimumSignificantDigits(digits);
        return this;
    }

    @JsOverlay
    default NumberFormatOptions notation(Notation notation) {
        setNotation(notation.value);
        return this;
    }

    /**
     * The numbering system to use for number formatting, such as "arab", "hans", "mathsans", and so on. For a list of supported
     * numbering system types, see {@link Intl#supportedValuesOf(Category)}.
     */
    @JsOverlay
    default NumberFormatOptions numberingSystem(String numberingSystem) {
        setNumberingSystem(numberingSystem);
        return this;
    }

    @JsOverlay
    default NumberFormatOptions roundingIncrement(int increment) {
        setRoundingIncrement(increment);
        return this;
    }

    /**
     * Allowed values: {@link Rounding#ceil}, {@link Rounding#floor}, {@link Rounding#expand}, {@link Rounding#trunc},
     * {@link Rounding#halfCeil}, {@link Rounding#halfFloor}, {@link Rounding#halfExpand}, {@link Rounding#halfTrunc},
     * {@link Rounding#halfEven}.
     */
    @JsOverlay
    default NumberFormatOptions roundingMode(Rounding mode) {
        setRoundingMode(mode.value);
        return this;
    }

    /** Allowed values: {@link Rounding#auto}, {@link Rounding#morePrecision}. */
    @JsOverlay
    default NumberFormatOptions roundingPriority(Rounding priority) {
        setRoundingPriority(priority.value);
        return this;
    }

    /**
     * Allowed values: {@link When#auto}, {@link When#always}, {@link When#exceptZero}, {@link When#negative},
     * {@link When#never}.
     */
    @JsOverlay
    default NumberFormatOptions signDisplay(When display) {
        setSignDisplay(display.value);
        return this;
    }

    /** Allowed values: {@link Format#decimal}, {@link Format#currency}, {@link Format#percent}, {@link Format#unit}. */
    @JsOverlay
    default NumberFormatOptions style(Format style) {
        setStyle(style.value);
        return this;
    }

    /** Allowed values: {@link When#auto}, {@link When#stripIfInteger}. */
    @JsOverlay
    default NumberFormatOptions trailingZeroDisplay(When display) {
        setTrailingZeroDisplay(display.value);
        return this;
    }

    /**
     * The unit to use in unit formatting, Possible values are listed in {@link Intl#supportedValuesOf(Category)}. Pairs of
     * simple units can be concatenated with "-per-" to make a compound unit. There is no default value; if the
     * {@link #style(Format)} is {@link Format#unit}, the unit property must be provided.
     */
    @JsOverlay
    default NumberFormatOptions unit(String unit) {
        setUnit(unit);
        return this;
    }

    /** Allowed values: {@link Format#short_}, {@link Format#narrow}, {@link Format#long_}. */
    @JsOverlay
    default NumberFormatOptions unitDisplay(Format style) {
        setUnitDisplay(style.value);
        return this;
    }

    /** Allowed values: {@link When#always}, {@link When#auto}, {@link When#min2}. */
    @JsOverlay
    default NumberFormatOptions useGrouping(When grouping) {
        setUseGrouping(grouping.value);
        return this;
    }
}
