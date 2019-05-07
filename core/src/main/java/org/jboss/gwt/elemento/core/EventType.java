/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.jboss.gwt.elemento.core;

import elemental2.dom.ClipboardEvent;
import elemental2.dom.Document;
import elemental2.dom.DragEvent;
import elemental2.dom.Element;
import elemental2.dom.Event;
import elemental2.dom.EventListener;
import elemental2.dom.EventTarget;
import elemental2.dom.FocusEvent;
import elemental2.dom.HashChangeEvent;
import elemental2.dom.InputEvent;
import elemental2.dom.KeyboardEvent;
import elemental2.dom.MessageEvent;
import elemental2.dom.MouseEvent;
import elemental2.dom.PageTransitionEvent;
import elemental2.dom.PopStateEvent;
import elemental2.dom.TouchEvent;
import elemental2.dom.UIEvent;
import elemental2.dom.WheelEvent;
import elemental2.dom.Window;
import elemental2.webstorage.StorageEvent;
import jsinterop.base.Js;
import org.gwtproject.event.shared.HandlerRegistration;
import org.jboss.gwt.elemento.core.builder.ElementBuilder;

/**
 * Known event types used in {@link ElementBuilder#on(EventType, EventCallbackFn)}.
 *
 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/Events">https://developer.mozilla.org/en-US/docs/Web/Events</a>
 */
@SuppressWarnings({"unused", "SpellCheckingInspection"})
public class EventType<T extends Event, V extends EventTarget> {

    // Network Events
    public static final EventType<Event, Window> online = of("online");
    public static final EventType<Event, Window> offline = of("offline");

    // Focus Events
    public static final EventType<FocusEvent, Element> focus = of("focus");
    public static final EventType<FocusEvent, Element> blur = of("blur");

    // Session History Events
    public static final EventType<PageTransitionEvent, Document> pagehide = of("pagehide");
    public static final EventType<PageTransitionEvent, Document> pageshow = of("pageshow");
    public static final EventType<PopStateEvent, Window> popstate = of("popstate");

    // Form Events
    public static final EventType<Event, Element> reset = of("reset");
    public static final EventType<Event, Element> submit = of("submit");

    // Printing Events
    public static final EventType<Event, Window> beforeprint = of("beforeprint");
    public static final EventType<Event, Window> afterprint = of("afterprint");

    // Text Composition Events
    public static final EventType<TouchEvent, Element> compositionstart = of("compositionstart");
    public static final EventType<TouchEvent, Element> compositionupdate = of("compositionupdate");
    public static final EventType<TouchEvent, Element> compositionend = of("compositionend");

    // View Events
    public static final EventType<Event, Document> fullscreenchange = of("fullscreenchange");
    public static final EventType<Event, Document> fullscreenerror = of("fullscreenerror");
    public static final EventType<UIEvent, Window> resize = of("resize");
    public static final EventType<UIEvent, EventTarget> scroll = of("scroll");

    // Clipboard Events
    public static final EventType<ClipboardEvent, EventTarget> cut = of("cut");
    public static final EventType<ClipboardEvent, EventTarget> copy = of("copy");
    public static final EventType<ClipboardEvent, EventTarget> paste = of("paste");

    // Keyboard Events
    public static final EventType<KeyboardEvent, EventTarget> keydown = of("keydown");
    public static final EventType<KeyboardEvent, EventTarget> keypress = of("keypress");
    public static final EventType<KeyboardEvent, EventTarget> keyup = of("keyup");

    // Mouse Events
    public static final EventType<MouseEvent, EventTarget> mouseenter = of("mouseenter");
    public static final EventType<MouseEvent, EventTarget> mouseover = of("mouseover");
    public static final EventType<MouseEvent, EventTarget> mousemove = of("mousemove");
    public static final EventType<MouseEvent, EventTarget> mousedown = of("mousedown");
    public static final EventType<MouseEvent, EventTarget> mouseup = of("mouseup");
    public static final EventType<MouseEvent, Element> auxclick = of("auxclick");
    public static final EventType<MouseEvent, Element> click = of("click");
    public static final EventType<MouseEvent, Element> dblclick = of("dblclick");
    public static final EventType<MouseEvent, Element> contextmenu = of("contextmenu");
    public static final EventType<WheelEvent, EventTarget> wheel = of("wheel");
    public static final EventType<MouseEvent, Element> mouseleave = of("mouseleave");
    public static final EventType<MouseEvent, Element> mouseout = of("mouseout");
    public static final EventType<Event, Document> pointerlockchange = of("pointerlockchange");
    public static final EventType<Event, Document> pointerlockerror = of("pointerlockerror");

    // Drag & Drop Events
    public static final EventType<DragEvent, EventTarget> dragstart = of("dragstart");
    public static final EventType<DragEvent, EventTarget> drag = of("drag");
    public static final EventType<DragEvent, EventTarget> dragend = of("dragend");
    public static final EventType<DragEvent, EventTarget> dragenter = of("dragenter");
    public static final EventType<DragEvent, EventTarget> dragover = of("dragover");
    public static final EventType<DragEvent, EventTarget> dragleave = of("dragleave");
    public static final EventType<DragEvent, EventTarget> drop = of("drop");

    // Touch Events
    public static final EventType<TouchEvent, Element> touchcancel = of("touchcancel");
    public static final EventType<TouchEvent, Element> touchend = of("touchend");
    public static final EventType<TouchEvent, Element> touchmove = of("touchmove");
    public static final EventType<TouchEvent, Element> touchstart = of("touchstart");

    // Value Change Events
    public static final EventType<HashChangeEvent, Window> hashchange = of("hashchange");
    public static final EventType<Event, Element> input = of("input");
    public static final EventType<Event, Document> readystatechange = of("readystatechange");
    public static final EventType<Event, Element> change = of("change");

    // Uncategorized Events
    public static final EventType<Event, Element> invalid = of("invalid");
    public static final EventType<Event, Element> show = of("show");
    public static final EventType<MessageEvent<?>, EventTarget> message = EventType.of("message");

    // Storage Events
    public static final EventType<StorageEvent, Window> storage = of("storage");

    // Window Events
    public static final EventType<Event, Window> load = of("load");

    // Page Visibility API Events
    public static final EventType<Event, Document> visibilitychange = of("visibilitychange");

    public static <T extends Event, V extends EventTarget> EventType<T, V> of(String name) {
        return new EventType<>(name);
    }


    // ------------------------------------------------------ binding methods

    public static <T extends Event> HandlerRegistration bind(EventTarget target, EventType<T, ?> type,
            EventCallbackFn<T> listener) {
        return bind(target, type.name, e -> listener.onEvent(Js.cast(e)));
    }

    public static HandlerRegistration bind(EventTarget target, String type, EventListener listener) {
        target.addEventListener(type, listener);
        return () -> target.removeEventListener(type, listener);
    }

    public static <T extends Event> HandlerRegistration bind(EventTarget target, EventType<T, ?> type,
            boolean useCapture, EventCallbackFn<T> listener) {
        return bind(target, type.name, useCapture, e -> listener.onEvent(Js.cast(e)));
    }

    public static HandlerRegistration bind(EventTarget source, String type, boolean useCapture,
            EventListener listener) {
        source.addEventListener(type, listener, useCapture);
        return () -> source.removeEventListener(type, listener, useCapture);
    }


    // ------------------------------------------------------ instance

    private final String name;

    private EventType(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}
