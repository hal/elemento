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

import elemental2.dom.HTMLElement;

/**
 * @deprecated This interface is too broad. It is replaced with more specific interfaces:
 * <ul>
 *     <li>{@link HTMLElementAttributeMethods}</li>
 *     <li>{@link HTMLElementDataMethods}</li>
 *     <li>{@link HTMLElementStyleMethods}</li>
 *     <li>{@link HTMLElementVisibilityMethods}</li>
 * </ul>
 */
@Deprecated
public interface HasHTMLElement<E extends HTMLElement, B extends TypedBuilder<E, B>>
        extends TypedBuilder<E, B>, IsElement<E> {

    /** Sets the title on the element. */
    default B title(String title) {
        element().title = title;
        return that();
    }

    /** Appends the given style to the existing styles of this element. */
    default B style(String style) {
        return style(style, true);
    }

    /** Appends or sets the given style to the styles of this element. */
    default B style(String style, boolean append) {
        if (append) {
            element().style.cssText += style;
        } else {
            element().style.cssText = style;
        }
        return that();
    }

    /** Sets the given style on this element. */
    default B style(String property, int value) {
        return style(property, String.valueOf(value), false);
    }

    /** Sets the given style on this element. */
    default B style(String property, String value) {
        return style(property, value, false);
    }

    /** Sets the given style on this element. */
    default B style(String property, int value, boolean important) {
        return style(property, String.valueOf(value), important);
    }

    /** Sets the given style on this element. */
    default B style(String property, String value, boolean important) {
        String priority = important ? "important" : "";
        element().style.setProperty(property, value, priority);
        return that();
    }

    /**
     * Adds a {@code data-} attribute to the element.
     *
     * @param name The name of the data attribute w/o the {@code data-} prefix. However, it won't be added if it's already
     *             present.
     */
    default B data(String name, String value) {
        element().dataset.set(name.replaceFirst("^data-", ""), value);
        return that();
    }

    /** Modifies the {@code hidden} flag. */
    default B hidden(boolean hidden) {
        element().hidden = hidden;
        return that();
    }
}
