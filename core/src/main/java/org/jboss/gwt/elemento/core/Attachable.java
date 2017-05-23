package org.jboss.gwt.elemento.core;

/**
 * Interface for elements which need to run code when they get attached to the DOM.
 *
 * @author Harald Pehl
 */
public interface Attachable {

    default void attach() {}

    default void detach() {}
}
