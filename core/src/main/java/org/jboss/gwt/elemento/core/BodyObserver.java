package org.jboss.gwt.elemento.core;

import java.util.ArrayList;
import java.util.List;

import elemental2.dom.HTMLElement;
import elemental2.dom.MutationObserver;
import elemental2.dom.MutationObserverInit;
import elemental2.dom.MutationRecord;

import static elemental2.dom.DomGlobal.document;
import static java.util.stream.Collectors.toList;
import static org.jboss.gwt.elemento.core.Elements.asHtmlElement;
import static org.jboss.gwt.elemento.core.Elements.htmlElements;
import static org.jboss.gwt.elemento.core.Elements.stream;

final class BodyObserver {

    private static String ATTACH_UID_KEY = "on-attach-uid";
    private static String DETACH_UID_KEY = "on-detach-uid";

    private static List<ElementObserver> detachObservers = new ArrayList<>();
    private static List<ElementObserver> attachObservers = new ArrayList<>();
    private static boolean ready = false;

    private static void startObserving() {
        MutationObserver mutationObserver = new MutationObserver(
                (MutationRecord[] mutationRecords, MutationObserver observer) -> {
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

    private static void onElementsAppended(MutationRecord mutationRecord) {
        List<HTMLElement> addedElements = stream(mutationRecord.addedNodes)
                .filter(htmlElements())
                .map(asHtmlElement())
                .collect(toList());
        List<ElementObserver> observed = handleObserver(attachObservers, addedElements, mutationRecord, ATTACH_UID_KEY);
        attachObservers.removeAll(observed);
    }

    private static void onElementsRemoved(MutationRecord mutationRecord) {
        List<HTMLElement> removedElements = stream(mutationRecord.removedNodes)
                .filter(htmlElements())
                .map(asHtmlElement())
                .collect(toList());
        List<ElementObserver> observed = handleObserver(detachObservers, removedElements, mutationRecord,
                DETACH_UID_KEY);
        detachObservers.removeAll(observed);
    }

    private static List<ElementObserver> handleObserver(List<ElementObserver> elementObservers,
            List<HTMLElement> elements, MutationRecord mutationRecord, String attribute) {
        List<ElementObserver> result = new ArrayList<>();
        for (ElementObserver elementObserver : elementObservers) {
            if (elementObserver.observedElement() == null) {
                result.add(elementObserver);
            } else {
                if (elements.contains(elementObserver.observedElement()) ||
                        isChildOfObservedElement(elements, attribute, elementObserver.attachId())) {
                    elementObserver.callback().onObserved(mutationRecord);
                    elementObserver.observedElement().removeAttribute(attribute);
                    elementObservers.add(elementObserver);
                }
            }
        }
        return result;
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


    private interface ElementObserver {

        String attachId();

        HTMLElement observedElement();

        ObserverCallback callback();
    }
}
