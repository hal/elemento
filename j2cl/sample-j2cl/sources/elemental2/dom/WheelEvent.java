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

import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class WheelEvent extends MouseEvent {
  @JsOverlay public static final int DOM_DELTA_LINE = WheelEvent__Constants.DOM_DELTA_LINE;
  @JsOverlay public static final int DOM_DELTA_PAGE = WheelEvent__Constants.DOM_DELTA_PAGE;
  @JsOverlay public static final int DOM_DELTA_PIXEL = WheelEvent__Constants.DOM_DELTA_PIXEL;
  public int deltaMode;
  public double deltaX;
  public double deltaY;
  public double deltaZ;

  public WheelEvent(String type, WheelEventInit eventInitDict) {
    // This super call is here only for the code to compile; it is never executed.
    super((String) null, (MouseEventInit) null);
  }

  public WheelEvent(String type) {
    // This super call is here only for the code to compile; it is never executed.
    super((String) null, (MouseEventInit) null);
  }
}

