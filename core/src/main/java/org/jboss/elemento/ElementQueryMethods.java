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
import elemental2.dom.HTMLElement;

/**
 * Provides methods and default implementations for finding elements.
 * <p>
 * {@snippet class = ElementQueryDemo region = querySelectorAllDemo}
 */
public interface ElementQueryMethods<E extends Element> extends IsElement<E> {

    /**
     * Finds all HTML elements for the given selector.
     */
    default Iterable<HTMLElement> querySelectorAll(By selector) {
        return Elements.querySelectorAll(element(), selector);
    }

    /** Finds a single HTML element for the given selector. */
    default <F extends HTMLElement> F querySelector(By selector) {
        return Elements.querySelector(element(), selector);
    }

    /** Finds the closest HTML element for the given selector. */
    default <F extends HTMLElement> F closest(By selector) {
        return Elements.closest(element(), selector);
    }
}
