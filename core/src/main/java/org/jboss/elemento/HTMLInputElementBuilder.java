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

import elemental2.dom.HTMLInputElement;

import static java.util.Objects.requireNonNull;

/** Builder for input elements. */
public class HTMLInputElementBuilder<E extends HTMLInputElement> implements
        ElementAttributeMethods<E, HTMLInputElementBuilder<E>>,
        ElementClassListMethods<E, HTMLInputElementBuilder<E>>,
        ElementConsumerMethods<E, HTMLInputElementBuilder<E>>,
        ElementEventMethods<E, HTMLInputElementBuilder<E>>,
        ElementIdMethods<E, HTMLInputElementBuilder<E>>,
        ElementQueryMethods<E>,
        ElementTextMethods<E, HTMLInputElementBuilder<E>>,
        HTMLElementAttributeMethods<E, HTMLInputElementBuilder<E>>,
        HTMLElementDataMethods<E, HTMLInputElementBuilder<E>>,
        HTMLElementStyleMethods<E, HTMLInputElementBuilder<E>>,
        HTMLElementVisibilityMethods<E, HTMLInputElementBuilder<E>> {

    private final E element;

    public HTMLInputElementBuilder(E element) {
        this.element = requireNonNull(element, "element required");
    }

    @Override
    public HTMLInputElementBuilder<E> that() {
        return this;
    }

    @Override
    public E element() {
        return element;
    }

    /** Modifies the {@code accept} attribute. */
    public HTMLInputElementBuilder<E> accept(String accept) {
        element().accept = accept;
        return this;
    }

    /** Modifies the {@code autofocus} flag. */
    public HTMLInputElementBuilder<E> autofocus(boolean autofocus) {
        element().autofocus = autofocus;
        return this;
    }

    /** Modifies the {@code autocomplete} attribute. */
    public HTMLInputElementBuilder<E> autocomplete(String autocomplete) {
        element().autocomplete = autocomplete;
        return this;
    }

    /** Modifies the {@code checked} flag. */
    public HTMLInputElementBuilder<E> checked(boolean checked) {
        element().checked = checked;
        return this;
    }

    /** Modifies the {@code disabled} flag. */
    public HTMLInputElementBuilder<E> disabled(boolean disabled) {
        element().disabled = disabled;
        return this;
    }

    /** Modifies the {@code indeterminate} flag. */
    public HTMLInputElementBuilder<E> indeterminate(boolean indeterminate) {
        element().indeterminate = indeterminate;
        return this;
    }

    /** Modifies the {@code max} attribute. */
    public HTMLInputElementBuilder<E> max(int max) {
        return max(String.valueOf(max));
    }

    /** Modifies the {@code max} attribute. */
    public HTMLInputElementBuilder<E> max(String max) {
        element().max = max;
        return this;
    }

    /** Modifies the {@code min} attribute. */
    public HTMLInputElementBuilder<E> min(int min) {
        return min(String.valueOf(min));
    }

    /** Modifies the {@code min} attribute. */
    public HTMLInputElementBuilder<E> min(String min) {
        element().min = min;
        return this;
    }

    /** Modifies the {@code multiple} attribute. */
    public HTMLInputElementBuilder<E> multiple(boolean multiple) {
        element().multiple = multiple;
        return this;
    }

    /** Modifies the {@code name} attribute. */
    public HTMLInputElementBuilder<E> name(String name) {
        element().name = name;
        return this;
    }

    /** Modifies the {@code placeholder} text. */
    public HTMLInputElementBuilder<E> placeholder(String placeholder) {
        element().placeholder = placeholder;
        return this;
    }

    /** Modifies the {@code readOnly} flag. */
    public HTMLInputElementBuilder<E> readOnly(boolean readOnly) {
        element().readOnly = readOnly;
        return this;
    }

    /** Modifies the {@code required} flag. */
    public HTMLInputElementBuilder<E> required(boolean required) {
        element().required = required;
        return this;
    }

    /** Modifies the {@code tabIndex} number. */
    public HTMLInputElementBuilder<E> tabIndex(int tabIndex) {
        element().tabIndex = tabIndex;
        return this;
    }

    /** Modifies the {@code value}. */
    public HTMLInputElementBuilder<E> value(String value) {
        element().value = value;
        return this;
    }
}
