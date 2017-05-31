package org.jboss.gwt.elemento.core.builder;

/** Base interface for all typed builders. */
public interface TypedBuilder<E, B extends TypedBuilder<E, B>> {

    /** Other than {@code IsElement} this interface is not restricted to {@code HTMLElement}. */
    E asElement();

    /** In order to make builders work with inheritance, sub-builders must return a reference to their instance. */
    B that();
}
