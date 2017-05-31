package org.jboss.gwt.elemento.core.builder;

import elemental2.dom.HTMLElement;

/** Builder for container-like elements with inner HTML. */
public class HtmlContentBuilder<E extends HTMLElement> extends ElementBuilder<E, HtmlContentBuilder<E>>
        implements HtmlContent<E, HtmlContentBuilder<E>> {

    public HtmlContentBuilder(E element) { super(element); }

    @Override
    public HtmlContentBuilder<E> that() { return this; }

}
