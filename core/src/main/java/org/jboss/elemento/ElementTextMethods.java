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

import org.gwtproject.safehtml.shared.SafeHtml;

import elemental2.dom.Element;

/**
 * Provides methods and default implementations for modifying the text and inner HTML of an element.
 */
public interface ElementTextMethods<E extends Element, B extends TypedBuilder<E, B>>
        extends TypedBuilder<E, B>, IsElement<E> {

    /**
     * Sets the inner text on the element using {@link Element#textContent}. If you want to preserve existing child elements and
     * just want to change the text of the text node, use {@link #textNode(String)}.
     */
    default B textContent(String text) {
        element().textContent = text;
        return that();
    }

    /**
     * Changes the text of the first text node (if any) or adds the given text as a new text node. Use this method instead of
     * {@link Element#textContent} if you want to preserve existing child elements.
     */
    default B textNode(String text) {
        Elements.textNode(element(), text);
        return that();
    }

    /** Adds the given text as a text node. */
    default B add(String text) {
        element().appendChild(element().ownerDocument.createTextNode(text));
        return that();
    }

    /** Modifies the inner HTML on the element using {@link Element#innerHTML}. */
    default B innerHtml(SafeHtml html) {
        element().innerHTML = html.asString();
        return that();
    }
}
