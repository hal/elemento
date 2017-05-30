package org.jboss.gwt.elemento.core.builder;

import elemental2.dom.HTMLElement;

/** Factory to create elements. */
@FunctionalInterface
public interface ElementCreator {

    <E extends HTMLElement> E create(String tag, Class<E> type);
}
