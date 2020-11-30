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

import elemental2.core.ArrayBuffer;
import elemental2.core.ArrayBufferView;
import elemental2.core.JsArray;
import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class WebSocket implements EventTarget {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ConstructorProtocolUnionType {
    @JsOverlay
    static WebSocket.ConstructorProtocolUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default JsArray<String> asJsArray() {
      return Js.cast(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isJsArray() {
      return (Object) this instanceof JsArray;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  @JsFunction
  public interface OncloseFn {
    void onInvoke(CloseEvent event);
  }

  @JsFunction
  public interface OnerrorFn {
    void onInvoke(Event p0);
  }

  @JsFunction
  public interface OnmessageFn {
    @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
    public interface EventMessageEventTypeParameterUnionType {
      @JsOverlay
      static WebSocket.OnmessageFn.EventMessageEventTypeParameterUnionType of(Object o) {
        return Js.cast(o);
      }

      @JsOverlay
      default ArrayBuffer asArrayBuffer() {
        return Js.cast(this);
      }

      @JsOverlay
      default Blob asBlob() {
        return Js.cast(this);
      }

      @JsOverlay
      default String asString() {
        return Js.asString(this);
      }

      @JsOverlay
      default boolean isArrayBuffer() {
        return (Object) this instanceof ArrayBuffer;
      }

      @JsOverlay
      default boolean isBlob() {
        return (Object) this instanceof Blob;
      }

      @JsOverlay
      default boolean isString() {
        return (Object) this instanceof String;
      }
    }

    void onInvoke(
        MessageEvent<WebSocket.OnmessageFn.EventMessageEventTypeParameterUnionType> event);
  }

  @JsFunction
  public interface OnopenFn {
    void onInvoke(Event event);
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface SendDataUnionType {
    @JsOverlay
    static WebSocket.SendDataUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default ArrayBuffer asArrayBuffer() {
      return Js.cast(this);
    }

    @JsOverlay
    default ArrayBufferView asArrayBufferView() {
      return Js.cast(this);
    }

    @JsOverlay
    default Blob asBlob() {
      return Js.cast(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isArrayBuffer() {
      return (Object) this instanceof ArrayBuffer;
    }

    @JsOverlay
    default boolean isArrayBufferView() {
      return (Object) this instanceof ArrayBufferView;
    }

    @JsOverlay
    default boolean isBlob() {
      return (Object) this instanceof Blob;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  @JsOverlay public static final int CLOSED = WebSocket__Constants.CLOSED;
  @JsOverlay public static final int CLOSING = WebSocket__Constants.CLOSING;
  @JsOverlay public static final int CONNECTING = WebSocket__Constants.CONNECTING;
  @JsOverlay public static final int OPEN = WebSocket__Constants.OPEN;
  public String binaryType;
  public int bufferedAmount;
  public WebSocket.OncloseFn onclose;
  public WebSocket.OnerrorFn onerror;
  public WebSocket.OnmessageFn onmessage;
  public WebSocket.OnopenFn onopen;
  public int readyState;
  public String url;

  public WebSocket(String url, WebSocket.ConstructorProtocolUnionType protocol) {}

  public WebSocket(String url, JsArray<String> protocol) {}

  public WebSocket(String url, String protocol) {}

  public WebSocket(String url, String[] protocol) {}

  public WebSocket(String url) {}

  public native void addEventListener(
      String type, EventListener listener, EventTarget.AddEventListenerOptionsUnionType options);

  public native void addEventListener(String type, EventListener listener);

  public native void close();

  public native void close(int code, String reason);

  public native void close(int code);

  public native boolean dispatchEvent(Event evt);

  public native void removeEventListener(
      String type, EventListener listener, EventTarget.RemoveEventListenerOptionsUnionType options);

  public native void removeEventListener(String type, EventListener listener);

  @JsOverlay
  public final void send(ArrayBuffer data) {
    send(Js.<WebSocket.SendDataUnionType>uncheckedCast(data));
  }

  @JsOverlay
  public final void send(ArrayBufferView data) {
    send(Js.<WebSocket.SendDataUnionType>uncheckedCast(data));
  }

  @JsOverlay
  public final void send(Blob data) {
    send(Js.<WebSocket.SendDataUnionType>uncheckedCast(data));
  }

  public native void send(WebSocket.SendDataUnionType data);

  @JsOverlay
  public final void send(String data) {
    send(Js.<WebSocket.SendDataUnionType>uncheckedCast(data));
  }
}

