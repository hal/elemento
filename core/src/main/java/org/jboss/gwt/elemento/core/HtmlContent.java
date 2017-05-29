package org.jboss.gwt.elemento.core;

import com.google.gwt.safehtml.shared.SafeHtml;
import elemental2.dom.HTMLElement;

/**
 * @author Harald Pehl
 */
public interface HtmlContent<E extends HTMLElement, B extends TypedBuilder<E, B>>
        extends TextContent<E, B> {

    /** Sets the inner HTML on the last added element. */
    default B innerHtml(SafeHtml html) {
        asElement().innerHTML = html.asString();
        return that();
    }


    // ------------------------------------------------------ child element(s)

    /** Add the given element by calling {@code element.asElement()}. */
    default B add(IsElement element) {
        return add(element.asElement());
    }

    /** Adds the given element. */
    default B add(HTMLElement element) {
        asElement().appendChild(element);
        return that();
    }

    /** Adds all elements from {@code elements.asElements()}. */
    default B addAll(HasElements elements) {
        return addAll(elements.asElements());
    }

    /** Adds all elements. */
    default B addAll(HTMLElement... elements) {
        for (HTMLElement element : elements) { add(element); }
        return that();
    }

    /** Adds all elements. */
    default B addAll(Iterable<HTMLElement> elements) {
        for (HTMLElement element : elements) { add(element); }
        return that();
    }

    /** Adds all elements. */
    default B addAll(IsElement... elements) {
        for (IsElement element : elements) { add(element); }
        return that();
    }
}
