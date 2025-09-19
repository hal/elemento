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

import org.jboss.elemento.IsElement;

import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLUListElement;

import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.Elements.nav;
import static org.jboss.elemento.Elements.ul;

public class Breadcrumb implements IsElement<HTMLElement> {

    public static Breadcrumb breadcrumb() {
        return new Breadcrumb();
    }

    private final HTMLElement root;
    private final HTMLUListElement ul;

    Breadcrumb() {
        root = nav().aria("label", "Breadcrumb").element();
        root.appendChild(ul = ul().css("breadcrumb").element());
    }

    public Breadcrumb add(String route, String text) {
        ul.appendChild(li().add(a(route).text(text)).element());
        return this;
    }

    @Override
    public HTMLElement element() {
        return root;
    }
}
