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

import org.jboss.elemento.router.LoadedData;
import org.jboss.elemento.router.Page;
import org.jboss.elemento.router.Parameter;
import org.jboss.elemento.router.Place;
import org.jboss.elemento.router.Route;

import elemental2.dom.HTMLElement;

import static java.util.Collections.singletonList;
import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.article;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.h;
import static org.jboss.elemento.Elements.section;
import static org.jboss.elemento.sample.music.Breadcrumb.breadcrumb;

@Route("/decades")
public class DecadesPage implements Page {

    @Override
    public Iterable<HTMLElement> elements(Place place, Parameter parameter, LoadedData data) {
        return singletonList(section()
                .add(h(1).text("Decades"))
                .add(breadcrumb()
                        .add("/", "Home"))
                .add(div().css("grid")
                        .add(article().css("decade").add(a("/records/1980/1989").css("decade").text("1980 - 1989")))
                        .add(article().css("decade").add(a("/records/1990/1999").css("decade").text("1990 - 1999")))
                        .add(article().css("decade").add(a("/records/2000/2009").css("decade").text("2000 - 2009"))))
                .add(div().css("grid")
                        .add(article().css("decade").add(a("/records/2010/2019").css("decade").text("2010 - 2019")))
                        .add(article().css("decade").add(a("/records/2020/2029").css("decade").text("2020 - 2029"))))
                .element());
    }
}
