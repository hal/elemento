package org.jboss.gwt.elemento.core;

import java.util.function.Supplier;

import elemental2.dom.HTMLElement;

/** Dummy type just to reduce java generics. */
class EmptyType<E extends HTMLElement> extends ElementType<EmptyContentBuilder<E>> {

    EmptyType(Supplier<EmptyContentBuilder<E>> builder) { super(builder); }
}
