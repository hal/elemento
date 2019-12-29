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

import elemental2.dom.Element;
import elemental2.dom.HTMLElement;
import elemental2.dom.Node;
import org.elemento.widget.HasElements;
import org.elemento.widget.IsElement;
import org.gwtproject.safehtml.shared.SafeHtml;

/** Builder for container-like elements with inner HTML. */
public interface HtmlContent<E extends HTMLElement, B extends TypedBuilder<E, B>> extends TextContent<E, B> {

    /** Sets the inner HTML on the element using {@link HTMLElement#innerHTML}. */
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
    default B add(IsElement element) {
        return add(element.element());
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
    default B addAll(IsElement... elements) {
        for (IsElement element : elements) {
            add(element.element());
        }
        return that();
    }

    /** Adds all elements. */
    default B addAll(Iterable<?> elements) {
        for (Object element : elements) {
            if (element instanceof Node) {
                add(((Node) element));
            } else if (element instanceof IsElement) {
                add(((IsElement) element).element());
            }
        }
        return that();
    }

    // ------------------------------------------------------ deprecated

    /** @deprecated Please use {@link #addAll(Iterable)} instead. */
    @Deprecated
    default B addAll(HasElements elements) {
        for (HTMLElement element : elements.asElements()) {
            add(element);
        }
        return that();
    }
}
