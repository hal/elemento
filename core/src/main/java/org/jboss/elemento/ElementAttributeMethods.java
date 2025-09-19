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
 * Provides methods and default implementations for modifying the attributes of an element.
 */
public interface ElementAttributeMethods<E extends Element, B extends TypedBuilder<E, B>>
        extends TypedBuilder<E, B>, IsElement<E> {

    /** Sets the specified attribute of the element. */
    default B attr(String name, boolean value) {
        element().setAttribute(name, value);
        return that();
    }

    /** Sets the specified attribute of the element. */
    default B attr(String name, int value) {
        element().setAttribute(name, value);
        return that();
    }

    /** Sets the specified attribute of the element. */
    default B attr(String name, String value) {
        element().setAttribute(name, value);
        return that();
    }

    /**
     * Adds an {@code aria-} attribute to the element.
     *
     * @param name The name of the aria attributes w/o the {@code aria-} prefix. However, it won't be added if it's already
     *             present.
     */
    default B aria(String name, boolean value) {
        String safeName = name.startsWith("aria-") ? name : "aria-" + name;
        return attr(safeName, value);
    }

    /**
     * Adds an {@code aria-} attribute to the element.
     *
     * @param name The name of the aria attributes w/o the {@code aria-} prefix. However, it won't be added if it's already
     *             present.
     */
    default B aria(String name, int value) {
        String safeName = name.startsWith("aria-") ? name : "aria-" + name;
        return attr(safeName, value);
    }

    /**
     * Adds an {@code aria-} attribute to the element.
     *
     * @param name The name of the aria attributes w/o the {@code aria-} prefix. However, it won't be added if it's already
     *             present.
     */
    default B aria(String name, String value) {
        String safeName = name.startsWith("aria-") ? name : "aria-" + name;
        return attr(safeName, value);
    }

    /**
     * Sets the specified role of the element.
     */
    default B role(Role role) {
        return attr("role", role.name);
    }

    /**
     * Sets the specified role of the element.
     */
    default B role(String role) {
        return attr("role", role);
    }
}
