/*
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
package elemental2.dom;

import elemental2.core.JsArray;
import elemental2.core.JsError;
import elemental2.core.Transferable;
import elemental2.promise.Promise;
import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import jsinterop.base.JsConstructorFn;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class Window implements EventTarget {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface FetchInputUnionType {
    @JsOverlay
    static Window.FetchInputUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default Request asRequest() {
      return Js.cast(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isRequest() {
      return (Object) this instanceof Request;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface FrameElementUnionType {
    @JsOverlay
    static Window.FrameElementUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default HTMLIFrameElement asHTMLIFrameElement() {
      return Js.cast(this);
    }

    @JsOverlay
    default HTMLObjectElement asHTMLObjectElement() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isHTMLIFrameElement() {
      return (Object) this instanceof HTMLIFrameElement;
    }

    @JsOverlay
    default boolean isHTMLObjectElement() {
      return (Object) this instanceof HTMLObjectElement;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ImportScriptsVar_argsUnionType {
    @JsOverlay
    static Window.ImportScriptsVar_argsUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default TrustedScriptURL asTrustedScriptURL() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }

    @JsOverlay
    default boolean isTrustedScriptURL() {
      return (Object) this instanceof TrustedScriptURL;
    }
  }

  @JsFunction
  public interface OnabortFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnbeforeunloadFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnblurFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnchangeFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnclickFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OncloseFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OncontextmenuFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OndblclickFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OndragdropFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnerrorFn {
    Object onInvoke(String p0, String p1, double p2, double p3, JsError p4);
  }

  @JsFunction
  public interface OnfocusFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnhashchangeFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnkeydownFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnkeypressFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnkeyupFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnloadFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnmousedownFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnmousemoveFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnmouseoutFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnmouseoverFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnmouseupFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnmousewheelFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnpaintFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnpopstateFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnresetFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnresizeFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnscrollFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnselectFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnsubmitFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnunhandledrejectionFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnunloadFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnwheelFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OpenDatabaseCallbackFn {
    Object onInvoke(Database p0);
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface OpenDatabaseCallbackUnionType {
    @JsOverlay
    static Window.OpenDatabaseCallbackUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default DatabaseCallback asDatabaseCallback() {
      return Js.cast(this);
    }

    @JsOverlay
    default Window.OpenDatabaseCallbackFn asOpenDatabaseCallbackFn() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isOpenDatabaseCallbackFn() {
      return (Object) this instanceof Window.OpenDatabaseCallbackFn;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ScrollByScrollToOptionsOrXUnionType {
    @JsOverlay
    static Window.ScrollByScrollToOptionsOrXUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default double asDouble() {
      return Js.asDouble(this);
    }

    @JsOverlay
    default ScrollToOptions asScrollToOptions() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isDouble() {
      return (Object) this instanceof Double;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ScrollScrollToOptionsOrXUnionType {
    @JsOverlay
    static Window.ScrollScrollToOptionsOrXUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default double asDouble() {
      return Js.asDouble(this);
    }

    @JsOverlay
    default ScrollToOptions asScrollToOptions() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isDouble() {
      return (Object) this instanceof Double;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ScrollToScrollToOptionsOrXUnionType {
    @JsOverlay
    static Window.ScrollToScrollToOptionsOrXUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default double asDouble() {
      return Js.asDouble(this);
    }

    @JsOverlay
    default ScrollToOptions asScrollToOptions() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isDouble() {
      return (Object) this instanceof Double;
    }
  }

  public CSSInterface CSS;
  public JsConstructorFn<? extends MutationObserver> MozMutationObserver;
  public JsConstructorFn<? extends MutationObserver> WebKitMutationObserver;
  public Object Window;
  public ApplicationCache applicationCache;
  public CacheStorage caches;
  public boolean closed;
  public Console console;
  public double devicePixelRatio;
  public Window.FrameElementUnionType frameElement;
  public Window frames;
  public History history;
  public int innerHeight;
  public int innerWidth;
  public int length;
  public Location location;
  public BarProp locationbar;
  public BarProp menubar;
  public String name;
  public Navigator navigator;
  public Window.OnabortFn onabort;
  public Window.OnbeforeunloadFn onbeforeunload;
  public Window.OnblurFn onblur;
  public Window.OnchangeFn onchange;
  public Window.OnclickFn onclick;
  public Window.OncloseFn onclose;
  public Window.OncontextmenuFn oncontextmenu;
  public Window.OndblclickFn ondblclick;
  public Window.OndragdropFn ondragdrop;
  public Window.OnerrorFn onerror;
  public Window.OnfocusFn onfocus;
  public Window.OnhashchangeFn onhashchange;
  public Window.OnkeydownFn onkeydown;
  public Window.OnkeypressFn onkeypress;
  public Window.OnkeyupFn onkeyup;
  public Window.OnloadFn onload;
  public Window.OnmousedownFn onmousedown;
  public Window.OnmousemoveFn onmousemove;
  public Window.OnmouseoutFn onmouseout;
  public Window.OnmouseoverFn onmouseover;
  public Window.OnmouseupFn onmouseup;
  public Window.OnmousewheelFn onmousewheel;
  public Window.OnpaintFn onpaint;
  public Window.OnpopstateFn onpopstate;
  public Window.OnresetFn onreset;
  public Window.OnresizeFn onresize;
  public Window.OnscrollFn onscroll;
  public Window.OnselectFn onselect;
  public Window.OnsubmitFn onsubmit;
  public Window.OnunhandledrejectionFn onunhandledrejection;
  public Window.OnunloadFn onunload;
  public Window.OnwheelFn onwheel;
  public Window opener;
  public int outerHeight;
  public int outerWidth;
  public double pageXOffset;
  public double pageYOffset;
  public Window parent;
  public Performance performance;
  public BarProp personalbar;
  public int screenX;
  public int screenY;
  public double scrollX;
  public double scrollY;
  public BarProp scrollbars;
  public Window self;
  public String status;
  public BarProp statusbar;
  public BarProp toolbar;
  public Window top;
  public NotificationCenter webkitNotifications;
  public Window window;

  public native void addEventListener(
      String type, EventListener listener, EventTarget.AddEventListenerOptionsUnionType options);

  public native void addEventListener(String type, EventListener listener);

  public native void alert(Object message);

  public native void blur();

  public native void close();

  public native boolean confirm(Object message);

  public native boolean dispatchEvent(Event evt);

  public native Promise<Response> fetch(Window.FetchInputUnionType input, RequestInit init);

  public native Promise<Response> fetch(Window.FetchInputUnionType input);

  @JsOverlay
  public final Promise<Response> fetch(Request input, RequestInit init) {
    return fetch(Js.<Window.FetchInputUnionType>uncheckedCast(input), init);
  }

  @JsOverlay
  public final Promise<Response> fetch(Request input) {
    return fetch(Js.<Window.FetchInputUnionType>uncheckedCast(input));
  }

  @JsOverlay
  public final Promise<Response> fetch(String input, RequestInit init) {
    return fetch(Js.<Window.FetchInputUnionType>uncheckedCast(input), init);
  }

  @JsOverlay
  public final Promise<Response> fetch(String input) {
    return fetch(Js.<Window.FetchInputUnionType>uncheckedCast(input));
  }

  public native void focus();

  public native Selection getSelection();

  public native void importScripts(Window.ImportScriptsVar_argsUnionType... var_args);

  @JsOverlay
  public final void importScripts(String... var_args) {
    importScripts(Js.<Window.ImportScriptsVar_argsUnionType[]>uncheckedCast(var_args));
  }

  @JsOverlay
  public final void importScripts(TrustedScriptURL... var_args) {
    importScripts(Js.<Window.ImportScriptsVar_argsUnionType[]>uncheckedCast(var_args));
  }

  public native MediaQueryList matchMedia(String media_query_list);

  public native void moveBy(int x, int y);

  public native void moveTo(int x, int y);

  public native Window open();

  public native Window open(Object url, String windowName, String windowFeatures, boolean replace);

  public native Window open(Object url, String windowName, String windowFeatures);

  public native Window open(Object url, String windowName);

  public native Window open(Object url);

  @JsOverlay
  public final Database openDatabase(
      String name, String version, String description, int size, DatabaseCallback callback) {
    return openDatabase(
        name,
        version,
        description,
        size,
        Js.<Window.OpenDatabaseCallbackUnionType>uncheckedCast(callback));
  }

  @JsOverlay
  public final Database openDatabase(
      String name,
      String version,
      String description,
      int size,
      Window.OpenDatabaseCallbackFn callback) {
    return openDatabase(
        name,
        version,
        description,
        size,
        Js.<Window.OpenDatabaseCallbackUnionType>uncheckedCast(callback));
  }

  public native Database openDatabase(
      String name,
      String version,
      String description,
      int size,
      Window.OpenDatabaseCallbackUnionType callback);

  public native Database openDatabase(String name, String version, String description, int size);

  public native void postMessage(
      Object message, String targetOrigin, JsArray<Transferable> transfer);

  @JsOverlay
  public final void postMessage(Object message, String targetOrigin, Transferable[] transfer) {
    postMessage(message, targetOrigin, Js.<JsArray<Transferable>>uncheckedCast(transfer));
  }

  public native void postMessage(Object message, String targetOrigin);

  public native void postMessage(Object message);

  public native void print();

  public native String prompt(String message, String value);

  public native String prompt(String message);

  public native void removeEventListener(
      String type, EventListener listener, EventTarget.RemoveEventListenerOptionsUnionType options);

  public native void removeEventListener(String type, EventListener listener);

  public native void resizeBy(int x, int y);

  public native void resizeTo(int x, int y);

  public native void scroll(Window.ScrollScrollToOptionsOrXUnionType scrollToOptionsOrX, double y);

  public native void scroll(Window.ScrollScrollToOptionsOrXUnionType scrollToOptionsOrX);

  @JsOverlay
  public final void scroll(ScrollToOptions scrollToOptionsOrX, double y) {
    scroll(Js.<Window.ScrollScrollToOptionsOrXUnionType>uncheckedCast(scrollToOptionsOrX), y);
  }

  @JsOverlay
  public final void scroll(ScrollToOptions scrollToOptionsOrX) {
    scroll(Js.<Window.ScrollScrollToOptionsOrXUnionType>uncheckedCast(scrollToOptionsOrX));
  }

  @JsOverlay
  public final void scroll(double scrollToOptionsOrX, double y) {
    scroll(Js.<Window.ScrollScrollToOptionsOrXUnionType>uncheckedCast(scrollToOptionsOrX), y);
  }

  @JsOverlay
  public final void scroll(double scrollToOptionsOrX) {
    scroll(Js.<Window.ScrollScrollToOptionsOrXUnionType>uncheckedCast(scrollToOptionsOrX));
  }

  public native void scrollBy(
      Window.ScrollByScrollToOptionsOrXUnionType scrollToOptionsOrX, double y);

  public native void scrollBy(Window.ScrollByScrollToOptionsOrXUnionType scrollToOptionsOrX);

  @JsOverlay
  public final void scrollBy(ScrollToOptions scrollToOptionsOrX, double y) {
    scrollBy(Js.<Window.ScrollByScrollToOptionsOrXUnionType>uncheckedCast(scrollToOptionsOrX), y);
  }

  @JsOverlay
  public final void scrollBy(ScrollToOptions scrollToOptionsOrX) {
    scrollBy(Js.<Window.ScrollByScrollToOptionsOrXUnionType>uncheckedCast(scrollToOptionsOrX));
  }

  @JsOverlay
  public final void scrollBy(double scrollToOptionsOrX, double y) {
    scrollBy(Js.<Window.ScrollByScrollToOptionsOrXUnionType>uncheckedCast(scrollToOptionsOrX), y);
  }

  @JsOverlay
  public final void scrollBy(double scrollToOptionsOrX) {
    scrollBy(Js.<Window.ScrollByScrollToOptionsOrXUnionType>uncheckedCast(scrollToOptionsOrX));
  }

  @JsOverlay
  public final void scrollTo(ScrollToOptions scrollToOptionsOrX, double y) {
    scrollTo(Js.<Window.ScrollToScrollToOptionsOrXUnionType>uncheckedCast(scrollToOptionsOrX), y);
  }

  @JsOverlay
  public final void scrollTo(ScrollToOptions scrollToOptionsOrX) {
    scrollTo(Js.<Window.ScrollToScrollToOptionsOrXUnionType>uncheckedCast(scrollToOptionsOrX));
  }

  public native void scrollTo(
      Window.ScrollToScrollToOptionsOrXUnionType scrollToOptionsOrX, double y);

  public native void scrollTo(Window.ScrollToScrollToOptionsOrXUnionType scrollToOptionsOrX);

  @JsOverlay
  public final void scrollTo(double scrollToOptionsOrX, double y) {
    scrollTo(Js.<Window.ScrollToScrollToOptionsOrXUnionType>uncheckedCast(scrollToOptionsOrX), y);
  }

  @JsOverlay
  public final void scrollTo(double scrollToOptionsOrX) {
    scrollTo(Js.<Window.ScrollToScrollToOptionsOrXUnionType>uncheckedCast(scrollToOptionsOrX));
  }

  public native void stop();
}

