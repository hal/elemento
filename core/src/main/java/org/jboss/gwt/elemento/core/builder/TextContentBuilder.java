package org.jboss.gwt.elemento.core.builder;

import elemental2.dom.HTMLElement;

/** Builder for elements with inner text. */
public class TextContentBuilder<E extends HTMLElement> extends ElementBuilder<E, TextContentBuilder<E>>
        implements TextContent<E, TextContentBuilder<E>> {

    public TextContentBuilder(E element) { super(element); }

    @Override
    public TextContentBuilder<E> that() { return this; }

}
