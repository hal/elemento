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

/** Provides hooks when an element is attached to and detached from the DOM. */
public interface Attachable {

    /** Registeres the specified element for both attach and detach. */
    static void register(Attachable attachable, HTMLElement element) {
        onAttach(element, attachable::attach);
        onDetach(element, attachable::detach);
    }

    void attach(MutationRecord mutationRecord);

    /** Default implementation does nothing. */
    default void detach(MutationRecord mutationRecord) {
        // noop
    }
}
