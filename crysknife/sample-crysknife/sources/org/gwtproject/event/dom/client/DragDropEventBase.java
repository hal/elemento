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

import org.gwtproject.dom.client.DataTransfer;
import org.gwtproject.dom.client.PartialSupport;
import org.gwtproject.event.legacy.shared.EventHandler;

/**
 * Base class for drag and drop events.
 *
 * @param <H> handler type
 */
@PartialSupport
public abstract class DragDropEventBase<H extends EventHandler> extends DomEvent<H> {

  /**
   * Runtime check for whether drag events are supported in this browser.
   *
   * @return true if supported, false if not
   */
  public static boolean isSupported() {
    // all supported brwoser have drag support!
    return true;
  }

  /**
   * Get the data for the specified format from the {@link DataTransfer} object.
   *
   * @param format the format
   * @return the data for the specified format
   */
  public String getData(String format) {
    DataTransfer dt = getDataTransfer();
    return getDataTransfer().getData(format);
  }

  /**
   * Get the {@link DataTransfer} associated with the current drag event.
   *
   * @return the {@link DataTransfer} object
   */
  public DataTransfer getDataTransfer() {
    return getNativeEvent().getDataTransfer();
  }

  /**
   * Set the data in the {@link DataTransfer} object for the specified format.
   *
   * @param format the format
   * @param data the data to associate with the format
   */
  public void setData(String format, String data) {
    getDataTransfer().setData(format, data);
  }
}

