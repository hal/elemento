/*
 * JBoss, Home of Professional Open Source.
 * Copyright 2010, Red Hat, Inc., and individual contributors
 * as indicated by the @author tags. See the copyright.txt file in the
 * distribution for a full listing of individual contributors.
 *
 * This is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as
 * published by the Free Software Foundation; either version 2.1 of
 * the License, or (at your option) any later version.
 *
 * This software is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this software; if not, write to the Free
 * Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA
 * 02110-1301 USA, or see the FSF site: http://www.fsf.org.
 */
package org.jboss.gwt.elemento.core;

import java.util.Iterator;
import java.util.NoSuchElementException;

import elemental2.core.Array;
import elemental2.dom.Element;
import elemental2.dom.HTMLElement;
import elemental2.dom.Node;
import jsinterop.base.Js;

/**
 * Provides an iterator over an element. The iterator supports the {@link #remove()} operation which removes the
 * current element from its parent.
 */
public class ChildrenIterator<E extends Element> implements Iterator<E> {

    private final Element parent;
    private final Array<E> children;
    private int size;
    private int index;

    ChildrenIterator(final Element parent) {
        this.parent = parent;
        this.children = new Array<>();
        for (int i = 0, length = parent.childNodes.getLength(); i < length; i++) {
            Node node = parent.childNodes.item(i);
            if (node instanceof HTMLElement) {
                children.push(Js.cast(node));
            }
        }
        this.size = children.getLength();
        this.index = 0;
    }


    @Override
    public boolean hasNext() {
        return index < size;
    }

    @Override
    public E next() {
        if (!hasNext()) {
            throw new NoSuchElementException();
        }
        E child = children.getAt(index);
        index++;
        return child;
    }

    @Override
    public void remove() {
        if (index == 0) {
            throw new IllegalStateException();
        }
        index--;
        parent.removeChild(children.getAt(index));
        //noinspection unchecked
        children.splice(index, 1);
        size = children.getLength();
    }
}
