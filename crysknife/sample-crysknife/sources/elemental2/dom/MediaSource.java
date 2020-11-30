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
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class MediaSource implements EventTarget {
  public static native boolean isTypeSupported(String type);

  public JsArray<SourceBuffer> activeSourceBuffers;
  public double duration;
  public String readyState;
  public JsArray<SourceBuffer> sourceBuffers;

  public native void addEventListener(
      String type, EventListener listener, EventTarget.AddEventListenerOptionsUnionType options);

  public native void addEventListener(String type, EventListener listener);

  public native SourceBuffer addSourceBuffer(String type);

  public native void clearLiveSeekableRange();

  public native boolean dispatchEvent(Event evt);

  public native void endOfStream();

  public native void endOfStream(String error);

  public native void removeEventListener(
      String type, EventListener listener, EventTarget.RemoveEventListenerOptionsUnionType options);

  public native void removeEventListener(String type, EventListener listener);

  public native void removeSourceBuffer(SourceBuffer sourceBuffer);

  public native Object setLiveSeekableRange(double start, double end);
}

