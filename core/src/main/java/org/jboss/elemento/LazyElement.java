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
 * Convenience class to support lazy element creation. The bulk of a LazyElement is not instantiated until {@link #element()} is
 * called.
 */
public abstract class LazyElement<E extends HTMLElement> implements IsElement<E> {

    private E element;

    /**
     * Creates and returns the element on demand by calling {@link #createElement()} or just returns the previously created
     * element.
     */
    @Override
    public E element() {
        if (element == null) {
            element = createElement();
        }
        return element;
    }

    /**
     * Create the element contained within the {@link LazyElement}.
     *
     * @return the lazy element
     */
    protected abstract E createElement();

    /** @return whether the element has already been created. */
    protected boolean isInitialized() {
        return element != null;
    }
}
