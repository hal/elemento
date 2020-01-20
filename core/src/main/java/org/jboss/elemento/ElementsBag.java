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
package org.jboss.elemento;

import java.util.Iterator;

import elemental2.core.JsArray;
import elemental2.dom.HTMLElement;

/** Class to collect {@link HTMLElement}s */
public class ElementsBag implements TypedBuilder<Iterable<HTMLElement>, ElementsBag> {

    private final IterableImpl iterable;

    public ElementsBag() {
        iterable = new IterableImpl();
    }

    @Override
    public ElementsBag that() {
        return this;
    }

    // ------------------------------------------------------ mirror add() methods from HtmlContent

    /** @return the elements in this bag. */
    public Iterable<HTMLElement> elements() {
        return iterable;
    }

    /** Adds the given element. */
    public ElementsBag add(HTMLElement element) {
        iterable.elements.push(element);
        return that();
    }

    /** Adds the given element by calling {@code element.element()}. */
    public ElementsBag add(IsElement<?> element) {
        if (element != null) {
            return add(element.element());
        }
        return that();
    }

    /** Adds all elements. */
    public ElementsBag addAll(HTMLElement... elements) {
        for (HTMLElement element : elements) {
            add(element);
        }
        return that();
    }

    /** Adds all elements. */
    public ElementsBag addAll(IsElement<?>... elements) {
        for (IsElement<?> element : elements) {
            if (element != null) {
                add(element.element());
            }
        }
        return that();
    }

    /** Adds all elements. */
    public ElementsBag addAll(Iterable<?> elements) {
        for (Object element : elements) {
            if (element instanceof HTMLElement) {
                add(((HTMLElement) element));
            } else if (element instanceof IsElement) {
                //noinspection rawtypes
                add(((IsElement) element).element());
            }
        }
        return that();
    }

    // ------------------------------------------------------ inner classes

    private static class IterableImpl implements Iterable<HTMLElement> {

        final JsArray<HTMLElement> elements;

        private IterableImpl() {
            elements = new JsArray<>();
        }

        @Override
        public Iterator<HTMLElement> iterator() {
            return Elements.iterator(elements);
        }
    }
}
