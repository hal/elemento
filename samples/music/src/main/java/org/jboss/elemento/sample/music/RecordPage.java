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
import elemental2.dom.HTMLElement;
import elemental2.promise.Promise;

import static elemental2.dom.DomGlobal.console;
import static java.util.Arrays.asList;
import static org.jboss.elemento.Elements.dd;
import static org.jboss.elemento.Elements.dl;
import static org.jboss.elemento.Elements.dt;
import static org.jboss.elemento.Elements.h;
import static org.jboss.elemento.sample.music.Discography.records;

@Route("/record/:id")
public class RecordPage implements Page {

    private static final Logger logger = Logger.getLogger(RecordPage.class.getName());

    public static LoadData<Record> loadRecord() {
        return (place, parameter) -> {
            String id = parameter.get("id");
            if (id == null || id.isEmpty()) {
                return Promise.reject("No record id given");
            }
            List<Record> records = records(record -> record.id.equals(id));
            if (records.isEmpty()) {
                return Promise.reject("Record with id " + id + " not found");
            } else if (records.size() > 1) {
                return Promise.reject("Multiple records with id " + id + " found");
            } else {
                return Promise.resolve(records.get(0));
            }
        };
    }

    @Override
    public Iterable<HTMLElement> elements(Place place, Parameter parameter, LoadedData data) {
        Record record = data.get();
        console.log("Loaded record: %s" + record);
        return asList(
                h(1, record.title).element(),
                dl()
                        .add(dt().text("Title"))
                        .add(dd().text(record.title))
                        .add(dt().text("Released"))
                        .add(dd().text(record.released))
                        .element());
    }
}
