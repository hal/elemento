package org.jboss.gwt.elemento.core.builder;

import elemental2.dom.HTMLElement;

/** Builder for empty elements like <code>&lt;br/&gt;</code>, <code>&lt;hr/&gt;</code> or <code>&lt;img/&gt;</code>. */
public class EmptyContentBuilder<E extends HTMLElement> extends ElementBuilder<E, EmptyContentBuilder<E>> {

    public EmptyContentBuilder(E element) { super(element); }

    @Override
    public EmptyContentBuilder<E> that() { return this; }

}
