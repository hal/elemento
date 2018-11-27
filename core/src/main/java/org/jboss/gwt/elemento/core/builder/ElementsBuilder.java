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

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import elemental2.dom.HTMLElement;
import org.jboss.gwt.elemento.core.HasElements;
import org.jboss.gwt.elemento.core.IsElement;

/** Builder for {@link HasElements} */
public class ElementsBuilder implements TypedBuilder<HasElements, ElementsBuilder> {

    private final HasElementsImpl elements;

    public ElementsBuilder() {
        elements = new HasElementsImpl();
    }


    // ------------------------------------------------------ mirror add() methods from HtmlContent

    /** Adds the given element by calling {@code element.element()}. */
    public ElementsBuilder add(IsElement element) {
        return add(element.element());
    }

    /** Adds the given element. */
    public ElementsBuilder add(HTMLElement element) {
        elements.add(element);
        return that();
    }

    /** Adds all elements from {@link HasElements#elements()}. */
    public ElementsBuilder addAll(HasElements elements) {
        for (HTMLElement element : elements) {
            add(element);
        }
        return that();
    }

    /** Adds all elements. */
    public ElementsBuilder addAll(HTMLElement... elements) {
        for (HTMLElement element : elements) {
            add(element);
        }
        return that();
    }

    /** Adds all elements. */
    public ElementsBuilder addAll(Iterable<HTMLElement> elements) {
        for (HTMLElement element : elements) {
            add(element);
        }
        return that();
    }

    /** Adds all elements. */
    public ElementsBuilder addAll(IsElement... elements) {
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
    public ElementsBuilder that() {
        return this;
    }


    private static class HasElementsImpl implements HasElements {

        private final List<HTMLElement> elements;


        private HasElementsImpl() {
            elements = new ArrayList<>();
        }

        @Override
        public Iterator<HTMLElement> iterator() {
            return elements.iterator();
        }

        private void add(HTMLElement htmlElement) {
            elements.add(htmlElement);
        }
    }
}
