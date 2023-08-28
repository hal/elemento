/*
 *  Copyright 2022 Red Hat
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

import elemental2.dom.HTMLInputElement;

/**
 * Provides methods and default implementations for modifying input elements.
 */
public interface HasInputElement<E extends HTMLInputElement, B extends TypedBuilder<E, B>>
        extends TypedBuilder<E, B>, IsElement<E> {

    /** Modifies the {@code autofocus} flag. */
    default B autofocus(boolean autofocus) {
        element().autofocus = autofocus;
        return that();
    }

    /** Modifies the {@code autocomplete} attribute. */
    default B autocomplete(String autocomplete) {
        element().autocomplete = autocomplete;
        return that();
    }

    /** Modifies the {@code checked} flag. */
    default B checked(boolean checked) {
        element().checked = checked;
        return that();
    }

    /** Modifies the {@code indeterminate} flag. */
    default B indeterminate(boolean indeterminate) {
        element().indeterminate = indeterminate;
        return that();
    }

    /** Modifies the {@code readOnly} flag. */
    default B readOnly(boolean readOnly) {
        element().readOnly = readOnly;
        return that();
    }

    /** Modifies the {@code disabled} flag. */
    default B disabled(boolean disabled) {
        element().disabled = disabled;
        return that();
    }

    /** Modifies the {@code required} flag. */
    default B required(boolean required) {
        element().required = required;
        return that();
    }

    /** Modifies the {@code name} attribute. */
    default B name(String name) {
        element().name = name;
        return that();
    }

    /** Modifies the {@code min} attribute. */
    default B min(int min) {
        return min(String.valueOf(min));
    }

    /** Modifies the {@code min} attribute. */
    default B min(String min) {
        element().min = min;
        return that();
    }

    /** Modifies the {@code max} attribute. */
    default B max(int max) {
        return max(String.valueOf(max));
    }

    /** Modifies the {@code max} attribute. */
    default B max(String max) {
        element().max = max;
        return that();
    }

    /** Modifies the {@code placeholder} text. */
    default B placeholder(String placeholder) {
        element().placeholder = placeholder;
        return that();
    }

    /** Modifies the {@code tabIndex} number. */
    default B tabIndex(int tabIndex) {
        element().tabIndex = tabIndex;
        return that();
    }

    /** Modifies the {@code multiple} attribute. */
    default B multiple(boolean multiple) {
        element().multiple = multiple;
        return that();
    }

    /** Modifies the {@code accept} attribute. */
    default B accept(String accept) {
        element().accept = accept;
        return that();
    }
}
