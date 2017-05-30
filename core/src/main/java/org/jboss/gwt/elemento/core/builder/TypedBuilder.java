package org.jboss.gwt.elemento.core.builder;

import elemental2.dom.HTMLElement;
import org.jboss.gwt.elemento.core.IsElement;

/** Base interface for all typed builder. */
public interface TypedBuilder<E extends HTMLElement, B extends TypedBuilder<E, B>> extends IsElement {

    /** In order to make builder work with inheritance, sub-builder must return a reference to their instance. */
    B that();

}
