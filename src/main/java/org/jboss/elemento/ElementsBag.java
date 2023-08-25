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

import java.util.Iterator;

import elemental2.core.JsArray;
import elemental2.dom.Element;
import elemental2.dom.HTMLElement;

/**
 * Class to collect {@link Element}s
 * <p>
 * {@snippet class = ElementsBagDemo region = bag}
 */
public class ElementsBag implements TypedBuilder<Iterable<Element>, ElementsBag> {

    private final IterableImpl iterable;

    public ElementsBag() {
        iterable = new IterableImpl();
    }

    @Override
    public ElementsBag that() {
        return this;
    }

    /** @return the elements in this bag. */
    public Iterable<Element> elements() {
        return iterable;
    }

    // ------------------------------------------------------ mirror add() methods from HasChildren

    /** Adds the given element. */
    public ElementsBag add(Element element) {
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
    public ElementsBag addAll(Element... elements) {
        for (Element element : elements) {
            add(element);
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
                // noinspection rawtypes
                add(((IsElement) element).element());
            }
        }
        return that();
    }

    // ------------------------------------------------------ inner classes

    private static class IterableImpl implements Iterable<Element> {

        final JsArray<Element> elements;

        private IterableImpl() {
            elements = new JsArray<>();
        }

        @Override
        public Iterator<Element> iterator() {
            return Elements.iterator(elements);
        }
    }
}
