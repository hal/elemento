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

import org.jsoup.nodes.Attribute;

import java.util.List;

public class RootElementInfo {

    private final String tag;
    private final String member;
    private final List<Attribute> attributes;
    private final String innerHtml;

    public RootElementInfo(final String tag, final String member, final List<Attribute> attributes,
            final String innerHtml) {
        this.tag = tag;
        this.member = member;
        this.attributes = attributes;
        this.innerHtml = innerHtml;
    }

    @Override
    public String toString() {
        return "<" + tag + ">" + member + ":" + attributes;
    }

    public List<Attribute> getAttributes() {
        return attributes;
    }

    public String getInnerHtml() {
        return innerHtml;
    }

    public String getMember() {
        return member;
    }

    public String getTag() {
        return tag;
    }
}
