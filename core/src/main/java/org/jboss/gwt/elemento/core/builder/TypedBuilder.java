package org.jboss.gwt.elemento.core.builder;

/** Base interface for all typed builder. */
public interface TypedBuilder<E, B extends TypedBuilder<E, B>> {

    E asElement();

    /** In order to make builder work with inheritance, sub-builder must return a reference to their instance. */
    B that();

}
