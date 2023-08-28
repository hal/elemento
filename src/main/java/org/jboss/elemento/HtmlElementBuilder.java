/*
 *  Copyright 2022 Red Hat
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
package org.jboss.elemento;

import elemental2.dom.HTMLElement;

import static java.util.Objects.requireNonNull;

/** Builder for simple HTML elements. */
public class HtmlElementBuilder<E extends HTMLElement>
        implements HasElement<E, HtmlElementBuilder<E>>, HasHtmlElement<E, HtmlElementBuilder<E>>, Finder<E> {

    private final E element;

    public HtmlElementBuilder(E element) {
        this.element = requireNonNull(element, "element required");
    }

    @Override
    public HtmlElementBuilder<E> that() {
        return this;
    }

    @Override
    public E element() {
        return element;
    }
}
