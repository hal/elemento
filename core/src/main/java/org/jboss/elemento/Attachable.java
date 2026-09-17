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

import elemental2.dom.HTMLElement;
import elemental2.dom.MutationRecord;

import static org.jboss.elemento.BodyObserver.addAttachObserver;
import static org.jboss.elemento.BodyObserver.addDetachObserver;
import static org.jboss.elemento.BodyObserver.removeAttachObserver;
import static org.jboss.elemento.BodyObserver.removeDetachObserver;

/**
 * Interface to get notified when an element has been attached / detached from the DOM.
 * <p>
 * <strong>Important:</strong><br/>
 * The {@link #attach(MutationRecord)} / {@link #detach(MutationRecord)} methods are only called <strong>once</strong> after the
 * attachable implementation has been registered with {@link #register(HTMLElement, Attachable)}. If you hold a reference to the
 * element, and the element is attached to the DOM again, the callbacks are not called again, unless the element has been
 * registered again. This is done for reasons of optimisation and performance.
 *
 * <h2>Performance characteristics</h2>
 * <p>
 * Elemento uses a <strong>single global {@link elemental2.dom.MutationObserver}</strong> on {@code document.body} (configured
 * with {@code childList: true, subtree: true}), not one observer per element. This follows the recommended pattern from the DOM
 * spec and is the same approach used by libraries like lit-element.
 * <p>
 * Each registration has <strong>one-shot semantics</strong>: when the callback fires, the observer entry is immediately removed
 * from the internal list and the UID attribute is cleaned from the element. This prevents the observer lists from growing
 * unboundedly. After initial page render, the lists are typically empty.
 * <p>
 * On each DOM mutation, the observer iterates the pending list and checks whether each registered element is among the
 * added/removed nodes — either by direct reference or via {@code querySelector} on the added subtree. The cost is proportional
 * to the number of <em>pending</em> (not yet attached) registrations, which drains to zero as elements enter the DOM.
 * <p>
 * In component libraries where parent components and their sub-components both implement {@code Attachable} (e.g., a menu with
 * N menu items), this results in 1 + N registrations per component tree. Because of the one-shot semantics, these all drain in a
 * single microtask batch during initial render. For typical usage (tens of components), the performance impact is negligible.
 * <p>
 * {@snippet class = Greeting region = attach}
 */
public interface Attachable {

    /** Registers the specified element for both attach and detach. */
    static void register(HTMLElement element, Attachable attachable) {
        if (element != null) {
            addAttachObserver(element, attachable::attach);
            addDetachObserver(element, attachable::detach);
        }
    }

    /** Registers the specified element for both attach and detach. */
    static <E extends HTMLElement> void register(IsElement<E> element, Attachable attachable) {
        if (element != null) {
            register(element.element(), attachable);
        }
    }

    /** Registers the specified element for both attach and detach. */
    static <E extends HTMLElement> void register(AttachableElement<E> attachableElement) {
        if (attachableElement != null) {
            register(attachableElement.element(), attachableElement);
        }
    }

    /**
     * Unregisters the specified element for both attach and detach.
     */
    static void unregister(HTMLElement element) {
        if (element != null) {
            removeAttachObserver(element);
            removeDetachObserver(element);
        }
    }

    /** Called if the element has been attached. */
    void attach(MutationRecord mutationRecord);

    /** Called if the element has been detached. Default implementation does nothing. */
    default void detach(MutationRecord mutationRecord) {
        // noop
    }
}
