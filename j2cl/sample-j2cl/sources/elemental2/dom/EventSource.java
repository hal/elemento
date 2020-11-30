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

import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class EventSource implements EventTarget {
  @JsFunction
  public interface OnerrorFn {
    void onInvoke(Event p0);
  }

  @JsFunction
  public interface OnmessageFn {
    void onInvoke(MessageEvent<String> p0);
  }

  @JsFunction
  public interface OnopenFn {
    void onInvoke(Event p0);
  }

  @JsOverlay public static final int CLOSED = EventSource__Constants.CLOSED;
  @JsOverlay public static final int CONNECTING = EventSource__Constants.CONNECTING;
  @JsOverlay public static final int OPEN = EventSource__Constants.OPEN;
  public EventSource.OnerrorFn onerror;
  public EventSource.OnmessageFn onmessage;
  public EventSource.OnopenFn onopen;
  public int readyState;
  public String url;
  public boolean withCredentials;

  public EventSource(String url, EventSourceInit eventSourceInitDict) {}

  public EventSource(String url) {}

  public native void addEventListener(
      String type, EventListener listener, EventTarget.AddEventListenerOptionsUnionType options);

  public native void addEventListener(String type, EventListener listener);

  public native void close();

  public native boolean dispatchEvent(Event evt);

  public native void removeEventListener(
      String type, EventListener listener, EventTarget.RemoveEventListenerOptionsUnionType options);

  public native void removeEventListener(String type, EventListener listener);
}

