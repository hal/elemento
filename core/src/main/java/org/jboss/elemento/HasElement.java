/*
 *  Copyright 2023 Red Hat
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

import elemental2.dom.Node;
import elemental2.dom.NodeList;
import org.gwtproject.safehtml.shared.SafeHtml;

import elemental2.dom.Element;
import elemental2.dom.Event;

import static java.util.Arrays.asList;
import static org.jboss.elemento.EventType.bind;

/**
 * Provides methods and default implementations for modifying elements.
 */
public interface HasElement<E extends Element, B extends TypedBuilder<E, B>>
        extends TypedBuilder<E, B>, IsElement<E> {

    // ------------------------------------------------------ id, text, HTML

    /** Generates and sets an unique id on the element. */
    default B id() {
        return id(Id.unique());
    }

    /** Sets the id on the element. */
    default B id(String id) {
        element().id = id;
        return that();
    }

    /**
     * Sets the inner text on the element using {@link Element#textContent}. If you want to preserve existing child elements and just want to change the text of the text node, use {@link #textNode(String)}.
     */
    default B textContent(String text) {
        element().textContent = text;
        return that();
    }

    /**
     * Changes the text of the first text node (if any) or adds the given text as a new text node. Use this method instead of {@link Element#textContent} if you want to preserve existing child elements.
     */
    default B textNode(String text) {
        boolean textNode = false;
        NodeList<Node> nodes = element().childNodes;
        for (int i = 0; i < nodes.length && !textNode; i++) {
            Node node = nodes.getAt(i);
            if (node.nodeType == Node.TEXT_NODE) {
                node.nodeValue = text;
                textNode = true;
            }
        }
        if (!textNode) {
            add(text);
        }
        return that();
    }

    /** Adds the given text as a text node. */
    default B add(String text) {
        element().appendChild(element().ownerDocument.createTextNode(text));
        return that();
    }

    /** Modifies the inner HTML on the element using {@link Element#innerHTML}. */
    default B innerHtml(SafeHtml html) {
        element().innerHTML = html.asString();
        return that();
    }

    // ------------------------------------------------------ CSS

    /** Adds the specified CSS classes to the class list of the element. */
    default B css(String... classes) {
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
    default B toggle(String className) {
        element().classList.toggle(className);
        return that();
    }

    /** Adds (force=true) or removes (force=false) the specified CSS class to the class list of the element. */
    default B toggle(String className, boolean force) {
        element().classList.toggle(className, force);
        return that();
    }

    /** Adds (force=true) or removes (force=false) the specified CSS class to the class list of the element. */
    default B toggle(String className, Supplier<Boolean> force) {
        element().classList.toggle(className, force.get());
        return that();
    }

    // ------------------------------------------------------ attributes

    /** Sets the specified attribute of the element. */
    default B attr(String name, boolean value) {
        element().setAttribute(name, value);
        return that();
    }

    /** Sets the specified attribute of the element. */
    default B attr(String name, int value) {
        element().setAttribute(name, value);
        return that();
    }

    /** Sets the specified attribute of the element. */
    default B attr(String name, String value) {
        element().setAttribute(name, value);
        return that();
    }

    /**
     * Adds an {@code aria-} attribute to the element.
     *
     * @param name The name of the aria attribute w/o the {@code aria-} prefix. However it won't be added if it's already
     *        present.
     */
    default B aria(String name, boolean value) {
        String safeName = name.startsWith("aria-") ? name : "aria-" + name;
        return attr(safeName, value);
    }

    /**
     * Adds an {@code aria-} attribute to the element.
     *
     * @param name The name of the aria attribute w/o the {@code aria-} prefix. However it won't be added if it's already
     *        present.
     */
    default B aria(String name, int value) {
        String safeName = name.startsWith("aria-") ? name : "aria-" + name;
        return attr(safeName, value);
    }

    /**
     * Adds an {@code aria-} attribute to the element.
     *
     * @param name The name of the aria attribute w/o the {@code aria-} prefix. However it won't be added if it's already
     *        present.
     */
    default B aria(String name, String value) {
        String safeName = name.startsWith("aria-") ? name : "aria-" + name;
        return attr(safeName, value);
    }

    // ------------------------------------------------------ consumer

    /** Provides a way to modify the element using the specified consumer. */
    default B apply(Consumer<E> consumer) {
        consumer.accept(element());
        return that();
    }

    // ------------------------------------------------------ event handler

    /**
     * Adds the given callback to the element.
     * <p>
     * {@snippet class = ElementsDemo region = on}
     */
    default <V extends Event> B on(EventType<V, ?> type, EventCallbackFn<V> callback) {
        bind(element(), type, callback);
        return that();
    }
}
