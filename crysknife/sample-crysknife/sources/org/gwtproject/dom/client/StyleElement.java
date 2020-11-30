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

import elemental2.dom.HTMLStyleElement;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import org.gwtproject.core.client.JavaScriptObject;

/**
 * Style information.
 *
 * @see <a href="http://www.w3.org/TR/1999/REC-html401-19991224/present/styles.html#edef-STYLE">W3C
 *     HTML Specification</a>
 * @see <a href="http://www.w3.org/TR/DOM-Level-2-HTML/references.html#DOMStyle">W3C HTML
 *     Specification</a>
 * @see <a href="http://www.w3.org/TR/DOM-Level-2-HTML/references.html#DOMStyle-inf">W3C HTML
 *     Specification</a>
 */
@JsType(isNative = true, name = "Object", namespace = JsPackage.GLOBAL)
@TagName(StyleElement.TAG)
public class StyleElement extends Element {

  @JsOverlay public static final String TAG = "style";

  /**
   * Assert that the given {@link Element} is compatible with this class and automatically typecast
   * it.
   *
   * @param elem the element to assert is an instance of this type
   * @return the element, cast to this type
   */
  @JsOverlay
  public static StyleElement as(Element elem) {
    assert is(elem);
    return (StyleElement) elem;
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

  protected StyleElement() {}

  /** The CSS text. */
  @JsProperty
  public final native String getCssText();

  /**
   * Designed for use with one or more target media.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/present/styles.html#adef-media">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native String getMedia();

  /**
   * The content type of the style sheet language.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/present/styles.html#adef-type-STYLE">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native String getType();

  /** Enables/disables the style sheet. */
  @JsOverlay
  public final boolean isDisabled() {
    return Js.isTruthy(Js.<HTMLStyleElement>uncheckedCast(this).disabled);
  }

  /** Sets the CSS text. */
  @JsProperty
  public final native void setCssText(String cssText);

  /** Enables/disables the style sheet. */
  @JsProperty
  public final native void setDisabled(boolean disabled);

  /**
   * Designed for use with one or more target media.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/present/styles.html#adef-media">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setMedia(String media);

  /**
   * The content type of the style sheet language.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/present/styles.html#adef-type-STYLE">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setType(String type);
}

