/*
 *  Copyright 2022 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
package org.jboss.elemento;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;
import java.util.function.Supplier;

import elemental2.dom.Element;
import elemental2.dom.Event;
import elemental2.dom.HTMLElement;

import static java.util.Arrays.asList;
import static java.util.Objects.requireNonNull;
import static org.jboss.elemento.EventType.bind;

/** Base builder for elements. */
public abstract class ElementBuilder<E extends Element, B extends ElementBuilder<E, B>>
        implements TypedBuilder<E, B> {

    protected final E element;

    /** Creates a new element builder to mutate the passed element. */
    protected ElementBuilder(E element) {
        this.element = requireNonNull(element, "element required");
    }

    // ------------------------------------------------------ modify current element

    /** Generates and sets an unique id on the element. */
    public B id() {
        return id(Id.unique());
    }

    /** Sets the id on the element. */
    public B id(String id) {
        element.id = id;
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
                element.classList.add(failSafeClass);
            }
        }
        return that();
    }

    /** Toggle the class value; i.e., if the class exists then remove it, if not, then add it. */
    public B toggle(String className) {
        element.classList.toggle(className);
        return that();
    }

    /** Adds (force=true) or removes (force=false) the specified CSS class to the class list of the element. */
    public B toggle(String className, boolean force) {
        element.classList.toggle(className, force);
        return that();
    }

    /** Adds (force=true) or removes (force=false) the specified CSS class to the class list of the element. */
    public B toggle(String className, Supplier<Boolean> force) {
        element.classList.toggle(className, force.get());
        return that();
    }

    /** Sets the specified attribute of the element. */
    public B attr(String name, boolean value) {
        element.setAttribute(name, value);
        return that();
    }

    /** Sets the specified attribute of the element. */
    public B attr(String name, int value) {
        element.setAttribute(name, value);
        return that();
    }

    /** Sets the specified attribute of the element. */
    public B attr(String name, String value) {
        element.setAttribute(name, value);
        return that();
    }

    /**
     * Adds an {@code aria-} attribute to the element.
     *
     * @param name The name of the aria attribute w/o the {@code aria-} prefix. However it won't be added if it's already
     *        present.
     */
    public B aria(String name, boolean value) {
        String safeName = name.startsWith("aria-") ? name : "aria-" + name;
        return attr(safeName, value);
    }

    /**
     * Adds an {@code aria-} attribute to the element.
     *
     * @param name The name of the aria attribute w/o the {@code aria-} prefix. However it won't be added if it's already
     *        present.
     */
    public B aria(String name, int value) {
        String safeName = name.startsWith("aria-") ? name : "aria-" + name;
        return attr(safeName, value);
    }

    /**
     * Adds an {@code aria-} attribute to the element.
     *
     * @param name The name of the aria attribute w/o the {@code aria-} prefix. However it won't be added if it's already
     *        present.
     */
    public B aria(String name, String value) {
        String safeName = name.startsWith("aria-") ? name : "aria-" + name;
        return attr(safeName, value);
    }

    /** Provides a way to modify the element using the specified consumer. */
    public B apply(Consumer<E> consumer) {
        consumer.accept(element);
        return that();
    }

    // ------------------------------------------------------ event handler
    /**
     * Adds the given callback to the element.
     * <p>
     * {@snippet class = ElementsDemo region = on}
     */
    public <V extends Event> B on(EventType<V, ?> type, EventCallbackFn<V> callback) {
        bind(element, type, callback);
        return that();
    }

    // ------------------------------------------------------ finder methods

    /**
     * Finds all HTML elements for the given selector.
     * <p>
     * {@snippet class = ElementsDemo region = findAll}
     */
    public Iterable<HTMLElement> findAll(By selector) {
        return Elements.findAll(element, selector);
    }

    /** Finds a single HTML element for the given selector. */
    public <F extends HTMLElement> F find(By selector) {
        return Elements.find(element, selector);
    }

    /** Finds the closest HTML element for the given selector. */
    public <F extends HTMLElement> F closest(By selector) {
        return Elements.closest(element, selector);
    }
}