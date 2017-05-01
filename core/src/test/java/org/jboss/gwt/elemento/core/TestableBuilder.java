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

import elemental2.dom.Document;
import elemental2.dom.HTMLElement;

/**
 * @author Harald Pehl
 */
public class TestableBuilder extends Elements.CoreBuilder<TestableBuilder> {

    TestableBuilder(final Document document) {
        super("testable.builder", document);
    }

    @Override
    protected TestableBuilder that() {
        return this;
    }

    @Override
    public TestableBuilder attr(final String name, final String value) {
        HTMLElement element = currentElement();
        if (element instanceof StandaloneElement) {
            ((StandaloneElement) currentElement()).setStringAttribute(name, value);
        } else if (element instanceof StandaloneInputElement) {
            ((StandaloneInputElement) currentElement()).setStringAttribute(name, value);
        }
        return that();
    }

    @Override
    public TestableBuilder data(final String name, final String value) {
        String safeName = name.startsWith("data-") ? name.substring("data-".length()) : name;
        ((StandaloneElement) currentElement()).setStringAttribute("data-" + safeName, value);
        return that();
    }
}
