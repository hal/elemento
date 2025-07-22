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

import java.util.function.Supplier;

import elemental2.dom.Element;
import elemental2.dom.Node;

/**
 * Delegates all methods from {@link ElementContainerMethods} to the element returned by {@link #containerDelegate()}.
 */
public interface ElementContainerDelegate<E extends Element, B extends TypedBuilder<E, B>> extends
        TypedBuilder<E, B>,
        ElementContainerMethods<E, B> {

    Element containerDelegate();

    @Override
    default B add(String text) {
        containerDelegate().appendChild(element().ownerDocument.createTextNode(text));
        return that();
    }

    @Override
    default B add(Node node) {
        containerDelegate().appendChild(node);
        return that();
    }

    @Override
    default B add(Supplier<Node> supplier) {
        containerDelegate().appendChild(supplier.get());
        return that();
    }
}
