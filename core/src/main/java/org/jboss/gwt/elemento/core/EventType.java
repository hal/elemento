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

import elemental2.dom.HTMLElement;

/**
 * Known event types used in {@link Elements.Builder#on(EventType, EventCallbackFn)}.
 */
public enum EventType {

    abort((element, callback) -> element.onabort = event -> {
        callback.onInvoke(event);
        return null;
    }),
    blur((element, callback) -> element.onblur = event -> {
        callback.onInvoke(event);
        return null;
    }),
    change((element, callback) -> element.onchange = event -> {
        callback.onInvoke(event);
        return null;
    }),
    click((element, callback) -> element.onclick = event -> {
        callback.onInvoke(event);
        return null;
    }),
    contextmenu((element, callback) -> element.oncontextmenu = event -> {
        callback.onInvoke(event);
        return null;
    }),
    copy((element, callback) -> element.oncopy = event -> {
        callback.onInvoke(event);
        return null;
    }),
    cut((element, callback) -> element.oncut = event -> {
        callback.onInvoke(event);
        return null;
    }),
    dblclick((element, callback) -> element.ondblclick = event -> {
        callback.onInvoke(event);
        return null;
    }),
    error((element, callback) -> element.onerror = event -> {
        callback.onInvoke(event);
        return null;
    }),
    focus((element, callback) -> element.onfocus = event -> {
        callback.onInvoke(event);
        return null;
    }),
    input((element, callback) -> element.oninput = event -> {
        callback.onInvoke(event);
        return null;
    }),
    keydown((element, callback) -> element.onkeydown = event -> {
        callback.onInvoke(event);
        return null;
    }),
    keypress((element, callback) -> element.onkeypress = event -> {
        callback.onInvoke(event);
        return null;
    }),
    keyup((element, callback) -> element.onkeyup = event -> {
        callback.onInvoke(event);
        return null;
    }),
    load((element, callback) -> element.onload = event -> {
        callback.onInvoke(event);
        return null;
    }),
    mousedown((element, callback) -> element.onmousedown = event -> {
        callback.onInvoke(event);
        return null;
    }),
    mousemove((element, callback) -> element.onmousemove = event -> {
        callback.onInvoke(event);
        return null;
    }),
    mouseout((element, callback) -> element.onmouseout = event -> {
        callback.onInvoke(event);
        return null;
    }),
    mouseover((element, callback) -> element.onmouseover = event -> {
        callback.onInvoke(event);
        return null;
    }),
    mouseup((element, callback) -> element.onmouseup = event -> {
        callback.onInvoke(event);
        return null;
    }),
    mousewheel((element, callback) -> element.onmousewheel = event -> {
        callback.onInvoke(event);
        return null;
    }),
    paste((element, callback) -> element.onpaste = event -> {
        callback.onInvoke(event);
        return null;
    }),
    reset((element, callback) -> element.onreset = event -> {
        callback.onInvoke(event);
        return null;
    }),
    scroll((element, callback) -> element.onscroll = event -> {
        callback.onInvoke(event);
        return null;
    }),
    select((element, callback) -> element.onselect = event -> {
        callback.onInvoke(event);
        return null;
    }),
    submit((element, callback) -> element.onsubmit = event -> {
        callback.onInvoke(event);
        return null;
    });

    private final EventRegistrar registrar;

    EventType(final EventRegistrar registrar) {this.registrar = registrar;}

    public void register(HTMLElement element, EventCallbackFn listener) {
        registrar.register(element, listener);
    }
}
