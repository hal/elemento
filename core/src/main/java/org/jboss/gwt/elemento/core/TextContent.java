package org.jboss.gwt.elemento.core;

import elemental2.dom.HTMLElement;

/**
 * Builder for elements with inner text.
 *
 * @author Harald Pehl
 */
public interface TextContent<E extends HTMLElement, B extends TypedBuilder<E, B>> extends TypedBuilder<E, B> {

    /** Sets the inner text on the element using {@link HTMLElement#textContent}. */
    default B textContent(String text) {
        asElement().textContent = text;
        return that();
    }
}
