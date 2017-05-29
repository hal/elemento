package org.jboss.gwt.elemento.core;

import java.util.function.Consumer;

import elemental2.dom.Event;
import elemental2.dom.HTMLElement;
import org.jetbrains.annotations.NonNls;

import static java.util.Objects.requireNonNull;
import static org.jboss.gwt.elemento.core.EventType.bind;

/**
 * @author Harald Pehl
 */
public abstract class BaseBuilder<E extends HTMLElement, B extends BaseBuilder<E, B>>
        implements TypedBuilder<E, B> {

    protected final E element;

    /** Creates a new element builder to mutate the passed element. */
    BaseBuilder(E element) {
        this.element = requireNonNull(element, "element required");
    }

    @Override
    public E asElement() { return element; }

    /** An unique id which is used in error messages. */
    protected abstract String logId();

    /** In order to make builders work with inheritance, sub-builders must return a reference to their instance. */
    public abstract B that();


    // ------------------------------------------------------ modify current element

    public B id(@NonNls String id) {
        asElement().id = id;
        return that();
    }

    public B title(String title) {
        asElement().title = title;
        return that();
    }

    public B css(@NonNls String... classes) {
        asElement().classList.add(classes);
        return that();
    }

    public B style(@NonNls String style) {
        asElement().style.cssText = style;
        return that();
    }

    public B attr(@NonNls String name, String value) {
        asElement().setAttribute(name, value);
        return that();
    }

    /**
     * Adds a {@code data-} attribute to the last added element.
     *
     * @param name The name of the data attribute w/o the {@code data-} prefix. However it won't be added if it's
     *             already present.
     */
    public B data(@NonNls String name, String value) {
        asElement().dataset.set(name.replaceFirst("^data-", ""), value);
        return that();
    }

    /**
     * Adds an {@code aria-} attribute to the last added element.
     *
     * @param name The name of the aria attribute w/o the {@code aria-} prefix. However it won't be added if it's
     *             already present.
     */
    public B aria(@NonNls String name, String value) {
        String safeName = name.startsWith("aria-") ? name : "aria-" + name;
        return attr(safeName, value);
    }

    public B apply(Consumer<E> consumer) {
        consumer.accept(asElement());
        return that();
    }

    // ------------------------------------------------------ event handler

    /** Adds the given callback to the element. */
    public <V extends Event> B on(EventType<V, ?> type, EventCallbackFn<V> callback) {
        bind(asElement(), type, callback);
        return that();
    }
}
