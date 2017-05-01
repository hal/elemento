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
package org.jboss.gwt.elemento.processor.context;

import com.google.common.base.Strings;
import elemental2.dom.HTMLElement;

/**
 * @author Harald Pehl
 */
public class DataElementInfo {

    public enum Kind {
        // Name them after the related type for nicer error messages
        HTMLElement, IsElement, Widget, IsWidget
    }


    private final String type;
    private final String name;
    private final String selector;
    private final Kind kind;
    private final boolean returnedByMethod;

    public DataElementInfo(final String type, final String name, final String selector, final Kind kind,
            boolean returnedByMethod) {
        this.type = type;
        this.name = name;
        this.selector = Strings.emptyToNull(selector) == null ? name : selector;
        this.kind = kind;
        this.returnedByMethod = returnedByMethod;
    }

    @Override
    public String toString() {
        return "@DataElement " + type + " " + name + " (" + kind + (returnedByMethod ? ", return by method" : "") + ")";
    }

    public String getType() {
        return type;
    }

    public String getName() {
        return name;
    }

    public String getSelector() {
        return selector;
    }

    public Kind getKind() {
        return kind;
    }

    public boolean isReturnedByMethod() {
        return returnedByMethod;
    }

    public String getFieldOrMethod() {
        return returnedByMethod ? name + "()" : name;
    }

    public boolean needsCast() {
        return kind == Kind.HTMLElement && !type.equals(HTMLElement.class.getName());
    }
}
