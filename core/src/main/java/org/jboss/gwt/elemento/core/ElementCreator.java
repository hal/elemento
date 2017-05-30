package org.jboss.gwt.elemento.core;

import elemental2.dom.HTMLElement;

/**
 * Factory to create elements.
 *
 * @author Harald Pehl
 */
@FunctionalInterface
interface ElementCreator {

    <E extends HTMLElement> E create(String tag, Class<E> type);
}
