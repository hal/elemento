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

import com.google.web.bindery.event.shared.HandlerRegistration;
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
import elemental2.dom.MouseEvent;
import elemental2.dom.PageTransitionEvent;
import elemental2.dom.PopStateEvent;
import elemental2.dom.TouchEvent;
import elemental2.dom.UIEvent;
import elemental2.dom.WheelEvent;
import elemental2.dom.Window;
import elemental2.webstorage.StorageEvent;
import jsinterop.base.Js;
import org.jboss.gwt.elemento.core.builder.ElementBuilder;

/**
 * Known event types used in {@link ElementBuilder#on(EventType, EventCallbackFn)}.
 *
 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/Events">https://developer.mozilla.org/en-US/docs/Web/Events</a>
 */
@SuppressWarnings("unused")
public class EventType<T extends Event, V extends EventTarget> {

    // Network Events
    public static final EventType<Event, Window> online = new EventType<>("online");
    public static final EventType<Event, Window> offline = new EventType<>("offline");

    // Focus Events
    public static final EventType<FocusEvent, Element> focus = new EventType<>("focus");
    public static final EventType<FocusEvent, Element> blur = new EventType<>("blur");

    // Session History Events
    public static final EventType<PageTransitionEvent, Document> pagehide = new EventType<>("pagehide");
    public static final EventType<PageTransitionEvent, Document> pageshow = new EventType<>("pageshow");
    public static final EventType<PopStateEvent, Window> popstate = new EventType<>("popstate");

    // Form Events
    public static final EventType<Event, Element> reset = new EventType<>("reset");
    public static final EventType<Event, Element> submit = new EventType<>("submit");

    // Printing Events
    public static final EventType<Event, Window> beforeprint = new EventType<>("beforeprint");
    public static final EventType<Event, Window> afterprint = new EventType<>("afterprint");

    // Text Composition Events
    public static final EventType<TouchEvent, Element> compositionstart = new EventType<>("compositionstart");
    public static final EventType<TouchEvent, Element> compositionupdate = new EventType<>("compositionupdate");
    public static final EventType<TouchEvent, Element> compositionend = new EventType<>("compositionend");

    // View Events
    public static final EventType<Event, Document> fullscreenchange = new EventType<>("fullscreenchange");
    public static final EventType<Event, Document> fullscreenerror = new EventType<>("fullscreenerror");
    public static final EventType<UIEvent, Window> resize = new EventType<>("resize");
    public static final EventType<UIEvent, EventTarget> scroll = new EventType<>("scroll");

    // Clipboard Events
    public static final EventType<ClipboardEvent, EventTarget> cut = new EventType<>("cut");
    public static final EventType<ClipboardEvent, EventTarget> copy = new EventType<>("copy");
    public static final EventType<ClipboardEvent, EventTarget> paste = new EventType<>("paste");

    // Keyboard Events
    public static final EventType<KeyboardEvent, EventTarget> keydown = new EventType<>("keydown");
    public static final EventType<KeyboardEvent, EventTarget> keypress = new EventType<>("keypress");
    public static final EventType<KeyboardEvent, EventTarget> keyup = new EventType<>("keyup");

    // Mouse Events
    public static final EventType<MouseEvent, EventTarget> mouseenter = new EventType<>("mouseenter");
    public static final EventType<MouseEvent, EventTarget> mouseover = new EventType<>("mouseover");
    public static final EventType<MouseEvent, EventTarget> mousemove = new EventType<>("mousemove");
    public static final EventType<MouseEvent, EventTarget> mousedown = new EventType<>("mousedown");
    public static final EventType<MouseEvent, EventTarget> mouseup = new EventType<>("mouseup");
    public static final EventType<MouseEvent, Element> auxclick = new EventType<>("auxclick");
    public static final EventType<MouseEvent, Element> click = new EventType<>("click");
    public static final EventType<MouseEvent, Element> dblclick = new EventType<>("dblclick");
    public static final EventType<MouseEvent, Element> contextmenu = new EventType<>("contextmenu");
    public static final EventType<WheelEvent, EventTarget> wheel = new EventType<>("wheel");
    public static final EventType<MouseEvent, Element> mouseleave = new EventType<>("mouseleave");
    public static final EventType<MouseEvent, Element> mouseout = new EventType<>("mouseout");
    public static final EventType<Event, Document> pointerlockchange = new EventType<>("pointerlockchange");
    public static final EventType<Event, Document> pointerlockerror = new EventType<>("pointerlockerror");

    // Drag & Drop Events
    public static final EventType<DragEvent, EventTarget> dragstart = new EventType<>("dragstart");
    public static final EventType<DragEvent, EventTarget> drag = new EventType<>("drag");
    public static final EventType<DragEvent, EventTarget> dragend = new EventType<>("dragend");
    public static final EventType<DragEvent, EventTarget> dragenter = new EventType<>("dragenter");
    public static final EventType<DragEvent, EventTarget> dragover = new EventType<>("dragover");
    public static final EventType<DragEvent, EventTarget> dragleave = new EventType<>("dragleave");
    public static final EventType<DragEvent, EventTarget> drop = new EventType<>("drop");

    // Touch Events
    public static final EventType<TouchEvent, Element> touchcancel = new EventType<>("touchcancel");
    public static final EventType<TouchEvent, Element> touchend = new EventType<>("touchend");
    public static final EventType<TouchEvent, Element> touchmove = new EventType<>("touchmove");
    public static final EventType<TouchEvent, Element> touchstart = new EventType<>("touchstart");

    // Value Change Events
    public static final EventType<HashChangeEvent, Window> hashchange = new EventType<>("hashchange");
    public static final EventType<InputEvent, Element> input = new EventType<>("input");
    public static final EventType<Event, Document> readystatechange = new EventType<>("readystatechange");
    public static final EventType<InputEvent, Element> change = new EventType<>("change");

    // Uncategorized Events
    public static final EventType<Event, Element> invalid = new EventType<>("invalid");
    public static final EventType<Event, Element> show = new EventType<>("show");

    // Storage Events
    public static final EventType<StorageEvent, Window> storage = new EventType<>("storage");


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

    public final String name;

    private EventType(String name) { this.name = name; }
}
