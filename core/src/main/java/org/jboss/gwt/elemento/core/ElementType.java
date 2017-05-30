package org.jboss.gwt.elemento.core;

import java.util.function.Supplier;

/**
 * Base type to reduce java generics.
 *
 * @author Harald Pehl
 */
class ElementType<B extends TypedBuilder> {

    private final Supplier<B> builder;

    ElementType(Supplier<B> builder) { this.builder = builder; }

    B builder() { return builder.get(); }
}
