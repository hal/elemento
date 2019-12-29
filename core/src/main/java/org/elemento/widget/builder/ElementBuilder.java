/*
 * Copyright 2015-2016 Red Hat, Inc, and individual contributors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.elemento.widget.builder;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;
import java.util.function.Supplier;

import elemental2.dom.Event;
import elemental2.dom.HTMLElement;
import org.elemento.widget.Elements;
import org.elemento.widget.EventCallbackFn;
import org.elemento.widget.EventType;
import org.elemento.widget.IsElement;

import static java.util.Arrays.asList;
import static java.util.Objects.requireNonNull;
import static org.elemento.widget.EventType.bind;

/** Base builder with methods common to all typed builders. */
public abstract class ElementBuilder<E extends HTMLElement, B extends ElementBuilder<E, B>>
        implements TypedBuilder<E, B>, IsElement<E> {

    protected final E element;

    /** Creates a new element builder to mutate the passed element. */
    protected ElementBuilder(E element) {
        this.element = requireNonNull(element, "element required");
    }

    @Override
    public E element() {
        return element;
    }

    // ------------------------------------------------------ modify current element

    /** Sets the id on the element. */
    public B id(String id) {
        element().id = id;
        return that();
    }

    /** Generates and sets an unique id on the element. */
    public B id() {
        id(Elements.uniqueId());
        return that();
    }

    /** Sets the title on the element. */
    public B title(String title) {
        element().title = title;
        return that();
    }

    /** Adds the specified CSS classes to the class list of the element. */
    public B css(String... classes) {
        if (classes != null) {
            List<String> failSafeClasses = new ArrayList<>();
            for (String c : classes) {
                if (c != null) {
                    if (c.contains(" ")) {
                        failSafeClasses.addAll(asList(c.split(" ")));
                    } else {
                        failSafeClasses.add(c);
                    }
                }
            }
            for (String failSafeClass : failSafeClasses) {
                element().classList.add(failSafeClass);
            }
        }
        return that();
    }

    /** Toggle the class value; i.e., if the class exists then remove it, if not, then add it. */
    public B toggle(String className) {
        element().classList.toggle(className);
        return that();
    }

    /** Adds (force=true) or removes (force=false) the specified CSS class to the class list of the element. */
    public B toggle(String className, boolean force) {
        element().classList.toggle(className, force);
        return that();
    }

    /** Adds (force=true) or removes (force=false) the specified CSS class to the class list of the element. */
    public B toggle(String className, Supplier<Boolean> force) {
        element().classList.toggle(className, force.get());
        return that();
    }

    /** Sets the CSS style of the element. */
    public B style(String style) {
        element().style.cssText = style;
        return that();
    }

    /** Sets the specified attribute of the element. */
    public B attr(String name, String value) {
        element().setAttribute(name, value);
        return that();
    }

    /**
     * Adds a {@code data-} attribute to the element.
     *
     * @param name The name of the data attribute w/o the {@code data-} prefix. However it won't be added if it's
     *             already present.
     */
    public B data(String name, String value) {
        element().dataset.set(name.replaceFirst("^data-", ""), value);
        return that();
    }

    /**
     * Adds an {@code aria-} attribute to the element.
     *
     * @param name The name of the aria attribute w/o the {@code aria-} prefix. However it won't be added if it's
     *             already present.
     */
    public B aria(String name, String value) {
        String safeName = name.startsWith("aria-") ? name : "aria-" + name;
        return attr(safeName, value);
    }

    /** Provides a way to modify the element using the specified consumer. */
    public B apply(Consumer<E> consumer) {
        consumer.accept(get());
        return that();
    }

    /** Modifies the {@code hidden} flag. */
    public B hidden(boolean hidden) {
        element().hidden = hidden;
        return that();
    }

    // ------------------------------------------------------ event handler

    /** Adds the given callback to the element. */
    public <V extends Event> B on(EventType<V, ?> type, EventCallbackFn<V> callback) {
        bind(get(), type, callback);
        return that();
    }

    // ------------------------------------------------------ deprecated

    /** @deprecated Use {@link #toggle(String, boolean)} */
    @Deprecated
    public B css(String className, boolean force) {
        element().classList.toggle(className, force);
        return that();
    }

    /** @deprecated Please use {@link #element()} instead. */
    @Deprecated
    public E get() {
        return element;
    }

    /** @deprecated Please use {@link #element()} instead. */
    @Deprecated
    public E asElement() {
        return element;
    }
}
