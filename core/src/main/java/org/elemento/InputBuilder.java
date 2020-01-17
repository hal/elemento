/*
 * Copyright 2015-2016 Red Hat, Inc, and individual contributors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.elemento;

import elemental2.dom.HTMLInputElement;

/** Builder for input elements. */
public class InputBuilder<E extends HTMLInputElement> extends ElementBuilder<E, InputBuilder<E>> {

    public InputBuilder(E element) {
        super(element);
    }

    @Override
    public InputBuilder<E> that() {
        return this;
    }

    /** Modifies the {@code autofocus} flag. */
    public InputBuilder<E> autofocus(boolean autofocus) {
        element().autofocus = autofocus;
        return that();
    }

    /** Modifies the {@code autocomplete} attribute. */
    public InputBuilder<E> autocomplete(String autocomplete) {
        element().autocomplete = autocomplete;
        return that();
    }

    /** Modifies the {@code checked} flag. */
    public InputBuilder<E> checked(boolean checked) {
        element().checked = checked;
        return that();
    }

    /** Modifies the {@code indeterminate} flag. */
    public InputBuilder<E> indeterminate(boolean indeterminate) {
        element().indeterminate = indeterminate;
        return that();
    }

    /** Modifies the {@code readOnly} flag. */
    public InputBuilder<E> readOnly(boolean readOnly) {
        element().readOnly = readOnly;
        return that();
    }

    /** Modifies the {@code disabled} flag. */
    public InputBuilder<E> disabled(boolean disabled) {
        element().disabled = disabled;
        return that();
    }

    /** Modifies the {@code required} flag. */
    public InputBuilder<E> required(boolean required) {
        element().required = required;
        return that();
    }

    /** Modifies the {@code name} attribute. */
    public InputBuilder<E> name(String name) {
        element().name = name;
        return that();
    }

    /** Modifies the {@code min} attribute. */
    public InputBuilder<E> min(int min) {
        return min(String.valueOf(min));
    }

    /** Modifies the {@code min} attribute. */
    public InputBuilder<E> min(String min) {
        element().min = min;
        return that();
    }

    /** Modifies the {@code max} attribute. */
    public InputBuilder<E> max(int max) {
        return max(String.valueOf(max));
    }

    /** Modifies the {@code max} attribute. */
    public InputBuilder<E> max(String max) {
        element().max = max;
        return that();
    }

    /** Modifies the {@code placeholder} text. */
    public InputBuilder<E> placeholder(String placeholder) {
        element().placeholder = placeholder;
        return that();
    }

    /** Modifies the {@code tabIndex} number. */
    public InputBuilder<E> tabIndex(int tabIndex) {
        element().tabIndex = tabIndex;
        return that();
    }
}
