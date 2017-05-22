package org.jboss.gwt.elemento.core;

import elemental2.dom.Event;
import jsinterop.annotations.JsFunction;

/**
 * @author Harald Pehl
 */
@JsFunction
public interface EventCallbackFn<E extends Event> {

    void onInvoke(E event);
}
