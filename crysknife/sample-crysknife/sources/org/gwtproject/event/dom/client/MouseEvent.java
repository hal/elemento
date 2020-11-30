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
package org.gwtproject.event.dom.client;

import org.gwtproject.dom.client.Element;
import org.gwtproject.dom.client.NativeEvent;
import org.gwtproject.event.legacy.shared.EventHandler;

/**
 * Abstract class representing mouse events.
 *
 * @param <H> handler type
 */
public abstract class MouseEvent<H extends EventHandler> extends HumanInputEvent<H> {

  /**
   * Gets the button value. Compare it to {@link NativeEvent#BUTTON_LEFT}, {@link
   * NativeEvent#BUTTON_RIGHT}, {@link NativeEvent#BUTTON_MIDDLE}
   *
   * <p>Note: this is unreliable for events not caused by the depression or release of a mouse
   * button.
   *
   * @return the button value
   */
  public int getNativeButton() {
    return getNativeEvent().getButton();
  }

  /**
   * Gets the mouse x-position on the user's display.
   *
   * @return the mouse x-position
   */
  public int getScreenX() {
    return getNativeEvent().getScreenX();
  }

  /**
   * Gets the mouse y-position on the user's display.
   *
   * @return the mouse y-position
   */
  public int getScreenY() {
    return getNativeEvent().getScreenY();
  }

  /**
   * Gets the mouse x-position relative to the event's current target element.
   *
   * @return the relative x-position
   */
  public int getX() {
    Element relativeElem = getRelativeElement();
    if (relativeElem != null) {
      return getRelativeX(relativeElem);
    }
    return getClientX();
  }

  /**
   * Gets the mouse x-position relative to a given element.
   *
   * @param target the element whose coordinate system is to be used
   * @return the relative x-position
   */
  public int getRelativeX(Element target) {
    NativeEvent e = getNativeEvent();
    return e.getClientX()
        - target.getAbsoluteLeft()
        + target.getScrollLeft()
        + target.getOwnerDocument().getScrollLeft();
  }

  /**
   * Gets the mouse x-position within the browser window's client area.
   *
   * @return the mouse x-position
   */
  public int getClientX() {
    return getNativeEvent().getClientX();
  }

  /**
   * Gets the mouse y-position relative to the event's current target element.
   *
   * @return the relative y-position
   */
  public int getY() {
    Element relativeElem = getRelativeElement();
    if (relativeElem != null) {
      return getRelativeY(relativeElem);
    }
    return getClientY();
  }

  /**
   * Gets the mouse y-position relative to a given element.
   *
   * @param target the element whose coordinate system is to be used
   * @return the relative y-position
   */
  public int getRelativeY(Element target) {
    NativeEvent e = getNativeEvent();
    return e.getClientY()
        - target.getAbsoluteTop()
        + target.getScrollTop()
        + target.getOwnerDocument().getScrollTop();
  }

  /**
   * Gets the mouse y-position within the browser window's client area.
   *
   * @return the mouse y-position
   */
  public int getClientY() {
    return getNativeEvent().getClientY();
  }
}

