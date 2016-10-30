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
import elemental.events.EventListener;

/**
 * Known event types used in {@link Elements.Builder#on(EventType, EventListener)} and {@link EventHandler}.
 */
public enum EventType {

    abort(new EventRegistrar() {
        @Override
        public void register(Element element, EventListener listener) {
            element.setOnabort(listener);
        }
    }),
    beforecopy(new EventRegistrar() {
        @Override
        public void register(Element element, EventListener listener) {
            element.setOnbeforecopy(listener);
        }
    }),
    beforecut(new EventRegistrar() {
        @Override
        public void register(Element element, EventListener listener) {
            element.setOnbeforecut(listener);
        }
    }),
    beforepaste(new EventRegistrar() {
        @Override
        public void register(Element element, EventListener listener) {
            element.setOnbeforepaste(listener);
        }
    }),
    blur(new EventRegistrar() {
        @Override
        public void register(Element element, EventListener listener) {
            element.setOnblur(listener);
        }
    }),
    change(new EventRegistrar() {
        @Override
        public void register(Element element, EventListener listener) {
            element.setOnchange(listener);
        }
    }),
    click(new EventRegistrar() {
        @Override
        public void register(Element element, EventListener listener) {
            element.setOnclick(listener);
        }
    }),
    contextmenu(new EventRegistrar() {
        @Override
        public void register(Element element, EventListener listener) {
            element.setOncontextmenu(listener);
        }
    }),
    copy(new EventRegistrar() {
        @Override
        public void register(Element element, EventListener listener) {
            element.setOncopy(listener);
        }
    }),
    cut(new EventRegistrar() {
        @Override
        public void register(Element element, EventListener listener) {
            element.setOncut(listener);
        }
    }),
    dblclick(new EventRegistrar() {
        @Override
        public void register(Element element, EventListener listener) {
            element.setOndblclick(listener);
        }
    }),
    drag(new EventRegistrar() {
        @Override
        public void register(Element element, EventListener listener) {
            element.setOndrag(listener);
        }
    }),
    dragend(new EventRegistrar() {
        @Override
        public void register(Element element, EventListener listener) {
            element.setOndragend(listener);
        }
    }),
    dragenter(new EventRegistrar() {
        @Override
        public void register(Element element, EventListener listener) {
            element.setOndragenter(listener);
        }
    }),
    dragleave(new EventRegistrar() {
        @Override
        public void register(Element element, EventListener listener) {
            element.setOndragleave(listener);
        }
    }),
    dragover(new EventRegistrar() {
        @Override
        public void register(Element element, EventListener listener) {
            element.setOndragover(listener);
        }
    }),
    dragstart(new EventRegistrar() {
        @Override
        public void register(Element element, EventListener listener) {
            element.setOndragstart(listener);
        }
    }),
    drop(new EventRegistrar() {
        @Override
        public void register(Element element, EventListener listener) {
            element.setOndrop(listener);
        }
    }),
    error(new EventRegistrar() {
        @Override
        public void register(Element element, EventListener listener) {
            element.setOnerror(listener);
        }
    }),
    focus(new EventRegistrar() {
        @Override
        public void register(Element element, EventListener listener) {
            element.setOnfocus(listener);
        }
    }),
    input(new EventRegistrar() {
        @Override
        public void register(Element element, EventListener listener) {
            element.setOninput(listener);
        }
    }),
    invalid(new EventRegistrar() {
        @Override
        public void register(Element element, EventListener listener) {
            element.setOninvalid(listener);
        }
    }),
    keydown(new EventRegistrar() {
        @Override
        public void register(Element element, EventListener listener) {
            element.setOnkeydown(listener);
        }
    }),
    keypress(new EventRegistrar() {
        @Override
        public void register(Element element, EventListener listener) {
            element.setOnkeypress(listener);
        }
    }),
    keyup(new EventRegistrar() {
        @Override
        public void register(Element element, EventListener listener) {
            element.setOnkeyup(listener);
        }
    }),
    load(new EventRegistrar() {
        @Override
        public void register(Element element, EventListener listener) {
            element.setOnload(listener);
        }
    }),
    mousedown(new EventRegistrar() {
        @Override
        public void register(Element element, EventListener listener) {
            element.setOnmousedown(listener);
        }
    }),
    mousemove(new EventRegistrar() {
        @Override
        public void register(Element element, EventListener listener) {
            element.setOnmousemove(listener);
        }
    }),
    mouseout(new EventRegistrar() {
        @Override
        public void register(Element element, EventListener listener) {
            element.setOnmouseout(listener);
        }
    }),
    mouseover(new EventRegistrar() {
        @Override
        public void register(Element element, EventListener listener) {
            element.setOnmouseover(listener);
        }
    }),
    mouseup(new EventRegistrar() {
        @Override
        public void register(Element element, EventListener listener) {
            element.setOnmouseup(listener);
        }
    }),
    mousewheel(new EventRegistrar() {
        @Override
        public void register(Element element, EventListener listener) {
            element.setOnmousewheel(listener);
        }
    }),
    paste(new EventRegistrar() {
        @Override
        public void register(Element element, EventListener listener) {
            element.setOnpaste(listener);
        }
    }),
    reset(new EventRegistrar() {
        @Override
        public void register(Element element, EventListener listener) {
            element.setOnreset(listener);
        }
    }),
    scroll(new EventRegistrar() {
        @Override
        public void register(Element element, EventListener listener) {
            element.setOnscroll(listener);
        }
    }),
    search(new EventRegistrar() {
        @Override
        public void register(Element element, EventListener listener) {
            element.setOnsearch(listener);
        }
    }),
    select(new EventRegistrar() {
        @Override
        public void register(Element element, EventListener listener) {
            element.setOnselect(listener);
        }
    }),
    selectstart(new EventRegistrar() {
        @Override
        public void register(Element element, EventListener listener) {
            element.setOnselectstart(listener);
        }
    }),
    submit(new EventRegistrar() {
        @Override
        public void register(Element element, EventListener listener) {
            element.setOnsubmit(listener);
        }
    }),
    touchcancel(new EventRegistrar() {
        @Override
        public void register(Element element, EventListener listener) {
            element.setOntouchcancel(listener);
        }
    }),
    touchend(new EventRegistrar() {
        @Override
        public void register(Element element, EventListener listener) {
            element.setOntouchend(listener);
        }
    }),
    touchmove(new EventRegistrar() {
        @Override
        public void register(Element element, EventListener listener) {
            element.setOntouchmove(listener);
        }
    }),
    touchstart(new EventRegistrar() {
        @Override
        public void register(Element element, EventListener listener) {
            element.setOntouchstart(listener);
        }
    }),
    webkitfullscreenchange(new EventRegistrar() {
        @Override
        public void register(Element element, EventListener listener) {
            element.setOnwebkitfullscreenchange(listener);
        }
    }),
    webkitfullscreenerror(new EventRegistrar() {
        @Override
        public void register(Element element, EventListener listener) {
            element.setOnwebkitfullscreenerror(listener);
        }
    });

    private final EventRegistrar registrar;

    EventType(final EventRegistrar registrar) {this.registrar = registrar;}

    public void register(Element element, EventListener listener) {
        registrar.register(element, listener);
    }
}
