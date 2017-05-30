package org.jboss.gwt.elemento.core;

import elemental2.dom.HTMLElement;

/**
 * Builder for empty elements like <code>&lt;br/&gt;</code>, <code>&lt;hr/&gt;</code> or <code>&lt;img/&gt;</code>.
 *
 * @author Harald Pehl
 */
public class EmptyContentBuilder<E extends HTMLElement> extends BaseBuilder<E, EmptyContentBuilder<E>> {

    EmptyContentBuilder(E element) { super(element); }

    @Override
    public EmptyContentBuilder<E> that() { return this; }

    @Override
    protected String logId() { return "<elements.empty>"; }
}
