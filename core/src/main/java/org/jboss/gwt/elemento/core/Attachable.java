package org.jboss.gwt.elemento.core;

/**
 * Interface for elements which need to run code when they get attached to the DOM.
 *
 * @author Harald Pehl
 */
public interface Attachable {

    /** Default implementation does nothing. */
    default void attach() {}

    /** Default implementation does nothing. */
    default void detach() {}
}
