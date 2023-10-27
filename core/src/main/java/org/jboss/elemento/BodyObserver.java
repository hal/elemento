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
import java.util.Iterator;
import java.util.List;

import elemental2.dom.HTMLElement;
import elemental2.dom.MutationObserver;
import elemental2.dom.MutationObserverInit;
import elemental2.dom.MutationRecord;
import jsinterop.base.Js;

import static elemental2.dom.DomGlobal.console;
import static elemental2.dom.DomGlobal.document;
import static java.util.stream.Collectors.toList;
import static org.jboss.elemento.Elements.asHtmlElement;
import static org.jboss.elemento.Elements.htmlElements;
import static org.jboss.elemento.Elements.stream;

final class BodyObserver {

    private static final String ATTACH_UID_KEY = "on-attach-uid";
    private static final String DETACH_UID_KEY = "on-detach-uid";

    private static final List<ElementObserver> detachObservers = new ArrayList<>();
    private static final List<ElementObserver> attachObservers = new ArrayList<>();
    private static boolean ready = false;

    private static void startObserving() {
        MutationObserver mutationObserver = new MutationObserver((mutationRecords, observer) -> {
            MutationRecord[] records = Js.uncheckedCast(mutationRecords);
            // noinspection ConstantValue,DataFlowIssue
            for (MutationRecord record : records) {
                if (record.removedNodes.length != 0) {
                    onElementsRemoved(record);
                }
                if (record.addedNodes.length != 0) {
                    onElementsAppended(record);
                }
            }
            return null;
        });

        MutationObserverInit mutationObserverInit = MutationObserverInit.create();
        mutationObserverInit.setChildList(true);
        mutationObserverInit.setSubtree(true);
        if (document.body == null) {
            console.error("Cannot start observing elements. Document is not ready yet!");
        } else {
            mutationObserver.observe(document.body, mutationObserverInit);
            ready = true;
        }
    }

    private static void onElementsAppended(MutationRecord record) {
        List<HTMLElement> elements = stream(record.addedNodes)
                .filter(htmlElements())
                .map(asHtmlElement())
                .collect(toList());

        if (!elements.isEmpty()) {
            for (Iterator<ElementObserver> iterator = attachObservers.iterator(); iterator.hasNext();) {
                ElementObserver elementObserver = iterator.next();
                if (elementObserver.observedElement == null) {
                    iterator.remove();
                } else {
                    if (elements.contains(elementObserver.observedElement)
                            || isChildOfObservedElement(elements, ATTACH_UID_KEY, elementObserver.id)) {
                        elementObserver.callback.onObserved(record);
                        elementObserver.observedElement.removeAttribute(ATTACH_UID_KEY);
                        iterator.remove();
                    }
                }
            }
        }
    }

    private static void onElementsRemoved(MutationRecord record) {
        List<HTMLElement> elements = stream(record.removedNodes)
                .filter(htmlElements())
                .map(asHtmlElement())
                .collect(toList());

        if (!elements.isEmpty()) {
            for (Iterator<ElementObserver> iterator = detachObservers.iterator(); iterator.hasNext();) {
                ElementObserver elementObserver = iterator.next();
                if (elementObserver.observedElement == null) {
                    iterator.remove();
                } else {
                    if (elements.contains(elementObserver.observedElement)
                            || isChildOfObservedElement(elements, DETACH_UID_KEY, elementObserver.id)) {
                        elementObserver.callback.onObserved(record);
                        elementObserver.observedElement.removeAttribute(ATTACH_UID_KEY);
                        iterator.remove();
                    }
                }
            }
        }
    }

    private static boolean isChildOfObservedElement(List<HTMLElement> elements, String attribute, String attachId) {
        for (HTMLElement element : elements) {
            if (element.querySelector("[" + attribute + "='" + attachId + "']") != null) {
                return true;
            }
        }
        return false;
    }

    /**
     * Registers the element and calls the callback when the element is attached to the DOM.
     */
    static void addAttachObserver(HTMLElement element, ObserverCallback callback) {
        if (!ready) {
            startObserving();
        }
        attachObservers.add(createObserver(element, callback, ATTACH_UID_KEY));
    }

    static void removeAttachObserver(HTMLElement element) {
        element.removeAttribute(ATTACH_UID_KEY);
    }

    /**
     * Registers the element and calls the callback when the element is detached from the DOM.
     */
    static void addDetachObserver(HTMLElement element, ObserverCallback callback) {
        if (!ready) {
            startObserving();
        }
        detachObservers.add(createObserver(element, callback, DETACH_UID_KEY));
    }

    static void removeDetachObserver(HTMLElement element) {
        element.removeAttribute(DETACH_UID_KEY);
    }

    private static ElementObserver createObserver(HTMLElement element, ObserverCallback callback, String attribute) {
        String id = element.getAttribute(attribute);
        if (id == null) {
            id = Id.unique();
            element.setAttribute(attribute, id);
        }
        return new ElementObserver(id, element, callback);
    }

    private BodyObserver() {
    }

    private static final class ElementObserver {

        private final String id;
        private final HTMLElement observedElement;
        private final ObserverCallback callback;

        private ElementObserver(String id, HTMLElement observedElement, ObserverCallback callback) {
            this.id = id;
            this.observedElement = observedElement;
            this.callback = callback;
        }
    }
}
