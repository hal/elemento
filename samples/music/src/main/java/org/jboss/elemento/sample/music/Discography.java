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
package org.jboss.elemento.sample.music;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;

import static elemental2.core.Global.JSON;

class Discography {

    static JsPropertyMap<Record> data;

    static {
        data = Js.cast(JSON.parse(ResourcesImpl.INSTANCE.rhcp().getText()));
    }

    static List<Record> byRange(int[] range) {
        return records(r -> r.year >= range[0] && r.year <= range[1]);
    }

    static List<Record> records(Predicate<Record> predicate) {
        List<Record> records = new ArrayList<>();
        data.forEach(id -> {
            Record record = data.get(id);
            if (predicate.test(record)) {
                records.add(record);
            }
        });
        return records;
    }
}
