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

import java.util.List;

import org.jboss.elemento.logger.Logger;
import org.jboss.elemento.router.LoadData;
import org.jboss.elemento.router.LoadedData;
import org.jboss.elemento.router.Page;
import org.jboss.elemento.router.Parameter;
import org.jboss.elemento.router.Place;
import org.jboss.elemento.router.Route;
import elemental2.core.JsArray;
import elemental2.dom.HTMLElement;
import elemental2.promise.Promise;

import static java.util.Arrays.asList;
import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.h;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.Elements.ul;
import static org.jboss.elemento.sample.music.Discography.records;

@Route("/records/:from/:to")
public class RecordsPage implements Page {

    private static final Logger logger = Logger.getLogger(RecordsPage.class.getName());

    public static LoadData<List<Record>> loadRecord() {
        return (place, parameter) -> {
            final int from;
            String fromParam = parameter.get("from");
            if (fromParam == null || fromParam.isEmpty()) {
                return Promise.reject("No from value given");
            }
            try {
                from = Integer.parseInt(fromParam);
            } catch (NumberFormatException e) {
                return Promise.reject("Invalid from value: " + fromParam);
            }

            final int to;
            String toParam = parameter.get("to");
            if (toParam == null || toParam.isEmpty()) {
                return Promise.reject("No to value given");
            }
            try {
                to = Integer.parseInt(toParam);
            } catch (NumberFormatException e) {
                return Promise.reject("Invalid to value: " + toParam);
            }

            if (from > to) {
                return Promise.reject("from must be <= to");
            }
            List<Record> records = records(record -> record.year >= from && record.year <= to);
            return Promise.resolve(records);
        };
    }

    @Override
    public Iterable<HTMLElement> elements(Place place, Parameter parameter, LoadedData data) {
        List<Record> records = data.get();
        logger.info("Loaded %d records: %o", records.size(), JsArray.of(records.toArray(new Record[0])));
        return asList(
                h(1, parameter.get("from") + " - " + parameter.get("to")).element(),
                ul()
                        .run(ul ->
                                records.forEach(record ->
                                        ul.add(li().add(a("/record/" + record.id).text(record.title)))))
                        .element());
    }
}
