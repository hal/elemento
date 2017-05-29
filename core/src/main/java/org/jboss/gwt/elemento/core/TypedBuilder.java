package org.jboss.gwt.elemento.core;

import elemental2.dom.HTMLElement;

/**
 * @author Harald Pehl
 */
public interface TypedBuilder<E extends HTMLElement, B extends TypedBuilder<E, B>> extends IsElement {

    /** In order to make builders work with inheritance, sub-builders must return a reference to their instance. */
    B that();
}
