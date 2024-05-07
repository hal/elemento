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

import org.jboss.elemento.logger.Logger;

import elemental2.core.JsArray;
import elemental2.dom.HTMLElement;
import elemental2.dom.MutationObserver;
import elemental2.dom.MutationObserverInit;
import elemental2.dom.MutationRecord;
import jsinterop.base.Js;

import static elemental2.dom.DomGlobal.document;
import static java.util.stream.Collectors.toList;
import static org.jboss.elemento.Elements.asHtmlElement;
import static org.jboss.elemento.Elements.htmlElements;
import static org.jboss.elemento.Elements.stream;
import static org.jboss.elemento.logger.Level.DEBUG;

final class BodyObserver {

    private static final String ATTACH_UID_KEY = "on-attach-uid";
    private static final String DETACH_UID_KEY = "on-detach-uid";

    private static final List<ElementObserver> detachObservers = new ArrayList<>();
    private static final List<ElementObserver> attachObservers = new ArrayList<>();
    private static final Logger logger = Logger.getLogger(BodyObserver.class.getName());
    private static boolean ready = false;

    // ------------------------------------------------------ api

    /**
     * Registers the element and calls the callback when the element is attached to the DOM.
     */
    static void addAttachObserver(HTMLElement element, ObserverCallback callback) {
        if (!ready) {
            startObserving();
        }
        String id = Id.unique();
        attachObservers.add(createObserver(id, element, ATTACH_UID_KEY, callback));
        if (logger.isEnabled(DEBUG)) {
            logger.debug("Add attach observer %s for %o%s", id, element, count());
        }
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
        String id = Id.unique();
        detachObservers.add(createObserver(id, element, DETACH_UID_KEY, callback));
        if (logger.isEnabled(DEBUG)) {
            logger.debug("Add detach observer %s for %o%s", id, element, count());
        }
    }

    static void removeDetachObserver(HTMLElement element) {
        element.removeAttribute(DETACH_UID_KEY);
    }

    // ------------------------------------------------------ internal

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
            logger.error("Cannot start observing elements. Document is not ready yet!");
        } else {
            logger.debug("Start observing elements");
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
            for (Iterator<ElementObserver> iterator = attachObservers.iterator(); iterator.hasNext(); ) {
                ElementObserver eo = iterator.next();
                if (eo.element == null) {
                    iterator.remove();
                    if (logger.isEnabled(DEBUG)) {
                        logger.debug("Remove attach observer %s w/o element %s", eo.id, count());
                    }
                } else {
                    if (elements.contains(eo.element)
                            || isChildOfObservedElement(elements, ATTACH_UID_KEY, eo.id)) {
                        if (logger.isEnabled(DEBUG)) {
                            logger.debug("Call attach callback %s for %o", eo.id, eo.element);
                        }
                        eo.callback.onObserved(record);
                        removeId(eo.element, ATTACH_UID_KEY, eo.id);
                        iterator.remove();
                        if (logger.isEnabled(DEBUG)) {
                            logger.debug("Remove attach observer %s for %o%s", eo.id, eo.element, count());
                        }
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
            for (Iterator<ElementObserver> iterator = detachObservers.iterator(); iterator.hasNext(); ) {
                ElementObserver eo = iterator.next();
                if (eo.element == null) {
                    iterator.remove();
                    if (logger.isEnabled(DEBUG)) {
                        logger.debug("Remove detach observer %s w/o element %s", eo.id, count());
                    }
                } else {
                    if (elements.contains(eo.element)
                            || isChildOfObservedElement(elements, DETACH_UID_KEY, eo.id)) {
                        if (logger.isEnabled(DEBUG)) {
                            logger.debug("Call detach callback %s for %o", eo.id, eo.element);
                        }
                        eo.callback.onObserved(record);
                        removeId(eo.element, DETACH_UID_KEY, eo.id);
                        iterator.remove();
                        if (logger.isEnabled(DEBUG)) {
                            logger.debug("Remove detach observer %s for %o%s", eo.id, eo.element, count());
                        }
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

    private static ElementObserver createObserver(String id, HTMLElement element, String attribute, ObserverCallback callback) {
        addId(element, attribute, id);
        return new ElementObserver(id, element, callback);
    }

    private static void addId(HTMLElement element, String attribute, String id) {
        JsArray<String> ids = ids(element, attribute);
        ids.push(id);
        element.setAttribute(attribute, ids.join(" "));
    }

    private static void removeId(HTMLElement element, String attribute, String id) {
        JsArray<String> ids = ids(element, attribute);
        int index = ids.indexOf(id);
        if (index != -1) {
            ids.splice(index, 1);
        }
        if (ids.length == 0) {
            element.removeAttribute(attribute);
        } else {
            element.setAttribute(attribute, ids.join(" "));
        }
    }

    private static JsArray<String> ids(HTMLElement element, String attribute) {
        JsArray<String> ids = new JsArray<>();
        if (element.hasAttribute(attribute)) {
            String value = element.getAttribute(attribute);
            if (!value.trim().isEmpty()) {
                for (String id : value.split(" ")) {
                    ids.push(id);
                }
            }
        }
        return ids;
    }

    private static String count() {
        return " (a:" + attachObservers.size() + "|d:" + detachObservers.size() + ")";
    }


    private static final class ElementObserver {

        private final String id;
        private final HTMLElement element;
        private final ObserverCallback callback;

        private ElementObserver(String id, HTMLElement element, ObserverCallback callback) {
            this.id = id;
            this.element = element;
            this.callback = callback;
        }
    }
}
