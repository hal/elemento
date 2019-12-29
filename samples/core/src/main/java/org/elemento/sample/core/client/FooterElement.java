/*
 * Copyright 2015-2016 Red Hat, Inc, and individual contributors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.elemento.sample.core.client;

import elemental2.dom.HTMLElement;
import org.elemento.IsElement;

import static org.elemento.Elements.a;
import static org.elemento.Elements.footer;
import static org.elemento.Elements.p;
import static org.elemento.Elements.span;

class FooterElement implements IsElement<HTMLElement> {

    private final HTMLElement root;

    FooterElement() {
        root = footer().css("info")
                .add(p().textContent("Double-click to edit a todo"))
                .add(p().add(span().textContent("Created by" + " "))
                        .add(a("http://hpehl.info").textContent("Harald Pehl")))
                .add(p().add(span().textContent("Part of" + " "))
                        .add(a("http://todomvc.com").textContent("TodoMVC"))).element();
    }

    @Override
    public HTMLElement element() {
        return root;
    }
}
