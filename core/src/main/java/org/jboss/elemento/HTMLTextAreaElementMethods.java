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

import elemental2.dom.HTMLTextAreaElement;

/**
 * Provides methods and default implementations for modifying the attributes of an HTML text area element.
 */
public interface HTMLTextAreaElementMethods<E extends HTMLTextAreaElement, B extends TypedBuilder<E, B>>
        extends TypedBuilder<E, B>, IsElement<E> {

    /** Modifies the {@code autofocus} flag. */
    default B autofocus(boolean autofocus) {
        element().autofocus = autofocus;
        return that();
    }

    /** Modifies the {@code cols} attribute. */
    default B cols(int cols) {
        element().cols = cols;
        return that();
    }

    /** Modifies the {@code disabled} flag. */
    default B disabled(boolean disabled) {
        element().disabled = disabled;
        return that();
    }

    /** Modifies the {@code rows} flag. */
    default B rows(int rows) {
        element().rows = rows;
        return that();
    }

    /** Modifies the {@code maxLength} attribute. */
    default B maxLength(int maxLength) {
        element().maxLength = maxLength;
        return that();
    }

    /** Modifies the {@code minLength} attribute. */
    default B minLength(int minLength) {
        element().minLength = minLength;
        return that();
    }

    /** Modifies the {@code name} attribute. */
    default B name(String name) {
        element().name = name;
        return that();
    }

    /** Modifies the {@code placeholder} text. */
    default B placeholder(String placeholder) {
        element().placeholder = placeholder;
        return that();
    }

    /** Modifies the {@code readOnly} flag. */
    default B readOnly(boolean readOnly) {
        element().readOnly = readOnly;
        return that();
    }

    /** Modifies the {@code tabIndex} number. */
    default B tabIndex(int tabIndex) {
        element().tabIndex = tabIndex;
        return that();
    }

    /** Modifies the {@code value}. */
    default B value(String value) {
        element().value = value;
        return that();
    }
}
