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

/** Represents a native key down event. */
public class KeyDownEvent extends KeyCodeEvent<KeyDownHandler> {

  /** Event type for key down events. Represents the meta-data associated with this event. */
  private static final Type<KeyDownHandler> TYPE =
      new Type<>(BrowserEvents.KEYDOWN, new KeyDownEvent());

  /**
   * Protected constructor, use {@link
   * DomEvent#fireNativeEvent(org.gwtproject.dom.client.NativeEvent,
   * org.gwtproject.event.shared.HasHandlers)} to fire key down events.
   */
  protected KeyDownEvent() {}

  /**
   * Gets the event type associated with key down events.
   *
   * @return the handler type
   */
  public static Type<KeyDownHandler> getType() {
    return TYPE;
  }

  @Override
  public final Type<KeyDownHandler> getAssociatedType() {
    return TYPE;
  }

  @Override
  protected void dispatch(KeyDownHandler handler) {
    handler.onKeyDown(this);
  }
}

