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

import org.jboss.elemento.router.LoadData;
import org.jboss.elemento.router.LoadedData;
import org.jboss.elemento.router.Page;
import org.jboss.elemento.router.Parameter;
import org.jboss.elemento.router.Place;
import org.jboss.elemento.router.Route;
import elemental2.dom.HTMLElement;
import elemental2.promise.Promise;

import static java.util.Collections.singletonList;
import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.article;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.footer;
import static org.jboss.elemento.Elements.h;
import static org.jboss.elemento.Elements.header;
import static org.jboss.elemento.Elements.img;
import static org.jboss.elemento.Elements.section;
import static org.jboss.elemento.sample.music.Breadcrumb.breadcrumb;
import static org.jboss.elemento.sample.music.Discography.records;

@Route("/records/:from/:to")
public class RecordsPage implements Page {

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
        return singletonList(section()
                .add(h(1, "Records from " + parameter.get("from") + " - " + parameter.get("to")))
                .add(breadcrumb()
                        .add("/", "Home")
                        .add("/decades", "Decades"))
                .add(div().css("records")
                        .run(div -> records.forEach(record ->
                                div.add(article()
                                        .add(header().add(a("/record/" + record.id).text(record.title)))
                                        .add(img(record.cover).attr("alt", "Cover of " + record.title))
                                        .add(footer().text("Released " + record.released))))))
                .element());
    }
}
