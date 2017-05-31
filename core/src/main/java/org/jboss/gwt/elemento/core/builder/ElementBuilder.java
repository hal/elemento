package org.jboss.gwt.elemento.core.builder;

import java.util.function.Consumer;

import elemental2.dom.Event;
import elemental2.dom.HTMLElement;
import org.jboss.gwt.elemento.core.EventCallbackFn;
import org.jboss.gwt.elemento.core.EventType;
import org.jboss.gwt.elemento.core.IsElement;
import org.jetbrains.annotations.NonNls;

import static java.util.Objects.requireNonNull;
import static org.jboss.gwt.elemento.core.EventType.bind;

/** Base builder with methods common to all typed builders. */
public abstract class ElementBuilder<E extends HTMLElement, B extends ElementBuilder<E, B>>
        implements TypedBuilder<E, B>, IsElement<E> {

    protected final E element;

    /** Creates a new element builder to mutate the passed element. */
    ElementBuilder(E element) {
        this.element = requireNonNull(element, "element required");
    }

    @Override
    public E asElement() { return element; }


    // ------------------------------------------------------ modify current element

    /** Sets the id on the element. */
    public B id(@NonNls String id) {
        asElement().id = id;
        return that();
    }

    /** Sets the title on the element. */
    public B title(String title) {
        asElement().title = title;
        return that();
    }

    /** Adds the specified CSS classes to the class list of the element. */
    public B css(@NonNls String... classes) {
        asElement().classList.add(classes);
        return that();
    }

    /** Sets the CSS style of the element. */
    public B style(@NonNls String style) {
        asElement().style.cssText = style;
        return that();
    }

    /** Sets the specified attribute of the element. */
    public B attr(@NonNls String name, String value) {
        asElement().setAttribute(name, value);
        return that();
    }

    /**
     * Adds a {@code data-} attribute to the element.
     *
     * @param name The name of the data attribute w/o the {@code data-} prefix. However it won't be added if it's
     *             already present.
     */
    public B data(@NonNls String name, String value) {
        asElement().dataset.set(name.replaceFirst("^data-", ""), value);
        return that();
    }

    /**
     * Adds an {@code aria-} attribute to the element.
     *
     * @param name The name of the aria attribute w/o the {@code aria-} prefix. However it won't be added if it's
     *             already present.
     */
    public B aria(@NonNls String name, String value) {
        String safeName = name.startsWith("aria-") ? name : "aria-" + name;
        return attr(safeName, value);
    }

    /** Provides a way to modify the element using the specified consumer. */
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
