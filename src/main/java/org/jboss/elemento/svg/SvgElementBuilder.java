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
package org.jboss.elemento.svg;

import org.jboss.elemento.ElementBuilder;
import org.jboss.elemento.IsElement;

import elemental2.dom.Element;
import elemental2.dom.HTMLElement;
import elemental2.dom.Node;

/** Builder for container-like HTML elements with inner HTML. */
public class SvgElementBuilder<E extends SVGElement> extends ElementBuilder<E, SvgElementBuilder<E>>
        implements IsElement<E> {

    public SvgElementBuilder(E element) {
        super(element);
    }

    @Override
    public SvgElementBuilder<E> that() {
        return this;
    }

    @Override
    public E element() {
        return element;
    }

    // ------------------------------------------------------ modify current element

    /** Sets the CSS style of the element. */
    public SvgElementBuilder<E> style(String style) {
        element.style.cssText = style;
        return that();
    }

    /**
     * Adds a {@code data-} attribute to the element.
     *
     * @param name The name of the data attribute w/o the {@code data-} prefix. However, it won't be added if it's already
     *        present.
     */
    public SvgElementBuilder<E> data(String name, String value) {
        element.dataset.set(name.replaceFirst("^data-", ""), value);
        return that();
    }

    // ------------------------------------------------------ child element(s)

    /** Adds the given node. */
    public SvgElementBuilder<E> add(Node element) {
        this.element.appendChild(element);
        return that();
    }

    /** Adds the given element by calling {@code element.element()}. */
    public SvgElementBuilder<E> add(IsElement<?> element) {
        if (element != null) {
            return add(element.element());
        }
        return that();
    }

    /** Adds all nodes. */
    public SvgElementBuilder<E> addAll(Node... nodes) {
        for (Node node : nodes) {
            add(node);
        }
        return that();
    }

    /** Adds all elements. */
    public SvgElementBuilder<E> addAll(Element... elements) {
        for (Element element : elements) {
            add(element);
        }
        return that();
    }

    /** Adds all elements. */
    public <F extends HTMLElement> SvgElementBuilder<E> addAll(IsElement<?>... elements) {
        for (IsElement<?> element : elements) {
            if (element != null) {
                add(element.element());
            }
        }
        return that();
    }

    /** Adds all elements. */
    public SvgElementBuilder<E> addAll(Iterable<?> elements) {
        for (Object element : elements) {
            if (element instanceof Node) {
                add(((Node) element));
            } else if (element instanceof IsElement) {
                // noinspection rawtypes
                add(((IsElement) element).element());
            }
        }
        return that();
    }
}
