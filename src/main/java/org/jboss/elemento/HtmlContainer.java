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

import org.gwtproject.safehtml.shared.SafeHtml;

import elemental2.dom.Element;
import elemental2.dom.HTMLElement;
import elemental2.dom.Node;

/**
 * Common methods for container-like HTML elements with inner HTML.
 * <p>
 * {@snippet class = HtmlContainerDemo region = addAll}
 */
public interface HtmlContainer<E extends HTMLElement, B extends TypedBuilder<E, B>> extends TextContent<E, B> {

    /** Modifies the inner HTML on the element using {@link HTMLElement#innerHTML}. */
    default B innerHtml(SafeHtml html) {
        element().innerHTML = html.asString();
        return that();
    }

    // ------------------------------------------------------ child element(s)

    /** Adds the given text as a text node. */
    default B add(String text) {
        return add(element().ownerDocument.createTextNode(text));
    }

    /** Adds the given node. */
    default B add(Node element) {
        element().appendChild(element);
        return that();
    }

    /** Adds the given element by calling {@code element.element()}. */
    default B add(IsElement<?> element) {
        if (element != null) {
            return add(element.element());
        }
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
    default <F extends HTMLElement> B addAll(IsElement<?>... elements) {
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
}
