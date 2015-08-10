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

    abort(Element::setOnabort),
    beforecopy(Element::setOnbeforecopy),
    beforecut(Element::setOnbeforecut),
    beforepaste(Element::setOnbeforepaste),
    blur(Element::setOnblur),
    change(Element::setOnchange),
    click(Element::setOnclick),
    contextmenu(Element::setOncontextmenu),
    copy(Element::setOncopy),
    cut(Element::setOncut),
    dblclick(Element::setOndblclick),
    drag(Element::setOndrag),
    dragend(Element::setOndragend),
    dragenter(Element::setOndragenter),
    dragleave(Element::setOndragleave),
    dragover(Element::setOndragover),
    dragstart(Element::setOndragstart),
    drop(Element::setOndrop),
    error(Element::setOnerror),
    focus(Element::setOnfocus),
    input(Element::setOninput),
    invalid(Element::setOninvalid),
    keydown(Element::setOnkeydown),
    keypress(Element::setOnkeypress),
    keyup(Element::setOnkeyup),
    load(Element::setOnload),
    mousedown(Element::setOnmousedown),
    mousemove(Element::setOnmousemove),
    mouseout(Element::setOnmouseout),
    mouseover(Element::setOnmouseover),
    mouseup(Element::setOnmouseup),
    mousewheel(Element::setOnmousewheel),
    paste(Element::setOnpaste),
    reset(Element::setOnreset),
    scroll(Element::setOnscroll),
    search(Element::setOnsearch),
    select(Element::setOnselect),
    selectstart(Element::setOnselectstart),
    submit(Element::setOnsubmit),
    touchcancel(Element::setOntouchcancel),
    touchend(Element::setOntouchend),
    touchmove(Element::setOntouchmove),
    touchstart(Element::setOntouchstart),
    webkitfullscreenchange(Element::setOnwebkitfullscreenchange),
    webkitfullscreenerror(Element::setOnwebkitfullscreenerror);

    private final EventRegistrar registrar;

    EventType(final EventRegistrar registrar) {this.registrar = registrar;}

    public void register(Element element, EventListener listener) {
        registrar.register(element, listener);
    }
}
