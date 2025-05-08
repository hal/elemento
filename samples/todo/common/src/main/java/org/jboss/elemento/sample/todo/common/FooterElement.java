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
package org.jboss.elemento.sample.todo.common;

import org.jboss.elemento.IsElement;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.footer;
import static org.jboss.elemento.Elements.p;
import static org.jboss.elemento.Elements.span;

public class FooterElement implements IsElement<HTMLElement> {

    private final HTMLElement root;

    public FooterElement() {
        root = footer().css("info")
                .add(p().text("Double-click to edit a todo"))
                .add(p().add(span().text("Created by" + " "))
                        .add(a("https://github.com/hpehl/").text("Harald Pehl")))
                .add(p().add(span().text("Part of" + " "))
                        .add(a("https://todomvc.com").text("TodoMVC")))
                .element();
    }

    @Override
    public HTMLElement element() {
        return root;
    }
}
