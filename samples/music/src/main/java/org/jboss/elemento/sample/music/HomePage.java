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
import static org.jboss.elemento.Elements.code;
import static org.jboss.elemento.Elements.h;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.Elements.p;
import static org.jboss.elemento.Elements.section;
import static org.jboss.elemento.Elements.ul;

@Route("/")
public class HomePage implements Page {

    @Override
    public Iterable<HTMLElement> elements(Place place, Parameter parameter, LoadedData data) {
        return singletonList(section()
                .add(h(1).text("Red Hot Chilli Peppers Discography"))
                .add(p().add("This example demonstrates how to use Elemento's ")
                        .add(a("https://hal-console.gitbook.io/elemento/router", "documentation").text("router"))
                        .add(". Therefore the discography of the Red Hot Chili Peppers is used (obviously one of the developers is a big RHCP fan 🤘). Have fun browsing through the albums (and don't forget to look under the bridge)."))
                .add(p().add(
                        "Since this is a router demo you can click on the links to browse through the albums, but also use the browser's back and forward buttons. The demo defines these routes:"))
                .add(ul().css("plain-list")
                        .add(li().add(code("/")))
                        .add(li().add(code("/decades")))
                        .add(li().add(code("/records/:from/:to")))
                        .add(li().add(code("/record/:id"))))
                .add(p().add("Take a look at the ")
                        .add(a("https://github.com/hal/elemento/tree/main/samples/music/src/main/java/org/jboss/elemento/sample/music",
                                "documentation")
                                .text("source code"))
                        .add(" for more information."))
                .add(a("/decades").text("Start browsing").role("button"))
                .element());
    }
}
