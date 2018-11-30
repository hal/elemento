/*
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
package org.jboss.gwt.elemento.core.builder;

import java.util.Iterator;

import elemental2.core.JsArray;
import elemental2.dom.HTMLElement;
import org.jboss.gwt.elemento.core.Elements;
import org.jboss.gwt.elemento.core.HasElements;
import org.jboss.gwt.elemento.core.IsElement;

/** Builder for {@link HasElements} */
public class HasElementsBuilder implements TypedBuilder<HasElements, HasElementsBuilder> {

    private final HasElementsImpl elements;

    public HasElementsBuilder() {
        elements = new HasElementsImpl();
    }


    // ------------------------------------------------------ mirror add() methods from HtmlContent

    /** Adds the given element by calling {@code element.element()}. */
    public HasElementsBuilder add(IsElement element) {
        return add(element.element());
    }

    /** Adds the given element. */
    public HasElementsBuilder add(HTMLElement element) {
        elements.elements.push(element);
        return that();
    }

    /** Adds all elements from {@link HasElements}. */
    public HasElementsBuilder addAll(HasElements elements) {
        for (HTMLElement element : elements) {
            add(element);
        }
        return that();
    }

    /** Adds all elements. */
    public HasElementsBuilder addAll(HTMLElement... elements) {
        for (HTMLElement element : elements) {
            add(element);
        }
        return that();
    }

    /** Adds all elements. */
    public HasElementsBuilder addAll(Iterable<HTMLElement> elements) {
        for (HTMLElement element : elements) {
            add(element);
        }
        return that();
    }

    /** Adds all elements. */
    public HasElementsBuilder addAll(IsElement... elements) {
        for (IsElement element : elements) {
            add(element);
        }
        return that();
    }

    @Override
    public HasElements get() {
        return elements;
    }

    @Override
    public HasElementsBuilder that() {
        return this;
    }


    private static class HasElementsImpl implements HasElements {

        final JsArray<HTMLElement> elements;


        private HasElementsImpl() {
            elements = new JsArray<>();
        }

        @Override
        public Iterator<HTMLElement> iterator() {
            return Elements.iterator(elements);
        }
    }
}
