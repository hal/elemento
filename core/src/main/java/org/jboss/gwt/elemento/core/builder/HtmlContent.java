/*
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
package org.jboss.gwt.elemento.core.builder;

import com.google.gwt.safehtml.shared.SafeHtml;
import elemental2.dom.HTMLElement;
import elemental2.dom.Node;
import org.jboss.gwt.elemento.core.IsElement;

/** Builder for container-like elements with inner HTML. */
public interface HtmlContent<E extends HTMLElement, B extends TypedBuilder<E, B>> extends TextContent<E, B> {

    /** Sets the inner HTML on the element using {@link HTMLElement#innerHTML}. */
    default B innerHtml(SafeHtml html) {
        get().innerHTML = html.asString();
        return that();
    }


    // ------------------------------------------------------ child element(s)

    /** Adds the given element by calling {@code element.element()}. */
    default B add(IsElement element) {
        return add(element.element());
    }

    /** Adds the given text as a text node. */
    default B add(String text) {
        return add(get().ownerDocument.createTextNode(text));
    }

    /** Adds the given element. */
    default B add(Node element) {
        get().appendChild(element);
        return that();
    }

    /** Adds all elements. */
    default B addAll(HTMLElement... elements) {
        for (HTMLElement element : elements) {
            add(element);
        }
        return that();
    }

    /** Adds all elements. */
    default B addAll(Iterable<? extends Node> elements) {
        for (Node element : elements) {
            add(element);
        }
        return that();
    }

    /** Adds all elements. */
    default B addAll(IsElement... elements) {
        for (IsElement element : elements) {
            add(element);
        }
        return that();
    }
}
