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

import java.util.function.Supplier;

import elemental2.dom.Element;
import elemental2.dom.HTMLElement;
import elemental2.dom.Node;

/**
 * Provides methods and default implementations for adding elements.
 * <p>
 * {@snippet class = ElementContainerDemo region = addAll}
 */
public interface ElementContainerMethods<E extends Element, B extends TypedBuilder<E, B>>
        extends TypedBuilder<E, B>, IsElement<E> {


    /** Adds the given text as a text node. */
    default B add(String text) {
        element().appendChild(element().ownerDocument.createTextNode(text));
        return that();
    }

    /** Adds the given node. */
    default B add(Node node) {
        element().appendChild(node);
        return that();
    }

    /** Adds the given element by calling {@code element.element()}. */
    default B add(IsElement<?> element) {
        if (element != null) {
            return add(element.element());
        }
        return that();
    }

    /** Add the element returned by the supplier. */
    default B add(Supplier<Node> supplier) {
        element().appendChild(supplier.get());
        return that();
    }

    /** Adds all nodes. */
    default B addAll(Node... nodes) {
        for (Node node : nodes) {
            add(node);
        }
        return that();
    }

    /** Adds all elements. */
    default B addAll(Element... elements) {
        for (Element element : elements) {
            add(element);
        }
        return that();
    }

    /** Adds all HTML elements. */
    default B addAll(HTMLElement... elements) {
        for (HTMLElement element : elements) {
            add(element);
        }
        return that();
    }

    /** Adds all elements. */
    default B addAll(IsElement<?>... elements) {
        for (IsElement<?> element : elements) {
            if (element != null) {
                add(element.element());
            }
        }
        return that();
    }

    /** Adds all elements. */
    default B addAll(Iterable<?> elements) {
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

    /** Adds all elements returned by the supplier. */
    default B addAll(Supplier<Iterable<?>> supplier) {
        addAll(supplier.get());
        return that();
    }
}
