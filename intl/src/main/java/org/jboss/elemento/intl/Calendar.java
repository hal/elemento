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

public enum Calendar {

    buddhist("buddhist"),
    chinese("chinese"),
    coptic("coptic"),
    dangi("dangi"),
    ethioaa("ethioaa"),
    ethiopic("ethiopic"),
    gregory("gregory"),
    hebrew("hebrew"),
    indian("indian"),
    islamic("islamic"),
    islamicCivil("islamic-civil"),
    islamicRgsa("islamic-rgsa"),
    islamicTbla("islamic-tbla"),
    islamicUmalqura("islamic-umalqura"),
    iso8601("iso8601"),
    japanese("japanese"),
    persian("persian"),
    roc("roc"),
    ;

    public final String value;

    Calendar(String value) {
        this.value = value;
    }
}
