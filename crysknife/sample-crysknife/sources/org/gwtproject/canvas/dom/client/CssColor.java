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

import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;

/**
 * CSS Color object.
 *
 * <p>To handle dev mode we must wrap JSO strings in an array. Therefore, when in dev mode, CssColor
 * is actually an array with one element that is the JSO. In Production Mode, this is not needed.
 *
 * @see <a href="http://www.w3.org/TR/CSS1/#color">Cascading Style Sheets, level 1</a>
 */
@JsType(isNative = true, name = "String", namespace = JsPackage.GLOBAL)
public class CssColor extends FillStrokeStyle {

  /**
   * Sets the RGB color value.
   *
   * @param r red, integer between 0 and 255
   * @param g green, integer between 0 and 255
   * @param b blue, integer between 0 and 255
   * @return a {@link CssColor} object
   */
  @JsOverlay
  public static final CssColor make(int r, int g, int b) {
    return make("rgb(" + r + "," + g + "," + b + ")");
  }

  /**
   * Creates a CssColor object.
   *
   * <p>Examples: blue, #ff0000, #f00, rgb(255,0,0)
   *
   * @param cssColor the CSS color
   * @return a {@link CssColor} object
   */
  @JsOverlay
  public static final CssColor make(String cssColor) {
    return Js.uncheckedCast(cssColor);
  }

  protected CssColor() {}

  /**
   * Returns the value of the CssColor, as a String.
   *
   * @return the value of the color, as a String.
   */
  @JsOverlay
  public final String value() {
    return cast();
  }
}

