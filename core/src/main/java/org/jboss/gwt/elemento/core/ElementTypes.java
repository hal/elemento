package org.jboss.gwt.elemento.core;

import java.util.function.Supplier;

import elemental2.dom.HTMLElement;

/**
 * Dummy types to reduce java generics.
 *
 * @author Harald Pehl
 */
class ElementTypes {

    static class Empty<E extends HTMLElement> extends ElementType<EmptyContentBuilder<E>> {

        Empty(Supplier<EmptyContentBuilder<E>> builder) { super(builder); }
    }


    static class TextType<E extends HTMLElement> extends ElementType<TextContentBuilder<E>> {

        TextType(Supplier<TextContentBuilder<E>> builder) { super(builder); }
    }


    static class HTML<E extends HTMLElement> extends ElementType<HtmlContentBuilder<E>> {

        HTML(Supplier<HtmlContentBuilder<E>> builder) { super(builder); }
    }
}