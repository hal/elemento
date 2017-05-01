package org.jboss.gwt.elemento.core;

import elemental2.dom.Event;
import jsinterop.annotations.JsFunction;

/**
 * @author Harald Pehl
 */
@JsFunction
public interface EventCallbackFn {
    void onInvoke(Event event);
}
