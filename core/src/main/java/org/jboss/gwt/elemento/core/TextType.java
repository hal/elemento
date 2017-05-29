package org.jboss.gwt.elemento.core;

import java.util.function.Supplier;

import elemental2.dom.HTMLElement;

/** Dummy type just to reduce java generics. */
class TextType<E extends HTMLElement> extends ElementType<TextContentBuilder<E>> {

    TextType(Supplier<TextContentBuilder<E>> builder) { super(builder); }
}
