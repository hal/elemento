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
import elemental2.core.Uint8Array;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class SourceBuffer implements EventTarget {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface AppendBufferDataUnionType {
    @JsOverlay
    static SourceBuffer.AppendBufferDataUnionType of(Object o) {
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
    default boolean isArrayBuffer() {
      return (Object) this instanceof ArrayBuffer;
    }

    @JsOverlay
    default boolean isArrayBufferView() {
      return (Object) this instanceof ArrayBufferView;
    }
  }

  public String appendMode;
  public double appendWindowEnd;
  public double appendWindowStart;
  public TimeRanges buffered;
  public double timestampOffset;
  public boolean updating;

  public native void abort();

  public native void addEventListener(
      String type, EventListener listener, EventTarget.AddEventListenerOptionsUnionType options);

  public native void addEventListener(String type, EventListener listener);

  public native void append(Uint8Array data);

  public native void appendBuffer(SourceBuffer.AppendBufferDataUnionType data);

  @JsOverlay
  public final void appendBuffer(ArrayBuffer data) {
    appendBuffer(Js.<SourceBuffer.AppendBufferDataUnionType>uncheckedCast(data));
  }

  @JsOverlay
  public final void appendBuffer(ArrayBufferView data) {
    appendBuffer(Js.<SourceBuffer.AppendBufferDataUnionType>uncheckedCast(data));
  }

  public native void changeType(String type);

  public native boolean dispatchEvent(Event evt);

  public native void remove(double start, double end);

  public native void removeEventListener(
      String type, EventListener listener, EventTarget.RemoveEventListenerOptionsUnionType options);

  public native void removeEventListener(String type, EventListener listener);
}

