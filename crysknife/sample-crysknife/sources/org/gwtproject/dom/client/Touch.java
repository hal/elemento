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
package org.gwtproject.dom.client;

import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import org.gwtproject.core.client.JavaScriptObject;

/**
 * Class representing touches.
 *
 * <p>See <a
 * href="http://developer.apple.com/library/safari/#documentation/UserExperience/Reference/TouchClassReference/Touch/Touch.html">Safari
 * Touch Documentation</a>
 */
@JsType(isNative = true, name = "Object", namespace = JsPackage.GLOBAL)
public class Touch extends JavaScriptObject {

  protected Touch() {}

  /**
   * Gets the touch x-position within the browser window's client area.
   *
   * @return the touch x-position
   */
  @JsOverlay
  public final int getClientX() {
    return Js.coerceToInt(Js.<elemental2.dom.Touch>uncheckedCast(this).clientX);
  }

  /**
   * Gets the touch y-position within the browser window's client area.
   *
   * @return the touch y-position
   */
  @JsOverlay
  public final int getClientY() {
    return Js.coerceToInt(Js.<elemental2.dom.Touch>uncheckedCast(this).clientY);
  }

  /**
   * Gets a unique identifier for this touch.
   *
   * @return the unique identifier for this touch
   */
  @JsOverlay
  public final int getIdentifier() {
    return Js.<elemental2.dom.Touch>uncheckedCast(this).identifier;
  }

  /**
   * Gets the touch x-position within the browser document.
   *
   * @return the touch x-position
   */
  @JsOverlay
  public final int getPageX() {
    return Js.coerceToInt(Js.<elemental2.dom.Touch>uncheckedCast(this).pageX);
  }

  /**
   * Gets the touch y-position within the browser document.
   *
   * @return the touch y-position
   */
  @JsOverlay
  public final int getPageY() {
    return Js.coerceToInt(Js.<elemental2.dom.Touch>uncheckedCast(this).pageY);
  }

  /**
   * Gets the touch x-position relative to a given element.
   *
   * @param target the element whose coordinate system is to be used
   * @return the relative x-position
   */
  @JsOverlay
  public final int getRelativeX(Element target) {
    return getClientX()
        - target.getAbsoluteLeft()
        + target.getScrollLeft()
        + target.getOwnerDocument().getScrollLeft();
  }

  /**
   * Gets the touch y-position relative to a given element.
   *
   * @param target the element whose coordinate system is to be used
   * @return the relative y-position
   */
  @JsOverlay
  public final int getRelativeY(Element target) {
    return getClientY()
        - target.getAbsoluteTop()
        + target.getScrollTop()
        + target.getOwnerDocument().getScrollTop();
  }

  /**
   * Gets the touch x-position on the user's display.
   *
   * @return the touch x-position
   */
  @JsOverlay
  public final int getScreenX() {
    return Js.coerceToInt(Js.<elemental2.dom.Touch>uncheckedCast(this).screenX);
  }

  /**
   * Gets the touch y-position on the user's display.
   *
   * @return the touch y-position
   */
  @JsOverlay
  public final int getScreenY() {
    return Js.coerceToInt(Js.<elemental2.dom.Touch>uncheckedCast(this).screenY);
  }

  /**
   * Gets the target element for the current touch.
   *
   * @return the target element
   */
  @JsOverlay
  public final EventTarget getTarget() {
    return Js.uncheckedCast(Js.<elemental2.dom.Touch>uncheckedCast(this).target);
  }
}

