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
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class VisualViewport implements EventTarget {
  @JsFunction
  public interface OnresizeFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnscrollFn {
    Object onInvoke(Event p0);
  }

  public double height;
  public double offsetLeft;
  public double offsetTop;
  public VisualViewport.OnresizeFn onresize;
  public VisualViewport.OnscrollFn onscroll;
  public double pageLeft;
  public double pageTop;
  public double scale;
  public double width;

  public native void addEventListener(
      String type, EventListener listener, EventTarget.AddEventListenerOptionsUnionType options);

  public native void addEventListener(String type, EventListener listener);

  public native boolean dispatchEvent(Event evt);

  public native void removeEventListener(
      String type, EventListener listener, EventTarget.RemoveEventListenerOptionsUnionType options);

  public native void removeEventListener(String type, EventListener listener);
}

