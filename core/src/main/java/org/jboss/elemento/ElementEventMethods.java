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

import elemental2.dom.AddEventListenerOptions;
import elemental2.dom.Element;
import elemental2.dom.Event;

import static org.jboss.elemento.EventType.bind;

/**
 * Provides methods and default implementations for listening to element events.
 */
public interface ElementEventMethods<E extends Element, B extends TypedBuilder<E, B>>
        extends TypedBuilder<E, B>, IsElement<E> {

    /**
     * Adds the given callback to the element.
     * <p>
     * {@snippet class = ElementsDemo region = on}
     */
    default <V extends Event> B on(EventType<V, ?> type, EventCallbackFn<V> callback) {
        bind(element(), type, callback);
        return that();
    }

    default <V extends Event> B on(EventType<V, ?> type, boolean useCapture, EventCallbackFn<V> callback) {
        bind(element(), type, useCapture, callback);
        return that();
    }

    default <V extends Event> B on(EventType<V, ?> type, AddEventListenerOptions options, EventCallbackFn<V> callback) {
        bind(element(), type, options, callback);
        return that();
    }
}
