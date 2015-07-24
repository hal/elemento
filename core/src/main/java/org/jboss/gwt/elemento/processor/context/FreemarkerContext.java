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

import java.util.List;

/**
 * @author Harald Pehl
 */
public class FreemarkerContext {

    private final String pkg;
    private final String base;
    private final String subclass;
    private final String createMethod;

    private RootElementInfo root;
    private List<DataElementInfo> dataElements;
    private List<PostConstructInfo> postConstructs;
    private List<EventHandlerInfo> eventHandler;
    private List<AbstractPropertyInfo> abstractProperties;

    public FreemarkerContext(final String pkg, final String base, final String subclass, final String createMethod) {
        this.pkg = pkg;
        this.base = base;
        this.subclass = subclass;
        this.createMethod = createMethod;
    }

    @Override
    public String toString() {
        return pkg + "." + subclass + " extends " + base;
    }

    public String getBase() {
        return base;
    }

    public String getPackage() {
        return pkg;
    }

    public String getCreateMethod() {
        return createMethod;
    }

    public RootElementInfo getRoot() {
        return root;
    }

    public void setRoot(final RootElementInfo root) {
        this.root = root;
    }

    public String getSubclass() {
        return subclass;
    }

    public List<DataElementInfo> getDataElements() {
        return dataElements;
    }

    public void setDataElements(final List<DataElementInfo> dataElements) {
        this.dataElements = dataElements;
    }

    public List<PostConstructInfo> getPostConstructs() {
        return postConstructs;
    }

    public void setPostConstructs(
            final List<PostConstructInfo> postConstructs) {
        this.postConstructs = postConstructs;
    }

    public void setEventHandler(final List<EventHandlerInfo> eventHandler) {
        this.eventHandler = eventHandler;
    }

    public List<EventHandlerInfo> getEventHandler() {
        return eventHandler;
    }

    public void setAbstractProperties(final List<AbstractPropertyInfo> abstractProperties) {
        this.abstractProperties = abstractProperties;
    }

    public List<AbstractPropertyInfo> getAbstractProperties() {
        return abstractProperties;
    }
}
