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
package org.elemento.builder;

import elemental2.dom.HTMLElement;

/** Builder for empty elements like <code>&lt;br/&gt;</code>, <code>&lt;hr/&gt;</code> or <code>&lt;img/&gt;</code>. */
public class EmptyContentBuilder<E extends HTMLElement> extends ElementBuilder<E, EmptyContentBuilder<E>> {

    public EmptyContentBuilder(E element) {
        super(element);
    }

    @Override
    public EmptyContentBuilder<E> that() {
        return this;
    }
}
