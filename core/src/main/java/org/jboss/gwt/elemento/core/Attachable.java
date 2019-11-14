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

package org.jboss.gwt.elemento.core;

import elemental2.dom.HTMLElement;
import elemental2.dom.MutationRecord;

import static org.jboss.gwt.elemento.core.Elements.onAttach;
import static org.jboss.gwt.elemento.core.Elements.onDetach;

/** Interface to get notified when an element has been attached / detached from the DOM. */
public interface Attachable {

    /** Registers the specified element for both attach and detach. */
    static void register(IsElement element, Attachable attachable) {
        register(element.element(), attachable);
    }

    /** Registers the specified element for both attach and detach. */
    static void register(HTMLElement element, Attachable attachable) {
        onAttach(element, attachable::attach);
        onDetach(element, attachable::detach);
    }

    /** Called if the element has been attached. */
    void attach(MutationRecord mutationRecord);

    /** Called if the element has been detached. Default implementation does nothing. */
    default void detach(MutationRecord mutationRecord) {
        // noop
    }
}
