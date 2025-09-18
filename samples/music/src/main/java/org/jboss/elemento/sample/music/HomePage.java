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

import static java.util.Arrays.asList;
import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.h;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.Elements.ul;

@Route("/")
public class HomePage implements Page {

    @Override
    public Iterable<HTMLElement> elements(Place place, Parameter parameter, LoadedData data) {
        return asList(
                h(1).text("Red Hot Chilli Peppers Discography").element(),
                ul()
                        .add(li().add(a("/records/1970/1979").text("1970 - 1979")))
                        .add(li().add(a("/records/1980/1989").text("1980 - 1989")))
                        .add(li().add(a("/records/1990/1999").text("1990 - 1999")))
                        .add(li().add(a("/records/2000/2009").text("2000 - 2009")))
                        .add(li().add(a("/records/2010/2019").text("2010 - 2019")))
                        .add(li().add(a("/records/2020/2029").text("2020 - 2029")))
                        .element());
    }
}
