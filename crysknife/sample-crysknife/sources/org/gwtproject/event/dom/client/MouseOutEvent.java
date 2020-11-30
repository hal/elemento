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

import org.gwtproject.dom.client.BrowserEvents;
import org.gwtproject.dom.client.EventTarget;

/** Represents a native mouse out event. */
public class MouseOutEvent extends MouseEvent<MouseOutHandler> {

  /** Event type for mouse out events. Represents the meta-data associated with this event. */
  private static final Type<MouseOutHandler> TYPE =
      new Type<>(BrowserEvents.MOUSEOUT, new MouseOutEvent());

  /**
   * Protected constructor, use {@link
   * DomEvent#fireNativeEvent(org.gwtproject.dom.client.NativeEvent,
   * org.gwtproject.event.shared.HasHandlers)} to fire mouse out events.
   */
  protected MouseOutEvent() {}

  /**
   * Gets the event type associated with mouse out events.
   *
   * @return the handler type
   */
  public static Type<MouseOutHandler> getType() {
    return TYPE;
  }

  @Override
  public final Type<MouseOutHandler> getAssociatedType() {
    return TYPE;
  }

  /**
   * Gets the target to which the mouse pointer was moved.
   *
   * @return the target to which the mouse pointer was moved
   */
  public EventTarget getRelatedTarget() {
    return getNativeEvent().getRelatedEventTarget();
  }

  @Override
  protected void dispatch(MouseOutHandler handler) {
    handler.onMouseOut(this);
  }
}

