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

public enum Unit {

    acre("acre"),
    bit("bit"),
    byte_("byte"),
    celsius("celsius"),
    centimeter("centimeter"),
    day("day"),
    degree("degree"),
    fahrenheit("fahrenheit"),
    fluid("fluid-ounce"),
    foot("foot"),
    gallon("gallon"),
    gigabit("gigabit"),
    gigabyte("gigabyte"),
    gram("gram"),
    hectare("hectare"),
    hour("hour"),
    inch("inch"),
    kilobit("kilobit"),
    kilobyte("kilobyte"),
    kilogram("kilogram"),
    kilometer("kilometer"),
    liter("liter"),
    megabit("megabit"),
    megabyte("megabyte"),
    meter("meter"),
    microsecond("microsecond"),
    mile("mile"),
    mileScandinavian("mile-scandinavian"),
    milliliter("milliliter"),
    millimeter("millimeter"),
    millisecond("millisecond"),
    minute("minute"),
    month("month"),
    nanosecond("nanosecond"),
    ounce("ounce"),
    percent("percent"),
    petabyte("petabyte"),
    pound("pound"),
    quarter("quarter"),
    second("second"),
    stone("stone"),
    terabit("terabit"),
    terabyte("terabyte"),
    week("week"),
    yard("yard"),
    year("year"),
    ;

    public final String value;

    Unit(String value) {
        this.value = value;
    }
}
