package org.jboss.gwt.elemento.core;

import elemental2.dom.HTMLElement;

/**
 * Base interface for all typed builder.
 *
 * @author Harald Pehl
 */
public interface TypedBuilder<E extends HTMLElement, B extends TypedBuilder<E, B>> extends IsElement {

    /** In order to make builder work with inheritance, sub-builder must return a reference to their instance. */
    B that();
}
