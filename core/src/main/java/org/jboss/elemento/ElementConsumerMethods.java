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

import java.util.function.Consumer;

import elemental2.dom.Element;

/**
 * Provides methods and default implementations for modifying the element using consumers.
 */
public interface ElementConsumerMethods<E extends Element, B extends TypedBuilder<E, B>>
        extends TypedBuilder<E, B>, IsElement<E> {

    /** Provides a way to modify the wrapped element using the specified consumer. */
    default B apply(Consumer<E> consumer) {
        consumer.accept(element());
        return that();
    }

    /** Executes code in the context of this builder. */
    default B run(Consumer<B> consumer) {
        consumer.accept(that());
        return that();
    }
}
