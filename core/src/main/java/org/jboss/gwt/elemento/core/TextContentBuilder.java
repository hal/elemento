package org.jboss.gwt.elemento.core;

import elemental2.dom.HTMLElement;

/**
 * Builder for elements with inner text.
 *
 * @author Harald Pehl
 */
public class TextContentBuilder<E extends HTMLElement> extends BaseBuilder<E, TextContentBuilder<E>>
        implements TextContent<E, TextContentBuilder<E>> {

    TextContentBuilder(E element) { super(element); }

    @Override
    public TextContentBuilder<E> that() { return this; }

    @Override
    protected String logId() { return "<elements.text>"; }
}
