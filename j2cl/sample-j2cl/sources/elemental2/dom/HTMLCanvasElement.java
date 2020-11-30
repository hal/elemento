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
import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class HTMLCanvasElement extends HTMLElement {
  @JsFunction
  public interface ToBlobCallbackFn {
    Object onInvoke(Blob p0);
  }

  public int height;
  public int width;

  public native MediaStream captureStream();

  public native MediaStream captureStream(double framerate);

  public native JsObject getContext(String contextId, JsObject args);

  @JsOverlay
  public final JsObject getContext(String contextId, Object args) {
    return getContext(contextId, Js.<JsObject>uncheckedCast(args));
  }

  public native JsObject getContext(String contextId);

  public native Object toBlob(
      HTMLCanvasElement.ToBlobCallbackFn callback, String type, Object... var_args);

  public native Object toBlob(HTMLCanvasElement.ToBlobCallbackFn callback);

  public native String toDataURL();

  public native String toDataURL(String type, Object... var_args);

  public native OffscreenCanvas transferControlToOffscreen();
}

