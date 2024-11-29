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
import org.gwtproject.safehtml.shared.SafeHtmlUtils;

import elemental2.dom.Element;

/**
 * Provides methods and default implementations for modifying the inner HTML of an element.
 */
public interface ElementHTMLMethods<E extends Element, B extends TypedBuilder<E, B>>
        extends TypedBuilder<E, B>, IsElement<E> {

    /**
     * Modifies the inner HTML on the element using {@link Element#innerHTML}.
     *
     * @see <a
     * href="https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML">https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML</a>
     */
    default B html(SafeHtml html) {
        Elements.innerHtml(element(), html);
        return that();
    }

    /**
     * Retrieves the current inner HTML of the element as a SafeHtml object.
     *
     * @return a SafeHtml instance containing the current inner HTML of the element.
     */
    default SafeHtml html() {
        return SafeHtmlUtils.fromString(element().innerHTML);
    }
}
