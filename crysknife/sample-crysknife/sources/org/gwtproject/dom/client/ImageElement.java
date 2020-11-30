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
import jsinterop.base.Js;
import org.gwtproject.core.client.JavaScriptObject;

/**
 * Embedded image.
 *
 * @see <a href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/objects.html#edef-IMG">W3C
 *     HTML Specification</a>
 */
@JsType(isNative = true, name = "Object", namespace = JsPackage.GLOBAL)
@TagName(ImageElement.TAG)
public class ImageElement extends Element {

  @JsOverlay public static final String TAG = "img";

  /**
   * Assert that the given {@link Element} is compatible with this class and automatically typecast
   * it.
   *
   * @param elem the element to assert is an instance of this type
   * @return the element, cast to this type
   */
  @JsOverlay
  public static ImageElement as(Element elem) {
    assert is(elem);
    return (ImageElement) elem;
  }

  /**
   * Determines whether the given {@link JavaScriptObject} can be cast to this class. A <code>null
   * </code> object will cause this method to return <code>false</code>.
   *
   * @param o the object to check if it is an instance of this type
   * @return true of the object is an instance of this type, false otherwise
   */
  @JsOverlay
  public static boolean is(JavaScriptObject o) {
    if (Element.is(o)) {
      return is((Element) o);
    }
    return false;
  }

  /**
   * Determine whether the given {@link Node} can be cast to this class. A <code>null</code> node
   * will cause this method to return <code>false</code>.
   *
   * @param node the node to check if it is an instance of this type
   * @return true if the node is an instance of this type, false otherwise
   */
  @JsOverlay
  public static boolean is(Node node) {
    if (Element.is(node)) {
      return is((Element) node);
    }
    return false;
  }

  /**
   * Determine whether the given {@link Element} can be cast to this class. A <code>null</code> node
   * will cause this method to return <code>false</code>.
   *
   * @param elem the element to check if it is an instance of this type
   * @return true if the element is an instance of this type, false otherwise
   */
  @JsOverlay
  public static boolean is(Element elem) {
    return elem != null && elem.hasTagName(TAG);
  }

  protected ImageElement() {}

  /**
   * Alternate text for user agents not rendering the normal content of this element.
   *
   * @see <a href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/objects.html#adef-alt">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native String getAlt();

  /**
   * Height of the image in pixels.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/objects.html#adef-height-IMG">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native int getHeight();

  /**
   * URI designating the source of this image.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/objects.html#adef-src-IMG">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native String getSrc();

  /**
   * The width of the image in pixels.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/objects.html#adef-width-IMG">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native int getWidth();

  /**
   * Use server-side image map.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/objects.html#adef-ismap">W3C
   *     HTML Specification</a>
   */
  @JsOverlay
  public final boolean isMap() {
    return Js.isTruthy(this.isMap);
  }

  @JsProperty private boolean isMap;

  /**
   * Alternate text for user agents not rendering the normal content of this element.
   *
   * @see <a href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/objects.html#adef-alt">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setAlt(String alt);

  /**
   * Height of the image in pixels.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/objects.html#adef-height-IMG">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setHeight(int height);

  /**
   * Use server-side image map.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/objects.html#adef-ismap">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setIsMap(boolean isMap);

  /**
   * URI designating the source of this image.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/objects.html#adef-src-IMG">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setSrc(String src);

  /**
   * Use client-side image map.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/objects.html#adef-usemap">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setUseMap(boolean useMap);

  /**
   * The width of the image in pixels.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/objects.html#adef-width-IMG">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setWidth(int width);

  /**
   * Use client-side image map.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/objects.html#adef-usemap">W3C
   *     HTML Specification</a>
   */
  @JsOverlay
  public final boolean useMap() {
    return Js.isTruthy(this.useMap);
  }

  @JsProperty(name = "useMap")
  private boolean useMap;
}

