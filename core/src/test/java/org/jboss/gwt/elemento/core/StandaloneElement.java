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

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import elemental2.dom.HTMLElement;

/**
 * @author Harald Pehl
 */
public class StandaloneElement extends HTMLElement {

    private final List<StandaloneElement> children;
    private final Map<String, String> attributes;

    StandaloneElement(final String name) {
        this.tagName = name;
        this.children = new ArrayList<>();
        this.attributes = new LinkedHashMap<>();
    }

    @Override
    public String toString() {
        StringBuilder builder = new StringBuilder();
        builder.append("<").append(tagName);
        attributes.forEach((name, value) -> printAttributes(builder, name, value));
        // dataset.data.forEach((name, value) -> printAttributes(builder, name, String.valueOf(value)));
        if (innerHTML != null) {
            builder.append(">").append(innerHTML).append("</").append(tagName).append(">");
        } else if (!children.isEmpty()) {
            builder.append(">");
            for (StandaloneElement child : children) {
                builder.append(child.toString());
            }
            builder.append("</").append(tagName).append(">");
        } else {
            builder.append("/>");
        }
        return builder.toString();
    }

    private void printAttributes(StringBuilder builder, String name, String value) {
        if (value != null) {
            builder.append(String.format(" %s=\"%s\"", name, value));
        }
    }
}
