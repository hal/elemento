package org.jboss.gwt.elemento.core;

import elemental2.dom.HTMLElement;
import elemental2.dom.MutationRecord;

/**
 * use this interface to create callback for {@link BodyObserver#onAttach(HTMLElement, ObserverCallback)} and {@link BodyObserver#onDetach(HTMLElement, ObserverCallback)}
 */
@FunctionalInterface
public interface ObserverCallback {
    void onObserved(MutationRecord mutationRecord);
}
