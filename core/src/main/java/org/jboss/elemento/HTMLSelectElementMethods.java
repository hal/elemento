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

import elemental2.dom.HTMLSelectElement;

/**
 * Provides methods and default implementations for modifying the attributes of an HTML input element.
 */
public interface HTMLSelectElementMethods<E extends HTMLSelectElement, B extends TypedBuilder<E, B>>
        extends TypedBuilder<E, B>, IsElement<E> {

    /** Modifies the {@code autofocus} flag. */
    default B autofocus(boolean autofocus) {
        element().autofocus = autofocus;
        return that();
    }

    /** Modifies the {@code disabled} flag. */
    default B disabled(boolean disabled) {
        element().disabled = disabled;
        return that();
    }

    /** Modifies the {@code length} flag. */
    default B length(int length) {
        element().length = length;
        return that();
    }

    /** Modifies the {@code multiple} flag. */
    default B multiple(boolean multiple) {
        element().multiple = multiple;
        return that();
    }

    /** Modifies the {@code name} attribute. */
    default B name(String name) {
        element().name = name;
        return that();
    }

    /** Modifies the {@code required} flag. */
    default B required(boolean required) {
        element().required = required;
        return that();
    }

    /** Modifies the {@code selectedIndex} flag. */
    default B selectedIndex(int selectedIndex) {
        element().selectedIndex = selectedIndex;
        return that();
    }

    /** Modifies the {@code size} flag. */
    default B size(int size) {
        element().size = size;
        return that();
    }

    /** Modifies the {@code tabIndex} number. */
    default B tabIndex(int tabIndex) {
        element().tabIndex = tabIndex;
        return that();
    }

    /** Modifies the {@code type}. */
    default B type(String type) {
        element().type = type;
        return that();
    }
    /** Modifies the {@code value}. */
    default B value(String value) {
        element().value = value;
        return that();
    }
}
