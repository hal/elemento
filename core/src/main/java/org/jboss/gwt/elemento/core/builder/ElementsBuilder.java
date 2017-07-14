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
import java.util.List;

import elemental2.dom.HTMLElement;
import org.jboss.gwt.elemento.core.HasElements;
import org.jboss.gwt.elemento.core.IsElement;

/** A builder to collect elements in a flat list as {@link HasElements} */
public class ElementsBuilder implements HasElements {

    private final List<HTMLElement> elements;

    public ElementsBuilder() {elements = new ArrayList<>();}


    // ------------------------------------------------------ mirror add() methods from HtmlContent

    /** Add the given element by calling {@code element.asElement()}. */
    public ElementsBuilder add(IsElement element) {
        return add(element.asElement());
    }

    /** Adds the given element. */
    public ElementsBuilder add(HTMLElement element) {
        elements.add(element);
        return this;
    }

    /** Adds all elements from {@code elements.asElements()}. */
    public ElementsBuilder addAll(HasElements elements) {
        return addAll(elements.asElements());
    }

    /** Adds all elements. */
    public ElementsBuilder addAll(HTMLElement... elements) {
        for (HTMLElement element : elements) { add(element); }
        return this;
    }

    /** Adds all elements. */
    public ElementsBuilder addAll(Iterable<HTMLElement> elements) {
        for (HTMLElement element : elements) { add(element); }
        return this;
    }

    /** Adds all elements. */
    public ElementsBuilder addAll(IsElement... elements) {
        for (IsElement element : elements) { add(element); }
        return this;
    }

    /** Returns the elements added so far. */
    @Override
    public Iterable<HTMLElement> asElements() {
        return elements;
    }
}
