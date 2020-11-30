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
/*
 * Copyright 2018 The GWT Project Authors.
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

import org.gwtproject.dom.client.BrowserEvents;

/**
 * Represents a native loadedmetadata event.
 *
 * <p><span style="color:red">Experimental API: This API is still under development and is subject
 * to change. </span>
 */
public class LoadedMetadataEvent extends DomEvent<LoadedMetadataHandler> {

  /**
   * Event type for media loadedmetadata events. Represents the meta-data associated with this
   * event.
   */
  private static final Type<LoadedMetadataHandler> TYPE =
      new Type<>(BrowserEvents.LOADEDMETADATA, new LoadedMetadataEvent());

  /**
   * Protected constructor, use {@link
   * DomEvent#fireNativeEvent(org.gwtproject.dom.client.NativeEvent,
   * org.gwtproject.event.shared.HasHandlers)} to fire media loadedmetadata events.
   */
  protected LoadedMetadataEvent() {}

  /**
   * Gets the event type associated with media loadedmetadata events.
   *
   * @return the handler type
   */
  public static Type<LoadedMetadataHandler> getType() {
    return TYPE;
  }

  @Override
  public final Type<LoadedMetadataHandler> getAssociatedType() {
    return TYPE;
  }

  @Override
  protected void dispatch(LoadedMetadataHandler handler) {
    handler.onLoadedMetadata(this);
  }
}

