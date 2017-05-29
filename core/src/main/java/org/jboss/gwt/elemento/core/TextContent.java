package org.jboss.gwt.elemento.core;

import elemental2.dom.HTMLElement;

/**
 * @author Harald Pehl
 */
public interface TextContent<E extends HTMLElement, B extends TypedBuilder<E, B>> extends TypedBuilder<E, B> {

    /** Sets the inner text on the last added element using {@link HTMLElement#textContent}. */
    default B textContent(String text) {
        asElement().textContent = text;
        return that();
    }
}
