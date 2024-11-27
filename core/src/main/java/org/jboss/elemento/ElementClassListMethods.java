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
import java.util.function.Supplier;

import elemental2.dom.Element;

/**
 * Provides methods and default implementations for modifying the class list of an element.
 */
public interface ElementClassListMethods<E extends Element, B extends TypedBuilder<E, B>>
        extends TypedBuilder<E, B>, IsElement<E> {

    /** Adds the specified CSS classes to the class list of the element. */
    default B css(String... classes) {
        classList().add(classes);
        return that();
    }

    /** Toggle the class value; i.e., if the class exists, then remove it, if not, then add it. */
    default B toggle(String className) {
        classList().toggle(className);
        return that();
    }

    /** Adds (force=true) or removes (force=false) the specified CSS class to the class list of the element. */
    default B toggle(String className, boolean force) {
        classList().toggle(className, force);
        return that();
    }

    /** Adds (force=true) or removes (force=false) the specified CSS class to the class list of the element. */
    default B toggle(String className, Supplier<Boolean> force) {
        classList().toggle(className, force.get());
        return that();
    }

    default B classList(Consumer<ClassList<E>> classList) {
        classList.accept(ClassList.classList(element()));
        return that();
    }

    default ClassList<E> classList() {
        return ClassList.classList(element());
    }
}
