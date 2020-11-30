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
 * Indicating the type of error encountered by a {@link org.gwtproject.dom.client.MediaElement
 * MediaElement}.
 *
 * <p><span style="color:red">Experimental API: This API is still under development and is subject
 * to change. </span>
 *
 * @see org.gwtproject.dom.client.MediaElement#getError()
 */
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public final class MediaError {

  /**
   * A constant returned by {@link #getCode} indicating that playback was aborted at the user's
   * request.
   */
  public static int MEDIA_ERR_ABORTED;

  /**
   * A constant returned by {@link #getCode} indicating that playback was aborted due to a network
   * error.
   */
  public static int MEDIA_ERR_NETWORK;

  /**
   * A constant returned by {@link #getCode} indicating that playback was aborted due to an error in
   * decoding.
   */
  public static int MEDIA_ERR_DECODE;

  /**
   * A constant returned by {@link #getCode} indicating that the format of the source stream was
   * unsuitable for playback.
   */
  public static int MEDIA_ERR_SRC_NOT_SUPPORTED;

  private MediaError() {}

  /**
   * Returns an error code indicating the reason for the error.
   *
   * @return one of {@link MediaError#MEDIA_ERR_ABORTED}, {@link MediaError#MEDIA_ERR_NETWORK},
   *     {@link MediaError#MEDIA_ERR_DECODE}, or {@link MediaError#MEDIA_ERR_SRC_NOT_SUPPORTED}
   */
  @JsProperty
  public native int getCode();
}

