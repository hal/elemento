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
import org.gwtproject.core.client.JavaScriptObject;

/**
 * Client-side image map area definition.
 *
 * @see <a href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/objects.html#edef-AREA">W3C
 *     HTML Specification</a>
 */
@JsType(isNative = true, name = "Object", namespace = JsPackage.GLOBAL)
@TagName(AreaElement.TAG)
public class AreaElement extends Element {

  @JsOverlay public static final String TAG = "area";

  /**
   * Assert that the given {@link Element} is compatible with this class and automatically typecast
   * it.
   *
   * @param elem the element to assert is an instance of this type
   * @return the element, cast to this type
   */
  @JsOverlay
  public static AreaElement as(Element elem) {
    assert is(elem);
    return (AreaElement) elem;
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

  protected AreaElement() {}

  /**
   * A single character access key to give access to the form control.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-accesskey">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native String getAccessKey();

  /**
   * Alternate text for user agents not rendering the normal content of this element.
   *
   * @see <a href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/objects.html#adef-alt">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native String getAlt();

  /**
   * Comma-separated list of lengths, defining an active region geometry. See also shape for the
   * shape of the region.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/objects.html#adef-coords">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native String getCoords();

  /**
   * The URI of the linked resource.
   *
   * @see <a href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/links.html#adef-href">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native String getHref();

  /**
   * The shape of the active area. The coordinates are given by coords.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/objects.html#adef-shape">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native String getShape();

  /**
   * Frame to render the resource in.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/present/frames.html#adef-target">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native String getTarget();

  /**
   * A single character access key to give access to the form control.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-accesskey">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setAccessKey(String accessKey);

  /**
   * Alternate text for user agents not rendering the normal content of this element.
   *
   * @see <a href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/objects.html#adef-alt">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setAlt(String alt);

  /**
   * Comma-separated list of lengths, defining an active region geometry. See also shape for the
   * shape of the region.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/objects.html#adef-coords">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setCoords(String coords);

  /**
   * The URI of the linked resource.
   *
   * @see <a href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/links.html#adef-href">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setHref(String href);

  /**
   * The shape of the active area. The coordinates are given by coords.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/objects.html#adef-shape">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setShape(String shape);

  /**
   * Frame to render the resource in.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/present/frames.html#adef-target">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setTarget(String target);
}

