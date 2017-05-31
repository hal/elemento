package org.jboss.gwt.elemento.core;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import elemental2.dom.HTMLElement;
import elemental2.dom.Node;
import elemental2.dom.NodeList;

/**
 * Provides an iterator over a list of nodes. Iterates only over elements, nodes will be skipped. The iterator does
 * <strong>not</strong> support the {@link #remove()} operation.
 */
public class NodeListIterator implements Iterator<HTMLElement> {

    private final Iterator<HTMLElement> iterator;

    NodeListIterator(final NodeList<Node> nodes) {
        List<HTMLElement> elements = new ArrayList<>();
        for (int i = 0; i < nodes.getLength(); i++) {
            if (nodes.item(i) instanceof HTMLElement) {
                elements.add(((HTMLElement) nodes.item(i)));
            }
        }
        this.iterator = elements.iterator();
    }

    @Override
    public boolean hasNext() {
        return iterator.hasNext();
    }

    @Override
    public HTMLElement next() {
        return iterator.next();
    }
}
