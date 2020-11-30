/*
 * Copyright © 2019 The GWT Project Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.gwtproject.canvas.dom.client;

import elemental2.core.Uint8ClampedArray;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import org.gwtproject.core.client.JavaScriptObject;

/**
 * Array-like object holding the actual image data for an ImageData object. For each pixel, this
 * object contains a red, green, blue and alpha value between 0 and 255 (in this order). Note that
 * we use ints here to represent the data to avoid complexities stemming from bytes being signed in
 * Java.
 *
 * @see <a href="http://www.w3.org/TR/2dcontext/#canvaspixelarray">HTML Canvas 2D
 *     CanvasPixelArray</a>
 */
@JsType(isNative = true, name = "Object", namespace = JsPackage.GLOBAL)
public class CanvasPixelArray extends JavaScriptObject {

  protected CanvasPixelArray() {}

  /**
   * Returns the data value at index i.
   *
   * @param i the data index
   * @return the data value
   */
  @JsOverlay
  public final int get(int i) {
    Double value = this.<Uint8ClampedArray>cast().getAt(i);
    return Js.isTruthy(value) ? Js.asInt(value) : 0;
  }

  /**
   * Returns the length of the array.
   *
   * @return the array length
   */
  @JsOverlay
  public final int getLength() {
    return this.<Uint8ClampedArray>cast().length;
  }

  /**
   * Sets the data value at position i to the given value.
   *
   * <p>Most browsers will clamp this value to the range 0...255, but that is not enforced in this
   * implementation.
   *
   * @param i index to set.
   * @param value value to set (use values from 0 to 255)
   */
  @JsOverlay
  public final void set(int i, int value) {
    this.<Uint8ClampedArray>cast().setAt(i, (double) value);
  }
}

