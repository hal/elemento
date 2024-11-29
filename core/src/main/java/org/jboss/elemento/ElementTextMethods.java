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

import elemental2.dom.Element;

/**
 * Provides methods and default implementations for modifying the text of an element.
 */
public interface ElementTextMethods<E extends Element, B extends TypedBuilder<E, B>>
        extends TypedBuilder<E, B>, IsElement<E> {

    /**
     * Sets the text content on the element using {@link Element#textContent}.
     *
     * @see <a
     * href="https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent">https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent</a>
     */
    default B text(String text) {
        element().textContent = text;
        return that();
    }

    /**
     * Retrieves the text content of the element.
     *
     * @return the text content of the element.
     * @see <a
     * href="https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent">https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent</a>
     */
    default String text() {
        return element().textContent;
    }
}
