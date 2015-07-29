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

import elemental.events.Event;

/**
 * @author Harald Pehl
 */
public class EventHandlerInfo {

    private final String method;
    private final String selector;
    private final String eventType;
    private final String eventParameterType;

    public EventHandlerInfo(final String method, final String selector, final String eventType,
            final String eventParameterType) {
        this.method = method;
        this.selector = selector;
        this.eventType = eventType;
        this.eventParameterType = eventParameterType;
    }

    @Override
    public String toString() {
        return "@EventHandler(" + selector + ", " + eventType + ") -> " + method +
                "(" + (eventParameterType != null ? eventParameterType : "") + ")";
    }

    public String getMethod() {
        return method;
    }

    public String getSelector() {
        return selector;
    }

    public String getEventType() {
        return eventType;
    }

    public String getEventParameterType() {
        return eventParameterType;
    }

    public boolean hasEventParameter() {
        return eventParameterType != null;
    }

    public boolean needsCast() {
        return hasEventParameter() && !eventParameterType.equals(Event.class.getName());
    }
}
