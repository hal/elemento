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
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

/**
 * Video element.
 *
 * <p><span style="color:red">Experimental API: This API is still under development and is subject
 * to change. </span>
 *
 * @see <a href="http://www.w3.org/TR/html5/video.html#video">W3C HTML 5 Specification</a>
 */
@JsType(isNative = true, name = "Object", namespace = JsPackage.GLOBAL)
@TagName(VideoElement.TAG)
public class VideoElement extends MediaElement {

  /** The tag for this element. */
  @JsOverlay public static final String TAG = "video";

  /** The audio type of MP4 encoded video. */
  @JsOverlay public static final String TYPE_MP4 = "video/mp4";

  /** The audio type of Ogg encoded video. */
  @JsOverlay public static final String TYPE_OGG = "video/ogg";

  /** The audio type of WebM encoded audio. */
  @JsOverlay public static final String TYPE_WEBM = "video/webm";

  protected VideoElement() {}

  /**
   * Gets the height of the element.
   *
   * @return the height, in pixels
   * @see #setHeight(int)
   */
  @JsProperty
  public final native int getHeight();

  /**
   * Returns a poster URL.
   *
   * @return a URL containing a poster image
   * @see #setPoster(String)
   */
  @JsProperty
  public final native String getPoster();

  /**
   * Gets the intrinsic height of video within the element.
   *
   * @return the height, in pixels
   * @see #setHeight(int)
   */
  @JsProperty
  public final native int getVideoHeight();

  /**
   * Gets the instrinsic width of the video within the element.
   *
   * @return the width, in pixels
   * @see #setWidth(int)
   */
  @JsProperty
  public final native int getVideoWidth();

  /**
   * Gets the width of the element.
   *
   * @return the width, in pixels
   * @see #setWidth(int)
   */
  @JsProperty
  public final native int getWidth();

  /**
   * Sets the height of the element.
   *
   * @param height the height, in pixels
   * @see #getHeight()
   */
  @JsProperty
  public final native void setHeight(int height);

  /**
   * Sets the poster URL.
   *
   * @param url the poster image URL
   * @see #getPoster
   */
  @JsProperty
  public final native void setPoster(String url);

  /**
   * Sets the width of the element.
   *
   * @param width the width, in pixels
   * @see #getWidth()
   */
  @JsProperty
  public final native void setWidth(int width);
}

