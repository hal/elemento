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

import elemental2.dom.HTMLElement;

/** Builder for empty HTML elements like <code>&lt;br/&gt;</code>, <code>&lt;hr/&gt;</code> or <code>&lt;img/&gt;</code>. */
public class EmptyHtmlElementBuilder<E extends HTMLElement> extends HtmlElementBuilder<E, EmptyHtmlElementBuilder<E>> {

    public EmptyHtmlElementBuilder(E element) {
        super(element);
    }

    @Override
    public EmptyHtmlElementBuilder<E> that() {
        return this;
    }
}
