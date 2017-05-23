package org.jboss.gwt.elemento.core;

import elemental2.dom.HTMLElement;

/**
 * An element which uses the builder to remove all event handlers when it's {@linkplain #detach() detached}.
 *
 * @author Harald Pehl
 */
public class AttachableElement implements IsElement, Attachable {

    private final Elements.CoreBuilder builder;
    private final HTMLElement element;

    AttachableElement(final Elements.CoreBuilder builder) {
        this.builder = builder;
        this.element = builder.build();
    }

    /**
     * @return the element built by {@link Elements.CoreBuilder#build()}
     */
    @Override
    public HTMLElement asElement() {
        return element;
    }

    /**
     * Does nothing
     */
    @Override
    public void attach() {
    }

    /**
     * Removes all event handlers registered by {@link Elements.CoreBuilder#on(EventType, EventCallbackFn)}
     */
    @Override
    public void detach() {
        builder.removeHandlers();
    }
}
