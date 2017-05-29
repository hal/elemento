package org.jboss.gwt.elemento.core;

import java.util.function.Supplier;

import elemental2.dom.HTMLElement;

/** Dummy type just to reduce java generics. */
class HtmlType<E extends HTMLElement> extends ElementType<HtmlContentBuilder<E>> {

    HtmlType(Supplier<HtmlContentBuilder<E>> builder) { super(builder); }
}
