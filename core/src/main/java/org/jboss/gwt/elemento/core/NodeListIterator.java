package org.jboss.gwt.elemento.core;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import elemental.dom.Element;
import elemental.dom.NodeList;

/**
 * Provides an iterator over a list of nodes. Iterates only over elements, nodes will be skipped. The iterator does
 * <strong>not</strong> support the {@link #remove()} operation.
 *
 * @author Harald Pehl
 */
public class NodeListIterator implements Iterator<Element> {

    private final Iterator<Element> iterator;

    public NodeListIterator(final NodeList nodes) {
        List<Element> elements = new ArrayList<>();
        for (int i = 0; i < nodes.getLength(); i++) {
            if (nodes.item(i) instanceof Element) {
                elements.add(((Element) nodes.item(i)));
            }
        }
        this.iterator = elements.iterator();
    }

    @Override
    public boolean hasNext() {
        return iterator.hasNext();
    }

    @Override
    public Element next() {
        return iterator.next();
    }
}
