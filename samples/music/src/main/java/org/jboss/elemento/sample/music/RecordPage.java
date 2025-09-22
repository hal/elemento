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

import org.gwtproject.safehtml.shared.SafeHtmlUtils;
import org.jboss.elemento.router.LoadData;
import org.jboss.elemento.router.LoadedData;
import org.jboss.elemento.router.Page;
import org.jboss.elemento.router.Parameter;
import org.jboss.elemento.router.Place;
import org.jboss.elemento.router.Route;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLTableCellElement;
import elemental2.promise.Promise;

import static java.util.Collections.singletonList;
import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.h;
import static org.jboss.elemento.Elements.p;
import static org.jboss.elemento.Elements.section;
import static org.jboss.elemento.Elements.table;
import static org.jboss.elemento.Elements.tbody;
import static org.jboss.elemento.Elements.td;
import static org.jboss.elemento.Elements.th;
import static org.jboss.elemento.Elements.thead;
import static org.jboss.elemento.Elements.tr;
import static org.jboss.elemento.sample.music.Breadcrumb.breadcrumb;
import static org.jboss.elemento.sample.music.Discography.records;

@Route("/record/:id")
public class RecordPage implements Page {

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
        int[] decade = calculateDecade(record.year);
        return singletonList(section()
                .add(h(1, record.title))
                .add(breadcrumb()
                        .add("/", "Home")
                        .add("/decades", "Decades")
                        .add("/records/" + decade[0] + "/" + decade[1], decade[0] + " - " + decade[1]))
                .add(div().css("record")
                        .add(p()
                                .add(record.title + " was released on " + record.released + ". It contains " + record.tracks.length + " tracks.")
                                .add(" For more information see ")
                                .add(a(record.url, "wikipedia").text(record.url))
                                .add("."))
                        .add(table().css("tracks")
                                .add(thead()
                                        .add(tr()
                                                .add(th().attr("scope", "col").text("Track"))
                                                .add(th().attr("scope", "col").text("Title"))
                                                .add(th().attr("scope", "col").text("Length"))
                                                .add(th().attr("scope", "col").text("Writer"))))
                                .add(tbody().run(tbody ->
                                        record.tracks.forEach((track, index) ->
                                                tbody.add(tr()
                                                        .add(td().attr("scope", "col").text(String.valueOf(track.track)))
                                                        .add(titleTd(track))
                                                        .add(td().text(track.length))
                                                        .add(td().run(td -> {
                                                            if (track.writer().isEmpty()) {
                                                                td.html(SafeHtmlUtils.fromSafeConstant("&nbsp;"));
                                                            } else {
                                                                td.text(String.join(", ", track.writer()));
                                                            }
                                                        }))))))))
                .element());
    }

    private int[] calculateDecade(int year) {
        int start = year - (year % 10);
        int end = start + 9;
        return new int[]{start, end};
    }

    private HTMLTableCellElement titleTd(Track track) {
        if ("Under the Bridge".equals(track.title)) {
            return td().add(a("https://youtu.be/GLvohMXgcBo", "youtube").text(track.title)).element();
        }
        return td().text(track.title).element();
    }
}
