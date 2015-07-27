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

import elemental.dom.Element;
import elemental.html.HTMLCollection;

import java.util.Iterator;
import java.util.NoSuchElementException;

/**
 * @author Harald Pehl
 */
public class ChildrenIterator implements Iterator<Element> {

    private final Element parent;
    private final HTMLCollection children;
    private int size;
    private int index;

    public ChildrenIterator(final Element parent) {
        this.parent = parent;
        this.children = parent.getChildren();
        this.size = children.getLength();
        this.index = 0;
    }


    @Override
    public boolean hasNext() {
        return index < size;
    }

    @Override
    public Element next() {
        if (!hasNext()) {
            throw new NoSuchElementException();
        }
        Element child = (Element) children.item(index);
        index++;
        return child;
    }

    @Override
    public void remove() {
        if (index == 0) {
            throw new IllegalStateException();
        }
        index--;
        parent.removeChild(children.item(index));
        size = children.getLength();
    }
}
