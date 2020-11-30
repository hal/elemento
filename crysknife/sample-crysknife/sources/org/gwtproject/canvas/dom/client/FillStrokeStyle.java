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
import org.gwtproject.core.client.JavaScriptObject;

/**
 * Represents a {@link CssColor}, {@link CanvasGradient}, or {@link CanvasPattern} that is used for
 * stroke and fill.
 */
@JsType(isNative = true, name = "Object", namespace = JsPackage.GLOBAL)
public class FillStrokeStyle extends JavaScriptObject {

  /** Constant for CssColor style. */
  @JsOverlay public static final int TYPE_CSSCOLOR = 0;

  /** Constant for Gradient style. */
  @JsOverlay public static final int TYPE_GRADIENT = 1;

  /** Constant for Pattern style. */
  @JsOverlay public static final int TYPE_PATTERN = 2;

  protected FillStrokeStyle() {}

  /**
   * Returns the type of this FillStrokeStyle as an integer.
   *
   * @return The type of the object.
   */
  @JsOverlay
  public final int getType() {
    // Unwrap the color to check its type when in dev mode (when isScript == false)
    if (Js.typeof(this).equals("string")) {
      return TYPE_CSSCOLOR;
    } else if (this instanceof CanvasGradient) {
      return TYPE_GRADIENT;
    } else {
      assert this instanceof CanvasPattern : "Expected pattern, unknown type " + this.toString();
      return TYPE_PATTERN;
    }
  }
}

