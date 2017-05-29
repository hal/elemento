package org.jboss.gwt.elemento.core;

import elemental2.dom.HTMLElement;

/**
 * @author Harald Pehl
 */
@FunctionalInterface
interface ElementCreator {

    <E extends HTMLElement> E create(String tag, Class<E> type);
}
