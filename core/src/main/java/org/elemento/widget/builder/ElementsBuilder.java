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
package org.elemento.widget.builder;

import java.util.Iterator;

import elemental2.core.JsArray;
import elemental2.dom.HTMLElement;
import org.elemento.widget.Elements;
import org.elemento.widget.HasElements;
import org.elemento.widget.IsElement;

/** Builder to collect {@link HTMLElement}s */
public class ElementsBuilder implements TypedBuilder<Iterable<HTMLElement>, ElementsBuilder>, HasElements {

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
    private final IterableImpl iterable;

    public ElementsBuilder() {
        iterable = new IterableImpl();
    }

    @Override
    public ElementsBuilder that() {
        return this;
    }

    // ------------------------------------------------------ mirror add() methods from HtmlContent

    public Iterable<HTMLElement> elements() {
        return iterable;
    }

    /** Adds the given element. */
    public ElementsBuilder add(HTMLElement element) {
        iterable.elements.push(element);
        return that();
    }

    /** Adds the given element by calling {@code element.element()}. */
    public ElementsBuilder add(IsElement element) {
        return add(element.element());
    }

    /** Adds all elements. */
    public ElementsBuilder addAll(HTMLElement... elements) {
        for (HTMLElement element : elements) {
            add(element);
        }
        return that();
    }

    /** Adds all elements. */
    public ElementsBuilder addAll(IsElement... elements) {
        for (IsElement element : elements) {
            add(element.element());
        }
        return that();
    }

    // ------------------------------------------------------ deprecated

    /** Adds all elements. */
    public ElementsBuilder addAll(Iterable<?> elements) {
        for (Object element : elements) {
            if (element instanceof HTMLElement) {
                add(((HTMLElement) element));
            } else if (element instanceof IsElement) {
                add(((IsElement) element).element());
            }
        }
        return that();
    }

    /** @deprecated Please use {@link #elements()} instead. */
    @Deprecated
    public Iterable<HTMLElement> get() {
        return iterable;
    }

    /** @deprecated Please use {@link #elements()} instead. */
    @Override
    @Deprecated
    public Iterable<HTMLElement> asElements() {
        return iterable;
    }

    // ------------------------------------------------------ inner classes

    /** @deprecated Please use {@link #addAll(Iterable)} instead. */
    @Deprecated
    public ElementsBuilder addAll(HasElements elements) {
        for (HTMLElement element : elements.asElements()) {
            add(element);
        }
        return that();
    }
}
