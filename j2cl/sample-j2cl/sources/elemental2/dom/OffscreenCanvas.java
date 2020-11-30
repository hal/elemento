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

import elemental2.core.JsObject;
import elemental2.core.Transferable;
import elemental2.promise.Promise;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class OffscreenCanvas implements Transferable, EventTarget {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ConvertToBlobOptionsType {
    @JsOverlay
    static OffscreenCanvas.ConvertToBlobOptionsType create() {
      return Js.uncheckedCast(JsPropertyMap.of());
    }

    @JsProperty
    double getQuality();

    @JsProperty
    String getType();

    @JsProperty
    void setQuality(double quality);

    @JsProperty
    void setType(String type);
  }

  public int height;
  public int width;

  public OffscreenCanvas(double width, double height) {}

  public native void addEventListener(
      String type, EventListener listener, EventTarget.AddEventListenerOptionsUnionType options);

  public native void addEventListener(String type, EventListener listener);

  public native Promise<Blob> convertToBlob();

  public native Promise<Blob> convertToBlob(OffscreenCanvas.ConvertToBlobOptionsType options);

  public native boolean dispatchEvent(Event evt);

  public native JsObject getContext(String contextId, JsObject options);

  @JsOverlay
  public final JsObject getContext(String contextId, Object options) {
    return getContext(contextId, Js.<JsObject>uncheckedCast(options));
  }

  public native JsObject getContext(String contextId);

  public native void removeEventListener(
      String type, EventListener listener, EventTarget.RemoveEventListenerOptionsUnionType options);

  public native void removeEventListener(String type, EventListener listener);

  public native ImageBitmap transferToImageBitmap();
}

