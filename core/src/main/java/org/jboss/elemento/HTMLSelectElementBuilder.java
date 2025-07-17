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
package org.jboss.elemento;

import elemental2.dom.HTMLSelectElement;

import static java.util.Objects.requireNonNull;

/** Builder for input elements. */
public class HTMLSelectElementBuilder<E extends HTMLSelectElement> implements
        ElementAttributeMethods<E, HTMLSelectElementBuilder<E>>,
        ElementClassListMethods<E, HTMLSelectElementBuilder<E>>,
        ElementConsumerMethods<E, HTMLSelectElementBuilder<E>>,
        ElementEventMethods<E, HTMLSelectElementBuilder<E>>,
        ElementHTMLMethods<E, HTMLSelectElementBuilder<E>>,
        ElementIdMethods<E, HTMLSelectElementBuilder<E>>,
        ElementQueryMethods<E>,
        ElementTextMethods<E, HTMLSelectElementBuilder<E>>,
        HTMLElementAttributeMethods<E, HTMLSelectElementBuilder<E>>,
        HTMLElementDataMethods<E, HTMLSelectElementBuilder<E>>,
        HTMLElementStyleMethods<E, HTMLSelectElementBuilder<E>>,
        HTMLElementVisibilityMethods<E, HTMLSelectElementBuilder<E>>,
        HTMLSelectElementMethods<E, HTMLSelectElementBuilder<E>> {

    private final E element;

    public HTMLSelectElementBuilder(E element) {
        this.element = requireNonNull(element, "element required");
    }

    @Override
    public HTMLSelectElementBuilder<E> that() {
        return this;
    }

    @Override
    public E element() {
        return element;
    }
}
