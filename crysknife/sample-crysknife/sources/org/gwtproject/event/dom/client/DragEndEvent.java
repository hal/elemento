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

/** Represents a native drag end event. */
public class DragEndEvent extends DragDropEventBase<DragEndHandler> {

  /** Event type for drag end events. Represents the meta-data associated with this event. */
  private static final Type<DragEndHandler> TYPE =
      new Type<>(BrowserEvents.DRAGEND, new DragEndEvent());

  /**
   * Protected constructor, use {@link
   * DomEvent#fireNativeEvent(org.gwtproject.dom.client.NativeEvent,
   * org.gwtproject.event.shared.HasHandlers)} or {@link
   * DomEvent#fireNativeEvent(org.gwtproject.dom.client.NativeEvent,
   * org.gwtproject.event.shared.HasHandlers, org.gwtproject.dom.client.Element)} to fire drag end
   * events.
   */
  protected DragEndEvent() {}

  /**
   * Gets the event type associated with drag end events.
   *
   * @return the handler type
   */
  public static Type<DragEndHandler> getType() {
    return TYPE;
  }

  @Override
  public final Type<DragEndHandler> getAssociatedType() {
    return TYPE;
  }

  @Override
  protected void dispatch(DragEndHandler handler) {
    handler.onDragEnd(this);
  }
}

