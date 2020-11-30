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

/** Represents a native double click event. */
public class DoubleClickEvent extends MouseEvent<DoubleClickHandler> {

  /** Event type for double click events. Represents the meta-data associated with this event. */
  private static final Type<DoubleClickHandler> TYPE =
      new Type<>(BrowserEvents.DBLCLICK, new DoubleClickEvent());

  /**
   * Protected constructor, use {@link
   * DomEvent#fireNativeEvent(org.gwtproject.dom.client.NativeEvent,
   * org.gwtproject.event.shared.HasHandlers)} to fire double click events.
   */
  protected DoubleClickEvent() {}

  /**
   * Gets the event type associated with double click events.
   *
   * @return the handler type
   */
  public static Type<DoubleClickHandler> getType() {
    return TYPE;
  }

  @Override
  public final Type<DoubleClickHandler> getAssociatedType() {
    return TYPE;
  }

  @Override
  protected void dispatch(DoubleClickHandler handler) {
    handler.onDoubleClick(this);
  }
}

