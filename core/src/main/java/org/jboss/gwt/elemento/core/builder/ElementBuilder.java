/*
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
package org.jboss.gwt.elemento.core.builder;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;

import elemental2.dom.Event;
import elemental2.dom.HTMLElement;
import org.jboss.gwt.elemento.core.Elements;
import org.jboss.gwt.elemento.core.EventCallbackFn;
import org.jboss.gwt.elemento.core.EventType;
import org.jboss.gwt.elemento.core.IsElement;

import static java.util.Arrays.asList;
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
    public E get() {
        return element;
    }

    @Override
    public E element() {
        return element;
    }


    // ------------------------------------------------------ modify current element

    /** Sets the id on the element. */
    public B id(String id) {
        get().id = id;
        return that();
    }

    /** Generates and sets an unique id on the element. */
    public B id() {
        id(Elements.createDocumentUniqueId());
        return that();
    }

    /** Sets the title on the element. */
    public B title(String title) {
        get().title = title;
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
                get().classList.add(failSafeClass);
            }
        }
        return that();
    }

    /** Adds (force=true) or removes (force=false) the specified CSS class to the class list of the element. */
    public B css(String className, boolean force) {
        get().classList.toggle(className, force);
        return that();
    }

    /** Sets the CSS style of the element. */
    public B style(String style) {
        get().style.cssText = style;
        return that();
    }

    /** Sets the specified attribute of the element. */
    public B attr(String name, String value) {
        get().setAttribute(name, value);
        return that();
    }

    /**
     * Adds a {@code data-} attribute to the element.
     *
     * @param name The name of the data attribute w/o the {@code data-} prefix. However it won't be added if it's
     *             already present.
     */
    public B data(String name, String value) {
        get().dataset.set(name.replaceFirst("^data-", ""), value);
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

    // ------------------------------------------------------ event handler

    /** Adds the given callback to the element. */
    public <V extends Event> B on(EventType<V, ?> type, EventCallbackFn<V> callback) {
        bind(get(), type, callback);
        return that();
    }
}
