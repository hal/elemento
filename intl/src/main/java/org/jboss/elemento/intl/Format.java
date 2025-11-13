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

public enum Format {

    _2digit("2-digit"),
    currency("currency"),
    decimal("decimal"),
    digital("digital"),
    full("full"),
    long_("long"),
    medium("medium"),
    narrow("narrow"),
    numeric("numeric"),
    percent("percent"),
    short_("short"),
    unit("unit"),
    ;

    public final String value;

    Format(String value) {
        this.value = value;
    }
}
