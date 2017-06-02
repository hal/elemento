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
