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

package org.elemento.widget;

import java.util.ArrayList;
import java.util.List;

import elemental2.dom.HTMLElement;
import elemental2.dom.MutationObserver;
import elemental2.dom.MutationObserverInit;
import elemental2.dom.MutationRecord;

import static elemental2.dom.DomGlobal.document;
import static java.util.stream.Collectors.toList;
import static org.elemento.widget.Elements.asHtmlElement;
import static org.elemento.widget.Elements.htmlElements;
import static org.elemento.widget.Elements.stream;

final class BodyObserver {

    private interface ElementObserver {

        String attachId();

        HTMLElement observedElement();

        ObserverCallback callback();
    }
    private static String ATTACH_UID_KEY = "on-attach-uid";
    private static String DETACH_UID_KEY = "on-detach-uid";
    private static List<ElementObserver> detachObservers = new ArrayList<>();
    private static List<ElementObserver> attachObservers = new ArrayList<>();
    private static boolean ready = false;

    private static void startObserving() {
        MutationObserver mutationObserver = new MutationObserver((mutationRecords, observer) -> {
            for (MutationRecord mutationRecord : mutationRecords) {
                onElementsRemoved(mutationRecord);
                onElementsAppended(mutationRecord);
            }
            return null;
        });

        MutationObserverInit mutationObserverInit = MutationObserverInit.create();
        mutationObserverInit.setChildList(true);
        mutationObserverInit.setSubtree(true);
        mutationObserver.observe(document.body, mutationObserverInit);
        ready = true;
    }

    @SuppressWarnings("DuplicatedCode")
    private static void onElementsAppended(MutationRecord record) {
        List<ElementObserver> observed = new ArrayList<>();
        List<HTMLElement> addedElements = stream(record.addedNodes)
                .filter(htmlElements())
                .map(asHtmlElement())
                .collect(toList());

        for (ElementObserver elementObserver : attachObservers) {
            if (elementObserver.observedElement() == null) {
                observed.add(elementObserver);
            } else {
                if (addedElements.contains(elementObserver.observedElement()) ||
                        isChildOfObservedElement(addedElements, ATTACH_UID_KEY, elementObserver.attachId())) {
                    elementObserver.callback().onObserved(record);
                    elementObserver.observedElement().removeAttribute(ATTACH_UID_KEY);
                    observed.add(elementObserver);
                }
            }
        }
        attachObservers.removeAll(observed);
    }

    @SuppressWarnings("DuplicatedCode")
    private static void onElementsRemoved(MutationRecord record) {
        List<ElementObserver> observed = new ArrayList<>();
        List<HTMLElement> removedElements = stream(record.removedNodes)
                .filter(htmlElements())
                .map(asHtmlElement())
                .collect(toList());

        for (ElementObserver elementObserver : detachObservers) {
            if (elementObserver.observedElement() == null) {
                observed.add(elementObserver);
            } else {
                if (removedElements.contains(elementObserver.observedElement()) ||
                        isChildOfObservedElement(removedElements, DETACH_UID_KEY, elementObserver.attachId())) {
                    elementObserver.callback().onObserved(record);
                    elementObserver.observedElement().removeAttribute(DETACH_UID_KEY);
                    observed.add(elementObserver);
                }
            }
        }
        detachObservers.removeAll(observed);
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
     * Checks if the observer has already been started, if not it will start it.
     * Then register and callback when the element is attached to the DOM.
     */
    static void addAttachObserver(HTMLElement element, ObserverCallback callback) {
        if (!ready) {
            startObserving();
        }
        attachObservers.add(createObserver(element, callback, ATTACH_UID_KEY));
    }

    /**
     * Checks if the observer has already been started, if not it will start it.
     * Then register and callback when the element is removed from the DOM.
     */
    static void addDetachObserver(HTMLElement element, ObserverCallback callback) {
        if (!ready) {
            startObserving();
        }
        detachObservers.add(createObserver(element, callback, DETACH_UID_KEY));
    }

    private static ElementObserver createObserver(HTMLElement element, ObserverCallback callback,
            String attribute) {
        String elementId = element.getAttribute(attribute);
        if (elementId == null) {
            element.setAttribute(attribute, Elements.uniqueId());
        }
        return new ElementObserver() {
            @Override
            public String attachId() {
                return element.getAttribute(attribute);
            }

            @Override
            public HTMLElement observedElement() {
                return element;
            }

            @Override
            public ObserverCallback callback() {
                return callback;
            }
        };
    }


    private BodyObserver() {
    }
}
