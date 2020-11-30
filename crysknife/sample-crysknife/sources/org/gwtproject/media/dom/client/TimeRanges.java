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
package org.gwtproject.media.dom.client;

import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 * Representing a time range returned from a {@link org.gwtproject.dom.client.MediaElement
 * MediaElement}.
 *
 * <p><span style="color:red">Experimental API: This API is still under development and is subject
 * to change. </span>
 *
 * @see org.gwtproject.dom.client.MediaElement#getBuffered()
 * @see org.gwtproject.dom.client.MediaElement#getPlayed()
 * @see org.gwtproject.dom.client.MediaElement#getSeekable()
 */
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public final class TimeRanges {

  private TimeRanges() {}

  /**
   * Returns the end time of the range indexed by {@code index}.
   *
   * @param index the range index, between 0 (inclusive) and {@link #length()} (exclusive)
   * @return a double indicating the end time in seconds
   * @see #start(int)
   */
  public native double end(int index);

  /**
   * Returns the number of distinct ranges contained in this object.
   *
   * @return an integer number of ranges
   */
  @JsProperty(name = "length")
  public native int length();

  /**
   * Returns the start time of the range indexed by {@code index}.
   *
   * @param index the range index, between 0 (inclusive) and {@link #length()} (exclusive)
   * @return a double indicating the start time in seconds
   * @see #end(int)
   */
  public native double start(int index);
}

