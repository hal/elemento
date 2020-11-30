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
package org.gwtproject.canvas.dom.client;

import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import org.gwtproject.core.client.JavaScriptObject;

/**
 * Object that holds image data and a size.
 *
 * @see <a href="http://www.w3.org/TR/2dcontext/#imagedata">HTML Canvas 2D ImageData</a>
 */
@JsType(isNative = true, name = "Object", namespace = JsPackage.GLOBAL)
public class ImageData extends JavaScriptObject {

  /**
   * Number of colors at each location in the array.
   *
   * <p>Because image data is stored as RGBA, this is 4.
   */
  @JsOverlay private static final int NUM_COLORS = 4;

  /** Offsets for each color use RGBA ordering. */
  @JsOverlay private static final int OFFSET_RED = 0;

  @JsOverlay private static final int OFFSET_GREEN = 1;
  @JsOverlay private static final int OFFSET_BLUE = 2;
  @JsOverlay private static final int OFFSET_ALPHA = 3;

  protected ImageData() {}

  /**
   * Returns the alpha value at position (x,y).
   *
   * @param x the x coordinate
   * @param y the y coordinate
   * @return the alpha value at position (x,y), or 0 if not in the image
   * @see #setAlphaAt(int, int, int)
   * @see #getColorAt(int, int, int)
   */
  @JsOverlay
  public final int getAlphaAt(int x, int y) {
    return getColorAt(x, y, OFFSET_ALPHA);
  }

  /**
   * Returns the blue value at position (x,y).
   *
   * @param x the x coordinate
   * @param y the y coordinate
   * @return the blue value at position (x,y), or 0 if not in the image
   * @see #setBlueAt(int, int, int)
   * @see #getColorAt(int, int, int)
   */
  @JsOverlay
  public final int getBlueAt(int x, int y) {
    return getColorAt(x, y, OFFSET_BLUE);
  }

  /**
   * Returns a canvas pixel array of size width * height * 4.
   *
   * @return a {@link CanvasPixelArray} object
   */
  @JsProperty
  public final native CanvasPixelArray getData();

  /**
   * Returns the green value at position (x,y).
   *
   * @param x the x coordinate
   * @param y the y coordinate
   * @return the green value at position (x,y), or 0 if not in the image
   * @see #setGreenAt(int, int, int)
   * @see #getColorAt(int, int, int)
   */
  @JsOverlay
  public final int getGreenAt(int x, int y) {
    return getColorAt(x, y, OFFSET_GREEN);
  }

  /**
   * Returns the height of this image data object.
   *
   * @return the image height as an int
   */
  @JsProperty
  public final native int getHeight();

  /**
   * Returns the red value at position (x,y).
   *
   * @param x the x coordinate
   * @param y the y coordinate
   * @return the red value at position (x,y), or 0 if not in the image
   * @see #setRedAt(int, int, int)
   * @see #getColorAt(int, int, int)
   */
  @JsOverlay
  public final int getRedAt(int x, int y) {
    return getColorAt(x, y, OFFSET_RED);
  }

  /**
   * Returns the width of this image data object.
   *
   * @return the image width as an int
   */
  @JsProperty
  public final native int getWidth();

  /**
   * Sets the alpha value at position (x,y).
   *
   * @param alpha the alpha value
   * @param x the x coordinate
   * @param y the y coordinate
   * @see #getAlphaAt(int, int)
   * @see #getColorAt(int, int, int)
   */
  @JsOverlay
  public final void setAlphaAt(int alpha, int x, int y) {
    setColorAt(alpha, x, y, OFFSET_ALPHA);
  }

  /**
   * Sets the blue value at position (x,y).
   *
   * @param blue the blue value
   * @param x the x coordinate
   * @param y the y coordinate
   * @see #getBlueAt(int, int)
   * @see #getColorAt(int, int, int)
   */
  @JsOverlay
  public final void setBlueAt(int blue, int x, int y) {
    setColorAt(blue, x, y, OFFSET_BLUE);
  }

  /**
   * Sets the green value at position (x,y).
   *
   * @param green the green value
   * @param x the x coordinate
   * @param y the y coordinate
   * @see #getGreenAt(int, int)
   * @see #getColorAt(int, int, int)
   */
  @JsOverlay
  public final void setGreenAt(int green, int x, int y) {
    setColorAt(green, x, y, OFFSET_GREEN);
  }

  /**
   * Sets the red value at position (x,y).
   *
   * @param red the red value
   * @param x the x coordinate
   * @param y the y coordinate
   * @see #getRedAt(int, int)
   * @see #getColorAt(int, int, int)
   */
  @JsOverlay
  public final void setRedAt(int red, int x, int y) {
    setColorAt(red, x, y, OFFSET_RED);
  }

  /**
   * Returns the color value at position (x,y) with the specified offset.
   *
   * <p>Colors are stored in RGBA format, where the offset determines the color channel (R, G, B, or
   * A). The values are stored in row-major order. If the specified location is not in the image, 0
   * is returned.
   *
   * @param x the x coordinate
   * @param y the y coordinate
   * @param offset the color offset
   * @return the color value at position (x,y), or 0 if not in the image
   * @see #setColorAt(int, int, int, int)
   */
  @JsOverlay
  private int getColorAt(int x, int y, int offset) {
    int index = NUM_COLORS * (x + y * getWidth()) + offset;
    if (index < 0 || index >= getData().getLength()) {
      return 0;
    }
    return getData().get(index);
  }

  /**
   * Sets the color value at position (x,y) with the specified offset.
   *
   * <p>Colors are stored in RGBA format, where the offset determines the color (R, G, B, or A.) The
   * values are stored in row-major order.
   *
   * @param color the color (in the range 0...255)
   * @param x the x coordinate
   * @param y the y coordinate
   * @param offset the color offset
   * @see #getColorAt(int, int, int)
   */
  @JsOverlay
  private void setColorAt(int color, int x, int y, int offset) {
    int index = NUM_COLORS * (x + y * getWidth()) + offset;
    getData().set(index, color);
  }
}

